// src/data/planos/03-navegacao-por-coordenadas.js

export const plano03 = {
  id: "navegacao-por-coordenadas",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Algoritmos e Depuração: O Tesouro Perdido do Vale dos Dinossauros",
  contexto: "Contexto Interdisciplinar: Matemática",
  duracao: "50min/aula",
  objetoConhecimento: "Algoritmos e lógica de programação desplugada. (Aplicação prática em: Plano Cartesiano e coordenadas geográficas).",
  habilidades: [
    {
      codigo: "(EF15C002)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF05CO02)",
      descricao: "Identificar e corrigir erros em algoritmos (depuração) de forma lógica."
    },
    {
      codigo: "(EF05MA14)",
      descricao: "Habilidade de Apoio: Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas, a fim de desenvolver as primeiras noções de coordenadas cartesianas."
    }
  ],
  recursos: [
    "Sala de aula com carteiras afastadas (ou pátio)",
    "Fita crepe grossa para montar o plano cartesiano no chão",
    "Réplicas 3D das Pegadas de Dinossauros",
    "Kit de Programação Tangível (Blocos/Setas de Comando)"
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
      descricao: "Divisão de Esquadrões: A turma é dividida. O Esquadrão A atua como 'Dinossauro' e esconde as pegadas 3D em coordenadas exatas (ex: X=3, Y=4). Abstração e Algoritmo: O Esquadrão B, como 'Paleontólogos Robôs', deve planejar a rota no quadro negro formando o 'código' com os blocos 3D tangíveis (Avançar 3, Girar 90º à esquerda, Avançar 4). Ninguém pode andar no tabuleiro até o algoritmo estar finalizado.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Teste Físico: Um aluno do Esquadrão B tenta executar, passo a passo, o algoritmo programado no quadro. Debugging: Se o aluno pisar fora da coordenada ou bater em um obstáculo, a equipe grita 'Bug!' e retorna ao ponto zero para alterar o bloco tangível incorreto.",
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

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-03.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-03.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-a-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/03-navegacao-por-coordenadas.pdf"
};