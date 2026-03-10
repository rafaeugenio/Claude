---
name: solution-ideation
description: Facilita uma sessão de ideação estruturada para gerar candidatos de solução para um problema já enquadrado. Usa técnicas do curso (silent storming, brainstorm reverso, crazy eights, storyboard) e entrega ideias organizadas por viabilidade e alinhamento com a oportunidade. Use depois de ter a oportunidade bem definida e antes de decidir o que prototipar.
---

# Solution Ideation

Gera múltiplas candidatas de solução para uma oportunidade definida, usando técnicas de ideação estruturadas e organizando as ideias por critérios práticos.

## Como usar

Forneça:
- **Oportunidade ou problema enquadrado:** a dor do usuário em formato de job ou framing correto (não a solução)
- **Perfis envolvidos:** quem são os usuários afetados
- **Restrições conhecidas:** técnicas, de prazo, de escopo que já existem
- **Modo:** `rápido` (gera ideias direto) ou `facilitado` (inclui roteiro de dinâmica para rodar com o time)

Exemplo de acionamento:
> "Use a skill solution-ideation para a oportunidade: 'O gestor não tem visibilidade das pendências de aprovação distribuídas entre as unidades.' Modo: facilitado."

---

## Modo rápido — Geração direta de ideias

A skill gera candidatas de solução variando ao longo de 3 eixos:

**Eixo 1 — Complexidade de implementação**
- Solução mínima (mudança de processo, sem nova tela)
- Solução incremental (melhoria em fluxo existente)
- Solução nova (funcionalidade ou módulo novo)

**Eixo 2 — Onde intervém na jornada**
- Antes do problema ocorrer (prevenção)
- Durante o problema (redução de atrito)
- Depois do problema (recuperação / notificação)

**Eixo 3 — Quem resolve**
- O sistema resolve automaticamente
- O usuário resolve com melhor informação
- Outro ator do sistema resolve (ex: gestor, admin)

---

## Modo facilitado — Roteiro de dinâmica com o time

### Preparação (antes da sessão)
- Tempo total sugerido: 90 minutos
- Participantes ideais: 3 a 6 pessoas (PM, designer, dev, stakeholder)
- Material: post-its, papel A4, canetas
- Regra central: **nenhuma ideia é descartada durante a geração**

---

### Bloco 1 — Alinhamento (10 min)

Apresentar para o grupo:
1. A oportunidade enquadrada (job statement ou framing)
2. O que sabemos sobre o usuário (dados de pesquisa, citações reais)
3. As restrições do ciclo (o que não está em jogo)
4. A meta: gerar o maior número de soluções possível, sem julgamento

---

### Bloco 2 — Aquecimento criativo (10 min)

**30 Círculos:** cada participante recebe uma folha com 30 círculos vazios e tem 5 minutos para transformar o maior número possível em objetos reconhecíveis. Objetivo: soltar a autocensura antes da ideação.

---

### Bloco 3 — Silent Storming (15 min)

Cada participante escreve suas ideias individualmente em post-its (1 ideia por post-it) por 10 minutos, em silêncio. Depois, cada um apresenta as ideias colando na parede. Ideias similares são agrupadas.

**Por que silencioso:** evita o viés de ancoragem — a primeira ideia dita em voz alta tende a dominar o grupo.

---

### Bloco 4 — Crazy Eights (10 min)

Dobre uma folha A4 em 8 quadrantes. Cada participante tem 1 minuto por quadrante para esboçar uma solução diferente (ou uma variação da mesma). Foco: volume e variedade, não qualidade do desenho.

Variações aceitas:
- 8 soluções completamente diferentes
- 8 etapas de um mesmo fluxo
- 8 variações de uma mesma interface

---

### Bloco 5 — Brainstorm Reverso — Round Robin (15 min)

1. Cada participante escreve 2 ideias em post-its e passa para o colega da esquerda
2. O colega escreve (em post-it de cor diferente) **o motivo pelo qual essa ideia vai fracassar**
3. O próximo colega escreve **uma solução para esse fracasso**

Resultado: cada ideia original ganha uma camada de risco mapeado e uma sugestão de mitigação.

---

### Bloco 6 — Storyboard (15 min)

Para as 2 ou 3 ideias mais promissoras, esboce um storyboard de 4 a 6 quadros mostrando:
1. O usuário na situação antes do problema
2. O momento em que o problema aparece
3. Como a solução intervém
4. O resultado final para o usuário

O storyboard inclui contexto offline (o usuário no trabalho, no celular, em reunião) — não apenas a tela.

---

### Bloco 7 — Seleção e organização (15 min)

**Dot voting:** cada participante recebe 3 votos para distribuir entre as ideias geradas.

Depois do voto, organize as ideias em quadrantes:

```
              BAIXO ESFORÇO     |    ALTO ESFORÇO
ALTA ADERÊNCIA  Prototipar já ✅ |    Investigar ⚠️
BAIXA ADERÊNCIA Descartar ❌    |    Guardar para depois 🔄
```

---

## Saída gerada (para ambos os modos)

```
## Ideação — [Oportunidade]

**Oportunidade:** [job statement ou framing]
**Data:** [data]
**Participantes:** [se modo facilitado]

---

### Candidatas de solução

#### Grupo 1 — [tema ou eixo]
- **Ideia:** [descrição]
  - Aderência ao job: Alta / Média / Baixa
  - Esforço estimado: Alto / Médio / Baixo
  - Risco mapeado: [o que pode falhar]
  - Forma de validar: [tipo de experimento]

- **Ideia:** [descrição]
  - ...

#### Grupo 2 — [tema ou eixo]
- ...

---

### Ideias descartadas (e por quê)
- [Ideia]: [motivo — fora de escopo, risco alto, não atende o job]

---

### Próximos passos
Top 3 para investigar / prototipar:
1. [Ideia] — validar com: [método]
2. [Ideia] — validar com: [método]
3. [Ideia] — validar com: [método]
```

---

## Conexão com outras skills

- Use **opportunity-tree** para garantir que as ideias geradas aqui estejam ancoradas em uma oportunidade real
- Use **hypothesis-builder** para transformar cada candidata em uma hipótese estruturada
- Use **impact-mapper** para entender onde cada candidata toca no sistema antes de prototipar
