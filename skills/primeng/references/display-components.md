# Display & Utility Components — PrimeNG v19

## Tag

Label de status ou categoria.

```html
<!-- Severidades -->
<p-tag value="Ativo" severity="success" />
<p-tag value="Inativo" severity="danger" />
<p-tag value="Pendente" severity="warn" />
<p-tag value="Rascunho" severity="info" />
<p-tag value="Novo" severity="secondary" />

<!-- Com ícone -->
<p-tag value="Verificado" icon="pi pi-check" severity="success" />

<!-- Arredondado -->
<p-tag value="Premium" [rounded]="true" />
```

### Tokens de design
```
Padding:        0.25rem 0.5rem
Font size:      0.75rem
Font weight:    700
Border radius:  6px (padrão) / 2rem (rounded)
Success:        green-100 bg, green-700 text
Danger:         red-100 bg, red-700 text
Warn:           orange-100 bg, orange-700 text
Info:           sky-100 bg, sky-700 text
Secondary:      surface-100 bg, surface-700 text
```

---

## Badge

Contador numérico ou indicador de status sobre elementos.

```html
<!-- Sobre botão -->
<p-button label="Notificações" badgeClass="p-badge-danger" badge="8" />
<p-button icon="pi pi-bell" badgeClass="p-badge-danger" badge="3" />

<!-- Standalone -->
<p-badge value="4" />
<p-badge value="8" severity="danger" />
<p-badge value="2" severity="warn" />
<p-badge severity="success" />  <!-- ponto sem número -->

<!-- Sobre outro elemento -->
<p-overlayBadge value="4" severity="danger">
  <p-button icon="pi pi-envelope" [rounded]="true" [outlined]="true" />
</p-overlayBadge>
```

### Tokens de design
```
Min width:     1.25rem
Height:        1.25rem
Font size:     0.6875rem
Font weight:   700
Border radius: 2rem (pill)
Dot size:      0.5rem × 0.5rem
```

---

## Avatar

Representação visual de usuário.

```html
<!-- Iniciais -->
<p-avatar label="RG" />
<p-avatar label="AB" [style]="{'background-color': '#146BFA', 'color': '#fff'}" />

<!-- Ícone -->
<p-avatar icon="pi pi-user" />
<p-avatar icon="pi pi-user" shape="circle" />

<!-- Imagem -->
<p-avatar image="avatar.jpg" shape="circle" />

<!-- Tamanhos -->
<p-avatar label="RG" size="normal" />   <!-- 2rem -->
<p-avatar label="RG" size="large" />    <!-- 3rem -->
<p-avatar label="RG" size="xlarge" />   <!-- 4rem -->

<!-- Formas -->
<p-avatar label="RG" />                 <!-- quadrado com border-radius -->
<p-avatar label="RG" shape="circle" />  <!-- circular -->
```

### AvatarGroup
```html
<p-avatargroup>
  <p-avatar image="user1.jpg" shape="circle" />
  <p-avatar image="user2.jpg" shape="circle" />
  <p-avatar label="RG" shape="circle" />
  <p-avatar label="+2" shape="circle" [style]="{'background-color': '#9c27b0', 'color': '#fff'}" />
</p-avatargroup>
```

### Tokens de design
```
Default size:  2rem × 2rem (32px)
Large size:    3rem × 3rem (48px)
XLarge size:   4rem × 4rem (64px)
Font size:     0.875rem (default)
Border radius: 6px (square) / 50% (circle)
Border:        2px solid white (em grupos)
Group overlap: -0.75rem
```

---

## Chip

Tag interativa removível.

```html
<p-chip label="Angular" />
<p-chip label="PrimeNG" icon="pi pi-check" />
<p-chip label="TypeScript" [removable]="true" (onRemove)="remover()" />
<p-chip label="Rafael" image="avatar.jpg" [removable]="true" />
```

### Tokens de design
```
Padding:        0.25rem 0.75rem
Height:         1.75rem
Border radius:  2rem (pill)
Font size:      0.875rem
Border:         1px solid surface-200
Background:     surface-100
```

---

## ProgressBar

Indicador de progresso.

```html
<!-- Determinado -->
<p-progressbar [value]="valor" />
<p-progressbar [value]="75" [showValue]="true" />
<p-progressbar [value]="valor" [style]="{'height': '6px'}" />

<!-- Indeterminado (carregando) -->
<p-progressbar mode="indeterminate" [style]="{'height': '4px'}" />

<!-- Com label customizado -->
<p-progressbar [value]="valor">
  {{ valor }}% completo
</p-progressbar>
```

### Tokens de design
```
Height padrão: 1.25rem
Height fino:   4px ou 6px (style customizado)
Border radius: 6px
Fill color:    --p-primary-color
Track color:   surface-200
Label color:   white (dentro da barra)
```

---

## ProgressSpinner

Indicador de carregamento circular.

```html
<!-- Padrão -->
<p-progressspinner />

<!-- Customizado -->
<p-progressspinner
  styleClass="w-8 h-8"
  strokeWidth="4"
  animationDuration="0.8s" />

<!-- Com overlay (bloqueio de tela) -->
<p-blockui [blocked]="carregando">
  <p-card>
    <!-- conteúdo -->
  </p-card>
</p-blockui>
<p-progressspinner *ngIf="carregando" styleClass="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
```

---

## Inplace

Edição inline (exibe texto, clique para editar).

```html
<p-inplace>
  <ng-template #display>
    <span>{{ nome || 'Clique para editar' }}</span>
  </ng-template>
  <ng-template #content="{ closeCallback }">
    <div class="flex gap-2">
      <input pInputText [(ngModel)]="nome" />
      <p-button icon="pi pi-check" (onClick)="closeCallback($event)" severity="success" />
      <p-button icon="pi pi-times" (onClick)="closeCallback($event)" severity="danger" />
    </div>
  </ng-template>
</p-inplace>
```

---

## ScrollTop

Botão para voltar ao topo.

```html
<!-- Página -->
<p-scrolltop />

<!-- Dentro de elemento scrollable -->
<p-scrolltop target="parent" [threshold]="100" />
```

---

## BlockUI

Bloqueia interação com uma área da UI.

```html
<p-blockui [blocked]="processando">
  <p-card>
    <!-- conteúdo bloqueado durante processamento -->
  </p-card>
</p-blockui>
```

---

## AnimateOnScroll

Ativa animação CSS quando elemento entra na viewport.

```html
<p-card pAnimateOnScroll enterClass="fadein" leaveClass="fadeout">
  Conteúdo animado
</p-card>

<div pAnimateOnScroll enterClass="fadeinleft" [once]="false">
  Anima ao entrar e sair da viewport
</div>
```

Animações disponíveis: `fadein`, `fadeout`, `fadeinleft`, `fadeinright`, `fadeinup`, `fadeindown`, e qualquer classe PrimeNG/CSS.

---

## Carousel

Slideshow de conteúdo.

```html
<p-carousel
  [value]="produtos"
  [numVisible]="3"
  [numScroll]="1"
  [circular]="true"
  [responsiveOptions]="responsiveOptions">
  <ng-template #item let-produto>
    <p-card [style]="{'margin': '0 0.5rem'}">
      <img [src]="produto.imagem" class="w-full h-48 object-cover rounded" />
      <p class="mt-2 font-medium">{{ produto.nome }}</p>
    </p-card>
  </ng-template>
</p-carousel>
```

---

## Image

Exibição de imagem com preview modal.

```html
<p-image src="foto.jpg" alt="Foto" width="250" [preview]="true" />

<!-- Com indicador de carregamento -->
<p-image src="foto.jpg" [preview]="true">
  <ng-template #indicator>
    <i class="pi pi-eye"></i>
  </ng-template>
</p-image>
```

---

## Terminal

Interface de linha de comando.

```html
<p-terminal
  welcomeMessage="Bem-vindo ao terminal."
  prompt="$ "
  (onCommand)="executarComando($event)" />
```

---

## Padrões de Design Comum

### Estado vazio (empty state)
```html
<div class="flex flex-col items-center justify-center py-16 gap-3 text-surface-500">
  <i class="pi pi-inbox text-5xl"></i>
  <span class="text-lg font-medium">Nenhum registro encontrado</span>
  <span class="text-sm">Tente ajustar os filtros ou adicione um novo registro.</span>
  <p-button label="Adicionar registro" icon="pi pi-plus" class="mt-2" />
</div>
```

### Estado de carregamento (skeleton de página)
```html
<div class="flex flex-col gap-4">
  <p-skeleton height="3rem" />
  <div class="grid grid-cols-3 gap-4">
    <p-skeleton height="8rem" />
    <p-skeleton height="8rem" />
    <p-skeleton height="8rem" />
  </div>
  <p-skeleton height="20rem" />
</div>
```

### Header de página padrão
```html
<div class="flex items-center justify-between mb-6">
  <div class="flex flex-col gap-1">
    <h1 class="text-2xl font-semibold m-0">Título da Página</h1>
    <span class="text-surface-500 text-sm">Subtítulo ou breadcrumb aqui</span>
  </div>
  <p-button label="Nova ação" icon="pi pi-plus" (onClick)="acao()" />
</div>
```

### Severity helper (Tag + Table)
```typescript
getSeverity(status: string): string {
  const map: Record<string, string> = {
    'Ativo': 'success',
    'Inativo': 'danger',
    'Pendente': 'warn',
    'Processando': 'info',
    'Rascunho': 'secondary',
  };
  return map[status] ?? 'secondary';
}
```
