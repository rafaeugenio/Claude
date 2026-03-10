---
name: primeng
description: >
  Use esta skill SEMPRE que o usuário pedir para criar, gerar ou desenhar telas, interfaces,
  componentes visuais, formulários, dashboards, listagens ou qualquer elemento de UI para
  sistemas Angular. Acione também quando o usuário mencionar "tela de", "componente de",
  "layout de", "design de", "formulário de", "tabela de", "modal de", "menu de", "dashboard",
  "listagem" ou qualquer pedido de construção visual em Angular. A skill garante que TODOS
  os componentes gerados sigam exatamente o design system do PrimeNG v19 — tokens de design,
  tipografia, espaçamentos, bordas, sombras, padding, margin e variações documentadas
  na biblioteca oficial. Nunca crie CSS customizado quando existir token ou classe PrimeNG
  equivalente. Esta skill deve ser a referência primária para qualquer decisão de UI em Angular.
---
# PrimeNG v19 — Design System Completo

Referência definitiva de design para UIs em Angular usando PrimeNG v19.
Todos os componentes devem seguir os tokens, classes e padrões desta documentação.

## Quando usar esta skill

- Criar telas, layouts, formulários, modals, dashboards
- Gerar código HTML/Angular com componentes PrimeNG
- Definir espaçamento, tipografia, cores ou bordas de qualquer UI
- Decidir qual componente usar para um caso de uso específico

---

## Setup obrigatório

```bash
npm install primeng @primeng/themes
```

```typescript
// app.config.ts
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Aura } })
  ]
};
```

---

## Design Tokens Globais

### Tipografia
```
Font family:  "Inter var", system-ui, sans-serif
Font features: "cv02", "cv03", "cv04", "cv11"
Line height:  1.2 (headings), 1.5 (body)
Weight body:  400
Weight heading: 600
```

### Escala de Border Radius
```
--p-border-radius-none: 0
--p-border-radius-xs:   2px
--p-border-radius-sm:   4px
--p-border-radius-md:   6px   ← forms, buttons, tags
--p-border-radius-lg:   8px
--p-border-radius-xl:   12px  ← cards, dialogs, overlays
```

### Escala de Tamanho de Fonte (componentes)
```
sm:  0.875rem  (14px)
md:  1rem      (16px) ← padrão
lg:  1.125rem  (18px)
```

### Padding de Form Fields (InputText, Select, etc.)
```
sm:  padding-x 0.625rem | padding-y 0.375rem
md:  padding-x 0.75rem  | padding-y 0.5rem   ← padrão
lg:  padding-x 0.875rem | padding-y 0.625rem
```

### Sombras
```
Sutil (card):    0 1px 3px 0 rgba(0,0,0,0.1)
Overlay (panel): 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)
Modal (dialog):  0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)
Form field:      0 1px 2px 0 rgba(18,18,23,0.05)
```

### Transições
```
Duration:   0.2s
Properties: background, color, border-color, outline-color, box-shadow
```

### Opacidade de estados
```
Disabled: 0.6
```

### Focus Ring
```
Width:  1px solid
Offset: 2px
Color:  --p-primary-color
```

### Dark Mode
Ativar com classe `.p-dark` no `<html>` ou elemento raiz.
Superfícies mudam de `slate` (light) para `zinc` (dark) automaticamente.

---

## Presets disponíveis

| Preset | Estilo |
|---|---|
| **Aura** | Moderno, clean — recomendado para sistemas |
| **Material** | Material Design |
| **Lara** | Tradicional |
| **Nora** | Minimalista |

Substituir `Aura` por outro preset no `app.config.ts` muda o visual global.

---

## Catálogo de Componentes

### Formulários / Inputs
→ Ver `references/form-components.md`
- InputText, InputNumber, InputMask, InputOtp, InputTextarea
- Select (Dropdown), MultiSelect, CascadeSelect, TreeSelect, Listbox
- Checkbox, RadioButton, ToggleSwitch, ToggleButton, SelectButton
- DatePicker (Calendar), ColorPicker, Slider, Knob, Rating
- Password, AutoComplete, Editor
- FloatLabel, IconField, InputGroup

### Botões
→ Ver `references/button-components.md`
- Button (todos os severity e styles)
- SplitButton, SpeedDial

### Dados / Listagens
→ Ver `references/data-components.md`
- Table (DataTable) — sorting, filtering, pagination, selection, expand
- DataView, Paginator, VirtualScroller
- OrderList, PickList
- Tree, TreeTable, OrgChart, Timeline

### Layout / Painéis
→ Ver `references/layout-components.md`
- Card, Panel, Fieldset, Accordion
- Tabs, Stepper, Splitter, Divider
- ScrollPanel, Toolbar, DeferredContent

### Overlays
→ Ver `references/overlay-components.md`
- Dialog, DynamicDialog, ConfirmDialog, ConfirmPopup
- Drawer (Sidebar), Popover (OverlayPanel)
- Tooltip

### Navegação / Menus
→ Ver `references/navigation-components.md`
- Menu, Menubar, MegaMenu, TieredMenu, ContextMenu
- PanelMenu, Steps, TabMenu, Breadcrumb, Dock

### Notificações
→ Ver `references/overlay-components.md`
- Toast, Message

### Mídia
- Carousel, Galleria, Image, Chart

### Utilitários / Display
→ Ver `references/display-components.md`
- Avatar, AvatarGroup, Badge, Chip, Tag
- ProgressBar, ProgressSpinner, Skeleton
- Inplace, BlockUI, ScrollTop, Terminal
- AnimateOnScroll, FocusTrap

---

## Regras de Design — SEMPRE seguir

1. **Border radius de forms**: sempre `6px` (`--p-border-radius-md`)
2. **Border radius de cards/dialogs**: sempre `12px` (`--p-border-radius-xl`)
3. **Padding padrão de formulários**: `0.75rem / 0.5rem` (x/y)
4. **Padding de cards**: `1.25rem` em todos os lados
5. **Transição**: sempre `0.2s` para hover/focus states
6. **Focus ring**: `1px solid` com `2px` de offset
7. **Disabled**: sempre `opacity: 0.6`
8. **Fontes**: sempre "Inter var" — nunca Arial, Roboto, ou outra
9. **Cores**: sempre via tokens `--p-primary-*`, `--p-surface-*`, nunca hardcoded
10. **Tamanhos de componentes**: usar apenas `sm`, default, `lg` — sem tamanhos customizados
11. **Dark mode**: usar `.p-dark` — nunca criar lógica de dark mode manual
12. **Classes utilitárias**: preferir `.p-component-fluid` para full-width ao invés de `width: 100%`

---

## Guia de escolha de componente

| Caso de uso | Componente |
|---|---|
| Campo de texto simples | `InputText` |
| Campo de texto longo | `InputTextarea` |
| Seleção única de opção | `Select` |
| Seleção múltipla | `MultiSelect` |
| Sim/Não (toggle) | `ToggleSwitch` |
| Data/hora | `DatePicker` |
| Número com incremento | `InputNumber` |
| Senha | `Password` |
| Busca com sugestões | `AutoComplete` |
| Listar dados tabulares | `Table` |
| Cards de produtos/itens | `DataView` |
| Ações de confirmação | `ConfirmDialog` |
| Formulário em etapas | `Stepper` |
| Conteúdo em abas | `Tabs` |
| Menu lateral | `Drawer` |
| Notificação temporária | `Toast` |
| Mensagem inline | `Message` |
| Dica ao hover | `Tooltip` |
| Painel colapsável | `Accordion` |
| Status/label | `Tag` |
| Contagem | `Badge` |
| Carregando | `ProgressSpinner` ou `Skeleton` |
| Avatar de usuário | `Avatar` |
