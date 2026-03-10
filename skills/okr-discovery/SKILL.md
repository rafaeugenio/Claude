---
name: okr-discovery
description: Cria OKRs bem estruturados para ciclos de discovery, com KRs qualitativos e marcos ponderados por peso. Use no início de cada trimestre ou ao apresentar um ciclo de discovery para liderança e stakeholders.
---

# OKR Discovery

Gera OKRs adequados para ciclos de product discovery, evitando os erros comuns de forçar métricas de negócio em etapas de aprendizado.

## Como usar

Forneça:
- **Tipo de discovery:**
  - `validatório` — testar uma ideia ou tese específica
  - `exploratório` — mapear uma oportunidade ainda desconhecida
  - `projetizado` — demanda de cliente B2B com entrega esperada
- **Oportunidade ou problema central:** o que está sendo investigado
- **Duração do ciclo:** semanas ou trimestre
- **Stakeholders envolvidos:** quem precisa aprovar ou ser informado
- **Restrições:** orçamento, recursos, dependências

Exemplo de acionamento:
> "Use a skill okr-discovery para criar o OKR de um discovery exploratório sobre como melhorar o processo de homologação de ponto na ALEMA. Duração: 6 semanas."

---

## Por que OKRs de discovery são diferentes

O erro mais comum: definir KRs de conversão ou adoção para um discovery que ainda não sabe se a ideia é boa.

**Regra central:**
- "Construir para aprender" → KRs medem **execução e entregáveis de aprendizado**
- "Construir para ganhar" → KRs medem **métricas de negócio** (conversão, adoção, retenção)

Forçar uma meta de "15% de aumento de conversão" em um discovery exploratório quebra a premissa de que o discovery serve para **reduzir risco**, não para garantir sucesso antecipado.

---

## Estrutura gerada por tipo

### Discovery Exploratório

```
Objetivo: Descobrir como endereçar a oportunidade [X]

KR 1: Conduzir [N] entrevistas com [perfil do usuário] e documentar os principais insights
KR 2: Mapear pelo menos 3 hipóteses viáveis para endereçar a oportunidade
KR 3: Apresentar resultados para stakeholders e obter decisão sobre qual hipótese priorizar no próximo ciclo
```

---

### Discovery Validatório

```
Objetivo: Validar (ou invalidar) a hipótese [X] e definir o próximo passo com clareza

KR 1: Executar [tipo de experimento] com [N] usuários e documentar resultados
KR 2: Finalizar 100% a Prova de Conceito (POC) com parecer final (Go / No-go)
KR 3: Obter aprovação de [N] stakeholders sobre seguir ou descartar a iniciativa
```

---

### Discovery Projetizado (demanda B2B)

Evite KRs binários (0% ou 100%). Use marcos ponderados por peso.

```
Objetivo: Entregar [iniciativa X] com qualidade e alinhamento validado em cada etapa

KR 1: Aprovar o PRD / especificação funcional com stakeholders (peso: 20%)
KR 2: Validar protótipo navegável com [N] usuários (peso: 15%)
KR 3: Aprovar arquitetura técnica com time de engenharia (peso: 15%)
KR 4: Homologar V1 com cliente (peso: 30%)
KR 5: Lançar em produção com documentação entregue (peso: 20%)

Progresso do OKR = soma dos pesos das etapas concluídas
```

---

## Template de comunicação para liderança

```
## Discovery — Alinhamento de OKR

**Oportunidade:** [descrição do problema ou hipótese]
**Tipo:** [exploratório / validatório / projetizado]
**Duração:** [X semanas / trimestre]
**Objetivo do ciclo:** [frase clara e inspiradora]

**O que será entregue:**
- [Entregável 1]
- [Entregável 2]
- [Entregável 3]

**O que NÃO será entregue neste ciclo:**
- [Escopo fora]: deixar claro evita cobrança indevida

**Critério de Go/No-go:**
Se [condição de sucesso], seguimos com a iniciativa.
Se [condição de falha], descartamos e aprendemos [o quê].

**Próxima comunicação:** [data do próximo check-in]
```

---

## Cadência de comunicação durante o ciclo

| Frequência | Público | Formato |
|------------|---------|---------|
| Diária (ou a cada entrevista) | Time de produto | Update rápido no Slack/canal: 3 bullet points do que foi aprendido |
| Semanal | Liderança direta | Breve check-in: o que mudou no entendimento do problema |
| A cada 2 semanas | Stakeholders | Documento com highlights, mudanças de rota e próximos passos |
| Ao final | Todos | Apresentação completa com dados, insights e decisão recomendada |

---

## Erros comuns a evitar

- **KR binário:** "Entregar o discovery" = 0% ou 100%, sem visibilidade de progresso
- **Prazo sem timebox:** discovery exploratório sem data de encerramento pode ser infinito
- **Meta de negócio no discovery:** "Aumentar conversão em 10%" não faz sentido antes de saber se a solução funciona
- **Relatório surpresa:** sumir por semanas e voltar com 80 slides que ninguém pediu — use pílulas contínuas
