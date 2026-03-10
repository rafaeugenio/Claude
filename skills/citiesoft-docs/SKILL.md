---
name: citiesoft-docs
description: >
  Gera documentos Word (.docx) padronizados da Citiesoft — apostilas de uso de software,
  manuais técnicos e documentações de projeto. Use esta skill SEMPRE que o usuário pedir
  para criar, gerar ou montar qualquer documento, apostila, manual ou relatório da Citiesoft
  ou para um cliente da Citiesoft. Também acione quando o usuário mencionar termos como
  "gerar apostila", "criar manual", "documentação do projeto", "apostila do [sistema]",
  "documento para o cliente", ou qualquer combinação de cliente (ALEMA, SES, Saquarema, etc.)
  com tipo de documento. A skill já contém os backgrounds de capa e páginas, as cores oficiais
  da marca, a tipografia e toda a estrutura padrão — basta receber o conteúdo real do documento.
---

# Citiesoft Docs — Gerador de Documentos Word

Gera arquivos `.docx` padronizados seguindo as diretrizes visuais e editoriais da Citiesoft.
O script base já inclui backgrounds, paleta de cores oficial, tipografia e estrutura de seções.

## Quando usar esta skill

- Usuário pede para criar apostila, manual, documentação, relatório
- Usuário menciona um cliente (ALEMA, SES, Saquarema, etc.) + tipo de documento
- Usuário quer gerar um `.docx` com padrão Citiesoft

---

## Fluxo de trabalho

```
1. Coletar informações do documento (ver seção "Dados necessários")
2. Ler assets/template_base.js (script gerador base)
3. Ler o /citiesoft_template_final.docx e usar ele como documento base
3. Adaptar o script com o conteúdo real fornecido pelo usuário
4. Executar o script Node.js para gerar o .docx novo
5. Validar e entregar o arquivo
```

**SEMPRE leia `assets/template_base.js` antes de gerar qualquer documento.**
Ele contém o script completo com todas as funções, estilos e configurações prontas.
Você só precisa substituir o conteúdo das seções, nunca reescrever do zero.

---

## Dados necessários

Antes de gerar, confirme com o usuário:

| Campo | Placeholder no template | Exemplo |
|---|---|---|
| Título do documento | `[Título do Documento]` | Apostila de Uso de Software |
| Nome do cliente | `[Nome do Cliente]` | Assembleia Legislativa do Maranhão (ALEMA) |
| Nome do projeto | `[Nome do Projeto]` | ALEMALEGIS |
| Tipo de projeto | `[Tipo de Projeto]` | Nova Arquitetura |
| Período | `[Período do Projeto]` | 1º semestre de 2026 |
| Mês/Ano da capa | `[Mês], [Ano]` | Janeiro, 2026 |
| Conteúdo dos capítulos | — | fornecido pelo usuário |

Se algum dado não for fornecido, use o placeholder padrão `[Campo]` e avise o usuário.

---

## Estrutura do documento gerado

Todo documento Citiesoft segue esta ordem de seções obrigatórias:

```
Seção 1 — CAPA          (background: CapaDoc.png)
Seção 2 — CONTRACAPA    (background: BackgroundPaginas.png)
Seção 3 — SUMÁRIO + CONTEÚDO  (background: BackgroundPaginas.png)
Seção 4 — HISTÓRICO DE VERSÕES  (background: BackgroundPaginas.png, página isolada)
```

A seção de Sumário usa campo TOC nativo do Word — o usuário deve clicar em
"Atualizar campo" ao abrir o arquivo para gerar a paginação.

---

## Regras tipográficas e de formatação

> **IMPORTANTE — half-points vs pt**: o docx.js usa `size` em **half-points** (Word padrão).
> Para converter: `size` ÷ 2 = pt real. Exemplo: `size: 22` = 11pt, `size: 36` = 18pt.
> Os valores abaixo mostram ambos: `size` (half-points para o código) e pt real (referência visual).

### Hierarquia de títulos

| Nível | Função              | Cor                     | `size` (half-pts) | pt real       | Comportamento                  |
| ----- | ------------------- | ----------------------- | ----------------- | ------------- | ------------------------------ |
| H1    | Título de capítulo  | `#202020` (base/black)  | `36`              | **18pt** bold | **Sempre quebra página antes** |
| H2    | Título de seção     | `#146bfa` (ct-blue-500) | `28`              | **14pt** bold | Flui na página                 |
| H3    | Título de subtópico | `#7C7C7C` (ct-gray-300) | `24`              | **12pt** bold | Flui na página                 |

> **Regra de quebra de página**: APENAS o H1 quebra página. H2 e H3 nunca quebram.
> A quebra é automática via `pageBreakBefore: true` no estilo — não use `PageBreak` manual entre capítulos.

### Espaçamentos dos títulos (valores em DXA — 1440 DXA = 1 inch)

| Nível | `spacing.before` | `spacing.after` | Origem (EMU ÷ 635) |
|---|---|---|---|
| H1 | `400` | `160` | 254000 / 101600 EMU |
| H2 | `320` | `120` | 203200 / 76200 EMU |
| H3 | `240` | `80` | 152400 / 50800 EMU |

### Texto e listas

- **Body**: Aptos `size: 22` (11pt real), cor `#212121` (ct-gray-800)
  - Espaçamento: `{ before: 80, after: 160, line: 360, lineRule: "auto" }` (1.5x)
- **Label "Passo a passo:"**: igual ao body mas `bold: true` — `{ before: 120, after: 60, line: 360, lineRule: "auto" }`
- **Bullet points**: `●` (U+25CF) nível 0, `○` nível 1, `■` nível 2 — via `numbering config` com `LevelFormat.BULLET`
  - Espaçamento bullet: `{ before: 40, after: 40, line: 360, lineRule: "auto" }`
  - Indent: `{ left: 720, hanging: 360 }`
- **Negrito inline**: usar `TextRun` com `bold: true` para nomes de campos, botões e ações

### Títulos especiais (capa e seções fixas)

| Elemento | `size` (half-pts) | pt real | Cor | Bold |
|---|---|---|---|---|
| Título principal da capa (ex: "APOSTILA DE USO DE SOFTWARE") | `80` | **40pt** | `#202020` | Sim |
| Metadados da capa (Projeto, Data) | `24` | **12pt** | `#212121` | parcial |
| "Sumário" e "Histórico de Versões" | `40` | **20pt** | `#202020` | Sim |
| Cabeçalho de tabela | `20` | **10pt** | `#FFFFFF` | Sim |
| Texto de célula de tabela | `20` | **10pt** | `#212121` | Não |
| Nota do sumário (instrução italics) | `18` | **9pt** | `#7C7C7C` | Não |

### Tabelas

- Cabeçalho: `#146bfa` com texto branco bold
- Bordas: `#C3C3C3` (ct-gray-100), `BorderStyle.SINGLE`, size 1
- Sempre usar `WidthType.DXA` — nunca `WidthType.PERCENTAGE`
- Sempre definir `columnWidths` no Table E `width` em cada TableCell (dual width obrigatório)
- Margem interna das células: `{ top: 80, bottom: 80, left: 120, right: 120 }`
- `ShadingType.CLEAR` — nunca `SOLID`

### Divisores

- Usar `BorderStyle.SINGLE`, size 4, cor `#C3C3C3` na borda inferior do parágrafo
- Nunca usar Table como divisor

---

## Paleta de cores oficial Citiesoft

```javascript
const BLUE_500  = "146bfa";  // ct-blue-500 — cor principal da marca (azul primário)
const GRAY_800  = "212121";  // ct-gray-800 — texto body
const GRAY_300  = "7C7C7C";  // ct-gray-300 — H3 / texto secundário
const GRAY_100  = "C3C3C3";  // ct-gray-100 — divisores e bordas de tabela
const CT_BLACK  = "202020";  // base/black  — H1 e títulos principais
```

**Regra**: sempre que usar azul, usar `ct-blue-500` (`#146bfa`). É a cor da marca.

---

## Backgrounds (assets)

Os dois arquivos PNG estão em `assets/` e já são lidos pelo `template_base.js`:

| Arquivo | Uso | Conteúdo visual |
|---|---|---|
| `assets/CapaDoc.png` | **Seção 1 — capa apenas** | Cabeçalho no **topo** (logo Citiesoft + contato + linha azul) + adorno 3D azul no **rodapé** |
| `assets/BackgroundPaginas.png` | **Todas as demais páginas** (contracapa, conteúdo, histórico) | Cabeçalho no **rodapé** (logo Citiesoft + contato + linha azul) — área central e topo em branco |

A imagem é inserida via `Header` com `floating` e `behindDocument: true`.
O tamanho correto em pixels para cobrir a página A4 inteira é **794 × 1123 px**
(conversão: EMU A4 ÷ 9525 EMU/px @ 96 DPI).

> **Nunca altere os arquivos PNG.** A proporção é compatível com A4 (diferença de 0.08%).
> Se o usuário trouxer novos backgrounds, substitua os arquivos em `assets/` mantendo os nomes.

---

## Margens de página

Valores em **DXA** (1440 DXA = 1 inch). Confirmados na análise do template real (EMU ÷ 635).

```javascript
// Capa (Seção 1) — margem vertical reduzida para background ocupar mais área
// top: 457200 EMU ÷ 635 = 720 DXA (0.5 in)
margin: { top: 720, right: 1440, bottom: 720, left: 1440 }

// Demais seções (contracapa, conteúdo, histórico)
// top: 914400 EMU ÷ 635 = 1440 DXA (1 in)
// bottom: 1828800 EMU ÷ 635 = 2880 DXA (2 in) — espaço para o rodapé do BackgroundPaginas
margin: { top: 1440, right: 1440, bottom: 2880, left: 1440 }
```

---

## Como adaptar o template_base.js

O script em `assets/template_base.js` já tem tudo pronto. Para gerar um novo documento:

1. **Leia o script** com a ferramenta `view`
2. **Copie para `/home/claude/`** e renomeie (ex: `citiesoft_novo_doc.js`)
3. **Substitua apenas**:
   - Dados da capa: `coverContent("Título", "Projeto", "Mês, Ano")`
   - Dados da contracapa: `backCoverContent("Cliente", "Projeto", "Tipo", "Período")`
   - Conteúdo dos capítulos na Seção 3 (usando as funções `h1`, `h2`, `h3`, `body`, `bullet`, `label`, `makeTable`)
   - Linha de dados do histórico de versões em `versionHistoryPage([...])`
4. **Execute**: `node citiesoft_novo_doc.js`
5. **Valide**: `python3 /mnt/skills/public/docx/scripts/office/validate.py arquivo.docx`
6. **Entregue** copiando para `/mnt/user-data/outputs/`

---

## Funções disponíveis no template

```javascript
h1("Título")                    // capítulo — quebra página antes
h2("Título")                    // seção
h3("Título")                    // subtópico
body("Texto")                   // parágrafo body com espaçamento 1.5
label("Passo a passo:")         // label bold antes de lista
bullet("Texto")                 // item de lista
bullet("Texto com ", "Botão")   // item com parte em negrito
makeTable(headers, rows, widths) // tabela com cabeçalho azul
spacer()                        // espaço vertical
divider()                       // linha divisória cinza
pageBreak()                     // quebra manual (evitar — use h1 para capítulos)
```

---

## Convenções de conteúdo

- **Placeholders**: sempre no formato `[Nome do Campo]` em maiúscula inicial
- **Lorem ipsum**: usar para conteúdo de template/exemplo — nunca conteúdo de outro projeto
- **"Passo a passo:"** em negrito SEMPRE antes de qualquer lista de procedimentos
- **Negrito inline**: nomes de botões, campos e ações do sistema (ex: `"Clique em ", "Salvar"`)
- **Capítulos**: sempre numerados (1., 2., 3.)
- **Seções**: sempre numeradas hierarquicamente (1.1, 1.2, 2.1)
- **Subtópicos**: sempre numerados em três níveis (1.1.1, 2.1.2)

---

## Checklist de entrega

Antes de entregar o `.docx`, verifique:

- [ ] Validação passou (`All validations PASSED`)
- [ ] Capa com `CapaDoc.png` cobrindo a página inteira
- [ ] Contracapa com `BackgroundPaginas.png` e metadados alinhados ao topo
- [ ] Sumário presente (campo TOC)
- [ ] Todo H1 abre em nova página
- [ ] H2 e H3 fluem sem quebrar
- [ ] Histórico de Versões em página isolada (última seção)
- [ ] Espaçamento 1.5 em body e bullets
- [ ] Nenhum conteúdo de outro projeto vazou no template
