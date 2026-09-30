// src/data/planos/06-bifurcacoes-narrativas.js

export const plano06 = {
  id: "bifurcacoes-narrativas",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Lógica Condicional e Abstração: Caminhos Alternativos na Retirada da Laguna",
  contexto: "Contexto Interdisciplinar: Língua Portuguesa",
  duracao: "50min/aula",
  objetoConhecimento: "Condicionais lógicos e Abstração. (Aplicação prática em: Produção de textos narrativos (contos de aventura), progressão temporal/espacial).",
  habilidades: [
    {
      codigo: "Pilar Computacional",
      descricao: "Abstração: isolar características essenciais e ignorar detalhes irrelevantes na rota narrativa."
    },
    {
      codigo: "(EF15CO02 / EF05CO04)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF35LP25)",
      descricao: "Criar narrativas ficcionais, com certa autonomia, utilizando detalhes descritivos, sequências de eventos e imagens apropriadas para sustentar o sentido do texto, e marcadores de tempo, espaço e de fala de personagens. Habilidade Integradora de Apoio."
    }
  ],
  recursos: [
    "Sala de aula organizada em grupos",
    "Papel pardo/cartolinas",
    "Canhões Históricos 3D e Jacarés articulados 3D",
    "Blocos de Programação Tangível lógicos ('Se/Então')"
  ],
  ideiaPratica: "Os alunos programam o fluxo de um conto interativo ambientado na Retirada da Laguna. Ao inserirem o encontro com jacarés na trama, utilizam os blocos de lógica condicional ('se/então') para estruturar as 'bifurcações' da história (Ex: SE o jacaré atacar, ENTÃO o soldado atira com o canhão; SENÃO, ele atravessa o rio em silêncio), mapeando consequências textuais diferentes baseadas em regras lógicas.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "História Local e Literatura: Contar brevemente a odisseia militar da Retirada da Laguna pelo Pantanal. Explicar o que é um texto narrativo e apresentar o formato dos 'Livros-Jogo' interativos (Onde o leitor toma decisões). Introdução Lógica: Apresentar o bloco físico 'Se/Então' (If/Then). Explicar que toda aventura possui escolhas e consequências.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Planejamento do Conto (Abstração do Enredo): Organize as equipes com as cartolinas e as peças 3D do canhão e do jacaré. Oriente os alunos a esboçar no papel o esqueleto do conto, traçando a linha de avanço da tropa pelo Pantanal até o clímax. Posicione os artefatos 3D como marcos físicos do cenário nos momentos de perigo iminente e isole os detalhes secundários, focando no dilema de sobrevivência dos soldados. Na estruturação da bifurcação, insira o bloco tangível 'Se/Então' no instante da decisão, defina a regra condicional e redija dois ramos narrativos autônomos: um para a consequência verdadeira e outro para o caminho alternativo.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Leitura Interativa do Livro-Jogo: Promova a troca de contos entre as bancadas. Ao chegar à bifurcação do bloco 'Se/Então', cada equipe leitora toma uma decisão manipulando as peças 3D para acionar o final correspondente. Caso perceba incoerência entre a condição escolhida e o parágrafo executado, a equipe interrompe a leitura, identifica a quebra de nexo lógico e os autores depuram o enredo, revisando a redação e ajustando a coesão gramatical das duas ramificações.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica os elementos básicos de um texto narrativo e reconhece a função de um comando lógico condicional. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, o que é o conflito da história e como funciona a regra do bloco físico. (Ex: 'A história precisa de um problema, e o bloco 'Se/Então' serve para dar duas opções de escolha para o soldado enfrentar o jacaré')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende como a lógica condicional altera a progressão temporal e a coesão do texto. ",
      respostaEsperada: "Resposta Esperada: O aluno explica por que cada escolha precisa de uma consequência lógica diferente. (Ex: 'Se o soldado escolher atirar com o canhão, o parágrafo seguinte precisa mostrar que o barulho espantou os animais, senão a história perde o sentido')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno transpõe o planejamento abstrato (o esqueleto da história) para a produção escrita, utilizando os artefatos 3D como guias físicos no papel. ",
      respostaEsperada: "Resposta Esperada: O aluno estrutura a introdução do conto no papel pardo, posiciona o bloco tangível 'Se/Então' no momento do clímax e redige corretamente os dois parágrafos alternativos correspondentes a cada decisão."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno revisa a lógica e a coesão textual da narrativa ramificada durante a leitura interativa cruzada (debugging literário). ",
      respostaEsperada: "Resposta Esperada: Ao jogar a história do outro grupo, o aluno percebe se as transições fazem sentido ou se há falhas lógicas. (Ex: 'Achamos um bug na história! O leitor escolheu atravessar em silêncio no 'SENÃO', mas o texto continua como se o canhão tivesse disparado. Precisamos corrigir essa parte')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno elabora uma narrativa ficcional de aventura interativa completa, integrando harmoniosamente elementos do patrimônio histórico local, a fauna e o pensamento computacional. ",
      respostaEsperada: "Resposta Esperada: O aluno consolida o 'Livro-Jogo', entregando um conto com introdução envolvente, um momento de bifurcação lógica perfeitamente sinalizado e desfechos coerentes para quem for interagir com o texto."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro (A Bifurcação Escrita):** O aluno elabora uma narrativa autossuficiente e lógica. Ele escreve a introdução e, no momento do clímax, cria dois parágrafos alternativos perfeitamente coesos para a condição exigida. Ele garante que a consequência (o 'ENTÃO' - atirar com o canhão) e a alternativa (o 'SENÃO' - atravessar em silêncio) gerem desfechos que façam sentido com o resto da história, sem perder a continuidade temporal do texto.",
    "📐 **Organização Viso-espacial de Dados (Mapeamento do Conto):** O aluno utiliza a cartolina de forma estratégica, criando um verdadeiro fluxograma literário. O texto não é um bloco confuso; a estrutura ramificada é visível e hierárquica. Ele posiciona o bloco tangível de 'Se/Então' no exato ponto de ruptura visual e pode até mesmo utilizar setas desenhadas ou espaçamentos claros para guiar o leitor para o parágrafo da opção A ou da opção B.",
    "🐛 **Rastreamento e Análise de Informação (Debugging Literário):** Durante a troca de histórias, o aluno assume a postura de um verdadeiro 'compilador'. Ao ler o texto do outro grupo e interagir com as peças 3D, ele rastreia a lógica da escolha. Se ele escolher a opção 'SENÃO' (fugir em silêncio) e o parágrafo seguinte descrever um estrondo de pólvora, ele paralisa a leitura, aponta o 'Bug Literário' e explica à equipe autora onde a conexão lógica entre os parágrafos falhou."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.4 – BIFURCAÇÕES NARRATIVAS.pdf"
};