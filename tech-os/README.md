# tech-os — master-claude / AgentSpec

> The software-engineering Claude Code config: 58 domain sub-agents, a 5-phase spec-driven-development workflow, and a data-engineering knowledge base.

Open Claude Code inside this folder to use it, or copy `.claude/` into an engineering project.

---

## What's inside

```
tech-os/.claude/
├── agents/       ← 58 sub-agents by domain
├── commands/     ← slash commands (SDD workflow, review, data-engineering, ...)
├── kb/           ← data-engineering knowledge base
├── sdd/          ← SDD workflow artifacts (features, reports, archive)
├── skills/       ← agent-router, excalidraw-diagram, visual-explainer
└── settings.json
```

### Agents (`agents/`)

Grouped by domain:

| Group | Focus |
|-------|-------|
| `architect` | system design, trade-off analysis |
| `cloud` | AWS, GCP |
| `data-engineering` | Spark, dbt, Airflow, Lakeflow |
| `dev` | general implementation |
| `platform` | Microsoft Fabric |
| `python` | Python-specific work |
| `test` | test strategy and authoring |
| `workflow` | SDD phase execution |

### Commands (`commands/`)

- **AgentSpec SDD workflow** — `/workflow:brainstorm` → `define` → `design` → `build` → `ship`, plus `iterate` and `create-pr`. Artifacts land in `.claude/sdd/`.
- `/review` — code review
- `/data-engineering:*` — pipeline, modeling, and quality tasks
- `/visual-explainer:*` — HTML visual explanations
- `/core:*`, `/knowledge:*` — utilities and KB management

### Knowledge base (`kb/`)

spark, dbt, airflow, lakehouse, medallion, microsoft-fabric, terraform, streaming, sql-patterns, data-modeling, data-quality, aws, gcp, supabase, pydantic, python, testing, genai, prompt-engineering, modern-stack, ai-data-engineering. Indexed in `kb/_index.yaml`.

---

## Relationship to the lab

This is one of the domain configs of [claude-lab](../README.md), alongside `company-os/` (business) and `investments-os/` (reserved). Each folder is self-contained: its skills and commands are only active in sessions opened inside it.
