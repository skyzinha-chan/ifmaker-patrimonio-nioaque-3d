// src/pages/Manual.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { manualCapitulos } from '../data/capitulos';

export default function Manual() {
  // Define o primeiro capítulo como ativo por padrão
  const [capituloAtivoId, setCapituloAtivoId] = useState(manualCapitulos[0].id);

  // Criando uma referência para a aba que está ativa
  const activeTabRef = useRef(null);

  // Derivação de estado para pegar os dados do capítulo atual
  const capituloAtual = manualCapitulos.find(
    (cap) => cap.id === capituloAtivoId,
  );

  // Efeito que centraliza a aba ativa suavemente sempre que o estado muda
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Não rola a página inteira para baixo
        inline: "center", // Centraliza o botão ativado na horizontal
      });
    }
  }, [capituloAtivoId]);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* NAVEGAÇÃO DE ABAS HORIZONTAIS (Escondida na impressão) */}
      <div className='bg-white border-b border-gray-200 shadow-sm print:hidden sticky top-16 z-40'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* overflow-x-auto permite deslizar no mobile sem quebrar o layout */}
          <nav
            className='flex space-x-4 overflow-x-auto py-3 scrollbar-hide md:scrollbar-default px-2'
            aria-label='Navegação dos capítulos do manual'
          >
            {manualCapitulos.map((capitulo) => {
              const isActive = capituloAtivoId === capitulo.id;
              return (
                <button
                  key={capitulo.id}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => setCapituloAtivoId(capitulo.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${
                    isActive
                      ? "bg-green-100 text-green-800 border border-green-200 shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {capitulo.titulo}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ÁREA DE LEITURA (Main Content) */}
      <main className='flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10'>
        {/* A classe 'prose' aplica formatação profissional de e-book automaticamente */}
        <article className='prose prose-slate md:prose-lg max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 print:shadow-none print:border-none print:p-0'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-green-900 mb-8 border-b-2 border-green-100 pb-4'>
            {capituloAtual.titulo}
          </h1>

          <div className='space-y-6'>
            {capituloAtual.conteudo.map((bloco, index) => {
              // Renderização Condicional baseada na arquitetura dos dados
              switch (bloco.tipo) {
                case "subtitulo":
                  return (
                    <h2
                      key={index}
                      className='text-2xl font-bold text-green-800 mt-10 mb-4'
                    >
                      {bloco.texto}
                    </h2>
                  );

                case "destaque":
                  return (
                    <div
                      key={index}
                      className='bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8'
                    >
                      <p className='text-green-900 font-medium m-0 leading-relaxed italic'>
                        {bloco.texto}
                      </p>
                    </div>
                  );

                case "tabela":
                  return (
                    <div key={index} className='my-10'>
                      {bloco.titulo && (
                        <p className='text-sm font-bold text-gray-600 mb-2'>
                          {bloco.titulo}
                        </p>
                      )}
                      <div className='overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-300'>
                          <thead className='bg-gray-50'>
                            <tr>
                              {bloco.cabecalho.map((cab, i) => (
                                <th
                                  key={i}
                                  scope='col'
                                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border-r border-gray-200 last:border-0'
                                >
                                  {cab}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className='divide-y divide-gray-200 bg-white'>
                            {bloco.linhas.map((linha, linhaIdx) => (
                              <tr
                                key={linhaIdx}
                                className={
                                  linhaIdx % 2 === 0 ? undefined : "bg-gray-50"
                                }
                              >
                                {linha.map((celula, celulaIdx) => (
                                  <td
                                    key={celulaIdx}
                                    className='whitespace-normal px-3 py-4 text-sm text-gray-700 border-r border-gray-200 last:border-0'
                                  >
                                    {celula}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {bloco.fonte && (
                        <p className='text-xs text-gray-500 mt-2 italic'>
                          {bloco.fonte}
                        </p>
                      )}
                    </div>
                  );

                case "catalogo_item":
                  return (
                    <div
                      key={index}
                      className='flex flex-col md:flex-row gap-6 my-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-b print:border-gray-300 print:rounded-none print:break-inside-avoid print:p-4'
                    >
                      {/* Container da Imagem (Placeholder elegante enquanto os arquivos não sobem) */}
                      <div className='w-full md:w-48 lg:w-64 flex-shrink-0 bg-gray-100 rounded-lg flex flex-col items-center justify-center overflow-hidden min-h-[200px] border border-dashed border-gray-300 print:min-h-0 print:border-solid'>
                        {/* Ícone de Imagem */}
                        <svg
                          className='w-10 h-10 text-gray-400 mb-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                          ></path>
                        </svg>
                        <span className='text-xs font-semibold text-gray-500 uppercase tracking-widest text-center px-2'>
                          {bloco.alt}
                        </span>
                      </div>

                      {/* Container do Texto */}
                      <div className='flex-1 flex flex-col justify-center'>
                        <h3 className='text-xl font-bold text-green-800 mb-3 mt-0'>
                          {bloco.titulo}
                        </h3>
                        <p className='text-gray-700 leading-relaxed text-justify m-0'>
                          {bloco.texto}
                        </p>
                      </div>
                    </div>
                  );

                case "topico":
                  return (
                    <h3
                      key={index}
                      className='text-xl font-bold text-green-700 mt-8 mb-3'
                    >
                      {bloco.texto}
                    </h3>
                  );

                case "lista_numerada":
                  return (
                    <ul
                      key={index}
                      className='list-decimal list-outside ml-6 md:ml-8 space-y-3 text-gray-700 leading-relaxed text-justify my-6'
                    >
                      {bloco.itens.map((item, idx) => (
                        <li key={idx} className='pl-2'>
                          {/* Renderiza o título em negrito se existir */}
                          {item.titulo && (
                            <strong className='text-green-900'>
                              {item.titulo}{" "}
                            </strong>
                          )}
                          {item.texto}
                        </li>
                      ))}
                    </ul>
                  );

                case "lista_marcadores":
                  return (
                    <ul
                      key={index}
                      className='list-disc list-outside ml-6 md:ml-8 space-y-3 text-gray-700 leading-relaxed text-justify my-6'
                    >
                      {bloco.itens.map((item, idx) => (
                        <li key={idx} className='pl-2'>
                          {item.titulo && (
                            <strong className='text-green-900'>
                              {item.titulo}{" "}
                            </strong>
                          )}
                          {item.texto}
                        </li>
                      ))}
                    </ul>
                  );

                case "item_eixo":
                  return (
                    <div
                      key={index}
                      className='bg-gray-50 border border-gray-200 p-5 rounded-xl my-6 print:bg-transparent print:border-none print:p-0 print:my-4'
                    >
                      <h4 className='text-lg font-bold text-green-800 mb-2 flex items-center gap-2'>
                        <span className='text-2xl' aria-hidden='true'>
                          {bloco.icone}
                        </span>
                        {bloco.titulo}
                      </h4>
                      <p className='text-gray-700 leading-relaxed mb-4 text-justify'>
                        {bloco.texto}
                      </p>
                      {bloco.pratica && (
                        <div className='bg-white border-l-4 border-green-500 p-4 rounded-r shadow-sm print:shadow-none print:border-gray-400 print:pl-3 print:py-1'>
                          <p className='text-sm text-gray-800 italic m-0'>
                            <span className='font-bold not-italic text-green-700 mr-2'>
                              Na prática:
                            </span>
                            {bloco.pratica}
                          </p>
                        </div>
                      )}
                    </div>
                  );

                case "paragrafo":
                default:
                  return (
                    <p
                      key={index}
                      className='leading-relaxed text-gray-700 text-justify'
                    >
                      {bloco.texto}
                    </p>
                  );

                case "alerta_catalogo":
                  return (
                    <div
                      key={index}
                      className='my-12 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 md:p-12 shadow-xl text-center print:hidden border border-green-700'
                    >
                      <div className='text-5xl mb-4' aria-hidden='true'>
                        🚀
                      </div>
                      <h3 className='text-2xl md:text-3xl font-extrabold text-white mb-4 mt-0'>
                        {bloco.titulo}
                      </h3>
                      <p className='text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed text-lg'>
                        {bloco.texto}
                      </p>
                      <Link
                        to={bloco.rota}
                        className='inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-green-900 bg-white rounded-full hover:bg-green-50 hover:scale-105 transition-transform duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-900'
                      >
                        {bloco.textoBotao}
                      </Link>
                    </div>
                  );
              }
            })}
          </div>
        </article>
      </main>
    </div>
  );
}