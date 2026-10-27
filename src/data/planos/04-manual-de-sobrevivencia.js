export const plano04 = {
  id: "manual-de-sobrevivencia",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Algoritmos Textuais e Depuração: O Manual de Sobrevivência do Tatu-bola Robô",
  contexto: "Contexto Interdisciplinar: Língua Portuguesa",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Algoritmos e Depuração",
    descricao: "Entender que um texto instrucional é o código-fonte a ser executado, e que a correção de ambiguidades funciona como resolução de bugs."
  },
  objetoConhecimento: "Algoritmos e Depuração (Debugging). (Aplicação prática em: Textos instrucionais, coesão, uso de verbos no imperativo).",
  habilidades: [
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(EF05LP12)",
      descricao: "Planejar e produzir, com autonomia, textos instrucionais de regras de jogo, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto."
    }
  ],
  recursos: [
    "Sala de aula com mesas em duplas",
    "Tatus-bola impressos em 3D articulados (projeto IFMAKER)",
    "Cadernos, lápis e borrachas",
    "Kit de Programação Tangível"
  ],
  avaliacao: [
    {
      titulo: "Estrutura Algorítmica Textual",
      descricao: "Redige o passo a passo com verbos de ação no modo imperativo (ex.: gire, puxe, encaixe), ordenando as instruções para articular o tatu-bola 3D sem ambiguidades."
    },
    {
      titulo: "Execução Fiel ao Código",
      descricao: "Atua como robô executor, realizando estritamente a ação descrita no manual recebido, sem inferir ou adivinhar movimentos ausentes."
    },
    {
      titulo: "Depuração Textual (Debugging)",
      descricao: "Localiza termos vagos ou ambíguos (ex.: 'mexa o negócio') e reescreve a frase com precisão lexical e coesão ao constatar o travamento físico do artefato."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 04",
      titulo: "Comunicação",
      descricao: "Utilizar diferentes linguagens, bem como conhecimentos das linguagens verbal e matemática para se expressar e partilhar informações."
    },
    {
      codigo: "CG 05",
      titulo: "Cultura Digital",
      descricao: "Compreender, utilizar e criar tecnologias digitais de forma crítica e reflexiva nas diversas práticas sociais, incluindo a transposição da lógica de código para texto."
    },
    {
      codigo: "CG 09",
      titulo: "Empatia e Cooperação",
      descricao: "Exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação."
    }
  ],
  ideiaPratica: "Uma dupla atua como 'programadora', redigindo um algoritmo textual (manual de instruções) com verbos no imperativo para fazer o tatu-bola 3D se enrolar. A outra dupla (que não viu a escrita) atua como 'robô' e tenta executar o código textual ao pé da letra usando os blocos de comando; em caso de falha no movimento, eles realizam o 'debugging' (depuração), revisando e reescrevendo o texto original juntos até funcionar.",
  roteiro: [
    {
      parte: "1ª Parte (10 min)",
      titulo: "Contextualização",
      descricao: "Sondagem: O professor questiona se a turma sabe como um computador lê um comando. Explica que a máquina não 'pensa', ela obedece cegamente a textos instrucionais perfeitos chamados 'Algoritmos'. Preparação: Apresentação do Tatu-bola 3D. A missão é redigir o 'Manual de Sobrevivência (Algoritmo)' do robô.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (25 min)",
      titulo: "Experimentação",
      descricao: "Divida a turma em duplas de desenvolvedores. A Dupla A, formada pelos Programadores, manipula o Tatu-bola 3D articulado e decompõe seus movimentos em etapas menores, como cabeça, cauda e carapaça central. Em seguida, redige no caderno o Manual de Sobrevivência, estruturando uma sequência finita de passos com verbos no imperativo. A Dupla B não pode ver a peça sendo articulada antes do teste.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Troque os cadernos entre as duplas. A Dupla B, formada pelos Robôs, pega o manual e o Tatu-bola aberto e executa cegamente apenas o que está escrito, sem adivinhar ações ausentes. Se a instrução for imprecisa e o robô não conseguir se enrolar, interrompa o movimento e identifique a linha que gerou a dúvida. A Dupla A deve depurar o código, apagar o termo confuso e reescrever a instrução com clareza técnica até o colega conseguir fechar o tatu-bola.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica as partes móveis do artefato e lista os verbos de ação adequados para manipulá-lo. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue identificar e listar verbos de ação no imperativo necessários para dar uma ordem. (Ex: \"Vire, puxe, feche, encaixe\")."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende a relação direta entre a clareza de um texto instrucional e a lógica de execução de um algoritmo. ",
      respostaEsperada: "Resposta Esperada: O aluno compreende que um texto instrucional funciona como um algoritmo. (Ex: \"Se eu não escrever exatamente o que é para fazer, o colega que é o 'robô' vai montar o tatu-bola errado\")."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno transcreve o sequenciamento físico para o papel, redigindo o primeiro rascunho de instruções. ",
      respostaEsperada: "Resposta Esperada: O aluno redige o rascunho do manual, transpondo os movimentos físicos que fez com o artefato 3D para frases estruturadas no papel usando os blocos tangíveis de suporte."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a estrutura do seu próprio texto para localizar ambiguidades quando a instrução falha na prática (debugging textual). ",
      respostaEsperada: "Resposta Esperada: O aluno realiza o debugging textual. Ao ver a dupla falhar na execução, ele identifica onde a comunicação falhou. (Ex: \"Achamos o bug! A frase 'mexa o negócio' ficou confusa, precisamos trocar por 'puxe a cauda'\")."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno reconstrói e aprimora o manual de instruções, gerando um documento autossuficiente e livre de erros lógicos. ",
      respostaEsperada: "Resposta Esperada: O aluno reescreve e consolida o manual final com total clareza lógica, garantindo que qualquer pessoa consiga executar as instruções com sucesso."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro:** O aluno elabora um texto instrucional autossuficiente. Ele escreve instruções diretas utilizando o imperativo de forma precisa (ex: 'segure', 'puxe', 'gire'), garantindo que o sequenciamento lógico (início, meio e fim da montagem do Tatu-bola) esteja perfeitamente estruturado, sem pular etapas estruturais do brinquedo.",
    "📐 **Organização Viso-espacial de Dados:** O aluno utiliza o espaço da folha de maneira estratégica, não escrevendo um bloco de texto denso e confuso. Ele diagramará o manual utilizando numeração em lista (Passo 1, Passo 2), espaçamentos claros ou até mesmo criando legendas visuais ao lado do texto para facilitar a rápida leitura e execução pelo colega robô.",
    "🐛 **Rastreamento e Análise de Informação (Debugging Textual):** Ao perceber que o robô executou um movimento errado com o Tatu-bola, o aluno não culpa o colega. Ele assume uma postura analítica, rastreia a falha até a instrução escrita, identifica exatamente a palavra ou frase ambígua (ex: 'mexa o negócio') e realiza o 'bug de comunicação', apagando e reescrevendo o comando com total clareza técnica."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: null,
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.2 – O MANUAL DE SOBREVIVÊNCIA.pdf"
};