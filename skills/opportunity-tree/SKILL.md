---
name: opportunity-tree
description: Monta a Árvore de Oportunidades (Opportunity Solution Tree de Teresa Torres) conectando a meta de negócio do ciclo às dores reais dos usuários e às hipóteses de solução testáveis. Use no início de um ciclo de discovery para organizar o espaço de problemas antes de gerar soluções.
---

# Opportunity Tree

Estrutura o espaço de problemas de forma visual e hierárquica, evitando o salto prematuro para soluções.

## Como usar

Forneça:
- **Meta de negócio (OKR do ciclo):** o resultado que o produto precisa gerar (ex: aumentar retenção, reduzir chamados de suporte)
- **Oportunidades conhecidas:** dores, atritos ou jobs não atendidos dos usuários que você já identificou (podem ser hipóteses ainda)
- **Contexto do produto:** qual sistema e quais perfis de usuário estão envolvidos

Exemplo de acionamento:
> "Use a skill opportunity-tree para o ciclo do Ponto Eletrônico com meta de reduzir o volume de solicitações manuais de ajuste. Usuários: Servidor e Gestor."

---

## Estrutura da Árvore gerada

```
META DE NEGÓCIO (North Star do ciclo)
├── OPORTUNIDADE A — [dor ou job não atendido do usuário]
│   ├── Hipótese de solução A1 — [intervenção testável]
│   ├── Hipótese de solução A2 — [intervenção testável]
│   └── Hipótese de solução A3 — [intervenção testável]
│
├── OPORTUNIDADE B — [dor ou job não atendido do usuário]
│   ├── Hipótese de solução B1
│   └── Hipótese de solução B2
│
└── OPORTUNIDADE C — [dor ou job não atendido do usuário]
    └── Hipótese de solução C1
```

---

## Critérios de contraste entre oportunidades

Para decidir qual oportunidade atacar primeiro, avalie cada uma com 4 critérios:

| Critério | Pergunta |
|----------|----------|
| **Aderência estratégica** | Está diretamente ligada à meta do ciclo? |
| **Potencial de impacto** | Quantos usuários sofrem com essa dor? Com que frequência? |
| **Time to market** | Quão rápido conseguimos aprender com um experimento? |
| **Complexidade** | Qual o esforço técnico e organizacional para testar? |

---

## Regras da Árvore

**Oportunidades são problemas, não soluções.**
Errado: "Criar uma tela de aprovação em lote" → isso é solução.
Certo: "O gestor perde muito tempo aprovando solicitações uma a uma" → isso é oportunidade.

**Uma oportunidade pode ter múltiplas soluções.**
O objetivo da árvore é manter o time gerando alternativas, não se apegar à primeira ideia.

**Hipóteses de solução são apostas, não compromissos.**
Colocar uma hipótese na árvore não significa que ela será construída — significa que ela será testada.

**Não há limite de profundidade.**
Uma oportunidade grande pode ser desdobrada em sub-oportunidades antes de chegar nas hipóteses de solução.

---

## Saída gerada

```
## Árvore de Oportunidades — [Projeto / Ciclo]

**Meta:** [OKR do ciclo]
**Usuários principais:** [perfis envolvidos]
**Data:** [data de criação]

---

### Oportunidade A — [título da dor]
**Evidências:** [de onde vem essa informação — entrevistas, tickets, dados?]
**Frequência:** [quantas pessoas, com que frequência]
**Conexão com a meta:** [como resolver isso move a agulha do OKR?]

Hipóteses:
- A1: [descrição da intervenção] → resultado esperado: [comportamento do usuário]
- A2: [descrição da intervenção] → resultado esperado: [comportamento do usuário]

---

### Oportunidade B — [título da dor]
**Evidências:**
**Frequência:**
**Conexão com a meta:**

Hipóteses:
- B1: [descrição]
- B2: [descrição]

---

## Próximo passo recomendado

Oportunidade prioritária: [A / B / C]
Justificativa: [contraste pelos 4 critérios]
Hipótese para testar primeiro: [X]
Tipo de experimento sugerido: [entrevista exploratória / fake door / concierge / A/B]
```

---

## Conexão com outras skills

- Use **problem-framer** antes se a meta ou as oportunidades chegaram como solução disfarçada
- Use **jtbd-canvas** para aprofundar o Job de cada oportunidade antes de gerar hipóteses
- Use **hypothesis-builder** para detalhar cada hipótese da árvore em um experimento validável
- Use **impact-mapper** quando uma hipótese avançar para investigar onde ela toca no sistema
