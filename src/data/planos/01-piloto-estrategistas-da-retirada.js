// src/data/planos/piloto-01-estrategistas.js
// Dados extraídos do Manual IFMaker - Aula Piloto Validada

export const plano01 = {
  id: "piloto-01-estrategistas",
  tipo: "piloto",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  titulo: "Plano Piloto 1: Computação Desplugada – Estrategistas da Retirada",
  contexto: "História Local (Nioaque)",
  duracao: "4 HORAS",
  objetoConhecimento: "Algoritmos, Decomposição, Reconhecimento de Padrões através da história local (Retirada da Laguna, transformações territoriais e conflitos em Nioaque). O que forma um povo: do nomadismo aos primeiros povos sedentarizados.",
  habilidades: [
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(EF05HI01)",
      descricao: "Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico ocupado."
    },
    {
      codigo: "(PC05AL01)",
      descricao: "Conhecer e utilizar algoritmos com repetições. Referência CIEB opcional de apoio."
    }
  ],
  recursos: [
    "Sala de aula com carteiras afastadas",
    "Fita crepe para o grid no chão",
    "Cartões de comando impressos",
    "Imagens do monumento de José Francisco Lopes e do Canhão",
    "Obstáculos 2D plastificados"
  ],
  ideiaPratica: "Os alunos atuam como 'Estrategistas da Retirada', traçando rotas seguras no chão da sala sem uso de GPS, aplicando decomposição e depuração tática.",
  roteiro: [
    {
      parte: "1ª Parte (30 min)",
      titulo: "Contextualização",
      descricao: "Reúna a turma em semicírculo e apresente a missão tática dos 'Estrategistas da Retirada'. Narre brevemente o desafio do Guia Lopes e das tropas brasileiras para cruzar o relevo pantaneiro e o Rio Apa sem recursos tecnológicos modernos. Provoque os alunos: 'Se estivéssemos em 1867, sem satélites, telas ou sinal de GPS, como forneceríamos instruções infalíveis para que uma tropa marche com segurança no escuro?'. Estabeleça o 'Modo Furtivo', com comunicação em tom de sussurro estratégico para não alertar o território adversário, e os cuidados com o acervo plastificado.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (165 min)",
      titulo: "Experimentação (Intercalado com Lanche e Recreio)",
      descricao: "Apresente os cartões de comando físicos e defina algoritmo como uma lista finita, ordenada e precisa de passos. Explique que o robô não tem vontade própria e executa estritamente a instrução recebida. Divida a sala em esquadrões de até 4 integrantes utilizando as fichas de recrutamento e atribua os papéis: Mestre do Código, Robô Tático, Caçador de Bugs e Cartógrafo. Na Missão 1, as equipes decompõem o percurso, enfileiram as setas no chão, conferem o código e executam a rota. Na Missão 2, insira um obstáculo surpresa no grid, acione o Caçador de Bugs, identifique a seta responsável e depure o código sem desfazer o caminho validado. Gire os papéis em sentido horário a cada rodada.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (45 min)",
      titulo: "Avaliação",
      descricao: "Desafie a turma a executar o 'Algoritmo da Limpeza', recolhendo os cartões plastificados, a fita crepe e alinhando as carteiras. Oriente o preenchimento individual da Folha de Missão do Esquadrão, disponível no Apêndice A, e a colagem dos emblemas de mérito lógico no caderno. Finalize com uma roda de conversa socrática sobre a positividade do erro na Ciência da Computação: 'O que o bug nos ensina quando o caminho falha? Por que depurar faz de nós estrategistas melhores?'. Registre as evidências no Guia de Observação.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      respostaEsperada: "O aluno consegue definir com suas palavras o que é um comando e um algoritmo. (Ex: 'Algoritmo é a ordem certa das setas para o herói andar')."
    },
    {
      nivel: "2. Compreensão",
      respostaEsperada: "O aluno entende a importância da ordem. (Ex: 'Se eu colocar Avançar antes de Virar, o Guia Lopes cai no rio')."
    },
    {
      nivel: "3. Aplicação",
      respostaEsperada: "O aluno utiliza os cartões físicos para resolver o trajeto proposto no chão do pátio de forma independente."
    },
    {
      nivel: "4. Análise",
      respostaEsperada: "O aluno identifica um 'bug' (erro). (Ex: 'O erro está no terceiro cartão, ele deveria ter virado para a esquerda, não para a direita')."
    },
    {
      nivel: "5. Síntese (Criação)",
      respostaEsperada: "O aluno cria desafios novos. (Ex: O aluno sugere colocar mais um obstáculo e cria um novo caminho alternativo para desviar dele)."
    }
  ],
  guiaObservacao: {
    pesquisadores: "Talita Marques e Leonardo Vinicius",
    objetivo: "Coleta de evidências sobre o desenvolvimento do raciocínio lógico e depuração de algoritmos (Meta 4).",
    criterios: [
      {
        nome: "🧩 Decomposição",
        pergunta: "(Transformou o trajeto longo em comandos curtos?)",
        criterioAvaliador: "Marcar SIM se o grupo conseguiu planejar a sequência de cartões de setas na mesa antes do 'Robô' começar a andar, demonstrando que entenderam os passos individuais."
      },
      {
        nome: "🐛 Depuração / Debug",
        pergunta: "(Identificou e corrigiu o erro no código?)",
        criterioAvaliador: "Marcar SIM se, ao cometer um erro no trajeto (bater no Rio Apa ou virar para o lado errado), o grupo conseguiu olhar para a fila de cartões, achar exatamente qual seta estava errada e substituí-la sem precisar 'apagar' o código inteiro."
      },
      {
        nome: "🤝 Colaboração e Empatia",
        pergunta: "(Trabalharam em equipe e ouviram o Caçador de Bugs?)",
        criterioAvaliador: "Marcar SIM se os alunos respeitaram as funções (Mestre do Código, Robô, etc) e se o grupo conseguiu resolver conflitos de opinião sobre o trajeto de forma pacífica (Modo Furtivo)."
      }
    ]
  },

  atividadesPdfUrl: "/pdfs/atividades/MISSÃO - ESTRATEGISTAS DA RETIRADA (PLANO PILOTO 1).pdf",
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo A - Eixo Pensamento Computacional.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/GUIA DE OBSERVAÇÃO (RUBRICA) - AULA PILOTO 1.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA PILOTO 1 – ESTRATEGISTAS DA RETIRADA.pdf"
};