# Guia de Skills

Skills são prompts especializados que orientam o Claude Code a executar tarefas recorrentes com qualidade e consistência. Cada skill vive em `Skills/<nome>/SKILL.md`.

---

## Tabela de acesso rápido

### Discovery

| Skill                                     | O que faz                                                                     | Quando acionar                                                          | Arquivo                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------- |
| [opportunity-tree](#opportunity-tree)     | Monta a Árvore de Oportunidades conectando meta → dores → hipóteses           | No início de um ciclo para organizar o espaço de problemas              | [[opportunity-tree/SKILL]]   |
| [jtbd-canvas](#jtbd-canvas)               | Mapeia o Job to be Done completo com Opportunity Gap (ODI)                    | Para entender profundamente o que o usuário tenta realizar              | [[jtbd-canvas/SKILL]]        |
| [solution-ideation](#solution-ideation)   | Facilita ideação estruturada (silent storm, crazy eights, brainstorm reverso) | Após ter a oportunidade definida, antes de prototipar                   | [[solution-ideation/SKILL]]  |
| [hypothesis-builder](#hypothesis-builder) | Estrutura hipóteses lean com experimento, critério de sucesso e aprendizado   | Antes de construir qualquer coisa — transforma ideia em aposta testável | [[hypothesis-builder/SKILL]] |
| [impact-mapper](#impact-mapper)           | Mapeia módulos, entidades, fluxos e regras impactadas por uma funcionalidade  | Antes de prototipar ou estimar esforço técnico                          | [[impact-mapper/SKILL]]      |

### Pesquisa e enquadramento

| Skill | O que faz | Quando acionar | Arquivo |
|-------|-----------|----------------|---------|
| [interview-guide](#interview-guide) | Cria roteiros de entrevista em profundidade com 5 blocos e checklist anti-viés | Antes de reuniões com clientes ou sessões de discovery | [[interview-guide/SKILL]] |
| [problem-framer](#problem-framer) | Reformula demandas do espaço de solução para o espaço de problema | Ao receber uma feature request ou demanda de cliente | [[problem-framer/SKILL]] |

### Planejamento e priorização

| Skill | O que faz | Quando acionar | Arquivo |
|-------|-----------|----------------|---------|
| [prioritization](#prioritization) | Aplica o framework de priorização adequado ao contexto | Em planning, revisão de backlog ou ao montar roadmap | [[prioritization/SKILL]] |
| [okr-discovery](#okr-discovery) | Cria OKRs para ciclos de discovery com KRs qualitativos | No início de um ciclo ou apresentação para liderança | [[okr-discovery/SKILL]] |

### Documentação e comunicação

| Skill | O que faz | Quando acionar | Arquivo |
|-------|-----------|----------------|---------|
| [spec-writer](#spec-writer) | Gera specs de tela (Front-end) ou domínio (Back-end) orientadas ao usuário | Antes de documentar qualquer feature ou módulo | [[spec-writer/SKILL]] |
| [stakeholder-update](#stakeholder-update) | Transforma notas brutas em comunicação executiva estruturada | Ao comunicar resultados de pesquisa ou status de projeto | [[stakeholder-update/SKILL]] |
| [citiesoft-docs](#citiesoft-docs) | Gera documentos `.docx` padronizados Citiesoft | Ao criar apostilas, manuais ou documentação de projeto | [[citiesoft-docs/SKILL]] |

---

## Como acionar uma skill

Em qualquer conversa com o Claude Code, diga:

> "Use a skill **[nome-da-skill]** para [o que você precisa]."

Exemplos:
- "Use a skill **spec-writer** para criar a spec de Front-end do módulo de Homologação do Ponto Eletrônico."
- "Use a skill **problem-framer** para reformular essa demanda: [demanda]"
- "Use a skill **stakeholder-update** para transformar essas notas em um update para o cliente da ALEMA."

---

## Guia detalhado por skill

---

### opportunity-tree

**O que é**
Monta a Árvore de Oportunidades (Opportunity Solution Tree de Teresa Torres), estruturando o espaço de problemas em camadas: meta de negócio → oportunidades (dores dos usuários) → hipóteses de solução testáveis.

**Quando usar**
- No início de um ciclo de discovery para organizar o que sabe e o que não sabe
- Quando há muitas ideias soltas e precisa decidir o que investigar primeiro
- Para comunicar ao time e à liderança por que está apostando em determinada oportunidade

**O que fornecer**
1. Meta de negócio do ciclo (OKR ou objetivo)
2. Oportunidades ou dores já identificadas (podem ser hipóteses)
3. Projeto e perfis de usuário envolvidos

**O que a skill entrega**
- Árvore estruturada em camadas com todas as oportunidades e hipóteses
- Critérios de contraste para decidir qual oportunidade atacar primeiro
- Recomendação de oportunidade prioritária e tipo de experimento sugerido

**Dica de uso**
Oportunidade é sempre uma dor do usuário, não uma solução. Se o que você tem é uma solução, use primeiro o **problem-framer**.

---

### jtbd-canvas

**O que é**
Mapeia o Job to be Done completo nas três dimensões: funcional (o que o usuário precisa fazer), emocional pessoal (como quer se sentir) e emocional social (como quer ser percebido). Calcula o Opportunity Gap pelo método ODI para priorizar quais outcomes têm maior potencial de inovação.

**Quando usar**
- Antes de propor qualquer solução para uma oportunidade identificada
- Quando a pesquisa apontou uma dor mas você quer entender a motivação profunda
- Para mapear os concorrentes reais do job (não apenas sistemas similares)

**O que fornecer**
1. Módulo/fluxo/situação analisada
2. Perfil do usuário
3. Atividade central que está sendo investigada
4. Dados qualitativos disponíveis (opcional)

**O que a skill entrega**
- Job Statement no formato correto (verbo + objeto + contexto)
- As 3 dimensões do job mapeadas
- Mapa de Forças (o que atrai para nova solução vs. o que prende na atual)
- Lista de outcomes com Opportunity Gap calculado
- Concorrentes reais do job
- Hipótese de solução e próximo passo

**Dica de uso**
No contexto B2B dos projetos Citiesoft, o job do **gestor** e o job do **servidor** para a mesma tarefa são completamente diferentes — mapeie separado.

---

### solution-ideation

**O que é**
Facilita uma sessão de ideação estruturada para gerar múltiplas candidatas de solução para uma oportunidade já bem enquadrada. Disponível em modo rápido (gera ideias direto) ou facilitado (roteiro completo para rodar com o time).

**Quando usar**
- Após ter a oportunidade definida e antes de decidir o que prototipar
- Quando o time está preso em uma única ideia e precisa gerar alternativas
- Para facilitar um workshop de ideação com PM, design e engenharia

**O que fornecer**
1. Oportunidade enquadrada (job statement ou framing correto)
2. Perfis de usuário envolvidos
3. Restrições conhecidas (técnicas, de prazo, de escopo)
4. Modo: `rápido` ou `facilitado`

**O que a skill entrega**
- Candidatas de solução organizadas por eixos (complexidade, posição na jornada, quem resolve)
- Modo facilitado: roteiro completo com aquecimento, silent storming, crazy eights, brainstorm reverso e storyboard
- Organização das ideias em matriz de aderência × esforço
- Top 3 para investigar com método de validação sugerido

**Dica de uso**
55 minutos pensando no problema, 5 minutos na solução. Use essa skill somente depois de ter passado pelo **jtbd-canvas** ou **opportunity-tree**.

---

### hypothesis-builder

**O que é**
Transforma uma candidata de solução em uma hipótese de validação lean com estrutura completa: suposição, hipótese testável, experimento adequado ao tipo de risco, critério de sucesso pré-definido e aprendizado esperado.

**Quando usar**
- Antes de prototipar ou desenvolver qualquer coisa
- Quando precisa apresentar uma aposta para liderança com lógica de risco clara
- Para estruturar experimentos rápidos (fake door, concierge, mágico de Oz, A/B)

**O que fornecer**
1. Ideia ou candidata de solução
2. Tipo de risco principal: desejabilidade / usabilidade / viabilidade / factibilidade
3. Contexto do projeto e perfis envolvidos
4. Restrições de tempo e acesso a usuários

**O que a skill entrega**
- Suposição explícita (o ato de fé que sustenta a ideia)
- Hipótese no formato "Se... então... resultando em..."
- Experimento recomendado com passos práticos
- Critério de sucesso definido antes do experimento
- Aprendizado esperado para cenário de validação e de invalidação

**Dica de uso**
O critério de sucesso deve ser combinado **antes** de rodar o experimento — definir depois de ver os resultados invalida o aprendizado.

---

### impact-mapper

**O que é**
Dado uma funcionalidade ou hipótese de solução, analisa e mapeia todos os pontos de impacto no sistema: módulos Front-end e Back-end, entidades de dados, regras de negócio, perfis de acesso e fluxos afetados. Cruza com a documentação existente dos projetos Citiesoft.

**Quando usar**
- Antes de prototipar para entender o escopo técnico real
- Antes de estimar esforço com o time de desenvolvimento
- Quando uma hipótese parece simples mas pode ter impacto cruzado em múltiplos módulos

**O que fornecer**
1. Funcionalidade ou hipótese de solução
2. Projeto: Alema Legis / Ponto Eletrônico / SES Prestação de Contas
3. Perfis de usuário afetados
4. Ponto de entrada na jornada atual

**O que a skill entrega**
- Módulos FE e BE diretamente impactados
- Entidades e dados afetados (novos campos, novas relações, novos status)
- Regras de negócio alteradas ou criadas
- Mudanças de permissão por perfil
- Fluxos afetados (alterados, quebrados ou novos)
- Matriz de risco de impacto × esforço
- Perguntas técnicas para alinhar com engenharia

**Dica de uso**
Use sempre antes do **spec-writer** — o mapeamento de impacto alimenta a seção de regras de negócio e edge cases da spec.

---

### spec-writer

**O que é**
Gera especificações funcionais de telas (Front-end) ou de domínios e APIs (Back-end), enquadrando o trabalho como oportunidade orientada ao usuário — não como lista de funcionalidades.

**Quando usar**
- Antes de começar a documentar qualquer tela, módulo ou endpoint
- Quando uma demanda chega como "preciso de uma tela de X" e você quer transformar em spec completa
- Para manter consistência de estrutura entre os projetos Citiesoft

**O que você precisa fornecer**
1. Projeto e módulo (ex: Ponto Eletrônico / Homologação)
2. Tipo: Front-end ou Back-end
3. Problema do usuário (não a solução)
4. Perfil do usuário (ex: Gestor, Servidor, Parlamentar)

**O que a skill entrega**
- Enquadramento: Job to be Done + critério de sucesso
- Front-end: fluxo principal, estados (vazio, erro, carregamento, sucesso), regras de negócio, edge cases, critérios de aceite, métricas
- Back-end: entidades, regras de negócio, fluxos, permissões por perfil, casos especiais

**Dica de uso**
Use sempre em conjunto com **problem-framer** — primeiro reformule a demanda, depois gere a spec.

---

### interview-guide

**O que é**
Gera roteiros estruturados de entrevista em profundidade seguindo os 5 blocos: abertura, aquecimento, contexto, opiniões/insights e encerramento. Os roteiros são construídos para evitar os principais vieses cognitivos de pesquisa.

**Quando usar**
- Antes de reuniões com clientes para levantar requisitos
- Em sessões de discovery com usuários finais (servidores, gestores, parlamentares)
- Quando você vai entrevistar stakeholders para entender dores do processo

**O que você precisa fornecer**
1. Objetivo da pesquisa (o que você quer descobrir, não confirmar)
2. Perfil do entrevistado (cargo, contexto)
3. Tipo: exploratória ou específica
4. Duração prevista

**O que a skill entrega**
- Roteiro completo com os 5 blocos e perguntas prontas
- Checklist anti-viés para revisar antes de ir para campo
- Instruções de moderação (uso do silêncio, paráfrase, como não entregar respostas)
- Orientação sobre tamanho de amostra por tipo de pesquisa

**Dica de uso**
Em contexto B2B (como Citiesoft), separe entrevistas com o **gestor/cliente** (quem paga) das entrevistas com o **usuário operacional** (quem usa). Os Jobs são completamente diferentes.

---

### problem-framer

**O que é**
Recebe uma demanda como chegou — feature request, pedido de cliente, ticket — e a reformula do espaço de solução para o espaço de problema. Isso abre o leque de soluções possíveis e evita construir a coisa errada.

**Quando usar**
- Sempre que uma demanda chegar já como solução ("quero um botão de exportar para Excel")
- Antes de iniciar qualquer discovery ou escrever qualquer spec
- Quando você suspeita que o enquadramento atual está errado

**O que você precisa fornecer**
A demanda exatamente como foi recebida. Qualquer formato: e-mail, mensagem de WhatsApp, ticket, pauta de reunião.

**O que a skill entrega**
- Diagnóstico do tipo de armadilha (solução disfarçada, substantivo, escopo amplo, paridade)
- Job to be Done reformulado (verbo + objeto + contexto)
- Problema real identificado
- Lista de soluções possíveis (sem comprometimento com nenhuma)
- Riscos do enquadramento atual
- Próximo passo recomendado

**Dica de uso**
Regra de ouro: **transforme substantivos em verbos**. "Dashboard" → "monitorar sem abrir múltiplas telas". "Exportar para Excel" → "consultar dados históricos fora do sistema". Isso muda completamente o que você vai construir.

---

### prioritization

**O que é**
Aplica o framework de priorização mais adequado ao contexto e devolve uma lista rankeada com justificativa por critério. Disponível para backlog de features, bugs, oportunidades de discovery e análise estratégica de portfólio.

**Quando usar**
- Em qualquer planning ou revisão de backlog
- Ao apresentar um roadmap para stakeholders e precisar justificar a ordem
- Quando o time tem mais ideias do que capacidade e precisa decidir o que fazer primeiro

**O que você precisa fornecer**
1. Lista de itens (features, bugs, oportunidades)
2. Objetivo do ciclo (ex: lançar MVP, reduzir bugs críticos, aumentar retenção)
3. Restrições conhecidas (prazo, tamanho do time, dependências)
4. Tipo de priorização (opcional — a skill escolhe se não informado)

**Frameworks disponíveis e quando cada um se aplica**

| Framework | Melhor para |
|-----------|-------------|
| **MoSCoW** | Definir escopo de MVP ou sprint |
| **RICE** | Comparar features com critérios objetivos |
| **Matriz PIC** | Decisão rápida visual em planning |
| **GUT** | Priorizar bugs e problemas operacionais |
| **Modelo Kano** | Análise estratégica do portfólio de features |
| **Árvore de Oportunidades** | Priorizar no contexto de discovery |

**Dica de uso**
Nunca priorize só por intuição, demanda de vendas ou paridade com concorrente. Dados de uso e aprendizados de discovery pesam mais do que opinião sem evidência.

---

### okr-discovery

**O que é**
Gera OKRs adequados para ciclos de product discovery, com KRs qualitativos e marcos ponderados por peso — evitando o erro de forçar métricas de negócio em etapas de aprendizado.

**Quando usar**
- No início de cada trimestre ou ciclo de discovery
- Ao apresentar um plano de discovery para liderança ou cliente
- Quando precisar mostrar progresso de um discovery sem entregar um resultado binário

**O que você precisa fornecer**
1. Tipo de discovery: exploratório, validatório ou projetizado
2. Oportunidade ou problema central
3. Duração do ciclo
4. Stakeholders que precisam aprovar ou ser informados

**O que a skill entrega**
- OKR estruturado com KRs adequados ao tipo de discovery
- Template de comunicação para liderança
- Orientação sobre cadência de updates ao longo do ciclo
- Alertas sobre os erros mais comuns (KR binário, prazo sem timebox, meta de negócio prematura)

**A diferença central**

| Fase | Tipo de KR correto |
|------|-------------------|
| "Construir para aprender" (discovery) | KRs de execução e entregáveis de aprendizado |
| "Construir para ganhar" (lançamento) | KRs de métricas de negócio (conversão, retenção) |

**Dica de uso**
Para demandas B2B projetizadas (como os projetos Citiesoft), use marcos ponderados: aprovar PRD (20%), validar protótipo (15%), homologar V1 (30%), lançar (20%). Isso dá visibilidade de progresso sem precisar esperar o fim do ciclo.

---

### stakeholder-update

**O que é**
Transforma notas brutas de pesquisa, andamento de projeto ou reunião em comunicação executiva clara e acionável — adaptada para o público (C-Level, time de produto ou cliente externo).

**Quando usar**
- Após sessões de entrevistas ou discovery para compartilhar o que foi aprendido
- Para atualizar clientes (ALEMA, SES) sobre o andamento do projeto
- Quando você tem muitas informações brutas e precisa transformar em algo legível

**O que você precisa fornecer**
1. Tipo de update: discovery, projeto, pesquisa ou decisão
2. Público-alvo: cliente, diretoria, time de produto
3. Conteúdo bruto (notas, bullets, observações — qualquer formato)
4. Ação esperada do leitor: informar / aprovar / decidir / engajar

**Formatos disponíveis**
- **Executivo (C-Level / cliente):** 1 página, mensagem principal em destaque, próximos passos com responsáveis
- **Time de produto:** achados por categoria, citações reais de usuários, oportunidades identificadas, recomendação
- **Cliente externo:** status geral, concluído, em andamento, o que precisa do cliente

**Dica de uso**
Nunca entregue surpresa. Compartilhe pílulas ao longo do processo. O update final só confirma o que os stakeholders já sabem em linhas gerais — se eles ficarem surpresos no relatório final, você demorou demais para comunicar.

---

### citiesoft-docs

**O que é**
Gera documentos `.docx` padronizados para projetos Citiesoft: apostilas, manuais de uso, documentação de projeto. Usa o template base oficial com identidade visual da Citiesoft.

**Quando usar**
- Ao criar apostilas de treinamento para clientes (ALEMA, SES, etc.)
- Ao gerar manuais de módulo ou sistema
- Ao produzir documentação formal de projeto

**O que você precisa fornecer**
- Tipo de documento (apostila, manual, documentação)
- Cliente e projeto
- Conteúdo ou esboço do que deve constar

**Workflow interno**
1. Lê `Skills/citiesoft-docs/assets/template_base.js` — nunca reescreve do zero
2. Copia e adapta o script (capa, contracapa, capítulos, histórico de versões)
3. Executa com `node <script>.js`
4. Valida o `.docx` gerado
5. Entrega o arquivo final

**Regras críticas**
- `size` em docx.js são **meios-pontos** (divida por 2 para obter o pt real)
- Apenas H1 quebra página (`pageBreakBefore: true`) — nunca use `PageBreak` manual
- Azul Citiesoft: `#146bfa`
- Imagens de fundo: `CapaDoc.png` (só na capa), `BackgroundPaginas.png` (demais seções) — nunca modificar os PNGs

---

## Fluxo recomendado de uso

### Fluxo completo de discovery → documentação

```
1. problem-framer      → reformular a demanda: sair da solução, chegar no problema
        ↓
2. interview-guide     → preparar entrevistas para investigar o problema em campo
        ↓
3. opportunity-tree    → organizar o espaço de problemas e definir o foco do ciclo
        ↓
4. jtbd-canvas         → aprofundar o job do usuário e calcular o Opportunity Gap
        ↓
5. okr-discovery       → estruturar o ciclo com OKRs adequados ao tipo de discovery
        ↓
6. solution-ideation   → gerar múltiplas candidatas de solução para a oportunidade
        ↓
7. hypothesis-builder  → transformar a candidata escolhida em hipótese validável
        ↓
8. impact-mapper       → mapear onde a solução toca no sistema antes de prototipar
        ↓
9. prioritization      → priorizar se houver múltiplas hipóteses concorrentes
        ↓
10. spec-writer        → documentar a solução validada
        ↓
11. stakeholder-update → comunicar resultados e decisões para clientes e liderança
        ↓
12. citiesoft-docs     → gerar documentação formal se necessário
```

### Fluxo curto — demanda já enquadrada

```
1. impact-mapper    → entender o escopo técnico
        ↓
2. spec-writer      → documentar
        ↓
3. stakeholder-update → comunicar
```

### Fluxo de discovery rápido — hipótese já existe

```
1. hypothesis-builder  → estruturar o experimento
        ↓
2. impact-mapper       → checar impacto antes de avançar
        ↓
3. okr-discovery       → alinhar com a liderança
```

Você não precisa usar todas as skills em todos os casos — use as que fazem sentido para o momento do discovery.
