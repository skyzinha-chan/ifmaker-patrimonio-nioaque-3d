// src/data/planos/11-stop-motion.js

export const plano11 = {
  id: "stop-motion",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  titulo: "Algoritmos Visuais e Depuração: Stop Motion Patrimonial",
  contexto: "Contexto Interdisciplinar: Artes Visuais",
  duracao: "50min/aula",
  objetoConhecimento: "Algoritmos e Depuração. (Aplicação prática em: Animação em Stop Motion, elementos da linguagem visual e uso de tecnologia na arte).",
  habilidades: [
    {
      codigo: "(EF05CO02)",
      descricao: "Identificar e corrigir erros em algoritmos (depuração)."
    },
    {
      codigo: "(EF15AR04)",
      descricao: "Habilidade de Apoio: Experimentar diferentes formas de expressão artística (animação), fazendo uso sustentável de materiais, instrumentos e recursos."
    },
    {
      codigo: "(EF15AR26)",
      descricao: "Habilidade de Apoio: Explorar diferentes tecnologias e recursos digitais nos processos de criação artística."
    }
  ],
  recursos: [
    "Sala de aula",
    "Tatus-bola, Jacarés e Canhões impressos em 3D",
    "Tablets/Celulares para captura e tripés improvisados (suporte maker)",
    "Kit de Programação Tangível (Blocos de repetição e movimento)"
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
      descricao: "O Roteiro (Algoritmo): Em duplas, os alunos planejam o movimento da peça 3D. Eles organizam os blocos tangíveis de 'Repetir' e 'Avançar' na mesa para definir o script da animação (Ex: Repetir 10x [Mover cauda 1cm + Tirar Foto]). Preparação da Cena: Montagem do cenário no espaço maker improvisado, posicionando os artefatos 3D.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Captura: As duplas fotografam frame a frame seguindo o algoritmo definido. Debugging Visual: Se ao visualizar a prévia o movimento estiver 'pulando' ou uma peça tiver sido movida por acidente, os alunos identificam o erro (Bug) e refazem apenas a sequência de quadros necessária.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  rubricaId: "tipo-b",
  ajusteFinoRubrica: [
    "🎥 **Abstração de Propriedades (O Enquadramento e a Micro-Ação):** O aluno planeja o algoritmo visual perfeitamente com os blocos na mesa. Na hora da captura, ele isola o movimento de forma milimétrica (ex: avança a cauda do jacaré ou o Tatu-bola apenas um centímetro por vez). Ele não move o artefato abruptamente de um lado para o outro, demonstrando compreender a propriedade essencial do quadro a quadro (frame rate).",
    "🐛 **Iteração e Manuseio do Artefato (Debugging Fotográfico):** Ao revisar a animação no tablet e perceber que a cena deu um 'pulo' estranho (bug de continuidade) ou que a mão do colega saiu na foto, o aluno não se frustra nem apaga todo o projeto. Ele demonstra inteligência iterativa: rastreia exatamente o frame corrompido, exclui apenas aquela imagem e reposiciona o artefato 3D com extremo cuidado para refazer a captura e garantir a fluidez do filme.",
    "📱 **Transposição Físico-Digital (A Ilusão Algorítmica):** O aluno domina a relação entre o objeto tátil e a tecnologia artística. Ao final da atividade, ele consegue articular e explicar aos colegas que a persistência da visão no vídeo (o digital) só funcionou porque eles organizaram e executaram um algoritmo perfeitamente ordenado de capturas estáticas no mundo real (o físico)."
  ],

  // NOVA CHAVE: Link direto para o seu PDF original salvo na pasta public
  pdfUrl: "/pdfs/11-stop-motion.pdf"
};