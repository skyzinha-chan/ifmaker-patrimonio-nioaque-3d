import React, { useState, useEffect, useRef } from "react";
import { getArtefatosPorPlano } from "../data/materiaisKit";

/**
 * Sintetiza um alerta sonoro harmônico (acorde Dó Maior) via Web Audio API,
 * dispensando ativos de áudio externos para operação offline.
 */
function tocarChimeSuave() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notas = [523.25, 659.25, 783.99, 1046.5];
    notas.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 1.9);
    });
  } catch (e) {
    console.warn("Áudio não suportado ou bloqueado:", e);
  }
}

/**
 * Modal de projeção em tela cheia para regência em sala de aula,
 * com cronômetro progressivo sincronizado às etapas do plano de aula.
 */
export default function ModoRegenciaModal({ plano, aoFechar }) {
  const containerRef = useRef(null);
  const [emTelaCheia, setEmTelaCheia] = useState(false);
  const [somAtivo, setSomAtivo] = useState(true);
  const [modoFurtivoAtivo, setModoFurtivoAtivo] = useState(false);
  const [mostrarPlanoB, setMostrarPlanoB] = useState(false);

  // Extrai a minutagem de cada etapa a partir do texto do roteiro (fallback: 15 min)
  const etapas = (plano.roteiro || []).map((passo, idx) => {
    const matchMin = passo.parte?.match(/(\d+)\s*min/i);
    const minutos = matchMin ? parseInt(matchMin[1], 10) : 15;

    let rotulo = "Etapa";
    if (/context/i.test(passo.titulo)) rotulo = "Aquecimento";
    else if (/experim/i.test(passo.titulo)) rotulo = "Missão Maker";
    else if (/avalia/i.test(passo.titulo)) rotulo = "Avaliação";
    else rotulo = passo.titulo.split(" ")[0];

    return {
      indice: idx,
      minutos,
      segundosTotais: minutos * 60,
      rotulo,
      tituloOriginal: passo.titulo,
      parteTexto: passo.parte,
      descricao: passo.descricao
    };
  });

  const [etapaAtualIdx, setEtapaAtualIdx] = useState(0);
  const etapaAtual = etapas[etapaAtualIdx] || {
    indice: 0,
    minutos: 15,
    segundosTotais: 900,
    rotulo: "Etapa",
    descricao: ""
  };

  const [segundosRestantes, setSegundosRestantes] = useState(etapaAtual.segundosTotais);
  const [estaRodando, setEstaRodando] = useState(false);

  // Atualiza tempo ao mudar de etapa
  useEffect(() => {
    setSegundosRestantes(etapaAtual.segundosTotais);
    setEstaRodando(false);
  }, [etapaAtualIdx]);

  // Loop do Cronômetro
  useEffect(() => {
    let intervalo = null;
    if (estaRodando && segundosRestantes > 0) {
      intervalo = setInterval(() => {
        setSegundosRestantes((prev) => {
          if (prev <= 1) {
            clearInterval(intervalo);
            setEstaRodando(false);
            if (somAtivo) tocarChimeSuave();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [estaRodando, segundosRestantes, somAtivo]);

  // Suporte a Tela Cheia (Fullscreen API)
  const alternarTelaCheia = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setEmTelaCheia(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setEmTelaCheia(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setEmTelaCheia(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Atalhos de teclado: Barra de espaço (play/pause), Esc (fechar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" && e.target.tagName !== "BUTTON") {
        e.preventDefault();
        setEstaRodando((prev) => !prev);
      } else if (e.key === "Escape" && !document.fullscreenElement) {
        aoFechar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [aoFechar]);

  // Formatação MM:SS
  const minutosFormatados = String(Math.floor(segundosRestantes / 60)).padStart(2, "0");
  const segundosFormatados = String(segundosRestantes % 60).padStart(2, "0");

  // Progresso percentual da etapa atual
  const porcentagemConcluida = Math.min(
    100,
    Math.round(((etapaAtual.segundosTotais - segundosRestantes) / etapaAtual.segundosTotais) * 100)
  );

  const artefatos = getArtefatosPorPlano(plano.id);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto ${
        modoFurtivoAtivo ? "bg-slate-950 text-indigo-100" : "bg-slate-900 text-white"
      } font-sans transition-colors duration-300`}
      role='dialog'
      aria-modal='true'
      aria-label='Modo Aula - Timer da Missão'
    >
      {/* ================= BARRA SUPERIOR DE CONTROLE ================= */}
      <header className='px-4 sm:px-8 py-3 bg-black/40 backdrop-blur border-b border-white/10 flex flex-wrap items-center justify-between gap-3 select-none'>
        <div className='flex items-center gap-3'>
          <span className='text-2xl sm:text-3xl animate-pulse' aria-hidden='true'>⏱️</span>
          <div>
            <div className='flex items-center gap-2'>
              <span className='bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded'>
                Modo Aula / Projeção
              </span>
              <span className='text-xs text-gray-400 font-medium hidden sm:inline'>
                {plano.ano} • {plano.eixo}
              </span>
            </div>
            <h2 className='text-sm sm:text-lg font-bold text-white tracking-tight line-clamp-1'>
              {plano.titulo}
            </h2>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          {/* Botão Modo Furtivo */}
          <button
            type='button'
            onClick={() => setModoFurtivoAtivo(!modoFurtivoAtivo)}
            title='Aciona o modo silencioso para a turma trabalhar em sussurro estratégico'
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 border ${
              modoFurtivoAtivo
                ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/50"
                : "bg-white/10 text-gray-200 border-white/15 hover:bg-white/20"
            }`}
          >
            <span>🤫</span>
            <span className='hidden sm:inline'>Modo Furtivo</span>
          </button>

          {/* Botão Áudio Chime */}
          <button
            type='button'
            onClick={() => setSomAtivo(!somAtivo)}
            title={somAtivo ? "Desativar alerta sonoro ao fim do tempo" : "Ativar alerta sonoro"}
            className={`p-2 rounded-lg text-xs font-bold transition border ${
              somAtivo ? "bg-white/10 text-white border-white/15 hover:bg-white/20" : "bg-red-500/20 text-red-300 border-red-500/30"
            }`}
          >
            {somAtivo ? "🔔" : "🔕"}
          </button>

          {/* Botão Tela Cheia */}
          <button
            type='button'
            onClick={alternarTelaCheia}
            title={emTelaCheia ? "Sair da tela cheia" : "Expandir para tela cheia (lousa/projetor)"}
            className='p-2 rounded-lg text-xs font-bold bg-white/10 text-white border border-white/15 hover:bg-white/20 transition'
          >
            {emTelaCheia ? "🗗" : "⛶"}
          </button>

          {/* Botão Fechar */}
          <button
            type='button'
            onClick={aoFechar}
            className='px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600/80 hover:bg-red-600 text-white transition'
          >
            ✕ Sair
          </button>
        </div>
      </header>

      {/* ================= CORPO PRINCIPAL DO CRONÔMETRO ================= */}
      <main className='flex-1 flex flex-col items-center justify-center p-4 sm:p-8 max-w-5xl mx-auto w-full'>
        {/* NAVEGAÇÃO DE ETAPAS */}
        <div className='w-full max-w-xl mb-4 sm:mb-6'>
          <div className='flex justify-between items-center gap-2 select-none'>
            {etapas.map((et, idx) => {
              const ativo = idx === etapaAtualIdx;
              const concluido = idx < etapaAtualIdx;
              return (
                <button
                  key={idx}
                  type='button'
                  onClick={() => setEtapaAtualIdx(idx)}
                  className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-center border transition ${
                    ativo
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-lg shadow-emerald-950/50 scale-102"
                      : concluido
                      ? "bg-white/10 text-gray-300 border-white/15 hover:bg-white/15"
                      : "bg-black/30 text-gray-500 border-white/5 hover:bg-white/5"
                  }`}
                >
                  <span className='block text-[10px] sm:text-xs font-black uppercase tracking-wider'>
                    {idx + 1}ª {et.rotulo}
                  </span>
                  <span className='text-[11px] sm:text-xs opacity-90 font-mono'>
                    {et.minutos} min
                  </span>
                </button>
              );
            })}
          </div>

          {/* Barra de Progresso da Etapa */}
          <div className='w-full bg-white/10 rounded-full h-2 mt-3 overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all duration-500 rounded-full'
              style={{ width: `${porcentagemConcluida}%` }}
            />
          </div>
        </div>

        {/* DISPLAY GIGANTE DO CRONÔMETRO (LEGÍVEL NO FUNDO DA SALA) */}
        <div className='relative flex flex-col items-center my-2 sm:my-4'>
          <div
            className={`font-mono text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter select-none leading-none tabular-nums drop-shadow-2xl ${
              segundosRestantes === 0
                ? "text-red-400 animate-bounce"
                : segundosRestantes < 180
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {minutosFormatados}:{segundosFormatados}
          </div>

          <div className='text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 mt-2 flex items-center gap-2'>
            <span>Etapa Atual:</span>
            <span className='text-white font-extrabold'>{etapaAtual.rotulo}</span>
            <span className='text-gray-500'>({etapaAtual.minutos} minutos programados)</span>
          </div>
        </div>

        {/* BOTÕES DE CONTROLE PRINCIPAL */}
        <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4 select-none'>
          {/* Voltar Etapa */}
          <button
            type='button'
            disabled={etapaAtualIdx === 0}
            onClick={() => setEtapaAtualIdx((prev) => Math.max(0, prev - 1))}
            title='Ir para a etapa anterior'
            className='h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-xl flex items-center justify-center border border-white/15 transition disabled:opacity-20 disabled:cursor-not-allowed'
          >
            ⏮
          </button>

          {/* -1 minuto */}
          <button
            type='button'
            onClick={() => setSegundosRestantes((prev) => Math.max(0, prev - 60))}
            title='Reduzir 1 minuto'
            className='h-10 px-3 sm:h-12 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs sm:text-sm font-bold border border-white/15 transition'
          >
            -1 min
          </button>

          {/* PLAY / PAUSE GIGANTE */}
          <button
            type='button'
            onClick={() => setEstaRodando(!estaRodando)}
            className={`h-14 px-8 sm:h-16 sm:px-12 rounded-2xl font-black text-base sm:text-lg flex items-center gap-3 transition-all transform active:scale-95 shadow-xl ${
              estaRodando
                ? "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-950/50"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-950/50"
            }`}
          >
            <span className='text-xl sm:text-2xl'>{estaRodando ? "⏸" : "▶"}</span>
            <span>{estaRodando ? "Pausar" : "Iniciar Tempo"}</span>
          </button>

          {/* +1 minuto */}
          <button
            type='button'
            onClick={() => setSegundosRestantes((prev) => prev + 60)}
            title='Adicionar 1 minuto extra'
            className='h-10 px-3 sm:h-12 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs sm:text-sm font-bold border border-white/15 transition'
          >
            +1 min
          </button>

          {/* Reiniciar Etapa */}
          <button
            type='button'
            onClick={() => {
              setSegundosRestantes(etapaAtual.segundosTotais);
              setEstaRodando(false);
            }}
            title='Reiniciar tempo desta etapa'
            className='h-10 px-3 sm:h-12 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs sm:text-sm font-bold border border-white/15 transition'
          >
            ↺ Reiniciar
          </button>

          {/* Avançar Etapa */}
          <button
            type='button'
            disabled={etapaAtualIdx === etapas.length - 1}
            onClick={() => setEtapaAtualIdx((prev) => Math.min(etapas.length - 1, prev + 1))}
            title='Avançar para a próxima etapa'
            className='h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-xl flex items-center justify-center border border-white/15 transition disabled:opacity-20 disabled:cursor-not-allowed'
          >
            ⏭
          </button>
        </div>

        {/* DICA DE MEDIAÇÃO & MISSÃO DO PROFESSOR NESTA ETAPA */}
        <div className='w-full max-w-2xl bg-black/40 border border-white/15 rounded-2xl p-4 sm:p-5 mt-2 backdrop-blur'>
          <div className='flex items-center justify-between gap-3 mb-2'>
            <span className='text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5'>
              <span>🎯</span> O que fazer agora ({etapaAtual.rotulo}):
            </span>
            <button
              type='button'
              onClick={() => setMostrarPlanoB(!mostrarPlanoB)}
              className='text-xs text-amber-300 hover:text-amber-200 font-bold underline flex items-center gap-1'
            >
              <span>🚨</span> {mostrarPlanoB ? "Ocultar Plano B" : "Ver Plano B (Emergência)"}
            </button>
          </div>

          <p className='text-xs sm:text-sm text-gray-200 leading-relaxed max-h-28 overflow-y-auto pr-1'>
            {etapaAtual.descricao}
          </p>

          {/* BOX EXPANSÍVEL DE CONTINGÊNCIA / PLANO B */}
          {mostrarPlanoB && (
            <div className='mt-3 pt-3 border-t border-white/10 bg-amber-950/40 p-3 rounded-xl text-xs text-amber-200 space-y-1.5 animate-fadeIn'>
              <strong className='font-bold text-amber-300 block'>
                🛠️ Dicas Rápidas de Contingência para a Regência:
              </strong>
              <p>
                • <strong>Se a peça quebrou ou faltou: </strong>
                {artefatos.length > 0 && artefatos[0].substituicaoPossivel
                  ? artefatos[0].substituicaoPossivel
                  : "Use a peça 2D plastificada correspondente ou desenhe a silhueta em papel."}
              </p>
              <p>
                • <strong>Se o tempo apertar:</strong> Reduza o percurso pela metade ou valide apenas a primeira curva da rota. O aprendizado da depuração é mais valioso que terminar a rota completa!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* ================= RODAPÉ COM ATALHOS ================= */}
      <footer className='px-4 py-2 bg-black/60 text-center text-[11px] text-gray-400 border-t border-white/10 select-none hidden sm:block'>
        <span>Dica de Regência: Pressione <kbd className='bg-white/10 px-1.5 py-0.5 rounded font-mono text-gray-200'>Espaço</kbd> para pausar/retomar • Conecte seu computador ao projetor ou TV da sala de aula para a turma acompanhar a linha do tempo!</span>
      </footer>
    </div>
  );
}

