---
name: citiesoft-pptx
description: >
  Gera apresentações PowerPoint (.pptx) padronizadas da Citiesoft — slides de apresentação
  de projetos, reuniões com clientes, demonstrações de sistemas e relatórios executivos.
  Use esta skill SEMPRE que o usuário pedir para criar, gerar ou montar uma apresentação,
  slides ou PowerPoint da Citiesoft ou para um cliente da Citiesoft. Também acione quando
  o usuário mencionar termos como "criar apresentação", "fazer slides", "montar um pptx",
  "apresentação do projeto", "slides para o cliente", "deck de apresentação", ou qualquer
  combinação de cliente (ALEMA, SES, Saquarema, etc.) com apresentação ou slides.
  A skill é baseada no template visual real do Onboarding.pptx da Citiesoft — preserva
  logo, backgrounds e todos os elementos visuais automaticamente ao clonar slides do template.
---

# Citiesoft PPTX — Gerador de Apresentações PowerPoint

Gera arquivos `.pptx` clonando slides do `Onboarding.pptx` como template visual e
substituindo apenas o conteúdo de texto. O resultado preserva automaticamente o logo,
backgrounds, imagens e identidade visual da Citiesoft.

## Quando usar esta skill

- Usuário pede para criar apresentação, slides, deck, PowerPoint
- Usuário menciona um cliente (ALEMA, SES, Saquarema, etc.) + apresentação/slides
- Usuário quer gerar um `.pptx` com padrão Citiesoft

---

## Fluxo de trabalho

```
1. Coletar o conteúdo da apresentação (ver seção "Dados necessários")
2. Ler assets/template_base.py (script gerador)
3. Copiar o Onboarding.pptx para /home/claude/
4. Copiar e adaptar o script com o conteúdo real
5. Executar: python3 citiesoft_apresentacao.py
6. Validar visualmente e entregar
```

**SEMPRE leia `assets/template_base.py` antes de gerar qualquer apresentação.**
Você só precisa substituir o bloco `# === CONTEÚDO DA APRESENTAÇÃO ===` — nunca
reescreva as funções de clone ou de manipulação de texto.

---

## Pré-requisitos de execução

Antes de rodar o script, copie o template para o ambiente de execução:

```bash
cp "/Users/rafaeleugenio/Documents/Obsidian Vault/Skills/citiesoft-pptx/assets/Onboarding.pptx" /home/claude/Onboarding.pptx
```

---

## Dados necessários

Antes de gerar, confirme com o usuário:

| Campo | Descrição | Exemplo |
|---|---|---|
| Slides de **Citação** | Frase com destaque inline em azul | "Onde tecnologia gera **impacto real**" |
| Slides de **Conteúdo** | Título (2 linhas) + corpo de texto | "O que é a / **Citiesoft?**" + parágrafo |
| Slides de **Keywords** | Título + 4–6 palavras curtas em azul | Clara, Confiável, Tecnológica... |
| Slides de **Bullets** | Frase intro + lista de ações/itens | "Os próximos passos são:" + lista |
| `section_name` | Rótulo do rodapé de cada slide | "Boas vindas à Citiesoft" |

---

## Os 4 tipos de slide disponíveis

### 1. `quote_slide(prs, spans, section_name)` — Citação / Frase de Impacto
**Quando usar**: frases de posicionamento, valores, filosofia, citações de impacto.
- Texto grande no centro-esquerdo em Red Hat Display 21.4pt
- Partes do texto em `GRAY_DARK` (#3C3C3C); palavras de destaque em `BLUE` (#146BFA) bold
- Rodapé com nome da seção em Red Hat Mono 5pt

```python
quote_slide(
    prs,
    spans=[
        ('"Onde tecnologia gera ', GRAY_DARK, False),
        ('impacto real', BLUE, True),
        ('."', GRAY_DARK, False),
    ],
    section_name="Boas vindas à Citiesoft"
)
```

### 2. `content_slide(prs, title_line1, title_line2, body_text, section_name)` — Título + Corpo
**Quando usar**: definições, explicações, conceitos, apresentação de módulos/features.
- Título em 2 linhas: linha 1 preta normal + linha 2 azul bold (Red Hat Display 25.6pt)
- Corpo de texto em Inter 5.7pt preto (str ou list de str para múltiplos parágrafos)
- Imagem lateral direita já inclusa no template (preservada do Onboarding.pptx)

```python
content_slide(
    prs,
    title_line1="O que é a",
    title_line2="Citiesoft?",
    body_text="A Citiesoft é uma empresa de tecnologia especializada em soluções digitais para o setor público.",
    section_name="O que é a Citiesoft?"
)
```

### 3. `keywords_slide(prs, page_title, subtitle_label, keywords, body_text, section_name)` — Palavras-chave
**Quando usar**: atributos de marca, pilares estratégicos, características, valores — termos curtos de impacto visual.
- Página dividida: texto de apoio à esquerda + lista de palavras em azul à direita
- Keywords em Red Hat Display 25.6pt `BLUE` (#146BFA)
- Título em 25.6pt, label em 12.8pt, corpo em Inter 5.7pt

```python
keywords_slide(
    prs,
    page_title="Tom de voz da Citiesoft",
    subtitle_label="Como nos comunicamos:",
    keywords=["Clara", "Confiável", "Institucional", "Tecnológica", "Parceira"],
    body_text="Transmitimos clareza, confiança e maturidade operacional.",
    section_name="O que é a Citiesoft?"
)
```

### 4. `bullets_slide(prs, intro_spans, bullets, section_name)` — Bullets / Lista de Ações
**Quando usar**: próximos passos, checklists, etapas de processo, procedimentos.
- Frase introdutória grande com destaque inline (21.4pt, mesma lógica do `quote_slide`)
- Lista de itens em Red Hat Display 8.6pt `GRAY_DARK`

```python
bullets_slide(
    prs,
    intro_spans=[
        ("A partir de agora os ", GRAY_DARK, False),
        ("próximos passos", BLUE, False),
        (" de vocês serão:", GRAY_DARK, False),
    ],
    bullets=[
        "Baixar as ferramentas necessárias para o trabalho;",
        "Configuração do ambiente de desenvolvimento;",
        "Conseguir acesso ao Teams e Azure DevOps;",
        "Leitura de documentações no SharePoint;",
    ],
    section_name="Como a Citiesoft trabalha?"
)
```

---

## Paleta de cores

```python
BLUE      = RGBColor(0x14, 0x6B, 0xFA)  # #146BFA — azul primário da marca
GRAY_DARK = RGBColor(0x3C, 0x3C, 0x3C)  # #3C3C3C — texto principal
BLACK     = RGBColor(0x00, 0x00, 0x00)  # #000000 — texto em fundo alternativo
```

**Regra de uso de cor**:
- Textos em slides com logo/header → `GRAY_DARK` (#3C3C3C)
- Textos em slides de fundo alternativo (branco puro) → `BLACK` (#000000)
- Destaques, keywords, segunda linha de títulos → `BLUE` (#146BFA)

---

## Tipografia

| Elemento | Fonte | Tamanho | Bold | Cor |
|---|---|---|---|---|
| Citação / Frase principal | Red Hat Display | 21.4pt | parcial (destaques) | #3C3C3C + #146BFA |
| Título linha 1 (content_slide) | Red Hat Display | 25.6pt | Não | #000000 |
| Título linha 2 (content_slide) | Red Hat Display | 25.6pt | Sim | #146BFA |
| Keywords | Red Hat Display | 25.6pt | Não | #146BFA |
| Label de categoria | Red Hat Display | 12.8pt | Não | #000000 |
| Intro de bullets | Red Hat Display | 21.4pt | parcial | #3C3C3C + #146BFA |
| Itens de bullets | Red Hat Display | 8.6pt | Não | #3C3C3C |
| Corpo de texto | Inter | 5.7pt | Não | #000000 |
| Rodapé de seção | Red Hat Mono | 5pt | Sim | #3C3C3C |

---

## Dimensões do slide

**10.0" × 5.625"** — formato 16:9 widescreen padrão.
Definidas automaticamente ao carregar o `Onboarding.pptx` — não altere.

---

## Como adaptar o template_base.py

1. **Leia o script** (`assets/template_base.py`)
2. **Copie para `/home/claude/`** como `citiesoft_apresentacao.py`
3. **Copie o Onboarding.pptx** para `/home/claude/`
4. **Substitua apenas** o bloco `# === CONTEÚDO DA APRESENTAÇÃO ===`:
   - Chame `quote_slide()`, `content_slide()`, `keywords_slide()`, `bullets_slide()`
     na ordem dos slides da apresentação
   - O bloco `for _ in range(ORIGINAL_SLIDE_COUNT): _delete_slide(prs, 0)` ao final
     remove os slides originais do template — mantenha sempre esse bloco
5. **Execute**: `python3 citiesoft_apresentacao.py`
6. **Entregue** o arquivo gerado em `/home/claude/citiesoft_apresentacao.pptx`

---

## Convenções de conteúdo

- **Spans**: ao construir `spans`, use `GRAY_DARK` para o texto base e `BLUE` para os destaques
- **Keywords**: palavras únicas ou pares curtos; máximo 6 itens por slide
- **Bullets**: frases curtas terminando com `;` ou `.`; máximo 6 itens
- **Corpo de texto**: máximo 4–5 linhas em Inter; seja objetivo
- **section_name**: deve identificar o capítulo/seção atual da apresentação, não o slide em si
- **title_line2**: sempre em azul bold — use para o conceito principal, nome do produto ou destaque

---

## Checklist de entrega

- [ ] Script executou sem erros
- [ ] Arquivo `.pptx` gerado em `/home/claude/`
- [ ] Slides originais do template foram removidos (apenas os novos slides permanecem)
- [ ] Logo Citiesoft visível em todos os slides (preservado do Onboarding.pptx)
- [ ] Fontes Red Hat Display e Inter aplicadas
- [ ] Azul #146BFA nos destaques corretos
- [ ] Rodapé de seção preenchido em todos os slides
