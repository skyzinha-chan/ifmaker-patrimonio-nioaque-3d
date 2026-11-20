import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const capitulosDir = path.join(__dirname, 'capitulos');
const indexPath = path.join(__dirname, 'index.html');
const landscapePath = path.join(__dirname, 'apendice-paisagem.html');

const files = fs
  .readdirSync(capitulosDir)
  .filter((file) => file.endsWith('.html'))
  .sort();

const landscapeBlocks = [];

function extractLandscapeBlocks(html) {
  let result = '';
  let pos = 0;
  while (true) {
    const start = html.indexOf('<div class="page-landscape"', pos);
    if (start === -1) {
      result += html.slice(pos);
      break;
    }
    result += html.slice(pos, start);
    // Find matching closing </div> by counting nested <div and </div>
    let depth = 0;
    let cursor = start;
    while (cursor < html.length) {
      const nextOpen = html.indexOf('<div', cursor);
      const nextClose = html.indexOf('</div>', cursor);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        cursor = nextOpen + 4;
      } else {
        depth--;
        cursor = nextClose + 6;
        if (depth === 0) break;
      }
    }
    landscapeBlocks.push(html.slice(start, cursor));
    pos = cursor;
  }
  return result;
}

const chaptersHtml = files
  .map((file) => {
    let content = fs.readFileSync(path.join(capitulosDir, file), 'utf-8').trim();
    if (!content) {
      return `<!-- ${file} (vazio) -->`;
    }
    content = extractLandscapeBlocks(content);
    return `<!-- INÍCIO: ${file} -->\n${content}\n<!-- FIM: ${file} -->`;
  })
  .join('\n\n');

const portraitTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Patrimônio de Nioaque em 3D — Manual Pedagógico (Retrato)</title>
  <link rel="stylesheet" href="./styles/theme.css" />
  <link rel="stylesheet" href="./styles/print.css" />
  <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
  <script>
    if (window.Paged) {
      class CustomPageNumbers extends Paged.Handler {
        afterRendered(pages) {
          let offset = 0;
          let apendiceStart = null;
          const pageMeta = [];
          pages.forEach((p, idx) => {
            const el = p.element;
            if (el.querySelector('#apendice-a-intro')) {
              // 1 página reservada para a divisória em PDF após Referências
              offset = 1;
              apendiceStart = idx + 1 + offset + 1;
            } else if (el.querySelector('#sobre-autores')) {
              // +12 páginas do Apêndice A em paisagem (total +13 após Referências + Apêndice Intro)
              offset = 13;
            }
            const num = idx + 1 + offset;
            pageMeta.push({ el, num });
            if (offset !== 0) {
              const style = document.createElement('style');
              style.textContent = \`[data-page-number="\${idx + 1}"] .pagedjs_margin-top-right .pagedjs_margin-content::after { content: "| \${num}" !important; }\`;
              document.head.appendChild(style);
            }
          });

          if (apendiceStart !== null) {
            try { localStorage.setItem('ifmaker_apendice_start', String(apendiceStart)); } catch (e) {}
            const infoEl = document.getElementById('apendice-page-info');
            if (infoEl) {
              infoEl.innerHTML = \` · <a href="./apendice-paisagem.html?start=\${apendiceStart}" target="_blank" style="color:#a7f3d0;text-decoration:underline;">Abrir Apêndice Paisagem (p. \${apendiceStart}–\${apendiceStart + 11})</a>\`;
            }
          }

          const norm = (s) => (s || '').replace(/\s+/g, ' ').trim().toLowerCase();
          const introIdx = pageMeta.findIndex(({ el }) =>
            Array.from(el.querySelectorAll('h1')).some((h) => norm(h.textContent) === 'introdução')
          );
          const bodyPages = introIdx >= 0 ? pageMeta.slice(introIdx) : pageMeta;
          document.querySelectorAll('[data-toc-find]').forEach((row, tocIdx) => {
            const find = row.getAttribute('data-toc-find');
            const scope = row.getAttribute('data-toc-scope') || '';
            const numEl = row.querySelector('.toc-num');
            if (!find || !numEl) return;
            const targetNorm = norm(find);
            let targetEl = null;
            const match = bodyPages.find(({ el }) => {
              if (find.startsWith('#')) {
                targetEl = el.querySelector(find);
                return Boolean(targetEl);
              }
              if (scope === 'h1') {
                targetEl = Array.from(el.querySelectorAll('h1')).find((h) => norm(h.textContent) === targetNorm || norm(h.textContent).includes(targetNorm));
                return Boolean(targetEl);
              }
              if (scope === 'heading') {
                targetEl = Array.from(el.querySelectorAll('h1, h2, h3, h4')).find((h) => norm(h.textContent).startsWith(targetNorm));
                return Boolean(targetEl);
              }
              if (norm(el.textContent).includes(targetNorm)) {
                targetEl = Array.from(el.querySelectorAll('figcaption, .caption, p, td, div')).find((node) => norm(node.textContent).includes(targetNorm)) || el;
                return true;
              }
              return false;
            });
            if (match) {
              numEl.textContent = String(match.num);
              if (targetEl) {
                if (!targetEl.id) targetEl.id = \`toc-target-\${tocIdx}\`;
                row.setAttribute('href', '#' + targetEl.id);
              }
            }
          });
        }
      }
      Paged.registerHandlers(CustomPageNumbers);
    }
  </script>
</head>
<body>
  <div class="toolbar no-print">
    <div>
      <strong>Patrimônio de Nioaque em 3D</strong> — Parte Retrato (A4) · DOI: 10.5281/zenodo.24353731<span id="apendice-page-info"></span>
    </div>
    <button class="btn-print" onclick="window.print()">Salvar / Imprimir PDF (Retrato)</button>
  </div>

  <main class="manual-container">
    <!-- CHAPTERS_START -->
${chaptersHtml}
    <!-- CHAPTERS_END -->
  </main>
</body>
</html>
`;

const landscapeHtml = landscapeBlocks
  .map((block, idx) => (idx === 0 ? block.replace(/class="page-landscape"/, 'class="avoid-break"') : block.replace(/class="page-landscape"/, 'class="page-break"')))
  .join('\n\n');

const landscapeTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Patrimônio de Nioaque em 3D — Apêndice A (Paisagem)</title>
  <link rel="stylesheet" href="./styles/theme.css" />
  <style>
    @page :first {
      counter-reset: page 104;
    }

    @page {
      size: A4 landscape;
      margin: 18mm 18mm 16mm 18mm;

      @top-left {
        content: "Manual Pedagógico IFMaker • Patrimônio de Nioaque em 3D";
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        font-size: 7.5pt;
        color: #065f46;
        font-weight: 600;
        vertical-align: bottom;
        border-bottom: 0.75pt solid #10b981;
        padding-bottom: 1pt;
        margin-bottom: 6pt;
      }

      @top-right {
        content: "| " counter(page);
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        font-size: 8pt;
        font-weight: 700;
        color: #065f46;
        vertical-align: bottom;
        border-bottom: 0.75pt solid #10b981;
        padding-bottom: 1pt;
        margin-bottom: 6pt;
      }

      @bottom-left {
        content: "DOI: 10.5281/zenodo.24353731";
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        font-size: 7.5pt;
        color: #64748b;
      }

      @bottom-right {
        content: none;
      }
    }

    .page-break {
      break-before: page;
      page-break-before: always;
    }

    .avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    @media screen {
      body {
        background: #e2e8f0;
        padding: 20px 12px 60px;
      }
      .toolbar {
        max-width: 297mm;
        margin: 0 auto 16px;
        background: #064e3b;
        color: #ecfdf5;
        padding: 10px 16px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        font-size: 13px;
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
      }
      .btn-print {
        background: #10b981;
        color: #022c22;
        border: none;
        border-radius: 6px;
        padding: 7px 14px;
        font-weight: 700;
        font-size: 12.5px;
        cursor: pointer;
        white-space: nowrap;
      }
      .manual-container {
        max-width: 297mm;
        margin: 0 auto;
        background: #ffffff;
        padding: 18mm 18mm;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16);
      }
      .pagedjs_pages .manual-container {
        max-width: none;
        margin: 0;
        background: transparent;
        padding: 0;
        box-shadow: none;
      }
    }

    @media print {
      .toolbar, .no-print {
        display: none !important;
      }
      body {
        background: #ffffff !important;
        padding: 0 !important;
      }
      .manual-container {
        max-width: 100%;
        padding: 0;
        box-shadow: none;
      }
      .pagedjs_pagebox,
      .pagedjs_area,
      .pagedjs_page_content {
        overflow: visible !important;
      }
    }
  </style>
  <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
  <script>
    if (window.Paged) {
      class LandscapePageNumbers extends Paged.Handler {
        afterRendered(pages) {
          const urlStart = parseInt(new URLSearchParams(window.location.search).get('start'), 10);
          let storedStart = NaN;
          try { storedStart = parseInt(localStorage.getItem('ifmaker_apendice_start'), 10); } catch (e) {}
          const baseStart = !Number.isNaN(urlStart) ? urlStart : (!Number.isNaN(storedStart) ? storedStart : 103);
          pages.forEach((p, idx) => {
            const num = baseStart + idx;
            const style = document.createElement('style');
            style.textContent = \`[data-page-number="\${idx + 1}"] .pagedjs_margin-top-right .pagedjs_margin-content::after { content: "| \${num}" !important; }\`;
            document.head.appendChild(style);
          });
        }
      }
      Paged.registerHandlers(LandscapePageNumbers);
    }
  </script>
</head>
<body>
  <div class="toolbar no-print">
    <div>
      <strong>Apêndice A — Rubricas, Guias e Fichas (A4 Paisagem)</strong> · DOI: 10.5281/zenodo.24353731
    </div>
    <button class="btn-print" onclick="window.print()">Salvar / Imprimir PDF (Paisagem)</button>
  </div>

  <main class="manual-container" style="counter-reset: page 103;">
${landscapeHtml}
  </main>
</body>
</html>
`;

fs.writeFileSync(indexPath, portraitTemplate, 'utf-8');
fs.writeFileSync(landscapePath, landscapeTemplate, 'utf-8');
console.log(`✅ Retrato compilado (${files.length} arquivos) em: ${indexPath}`);
console.log(`✅ Paisagem compilada (${landscapeBlocks.length} blocos) em: ${landscapePath}`);
