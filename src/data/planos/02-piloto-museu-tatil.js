// src/data/planos/piloto-02-museu-tatil.js
// Dados extraídos do Manual IFMaker - Aula Piloto Validada

export const plano02 = {
  id: "piloto-02-museu-tatil",
  tipo: "piloto",
  ano: "5º Ano",
  eixo: "MUNDO DIGITAL / CULTURA MAKER",
  titulo: "Plano Piloto 2: Cultura Maker e Prototipagem – Museu Tátil de Nioaque",
  contexto: "História e Paleontologia",
  duracao: "4 HORAS",
  objetoConhecimento: "Uso de artefatos computacionais (Cultura Digital); Materialidades (Artes Visuais); Os patrimônios materiais e imateriais da humanidade (Foco local: preservação dos marcos de memória e paleontologia de Nioaque).",
  habilidades: [
    {
      codigo: "(EF15CO08)",
      descricao: "Reconhecer e utilizar tecnologias computacionais para pesquisar e acessar informações, expressar-se crítica e criativamente e resolver problemas."
    },
    {
      codigo: "(EF05CO11)",
      descricao: "Identificar a adequação de diferentes tecnologias computacionais na resolução de problemas."
    },
    {
      codigo: "(EF15AR04)",
      descricao: "Experimentar diferentes formas de expressão artística, fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais."
    },
    {
      codigo: "(EF05HI10)",
      descricao: "Inventariar os patrimônios materiais e imateriais da humanidade e analisar mudanças e permanências desses patrimônios ao longo do tempo."
    },
    {
      codigo: "(CD05LD03)",
      descricao: "Experimentar as mídias digitais e suas convergências. Referência CIEB opcional."
    }
  ],
  recursos: [
    "Sala de aula com mesas forradas",
    "Massinha de modelar de várias cores",
    "Palitos de dente para estruturas de sustentação",
    "Réplicas impressas em 3D: Canhão Histórico, Pegadas do Vale dos Dinossauros, Jacaré e Tatu-bola"
  ],
  ideiaPratica: "Modelagem física (massinha e palitos) do patrimônio de Nioaque e transição para o ambiente digital.",
  roteiro: [
    {
      parte: "1ª Parte (45 min)",
      titulo: "Contextualização",
      descricao: "Apresente as peças impressas em 3D do projeto: o canhão, a pegada fóssil, o tatu-bola e o jacaré. Permita o manuseio tátil em rodízio e questione a diferença entre observar uma foto e segurar uma peça impressa em 3D. Contextualize Nioaque como um museu a céu aberto, da Pré-História à Retirada da Laguna. Estabeleça a Regra de Ouro da Massinha, orientando o uso das cores para destacar partes funcionais e evitando a mistura total. Oriente a forração das mesas e a higiene pré-lanche.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (165 min)",
      titulo: "Experimentação (Intercalado com Lanche e Recreio)",
      descricao: "Organize as ilhas e distribua de forma fracionada a massinha, os palitos e uma peça 3D de referência. Conduza a decomposição geométrica, separando mentalmente esfera, cilindro, cubo e cone antes da montagem. Aplique o teste da gravidade e use os palitos como esqueleto interno para garantir sustentação. Utilize as pontas dos palitos para texturização e compare o protótipo com o modelo digital exibido no aplicativo. Finalize com o preenchimento da Ficha Catalográfica do Esquadrão e desenhos da peça sob três perspectivas: frente, lado e cima.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (30 min)",
      titulo: "Avaliação",
      descricao: "Monte a Galeria do Museu Tátil com os protótipos e as Fichas Catalográficas. Cada equipe apresenta o elemento histórico ou paleontológico reproduzido, explica o uso dos palitos e descreve como o objeto seria impresso em 3D. O professor registra as evidências no Guia de Observação do Piloto 2 ou na Rubrica Tipo B, observando persistência estrutural e abstração de volume.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      respostaEsperada: "O aluno consegue identificar e listar as características visuais do patrimônio escolhido (Ex: 'O dinossauro terópode tem 3 dedos com garras')."
    },
    {
      nivel: "2. Compreensão",
      respostaEsperada: "O aluno explica a diferença entre um desenho 2D e um protótipo 3D."
    },
    {
      nivel: "3. Aplicação",
      respostaEsperada: "O aluno manipula a massinha para criar formas básicas (esferas, cilindros) que compõem o modelo complexo."
    },
    {
      nivel: "4. Análise",
      respostaEsperada: "O aluno compara o seu protótipo de massinha com o modelo exibido no aplicativo, identificando o que precisa melhorar (proporção, tamanho)."
    },
    {
      nivel: "5. Síntese (Criação)",
      respostaEsperada: "O aluno projeta e une as partes separadas da massinha para formar um artefato coeso e reconhecível, servindo de esboço para a futura impressão 3D."
    }
  ],
  guiaObservacao: {
    pesquisadores: "Talita Marques e Leonardo Vinicius",
    objetivo: "Coleta de evidências sobre o desenvolvimento do raciocínio espacial e resiliência (Meta 4).",
    criterios: [
      {
        nome: "📐 Abstração Espacial",
        pergunta: "(Transformou a foto 2D em 3D com volume?)",
        criterioAvaliador: "Marcar SIM se o protótipo tem profundidade (não é uma 'panqueca' na mesa) e se é reconhecível como o objeto da foto."
      },
      {
        nome: "🛠️ Iteração e Resiliência",
        pergunta: "(Usou palitos para consertar a estrutura?)",
        criterioAvaliador: "Marcar SIM se o grupo enfrentou uma falha (peça caindo ou amolecendo) e aplicou o Plano B (esqueleto de palitos) para salvar o projeto."
      },
      {
        nome: "🤝 Colaboração Maker",
        pergunta: "(Dividiu tarefas e não criou 'Cinza-Lixo'?)",
        criterioAvaliador: "Marcar SIM se o grupo respeitou a Regra de Ouro, não misturou as cores do bloco inteiro e se os três alunos participaram ativamente."
      }
    ]
  },
    atividadesPdfUrl: "/pdfs/atividades/FICHA CATALOGRÁFICA - MUSEU TÁTIL DE NIOAQUE (PLANO PILOTO 2).pdf",
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo B - Eixo Mundo Digital.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/GUIA DE OBSERVAÇÃO (RUBRICA) - AULA PILOTO 2.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA PILOTO 2 – MUSEU TÁTIL DE NIOAQUE.pdf"
};