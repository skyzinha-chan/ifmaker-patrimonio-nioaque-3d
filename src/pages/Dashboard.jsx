// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { planosDeAula } from '../data/planos'; // Para puxarmos métricas dinâmicas

export default function Dashboard() {
  // Calculando métricas reais do seu banco de dados
  const totalPlanos = planosDeAula.length;

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto animate-fadeIn">
      
      {/* HERO BANNER (Painel de Boas-Vindas) */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-green-500">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-green-800 text-green-100 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-green-600 shadow-sm">
            Projeto IFMaker Educador
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Patrimônio de Nioaque em 3D
          </h1>
          <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8">
            Tecnologia Maker e Cultura Local na Educação Básica. Explore metodologias ativas e computação desplugada alinhadas à BNCC para o 5º ano do Ensino Fundamental.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/planos" 
              className="bg-white text-green-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-50 hover:-translate-y-1 transition-all duration-300"
            >
              📚 Acessar o Catálogo de Aulas
            </Link>
            <Link 
              to="/capitulos/sobre" 
              className="bg-green-800 text-white border border-green-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
            >
              🏛️ Expediente Institucional
            </Link>
          </div>
        </div>
        
        {/* Ilustração / Destaque Visual */}
        <div className="hidden lg:flex items-center justify-center bg-white/10 p-8 rounded-full border-4 border-white/20 shadow-inner">
          <span className="text-7xl" role="img" aria-label="Dinossauro e Tecnologia">
            🦖🖨️
          </span>
        </div>
      </section>

      {/* CARDS DE MÉTRICAS RÁPIDAS (Data-Driven) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-amber-500">
          <div className="text-amber-500 text-4xl mb-2">📚</div>
          <h3 className="text-3xl font-extrabold text-gray-900">{totalPlanos}</h3>
          <p className="text-gray-600 font-medium mt-1">Missões Maker Validadas</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
          <div className="text-blue-500 text-4xl mb-2">🧩</div>
          <h3 className="text-3xl font-extrabold text-gray-900">3 Eixos</h3>
          <p className="text-gray-600 font-medium mt-1">Da BNCC Computação</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-emerald-500">
          <div className="text-emerald-500 text-4xl mb-2">📍</div>
          <h3 className="text-3xl font-extrabold text-gray-900">1 Foco Local</h3>
          <p className="text-gray-600 font-medium mt-1">História e Ciência de Nioaque</p>
        </div>
      </section>

      {/* ÁREA DE DESTAQUES PEDAGÓGICOS */}
      <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Destaques do Guia Prático</h2>
          <p className="text-gray-600">Recursos fundamentais para a sua regência na sala de aula.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg text-indigo-700">🧠</div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Rubricas e Taxonomia</h4>
              <p className="text-sm text-gray-600 mt-1">
                Todas as aulas contêm matrizes de avaliação formativa estruturadas na Taxonomia de Bloom (do conhecimento à criação).
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="bg-rose-100 p-3 rounded-lg text-rose-700">⚙️</div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Computação Desplugada</h4>
              <p className="text-sm text-gray-600 mt-1">
                Planos projetados para ensinar Decomposição, Algoritmos e Debugging utilizando material tangível e impresso em 3D, sem depender de internet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}