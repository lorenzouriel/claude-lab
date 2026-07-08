---
name: acao
description: Full stock analysis with written thesis — delegates to acoes-analyst
---

# Analyze Ação

> Run the complete 5-phase checklist on a stock: business, numbers, governance, valuation, written thesis.

## Usage

```bash
/analyze:acao <ticker> [foco opcional: dividendos | crescimento | swing]
```

## Examples

```bash
/analyze:acao WEGE3
/analyze:acao BBAS3 dividendos
/analyze:acao PETR4 swing     # technical setup instead of full thesis
```

## What This Command Does

1. Invokes the **acoes-analyst** agent
2. Runs [analise/patterns/checklist-analise-acao.md]:
   - **Fase 1** — negócio e moat (elimina rápido)
   - **Fase 2** — 5 anos de números vs faixas do KB (ROE, margem, dívida, caixa)
   - **Fase 3** — governança (segmento de listagem, controladores)
   - **Fase 4** — valuation: múltiplos vs pares + DCF em 3 cenários, margem de segurança
   - **Fase 5** — tese escrita (razões, riscos, gatilhos de venda, peso máximo)
3. `swing` focus → technical setup card instead (entry/stop/target/size via position-sizing)
4. Fundamental data fetched from RI/B3/aggregators — every number sourced and dated

## Agent Delegation

| Agent | Role |
|-------|------|
| `acoes-analyst` | Primary |
| `market-researcher` | Escalation — recent news materiality |
| `portfolio-architect` | Escalation — position weight in the whole portfolio |

## KB Domains Used

- `analise` — checklist, indicadores, valuation, position sizing
- `renda-variavel` — estratégias, IPO checks
- `tributacao` — sale tax notes

## Output

Phase-by-phase scorecard, thesis block (or trade card), data gaps stated, disclaimer. Never a certainty-framed buy/sell call.
