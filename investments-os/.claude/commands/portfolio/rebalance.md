---
name: rebalance
description: Tax-aware rebalancing plan — delegates to portfolio-architect
---

# Portfolio Rebalance

> Bring the portfolio back to targets, aportes-first, selling only what must be sold — fiscally aware.

## Usage

```bash
/portfolio:rebalance [posição atual + alocação-alvo, ou "alvo padrão dos três baldes"]
```

## Examples

```bash
/portfolio:rebalance "alvo 30% RV / 70% RF; hoje estou 38% RV, aporto R$ 2 mil/mês"
/portfolio:rebalance "revisão semestral da carteira que revisamos em janeiro"
```

## What This Command Does

1. Invokes the **portfolio-architect** agent
2. Builds the drift table (atual vs alvo por classe)
3. Plans the correction in the KB's priority order ([carteira/patterns/rebalanceamento.md]):
   - **Aportes-first**: redirect monthly contributions to underweight classes (no tax event)
   - Sales only for residual drift — sliced under the R$ 20 mil/month exemption where possible, respecting regressive-table thresholds, using registered losses
4. Optional tactical tilt: caps at ±5 p.p., funded only from the liquidity reserve
5. Sets the next review date (1–2×/year cadence)

## Agent Delegation

| Agent | Role |
|-------|------|
| `portfolio-architect` | Primary |
| `tributacao-specialist` | Escalation — sale tax math, DARF consequences |

## KB Domains Used

- `carteira` — rebalanceamento, oportunidades
- `tributacao` — isenção 20k, tabela regressiva, compensação

## Output

Drift table, ordered actions with month-by-month aporte redirection, sale list (if any) with tax notes, next review date.
