const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageBreak, Footer, Header, ImageRun, TextWrappingType,
  TextWrappingSide, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
  HorizontalPositionAlign, VerticalPositionAlign,
  TableOfContents
} = require('docx');
const fs = require('fs');

// ─── CORES CITIESOFT ───────────────────────────────────────────────────────
// tokens oficiais Citiesoft
const BLUE_500     = "146bfa";  // ct-blue-500 — cor principal da marca
const GRAY_800     = "212121";  // ct-gray-800 — texto body
const GRAY_300     = "7C7C7C";  // ct-gray-300 — H3 / texto secundário
const GRAY_100     = "C3C3C3";  // ct-gray-100 — divisores e bordas de tabela
const CT_BLACK     = "202020";  // base/black  — H1 e títulos principais

const BLUE_PRIMARY = BLUE_500;
const GRAY_BODY    = GRAY_800;
const BLACK        = CT_BLACK;

// ─── DIMENSÕES A4 em PIXELS para ImageRun ─────────────────────────────────
// Word usa 96 DPI → 1px = 9525 EMU
// A4 em DXA: 11906 x 16838 → EMU (×635): 7560310 x 10692130
// Pixels @ 96dpi: ÷ 9525 → 793.7 x 1122.5 px
const PAGE_W_PX = 794;
const PAGE_H_PX = 1123;

// ─── LER IMAGENS ──────────────────────────────────────────────────────────
const capaData = fs.readFileSync('/home/claude/CapaDoc.png');
const bgData   = fs.readFileSync('/home/claude/BackgroundPaginas.png');

// ─── BACKGROUND HEADER ────────────────────────────────────────────────────
// Imagem posicionada absolutamente no (0,0) cobrindo a página inteira
function makeBackgroundHeader(imageData) {
  return new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({
            data: imageData,
            type: "png",
            transformation: {
              width:  PAGE_W_PX,
              height: PAGE_H_PX,
            },
            floating: {
              horizontalPosition: {
                relative: HorizontalPositionRelativeFrom.PAGE,
                align: HorizontalPositionAlign.LEFT,
              },
              verticalPosition: {
                relative: VerticalPositionRelativeFrom.PAGE,
                align: VerticalPositionAlign.TOP,
              },
              allowOverlap: true,
              behindDocument: true,
              layoutInCell: true,
              wrap: {
                type: TextWrappingType.NONE,
                side: TextWrappingSide.BOTH_SIDES,
              },
            },
          }),
        ],
      }),
    ],
  });
}

// ─── HELPERS DE PARÁGRAFO ─────────────────────────────────────────────────
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    pageBreakBefore: true,
    spacing: { before: 400, after: 160 },
    children: [new TextRun({ text, bold: true, color: BLACK, font: "Aptos Display", size: 36 })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    children: [new TextRun({ text, bold: true, color: BLUE_PRIMARY, font: "Aptos Display", size: 28 })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, bold: true, color: GRAY_300, font: "Aptos Display", size: 24 })],
  });
}

function body(text) {
  return new Paragraph({
    spacing: { before: 80, after: 160, line: 360, lineRule: "auto" },
    children: [new TextRun({ text, color: GRAY_BODY, font: "Aptos", size: 22 })],
  });
}

function label(text) {
  return new Paragraph({
    spacing: { before: 120, after: 60, line: 360, lineRule: "auto" },
    children: [new TextRun({ text, bold: true, color: GRAY_BODY, font: "Aptos", size: 22 })],
  });
}

function bullet(text, boldPart = null) {
  const children = [];
  if (boldPart) {
    const idx = text.indexOf(boldPart);
    if (idx > -1) {
      if (idx > 0) children.push(new TextRun({ text: text.substring(0, idx), color: GRAY_BODY, font: "Aptos", size: 22 }));
      children.push(new TextRun({ text: boldPart, bold: true, color: GRAY_BODY, font: "Aptos", size: 22 }));
      const after = text.substring(idx + boldPart.length);
      if (after) children.push(new TextRun({ text: after, color: GRAY_BODY, font: "Aptos", size: 22 }));
    } else {
      children.push(new TextRun({ text, color: GRAY_BODY, font: "Aptos", size: 22 }));
    }
  } else {
    children.push(new TextRun({ text, color: GRAY_BODY, font: "Aptos", size: 22 }));
  }
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40, line: 360, lineRule: "auto" },
    children,
  });
}

function spacer() {
  return new Paragraph({ spacing: { before: 0, after: 80 }, children: [] });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_100, space: 1 } },
    spacing: { before: 160, after: 160 },
    children: [],
  });
}

// ─── TABELA ───────────────────────────────────────────────────────────────
function makeTable(headers, rows, colWidths) {
  const border = { style: BorderStyle.SINGLE, size: 1, color: GRAY_100 };
  const borders = { top: border, bottom: border, left: border, right: border };

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) =>
      new TableCell({
        borders,
        width: { size: colWidths[i], type: WidthType.DXA },
        shading: { fill: BLUE_PRIMARY, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "FFFFFF", font: "Aptos", size: 20 })] })],
      })
    ),
  });

  const dataRows = rows.map(row =>
    new TableRow({
      children: row.map((cell, i) =>
        new TableCell({
          borders,
          width: { size: colWidths[i], type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: cell, color: GRAY_BODY, font: "Aptos", size: 20 })] })],
        })
      ),
    })
  );

  return new Table({
    width: { size: colWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  });
}

// ─── CONTEÚDO DA CAPA (texto sobreposto) ──────────────────────────────────
// A capa já tem logo e infos da empresa na imagem.
// Adicionamos somente o título e metadados do documento com espaçamento
// para ficarem na área branca do meio da página.
function coverContent(docTitle, projectName, period) {
  return [
    // Espaço para descer o título até a área central da capa (~40% da página)
    ...Array(14).fill(null).map(() => spacer()),

    new Paragraph({
      spacing: { before: 0, after: 160 },
      children: [new TextRun({
        text: docTitle.toUpperCase(),
        bold: true,
        color: BLACK,
        font: "Aptos",
        size: 80,
      })],
    }),

    spacer(),

    new Paragraph({
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({ text: "Projeto: ", color: GRAY_BODY, font: "Aptos", size: 24 }),
        new TextRun({ text: projectName, bold: true, color: GRAY_BODY, font: "Aptos", size: 24 }),
      ],
    }),
    new Paragraph({
      spacing: { before: 40, after: 0 },
      children: [new TextRun({ text: period, color: GRAY_BODY, font: "Aptos", size: 24 })],
    }),
  ];
}
// ─── CONTRACAPA ───────────────────────────────────────────────────────────
function metaRow(label, value) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [
      new TextRun({ text: label + ": ", bold: true, color: GRAY_BODY, font: "Aptos", size: 22 }),
      new TextRun({ text: value, color: GRAY_BODY, font: "Aptos", size: 22 }),
    ],
  });
}

function backCoverContent(client, projectName, projectType, period) {
  return [
    // Espaço para descer até ~30% da página (abaixo do header da imagem)
    metaRow("Cliente", client),
    metaRow("Nome do Projeto", projectName),
    metaRow("Tipo de Projeto", projectType),
    metaRow("Período do Projeto", period),
  ];
}

// ─── SUMÁRIO ──────────────────────────────────────────────────────────────
function tocPage() {
  return [
    new Paragraph({
      spacing: { before: 400, after: 320 },
      children: [new TextRun({ text: "Sumário", bold: true, color: BLACK, font: "Aptos", size: 40 })],
    }),
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_100, space: 1 } },
      spacing: { before: 0, after: 320 },
      children: [],
    }),
    new TableOfContents("Sumário", {
      hyperlink: true,
      headingStyleRange: "1-3",
    }),
    // Nota orientativa
    new Paragraph({
      spacing: { before: 400, after: 0 },
      children: [new TextRun({ text: "Ao abrir no Word, clique com o botão direito no sumário e selecione Atualizar campo para gerar a numeração de páginas.", color: GRAY_300, font: "Aptos", size: 18, italics: true })],
    }),
  ];
}

// ─── PÁGINA DE HISTÓRICO DE VERSÕES ───────────────────────────────────────
function versionHistoryPage(rows) {
  return [
    new Paragraph({
      spacing: { before: 400, after: 320 },
      children: [new TextRun({ text: "Histórico de Versões", bold: true, color: BLACK, font: "Aptos", size: 40 })],
    }),
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_100, space: 1 } },
      spacing: { before: 0, after: 320 },
      children: [],
    }),
    makeTable(
      ["Versão", "Data", "Autor", "Descrição"],
      rows,
      [1200, 2000, 2500, 3326]
    ),
  ];
}



// ─── DOCUMENTO ────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  styles: {
    default: {
      document: { run: { font: "Aptos", size: 22, color: GRAY_BODY } },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Aptos Display", color: BLACK },
        paragraph: { spacing: { before: 400, after: 160 }, outlineLevel: 0, pageBreakBefore: true },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Aptos Display", color: BLUE_PRIMARY },
        paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Aptos Display", color: GRAY_300 },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 2 },
      },
    ],
  },
  sections: [
    // ── SEÇÃO 1: CAPA ──────────────────────────────────────────────────────
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 720, right: 1440, bottom: 720, left: 1440 },
        },
      },
      headers: { default: makeBackgroundHeader(capaData) },
      children: [
        ...coverContent(
          "Apostila de Uso\nde Software",
          "[Nome do Projeto]",
          "[Mês], [Ano]"
        ),
      ],
    },

    // ── SEÇÃO 2: CONTRACAPA ────────────────────────────────────────────────
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 2880, left: 1440 },
        },
      },
      headers: { default: makeBackgroundHeader(bgData) },
      children: [
        ...backCoverContent(
          "[Nome do Cliente]",
          "[Nome do Projeto]",
          "[Tipo de Projeto]",
          "[Período do Projeto]"
        ),
      ],
    },

    // ── SEÇÃO 3: SUMÁRIO + CONTEÚDO ────────────────────────────────────────
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 2880, left: 1440 },
        },
      },
      headers: { default: makeBackgroundHeader(bgData) },
      children: [
        // ── SUMÁRIO ─────────────────────────────────────────────────────
        ...tocPage(),
        pageBreak(),

        // ── CAPÍTULO 1 ──────────────────────────────────────────────────
        h1("1. [Título do Capítulo]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),

        h2("1.1 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),

        h2("1.2 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:"),
        bullet("Lorem ipsum dolor sit amet consectetur"),
        bullet("Adipiscing elit sed do eiusmod tempor"),
        bullet("Incididunt ut labore et dolore magna aliqua"),
        spacer(),

        h2("1.3 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident:"),
        spacer(),
        makeTable(
          ["[Coluna 1]", "[Coluna 2]", "[Coluna 3]"],
          [
            ["Lorem ipsum", "Dolor sit amet", "Consectetur"],
            ["Adipiscing elit", "Sed do eiusmod", "Tempor"],
            ["Incididunt ut", "Labore et dolore", "Magna aliqua"],
            ["Ut enim ad", "Minim veniam", "Quis nostrud"],
            ["Exercitation", "Ullamco laboris", "Nisi ut aliquip"],
          ],
          [2800, 3200, 3026]
        ),
        spacer(),

        // ── CAPÍTULO 2 ──────────────────────────────────────────────────
        h1("2. [Título do Capítulo]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),

        h2("2.1 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),

        h3("2.1.1 [Título do Subtópico]"),
        label("Passo a passo:"),
        bullet("Lorem ipsum dolor sit amet consectetur adipiscing elit."),
        bullet("Sed do eiusmod tempor incididunt ut labore et dolore."),
        bullet("Ut enim ad minim veniam quis nostrud exercitation."),
        bullet("Duis aute irure dolor in reprehenderit in voluptate."),
        bullet("Clique em ", "[Nome do Botão]"),
        spacer(),

        h3("2.1.2 [Título do Subtópico]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident sunt in culpa."),
        label("Passo a passo:"),
        bullet("Lorem ipsum dolor sit amet consectetur adipiscing."),
        bullet("Sed do eiusmod tempor incididunt ut labore et dolore."),
        bullet("Ut enim ad minim veniam quis nostrud exercitation."),
        bullet("Duis aute irure dolor reprehenderit in voluptate velit."),
        bullet("Clique em ", "[Nome do Botão]"),
        spacer(),

        h2("2.2 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip:"),
        bullet("Lorem ipsum: dolor sit amet consectetur adipiscing elit sed do eiusmod"),
        bullet("Tempor incididunt: ut labore et dolore magna aliqua ut enim"),
        bullet("Ad minim veniam: quis nostrud exercitation ullamco laboris nisi"),
        bullet("Ut aliquip: ex ea commodo consequat duis aute irure dolor"),
        spacer(),

        // ── CAPÍTULO 3 ──────────────────────────────────────────────────
        h1("3. [Título do Capítulo]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."),

        h2("3.1 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:"),
        bullet("Lorem ipsum: dolor sit amet consectetur adipiscing"),
        bullet("Sed do eiusmod: tempor incididunt ut labore et dolore"),
        bullet("Magna aliqua: ut enim ad minim veniam quis nostrud"),
        bullet("Exercitation: ullamco laboris nisi ut aliquip ex ea"),
        spacer(),

        h2("3.2 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),

        h3("3.2.1 [Título do Subtópico]"),
        label("Passo a passo:"),
        bullet("Lorem ipsum dolor sit amet consectetur adipiscing."),
        bullet("Sed do eiusmod tempor incididunt ut labore et dolore."),
        bullet("Ut enim ad minim veniam quis nostrud exercitation."),
        spacer(),

        h3("3.2.2 [Título do Subtópico]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident:"),
        label("Passo a passo:"),
        bullet("Lorem ipsum dolor sit amet consectetur adipiscing."),
        bullet("Sed do eiusmod tempor incididunt ut labore et dolore."),
        bullet("Ut enim ad minim veniam quis nostrud exercitation."),
        bullet("Clique em ", "[Nome do Botão]"),
        spacer(),

        h2("3.3 [Título da Seção]"),
        body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
        bullet("Lorem ipsum: dolor sit amet consectetur adipiscing elit"),
        bullet("Sed do eiusmod: tempor incididunt ut labore et dolore magna"),
        bullet("Ut enim ad: minim veniam quis nostrud exercitation ullamco"),
        bullet("Duis aute: irure dolor in reprehenderit in voluptate velit"),
        spacer(),
      ],
    },

    // ── SEÇÃO 4: HISTÓRICO DE VERSÕES (página isolada) ────────────────────
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 2880, left: 1440 },
        },
      },
      headers: { default: makeBackgroundHeader(bgData) },
      children: [
        ...versionHistoryPage([
          ["1.0", "[DD/MM/AAAA]", "[Autor]", "Documento inicial"],
        ]),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/claude/citiesoft_template_v2.docx", buffer);
  console.log("Documento gerado com sucesso.");
});
