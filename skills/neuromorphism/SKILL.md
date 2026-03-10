---
name: neuromorphism
description: Cria designs, landing pages, webapps e apps no estilo Neumorphism (Industrial Modern — Neumorphism + Material Design Hybrid). Use esta skill sempre que o usuário mencionar neumorphism, neuromorphism, estilo industrial, design 3D com sombras, UI com efeito embossed/pressed, ou pedir para criar interfaces visuais usando esse sistema de design específico.
---

# Neuromorphism Design Skill

Esta skill orienta a criação de interfaces visuais no estilo **Neumorphism Industrial Modern** — um híbrido entre Neumorphism e Material Design que usa sombras 3D, gradientes radiais, efeitos glow, e uma paleta neutra com acentos vibrantes para criar profundidade e realismo nas interfaces.

---

## Sistema de Design: Tokens de Referência

### Cores — Neutros (Base)

| Token | Hex | Uso |
|---|---|---|
| `bg-primary` | `#FFFFFF` | Background principal |
| `bg-secondary` | `#F5F5F5` | Superfícies, off-white |
| `bg-tertiary` | `#E8E8E8` | Containers, contexto |
| `surface` | `#EFEFEF` | Elementos interiores |
| `border` | `#C0C0C0` | Bordas padrão |
| `text-primary` | `#1A1A1A` | Texto principal |
| `text-secondary` | `#666666` | Texto auxiliar |
| `disabled` | `#CCCCCC` | Estado desabilitado (50% opacity) |

### Cores — Acentos (Interação)

| Token | Hex | Uso |
|---|---|---|
| `accent-blue` | `#1A3A52` | Botões primários, knobs, confiança |
| `accent-gold` | `#B8956A` | Premium, atenção, destaque |
| `accent-red` | `#E85D3A` | Alerta, erros, ações críticas |
| `accent-green` | `#00FF00` | Ativo, sucesso, status on |
| `accent-gray` | `#8B8B8B` | Elemento neutro interativo |

### Famílias de Cor por Intensidade — Sistema de 4 Paletas

> **Regra obrigatória:** Toda cor de acento deve ser documentada e gerada em **4 sub-paletas**: Hue Pure Color (matiz puro), Tints (+ Branco), Tones (+ Cinza), Shades (+ Preto). A paleta Hue 500 é sempre a cor base do acento.

#### Blue Family (Frio — Confiança) — Base: `#1A3A52`

| Etapa | Hue (matiz puro) | Tints (+ Branco) | Tones (+ Cinza #808080) | Shades (+ Preto) |
|---|---|---|---|---|
| 50  | `#EFF4F8` | `#F5F8FB` | `#7C8D97` | `#192E40` |
| 100 | `#D0DFE9` | `#EBF1F6` | `#788A96` | `#172A3A` |
| 200 | `#A2C0D3` | `#D7E3ED` | `#6F8491` | `#132233` |
| 300 | `#74A1BD` | `#C3D5E4` | `#677F8C` | `#0F1A28` |
| 400 | `#4A6FA5` | `#AECAD9` | `#5E7988` | `#0C1320` |
| **500** | **`#1A3A52`** | **`#9ABCCE`** | **`#570D29`→`#557B89`** | **`#0A1929`** |
| 600 | `#152E42` | `#86AFBF` | `#4C7586` | `#071014` |
| 700 | `#102232` | `#71A2B6` | `#436F82` | `#05080D` |
| 800 | `#0A1621` | `#5D95AD` | `#3A697E` | `#030407` |
| 900 | `#050B11` | `#4888A4` | `#31637A` | `#010102` |
| 950 | `#020506` | `#3B7C9B` | `#2B5F78` | `#000000` |

*Hue 500 = cor base `#1A3A52` — valores das demais interpolados linearmente.*

---

#### Gold Family (Quente — Premium) — Base: `#B8956A`

| Etapa | Hue (matiz puro) | Tints (+ Branco) | Tones (+ Cinza) | Shades (+ Preto) |
|---|---|---|---|---|
| 50  | `#FDF8F3` | `#FEF9F5` | `#BCA898` | `#AE8D65` |
| 100 | `#F5EAD9` | `#FBEEDE` | `#B9A495` | `#A6855B` |
| 200 | `#EBD5B3` | `#F7DDB8` | `#B49A8F` | `#946050` |
| 300 | `#D4A574` | `#F3CC92` | `#AF9189` | `#7D4838` |
| 400 | `#C99D70` | `#EFBB6C` | `#AB8882` | `#663023` |
| **500** | **`#B8956A`** | **`#EBAA46`** | **`#A07F7B`** | **`#5C2816`** |
| 600 | `#9B7D59` | `#C49048` | `#97776E` | `#48200F` |
| 700 | `#7E6548` | `#9C7649` | `#8E6F61` | `#35180A` |
| 800 | `#614D38` | `#755B4B` | `#856755` | `#231005` |
| 900 | `#443427` | `#4E404B` | `#7C5F49` | `#110802` |
| 950 | `#352819` | `#37324B` | `#775840` | `#060401` |

---

#### Red Family (Alerta) — Base: `#E85D3A`

| Etapa | Hue (matiz puro) | Tints (+ Branco) | Tones (+ Cinza) | Shades (+ Preto) |
|---|---|---|---|---|
| 50  | `#FEF0EC` | `#FEF2EE` | `#C48D85` | `#DD5836` |
| 100 | `#FCDDD4` | `#FDE2D8` | `#C18780` | `#D05232` |
| 200 | `#F9BBA9` | `#FCC5B1` | `#BA7C78` | `#B84629` |
| 300 | `#F5987E` | `#FAA78A` | `#B27170` | `#A03B21` |
| 400 | `#F08566` | `#F88A63` | `#AB6667` | `#882F1A` |
| **500** | **`#E85D3A`** | **`#F6713C`** | **`#A45A5F`** | **`#742514` |
| 600 | `#C44D2F` | `#D06040` | `#9D4F57` | `#5E1D0F` |
| 700 | `#A03E26` | `#A85045` | `#96444F` | `#491609` |
| 800 | `#7C2F1C` | `#804049` | `#8F3947` | `#330E04` |
| 900 | `#582013` | `#5830 4E` | `#882E3F` | `#1E0702` |
| 950 | `#46180E` | `#3E264E` | `#842B3B` | `#0F0301` |

---

#### Green Family (Sucesso / Neon) — Base: `#00FF00`

| Etapa | Hue (matiz puro) | Tints (+ Branco) | Tones (+ Cinza) | Shades (+ Preto) |
|---|---|---|---|---|
| 50  | `#F0FFF0` | `#F3FFF3` | `#7F8C7F` | `#00F300` |
| 100 | `#CCFFCC` | `#E6FFE6` | `#7F997F` | `#00E600` |
| 200 | `#99FF99` | `#CCFFCC` | `#7FAD7F` | `#00CC00` |
| 300 | `#66FF66` | `#B3FFB3` | `#7FC27F` | `#00B300` |
| 400 | `#33FF33` | `#99FF99` | `#7FD67F` | `#009900` |
| **500** | **`#00FF00`** | **`#80FF80`** | **`#7FEB7F`** | **`#008000`** |
| 600 | `#00CC00` | `#66FF66` | `#7FBF7F` | `#006600` |
| 700 | `#009900` | `#4DFF4D` | `#7F9A7F` | `#004D00` |
| 800 | `#006600` | `#33FF33` | `#7F877F` | `#003300` |
| 900 | `#003300` | `#1AFF1A` | `#7F827F` | `#001A00` |
| 950 | `#001A00` | `#0DFF0D` | `#7F807F` | `#000D00` |

---

## Tipografia

```css
/* Font Stack */
font-family: 'Inter', 'Roboto', 'Helvetica', Arial, system-ui, sans-serif;
font-family: 'Courier Prime', 'Courier New', monospace; /* dados técnicos */
```

| Nível | Tamanho | Peso | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display | 24–32px | 700 | 1.2 | +0.25px |
| Heading 1 | 20px | 700 | 1.3 | +0.25px |
| Heading 2 | 16px | 600 | 1.3 | +0.25px |
| Body Large | 14px | 400 | 1.5 | 0 |
| Body | 12px | 400 | 1.4 | 0 |
| Body Small | 11px | 400 | 1.4 | 0 |
| Label/Button | 10px | 600 | 1.2 | +0.75–1px |
| Caption | 9px | 400 | 1.3 | 0 |
| Technical | 8–11px | 400 | 1.5 | 0 |

---

## Sombras e Elevações

### Drop Shadows (Efeito 3D Elevado)

```css
/* Elevation 1 — Subtle (hover leve, background) */
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.10);

/* Elevation 2 — Light (default: botões, cards, sliders) */
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);

/* Elevation 3 — Medium (knobs, hover elevado, modal underlay) */
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.20);

/* Elevation 4 — Strong (pressed state, floating, popovers) */
box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);

/* Elevation 5 — Extra (modals, overlays premium) */
box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.30);
```

### Inset Shadows (Efeito 3D Pressionado)

```css
/* Inset Press — active state, depressed controls */
box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);

/* Inset Subtle — input fields, subtle depth */
box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.05);
```

### Bevel & Emboss (alternativa ao box-shadow)

```css
/* Raised */
box-shadow: inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(0,0,0,0.2);

/* Depressed (inverted) */
box-shadow: inset -1px -1px 0 rgba(255,255,255,0.5), inset 1px 1px 0 rgba(0,0,0,0.2);
```

---

## Efeitos Glow (Neon / Luminoso)

```css
/* Soft Glow — active states, status indicators */
box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.5), 0 0 16px rgba(var(--accent-rgb), 0.25);

/* Strong Glow — alerts, success feedback */
box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.8), 0 0 24px rgba(var(--accent-rgb), 0.4);

/* Green Neon (#00FF00) */
box-shadow: 0 0 10px rgba(0, 255, 0, 0.6), 0 0 20px rgba(0, 255, 0, 0.3);

/* Red Alert (#E85D3A) */
box-shadow: 0 0 10px rgba(232, 93, 58, 0.6), 0 0 20px rgba(232, 93, 58, 0.3);

/* Blue Active (#1A3A52) */
box-shadow: 0 0 10px rgba(26, 58, 82, 0.6), 0 0 20px rgba(26, 58, 82, 0.3);
```

---

## Gradientes

### Radiais (Elementos 3D — Knobs, Esferas, Botões)

```css
/* Raised/Elevated (light source top-left) */
background: radial-gradient(circle at 30% 30%, [Light Color], [Dark Color]);

/* Gold Knob */
background: radial-gradient(circle at 30% 30%, #D4A574, #8B6A47);

/* Blue Control */
background: radial-gradient(circle at 30% 30%, #4A6FA5, #0F1F30);

/* Pressed/Depressed (light source bottom-right) */
background: radial-gradient(circle at 70% 70%, [Dark Color], [Light Color]);
```

### Lineares (Backgrounds e Máscaras)

```css
/* Background sutil */
background: linear-gradient(90deg, #FFFFFF 0%, #FAFAFA 100%);

/* Botão com profundidade */
background: linear-gradient(180deg, #F5F5F5 0%, #E0E0E0 100%);

/* Elemento premium (diagonal) */
background: linear-gradient(135deg, #D4A574 0%, #8B6A47 100%);

/* Container com profundidade */
background: linear-gradient(180deg, #EFEFEF 0%, #E0E0E0 100%);
```

### Glass Morphism (Overlays Premium — Opcional)

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(255, 255, 255, 0.3);
```

---

## Bordas

```css
/* Default */
border: 1px solid #C0C0C0;
border-radius: 4px;

/* Hover (mais visível) */
border: 1px solid #808080;

/* Focus (keyboard accessibility) */
border: 2px solid #1A3A52;
outline: 2px solid #1A3A52;
outline-offset: 2px;

/* Disabled */
border: 1px dashed #CCCCCC;

/* Active/Accent */
border: 2px solid [Accent Color];

/* Error */
border: 2px solid #E85D3A;

/* Success */
border: 2px solid #00CC00;
```

### Border Radius Scale

| Nome | Valor | Uso |
|---|---|---|
| None | 0px | Sharp corners, industrial |
| Small | 2px | Inputs, elementos pequenos |
| Medium | 4px | Botões, cards (padrão) |
| Large | 6–8px | Containers, modals |
| Circular | 50% | Knobs, avatars, círculos |
| Pill | 24–99px | Botões pill-shaped |

---

## Estados dos Componentes

### 1. DEFAULT
```css
background: #EFEFEF;
border: 1px solid #C0C0C0;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
color: #1A1A1A;
opacity: 1;
cursor: pointer;
```

### 2. HOVER
```css
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.20);
background: #E8E8E8; /* -10% darker */
border: 1px solid #808080;
transition: all 100-150ms cubic-bezier(0.25, 0.1, 0.25, 1.0);
```

### 3. ACTIVE / PRESSED
```css
box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
background: #E0E0E0;
border: 2px solid [Accent Color];
transform: scale(0.98);
transition: all 50ms; /* instant feedback */
```

### 4. FOCUS (Keyboard)
```css
outline: 2px solid #1A3A52;
outline-offset: 2px;
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.20);
```

### 5. DISABLED
```css
background: #CCCCCC;
color: #999999;
opacity: 0.5;
cursor: not-allowed;
border: 1px dashed #CCCCCC;
box-shadow: none;
```

### 6. ERROR
```css
border: 2px solid #E85D3A;
box-shadow: 0 0 10px rgba(232, 93, 58, 0.5);
background: rgba(232, 93, 58, 0.05);
/* Mensagem de erro: color: #E85D3A */
```

### 7. SUCCESS
```css
border: 2px solid #00CC00;
box-shadow: 0 0 10px rgba(0, 204, 0, 0.5);
background: rgba(0, 204, 0, 0.05);
```

---

## Animações e Transições

### Timing Functions

```css
/* Standard — smooth, balanced */
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

/* Ease-Out — bouncy, knobs/rotations */
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1.0);

/* Ease-In-Out — natural */
transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

/* Linear — progress bars */
transition-timing-function: linear;
```

### Durações

| Tipo | Duração | Uso |
|---|---|---|
| Instant | 0ms | Feedback imediato |
| Quick | 100–150ms | Hover |
| Standard | 200–300ms | Transições principais |
| Slow | 400–500ms | Page loads, modals |
| Scenic | 600–800ms | Animações showcase |

### Transições Comuns

```css
/* Background */
transition: background-color 200ms cubic-bezier(0.25, 0.1, 0.25, 1.0);

/* Sombra */
transition: box-shadow 200ms ease-out;

/* Movimento */
transition: transform 150ms ease-out;

/* Tudo (padrão componentes) */
transition: all 250ms cubic-bezier(0.34, 1.56, 0.64, 1.0);
```

### Keyframe Animations

```css
/* Pulse — loading, status indicators */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.pulse { animation: pulse 2s ease-in-out infinite; }

/* Rotate — loading spinner */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.rotate { animation: rotate 2s linear infinite; }

/* Bounce — knob turn */
@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.bounce { animation: bounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1; }

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fadeIn { animation: fadeIn 300ms ease-out; }
```

---

## Espaçamento (8-Point Grid)

| Token | Valor | Uso |
|---|---|---|
| `space-xs` | 4px | Margem/padding mínimo |
| `space-s` | 8px | Entre elementos próximos |
| `space-m` | 12px | Entre componentes |
| `space-l` | 16px | Entre seções |
| `space-xl` | 24px | Entre zonas principais |
| `space-xxl` | 32px | Padding de containers |

### Breakpoints

| Device | Range |
|---|---|
| Mobile | 320px – 480px |
| Tablet | 481px – 1024px |
| Desktop | 1025px+ |

---

## Escala de Opacidade

| Valor | Uso |
|---|---|
| 100% | Padrão, totalmente visível |
| 90% | Dim sutil |
| 75% | Elementos secundários |
| 50% | Estado disabled |
| 25% | Ênfase de fundo fraca |
| 10% | Tint de background muito sutil |
| 5% | Marca d'água |

---

## Workflow de Criação

### Ao receber um pedido de design neste estilo:

1. **Identifique o tipo de entregável** — landing page, webapp, app mobile, componente isolado, dashboard.

2. **Defina a paleta de acentos dominante** baseada no contexto:
   - B2B / corporativo → Blue Family (#1A3A52)
   - Premium / luxo → Gold Family (#B8956A)
   - Tech / SaaS → Blue + Green (#1A3A52 + #00FF00)
   - Alerta / urgência → Red Family (#E85D3A)

3. **Estruture as camadas de profundidade:**
   - Background: `#F5F5F5` (mais profundo)
   - Container/Card: `#EFEFEF` com Elevation 2
   - Elemento interativo: `#FFFFFF` com Elevation 3
   - Elemento pressionado: Inset shadow

4. **Aplique a hierarquia tipográfica** com letter-spacing aumentado em labels e botões para o look industrial.

5. **Use efeitos glow com moderação** — apenas em status indicators (on/off), alerts e elementos de destaque máximo.

6. **Escreva código production-ready** com:
   - CSS variables para todos os tokens
   - Estados hover/active/focus/disabled em todos os componentes interativos
   - Transições suaves (200–300ms)
   - Accessibility: outline no focus, contrast mínimo 4.5:1 para texto

### Snippet de CSS Variables Base

```css
:root {
  /* Neutros */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --bg-tertiary: #E8E8E8;
  --surface: #EFEFEF;
  --border: #C0C0C0;
  --text-primary: #1A1A1A;
  --text-secondary: #666666;
  --disabled: #CCCCCC;

  /* Acentos */
  --accent-blue: #1A3A52;
  --accent-blue-light: #4A6FA5;
  --accent-blue-dark: #0F1F30;
  --accent-gold: #B8956A;
  --accent-gold-light: #D4A574;
  --accent-gold-dark: #8B6A47;
  --accent-red: #E85D3A;
  --accent-red-light: #F08566;
  --accent-red-dark: #B93D1A;
  --accent-green: #00FF00;
  --accent-green-medium: #00CC00;

  /* Sombras */
  --shadow-1: 2px 2px 4px rgba(0, 0, 0, 0.10);
  --shadow-2: 4px 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-3: 6px 6px 12px rgba(0, 0, 0, 0.20);
  --shadow-4: 8px 8px 16px rgba(0, 0, 0, 0.25);
  --shadow-5: 12px 12px 24px rgba(0, 0, 0, 0.30);
  --shadow-inset: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  --shadow-inset-subtle: inset 1px 1px 2px rgba(0, 0, 0, 0.05);

  /* Espaçamento */
  --space-xs: 4px;
  --space-s: 8px;
  --space-m: 12px;
  --space-l: 16px;
  --space-xl: 24px;
  --space-xxl: 32px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-circle: 50%;
  --radius-pill: 9999px;

  /* Tipografia */
  --font-primary: 'Inter', 'Roboto', Helvetica, Arial, system-ui, sans-serif;
  --font-mono: 'Courier Prime', 'Courier New', monospace;
}
```

---

## Checklist antes de entregar

- [ ] Cada cor de acento tem **4 sub-paletas geradas**: Hue Pure Color, Tints, Tones, Shades (escala 50–950)
- [ ] CSS variables definidas no `:root`
- [ ] Todos os componentes interativos têm `:hover`, `:active`, `:focus`, `:disabled`
- [ ] Sombras seguem a escala de elevação (não inventar valores arbitrários)
- [ ] Letter-spacing de +0.5–1px em labels e buttons
- [ ] Transições em todos os estados (200–300ms padrão)
- [ ] Glow apenas em status indicators e elementos de destaque máximo
- [ ] Contraste de texto: mínimo 4.5:1 (WCAG AA)
- [ ] Focus outline visível para acessibilidade por teclado
- [ ] Código production-ready, sem placeholders

---

## Identidade Visual do Estilo

**Nome:** Industrial Modern (Neumorphism + Material Design Hybrid)
**Versão:** 1.0 — Março 2026
**Característica principal:** Profundidade física através de sombras direcionais, gradientes radiais simulando iluminação real, e acentos neon/vibrantes em base cinza quase monocromática.
