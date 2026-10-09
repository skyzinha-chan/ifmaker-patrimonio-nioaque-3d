// src/data/planos/07-museu-desplugado.js

export const plano07 = {
  id: "museu-desplugado",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Reconhecimento de Padrões e Repetição (Loops): O Museu Desplugado de Nioaque",
  contexto: "Contexto Interdisciplinar: Ciências Humanas - História",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Reconhecimento de Padrões e Repetição",
    descricao: "Identificar características comuns para categorizar conjuntos de dados históricos, agrupando-os de forma eficiente por meio de loops lógicos."
  },
  objetoConhecimento: "Conceito de Repetição (Loops), Reconhecimento de Padrões e Organização estruturada de dados. Os patrimônios materiais e imateriais da humanidade (Foco: inventário e critérios de seleção dos marcos de memória de Nioaque).",
  habilidades: [
    {
      codigo: "(EF15CO02)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF15CO01)",
      descricao: "Identificar as principais formas de organizar e representar a informação de maneira estruturada (matrizes, registros, listas e grafos) ou não estruturada (números, palavras, valores verdade)."
    },
    {
      codigo: "(PC05AL01)",
      descricao: "Conhecer e utilizar algoritmos com repetições."
    },
    {
      codigo: "(EF05HI10)",
      descricao: "Inventariar os patrimônios materiais e imateriais da humanidade e analisar mudanças e permanências desses patrimônios ao longo do tempo."
    }
  ],
  recursos: [
    "Sala de aula com mesas dispostas em semicírculo",
    "Canhões Históricos 3D e Pegadas de Dinossauros 3D",
    "Blocos de Programação Tangível ('Repetir' / Loops)",
    "Fichas de cartolina (fichas catalográficas) e canetas"
  ],
  avaliacao: [
    {
      titulo: "Reconhecimento de Padrões Históricos",
      descricao: "Analisa e agrupa os artefatos 3D por propriedades comuns (fósseis cretáceos versus armamentos imperiais), preenchendo as fichas catalográficas com critérios de época e relevância cultural."
    },
    {
      titulo: "Estruturação de Repetição (Loops)",
      descricao: "Utiliza o bloco tangível 'Repetir' para otimizar a montagem da linha do tempo da exposição (ex.: Repetir 3x [Exibir Fóssil]), eliminando comandos redundantes."
    },
    {
      titulo: "Depuração Curatorial (Debugging)",
      descricao: "Identifica e reposiciona peças atribuídas à era errada ou ajusta a contagem do multiplicador do loop ao auditar a exposição do grupo vizinho."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 03",
      titulo: "Repertório Cultural",
      descricao: "Valorizar e fruir as diversas manifestações artísticas e culturais, das locais às mundiais, e participar de práticas diversificadas da produção artístico-cultural."
    },
    {
      codigo: "CG 05",
      titulo: "Cultura Digital",
      descricao: "Compreender, utilizar e criar tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais."
    },
    {
      codigo: "CG 07",
      titulo: "Argumentação",
      descricao: "Argumentar com base em fatos, dados e informações confiáveis para formular, negociar e defender ideias e pontos de vista comuns."
    }
  ],
  ideiaPratica: "A turma atua como curadora de um museu e aplica o reconhecimento de padrões para classificar as peças 3D nos acervos de \"Patrimônio Paleontológico\" e \"Patrimônio Histórico\". Ao construírem a exposição física na mesa, os alunos criam fichas catalográficas e utilizam blocos lógicos tangíveis de \"Repetir\" (loops) para estruturar a linha do tempo. Essa organização otimiza a exibição e evita instruções redundantes, demonstrando que, independentemente da época - de milhões de anos atrás a 1867 -, a cidade de Nioaque é um ciclo contínuo de descobertas e histórias importantes.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Introdução Histórica: O professor apresenta o conceito de patrimônio e a importância de Nioaque como um local único que preserva duas eras distintas: a Pré-História (Vale dos Dinossauros) e a História Imperial/Militar (Retirada da Laguna). Desafio do Padrão: Explica-se que um curador de museu precisa encontrar \"padrões\" (características semelhantes) para organizar o acervo.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Curadoria e Reconhecimento de Padrões: Organize as bancadas em formato de ateliê de museu. Comande as equipes de curadores: Examinem os artefatos 3D (Canhões e Pegadas) e identifiquem características semelhantes de formato, materialidade e época. Agrupem as peças em dois grandes acervos patrimoniais: Patrimônio Paleontológico (Cretáceo) e Patrimônio Histórico (Retirada da Laguna). Preencham as fichas catalográficas em cartolina, registrando época presumida, material e o significado sociocultural de cada marco de memória de Nioaque.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Estruturação Algorítmica da Exposição (Modo Loop): Comande a montagem da linha do tempo: Organizem a disposição das mesas em ordem cronológica de Nioaque. Otimizem o algoritmo de exibição: em vez de listar cada peça individualmente, apliquem os blocos tangíveis de \"Repetir\" para criar laços lógicos (ex.: Repetir 3x [Exibir Fóssil] seguido de Repetir 2x [Exibir Canhão]). Auditoria Curatorial e Depuração (Debugging): Caso uma peça imperial esteja dentro do laço paleontológico ou o número do loop não coincida com os artefatos da bancada: Interrompam a visitação imediatamente e exclamem: \"Bug no acervo!\". Rastreiem a inconsistência de dados históricos ou a contagem equivocada do laço. Curadores, depurem a exposição: reajustem os blocos de repetição e reposicionem as fichas catalográficas corretas.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica os artefatos 3D, nomeia as eras correspondentes a eles e reconhece a função do bloco 'Repetir'. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, a diferença entre os acervos e o comando lógico. (Ex: 'A pegada é um patrimônio paleontológico e o canhão é histórico. O bloco repetir serve para não escrevermos a mesma instrução várias vezes')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende o conceito de Reconhecimento de Padrões e a utilidade da lógica de repetição (loops) na organização de informações. ",
      respostaEsperada: "Resposta Esperada: O aluno explica a lógica por trás da curadoria do museu. (Ex: 'Nós agrupamos todas as pegadas juntas porque elas seguem um padrão e são da mesma época. Então, podemos usar um 'loop' para exibir todas de uma vez')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno preenche as Fichas Catalográficas com os dados reais do acervo e utiliza os blocos físicos para estruturar a apresentação da exposição na mesa. ",
      respostaEsperada: "Resposta Esperada: O aluno registra a época e o significado do objeto nas fichas de cartolina e posiciona corretamente o bloco tangível de repetição ao lado do grupo de artefatos (Ex: Bloco Repetir 3x ao lado das três pegadas)."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno revisa a curadoria e a estrutura lógica da exposição para identificar erros conceituais ou de programação (debugging de dados). ",
      respostaEsperada: "Resposta Esperada: O aluno investiga a mesa e percebe falhas na classificação ou no loop. (Ex: 'Achamos um bug na exposição! O canhão foi colocado junto do 'Repetir' paleontológico, mas ele é do Império, precisamos mudar a ficha dele para patrimônio histórico')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno organiza, consolida e propõe a estrutura final do 'Museu Desplugado', unindo História e Pensamento Computacional de forma visualmente clara. ",
      respostaEsperada: "Resposta Esperada: O aluno entrega a exposição montada na mesa de maneira autossuficiente, com as fichas precisas e os loops bem estruturados, garantindo que qualquer 'visitante' do museu entenda a linha cronológica de Nioaque perfeitamente."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro (A Lógica dos Loops):** O aluno compreende que não precisa gerar comandos redundantes. Ele estrutura a exposição utilizando corretamente os blocos tangíveis (ex: unindo o bloco Repetir 3x ao agrupamento das pegadas de dinossauro). O arranjo final na mesa é lógico, autossuficiente e sintetiza a linha do tempo histórica perfeitamente, sem embaralhar as eras.",
    "📐 **Organização Viso-espacial de Dados (A Mesa de Exposição):** O aluno utiliza o espaço da mesa e da cartolina de forma altamente estratégica. Ele preenche a ficha catalográfica com letra legível e capricho visual. Na mesa, ele cria uma separação física clara e delimitada entre o acervo Paleontológico e o acervo do Império, posicionando os artefatos 3D e os blocos de programação como verdadeiras legendas de museu.",
    "🐛 **Rastreamento e Análise de Informação (Classificação e Debugging de Dados):** O aluno analisa os artefatos detalhadamente e registra dados precisos (época, material, significado) na ficha, demonstrando domínio histórico. Se durante a montagem da exposição um 'Canhão' for parar por engano na seção do 'Loop Paleontológico', ele realiza o debugging de dados instantaneamente: rastreia a falha de classificação histórica, retira a peça do agrupamento incorreto e a realoca no ciclo cronológico correto do Império."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.5 – O MUSEU DESPLUGADO.pdf"
};