export const plano13 = {
  id: "hardware-vs-software",
  ano: "5º Ano",
  eixo: "MUNDO DIGITAL",
  tipo: "Desplugada",
  titulo: "Hardware e Software: Como a Máquina Pensa?",
  contexto: "Contexto Interdisciplinar: Cultura Maker / Ciências da Natureza",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Abstração e Decomposição",
    descricao: "Separar e compreender a camada lógica da camada física de um sistema."
  },
  objetoConhecimento: "Hardware e Software. Integração entre componente físico (Hardware - impressora 3D) e lógico (Software - arquivo de fatiamento). Processos de fabricação digital, decomposição tridimensional e propriedades físicas dos materiais (mudanças de estado físico do filamento plástico por fusão térmica e solidificação).",
  habilidades: [
    {
      codigo: "(EF05CO05)",
      descricao: "Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento)."
    },
    {
      codigo: "(EF15CO07)",
      descricao: "Conhecer o conceito de Sistema Operacional e sua importância na integração entre software e hardware."
    },
    {
      codigo: "(EF15CO04)",
      descricao: "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções."
    },
    {
      codigo: "(TD05HS01)",
      descricao: "Conhecer sistemas operacionais."
    },
    {
      codigo: "(EF05CI01)",
      descricao: "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
    }
  ],
  recursos: [
    "Sala de aula",
    "Tatus-bola articulados 3D (já impressos)",
    "Lousa, folhas de papel sulfite e lápis de cor"
  ],
  avaliacao: [
    {
      titulo: "Distinção Conceitual (Hardware vs. Software)",
      descricao: "Diferencia o componente físico palpável (a impressora e a réplica do Tatu-bola) do componente lógico intangível (o arquivo digital .stl/código de fatiamento), justificando que a máquina física depende estritamente das instruções lógicas para operar."
    },
    {
      titulo: "Abstração Espacial e Engenharia Reversa",
      descricao: "Decompõe a peça física tridimensional em camadas horizontais bidimensionais e encaixes milimétricos, registrando o esquema no papel como representação gráfica da leitura da máquina."
    },
    {
      titulo: "Compreensão Sistêmica do Bug",
      descricao: "Argumenta logicamente sobre o impacto de uma instrução corrompida no software, prevendo falhas físicas reais no hardware, como deformidades plásticas ou travamentos de extrusão."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 01",
      titulo: "Conhecimento",
      descricao: "Valorizar e utilizar os conhecimentos sobre o funcionamento do mundo digital para entender como as tecnologias são fabricadas."
    },
    {
      codigo: "CG 02",
      titulo: "Pensamento Científico, Crítico e Criativo",
      descricao: "Investigar o funcionamento dos objetos e exercitar a curiosidade sobre como a máquina processa informações."
    }
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
      descricao: "Organização das Bancadas e Investigação Tátil: Agrupe os estudantes em equipes de engenharia reversa e entregue os Tatus-bola 3D articulados e as folhas de desenho. Missão da Engenharia Reversa (Hardware para Software): Comande os estudantes com ordens no modo imperativo: Manipulem o Tatu-bola físico (hardware) e sintam com a ponta dos dedos as linhas horizontais finas deixadas pela impressora. Decomponham mentalmente o artefato sólido em camadas empilhadas: imaginem o objeto sendo fatiado como fatias de pão milimétricas. Transponham o modelo físico para a representação lógica: desenhem no papel o esquema de como o computador 'enxerga' e comanda as articulações, destacando o espaço oco entre as escamas que permite o movimento sem parafusos.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Apresentação dos Projetos Lógicos: Comande: 'Apresentem à turma os esboços fatiados, demonstrando onde o software delimitou o contorno externo e os espaços vazios das juntas articuladas'. Simulação Mental de Bugs e Debate Socrático: Provoque os grupos com situações-problema: 'Se o programador cometer um bug no software e digitar uma espessura errada, o que o hardware da impressora vai produzir?'. Identifiquem as consequências: os alunos devem apontar que o plástico fundiria as articulações, gerando uma peça rígida e travada. Concluam em consenso: 'O hardware é o corpo executor, mas o software é a instrução mandatória; um erro invisível no código gera uma falha visível no mundo físico'.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno nomeia as partes do processo tecnológico, identificando o Tatu-bola em mãos e o modelo no computador. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir os termos básicos. (Ex: 'A parte que a gente toca, como o tatu de plástico, é o hardware. O arquivo que a gente não pode tocar no computador é o software')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende a relação de dependência entre as duas partes do sistema. ",
      respostaEsperada: "Resposta Esperada: O aluno explica essa dependência com suas próprias palavras. (Ex: 'A impressora precisa do software para saber o formato certo de derreter o plástico e criar a articulação do tatu')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno transpõe o modelo físico que está segurando para uma representação em papel (desenho esquemático em camadas). ",
      respostaEsperada: "Resposta Esperada: O grupo desenha o tatu de forma abstrata, focando nas partes articuladas e nas 'fatias' que a impressora faz."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a estrutura física do artefato 3D para deduzir as decisões lógicas que foram tomadas no computador. ",
      respostaEsperada: "Resposta Esperada: O aluno analisa e decompõe. (Ex: 'Eu percebi que a articulação dele é solta porque no software o designer deixou um espaço vazio milimétrico entre as escamas')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno elabora uma hipótese sobre o impacto de erros de código sobre os componentes físicos. ",
      respostaEsperada: "Resposta Esperada: O grupo deduz a consequência de falhas lógicas no mundo real. (Ex: 'Se o software estivesse com a informação corrompida, o hardware da impressora ia imprimir uma pata torta ou ia travar')."
    }
  ],
  rubricaId: "tipo-b",
  ajusteFinoRubrica: [
    "⚙️ **Abstração de Propriedades:** O aluno foca a sua atenção e o seu desenho esquemático nas propriedades estruturais fundamentais do objeto (as camadas de impressão e o espaçamento milimétrico das articulações), ignorando características supérfluas (como a cor ou textura externa do plástico) para representar a lógica interna do projeto 3D.",
    "🐛 **Iteração e Manuseio do Artefato:** Durante a atividade de engenharia reversa no papel, o grupo manipula o Tatu-bola físico repetidas vezes (girando, dobrando as articulações) e, ao perceber que seu primeiro esboço não explicava o mecanismo de encaixe, refaz o desenho com paciência, ajustando as linhas para que o 'Software simulado' realmente faça sentido físico.",
    "💻 **Transposição Físico-Digital:** O aluno explica com total clareza a conexão entre os mundos: ele verbaliza que o Tatu de plástico nas suas mãos (Hardware) é apenas a consequência material de um arquivo de computador invisível (Software), compreendendo que qualquer instrução corrompida no código geraria uma falha física real na impressora."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: null,
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO B.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.3.1 – HARDWARE VS. SOFTWARE.pdf"
};