// src/data/planos/06-bifurcacoes-narrativas.js

export const plano06 = {
  id: "bifurcacoes-narrativas",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  titulo: "Lógica Condicional e Abstração: Caminhos Alternativos na Retirada da Laguna",
  contexto: "Contexto Interdisciplinar: Língua Portuguesa",
  duracao: "50min/aula",
  objetoConhecimento: "Condicionais lógicos e Abstração. (Aplicação prática em: Produção de textos narrativos (contos de aventura), progressão temporal/espacial).",
  habilidades: [
    {
      codigo: "(EF15C001)",
      descricao: "Pilar: Abstração - Isolar características essenciais e ignorar detalhes irrelevantes no planejamento da rota narrativa."
    },
    {
      codigo: "(EF15C002)",
      descricao: "Construir e simular algoritmos que resolvam problemas com uso de sequências, seleções condicionais e repetições de instruções."
    },
    {
      codigo: "(EF35LP25)",
      descricao: "Habilidade de Apoio: Criar narrativas ficcionais, com certa autonomia, utilizando detalhes descritivos, sequências de eventos e imagens apropriadas para sustentar o sentido do texto."
    }
  ],
  recursos: [
    "Sala de aula organizada em grupos",
    "Papel pardo/cartolinas",
    "Canhões Históricos 3D e Jacarés articulados 3D",
    "Blocos de Programação Tangível lógicos ('Se/Então')"
  ],
  ideiaPratica: "Os alunos programam o fluxo de um conto interativo ambientado na Retirada da Laguna. Ao inserirem o encontro com jacarés na trama, utilizam os blocos de lógica condicional ('se/então') para estruturar as 'bifurcações' da história (Ex: SE o jacaré atacar, ENTÃO o soldado atira com o canhão; SENÃO, ele atravessa o rio em silêncio), mapeando consequências textuais diferentes baseadas em regras lógicas.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "História Local e Literatura: Contar brevemente a odisseia militar da Retirada da Laguna pelo Pantanal. Explicar o que é um texto narrativo e apresentar o formato dos 'Livros-Jogo' interativos (Onde o leitor toma decisões). Introdução Lógica: Apresentar o bloco físico 'Se/Então' (If/Then). Explicar que toda aventura possui escolhas e consequências.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Planejamento do Conto (Abstração): Em cartolinas, os alunos desenham o 'Esqueleto da História'. Usando os Jacarés e Canhões 3D como pontos de interesse, eles chegam no momento do clímax. A Bifurcação Escrita: Nesse ponto crítico, eles inserem fisicamente o Bloco 'Se/Então' sobre o papel. Ex: SE (o soldado avistar o Jacaré), ENTÃO (ele dispara o Canhão para assustar); SENÃO (ele atravessa o rio em silêncio). Eles redigem os parágrafos para os dois finais possíveis.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Leitura Interativa: Os grupos trocam as histórias. Um grupo lê o conto do outro e, ao chegar no bloco 'Se/Então', deve tomar a decisão manuseando os artefatos 3D. Dependendo da escolha do leitor, um final diferente do texto deve ser lido. Revisão de Coesão: O professor avalia se a transição entre o parágrafo principal e os parágrafos alternativos ('Então' / 'Senão') manteve a coesão temporal do conto.",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro (A Bifurcação Escrita):** O aluno elabora uma narrativa autossuficiente e lógica. Ele escreve a introdução e, no momento do clímax, cria dois parágrafos alternativos perfeitamente coesos para a condição exigida. Ele garante que a consequência (o 'ENTÃO' - atirar com o canhão) e a alternativa (o 'SENÃO' - atravessar em silêncio) gerem desfechos que façam sentido com o resto da história, sem perder a continuidade temporal do texto.",
    "📐 **Organização Viso-espacial de Dados (Mapeamento do Conto):** O aluno utiliza a cartolina de forma estratégica, criando um verdadeiro fluxograma literário. O texto não é um bloco confuso; a estrutura ramificada é visível e hierárquica. Ele posiciona o bloco tangível de 'Se/Então' no exato ponto de ruptura visual e pode até mesmo utilizar setas desenhadas ou espaçamentos claros para guiar o leitor para o parágrafo da opção A ou da opção B.",
    "🐛 **Rastreamento e Análise de Informação (Debugging Literário):** Durante a troca de histórias, o aluno assume a postura de um verdadeiro 'compilador'. Ao ler o texto do outro grupo e interagir com as peças 3D, ele rastreia a lógica da escolha. Se ele escolher a opção 'SENÃO' (fugir em silêncio) e o parágrafo seguinte descrever um estrondo de pólvora, ele paralisa a leitura, aponta o 'Bug Literário' e explica à equipe autora onde a conexão lógica entre os parágrafos falhou."
  ]
};