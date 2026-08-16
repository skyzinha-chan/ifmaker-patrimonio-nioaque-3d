// src/pages/Catalogo.jsx
import React from "react";
import { Link } from "react-router-dom";
import { planosDeAula } from "../data/planos";

// FUNÇÃO AUXILIAR DE UI/UX (Consistência do Design System da BNCC)
const getCorDoEixo = (eixo) => {
  // O operador '?.' protege o código caso algum plano venha sem a propriedade 'eixo'
  const eixoNormalizado = eixo?.toUpperCase() || "";

  // Usamos .includes() para capturar strings compostas (Ex: "MUNDO DIGITAL / CULTURA MAKER")
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
    // Cor exclusiva para planos puramente Maker (Roxo/Índigo harmônico)
    return "bg-indigo-600 border-indigo-200 text-white";
  }

  // Fallback de segurança (Cinza)
  return "bg-gray-600 border-gray-200 text-white";
};

export default function Catalogo() {
  return (
    <div className='p-6 md:p-10 max-w-7xl mx-auto'>
      {/* CABEÇALHO DA PÁGINA */}
      <header className='mb-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-green-900 tracking-tight'>
          Catálogo de Planos de Aula
        </h1>
        <p className='mt-3 text-lg text-gray-600 max-w-3xl'>
          Selecione uma das missões abaixo para visualizar os detalhes
          pedagógicos, habilidades da BNCC e baixar o material de apoio para
          impressão.
        </p>
      </header>

      {/* GRID RESPONSIVO DE CARTÕES */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {planosDeAula.map((plano) => (
          <article
            key={plano.id}
            className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col'
          >
            {/* Faixa superior neutra em verde institucional */}
            <div className='h-2 bg-green-800 w-full'></div>

            <div className='p-6 flex-1 flex flex-col'>
              {/* TAGS / LABELS DINÂMICAS COM AS CORES DA BNCC */}
              <div className='flex flex-wrap gap-2 mb-4'>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-2 shadow-sm uppercase tracking-wide ${getCorDoEixo(plano.eixo)}`}
                >
                  {plano.eixo}
                </span>

                {/* Opcional: Mostramos o 'tipo' ou 'ano' em uma tag neutra de alto contraste */}
                {plano.tipo && (
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-300 uppercase tracking-wide'>
                    {plano.tipo}
                  </span>
                )}
              </div>

              {/* TÍTULO E OBJETO DE CONHECIMENTO */}
              <h2 className='text-xl font-bold text-gray-900 mb-3 leading-tight'>
                {plano.titulo}
              </h2>
              <p className='text-gray-600 text-sm flex-1 mb-6 leading-relaxed'>
                {plano.objetoConhecimento}
              </p>

              {/* CALL TO ACTION */}
              <Link
                to={`/planos/${plano.id}`}
                className='mt-auto w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-sm'
              >
                Ver Plano Detalhado
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
