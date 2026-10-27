export const plano09 = {
  id: "teia-alimentar",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Decomposição e Lógica Condicional: O Código da Natureza na Teia Alimentar",
  contexto: "Contexto Interdisciplinar: Ciências da Natureza",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Decomposição",
    descricao: "Quebrar a imensa complexidade de um ecossistema inteiro em regras lógicas condicionais menores e interações individuais simples de presa-predador."
  },
  objetoConhecimento: "Pilar da Decomposição. (Aplicação prática em: Relações alimentares, cadeia/teia alimentar e desequilíbrios nos ecossistemas).",
  habilidades: [
    {
      codigo: "(EF15CO04)",
      descricao: "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções."
    },
    {
      codigo: "(EF15CO02)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(EF04CI04)",
      descricao: "Revisão de conteúdos curriculares (Ciências): Relações de teias e cadeias alimentares nos ecossistemas pantaneiros."
    }
  ],
  recursos: [
    "Sala de aula organizada em círculos",
    "Tatus-bola articulados 3D e Jacarés articulados 3D",
    "Kit de Programação Tangível (Blocos lógicos de 'Se/Então')",
    "Cartões ilustrativos de peixes/plantas e barbante para ligar a teia"
  ],
  avaliacao: [
    {
      titulo: "Decomposição do Ecossistema",
      descricao: "Decompõe a complexidade da teia ecológica regional em regras comportamentais menores e individuais de interação presa-predador."
    },
    {
      titulo: "Lógica Condicional Biológica (Se/Então)",
      descricao: "Modela e simula comportamentos instintivos e mecanismos de defesa, como o fechamento da carapaça do tatu-bola ou o ataque do jacaré, utilizando blocos lógicos tangíveis."
    },
    {
      titulo: "Depuração Ecológica (Debugging)",
      descricao: "Reestrutura as condicionais lógicas ao ser confrontado com um fator de desequilíbrio ambiental, como a seca do leito de pesca, adaptando as regras para restabelecer o equilíbrio da cadeia alimentar."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 01",
      titulo: "Conhecimento",
      descricao: "Valorizar e utilizar os conhecimentos sobre o mundo físico e natural para entender a realidade e o meio ambiente local."
    },
    {
      codigo: "CG 02",
      titulo: "Pensamento Científico, Crítico e Criativo",
      descricao: "Exercitar a curiosidade intelectual e a investigação para elaborar hipóteses biológicas."
    },
    {
      codigo: "CG 10",
      titulo: "Autonomia e Responsabilidade",
      descricao: "Tomar decisões com base em princípios éticos e sustentáveis em relação ao cuidado com o planeta e os animais."
    }
  ],
  ideiaPratica: "Os alunos decompõem a complexidade do bioma regional e programam a cadeia alimentar utilizando blocos lógicos. Ao definirem regras de comportamento animal (ex: 'SE o jacaré está com fome, ENTÃO ele caça peixes') e mecanismos de defesa com o tatu-bola 3D ('SE o predador chegar perto, ENTÃO ative a carapaça'), eles simulam sistemicamente as interações naturais.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Bate-papo Ecológico: O professor discute o que os animais de Nioaque comem. Apresenta o Jacaré (carnívoro de topo) e o Tatu-bola (insetívoro/onívoro, que costuma ser presa). A Lógica da Natureza: Explica-se que a natureza funciona como um grande 'código de computador' cheio de regras.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Organização das Ilhas e Decomposição Biológica: Divida a turma em grupos ecológicos e entregue as peças 3D (Jacaré e Tatu-bola), os blocos tangíveis \"Se/Então\", os cartões ilustrados e o barbante. Comande: Decomponham o ecossistema pantaneiro: não tentem analisar o bioma inteiro de uma vez; isolem e analisem apenas as regras de alimentação e sobrevivência da sua espécie atribuída. Identifiquem os gatilhos: o que o animal come, quem o ameaça e qual resposta instintiva ele dispara para sobreviver. Programação das Regras de Conduta (Modo Se/Então): Comande os biólogos-programadores: Estruturem o algoritmo de comportamento animal utilizando os blocos tangíveis sobre a bancada. Equipe do Jacaré: programem a condição de caça (ex.: SE estiver com fome, ENTÃO caçar peixes ou tatus). Equipe do Tatu-bola: programem a reação de proteção (ex.: SE predador se aproximar, ENTÃO enrolar carapaça).",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Simulação Interativa e Conexão da Teia: Comande: \"Entrelacem os cartões e as peças 3D com o barbante sobre as mesas para materializar visualmente a teia de relações tróficas\". No momento do avanço do predador: Executem a regra condicional fisicamente: ao ser abordada pelo jacaré, a equipe do tatu-bola deve fechar a carapaça do artefato 3D articulado imediatamente. Celebração do Bug e Depuração Ecológica (Debugging): Introduza um elemento surpresa de desequilíbrio (remova a carta de peixes simulando a seca de um açude): Interrompam o fluxo ecológico imediatamente e exclamem: \"Bug na teia alimentar!\". Rastreiem a falha lógica: sem peixes disponíveis, qual instrução do predador entrou em colapso? Biólogos, depurem o sistema: reescrevam a condicional do bloco \"Se/Então\" para prever novas fontes de alimento ou hábitos migratórios, restaurando a sustentabilidade do bioma.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica os animais do bioma local, suas dietas e reconhece a função do bloco lógico condicional. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, a posição do animal na teia e a regra do bloco. (Ex: 'O jacaré é o predador e o tatu-bola é a presa. O bloco 'Se/Então' serve para dar uma ordem do que o animal vai fazer quando algo acontecer')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende o pilar da Decomposição, entendendo como o comportamento instintivo funciona como um 'código' biológico.",
      respostaEsperada: " Resposta Esperada: O aluno explica a relação de causa e efeito da natureza. (Ex: 'Para entender o Pantanal inteiro, dividimos em partes menores. A regra de sobrevivência do tatu é simples: se tem perigo, ele não ataca, ele se fecha para se proteger')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno utiliza os blocos tangíveis para programar as regras de interação alimentar e executa fisicamente o mecanismo de defesa nos artefatos 3D. ",
      respostaEsperada: "Resposta Esperada: O aluno estrutura o comando condicional sobre a mesa e manipula a peça corretamente durante o encontro. (Ex: Posiciona os blocos 'SE o jacaré atacar, ENTÃO ative a carapaça' e, no momento da simulação, fecha fisicamente o tatu-bola 3D)."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga o ecossistema para realizar uma 'depuração ecológica' (debugging ambiental) quando o professor introduz um fator de desequilíbrio (como a seca). ",
      respostaEsperada: "Resposta Esperada: Ao perceber que a regra original falhou devido à mudança no ambiente, o aluno localiza o impacto na cadeia. (Ex: 'Achamos um bug na teia alimentar! Como a lagoa secou no 'SE', a regra do 'ENTÃO' precisa mudar: o jacaré não pode caçar peixes, vai ter que caçar tatus ou vai morrer de fome')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno formula e propõe novas lógicas condicionais para outros elementos da flora ou fauna, expandindo a complexidade do ecossistema simulado. ",
      respostaEsperada: "Resposta Esperada: O grupo cria regras inéditas conectando novos cartões com o barbante. (Ex: 'Vamos colocar o cartão da onça-pintada e criar uma nova regra tripla: SE a onça aparecer, ENTÃO o jacaré foge para a água e o tatu se enrola na terra')."
    }
  ],
  rubricaId: "tipo-a",
  ajusteFinoRubrica: [
    "🧩 **Sequenciamento e Lógica (A Condicional Biológica):** O aluno elabora uma condicional autossuficiente e com exatidão biológica. Ele organiza os blocos físicos ao lado do artefato 3D de forma lógica, garantindo que o gatilho ('SE o predador chegar perto') gere uma consequência real e coerente com a anatomia do animal ('ENTÃO o tatu-bola aciona a carapaça'). Ele não cria regras mágicas ou sem sentido para o ecossistema.",
    "🐛 **Depuração Prática (Debugging Ecológico):** Quando o professor decreta que o lago secou (o bug no sistema), o aluno não paralisa nem assume que o jogo acabou. Ele vai direto à 'linha de código' (os blocos na mesa), compreende que a condição inicial falhou e substitui a instrução do 'ENTÃO' para garantir a sobrevivência da espécie, demonstrando resiliência e raciocínio analítico rápido.",
    "🤝 **Execução de Papéis e Colaboração:** Durante o choque dos ecossistemas (quando o jacaré 'ataca' o tatu-bola), o aluno não usa a peça 3D para brincar de 'lutinha' caótica. Ele respeita a execução do código ao pé da letra: só movimenta ou fecha a peça física do Tatu-bola no exato momento em que o gatilho da equipe adversária aciona a sua condicional, dialogando com os colegas para que a simulação seja cientificamente correta."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo A - Eixo Pensamento Computacional.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO A.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.7 – A TEIA ALIMENTAR.pdf"
};