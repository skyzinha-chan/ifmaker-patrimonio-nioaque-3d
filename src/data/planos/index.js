// src/data/planos/index.js

import { plano01 } from './01-piloto-estrategistas-da-retirada.js';
import { plano02 } from './02-piloto-museu-tatil.js';
import { plano03 } from './03-navegacao-por-coordenadas.js';
import { plano04 } from './04-manual-de-sobrevivencia.js';
import { plano05 } from './05-artilharia-dos-angulos.js';
import { plano06 } from './06-bifurcacoes-narrativas.js';
import { plano07 } from './07-museu-desplugado.js';
import { plano08 } from './08-rota-da-retirada.js';
import { plano09 } from './09-teia-alimentar.js';
import { plano10 } from './10-csi-nioaque.js';
import { plano11 } from './11-stop-motion.js';
import { plano12 } from './12-textura-do-tempo.js';
import { plano13 } from './13-hardware-vs-software.js';
import { plano14 } from './14-cidades-de-concreto.js';
import { plano15 } from './15-fake-news.js';

const titulosCatalogo = {
  "piloto-01-estrategistas": "Estrategistas da Retirada",
  "piloto-02-museu-tatil": "Museu Tátil de Nioaque",
  "navegacao-por-coordenadas": "Navegação por Coordenadas",
  "manual-de-sobrevivencia": "Manual de Sobrevivência",
  "artilharia-dos-angulos": "Artilharia dos Ângulos",
  "bifurcacoes-narrativas": "Bifurcações Narrativas",
  "museu-desplugado": "Museu Desplugado",
  "rota-da-retirada": "Rota da Retirada",
  "teia-alimentar": "Teia Alimentar",
  "csi-nioaque": "CSI Nioaque",
  "stop-motion": "Stop Motion Patrimonial",
  "textura-do-tempo": "Textura do Tempo",
  "hardware-vs-software": "Hardware vs. Software",
  "cidades-de-concreto": "Cidades de Concreto",
  "fake-news-mitos-guerra": "Fake News e os Mitos da Guerra"
};

const planos = [
  plano01, plano02, plano03, plano04, plano05,
  plano06, plano07, plano08, plano09, plano10,
  plano11, plano12, plano13, plano14, plano15
];

export const planosDeAula = planos.map((plano) => ({
  ...plano,
  tituloCatalogo: titulosCatalogo[plano.id] || plano.titulo
}));