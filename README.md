<div align="center">
  <img src="docs/master-claude.png" alt="logo" width="300">
</div>

# claude-lab

> A laboratory for Claude Code configurations. Everything here is markdown — skills, agents, commands, knowledge base. No application code, no build, no tests.

---

## Layout

```
claude-lab/
├── .claude/               ← ACTIVE config (loaded by Claude Code)
│   └── skills/            ← CompanyOS: 17 skill hubs, 102 skills
├── .claude-tech/          ← PARKED config (not loaded)
│   ├── agents/            ← 58 sub-agents by domain
│   ├── commands/          ← /workflow:*, /review, /data-engineering:*, ...
│   ├── kb/                ← data-engineering knowledge base
│   └── sdd/               ← spec-driven-development artifacts
├── new-company/           ← CompanyOS workspace template
│   └── .claude/skills/    ← identical copy of the root skill set
├── CLAUDE.md              ← operating rules loaded every session
└── .mcp.json              ← Playwright MCP
```

Instantiated business workspaces (`uriel/`, `monkey/`, ...) live at the repo root and are gitignored.

---

## The Three Config Directories

### `.claude/` — active: CompanyOS

The only directory Claude Code reads. Contains the **CompanyOS** skill set: a business operating system driven entirely by skills.

17 hub skills, each a router — the hub's `SKILL.md` dispatches to sub-skill folders:

| Hub | Sub-skills |
|-----|-----------|
| `business` | ads-report, approve-post, cold-email, google-ad, professional-email, ... |
| `content` | buffer, content-planner, copywriting, humanizer, seo |
| `formats` | docx, pdf, pptx, xlsx |
| `fundraising`, `growth`, `market`, `metrics`, `strategy` | business strategy and ops |
| `instagram`, `linkedin`, `newsletters`, `tiktok`, `x`, `youtube` | per-platform content creation |
| `research` | scraping, deep research, second-brain ingestion |
| `system` | install, open, save, update, file-organizer, new-project, ... |
| `visual` | diagrams, landing pages, motion, visual explainers |

Invoke as `/hub sub-skill` (`/content plan`, `/business google-ad`, `/system install`) or plain language — hubs route automatically.

### `.claude-tech/` — parked: master-claude / AgentSpec

The former software-engineering config. **Not loaded** — Claude Code only reads `.claude/`, so nothing in here is invocable. Kept for when the lab switches back to engineering work.

Contents:

- **`agents/`** — 58 sub-agents grouped by domain: architect, cloud (AWS/GCP), data-engineering (Spark, dbt, Airflow, Lakeflow), dev, platform (Microsoft Fabric), python, test, workflow
- **`commands/`** — the AgentSpec 5-phase SDD workflow (`/workflow:brainstorm` → `define` → `design` → `build` → `ship`, plus `iterate` and `create-pr`), `/review`, `/data-engineering:*`, `/visual-explainer:*`, `/core:*`, `/knowledge:*`
- **`kb/`** — knowledge base: spark, dbt, airflow, lakehouse, medallion, fabric, terraform, streaming, sql-patterns, prompt-engineering, ...
- **`sdd/`** — workflow artifacts (features, reports, archive of shipped features)

To activate: swap it with `.claude/` (keep `.claude/skills/` if CompanyOS should stay available).

### `new-company/.claude/` — template copy

`new-company/` is a clean CompanyOS workspace template (based on [mazzeoia/CompanyOS](https://github.com/mazzeoia/CompanyOS)). Its `.claude/skills/` is an **identical copy** of the root `.claude/skills/` — bundled so each business workspace is self-contained and portable.

> ⚠️ When editing or adding a skill, apply the change to **both** trees (`.claude/skills/` and `new-company/.claude/skills/`), or they drift.

The rest of the template:

```
new-company/
├── CLAUDE.md          ← CompanyOS operating rules (memory, corrections, skill creation)
├── memory/            ← company.md, preferences.md, strategy.md
├── brain/             ← PARA second brain (0-inbox … 4-archive)
│   └── 3-resources/identity/design-guide.md   ← brand colors, fonts, style
├── output/            ← marketing/ + documents/ — all deliverables land here
└── scripts/           ← starts empty; integrations created on demand (needs .env keys)
```

---

## Spinning Up a Business Workspace

1. Copy `new-company/` and rename it to the business name (e.g. `acme-consulting/`)
2. Add the folder name to `.gitignore`
3. Open Claude Code inside the folder
4. Run `/system install` — a short interview fills `memory/` and appends business rules to the workspace's `CLAUDE.md`
5. Start every session with `/open`

See [new-company/SETUP.md](new-company/SETUP.md) for the full non-technical guide.
