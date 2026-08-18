// src/pages/PlanoDetalhe.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";
import { db } from "../services/firebase";


import { planosDeAula } from "../data/planos";
import { rubricas } from "../data/rubricas";
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
  const [ verificandoPdf, setVerificandoPdf ] = useState( false );
  
  const [metricas, setMetricas] = useState({ visualizacoes: 0, downloads: 0 });

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

  return (
    <article className='p-6 md:p-10 max-w-5xl mx-auto bg-white min-h-screen'>
      {/* NAVEGAÇÃO DE VOLTA & CONTROLE SUPERIOR */}
      <div className='mb-6 flex justify-between items-center print:hidden'>
        <Link
          to='/planos'
          className='text-green-700 hover:text-green-900 flex items-center gap-2 font-medium text-sm'
        >
          ← Voltar para o Catálogo Geral
        </Link>
        <span className='text-xs font-bold text-gray-400 uppercase tracking-wider'>
          Plano {currentIndex + 1} de {planosDeAula.length}
        </span>
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
              <span className='text-sm' aria-hidden='true'>👁️</span>
              <span>{metricas.visualizacoes} Views</span>
            </div>
            <div className='flex items-center gap-1.5 border-l border-gray-200 pl-4'>
              <span className='text-sm' aria-hidden='true'>📥</span>
              <span>{metricas.downloads} Downloads</span>
            </div>
          </div>
          
        </div>

        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight'>
          {plano.titulo}
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p>
            <strong className='text-gray-800 block mb-1'>
              Contexto Interdisciplinar:
            </strong>{" "}
            {plano.contexto}
          </p>
          <p>
            <strong className='text-gray-800 block mb-1'>
              Duração / Recursos:
            </strong>{" "}
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
          onClick={() => setAbaAtiva("rubrica")}
          className={`py-4 px-4 font-bold text-sm border-b-4 transition-colors ${abaAtiva === "rubrica" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
        >
          3. Rubrica de Avaliação
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

            <div className='bg-slate-50 p-5 rounded-xl border border-slate-100'>
              <h3 className='font-bold text-xs uppercase text-slate-400 tracking-wider mb-3'>
                Recursos Necessários
              </h3>
              <ul className='text-sm text-slate-700 list-disc list-inside space-y-2'>
                {/* O mapeamento mágico do React acontece aqui */}
                {plano.recursos && plano.recursos.length > 0 ? (
                  plano.recursos.map((item, index) => (
                    <li key={index} className='pl-1'>
                      {item}
                    </li>
                  ))
                ) : (
                  <li className='italic text-slate-500'>
                    Nenhum recurso específico cadastrado.
                  </li>
                )}
              </ul>
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

            {/* NOVA SESSÃO: TAXONOMIA DE BLOOM */}
            {plano.taxonomiaBloom && (
              <section className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8'>
                <h2 className='text-xl font-bold text-gray-800 mb-5 flex items-center gap-2'>
                  🧠 Progressão Cognitiva (Taxonomia de Bloom)
                </h2>
                <div className='space-y-4'>
                  {plano.taxonomiaBloom.map((item, index) => (
                    <div
                      key={index}
                      className='flex flex-col sm:flex-row items-start gap-4 p-5 rounded-lg hover:bg-indigo-50/30 transition-colors border-l-4 border-indigo-500 shadow-sm border-y border-r border-gray-100'
                    >
                      {/* Badge do Nível */}
                      <div className='flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-widest mt-1'>
                        Nível {index + 1}
                      </div>

                      <div className='flex-1 w-full'>
                        {/* Título do Nível (Ex: Compreensão, Análise) */}
                        <h3 className='font-extrabold text-gray-900 text-sm uppercase tracking-wider mb-3 border-b border-gray-100 pb-2'>
                          {item.nivel.replace(/^\d+\.\s*/, "")}
                        </h3>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                          {/* Coluna 1: Ação do Aluno (Renderização Dinâmica) */}
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

                          {/* Coluna 2: Evidência / Resposta Esperada */}
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
                      </div>
                    </div>
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

                <div className='overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200'>
                  <div className='bg-gray-50 p-4 border-b border-gray-200'>
                    <h3 className='font-bold text-lg text-gray-900'>
                      {rubricas[plano.rubricaId].titulo}
                    </h3>
                    <p className='text-sm text-gray-600 italic'>
                      {rubricas[plano.rubricaId].foco}
                    </p>
                  </div>
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
              </>
            )}
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
