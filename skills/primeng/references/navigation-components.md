# Navigation & Menu Components — PrimeNG v19

## Menu

Menu simples de navegação/ações com posicionamento estático ou overlay.

```typescript
import { MenuModule } from 'primeng/menu';
```

```typescript
items: MenuItem[] = [
  {
    label: 'Opções',
    items: [
      { label: 'Novo', icon: 'pi pi-plus', command: () => this.novo() },
      { label: 'Editar', icon: 'pi pi-pencil', command: () => this.editar() },
      { separator: true },
      { label: 'Excluir', icon: 'pi pi-trash', command: () => this.excluir() },
    ]
  }
];
```

```html
<!-- Estático -->
<p-menu [model]="items" />

<!-- Popup (overlay no clique) -->
<p-button label="Ações" (click)="menu.toggle($event)" icon="pi pi-chevron-down" iconPos="right" />
<p-menu #menu [model]="items" [popup]="true" />
```

### Tokens de design
```
Item padding:       0.5rem 0.75rem
Item border-radius: 6px
Item hover bg:      surface-100
Item icon color:    surface-500
Separator:          1px solid surface-200
Header label:       0.75rem, uppercase, surface-500, letter-spacing 0.025em
```

---

## Menubar

Barra de menus horizontal (topo de aplicação).

```html
<p-menubar [model]="items">
  <ng-template #start>
    <img src="logo.svg" height="40" />
  </ng-template>
  <ng-template #end>
    <div class="flex items-center gap-2">
      <p-button icon="pi pi-bell" [rounded]="true" [text]="true" />
      <p-avatar label="RG" [style]="{'background-color': '#146BFA', 'color': '#fff'}" />
    </div>
  </ng-template>
</p-menubar>
```

### Tokens de design
```
Height:          3.5rem
Padding:         0.5rem 1rem
Background:      surface-0
Border-bottom:   1px solid surface-200
Item padding:    0.5rem 0.75rem
Item hover bg:   surface-100
Submenu shadow:  overlay shadow
```

---

## PanelMenu

Menu hierárquico em acordeão — ideal para sidebar de navegação.

```html
<p-panelmenu [model]="items" styleClass="w-full" />
```

```typescript
items: MenuItem[] = [
  {
    label: 'Cadastros',
    icon: 'pi pi-database',
    items: [
      { label: 'Usuários', icon: 'pi pi-users', routerLink: '/usuarios' },
      { label: 'Perfis', icon: 'pi pi-shield', routerLink: '/perfis' },
    ]
  },
  {
    label: 'Relatórios',
    icon: 'pi pi-chart-bar',
    items: [
      { label: 'Geral', routerLink: '/relatorios/geral' },
      { label: 'Financeiro', routerLink: '/relatorios/financeiro' },
    ]
  },
  { separator: true },
  { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/configuracoes' },
];
```

### Tokens de design
```
Group header padding: 0.75rem 1rem
Item padding:         0.5rem 1rem
Item indent:          1rem (por nível)
Active item color:    --p-primary-color
Active item bg:       primary (10% opacity)
```

---

## Breadcrumb

Trilha de navegação hierárquica.

```html
<p-breadcrumb [model]="itens" [home]="home" />
```

```typescript
home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
itens: MenuItem[] = [
  { label: 'Gestão', routerLink: '/gestao' },
  { label: 'Usuários', routerLink: '/gestao/usuarios' },
  { label: 'Editar usuário' },
];
```

### Tokens de design
```
Font size:     0.875rem
Separator:     "/"
Color:         surface-500 (itens anteriores)
Active color:  surface-700 (último item)
Home icon:     1rem
Padding:       0.5rem 0
```

---

## Steps

Indicador de progresso de wizard.

```html
<p-steps [model]="etapas" [activeIndex]="etapaAtual" [readonly]="false" />
```

```typescript
etapas: MenuItem[] = [
  { label: 'Dados pessoais' },
  { label: 'Endereço' },
  { label: 'Documentos' },
  { label: 'Confirmação' },
];
```

### Tokens de design
```
Step circle size:    2rem × 2rem
Step number:         0.875rem
Step label:          0.75rem
Active circle bg:    --p-primary-color
Done circle bg:      --p-primary-color
Inactive circle:     surface-200
Connector line:      1px solid surface-200
```

---

## TabMenu

Abas estilo menu de navegação.

```html
<p-tabmenu [model]="abas" [(activeItem)]="abaAtiva" />
```

```typescript
abas: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
  { label: 'Cadastros', icon: 'pi pi-database', routerLink: '/cadastros' },
  { label: 'Relatórios', icon: 'pi pi-chart-bar', routerLink: '/relatorios' },
];
```

---

## ContextMenu

Menu contextual ao clicar com botão direito.

```html
<p-contextmenu [model]="itens" #cm />
<p-table [value]="registros" [contextMenu]="cm" [(contextMenuSelection)]="selecionado">
  ...
</p-table>
```

---

## TieredMenu

Menu multi-nível com submenus em cascata.

```html
<p-button label="Arquivo" (click)="tiered.toggle($event)" />
<p-tieredmenu #tiered [model]="items" [popup]="true" />
```

---

## MegaMenu

Menu com múltiplas colunas de opções.

```html
<p-megamenu [model]="items" orientation="horizontal" />
<p-megamenu [model]="items" orientation="vertical" />
```

---

## Dock

Barra de dock estilo macOS.

```html
<p-dock [model]="items" position="bottom">
  <ng-template #item let-item>
    <img [src]="item.icon" [alt]="item.label" width="100%" />
  </ng-template>
</p-dock>
```

---

## Padrão de Sidebar de Aplicação

Estrutura completa de navegação lateral com PanelMenu:

```html
<!-- sidebar.component.html -->
<div class="flex flex-col h-full">
  <!-- Logo -->
  <div class="flex items-center gap-3 p-4 border-b border-surface-200">
    <img src="logo.svg" height="32" />
    <span class="font-semibold text-lg">Sistema</span>
  </div>

  <!-- Menu -->
  <div class="flex-1 overflow-y-auto p-2">
    <p-panelmenu [model]="menuItems" styleClass="w-full" />
  </div>

  <!-- Footer -->
  <div class="p-4 border-t border-surface-200">
    <div class="flex items-center gap-3">
      <p-avatar label="RG" shape="circle" />
      <div class="flex flex-col flex-1 min-w-0">
        <span class="font-medium text-sm truncate">Rafael Eugênio</span>
        <span class="text-surface-500 text-xs truncate">rafael@citiesoft.com.br</span>
      </div>
      <p-button icon="pi pi-sign-out" [rounded]="true" [text]="true" size="small" pTooltip="Sair" />
    </div>
  </div>
</div>
```
