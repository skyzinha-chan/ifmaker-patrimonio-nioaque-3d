import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { manualCapitulos } from "../data/capitulos";
import GuiaCaixaMasterModal from "../components/GuiaCaixaMasterModal";

const RESUMOS_CAPITULOS = {
  introducao:
    "Fundamentação da Cultura Maker, do Pensamento Computacional e da Computação na Educação Básica (BNCC) aplicados ao contexto regional de Nioaque/MS.",
  "boas-vindas":
    "Boas-vindas ao educador, propósito do manual e como o material conecta tecnologia, memória local e sala de aula.",
  "catalogo-visual":
    "Apresentação do acervo de réplicas táteis impressas em 3D, seus significados históricos e paleontológicos e orientações de conservação.",
  "guia-sobrevivencia":
    "Metodologias ativas, organização da sala em ilhas de trabalho, uso da Caixa Master e mediação docente passo a passo.",
  "avaliacao-maker":
    "Avaliação formativa na Cultura Maker, Taxonomia de Bloom e uso prático das Rubricas (Tipos A, B e C) em sala de aula.",
  "sequencia-didatica":
    "Guia prático para navegar pelo catálogo de planos de aula, baixar os kits completos e registrar relatos no Diário de Bordo.",
};

export default function Manual() {
  const [capituloAtivoId, setCapituloAtivoId] = useState(manualCapitulos[0].id);
  const [modalRubricasAberto, setModalRubricasAberto] = useState(false);
  const [modalCaixaMasterAberto, setModalCaixaMasterAberto] = useState(false);
  const activeTabRef = useRef(null);

  const capituloAtual = manualCapitulos.find(
    (cap) => cap.id === capituloAtivoId,
  );

  // Mantém a aba ativa centralizada na barra horizontal ao trocar de capítulo
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [capituloAtivoId]);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Navegação horizontal de capítulos */}
      <div className='bg-white border-b border-gray-200 shadow-sm print:hidden sticky top-16 z-40'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
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

      {/* Área de leitura do capítulo */}
      <main className='flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10'>
        <article className='prose prose-slate md:prose-lg max-w-none bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 print:shadow-none print:border-none print:p-0'>
          <div className='mb-8 rounded-2xl bg-gradient-to-r from-green-900 to-emerald-800 text-white p-6 md:p-8 shadow-md border-l-8 border-emerald-400'>
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div>
                <p className='text-xs font-extrabold uppercase tracking-widest text-emerald-200 mb-1 m-0'>
                  {capituloAtual.id === "apresentacao"
                    ? "Pré-Textual"
                    : `Capítulo ${manualCapitulos.findIndex((c) => c.id === capituloAtual.id)}`}
                </p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white m-0 leading-tight'>
                  {capituloAtual.titulo.replace(/^\d+\.\s*/, "")}
                </h1>
              </div>
              <a
                href='/pdfs/PATRIMONIO_DE_NIOAQUE_EM_3D_COMPLETO.pdf'
                download='PATRIMONIO_DE_NIOAQUE_EM_3D_COMPLETO.pdf'
                className='inline-flex items-center gap-2 rounded-xl bg-white hover:bg-green-50 text-green-900 font-bold px-4 py-2 text-xs sm:text-sm no-underline shadow-sm transition print:hidden'
              >
                📥 Baixar Manual Completo (PDF)
              </a>
            </div>
            {RESUMOS_CAPITULOS[capituloAtual.id] && (
              <p className='text-sm md:text-base text-green-50 leading-relaxed mt-3 mb-0'>
                {RESUMOS_CAPITULOS[capituloAtual.id]}
              </p>
            )}
          </div>

          <div className='space-y-6'>
            {capituloAtual.conteudo.map((bloco, index) => {
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

                case "assinatura":
                  return (
                    <div
                      key={index}
                      className='bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg my-8 text-right'
                    >
                      <div className='space-y-2 leading-snug'>
                        {bloco.itens.map((item, i) => (
                          <div key={i}>
                            <strong className='text-[15px] text-gray-900 block'>
                              {item.nome}
                            </strong>
                            <em className='text-sm text-gray-700'>{item.cargo}</em>
                          </div>
                        ))}
                        {bloco.local && (
                          <div className='text-sm text-gray-700 pt-1'>
                            <em>{bloco.local}</em>
                          </div>
                        )}
                      </div>
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
                      <div className='w-full md:w-48 lg:w-64 flex-shrink-0 bg-gray-100 rounded-lg flex flex-col items-center justify-center overflow-hidden min-h-[200px] border border-dashed border-gray-300 print:min-h-0 print:border-solid'>
                        {bloco.imagemLocal ? (
                          <img
                            src={bloco.imagemLocal}
                            alt={bloco.alt}
                            className='w-full h-full min-h-[200px] object-contain'
                          />
                        ) : (
                          <span className='text-xs font-semibold text-gray-500 uppercase tracking-widest text-center px-2'>
                            {bloco.alt}
                          </span>
                        )}
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
                          {item.rota ? (
                            <Link
                              to={item.rota}
                              className='text-green-800 hover:text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-sm'
                            >
                              {item.titulo && <strong>{item.titulo} </strong>}
                              {item.texto}
                            </Link>
                          ) : (
                            <>
                              {item.titulo && (
                                <strong className='text-green-900'>
                                  {item.titulo}{" "}
                                </strong>
                              )}
                              {item.texto}
                            </>
                          )}
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

          {/* Ação contextual do Capítulo 3: Guia da Caixa Master */}
          {capituloAtual.id === "catalogo-visual" && (
            <div className='mt-10 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border-2 border-emerald-300 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5 print:hidden'>
              <div className='flex items-start sm:items-center gap-4'>
                <div className='h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-sm flex-shrink-0'>
                  🧭
                </div>
                <div>
                  <span className='bg-emerald-200 text-emerald-900 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide'>
                    Kit Pedagógico IFMaker
                  </span>
                  <h3 className='text-lg sm:text-xl font-extrabold text-gray-900 mt-1 mb-0'>
                    Primeiros Passos com a Caixa Master
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-700 mt-1 mb-0 max-w-2xl leading-relaxed'>
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
          )}

          {/* Ação contextual do Capítulo 5: Rubricas de Avaliação Maker */}
          {(capituloAtual.id === "capitulo-5" ||
            capituloAtual.titulo?.toLowerCase().includes("avalia")) && (
            <div className='mt-10 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden'>
              <div>
                <h3 className='text-lg font-extrabold text-green-900 m-0'>
                  📋 Rubricas de Avaliação Maker (Tipos A, B e C)
                </h3>
                <p className='text-sm text-gray-700 mt-1 mb-0'>
                  Acesse os guias explicativos de como avaliar e as fichas prontas para imprimir e marcar em sala.
                </p>
              </div>
              <button
                type='button'
                onClick={() => setModalRubricasAberto(true)}
                className='whitespace-nowrap bg-green-800 hover:bg-green-900 text-white font-bold py-2.5 px-5 rounded-xl shadow transition text-sm'
              >
                Abrir Rubricas →
              </button>
            </div>
          )}
        </article>
      </main>
      {/* Modal de Rubricas (Capítulo 5) */}
      {modalRubricasAberto && (
        <div
          className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-rubricas-titulo'
        >
          <div className='bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 md:p-8'>
            <div className='flex items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-5'>
              <h2 id='modal-rubricas-titulo' className='text-xl font-extrabold text-green-900'>
                📋 Rubricas de Avaliação Maker
              </h2>
              <button
                type='button'
                onClick={() => setModalRubricasAberto(false)}
                className='text-gray-500 hover:text-gray-800 font-bold text-lg px-2 py-1 rounded-lg'
                aria-label='Fechar modal'
              >
                ✕
              </button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-xs font-extrabold uppercase tracking-wider text-green-800 mb-3'>
                  1. Como Avaliar (Anexos Explicativos)
                </h3>
                <div className='space-y-2'>
                  {[
                    {
                      nome: "Rubrica Tipo A – Eixo Pensamento Computacional",
                      url: "/pdfs/anexos/Rubrica Tipo A - Eixo Pensamento Computacional.pdf",
                    },
                    {
                      nome: "Rubrica Tipo B – Eixo Mundo Digital",
                      url: "/pdfs/anexos/Rubrica Tipo B - Eixo Mundo Digital.pdf",
                    },
                    {
                      nome: "Rubrica Tipo C – Eixo Cultura Digital",
                      url: "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf",
                    },
                  ].map((item) => (
                    <a
                      key={item.url}
                      href={encodeURI(item.url)}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50/50 transition text-sm font-semibold text-gray-800'
                    >
                      <span>📄 {item.nome}</span>
                      <span className='text-xs font-bold text-green-700'>Abrir PDF ↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3'>
                  2. Guias para Imprimir e Marcar em Sala
                </h3>
                <div className='space-y-2'>
                  {[
                    {
                      nome: "Mapa de Avaliação Maker – Rubrica Tipo A",
                      url: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO A.pdf",
                    },
                    {
                      nome: "Mapa de Avaliação Maker – Rubrica Tipo B",
                      url: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO B.pdf",
                    },
                    {
                      nome: "Mapa de Avaliação Maker – Rubrica Tipo C",
                      url: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
                    },
                    {
                      nome: "Guia de Observação (Rubrica) – Aula Piloto 1",
                      url: "/pdfs/rubricas/GUIA DE OBSERVAÇÃO (RUBRICA) - AULA PILOTO 1.pdf",
                    },
                    {
                      nome: "Guia de Observação (Rubrica) – Aula Piloto 2",
                      url: "/pdfs/rubricas/GUIA DE OBSERVAÇÃO (RUBRICA) - AULA PILOTO 2.pdf",
                    },
                  ].map((item) => (
                    <a
                      key={item.url}
                      href={encodeURI(item.url)}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition text-sm font-semibold text-gray-800'
                    >
                      <span>🖨️ {item.nome}</span>
                      <span className='text-xs font-bold text-emerald-700'>Abrir PDF ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <GuiaCaixaMasterModal
        aberto={modalCaixaMasterAberto}
        aoFechar={() => setModalCaixaMasterAberto(false)}
      />
    </div>
  );
}
