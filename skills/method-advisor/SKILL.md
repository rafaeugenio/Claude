---
name: method-advisor
description: Diagnostica o momento do processo de discovery ou criacao e recomenda as metodologias mais adequadas baseadas nos cursos de Product Design e Product Discovery. Use quando estiver sem ideias sobre qual metodologia ou workflow adotar, ou quando quiser validar se esta no caminho certo.
---

# Method Advisor

Analisa o contexto informado e recomenda as metodologias mais adequadas para o momento, com base nos cursos de Product Design (PM3) e Product Discovery (PM3).

## Como usar

Forneça:
- **O que voce precisa descobrir ou resolver:** a pergunta central que voce quer responder
- **O que voce ja tem:** informacoes, artefatos, pesquisas anteriores, dados disponíveis
- **Fase em que acredita estar** (opcional): exploratoria, definicao, ideacao, validacao, priorizacao, estrategia
- **Restricoes:** tempo disponivel, tamanho do time, contexto B2B ou B2C, maturidade do produto

Exemplo de acionamento:
> "Use a skill method-advisor. Preciso entender por que os usuarios abandonam o onboarding no dia 2. Tenho dados de analytics mostrando o drop, mas nao sei o motivo. Produto B2B SaaS, time de 3 pessoas, 2 semanas disponíveis."

---

## Workflow

### 1. Diagnostico do momento

Antes de recomendar, identifique em qual camada do processo o usuario esta:

| Camada | Sinal tipico | Pergunta central |
|--------|-------------|-----------------|
| **Entendimento do negocio** | Novo contexto, novo cliente, novo produto | "O que a empresa precisa? Quem e o usuario-alvo?" |
| **Exploracao do problema** | Sintoma identificado, causa desconhecida | "Por que isso acontece? Quem sente essa dor?" |
| **Sintese e enquadramento** | Muitos dados, falta clareza | "O que os dados estao dizendo? Qual e a oportunidade real?" |
| **Ideacao** | Problema definido, sem solucoes claras | "Como podemos resolver isso?" |
| **Priorizacao** | Varias opcoes, falta foco | "Qual caminho seguir primeiro?" |
| **Validacao** | Hipotese ou solucao em maos | "Isso funciona? Vale construir?" |
| **Estrategia e comunicacao** | Resultado em maos, precisa avancar | "Como organizar e comunicar isso?" |

---

### 2. Catalogo de metodologias por fase

#### Entendimento do negocio e contexto

- **Stakeholder Analysis (Influencia x Interesse):** Mapear quem tem poder e interesse no projeto antes de iniciar. Essencial em B2B.
- **SWOT:** Analisar forcas, fraquezas, oportunidades e ameacas do produto ou iniciativa. Atribua intensidade e impacto para nao ser superficial.
- **Market Sizing (TAM / SAM / SOM):** Estimar o tamanho do mercado para justificar o investimento. TAM = total global; SAM = recorte atendivel; SOM = fatia conquistavel.
- **Matriz BCG de Features:** Classificar funcionalidades existentes por crescimento e adesao (Estrela, Vaca Leiteira, Ponto de Interrogacao, Abacaxi).
- **Value Proposition Canvas:** Conectar as dores, ganhos e jobs do cliente com os analgésicos, criadores de ganho e produtos da empresa.

#### Exploracao do problema (Pesquisa generativa)

- **Entrevistas em Profundidade:** Ideal para entender comportamentos e motivacoes nao verbalizadas. Semi-estruturadas sao as mais recomendadas. Use 3 papeis: entrevistador, observador, anotador. Mínimo 8-10 por segmento.
- **JTBD (Jobs-to-be-Done):** Reformular o problema como uma tarefa que o usuario esta tentando completar (funcional, emocional pessoal, emocional social). Evita focar em atributos do produto.
- **Desk Research / Pesquisa Secundaria:** Levantamento de dados internos (tickets, NPS, analytics) e externos (estudos, IBGE, concorrentes) antes de ir a campo. Economiza tempo e dinheiro.
- **Analise Competitiva (Benchmarking):** Comparar concorrentes diretos e indiretos para identificar oportunidades e padroes de mercado. Foco em aprender, nao em copiar.
- **Shadowing:** Observar o usuario silenciosamente enquanto trabalha. Essencial para produtos internos onde o usuario nao verbaliza seus problemas.
- **Pesquisa Longitudinal:** Acompanhar um grupo de usuarios ao longo do tempo (semanas/meses) para captar formacao de habitos e mudancas de comportamento.

#### Sintese e enquadramento do problema

- **Mapa de Afinidades:** Agrupar anotacoes e insights em clusters por tags tematicas. Faz o dado bruto virar inteligencia acionavel.
- **Mapa de Empatia:** Organizar o que o usuario pensa, sente, ouve, ve, fala e faz. Cria empatia real no time.
- **Personas (baseadas em comportamento):** Segmentar usuarios por padroes de comportamento, nao por demografia. Cruze comprometimento x frequencia de uso para definir o target.
- **Jornada do Usuario (User Journey Map):** Visualizar de alto nível o processo que o usuario percorre para atingir uma meta, incluindo emocoes, pontos de contato e oportunidades.
- **User Story Mapping:** Mapear em detalhe as funcionalidades necessarias para o usuario atingir sua meta. Util para definir o escopo do MVP.
- **Service Blueprint:** Visualizar os bastidores da experiencia (acoes internas, sistemas, evidencias fisicas). Essencial para produtos com operacoes complexas.
- **Matriz CSD (Certezas, Suposicoes, Duvidas):** Organizar o conhecimento previo do time antes de iniciar a pesquisa. Evita gastar energia em coisas que ja se sabe.
- **Mapa de Forcas (JTBD):** Mapear o que atrai o usuario para uma nova solucao (ansiedade, desejo do novo) contra o que o prende na solucao atual (habito, medo da mudanca).

#### Priorizacao de oportunidades

- **Matriz de Oportunidades (ODI):** Cruzar Importancia x Satisfacao atual do usuario para cada outcome. Oportunidades estao onde a importancia e alta e a satisfacao e baixa. Gap acima de 115 = grande oportunidade.
- **Arvore de Oportunidades (Teresa Torres):** Conectar a meta de negocio (OKR) com oportunidades (dores do usuario) e hipoteses de solucao em camadas. Criterios de contraste: aderencia a estrategia, potencial de mercado, time to market, complexidade.
- **Mapa de Hipoteses:** Cruzar nivel de certeza (ato de fe vs. evidencias fortes) com impacto da invalidacao (mudanca pontual vs. invalida o modelo). Priorize validar os "atos de fe que invalidam o modelo de negocio".
- **MoSCoW:** Classificar iniciativas em Must / Should / Could / Won't. Ideal para escopo de MVP e comunicacao com stakeholders.
- **Matriz PIC (Impacto x Esforco):** Dividir o backlog em quadrantes visuais. Quick Wins (alto impacto, baixo esforco) sao os primeiros.
- **RICE Score:** Formula objetiva: (Reach x Impact x Confidence) / Effort. Util para comparar features com criterios claros.
- **Matriz GUT:** Pontuar Gravidade, Urgencia e Tendencia de piora (1-5 cada). Ideal para bugs e melhorias criticas. Score = G x U x T.
- **Modelo Kano:** Classificar funcionalidades em Basicas (minimo esperado), Lineares (mais = melhor) e Encantadoras (surpresa positiva). Encantamentos viram basicos com o tempo.

#### Ideacao e solucao

- **Brainstorming Silencioso (Silent Storming):** Cada participante escreve individualmente antes de compartilhar. Evita vieses de ancoragem do grupo.
- **Brainstorming Reverso (Round Robin):** Cada pessoa escreve riscos das ideias do colega, depois solucoes para esses riscos. Ideal para grupos grandes.
- **Crazy Eights:** Dobrar A4 em 8 quadrantes, 1 minuto por quadrante. Gera volume rapido de solucoes sem apego.
- **Storyboard:** Desenhar a jornada completa do usuario, incluindo contexto offline. Nao foca apenas nas telas.
- **Design Sprint (Google Ventures):** Workshop modular de 4-5 dias: Entender > Definir > Rabiscar > Decidir > Prototipar > Validar. Exige um "Decisor" para desempatar.
- **Lean Inception:** Alinhamento de visao do produto e definicao de MVP em formato colaborativo. Combina Design Sprint com framework agil.
- **Business Model Canvas:** 9 blocos para criar hipoteses sobre propostas de valor, segmentos, receita, canais, etc. Ideal para produtos novos.
- **Lean Canvas:** Variacao para produtos digitais. Troca "Parceiros" por "Problemas" e "Atividades" por "Solucoes".

#### Validacao e experimentacao

- **Landing Page:** Pagina simples com proposta de valor para medir interesse antes de construir. Pode ser usada qualitativa (entrevistas) ou quantitativamente (conversao de leads).
- **Fake Door (Porta Falsa):** Exibir botao ou link para funcionalidade inexistente e medir cliques. Validacao de demanda com custo zero de desenvolvimento.
- **Concierge:** Entregar o valor manualmente e o usuario sabe disso. Testa viabilidade operacional antes de automatizar.
- **Magico de Oz:** Entregar o valor manualmente, mas o usuario acha que e automatico. Testa a percepcao do produto antes de escalar a tecnologia.
- **Teste de Usabilidade Moderado:** Observar usuarios realizando tarefas no produto. 5 usuarios encontram ~80% dos problemas de usabilidade. Foco em comportamento, nao em opiniao.
- **Teste de Usabilidade Nao-Moderado (Maze/UserTesting):** Usuario realiza tarefas de forma autonoma e gravada. Escala quantitativa, perde profundidade qualitativa.
- **Analise Heuristica:** Avaliacao por especialistas baseada nas 10 Heuristicas de Nielsen. Rapida e barata, mas pode ter vieses internos.
- **SUS (System Usability Scale):** 10 perguntas padrao para medir nota de usabilidade geral. Referencia universal para comparacao.
- **UMUX-Lite:** 2 perguntas (escala Likert) para medir Usabilidade e Utilidade. Ultra-rapido para ciclos curtos.
- **Pesquisa de Product Market Fit (Sean Ellis):** "Quao decepcionado voce ficaria se nao pudesse mais usar o produto?" Meta: mais de 40% respondendo "Muito decepcionado".

#### Estrategia e comunicacao

- **OKRs para Discovery:** Objetivos qualitativos + Key Results de execucao (ex: finalizar 100% da POC; obter aprovacao de 4 stakeholders). Nao force metricas de negocio em fases de aprendizado.
- **Continuous Discovery:** Ciclo semanal de entrevistas rapidas (15 min) + Arvore de Oportunidades + Contraste de Oportunidades. Processo fluido, nao evento isolado.
- **Matriz CDE (Clareza, Desafio, Expectativas):** Alinhar com stakeholders antes de comecar o que sera investigado, os desafios esperados e o que cada um espera como resultado.
- **Duplo Diamante:** Framework de processo que alterna entre pensar divergente (descobrir, desenvolver) e convergente (definir, entregar). Util para comunicar em qual fase voce esta.
- **Framework HEART (Google):** Medir qualidade da experiencia em 5 dimensoes: Felicidade, Engajamento, Adocao, Retencao e Sucesso da Tarefa. Conecta design a KPIs de negocio.
- **Arvore de Metricas:** Conectar iniciativas operacionais de design > KPIs > objetivo estrategico da empresa. Fundamental para provar impacto do discovery.

---

### 3. Saída gerada

```
## Diagnostico do Momento

**Fase identificada:** [Exploracao / Sintese / Ideacao / Validacao / Priorizacao / Estrategia]
**Pergunta central que voce esta tentando responder:** [reformulacao clara]

---

## Metodologias Recomendadas

### 1. [Nome da metodologia] — [Por que essa, agora]

**O que e:** [descricao em 1 linha]
**Como aplicar no seu contexto:**
- [Passo 1 adaptado ao contexto informado]
- [Passo 2]
- [Passo 3]
**Tempo estimado:** [X horas / dias]
**Entregavel:** [o que voce tera ao final]

---

### 2. [Nome da metodologia] — [Por que essa, agora]
[idem]

---

### 3. [Nome da metodologia] — [Por que essa, agora]
[idem]

---

## Sequencia sugerida

[Se as metodologias se complementam, sugira a ordem de execucao]

## O que evitar agora

- [Metodologia ou armadilha que seria um desvio dado o contexto]

## Proximos passos

[ ] [Acao concreta para comecar hoje]
[ ] [Alinhamento necessario antes de comecar]
[ ] [Artefato a documentar]

## Referencias dos cursos

- [Modulo e aula de Product Discovery ou Product Design onde essa metodologia e coberta]
```

---

## Regras de qualidade

- **Nunca recomende uma metodologia so porque e famosa.** Se o contexto nao exige um Design Sprint de 5 dias, nao sugira.
- **Combine qualitativo e quantitativo.** Entrevistas revelam o porque; dados revelam o quanto. Um sem o outro e incompleto.
- **Frameworks nao sao receitas.** Cada metodologia e um guia de raciocínio, nao um processo rigido. Adapte ao contexto.
- **Nao pule para solucao.** Se o usuario informar um problema enquadrado como solucao (ex: "preciso de um filtro"), reformule antes de recomendar a metodologia.
- **Restricoes sao prioritarias.** Com 2 dias disponiveis, nao recomende pesquisa longitudinal. Com time de 1 pessoa, nao recomende Design Sprint de 5 dias.
- **Fase mais critica primeiro.** Se ha duvida sobre o problema, priorize exploracao. Se o problema e claro, priorize validacao da solucao.
