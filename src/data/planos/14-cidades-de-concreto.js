// src/data/planos/14-cidades-de-concreto.js

export const plano14 = {
  id: "cidades-de-concreto",
  ano: "5º Ano",
  eixo: "MUNDO DIGITAL",
  titulo: "Reconhecimento de Padrões de Dados: Cidades de Concreto vs. Cidades de Escamas",
  contexto: "Contexto Interdisciplinar: Geografia",
  duracao: "50min/aula",
  objetoConhecimento: "Reconhecimento de Padrões ao longo do tempo. (Aplicação prática em: Transformações do espaço geográfico, urbanização e impactos ambientais).",
  habilidades: [
    {
      codigo: "(EF05CO05)",
      descricao: "Reconhecer que artefatos computacionais (dados visuais, simulações) são criados para atender necessidades ou expressar ideias e fatos."
    },
    {
      codigo: "(EF15C001)",
      descricao: "Pilar: Reconhecimento de Padrões - Analisar tendências históricas e dados para prever consequências."
    },
    {
      codigo: "(EF05GE03)",
      descricao: "Habilidade de Apoio: Identificar as formas e funções das cidades e analisar as mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento."
    }
  ],
  recursos: [
    "Sala de aula",
    "Cartolinas grandes (ou papel pardo)",
    "Tatus-bola articulados 3D, Canhões Históricos 3D, réplicas de Pegadas de Dinossauros",
    "Canetinhas coloridas e post-its"
  ],
  ideiaPratica: "Os alunos atuam como analistas de dados, usando os artefatos 3D para mapear fisicamente três épocas do uso do solo. Ao processarem as variáveis no cenário (pegadas para a era pré-histórica, canhões para a imperial e tatus para o presente), eles estruturam um quadro comparativo visual para identificar a correlação inversa: a diminuição do ambiente natural à medida que a área urbana avança.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "A Mesa Limpa: O professor estende o papel pardo na mesa. Explica que aquele espaço é o município de Nioaque. O Desafio das Eras: Apresenta as três peças 3D: as Pegadas (Era Pré-Histórica), o Canhão (Era Imperial/Colonização) e o Tatu-bola (Era Presente).",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Era 1 (O Passado Fóssil): Os alunos espalham as pegadas por todo o papel e desenham árvores. Nioaque era 100% natureza. Era 2 (A Cidade de Concreto): O professor manda os alunos desenharem o contorno de uma cidade no centro e colocar os Canhões 3D. Eles apagam ou cobrem parte da floresta para abrir espaço para o forte e as casas. Era 3 (O Refúgio das Escamas): Agora eles devem posicionar os Tatus-bola. Onde eles ficam? Apenas nas bordas verdes que sobraram.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Análise Gráfica: O grupo observa o mapa de cima. Eles desenham um gráfico simples com post-its no quadro. Devem responder: O que diminuiu (floresta/animais)? O que aumentou (cidade/concreto)? Padrões Computacionais: O professor conecta que computadores fazem exatamente isso para alertar cientistas climáticos: analisam repetições e reconhecem padrões de desmatamento através de dados.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica as peças 3D e nomeia as eras históricas e de uso do solo que cada uma representa no mapa. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, a relação de cada objeto com o tempo. (Ex: 'A pegada representa o passado onde só tinha natureza, o canhão é a época que a cidade começou a ser construída e o tatu-bola é a natureza de hoje')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende o impacto ambiental causado pela expansão urbana. ",
      respostaEsperada: "Resposta Esperada: O aluno explica a relação de causa e efeito da atividade. (Ex: 'Para a cidade de concreto crescer e colocarmos as casas e o canhão, precisamos apagar as árvores, então sobra menos espaço para os animais morarem')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno transpõe o conceito de urbanização para a prática, mapeando e alterando o cenário físico (papel pardo) ao longo das três eras propostas. ",
      respostaEsperada: "Resposta Esperada: O aluno desenha a floresta inicial com as pegadas, depois apaga parte dela para inserir o contorno urbano e os canhões, e por fim agrupa os tatus-bola apenas nas margens verdes que restaram no mapa."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga o mapa final e o gráfico de post-its para extrair e comprovar o padrão computacional de correlação inversa (Reconhecimento de Padrões).",
      respostaEsperada: "Resposta Esperada: O aluno observa os dados gerados e identifica a tendência histórica. (Ex: 'Olhando o nosso gráfico, descobrimos um padrão: toda vez que o espaço da cidade aumenta, o espaço da floresta diminui')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno formula hipóteses e propõe soluções de preservação ambiental baseadas na análise dos dados históricos levantados. ",
      respostaEsperada: "Resposta Esperada: O grupo sugere regras de planejamento urbano para Nioaque. (Ex: 'Como percebemos o padrão de desmatamento, sugerimos criar uma lei onde cada rua nova precise ter um 'corredor verde' para o tatu-bola não perder todo o seu habitat')."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro:** O grupo articula a explicação do mapa e do gráfico com clareza causal, utilizando conectivos lógicos consistentes para explicar o fenômeno (ex: 'Concluímos que se a cidade expande sua área de concreto, então o espaço do tatu-bola é reduzido às margens').",
    "📐 **Organização Viso-espacial de Dados:** A disposição física dos elementos no papel pardo e a estruturação do gráfico de post-its são intuitivas e limpas. O aluno organiza as eras (pegadas, canhões e tatus) e os dados visuais de forma que qualquer leitor compreende imediatamente a cronologia e a perda progressiva da área verde.",
    "🐛 **Rastreamento e Análise de Informação:** O aluno vai além da constatação visual básica: ele extrai o padrão computacional de correlação inversa dos dados gerados, identifica a tendência de desmatamento ao longo do tempo e propõe de forma autônoma hipóteses ou soluções práticas de preservação (como corredores ecológicos)."
  ],

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-14.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-14.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-c-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/14-cidades-de-concreto.pdf"
};