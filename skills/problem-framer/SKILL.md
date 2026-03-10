---
name: problem-framer
description: Reformula demandas de clientes ou stakeholders do espaço de solução para o espaço de problema, evitando o "build trap". Use antes de iniciar qualquer discovery ou antes de escrever specs para garantir que o enquadramento está correto.
---

# Problem Framer

Transforma demandas mal enquadradas em oportunidades bem definidas, abrindo o leque de soluções possíveis antes de comprometer com qualquer caminho.

## Como usar

Forneça a demanda como recebida — pode ser uma solicitação de cliente, uma feature request, um ticket de suporte ou uma ideia interna.

Exemplos de acionamento:
> "Use a skill problem-framer para reformular essa demanda: 'O cliente quer um botão para exportar o relatório de ponto para Excel.'"

> "Use a skill problem-framer: a ALEMA pediu uma tela de parametrização avançada de votações."

---

## Workflow de reformulação

### 1. Diagnóstico do enquadramento atual

Identifique em qual armadilha a demanda se encaixa:

| Armadilha | Sinal | Exemplo |
|-----------|-------|---------|
| **Solução disfarçada de problema** | A demanda já descreve uma feature | "Quero um filtro por data" |
| **Substantivo no lugar de verbo** | A demanda nomeia uma coisa, não uma ação | "Preciso de um dashboard" |
| **Escopo amplo demais** | Não dá para saber por onde começar | "Precisa melhorar o sistema" |
| **Pedido de paridade** | Copiar concorrente sem entender o porquê | "O sistema X tem isso, quero também" |

---

### 2. Reformulação: de substantivos para verbos

Técnica central: **substitua o objeto pedido pela ação que o usuário precisa realizar**.

Antes → Depois:
- "Botão de exportar para Excel" → "O usuário precisa consultar dados históricos fora do sistema"
- "Dashboard de indicadores" → "O gestor precisa monitorar o andamento sem precisar abrir múltiplas telas"
- "Tela de parametrização" → "O operador precisa adaptar o comportamento do sistema sem depender de suporte técnico"

---

### 3. Estrutura do enquadramento gerado

```
## Demanda recebida
[Exatamente como chegou]

## Diagnóstico
Tipo de armadilha: [solução disfarçada / substantivo / escopo amplo / paridade]
Por que isso importa: [risco de construir a coisa errada]

## Reformulação
**Job to be Done:**
[Ação] + [Objeto] + [Contexto]
Ex: "Consultar o histórico de ponto de um servidor sem precisar abrir cada registro individualmente"

**Problema real:**
[Qual atrito ou dor existe hoje que gera essa demanda?]

**Pergunta de pesquisa:**
[O que precisamos descobrir antes de propor qualquer solução?]

## Soluções possíveis (sem comprometimento)
Ao enquadrar o problema corretamente, as soluções possíveis incluem:
1. [Solução A — pode ser a solicitada originalmente]
2. [Solução B — alternativa mais simples]
3. [Solução C — alternativa mais estratégica]

## Riscos do enquadramento atual
- Se construirmos apenas o pedido original: [risco]
- Se o problema real for diferente do que imaginamos: [risco]

## Próximo passo recomendado
[ ] Validar o enquadramento com uma entrevista rápida (15 min) com [perfil do usuário]
[ ] Checar dados existentes (tickets de suporte, NPS, métricas de uso)
[ ] Apresentar o enquadramento para o stakeholder e alinhar expectativas
```

---

## Princípios de enquadramento

**Regra 1 — Foco no comportamento, não na feature**
O usuário não quer "um Excel", ele quer conseguir fazer algo com os dados. Entenda o destino antes de escolher o transporte.

**Regra 2 — O discovery não precisa gerar uma feature**
Às vezes o acionável correto é uma mudança de processo interno, treinamento ou até a decisão de não construir nada.

**Regra 3 — Enquadramento errado é o pior erro**
É pior do que errar no método de pesquisa. Um discovery bem executado em cima de um problema errado desperdiça tempo e capital político.

**Regra 4 — Envolva o stakeholder no enquadramento**
Use a Matriz CDE antes de começar: alinhe **C**lareza (o que sabemos), **D**esafio (o que precisamos descobrir) e **E**xpectativas (o que será entregue). Documente por escrito.
