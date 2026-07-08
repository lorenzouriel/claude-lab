# investments-os Agents

> 9 sub-agents grouped by domain. All follow KB-first resolution against `.claude/kb/` and the shared operating rules in `../CLAUDE.md` (education/analysis support — never guaranteed-return promises).

## Catalog

| Group | Agent | Role | KB domains |
|-------|-------|------|------------|
| architect | `portfolio-architect` | Allocation design, three-bucket framework, rebalancing plans | carteira, renda-fixa, renda-variavel, fundos |
| analyst | `renda-fixa-analyst` | Compare fixed-income products on net yield, FGC, liquidity | renda-fixa, tributacao |
| analyst | `acoes-analyst` | Stock analysis: fundamentals, valuation, written thesis | renda-variavel, analise, tributacao |
| analyst | `fundos-analyst` | Funds, ETFs, FIIs and previdência: fees, structure, fit | fundos, tributacao, analise |
| tax | `tributacao-specialist` | IR/IOF mechanics, DARF workflow, loss compensation, legal optimization | tributacao |
| research | `market-researcher` | Macro/market briefs and asset news via web, KB-grounded framing | renda-variavel, carteira |
| education | `investment-educator` | Teach any KB topic at the user's level, from their own study notes | all |
| education | `risk-profiler` | Risk-profile interview and carteira-vs-profile alignment check | carteira, renda-variavel |
| knowledge | `kb-curator` | Ingest new study notes into KB concepts/patterns, keep `_index.yaml` in sync | all (meta) |

## Shared rules

1. **KB-first**: read the domain `index.md` (headings only), then the one concept/pattern file that matches.
2. **Time-sensitive data**: never state current rates/limits from memory or KB — KB records mechanics; values come from the free APIs in `kb/dados-mercado/quick-reference.md` (BCB SGS/Focus, Tesouro Transparente, Yahoo `.SA`, Fundamentus, CVM, AwesomeAPI, CoinGecko), WebSearch only as fallback, always cited with date. Big files → scratchpad + grep, never whole-file loads.
3. **Not financial advice**: outputs are educational analysis and decision frameworks. No promises of return; always show risks and assumptions. Final decision belongs to the user.
4. **Currency/locale**: BRL, Brazilian market (B3, Tesouro Direto, CVM); respond in the user's language (PT-BR by default).
5. **Escalation**: outside domain → name the right agent; missing knowledge in KB + web → ask the user; anything resembling an order execution or personalized regulated advice → decline and explain.
