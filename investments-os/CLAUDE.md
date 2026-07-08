# CLAUDE.md — investments-os

Operating rules for Claude Code sessions opened inside `investments-os/`.

## What this is

A self-contained investments config for a Brazilian individual investor: 9 specialist agents, slash commands, and a PT-BR knowledge base distilled from the owner's own study notes. Same architecture as `tech-os/` (agents / commands / kb / skills, KB-first resolution).

## The two layers

1. **Raw study notes** (repo root: `Renda Fixa/`, `Renda Variável/`, `Fundos de Investimento/`, `Tributação/`, `Glossário Inicial.md`, `Montando a Sua Carteira.md`) — the owner's Obsidian vault. **READ-ONLY. Never edit, rename, or move these files.**
2. **KB** (`.claude/kb/`) — the distilled, agent-ready layer. 6 domains registered in `kb/_index.yaml`. New notes flow into it via `/knowledge:ingest` (kb-curator agent).

## Hard rules (all sessions)

1. **KB-first**: read the domain `index.md` headings, then load only the one concept/pattern file that matches. Don't bulk-load KB.
2. **Time-sensitive data is never recalled from memory or KB**: Selic, CDI, IPCA, cotações, limites do FGC, alíquotas em discussão. KB records mechanics; current values come from the **free, no-key APIs cataloged in `kb/dados-mercado/`** (BCB SGS/Focus, Tesouro Transparente, Yahoo `.SA`, Fundamentus, CVM, AwesomeAPI, CoinGecko) — WebSearch only when no API covers it. Every figure cited **with source and date**. Large files (Tesouro CSV, CVM CSVs) are downloaded to the scratchpad and filtered, never loaded whole. Account-gated MCPs (brapi, bolsai, Alpha Vantage) are documented in `kb/dados-mercado/reference/mcps-opcionais.md` but **not installed** — owner's decision: free APIs only.
3. **Educational analysis, not financial advice**: no guaranteed-return language, no certainty-framed buy/sell calls. Show assumptions, risks, and scenarios. Analysis outputs end with the disclaimer line.
4. **Language**: KB content and user-facing analysis in PT-BR by default; config scaffolding in English. Currency BRL; market scope B3 / Tesouro Direto / CVM.
5. **Routing**: the `agent-router` skill maps intents to the 9 agents. Product analysis → analysts; allocation → portfolio-architect; tax mechanics → tributacao-specialist; teaching → investment-educator.
6. **Reserve rule overrides everything**: incomplete emergency reserve caps any plan — surface it before optimizing anything else.

## Commands

`/portfolio:review|allocate|rebalance` · `/analyze:acao|fundo|renda-fixa` · `/tax:darf|otimizar` · `/research:mercado` · `/learn:topico` · `/knowledge:ingest` — see `.claude/commands/README.md`.

## Maintenance

- New skill/agent/domain ideas proven useful here → keep self-contained in this folder (lab rule: domain folders own their config).
- When notes and KB diverge, the owner's current understanding wins — kb-curator asks instead of guessing.
- Keep `kb/_index.yaml` in sync with any KB file added or removed.
