// src/data/planos/12-textura-do-tempo.js

export const plano12 = {
  id: "textura-do-tempo",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Abstração: A Textura do Tempo através da Frottage",
  contexto: "Contexto Interdisciplinar: Artes Visuais",
  duracao: "50min/aula",
  objetoConhecimento: "Pilar da Abstração. (Aplicação prática em: Elementos das artes visuais: ponto, linha, textura).",
  habilidades: [
    {
      codigo: "(EF15C001)",
      descricao: "Pilar: Abstração - Filtrar informações complexas para focar em uma propriedade essencial."
    },
    {
      codigo: "(EF05CO05)",
      descricao: "Reconhecer que artefatos computacionais são criados para expressar ideias e fatos."
    },
    {
      codigo: "(EF15AR02)",
      descricao: "Habilidade de Apoio: Explorar e reconhecer elementos constitutivos das artes visuais (ponto, linha, forma, cor, textura)."
    }
  ],
  recursos: [
    "Sala de aula com mesas protegidas",
    "Pegadas de dinossauros 3D, carapaça do tatu-bola 3D",
    "Papéis de gramatura fina (sulfite)",
    "Giz de cera (sem papel) ou grafite macio"
  ],
  ideiaPratica: "Os alunos aplicam o conceito de abstração aos artefatos 3D utilizando a técnica de frottage. Eles ignoram intencionalmente a forma física inteira e complexa do animal para extrair (coletar dados visuais) apenas uma propriedade essencial: a textura (escamas do tatu, ranhuras do fóssil). Depois, utilizam essas 'amostras de dados' isoladas para compor uma obra abstrata coletiva focada exclusivamente na sensação tátil.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Percepção Sensorial: Discussão sobre como a pele do tatu e o fóssil têm relevos únicos. O professor propõe um desafio: 'Como podemos registrar a pele de um animal extinto sem desenhar o animal inteiro?'. Introdução da Abstração: Explica-se que, na tecnologia e nas artes, muitas vezes precisamos remover detalhes desnecessários (abstrair) para focar no que é importante (a textura, o padrão).",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Frottage: Os alunos colocam papéis sobre os artefatos 3D. Com a técnica de esfregar o giz (esfuminho/lateral), capturam apenas os padrões de textura. Exploração: Eles coletam várias texturas da carapaça do Tatu e das ranhuras das Pegadas. Eles não estão desenhando o Tatu, estão 'extraindo dados' (texturas) do objeto 3D.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Composição: Em um mural coletivo, os alunos recortam e colam essas 'amostras de textura'. A montagem deve formar uma obra abstrata. Discussão: O professor reforça: 'Vocês abstraíram o Tatu-bola. Tiramos a cabeça e o corpo, ficamos só com o código da pele dele (a textura)'.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica os elementos visuais e táteis (textura e relevo) presentes nos artefatos 3D. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue reconhecer e descrever, com suas próprias palavras, as diferenças de superfície dos objetos. (Ex: 'A carapaça do tatu-bola é cheia de escamas ásperas e a pegada do dinossauro tem linhas e buracos fundos')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende o conceito de Abstração, entendendo que é possível isolar uma única propriedade (a textura) e ignorar o resto da forma. ",
      respostaEsperada: "Resposta Esperada: O aluno explica a lógica por trás da técnica proposta. (Ex: 'Nós não vamos desenhar o corpo ou a cabeça do animal, vamos abstrair e pegar apenas a informação da pele dele para colocar no papel')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno executa a técnica de frottage de forma independente, utilizando os materiais para transpor o dado tátil (3D) para o suporte visual (2D). ",
      respostaEsperada: "Resposta Esperada: O aluno posiciona corretamente o papel fino sobre o artefato e esfrega o giz de cera ou grafite com a inclinação e pressão adequadas, capturando o padrão visual sem rasgar a folha."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga e compara as amostras de textura extraídas para selecionar as mais nítidas, descartando aquelas que sofreram falhas na captura (debugging artístico). ",
      respostaEsperada: "Resposta Esperada: O aluno examina suas capturas e toma decisões com base na qualidade. (Ex: 'Essa amostra ficou muito borrada porque o papel saiu do lugar, mas essa aqui capturou as escamas perfeitamente. Vou recortar e usar só a que deu certo')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno organiza, recorta e integra os dados visuais extraídos (texturas) para compor uma obra abstrata coletiva. ",
      respostaEsperada: "Resposta Esperada: O aluno cola os padrões capturados no mural da turma, criando e consolidando uma composição artística inédita que representa as diferentes eras e naturezas de Nioaque de forma puramente textural e abstrata."
    }
  ],
  rubricaId: "tipo-b",
  ajusteFinoRubrica: [
    "🎨 **Abstração de Propriedades:** O aluno consegue justificar sua escolha de textura. Ele ignora a forma total do tatu ou do dinossauro e explica que 'o relevo é um dado importante da pele do animal'. Ele não tenta desenhar o animal; ele foca estritamente na padronagem rítmica ou irregular da textura capturada.",
    "🐛 **Iteração e Manuseio do Artefato:** O aluno aplica a técnica de frottage com controle de pressão. Se o primeiro resultado sai 'borrado' (falha no dado), ele não desiste ou abandona a atividade; ele reposiciona o papel com precisão, ajusta a inclinação do giz e repete a extração até obter uma amostra nítida e legível do padrão (debugging de captura).",
    "📱 **Transposição Físico-Digital:** O aluno compreende que o papel com o desenho não é apenas uma 'imagem bonita', mas um 'mapa de dados' do objeto 3D. Ele articula que a textura no papel é a tradução (ou representação) da característica física do artefato, correlacionando o relevo tátil (Hardware) com o registro visual (representação de dados)."
  ],

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-12.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-12.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-b-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/12-textura-do-tempo.pdf"
};