---
name: darf
description: Monthly renda variável tax apuração — delegates to tributacao-specialist
---

# Tax DARF

> Run the monthly apuração: operations → categories → exemption → loss compensation → DARF value and deadline.

## Usage

```bash
/tax:darf [operações do mês em texto livre, ou caminho de notas/planilha]
```

## Examples

```bash
/tax:darf "vendi R$ 35 mil em ações com lucro de R$ 4 mil, e R$ 8 mil de BOVA11 com lucro de R$ 600"
/tax:darf operacoes-junho.csv
/tax:darf "só vendi R$ 12 mil em ações no mês, com lucro"   # → isento, sem DARF
```

## What This Command Does

1. Invokes the **tributacao-specialist** agent
2. Reads `portfolio/trades.csv` and `portfolio/prejuizos.csv` when present (no arguments needed); updates `prejuizos.csv` after the apuração
3. Follows [tributacao/patterns/apuracao-darf.md]:
   - Separate categories: ações comum / day trade / ETF / FII
   - Exemption check: volume vendido ≤ R$ 20 mil (ações comuns only — never ETF/FII)
   - Apply accumulated losses per category ([compensacao-prejuizos.md] matrix)
   - Compute per category (15/20/20%), net the IRRF dedo-duro
   - Consolidate → DARF 6015, deadline last business day of next month; < R$ 10 accumulates
3. Lists the records to keep for the annual declaration

## Agent Delegation

| Agent | Role |
|-------|------|
| `tributacao-specialist` | Primary |

## KB Domains Used

- `tributacao` — apuracao-darf, compensacao-prejuizos, ir-renda-variavel, ir-fundos-come-cotas

## Output

Apuração table per category, imposto devido, DARF value + code + deadline, loss carryforward update, records checklist.

> Educational guidance — complex cases (PJ, offshore, regularização) go to an accountant.
