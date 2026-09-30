// src/data/planos/10-csi-nioaque.js

export const plano10 = {
  id: "csi-nioaque",
  ano: "5º Ano",
  eixo: "PENSAMENTO COMPUTACIONAL",
  tipo: "Desplugada",
  titulo: "Reconhecimento de Padrões: Investigação CSI do Formato dos Dentes Fósseis",
  contexto: "Contexto Interdisciplinar: Ciências da Natureza",
  duracao: "50min/aula",
  objetoConhecimento: "Pilar de Reconhecimento de Padrões. (Aplicação prática em: Sistema digestório/nutrição e propriedades dos materiais na fossilização).",
  habilidades: [
    {
      codigo: "(EF15CO01)",
      descricao: "Pilar: Reconhecimento de Padrões - Identificar características morfológicas comuns para classificar e deduzir informações ocultas."
    },
    {
      codigo: "(EF05CI06 / EF05CI07)",
      descricao: "Habilidade de Apoio: Justificar a relação entre o funcionamento do sistema digestório/circulatório e a dieta do organismo (Adaptado para a fisiologia de espécies extintas locais)."
    },
    {
      codigo: "(EF05CI01)",
      descricao: "Habilidade de Apoio: Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais (Processo de fossilização nas rochas de Nioaque)."
    }
  ],
  recursos: [
    "Sala de aula organizada como um laboratório de investigação",
    "Réplicas impressas em 3D das Pegadas de Dinossauros (terópodes e ornitópodes do Vale de Nioaque)",
    "Lupas, réguas, pranchetas e fichas de investigação (CSI)"
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
      descricao: "O Reconhecimento de Padrões: As crianças recebem as réplicas 3D. Com lupas, elas devem agrupar as pegadas por padrões: o Padrão A tem 3 dedos afiados com garras (terópodes). O Padrão B é mais gordinho e arredondado (ornitópodes). Hipótese Científica: Se o Padrão A precisava de garras para agarrar presas, como deveriam ser seus dentes? (Resposta: afiados para rasgar carne). Se o Padrão B andava devagar, o que ele comia? (Plantas, logo, dentes planos para mastigar).",
      corStatus: "border-emerald-600 text-emerald-600"
    },
    {
      parte: "3ª Parte (15 min)",
      titulo: "Avaliação",
      descricao: "Transposição Biológica: Com base na dedução dos dentes, os alunos devem preencher a ficha fisiológica do dinossauro. O carnívoro tem uma digestão rápida (trato curto). O herbívoro tem um estômago enorme, como uma câmara de fermentação para digerir folhas (trato longo). Debate: Como a pegada sobreviveu tanto tempo? (Introdução à propriedade dos materiais e fossilização da lama).",
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