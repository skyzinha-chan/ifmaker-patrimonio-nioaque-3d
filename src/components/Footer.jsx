import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className='bg-green-900 text-green-50 border-t-4 border-green-500 mt-auto print:hidden'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6'>
          {/* Identidade do Projeto */}
          <div className='flex flex-col space-y-3'>
            <div className='flex items-center gap-2.5'>
              <span aria-hidden='true' className='text-3xl select-none'>
                🦖
              </span>
              <h2 className='text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug'>
                Patrimônio de Nioaque em 3D
              </h2>
            </div>
            <p className='text-green-300 text-xs sm:text-sm font-semibold leading-snug'>
              Manual pedagógico de computação e cultura maker no ensino fundamental
            </p>
          </div>

          {/* Navegação Rápida */}
          <div className='flex flex-col'>
            <h3 className='text-green-400 font-bold uppercase tracking-widest text-xs mb-4'>
              Navegação
            </h3>
            <nav
              className='flex flex-col space-y-2'
              aria-label='Navegação do rodapé'
            >
              <Link
                to='/'
                className='text-green-100 hover:text-white hover:translate-x-1 transition-all text-sm font-medium flex items-center gap-2'
              >
                <span aria-hidden='true'>🏠</span> Dashboard Inicial
              </Link>
              <Link
                to='/manual'
                className='text-green-100 hover:text-white hover:translate-x-1 transition-all text-sm font-medium flex items-center gap-2'
              >
                <span aria-hidden='true'>📖</span> Manual Pedagógico
              </Link>
              <Link
                to='/planos'
                className='text-green-100 hover:text-white hover:translate-x-1 transition-all text-sm font-medium flex items-center gap-2'
              >
                <span aria-hidden='true'>📚</span> Catálogo de Aulas
              </Link>
              <Link
                to='/capitulos/sobre'
                className='text-green-100 hover:text-white hover:translate-x-1 transition-all text-sm font-medium flex items-center gap-2'
              >
                <span aria-hidden='true'>🏛️</span> Expediente Institucional
              </Link>
            </nav>
          </div>

          {/* Fomento Científico */}
          <div className='flex flex-col'>
            <h3 className='text-green-400 font-bold uppercase tracking-widest text-xs mb-4'>
              Fomento Científico
            </h3>
            <div className='text-green-100/80 text-xs leading-relaxed space-y-2'>
              <p>
                Projeto financiado e regido pelas normativas do{" "}
                <strong>
                  Edital nº 054/2025 – PROPI/IFMS (IFMAKER Educador)
                </strong>
                .
              </p>
              <p>
                Produto educacional e tecnológico desenvolvido pelo Instituto
                Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul
                (IFMS) — Câmpus Jardim e Laboratório IFMaker, em parceria com a
                Escola Municipal Guilherme Corrêa da Silva (Nioaque/MS).
              </p>
            </div>
          </div>

          {/* Links Oficiais */}
          <div className='flex flex-col'>
            <h3 className='text-green-400 font-bold uppercase tracking-widest text-xs mb-4'>
              Links Oficiais
            </h3>
            <ul className='space-y-2 text-sm text-green-100/80'>
              <li>
                <a
                  href='https://www.ifms.edu.br'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white hover:underline transition-all flex items-center gap-2'
                >
                  <span aria-hidden='true' className='text-xs'>
                    🔗
                  </span>{" "}
                  Portal IFMS
                </a>
              </li>
              <li>
                <a
                  href='https://selecao.ifms.edu.br/perfil/servidores/ifmaker-educador-edital-054-2025'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white hover:underline transition-all flex items-center gap-2'
                >
                  <span aria-hidden='true' className='text-xs'>
                    📄
                  </span>{" "}
                  Edital nº 054/2025 - PROPI
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white hover:underline transition-all flex items-center gap-2'
                >
                  <span aria-hidden='true' className='text-xs'>
                    💡
                  </span>{" "}
                  Política de Inovação
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais e Créditos */}
        <div className='border-t border-green-800/50 mt-6 pt-5 text-center md:flex md:justify-between md:items-center md:text-left gap-4'>
          <p className='text-xs sm:text-sm text-green-100/75 font-medium'>
            &copy; {anoAtual} Patrimônio de Nioaque em 3D • Obra: CC BY-NC-SA 4.0 • Software: MIT •{" "}
            <a
              href='https://doi.org/10.5281/zenodo.24353731'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-green-300 hover:text-white transition-colors'
            >
              DOI: 10.5281/zenodo.24353731
            </a>
          </p>
          <p className='text-sm text-green-400 mt-2 md:mt-0 font-bold tracking-wide'>
            Criado por Talita Marques & Leonardo Vinicius
          </p>
        </div>
      </div>
    </footer>
  );
}
