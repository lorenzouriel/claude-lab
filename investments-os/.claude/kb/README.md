# investments-os Knowledge Base

> Camada de conhecimento estruturada que fundamenta as respostas dos agentes de investimento em conteúdo verificado, destilado das anotações de estudo do usuário.

```
7 domínios | conteúdo PT-BR | fonte: anotações de estudo na raiz de investments-os/ + APIs verificadas
```

---

## Como funciona — KB-First

Todo agente do investments-os segue **resolução KB-first**: conhecimento local antes de fontes externas.

```text
1. KB CHECK        Ler index.md do domínio relevante (apenas headings)
2. ON-DEMAND LOAD  Ler o concept/pattern específico da tarefa (um arquivo, não todos)
3. API GRATUITA    Dados atuais via kb/dados-mercado (BCB, Tesouro, Yahoo, CVM...) — sempre datados
4. WEB FALLBACK    Só quando nenhuma API cobre (notícias, fatos relevantes)
5. CONFIDENCE      Calculada por evidência; abaixo do threshold → perguntar ao usuário
```

**Regra especial deste domínio:** taxas e valores de mercado (Selic, CDI, IPCA, cotações, limites do FGC, alíquotas) mudam com o tempo. O KB registra a **mecânica** (como funciona); valores atuais vêm das APIs catalogadas em [`dados-mercado/`](dados-mercado/index.md), citados com data.

---

## Estrutura de domínio

```text
{domínio}/
  index.md              Visão geral e navegação
  quick-reference.md    Tabelas de consulta rápida (~100 linhas)
  concepts/             Conceitos centrais (~150 linhas cada)
  patterns/             Padrões acionáveis com passos/fórmulas (~200 linhas cada)
```

## Catálogo

| Domínio | Descrição | Usado por |
|---------|-----------|-----------|
| renda-fixa | Tesouro Direto, CDB/CDI, LCI/LCA, debêntures, poupança, COE, FGC | renda-fixa-analyst, portfolio-architect, investment-educator |
| renda-variavel | Ações, B3, IPO, derivativos, riscos, estratégias | acoes-analyst, market-researcher, risk-profiler |
| fundos | Classes CVM, taxas, ETFs, FIIs, PGBL/VGBL | fundos-analyst, portfolio-architect |
| tributacao | IR regressivo, DARF, come-cotas, IOF, isenções | tributacao-specialist, todos os analysts |
| carteira | Perfil de risco, três baldes, diversificação, rebalanceamento | portfolio-architect, risk-profiler |
| analise | Indicadores, valuation, checklists, position sizing | acoes-analyst, fundos-analyst |
| dados-mercado | APIs gratuitas para dados atuais (BCB, Tesouro, Yahoo, CVM, câmbio, cripto) | todos os agentes que citam números |

## Fonte e atualização

- As **anotações de estudo cruas** vivem na raiz de `investments-os/` (`Renda Fixa/`, `Renda Variável/`, `Fundos de Investimento/`, `Tributação/`, `Montando a Sua Carteira.md`, `Glossário Inicial.md`). Não editar — são o vault de estudos do usuário.
- O KB é a camada destilada. Para incorporar anotações novas: `/knowledge:ingest` (agente kb-curator).
- Registro central: [`_index.yaml`](_index.yaml).
