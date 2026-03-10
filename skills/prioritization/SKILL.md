---
name: prioritization
description: Prioriza listas de features, oportunidades ou bugs aplicando o framework mais adequado ao contexto. Use em plannings, revisões de backlog ou ao apresentar um roadmap para stakeholders.
---

# Prioritization

Aplica frameworks de priorização ao contexto informado e devolve uma lista rankeada com justificativa por critério.

## Como usar

Forneça:
- **Lista de itens:** features, oportunidades, bugs ou hipóteses
- **Contexto:** qual é o objetivo do ciclo? (aumentar retenção, lançar MVP, reduzir bugs críticos, etc.)
- **Restrições:** prazo, tamanho do time, dependências técnicas conhecidas
- **Tipo de priorização** (opcional — a skill escolhe se não informado):
  - Backlog de features → RICE ou MoSCoW
  - Oportunidades de discovery → Árvore de Oportunidades + Matriz de Oportunidades
  - Bugs e melhorias críticas → GUT
  - Análise estratégica do portfólio → Modelo Kano

Exemplo de acionamento:
> "Use a skill prioritization para priorizar esse backlog do Ponto Eletrônico com foco no lançamento do MVP. [lista de itens]"

---

## Frameworks disponíveis

### MoSCoW
Usado para: definir escopo de MVP ou sprint, comunicar prioridades para stakeholders.

| Categoria | Critério | Ação |
|-----------|----------|------|
| **Must have** | Sem isso o produto não funciona ou viola contrato | Fazer obrigatoriamente |
| **Should have** | Importante, mas há workaround | Fazer se couber no ciclo |
| **Could have** | Agrega valor, mas não é urgente | Backlog futuro |
| **Won't have** | Fora de escopo agora | Documentar e descartar por ora |

---

### RICE Score
Usado para: comparar features de impacto similar com critérios objetivos.

Fórmula: `(Reach × Impact × Confidence) ÷ Effort`

| Dimensão | Pergunta | Escala |
|----------|----------|--------|
| **Reach** | Quantos usuários são afetados por mês? | Número absoluto |
| **Impact** | Qual o impacto na métrica principal? | 0.25 / 0.5 / 1 / 2 / 3 |
| **Confidence** | Qual a certeza sobre Reach e Impact? | 50% / 80% / 100% |
| **Effort** | Quantas person-weeks de trabalho? | Número de semanas |

Quanto maior o RICE, maior a prioridade.

---

### Matriz PIC (Impacto × Esforço)
Usado para: decisões rápidas em planning, triagem visual de ideias.

```
              BAIXO ESFORÇO    |    ALTO ESFORÇO
ALTO IMPACTO  Quick Wins ✅    |    Investigar ⚠️
BAIXO IMPACTO Considerar 🔄   |    Descartar ❌
```

---

### Matriz GUT
Usado para: priorizar bugs, problemas operacionais e melhorias críticas.

Pontue de 1 a 5 cada dimensão:
- **G — Gravidade:** qual o impacto se não resolver?
- **U — Urgência:** quanto tempo temos antes de agravar?
- **T — Tendência:** vai piorar sozinho ao longo do tempo?

Score = G × U × T (quanto maior, mais urgente)

---

### Modelo Kano
Usado para: avaliar onde investir esforço no portfólio de funcionalidades.

| Categoria | Definição | Estratégia |
|-----------|-----------|------------|
| **Básicas** | O mínimo esperado — ausência gera insatisfação extrema | Garantir que existem e funcionam |
| **Lineares** | Mais = melhor na percepção do usuário | Melhorar continuamente |
| **Encantadores** | Surpreendem — ausência não frustra, presença encanta | Investir para diferenciação |
| **Indiferentes** | O usuário não liga | Cortar ou não priorizar |

Aviso: encantadores de hoje viram básicos amanhã.

---

### Árvore de Oportunidades (Teresa Torres)
Usado para: priorizar no discovery, conectar oportunidades à meta de negócio.

Estrutura em camadas:
```
Meta de negócio (OKR do ciclo)
└── Oportunidade A (dor do usuário)
    ├── Solução 1 (hipótese testável)
    └── Solução 2 (hipótese testável)
└── Oportunidade B
    └── ...
```

Critérios de contraste entre oportunidades:
1. Aderência à estratégia do ciclo
2. Potencial de mercado (quantos usuários afeta)
3. Time to market (quão rápido podemos aprender)
4. Complexidade de implantação

---

## Saída gerada

```
## Contexto da priorização
Objetivo do ciclo:
Restrições:
Framework aplicado:

## Lista priorizada

| Posição | Item | Score/Categoria | Justificativa |
|---------|------|-----------------|---------------|
| 1 | ... | ... | ... |
| 2 | ... | ... | ... |

## Itens fora do escopo agora
- [Item]: [motivo]

## Alertas
- [Dependência técnica identificada]
- [Risco de priorizar X sem antes validar Y]

## Próximo passo
[ ] Validar priorização com o time técnico (esforço)
[ ] Apresentar para stakeholders com justificativa por critério
[ ] Definir critério de sucesso para os top 3 itens
```

---

## Avisos importantes

- **Frameworks não são receitas.** Servem para organizar o raciocínio, não para substituir julgamento.
- **Não priorize por intuição isolada, demanda de vendas ou paridade com concorrente** sem cruzar com dados e estratégia.
- **Dados de uso e aprendizados de discovery têm peso maior** do que opinião de stakeholder sem evidência.
- **Priorização colaborativa** com Negócios, Tecnologia e Design produz decisões mais sustentáveis do que decisão unilateral.
