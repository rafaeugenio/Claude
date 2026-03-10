---
name: impact-mapper
description: Dado uma funcionalidade, hipótese de solução ou mudança no produto, mapeia quais módulos, entidades, fluxos, regras de negócio e perfis de acesso do sistema seriam impactados. Use antes de prototipar ou estimar esforço para evitar surpresas técnicas e garantir que o discovery cubra todos os pontos de toque.
---

# Impact Mapper

Analisa onde uma nova funcionalidade ou mudança toca no sistema, cruzando a documentação existente dos projetos Citiesoft com a proposta em avaliação.

## Como usar

Forneça:
- **Funcionalidade ou hipótese:** o que está sendo considerado (pode ser vaga)
- **Projeto:** Alema Legis / Ponto Eletrônico / SES Prestação de Contas
- **Perfis de usuário afetados:** quem usa, quem é impactado indiretamente
- **Ponto de entrada na jornada:** onde na experiência atual isso se encaixaria?

Exemplo de acionamento:
> "Use a skill impact-mapper para mapear o impacto de adicionar aprovação em lote de notas fiscais no SES Prestação de Contas. Perfis: Gestor e Fiscal."

> "Use a skill impact-mapper para a hipótese: 'Notificação automática para o gestor quando uma solicitação de ajuste de ponto ficar pendente por mais de 48h.'"

---

## Estrutura do mapeamento gerado

### 1. Entendimento da mudança

```
Funcionalidade/hipótese: [descrição]
Projeto: [nome]
Tipo de mudança:
  [ ] Nova tela / módulo
  [ ] Alteração em fluxo existente
  [ ] Nova regra de negócio
  [ ] Integração ou automação
  [ ] Mudança de permissão/acesso
  [ ] Mudança de dados / entidade
```

---

### 2. Módulos diretamente impactados

Front-end e Back-end que precisarão ser alterados ou que serão afetados pelo comportamento novo.

```
## Front-end

| Módulo / Tela | Tipo de impacto | Descrição da mudança necessária |
|---------------|-----------------|--------------------------------|
| [nome]        | Novo / Alterado / Verificar | [o que muda] |

## Back-end

| Domínio / Endpoint | Tipo de impacto | Descrição |
|--------------------|-----------------|-----------|
| [nome]             | Novo / Alterado / Verificar | [o que muda] |
```

---

### 3. Entidades e dados afetados

```
## Entidades que mudam de estrutura
- [Entidade]: [novo campo / relação / status]

## Entidades que mudam de comportamento
- [Entidade]: [nova regra que afeta leitura ou escrita]

## Novos dados necessários
- [dado]: [de onde vem, onde é armazenado]

## Dados que mudam de fluxo
- [dado]: [novo ciclo de vida]
```

---

### 4. Regras de negócio afetadas

```
## Regras alteradas
- [RN existente]: [como muda com a nova funcionalidade]

## Novas regras necessárias
- [RN nova]: [condição → resultado]

## Conflitos potenciais com regras existentes
- [conflito identificado]: [descrição do risco]
```

---

### 5. Perfis de acesso e permissões

```
| Perfil | Impacto | Ação necessária |
|--------|---------|-----------------|
| [perfil] | Acesso novo / Permissão alterada / Sem impacto | [descrição] |
```

---

### 6. Fluxos afetados

Mapeamento de quais jornadas existentes seriam interrompidas, alteradas ou estendidas.

```
## Fluxos existentes que mudam
- [Nome do fluxo]: [etapa que muda] → [novo comportamento]

## Novos fluxos criados
- [Nome do novo fluxo]: [descrição resumida das etapas]

## Fluxos que precisam ser re-testados
- [Fluxo]: [por que pode ser afetado indiretamente]
```

---

### 7. Integrações e dependências externas

```
## APIs ou sistemas externos afetados
- [sistema]: [como é afetado]

## Jobs agendados afetados
- [job]: [novo comportamento necessário]

## Dependências técnicas identificadas
- [dependência]: [risco ou bloqueador]
```

---

### 8. Matriz de risco de impacto

```
         BAIXO ESFORÇO DE MUDANÇA  |  ALTO ESFORÇO DE MUDANÇA
ALTO     Fazer com cuidado ⚠️      |  Investigar antes de comprometer 🔍
IMPACTO  (mudança simples mas      |  (pode virar um projeto maior)
         crítica para o sistema)   |

BAIXO    Mudança segura ✅          |  Questionar se vale ❓
IMPACTO  (alterar sem risco)        |  (alto esforço, baixo retorno)
```

---

### 9. Perguntas para o time técnico

Pontos que precisam de validação com o desenvolvedor antes de comprometer com a hipótese.

```
[ ] [Pergunta técnica 1 — ex: "O sistema de notificações atual suporta triggers por tempo?"]
[ ] [Pergunta técnica 2]
[ ] [Pergunta técnica 3]
```

---

### 10. Resumo executivo do impacto

```
## Resumo

Funcionalidade: [nome]
Impacto geral: Alto / Médio / Baixo

Módulos tocados: [lista resumida]
Entidades afetadas: [lista resumida]
Novas regras de negócio: [quantidade e natureza]
Perfis com mudança de acesso: [lista]
Dependências críticas: [lista ou "nenhuma identificada"]

Recomendação:
[ ] Baixo risco — pode avançar para protótipo/hipótese
[ ] Médio risco — alinhar com engenharia antes de avançar
[ ] Alto risco — fazer spike técnico antes de qualquer comprometimento

Próximo passo: [ação específica]
```

---

## Referências de documentação por projeto

Para cruzar com a documentação existente ao gerar o mapeamento:

**Alema Legis**
- Front-end: `Projetos/Citiesoft/Alema/Alema Legis/Front-end/`
- Back-end: `Projetos/Citiesoft/Alema/Alema Legis/Back-end/`
- Índice FE: [[alema-legis-indice]]
- Índice BE: [[00-indice]]

**Ponto Eletrônico**
- Front-end: `Projetos/Citiesoft/Alema/Ponto Eletrônico/Front-end/`
- Back-end: `Projetos/Citiesoft/Alema/Ponto Eletrônico/Back-end/`
- Índice FE: [[ponto-eletronico-indice]]
- Visão Geral BE: [[ponto-eletronico-visao-geral]]

**SES — Prestação de Contas**
- Front-end: `Projetos/Citiesoft/SES/Prestação de Contas/Front-end/`
- Back-end: `Projetos/Citiesoft/SES/Prestação de Contas/Back-end/`
- Índice FE: [[ses-indice]]
- Visão Geral BE: [[ses-visao-geral]]
- Mapa de Relacionamentos: [[ses-mapa-de-relacionamentos]]

---

## Conexão com outras skills

- Use **problem-framer** antes se a funcionalidade ainda não está bem enquadrada
- Use **hypothesis-builder** após o mapeamento para estruturar o experimento com o escopo técnico correto
- Use **spec-writer** quando a hipótese avançar para documentação formal
