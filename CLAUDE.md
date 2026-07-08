# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response Style

Be terse. No filler words, no pleasantries, no hedging. Preserve full technical accuracy.
Strip: "Sure, I'd be happy to...", "It might be worth considering...", "As mentioned above...".
Keep: code blocks, error messages, technical terms, file paths, git output.

## What This Repo Is

claude-lab is a laboratory for Claude Code configurations. There is no application code — everything is markdown (skills, agents, commands, knowledge base). There are no build, lint, or test commands.

The repo is organized as **self-contained domain folders**, each carrying its own `.claude/` config. You get a domain's skills by opening Claude Code inside that folder. The repo root has no active skills (`.claude/` at the root holds only local settings) — root sessions are for maintaining the lab itself.

1. **`company-os/`** — CompanyOS, a skill-driven business operating system. Also the template for new business workspaces.
2. **`tech-os/`** — master-claude / AgentSpec, the software-engineering config (agents, SDD commands, data-engineering knowledge base).
3. **`investments-os/`** — the investments config for a Brazilian individual investor (agents, commands, PT-BR knowledge base distilled from the owner's study notes).

## Architecture

### `company-os/` — CompanyOS

18 hub skills in `company-os/.claude/skills/`: `business`, `content`, `ebook`, `formats`, `fundraising`, `growth`, `instagram`, `linkedin`, `market`, `metrics`, `newsletters`, `research`, `strategy`, `system`, `tiktok`, `visual`, `x`, `youtube`.

Each hub is a router: the hub's `SKILL.md` dispatches to sub-skill folders (e.g. `content/` → `archive-content`, `buffer`, `content-planner`, `copywriting`, `humanizer`, `seo`). Invoke as `/hub sub-skill` (`/content plan`, `/business google-ad`, `/system install`) or via plain language — hubs route automatically.

**Single source of truth**: `company-os/.claude/skills/` is the only copy of the skill set in this repo (the old `.claude/skills/` ↔ `new-company/` duplication is gone). When a useful skill is created inside an instantiated workspace, sync it back here so the template gains it.

Structure of `company-os/`:
- `.claude/skills/` — the full skill set
- `CLAUDE.md` — CompanyOS operating rules (memory reading, learn-from-corrections flow, skill creation flow)
- `memory/` — `company.md`, `preferences.md`, `strategy.md`
- `brain/` — PARA-method second brain (`0-inbox` … `4-archive`); brand identity lives at `brain/3-resources/identity/design-guide.md`
- `output/` — `marketing/` and `documents/`; all generated deliverables land here
- `scripts/` — starts empty; integration scripts (image generation, social publishing) are created on demand by skills and need a `.env` with API keys

To spin up a business workspace: copy `company-os/`, rename it to the business name, open Claude Code inside it, run `/system install` (interview that fills `memory/` and appends business rules to its `CLAUDE.md`). Instantiated company workspaces (e.g. `uriel/`, `monkey/`) are gitignored — add new workspace folders to `.gitignore` when creating them inside the repo.

### `tech-os/` — master-claude / AgentSpec

- `.claude/agents/` — 58 sub-agents grouped by domain (architect, cloud, data-engineering, dev, platform/Fabric, python, test, workflow)
- `.claude/commands/` — `/workflow:*` SDD phases (brainstorm → define → design → build → ship), `/review`, `/data-engineering:*`, `/visual-explainer:*`, `/core:*`, `/knowledge:*`
- `.claude/kb/` — data-engineering knowledge base (spark, dbt, airflow, lakehouse, fabric, terraform, …)
- `.claude/sdd/` — SDD workflow artifacts (features, reports, archive)

Its commands and agents are active only in sessions opened inside `tech-os/` (or in a project that copies `tech-os/.claude/`). Do not document or invoke them as if they were active at the repo root.

### `investments-os/` — investments

Mirrors the tech-os architecture for Brazilian personal investing:

- `.claude/agents/` — 9 sub-agents (architect, analyst ×3, tax, research, education ×2, knowledge)
- `.claude/commands/` — `/portfolio:*`, `/analyze:*`, `/tax:*`, `/research:mercado`, `/learn:topico`, `/knowledge:ingest`
- `.claude/kb/` — PT-BR KB in 7 domains (renda-fixa, renda-variavel, fundos, tributacao, carteira, analise, dados-mercado), registered in `kb/_index.yaml`; `dados-mercado` catalogs the free no-key APIs (BCB, Tesouro Transparente, Yahoo `.SA`, CVM, …) agents use for live data — account-gated MCPs are documented opt-ins only
- `portfolio/` — local portfolio state (CSVs, gitignored; schemas in its README)
- `.claude/skills/agent-router/` — session routing rules

**Two layers**: the raw study notes at the folder root (`Renda Fixa/`, `Renda Variável/`, `Fundos de Investimento/`, `Tributação/`, root .md files) are the owner's Obsidian vault and are **read-only**; the KB is the distilled layer, synced via `/knowledge:ingest`. Operating rules in `investments-os/CLAUDE.md` (KB-first, dated market data, educational-not-advice).
