# Button Components — PrimeNG v19

## Button

### Import
```typescript
import { ButtonModule } from 'primeng/button';
// ou standalone:
import { Button } from 'primeng/button';
```

### Anatomy
```html
<p-button label="Texto" icon="pi pi-check" />
<!-- ou diretiva: -->
<button pButton label="Texto"></button>
```

### Severities (cores)
| Severity | Uso |
|---|---|
| *(padrão)* primary | Ação principal da tela |
| `secondary` | Ação secundária |
| `success` | Confirmação, salvar |
| `info` | Informativo |
| `warn` | Atenção, alerta |
| `danger` | Excluir, ação destrutiva |
| `help` | Ajuda |
| `contrast` | Alto contraste |

```html
<p-button label="Primary" />
<p-button label="Secondary" severity="secondary" />
<p-button label="Success" severity="success" />
<p-button label="Info" severity="info" />
<p-button label="Warning" severity="warn" />
<p-button label="Danger" severity="danger" />
<p-button label="Help" severity="help" />
<p-button label="Contrast" severity="contrast" />
```

### Estilos (variants)
| Prop | Classe | Visual |
|---|---|---|
| *(padrão)* | — | Filled (fundo sólido) |
| `[outlined]="true"` | `.p-button-outlined` | Só borda |
| `[text]="true"` | `.p-button-text` | Sem fundo e borda |
| `[link]="true"` | `.p-button-link` | Estilo link |
| `[raised]="true"` | `.p-button-raised` | Com sombra |
| `[rounded]="true"` | `.p-button-rounded` | Pill shape (border-radius: 2rem) |

### Tamanhos
| Prop | Classe | Font | Padding X | Padding Y |
|---|---|---|---|---|
| `size="small"` | `.p-button-sm` | 0.875rem | 0.625rem | 0.375rem |
| *(padrão)* | — | 1rem | 0.75rem | 0.5rem |
| `size="large"` | `.p-button-lg` | 1.125rem | 0.875rem | 0.625rem |

### Design Tokens
```
Border radius:     6px  (--p-button-border-radius)
Rounded radius:    2rem (--p-button-rounded-border-radius)
Icon/label gap:    0.5rem
Transition:        0.2s
Focus ring width:  1px solid, 2px offset
Disabled opacity:  0.6
```

### Variações especiais
```html
<!-- Apenas ícone -->
<p-button icon="pi pi-search" [rounded]="true" [outlined]="true" />

<!-- Ícone + label -->
<p-button label="Salvar" icon="pi pi-check" />

<!-- Ícone à direita -->
<p-button label="Próximo" icon="pi pi-arrow-right" iconPos="right" />

<!-- Loading state -->
<p-button label="Salvando..." [loading]="true" />

<!-- Full width -->
<p-button label="Entrar" [fluid]="true" />

<!-- Com badge -->
<p-button label="Mensagens" badge="8" />

<!-- Layout vertical (ícone sobre texto) -->
<p-button label="Upload" icon="pi pi-upload" iconPos="top" />
```

### CSS Classes de referência
```
.p-button               Elemento raiz
.p-button-label         Texto do botão
.p-button-icon          Ícone do botão
.p-button-icon-right    Ícone posicionado à direita
.p-button-vertical      Layout vertical
.p-button-fluid         Largura total
.p-button-icon-only     Apenas ícone (quadrado)
```

---

## SplitButton

Botão com ação primária + dropdown de opções adicionais.

```html
<p-splitButton
  label="Salvar"
  icon="pi pi-check"
  [model]="items"
  severity="success" />
```

```typescript
items = [
  { label: 'Salvar como rascunho', icon: 'pi pi-file' },
  { label: 'Exportar PDF', icon: 'pi pi-file-pdf' },
  { separator: true },
  { label: 'Excluir', icon: 'pi pi-trash' },
];
```

---

## SpeedDial

FAB (Floating Action Button) com opções radiais ou lineares.

```html
<p-speedDial
  [model]="items"
  direction="up"
  [transitionDelay]="80"
  showIcon="pi pi-bars"
  hideIcon="pi pi-times" />
```

Direções: `up`, `down`, `left`, `right`, `up-left`, `up-right`, `down-left`, `down-right`
