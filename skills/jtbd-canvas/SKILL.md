---
name: jtbd-canvas
description: Mapeia o Job to be Done completo de uma funcionalidade ou oportunidade, incluindo dimensões funcional, emocional e social, e calcula o Opportunity Gap (ODI) para priorizar o que desenvolver. Use para entender profundamente o que o usuário está tentando realizar antes de propor qualquer solução.
---

# JTBD Canvas

Mapeia o "trabalho" que o usuário contrata o produto para realizar, nas três dimensões do Job, e identifica onde estão as maiores oportunidades de inovação.

## Como usar

Forneça:
- **Contexto:** qual módulo, fluxo ou situação está sendo analisada
- **Perfil do usuário:** quem executa o job (ex: Servidor, Gestor, Parlamentar)
- **Atividade central:** o que o usuário está tentando fazer (pode ser vago — a skill aprofunda)
- **Dados qualitativos disponíveis** (opcional): trechos de entrevistas, tickets, observações

Exemplo de acionamento:
> "Use a skill jtbd-canvas para mapear o job do Servidor ao tentar justificar uma falta no sistema de Ponto Eletrônico."

---

## Estrutura do Canvas gerado

### 1. Job Statement (Declaração do Job)

Formato: **[Ação] + [Objeto] + [Contexto/Circunstância]**

> Exemplo: "Registrar e justificar uma ausência no trabalho sem precisar ir pessoalmente ao setor de RH"

O Job Statement deve:
- Começar com um verbo no infinitivo
- Descrever o resultado desejado, não a solução
- Incluir o contexto que torna o job relevante
- Ser estável ao longo do tempo (a tecnologia muda, o job não)

---

### 2. Dimensões do Job

#### Job Funcional
A tarefa prática — o que o usuário precisa conseguir fazer operacionalmente.

```
Job funcional: [ação + resultado concreto]
Situação de disparo: [quando esse job surge?]
Frequência: [com que regularidade ocorre?]
Atores envolvidos: [quem mais participa?]
```

#### Job Emocional — Dimensão Pessoal
Como o usuário quer se sentir ao realizar o job.

```
Quer se sentir: [ex: seguro, no controle, aliviado, produtivo]
Quer evitar sentir: [ex: ansioso, envergonhado, perdido, dependente]
```

#### Job Emocional — Dimensão Social
Como o usuário quer ser percebido pelos outros ao realizar o job.

```
Quer ser visto como: [ex: organizado, responsável, ágil, confiável]
Quer evitar ser visto como: [ex: descuidado, incompetente, problemático]
```

---

### 3. Mapa de Forças (Switching Forces)

O que puxa o usuário para uma nova solução vs. o que o prende à solução atual.

```
FORÇAS DE ATRAÇÃO (para nova solução)    FORÇAS DE RETENÇÃO (solução atual)
────────────────────────────────         ────────────────────────────────
Ansiedade com o processo atual:          Hábito estabelecido:
[ex: medo de perder o prazo]             [ex: já sabe como funciona o fluxo manual]

Desejo de melhoria:                      Custo de mudança:
[ex: quero resolver pelo celular]        [ex: teria que aprender um novo sistema]
```

---

### 4. Outcomes (Métricas do Job — ODI)

Os outcomes são as métricas pelas quais o usuário mede se o job foi bem feito.
Cada outcome tem direção e unidade de medida.

Formato: **[Minimizar/Maximizar] + [unidade de medida] + [contexto]**

```
Outcomes identificados:
1. Minimizar o tempo necessário para registrar uma justificativa
2. Minimizar a chance de a justificativa ser recusada por falta de informação
3. Maximizar a visibilidade do status da solicitação após o envio
4. Minimizar a necessidade de contato com o gestor para confirmar recebimento
```

---

### 5. Opportunity Gap (Cálculo de Prioridade)

Para cada outcome, avalie (escala de 1 a 5):
- **Importância:** o quanto este outcome é importante para o usuário?
- **Satisfação atual:** o quanto as soluções atuais já satisfazem este outcome?

**Fórmula:** `Importância + (Importância − Satisfação)`

| Outcome | Importância | Satisfação | Gap |
|---------|-------------|------------|-----|
| [Outcome 1] | | | |
| [Outcome 2] | | | |

**Interpretação:**
- Gap > 115 → Grande oportunidade (alta importância, baixa satisfação)
- Gap 100–115 → Oportunidade moderada
- Gap < 100 → Mercado já bem atendido

---

### 6. Concorrentes reais do Job

Lembre: os concorrentes não são apenas sistemas similares — são todas as formas que o usuário usa para realizar o mesmo job hoje.

```
Soluções atuais em uso:
- [ex: WhatsApp com o gestor]
- [ex: papel e protocolo físico]
- [ex: planilha compartilhada]
- [ex: ligação telefônica]

O que funciona nessas soluções que o produto atual não oferece?
- [insight 1]
- [insight 2]
```

---

### 7. Síntese e recomendação

```
Job principal identificado: [Job Statement final]
Maior oportunidade (maior Gap): [Outcome X]
Insight central: [o que a pesquisa revelou sobre a tensão entre o job e a solução atual]

Hipótese de solução sugerida:
Se [intervenção], então [usuário conseguirá] e isso [resultado para o negócio].

Próximo passo: [validar com entrevistas / calcular gap com survey quantitativa / prototipar]
```

---

## Conexão com outras skills

- Use **interview-guide** para coletar os dados que alimentam este canvas
- Use **opportunity-tree** para posicionar este job dentro da árvore de oportunidades do ciclo
- Use **hypothesis-builder** para transformar a hipótese de solução em experimento validável
