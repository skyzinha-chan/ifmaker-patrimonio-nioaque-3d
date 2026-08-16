// src/pages/PlanoDetalhe.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { planosDeAula } from "../data/planos";

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

  // Encontra o índice atual e o objeto correspondente no array total de planos
  const currentIndex = planosDeAula.findIndex((p) => p.id === id);
  const plano = planosDeAula[currentIndex];

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

      {/* CABEÇALHO DO PLANO */}
      <header className='border-b-4 border-green-800 pb-6 mb-8'>
        <div className='flex flex-wrap gap-3 mb-4'>
          <span className='bg-gray-100 text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm'>
            {plano.ano || "5º Ano (Ensino Fundamental)"}
          </span>
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold border-2 shadow-sm uppercase tracking-wide ${getCorDoEixo(plano.eixo)}`}
          >
            {plano.eixo}
          </span>
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

      {/* HABILIDADES DA BNCC */}
      {plano.habilidades && (
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-green-900 mb-4 flex items-center gap-2'>
            📌 Habilidades da BNCC
          </h2>
          <ul className='space-y-3'>
            {plano.habilidades.map((hab, index) => (
              <li
                key={index}
                className='flex flex-col md:flex-row gap-2 bg-white p-4 border border-gray-200 rounded-lg shadow-sm'
              >
                <span className='font-bold text-green-700 min-w-max'>
                  {hab.codigo}
                </span>
                <span className='text-gray-700 leading-relaxed text-sm'>
                  {hab.descricao}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* A IDEIA PRÁTICA */}
      {plano.ideiaPratica && (
        <section className='mb-10 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm'>
          <h2 className='text-xl font-bold text-green-900 mb-3'>
            💡 A Ideia Prática
          </h2>
          <p className='text-gray-800 leading-relaxed text-base'>
            {plano.ideiaPratica}
          </p>
        </section>
      )}

      {/* BOTÃO DO PDF ORIGINAL */}
      {plano.pdfUrl && (
        <section className='mt-8 flex justify-center print:hidden'>
          <a
            href={plano.pdfUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center gap-2 text-sm'
          >
            🖨️ Abrir Material Completo (PDF Original do IFMS)
          </a>
        </section>
      )}

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
