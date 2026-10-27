/**
 * Catálogo de artefatos físicos e recursos da Caixa Master do Kit Maker Nioaque 3D,
 * alinhado ao Capítulo 3 e à Sequência Didática do Manual Pedagógico.
 */

export const inventarioCaixaMaster = {
  descricao: "Caixa Organizadora Master do Projeto IFMaker Educador dimensionada para turmas de até 30 alunos divididos em 8 Ilhas de Aprendizagem.",
  referenciaManual: "Capítulo 3 do Manual Pedagógico IFMaker",
  itensCaixa: [
    { item: "8 unidades do Canhão Histórico 3D", categoria: "Artefato 3D" },
    { item: "8 unidades do Jacaré Articulado 3D", categoria: "Artefato 3D" },
    { item: "8 unidades do Tatu-bola Flexível 3D", categoria: "Artefato 3D" },
    { item: "8 unidades das Pegadas de Dinossauros 3D", categoria: "Artefato 3D" },
    { item: "10 Saquinhos Ziplock com Kits de Programação Tangível (Blocos e Setas)", categoria: "Programação Tangível" },
    { item: "10 Matrizes Grid A4 Plastificadas (Tabuleiros de mesa)", categoria: "Material Gráfico" },
    { item: "10 Fichas de Missão: Estrategistas da Retirada", categoria: "Material Gráfico" },
    { item: "30 Mapas de Avaliação Maker (Rubricas Tipos A, B e C)", categoria: "Material Gráfico" },
    { item: "15 a 20 Obstáculos e Personagens 2D Plastificados", categoria: "Material Gráfico" },
    { item: "2 Conjuntos de Fichas de Recrutamento Plastificadas (Sorteadores de Funções)", categoria: "Material Gráfico" },
    { item: "Potes Plásticos Transparentes (Kits de Ilha)", categoria: "Infraestrutura" },
    { item: "Pasta Sanfonada para Acervo Plastificado", categoria: "Infraestrutura" },
    { item: "Canetas de Quadro Branco e Blocos de Post-its", categoria: "Insumos" }
  ]
};

export const artefatosDoKit = [
  {
    id: "tatu-bola-3d",
    nome: "Tatu-bola Flexível Articulado 3D",
    imagem: "/assets/tatu.png",
    alt: "Peça impressa em 3D do tatu-bola flexível articulado em filamento termoplástico com carapaça segmentada e membros móveis.",
    origem: "Fauna e Biodiversidade Regional do Cerrado e Pantanal de Mato Grosso do Sul",
    tipo: "kit-ifmaker",
    categoria: "Artefato 3D Tátil",
    quantidadeNoKit: "8 unidades na Caixa Master (1 por Ilha de Aprendizagem)",
    escala: "Miniatura articulada tátil (aprox. 6 a 8 cm)",
    material: "PLA atóxico biodegradável em impressão 3D (tecnologia FDM / camadas sobrepostas)",
    planosVinculados: [
      "piloto-02-museu-tatil",
      "manual-de-sobrevivencia",
      "teia-alimentar",
      "stop-motion",
      "textura-do-tempo",
      "hardware-vs-software",
      "cidades-de-concreto"
    ],
    descricaoTatil: "Carapaça segmentada com anéis móveis que se articulam até o fechamento esférico de defesa. Apresenta ranhuras e relevos em camadas características da manufatura aditiva, permitindo extração de texturas (frottage) e observação da cinemática mecânica.",
    orientacoesManuseio: "Manipular com delicadeza sobre a bancada forrada. O movimento de enrolar deve ser guiado suavemente sem forçar os encaixes plásticos para evitar fadiga mecânica nas juntas.",
    substituicaoPossivel: "Esfera de isopor seccionada ou escultura em massa de modelar/argila reforçada com palitos de sustentação estrutural."
  },
  {
    id: "canhao-3d",
    nome: "Canhão Histórico de Nioaque 3D",
    imagem: "/assets/canhão.png",
    alt: "Modelo tridimensional representativo do canhão histórico da Retirada da Laguna e da Guerra do Paraguai em Nioaque, impresso em 3D.",
    origem: "Patrimônio Histórico e Memória Regional (Praça dos Heróis / Retirada da Laguna - 1867)",
    tipo: "kit-ifmaker",
    categoria: "Artefato 3D Tátil",
    quantidadeNoKit: "8 unidades na Caixa Master (1 por Ilha de Aprendizagem)",
    escala: "Miniatura tátil colecionável (aprox. 8 cm)",
    material: "PLA atóxico biodegradável em impressão 3D (tecnologia FDM)",
    planosVinculados: [
      "piloto-01-estrategistas",
      "piloto-02-museu-tatil",
      "artilharia-dos-angulos",
      "bifurcacoes-narrativas",
      "museu-desplugado",
      "rota-da-retirada",
      "stop-motion",
      "cidades-de-concreto",
      "fake-news-mitos-guerra"
    ],
    descricaoTatil: "Modelo com tubo cilíndrico, eixo transversal e rodas raiadas estriadas. Permite aos estudantes explorar noções de tridimensionalidade, transferidor angular na base para disparo balístico e localização no espaço físico.",
    orientacoesManuseio: "Manipular com as duas mãos apoiando a base do carretão. Evitar torção lateral excessiva nas rodas para proteger os raios impressos.",
    substituicaoPossivel: "Cilindro de papelão com rodas recortadas em papel cartão resistente, ou imagem fotográfica da Praça dos Heróis fixada em base de papelão."
  },
  {
    id: "pegadas-dinossauro-3d",
    nome: "Réplica 3D das Pegadas de Dinossauros",
    imagem: "/assets/peagadas.png",
    alt: "Réplica impressa em 3D de bloco sedimentar com pegadas fósseis tridáctilas em relevo das paleodunas do Vale dos Dinossauros de Nioaque.",
    origem: "Patrimônio Paleontológico de Nioaque (Vale dos Dinossauros / Formação Botucatu - Terópodes e Ornitópodes)",
    tipo: "kit-ifmaker",
    categoria: "Artefato 3D Tátil",
    quantidadeNoKit: "8 unidades na Caixa Master (1 por Ilha de Aprendizagem)",
    escala: "Placa tátil para carimbo e observação científica (aprox. 10 cm)",
    material: "PLA atóxico biodegradável em impressão 3D (tecnologia FDM)",
    planosVinculados: [
      "piloto-02-museu-tatil",
      "navegacao-por-coordenadas",
      "museu-desplugado",
      "csi-nioaque",
      "textura-do-tempo",
      "cidades-de-concreto"
    ],
    descricaoTatil: "Placa com depressões anatômicas em baixo-relevo e bordas elevadas correspondentes à pegada tridáctila fossilizada de dinossauros carnívoros (com marcas de garras afiadas) e herbívoros (arredondadas). Excelente contraste de texturas para decalques com giz ou carimbo em massa.",
    orientacoesManuseio: "Pode ser pressionada diretamente na massa de modelar para criar moldes positivos e negativos. Higienizar com pano úmido ou pincel seco após o uso.",
    substituicaoPossivel: "Molde recortado em camadas sobrepostas de papelão ondulado ou carimbo artesanal confeccionado em EVA grosso."
  },
  {
    id: "jacare-pantanal-3d",
    nome: "Jacaré do Pantanal Articulado 3D",
    imagem: "/assets/jacaré.png",
    alt: "Réplica tridimensional impressa em 3D de jacaré do Pantanal com segmentos articulados ao longo do corpo e textura dorsal de escudos dérmicos.",
    origem: "Biodiversidade Pantaneira e Bacia Hidrográfica do Rio Apa / Nioaque",
    tipo: "kit-ifmaker",
    categoria: "Artefato 3D Tátil",
    quantidadeNoKit: "8 unidades na Caixa Master (1 por Ilha de Aprendizagem)",
    escala: "Miniatura articulada tátil (aprox. 9 a 10 cm)",
    material: "PLA atóxico biodegradável em impressão 3D (tecnologia FDM)",
    planosVinculados: [
      "piloto-02-museu-tatil",
      "bifurcacoes-narrativas",
      "rota-da-retirada",
      "teia-alimentar",
      "stop-motion"
    ],
    descricaoTatil: "Superfície dorsal rica em escudos dérmicos ásperos em relevo saliente e corpo subdividido em nós articulados que reproduzem o movimento sinuoso do réptil. Estimula a percepção de texturas biológicas e bioinspiração na engenharia.",
    orientacoesManuseio: "Apoiar sobre a bancada e manipular pelo dorso. Evitar esticar as articulações além da amplitude natural de flexão.",
    substituicaoPossivel: "Modelo articulado de papel em sanfona ou silhueta recortada em papelão rígido com marcações de relevo texturizado."
  },
  {
    id: "setas-programaveis",
    nome: "Kits de Programação Tangível (Blocos e Setas nos Ziplocks)",
    imagem: "/assets/setas programaveis.jpg",
    alt: "Cartões e blocos tangíveis plastificados coloridos contendo símbolos direcionais: Avançar, Girar à Direita, Girar à Esquerda, Repetir (Loop) e Condicional (Se/Então).",
    origem: "Micromundo de Aprendizagem Tangível IFMaker (Conceito de Objetos para Pensar - Seymour Papert)",
    tipo: "kit-ifmaker",
    categoria: "Recurso Desplugado Tangível",
    quantidadeNoKit: "10 saquinhos Ziplock na Caixa Master (8 para as ilhas de estudantes e 2 de reserva do professor)",
    escala: "Cartões tangíveis resistentes (formato manipulável)",
    material: "Papel couchê gramatura especial com laminação plastificada resistente para uso repetido",
    planosVinculados: [
      "piloto-01-estrategistas",
      "navegacao-por-coordenadas",
      "manual-de-sobrevivencia",
      "artilharia-dos-angulos",
      "bifurcacoes-narrativas",
      "museu-desplugado",
      "rota-da-retirada",
      "teia-alimentar",
      "stop-motion",
      "fake-news-mitos-guerra"
    ],
    descricaoTatil: "Cartões de alto contraste com cantos arredondados contendo a codificação essencial: 10 Avançar, 6 Girar à Direita, 6 Girar à Esquerda, 4 Loops (Repetir) e 4 Condicionais (Se/Então) em cada Ziplock.",
    orientacoesManuseio: "Distribuir 1 saquinho Ziplock por ilha de trabalho. Ao término da aula, conferir a quantidade de blocos antes de guardar no pote da ilha.",
    substituicaoPossivel: "Cartões recortados em papel sulfite ou papelão desenhados pelos estudantes com canetinhas coloridas."
  },
  {
    id: "materiais-graficos-caixa",
    nome: "Acervo Gráfico Plastificado da Caixa Master",
    imagem: "/assets/acervo-grafico-reutilizavel.svg",
    alt: "Acervo de matrizes grid A4, fichas de recrutamento e mapas de avaliação plastificados reutilizáveis com canetas de quadro branco.",
    origem: "Material de Apoio Gráfico Institucional do Projeto IFMaker Educador",
    tipo: "kit-ifmaker",
    categoria: "Material Gráfico Reutilizável",
    quantidadeNoKit: "10 Matrizes Grid A4, 2 Conjuntos de Sorteadores de Esquadrão, 30 Mapas de Rubricas e 15 a 20 Obstáculos 2D na Pasta Sanfonada",
    escala: "Formatos A4 e peças de apoio",
    material: "Plastificação em polaseal durável e reutilizável com canetas de quadro branco",
    planosVinculados: [
      "piloto-01-estrategistas",
      "piloto-02-museu-tatil",
      "navegacao-por-coordenadas",
      "manual-de-sobrevivencia",
      "artilharia-dos-angulos",
      "bifurcacoes-narrativas",
      "museu-desplugado",
      "rota-da-retirada",
      "teia-alimentar",
      "csi-nioaque",
      "stop-motion",
      "textura-do-tempo",
      "hardware-vs-software",
      "cidades-de-concreto",
      "fake-news-mitos-guerra"
    ],
    descricaoTatil: "Superfície plástica lisa e impermeável que permite aos alunos escreverem com caneta de quadro branco e apagarem com facilidade, estimulando iteração e depuração rápida.",
    orientacoesManuseio: "Utilizar somente canetas de quadro branco adequadas para material plastificado. Limpar com flanela seca ou papel toalha.",
    substituicaoPossivel: "Folhas impressas simples ou fotocópias do Apêndice A do Manual Pedagógico."
  },
  {
    id: "guia-lopes-cavalo",
    nome: "Ponto de Partida: O Guia Lopes a Cavalo",
    imagem: "/assets/1. O Ponto de Partida  O Guia Lopes a Cavalo 1.png",
    alt: "Ilustração do herói histórico José Francisco Lopes (Guia Lopes) a cavalo orientando as tropas na Retirada da Laguna.",
    origem: "Memória Histórica de Nioaque (Monumento ao Guia Lopes / Retirada da Laguna)",
    tipo: "kit-ifmaker",
    categoria: "Personagem 2D do Kit",
    quantidadeNoKit: "3 a 4 unidades plastificadas na Caixa Master",
    escala: "Peça tátil para grid de mesa ou chão",
    material: "Papel especial plastificado em polaseal",
    planosVinculados: ["piloto-01-estrategistas", "rota-da-retirada"],
    descricaoTatil: "Peça plastificada de demarcação do Ponto de Partida da rota lógica no tabuleiro de navegação desplugada.",
    orientacoesManuseio: "Posicionar no quadrante inicial da matriz grid ou tabuleiro no chão.",
    substituicaoPossivel: "Desenho da silhueta do cavalo em cartolina ou miniatura de brinquedo."
  },
  {
    id: "rio-apa-obstaculo",
    nome: "Obstáculo do Tabuleiro: O Rio Apa",
    imagem: "/assets/3. Obstáculo_ O Rio Apa.png",
    alt: "Peça gráfica plastificada do Rio Apa representando a barreira geográfica aquática da Retirada da Laguna.",
    origem: "Geografia e Bacia Hidrográfica de Nioaque e Pantanal",
    tipo: "kit-ifmaker",
    categoria: "Obstáculo 2D do Kit",
    quantidadeNoKit: "3 a 4 unidades plastificadas na Caixa Master",
    escala: "Peça para grid de mesa e chão",
    material: "Papel especial plastificado em polaseal",
    planosVinculados: ["piloto-01-estrategistas", "bifurcacoes-narrativas", "rota-da-retirada"],
    descricaoTatil: "Elemento de bloqueio geográfico que força a tomada de decisão algorítmica e a inserção de desvios condicionais na rota.",
    orientacoesManuseio: "Fixar com fita crepe leve sobre o grid sem perfurar a lâmina plástica.",
    substituicaoPossivel: "Tira de papel crepom azul ou cartolina ondulada azul simulando o rio."
  },
  {
    id: "soldados-obstaculo",
    nome: "Obstáculo do Tabuleiro: Tropa Adversária",
    imagem: "/assets/4. Obstáculo_ Soldados Inimigos.png",
    alt: "Peça gráfica plastificada representando a tropa adversária como obstáculo no simulador geográfico.",
    origem: "Episódio Militar da Retirada da Laguna (1867)",
    tipo: "kit-ifmaker",
    categoria: "Obstáculo 2D do Kit",
    quantidadeNoKit: "3 a 4 unidades plastificadas na Caixa Master",
    escala: "Peça para grid de mesa e chão",
    material: "Papel especial plastificado em polaseal",
    planosVinculados: ["piloto-01-estrategistas", "rota-da-retirada"],
    descricaoTatil: "Peça de bloqueio móvel para exercício de depuração ativa (debugging tático ao encontrar imprevistos no trajeto).",
    orientacoesManuseio: "Higienizar com pano seco após o manuseio no chão da sala.",
    substituicaoPossivel: "Cone ou copo descartável posicionado na célula do grid."
  }
];

// Função utilitária para buscar artefatos relacionados a um plano específico
export function getArtefatosPorPlano(planoId) {
  return artefatosDoKit.filter(
    (artefato) => artefato.planosVinculados && artefato.planosVinculados.includes(planoId)
  );
}

// Verifica se um recurso textual do plano faz parte da Caixa Master do Kit Maker
export function isRecursoDoKitMaker(recursoTexto) {
  if (!recursoTexto) return false;
  const texto = recursoTexto.toLowerCase();
  return (
    texto.includes("3d") ||
    texto.includes("ifmaker") ||
    texto.includes("tatu") ||
    texto.includes("canhão") ||
    texto.includes("canhoes") ||
    texto.includes("jacaré") ||
    texto.includes("jacares") ||
    texto.includes("pegada") ||
    texto.includes("programação tangível") ||
    texto.includes("programacao tangivel") ||
    texto.includes("setas") ||
    texto.includes("blocos de") ||
    texto.includes("réplicas") ||
    texto.includes("replicas") ||
    texto.includes("plastificado") ||
    texto.includes("cartões de comando") ||
    texto.includes("cartoes de comando")
  );
}
