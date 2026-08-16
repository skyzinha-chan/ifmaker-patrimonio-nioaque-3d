// src/data/planos/piloto-01-estrategistas.js
// Dados extraídos do Manual IFMaker - Aula Piloto Validada

export const piloto01 = {
  id: "piloto-01-estrategistas",
  tipo: "piloto",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  titulo: "Plano Piloto 1: Computação Desplugada – Estrategistas da Retirada",
  contexto: "História Local (Nioaque)",
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
  recursos: [
    "Sala de aula com carteiras afastadas",
    "Fita crepe para o grid no chão",
    "Cartões de comando impressos",
    "Imagens do monumento de José Francisco Lopes e do Canhão"
  ],
  ideiaPratica: "Os alunos atuam como 'Estrategistas da Retirada', traçando rotas seguras no chão da sala sem uso de GPS, aplicando decomposição e depuração tática.",
  roteiro: [
    {
      parte: "1ª Parte (30 min)",
      titulo: "Contextualização",
      descricao: "Apresentação dos Professores e da narrativa 'Estrategistas da Retirada'. Sondagem sobre o conhecimento prévio do monumento do Guia Lopes. Indagações sobre como traçar rotas seguras sem uso de GPS ou celular.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (165 min)",
      titulo: "Experimentação (Intercalado com Lanche e Recreio)",
      descricao: "Explicação dos cartões de comando (Avançar, Girar) e do conceito de Algoritmo. Divisão das equipes (Sorteio) e definição de papéis (Robô, Mestre, Caçador, Cartógrafo). Execução da missão no tabuleiro de fita crepe com aplicação do 'Modo Furtivo' e 'Sussurro do Bug' para depuração.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (30 min)",
      titulo: "Avaliação",
      descricao: "Execução do 'Algoritmo da Limpeza' para organização da sala. Sistematização individual: colagem de emblemas e registro reflexivo no caderno. Roda de conversa final sobre a importância do erro (Bug) no aprendizado tecnológico.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      respostaEsperada: "O aluno consegue definir com suas palavras o que é um comando e um algoritmo. (Ex: 'Algoritmo é a ordem certa das setas para o herói andar')."
    },
    {
      nivel: "2. Compreensão",
      respostaEsperada: "O aluno entende a importância da ordem. (Ex: 'Se eu colocar Avançar antes de Virar, o Guia Lopes cai no rio')."
    },
    {
      nivel: "3. Aplicação",
      respostaEsperada: "O aluno utiliza os cartões físicos para resolver o trajeto proposto no chão do pátio de forma independente."
    },
    {
      nivel: "4. Análise",
      respostaEsperada: "O aluno identifica um 'bug' (erro). (Ex: 'O erro está no terceiro cartão, ele deveria ter virado para a esquerda, não para a direita')."
    },
    {
      nivel: "5. Síntese (Criação)",
      respostaEsperada: "O aluno cria desafios novos. (Ex: O aluno sugere colocar mais um obstáculo e cria um novo caminho alternativo para desviar dele)."
    }
  ],
  guiaObservacao: {
    pesquisadores: "Talita Marques e Leonardo Vinicius",
    objetivo: "Coleta de evidências sobre o desenvolvimento do raciocínio lógico e depuração de algoritmos (Meta 4).",
    criterios: [
      {
        nome: "🧩 Decomposição",
        pergunta: "(Transformou o trajeto longo em comandos curtos?)",
        criterioAvaliador: "Marcar SIM se o grupo conseguiu planejar a sequência de cartões de setas na mesa antes do 'Robô' começar a andar, demonstrando que entenderam os passos individuais."
      },
      {
        nome: "🐛 Depuração / Debug",
        pergunta: "(Identificou e corrigiu o erro no código?)",
        criterioAvaliador: "Marcar SIM se, ao cometer um erro no trajeto (bater no Rio Apa ou virar para o lado errado), o grupo conseguiu olhar para a fila de cartões, achar exatamente qual seta estava errada e substituí-la sem precisar 'apagar' o código inteiro."
      },
      {
        nome: "🤝 Colaboração e Empatia",
        pergunta: "(Trabalharam em equipe e ouviram o Caçador de Bugs?)",
        criterioAvaliador: "Marcar SIM se os alunos respeitaram as funções (Mestre do Código, Robô, etc) e se o grupo conseguiu resolver conflitos de opinião sobre o trajeto de forma pacífica (Modo Furtivo)."
      }
    ]
  }

  // NOVA CHAVE: Link direto para o seu PDF original salvo na pasta public
  pdfUrl: "/pdfs/01-estrategistas-da-retirada.pdf"
};