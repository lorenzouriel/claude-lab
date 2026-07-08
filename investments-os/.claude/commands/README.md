# investments-os Commands

> Slash commands grouped by namespace. Each delegates to a specialist agent and its KB domains.

## Catalog

| Command | Agent | What it does |
|---------|-------|--------------|
| `/portfolio:track` | portfolio-architect | Mark `portfolio/positions.csv` to market via free APIs; P&L + drift snapshot |
| `/portfolio:review` | portfolio-architect | Full portfolio review: drift, alignment, risks, actions |
| `/portfolio:allocate` | portfolio-architect (+ risk-profiler) | Build a three-bucket allocation from profile and goals |
| `/portfolio:rebalance` | portfolio-architect | Aportes-first rebalancing plan with tax awareness |
| `/analyze:acao <ticker>` | acoes-analyst | Full stock checklist + written thesis |
| `/analyze:fundo <nome>` | fundos-analyst | Fund/ETF/FII/previdência analysis (fees, structure, fit) |
| `/analyze:renda-fixa <produtos>` | renda-fixa-analyst | Net-of-tax comparison (gross-up) of RF products |
| `/tax:darf` | tributacao-specialist | Monthly apuração workflow → DARF value and deadline |
| `/tax:otimizar` | tributacao-specialist | Legal tax-optimization review of the current setup |
| `/research:mercado` | market-researcher | KB-framed macro/market brief with dated data |
| `/learn <tópico>` | investment-educator | Teach/quiz any topic from KB + the user's own notes |
| `/knowledge:ingest` | kb-curator | Distill new root study notes into the KB |

## Conventions

- Commands accept free-text arguments (`$ARGUMENTS`) — a ticker, product descriptions, or a question.
- Every numerical output states its sources and dates; current rates come from the free APIs in `kb/dados-mercado/quick-reference.md`, never recalled from memory.
- Local state lives in `portfolio/*.csv` (gitignored; schemas in `portfolio/README.md`) — `/portfolio:*` and `/tax:darf` read/write it.
- Every analysis output ends with the educational disclaimer — none of this is a formal investment recommendation.
