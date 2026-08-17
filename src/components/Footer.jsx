// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const anoAtual = 2026; // Conforme o cronograma de homologação do seu projeto

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto print:hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1: Identidade */}
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-2">IFMaker Educador</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Guia prático de ensino da BNCC Computação através da Cultura Maker e da História Local de Nioaque - MS.
            </p>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold tracking-widest uppercase">
              IFMS Campus Jardim
            </span>
          </div>

          {/* Coluna 2: Mapa do Site */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Mapa da Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-green-700 transition">Dashboard Inicial</Link></li>
              <li><Link to="/capitulos/sobre" className="hover:text-green-700 transition">Expediente Institucional</Link></li>
              <li><Link to="/planos" className="hover:text-green-700 transition">Catálogo de Planos de Aula</Link></li>
              <li><Link to="/autores" className="hover:text-green-700 transition">Autores e Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Links Oficiais */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Links e Editais</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://www.ifms.edu.br" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition">Portal IFMS</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Edital nº 054/2025 - PROPI</a></li>
              <li><a href="#" className="hover:text-green-700 transition">Política de Inovação</a></li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior: Copyright (TM 2026) */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {anoAtual} IFMaker Educador. Produto educacional. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0 font-medium">
            Criado por Talita Marques & Leonardo Vinicius
          </p>
        </div>
      </div>
    </footer>
  );
}