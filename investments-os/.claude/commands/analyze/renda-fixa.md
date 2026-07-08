---
name: renda-fixa
description: Net-of-tax comparison of fixed-income products — delegates to renda-fixa-analyst
---

# Analyze Renda Fixa

> Put RF products on the same net base (gross-up), then compare on all four axes: yield, liquidity, guarantee, credit.

## Usage

```bash
/analyze:renda-fixa <produtos e prazo>
```

## Examples

```bash
/analyze:renda-fixa "CDB 110% CDI vs LCA 93% CDI, 2 anos"
/analyze:renda-fixa "Tesouro IPCA+ 2035 vs debênture incentivada IPCA+6,2% da Vale"
/analyze:renda-fixa "onde deixar minha reserva de emergência?"
/analyze:renda-fixa "meu gerente ofereceu um COE, segue o termo: ..."
```

## What This Command Does

1. Invokes the **renda-fixa-analyst** agent
2. Normalizes horizon → IR bracket (22,5/20/17,5/15%)
3. Applies [renda-fixa/patterns/comparacao-liquida-gross-up.md]:
   - `líquida = bruta × (1 − IR)` / `equivalente = isenta / (1 − IR)`
   - IOF added if horizon < 30 days
4. Adds the non-yield axes: liquidez (carência), FGC (limite por instituição), risco de crédito (rating quando sem FGC)
5. Goal-shaped questions ("onde deixar X") → [renda-fixa/patterns/escolher-titulo.md] decision tree instead
6. COE offers → payoff-scenario breakdown + plain-vanilla alternative comparison
7. Current CDI/Selic/IPCA and Tesouro table fetched and dated

## Agent Delegation

| Agent | Role |
|-------|------|
| `renda-fixa-analyst` | Primary |
| `portfolio-architect` | Escalation — which bucket this belongs to |

## KB Domains Used

- `renda-fixa`, `tributacao`

## Output

Comparison table (bruto, IR, líquido, liquidez, garantia, risco), verdict with tie-break rationale, red flags.
