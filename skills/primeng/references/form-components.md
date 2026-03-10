# Form Components — PrimeNG v19

## Tokens de Design Comuns a Todos os Form Fields

```
Border:           1px solid --p-form-field-border-color (surface-300)
Border radius:    6px (--p-border-radius-md)
Background:       white / --p-form-field-background
Color:            --p-form-field-color (surface-700)
Placeholder:      --p-form-field-placeholder-color (surface-500)
Focus border:     --p-primary-color
Invalid border:   red-400
Disabled bg:      surface-200, opacity 0.6
Shadow:           0 1px 2px 0 rgba(18,18,23,0.05)
Transition:       0.2s
```

### Tamanhos (aplicam a TODOS os inputs)
| Size | Classe | Font | Padding X | Padding Y |
|---|---|---|---|---|
| Small | `p-inputtext-sm` / `.p-select-sm` etc. | 0.875rem | 0.625rem | 0.375rem |
| Default | — | 1rem | 0.75rem | 0.5rem |
| Large | `p-inputtext-lg` / `.p-select-lg` etc. | 1.125rem | 0.875rem | 0.625rem |

### Variante Filled (todos os inputs)
- Adicionar `class="p-variant-filled"` no elemento ou configurar globalmente
- Background: `--p-form-field-filled-background` (surface-50)

---

## InputText

```typescript
import { InputTextModule } from 'primeng/inputtext';
```

```html
<!-- Default -->
<input pInputText type="text" placeholder="Digite aqui" />

<!-- Com FloatLabel -->
<p-floatlabel>
  <input pInputText id="nome" />
  <label for="nome">Nome</label>
</p-floatlabel>

<!-- Invalid -->
<input pInputText class="ng-invalid ng-dirty" />

<!-- Disabled -->
<input pInputText disabled />

<!-- Tamanhos -->
<input pInputText class="p-inputtext-sm" />
<input pInputText class="p-inputtext-lg" />

<!-- Full width -->
<input pInputText class="p-inputtext-fluid" />

<!-- Filled variant -->
<input pInputText class="p-variant-filled" />
```

---

## InputTextarea

```html
<textarea pInputTextarea rows="5" cols="30" placeholder="Observações"></textarea>
<textarea pInputTextarea [autoResize]="true"></textarea>
```

---

## InputNumber

```html
<p-inputnumber [(ngModel)]="valor" />
<p-inputnumber [(ngModel)]="preco" mode="currency" currency="BRL" locale="pt-BR" />
<p-inputnumber [(ngModel)]="qtd" [showButtons]="true" [min]="0" [max]="100" />
<p-inputnumber [(ngModel)]="pct" suffix="%" [minFractionDigits]="2" />
```

---

## InputMask

```html
<p-inputmask mask="999.999.999-99" placeholder="CPF" />
<p-inputmask mask="(99) 99999-9999" placeholder="Telefone" />
<p-inputmask mask="99/99/9999" placeholder="DD/MM/AAAA" />
```

---

## InputOtp (One-Time Password)

```html
<p-inputotp [(ngModel)]="otp" [length]="6" />
<p-inputotp [(ngModel)]="otp" [length]="6" [integerOnly]="true" />
```

---

## Password

```html
<p-password [(ngModel)]="senha" [feedback]="true" />
<p-password [(ngModel)]="senha" [toggleMask]="true" />
<p-password [(ngModel)]="senha" [feedback]="false" [toggleMask]="true" />
```

---

## Select (Dropdown)

```typescript
import { SelectModule } from 'primeng/select';
```

```html
<p-select
  [(ngModel)]="selecionado"
  [options]="opcoes"
  optionLabel="nome"
  placeholder="Selecione" />

<!-- Com filtro -->
<p-select [options]="opcoes" [filter]="true" filterPlaceholder="Buscar" />

<!-- Com template customizado -->
<p-select [options]="cidades">
  <ng-template #selectedItem let-item>
    <div class="flex items-center gap-2">
      <img [src]="item.flag" width="18" />
      <span>{{ item.name }}</span>
    </div>
  </ng-template>
</p-select>

<!-- Tamanhos -->
<p-select [options]="opcoes" size="small" />
<p-select [options]="opcoes" size="large" />

<!-- Full width -->
<p-select [options]="opcoes" [fluid]="true" />

<!-- Invalid -->
<p-select [options]="opcoes" [invalid]="true" />
```

### Tokens de design específicos
```
Dropdown icon area: 2.5rem
Overlay border-radius: 6px
Option hover bg: --p-select-option-focus-background
Option selected bg: --p-select-option-selected-background (primary, 10% opacity)
```

---

## MultiSelect

```html
<p-multiselect
  [(ngModel)]="selecionados"
  [options]="opcoes"
  optionLabel="nome"
  placeholder="Selecione"
  [maxSelectedLabels]="3"
  selectedItemsLabel="{0} selecionados" />

<p-multiselect [options]="opcoes" [filter]="true" [showClear]="true" />
```

---

## Checkbox

```html
<p-checkbox [(ngModel)]="ativo" [binary]="true" label="Ativo" />

<!-- Grupo -->
<div class="flex flex-col gap-2">
  @for (op of opcoes; track op) {
    <div class="flex items-center gap-2">
      <p-checkbox [(ngModel)]="selecionados" [value]="op.value" [inputId]="op.key" />
      <label [for]="op.key">{{ op.name }}</label>
    </div>
  }
</div>
```

### Tokens de design
```
Tamanho do checkbox:  1.25rem × 1.25rem
Border radius:        6px
Checked bg:           --p-primary-color
Border color:         surface-400
```

---

## RadioButton

```html
<div class="flex flex-col gap-2">
  @for (op of opcoes; track op) {
    <div class="flex items-center gap-2">
      <p-radiobutton [(ngModel)]="selecionado" [value]="op.value" [inputId]="op.key" />
      <label [for]="op.key">{{ op.name }}</label>
    </div>
  }
</div>
```

---

## ToggleSwitch (InputSwitch)

```html
<p-toggleswitch [(ngModel)]="ativo" />
<p-toggleswitch [(ngModel)]="ativo" [disabled]="true" />
```

### Tokens de design
```
Width:        3rem
Height:       1.75rem
Thumb size:   1.25rem × 1.25rem
Border radius: 2rem (pill)
On color:     --p-primary-color
Off color:    surface-300
```

---

## ToggleButton

```html
<p-togglebutton
  [(ngModel)]="checked"
  onLabel="Ativo"
  offLabel="Inativo"
  onIcon="pi pi-check"
  offIcon="pi pi-times" />
```

---

## SelectButton

```html
<p-selectbutton
  [(ngModel)]="selecionado"
  [options]="opcoes"
  optionLabel="label"
  optionValue="value" />

<!-- Múltipla seleção -->
<p-selectbutton [(ngModel)]="selecionados" [options]="opcoes" [multiple]="true" />
```

---

## DatePicker (Calendar)

```html
<p-datepicker [(ngModel)]="data" />
<p-datepicker [(ngModel)]="data" [showTime]="true" hourFormat="24" />
<p-datepicker [(ngModel)]="intervalo" selectionMode="range" [readonlyInput]="true" />
<p-datepicker [(ngModel)]="data" [inline]="true" />
<p-datepicker [(ngModel)]="data" dateFormat="dd/mm/yy" />
```

---

## AutoComplete

```html
<p-autocomplete
  [(ngModel)]="valor"
  [suggestions]="sugestoes"
  (completeMethod)="buscar($event)"
  placeholder="Digite para buscar" />

<!-- Múltiplos valores (chips) -->
<p-autocomplete [(ngModel)]="valores" [suggestions]="sugestoes" [multiple]="true" />
```

---

## FloatLabel

Wrapper para label flutuante em inputs.

```html
<p-floatlabel>
  <input pInputText id="nome" [(ngModel)]="nome" />
  <label for="nome">Nome completo</label>
</p-floatlabel>

<!-- Variante "on focus" -->
<p-floatlabel variant="on">
  <input pInputText id="email" />
  <label for="email">E-mail</label>
</p-floatlabel>

<!-- Variante "in" (sempre visível) -->
<p-floatlabel variant="in">
  <input pInputText id="cpf" />
  <label for="cpf">CPF</label>
</p-floatlabel>
```

---

## IconField

Input com ícone integrado.

```html
<p-iconfield>
  <p-inputicon class="pi pi-search" />
  <input pInputText placeholder="Buscar" />
</p-iconfield>

<!-- Ícone à direita -->
<p-iconfield iconPosition="right">
  <p-inputicon class="pi pi-spin pi-spinner" />
  <input pInputText placeholder="Carregando..." />
</p-iconfield>
```

---

## InputGroup

Agrupamento de inputs com addons.

```html
<p-inputgroup>
  <p-inputgroup-addon>@</p-inputgroup-addon>
  <input pInputText placeholder="Usuário" />
</p-inputgroup>

<p-inputgroup>
  <p-inputgroup-addon>R$</p-inputgroup-addon>
  <p-inputnumber [(ngModel)]="valor" />
  <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
  <input pInputText placeholder="URL" />
  <p-button label="Copiar" icon="pi pi-copy" />
</p-inputgroup>
```

---

## Slider

```html
<p-slider [(ngModel)]="valor" />
<p-slider [(ngModel)]="valor" [min]="0" [max]="100" [step]="10" />
<p-slider [(ngModel)]="intervalo" [range]="true" />
<p-slider [(ngModel)]="valor" orientation="vertical" [style]="{'height':'200px'}" />
```

---

## Knob

```html
<p-knob [(ngModel)]="valor" />
<p-knob [(ngModel)]="valor" [min]="0" [max]="100" valueTemplate="{value}%" />
<p-knob [(ngModel)]="valor" [size]="200" strokeWidth="5" />
```

---

## Rating

```html
<p-rating [(ngModel)]="nota" />
<p-rating [(ngModel)]="nota" [stars]="10" />
<p-rating [(ngModel)]="nota" [cancel]="false" />
<p-rating [(ngModel)]="nota" [readonly]="true" />
```

---

## ColorPicker

```html
<p-colorpicker [(ngModel)]="cor" />
<p-colorpicker [(ngModel)]="cor" [inline]="true" />
<p-colorpicker [(ngModel)]="cor" format="rgb" />
```

---

## TreeSelect

```html
<p-treeselect
  [(ngModel)]="selecionado"
  [options]="arvore"
  placeholder="Selecione" />

<p-treeselect
  [(ngModel)]="selecionados"
  [options]="arvore"
  selectionMode="checkbox"
  placeholder="Selecione múltiplos" />
```

---

## Listbox

```html
<p-listbox
  [(ngModel)]="selecionado"
  [options]="opcoes"
  optionLabel="nome" />

<p-listbox
  [(ngModel)]="selecionados"
  [options]="opcoes"
  [multiple]="true"
  [filter]="true"
  optionLabel="nome" />
```

---

## CascadeSelect

```html
<p-cascadeselect
  [(ngModel)]="selecionado"
  [options]="paises"
  optionLabel="cname"
  optionGroupLabel="name"
  [optionGroupChildren]="['states', 'cities']"
  placeholder="Selecione a cidade" />
```

---

## Editor (Rich Text)

```html
<p-editor [(ngModel)]="texto" [style]="{'height': '320px'}" />
```

---

## Padrões de Layout de Formulário

### Grid de 2 colunas (padrão de formulários internos)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex flex-col gap-1">
    <label class="font-medium text-sm">Nome</label>
    <input pInputText [(ngModel)]="nome" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="font-medium text-sm">CPF</label>
    <p-inputmask [(ngModel)]="cpf" mask="999.999.999-99" />
  </div>
</div>
```

### Mensagem de erro de validação
```html
<div class="flex flex-col gap-1">
  <label>E-mail</label>
  <input pInputText [class.ng-invalid]="emailInvalido" [class.ng-dirty]="emailInvalido" />
  @if (emailInvalido) {
    <small class="text-red-500">E-mail inválido</small>
  }
</div>
```

### Grupo de botões de ação (sempre no rodapé)
```html
<div class="flex justify-end gap-2 mt-4">
  <p-button label="Cancelar" severity="secondary" [text]="true" (onClick)="fechar()" />
  <p-button label="Salvar" icon="pi pi-check" (onClick)="salvar()" />
</div>
```
