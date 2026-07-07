<div align="center">
  <img src="docs/master-claude.png" alt="logo" width="300">
</div>

# claude-lab

> A laboratory for Claude Code configurations. Everything here is markdown — skills, agents, commands, knowledge base. No application code, no build, no tests.

---

## Layout

```
claude-lab/
├── company-os/            ← CompanyOS: business operating system + workspace template
│   ├── .claude/skills/    ← THE skill tree (18 hubs, 112 skills) — single source of truth
│   ├── CLAUDE.md          ← CompanyOS operating rules
│   ├── memory/  brain/  output/  scripts/
│   └── SETUP.md           ← non-technical setup guide
├── tech-os/               ← master-claude / AgentSpec: software-engineering config
│   └── .claude/           ← agents, commands, kb, sdd, skills
├── investments-os/        ← reserved for a future investments config (empty for now)
│   └── .claude/
├── docs/                  ← repo assets
├── CLAUDE.md              ← lab operating rules (loaded when working on the lab itself)
└── .mcp.json              ← Playwright MCP
```

Each domain folder is **self-contained**: it carries its own `.claude/` config, and you get its skills by opening Claude Code *inside* that folder. The repo root has no active skills — root sessions are for maintaining the lab itself.

Instantiated business workspaces (`uriel/`, `monkey/`, ...) are copies of `company-os/` and are gitignored wherever they live.

---

## The Domain Configs

### `company-os/` — CompanyOS

A skill-driven business operating system (based on [mazzeoia/CompanyOS](https://github.com/mazzeoia/CompanyOS)), doubling as the template for new business workspaces.

18 hub skills, each a router — the hub's `SKILL.md` dispatches to sub-skill folders:

| Hub | Sub-skills |
|-----|-----------|
| `business` | ads-report, approve-post, cold-email, google-ad, professional-email, ... |
| `content` | archive-content, buffer, content-planner, copywriting, humanizer, seo |
| `ebook` | inventory, outline, write, assemble |
| `formats` | docx, pdf, pptx, xlsx |
| `fundraising`, `growth`, `market`, `metrics`, `strategy` | business strategy and ops (incl. brand-identity + brand-book) |
| `instagram`, `linkedin`, `newsletters`, `tiktok`, `x`, `youtube` | per-platform content creation |
| `research` | scraping, deep research, second-brain ingestion |
| `system` | install, open, save, update, file-organizer, new-project, ... |
| `visual` | diagrams, landing pages, motion, visual explainers |

Invoke as `/hub sub-skill` (`/content plan`, `/business google-ad`, `/system install`) or plain language — hubs route automatically.

`company-os/.claude/skills/` is the **only** copy of the skill set in the repo. Skills created inside instantiated workspaces should be synced back here to become part of the template.

### `tech-os/` — master-claude / AgentSpec

The software-engineering config. Open Claude Code inside `tech-os/` (or copy `tech-os/.claude/` into an engineering project) to use it.

- **`agents/`** — 58 sub-agents grouped by domain: architect, cloud (AWS/GCP), data-engineering (Spark, dbt, Airflow, Lakeflow), dev, platform (Microsoft Fabric), python, test, workflow
- **`commands/`** — the AgentSpec 5-phase SDD workflow (`/workflow:brainstorm` → `define` → `design` → `build` → `ship`, plus `iterate` and `create-pr`), `/review`, `/data-engineering:*`, `/visual-explainer:*`, `/core:*`, `/knowledge:*`
- **`kb/`** — knowledge base: spark, dbt, airflow, lakehouse, medallion, fabric, terraform, streaming, sql-patterns, prompt-engineering, ...
- **`sdd/`** — workflow artifacts (features, reports, archive of shipped features)

### `investments-os/` — reserved

Placeholder for a future investments/finance config. Its `.claude/` is empty.

---

## Spinning Up a Business Workspace

1. Copy `company-os/` and rename it to the business name (e.g. `acme-consulting/`)
2. Add the folder name to `.gitignore`
3. Open Claude Code inside the folder
4. Run `/system install` — a short interview fills `memory/` and appends business rules to the workspace's `CLAUDE.md`
5. Start every session with `/open`

See [company-os/SETUP.md](company-os/SETUP.md) for the full non-technical guide.
