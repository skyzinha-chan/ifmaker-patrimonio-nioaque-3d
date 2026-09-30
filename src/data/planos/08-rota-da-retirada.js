// src/data/planos/08-rota-da-retirada.js

export const plano08 = {
  id: "rota-da-retirada",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Algoritmos e Depuração: Rota Desplugada da Retirada da Laguna",
  contexto: "Contexto Interdisciplinar: Ciências Humanas - História",
  duracao: "50min/aula",
  objetoConhecimento: "Sequenciamento e Algoritmos. O que forma um povo: as dinâmicas populacionais, o espaço geográfico ocupado e as transformações territoriais decorrentes de conflitos militares ou fluxos migratórios.",
  habilidades: [
    {
      codigo: "(EF15CO02)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(EF05HI01)",
      descricao: "Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico ocupado."
    }
  ],
  recursos: [
    "Sala de aula com mesas agrupadas em ilhas de aprendizagem",
    "Mapa geohistorico em formato ampliado sobre a mesa (Simulador da Retirada da Laguna)",
    "Canhões Históricos 3D e Jacarés 3D",
    "Kit de Programação Tangível (setas direcionais)"
  ],
  ideiaPratica: "Em um mapa sobre a mesa, os alunos programam o algoritmo da rota de fuga do exército (canhão) utilizando setas tangíveis. Durante a execução, o professor adiciona obstáculos surpresa (jacarés 3D ou intempéries). A cada evento, o grupo precisa pausar a execução, depurar a sequência lógica (debugging) e reprogramar as setas direcionais para desviar do perigo, simulando sistemicamente as dificuldades táticas enfrentadas na Guerra do Paraguai.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Narrativa Engajadora: Os professores introduzem a odisseia de José Francisco Lopes (o Guia Lopes) e o trágico episódio da Retirada da Laguna (1867) no contexto da Guerra do Paraguai, destacando a importância estratégica do rio Apa e de Nioaque. Explanação Teórica: Debate-se o impacto do terreno e da fauna pantaneira (representada pelo jacaré) na movimentação das tropas.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Distribuição do Simulador e Organização das Ilhas: Entregue a cada equipe o simulador tático com grid (mapa de mesa da Retirada da Laguna), a réplica do Canhão 3D e o conjunto de setas tangíveis de comando. Missão da Marcha Segura (Construção Algorítmica): Comande os estrategistas com ordens no modo imperativo: Examinem o ponto de partida das tropas e o destino em Nioaque, mapeando os banhados e cursos d'água no tabuleiro. Decomponham o trajeto em etapas sequenciais de avanço e giro angular. Enfileirem as setas direcionais sobre a mesa, montando o algoritmo completo antes de tocar no artefato. Validem o código em conjunto: o canhão só pode marchar após a conferência e o consenso da equipe.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Execução Tática e Injeção de Obstáculo: Comande: \"Mexam o Canhão 3D casa por casa no grid executando estritamente uma seta por vez\". No meio da marcha, insira uma barreira física surpresa no caminho (posicione o Jacaré articulado 3D simulando um banhado pantaneiro intransitável ou bloqueio militar). Celebração do Bug e Depuração Tática (Debugging): Diante do bloqueio inesperado: Interrompam o avanço imediatamente e exclamem: \"Bug na rota histórica!\". Rastreiem a sequência de setas e isolem a instrução que colidiria com o jacaré ou a cheia do rio. Substituam pontualmente o comando por novas setas de manobra, contornando a ameaça sem desfazer o trecho seguro já percorrido. Prossigam na execução até alcançar a segurança territorial de Nioaque.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao:"Ação: O aluno identifica os elementos históricos no mapa (tropas, terreno) e reconhece a função das setas de comando tangíveis.",
      respostaEsperada: " Resposta Esperada: O aluno consegue definir, com suas próprias palavras, quem a peça representa e o que cada seta direcional faz no simulador. (Ex: 'O canhão é o exército do Guia Lopes, e essa seta indica que a tropa deve avançar um espaço no mapa')."
    },
    {
      nivel: "2. Compreensão",
      acao:"Ação: O aluno compreende as dificuldades geográficas e táticas da Retirada da Laguna e como a ordem lógica dos comandos determina a segurança da tropa. ",
      respostaEsperada: "Resposta Esperada: O aluno explica por que a sequência precisa ser rigorosa para evitar perigos históricos. (Ex: 'Se eu colocar o bloco de 'Avançar' antes do de 'Virar', o exército vai marchar direto para o banhado e ficar preso')."
    },
    {
      nivel: "3. Aplicação",
      acao:"Ação: O aluno utiliza as setas físicas sobre a mesa para planejar e executar a rota de fuga através do mapa com grid (simulador). ",
      respostaEsperada: "Resposta Esperada: O aluno sequencia e posiciona corretamente os cartões direcionais, construindo um algoritmo completo que guia a peça do canhão do ponto de partida até a cidade de Nioaque, evitando os obstáculos originais do tabuleiro."
    },
    {
      nivel: "4. Análise",
      acao:"Ação: O aluno investiga a rota para realizar a depuração (debugging tático) imediata quando o cenário sofre uma intervenção não prevista (adição do jacaré 3D). ",
      respostaEsperada: "Resposta Esperada: O aluno localiza rapidamente onde a rota tornou-se perigosa. (Ex: 'Bug na rota histórica! O professor colocou um jacaré na frente. O erro agora está na terceira seta, precisamos tirá-la e desviar a tropa pela direita')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno propõe cenários táticos novos, alterando as posições de risco para desafiar os algoritmos de planejamento de outras equipes. ",
      respostaEsperada: "Resposta Esperada: O grupo cria desafios extras baseados na narrativa. (Ex: 'Vamos colocar dois jacarés bloqueando a ponte do rio Apa para obrigar a outra equipe a construir um algoritmo mais longo dando a volta no mapa')."
    }
  ],
  rubricaId: "tipo-a",
  ajusteFinoRubrica: [
    "🧩 **Lógica e Sequenciamento (O Algoritmo Tático):** O aluno não move a peça do exército de forma impulsiva, um quadrado por vez. Ele antecipa o trajeto no mapa, identifica visualmente os gargalos (como rios ou banhados originais do tabuleiro) e constrói a linha de código completa na mesa (a sequência de setas) garantindo que a tropa chegue a Nioaque de forma autônoma e segura.",
    "🐛 **Depuração de Erros (Debugging da Rota Histórica):** Quando o jacaré é colocado em seu caminho, o aluno não demonstra frustração, não desmonta o código inteiro e não tenta simplesmente 'pular' o artefato. Ele grita 'Bug na rota histórica!', pausa a execução, rastreia a sequência de setas até o ponto exato da interrupção e substitui apenas os comandos necessários para criar um desvio pela direita ou pela esquerda, otimizando o esforço.",
    "🤝 **Trabalho em Equipe e Papéis:** O aluno atua de forma sistêmica e respeita as funções dentro do esquadrão tático. Ele não monopoliza as peças 3D; em vez disso, enquanto atua como 'programador', escuta os alertas dos colegas que estão monitorando o mapa (ex: 'Atenção, se formos por aí o canhão vai atolar'). Ele debate as opções lógicas fundamentadas no terreno histórico antes de alterar o algoritmo."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo A - Eixo Pensamento Computacional.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO A.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.6 – ROTA DA RETIRADA.pdf"
};