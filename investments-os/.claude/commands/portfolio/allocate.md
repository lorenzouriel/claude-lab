---
name: allocate
description: Build a three-bucket allocation from profile and goals — delegates to portfolio-architect
---

# Portfolio Allocate

> Design an allocation from scratch: profile → buckets → product categories → implementation sequence.

## Usage

```bash
/portfolio:allocate [contexto: patrimônio, poupança mensal, custo de vida, objetivos]
```

## Examples

```bash
/portfolio:allocate "R$ 80 mil disponíveis, guardo R$ 3 mil/mês, custo de vida R$ 6 mil, quero aposentar em 25 anos e trocar de carro em 3"
/portfolio:allocate   # interativo: o agente pergunta o que faltar
```

## What This Command Does

1. Invokes the **portfolio-architect** agent
2. Collects missing inputs (custo de vida, metas com data, perfil — via risk-profiler se necessário)
3. Applies the three-bucket framework ([carteira/patterns/alocacao-tres-baldes.md]):
   - Balde 1: reserva 3–6 meses → Tesouro Selic/CDB diário
   - Balde 2: metas 2–5 anos → 30–40% da poupança mensal, vencimentos casados
   - Balde 3: longo prazo → 60–70% da poupança mensal, % RV pelo perfil
4. Maps buckets to product **categories** with rationale (tickers only on request → analysts)
5. Produces the implementation sequence (what to open/buy first) and the monthly routine

## Agent Delegation

| Agent | Role |
|-------|------|
| `portfolio-architect` | Primary |
| `risk-profiler` | Profile interview when unknown |
| `renda-fixa-analyst` / `fundos-analyst` | Escalation — specific product picks |

## KB Domains Used

- `carteira` — the framework
- `renda-fixa`, `fundos`, `renda-variavel` — category mapping
- `tributacao` — vehicle tax efficiency (LCI/LCA, previdência, FIA)

## Output

Allocation table per bucket, implementation steps, monthly routine, stated assumptions and risks.
