---
name: interview-guide
description: Cria roteiros estruturados de entrevistas de pesquisa com usuários ou stakeholders, livres de vieses cognitivos. Use antes de reuniões com clientes (ALEMA, SES, etc.) ou sessões de discovery para não improvisar perguntas.
---

# Interview Guide

Gera roteiros de entrevista em profundidade seguindo a estrutura de 5 blocos, com perguntas abertas e sem vieses.

## Como usar

Forneça:
- **Objetivo da pesquisa:** o que você precisa descobrir (não confirmar)
- **Perfil do entrevistado:** cargo, contexto, relação com o produto
- **Tipo:** exploratória (descobrir problemas) ou específica (validar hipótese)
- **Duração prevista:** 30, 45 ou 60 minutos
- **Contexto do produto/projeto** (opcional): qual sistema ou fluxo está sendo investigado

Exemplo de acionamento:
> "Use a skill interview-guide para criar um roteiro de 45 min com servidores da ALEMA sobre o processo atual de registro e ajuste de ponto. Objetivo: entender as principais dores antes de começar o discovery do Ponto Eletrônico."

---

## Estrutura do roteiro gerado

### Cabeçalho
```
Projeto:
Objetivo geral:
Perfil do entrevistado:
Duração:
Data/horário:
Papéis: Entrevistador / Observador / Anotador
```

---

### Bloco 1 — Abertura (5 min)
Apresentação, contexto e consentimento.

Roteiro padrão:
> "Olá, obrigado por aceitar participar. Meu nome é [nome] e estou aqui para entender melhor como você [contexto genérico, sem revelar hipóteses]. Não existem respostas certas ou erradas — o que importa é a sua experiência real. Posso gravar para não perder detalhes? As informações serão usadas apenas internamente."

- Confirmar gravação/anotação
- Esclarecer que não é um teste de desempenho do entrevistado

---

### Bloco 2 — Aquecimento (5–10 min)
Perguntas leves para quebrar o gelo e entender o contexto do entrevistado.

Modelo de perguntas geradas:
- "Me conta um pouco sobre o seu dia a dia de trabalho. Como é uma semana típica para você?"
- "Há quanto tempo você trabalha nessa função?"
- "Quais ferramentas ou sistemas você usa com mais frequência no seu trabalho?"

---

### Bloco 3 — Contexto do problema (15–20 min)
Como a pessoa realiza a tarefa central no dia a dia. Foco em comportamento passado, não em opinião.

Instruções ao entrevistador:
- Use "me conta como você fez da última vez" em vez de "o que você acha"
- Use o silêncio: espere 3 segundos após a resposta antes de continuar
- Parafraseie para confirmar: "Então se entendi bem, você..."
- Nunca revele a solução que está pensando

Modelo de perguntas geradas com base no objetivo informado.

---

### Bloco 4 — Opiniões e insights (10–15 min)
Dores, frustrações e desejos em relação ao processo atual.

Boas perguntas de profundidade:
- "O que te incomoda mais nesse processo hoje?"
- "Já teve alguma situação em que isso te causou um problema real? Me conta."
- "O que você faz quando [situação de atrito] acontece?"
- "Se você pudesse mudar uma coisa nesse processo, qual seria?"

Perguntas a evitar (serão sinalizadas):
- Perguntas com "sim ou não"
- Perguntas que revelam a solução ("o que você acha de ter um botão para X?")
- Perguntas com julgamento de valor ("você acha que o sistema atual é ruim?")

---

### Bloco 5 — Encerramento (5 min)
Agradecimento e pergunta de ouro.

> "Antes de finalizar, tem algo que você achava que eu fosse perguntar e não perguntei? Ou algo importante sobre esse tema que você gostaria de compartilhar?"

> "Obrigado pelo seu tempo. Posso entrar em contato novamente se surgir alguma dúvida?"

---

## Checklist anti-viés

Antes de ir para a entrevista, verifique:
- [ ] Nenhuma pergunta revela a solução que você já tem em mente
- [ ] Todas as perguntas principais são abertas (começam com: como, o que, me conta, quando, por que)
- [ ] O roteiro explora comportamento passado, não opiniões hipotéticas
- [ ] Há espaço para silêncio e aprofundamento ("me conta mais sobre isso")
- [ ] A pergunta de ouro está no encerramento

## Nota sobre tamanho da amostra

- **Testes de usabilidade:** 5 usuários encontram ~80% dos problemas
- **Pesquisa exploratória:** 8–10 por perfil/segmento para saturação
- **B2B (como Citiesoft):** entrevistar tanto o pagador (gestor/diretor) quanto o usuário operacional (servidor/analista) — são jobs completamente diferentes
