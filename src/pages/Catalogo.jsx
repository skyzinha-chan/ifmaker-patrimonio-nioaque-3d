import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { planosDeAula } from "../data/planos";
import { readStorage, writeStorage } from "../utils/storage";

/**
 * Retorna as classes visuais do badge correspondente ao eixo da BNCC Computação.
 */
const getCorDoEixo = (eixo) => {
  const eixoNormalizado = eixo?.toUpperCase() || "";

  if (eixoNormalizado.includes("PENSAMENTO COMPUTACIONAL")) {
    return "bg-amber-600 border-amber-200 text-white";
  }
  if (eixoNormalizado.includes("MUNDO DIGITAL")) {
    return "bg-blue-600 border-blue-200 text-white";
  }
  if (eixoNormalizado.includes("CULTURA DIGITAL")) {
    return "bg-green-600 border-green-200 text-white";
  }
  if (eixoNormalizado.includes("CULTURA MAKER")) {
    return "bg-indigo-600 border-indigo-200 text-white";
  }
  return "bg-gray-600 border-gray-200 text-white";
};

export default function Catalogo() {
  const [busca, setBusca] = useState("");
  const [filtroEixo, setFiltroEixo] = useState("Todos");
  const [filtroModalidade, setFiltroModalidade] = useState("Todas");
  const [filtroAno, setFiltroAno] = useState("Todos");
  const [filtroHabilidade, setFiltroHabilidade] = useState("Todas");
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState(() =>
    readStorage("ifmaker-favoritos", []),
  );
  const [mostrarAplicados, setMostrarAplicados] = useState(false);
  const [aplicados, setAplicados] = useState(() => {
    const salvosGeral = readStorage("ifmaker-aplicados", []);
    const salvosIndividuais = planosDeAula
      .map((plano) => plano.id)
      .filter((id) => readStorage(`ifmaker-aplicado:${id}`, false));
    return Array.from(new Set([...salvosGeral, ...salvosIndividuais]));
  });

  const eixos = [
    "Todos",
    "PENSAMENTO COMPUTACIONAL",
    "MUNDO DIGITAL",
    "CULTURA DIGITAL",
  ];
  const modalidades = ["Todas", "Desplugadas", "Plugadas"];
  const anos = [
    "Todos",
    ...Array.from(new Set(planosDeAula.map((plano) => plano.ano))).sort(),
  ];
  const habilidadesDisponiveis = Array.from(
    new Map(
      planosDeAula
        .flatMap((plano) => plano.habilidades || [])
        .map((habilidade) => [habilidade.codigo, habilidade]),
    ).values(),
  ).sort((a, b) => a.codigo.localeCompare(b.codigo));

  const alternarFavorito = (planoId) => {
    setFavoritos((atuais) => {
      const atualizados = atuais.includes(planoId)
        ? atuais.filter((idFavorito) => idFavorito !== planoId)
        : [...atuais, planoId];
      writeStorage("ifmaker-favoritos", atualizados);
      return atualizados;
    });
  };

  const alternarAplicado = (planoId) => {
    setAplicados((atuais) => {
      const jaAplicado = atuais.includes(planoId);
      const atualizados = jaAplicado
        ? atuais.filter((id) => id !== planoId)
        : [...atuais, planoId];
      writeStorage("ifmaker-aplicados", atualizados);
      writeStorage(`ifmaker-aplicado:${planoId}`, !jaAplicado);
      return atualizados;
    });
  };

  const planosFiltrados = useMemo(() => {
    return planosDeAula.filter((plano) => {
      const termo = busca.toLowerCase();

      const habilidades = plano.habilidades || [];
      const textoHabilidades = habilidades
        .map((hab) => `${hab.codigo} ${hab.descricao}`)
        .join(" ")
        .toLowerCase();
      const matchBusca =
        plano.tituloCatalogo?.toLowerCase().includes(termo) ||
        plano.titulo?.toLowerCase().includes(termo) ||
        plano.objetoConhecimento?.toLowerCase().includes(termo) ||
        textoHabilidades.includes(termo);

      const matchEixo =
        filtroEixo === "Todos" ||
        plano.eixo?.toUpperCase().includes(filtroEixo);

      const matchAno = filtroAno === "Todos" || plano.ano === filtroAno;
      const matchHabilidade =
        filtroHabilidade === "Todas" ||
        plano.habilidades?.some(
          (habilidade) => habilidade.codigo === filtroHabilidade,
        );
      const matchFavoritos = !mostrarFavoritos || favoritos.includes(plano.id);
      const matchAplicados = !mostrarAplicados || aplicados.includes(plano.id);

      let matchModalidade = true;
      if (filtroModalidade !== "Todas") {
        const textoAnalise =
          `${plano.tipo || ""} ${plano.titulo || ""}`.toLowerCase();

        // Remove "desplugada" antes de buscar "plugada" para evitar falso positivo por substring;
        // planos sem tipo explícito assumem modalidade desplugada por padrão.
        const isDesplugadaExplicita = textoAnalise.includes("desplugada");
        const textoSemDesplugada = textoAnalise.replace(/desplugada/g, "");
        const isPlugadaExplicita =
          textoSemDesplugada.includes("plugada") ||
          textoSemDesplugada.includes("computador");

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

      return (
        matchBusca &&
        matchEixo &&
        matchAno &&
        matchHabilidade &&
        matchModalidade &&
        matchFavoritos &&
        matchAplicados
      );
    });
  }, [
    busca,
    filtroEixo,
    filtroModalidade,
    filtroAno,
    filtroHabilidade,
    mostrarFavoritos,
    favoritos,
    mostrarAplicados,
    aplicados,
  ]);

  return (
    <main className='p-6 md:p-10 max-w-7xl mx-auto'>
      {/* Cabeçalho da página */}
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

      {/* Barra de busca e filtros */}
      <section
        className='mb-10 bg-white p-6 rounded-2xl shadow-sm border border-green-100 print:hidden'
        aria-label='Ferramentas de pesquisa'
      >
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

        {/* Filtros combinados */}
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex-1' role='group' aria-label='Filtrar por eixo da BNCC'>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
              Eixos da BNCC
            </h3>
            <div className='flex flex-wrap gap-2'>
              {eixos.map((eixo) => (
                <button
                  key={eixo}
                  type='button'
                  onClick={() => setFiltroEixo(eixo)}
                  aria-pressed={filtroEixo === eixo}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
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

          <div role='group' aria-label='Filtrar por modalidade'>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
              Modalidade
            </h3>
            <div className='flex flex-wrap gap-2'>
              {modalidades.map((mod) => (
                <button
                  key={mod}
                  type='button'
                  onClick={() => setFiltroModalidade(mod)}
                  aria-pressed={filtroModalidade === mod}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-500 ${
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
          <label className='flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider'>
            Ano / Turma
            <select
              value={filtroAno}
              onChange={(event) => setFiltroAno(event.target.value)}
              className='normal-case text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              {anos.map((ano) => (
                <option key={ano} value={ano}>
                  {ano === "Todos" ? "Todos os anos" : ano}
                </option>
              ))}
            </select>
          </label>

          <label className='flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider'>
            Habilidade BNCC
            <select
              value={filtroHabilidade}
              onChange={(event) => setFiltroHabilidade(event.target.value)}
              className='normal-case text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              <option value='Todas'>Todas as habilidades</option>
              {habilidadesDisponiveis.map((habilidade) => (
                <option key={habilidade.codigo} value={habilidade.codigo}>
                  {habilidade.codigo}
                </option>
              ))}
            </select>
          </label>

          <button
            type='button'
            onClick={() => {
              setMostrarFavoritos((atual) => !atual);
              if (!mostrarFavoritos) setMostrarAplicados(false);
            }}
            aria-pressed={mostrarFavoritos}
            className={`self-end min-h-10 rounded-lg px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              mostrarFavoritos
                ? "bg-amber-500 text-white shadow-sm"
                : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
            }`}
          >
            ⭐ {mostrarFavoritos ? "Mostrando favoritos" : "Ver favoritos"}
          </button>

          <button
            type='button'
            onClick={() => {
              setMostrarAplicados((atual) => !atual);
              if (!mostrarAplicados) setMostrarFavoritos(false);
            }}
            aria-pressed={mostrarAplicados}
            className={`self-end min-h-10 rounded-lg px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              mostrarAplicados
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
            }`}
          >
            ✓ {mostrarAplicados ? "Mostrando aplicados" : "Ver aplicados em sala"}
          </button>
        </div>
      </section>

      {/* Cabeçalho exclusivo para impressão */}
      <div className='hidden print:block mb-6 border-b-2 border-green-800 pb-2'>
        <h2 className='text-2xl font-bold text-green-900'>
          Catálogo de Aulas (Documento Institucional)
        </h2>
        <p className='text-sm text-gray-600'>
          Total de missões catalogadas: {planosFiltrados.length}
        </p>
      </div>

      {/* Grid de planos de aula */}
      <section aria-live='polite'>
        {planosFiltrados.length === 0 ? (
          mostrarFavoritos ? (
            <div className='bg-amber-50 border-2 border-dashed border-amber-200 rounded-2xl p-10 text-center animate-fadeIn'>
              <span className='text-5xl mb-4 block' aria-hidden='true'>
                ⭐
              </span>
              <h3 className='text-xl font-bold text-amber-900 mb-2'>
                Você ainda não salvou nenhum plano como favorito.
              </h3>
              <p className='text-amber-700 max-w-lg mx-auto'>
                Clique no ícone de estrela (☆) no card de qualquer missão para
                guardá-la aqui e acessá-la com rapidez durante seus planejamentos.
              </p>
              <button
                type='button'
                onClick={() => setMostrarFavoritos(false)}
                className='mt-6 bg-amber-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors shadow-sm print:hidden focus:outline-none focus:ring-2 focus:ring-amber-500'
              >
                Ver Todas as Missões
              </button>
            </div>
          ) : mostrarAplicados ? (
            <div className='bg-emerald-50 border-2 border-dashed border-emerald-200 rounded-2xl p-10 text-center animate-fadeIn'>
              <span className='text-5xl mb-4 block' aria-hidden='true'>
                📋
              </span>
              <h3 className='text-xl font-bold text-emerald-900 mb-2'>
                Nenhum plano marcado como aplicado em sala ainda.
              </h3>
              <p className='text-emerald-700 max-w-lg mx-auto'>
                Ao concluir a regência de uma missão com a sua turma, abra os
                detalhes do plano e marque a opção <strong>"Aplicado em sala"</strong> para
                acompanhar seu progresso escolar.
              </p>
              <button
                type='button'
                onClick={() => setMostrarAplicados(false)}
                className='mt-6 bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm print:hidden focus:outline-none focus:ring-2 focus:ring-emerald-500'
              >
                Ver Todas as Missões
              </button>
            </div>
          ) : (
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
                type='button'
                onClick={() => {
                  setBusca("");
                  setFiltroEixo("Todos");
                  setFiltroModalidade("Todas");
                  setFiltroAno("Todos");
                  setFiltroHabilidade("Todas");
                  setMostrarFavoritos(false);
                  setMostrarAplicados(false);
                }}
                className='mt-6 bg-amber-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors shadow-sm print:hidden focus:outline-none focus:ring-2 focus:ring-amber-500'
              >
                Limpar Filtros
              </button>
            </div>
          )
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {planosFiltrados.map((plano) => (
              <article
                key={plano.id}
                className='relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group'
              >
                <div className='h-2 bg-green-800 w-full group-hover:bg-green-500 transition-colors'></div>

                <div className='p-6 flex-1 flex flex-col'>
                  <div className='flex flex-wrap items-center gap-2 mb-4'>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-2 shadow-sm uppercase tracking-wide ${getCorDoEixo(plano.eixo)}`}
                    >
                      {plano.eixo}
                    </span>

                    {plano.tipo && (
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-300 uppercase tracking-wide'>
                        {plano.tipo.includes("Desplugada")
                          ? "🔌❌ Desplugada"
                          : plano.tipo}
                      </span>
                    )}

                    {aplicados.includes(plano.id) && (
                      <span
                        className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs'
                        title='Esta missão já foi aplicada em sala de aula'
                      >
                        <span aria-hidden='true'>✓</span> Aplicado
                      </span>
                    )}
                  </div>

                  <h2 className='text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-800 transition-colors'>
                    {plano.tituloCatalogo || plano.titulo}
                  </h2>
                  <button
                    type='button'
                    onClick={() => alternarFavorito(plano.id)}
                    aria-pressed={favoritos.includes(plano.id)}
                    aria-label={`${favoritos.includes(plano.id) ? "Remover dos" : "Adicionar aos"} favoritos: ${plano.tituloCatalogo || plano.titulo}`}
                    className='absolute top-5 right-5 text-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 rounded'
                  >
                    {favoritos.includes(plano.id) ? "★" : "☆"}
                  </button>
                  <p className='text-gray-600 text-sm flex-1 mb-6 leading-relaxed line-clamp-3'>
                    {plano.objetoConhecimento}
                  </p>

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
