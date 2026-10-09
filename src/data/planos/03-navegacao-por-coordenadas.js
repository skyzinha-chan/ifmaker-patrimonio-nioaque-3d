// src/data/planos/03-navegacao-por-coordenadas.js

export const plano03 = {
  id: "navegacao-por-coordenadas",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Algoritmos e Depuração: O Tesouro Perdido do Vale dos Dinossauros",
  contexto: "Contexto Interdisciplinar: Matemática",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Algoritmos e Depuração",
    descricao: "Criar, testar e corrigir uma sequência finita e exata de passos lógicos para solucionar um problema de rota."
  },
  objetoConhecimento: "Algoritmos e lógica de programação desplugada. (Aplicação prática em: Plano Cartesiano e coordenadas geográficas).",
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
      codigo: "(PC05AL01)",
      descricao: "Conhecer e utilizar algoritmos com repetições."
    },
    {
      codigo: "(EF05MA14)",
      descricao: "Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas, a fim de desenvolver as primeiras noções de coordenadas cartesianas."
    }
  ],
  recursos: [
    "Sala de aula com carteiras afastadas (ou pátio)",
    "Fita crepe grossa para montar o plano cartesiano no chão",
    "Réplicas 3D das Pegadas de Dinossauros",
    "Kit de Programação Tangível (Blocos/Setas de Comando)"
  ],
  avaliacao: [
    {
      titulo: "Localização Espacial",
      descricao: "Localiza e insere objetos corretamente em pares ordenados (x, y) no plano físico."
    },
    {
      titulo: "Construção Algorítmica",
      descricao: "Constrói a sequência lógica (algoritmo) correta usando os blocos tangíveis sem pular etapas."
    },
    {
      titulo: "Depuração e Raciocínio Coletivo",
      descricao: "Rastreia e substitui o bloco tangível causador da colisão ou desvio em consenso com a equipe ao confrontar o movimento físico com a coordenada da pegada."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 02",
      titulo: "Pensamento Científico, Crítico e Criativo",
      descricao: "Exercitar a curiosidade intelectual e recorrer à abordagem própria das ciências para investigar causas e elaborar e testar hipóteses."
    },
    {
      codigo: "CG 05",
      titulo: "Cultura Digital",
      descricao: "Compreender, utilizar e criar tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais."
    },
    {
      codigo: "CG 09",
      titulo: "Empatia e Cooperação",
      descricao: "Exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação."
    }
  ],
  ideiaPratica: "Os alunos utilizam um plano cartesiano gigante no chão como malha de navegação. Enquanto uma equipe posiciona os fósseis em coordenadas específicas, a outra atua como 'paleontóloga robô' e deve construir e testar o algoritmo no quadro usando blocos tangíveis (avançar x, girar y) para guiar o robô até a coordenada exata, depurando a lógica da rota para não 'pisar' nos obstáculos mapeados.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Sondagem: O professor introduz o conceito de coordenadas espaciais, questionando como os GPS e os mapas funcionam. Preparação: Professores e alunos montam, com fita crepe, um grande plano cartesiano no chão da sala, numerando os eixos X (horizontal) e Y (vertical).",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Divida a turma em esquadrões de exploradores. O Esquadrão A define um par ordenado secreto (X, Y) e posiciona a réplica da pegada fóssil 3D exatamente sobre a interseção da malha. O Esquadrão B, formado pelos Paleontólogos, decompõe a trajetória do ponto de origem (0,0) até o fóssil, monta a sequência no quadro com blocos tangíveis e não acessa o tabuleiro antes da validação completa do código.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Execução do Robô Paleontólogo: Designe um integrante para atuar como robô e avançar casa por casa na malha, executando estritamente uma instrução tangível por vez enquanto o grupo lê o código no quadro. Celebração do Bug e Depuração: se o robô sair da coordenada ou colidir com uma zona de risco, interrompa o deslocamento, isole a instrução responsável pelo desvio, substitua pontualmente o bloco defeituoso e reinicie o teste até atingir a coordenada exata.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica e nomeia os elementos básicos do plano cartesiano e os blocos de comando.",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, o que é o Eixo X, o Eixo Y e o que cada seta tangível representa. (Ex: \"Essa seta significa avançar uma casa no eixo Y para chegar perto do fóssil\")."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende a importância da sequenciação lógica para a localização espacial.",
      respostaEsperada: "Resposta Esperada: O aluno explica por que a ordem das instruções importa. (Ex: \"Se eu colocar o bloco 'Avançar' antes de 'Girar', o Paleontólogo Robô vai passar reto e perder a coordenada da pegada\")."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno executa a tarefa transpondo as coordenadas para o movimento físico no tabuleiro. ",
      respostaEsperada: "Resposta Esperada: O aluno organiza os blocos tangíveis no quadro para montar o algoritmo completo que guiará o \"robô\" até a coordenada exata (X, Y) da pegada escondida."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a estrutura do algoritmo em execução para identificar onde ocorreu uma falha lógica (Debugging). ",
      respostaEsperada: "Resposta Esperada: Ao ver o colega pisar fora da rota, o aluno localiza exatamente qual passo causou o erro. (Ex: \"Achamos o bug! O erro está no terceiro cartão; ele precisava ter girado 90º à esquerda, e não à direita\")."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno planeja e constrói novas rotas ou regras para aumentar a complexidade da missão. ",
      respostaEsperada: "Resposta Esperada: O aluno propõe novos desafios para a turma. (Ex: \"Vamos colocar um obstáculo na coordenada (2,3) para obrigar o Paleontólogo a criar um algoritmo maior com desvios\")."
    }
  ],
  rubricaId: "tipo-a",
  ajusteFinoRubrica: [
    "🧩 **Sequenciamento Lógico (Algoritmo):** O aluno organiza os blocos tangíveis de comando no quadro criando uma rota autossuficiente e perfeita. Ele antecipa mentalmente a rotação correta (girar à esquerda vs. direita) e a contagem de passos no eixo X e Y, garantindo que o 'robô' chegue à pegada sem esbarrar nos obstáculos, sem precisar testar a rota com os próprios pés antes de codificar.",
    "🐛 **Depuração Prática (Debugging):** Ao perceber que o colega robô pisou fora do plano cartesiano ou bateu em um obstáculo, o aluno grita 'Bug!', vai imediatamente até a lousa e identifica exatamente qual bloco causou a falha temporal/espacial. Ele realiza uma correção 'cirúrgica', trocando apenas a seta defeituosa e retomando a execução, em vez de desmontar o código inteiro em frustração.",
    "🤝 **Execução de Papéis e Colaboração:** O aluno demonstra inteligência emocional e respeito aos protocolos do sistema. Se pertence ao Esquadrão A (Dinossauros), esconde a peça e não dá 'spoilers' ou interfere na lógica do grupo adversário. Se é o programador do Esquadrão B, escuta ativamente as sugestões dos pares antes de montar o código, e respeita o corpo do colega que está atuando como o 'robô' no chão, não tentando andar pela malha em seu lugar."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: null,
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO A.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.1 – NAVEGAÇÃO POR COORDENADAS.pdf"
};