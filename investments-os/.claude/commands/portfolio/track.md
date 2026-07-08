---
name: track
description: Mark the local portfolio to market with live free-API data — delegates to portfolio-architect
---

# Portfolio Track

> Read `portfolio/positions.csv`, mark everything to market via the free APIs, and report: value, P&L, allocation by class, drift vs targets.

## Usage

```bash
/portfolio:track [ou "atualiza X" para registrar mudanças antes do relatório]
```

## Examples

```bash
/portfolio:track
/portfolio:track "comprei 100 PETR4 a 36,10 hoje e aportei 2 mil no Tesouro Selic"
/portfolio:track resumo    # só o snapshot, sem análise de drift
```

## What This Command Does

1. Invokes the **portfolio-architect** agent
2. Reads `portfolio/positions.csv` (missing → offers to create it from the schemas in `portfolio/README.md`, interviewing the user — never inventing rows)
3. Free-text updates in `$ARGUMENTS` → applies them to `positions.csv` (and `trades.csv` when it's a trade) before reporting
4. Marks to market via `kb/dados-mercado/`:
   - Ações/FIIs/ETFs → Yahoo `{TICKER}.SA` (dated close)
   - Tesouro → Tesouro Transparente CSV (PU venda mais recente)
   - CDB/LCI pós → face value + accrual note (CDI via BCB série 12)
   - Cripto → CoinGecko; câmbio → AwesomeAPI
5. Reports:
   - Total value, P&L per position (vs `preco_medio`) and per class
   - Allocation by class vs the three-bucket targets → drift table
   - Reserve status (months of cost of living, if known)
   - Flags: concentration breaches, FGC limits, drift > 5 p.p. (→ suggests `/portfolio:rebalance`)
6. Updates `data_atualizacao` on marked rows

## Agent Delegation

| Agent | Role |
|-------|------|
| `portfolio-architect` | Primary |
| `tributacao-specialist` | Escalation — realized P&L tax questions |

## KB Domains Used

- `dados-mercado` — all price sources
- `carteira` — targets and drift rules

## Output

Snapshot table (position, qty, PM, price now + date, P&L), class allocation vs target, flags. All prices dated; Yahoo marked as unofficial source.
