export const plano10 = {
  id: "csi-nioaque",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Reconhecimento de Padrões: Investigação CSI do Formato dos Dentes Fósseis",
  contexto: "Contexto Interdisciplinar: Ciências da Natureza",
  duracao: "50min/aula",
  pilarComputacional: {
    titulo: "Reconhecimento de Padrões",
    descricao: "Associar o padrão morfológico da pegada à dieta alimentar e, consequentemente, à fisiologia interna do animal extinto."
  },
  objetoConhecimento: "Pilar de Reconhecimento de Padrões. (Aplicação prática em: Sistema digestório/nutrição e propriedades dos materiais na fossilização).",
  habilidades: [
    {
      codigo: "(EF15CO01)",
      descricao: "Identificar as principais formas de organizar e representar a informação de maneira estruturada (matrizes, registros, listas e grafos) ou não estruturada (números, palavras, valores verdade)."
    },
    {
      codigo: "(EF05CI01)",
      descricao: "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
    },
    {
      codigo: "(EF05CI06)",
      descricao: "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas."
    },
    {
      codigo: "(EF05CI07)",
      descricao: "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos."
    }
  ],
  recursos: [
    "Sala de aula organizada como um laboratório de investigação",
    "Réplicas impressas em 3D das Pegadas de Dinossauros (terópodes e ornitópodes do Vale de Nioaque)",
    "Lupas, réguas, pranchetas e fichas de investigação (CSI)"
  ],
  avaliacao: [
    {
      titulo: "Reconhecimento de Padrões Morfológicos",
      descricao: "Examina as réplicas 3D com lupas e categoriza os fósseis em dois padrões estruturais distintos (pegadas tridáctilas com garras versus pegadas arredondadas)."
    },
    {
      titulo: "Dedução Lógica e Fisiológica",
      descricao: "Infere e correlaciona a anatomia invisível (dentes afiados ou planos e extensão do trato digestório) a partir dos dados observáveis da pegada, justificando a hipótese da dieta."
    },
    {
      titulo: "Compreensão de Propriedades dos Materiais",
      descricao: "Explica o processo de fossilização, diferenciando a plasticidade inicial da lama antiga da rigidez da rocha que preservou a pegada tridimensional."
    }
  ],
  competenciasGerais: [
    {
      codigo: "CG 02",
      titulo: "Pensamento Científico, Crítico e Criativo",
      descricao: "Exercitar a curiosidade intelectual, investigar causas, elaborar e testar hipóteses sobre o passado."
    },
    {
      codigo: "CG 03",
      titulo: "Repertório Cultural",
      descricao: "Valorizar o patrimônio científico e paleontológico único do município de Nioaque."
    },
    {
      codigo: "CG 07",
      titulo: "Argumentação",
      descricao: "Argumentar com base em fatos e evidências fósseis para formular e defender conclusões morfológicas."
    }
  ],
  ideiaPratica: "Atuando como detetives, os alunos aplicam o reconhecimento de padrões para examinar e agrupar as réplicas 3D. Ao compararem sistematicamente o formato agudo com garras (terópodes) ao formato arredondado (ornitópodes), deduzem logicamente o formato dos dentes e do trato digestório do dinossauro a partir da coleta de dados dos 'pés', justificando cientificamente suas descobertas.",
  roteiro: [
    {
      parte: "1ª Parte (15 min)",
      titulo: "Contextualização",
      descricao: "Engajamento: Os professores vestem jalecos ou usam crachás de 'Investigadores CSI'. Apresentam o caso: milhões de anos atrás, gigantes andaram por Nioaque. Restaram apenas 'impressões digitais' (as pegadas 3D de gesso/plástico na mesa). Fundamentação: Revisão rápida sobre nutrição (carnívoros vs. herbívoros) e como os sistemas digestórios de cada um operam.",
      corStatus: "border-computational text-computational"
    },
    {
      parte: "2ª Parte (20 min)",
      titulo: "Experimentação",
      descricao: "Investigação Pericial e Reconhecimento de Padrões: Organize as bancadas como laboratórios periciais e distribua as réplicas 3D das pegadas, lupas e réguas. Comande os detetives: Examinem minuciosamente o contorno, profundidade e terminação dos dígitos em cada molde fóssil. Agrupem as evidências em dois conjuntos de dados: Padrão A (três dígitos afilados com garras - terópodes) e Padrão B (formato arredondado e largo - ornitópodes). Formulação de Hipóteses (Dedução Lógica): Comande a equipe de análise: Correlacionem as pistas dos pés à cabeça; se o Padrão A possui garras preênseis para contenção, deduzam como era sua dentição (afiada para rasgar carne). Se o Padrão B apresenta pisada plana de sustentação lenta, deduzam sua alimentação e dentição (dentes retos trituradores de folhagens). Registrem as correlações no caderno de campo da equipe.",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Sistematização Fisiológica: Comande: Mapeiem no caderno o sistema digestório inferido para cada padrão - estômago simples e intestino curto para a dieta carnívora (Padrão A) versus múltiplas câmaras fermentativas e trato longo para a quebra de fibras vegetais (Padrão B). Celebração do Bug e Depuração Pericial (Debugging): Promova a auditoria cruzada dos relatórios entre as equipes. Caso um grupo tenha associado garras a dentes herbívoros ou trato longo, exclamem: 'Bug na perícia fóssil!'. Isolem a dedução contraditória confrontando-a com a função biológica da garra. Detetives, depurem o relatório científico corrigindo a correlação anatômica. Fechamento Socrático: Provoquem a turma: Como essa pegada resistiu a milhões de anos? Por que a lama macia virou pedra dura sem apagar o desenho 3D?",
      corStatus: "border-blue-500 text-blue-500"
    }
  ],
  taxonomiaBloom: [
    {
      nivel: "1. Conhecimento",
      acao: "Ação: O aluno identifica e descreve as características visuais das pegadas impressas em 3D. ",
      respostaEsperada: "Resposta Esperada: O aluno consegue definir, com suas próprias palavras, as diferenças físicas entre os moldes. (Ex: 'Essa pegada tem três pontas afiadas como garras, e a outra é mais arredondada e gordinha')."
    },
    {
      nivel: "2. Compreensão",
      acao: "Ação: O aluno compreende a relação direta entre a forma externa (morfologia da pegada) e a função biológica (dieta e nutrição). ",
      respostaEsperada: "Resposta Esperada: O aluno explica a lógica evolutiva por trás daquele formato. (Ex: 'Se o dinossauro tem garras afiadas no pé para caçar e segurar presas, significa que ele comia carne')."
    },
    {
      nivel: "3. Aplicação",
      acao: "Ação: O aluno utiliza os instrumentos de observação (lupas) e o princípio computacional de Reconhecimento de Padrões para agrupar e classificar os artefatos sobre a mesa. ",
      respostaEsperada: "Resposta Esperada: O aluno separa fisicamente as pegadas do 'Padrão A' (terópodes/carnívoros) das do 'Padrão B' (ornitópodes/herbívoros), iniciando o preenchimento da ficha de investigação CSI."
    },
    {
      nivel: "4. Análise",
      acao: "Ação: O aluno deduz características internas e invisíveis (o formato dos dentes e o sistema digestório) a partir das evidências físicas limitadas que analisou. ",
      respostaEsperada: "Resposta Esperada: O aluno relaciona logicamente a dieta descoberta ao trato digestório. (Ex: 'Como descobrimos que ele é herbívoro por causa da pegada redonda, os dentes eram retos para amassar plantas e o estômago dele precisava ser muito grande e longo para conseguir fazer a digestão')."
    },
    {
      nivel: "5. Síntese (Criação)",
      acao: "Ação: O aluno formula, justifica e consolida uma hipótese científica completa na ficha CSI, integrando biologia, paleontologia e propriedades dos materiais. ",
      respostaEsperada: "Resposta Esperada: O aluno entrega o 'relatório do detetive' concluído, argumentando cientificamente sobre o comportamento do animal extinto e compreendendo como a lama do passado se transformou em rocha (fossilização) para preservar aquela prova até os dias de hoje."
    }
  ],
  rubricaId: "tipo-c",
  ajusteFinoRubrica: [
    "📝 **Estruturação Lógica do Registro (A Hipótese Científica):** O aluno elabora uma justificativa autossuficiente e encadeada. Ele não escreve apenas respostas curtas como 'come planta'. Ele constrói a relação de causa e efeito formalmente: 'Se o Padrão B tem a pegada redonda, ele era herbívoro. Logo, precisava de dentes planos para amassar as plantas e um estômago enorme funcionando como câmara de fermentação'.",
    "📐 **Organização Viso-espacial de Dados (O Laboratório na Mesa):** O aluno organiza a mesa de trabalho como um verdadeiro analista forense. Ele usa as lupas e separa fisicamente as réplicas 3D do 'Padrão A' (terópodes) e 'Padrão B' (ornitópodes) em grupos distintos antes de registrar os dados. Na ficha CSI, utiliza o espaço de forma metódica, com letra legível, podendo até desenhar croquis das pegadas ou do formato deduzido dos dentes para ilustrar seu laudo.",
    "🐛 **Rastreamento e Análise de Informação (A Dedução Morfológica):** O aluno domina a extração de dados sem recorrer à adivinhação. Ele rastreia e consolida o padrão exato de forma infalível: garras afiadas = rasgar carne = trato digestório rápido e curto. Durante o debate, ele também argumenta de forma coerente sobre a fossilização, demonstrando compreender exatamente como a lama do passado reteve a 'impressão digital' para se transformar em rocha."
  ],

  atividadesPdfUrl: null,
  anexosPdfUrl: "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf",
  rubricaPdfUrl: "/pdfs/rubricas/MAPA DE AVALIAÇÃO MAKER - RUBRICA TIPO C.pdf",
  pdfUrl: "/pdfs/planoAula/PLANO DE AULA 6.2.8 – CSI NIOAQUE.pdf"
};