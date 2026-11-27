import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { planosDeAula } from "../data/planos";

export default function Dashboard() {

  const [metricasGlobais, setMetricasGlobais] = useState({
    visitasSite: 0,
    views: 0,
    downloads: 0,
    curtidas: 0,
    compartilhamentos: 0,
    aplicados: 0,
    avaliacoes: 0,
    mediaEstrelas: 0,
  });
  const [rankingPlanos, setRankingPlanos] = useState([]);
  const [cidadesAlcancadas, setCidadesAlcancadas] = useState([]);
  const [estadosAlcancados, setEstadosAlcancados] = useState(0);
  const [ultimosRelatos, setUltimosRelatos] = useState([]);
  const [engajamentoPorEixo, setEngajamentoPorEixo] = useState([]);
  const [loadingMetricas, setLoadingMetricas] = useState(true);

  // Agrega as métricas de visualizações, downloads e avaliações armazenadas no Firestore
  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        const [siteSnap, metricasSnap, avaliacoesSnap] = await Promise.all([
          getDoc(doc(db, "metricas_site", "geral")).catch(() => null),
          getDocs(collection(db, "metricas_planos")),
          getDocs(collection(db, "diario_de_bordo")),
        ]);

        const visitasSite =
          siteSnap && siteSnap.exists() ? siteSnap.data().visitas || 0 : 0;

        let totalViews = 0;
        let totalDownloads = 0;
        let totalCurtidas = 0;
        let totalCompartilhamentos = 0;
        let totalAplicados = 0;
        const mapaMetricas = {};

        metricasSnap.forEach((d) => {
          const data = d.data();
          totalViews += data.visualizacoes || 0;
          totalDownloads += data.downloads || 0;
          totalCurtidas += data.curtidas || 0;
          totalCompartilhamentos += data.compartilhamentos || 0;
          totalAplicados += Math.max(0, data.aplicadosEmSala || 0);
          mapaMetricas[d.id] = {
            views: data.visualizacoes || 0,
            downloads: data.downloads || 0,
            curtidas: data.curtidas || 0,
            compartilhamentos: data.compartilhamentos || 0,
          };
        });

        let totalAvaliacoes = 0;
        let somaEstrelas = 0;
        const mapaCidades = new Set();
        const mapaEstados = new Set();
        const relatosLista = [];

        avaliacoesSnap.forEach((d) => {
          const data = d.data();
          totalAvaliacoes++;
          somaEstrelas += data.estrelas || 5;
          if (data.aplicadoEmSala) {
            totalAplicados++;
          }
          if (data.cidade && data.estado) {
            mapaCidades.add(`${data.cidade} - ${data.estado}`);
            mapaEstados.add(data.estado);
          }
          relatosLista.push({
            id: d.id,
            ...data,
            ts: data.createdAt?.toMillis?.() || 0,
          });
        });

        relatosLista.sort((a, b) => b.ts - a.ts);
        setCidadesAlcancadas(Array.from(mapaCidades).sort());
        setEstadosAlcancados(mapaEstados.size);
        setUltimosRelatos(relatosLista.slice(0, 3));

        const media =
          totalAvaliacoes > 0
            ? (somaEstrelas / totalAvaliacoes).toFixed(1)
            : 0;

        const ranking = planosDeAula
          .map((plano) => {
            const m = mapaMetricas[plano.id] || {
              views: 0,
              downloads: 0,
              curtidas: 0,
              compartilhamentos: 0,
            };
            return {
              ...plano,
              ...m,
              score: m.views + m.downloads * 2 + m.curtidas * 3,
            };
          })
          .sort((a, b) => b.score - a.score)
          .slice(0, 5);

        setMetricasGlobais({
          visitasSite,
          views: totalViews,
          downloads: totalDownloads,
          curtidas: totalCurtidas,
          compartilhamentos: totalCompartilhamentos,
          aplicados: totalAplicados,
          avaliacoes: totalAvaliacoes,
          mediaEstrelas: media,
        });
        setRankingPlanos(ranking);

        const mapaEixos = {};
        planosDeAula.forEach((plano) => {
          const eixo = plano.eixo || "Outros";
          const m = mapaMetricas[plano.id] || { views: 0, downloads: 0 };
          if (!mapaEixos[eixo]) {
            mapaEixos[eixo] = { eixo, views: 0, downloads: 0 };
          }
          mapaEixos[eixo].views += m.views;
          mapaEixos[eixo].downloads += m.downloads;
        });
        setEngajamentoPorEixo(
          Object.values(mapaEixos).sort((a, b) => b.views - a.views),
        );
      } catch (error) {
        console.error("Erro ao buscar métricas da nuvem:", error);
      } finally {
        setLoadingMetricas(false);
      }
    };

    fetchMetricas();
  }, []);

  const exportarRelatorioCSV = () => {
    const linhas = [
      ["Indicador", "Valor"],
      ["Visitas ao Site", metricasGlobais.visitasSite],
      ["Páginas Visualizadas", metricasGlobais.views],
      ["Materiais Baixados", metricasGlobais.downloads],
      ["Taxa de Download (%)", metricasGlobais.views > 0 ? Math.round((metricasGlobais.downloads / metricasGlobais.views) * 100) : 0],
      ["Média de Avaliação", metricasGlobais.mediaEstrelas],
      ["Relatos Docentes", metricasGlobais.avaliacoes],
      ["Marcados como Útil", metricasGlobais.curtidas],
      ["Compartilhamentos", metricasGlobais.compartilhamentos],
      ["Aplicados em Sala", metricasGlobais.aplicados],
      ["Estados Alcançados (UF)", estadosAlcancados],
      ["Cidades Alcançadas", cidadesAlcancadas.length],
      [],
      ["Ranking Top 5 Planos", "Views", "Downloads", "Útil", "Compartilhamentos"],
      ...rankingPlanos.map((p, i) => [`${i + 1}º - ${p.titulo}`, p.views, p.downloads, p.curtidas, p.compartilhamentos]),
    ];

    const csv = "\uFEFF" + linhas.map((l) => l.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `relatorio-ifmaker-nioaque-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto animate-fadeIn'>
      {/* Painel de Boas-Vindas (Hero) */}
      <section className='bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-6 md:p-9 text-white shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-8 border-green-500'>
        <div className='max-w-3xl'>
          <div className='inline-flex flex-wrap items-center gap-3 bg-green-950/85 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl mb-4 border border-white/20'>
            <img
              src='/assets/logo IF.png'
              alt='Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul - Câmpus Jardim'
              className='h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow'
            />
            <div className='h-8 sm:h-10 w-px bg-white/25 hidden sm:block' aria-hidden='true' />
            <img
              src='/assets/logo IFMaker.png'
              alt='Laboratório IFMaker'
              className='h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow'
            />
            <div className='h-8 sm:h-10 w-px bg-white/25 hidden sm:block' aria-hidden='true' />
            <span className='text-[11px] sm:text-xs font-bold text-green-100 uppercase tracking-wider max-w-xs leading-snug'>
              IFMS Câmpus Jardim • Laboratório IFMaker (Edital nº 054/2025 – PROPI)
            </span>
          </div>

          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight tracking-tight'>
            Patrimônio de Nioaque em 3D
          </h1>
          <p className='text-green-200 text-base sm:text-lg md:text-xl font-semibold mb-4 leading-snug'>
            Manual pedagógico de computação e cultura maker no ensino fundamental
          </p>
          <p className='text-green-50 text-sm md:text-base leading-relaxed mb-6 font-medium max-w-2xl'>
            Tecnologia Maker, Pensamento Computacional e Memória Regional de Nioaque/MS. Explore
            metodologias ativas, réplicas táteis impressas em 3D e dinâmicas desplugadas alinhadas à BNCC para o
            5º ano do Ensino Fundamental.
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link
              to='/planos'
              className='inline-flex justify-center items-center bg-white text-green-900 font-bold py-2.5 px-5 rounded-xl shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300 text-sm'
            >
              <span aria-hidden='true' className='mr-2'>
                📚
              </span>{" "}
              Acessar Catálogo de Aulas
            </Link>
            <Link
              to='/manual'
              className='inline-flex justify-center items-center bg-transparent border-2 border-green-300 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300 text-sm'
            >
              <span aria-hidden='true' className='mr-2'>
                📖
              </span>{" "}
              Ler Manual Pedagógico
            </Link>
            <Link
              to='/capitulos/sobre'
              className='inline-flex justify-center items-center bg-transparent border-2 border-white/40 text-green-100 font-medium py-2.5 px-5 rounded-xl hover:bg-green-900/40 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300 text-sm'
            >
              <span aria-hidden='true' className='mr-2'>
                🏛️
              </span>{" "}
              Expediente Institucional
            </Link>
          </div>
        </div>

        {/* Ilustração Circular com Movimento Dinâmico no Hover */}
        <div className='hidden lg:flex items-center justify-center bg-white/10 w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm transform hover:rotate-6 transition-transform duration-500 flex-shrink-0'>
          <span
            className='text-5xl flex items-center justify-center gap-2 whitespace-nowrap select-none'
            role='img'
            aria-label='Tecnologia e Paleontologia'
          >
            <span>🦖</span>
            <span>🖨️</span>
          </span>
        </div>
      </section>

      {/* Painel de Métricas de Impacto (Firestore) */}
      {!loadingMetricas && (
        <section className='mb-12 print:hidden' aria-live='polite'>
          <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
            <div className='flex items-center gap-3'>
              <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse'></div>
              <h2 className='text-xl font-bold text-gray-800 uppercase tracking-wider text-sm'>
                Impacto da Plataforma ao Vivo
              </h2>
            </div>
            <button
              type='button'
              onClick={exportarRelatorioCSV}
              className='inline-flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 hover:bg-green-100 text-green-900 font-bold px-4 py-2 text-xs transition shadow-sm'
            >
              📥 Exportar Relatório (CSV)
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-slate-800 text-white p-4 rounded-2xl shadow-lg border border-slate-700 flex items-center gap-5 transform hover:-translate-y-1 transition-transform'>
              <div
                className='bg-slate-700 p-4 rounded-xl text-3xl'
                aria-hidden='true'
              >
                👁️
              </div>
              <div>
                <p className='text-slate-400 font-bold uppercase tracking-wider text-xs mb-1'>
                  Páginas Visualizadas
                </p>
                <h3 className='text-3xl font-black'>{metricasGlobais.views}</h3>
              </div>
            </div>

            <div className='bg-slate-800 text-white p-4 rounded-2xl shadow-lg border border-slate-700 flex items-center gap-5 transform hover:-translate-y-1 transition-transform'>
              <div
                className='bg-slate-700 p-4 rounded-xl text-3xl'
                aria-hidden='true'
              >
                📥
              </div>
              <div>
                <p className='text-slate-400 font-bold uppercase tracking-wider text-xs mb-1'>
                  Materiais Baixados
                </p>
                <h3 className='text-3xl font-black'>
                  {metricasGlobais.downloads}
                </h3>
              </div>
            </div>

            <div className='bg-amber-50 p-4 rounded-2xl shadow-sm border border-amber-200 flex items-center gap-5 transform hover:-translate-y-1 transition-transform'>
              <div className='bg-amber-100 text-amber-600 p-4 rounded-xl text-3xl font-bold'>
                {metricasGlobais.mediaEstrelas}
              </div>
              <div>
                <p className='text-amber-700 font-bold uppercase tracking-wider text-xs mb-1'>
                  Média de Avaliação
                </p>
                <h3 className='text-sm font-medium text-amber-900'>
                  Baseado em <strong>{metricasGlobais.avaliacoes}</strong>{" "}
                  relatos docentes
                </h3>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4'>
              <span className='text-2xl' aria-hidden='true'>🌐</span>
              <div>
                <p className='text-gray-500 font-bold uppercase tracking-wider text-[11px]'>
                  Visitas ao Site
                </p>
                <h3 className='text-2xl font-black text-slate-800'>
                  {metricasGlobais.visitasSite}
                </h3>
              </div>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4'>
              <span className='text-2xl' aria-hidden='true'>👍</span>
              <div>
                <p className='text-gray-500 font-bold uppercase tracking-wider text-[11px]'>
                  Marcados como Útil
                </p>
                <h3 className='text-2xl font-black text-green-700'>
                  {metricasGlobais.curtidas}
                </h3>
              </div>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4'>
              <span className='text-2xl' aria-hidden='true'>🔗</span>
              <div>
                <p className='text-gray-500 font-bold uppercase tracking-wider text-[11px]'>
                  Compartilhamentos
                </p>
                <h3 className='text-2xl font-black text-blue-700'>
                  {metricasGlobais.compartilhamentos}
                </h3>
              </div>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4'>
              <span className='text-2xl' aria-hidden='true'>🏫</span>
              <div>
                <p className='text-gray-500 font-bold uppercase tracking-wider text-[11px]'>
                  Aplicados em Sala
                </p>
                <h3 className='text-2xl font-black text-amber-600'>
                  {metricasGlobais.aplicados}
                </h3>
              </div>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4'>
              <span className='text-2xl' aria-hidden='true'>📈</span>
              <div>
                <p className='text-gray-500 font-bold uppercase tracking-wider text-[11px]'>
                  Taxa de Download
                </p>
                <h3 className='text-2xl font-black text-emerald-700'>
                  {metricasGlobais.views > 0
                    ? `${Math.round((metricasGlobais.downloads / metricasGlobais.views) * 100)}%`
                    : "0%"}
                </h3>
              </div>
            </div>
          </div>

          {rankingPlanos.length > 0 && (
            <div className='mt-8'>
              <div className='flex flex-wrap items-center justify-between gap-4 mb-4'>
                <h3 className='text-sm font-extrabold text-gray-800 uppercase tracking-wider'>
                  🔥 Planos Mais Populares
                </h3>
                <Link
                  to='/planos'
                  className='text-xs font-bold text-green-700 hover:text-green-900 hover:underline'
                >
                  Ver todos os {planosDeAula.length} planos →
                </Link>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-6'>
                {rankingPlanos.slice(0, 3).map((plano, idx) => (
                  <Link
                    key={plano.id}
                    to={`/planos/${plano.id}`}
                    className='bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-400 transition-all flex flex-col justify-between group'
                  >
                    <div>
                      <div className='flex items-center justify-between gap-2 mb-2.5'>
                        <span className='text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-green-100 text-green-800'>
                          #{idx + 1} Popular
                        </span>
                        <span className='text-xs font-semibold text-gray-500'>
                          {plano.disciplina}
                        </span>
                      </div>
                      <h4 className='text-base font-bold text-gray-900 group-hover:text-green-800 transition-colors mb-1.5'>
                        {plano.titulo}
                      </h4>
                      <p className='text-xs text-gray-600 line-clamp-2 mb-3'>
                        {plano.resumo || plano.objetivoGeral}
                      </p>
                    </div>
                    <div className='flex items-center gap-4 text-xs font-semibold text-gray-500 pt-2.5 border-t border-gray-100'>
                      <span>👁️ {plano.views}</span>
                      <span>📥 {plano.downloads}</span>
                      <span>👍 {plano.curtidas}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-200'>
                  <h3 className='text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3'>
                    🗺️ Alcance Geográfico ({estadosAlcancados} {estadosAlcancados === 1 ? "estado" : "estados"} • {cidadesAlcancadas.length} {cidadesAlcancadas.length === 1 ? "cidade" : "cidades"})
                  </h3>
                  {cidadesAlcancadas.length > 0 ? (
                    <div className='flex flex-wrap gap-2'>
                      {cidadesAlcancadas.map((loc) => (
                        <span
                          key={loc}
                          className='px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-900 text-xs font-semibold'
                        >
                          📍 {loc}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className='text-xs text-gray-500'>
                      Nenhuma cidade registrada nos relatos ainda.
                    </p>
                  )}
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-200'>
                  <h3 className='text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3'>
                    💬 Últimos Relatos Docentes
                  </h3>
                  {ultimosRelatos.length > 0 ? (
                    <div className='space-y-3'>
                      {ultimosRelatos.map((relato) => (
                        <div
                          key={relato.id}
                          className='p-3 rounded-xl bg-slate-50 border border-slate-100'
                        >
                          <div className='flex items-center justify-between gap-2 mb-1'>
                            <span className='text-xs font-bold text-gray-900'>
                              {relato.autor || "Docente"}
                              {relato.cidade && relato.estado ? ` • ${relato.cidade}/${relato.estado}` : ""}
                            </span>
                            <span className='text-xs text-amber-500 font-bold'>
                              {"★".repeat(relato.estrelas || 5)}
                            </span>
                          </div>
                          <p className='text-xs text-gray-600 line-clamp-2'>
                            {relato.texto}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className='text-xs text-gray-500'>
                      Nenhum relato docente registrado ainda.
                    </p>
                  )}
                </div>
              </div>

              {engajamentoPorEixo.length > 0 && (
                <div className='mb-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-200'>
                  <h3 className='text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4'>
                    🧩 Engajamento por Eixo da BNCC
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {engajamentoPorEixo.map((item) => (
                      <div
                        key={item.eixo}
                        className='p-4 rounded-xl bg-slate-50 border border-slate-100'
                      >
                        <p className='text-xs font-extrabold text-green-900 uppercase mb-2'>
                          {item.eixo}
                        </p>
                        <div className='flex items-center gap-4 text-sm font-bold text-gray-700'>
                          <span>👁️ {item.views} views</span>
                          <span>📥 {item.downloads} downloads</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-200'>
                <h3 className='text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4'>
                  🏆 Ranking Completo (Top 5)
                </h3>
              <div className='divide-y divide-gray-100'>
                {rankingPlanos.map((plano, index) => (
                  <Link
                    key={plano.id}
                    to={`/planos/${plano.id}`}
                    className='py-3 flex flex-wrap items-center justify-between gap-3 hover:bg-green-50/60 px-2 rounded-lg transition-colors'
                  >
                    <div className='flex items-center gap-3'>
                      <span className='w-7 h-7 rounded-full bg-green-100 text-green-800 font-extrabold text-xs flex items-center justify-center'>
                        {index + 1}º
                      </span>
                      <div>
                        <p className='font-bold text-gray-900 text-sm'>{plano.titulo}</p>
                        <p className='text-xs text-gray-500'>{plano.disciplina}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4 text-xs font-semibold text-gray-600'>
                      <span>👁️ {plano.views}</span>
                      <span>📥 {plano.downloads}</span>
                      <span>👍 {plano.curtidas}</span>
                      <span>🔗 {plano.compartilhamentos}</span>
                    </div>
                  </Link>
                ))}
              </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
