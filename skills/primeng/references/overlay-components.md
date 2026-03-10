# Overlay & Notification Components — PrimeNG v19

## Dialog

Modal para formulários, confirmações e conteúdo secundário.

### Tokens de design
```
Border radius:  12px (--p-border-radius-xl)
Padding:        1.25rem
Shadow:         0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)
Background:     white / --p-surface-0
Border:         1px solid surface-200
Backdrop:       rgba(0,0,0,0.4) (light), rgba(0,0,0,0.6) (dark)
Backdrop blur:  --- (sem blur por padrão)
Transition:     0.15s (mask), 0.2s (content)
Header padding: 1.25rem 1.25rem 0
Footer padding: 0 1.25rem 1.25rem
```

### Uso
```typescript
import { DialogModule } from 'primeng/dialog';
```

```html
<p-dialog
  header="Título do Modal"
  [(visible)]="visible"
  [modal]="true"
  [closable]="true"
  [draggable]="true"
  [resizable]="false"
  [style]="{ width: '450px' }">

  <!-- Conteúdo -->
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <label>Nome</label>
      <input pInputText [(ngModel)]="nome" />
    </div>
  </div>

  <ng-template #footer>
    <div class="flex justify-end gap-2">
      <p-button label="Cancelar" severity="secondary" [text]="true" (onClick)="visible = false" />
      <p-button label="Salvar" icon="pi pi-check" (onClick)="salvar()" />
    </div>
  </ng-template>
</p-dialog>
```

### Tamanhos recomendados
```
Pequeno (confirmação): width: '350px'
Médio (formulário):    width: '500px' ou '600px'
Grande (tabela/form):  width: '80vw' ou '900px'
Full:                  [maximizable]="true"
```

### Posições
```html
<p-dialog position="top" />
<p-dialog position="bottom" />
<p-dialog position="left" />
<p-dialog position="right" />
<p-dialog position="top-left" />
<!-- padrão: center -->
```

---

## ConfirmDialog

Diálogo de confirmação de ações.

```typescript
// Injetar no componente:
import { ConfirmationService } from 'primeng/api';

constructor(private confirmationService: ConfirmationService) {}

confirmarExclusao(id: number) {
  this.confirmationService.confirm({
    message: 'Deseja excluir este registro?',
    header: 'Confirmação',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Excluir',
    rejectLabel: 'Cancelar',
    acceptButtonStyleClass: 'p-button-danger',
    accept: () => this.excluir(id),
  });
}
```

```html
<!-- Uma vez no template (geralmente no app.component) -->
<p-confirmdialog />
```

---

## ConfirmPopup

Confirmação inline ancorada ao elemento.

```typescript
confirmar(event: Event, id: number) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Confirma a exclusão?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => this.excluir(id),
  });
}
```

```html
<p-confirmpopup />
<p-button label="Excluir" (onClick)="confirmar($event, item.id)" severity="danger" />
```

---

## Drawer (Sidebar)

Painel lateral deslizante.

### Tokens de design
```
Width (side):   20rem (default)
Height (top/bottom): 30%
Background:     white / --p-surface-0
Shadow:         igual ao Dialog
Backdrop:       rgba(0,0,0,0.4)
```

```html
<p-drawer header="Filtros" [(visible)]="drawerVisible" position="right">
  <div class="flex flex-col gap-4">
    <!-- conteúdo do drawer -->
  </div>
  <ng-template #footer>
    <div class="flex gap-2">
      <p-button label="Limpar" severity="secondary" [fluid]="true" (onClick)="limpar()" />
      <p-button label="Aplicar" [fluid]="true" (onClick)="aplicar()" />
    </div>
  </ng-template>
</p-drawer>
```

### Posições
```html
<p-drawer position="left" />     <!-- padrão -->
<p-drawer position="right" />
<p-drawer position="top" />
<p-drawer position="bottom" />
```

---

## Popover (OverlayPanel)

Overlay flutuante ancorado a um elemento.

```html
<p-button label="Opções" (click)="op.show($event)" />

<p-popover #op>
  <div class="flex flex-col gap-2 p-1">
    <p-button label="Editar" icon="pi pi-pencil" [text]="true" [fluid]="true" />
    <p-button label="Duplicar" icon="pi pi-copy" [text]="true" [fluid]="true" />
    <p-divider class="my-1" />
    <p-button label="Excluir" icon="pi pi-trash" severity="danger" [text]="true" [fluid]="true" />
  </div>
</p-popover>
```

### Tokens de design
```
Border radius:  12px
Padding:        0.75rem
Shadow:         0 4px 6px -1px rgba(0,0,0,0.1)
Border:         1px solid surface-200
```

---

## Tooltip

Dica ao passar o mouse.

```html
<!-- Diretiva -->
<p-button label="Salvar" pTooltip="Salvar as alterações" tooltipPosition="top" />

<input pInputText pTooltip="Formato: CPF sem pontuação" tooltipPosition="right" />

<!-- Posições: top, bottom, left, right (padrão: top) -->
```

### Tokens de design
```
Background:    --p-tooltip-background (surface-700 / surface-0 dark)
Color:         white / surface-950 (dark)
Border radius: 6px
Padding:       0.5rem 0.75rem
Font size:     0.875rem
Max width:     12.5rem
```

---

## Toast

Notificações temporárias não-bloqueantes.

### Setup (uma vez no app.component)
```html
<p-toast />
<p-toast position="bottom-right" />
```

### Uso no componente
```typescript
import { MessageService } from 'primeng/api';

constructor(private messageService: MessageService) {}

// Success
this.messageService.add({
  severity: 'success',
  summary: 'Sucesso',
  detail: 'Registro salvo com sucesso!',
  life: 3000
});

// Error
this.messageService.add({
  severity: 'error',
  summary: 'Erro',
  detail: 'Não foi possível salvar o registro.',
  life: 5000
});

// Warning
this.messageService.add({
  severity: 'warn',
  summary: 'Atenção',
  detail: 'Preencha todos os campos obrigatórios.',
});

// Info
this.messageService.add({
  severity: 'info',
  summary: 'Informação',
  detail: 'Sua sessão expira em 5 minutos.',
});
```

### Posições disponíveis
```
top-right (padrão)
top-left
top-center
bottom-right
bottom-left
bottom-center
center
```

### Tokens de design
```
Width:            25rem
Border radius:    12px
Icon size:        1.125rem
Summary weight:   500, 1rem
Detail size:      0.875rem
Blur (dark):      10px backdrop
Life padrão:      3000ms
```

---

## Message (Inline)

Mensagem estática dentro do conteúdo da página.

```html
<!-- Severidades -->
<p-message severity="success" text="Registro salvo com sucesso!" />
<p-message severity="info" text="Você tem 3 novas notificações." />
<p-message severity="warn" text="Sua assinatura vence em 7 dias." />
<p-message severity="error" text="Ocorreu um erro ao processar." />

<!-- Com conteúdo customizado -->
<p-message severity="warn">
  <span>Atenção: <a href="#">Clique aqui</a> para mais detalhes.</span>
</p-message>

<!-- Sem ícone -->
<p-message severity="info" [icon]="null" text="Mensagem simples" />
```

### Tokens de design
```
Border radius:  6px
Padding:        0.75rem 1rem
Icon size:      1rem
Gap (icon/text): 0.5rem
Border left:    3px solid (severity color)
```
