// src/pages/Catalogo.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { planosDeAula } from "../data/planos";

// FUNÇÃO AUXILIAR DE UI/UX (Consistência do Design System da BNCC)
const getCorDoEixo = (eixo) => {
  const eixoNormalizado = eixo?.toUpperCase() || "";

  if (eixoNormalizado.includes("PENSAMENTO COMPUTACIONAL")) {
    return "bg-amber-600 border-amber-200 text-white"; // Amarelo Mostarda
  }
  if (eixoNormalizado.includes("MUNDO DIGITAL")) {
    return "bg-blue-600 border-blue-200 text-white"; // Azul Médio
  }
  if (eixoNormalizado.includes("CULTURA DIGITAL")) {
    return "bg-green-600 border-green-200 text-white"; // Verde Folha
  }
  if (eixoNormalizado.includes("CULTURA MAKER")) {
    return "bg-indigo-600 border-indigo-200 text-white"; // Roxo/Índigo harmônico
  }
  return "bg-gray-600 border-gray-200 text-white";
};

export default function Catalogo() {
  // ==========================================
  // ESTADOS DO COMPONENTE (Filtros e Busca)
  // ==========================================
  const [busca, setBusca] = useState("");
  const [filtroEixo, setFiltroEixo] = useState("Todos");
  const [filtroModalidade, setFiltroModalidade] = useState("Todas");

  // Arrays auxiliares para renderizar os botões de filtro
  const eixos = [
    "Todos",
    "PENSAMENTO COMPUTACIONAL",
    "MUNDO DIGITAL",
    "CULTURA DIGITAL",
  ];
  const modalidades = ["Todas", "Desplugadas", "Plugadas"];

  // ==========================================
  // LÓGICA DE FILTRAGEM DE DADOS (Performance com useMemo)
  // ==========================================
  const planosFiltrados = useMemo(() => {
    return planosDeAula.filter((plano) => {
      const termo = busca.toLowerCase();

      // 1. Busca por Texto Livre (Título, Objeto de Conhecimento ou Habilidades)
      const matchBusca =
        plano.titulo?.toLowerCase().includes(termo) ||
        plano.objetoConhecimento?.toLowerCase().includes(termo) ||
        (plano.habilidadesBNCC &&
          plano.habilidadesBNCC.some((hab) =>
            hab.toLowerCase().includes(termo),
          ));

      // 2. Filtro por Eixo da BNCC
      const matchEixo =
        filtroEixo === "Todos" ||
        plano.eixo?.toUpperCase().includes(filtroEixo);

      // 3. Filtro por Modalidade (Correção do Bug de Substring e Dados Implícitos)
      let matchModalidade = true;
      if (filtroModalidade !== "Todas") {
        // Unimos título e tipo para analisar tudo de uma vez
        const textoAnalise =
          `${plano.tipo || ""} ${plano.titulo || ""}`.toLowerCase();

        // Verifica se a palavra 'desplugada' está explícita
        const isDesplugadaExplicita = textoAnalise.includes("desplugada");

        // Estratégia de Arquitetura: Removemos a palavra "desplugada" para evitar falso positivo.
        // O que sobrar contendo "plugada" ou "computador" é genuinamente uma atividade plugada.
        const textoSemDesplugada = textoAnalise.replace(/desplugada/g, "");
        const isPlugadaExplicita =
          textoSemDesplugada.includes("plugada") ||
          textoSemDesplugada.includes("computador");

        // Aplicação da sua Regra de Negócio: Se não tem nenhum indicativo de ser Plugada
        // e o professor esqueceu de preencher o campo 'tipo', assumimos como Desplugada.
        const isDesplugada =
          isDesplugadaExplicita ||
          (!isPlugadaExplicita && !isDesplugadaExplicita);
        const isPlugada = isPlugadaExplicita;

        if (filtroModalidade === "Desplugadas") {
          matchModalidade = isDesplugada;
        } else if (filtroModalidade === "Plugadas") {
          matchModalidade = isPlugada;
        }
      }

      return matchBusca && matchEixo && matchModalidade;
    });
  }, [busca, filtroEixo, filtroModalidade]); // O array de dependências garante que só recalcule quando estes mudarem

  return (
    <main className='p-6 md:p-10 max-w-7xl mx-auto'>
      {/* ========================================== */}
      {/* CABEÇALHO (Oculto na impressão para economia) */}
      {/* ========================================== */}
      <header className='mb-8 print:hidden'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-green-900 tracking-tight flex items-center gap-3'>
          <span aria-hidden='true'>📚</span> Catálogo de Missões
        </h1>
        <p className='mt-3 text-lg text-gray-600 max-w-3xl'>
          Explore as sequências didáticas, encontre a habilidade da BNCC ideal
          para a sua aula e baixe o material de apoio para as "Ilhas de
          Aprendizagem".
        </p>
      </header>

      {/* ========================================== */}
      {/* BARRA DE BUSCA E FILTROS (Ocultos na impressão) */}
      {/* ========================================== */}
      <section
        className='mb-10 bg-white p-6 rounded-2xl shadow-sm border border-green-100 print:hidden'
        aria-label='Ferramentas de pesquisa'
      >
        {/* Barra de Busca Inteligente */}
        <div className='mb-6 relative'>
          <label htmlFor='buscaPlanos' className='sr-only'>
            Buscar planos de aula
          </label>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <span aria-hidden='true' className='text-gray-400'>
              🔍
            </span>
          </div>
          <input
            id='buscaPlanos'
            type='search'
            className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-green-500 transition-colors text-gray-700 bg-gray-50 focus:bg-white'
            placeholder='Busque por tema, código da BNCC (ex: EF05CO01) ou Retirada da Laguna...'
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Filtros Combinados */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Filtro de Eixos */}
          <div className='flex-1'>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
              Eixos da BNCC
            </h3>
            <div className='flex flex-wrap gap-2'>
              {eixos.map((eixo) => (
                <button
                  key={eixo}
                  onClick={() => setFiltroEixo(eixo)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filtroEixo === eixo
                      ? "bg-green-700 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent hover:border-gray-300"
                  }`}
                >
                  {eixo === "Todos" ? "Todos os Eixos" : eixo}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro de Modalidade */}
          <div>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
              Modalidade
            </h3>
            <div className='flex flex-wrap gap-2'>
              {modalidades.map((mod) => (
                <button
                  key={mod}
                  onClick={() => setFiltroModalidade(mod)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filtroModalidade === mod
                      ? "bg-slate-800 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent hover:border-gray-300"
                  }`}
                >
                  {mod === "Desplugadas" && (
                    <span aria-hidden='true'>🔌❌</span>
                  )}
                  {mod === "Plugadas" && <span aria-hidden='true'>💻</span>}
                  {mod}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* INDICADOR DE RESULTADOS PARA IMPRESSÃO */}
      {/* ========================================== */}
      <div className='hidden print:block mb-6 border-b-2 border-green-800 pb-2'>
        <h2 className='text-2xl font-bold text-green-900'>
          Catálogo de Aulas (Documento Institucional)
        </h2>
        <p className='text-sm text-gray-600'>
          Total de missões catalogadas: {planosFiltrados.length}
        </p>
      </div>

      {/* ========================================== */}
      {/* GRID DE PLANOS (OS CARDS) */}
      {/* ========================================== */}
      <section aria-live='polite'>
        {planosFiltrados.length === 0 ? (
          /* EMPTY STATE (Estado Vazio Amigável) */
          <div className='bg-amber-50 border-2 border-dashed border-amber-200 rounded-2xl p-10 text-center animate-fadeIn'>
            <span className='text-5xl mb-4 block' aria-hidden='true'>
              🧭
            </span>
            <h3 className='text-xl font-bold text-amber-900 mb-2'>
              Nenhuma missão encontrada.
            </h3>
            <p className='text-amber-700 max-w-lg mx-auto'>
              Sua busca não retornou resultados para os filtros atuais.
              Lembre-se que nosso foco é o 5º ano! Tente buscar por termos como{" "}
              <strong>"Algoritmos"</strong>, <strong>"Paleontologia"</strong> ou
              limpe os filtros para ver todo o catálogo.
            </p>
            <button
              onClick={() => {
                setBusca("");
                setFiltroEixo("Todos");
                setFiltroModalidade("Todas");
              }}
              className='mt-6 bg-amber-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors shadow-sm print:hidden'
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          /* LISTA DE CARDS */
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {planosFiltrados.map((plano) => (
              <article
                key={plano.id}
                className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group'
              >
                {/* Faixa superior neutra em verde institucional */}
                <div className='h-2 bg-green-800 w-full group-hover:bg-green-500 transition-colors'></div>

                <div className='p-6 flex-1 flex flex-col'>
                  {/* TAGS / LABELS DINÂMICAS COM AS CORES DA BNCC */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-2 shadow-sm uppercase tracking-wide ${getCorDoEixo(plano.eixo)}`}
                    >
                      {plano.eixo}
                    </span>

                    {/* Tag de Modalidade (Caso o plano tenha a propriedade 'tipo') */}
                    {plano.tipo && (
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-300 uppercase tracking-wide'>
                        {plano.tipo.includes("Desplugada")
                          ? "🔌❌ Desplugada"
                          : plano.tipo}
                      </span>
                    )}
                  </div>

                  {/* TÍTULO E OBJETO DE CONHECIMENTO */}
                  <h2 className='text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-800 transition-colors'>
                    {plano.titulo}
                  </h2>
                  <p className='text-gray-600 text-sm flex-1 mb-6 leading-relaxed line-clamp-3'>
                    {plano.objetoConhecimento}
                  </p>

                  {/* CALL TO ACTION (Oculto na impressão) */}
                  <Link
                    to={`/planos/${plano.id}`}
                    className='mt-auto w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-md text-green-900 bg-green-100 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-sm print:hidden'
                  >
                    Ver Missão Detalhada
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
