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
  recursos: [
    "Sala de aula",
    "Massinha de modelar de várias cores",
    "Palitos de dente"
  ],
  ideiaPratica: "Modelagem física (massinha e palitos) do patrimônio de Nioaque e transição para o ambiente digital.",
  roteiro: [
    {
      parte: "1ª Parte (45 min)",
      titulo: "Contextualização",
      descricao: "Sondagem tátil e perguntas ativadoras com peça impressa em 3D sobre o patrimônio paleontológico e histórico de Nioaque. Apresentação da narrativa 'Resgate do Patrimônio' utilizando imagens de referência 2D no quadro negro. Introdução do material (Massa Base de Prototipagem) e pactuação das regras de uso. Organização logística, agrupamento e regras de higiene pré-lanche.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (165 min)",
      titulo: "Experimentação (Intercalado com Lanche e Recreio)",
      descricao: "Sorteio dos esquadrões e distribuição fracionada dos materiais nas mesas forradas. Execução da modelagem 3D guiada por fases: Decomposição das formas básicas, Estruturação de volume e Texturização com palitos. Mediação ativa gamificada com entrega de emblemas térmicos aos alunos que demonstrarem abstração espacial e resiliência. Aplicação de desafios estruturais (Teste de Gravidade/Esqueleto) para validação física dos protótipos. Criação de 'Ficha Catalográfica' simulando um museu tátil.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (30 min)",
      titulo: "Avaliação",
      descricao: "Avaliação baseada em Reconhecimento de Geometria (reduzir objetos complexos a formas básicas), Proporção e Espacialidade (não achatar a peça), e Engajamento Histórico.",
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
        criterioAvaliador: "Marcar SIM se o grupo respeitou a Regra de Ouro (não misturou as cores do bloco inteiro) e se os três alunos participaram ativamente."
      }
    ]
  },

  // NOVA CHAVE: Link direto para o seu PDF original salvo na pasta public
  pdfUrl: "/pdfs/02-piloto-museu-tatil.pdf"
};