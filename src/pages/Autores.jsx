// src/pages/Autores.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Autores() {
  return (
    <article className='p-6 md:p-12 max-w-6xl mx-auto bg-white min-h-screen animate-fadeIn'>
      {/* NAVEGAÇÃO DE VOLTA */}
      <div className='mb-8 print:hidden'>
        <Link
          to='/'
          className='text-green-700 hover:text-green-900 flex items-center gap-2 font-medium text-sm transition-colors'
        >
          ← Voltar para o Dashboard
        </Link>
      </div>

      {/* CABEÇALHO DA PÁGINA */}
      <header className='border-b-4 border-green-800 pb-6 mb-12 text-center'>
        <span className='bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block'>
          IFMS Campus Jardim
        </span>
        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4'>
          Quem faz o IFMaker Educador?
        </h1>
        <p className='text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed'>
          Conheça a trajetória acadêmica dos idealizadores que transformaram a
          história de Nioaque em tecnologia educacional tangível.
        </p>
      </header>

      {/* GRID DE PERFIS (OS AUTORES) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* PERFIL: TALITA MENDONÇA MARQUES */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300'>
          <div className='bg-gradient-to-r from-emerald-700 to-green-600 h-24'></div>
          <div className='px-8 pb-8'>
            <div className='relative -mt-12 mb-4'>
              {/* Espaço para a foto (substitua o src depois pela imagem real) */}
              <img
                src='/assets/authors/talita.jpg'
                alt='Foto de Talita Marques'
                className='w-24 h-24 rounded-full border-4 border-white shadow-md bg-white object-cover object-[center_20%]'
              />
            </div>
            <h2 className='text-2xl font-bold text-gray-900'>
              Talita Mendonça Marques
            </h2>
            <p className='text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider'>
              Pesquisadora e Desenvolvedora
            </p>
            <div className='text-gray-600 text-sm leading-relaxed mb-6 text-justify'>
              <p className='mb-3'>
                Acadêmica de Licenciatura em Ciência da Computação no IFMS
                Campus Jardim e graduada em Gestão Empreendedora de Serviços
                (UNINTER, 2023). Possui forte atuação na área de programação e
                trabalha profissionalmente com o treinamento e avaliação de
                modelos de Inteligência Artificial a partir de feedback humano
                (RLHF).
              </p>
              <p className='mb-3'>
                Sua trajetória na extensão e pesquisa iniciou-se como voluntária
                no projeto IDIS (Inclusão Digital para Inclusão Social), voltado
                ao ensino de informática básica para pessoas em situação de
                vulnerabilidade. Pela sua Iniciação Científica em Visão
                Computacional para Educação Inclusiva (Edital 033/2024),
                conquistou o 3º lugar na FECIOESTE 2024 e, em parceria, o 2º
                lugar na edição de 2025.
              </p>
              <p>
                No projeto IFMAKER (Edital 054/2025), participou da curadoria de
                modelos 3D e do desenho da estrutura pedagógica que conecta o
                patrimônio de Nioaque à BNCC. Sua formação inclui ainda um
                intercâmbio acadêmico no Canadá (Edital 060/2025), além de
                experiências como estágio na Compass UOL e bootcamps Mulheres na
                Computação, Santander Code Girls e Best Minds.
              </p>
            </div>

            {/* LINKS SOCIAIS (Ajustados para Acessibilidade e Tamanho) */}
            <div className='flex flex-wrap items-center gap-2 mt-2'>
              {/* LATTES */}
              <a
                href='http://lattes.cnpq.br/3040084905845309'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded hover:bg-blue-100 transition-all border border-blue-200 shadow-sm'
                title='Acessar Currículo Lattes'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' />
                </svg>
                Lattes
              </a>

              {/* LINKEDIN */}
              <a
                href='https://www.linkedin.com/in/talita-mendonca-marques/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-sky-50 text-sky-700 text-[11px] font-bold rounded hover:bg-sky-100 transition-all border border-sky-200 shadow-sm'
                title='Acessar Perfil no LinkedIn'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
                LinkedIn
              </a>

              {/* GITHUB */}
              <a
                href='https://github.com/skyzinha-chan'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-gray-50 text-gray-800 text-[11px] font-bold rounded hover:bg-gray-200 transition-all border border-gray-300 shadow-sm'
                title='Acessar Projetos no GitHub'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                GitHub
              </a>

              {/* INSTAGRAM */}
              <a
                href='https://www.instagram.com/skyzinha_chan/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-pink-50 text-pink-700 text-[11px] font-bold rounded hover:bg-pink-100 transition-all border border-pink-200 shadow-sm'
                title='Acessar Perfil no Instagram'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* PERFIL: LEONARDO VINICIUS DA COSTA GOMES */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300'>
          <div className='bg-gradient-to-r from-emerald-700 to-green-600 h-24'></div>
          <div className='px-8 pb-8'>
            <div className='relative -mt-12 mb-4'>
              {/* Espaço para a foto (substitua o src depois pela imagem real) */}
              <img
                src='/assets/authors/leonardo.jpg'
                alt='Foto de Leonardo Vinicius'
                className='w-24 h-24 rounded-full border-4 border-white shadow-md bg-white object-cover object-[center_20%]'
              />
            </div>
            <h2 className='text-2xl font-bold text-gray-900'>
              Leonardo Vinicius da Costa Gomes
            </h2>
            <p className='text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider'>
              Pesquisador e Coautor
            </p>
            <div className='text-gray-600 text-sm leading-relaxed mb-6 text-justify'>
              <p className='mb-3'>
                Acadêmico de Licenciatura em Ciência da Computação no IFMS
                Campus Jardim. Atua como coautor com participação igualitária
                nos projetos, desde a concepção metodológica até a prática.
                Iniciou sua trajetória no IFMS como bolsista no projeto IDIS
                (Inclusão Digital para Inclusão Social), promovendo o ensino de
                computação básica para comunidades em vulnerabilidade.
              </p>
              <p className='mb-3'>
                Em 2025, passou a integrar o projeto de Iniciação Científica em
                Visão Computacional (Edital 033/2024), conquistando, junto com
                Talita, o 2º lugar na FECIOESTE. Nesse mesmo projeto, foi o
                responsável pela apresentação que garantiu o 2º lugar (Menção
                Honrosa - CET) na SEMICT 2025.
              </p>
              <p>
                Atualmente, além de integrar o Programa Institucional de Bolsas
                de Iniciação à Docência (PIBID - Edital 23/2026), é bolsista
                voluntário no projeto IFMAKER (Edital 054/2025). Nele, participa
                ativamente da construção dos planos de aula, além de ser
                responsável pela logística e infraestrutura técnica que
                viabilizam a aplicação de aulas desplugadas e com uso de modelos
                3D em escolas públicas.
              </p>
            </div>

            {/* LINKS SOCIAIS (Ajustados para Acessibilidade e Tamanho) */}
            <div className='flex flex-wrap items-center gap-2 mt-2'>
              {/* LATTES */}
              <a
                href='http://lattes.cnpq.br/0183174611937054'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded hover:bg-blue-100 transition-all border border-blue-200 shadow-sm'
                title='Acessar Currículo Lattes'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' />
                </svg>
                Lattes
              </a>

              {/* LINKEDIN */}
              <a
                href='https://www.linkedin.com/in/leonardo-vinicius7766/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-sky-50 text-sky-700 text-[11px] font-bold rounded hover:bg-sky-100 transition-all border border-sky-200 shadow-sm'
                title='Acessar Perfil no LinkedIn'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
                LinkedIn
              </a>

              {/* GITHUB */}
              <a
                href='https://github.com/leonardo-vinicius77'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-gray-50 text-gray-800 text-[11px] font-bold rounded hover:bg-gray-200 transition-all border border-gray-300 shadow-sm'
                title='Acessar Projetos no GitHub'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                GitHub
              </a>

              {/* INSTAGRAM */}
              <a
                href='https://www.instagram.com/leonardo.vinicius.gomes/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 px-2 py-1 bg-pink-50 text-pink-700 text-[11px] font-bold rounded hover:bg-pink-100 transition-all border border-pink-200 shadow-sm'
                title='Acessar Perfil no Instagram'
              >
                <svg
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MENSAGEM FINAL DE ENGAJAMENTO */}
      <div className='mt-16 bg-green-50 rounded-xl p-8 text-center border border-green-100'>
        <h3 className='text-xl font-bold text-green-900 mb-2'>
          Vamos conversar sobre Educação Maker?
        </h3>
        <p className='text-green-800 mb-6'>
          Estamos abertos a parcerias, workshops e troca de experiências sobre o
          ensino de Computação em escolas públicas. Entre em contato conosco
          através de nossas redes sociais profissionais!
        </p>
      </div>
    </article>
  );
}