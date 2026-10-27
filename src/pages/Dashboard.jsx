import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { planosDeAula } from "../data/planos";
import GuiaCaixaMasterModal from "../components/GuiaCaixaMasterModal";

export default function Dashboard() {
  const totalPlanos = planosDeAula.length;

  const [metricasGlobais, setMetricasGlobais] = useState({
    views: 0,
    downloads: 0,
    avaliacoes: 0,
    mediaEstrelas: 0,
  });
  const [loadingMetricas, setLoadingMetricas] = useState(true);
  const [modalCaixaMasterAberto, setModalCaixaMasterAberto] = useState(false);

  // Agrega as métricas de visualizações, downloads e avaliações armazenadas no Firestore
  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        const metricasSnap = await getDocs(collection(db, "metricas_planos"));
        let totalViews = 0;
        let totalDownloads = 0;

        metricasSnap.forEach((doc) => {
          const data = doc.data();
          totalViews += data.visualizacoes || 0;
          totalDownloads += data.downloads || 0;
        });

        const avaliacoesSnap = await getDocs(collection(db, "diario_de_bordo"));
        let totalAvaliacoes = 0;
        let somaEstrelas = 0;

        avaliacoesSnap.forEach((doc) => {
          const data = doc.data();
          totalAvaliacoes++;
          somaEstrelas += data.estrelas || 5;
        });

        const media =
          totalAvaliacoes > 0
            ? (somaEstrelas / totalAvaliacoes).toFixed(1)
            : 0;

        setMetricasGlobais({
          views: totalViews,
          downloads: totalDownloads,
          avaliacoes: totalAvaliacoes,
          mediaEstrelas: media,
        });
      } catch (error) {
        console.error("Erro ao buscar métricas da nuvem:", error);
      } finally {
        setLoadingMetricas(false);
      }
    };

    fetchMetricas();
  }, []);

  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto animate-fadeIn'>
      {/* Painel de Boas-Vindas (Hero) */}
      <section className='bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-green-500'>
        <div className='max-w-3xl'>
          <div className='inline-flex flex-wrap items-center gap-3.5 sm:gap-4 bg-green-950/85 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-xl mb-6 border border-white/20'>
            <img
              src='/assets/logo IF.png'
              alt='Instituto Federal de Mato Grosso do Sul - Câmpus Jardim'
              className='h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow'
            />
            <div className='h-10 sm:h-12 w-px bg-white/25 hidden sm:block' aria-hidden='true' />
            <img
              src='/assets/logo IFMaker.png'
              alt='Laboratório IFMaker'
              className='h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow'
            />
            <div className='h-10 sm:h-12 w-px bg-white/25 hidden sm:block' aria-hidden='true' />
            <span className='text-xs sm:text-sm font-bold text-green-100 uppercase tracking-wider max-w-xs leading-snug'>
              IFMS Câmpus Jardim • Laboratório IFMaker (Edital nº 054/2025 – PROPI)
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight tracking-tight'>
            Patrimônio de Nioaque em 3D
          </h1>
          <p className='text-green-200 text-lg sm:text-xl md:text-2xl font-semibold mb-6 leading-snug'>
            Manual pedagógico de computação e cultura maker no ensino fundamental
          </p>
          <p className='text-green-50 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-2xl'>
            Tecnologia Maker, Pensamento Computacional e Memória Regional de Nioaque/MS. Explore
            metodologias ativas, réplicas táteis impressas em 3D e dinâmicas desplugadas alinhadas à BNCC para o
            5º ano do Ensino Fundamental.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Link
              to='/planos'
              className='inline-flex justify-center items-center bg-white text-green-900 font-bold py-3.5 px-7 rounded-xl shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300'
            >
              <span aria-hidden='true' className='mr-2'>
                📚
              </span>{" "}
              Acessar Catálogo de Aulas
            </Link>
            <Link
              to='/manual'
              className='inline-flex justify-center items-center bg-transparent border-2 border-green-300 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300'
            >
              <span aria-hidden='true' className='mr-2'>
                📖
              </span>{" "}
              Ler Manual Pedagógico
            </Link>
            <Link
              to='/capitulos/sobre'
              className='inline-flex justify-center items-center bg-transparent border-2 border-white/40 text-green-100 font-medium py-3.5 px-6 rounded-xl hover:bg-green-900/40 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300 text-sm'
            >
              <span aria-hidden='true' className='mr-2'>
                🏛️
              </span>{" "}
              Expediente Institucional
            </Link>
          </div>
        </div>

        {/* Ilustração Circular com Movimento Dinâmico no Hover */}
        <div className='hidden lg:flex items-center justify-center bg-white/10 w-48 h-48 sm:w-52 sm:h-52 rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm transform hover:rotate-6 transition-transform duration-500 flex-shrink-0'>
          <span
            className='text-5xl sm:text-6xl flex items-center justify-center gap-2 whitespace-nowrap select-none'
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
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse'></div>
            <h2 className='text-xl font-bold text-gray-800 uppercase tracking-wider text-sm'>
              Impacto da Plataforma ao Vivo
            </h2>
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
        </section>
      )}

      {/* Indicadores Pedagógicos */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-16'>
        <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 sm:gap-5 transform hover:-translate-y-1 transition-transform border-l-4 border-l-amber-500'>
          <div
            className='bg-amber-50 text-amber-600 p-4 rounded-xl text-3xl font-bold flex-shrink-0'
            aria-hidden='true'
          >
            🎯
          </div>
          <div>
            <p className='text-gray-500 font-bold uppercase tracking-wider text-xs mb-1'>
              Missões Validadas
            </p>
            <h3 className='text-3xl font-black text-gray-900'>
              {totalPlanos} Aulas
            </h3>
          </div>
        </div>

        <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 sm:gap-5 transform hover:-translate-y-1 transition-transform border-l-4 border-l-blue-500'>
          <div
            className='bg-blue-50 text-blue-600 p-4 rounded-xl text-3xl font-bold flex-shrink-0'
            aria-hidden='true'
          >
            🧩
          </div>
          <div>
            <p className='text-gray-500 font-bold uppercase tracking-wider text-xs mb-1'>
              Da BNCC Computação
            </p>
            <h3 className='text-3xl font-black text-gray-900'>
              3 Eixos
            </h3>
          </div>
        </div>

        <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 sm:gap-5 transform hover:-translate-y-1 transition-transform border-l-4 border-l-emerald-500'>
          <div
            className='bg-emerald-50 text-emerald-600 p-4 rounded-xl text-3xl font-bold flex-shrink-0'
            aria-hidden='true'
          >
            📍
          </div>
          <div>
            <p className='text-gray-500 font-bold uppercase tracking-wider text-xs mb-1'>
              História & Paleontologia
            </p>
            <h3 className='text-3xl font-black text-gray-900'>
              100% Nioaque
            </h3>
          </div>
        </div>
      </section>

      {/* Jornada do Educador */}
      <section className='mb-16'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
            Como utilizar a plataforma?
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Uma trilha simples e estruturada para transformar a sua sala de aula
            em um laboratório maker.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
          {/* Linha conectora (visível apenas no desktop) */}
          <div className='hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-green-100 -z-10 transform -translate-y-1/2'></div>

          {/* Passo 1 */}
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10 flex flex-col justify-between'>
            <div>
              <div className='w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white'>
                1
              </div>
              <h4 className='font-bold text-gray-900 text-xl mb-3'>
                Base Teórica
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Acesse o nosso Manual Pedagógico para entender as metodologias
                ativas, a Taxonomia de Bloom e os combinados da Cultura Maker.
              </p>
            </div>
            <Link
              to='/manual'
              className='text-green-700 font-bold hover:text-green-900 hover:underline'
            >
              Ler o Manual →
            </Link>
          </div>

          {/* Passo 2 */}
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10 flex flex-col justify-between'>
            <div>
              <div className='w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white'>
                2
              </div>
              <h4 className='font-bold text-gray-900 text-xl mb-3'>
                Escolha a Missão
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Navegue pelo Catálogo e selecione um plano de aula baseado na
                habilidade da BNCC ou no eixo computacional desejado.
              </p>
            </div>
            <Link
              to='/planos'
              className='text-green-700 font-bold hover:text-green-900 hover:underline'
            >
              Ver Catálogo →
            </Link>
          </div>

          {/* Passo 3 */}
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10 flex flex-col justify-between'>
            <div>
              <div className='w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white'>
                3
              </div>
              <h4 className='font-bold text-gray-900 text-xl mb-3'>
                Mão na Massa
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Imprima as rubricas, organize os artefatos 3D nas ilhas de trabalho e guie seus alunos na resolução de problemas.
              </p>
            </div>
            <button
              type='button'
              onClick={() => setModalCaixaMasterAberto(true)}
              className='text-emerald-700 font-bold hover:text-emerald-900 hover:underline inline-flex items-center justify-center'
            >
              Guia da Caixa Master →
            </button>
          </div>
        </div>

        {/* CARD INTEGRADO: LOGÍSTICA & PRIMEIROS PASSOS COM A CAIXA MASTER */}
        <div className='mt-10 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border-2 border-emerald-300 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
          <div className='flex items-start sm:items-center gap-4'>
            <div className='h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-sm flex-shrink-0'>
              🧭
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <span className='bg-emerald-200 text-emerald-900 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide'>
                  Logística do Passo 3
                </span>
                <span className='text-xs font-bold text-emerald-800'>Kit Pedagógico IFMaker</span>
              </div>
              <h3 className='text-lg sm:text-xl font-extrabold text-gray-900 mt-0.5'>
                Primeiros Passos com a Caixa Master
              </h3>
              <p className='text-xs sm:text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed'>
                Aprenda a organizar os 8 potes das ilhas de alunos, a rotina de escrita e limpeza com canetas no Polaseal e os cuidados térmicos essenciais com os artefatos 3D.
              </p>
            </div>
          </div>

          <button
            type='button'
            onClick={() => setModalCaixaMasterAberto(true)}
            className='whitespace-nowrap bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold py-3 px-5 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center gap-2 self-stretch md:self-auto justify-center flex-shrink-0'
          >
            <span>🎒</span> Abrir Guia Ilustrado
          </button>
        </div>
      </section>

      {/* ========================================== */}
      {/* ÁREA DE DESTAQUES PEDAGÓGICOS */}
      {/* ========================================== */}
      <section className='bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200'>
        <div className='mb-8 text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 mb-2'>
            Destaques Metodológicos
          </h2>
          <p className='text-gray-600 text-lg'>
            Pilares fundamentais da nossa regência maker.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start gap-5 hover:border-indigo-200 transition-colors'>
            <div
              className='bg-indigo-50 p-4 rounded-full text-indigo-600 text-2xl'
              aria-hidden='true'
            >
              📊
            </div>
            <div>
              <h4 className='font-bold text-gray-900 text-lg md:text-xl mb-2'>
                Rubricas e Taxonomia
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Todas as aulas contêm matrizes de avaliação formativa
                estruturadas na Taxonomia de Bloom (do conhecimento à criação),
                facilitando o registro do professor.
              </p>
            </div>
          </div>

          <div className='bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start gap-5 hover:border-rose-200 transition-colors'>
            <div
              className='bg-rose-50 p-4 rounded-full text-rose-600 text-2xl'
              aria-hidden='true'
            >
              🔌
            </div>
            <div>
              <h4 className='font-bold text-gray-900 text-lg md:text-xl mb-2'>
                Computação Desplugada
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                Planos projetados para ensinar Decomposição, Algoritmos e
                Debugging utilizando material tangível e impresso em 3D,
                democratizando o ensino sem depender de internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL ILUSTRADO: PRIMEIROS PASSOS COM A CAIXA MASTER */}
      <GuiaCaixaMasterModal
        aberto={modalCaixaMasterAberto}
        aoFechar={() => setModalCaixaMasterAberto(false)}
      />
    </div>
  );
}
