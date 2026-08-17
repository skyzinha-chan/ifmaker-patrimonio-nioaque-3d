// src/data/capitulos/capitulo3.js

export const capitulo3 = {
  id: "catalogo-visual",
  titulo: "3. Catálogo Visual: O Que Há na Caixa?", //
  conteudo: [
    {
      tipo: "paragrafo",
      texto: "Nesta seção, você conhecerá os recursos pedagógicos que compõem o nosso acervo. Cada peça não é apenas um brinquedo, mas um artefato intencionalmente projetado para materializar habilidades da BNCC." //
    },
    {
      tipo: "destaque",
      texto: "INSERIR IMAGENS DO SITE DOS MODELOS 3D E REFERENCIAR OS DEVIDOS CRÉDITOS" //
    },
    {
      tipo: "subtitulo",
      texto: "3.1 Inventário dos Materiais Impressos: Conheça as peças do projeto." //
    },
    // NOVO TIPO DE DADO: catalogo_item
    {
      tipo: "catalogo_item",
      titulo: "O Tatu-bola e o Jacaré (Fauna).", //
      texto: "Peças articuladas que representam a rica biodiversidade do nosso Pantanal e Cerrado. Ideais para aulas de Ciências sobre cadeia alimentar, ecossistemas e características fisiológicas de adaptação (como o enrolar do tatu).", //
      imagemLocal: "/assets/tatu-jacare.png", // Caminho planejado para o futuro
      alt: "Modelo 3D do Tatu-bola e Jacaré"
    },
    {
      tipo: "catalogo_item",
      titulo: "Os Canhões Históricos (História).", //
      texto: "Réplicas baseadas na odisseia da Retirada da Laguna. Perfeitos para materializar os conflitos de fronteira e a fundação territorial de Nioaque, além de servirem como peças de tabuleiro em aulas de Matemática (ângulos e distâncias).", //
      imagemLocal: "/assets/canhao.png",
      alt: "Modelo 3D dos Canhões Históricos"
    },
    {
      tipo: "catalogo_item",
      titulo: "As Pegadas de Dinossauros (Paleontologia).", //
      texto: "Vestígios em tamanho real do Vale dos Dinossauros (terópodes e ornitópodes). Transformam os alunos em investigadores do passado, trabalhando texturas, deduções anatômicas e o processo de fossilização.", //
      imagemLocal: "/assets/pegadas.png",
      alt: "Modelo 3D das Pegadas de Dinossauros"
    }
  ]
};