---
name: otimizar
description: Legal tax-optimization review — delegates to tributacao-specialist
---

# Tax Otimizar

> Review the current setup against every legal tax lever: isenções, prazos, estruturas, compensações.

## Usage

```bash
/tax:otimizar [contexto: carteira atual, renda, tipo de declaração]
```

## Examples

```bash
/tax:otimizar "carteira: CDBs, fundo multimercado do banco, ações. Declaro completo, CLT."
/tax:otimizar "quero vender R$ 60 mil em ações com lucro — como pagar menos IR legalmente?"
/tax:otimizar "vale trocar meu fundo DI por outra coisa por causa do come-cotas?"
```

## What This Command Does

1. Invokes the **tributacao-specialist** agent
2. Runs the levers from [tributacao/patterns/otimizacao-fiscal.md] against the user's facts:
   - **Isentos**: LCI/LCA/CRI/CRA, debêntures incentivadas, FII (rendimento), dividendos — with gross-up math, never isento-by-default
   - **Janela dos 20k**: slicing sales across months (legal and provided for)
   - **Prazos**: regressive-table thresholds (181/361/721 dias), IOF 30 dias
   - **Estruturas**: FIA/previdência sem come-cotas; PGBL 12% para declaração completa; portabilidade sem evento fiscal
   - **Prejuízos**: registro e compensação por categoria
3. Ranks applicable levers by estimated impact
4. Marks the elisão/evasão boundary explicitly — omission is never on the table

## Agent Delegation

| Agent | Role |
|-------|------|
| `tributacao-specialist` | Primary |
| `fundos-analyst` / `renda-fixa-analyst` | Escalation — replacement product analysis |

## KB Domains Used

- `tributacao` — all patterns
- `renda-fixa` — gross-up comparisons
- `fundos` — previdência and FIA structures

## Output

Ranked lever list with the rule that makes each legal, estimated impact, and what NOT to do.
