---
name: hypothesis-builder
description: Transforma uma ideia ou candidata de solução em uma hipótese de validação estruturada no formato lean, com suposição, critério de sucesso e tipo de experimento adequado. Use depois da ideação, antes de prototipar ou desenvolver qualquer coisa.
---

# Hypothesis Builder

Estrutura hipóteses de validação que podem ser testadas com o menor custo possível antes de qualquer comprometimento de desenvolvimento.

## Como usar

Forneça:
- **Ideia ou candidata de solução:** pode ser vaga — a skill ajuda a estruturar
- **Risco que você quer reduzir:** desejabilidade (as pessoas querem?), viabilidade (conseguimos entregar?), usabilidade (as pessoas conseguem usar?) ou factibilidade (a tecnologia suporta?)
- **Contexto:** projeto, módulo, perfis de usuário envolvidos
- **Restrições:** tempo disponível, acesso a usuários, estágio do produto

Exemplo de acionamento:
> "Use a skill hypothesis-builder para a ideia: 'Criar uma notificação automática para o gestor quando uma solicitação de ajuste ficar pendente por mais de 48h no Ponto Eletrônico.' Risco: desejabilidade."

---

## Os 4 riscos e quando cada um é o foco

| Risco | Pergunta central | Quando priorizar |
|-------|-----------------|------------------|
| **Desejabilidade** | As pessoas têm interesse nisso? | Funcionalidade nova, sem dados de uso |
| **Usabilidade** | As pessoas conseguem usar? | Fluxo complexo, população não técnica |
| **Viabilidade** | Conseguimos entregar o valor manualmente? | Processo novo, integração complexa |
| **Factibilidade** | A tecnologia e o time suportam? | Dependência técnica ou de dados incerta |

---

## Estrutura da hipótese gerada

### 1. Suposição (o ato de fé)

A crença não verificada que sustenta a ideia. Se ela for falsa, a ideia cai.

```
Suposição: Acreditamos que [perfil do usuário] [comportamento assumido]
           porque [razão que justifica essa crença].

Exemplo: Acreditamos que gestores deixam solicitações pendentes por mais de
         48h porque não percebem a falta de ação — não por falta de intenção.
```

---

### 2. Hipótese (a aposta testável)

O que especificamente você acredita que acontecerá se você fizer a intervenção.

```
Formato: Se [intervenção específica], então [usuário fará X],
         o que resultará em [impacto mensurável].

Exemplo: Se enviarmos uma notificação push ao gestor após 48h de pendência,
         então ele aprovará ou rejeitará a solicitação no mesmo dia,
         o que reduzirá o tempo médio de resolução de >72h para <48h.
```

---

### 3. Tipo de experimento recomendado

#### Experimentos de Desejabilidade (sem código)

| Método | Como funciona | Quando usar |
|--------|---------------|-------------|
| **Fake Door** | Botão/feature que ainda não existe; mede cliques | Validar interesse antes de construir |
| **Landing Page** | Página apresentando a solução; mede cadastros | Validar proposta de valor |
| **Entrevista com protótipo** | Mostrar mockup e observar reação | Validar se o conceito faz sentido |
| **Teste dos 5 segundos** | Usuário vê a tela por 5s; o que memorizou? | Validar clareza da proposta |

#### Experimentos de Viabilidade (entrega manual)

| Método | Como funciona | Quando usar |
|--------|---------------|-------------|
| **Concierge** | Você entrega o valor manualmente; usuário sabe | Validar se o processo funciona antes de automatizar |
| **Mágico de Oz** | Você entrega manualmente; usuário acha que é automático | Validar experiência completa sem desenvolver o sistema |
| **Planilha / No-Code** | Simula o sistema com ferramentas simples | Validar fluxo com dados reais |

#### Experimentos de Usabilidade

| Método | Como funciona | Quando usar |
|--------|---------------|-------------|
| **Teste moderado presencial** | Usuário usa o protótipo; você observa | Entender onde trava, o que confunde |
| **Teste não-moderado (Maze)** | Usuário grava si mesmo navegando | Escala, rapidez, usuário à vontade |
| **Análise heurística** | Especialista avalia com base nas 10 heurísticas de Nielsen | Rápido, sem recrutar usuários |
| **Teste guerrilha** | Abordagem informal com qualquer pessoa | MVP rápido com perfil genérico |

---

### 4. Critério de sucesso (definido antes de rodar)

O critério de sucesso deve ser combinado com o time **antes** do experimento — não depois de ver os resultados.

```
Critério: Se [métrica X] atingir [valor Y] em [prazo Z], a hipótese é validada.
          Se não atingir, a hipótese é invalidada e [próximo passo].

Exemplo: Se pelo menos 3 de 5 gestores testados aprovarem ou rejeitarem a
         solicitação em até 24h após receber a notificação, validamos.
         Se menos de 2 gestores agirem, investigamos se o canal (notificação)
         é o problema ou se a raiz é outra.
```

Métricas por tipo de risco:

| Risco | Métricas típicas |
|-------|-----------------|
| Desejabilidade | Taxa de clique, cadastros, respostas ao survey de interesse |
| Usabilidade | Taxa de conclusão da tarefa, número de erros, SUS score |
| Viabilidade | Usuários atendidos manualmente, custo de operação, NPS pós-uso |
| Factibilidade | Tempo de resposta, taxa de erro técnico, cobertura dos dados |

---

### 5. Aprendizado esperado

O que você vai saber após o experimento — independente do resultado.

```
Se validado: [o que isso confirma sobre o usuário/problema/solução]
Se invalidado: [o que isso revela? qual é a próxima hipótese a testar?]
Aprendizado mínimo garantido: [o que aprendemos apenas por rodar o experimento]
```

---

## Saída gerada completa

```
## Hipótese — [Nome da ideia]

**Projeto / Módulo:** [contexto]
**Risco principal:** [Desejabilidade / Usabilidade / Viabilidade / Factibilidade]
**Data:** [data]

---

### Suposição
[texto]

### Hipótese
Se [intervenção], então [comportamento esperado], resultando em [impacto].

### Experimento recomendado
Tipo: [método]
Como executar: [passos práticos]
Quem recrutar: [perfil e quantidade]
Prazo: [tempo necessário]
Custo estimado: [horas de trabalho / incentivo para usuários]

### Critério de sucesso
Validado se: [métrica >= valor em prazo]
Invalidado se: [métrica < valor]

### Aprendizado esperado
Se validado: [...]
Se invalidado: [...]
Aprendizado mínimo: [...]

### Próximo passo após o experimento
[ ] Prototipar e testar usabilidade
[ ] Construir MVP técnico
[ ] Descartar e testar hipótese alternativa: [qual]
[ ] Reformular o enquadramento do problema
```

---

## Erros a evitar

- **Definir o critério de sucesso depois de ver os resultados:** isso invalida o experimento
- **Testar com colegas internos:** eles conhecem o sistema e o contexto, não representam o usuário real
- **Experimento grande demais:** se o experimento demora mais de 2 semanas, procure uma versão menor
- **Confundir experimento com prova:** um experimento reduz risco, não garante sucesso

---

## Conexão com outras skills

- Use **solution-ideation** para gerar as candidatas antes de estruturar a hipótese
- Use **impact-mapper** para entender o escopo técnico antes de definir o tipo de experimento
- Use **okr-discovery** para amarrar o critério de sucesso ao OKR do ciclo
