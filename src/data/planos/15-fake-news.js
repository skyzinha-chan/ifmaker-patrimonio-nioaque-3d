// src/data/planos/15-fake-news.js

export const plano15 = {
  id: "fake-news-mitos-guerra",
  ano: "5º Ano",
  eixo: "CULTURA DIGITAL",
  tipo: "Desplugada",
  titulo: "Segurança da Informação e Depuração: 'Fake News' e os Mitos da Guerra",
  contexto: "Contexto Interdisciplinar: História",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Algoritmos e Raciocínio Lógico",
    descricao: "Rastreamento de erros (Debugging) em transmissão de dados."
  },
  objetoConhecimento: "Segurança e responsabilidade no uso da tecnologia (Foco: Confiabilidade da informação, Fake News, boatos e ruídos na transmissão de dados). Algoritmos (Depuração). Comparação entre relatos da história local (Retirada da Laguna) e as comunicações no tempo presente.",
  habilidades: [
    {
      codigo: "(EF05CO08)",
      descricao: "Acessar as informações na Internet de forma critica para distinguir os conteúdos confiáveis de não confiáveis."
    },
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(CD05CD01)",
      descricao: "Distinguir informações verdadeiras e falsas, conteúdos bons dos prejudiciais, e conteúdos confiáveis."
    },
    {
      codigo: "(EF05HI09)",
      descricao: "Comparar pontos de vista sobre temas que impactam a vida cotidiana no tempo presente, por meio do acesso a diferentes fontes, incluindo orais."
    }
  ],
  recursos: [
    "Sala de aula (com carteiras afastadas)",
    "Canhões Históricos 3D",
    "Blocos Tangíveis de Programação (setas de direção e lógicas)",
    "Lousa e giz"
  ],
  avaliacao: [
    {
      titulo: "Rastreamento Pericial e Depuração (Fact-Checking)",
      descricao: "Compara a instrução terminal recebida com o código-fonte original registrado na lousa, identificando o elo exato da cadeia em que o bloco de comando foi adulterado (debugging de dados)."
    },
    {
      titulo: "Simulação e Execução Fiel",
      descricao: "Opera o Canhão 3D executando com rigor a sequência recebida, demonstrando concretamente o impacto desastroso de ordens corrompidas na tomada de decisão balística."
    },
    {
      titulo: "Consciência Crítica e Cidadania Digital",
      descricao: "Correlaciona as falhas de comunicação da Guerra do Paraguai com a disseminação rápida de Fake News no meio digital contemporâneo, propondo métodos de verificação de fontes antes do compartilhamento."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 01",
      titulo: "Conhecimento",
      descricao: "Mobilizar conhecimentos de história para entender o impacto das informações na tomada de decisões."
    },
    {
      codigo: "CG 07",
      titulo: "Argumentação",
      descricao: "Formular, negociar e defender ideias com base em fatos e informações confiáveis, combatendo a desinformação."
    }
  ],
  ideiaPratica: "Fazer um paralelo histórico. Durante a guerra, as notícias viajavam lentamente a cavalo e chegavam distorcidas. Hoje, na internet, as Fake News chegam rápido, mas também distorcidas. O professor usa o Canhão Histórico como alvo e os blocos de algoritmos como a 'notícia/código'. Os alunos jogam um 'telefone sem fio' de algoritmos, onde blocos são alterados para mostrar como a perda de confiabilidade afeta a direção do canhão no final.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "A Notícia no Lombo do Cavalo vs. A Notícia no WhatsApp: O professor posiciona o Canhão 3D na frente da sala. Conta que na época da Guerra do Paraguai em Nioaque, se um comandante mandasse a notícia 'Atire para o Norte', a mensagem levava dias para chegar e podia chegar como 'Atire para o Sul', gerando um desastre. A Conexão com Hoje: Hoje chamamos isso de 'Fake News' (notícias falsas ou distorcidas). A internet espalha rápido, mas a mensagem ainda sofre 'ruídos' (modificações intencionais ou acidentais).",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Formação da Linha de Transmissão (Rede Humana): Organize os alunos em fila indiana, simulando os nós de uma rede de dados e os mensageiros da guerra. Emissão do Código-Fonte e Injeção de Ruído: Comande os operadores: Primeiro estafeta (emissor), monte uma instrução segura de 5 passos com os blocos tangíveis (ex.: Avançar 2, Virar 90º à Direita, Avançar 1, Fogo!) e registre o código-fonte no quadro em sigilo. Linha de transmissão: repassem a sequência de blocos de mão em mão ao longo da fila em silêncio absoluto. Intervenção do Docente: como agente de ruído (hacker/boateiro da guerra), intercepte discretamente um bloco e substitua a direção (ex.: troque Direita por Esquerda). Execução Terminal da Artilharia: Comande o último artilheiro da fila: 'Execute cegamente apenas a sequência de blocos que chegou às suas mãos e aponte o Canhão 3D para o alvo'.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Celebração do Bug e Perícia de Dados (Fact-Checking): Ao constatar que a artilharia errou o alvo ou apontou em rota contrária, interrompam o teste imediatamente e exclamem: 'Bug na transmissão! Fake News detectada!'. Abram a auditoria pericial: confrontem a sequência física que chegou à ponta com o código original anotado no quadro. Rastreiem a linha humana passo a passo até isolar a carteira exata onde o bloco foi alterado. Artilheiros, depurem a mensagem: substituam o bloco adulterado pelo original e recalibrem o disparo correto do Canhão 3D. Roda Socrática de Cidadania Digital: conduza o fechamento sobre o impacto de boatos históricos e Fake News atuais, perguntando como agir como checadores de fatos antes de compartilhar.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica o conceito de Fake News e os blocos de direção tangíveis. ",
      respostaEsperada: "Resposta Esperada: O aluno repete o que foi ensinado. (Ex: 'Notícias falsas são mensagens inventadas ou alteradas para enganar as pessoas, igual quando você trocou a seta do nosso código')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno entende como o fluxo de dados pode ser corrompido durante a transmissão de uma ponta a outra. ",
      respostaEsperada: "Resposta Esperada: O aluno explica a dinâmica. (Ex: 'A mensagem saiu certa do primeiro aluno, mas como o caminho não era seguro, alguém adulterou a informação antes de chegar no canhão')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno executa a montagem e a transmissão física dos blocos de algoritmo pela sala. ",
      respostaEsperada: "Resposta Esperada: O aluno lê a sequência que recebeu nas mãos e move o Canhão 3D exatamente conforme os blocos tangíveis indicam, mesmo que o resultado final seja um erro."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a discrepância entre a 'notícia/código' original e a que chegou no final da linha (Debugging). ",
      respostaEsperada: "Resposta Esperada: O aluno compara os blocos físicos com o registro no quadro. (Ex: 'Encontramos o erro! O terceiro bloco devia ser 'Virar à Direita', mas chegou como 'Virar à Esquerda'. Foi aqui que a informação ficou falsa')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno propõe regras e estratégias de segurança para evitar cair em desinformação. ",
      respostaEsperada: "Resposta Esperada: O grupo cria um método de verificação. (Ex: 'Assim como conferimos os blocos com o original no quadro, temos que conferir a notícia do WhatsApp pesquisando no Google antes de mandar no grupo da família')."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro:** O aluno explica com precisão o caminho lógico percorrido pela mensagem, utilizando argumentos claros e condicionais para justificar o impacto do ruído (ex: 'A mensagem foi corrompida no meio do caminho, logo a instrução condicional do final falhou e o canhão apontou para o lugar errado').",
    "📐 **Organização Viso-espacial de Dados:** O aluno alinha e compara visualmente os blocos tangíveis de programação com o registro oficial anotado na lousa de forma organizada, mapeando rapidamente a sequência de passos para identificar onde o encadeamento lógico foi quebrado.",
    "🐛 **Rastreamento e Análise de Informação:** O aluno executa o fact-checking e o debugging com autonomia: ele aponta o exato momento e elo da corrente em que a alteração foi inserida (a Fake News), além de propor voluntariamente estratégias preventivas de checagem para o seu dia a dia digital (como pesquisar a veracidade antes de compartilhar conteúdos)."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.4.2 – FAKE NEWS E OS MITOS DA GUERRA.pdf"
};