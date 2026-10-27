import React from "react";
import { Link } from "react-router-dom";

const authors = [
  {
    name: "Talita Mendonça Marques",
    role: "Pesquisadora autora e idealizadora pedagógica",
    affiliation: "Licenciatura em Computação - IFMS Câmpus Jardim",
  },
  {
    name: "Leonardo Vinicius da Costa Gomes",
    role: "Pesquisador coautor, logística e infraestrutura técnica",
    affiliation: "Licenciatura em Computação - IFMS Câmpus Jardim",
  },
];

export default function Sobre() {
  return (
    <article className='p-6 md:p-12 max-w-5xl mx-auto bg-white min-h-screen shadow-sm animate-fadeIn'>
      <div className='mb-8 print:hidden'>
        <Link
          to='/'
          className='text-green-700 hover:text-green-900 flex items-center gap-2 font-medium text-sm transition-colors'
        >
          ← Voltar para o Dashboard
        </Link>
      </div>

      <header className='border-b-4 border-green-800 pb-8 mb-10 text-center'>
        <div className='w-full flex items-center justify-center gap-8 sm:gap-14 bg-gradient-to-r from-green-950 via-green-900 to-green-950 px-6 py-1 sm:py-2 rounded-2xl shadow-xl mb-8 border border-green-800/80'>
          <img
            src='/assets/logo IF.png'
            alt='Instituto Federal de Mato Grosso do Sul - Câmpus Jardim'
            className='h-24 sm:h-32 md:h-36 lg:h-40 w-auto object-contain drop-shadow-md transition-transform hover:scale-105 duration-300'
          />
          <div className='h-16 sm:h-20 w-px bg-white/25 hidden sm:block' aria-hidden='true' />
          <img
            src='/assets/logo IFMaker.png'
            alt='Laboratório IFMaker'
            className='h-24 sm:h-32 md:h-36 lg:h-40 w-auto object-contain drop-shadow-md transition-transform hover:scale-105 duration-300'
          />
        </div>

        <p className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-green-800'>
          Produto educacional e tecnológico • Edital nº 054/2025 PROPI/IFMS
        </p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-3'>
          Patrimônio de Nioaque em 3D
        </h1>
        <p className='text-lg sm:text-xl font-semibold text-gray-700 max-w-3xl mx-auto'>
          Manual pedagógico de computação e cultura maker no ensino fundamental
        </p>
        <div className='mt-6 text-gray-600 leading-relaxed text-sm sm:text-base'>
          <p className='font-semibold text-gray-800'>Talita Mendonça Marques • Leonardo Vinicius da Costa Gomes</p>
          <p className='mt-1 text-xs sm:text-sm text-gray-600'>Coordenação e Orientação: Profª. Ma. Rafaela Chivalski de Oliveira • Prof. Dr. Moacir Juliani</p>
          <p className='mt-3 text-xs uppercase tracking-wider text-gray-500 font-medium'>IFMS Câmpus Jardim / Nioaque - MS • 2026</p>
        </div>
      </header>

      <div className='space-y-10 text-gray-700 leading-relaxed'>
        <section className='bg-green-50 p-6 rounded-xl border border-green-100'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Sobre a obra
          </h2>
          <p className='text-justify'>
            Produto educacional e tecnológico desenvolvido no âmbito do Edital
            nº 054/2025 - PROPI/IFMS (IFMaker Educador) pelo Instituto Federal
            de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS) -
            Câmpus Jardim, em parceria com a Escola Municipal Guilherme Corrêa
            da Silva (Nioaque/MS), destinado à formação docente continuada e à
            disseminação do Pensamento Computacional e da fabricação digital na
            Educação Básica pública.
          </p>
          <p className='mt-4 text-justify'>
            <strong>Coordenação e orientação:</strong> Prof. Dr. Moacir Juliani
            e Profª. Ma. Rafaela Chivalski de Oliveira.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5'>
            Expediente institucional e nota de autoria
          </h2>
          <p className='text-justify mb-5'>
            Produto educacional desenvolvido como entrega de pesquisa aplicada e
            extensão tecnológica do Instituto Federal de Educação, Ciência e
            Tecnologia de Mato Grosso do Sul (IFMS) - Câmpus Jardim, financiado
            e regido pelo Edital nº 054/2025 - PROPI/IFMS (IFMaker Educador), em
            parceria com a Escola Municipal Guilherme Corrêa da Silva (Extensão
            Praça dos Heróis - Nioaque/MS).
          </p>

          <h3 className='text-lg font-bold text-gray-900 mb-3'>
            Equipe de gestão, pesquisa e execução
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-bold text-indigo-800 text-sm uppercase'>
                Coordenação geral e orientação acadêmica
              </h4>
              <p className='mt-2'>Profª. Ma. Rafaela Chivalski de Oliveira</p>
              <p>Prof. Dr. Moacir Juliani</p>
              <p className='text-sm text-gray-600 mt-1'>IFMS Câmpus Jardim</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h4 className='font-bold text-emerald-800 text-sm uppercase'>
                Pesquisadores autores
              </h4>
              {authors.map((author) => (
                <div key={author.name} className='mt-2'>
                  <p className='font-semibold'>{author.name}</p>
                  <p className='text-sm'>{author.role}</p>
                  <p className='text-sm text-gray-600'>{author.affiliation}</p>
                </div>
              ))}
            </div>
            <div className='border border-gray-200 rounded-lg p-4 md:col-span-2'>
              <h4 className='font-bold text-amber-800 text-sm uppercase'>
                Responsabilidade técnica e gestão laboratorial (Espaço IFMaker)
              </h4>
              <p className='mt-2'>Prof. Me. Ewerton da Silva Schroeder</p>
              <p>Prof. Me. Fagner Lopes Theodoro</p>
              <p className='text-sm text-gray-600 mt-1'>IFMS Câmpus Jardim</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5'>
            Propriedade intelectual, direitos autorais e licenciamento
          </h2>
          <div className='space-y-4 text-justify'>
            <p>
              Os direitos morais de criação pertencem aos autores e
              pesquisadores. Ficam resguardados os direitos de participação dos
              autores, professores orientadores e estudantes idealizadores, na
              proporção de um terço de eventuais rendimentos decorrentes de
              exploração comercial, transferência de tecnologia ou licenciamento
              do produto, conforme a Lei Federal nº 10.973/2004, a Política de
              Inovação do IFMS e o Edital nº 054/2025 - PROPI/IFMS.
            </p>
            <p>
              <strong>Licença de uso aberto:</strong> obra licenciada sob
              Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0
              Internacional (CC BY-NC-SA 4.0). É permitida a reprodução,
              impressão e adaptação para fins exclusivamente didáticos e não
              comerciais, desde que a fonte institucional seja citada e a mesma
              licença seja mantida.
            </p>
            <p>
              <strong>Atribuição de modelos 3D:</strong> Tatu-bola flexível por
              horseman3000 (licença comercial regular); Jacaré articulado por
              jpgillot2 (CC BY); Canhão histórico por p3ddp (CC BY-SA); e
              pegadas de dinossauro por Catokex (CC BY-NC-SA).
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5'>
            Identificadores da publicação
          </h2>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm'>
            <p>
              <strong>ISBN:</strong> em processo de solicitação.
            </p>
            <p>
              <strong>DOI:</strong> em processo de solicitação.
            </p>
            <p>
              <strong>Ficha CIP:</strong> pendente de emissão pela biblioteca
              institucional e do registro do bibliotecário responsável.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5'>
            Apresentação
          </h2>
          <div className='space-y-4 text-justify'>
            <p>
              É com profundo entusiasmo pedagógico e compromisso social que
              entregamos à comunidade escolar e aos educadores da Educação
              Básica o manual{" "}
              <em>
                Patrimônio de Nioaque em 3D: manual pedagógico de computação e
                cultura maker no ensino fundamental
              </em>
              . Esta obra consolida uma trajetória de pesquisa aplicada e
              extensão tecnológica financiada pelo Edital nº 054/2025 -
              PROPI/IFMS (IFMaker Educador), integrando o IFMS - Câmpus Jardim à
              parceria com a Escola Municipal Guilherme Corrêa da Silva
              (Extensão Praça dos Heróis, Nioaque/MS).
            </p>
            <p>
              Diante dos desafios contemporâneos da Educação 4.0 e da
              homologação das normas da Computação na Educação Básica como
              complemento à BNCC, este material transforma a teoria curricular
              em práticas concretas, acessíveis e culturalmente
              contextualizadas. Ensinar Computação não se restringe ao uso de
              telas: trata-se de capacitar crianças para a resolução crítica de
              problemas por meio do Pensamento Computacional.
            </p>
            <p>
              O diferencial deste manual é o resgate das identidades culturais,
              geográficas, paleontológicas e históricas de Nioaque. Por meio da
              impressão 3D desenvolvida nos laboratórios do IFMaker, o
              patrimônio local ganhou forma, textura e volume. Pegadas de
              dinossauros, canhões históricos, jacaré e tatu-bola tornam-se
              objetos para pensar com, ancorando aprendizagens de lógica,
              algoritmos e decomposição.
            </p>
            <p>
              O manual foi estruturado para que educadores de diferentes áreas e
              escolas com diferentes níveis de infraestrutura encontrem
              segurança metodológica. Ele reúne guia de mediação, catálogo de
              peças, sequências didáticas, rubricas formativas e fichas prontas
              para impressão.
            </p>
            <p>
              Esperamos que esta obra seja mais que um registro técnico: uma
              ponte viva entre a instituição pública de ensino profissional e
              tecnológico e o chão da escola municipal, inspirando docentes e
              estudantes a explorar a autoria digital, a cultura maker e o
              orgulho pelas raízes de sua terra.
            </p>
          </div>
          <div className='mt-6 border-l-4 border-green-700 pl-4 text-gray-700'>
            <p>Prof. Dr. Moacir Juliani</p>
            <p>Profª. Ma. Rafaela Chivalski de Oliveira</p>
            <p>Talita Mendonça Marques e Leonardo Vinicius da Costa Gomes</p>
            <p className='mt-2'>Jardim - MS, 2026.</p>
          </div>
        </section>
      </div>
    </article>
  );
}
