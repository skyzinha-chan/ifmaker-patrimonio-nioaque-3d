// src/pages/PlanoDetalhe.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";
import { db } from "../services/firebase";

import { planosDeAula } from "../data/planos";
import { rubricas } from "../data/rubricas";
import { getArtefatosPorPlano, isRecursoDoKitMaker } from "../data/materiaisKit";
import { readStorage, writeStorage } from "../utils/storage";
import ComentariosPedagogicos from "../components/ComentariosPedagogicos"; //TESTANDO COMENTARIOS DE USUARIOS

// Função auxiliar de cores da BNCC
const getCorDoEixo = (eixo) => {
  const eixoNormalizado = eixo?.toUpperCase() || "";
  if (eixoNormalizado.includes("PENSAMENTO COMPUTACIONAL"))
    return "bg-amber-600 border-amber-200 text-white";
  if (eixoNormalizado.includes("MUNDO DIGITAL"))
    return "bg-blue-600 border-blue-200 text-white";
  if (eixoNormalizado.includes("CULTURA DIGITAL"))
    return "bg-green-600 border-green-200 text-white";
  if (eixoNormalizado.includes("CULTURA MAKER"))
    return "bg-indigo-600 border-indigo-200 text-white";
  return "bg-gray-600 border-gray-200 text-white";
};

export default function PlanoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState("geral");

  // Encontra o índice atual e o objeto correspondente no array total de planos
  const currentIndex = planosDeAula.findIndex((p) => p.id === id);
  const plano = planosDeAula[currentIndex];

  const [avisoPdf, setAvisoPdf] = useState(null);
  const [verificandoPdf, setVerificandoPdf] = useState(false);

  const [metricas, setMetricas] = useState({ visualizacoes: 0, downloads: 0 });
  const [favoritos, setFavoritos] = useState([]);
  const [materiaisDisponiveis, setMateriaisDisponiveis] = useState([]);
  const [etapasPreparacao, setEtapasPreparacao] = useState([]);
  const [aplicadoEmSala, setAplicadoEmSala] = useState(false);
  const [mensagemCompartilhamento, setMensagemCompartilhamento] = useState("");

  useEffect(() => {
    if (!plano) return;

    // Registra +1 visualização assim que o componente monta
    const registrarVisualizacao = async () => {
      const metricaRef = doc(db, "metricas_planos", plano.id);
      try {
        await setDoc(
          metricaRef,
          { visualizacoes: increment(1) },
          { merge: true },
        );
        const docSnap = await getDoc(metricaRef);
        if (docSnap.exists()) {
          setMetricas(docSnap.data());
        }
      } catch (error) {
        console.error("Erro ao registrar métrica de view:", error);
      }
    };

    registrarVisualizacao();
  }, [plano]);

  useEffect(() => {
    if (!plano?.id) return;

    setFavoritos(readStorage("ifmaker-favoritos", []));
    setMateriaisDisponiveis(
      readStorage(`ifmaker-checklist:${plano.id}`, []),
    );
    setEtapasPreparacao(
      readStorage(`ifmaker-prep-etapas:${plano.id}`, []),
    );

    // Suporta tanto o boolean individual quanto a lista consolidada
    const aplicadosGeral = readStorage("ifmaker-aplicados", []);
    const aplicadoIndividual = readStorage(`ifmaker-aplicado:${plano.id}`, false);
    setAplicadoEmSala(aplicadoIndividual || aplicadosGeral.includes(plano.id));
  }, [plano?.id]);

  const alternarFavorito = () => {
    setFavoritos((atuais) => {
      const atualizados = atuais.includes(plano.id)
        ? atuais.filter((idFavorito) => idFavorito !== plano.id)
        : [...atuais, plano.id];
      writeStorage("ifmaker-favoritos", atualizados);
      return atualizados;
    });
  };

  const alternarMaterial = (material) => {
    setMateriaisDisponiveis((atuais) => {
      const atualizados = atuais.includes(material)
        ? atuais.filter((item) => item !== material)
        : [...atuais, material];
      writeStorage(`ifmaker-checklist:${plano.id}`, atualizados);
      return atualizados;
    });
  };

  const alternarEtapaPreparacao = (etapaId) => {
    setEtapasPreparacao((atuais) => {
      const atualizados = atuais.includes(etapaId)
        ? atuais.filter((id) => id !== etapaId)
        : [...atuais, etapaId];
      writeStorage(`ifmaker-prep-etapas:${plano.id}`, atualizados);
      return atualizados;
    });
  };

  const alternarAplicadoEmSala = () => {
    setAplicadoEmSala((atual) => {
      const novoStatus = !atual;
      writeStorage(`ifmaker-aplicado:${plano.id}`, novoStatus);

      // Sincroniza também a lista consolidada para o Catálogo filtrar imediatamente
      const aplicadosGeral = readStorage("ifmaker-aplicados", []);
      const novosAplicados = novoStatus
        ? Array.from(new Set([...aplicadosGeral, plano.id]))
        : aplicadosGeral.filter((id) => id !== plano.id);
      writeStorage("ifmaker-aplicados", novosAplicados);

      return novoStatus;
    });
  };

  const compartilharPlano = async () => {
    const dadosCompartilhamento = {
      title: plano.titulo,
      text: `Plano de aula: ${plano.titulo}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(dadosCompartilhamento);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setMensagemCompartilhamento(
          "Link copiado para a área de transferência.",
        );
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setMensagemCompartilhamento(
          "Não foi possível compartilhar este plano.",
        );
      }
    }
  };

  // Intercepta e valida se o arquivo físico existe no /public antes de abrir
  const abrirPdfComChecagem = async (e, url, nomeMaterial) => {
    e.preventDefault();
    if (!url) return;

    setVerificandoPdf(true);
    try {
      // Faz uma checagem HTTP HEAD rápida
      const resposta = await fetch(url, { method: "HEAD" });

      // Lê o cabeçalho para descobrir o TIPO do arquivo devolvido
      const contentType = resposta.headers.get("content-type");

      // Validação Dupla: Tem que ser status 200 (OK) E o tipo TEM que ser um PDF
      if (
        resposta.ok &&
        contentType &&
        contentType.includes("application/pdf")
      ) {
        // Conta +1 download no Firebase quando o PDF é confirmado
        try {
          const metricaRef = doc(db, "metricas_planos", plano.id);
          await setDoc(
            metricaRef,
            { downloads: increment(1) },
            { merge: true },
          );
          setMetricas((prev) => ({ ...prev, downloads: prev.downloads + 1 }));
        } catch (error) {
          console.error("Erro ao registrar download no Firebase:", error);
        }

        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        // Se caiu aqui, é porque deu 404 real, OU o Vite devolveu um HTML falso
        setAvisoPdf({
          titulo: `Arquivo em Diagramação`,
          mensagem: `O arquivo "${nomeMaterial}" está registrado na base pedagógica, mas o documento PDF ainda está em fase de finalização e será inserido em breve na pasta do sistema.`,
        });
      }
    } catch (erro) {
      setAvisoPdf({
        titulo: `Material Indisponível`,
        mensagem: `Não foi possível localizar o arquivo "${nomeMaterial}". Ele será disponibilizado em breve.`,
      });
    } finally {
      setVerificandoPdf(false);
    }
  };

  if (!plano) {
    return (
      <div className='p-10 text-center'>
        <h2 className='text-2xl font-bold text-red-600'>
          Plano de aula não encontrado!
        </h2>
        <Link
          to='/planos'
          className='text-green-700 underline mt-4 inline-block font-medium'
        >
          Voltar ao Catálogo
        </Link>
      </div>
    );
  }

  // Lógica de Paginação Sequencial
  const planoAnterior =
    currentIndex > 0 ? planosDeAula[currentIndex - 1] : null;
  const planoProximo =
    currentIndex < planosDeAula.length - 1
      ? planosDeAula[currentIndex + 1]
      : null;

  const idsAbas = ["geral", "roteiro", "rubrica", "preparacao"];
  const handleTabKeyDown = (event, abaAtual) => {
    const indexAtual = idsAbas.indexOf(abaAtual);
    let proximaAba;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      proximaAba = idsAbas[(indexAtual + 1) % idsAbas.length];
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      proximaAba = idsAbas[(indexAtual - 1 + idsAbas.length) % idsAbas.length];
    } else if (event.key === "Home") {
      proximaAba = idsAbas[0];
    } else if (event.key === "End") {
      proximaAba = idsAbas[idsAbas.length - 1];
    } else {
      return;
    }

    event.preventDefault();
    setAbaAtiva(proximaAba);
    requestAnimationFrame(() => {
      document.getElementById(`tab-${proximaAba}`)?.focus();
    });
  };

  return (
    <article className='p-6 md:p-10 max-w-5xl mx-auto bg-white min-h-screen'>
      {/* NAVEGAÇÃO LATERAL ENTRE PLANOS */}
      <div className='fixed inset-y-0 left-3 xl:left-[calc(50%_-_35rem)] z-30 flex items-center print:hidden'>
        <button
          type='button'
          onClick={() =>
            planoAnterior && navigate(`/planos/${planoAnterior.id}`)
          }
          disabled={!planoAnterior}
          aria-label={
            planoAnterior
              ? `Ir para o plano anterior: ${planoAnterior.titulo}`
              : "Este é o primeiro plano"
          }
          title={planoAnterior ? "Plano anterior" : "Este é o primeiro plano"}
          className='flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-300 bg-white/95 text-2xl md:text-3xl text-gray-700 shadow-md transition hover:bg-green-50 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30'
        >
          <span aria-hidden='true'>←</span>
        </button>
      </div>
      <div className='fixed inset-y-0 right-3 xl:right-[calc(50%_-_35rem)] z-30 flex items-center print:hidden'>
        <button
          type='button'
          onClick={() => planoProximo && navigate(`/planos/${planoProximo.id}`)}
          disabled={!planoProximo}
          aria-label={
            planoProximo
              ? `Ir para o próximo plano: ${planoProximo.titulo}`
              : "Este é o último plano"
          }
          title={planoProximo ? "Próximo plano" : "Este é o último plano"}
          className='flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-300 bg-white/95 text-2xl md:text-3xl text-gray-700 shadow-md transition hover:bg-green-50 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30'
        >
          <span aria-hidden='true'>→</span>
        </button>
      </div>

      {/* NAVEGAÇÃO DE VOLTA & CONTROLE SUPERIOR */}
      <div className='mb-6 flex flex-wrap justify-between items-center gap-3 print:hidden'>
        <Link
          to='/planos'
          className='text-green-700 hover:text-green-900 flex items-center gap-2 font-medium text-sm'
        >
          ← Voltar para o Catálogo Geral
        </Link>
        <div
          className='flex items-center gap-2'
          aria-label='Navegação entre planos de aula'
        >
          <button
            type='button'
            onClick={() =>
              planoAnterior && navigate(`/planos/${planoAnterior.id}`)
            }
            disabled={!planoAnterior}
            aria-label='Plano anterior'
            title='Plano anterior'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:bg-green-50 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30'
          >
            <span aria-hidden='true'>←</span>
          </button>
          <span className='text-xs font-bold text-gray-400 uppercase tracking-wider'>
            Plano {currentIndex + 1} de {planosDeAula.length}
          </span>
          <button
            type='button'
            onClick={() =>
              planoProximo && navigate(`/planos/${planoProximo.id}`)
            }
            disabled={!planoProximo}
            aria-label='Próximo plano'
            title='Próximo plano'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:bg-green-50 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30'
          >
            <span aria-hidden='true'>→</span>
          </button>
        </div>
      </div>
      {/* ========================================================= */}
      {/* CABEÇALHO DO PLANO (RESTAURO DAS TAGS E TÍTULO) */}
      {/* ========================================================= */}
      <header className='border-b-4 border-green-800 pb-6 mt-6 mb-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4'>
          <div className='flex flex-wrap gap-3'>
            <span className='bg-gray-100 text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm'>
              {plano.ano || "5º Ano (Ensino Fundamental)"}
            </span>
            <span
              className={`px-4 py-1 rounded-full text-xs font-bold border-2 shadow-sm uppercase tracking-wide ${getCorDoEixo(plano.eixo)}`}
            >
              {plano.eixo}
            </span>
          </div>

          {/* PAINEL DE MÉTRICAS (Agora no fluxo normal, sem sobrepor o conteúdo abaixo) */}
          <div className='flex gap-4 text-xs font-bold text-slate-500 bg-white p-2 px-4 rounded-full border border-gray-200 shadow-sm print:hidden'>
            <div className='flex items-center gap-1.5'>
              <span className='text-sm' aria-hidden='true'>
                👁️
              </span>
              <span>{metricas.visualizacoes} Views</span>
            </div>
            <div className='flex items-center gap-1.5 border-l border-gray-200 pl-4'>
              <span className='text-sm' aria-hidden='true'>
                📥
              </span>
              <span>{metricas.downloads} Downloads</span>
            </div>
          </div>
        </div>

        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight'>
          {plano.titulo}
        </h1>

        <div className='flex flex-wrap items-center gap-2 mb-5 print:hidden'>
          <button
            type='button'
            onClick={alternarFavorito}
            aria-pressed={favoritos.includes(plano.id)}
            className='inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800 transition hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500'
          >
            <span aria-hidden='true'>
              {favoritos.includes(plano.id) ? "★" : "☆"}
            </span>
            {favoritos.includes(plano.id)
              ? "Salvo nos favoritos"
              : "Salvar plano"}
          </button>
          <button
            type='button'
            onClick={compartilharPlano}
            className='inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-800 transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <span aria-hidden='true'>🔗</span> Compartilhar
          </button>
          <button
            type='button'
            onClick={alternarAplicadoEmSala}
            aria-pressed={aplicadoEmSala}
            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${aplicadoEmSala ? "border-emerald-300 bg-emerald-100 text-emerald-900" : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
          >
            <span aria-hidden='true'>{aplicadoEmSala ? "✓" : "□"}</span>
            {aplicadoEmSala ? "Aplicado em sala" : "Marcar como aplicado"}
          </button>
          {mensagemCompartilhamento && (
            <span role='status' className='text-sm text-gray-600'>
              {mensagemCompartilhamento}
            </span>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p>
            <strong className='text-gray-800 block mb-1'>
              Contexto Interdisciplinar:
            </strong>{" "}
            {plano.contexto}
          </p>
          <p>
            <strong className='text-gray-800 block mb-1'>Duração:</strong>{" "}
            {plano.duracao}
          </p>
          <p className='md:col-span-2'>
            <strong className='text-gray-800 block mb-1'>
              Objeto de Conhecimento:
            </strong>{" "}
            {plano.objetoConhecimento}
          </p>
        </div>
      </header>
      {/* ========================================================= */}
      {/* NOVO SISTEMA DE ABAS INTERATIVAS (TABS) */}
      {/* ========================================================= */}
      <div
        role='tablist'
        aria-label='Navegação do Plano de Aula'
        className='border-b border-gray-200 flex flex-wrap px-2 md:px-6 mt-8 mb-6 bg-gray-50 rounded-t-lg print:hidden'
      >
        <button
          role='tab'
          aria-selected={abaAtiva === "geral"}
          aria-controls='panel-geral'
          id='tab-geral'
          tabIndex={abaAtiva === "geral" ? 0 : -1}
          onKeyDown={(event) => handleTabKeyDown(event, "geral")}
          onClick={() => setAbaAtiva("geral")}
          className={`py-4 px-4 font-bold text-sm border-b-4 transition-colors ${abaAtiva === "geral" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
        >
          1. Visão Geral & BNCC
        </button>
        <button
          role='tab'
          aria-selected={abaAtiva === "roteiro"}
          aria-controls='panel-roteiro'
          id='tab-roteiro'
          tabIndex={abaAtiva === "roteiro" ? 0 : -1}
          onKeyDown={(event) => handleTabKeyDown(event, "roteiro")}
          onClick={() => setAbaAtiva("roteiro")}
          className={`py-4 px-4 font-bold text-sm border-b-4 transition-colors ${abaAtiva === "roteiro" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
        >
          2. Roteiro Prático
        </button>
        <button
          role='tab'
          aria-selected={abaAtiva === "rubrica"}
          aria-controls='panel-rubrica'
          id='tab-rubrica'
          tabIndex={abaAtiva === "rubrica" ? 0 : -1}
          onKeyDown={(event) => handleTabKeyDown(event, "rubrica")}
          onClick={() => setAbaAtiva("rubrica")}
          className={`py-4 px-4 font-bold text-sm border-b-4 transition-colors ${abaAtiva === "rubrica" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
        >
          3. Rubrica de Avaliação
        </button>
        <button
          role='tab'
          aria-selected={abaAtiva === "preparacao"}
          aria-controls='panel-preparacao'
          id='tab-preparacao'
          tabIndex={abaAtiva === "preparacao" ? 0 : -1}
          onKeyDown={(event) => handleTabKeyDown(event, "preparacao")}
          onClick={() => setAbaAtiva("preparacao")}
          className={`py-4 px-4 font-bold text-sm border-b-4 transition-colors ${abaAtiva === "preparacao" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
        >
          4. Preparação da Aula
        </button>
      </div>
      {/* ÁREA DE CONTEÚDO DINÂMICO DAS ABAS */}
      <div className='min-h-[400px]'>
        {/* ==================== ABA 1: VISÃO GERAL ==================== */}
        {abaAtiva === "geral" && (
          <div
            role='tabpanel'
            id='panel-geral'
            aria-labelledby='tab-geral'
            tabIndex='0'
            className='animate-fadeIn space-y-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 rounded-xl'
          >
            {plano.pilarComputacional && (
              <section
                aria-labelledby='pilar-computacional-titulo'
                className='bg-amber-50 border border-amber-200 p-5 rounded-xl'
              >
                <h2
                  id='pilar-computacional-titulo'
                  className='text-lg font-bold text-amber-900 mb-2'
                >
                  🧠 Pilar Computacional
                </h2>
                <h3 className='font-bold text-amber-900'>
                  {plano.pilarComputacional.titulo}
                </h3>
                <p className='text-amber-900/80 text-sm leading-relaxed mt-1'>
                  {plano.pilarComputacional.descricao}
                </p>
              </section>
            )}

            {plano.competenciasGerais &&
              plano.competenciasGerais.length > 0 && (
                <section aria-labelledby='competencias-gerais-titulo'>
                  <h2
                    id='competencias-gerais-titulo'
                    className='text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm'
                  >
                    📌 Competências gerais da Educação
                  </h2>
                  <ul className='space-y-3'>
                    {plano.competenciasGerais.map((competencia, index) => (
                      <li
                        key={index}
                        className='flex flex-col md:flex-row gap-2 bg-white p-4 border border-gray-200 rounded shadow-sm'
                      >
                        <span className='font-bold text-green-700 min-w-max'>
                          [{competencia.codigo}]
                        </span>
                        <p className='text-gray-700 text-sm leading-relaxed'>
                          <strong className='text-gray-900'>
                            {competencia.titulo}:{" "}
                          </strong>
                          {competencia.descricao}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            {/* Habilidades BNCC */}
            {plano.habilidades && (
              <section>
                <h2 className='text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm flex items-center gap-2'>
                  📌 Habilidades da BNCC
                </h2>
                <ul className='space-y-3'>
                  {plano.habilidades.map((hab, index) => (
                    <li
                      key={index}
                      className='flex flex-col md:flex-row gap-2 bg-white p-4 border border-gray-200 rounded shadow-sm'
                    >
                      <span className='font-bold text-green-700 min-w-max'>
                        {hab.codigo}
                      </span>
                      <span className='text-gray-700 text-sm leading-relaxed'>
                        {hab.descricao}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Card Direcionador para a Aba 4: Preparação da Aula */}
            <div className='bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs'>
              <div>
                <span className='text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1'>
                  <span aria-hidden='true'>🎒</span> Central de Preparação da Aula
                </span>
                <p className='text-sm text-emerald-950 leading-relaxed'>
                  Consulte os artefatos 3D do Kit Maker, fotos reais, montagem de bancadas e o checklist completo de insumos na nova guia dedicada.
                </p>
              </div>
              <button
                type='button'
                onClick={() => {
                  setAbaAtiva("preparacao");
                  requestAnimationFrame(() => {
                    document.getElementById("tab-preparacao")?.focus();
                  });
                }}
                className='whitespace-nowrap bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'
              >
                Abrir Preparação (Guia 4) →
              </button>
            </div>

            {/* Ideia Prática */}
            {plano.ideiaPratica && (
              <section className='bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm'>
                <h2 className='text-lg font-bold text-gray-800 mb-2'>
                  💡 A Ideia Prática
                </h2>
                <p className='text-gray-700 leading-relaxed text-base'>
                  {plano.ideiaPratica}
                </p>
              </section>
            )}

            {plano.taxonomiaBloom && (
              <section className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8'>
                <h2 className='text-xl font-bold text-gray-800 mb-5 flex items-center gap-2'>
                  🧠 Progressão Cognitiva da Aula (Taxonomia de Bloom)
                </h2>
                <div className='space-y-3'>
                  {plano.taxonomiaBloom.map((item, index) => (
                    <details
                      key={index}
                      className='group rounded-lg border border-gray-200 border-l-4 border-l-indigo-500 bg-white shadow-sm open:bg-indigo-50/20'
                    >
                      <summary className='flex cursor-pointer list-none items-center gap-4 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset'>
                        <span className='flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-widest'>
                          Nível {index + 1}
                        </span>
                        <span className='flex-1 font-extrabold text-gray-900 text-sm uppercase tracking-wider'>
                          {item.nivel.replace(/^\d+\.\s*/, "")}
                        </span>
                        <span
                          aria-hidden='true'
                          className='text-indigo-700 transition-transform group-open:rotate-180'
                        >
                          ▾
                        </span>
                      </summary>

                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 p-4'>
                        {item.acao && (
                          <div className='bg-blue-50/50 p-3 rounded border border-blue-100'>
                            <span className='text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1 mb-1'>
                              🎯 Ação do Aluno
                            </span>
                            <p className='text-gray-700 text-sm leading-relaxed'>
                              {item.acao}
                            </p>
                          </div>
                        )}

                        <div
                          className={`${item.acao ? "bg-emerald-50/50 border-emerald-100" : "bg-gray-50 border-gray-100"} p-3 rounded border`}
                        >
                          <span
                            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-1 ${item.acao ? "text-emerald-800" : "text-gray-600"}`}
                          >
                            ✔️ Evidência Observável
                          </span>
                          <p className='text-gray-700 text-sm leading-relaxed'>
                            {item.respostaEsperada}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* ==================== ABA 2: ROTEIRO PRÁTICO ==================== */}
        {abaAtiva === "roteiro" && plano.roteiro && (
          <div
            role='tabpanel'
            id='panel-roteiro'
            aria-labelledby='tab-roteiro'
            tabIndex='0'
            className='animate-fadeIn space-y-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 rounded-xl'
          >
            {plano.roteiro.map((passo, index) => (
              <div
                key={index}
                className='flex gap-4 items-start border-l-4 border-blue-600 pl-4 py-2 bg-white rounded-r-lg shadow-sm'
              >
                <div>
                  <span className='text-xs font-extrabold text-blue-700 uppercase tracking-widest'>
                    {passo.parte}
                  </span>
                  <h3 className='font-bold text-gray-900 text-lg mt-1'>
                    {passo.titulo}
                  </h3>
                  <p className='text-gray-700 mt-2 text-sm leading-relaxed'>
                    {passo.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== ABA 3: RUBRICA DE AVALIAÇÃO ==================== */}
        {abaAtiva === "rubrica" && (
          <div
            role='tabpanel'
            id='panel-rubrica'
            aria-labelledby='tab-rubrica'
            tabIndex='0'
            className='animate-fadeIn space-y-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 rounded-xl'
          >
            {plano.avaliacao && plano.avaliacao.length > 0 && (
              <section aria-labelledby='avaliacao-titulo'>
                <h2
                  id='avaliacao-titulo'
                  className='text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm'
                >
                  🔎 Avaliação: o que observar na criança
                </h2>
                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                  {plano.avaliacao.map((item, index) => (
                    <li
                      key={index}
                      className='bg-white p-4 border border-gray-200 rounded shadow-sm'
                    >
                      <h3 className='font-bold text-gray-900 text-sm mb-2'>
                        {item.titulo}
                      </h3>
                      <p className='text-gray-700 text-sm leading-relaxed'>
                        {item.descricao}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Piloto (Guia Direto) */}
            {plano.guiaObservacao && (
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
                <div className='bg-gray-50 p-4 border-b border-gray-200'>
                  <h3 className='font-bold text-lg text-gray-900'>
                    Guia de Observação Direta (Piloto)
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {plano.guiaObservacao.objetivo}
                  </p>
                </div>
                <div className='p-4'>
                  <ul className='space-y-4'>
                    {plano.guiaObservacao.criterios.map((crit, idx) => (
                      <li
                        key={idx}
                        className='border-l-4 border-emerald-500 pl-4 py-1'
                      >
                        <strong className='text-gray-800 block text-base'>
                          {crit.nome} {crit.pergunta}
                        </strong>
                        <p className='text-gray-600 text-sm mt-1 bg-gray-50 p-2 rounded'>
                          <span className='font-bold text-gray-700'>
                            Critério para o Avaliador:
                          </span>{" "}
                          {crit.criterioAvaliador}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Rubricas Curingas (Planos 03 ao 15) */}
            {plano.rubricaId && rubricas[plano.rubricaId] && (
              <>
                {plano.ajusteFinoRubrica && (
                  <div className='bg-blue-50 border border-blue-200 p-5 rounded-xl'>
                    <h3 className='font-bold text-blue-900 mb-3 text-sm uppercase tracking-wider'>
                      🎯 Ajuste Fino para esta Aula
                    </h3>
                    <ul className='space-y-3'>
                      {plano.ajusteFinoRubrica.map((ajuste, idx) => {
                        const splitText = ajuste.split("**");
                        return (
                          <li
                            key={idx}
                            className='text-sm text-blue-800 leading-relaxed'
                          >
                            {splitText.length > 1 ? (
                              <>
                                <strong className='text-blue-900'>
                                  {splitText[1]}
                                </strong>{" "}
                                {splitText[2]}
                              </>
                            ) : (
                              ajuste
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div className='bg-white rounded-xl shadow-sm border border-gray-200'>
                  <div className='bg-gray-50 p-4 border-b border-gray-200'>
                    <h3 className='font-bold text-lg text-gray-900'>
                      {rubricas[plano.rubricaId].titulo}
                    </h3>
                    <p className='text-sm text-gray-600 italic'>
                      {rubricas[plano.rubricaId].foco}
                    </p>
                  </div>
                  <div className='hidden md:block overflow-x-auto'>
                    <table className='w-full text-left border-collapse'>
                      <thead>
                        <tr className='bg-gray-100 text-gray-700 border-b border-gray-200'>
                          <th className='p-4 font-bold text-sm w-1/4'>
                            Critério Avaliativo
                          </th>
                          <th className='p-4 font-bold text-sm w-1/4'>
                            🌱 Em Desenvolvimento
                          </th>
                          <th className='p-4 font-bold text-sm w-1/4'>
                            🌿 Adequado
                          </th>
                          <th className='p-4 font-bold text-sm w-1/4'>
                            🌳 Avançado
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200'>
                        {rubricas[plano.rubricaId].criterios.map(
                          (crit, index) => (
                            <tr
                              key={index}
                              className='hover:bg-gray-50 transition-colors'
                            >
                              <td className='p-4 font-bold text-gray-800 text-sm'>
                                {crit.nome}
                              </td>
                              <td className='p-4 text-gray-600 text-sm'>
                                {crit.desenvolvimento}
                              </td>
                              <td className='p-4 text-gray-600 text-sm'>
                                {crit.adequado}
                              </td>
                              <td className='p-4 text-green-700 font-medium text-sm bg-green-50/30'>
                                {crit.avancado}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className='md:hidden divide-y divide-gray-200'>
                    {rubricas[plano.rubricaId].criterios.map((crit, index) => (
                      <article key={index} className='p-4 space-y-3'>
                        <h4 className='font-bold text-gray-900 text-sm'>
                          {crit.nome}
                        </h4>
                        <div className='border-l-4 border-amber-300 bg-amber-50 p-3'>
                          <strong className='block text-xs uppercase tracking-wide text-amber-900 mb-1'>
                            🌱 Em Desenvolvimento
                          </strong>
                          <p className='text-sm text-gray-700'>
                            {crit.desenvolvimento}
                          </p>
                        </div>
                        <div className='border-l-4 border-emerald-300 bg-emerald-50 p-3'>
                          <strong className='block text-xs uppercase tracking-wide text-emerald-900 mb-1'>
                            🌿 Adequado
                          </strong>
                          <p className='text-sm text-gray-700'>
                            {crit.adequado}
                          </p>
                        </div>
                        <div className='border-l-4 border-green-500 bg-green-50 p-3'>
                          <strong className='block text-xs uppercase tracking-wide text-green-900 mb-1'>
                            🌳 Avançado
                          </strong>
                          <p className='text-sm text-green-800 font-medium'>
                            {crit.avancado}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ==================== ABA 4: PREPARAÇÃO DA AULA ==================== */}
        {abaAtiva === "preparacao" && (
          <div
            role='tabpanel'
            id='panel-preparacao'
            aria-labelledby='tab-preparacao'
            tabIndex='0'
            className='animate-fadeIn space-y-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 rounded-xl'
          >
            {/* 1. STATUS DE EXECUÇÃO EM SALA */}
            <section
              aria-labelledby='status-aplicacao-titulo'
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                aplicadoEmSala
                  ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                  : "bg-slate-50 border-slate-200 text-slate-800"
              }`}
            >
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <div className='space-y-1'>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl' aria-hidden='true'>
                      {aplicadoEmSala ? "🎉" : "📋"}
                    </span>
                    <h2
                      id='status-aplicacao-titulo'
                      className='text-lg font-bold'
                    >
                      {aplicadoEmSala
                        ? "Missão Aplicada com Sucesso em Sala"
                        : "Status da Missão: Em Planejamento"}
                    </h2>
                  </div>
                  <p className='text-sm text-slate-600 max-w-2xl leading-relaxed'>
                    {aplicadoEmSala
                      ? "Esta aula já foi marcada como executada com sua turma. O indicador aparece destacado no catálogo para facilitar o acompanhamento do seu cronograma."
                      : "Marque esta opção assim que realizar a aula com seus estudantes para acompanhar o progresso pedagógico no catálogo de missões."}
                  </p>
                </div>

                <button
                  type='button'
                  onClick={alternarAplicadoEmSala}
                  aria-pressed={aplicadoEmSala}
                  className={`whitespace-nowrap px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 ${
                    aplicadoEmSala
                      ? "bg-emerald-700 hover:bg-emerald-800 text-white focus:ring-emerald-500"
                      : "bg-slate-800 hover:bg-slate-900 text-white focus:ring-slate-500"
                  }`}
                >
                  <span aria-hidden='true'>{aplicadoEmSala ? "✓" : "□"}</span>
                  {aplicadoEmSala ? "Aplicado em Sala" : "Marcar como Aplicado"}
                </button>
              </div>
            </section>

            {/* 2. CHECKLIST OPERACIONAL PRÉ-AULA */}
            <section
              aria-labelledby='checklist-operacional-titulo'
              className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm'
            >
              <div className='mb-6 border-b border-gray-100 pb-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-xl' aria-hidden='true'>
                    🛠️
                  </span>
                  <h2
                    id='checklist-operacional-titulo'
                    className='text-lg font-extrabold text-gray-900'
                  >
                    Checklist Operacional Pré-Aula
                  </h2>
                </div>
                <p className='text-sm text-gray-600 mt-1'>
                  Etapas recomendadas para organizar o ambiente e a dinâmica dos
                  estudantes antes do início das atividades.
                </p>
              </div>

              <div className='space-y-3'>
                {[
                  {
                    id: "disposicao-sala",
                    titulo: "1. Disposição do Espaço (Ilhas de Aprendizagem)",
                    descricao:
                      "Afastar as carteiras tradicionais e agrupar mesas para trabalho colaborativo em esquadrões de 3 a 4 estudantes.",
                  },
                  {
                    id: "papeis-esquadrao",
                    titulo: "2. Formação dos Esquadrões & Papéis Ativos",
                    descricao:
                      "Definir ou sortear as funções ativas de cada aluno (Mestre do Código, Robô, Caçador de Bugs, Cartógrafo ou Engenheiro Maker) para evitar a sobrecarga de um único membro.",
                  },
                  {
                    id: "fichas-atividades",
                    titulo: "3. Impressão de Fichas e Caderno de Atividades",
                    descricao:
                      "Imprimir previamente a Folha de Missão do Aluno / Ficha Catalográfica e o Mapa Rápido de Observação Docente (disponíveis na Central de Impressão abaixo).",
                  },
                  {
                    id: "kit-artefatos",
                    titulo: "4. Separação dos Artefatos Físicos do Kit Maker",
                    descricao:
                      "Retirar da caixa do Kit IFMaker as réplicas 3D pertinentes, conferir a integridade das peças táteis e organizar os cartões ou insumos na bancada.",
                  },
                  {
                    id: "modo-furtivo",
                    titulo: "5. Alinhamento das 'Regras de Ouro' e Modo Furtivo",
                    descricao:
                      "Combinar previamente o 'Modo Furtivo' (comunicação em tom de sussurro tático) e o cuidado coletivo no manuseio das peças tridimensionais.",
                  },
                ].map((etapa) => {
                  const checado = etapasPreparacao.includes(etapa.id);
                  return (
                    <div
                      key={etapa.id}
                      className={`flex items-start gap-3.5 p-4 rounded-xl border transition-colors ${
                        checado
                          ? "bg-emerald-50/60 border-emerald-200"
                          : "bg-gray-50/60 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        id={`prep-${plano.id}-${etapa.id}`}
                        type='checkbox'
                        checked={checado}
                        onChange={() => alternarEtapaPreparacao(etapa.id)}
                        className='mt-1 h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 cursor-pointer'
                      />
                      <label
                        htmlFor={`prep-${plano.id}-${etapa.id}`}
                        className='flex-1 cursor-pointer select-none'
                      >
                        <strong
                          className={`block text-sm font-bold ${
                            checado ? "text-emerald-950" : "text-gray-900"
                          }`}
                        >
                          {etapa.titulo}
                        </strong>
                        <p className='text-xs text-gray-600 mt-0.5 leading-relaxed'>
                          {etapa.descricao}
                        </p>
                      </label>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          checado
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {checado ? "Pronto" : "Pendente"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. CHECKLIST DE MATERIAIS & INSUMOS DO PLANO */}
            <section
              aria-labelledby='materiais-plano-titulo'
              className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm'
            >
              <div className='mb-6 border-b border-gray-100 pb-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-xl' aria-hidden='true'>
                    📦
                  </span>
                  <h2
                    id='materiais-plano-titulo'
                    className='text-lg font-extrabold text-gray-900'
                  >
                    Checklist de Insumos da Missão
                  </h2>
                </div>
                <p className='text-sm text-gray-600 mt-1'>
                  Verifique a disponibilidade dos itens da Caixa Master e insumos da escola antes de iniciar a regência.
                </p>
              </div>

              <ul className='space-y-3'>
                {plano.recursos && plano.recursos.length > 0 ? (
                  plano.recursos.map((item, index) => {
                    const disponivel = materiaisDisponiveis.includes(item);
                    const doKit = isRecursoDoKitMaker(item);

                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-3 rounded-xl border p-4 transition-colors ${
                          disponivel
                            ? "bg-emerald-50/50 border-emerald-200"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <input
                          id={`mat-prep-${plano.id}-${index}`}
                          type='checkbox'
                          checked={disponivel}
                          onChange={() => alternarMaterial(item)}
                          className='mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 cursor-pointer'
                        />
                        <label
                          htmlFor={`mat-prep-${plano.id}-${index}`}
                          className='flex-1 cursor-pointer text-sm text-slate-800 select-none'
                        >
                          <div className='flex flex-wrap items-center gap-2 mb-1'>
                            <span className='font-semibold text-gray-900'>{item}</span>
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                                doKit
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-amber-50 text-amber-800 border-amber-200"
                              }`}
                            >
                              {doKit
                                ? "🎒 Caixa Master (Kit IFMaker)"
                                : "🏫 Insumo da Escola / Papelaria"}
                            </span>
                          </div>
                          <span
                            className={`inline-block text-xs font-bold ${
                              disponivel
                                ? "text-emerald-700"
                                : "text-amber-700"
                            }`}
                          >
                            {disponivel
                              ? "✓ Disponível / separado para a aula"
                              : "⚠️ A conferir / providenciar"}
                          </span>
                        </label>
                      </li>
                    );
                  })
                ) : (
                  <li className='italic text-slate-500 text-sm'>
                    Nenhum recurso específico cadastrado para esta aula.
                  </li>
                )}
              </ul>
            </section>

            {/* 4. MOSTRUÁRIO DE ARTEFATOS FÍSICOS DO KIT MAKER */}
            <section
              aria-labelledby='artefatos-kit-titulo'
              className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm'
            >
              <div className='mb-6 border-b border-gray-100 pb-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-xl' aria-hidden='true'>
                    🧩
                  </span>
                  <h2
                    id='artefatos-kit-titulo'
                    className='text-lg font-extrabold text-gray-900'
                  >
                    Artefatos Físicos do Kit Maker (Patrimônio de Nioaque)
                  </h2>
                </div>
                <p className='text-sm text-gray-600 mt-1'>
                  Fotos reais dos artefatos, detalhes táteis, quantidades na Caixa Master e alternativas de substituição (Capítulo 3 do Manual Pedagógico).
                </p>

                {/* Box de contexto da Caixa Master */}
                <div className='mt-4 bg-emerald-50/80 border border-emerald-200 p-4 rounded-xl flex items-start gap-3 text-xs text-emerald-950'>
                  <span className='text-xl' aria-hidden='true'>📦</span>
                  <div>
                    <strong className='font-bold text-emerald-900 block'>
                      Acervo da Caixa Master (Manual Pedagógico - Seção 3.2):
                    </strong>
                    <p className='mt-0.5 text-emerald-800 leading-relaxed'>
                      Dimensionado para turmas de até 30 estudantes em 8 Ilhas de Aprendizagem simultâneas. Cada ilha recebe 1 artefato 3D do dia e 1 saquinho Ziplock com blocos de programação tangível.
                    </p>
                  </div>
                </div>
              </div>

              {(() => {
                const artefatos = getArtefatosPorPlano(plano.id);
                if (artefatos.length === 0) {
                  return (
                    <div className='bg-sky-50/70 border border-sky-200 p-5 rounded-xl text-sky-950 text-sm leading-relaxed'>
                      <p className='font-bold mb-1'>
                        💡 Aula com foco em materiais flexíveis ou desplugados
                      </p>
                      <p className='text-sky-900 text-xs leading-relaxed'>
                        Esta aula não depende de uma réplica 3D exclusiva do kit.
                        Os esquadrões podem utilizar cartolinas, materiais
                        recicláveis da escola e fichas impressas da Central de
                        Impressão.
                      </p>
                    </div>
                  );
                }

                return (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {artefatos.map((art) => (
                      <article
                        key={art.id}
                        className='bg-slate-50/70 border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow'
                      >
                        <div className='bg-white p-4 flex items-center justify-center border-b border-slate-200 min-h-[220px]'>
                          <img
                            src={art.imagem}
                            alt={art.alt}
                            className='max-h-48 object-contain transition-transform hover:scale-105 duration-300'
                            loading='lazy'
                          />
                        </div>
                        <div className='p-5 flex-1 flex flex-col space-y-3'>
                          <div className='flex flex-wrap items-center gap-2'>
                            <span className='bg-indigo-100 text-indigo-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-indigo-200'>
                              {art.categoria}
                            </span>
                            {art.quantidadeNoKit && (
                              <span className='bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-300'>
                                📦 {art.quantidadeNoKit}
                              </span>
                            )}
                            <span className='bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded border border-gray-300'>
                              {art.material}
                            </span>
                          </div>

                          <h3 className='font-bold text-base text-gray-900'>
                            {art.nome}
                          </h3>

                          <div className='text-xs space-y-2 text-slate-700'>
                            <p>
                              <strong className='text-slate-900'>Origem: </strong>
                              {art.origem}
                            </p>
                            <p>
                              <strong className='text-slate-900'>
                                Percepção Tátil:{" "}
                              </strong>
                              {art.descricaoTatil}
                            </p>
                            <p>
                              <strong className='text-slate-900'>
                                Manuseio:{" "}
                              </strong>
                              {art.orientacoesManuseio}
                            </p>
                          </div>

                          <div className='mt-auto pt-3 border-t border-slate-200 text-xs bg-amber-50/60 p-2.5 rounded-lg border border-amber-200 text-amber-900'>
                            <strong>🔄 Substituição Possível (Plano B):</strong>{" "}
                            {art.substituicaoPossivel}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })()}
            </section>
          </div>
        )}
      </div>
      {/* ÁREA DE DOWNLOADS E PDFs (Visível em todas as abas) */}
      <section className='mt-12 print:hidden border-t pt-8 border-gray-200'>
        <h3 className='text-lg font-bold text-gray-900 mb-6 text-center'>
          Central de Impressão e Materiais
        </h3>

        <div className='flex flex-wrap justify-center gap-4'>
          {/* 1. PDF DA AULA COMPLETA */}
          {plano.pdfUrl ? (
            <button
              type='button'
              onClick={(e) =>
                abrirPdfComChecagem(e, plano.pdfUrl, "Plano Completo")
              }
              disabled={verificandoPdf}
              className='bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
            >
              🖨️ Plano Completo (PDF)
            </button>
          ) : (
            <button
              type='button'
              aria-disabled='true'
              onClick={(e) => e.preventDefault()}
              title='O PDF completo deste plano ainda não foi disponibilizado.'
              className='bg-gray-100 text-gray-400 font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm border border-gray-200 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
            >
              🖨️ Plano Completo (Em breve)
            </button>
          )}

          {/* 2. MAPA DE AVALIAÇÃO (RUBRICA) */}
          {plano.rubricaPdfUrl ? (
            <button
              type='button'
              onClick={(e) =>
                abrirPdfComChecagem(e, plano.rubricaPdfUrl, "Mapa de Avaliação")
              }
              disabled={verificandoPdf}
              className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              📋 Mapa de Avaliação
            </button>
          ) : (
            <button
              type='button'
              aria-disabled='true'
              onClick={(e) => e.preventDefault()}
              title='Não há folha de rubrica específica para este plano.'
              className='bg-gray-100 text-gray-400 font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm border border-gray-200 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
            >
              📋 Mapa de Avaliação (Sem PDF)
            </button>
          )}

          {/* 3. FOLHA DE ATIVIDADE DO ALUNO */}
          {plano.atividadesPdfUrl ? (
            <button
              type='button'
              onClick={(e) =>
                abrirPdfComChecagem(
                  e,
                  plano.atividadesPdfUrl,
                  "Atividade do Aluno",
                )
              }
              disabled={verificandoPdf}
              className='bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            >
              📝 Atividade do Aluno
            </button>
          ) : (
            <button
              type='button'
              aria-disabled='true'
              onClick={(e) => e.preventDefault()}
              title='Esta aula não exige folha de atividade impressa para o aluno.'
              className='bg-gray-100 text-gray-400 font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm border border-gray-200 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
            >
              📝 Atividade do Aluno (Não possui)
            </button>
          )}

          {/* 4. ANEXOS VISUAIS E BLOCOS */}
          {plano.anexosPdfUrl ? (
            <button
              type='button'
              onClick={(e) =>
                abrirPdfComChecagem(e, plano.anexosPdfUrl, "Anexos e Imagens")
              }
              disabled={verificandoPdf}
              className='bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
            >
              🧩 Anexos e Imagens
            </button>
          ) : (
            <button
              type='button'
              aria-disabled='true'
              onClick={(e) => e.preventDefault()}
              title='Esta aula não possui cards ou imagens extras para recortar.'
              className='bg-gray-100 text-gray-400 font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm border border-gray-200 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
            >
              🧩 Anexos e Imagens (Não possui)
            </button>
          )}
        </div>

        {/* MODAL / AVISO INFORMATIVO CASO O ARQUIVO FÍSICO NÃO EXISTA */}
        {avisoPdf && (
          <div
            role='alertdialog'
            aria-modal='true'
            aria-labelledby='aviso-titulo'
            className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <div className='bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center'>
              <div className='w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>
                ⏳
              </div>
              <h4
                id='aviso-titulo'
                className='text-xl font-bold text-gray-900 mb-2'
              >
                {avisoPdf.titulo}
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                {avisoPdf.mensagem}
              </p>
              <button
                type='button'
                autoFocus
                onClick={() => setAvisoPdf(null)}
                className='w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-sm'
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </section>

      {/* COMPONENTE DE COMENTÁRIOS E AVALIAÇÃO INTEGRADO COM O TÍTULO */}
      <ComentariosPedagogicos planoId={plano.id} planoTitulo={plano.titulo} />

      {/* BARRA DE NAVEGAÇÃO SEQUENCIAL (PRÓXIMO / ANTERIOR) */}
      <footer className='mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden'>
        {planoAnterior ? (
          <button
            onClick={() => navigate(`/planos/${planoAnterior.id}`)}
            className='w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium text-sm transition flex items-center justify-center gap-2'
          >
            ← {planoAnterior.titulo}
          </button>
        ) : (
          <div />
        )}

        {planoProximo ? (
          <button
            onClick={() => navigate(`/planos/${planoProximo.id}`)}
            className='w-full sm:w-auto px-5 py-2.5 rounded-lg bg-green-800 text-white hover:bg-green-900 font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm ml-auto'
          >
            {planoProximo.titulo} →
          </button>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
