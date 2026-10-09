// src/components/Navbar.jsx (Que agora funciona como uma Top Navbar)
import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { planosDeAula } from "../data/planos";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlanosOpen, setIsPlanosOpen] = useState(false);
  const [isDesktopPlanosOpen, setIsDesktopPlanosOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    setIsPlanosOpen(false);
    setIsDesktopPlanosOpen(false);
  };

  // Gerenciamento de clique fora e tecla Escape para acessibilidade do dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopPlanosOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDesktopPlanosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Estilos limpos para uma barra superior
  const activeStyle =
    "bg-green-900 md:bg-transparent md:text-white md:border-b-2 border-white text-green-100 font-bold px-4 py-3 md:py-1 rounded md:rounded-none transition-all";
  const inactiveStyle =
    "hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-200 text-green-100 font-medium px-4 py-3 md:py-1 rounded md:rounded-none transition-all";

  return (
    <nav className='bg-green-800 text-white shadow-md print:hidden sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          {/* Título da Obra com Ícone */}
          <div className='flex-shrink-0 flex items-center gap-3'>
            <Link
              to='/'
              onClick={closeMenu}
              className='flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 rounded-lg group'
              aria-label='Ir para página inicial - Patrimônio de Nioaque em 3D: Manual pedagógico de computação e cultura maker no ensino fundamental'
            >
              <span aria-hidden='true' className='text-2xl sm:text-3xl transition-transform group-hover:scale-110 select-none'>
                🦖
              </span>
              <div className='flex flex-col justify-center'>
                <span className='font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white leading-tight group-hover:text-green-200 transition-colors'>
                  Patrimônio de Nioaque em 3D
                </span>
                <span className='text-[9px] sm:text-[10px] text-green-200 font-medium tracking-normal leading-tight hidden sm:block'>
                  Manual pedagógico de computação e cultura maker no ensino fundamental
                </span>
              </div>
            </Link>
          </div>

          {/* Menu Desktop (Escondido em Telas Pequenas) */}
          <div className='hidden md:flex md:items-center md:gap-4 lg:gap-8'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to='/capitulos/sobre'
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Expediente
            </NavLink>

            <NavLink
              to='/manual'
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Manual Pedagógico
            </NavLink>

            {/* O Dropdown do Catálogo para Desktop com Acessibilidade (Touch, Clique, Teclado & Hover) */}
            <div
              ref={dropdownRef}
              className='relative'
              onMouseEnter={() => setIsDesktopPlanosOpen(true)}
              onMouseLeave={() => setIsDesktopPlanosOpen(false)}
            >
              <div className='flex items-center gap-1'>
                <NavLink
                  to='/planos'
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Catálogo de Aulas
                </NavLink>
                <button
                  type='button'
                  onClick={() => setIsDesktopPlanosOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsDesktopPlanosOpen((prev) => !prev);
                    }
                  }}
                  aria-haspopup='true'
                  aria-expanded={isDesktopPlanosOpen}
                  aria-controls='desktop-planos-menu'
                  aria-label='Alternar lista suspensa de planos de aula'
                  className='p-1 text-green-200 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-white transition'
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${isDesktopPlanosOpen ? "rotate-180" : ""}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
              </div>

              {/* A lista suspensa flutuante com suporte semântico */}
              <div
                id='desktop-planos-menu'
                role='menu'
                aria-label='Lista de planos de aula'
                className={`absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-green-100 transition-all duration-200 z-50 ${
                  isDesktopPlanosOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className='p-2.5 border-b border-gray-100 bg-green-50/60 rounded-t-xl'>
                  <Link
                    to='/planos'
                    onClick={closeMenu}
                    className='block text-xs font-bold text-green-800 hover:underline px-2 py-0.5'
                  >
                    → Abrir catálogo completo (15 aulas)
                  </Link>
                </div>
                <div className='py-2 max-h-96 overflow-y-auto divide-y divide-gray-50'>
                  {planosDeAula.map((p, idx) => (
                    <NavLink
                      key={p.id}
                      to={`/planos/${p.id}`}
                      role='menuitem'
                      onClick={closeMenu}
                      className='block px-4 py-2.5 text-xs text-gray-700 hover:bg-green-50 hover:text-green-900 font-medium transition-colors'
                    >
                      <span className='font-bold text-green-700 mr-1'>{idx + 1}.</span>{" "}
                      {p.titulo}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to='/autores'
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Autores
            </NavLink>
          </div>

          {/* Botão do Menu Hambúrguer (Mobile) */}
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='bg-green-900 inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white'
              aria-label='Abrir menu principal'
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
            >
              <span className='sr-only'>
                {isOpen ? "Fechar menu principal" : "Abrir menu principal"}
              </span>
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
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
        </div>
      </div>

      {/* ======================================= */}
      {/* Menu Mobile Expandido (Desce como sanfona) */}
      {/* ======================================= */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-green-700`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <NavLink
            to='/'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            📊 Dashboard
          </NavLink>
          <NavLink
            to='/capitulos/sobre'
            onClick={closeMenu}
            className={({ isActive }) =>
              `block ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            🏛️ Expediente Institucional
          </NavLink>

          <div className='pt-2'>
            <div className='flex items-center bg-green-900 rounded-lg'>
              <NavLink
                to='/planos'
                onClick={closeMenu}
                className='flex-1 px-4 py-3 text-green-100 font-medium text-sm'
              >
                📚 Catálogo de Aulas
              </NavLink>
              <button
                onClick={() => setIsPlanosOpen(!isPlanosOpen)}
                className='px-4 py-3 text-green-200 border-l border-green-800 focus:outline-none focus:bg-green-700'
                aria-expanded={isPlanosOpen}
                aria-label='Expandir lista de planos de aula'
              >
                <svg
                  className={`w-5 h-5 transform transition-transform ${isPlanosOpen ? "rotate-180" : ""}`}
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
            </div>

            {/* Lista de Aulas no Mobile */}
            {isPlanosOpen && (
              <div className='mt-2 pl-6 pr-2 space-y-1 border-l-2 border-green-600 ml-4'>
                {planosDeAula.map((p, idx) => (
                  <NavLink
                    key={p.id}
                    to={`/planos/${p.id}`}
                    onClick={closeMenu}
                    className='block py-2 text-xs text-green-200 hover:text-white leading-relaxed'
                  >
                    <span className='font-bold'>{idx + 1}.</span> {p.titulo}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div className='mt-4 border-t border-green-700 pt-2'>
            <NavLink
              to='/autores'
              onClick={closeMenu}
              className={({ isActive }) =>
                `block ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🧑‍💻 Autores e Contato
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
