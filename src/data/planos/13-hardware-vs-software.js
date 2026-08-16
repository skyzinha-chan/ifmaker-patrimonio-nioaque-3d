// src/data/planos/13-hardware-vs-software.js

export const plano13 = {
  id: "hardware-vs-software",
  ano: "5º Ano",
  eixo: "MUNDO DIGITAL",
  titulo: "Hardware e Software: Como a Máquina Pensa?",
  contexto: "Contexto Interdisciplinar: Cultura Maker / Ciências da Natureza",
  duracao: "50min/aula",
  objetoConhecimento: "Hardware e Software. (Aplicação prática em: Sistemas computacionais, processos de fabricação digital e pensamento abstrato).",
  habilidades: [
    {
      codigo: "(EF05CO05)",
      descricao: "Reconhecer que artefatos computacionais são criados para atender necessidades, identificando seus componentes físicos (Hardware) e lógicos (Software)."
    },
    {
      codigo: "(EF15C004)",
      descricao: "Pilar: Decomposição - Dividir um sistema complexo (impressão 3D) em partes menores e gerenciáveis para entender seu funcionamento."
    },
    {
      codigo: "(EF05GE03)",
      descricao: "Habilidade de Apoio: Identificar as formas e funções das cidades e analisar as mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento."
    }
  ],
  recursos: [
    "Sala de aula",
    "Tatus-bola articulados 3D (já impressos)",
    "Lousa, folhas de papel sulfite e lápis de cor"
  ],
  ideiaPratica: "Os alunos investigam o Tatu-bola impresso para entender a relação de dependência entre o intangível e o tangível. O professor lidera uma dinâmica investigativa onde o arquivo 3D no computador (a 'mente/ideia') é o Software, a impressora que derrete o plástico é o atuador, e o Tatu-bola em mãos é o Hardware resultante.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "O Mistério da Criação: O professor coloca o Tatu-bola articulado na mão de um aluno e pergunta: 'O computador pensou nele ou construiu ele?'. O Corpo e a Alma da Máquina: O professor explica os conceitos de forma lúdica. O Software é a 'mente' invisível (o modelo 3D salvo no pendrive). O Hardware é a impressora (a máquina física) e o próprio Tatu (o resultado físico que podemos tocar). O computador não tem mãos, ele precisa do hardware para transformar dados em matéria.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Engenharia Reversa (Decomposição): Os alunos, divididos em pequenos grupos, recebem um Tatu-bola 3D. Eles recebem o desafio de 'transformar o Hardware de volta em Software'. Para isso, devem desenhar no papel como acham que o computador 'enxerga' o tatu-bola por dentro (as linhas de impressão, as camadas fatiadas, as coordenadas e encaixes que fazem ele se articular sem precisar de parafusos).",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Roda de Conversa: Os grupos apresentam seus esboços (o 'Software' desenhado). O professor pergunta: 'Se o arquivo no computador tivesse um erro (um bug no software), o que aconteceria com a pata do tatu físico (hardware)?'. Eles debatem como um problema lógico afeta o mundo real.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  rubricaId: "tipo-b",
  ajusteFinoRubrica: [
    "⚙️ **Abstração de Propriedades:** O aluno foca a sua atenção e o seu desenho esquemático nas propriedades estruturais fundamentais do objeto (as camadas de impressão e o espaçamento milimétrico das articulações), ignorando características supérfluas (como a cor ou textura externa do plástico) para representar a lógica interna do projeto 3D.",
    "🐛 **Iteração e Manuseio do Artefato:** Durante a atividade de engenharia reversa no papel, o grupo manipula o Tatu-bola físico repetidas vezes (girando, dobrando as articulações) e, ao perceber que seu primeiro esboço não explicava o mecanismo de encaixe, refaz o desenho com paciência, ajustando as linhas para que o 'Software simulado' realmente faça sentido físico.",
    "💻 **Transposição Físico-Digital:** O aluno explica com total clareza a conexão entre os mundos: ele verbaliza que o Tatu de plástico nas suas mãos (Hardware) é apenas a consequência material de um arquivo de computador invisível (Software), compreendendo que qualquer instrução corrompida no código geraria uma falha física real na impressora."
  ],

  // NOVA CHAVE: Link direto para o seu PDF original salvo na pasta public
  pdfUrl: "/pdfs/13-hardware-vs-software.pdf"
};