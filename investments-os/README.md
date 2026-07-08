# investments-os

> The investments Claude Code config for a Brazilian individual investor: 9 specialist agents, slash commands, and a PT-BR knowledge base distilled from the owner's own study notes.

Open Claude Code inside this folder to use it. Same architecture as [tech-os](../tech-os/): agents / commands / kb / skills with KB-first resolution.

---

## What's inside

```
investments-os/
├── Renda Fixa/  Renda Variável/  Fundos de Investimento/  Tributação/
│   ...                ← raw study notes (Obsidian vault) — the SOURCE layer, read-only
├── Glossário Inicial.md · Montando a Sua Carteira.md
├── portfolio/         ← local portfolio state (positions/trades/prejuizos CSVs, gitignored)
├── .claude/
│   ├── agents/        ← 9 sub-agents by domain
│   ├── commands/      ← /portfolio:* /analyze:* /tax:* /research:* /learn:* /knowledge:*
│   ├── kb/            ← 7 KB domains (PT-BR), registered in kb/_index.yaml
│   └── skills/        ← agent-router (session routing rules)
├── CLAUDE.md          ← operating rules
└── README.md
```

### Agents (`.claude/agents/`)

| Group | Agent | Focus |
|-------|-------|-------|
| architect | `portfolio-architect` | three-bucket allocation, rebalancing plans |
| analyst | `renda-fixa-analyst` | net-of-tax RF comparisons (gross-up), FGC, COE breakdowns |
| analyst | `acoes-analyst` | stock checklist, valuation, written thesis, swing setups |
| analyst | `fundos-analyst` | funds/ETF/FII/previdência: fees, structure, fit |
| tax | `tributacao-specialist` | IR/IOF/come-cotas mechanics, DARF workflow, legal optimization |
| research | `market-researcher` | dated macro briefs framed by the KB |
| education | `investment-educator` | teaches/quizzes from the KB + the owner's own notes |
| education | `risk-profiler` | profile interview, carteira × perfil alignment |
| knowledge | `kb-curator` | notes → KB ingestion pipeline |

### Commands (`.claude/commands/`)

- `/portfolio:track` · `/portfolio:review` · `/portfolio:allocate` · `/portfolio:rebalance`
- `/analyze:acao <ticker>` · `/analyze:fundo <nome>` · `/analyze:renda-fixa <produtos>`
- `/tax:darf` · `/tax:otimizar`
- `/research:mercado` · `/learn:topico <tópico>` · `/knowledge:ingest`

### Knowledge base (`.claude/kb/`)

`renda-fixa` · `renda-variavel` · `fundos` · `tributacao` · `carteira` · `analise` — each with `index.md`, `quick-reference.md`, `concepts/`, `patterns/` — plus `dados-mercado`, the catalog of **free, no-key APIs** agents use for live data (BCB SGS/Focus, Tesouro Transparente, Yahoo `.SA`, Fundamentus, CVM Dados Abertos, AwesomeAPI, CoinGecko; endpoints verified live). Indexed in `kb/_index.yaml`. Account-gated MCPs (brapi, bolsai, Alpha Vantage) are documented as opt-ins but not installed.

## The study pipeline

```
you study → write raw notes (root folders)
          → /knowledge:ingest
          → kb-curator distills into .claude/kb/
          → every agent answers KB-first from your own knowledge
```

## Ground rules

- Educational analysis, **not** financial advice — outputs carry assumptions, risks and a disclaimer.
- Current market values (Selic, CDI, IPCA, quotes, limits) are always fetched and dated, never recalled.
- Raw notes are read-only for every agent.

## Relationship to the lab

One of the domain configs of [claude-lab](../README.md), alongside `company-os/` (business) and `tech-os/` (software engineering). Each folder is self-contained: its skills and commands are only active in sessions opened inside it.
