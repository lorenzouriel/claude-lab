# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response Style

Be terse. No filler words, no pleasantries, no hedging. Preserve full technical accuracy.
Strip: "Sure, I'd be happy to...", "It might be worth considering...", "As mentioned above...".
Keep: code blocks, error messages, technical terms, file paths, git output.

## What This Repo Is

claude-lab is a laboratory for Claude Code configurations. There is no application code — everything is markdown (skills, agents, commands, knowledge base). There are no build, lint, or test commands.

Two systems live here:

1. **CompanyOS** (active) — a skill-driven business operating system. `.claude/skills/` at the repo root is the live config Claude Code loads.
2. **master-claude / AgentSpec** (parked) — the former software-engineering config, stored in `.claude-tech/`. Claude Code only reads `.claude/`, so nothing in `.claude-tech/` is invocable until it is swapped back in.

## Architecture

### Active config: CompanyOS skills (`.claude/skills/`)

17 hub skills: `business`, `content`, `formats`, `fundraising`, `growth`, `instagram`, `linkedin`, `market`, `metrics`, `newsletters`, `research`, `strategy`, `system`, `tiktok`, `visual`, `x`, `youtube`.

Each hub is a router: the hub's `SKILL.md` dispatches to sub-skill folders (e.g. `content/` → `buffer`, `content-planner`, `copywriting`, `humanizer`, `seo`). Invoke as `/hub sub-skill` (`/content plan`, `/business google-ad`, `/system install`) or via plain language — hubs route automatically.

### Template: `new-company/`

A clean CompanyOS workspace template (based on mazzeoia/CompanyOS). To spin up a business workspace: copy this folder, rename it to the business name, open Claude Code inside it, run `/system install` (interview that fills `memory/` and appends business rules to its `CLAUDE.md`).

Structure inside the template:
- `.claude/skills/` — full skill set (identical copy of the repo-root skills)
- `CLAUDE.md` — CompanyOS operating rules (memory reading, learn-from-corrections flow, skill creation flow)
- `memory/` — `company.md`, `preferences.md`, `strategy.md`
- `brain/` — PARA-method second brain (`0-inbox` … `4-archive`); brand identity lives at `brain/3-resources/identity/design-guide.md`
- `output/` — `marketing/` and `documents/`; all generated deliverables land here
- `scripts/` — starts empty; integration scripts (image generation, social publishing) are created on demand by skills and need a `.env` with API keys

Instantiated company workspaces at the repo root (`uriel/`, `monkey/`, `master-claude/`, `obsidian-second-brain/`) are gitignored. Add new workspace folders to `.gitignore` when creating them.

**Skills are duplicated**: `.claude/skills/` and `new-company/.claude/skills/` are identical trees. When editing or adding a skill, apply the change to both, or state explicitly that you changed only one.

### Parked config: `.claude-tech/`

- `agents/` — 58 sub-agents grouped by domain (architect, cloud, data-engineering, dev, platform/Fabric, python, test, workflow)
- `commands/` — `/workflow:*` SDD phases (brainstorm → define → design → build → ship), `/review`, `/data-engineering:*`, `/visual-explainer:*`, `/core:*`, `/knowledge:*`
- `kb/` — data-engineering knowledge base (spark, dbt, airflow, lakehouse, fabric, terraform, …)
- `sdd/` — SDD workflow artifacts (features, reports, archive)

To activate this config, swap it with `.claude/` (preserve `.claude/skills/` if CompanyOS should stay available). Do not document or invoke `.claude-tech/` commands as if they were active.
