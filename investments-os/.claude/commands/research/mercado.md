---
name: mercado
description: KB-framed macro/market brief with dated data — delegates to market-researcher
---

# Research Mercado

> Current macro picture (Selic, IPCA, câmbio, bolsa) translated into per-bucket implications — facts dated, interpretation framed, default action "none".

## Usage

```bash
/research:mercado [foco opcional: juros | inflação | câmbio | bolsa | <ticker/setor>]
```

## Examples

```bash
/research:mercado
/research:mercado juros          # COPOM/Selic focus
/research:mercado PETR4          # asset-news materiality check
/research:mercado "setor elétrico"
```

## What This Command Does

1. Invokes the **market-researcher** agent
2. WebSearch current data: Selic + COPOM signal, IPCA 12m + expectativas, câmbio, Ibovespa trend — every figure with source + date (BCB, IBGE, B3, RI, major financial press)
3. Frames through the KB:
   - Rate transmission → [renda-fixa/concepts/inflacao-e-juro-real.md]
   - Cycle/opportunity reading → [carteira/patterns/aproveitando-oportunidades.md] (±5 p.p. rule, reserva intocável)
   - Risk classification → [renda-variavel/concepts/riscos.md] (sistemático vs específico)
4. Separates **fato** (dados) from **interpretação** (implicações) explicitly
5. Asset focus → materiality verdict: thesis-relevant (→ re-run `/analyze:acao`) or noise

## Agent Delegation

| Agent | Role |
|-------|------|
| `market-researcher` | Primary |
| `portfolio-architect` | Escalation — if the brief triggers the opportunity/drift rules |

## KB Domains Used

- `carteira`, `renda-fixa`, `renda-variavel` — framing only; data is always live

## Output

Data table (sourced + dated), per-bucket implications, "o que isso NÃO significa" line, default recommendation: no action unless a KB rule triggers.
