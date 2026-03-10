---
name: design-system
description: Cria design systems completos e agnósticos de framework, com documentação detalhada de componentes, design tokens estruturados e arquivos prontos para importação no Figma via Variables JSON nativo. Use esta skill sempre que o usuário mencionar criação de design system, tokens de design, documentação de componentes UI, variáveis do Figma, dark mode / light mode, sistema de cores, tipografia sistematizada, ou quiser exportar tokens para o Figma. Também deve ser acionada quando o usuário mencionar qualquer combinação de componentes como Button, Input, Table, Dialog, Badge, Toast, etc., no contexto de padronização visual ou sistema de design.
---
# Design System Skill

Esta skill orienta a criação de um design system completo e agnóstico de framework, cobrindo desde os design tokens fundamentais até a documentação de cada componente — com entregáveis prontos para o Figma (formato nativo de Variables JSON) e documentação escrita no formato `.md`.

---

## Visão Geral dos Entregáveis

Para cada projeto de design system, gere os seguintes arquivos:

| Arquivo | Descrição |
|---|---|
| `tokens/primitives.tokens.json` | Paleta de cores brutas (não semântica), referenciada pelos temas |
| `tokens/Light.tokens.json` | Tokens semânticos do tema claro |
| `tokens/Dark.tokens.json` | Tokens semânticos do tema escuro |
| `tokens/<Tema>.tokens.json` | Um arquivo por tema adicional solicitado |
| `docs/design-system.md` | Documentação completa em Markdown |

> **Regra obrigatória:** Cada tema é sempre um arquivo `.tokens.json` separado. Nunca combine temas em um único arquivo.

---

## Etapa 1 — Coleta de Informações

Antes de gerar qualquer arquivo, colete do usuário:

1. **Nome do projeto** — usado como namespace nos tokens (ex: `acme`)
2. **Paleta de cores base** — cores primária, secundária, neutra, de feedback (success, warning, error, info). Se não fornecidas, gere uma paleta coerente e apresente para aprovação.
3. **Tipografia** — família(s) de fonte, escala de tamanhos, pesos. Se não fornecida, use Inter como padrão com escala modular 1.25.
4. **Raio de borda padrão** — sharp (0px), soft (4px), rounded (8px), pill (9999px).
5. **Lista de componentes solicitados** — use a lista completa abaixo como padrão se não especificado.
6. **Temas necessários** — Light e Dark como padrão; pergunte se há temas adicionais.
7. **Ícones** — verificar se o usuário tem uma biblioteca preferida (Phosphor, Lucide, Material, Feather) ou uma lista customizada.

Se o usuário já forneceu essas informações, pule para a Etapa 2.

---

## Etapa 2 — Formato Obrigatório dos Tokens JSON

> **CRÍTICO:** O Figma só lê tokens no formato nativo de Variables JSON descrito abaixo. Nunca use o formato Tokens Studio (`"value"` / `"type"` na raiz).

### Estrutura de cada token

Cada token (folha) deve ter exatamente 3 campos:

```json
"nomeDoToken": {
  "$type": "color",
  "$value": "{grupo.token}",
  "$extensions": {
    "com.figma.variableId": "VariableID:XXXX:YYYY",
    "com.figma.scopes": ["ALL_SCOPES"],
    "com.figma.isOverride": true
  }
}
```

### Dois formatos válidos para `$value`

**Referência (alias)** — usa quando o token aponta para outro token da paleta:
```json
"$value": "{primary.500}"
```

**Cor direta** — usa quando o token tem um valor fixo (geralmente nos primitivos):
```json
"$value": {
  "colorSpace": "srgb",
  "components": [0.06, 0.42, 0.98],
  "alpha": 1,
  "hex": "#0F6BFA"
}
```
> `components` são valores RGB normalizados de 0 a 1 (divida o valor hex por 255).

### Aninhamento de tokens

Tokens podem ser agrupados por aninhamento de objetos:

```json
{
  "surface": {
    "default": { "$type": "color", "$value": "{slate.50}", "$extensions": { ... } },
    "contrast": {
      "color": { "$type": "color", "$value": "{slate.900}", "$extensions": { ... } }
    }
  }
}
```

### IDs de variável

- O campo `"com.figma.variableId"` deve ser único por token.
- Tokens com o **mesmo nome semântico** em arquivos de temas diferentes devem ter o **mesmo `variableId`** — o Figma usa esse ID para vincular os modos.
- Use o padrão `VariableID:XXXX:YYYY` com números sequenciais.

---

## Etapa 3 — Arquivo de Primitivos

O arquivo `primitives.tokens.json` contém a paleta bruta de cores sem semântica. É referenciado pelos arquivos de tema via aliases `{grupo.escala}`.

### Regra Obrigatória — 4 Sub-Paletas por Cor

> **CRÍTICO:** Toda cor do design system deve gerar **exatamente 4 sub-paletas**. Esta regra se aplica a todas as cores: primária, secundária, neutros, feedback e qualquer cor adicional.

| Sub-paleta | Nome | Descrição | Mistura |
|---|---|---|---|
| **Hue Pure Color** | `{cor}.hue` | Paleta pura do matiz — varia luminosidade/saturação mantendo o tom | Variação HSL pura |
| **Tints** | `{cor}.tints` | Hue + Branco — vai do branco quase puro até a cor original | Hue × White `#FFFFFF` |
| **Tones** | `{cor}.tones` | Hue + Cinza — vai do cinza médio até a cor original | Hue × Grey `#808080` |
| **Shades** | `{cor}.shades` | Hue + Preto — vai da cor original até quase preto | Hue × Black `#000000` |

**Escala de cada sub-paleta:** 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

**Cálculo das misturas (interpolação linear):**
- **Tints:** `tints-N = ((N/1000) × Hue) + ((1 - N/1000) × White)` — 50 ≈ quase branco, 950 ≈ quase Hue
- **Tones:** `tones-N = ((N/1000) × Hue) + ((1 - N/1000) × Grey)` — 50 ≈ quase cinza, 950 ≈ quase Hue
- **Shades:** `shades-N = ((1 - N/1000) × Hue) + (N/1000 × Black)` — 50 ≈ quase Hue, 950 ≈ quase preto

**Estrutura JSON para cada grupo de cor:**

```json
{
  "primary": {
    "hill": {
      "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1000:1" } },
      "500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#146BFA" }, "$extensions": { "com.figma.variableId": "VariableID:1000:6" } },
      "950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1000:11" } }
    },
    "tints": {
      "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1010:1" } },
      "500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1010:6" } },
      "950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1010:11" } }
    },
    "tones": {
      "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1020:1" } },
      "950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1020:11" } }
    },
    "shades": {
      "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1030:1" } },
      "950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [...], "alpha": 1, "hex": "#..." }, "$extensions": { "com.figma.variableId": "VariableID:1030:11" } }
    }
  }
}
```

> **Convenção de IDs:** Reserve blocos de 20 IDs por sub-paleta (hill: ×1000, tints: ×1010, tones: ×1020, shades: ×1030) e avance 40 entre grupos de cor (primary: 1000, secondary: 1040, neutral: 1080, etc.).

```json
{
  "primary": {
    "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.94, 0.97, 1.0], "alpha": 1, "hex": "#F0F7FF" }, "$extensions": { "com.figma.variableId": "VariableID:1000:1", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "100": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.88, 0.94, 1.0], "alpha": 1, "hex": "#E0F0FF" }, "$extensions": { "com.figma.variableId": "VariableID:1000:2", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "500": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.06, 0.42, 0.98], "alpha": 1, "hex": "#0F6BFA" }, "$extensions": { "com.figma.variableId": "VariableID:1000:6", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "600": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.04, 0.33, 0.82], "alpha": 1, "hex": "#0A54D1" }, "$extensions": { "com.figma.variableId": "VariableID:1000:7", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.02, 0.10, 0.35], "alpha": 1, "hex": "#041A5A" }, "$extensions": { "com.figma.variableId": "VariableID:1000:10", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } }
  },
  "neutral": {
    "0":   { "$type": "color", "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1, "hex": "#FFFFFF" }, "$extensions": { "com.figma.variableId": "VariableID:1001:1", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "50":  { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.98, 0.98, 0.99], "alpha": 1, "hex": "#F8F9FC" }, "$extensions": { "com.figma.variableId": "VariableID:1001:2", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "900": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.09, 0.10, 0.12], "alpha": 1, "hex": "#17191F" }, "$extensions": { "com.figma.variableId": "VariableID:1001:10", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } },
    "950": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.05, 0.06, 0.08], "alpha": 1, "hex": "#0D0F14" }, "$extensions": { "com.figma.variableId": "VariableID:1001:11", "com.figma.scopes": ["ALL_SCOPES"], "com.figma.isOverride": true } }
  }
}
```

Gere as escalas 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 (e 950 para neutros) para cada grupo de cor.

---

## Etapa 4 — Arquivos de Tema (um por tema)

Cada tema é um arquivo separado (ex: `Light.tokens.json`, `Dark.tokens.json`). Os tokens semânticos referenciam a paleta primitiva via aliases.

**Tokens semânticos obrigatórios:**

| Token semântico | Light | Dark |
|---|---|---|
| `surface.default` | `{neutral.0}` | `{neutral.950}` |
| `surface.raised` | `{neutral.50}` | `{neutral.900}` |
| `surface.overlay` | `{neutral.100}` | `{neutral.800}` |
| `text.primary` | `{neutral.900}` | `{neutral.50}` |
| `text.secondary` | `{neutral.600}` | `{neutral.400}` |
| `text.disabled` | `{neutral.300}` | `{neutral.700}` |
| `border.default` | `{neutral.200}` | `{neutral.700}` |
| `border.strong` | `{neutral.400}` | `{neutral.500}` |
| `brand.default` | `{primary.500}` | `{primary.400}` |
| `brand.hover` | `{primary.600}` | `{primary.300}` |
| `brand.active` | `{primary.700}` | `{primary.200}` |
| `brand.text` | `{neutral.0}` | `{neutral.900}` |
| `feedback.success` | `{green.500}` | `{green.400}` |
| `feedback.warning` | `{yellow.500}` | `{yellow.400}` |
| `feedback.error` | `{red.500}` | `{red.400}` |
| `feedback.info` | `{blue.500}` | `{blue.400}` |

**Exemplo de `Light.tokens.json`:**

```json
{
  "surface": {
    "default": {
      "$type": "color",
      "$value": "{neutral.0}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:1",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    },
    "raised": {
      "$type": "color",
      "$value": "{neutral.50}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:2",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    }
  },
  "brand": {
    "default": {
      "$type": "color",
      "$value": "{primary.500}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:10",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    }
  }
}
```

**Exemplo de `Dark.tokens.json`** (mesmos `variableId`, valores diferentes):

```json
{
  "surface": {
    "default": {
      "$type": "color",
      "$value": "{neutral.950}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:1",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    },
    "raised": {
      "$type": "color",
      "$value": "{neutral.900}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:2",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    }
  },
  "brand": {
    "default": {
      "$type": "color",
      "$value": "{primary.400}",
      "$extensions": {
        "com.figma.variableId": "VariableID:2000:10",
        "com.figma.scopes": ["ALL_SCOPES"],
        "com.figma.isOverride": true
      }
    }
  }
}
```

---

## Etapa 5 — Documentação por Componente

Para **cada componente** da lista, documente com esta estrutura:

```markdown
## [Nome do Componente]

**Categoria:** Form / Button / Data / Panel / Overlay / File / Menu / Chart / Messages / Media / Misc / Utilities

### Descrição
O que o componente faz e quando usar.

### Anatomia
Liste os elementos visuais que compõem o componente (ex: label, input, icon, helper-text).

### Variantes
Liste todas as variantes (ex: filled, outlined, ghost; sizes: sm, md, lg).

### Estados
- Default
- Hover
- Focus / Active
- Disabled
- Loading (se aplicável)
- Error / Success (se aplicável)

### Design Tokens Utilizados
| Token | Valor (Light) | Descrição |
|---|---|---|
| `surface.default` | #FFFFFF | Fundo do componente |
| `border.default` | neutral.200 | Borda padrão |
| `brand.default` | primary.500 | Cor de destaque |

### Comportamento
Interações, animações, responsividade.

### Acessibilidade
ARIA roles, keyboard navigation, contraste mínimo (WCAG AA: 4.5:1).

### Uso Correto / Incorreto
✅ Faça isso
❌ Não faça isso
```

---

## Etapa 6 — Lista Completa de Componentes

Documente todos os componentes abaixo. Agrupe por categoria na documentação.

### Form (28 componentes)

AutoComplete, CascadeSelect, Checkbox, ColorPicker, DatePicker, Editor, FloatLabel, IconField, IftaLabel, InputGroup, InputMask, InputNumber, InputOTP, InputText, KeyFilter, Knob, ListBox, MultiSelect, Password, RadioButton, Rating, Select, SelectButton, Slider, TextArea, ToggleButton, ToggleSwitch, TreeSelect

### Buttons (3 componentes)

Button, SpeedDial, SplitButton

### Data (10 componentes)

DataView, OrderList, OrgChart, Paginator, PickList, Table, Timeline, Tree, TreeTable, VirtualScroller

### Panel (10 componentes)

Accordion, Card, Divider, Fieldset, Panel, ScrollPanel, Splitter, Stepper, Tabs, Toolbar

### Overlay (7 componentes)

ConfirmDialog, ConfirmPopup, Dialog, Drawer, DynamicDialog, Popover, Tooltip

### File (1 componente)

Upload

### Menu (8 componentes)

Breadcrumb, ContextMenu, Dock, Menu, Menubar, MegaMenu, PanelMenu, TieredMenu

### Chart (1 componente)

Chart.js (configuração de tokens para temas)

### Messages (2 componentes)

Message, Toast

### Media (4 componentes)

Carousel, Galleria, Image, ImageCompare

### Misc (20 componentes)

AnimateOnScroll, AutoFocus, Avatar, Badge, Bind, BlockUI, Chip, ClassNames, FocusTrap, Fluid, Inplace, MeterGroup, ProgressBar, ProgressSpinner, Ripple, ScrollTop, Skeleton, StyleClass, Tag, Terminal

### Utilities (1 componente)

FilterService

---

## Etapa 7 — Ícones

### Ícones Padrão do Sistema

| Nome do Token | Ícone | Uso |
|---|---|---|
| `icon.action.close` | × | Fechar modais, chips, tags |
| `icon.action.add` | + | Adicionar itens |
| `icon.action.remove` | − | Remover itens |
| `icon.action.edit` | ✏ | Editar conteúdo |
| `icon.action.delete` | 🗑 | Excluir permanentemente |
| `icon.action.search` | 🔍 | Campo de busca |
| `icon.action.filter` | ▼ | Filtros |
| `icon.action.sort` | ↕ | Ordenação |
| `icon.action.upload` | ↑ | Upload de arquivo |
| `icon.action.download` | ↓ | Download |
| `icon.nav.chevron-right` | › | Navegação / breadcrumb |
| `icon.nav.chevron-down` | ∨ | Dropdown / accordion |
| `icon.nav.menu` | ≡ | Menu hamburger |
| `icon.feedback.success` | ✓ | Confirmação |
| `icon.feedback.warning` | ⚠ | Alerta |
| `icon.feedback.error` | ✕ | Erro |
| `icon.feedback.info` | ℹ | Informação |

Recomende ao usuário uma biblioteca de ícones (padrão: **Phosphor Icons**) e documente como substituir por uma lista customizada se necessário.

---

## Checklist Final

Antes de entregar ao usuário, confirme:

- [ ] `tokens/primitives.tokens.json` — paleta bruta completa com **4 sub-paletas por cor**: `.hue`, `.tints`, `.tones`, `.shades` (50–950 cada)
- [ ] `tokens/Light.tokens.json` — tokens semânticos do tema claro
- [ ] `tokens/Dark.tokens.json` — tokens semânticos do tema escuro
- [ ] Um arquivo separado por tema adicional solicitado
- [ ] Mesmo `variableId` para tokens homônimos entre temas
- [ ] `$value` de cor direta usa objeto `{ colorSpace, components, alpha, hex }`
- [ ] `$value` de referência usa sintaxe `{grupo.token}`
- [ ] `docs/design-system.md` — documentação completa de todos os componentes
- [ ] Ícones padrão documentados
- [ ] Ícones do projeto documentados (se fornecidos)

---

## Notas Importantes

- **Formato nativo Figma:** use sempre `$type`, `$value` e `$extensions` com `com.figma.variableId`. Nunca use o formato Tokens Studio (`"value"` / `"type"` na raiz).
- **Um arquivo por tema:** nunca combine temas em um único JSON. Se forem 4 temas, gere 4 arquivos `.tokens.json`.
- **IDs vinculam modos:** tokens com o mesmo nome em temas diferentes devem compartilhar o mesmo `com.figma.variableId`.
- **Primitivos separados:** a paleta bruta fica em `primitives.tokens.json`. Os temas só contêm tokens semânticos que referenciam os primitivos.
- **Acessibilidade:** todo token semântico de texto deve garantir contraste mínimo de 4.5:1 (WCAG AA) sobre a superfície correspondente.
