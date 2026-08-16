/**
 * Matrizes Globais de Avaliação Formativa - IFMaker Educador
 * Arquivo isolado para garantir o Princípio DRY e facilitar a renderização dinâmica.
 * Níveis avaliativos: (1) 🌱 Em Desenvolvimento | (2) 🌿 Adequado | (3) 🌳 Avançado
 */

export const rubricas = {
  "tipo-a": {
    titulo: "Rubrica Tipo A: Eixo Pensamento Computacional",
    foco: "(Focada em atividades de tabuleiro, codificação desplugada e resolução lógica de problemas).",
    criterios: [
      {
        nome: "Decomposição e Lógica (Algoritmo)",
        desenvolvimento: "Tem dificuldade em ordenar os comandos físicos; precisa de ajuda constante do professor para avançar.",
        adequado: "Consegue quebrar o trajeto em passos menores, mas comete pequenos erros de direção ou contagem.",
        avancado: "Cria sequências precisas de forma independente, planejando todos os comandos curtos antes do 'Robô' andar."
      },
      {
        nome: "Depuração de Erros (Debugging)",
        desenvolvimento: "Frustra-se ao errar o caminho e desiste ou quer recomeçar o trajeto de forma aleatória.",
        adequado: "Percebe o erro com ajuda dos colegas e tenta substituir a peça incorreta, retomando o raciocínio.",
        avancado: "Identifica rapidamente onde o 'bug' ocorreu, explica o porquê falhou e corrige apenas a instrução necessária."
      },
      {
        nome: "Colaboração e Empatia",
        desenvolvimento: "Tenta dominar o material sozinho, não participa das decisões do grupo ou desrespeita os turnos de fala.",
        adequado: "Participa da atividade, mas às vezes confunde seu papel (Ex: tenta mover a peça quando deveria apenas codificar).",
        avancado: "Respeita rigorosamente a divisão de tarefas (Mestre/Robô), ouve as ideias dos colegas e colabora ativamente na missão."
      }
    ]
  },
  "tipo-b": {
    titulo: "Rubrica Tipo B: Eixo Mundo Digital",
    foco: "(Focada em atividades de prototipagem 3D, distinção entre hardware/software e manufatura).",
    criterios: [
      {
        nome: "Abstração Espacial (Hardware)",
        desenvolvimento: "Observa o objeto apenas como um brinquedo inteiro, sem conseguir isolar suas partes ou características.",
        adequado: "Consegue identificar partes do objeto, mas tem dificuldade em isolar a propriedade exigida (textura, camadas, movimento).",
        avancado: "Isola perfeitamente a propriedade essencial exigida (captura apenas a textura, foca nos quadros de animação ou nas fatias do design)."
      },
      {
        nome: "Iteração e Resiliência Maker",
        desenvolvimento: "Manuseia as peças de forma brusca, gerando falhas visuais (fotos tremidas, texturas rasgadas) e desiste.",
        adequado: "Tenta corrigir os erros físicos, refazendo o desenho ou a foto quando percebe que o resultado ficou ruim.",
        avancado: "Manipula o artefato 3D milimetricamente. Percebe falhas artísticas/físicas imediatamente e refaz o processo com paciência técnica."
      },
      {
        nome: "Transposição Físico-Digital",
        desenvolvimento: "Não consegue explicar a relação entre o objeto em mãos e a tecnologia/conceito da aula.",
        adequado: "Entende que o objeto tem um propósito, mas o explica de forma superficial.",
        avancado: "Conecta com clareza o artefato físico ao seu funcionamento lógico (diferencia Hardware de Software ou explica a ilusão digital do Stop Motion)."
      }
    ]
  },
  "tipo-c": {
    titulo: "Rubrica Tipo C: Eixo Cultura Digital",
    foco: "(Focada em como o aluno coleta, analisa, documenta informações e reflete sobre os impactos da tecnologia).",
    criterios: [
      {
        nome: "Estruturação Lógica do Registro",
        desenvolvimento: "O texto, manual ou história não apresenta sequência lógica (início, meio e fim estão misturados).",
        adequado: "A estrutura faz sentido, mas faltam elementos lógicos conectivos (como as regras claras do 'Se/Então').",
        avancado: "O texto ou código escrito é autossuficiente: utiliza verbos imperativos e regras condicionais de forma perfeita e coesa."
      },
      {
        nome: "Organização Viso-espacial de Dados",
        desenvolvimento: "O registro no papel/cartolina é confuso, dificultando a leitura de mapas, gráficos ou fichas.",
        adequado: "Organiza a informação de forma legível, respeitando as marcações principais do papel.",
        avancado: "Utiliza o espaço de forma estratégica, distribuindo elementos gráficos e textuais com extrema clareza, capricho e legendas."
      },
      {
        nome: "Rastreamento e Análise de Informação",
        desenvolvimento: "Apresenta dados equivocados, foge do tema ou não percebe informações falsas/distorcidas.",
        adequado: "Documenta dados essenciais corretamente. Percebe ruídos de comunicação com ajuda do professor.",
        avancado: "Extrai dados precisos das atividades. Rastreia 'bugs' na informação (Fake News), deduz fatos científicos ou identifica padrões (desmatamento)."
      }
    ]
  }
};