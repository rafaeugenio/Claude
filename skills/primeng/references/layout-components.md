# Layout & Panel Components — PrimeNG v19

## Card

Contêiner de conteúdo com sombra e borda arredondada.

### Tokens de design
```
Background:    white / --p-content-background
Border radius: 12px (--p-border-radius-xl)
Shadow:        0 1px 3px 0 rgba(0,0,0,0.1)
Body padding:  1.25rem
Body gap:      0.5rem (entre título e conteúdo)
Caption gap:   0.5rem (entre título e subtítulo)
Title size:    1.25rem, weight 500
Subtitle color: --p-text-muted-color (surface-500)
```

### Uso
```html
<p-card header="Título do Card" subheader="Subtítulo">
  <p>Conteúdo do card aqui.</p>
  <ng-template #footer>
    <div class="flex gap-2 justify-end">
      <p-button label="Cancelar" severity="secondary" [text]="true" />
      <p-button label="Salvar" />
    </div>
  </ng-template>
</p-card>

<!-- Card com imagem no header -->
<p-card>
  <ng-template #header>
    <img src="imagem.jpg" class="w-full" />
  </ng-template>
  <p>Conteúdo do card.</p>
</p-card>
```

---

## Panel

Painel com cabeçalho e opção de colapso.

```html
<p-panel header="Informações pessoais">
  <p>Conteúdo do painel.</p>
</p-panel>

<!-- Colapsável -->
<p-panel header="Filtros" [toggleable]="true" [collapsed]="false">
  <p>Conteúdo colapsável.</p>
</p-panel>

<!-- Com ações no header -->
<p-panel>
  <ng-template #header>
    <div class="flex items-center gap-2">
      <span class="font-bold">Personalizado</span>
    </div>
  </ng-template>
  <ng-template #icons>
    <p-button icon="pi pi-cog" [rounded]="true" [text]="true" size="small" />
  </ng-template>
  Conteúdo.
</p-panel>
```

### Tokens de design
```
Header padding:  1rem 1.25rem
Content padding: 1.25rem
Border:          1px solid surface-200
Border radius:   12px
```

---

## Fieldset

Agrupa conteúdo relacionado de formulário.

```html
<p-fieldset legend="Endereço">
  <div class="grid grid-cols-2 gap-4">
    <input pInputText placeholder="CEP" />
    <input pInputText placeholder="Cidade" />
  </div>
</p-fieldset>

<!-- Colapsável -->
<p-fieldset legend="Dados bancários" [toggleable]="true">
  <!-- conteúdo -->
</p-fieldset>
```

---

## Accordion

Grupos de conteúdo colapsáveis empilhados.

```html
<p-accordion>
  <p-accordionpanel value="0">
    <p-accordionheader>Seção 1</p-accordionheader>
    <p-accordioncontent>
      <p>Conteúdo da seção 1.</p>
    </p-accordioncontent>
  </p-accordionpanel>
  <p-accordionpanel value="1">
    <p-accordionheader>Seção 2</p-accordionheader>
    <p-accordioncontent>
      <p>Conteúdo da seção 2.</p>
    </p-accordioncontent>
  </p-accordionpanel>
</p-accordion>

<!-- Múltiplo aberto -->
<p-accordion [multiple]="true" [value]="['0', '1']">
  ...
</p-accordion>
```

### Tokens de design
```
Header padding:   1rem 1.25rem
Content padding:  1rem 1.25rem 1.25rem
Border:           1px solid surface-200
Gap entre itens:  0 (bordas coladas)
```

---

## Tabs

Sistema de abas para organizar conteúdo.

```html
<p-tabs value="0">
  <p-tablist>
    <p-tab value="0">Dados gerais</p-tab>
    <p-tab value="1">Endereço</p-tab>
    <p-tab value="2">Contato</p-tab>
  </p-tablist>
  <p-tabpanels>
    <p-tabpanel value="0">
      <!-- conteúdo aba 1 -->
    </p-tabpanel>
    <p-tabpanel value="1">
      <!-- conteúdo aba 2 -->
    </p-tabpanel>
    <p-tabpanel value="2">
      <!-- conteúdo aba 3 -->
    </p-tabpanel>
  </p-tabpanels>
</p-tabs>
```

### Tokens de design
```
Tab padding:        0.75rem 1rem
Active tab color:   --p-primary-color
Active underline:   2px solid --p-primary-color
Inactive color:     surface-500
Tab font-weight:    500 (ativo), 400 (inativo)
```

---

## Stepper

Wizard de etapas para fluxos multi-passo.

```html
<p-stepper value="1">
  <p-stepperpanel value="1">
    <ng-template #header>
      <span>Dados pessoais</span>
    </ng-template>
    <ng-template #content="{ prevCallback, nextCallback }">
      <!-- conteúdo etapa 1 -->
      <div class="flex gap-2 justify-end mt-4">
        <p-button label="Próximo" (onClick)="nextCallback($event)" />
      </div>
    </ng-template>
  </p-stepperpanel>

  <p-stepperpanel value="2">
    <ng-template #header>
      <span>Endereço</span>
    </ng-template>
    <ng-template #content="{ prevCallback, nextCallback }">
      <!-- conteúdo etapa 2 -->
      <div class="flex gap-2 justify-end mt-4">
        <p-button label="Voltar" severity="secondary" (onClick)="prevCallback($event)" />
        <p-button label="Próximo" (onClick)="nextCallback($event)" />
      </div>
    </ng-template>
  </p-stepperpanel>
</p-stepper>

<!-- Orientação vertical -->
<p-stepper value="1" orientation="vertical">
  ...
</p-stepper>
```

---

## Toolbar

Barra de ferramentas para agrupar botões e ações.

```html
<p-toolbar>
  <ng-template #start>
    <div class="flex gap-2">
      <p-button label="Novo" icon="pi pi-plus" />
      <p-button label="Importar" icon="pi pi-upload" severity="secondary" />
    </div>
  </ng-template>
  <ng-template #center>
    <p-iconfield>
      <p-inputicon class="pi pi-search" />
      <input pInputText placeholder="Buscar" />
    </p-iconfield>
  </ng-template>
  <ng-template #end>
    <div class="flex gap-2">
      <p-button icon="pi pi-filter" [rounded]="true" [outlined]="true" />
      <p-button icon="pi pi-refresh" [rounded]="true" [outlined]="true" />
    </div>
  </ng-template>
</p-toolbar>
```

### Tokens de design
```
Padding:        0.75rem 1rem
Border:         1px solid surface-200
Border radius:  12px
Background:     surface-0
```

---

## Divider

Separador visual entre seções.

```html
<!-- Horizontal (padrão) -->
<p-divider />

<!-- Com texto -->
<p-divider align="center">
  <b>OU</b>
</p-divider>

<!-- Vertical -->
<div class="flex">
  <div>Esquerda</div>
  <p-divider layout="vertical" />
  <div>Direita</div>
</div>

<!-- Tipos -->
<p-divider type="solid" />  <!-- padrão -->
<p-divider type="dashed" />
<p-divider type="dotted" />
```

---

## Splitter

Painéis com divisor redimensionável.

```html
<p-splitter [style]="{'height': '300px'}">
  <p-splitterpanel [size]="30">
    <!-- Painel esquerdo -->
  </p-splitterpanel>
  <p-splitterpanel [size]="70">
    <!-- Painel direito -->
  </p-splitterpanel>
</p-splitter>

<!-- Vertical -->
<p-splitter layout="vertical">
  <p-splitterpanel [size]="40"><!-- Topo --></p-splitterpanel>
  <p-splitterpanel [size]="60"><!-- Baixo --></p-splitterpanel>
</p-splitter>
```

---

## ScrollPanel

Área de scroll com estilo customizado.

```html
<p-scrollpanel [style]="{'width': '100%', 'height': '200px'}">
  <!-- conteúdo longo -->
</p-scrollpanel>
```

---

## Skeleton

Placeholder de carregamento de conteúdo.

```html
<!-- Texto -->
<p-skeleton />
<p-skeleton width="10rem" />
<p-skeleton width="5rem" height="2rem" />

<!-- Avatar + texto (padrão de lista) -->
<div class="flex items-center gap-3">
  <p-skeleton shape="circle" size="4rem" />
  <div class="flex flex-col gap-2 flex-1">
    <p-skeleton width="100%" height="1rem" />
    <p-skeleton width="75%" height="1rem" />
  </div>
</div>

<!-- Card skeleton -->
<p-card>
  <ng-template #header>
    <p-skeleton height="200px" />
  </ng-template>
  <p-skeleton width="75%" height="1.5rem" />
  <p-skeleton class="mt-2" />
  <p-skeleton class="mt-1" width="80%" />
</p-card>
```

### Tokens de design
```
Border radius: 6px (default), circle para shapes circulares
Animation:     shimmer, 1.2s
Background:    surface-200 / surface-700 (dark)
```
