// src/data/planos/08-rota-da-retirada.js

export const plano08 = {
  id: "rota-da-retirada",
  ano: "5º Ano",
  eixo: "MUNDO DIGITAL",
  tipo: "Desplugada",
  titulo: "Algoritmos e Depuração: Rota Desplugada da Retirada da Laguna",
  contexto: "Contexto Interdisciplinar: História (Ciências Humanas)",
  duracao: "50min/aula",
  objetoConhecimento: "Sequenciamento e Algoritmos. (Aplicação prática em: Dinâmicas populacionais, migrações e os conflitos na formação do território brasileiro).",
  habilidades: [
    {
      codigo: "(EF05CO01)",
      descricao: "Criar algoritmos simples para resolver problemas do cotidiano, utilizando diferentes linguagens (representação simbólica/setas)."
    },
    {
      codigo: "(EF05CO02)",
      descricao: "Identificar e corrigir erros em algoritmos (depuração) de forma lógica."
    },
    {
      codigo: "(EF05HI01)",
      descricao: "Habilidade de Apoio: Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico ocupado e as transformações territoriais decorrentes de conflitos militares ou fluxos migratórios."
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
      descricao: "Mapeamento e Algoritmos: Cada grupo recebe o simulador impresso (mapa com grid). A peça do Canhão 3D representa o exército. Os alunos devem usar os blocos/setas tangíveis de comando sobre a mesa para construir um algoritmo exato que guie a tropa do ponto de partida até a segurança de Nioaque.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Introdução de Variáveis: No meio da execução, o professor adiciona obstáculos físicos no mapa (Ex: posiciona um Jacaré articulado 3D simulando um banhado intransitável ou indica que uma cheia bloqueou o caminho). Depuração In Loco: Os alunos gritam 'Bug na rota histórica!', param o movimento e modificam a sequência de setas tangíveis (depuração) para encontrar um novo caminho tático seguro.",
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

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-08.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-08.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-a-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/08-rota-da-retirada.pdf"
};