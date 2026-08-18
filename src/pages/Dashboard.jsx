// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { planosDeAula } from "../data/planos";

export default function Dashboard() {
  // 1. Calculando apenas métricas dinâmicas reais que podem crescer
  const totalPlanos = planosDeAula.length;

  // 2. Métricas Dinâmicas (Firebase Analytics)
  const [metricasGlobais, setMetricasGlobais] = useState({
    views: 0,
    downloads: 0,
    avaliacoes: 0,
    mediaEstrelas: 0
  });
  const [loadingMetricas, setLoadingMetricas] = useState(true);

  // 3. Efeito para buscar e agregar os dados em tempo real
  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        // Busca agregações de Visualizações e Downloads
        const metricasSnap = await getDocs(collection(db, 'metricas_planos'));
        let totalViews = 0;
        let totalDownloads = 0;
        
        metricasSnap.forEach(doc => {
          const data = doc.data();
          totalViews += data.visualizacoes || 0;
          totalDownloads += data.downloads || 0;
        });

        // Busca agregações do Diário de Bordo (Comentários e Estrelas)
        const avaliacoesSnap = await getDocs(collection(db, 'diario_de_bordo'));
        let totalAvaliacoes = 0;
        let somaEstrelas = 0;
        
        avaliacoesSnap.forEach(doc => {
          const data = doc.data();
          totalAvaliacoes++;
          somaEstrelas += data.estrelas || 5; // Fallback para 5 caso antigo não tenha estrela
        });

        // Calcula a média (com segurança para evitar divisão por zero)
        const media = totalAvaliacoes > 0 ? (somaEstrelas / totalAvaliacoes).toFixed(1) : 0;

        setMetricasGlobais({
          views: totalViews,
          downloads: totalDownloads,
          avaliacoes: totalAvaliacoes,
          mediaEstrelas: media
        });
      } catch (error) {
        console.error("Erro ao buscar métricas da nuvem:", error);
      } finally {
        setLoadingMetricas(false);
      }
    };

    fetchMetricas();
  }, []);

  // A métrica de Eixos permanece estática (Hardcoded), respeitando a regra de negócio da BNCC (3 Eixos).
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto animate-fadeIn'>
      {/* ========================================== */}
      {/* HERO BANNER (Painel de Boas-Vindas) */}
      {/* ========================================== */}
      <section className='bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-green-500'>
        <div className='max-w-2xl'>
          <span className='inline-block px-4 py-1.5 bg-green-800 text-green-100 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-green-600 shadow-sm'>
            Projeto IFMaker Educador
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight'>
            Patrimônio de Nioaque em 3D
          </h1>
          <p className='text-green-50 text-lg md:text-xl leading-relaxed mb-8 font-medium max-w-xl'>
            Tecnologia Maker e Cultura Local na Educação Básica. Explore
            metodologias ativas e computação desplugada alinhadas à BNCC para o
            5º ano do Ensino Fundamental.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              to='/planos'
              className='inline-flex justify-center items-center bg-white text-green-900 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300'
            >
              <span aria-hidden='true' className='mr-2'>
                📚
              </span>{" "}
              Acessar Catálogo de Aulas
            </Link>
            <Link
              to='/capitulos/sobre'
              className='inline-flex justify-center items-center bg-transparent border-2 border-green-400 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 transition-all duration-300'
            >
              <span aria-hidden='true' className='mr-2'>
                🏛️
              </span>{" "}
              Expediente Institucional
            </Link>
          </div>
        </div>

        {/* Ilustração / Destaque Visual */}
        <div className='hidden lg:flex items-center justify-center bg-white/10 p-10 rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm transform hover:rotate-6 transition-transform duration-500'>
          <span
            className='text-8xl'
            role='img'
            aria-label='Tecnologia e Paleontologia'
          >
            🦖🖨️
          </span>
        </div>
      </section>

      {/* ========================================== */}
      {/* NOVO: PAINEL DE IMPACTO EM TEMPO REAL (Firebase) */}
      {/* Escondido na impressão (print:hidden) para foco pedagógico */}
      {/* ========================================== */}
      {!loadingMetricas && (
        <section className='mb-12 print:hidden' aria-live='polite'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse'></div>
            <h2 className='text-xl font-bold text-gray-800 uppercase tracking-wider text-sm'>
              Impacto da Plataforma ao Vivo
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Card Views */}
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

            {/* Card Downloads */}
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

            {/* Card Avaliações */}
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

      {/* ========================================== */}
      {/* CARDS DE MÉTRICAS RÁPIDAS (Data-Driven + Regra BNCC) */}
      {/* ========================================== */}
      <section className='grid grid-cols-1 md:grid-cols-3 4 mb-16'>
        <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-b-4 border-b-amber-500 flex flex-col items-center text-center'>
          <div className='text-amber-500 text-4xl mb-3' aria-hidden='true'>
            🎯
          </div>
          <h3 className='text-4xl font-black text-gray-900 mb-1'>
            {totalPlanos}
          </h3>
          <p className='text-gray-500 font-bold uppercase tracking-wider text-sm'>
            Missões Validadas
          </p>
        </div>

        <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-b-4 border-b-blue-500 flex flex-col items-center text-center'>
          <div className='text-blue-500 text-4xl mb-3' aria-hidden='true'>
            🧩
          </div>
          <h3 className='text-4xl font-black text-gray-900 mb-1'>3 Eixos</h3>
          <p className='text-gray-500 font-bold uppercase tracking-wider text-sm'>
            Da BNCC Computação
          </p>
        </div>

        <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-b-4 border-b-emerald-500 flex flex-col items-center text-center'>
          <div className='text-emerald-500 text-4xl mb-3' aria-hidden='true'>
            📍
          </div>
          <h3 className='text-4xl font-black text-gray-900 mb-1'>100% Local</h3>
          <p className='text-gray-500 font-bold uppercase tracking-wider text-sm'>
            História de Nioaque
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* JORNADA DO EDUCADOR (Novo UX Onboarding) */}
      {/* ========================================== */}
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
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10'>
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
            <Link
              to='/manual'
              className='text-green-700 font-bold hover:text-green-900 hover:underline'
            >
              Ler o Manual →
            </Link>
          </div>

          {/* Passo 2 */}
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10'>
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
            <Link
              to='/planos'
              className='text-green-700 font-bold hover:text-green-900 hover:underline'
            >
              Ver Catálogo →
            </Link>
          </div>

          {/* Passo 3 */}
          <div className='bg-white p-8 rounded-2xl border border-green-100 shadow-lg text-center relative z-10'>
            <div className='w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white'>
              3
            </div>
            <h4 className='font-bold text-gray-900 text-xl mb-3'>
              Mão na Massa
            </h4>
            <p className='text-gray-600 text-sm leading-relaxed mb-6'>
              Imprima as rubricas curingas, organize os artefatos 3D nas "ilhas
              de aprendizagem" e guie seus alunos na resolução de problemas.
            </p>
          </div>
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
    </div>
  );
}
