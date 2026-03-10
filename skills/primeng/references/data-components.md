# Data Components — PrimeNG v19

## Table (DataTable)

Componente mais complexo do PrimeNG — suporta sorting, filtering, pagination, selection, row expansion, virtualization e mais.

### Import
```typescript
import { TableModule } from 'primeng/table';
```

### Tokens de design
```
Header cell bg:     surface-50
Header cell padding: 0.75rem 1rem
Body cell padding:   0.75rem 1rem
Footer cell bg:     surface-50
Border color:       surface-200
Striped even bg:    surface-50
Sort icon color:    surface-500 / primary (active)
Row hover bg:       surface-50
Row selected bg:    primary (10% opacity)
```

### Tabela básica
```html
<p-table [value]="registros" [tableStyle]="{'min-width': '50rem'}">
  <ng-template #header>
    <tr>
      <th>Nome</th>
      <th>Status</th>
      <th>Data</th>
      <th>Ações</th>
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr>
      <td>{{ row.nome }}</td>
      <td>{{ row.status }}</td>
      <td>{{ row.data | date:'dd/MM/yyyy' }}</td>
      <td>
        <div class="flex gap-2">
          <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" size="small" />
          <p-button icon="pi pi-trash" [rounded]="true" [outlined]="true" severity="danger" size="small" />
        </div>
      </td>
    </tr>
  </ng-template>
</p-table>
```

### Com sorting
```html
<p-table [value]="registros" [sortField]="'nome'" [sortOrder]="1">
  <ng-template #header>
    <tr>
      <th pSortableColumn="nome">Nome <p-sortIcon field="nome" /></th>
      <th pSortableColumn="data">Data <p-sortIcon field="data" /></th>
    </tr>
  </ng-template>
</p-table>
```

### Com paginação
```html
<p-table
  [value]="registros"
  [paginator]="true"
  [rows]="10"
  [rowsPerPageOptions]="[10, 25, 50]"
  paginatorDropdownAppendTo="body">
  ...
</p-table>
```

### Com filtro global
```html
<p-toolbar class="mb-4">
  <ng-template #start>
    <p-iconfield>
      <p-inputicon class="pi pi-search" />
      <input pInputText #filtro placeholder="Buscar..." (input)="dt.filterGlobal(filtro.value, 'contains')" />
    </p-iconfield>
  </ng-template>
</p-toolbar>

<p-table #dt [value]="registros" [globalFilterFields]="['nome', 'email', 'status']">
  ...
</p-table>
```

### Com seleção de linha
```html
<!-- Linha clicável -->
<p-table [value]="registros" selectionMode="single" [(selection)]="selecionado">
  <ng-template #body let-row>
    <tr [pSelectableRow]="row">
      <td>{{ row.nome }}</td>
    </tr>
  </ng-template>
</p-table>

<!-- Checkbox de seleção -->
<p-table [value]="registros" [(selection)]="selecionados" dataKey="id">
  <ng-template #header>
    <tr>
      <th style="width: 3rem"><p-tableHeaderCheckbox /></th>
      <th>Nome</th>
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr>
      <td><p-tableCheckbox [value]="row" /></td>
      <td>{{ row.nome }}</td>
    </tr>
  </ng-template>
</p-table>
```

### Variantes visuais
```html
<!-- Listras alternadas -->
<p-table [value]="registros" [stripedRows]="true">

<!-- Com linhas de grade -->
<p-table [value]="registros" [showGridlines]="true">

<!-- Tamanho pequeno -->
<p-table [value]="registros" size="small">

<!-- Tamanho grande -->
<p-table [value]="registros" size="large">
```

### CSS Classes de referência
```
.p-datatable               Raiz da tabela
.p-datatable-thead         Cabeçalho
.p-datatable-tbody         Corpo
.p-datatable-tfoot         Rodapé
.p-datatable-striped       Listras alternadas
.p-datatable-gridlines     Linhas de grade
.p-datatable-sm            Tamanho pequeno
.p-datatable-lg            Tamanho grande
.p-datatable-scrollable    Scroll habilitado
.p-row-odd / .p-row-even   Linhas ímpares/pares
.p-datatable-row-selected  Linha selecionada
```

### Padrão completo de tela de listagem
```html
<p-card>
  <!-- Toolbar de ações -->
  <p-toolbar class="mb-4 p-0" [style]="{'border': 'none', 'background': 'transparent', 'padding': '0'}">
    <ng-template #start>
      <p-button label="Novo" icon="pi pi-plus" (onClick)="abrirModal()" />
    </ng-template>
    <ng-template #end>
      <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText #busca placeholder="Buscar..." (input)="dt.filterGlobal(busca.value, 'contains')" />
      </p-iconfield>
    </ng-template>
  </p-toolbar>

  <!-- Tabela -->
  <p-table
    #dt
    [value]="registros"
    [paginator]="true"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    [globalFilterFields]="['nome', 'status']"
    [loading]="carregando"
    [sortField]="'nome'"
    [sortOrder]="1">
    <ng-template #header>
      <tr>
        <th pSortableColumn="nome">Nome <p-sortIcon field="nome" /></th>
        <th pSortableColumn="status">Status <p-sortIcon field="status" /></th>
        <th style="width: 8rem">Ações</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr>
        <td>{{ row.nome }}</td>
        <td><p-tag [value]="row.status" [severity]="getSeverity(row.status)" /></td>
        <td>
          <div class="flex gap-1">
            <p-button icon="pi pi-pencil" [rounded]="true" [text]="true" (onClick)="editar(row)" pTooltip="Editar" />
            <p-button icon="pi pi-trash" [rounded]="true" [text]="true" severity="danger" (onClick)="confirmarExclusao(row)" pTooltip="Excluir" />
          </div>
        </td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td colspan="3" class="text-center py-8 text-surface-500">Nenhum registro encontrado.</td>
      </tr>
    </ng-template>
  </p-table>
</p-card>
```

---

## DataView

Exibe dados em modo grid ou lista com paginação.

```html
<p-dataview [value]="produtos" layout="grid">
  <ng-template #header>
    <div class="flex justify-end">
      <p-selectbutton [(ngModel)]="layout" [options]="layoutOptions" />
    </div>
  </ng-template>

  <ng-template #list let-items>
    @for (item of items; track item.id) {
      <div class="flex gap-4 p-4 border-b border-surface-200">
        <img [src]="item.imagem" class="w-24 h-24 object-cover rounded" />
        <div class="flex flex-col flex-1 gap-1">
          <span class="font-medium">{{ item.nome }}</span>
          <span class="text-surface-500 text-sm">{{ item.descricao }}</span>
          <p-tag [value]="item.status" />
        </div>
        <div class="flex items-center">
          <p-button label="Ver detalhes" severity="secondary" [outlined]="true" />
        </div>
      </div>
    }
  </ng-template>

  <ng-template #grid let-items>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      @for (item of items; track item.id) {
        <p-card>
          <ng-template #header>
            <img [src]="item.imagem" class="w-full h-48 object-cover" />
          </ng-template>
          <span class="font-medium">{{ item.nome }}</span>
          <p class="text-surface-500 text-sm mt-1">{{ item.descricao }}</p>
          <ng-template #footer>
            <p-button label="Ver mais" [fluid]="true" />
          </ng-template>
        </p-card>
      }
    </div>
  </ng-template>
</p-dataview>
```

---

## Paginator (standalone)

```html
<p-paginator
  [first]="primeiro"
  [rows]="10"
  [totalRecords]="total"
  [rowsPerPageOptions]="[10, 25, 50]"
  (onPageChange)="mudarPagina($event)" />
```

---

## Tree

Visualização hierárquica de dados.

```html
<p-tree [value]="nos" />
<p-tree [value]="nos" selectionMode="single" [(selection)]="selecionado" />
<p-tree [value]="nos" selectionMode="checkbox" [(selection)]="selecionados" />
<p-tree [value]="nos" [filter]="true" filterPlaceholder="Buscar" />
```

---

## Timeline

Linha do tempo vertical ou horizontal.

```html
<p-timeline [value]="eventos">
  <ng-template #content let-evento>
    <p-card [header]="evento.status">
      <p>{{ evento.data }}</p>
      <p class="text-surface-500 text-sm">{{ evento.descricao }}</p>
    </p-card>
  </ng-template>
</p-timeline>

<!-- Alternado -->
<p-timeline [value]="eventos" align="alternate">
  ...
</p-timeline>

<!-- Horizontal -->
<p-timeline [value]="eventos" layout="horizontal">
  ...
</p-timeline>
```

---

## Skeleton para estados de carregamento de tabelas

```html
<p-table [value]="carregando ? arrayVazio : registros">
  <ng-template #header>
    <tr>
      <th>Nome</th><th>Status</th><th>Ações</th>
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr>
      <td><p-skeleton *ngIf="carregando" /><span *ngIf="!carregando">{{ row.nome }}</span></td>
      <td><p-skeleton *ngIf="carregando" width="5rem" /><span *ngIf="!carregando">{{ row.status }}</span></td>
      <td><p-skeleton *ngIf="carregando" width="4rem" /></td>
    </tr>
  </ng-template>
</p-table>
```
