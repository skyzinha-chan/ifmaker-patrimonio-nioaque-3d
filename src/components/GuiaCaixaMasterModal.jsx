// src/components/GuiaCaixaMasterModal.jsx
import React, { useState, useEffect } from "react";

export default function GuiaCaixaMasterModal({ aberto, aoFechar }) {
  const [passoAtivo, setPassoAtivo] = useState(0);

  // Fecha no ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && aberto) aoFechar();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  const passos = [
    {
      id: "potes",
      icone: "🧰",
      titulo: "1. Organização dos 8 Potes das Ilhas",
      subtitulo: "Como estruturar os esquadrões e manter o acervo completo",
      cor: "emerald",
      conteudo: (
        <div className='space-y-4 text-sm text-gray-700 leading-relaxed'>
          <div className='bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-950'>
            <h4 className='font-bold text-emerald-900 flex items-center gap-2 mb-1'>
              <span>👥</span> Distribuição para até 32 alunos (8 Esquadrões de 4)
            </h4>
            <p>
              A Caixa Master foi dimensionada para atender uma sala de aula completa dividida em <strong>8 ilhas de trabalho</strong> numeradas de 1 a 8.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
            <div className='bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2'>
              <h5 className='font-bold text-gray-900 flex items-center gap-1.5'>
                <span>📦</span> O que deve conter em cada pote:
              </h5>
              <ul className='space-y-1.5 text-xs text-gray-600 list-disc list-inside'>
                <li><strong>1 Artefato 3D principal</strong> (réplica histórica ou fóssil);</li>
                <li><strong>4 Fichas de Funções</strong> (Mestre do Código, Robô, Caçador de Bugs, Cartógrafo);</li>
                <li><strong>1 Marcador de quadro branco</strong> recarregável;</li>
                <li><strong>Cartões de comando ou dados</strong> exigidos no plano da aula.</li>
              </ul>
            </div>

            <div className='bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2'>
              <h5 className='font-bold text-gray-900 flex items-center gap-1.5'>
                <span>⏱️</span> Regra do "Inventário de 2 Minutos":
              </h5>
              <p className='text-xs text-gray-600 leading-relaxed'>
                Ao término da atividade, estabeleça que o esquadrão só é dispensado para o recreio após o <strong>Cartógrafo</strong> conferir se todas as peças voltaram ao pote e entregá-lo fechado na Caixa Master.
              </p>
              <div className='bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 font-medium'>
                💡 Dica: Peça ao "Robô Tático" de cada ilha para realizar a varredura do chão em busca de tampinhas ou setas caídas.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "polaseal",
      icone: "🖊️",
      titulo: "2. Uso e Limpeza no Material Plastificado (Polaseal)",
      subtitulo: "Segredos para garantir centenas de aulas sem danificar os tabuleiros",
      cor: "blue",
      conteudo: (
        <div className='space-y-4 text-sm text-gray-700 leading-relaxed'>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-950'>
            <h4 className='font-bold text-blue-900 flex items-center gap-2 mb-1'>
              <span>🛡️</span> Acervo Plastificado Reutilizável
            </h4>
            <p>
              Todos os tabuleiros de rotas, malhas cartesianas e fichas de missão foram termolaminados com <strong>Polaseal de alta espessura</strong> para escrita e apagamento infinito.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
            <div className='bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2'>
              <h5 className='font-bold text-emerald-800 flex items-center gap-1.5'>
                <span>✅</span> O que USAR:
              </h5>
              <ul className='space-y-1.5 text-xs text-gray-600 list-disc list-inside'>
                <li><strong>Caneta para Quadro Branco</strong> (marcador de lousa recarregável);</li>
                <li><strong>Feltro seco, flanela ou papel toalha</strong> para apagar no dia a dia;</li>
                <li>Apagar os traços logo após a aula, evitando que a tinta endureça por semanas.</li>
              </ul>
            </div>

            <div className='bg-white p-4 rounded-xl border border-red-200 bg-red-50/30 shadow-2xs space-y-2'>
              <h5 className='font-bold text-red-700 flex items-center gap-1.5'>
                <span>🚫</span> O que NUNCA usar:
              </h5>
              <ul className='space-y-1.5 text-xs text-red-950 list-disc list-inside'>
                <li><strong>NUNCA usar caneta permanente</strong> (marcador de CD, retroprojetor ou caneta esferográfica);</li>
                <li>Não dobrar nem vincar as lâminas plastificadas;</li>
                <li>Não recortar as bordas seladas (o ar pode entrar e descolar a lâmina).</li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-50 p-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 flex items-start gap-2.5'>
            <span className='text-xl' aria-hidden='true'>🧼</span>
            <div>
              <strong className='font-bold text-gray-900'>Como fazer a limpeza profunda periódica:</strong>
              <p className='mt-0.5'>
                Se o tabuleiro ficar com sombra de escrita antiga, aplique um algodão com <strong>uma gota de álcool 70% ou isopropílico</strong> e passe um pano seco imediatamente. Não mergulhe o material em água.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "artefatos3d",
      icone: "🦖",
      titulo: "3. Conservação dos Artefatos Impressos em 3D",
      subtitulo: "Cuidados térmicos, manuseio e higienização das peças do IFMaker",
      cor: "purple",
      conteudo: (
        <div className='space-y-4 text-sm text-gray-700 leading-relaxed'>
          <div className='bg-purple-50 border border-purple-200 p-4 rounded-xl text-purple-950'>
            <h4 className='font-bold text-purple-900 flex items-center gap-2 mb-1'>
              <span>🖨️</span> Peças Fabricadas no IFMaker Câmpus Jardim
            </h4>
            <p>
              As peças 3D (pegada fóssil, canhão da Retirada, tatu-bola e jacaré) foram impressas em filamento <strong>PLA biodegradável</strong>. Elas possuem excelente resistência mecânica, mas exigem atenção à temperatura.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
            <div className='bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2'>
              <h5 className='font-bold text-amber-800 flex items-center gap-1.5'>
                <span>☀️</span> Cuidado Crítico com o Calor:
              </h5>
              <p className='text-xs text-gray-600 leading-relaxed'>
                O PLA amolece e sofre deformação permanente em temperaturas acima de <strong>55°C</strong>.
              </p>
              <div className='bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 font-medium'>
                ⚠️ <strong>Atenção em Mato Grosso do Sul:</strong> Nunca esqueça a Caixa Master no interior de veículos trancados sob sol direto ou próxima a janelas expostas.
              </div>
            </div>

            <div className='bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2'>
              <h5 className='font-bold text-gray-900 flex items-center gap-1.5'>
                <span>🧹</span> Higiene e Armazenamento:
              </h5>
              <ul className='space-y-1.5 text-xs text-gray-600 list-disc list-inside'>
                <li>Limpe as peças apenas com <strong>pano levemente umedecido em água</strong>;</li>
                <li><strong>Nunca utilize acetona ou solventes</strong> (eles derretem a estrutura plástica);</li>
                <li>Oriente os alunos a manusear com cuidado partes finas (cano do canhão e patas do tatu);</li>
                <li>Guarde sempre a Caixa Master fechada em local seco e ventilado.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-fadeIn'
      role='dialog'
      aria-modal='true'
      aria-labelledby='guia-caixa-titulo'
    >
      <div className='bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden'>
        {/* CABEÇALHO */}
        <header className='px-5 sm:px-6 py-4 bg-gradient-to-r from-green-900 via-emerald-900 to-green-950 text-white flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='text-3xl' aria-hidden='true'>🧭</span>
            <div>
              <span className='text-[10px] font-black uppercase tracking-widest text-emerald-300 block'>
                Onboarding do Professor
              </span>
              <h3 id='guia-caixa-titulo' className='text-base sm:text-lg font-bold'>
                Primeiros Passos com a Caixa Master
              </h3>
            </div>
          </div>
          <button
            type='button'
            onClick={aoFechar}
            className='h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition'
            aria-label='Fechar guia'
          >
            ✕
          </button>
        </header>

        {/* NAVEGADOR DE ABAS */}
        <div className='flex border-b border-gray-200 bg-gray-50 px-2 sm:px-6 pt-2 gap-1 sm:gap-2 overflow-x-auto select-none'>
          {passos.map((p, idx) => (
            <button
              key={p.id}
              type='button'
              onClick={() => setPassoAtivo(idx)}
              className={`py-2.5 px-3 rounded-t-xl font-bold text-xs sm:text-sm flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                passoAtivo === idx
                  ? "border-emerald-600 bg-white text-emerald-900 shadow-2xs"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/60"
              }`}
            >
              <span>{p.icone}</span>
              <span className='hidden sm:inline'>{p.titulo.split(". ")[1]}</span>
              <span className='sm:hidden'>Passo {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className='p-5 sm:p-6 overflow-y-auto flex-1'>
          <div className='mb-4'>
            <h4 className='text-base sm:text-lg font-extrabold text-gray-900'>
              {passos[passoAtivo].titulo}
            </h4>
            <p className='text-xs text-gray-500 mt-0.5'>
              {passos[passoAtivo].subtitulo}
            </p>
          </div>

          {passos[passoAtivo].conteudo}
        </div>

        {/* RODAPÉ COM CONTROLES */}
        <footer className='px-5 sm:px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-3'>
          <button
            type='button'
            disabled={passoAtivo === 0}
            onClick={() => setPassoAtivo((prev) => Math.max(0, prev - 1))}
            className='px-3.5 py-2 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition'
          >
            ← Anterior
          </button>

          <div className='flex gap-1.5'>
            {passos.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  passoAtivo === idx ? "w-6 bg-emerald-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {passoAtivo < passos.length - 1 ? (
            <button
              type='button'
              onClick={() => setPassoAtivo((prev) => Math.min(passos.length - 1, prev + 1))}
              className='px-4 py-2 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition shadow-sm'
            >
              Próximo →
            </button>
          ) : (
            <button
              type='button'
              onClick={aoFechar}
              className='px-4 py-2 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition shadow-sm'
            >
              Entendido! Concluir Guia ✓
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}

