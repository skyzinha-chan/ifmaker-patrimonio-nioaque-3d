// src/data/planos/07-museu-desplugado.js

export const plano07 = {
  id: "museu-desplugado",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Reconhecimento de Padrões e Repetição (Loops): O Museu Desplugado de Nioaque",
  contexto: "Contexto Interdisciplinar: História",
  duracao: "50min/aula",
  objetoConhecimento: "Conceito de Repetição (Loops) e Reconhecimento de Padrões. (Aplicação prática em: Os patrimônios materiais e imateriais da humanidade).",
  habilidades: [
    {
      codigo: "(EF15C002)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF15C001)",
      descricao: "Pilar: Reconhecimento de Padrões - Identificar características comuns para categorizar dados e informações."
    },
    {
      codigo: "(EF05HI10)",
      descricao: "Habilidade de Apoio: Inventariar os patrimônios materiais e imateriais da humanidade e de seu entorno, discutindo em que medida eles refletem os critérios de seleção e a importância histórica dos marcos de memória locais."
    }
  ],
  recursos: [
    "Sala de aula com mesas dispostas em semicírculo",
    "Canhões Históricos 3D e Pegadas de Dinossauros 3D",
    "Blocos de Programação Tangível ('Repetir' / Loops)",
    "Fichas de cartolina (fichas catalográficas) e canetas"
  ],
  ideiaPratica: "A turma atua como curadora de um museu e aplica o reconhecimento de padrões para classificar as peças 3D nos acervos de 'Patrimônio Paleontológico' e 'Patrimônio Histórico'. Ao construírem a exposição física na mesa, os alunos criam fichas catalográficas e utilizam blocos lógicos tangíveis de 'Repetir' (loops) para estruturar a linha do tempo. Essa organização otimiza a exibição e evita instruções redundantes, demonstrando que a cidade de Nioaque é um ciclo contínuo de descobertas.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Introdução Histórica: O professor apresenta o conceito de patrimônio e a importância de Nioaque como um local único que preserva duas eras distintas: a Pré-História (Vale dos Dinossauros) e a História Imperial/Militar (Retirada da Laguna). Desafio do Padrão: Explica-se que um curador de museu precisa encontrar 'padrões' (características semelhantes) para organizar o acervo.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Organização em Grupos: Os alunos manuseiam os Canhões e as Pegadas 3D. Eles criam 'Fichas Catalográficas' em cartolina descrevendo o material, a época presumida e o significado social do objeto. Aplicação do Pensamento Computacional: Os alunos percebem que a história de Nioaque segue um 'padrão cíclico' de descobertas e eventos marcantes.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Lógica de Loops (Repetir): Para montar a exposição na mesa, em vez de criar uma instrução longa para cada século, os alunos usam o bloco tangível 'Repetir' combinado com categorias (Ex: Repetir 3x [Exibir Ficha de Patrimônio Paleontológico], seguido de Repetir 2x [Exibir Ficha de Patrimônio Histórico]). Simulação: A turma valida se a estrutura lógica sintetizou adequadamente a progressão histórica e cronológica da cidade de forma limpa.",
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

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-07.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-07.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-c-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/07-museu-desplugado.pdf"
};