// src/pages/Sobre.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <article className="p-6 md:p-12 max-w-4xl mx-auto bg-white min-h-screen shadow-sm animate-fadeIn">
      
      {/* NAVEGAÇÃO DE VOLTA */}
      <div className="mb-8 print:hidden">
        <Link to="/" className="text-green-700 hover:text-green-900 flex items-center gap-2 font-medium text-sm transition-colors">
          ← Voltar para o Dashboard
        </Link>
      </div>

      {/* CABEÇALHO DO DOCUMENTO */}
      <header className="border-b-4 border-green-800 pb-8 mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          IFMAKER
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-2">
          Patrimônio de Nioaque em 3D
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
          Tecnologia Maker e História Local
        </p>
      </header>

      {/* CORPO DO TEXTO (Formatado para Leitura Confortável) */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        
        {/* EXPEDIENTE INSTITUCIONAL */}
        <section>
          <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-2">
            <span className="text-2xl" aria-hidden="true">🏛️</span>
            <h3 className="text-2xl font-bold text-gray-900">Expediente Institucional</h3>
          </div>
          <p className="mb-4 text-justify">
            Este Manual Pedagógico é um produto educacional desenvolvido como parte das entregas e atividades de pesquisa aplicada e extensão tecnológica do <strong>Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS) — Campus Jardim.</strong>
          </p>
          <p className="text-justify bg-green-50 p-5 rounded-lg border border-green-100 text-green-900 shadow-sm">
            A sua concepção, teste e distribuição são financiados e regidos de acordo com as normas e obrigações do <strong>Edital nº 054/2025 – PROPI/IFMS (IFMAKER Educador)</strong>, com foco no fortalecimento da Educação Básica pública através da difusão da Cultura Maker e do Pensamento Computacional.
          </p>
        </section>

        {/* EQUIPE DE GESTÃO */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
            <span className="text-2xl" aria-hidden="true">👥</span>
            <h3 className="text-2xl font-bold text-gray-900">Equipe de Gestão e Execução</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-indigo-800 uppercase tracking-wider text-xs mb-3">Coordenadores e Orientação</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="block text-gray-900">Profª. Ma. Rafaela Chivalski de Oliveira</strong>
                  <span className="text-gray-600">Coordenadora e Orientadora do Projeto / Docente do IFMS</span>
                </li>
                <li>
                  <strong className="block text-gray-900">Prof. Dr. Moacir Juliani</strong>
                  <span className="text-gray-600">Orientador do Projeto de Extensão e Estágio Supervisionado</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-emerald-800 uppercase tracking-wider text-xs mb-3">Idealização e Regência</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="block text-gray-900">Talita Mendonça Marques</strong>
                  <span className="text-gray-600">Pesquisadora Autora, Idealizadora Pedagógica e Bolsista de Iniciação Tecnológica (Lic. em Computação)</span>
                </li>
                <li>
                  <strong className="block text-gray-900">Leonardo Vinicius da Costa Gomes</strong>
                  <span className="text-gray-600">Apoio Técnico, Pesquisador Co-autor e Bolsista Voluntário (Lic. em Computação)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PARCERIAS E GESTÃO ESCOLAR */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Gestão Escolar</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Diretora Dulcemeire</li>
                <li>Diretora-Adjunta Rúbia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Apoio Governamental</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Secretaria Municipal de Educação de Nioaque</li>
                <li>Prefeitura Municipal de Nioaque — MS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIREITOS AUTORAIS */}
        <section>
          <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-2">
            <span className="text-2xl" aria-hidden="true">©️</span>
            <h3 className="text-2xl font-bold text-gray-900">Propriedade Intelectual</h3>
          </div>
          <div className="text-sm space-y-4 text-justify text-gray-600">
            <p>
              Ficam plenamente resguardados os direitos de participação e propriedade intelectual dos autores (professores orientadores e estudantes idealizadores) em um terço de quaisquer rendimentos financeiros obtidos com a transferência de tecnologia ou licenciamento do produto obtido a partir deste projeto, em estrita conformidade com a <strong>Política de Inovação do IFMS</strong> e a legislação de regência.
            </p>
            <p>
              Os arranjos didáticos e roteiros pedagógicos aqui dispostos utilizam licenças de compartilhamento aberto para fins educacionais e científicos, proibida qualquer reprodução ou comercialização sem prévia e expressa anuência da equipe detentora da autoria.
            </p>
          </div>
        </section>
        
      </div>
    </article>
  );
}