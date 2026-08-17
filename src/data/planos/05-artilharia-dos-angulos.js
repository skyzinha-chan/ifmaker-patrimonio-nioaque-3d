// src/data/planos/05-artilharia-dos-angulos.js

export const plano05 = {
  id: "artilharia-dos-angulos",
  ano: "5º Ano",
  eixo: "CULTURA MAKER",
  titulo: "Decomposição de Problemas: A Artilharia dos Ângulos",
  contexto: "Contexto Interdisciplinar: Matemática e História Local",
  duracao: "50min/aula",
  objetoConhecimento: "Decomposição de problemas complexos no Pensamento Computacional. (Aplicação prática em: Ângulos: noções, usos e medidas).",
  habilidades: [
    {
      codigo: "(EF05CO01)",
      descricao: "Criar algoritmos simples para resolver problemas do cotidiano, utilizando diferentes linguagens (simbólica e tangível)."
    },
    {
      codigo: "(EF05CO02)",
      descricao: "Identificar e corrigir erros em algoritmos (depuração) de forma lógica."
    },
    {
      codigo: "(EF05MA18)",
      descricao: "Habilidade de Apoio: Reconhecer, nomear e comparar ângulos, medindo-os com transferidor, identificando ângulos retos, agudos e obtusos."
    }
  ],
  recursos: [
    "Sala de aula organizada em ilhas",
    "Canhões Históricos impressos em 3D (projeto IFMAKER)",
    "Kit de Programação Tangível (Blocos de Girar/Ângulo)",
    "Transferidores, réguas/fitas métricas e alvos de papel"
  ],
  ideiaPratica: "Os alunos recebem a missão de proteger um forte imaginário e precisam decompor a ação complexa do disparo balístico em etapas lógicas menores. Para isso, eles medem a distância, calculam o grau exato com transferidores e estruturam previamente o algoritmo do tiro montando a instrução física com os blocos de comando (ex: 'girar 45 graus') antes de testar a execução no alvo.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "História Local: Relembra-se a Retirada da Laguna e os Canhões da Praça dos Heróis. Explica-se que a artilharia da época exigia cálculos rigorosos de distância e inclinação. Introdução Matemática: Apresentação conceitual de ângulos (retos de 90º, agudos menores que 90º e obtusos maiores que 90º).",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação (Decompondo o Tiro)",
      descricao: "Alunos em 'ilhas' recebem um Canhão 3D e um alvo de papel posicionado pelo professor a uma distância e angulação aleatórias. O aluno não pode apenas 'apontar'. Ele deve decompor o desafio: medir a distância (régua) e medir a abertura do ângulo em relação à base (transferidor).",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação (Lógica Tangível)",
      descricao: "O grupo formaliza a ação usando os Blocos 3D (ex: bloco de 'Girar' + post-it com 'Ângulo Agudo 45º'). O Teste Físico: O professor aproxima uma régua longa reta a partir da boca do canhão no ângulo estipulado pelos alunos. Se a régua atingir o alvo de papel, o algoritmo matemático está correto. Se errar, devem refazer a medição.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica e nomeia os diferentes tipos de ângulos e os instrumentos de medida. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, a diferença entre os ângulos apresentados. (Ex: 'Um ângulo reto tem 90 graus, o agudo é mais fechado e o obtuso é mais aberto, e usamos o transferidor para medi-los')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende o pilar da decomposição e como ele se aplica ao problema complexo da artilharia. ",
      respostaEsperada: "Resposta Esperada: O aluno explica por que não basta apenas 'apontar' a peça a olho nu. (Ex: 'Para proteger o forte e acertar o alvo, precisamos dividir o problema em duas partes menores: primeiro medir a abertura do ângulo, depois medir a distância')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno utiliza os instrumentos de medição na prática e formaliza a instrução de rotação utilizando a linguagem tangível. ",
      respostaEsperada: "Resposta Esperada: O aluno posiciona corretamente o transferidor na base do canhão 3D, faz a medição até o alvo de papel e monta o comando físico sobre a mesa (Ex: junta o Bloco de 'Girar' com um post-it escrito 'Ângulo Agudo 45º')."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a falha no teste físico para depurar (debug) se o erro ocorreu na medição do ângulo ou na direção do giro. ",
      respostaEsperada: "Resposta Esperada: Ao ver a régua do professor errar o alvo, o aluno refaz o processo para encontrar a falha. (Ex: 'Achamos o bug! O canhão precisava ter girado em um ângulo obtuso de 120º, mas nós medimos errado e programamos para 60º')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno planeja novos cenários balísticos, criando posições de alvo mais complexas para testar o algoritmo dos colegas. ",
      respostaEsperada: "Resposta Esperada: O grupo propõe um novo desafio na mesa. (Ex: 'Vamos colocar o alvo no canto da ilha e adicionar uma regra em que a outra equipe precisa usar a régua duas vezes e calcular dois ângulos diferentes para conseguir acertar')."
    }
  ],
  rubricaId: "tipo-a",
  ajusteFinoRubrica: [
    "🧩 **Sequenciamento Lógico (Decomposição do Algoritmo Balístico):** O aluno não tenta girar o Canhão 3D a 'olho nu'. Ele segue rigorosamente a lógica da decomposição: posiciona o transferidor corretamente na base do canhão, realiza a leitura precisa do alvo (identificando se a abertura é de um ângulo agudo, reto ou obtuso) e seleciona o bloco tangível de 'Girar' acompanhado da anotação exata (ex: 45º ou 120º) antes de chamar o professor para o teste físico.",
    "🐛 **Depuração Prática (Debugging Matemático):** Se o 'tiro' errar o alvo, o aluno não se frustra nem movimenta o canhão aleatoriamente. Ele grita 'Bug!', paralisa a ação e investiga o próprio algoritmo para descobrir a raiz do erro. Ele consegue argumentar logicamente onde ocorreu a falha: se foi um erro de classificação matemática (ex: mediu um ângulo agudo em vez de obtuso) ou se o post-it foi preenchido com a graduação incorreta, corrigindo apenas esse detalhe para refazer o teste.",
    "🤝 **Execução de Papéis e Colaboração:** O aluno compartilha os materiais de forma equilibrada, respeitando as funções não ditas da engenharia em grupo. Ele não monopoliza o Canhão 3D; em vez disso, atua em sincronia com os colegas—enquanto um segura a base do artefato, o outro alinha o transferidor e um terceiro redige o comando no bloco tangível. Eles dialogam sobre a matemática envolvida (ex: 'Acho que está um pouco mais aberto que 90 graus, vamos medir de novo')."
  ],

  atividadesPdfUrl: "/pdfs/atividades/atividade-aluno-05.pdf",
  anexosPdfUrl: "/pdfs/anexos/anexos-blocos-05.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/rubrica-tipo-a-mapa.pdf",
  pdfUrl: "/pdfs/planoAula/05-artilharia-dos-angulos.pdf"
};