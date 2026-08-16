export const planosDeAula = [
  {
    id: "plano-piloto-1",
    ano: "5º Ano",
    eixo: "Pensamento Computacional",
    titulo: "Plano Piloto 1: Estrategistas da Retirada",
    contexto: "História local & Algoritmos desplugados",
    duracao: "4 HORAS",
    objetoConhecimento: "Algoritmos, Decomposição e Reconhecimento de Padrões através da história local.",
    habilidades: [
      {
        codigo: "(EF05CO01)",
        descricao: "Criar algoritmos simples para resolver problemas do cotidiano, utilizando diferentes linguagens (neste caso, a corporal e a simbólica)."
      },
      {
        codigo: "(EF05CO02)",
        descricao: "Identificar e corrigir erros em algoritmos (depuração) de forma lógica."
      }
    ],
    competenciasGerais: [
      "[CG 05] - Cultura Digital",
      "[CG 09] - Empatia e Cooperação",
      "[CG 01] - Conhecimento"
    ],
    recursos: [
      "Sala de aula com carteiras afastadas",
      "Fita crepe para o grid no chão",
      "Cartões de comando impressos",
      "Imagens do monumento de José Francisco Lopes e do Canhão"
    ],
    ideiaPratica: "Os alunos simulam a logística da Retirada da Laguna em um tabuleiro humano no piso, programando passos por meio de cartões direcionais físicos para guiar o herói desviar dos obstáculos sem o uso de telas.",
    roteiro: [
      {
        parte: "1ª Parte",
        tempo: "30 min",
        titulo: "Contextualização Histórica",
        descricao: "Apresentação dos Professores e da narrativa 'Estrategistas da Retirada'; Sondagem sobre o conhecimento prévio do monumento do Guia Lopes; Indagações sobre como traçar rotas seguras sem uso de GPS ou celular.",
        corStatus: "border-computational text-computational"
      },
      {
        parte: "2ª Parte",
        tempo: "165 min",
        titulo: "Experimentação Prática",
        descricao: "Explicação dos cartões de comando (Avançar, Girar) e conceito de Algoritmo; Divisão das equipes e papéis (Robô, Mestre, Caçador, Cartógrafo); Execução da missão no tabuleiro de fita crepe com aplicação do 'Modo Furtivo' e 'Sussurro do Bug'.",
        corStatus: "border-emerald-600 text-emerald-600"
      },
      {
        parte: "3ª Parte",
        tempo: "30 min",
        titulo: "Avaliação e Sistematização",
        descricao: "Execução do 'Algoritmo da Limpeza'; Sistematização individual: colagem de emblemas e registro no caderno; Roda de conversa sobre a importância do erro (Bug) no aprendizado tecnológico.",
        corStatus: "border-blue-500 text-blue-500"
      }
    ],
    taxonomiaBloom: [
      { nivel: "1. Conhecimento", esperado: "Define com suas palavras o que é um comando e um algoritmo." },
      { nivel: "2. Compreensão", esperado: "Entende a importância da ordem dos comandos." },
      { nivel: "3. Aplicação", esperado: "Utiliza os cartões físicos para resolver o trajeto proposto no chão." },
      { nivel: "4. Análise", esperado: "Identifica um 'bug' (erro) no trajeto do colega." },
      { nivel: "5. Síntese", esperado: "Cria desafios novos ou caminhos alternativos para desviar de obstáculos." }
    ],
    rubricaId: "tipo-a"
  },
  {
    id: "plano-piloto-2",
    ano: "5º Ano",
    eixo: "Mundo Digital / Cultura Maker",
    titulo: "Plano Piloto 2: Museu Tátil de Nioaque",
    contexto: "Cultura Maker e Prototipagem",
    duracao: "4 HORAS",
    objetoConhecimento: "Representação de dados, Prototipagem e Modelagem 3D (Física para Digital).",
    habilidades: [
      {
        codigo: "(EF05CO05)",
        descricao: "Reconhecer que artefatos computacionais (como modelos 3D) são criados por seres humanos para atender necessidades ou expressar ideias."
      },
      {
        codigo: "(EF05CO09)",
        descricao: "Utilizar ferramentas digitais (App de Visualização) para compreender formas espaciais."
      }
    ],
    competenciasGerais: [
      "[CG 05] - Cultura Digital",
      "[CG 03] - Repertório Cultural",
      "[CG 09] - Empatia e Cooperação"
    ],
    recursos: [
      "Sala de aula",
      "Massinha de modelar de várias cores",
      "Palitos de dente"
    ],
    ideiaPratica: "Diretrizes para o trabalho com modelagem física (massinha e palitos) e transição para o ambiente digital por meio do aplicativo simulando artefatos do patrimônio paleontológico e histórico de Nioaque.",
    roteiro: [
      {
        parte: "1ª Parte",
        tempo: "45 min",
        titulo: "Contextualização e Sondagem",
        descricao: "Sondagem tátil com peça impressa em 3D sobre o patrimônio; Apresentação da narrativa 'Resgate do Patrimônio'; Pactuação das regras de uso da massinha e organização logística.",
        corStatus: "border-maker text-maker"
      },
      {
        parte: "2ª Parte",
        tempo: "165 min",
        titulo: "Prototipagem 3D Guiada",
        descricao: "Sorteio dos esquadrões; Execução da modelagem guiada por fases (Decomposição das formas, Estruturação, Texturização); Desafios estruturais (Teste de Gravidade) e criação de Ficha Catalográfica.",
        corStatus: "border-emerald-600 text-emerald-600"
      },
      {
        parte: "3ª Parte",
        tempo: "30 min",
        titulo: "Avaliação",
        descricao: "Observação do Reconhecimento de Geometria, Proporção, Espacialidade e Engajamento Histórico com o patrimônio de Nioaque.",
        corStatus: "border-blue-500 text-blue-500"
      }
    ],
    taxonomiaBloom: [
      { nivel: "1. Conhecimento", esperado: "Identifica e lista as características visuais do patrimônio escolhido." },
      { nivel: "2. Compreensão", esperado: "Explica a diferença entre um desenho 2D e um protótipo 3D." },
      { nivel: "3. Aplicação", esperado: "Manipula a massinha para criar formas básicas que compõem o modelo." },
      { nivel: "4. Análise", esperado: "Compara o protótipo com o modelo exibido no app, identificando melhorias." },
      { nivel: "5. Síntese", esperado: "Projeta e une as partes separadas para formar um artefato coeso." }
    ],
    rubricaId: "tipo-b"
  }
];