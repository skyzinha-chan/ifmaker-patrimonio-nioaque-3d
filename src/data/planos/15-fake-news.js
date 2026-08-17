// src/data/planos/15-fake-news.js

export const plano15 = {
  id: "fake-news-mitos-guerra",
  ano: "5º Ano",
  eixo: "CULTURA DIGITAL",
  titulo: "Segurança da Informação e Depuração: 'Fake News' e os Mitos da Guerra",
  contexto: "Contexto Interdisciplinar: História",
  duracao: "50min/aula",
  objetoConhecimento: "Segurança e confiabilidade da informação. (Aplicação prática em: Transmissão de dados, 'Fake News' e fatos históricos locais).",
  habilidades: [
    {
      codigo: "(CD05CD01)",
      descricao: "Identificar, avaliar e diferenciar informações confiáveis de não confiáveis em ambientes digitais e cotidianos."
    },
    {
      codigo: "(EF05HI09)",
      descricao: "Habilidade de Apoio: Relacionar fatos históricos locais e regionais (Guerra do Paraguai) à história nacional."
    }
  ],
  recursos: [
    "Sala de aula (com carteiras afastadas)",
    "Canhões Históricos 3D",
    "Blocos Tangíveis de Programação (setas de direção e lógicas)",
    "Lousa e giz"
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
      descricao: "O Telefone Sem Fio Algorítmico: O professor cria uma 'linha de transmissão' com os alunos. O primeiro aluno cria um algoritmo seguro usando 5 blocos tangíveis de programação (ex: Seta Frente, Seta Direita, Seta Frente, Fogo!). Essa sequência (a notícia original) vai passando de mão em mão. O professor age como o 'Hacker/Boateiro' e, sem os alunos do fim da fila verem, troca silenciosamente um dos blocos tangíveis (ex: troca Frente por Trás). O último aluno deve executar o código recebido no Canhão 3D. O canhão vai apontar para o lado errado.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Debugging da Desinformação: A turma precisa agir como detetive (fact-checkers). Eles pegam a sequência errada e a sequência original (que ficou registrada na lousa) e comparam. Eles devem fazer o Debugging (rastrear o erro) para descobrir em qual momento o dado virou uma Fake News e corrigir o bloco tangível. Debate final: 'Como a gente garante que uma notícia do WhatsApp é verdadeira antes de repassar?'",
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

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-15.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-15.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-c-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/15-fake-news.pdf"
};