---
name: review
description: Full portfolio review — delegates to portfolio-architect
---

# Portfolio Review

> Review the current portfolio against profile, buckets and targets; produce findings and an action list.

## Usage

```bash
/portfolio:review [posição atual em texto livre, ou caminho de arquivo/planilha]
```

## Examples

```bash
/portfolio:review "R$ 30k Tesouro Selic, R$ 50k CDB 2027, R$ 40k em ações (10 papéis), R$ 15k BOVA11"
/portfolio:review minha-carteira.csv
```

## What This Command Does

1. Invokes the **portfolio-architect** agent
2. Parses the position into classes (RF pós/pré/IPCA, RV, FIIs, proteção, reserva)
3. Checks, in order:
   - Reserva de emergência completa? (Balde 1 — pré-condição de tudo)
   - Alocação atual vs perfil ([carteira/concepts/perfil-de-risco.md]) — se perfil desconhecido, roda a entrevista antes (risk-profiler)
   - Desvios vs alvo dos três baldes
   - Concentrações (emissor > FGC, papel > 10% da RV, setor > 30%)
   - Custos e impostos evitáveis (fundos caros, come-cotas desnecessário)
4. Generates a findings report + ordered action list (aportes-first)

## Agent Delegation

| Agent | Role |
|-------|------|
| `portfolio-architect` | Primary — review and action plan |
| `risk-profiler` | Escalation — profile unknown or stress signals |
| `tributacao-specialist` | Escalation — sales with tax consequences |

## KB Domains Used

- `carteira` — três baldes, rebalanceamento, perfil
- `renda-fixa` / `fundos` — product-level checks
- `tributacao` — tax-aware action ordering

## Output

Findings table (severity-ordered), allocation atual vs alvo, action list, disclaimer. Current rates fetched and dated.
