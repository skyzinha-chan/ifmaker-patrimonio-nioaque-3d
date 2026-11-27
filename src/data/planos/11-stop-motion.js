export const plano11 = {
  id: "stop-motion",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Plugada",
  titulo: "Algoritmos Visuais e Depuração: Stop Motion Patrimonial",
  contexto: "Contexto Interdisciplinar: Artes Visuais",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Algoritmos e Depuração",
    descricao: "Planejar a sequência lógica e exata de fotografias que criarão a ilusão artística do movimento, identificando e corrigindo falhas na execução."
  },
  objetoConhecimento: "Algoritmos (loops visuais) e Depuração. Materialidades, arte e tecnologia (Foco em Animação Stop Motion, elementos da linguagem visual e integração patrimonial).",
  habilidades: [
    {
      codigo: "(EF15CO02)",
      descricao: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF05CO04)",
      descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração."
    },
    {
      codigo: "(EF15AR04)",
      descricao: "Experimentar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia etc.), fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais."
    },
    {
      codigo: "(EF15AR26)",
      descricao: "Explorar diferentes tecnologias e recursos digitais (multimeios, animações, jogos eletrônicos, gravações em áudio e vídeo, fotografia, softwares etc.) nos processos de criação artística."
    }
  ],
  recursos: [
    "Sala de aula",
    "Tatus-bola, Jacarés e Canhões impressos em 3D",
    "Tablets/Celulares para captura e tripés improvisados (suporte maker)",
    "Kit de Programação Tangível (Blocos de repetição e movimento)"
  ],
  avaliacao: [
    {
      titulo: "Sequenciamento Algorítmico Visual",
      descricao: "Estrutura o roteiro de animação utilizando blocos tangíveis de repetição e deslocamento (ex.: Repetir 10x [Mover cauda 1 cm + Fotografar]), decompondo o movimento fluido em quadros estáticos sequenciais (frames)."
    },
    {
      titulo: "Captura e Intencionalidade Maker",
      descricao: "Opera a câmera do dispositivo sobre suporte firme, manipulando o artefato 3D com precisão milimétrica a cada captura sem alterar o enquadramento do cenário."
    },
    {
      titulo: "Depuração Visual (Debugging)",
      descricao: "Identifica falhas de continuidade, intrusões no enquadramento (como mãos na cena) ou saltos bruscos na prévia da animação, excluindo os quadros defeituosos e refazendo estritamente a tomada necessária."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 05",
      titulo: "Cultura Digital",
      descricao: "Compreender, utilizar e criar tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais."
    },
    {
      codigo: "CG 09",
      titulo: "Empatia e Cooperação",
      descricao: "Exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação."
    }
  ],
  ideiaPratica: "Os alunos programam o roteiro lógico de um curta-metragem em Stop Motion estruturando um algoritmo visual. Antes de fotografar no tablet/celular, eles usam os blocos tangíveis de 'repetir' e 'avançar' para sequenciar os movimentos ('frame a frame') do jacaré ou do canhão, garantindo a fluidez da animação e depurando os erros de continuidade caso ocorra um 'bug' na captura.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "A Ilusão de Ótica: O professor explica que o cinema é um conjunto de imagens estáticas que, quando repetidas rapidamente, enganam o cérebro (persistência da visão). A Ponte Algorítmica: Explica-se que um vídeo é um 'algoritmo visual': ele precisa seguir uma ordem exata de quadros para funcionar.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Organização dos Estúdios e Preparação da Cena: Forme duplas de animadores e distribua as peças 3D (Tatu-bola, Jacaré ou Canhão), os dispositivos com suportes/tripés e os blocos tangíveis. Roteirização Algorítmica (Modo Missão): Comande as duplas com ordens claras no imperativo: Decomponham a ação do artefato patrimonial (ex.: o caminhar do jacaré ou o disparo do canhão) em microetapas motoras. Estruturem o algoritmo da tomada na bancada organizando os blocos tangíveis de comando (ex.: Repetir 10x [Mover cauda 1 cm + Fotografar]). Fixem o celular/tablet no suporte improvisado para manter o enquadramento estável durante toda a sessão.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Execução Algorítmica (Frame a Frame): Comande os animadores: Fotografem quadro a quadro seguindo com rigor a ordem dos blocos tangíveis montados na mesa. Desloquem o artefato milimetricamente entre cada disparo, mantendo mãos e corpos fora do campo visual da lente. Celebração do Bug e Depuração Visual (Debugging): Ao rodar a prévia do vídeo em velocidade contínua, caso ocorra um salto brusco, sombra ou intrusão de dedos na cena, interrompam a exibição e exclamem: 'Bug no quadro!'. Rastreiem a linha do tempo digital e isolem o número exato do frame corrompido. Animadores, depurem a cena: excluam apenas os quadros defeituosos e refaçam a captura das posições intermediárias sem reiniciar a tomada inteira.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica os elementos visuais da animação e a função narrativa dos blocos lógicos de repetição e movimento. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, como a técnica e o comando funcionam juntos. (Ex: 'O stop motion é feito de várias fotos paradas, e o bloco de repetir ajuda a saber quantas vezes vamos mover a cauda do jacaré para fotografar')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende a relação entre a sequência de imagens estáticas (algoritmo visual) e a ilusão de movimento. ",
      respostaEsperada: "Resposta Esperada: O aluno explica por que a ordem das fotos importa para o cérebro. (Ex: 'Se tirarmos a foto do canhão lá na frente e depois atrás do nada, o vídeo vai dar um pulo estranho. O algoritmo das fotos tem que seguir um passo a passo exato')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno utiliza os blocos tangíveis para roteirizar o script na mesa e utiliza o tablet/celular para capturar as imagens sequenciais (frame a frame) do artefato 3D. ",
      respostaEsperada: "Resposta Esperada: O aluno organiza as setas e comandos lógicos (Ex: Bloco Repetir 10x + Avançar 1cm) e executa a captura da cena com o Tatu-bola, movimentando a peça milimetricamente a cada foto tirada."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno investiga a prévia da animação no dispositivo para identificar falhas na fluidez do movimento ou erros de continuidade (debugging visual). ",
      respostaEsperada: "Resposta Esperada: Ao assistir aos quadros na tela, o aluno localiza exatamente onde a ilusão de ótica falhou. (Ex: 'Achamos um bug visual! A mão do colega apareceu na foto 5 e o jacaré andou muito rápido. Vamos apagar esse quadro e refazer a foto com mais cuidado')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno consolida as fotos capturadas em um curta-metragem final coeso, integrando a narrativa patrimonial à tecnologia artística.",
      respostaEsperada: " Resposta Esperada: O aluno finaliza e apresenta a sequência animada autoral, demonstrando o uso intencional e criativo do pensamento computacional para dar vida e movimento à história de Nioaque."
    }
  ],
  rubricaId: "tipo-b",
  ajusteFinoRubrica: [
    "🎥 **Abstração de Propriedades (O Enquadramento e a Micro-Ação):** O aluno planeja o algoritmo visual perfeitamente com os blocos na mesa. Na hora da captura, ele isola o movimento de forma milimétrica (ex: avança a cauda do jacaré ou o Tatu-bola apenas um centímetro por vez). Ele não move o artefato abruptamente de um lado para o outro, demonstrando compreender a propriedade essencial do quadro a quadro (frame rate).",
    "🐛 **Iteração e Manuseio do Artefato (Debugging Fotográfico):** Ao revisar a animação no tablet e perceber que a cena deu um 'pulo' estranho (bug de continuidade) ou que a mão do colega saiu na foto, o aluno não se frustra nem apaga todo o projeto. Ele demonstra inteligência iterativa: rastreia exatamente o frame corrompido, exclui apenas aquela imagem e reposiciona o artefato 3D com extremo cuidado para refazer a captura e garantir a fluidez do filme.",
    "📱 **Transposição Físico-Digital (A Ilusão Algorítmica):** O aluno domina a relação entre o objeto tátil e a tecnologia artística. Ao final da atividade, ele consegue articular e explicar aos colegas que a persistência da visão no vídeo (o digital) só funcionou porque eles organizaram e executaram um algoritmo perfeitamente ordenado de capturas estáticas no mundo real (o físico)."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: null,
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO B.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.9 – STOP MOTION PATRIMONIAL.pdf"
};