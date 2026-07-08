---
name: fundo
description: Fund/ETF/FII/previdência analysis — delegates to fundos-analyst
---

# Analyze Fundo

> Evaluate a fund by what actually drives cotista results: fees, structure, tax regime, consistency.

## Usage

```bash
/analyze:fundo <nome-ou-ticker>
```

## Examples

```bash
/analyze:fundo HGLG11                      # FII → FII checklist
/analyze:fundo IVVB11                      # ETF → vehicle + tax analysis
/analyze:fundo "XP Multimercado FIC FIM"   # fundo → seleção + fee drag
/analyze:fundo "PGBL do meu banco, taxa 1,5% + carregamento 2%"
```

## What This Command Does

1. Invokes the **fundos-analyst** agent
2. Classifies the vehicle → routes to the right checklist:
   - **Fundo tradicional** → [fundos/patterns/escolher-fundo.md]: política, taxas vs benchmarks do KB, histórico 3–5a líquido, teste de replicação barata
   - **FII** → [analise/patterns/checklist-analise-fii.md]: tipo, renda sustentável, vacância/concentração, P/VP, condições de isenção
   - **ETF** → [fundos/patterns/etf-vs-fundo-vs-acao.md] + lembrete fiscal (sem isenção 20k)
   - **Previdência** → [fundos/concepts/previdencia.md]: PGBL/VGBL × declaração, tabela × horizonte, carregamento = red flag
3. Computes the long-run fee drag in R$
4. Fund data fetched (CVM, gestora, aggregators), sourced and dated

## Agent Delegation

| Agent | Role |
|-------|------|
| `fundos-analyst` | Primary |
| `tributacao-specialist` | Escalation — come-cotas edge cases, FII DARF |
| `portfolio-architect` | Escalation — fit and sizing |

## KB Domains Used

- `fundos`, `analise`, `tributacao`

## Output

Vehicle-specific scorecard, fee-drag projection, red flags, cheaper-alternative comparison when applicable.
