---
name: spec-writer
description: Gera especificações de tela (Front-end) ou de domínio (Back-end) para projetos Citiesoft, enquadrando o trabalho como oportunidade orientada ao usuário. Use quando precisar documentar uma nova feature, módulo ou fluxo em qualquer projeto.
---

# Spec Writer

Gera especificações técnicas e funcionais orientadas ao usuário, seguindo a estrutura dos projetos Citiesoft.

## Como usar

Forneça:
- **Contexto:** qual projeto e módulo (ex: Alema Legis / Sessão Plenária)
- **Tipo:** Front-end (spec de tela) ou Back-end (spec de domínio/API)
- **Problema ou oportunidade:** o que o usuário precisa conseguir fazer (não a solução)
- **Perfil do usuário:** quem vai usar (ex: Servidor, Gestor, Parlamentar)

Exemplo de acionamento:
> "Use a skill spec-writer para criar a spec de Front-end do módulo de Ajuste de Ponto do Ponto Eletrônico. O gestor precisa corrigir registros incorretos de servidores sem depender de suporte."

---

## Workflow

### 1. Enquadramento da oportunidade
Antes de qualquer tela, defina:
- **Job to be Done:** qual tarefa o usuário está tentando completar? (verbo + objeto + contexto)
- **Problema real:** qual é a dor ou atrito atual? (evite enquadrar como solução)
- **Critério de sucesso:** como saberemos que o usuário conseguiu? (comportamento esperado, não métrica de vaidade)

### 2. Estrutura da spec de Front-end

```
## [Nome da Tela/Módulo]

### Contexto
- Projeto:
- Perfil do usuário:
- Job to be Done:
- Problema que resolve:

### Fluxo principal (Happy Path)
1. [Ação do usuário]
2. [Resposta do sistema]
3. ...

### Estados e variações
- **Estado vazio:** o que aparece quando não há dados?
- **Estado de carregamento:** feedback durante processamento?
- **Estado de erro:** mensagens claras e acionáveis
- **Estado de sucesso:** confirmação e próximo passo natural

### Regras de negócio
- [Regra 1]
- [Regra 2]

### Casos de borda (Edge Cases)
- O que acontece se [situação inesperada]?

### Critérios de aceite
- [ ] O usuário consegue [ação principal] sem ajuda
- [ ] O sistema impede [erro crítico]
- [ ] Feedback é dado em até [X segundos]

### Métricas de acompanhamento
- Taxa de conclusão da tarefa
- Erros reportados por usuários
- [Métrica específica do contexto]

### Referências
- Telas relacionadas:
- Regras de negócio relacionadas (Back-end):
```

### 3. Estrutura da spec de Back-end

```
## [Nome do Domínio/Endpoint]

### Contexto
- Projeto:
- Módulo:
- Problema que resolve:

### Entidades envolvidas
- [Entidade 1]: [descrição]
- [Entidade 2]: [descrição]

### Regras de negócio
1. [Regra com condição e resultado]
2. ...

### Fluxos principais
#### [Nome do fluxo]
- Entrada:
- Processamento:
- Saída:
- Erros possíveis:

### Permissões e perfis de acesso
| Ação | Perfil permitido |
|------|-----------------|
| [Ação] | [Perfil] |

### Casos especiais
- [Situação] → [Comportamento esperado]

### Critérios de aceite
- [ ] [Comportamento verificável]
```

---

## Regras de qualidade

- **Nunca comece pela solução.** Se a demanda chegar como "preciso de um botão X", reformule: qual problema esse botão resolve?
- **Use verbos no infinitivo** para descrever ações do usuário: "consultar", "registrar", "aprovar".
- **Estados vazios e de erro são obrigatórios** — são as telas mais esquecidas e mais importantes para a experiência.
- **Critérios de aceite devem ser verificáveis** — se não dá para testar, não é um critério.
- **Mantenha coerência de nomenclatura** com os outros arquivos do mesmo projeto.
