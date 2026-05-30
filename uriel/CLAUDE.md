# Uriel — Company OS

> This workspace runs on Claude Code. This file tells Claude who we are,
> how we work, and what tools are available.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — who we are, what we do, our audience
2. `_memory/preferences.md` — tone, voice, what to avoid
3. `_memory/strategy.md` — current focus, priorities, and KPIs

Use this context in every response. Don't list what you read — just use it.

---

## Skills

Installed skills are in `.claude/skills/`. Before starting any task, check if
a relevant skill exists. If it does, follow its instructions.

**Installed:**
- `/newsletter` — Writes Substack/email newsletters with 3 subject line options, hook, body, and CTA
- `/social-media-post` — Platform-optimized posts for LinkedIn, Instagram, TikTok, X
- `/seo-article` — Long-form SEO articles for Medium and blog
- `/video-script` — YouTube, Reels, and Shorts scripts
- `/carousel-post` — Instagram carousel and slide-based posts
- `/content-planner` — Content calendar planning and scheduling
- `/code-review` — Code review with quality, security, and maintainability checks
- `/pr-description` — Pull request descriptions for GitHub
- `/data-analysis` — Data analysis workflows and reporting
- `/kpi-dashboard` — KPI tracking and dashboard design
- `/weekly-review` — Weekly business review and retrospective
- `/project-brief` — Project scoping and brief creation
- `/sycophancy` — Pressure-test ideas; honest, direct feedback
- `/humanizer` — Remove AI writing patterns; make content sound human
- `/content-workflow` — Full end-to-end weekly content pipeline (3 pillars × topic sourcing × draft approval × social adaptations)
- `/content-research` — Research and ideation: curated (drop links, get similar + angles) or automated (scrapes GitHub Trending, HackerNews, data/AI feeds weekly)
- `/buffer` — Schedule posts to Instagram, LinkedIn, YouTube via Buffer CLI — free plan, 3 channels (requires BUFFER_API_KEY + `npm install -g @bufferapp/cli`)
- `/blotato` — Publish and schedule posts to Instagram, LinkedIn, TikTok, YouTube, X via Blotato MCP — unlimited channels (requires BLOTATO_API_KEY)

---

## Working with Brand Assets

For any visual task (social post, slides, carousel, cover), read
`identity/design-guide.md` before starting. Colors and fonts are defined there.

**Quick reference:**
- Primary colors: `#5F5F5F`, `#606060` (monochromatic — no bright accents)
- Fonts: Fraunces (titles) / Inter (body) / JetBrains Mono (labels)
- Logo: `identity/assets/uriel-logo.png`

---

## Humanizer rule

**All content must pass through `/humanizer` before final delivery.** No exceptions.
The main voice avoid list is in `_memory/preferences.md` — no AI-looking text,
no emoji spam, no corporate buzzwords.

---

## SDD Workflow (Feature Development)

Use these commands when building new features, automations, or internal tools:

| Command | Phase | Purpose |
|---------|-------|---------|
| `/workflow:brainstorm` | 0 | Explore ideas through dialogue |
| `/workflow:define` | 1 | Capture and validate requirements |
| `/workflow:design` | 2 | Create architecture and technical spec |
| `/workflow:build` | 3 | Execute implementation |
| `/workflow:iterate` | cross | Update any phase document mid-stream |
| `/workflow:ship` | 4 | Archive completed feature |

Artifacts are saved to `.claude/sdd/` — brainstorms, requirements, designs, build reports, and archive.

---

## Specialized Agents (Data Engineering + AI)

Installed agents are in `.claude/agents/`. Invoke them by name in conversation.
Knowledge bases are in `.claude/kb/` — agents reference these automatically.

**Data Engineering:**
- `@ai-data-engineer` — RAG pipelines, vector databases, LLMOps
- `@airflow-specialist` — Airflow 3.0 DAGs, TaskFlow API, event-driven pipelines
- `@dbt-specialist` — dbt Core/Cloud, model development, tests, macros
- `@sql-optimizer` — Cross-dialect SQL optimization, query plans, performance
- `@spark-engineer` — PySpark, Spark SQL, distributed processing
- `@lakeflow-architect` — Databricks Lakeflow, Medallion architecture, DLT
- `@streaming-engineer` — Flink, Kafka, Spark Streaming, CDC pipelines

**Architecture:**
- `@schema-designer` — Dimensional modeling, Data Vault, SCD, schema evolution
- `@genai-architect` — Multi-agent orchestration, agentic workflows, production AI
- `@medallion-architect` — Bronze/Silver/Gold layer design
- `@lakehouse-architect` — Iceberg, Delta Lake, catalog governance
- `@pipeline-architect` — Orchestration, Airflow/Dagster, pipeline design

**AI & Python:**
- `@ai-prompt-specialist` — Prompt engineering, structured output, chain-of-thought
- `@llm-specialist` — LLM expertise, advanced prompting, production AI
- `@python-developer` — Clean Python, dataclasses, type hints, generators
- `@code-reviewer` — Code quality, security, maintainability

**Microsoft Fabric:**
- `@fabric-architect` — End-to-end Fabric architectures
- `@fabric-pipeline-developer` — Data Factory pipelines, Copy Activity, Dataflow Gen2
- `@fabric-security-specialist` — RLS, permissions, data masking, compliance
- `@fabric-logging-specialist` — Monitoring, KQL queries, observability

**Testing & Quality:**
- `@data-quality-analyst` — Great Expectations, Soda, dbt tests, data contracts
- `@data-contracts-engineer` — ODCS, SLA enforcement, schema governance
- `@test-generator` — pytest unit tests, integration tests, fixtures

---

## File Organization

- New content → `outputs/{type}/{YYYY-MM-DD}/`
- Data files to analyze → `data/`
- Wiki notes → `wiki/{Projects|Areas|Resources|Archives}/`
- Recurring tasks → `.claude/skills/`
- Active projects → `wiki/Projects/`

---

## Learning from corrections

When I correct something or give a permanent instruction ("always", "never",
"from now on", "prefer"), ask:

> "Want me to save that so I don't forget?"

If yes, save to the appropriate `_memory/` file.

---

## Profile

- **Type:** Solopreneur / Freelancer
- **Language:** English (PT-BR for social content)
- **Setup date:** 2026-05-30
