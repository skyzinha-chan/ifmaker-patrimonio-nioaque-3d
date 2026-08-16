// /src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { planosDeAula } from "../data/planos"; // Importando a base para popular o subnível

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlanosOpen, setIsPlanosOpen] = useState(false); // Estado para abrir/fechar o submenu de planos

  const closeMenu = () => setIsOpen(false);

  const activeStyle =
    "bg-green-900 border-l-4 border-green-400 text-white font-medium";
  const inactiveStyle =
    "hover:bg-green-700 hover:text-white text-green-100 transition-colors";

  return (
    <>
      {/* Menu Hambúrguer para Mobile */}
      <div className='md:hidden flex items-center justify-between bg-green-800 p-4 text-white'>
        <span className='font-bold text-xl'>IFMaker Educador</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='focus:outline-none'
          aria-label='Alternar Menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Principal */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-green-800 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className='p-6 hidden md:block border-b border-green-700'>
          <h2 className='text-2xl font-bold text-center tracking-tight'>
            IFMaker
          </h2>
          <p className='text-xs text-green-300 text-center mt-1 uppercase tracking-wider'>
            Guia Prático BNCC
          </p>
        </div>

        <nav className='mt-6 flex flex-col gap-1 px-4 pb-10'>
          <NavLink
            to='/'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded text-sm ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to='/capitulos/sobre'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded text-sm ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            🏛️ Expediente Institucional
          </NavLink>

          <NavLink
            to='/planos'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded text-sm ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            📚 Catálogo Geral de Aulas
          </NavLink>

          {/* ACORDEÃO / SUBMÉTODO DE PLANOS DE AULA */}
          <div className='pt-2'>
            <button
              onClick={() => setIsPlanosOpen(!isPlanosOpen)}
              className='w-full flex justify-between items-center px-4 py-3 rounded text-sm text-green-100 hover:bg-green-700 hover:text-white transition-colors text-left font-medium'
            >
              <span>📑 Acesso Rápido às Aulas</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${isPlanosOpen ? "rotate-180" : ""}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {/* Subníveis listando os 15 planos dinamicamente */}
            {isPlanosOpen && (
              <div className='pl-4 mt-1 space-y-1 border-l-2 border-green-600 ml-4 max-h-64 overflow-y-auto pr-1'>
                {planosDeAula.map((p, idx) => (
                  <NavLink
                    key={p.id}
                    to={`/planos/${p.id}`}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded text-xs truncate ${isActive ? "bg-green-900 text-green-200 font-bold" : "text-green-200 hover:bg-green-700 hover:text-white"}`
                    }
                    title={p.titulo}
                  >
                    {idx + 1}. {p.titulo}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40 md:hidden'
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
