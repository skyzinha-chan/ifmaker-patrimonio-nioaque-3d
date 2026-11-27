/**
 * Utilitário puro em JavaScript para geração de arquivos .ZIP (ZIP RFC 1951 / Stored)
 * Sem dependências externas pesadas (zero-dependency).
 */

// Tabela de CRC-32 pré-calculada
const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function calcularCrc32(uint8Array) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < uint8Array.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ uint8Array[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

/**
 * Cria um arquivo ZIP no formato Blob a partir de uma lista de arquivos { nome: string, dados: Uint8Array | ArrayBuffer | string }
 * @param {Array<{ nome: string, dados: Uint8Array | ArrayBuffer | string }>} arquivos
 * @returns {Blob}
 */
export function criarZipBlob(arquivos) {
  const encoder = new TextEncoder();
  const fileEntries = [];
  let offset = 0;

  // 1. Processa cada arquivo e calcula cabeçalho local
  for (const arq of arquivos) {
    let bytes;
    if (typeof arq.dados === "string") {
      bytes = encoder.encode(arq.dados);
    } else if (arq.dados instanceof ArrayBuffer) {
      bytes = new Uint8Array(arq.dados);
    } else if (arq.dados instanceof Uint8Array) {
      bytes = arq.dados;
    } else {
      bytes = new Uint8Array(0);
    }

    const nomeBytes = encoder.encode(arq.nome);
    const crc = calcularCrc32(bytes);
    const tamanho = bytes.length;

    // Local file header (30 bytes + nome)
    const localHeader = new Uint8Array(30 + nomeBytes.length);
    const view = new DataView(localHeader.buffer);

    view.setUint32(0, 0x04034b50, true); // Local file header signature
    view.setUint16(4, 20, true);         // Version needed to extract (2.0)
    view.setUint16(6, 0, true);          // General purpose bit flag
    view.setUint16(8, 0, true);          // Compression method (0 = Stored/Sem compressão)
    view.setUint16(10, 0, true);         // File last mod time
    view.setUint16(12, 0, true);         // File last mod date
    view.setUint32(14, crc, true);       // CRC-32
    view.setUint32(18, tamanho, true);   // Compressed size
    view.setUint32(22, tamanho, true);   // Uncompressed size
    view.setUint16(26, nomeBytes.length, true); // File name length
    view.setUint16(28, 0, true);         // Extra field length
    localHeader.set(nomeBytes, 30);

    fileEntries.push({
      nomeBytes,
      crc,
      tamanho,
      offset,
      localHeader,
      bytes
    });

    offset += localHeader.length + bytes.length;
  }

  // 2. Cria Central Directory
  const centralDirEntries = [];
  let centralDirSize = 0;
  const centralDirOffset = offset;

  for (const entry of fileEntries) {
    // Central directory file header (46 bytes + nome)
    const cdHeader = new Uint8Array(46 + entry.nomeBytes.length);
    const view = new DataView(cdHeader.buffer);

    view.setUint32(0, 0x02014b50, true); // Central file header signature
    view.setUint16(4, 20, true);         // Version made by
    view.setUint16(6, 20, true);         // Version needed to extract
    view.setUint16(8, 0, true);          // General purpose bit flag
    view.setUint16(10, 0, true);         // Compression method (0 = Stored)
    view.setUint16(12, 0, true);         // File last mod time
    view.setUint16(14, 0, true);         // File last mod date
    view.setUint32(16, entry.crc, true); // CRC-32
    view.setUint32(20, entry.tamanho, true); // Compressed size
    view.setUint32(24, entry.tamanho, true); // Uncompressed size
    view.setUint16(28, entry.nomeBytes.length, true); // File name length
    view.setUint16(30, 0, true);         // Extra field length
    view.setUint16(32, 0, true);         // File comment length
    view.setUint16(34, 0, true);         // Disk number start
    view.setUint16(36, 0, true);         // Internal file attributes
    view.setUint32(38, 0, true);         // External file attributes
    view.setUint32(42, entry.offset, true); // Relative offset of local header
    cdHeader.set(entry.nomeBytes, 46);

    centralDirEntries.push(cdHeader);
    centralDirSize += cdHeader.length;
  }

  // 3. End of Central Directory Record (22 bytes)
  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);
  eocdView.setUint32(0, 0x06054b50, true); // EOCD signature
  eocdView.setUint16(4, 0, true);          // Number of this disk
  eocdView.setUint16(6, 0, true);          // Disk where central directory starts
  eocdView.setUint16(8, fileEntries.length, true);  // Number of central directory records on this disk
  eocdView.setUint16(10, fileEntries.length, true); // Total number of central directory records
  eocdView.setUint32(12, centralDirSize, true);     // Size of central directory
  eocdView.setUint32(16, centralDirOffset, true);   // Offset of start of central directory
  eocdView.setUint16(20, 0, true);                  // Comment length

  // 4. Junta todas as partes em um único Blob
  const blobParts = [];
  for (const entry of fileEntries) {
    blobParts.push(entry.localHeader);
    blobParts.push(entry.bytes);
  }
  for (const cd of centralDirEntries) {
    blobParts.push(cd);
  }
  blobParts.push(eocd);

  return new Blob(blobParts, { type: "application/zip" });
}

/**
 * Função utilitária para baixar um Blob com um nome de arquivo específico
 */
export function dispararDownloadBlob(blob, nomeArquivo) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nomeArquivo;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

/**
 * Baixa e empacota todos os PDFs e materiais disponíveis de um plano de aula em um único arquivo ZIP.
 * @param {Object} plano - Objeto do plano de aula
 * @param {Function} onProgress - Callback com ({ etapa: string, porcentagem: number })
 */
function getGuiaRubricaUrl(plano) {
  const ref = `${plano?.rubricaId || ""} ${plano?.rubricaPdfUrl || ""}`.toLowerCase();
  if (ref.includes("tipo-a") || ref.includes("tipo a")) {
    return "/pdfs/anexos/Rubrica Tipo A - Eixo Pensamento Computacional.pdf";
  }
  if (ref.includes("tipo-b") || ref.includes("tipo b")) {
    return "/pdfs/anexos/Rubrica Tipo B - Eixo Mundo Digital.pdf";
  }
  if (ref.includes("tipo-c") || ref.includes("tipo c")) {
    return "/pdfs/anexos/Rubrica Tipo C - Eixo Cultura Digital.pdf";
  }
  return null;
}

export async function baixarPacoteCompletoDaAula(plano, onProgress = () => {}) {
  const guiaRubricaUrl = getGuiaRubricaUrl(plano);
  const arquivosParaBaixar = [
    { url: plano.pdfUrl, nome: "01_Plano_de_Aula_Completo.pdf", rotulo: "Plano de Aula" },
    { url: plano.rubricaPdfUrl, nome: "02_Mapa_de_Avaliacao_Rubrica.pdf", rotulo: "Rubrica de Avaliação" },
    { url: guiaRubricaUrl, nome: "03_Guia_Explicativo_Rubrica.pdf", rotulo: "Guia Explicativo da Rubrica" },
    { url: plano.atividadesPdfUrl, nome: "04_Folha_de_Atividades_Missao.pdf", rotulo: "Folha da Missão" },
    { url: plano.anexosPdfUrl, nome: "05_Anexos_e_Imagens.pdf", rotulo: "Anexos e Imagens" }
  ].filter(item => Boolean(item.url));

  if (arquivosParaBaixar.length === 0) {
    throw new Error("Nenhum material em PDF disponível para este plano de aula.");
  }

  const arquivosNoZip = [];
  const total = arquivosParaBaixar.length;

  for (let i = 0; i < total; i++) {
    const item = arquivosParaBaixar[i];
    const url = item.url;
    const progressoAtual = Math.round(((i + 1) / (total + 1)) * 90);

    onProgress({
      etapa: `Baixando ${item.rotulo} (${i + 1} de ${total})...`,
      porcentagem: progressoAtual
    });

    try {
      const resposta = await fetch(url);
      if (!resposta.ok) {
        console.warn(`Arquivo não encontrado no servidor: ${url}`);
        continue;
      }
      const buffer = await resposta.arrayBuffer();
      arquivosNoZip.push({
        nome: item.nome,
        dados: buffer
      });
    } catch (err) {
      console.warn(`Erro ao baixar ${url}:`, err);
    }
  }

  // Adiciona o arquivo de instruções pedagógicas do professor
  const textoLeiame = `====================================================================
PATRIMÔNIO DE NIOAQUE EM 3D: MANUAL PEDAGÓGICO DE COMPUTAÇÃO E CULTURA MAKER NO ENSINO FUNDAMENTAL
Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS) – Câmpus Jardim
Projeto IFMaker Educador • Edital nº 054/2025 – PROPI/IFMS
DOI do Manual (Zenodo): https://doi.org/10.5281/zenodo.24353731
====================================================================

Plano de Aula: ${plano.titulo}
Público-Alvo: ${plano.ano || "Ensino Fundamental"}
Eixo BNCC: ${plano.eixo || "Pensamento Computacional / Cultura Maker"}
Duração Estimada: ${plano.duracao || "50 minutos"}
Contexto: ${plano.contexto || "Patrimônio Histórico e Paleontológico de Nioaque"}

--------------------------------------------------------------------
CONTEÚDO DESTE PACOTE DA AULA:
--------------------------------------------------------------------
${arquivosNoZip.map(a => `• ${a.nome}`).join("\n")}
• LEIAME_Instrucoes_do_Professor.txt

--------------------------------------------------------------------
BOAS PRÁTICAS DE MEDIAÇÃO E LOGÍSTICA DA CAIXA MASTER:
--------------------------------------------------------------------
1. ORGANIZAÇÃO DAS ILHAS:
   Distribua as equipes em até 8 esquadrões de 4 alunos. Atribua as 4 funções:
   - Mestre do Código (Programador): seleciona e ordena os blocos de comando
   - Robô Tático (Testador): executa cegamente os passos no grid/tabuleiro
   - Caçador de Bugs (Depurador): rastreia colisões e falhas lógicas
   - Cartógrafo (Documentador): registra o algoritmo na folha de missão

2. MATERIAL PLASTIFICADO (POLASEAL):
   Utilize exclusivamente caneta para quadro branco (marcador recarregável).
   NUNCA utilize caneta permanente. Para apagar, use feltro seco ou flanela macia.

3. ARTEFATOS 3D DO IFMAKER:
   Fabricados em filamento biodegradável (PLA). Proteja as peças de calor excessivo
   (não deixar exposto em porta-malas de carro ou sob sol forte). Limpeza apenas
   com pano levemente umedecido.

--------------------------------------------------------------------
Plataforma Interativa Online: https://ifmaker-patrimonio-nioaque-3d.vercel.app/
Manual Completo (DOI Zenodo): https://doi.org/10.5281/zenodo.24353731
Código-Fonte (GitHub):        https://github.com/skyzinha-chan/ifmaker-patrimonio-nioaque-3d
Licença da Obra Pedagógica:   CC BY-NC-SA 4.0 (Uso didático e não comercial)
====================================================================`;

  arquivosNoZip.push({
    nome: "LEIAME_Instrucoes_do_Professor.txt",
    dados: textoLeiame
  });

  onProgress({
    etapa: "Compactando pacote do kit (.ZIP)...",
    porcentagem: 95
  });

  const zipBlob = criarZipBlob(arquivosNoZip);
  const slug = (plano.id || "plano").toString().toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  const nomeZip = `Kit-Aula-${slug}.zip`;

  dispararDownloadBlob(zipBlob, nomeZip);

  onProgress({
    etapa: "Download concluído com sucesso!",
    porcentagem: 100
  });

  return { totalArquivos: arquivosNoZip.length, nomeZip };
}

