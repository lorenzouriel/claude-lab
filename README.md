# master-claude

> A unified Claude Code workspace combining software engineering workflow (AgentSpec) and content squad orchestration (Opensquad) — one tool, one mental model.

---

## What's Inside

master-claude is a personal Claude Code configuration that combines two frameworks into a single `.claude/` directory:

| Framework | Purpose | Entry Point |
|-----------|---------|-------------|
| **AgentSpec** | Spec-Driven Development — 5-phase workflow for software engineering | `/workflow:brainstorm` |
| **Opensquad** | Multi-agent orchestration — content squads with pipeline execution | `/squad` |

Both systems share the same workspace, memory model, and Claude Code agent ecosystem.

---

## Quick Start

### Clone and use

```bash
git clone <this-repo>
cd master-claude
```

Open Claude Code in this directory. All commands are immediately available.

### First steps

**For software engineering:**
```
/workflow:brainstorm "describe your idea"
```

**For content squads:**
```
/squad
```
This triggers onboarding — set your company profile, language, and preferences.

**For the visual dashboard (optional):**
```bash
cd dashboard && npm run dev
```
Then run `/squad:dashboard-design` to customize the 2D virtual office.

---

## Commands

### AgentSpec — Software Engineering Workflow

```
/workflow:brainstorm      Explore ideas through dialogue (Phase 0)
/workflow:define          Capture and validate requirements (Phase 1)
/workflow:design          Create architecture and technical spec (Phase 2)
/workflow:build           Execute implementation (Phase 3)
/workflow:ship            Archive completed feature (Phase 4)
/workflow:iterate         Update documents when requirements change
/workflow:create-pr       Create a PR with conventional commits
```

### Squad — Content Orchestration (Opensquad)

```
/squad                    Open main menu
/squad create             Create a squad (conversational — no ceremony)
/squad run <name>         Execute a squad pipeline
/squad edit <name>        Modify an existing squad
/squad list               List your squads
/squad skills             Browse and install squad skills
/squad install <name>     Install a skill from the catalog
/squad delete <name>      Delete a squad
/squad edit-company       Update your company profile
/squad:dashboard-design   Design the 2D virtual office
```

### Code Quality

```
/review                   Code review (CodeRabbit + Claude dual review)
/review:judge             Cross-model second opinion via OpenRouter
```

### Visual Explainers

```
/visual-explainer:generate-web-diagram    Generate HTML diagram
/visual-explainer:generate-slides         Magazine-quality slide deck
/visual-explainer:diff-review             Before/after architecture review
/visual-explainer:plan-review             Visual implementation plan review
/visual-explainer:project-recap           Project state recap
/visual-explainer:fact-check             Verify document against codebase
/visual-explainer:share                  Share via Vercel (live URL)
```

### Data Engineering

```
/data-engineering:pipeline       DAG/pipeline scaffolding
/data-engineering:schema         Interactive schema design
/data-engineering:sql-review     SQL-specific code review
/data-engineering:data-quality   Data quality rules generation
/data-engineering:data-contract  Data contract authoring (ODCS)
/data-engineering:lakehouse      Table format and catalog guidance
/data-engineering:migrate        Legacy ETL migration
/data-engineering:ai-pipeline    RAG/embedding pipeline scaffolding
```

### Core

```
/core:memory              Save session insights to persistent storage
/core:status              Generate project status report
/core:readme-maker        Generate comprehensive README
/core:sync-context        Sync project context to CLAUDE.md
/core:meeting             Analyze meeting transcripts
```

---

## Agents (58 Specialists)

Claude Code sub-agents invoked automatically during builds and reviews, grouped by domain:

| Domain | Agents |
|--------|--------|
| **Architecture** | data-platform-engineer, genai-architect, kb-architect, lakehouse-architect, medallion-architect, pipeline-architect, schema-designer, the-planner |
| **Cloud** | ai-data-engineer-cloud, ai-data-engineer-gcp, ai-prompt-specialist-gcp, aws-data-architect, aws-deployer, aws-lambda-architect, ci-cd-specialist, gcp-data-architect, lambda-builder, supabase-specialist |
| **Data Engineering** | ai-data-engineer, airflow-specialist, dbt-specialist, lakeflow-architect, lakeflow-expert, lakeflow-pipeline-builder, lakeflow-specialist, qdrant-specialist, spark-engineer, spark-performance-analyzer, spark-specialist, spark-streaming-architect, spark-troubleshooter, sql-optimizer, streaming-engineer |
| **Dev** | codebase-explorer, meeting-analyst, prompt-crafter, shell-script-specialist |
| **Platform (Fabric)** | fabric-ai-specialist, fabric-architect, fabric-cicd-specialist, fabric-logging-specialist, fabric-pipeline-developer, fabric-security-specialist |
| **Python** | ai-prompt-specialist, code-cleaner, code-documenter, code-reviewer, llm-specialist, python-developer |
| **Test & Contracts** | data-contracts-engineer, data-quality-analyst, test-generator |
| **Workflow** | brainstorm-agent, build-agent, define-agent, design-agent, iterate-agent, ship-agent |

---

## Directory Structure

```
master-claude/
├── .claude/
│   ├── agents/              58 Claude Code sub-agents by domain
│   ├── commands/
│   │   ├── workflow/        SDD phases (brainstorm → ship)
│   │   ├── squad/           Opensquad commands (/squad, /squad:dashboard-design)
│   │   ├── core/            Memory, status, readme-maker, meeting analysis
│   │   ├── review/          Code review commands
│   │   ├── visual-explainer/ Visual diagram and explainer commands
│   │   ├── data-engineering/ Data pipeline tools
│   │   └── knowledge/       KB creation
│   ├── kb/                  Knowledge base (domain patterns and concepts)
│   └── sdd/                 SDD workflow artifacts
│       ├── features/        BRAINSTORM/DEFINE/DESIGN documents
│       ├── reports/         Build reports
│       └── archive/         Shipped features with lessons learned
│
├── _squad/                  Opensquad runtime (do not edit manually)
│   ├── core/                Prompts, pipeline runner, skills engine
│   ├── _memory/             Company profile + preferences [gitignored]
│   └── config/              Playwright config
│
├── squads/                  Your created squads
├── skills/                  Installable squad skills catalog (12 skills)
├── dashboard/               Live squad visualization (React + Phaser)
│
├── CLAUDE.md                Quick reference loaded by Claude on every session
├── .mcp.json                Playwright MCP (Sherlock + dashboard design)
└── .gitignore               Protects _squad/_memory/ and squad outputs
```

---

## How the Two Systems Relate

Both AgentSpec and Opensquad follow the same phased pattern:

```
AgentSpec:   Brainstorm → Define → Design → Build → Ship    (software)
Opensquad:   Discovery  → Investigate → Design → Build → Run (content)
```

They share the workspace but operate independently:
- Use `/workflow:*` when building software, data pipelines, or technical features
- Use `/squad` when creating content, running marketing automation, or orchestrating multi-agent workflows
- master-claude's 58 Claude Code agents can be referenced as squad team members

---

## Squad Skills Catalog

The `skills/` directory contains 12 installable skills for squads:

| Skill | Category |
|-------|----------|
| `apify` | Web scraping |
| `blotato` | Social publishing |
| `canva` | Design |
| `image-ai-generator` | AI image generation |
| `image-creator` | Image creation |
| `image-fetcher` | Image fetching |
| `instagram-publisher` | Instagram automation |
| `opensquad-agent-creator` | Agent creation |
| `opensquad-skill-creator` | Skill creation |
| `resend` | Email |
| `template-designer` | Template design |

Install a skill: `/squad install <name>`

---

## External Tools (Recommended Ecosystem)

These tools complement master-claude and can be installed separately:

### 🪨 Caveman — Token Optimization

Strips filler words while preserving technical accuracy. ~75% fewer output tokens.

```bash
claude install-skill JuliusBrussee/caveman
```

### 🗜️ Squeez — Context Compression

Automatically compresses bash output (up to 95% reduction), tracks token usage, and injects session memory via Claude Code hooks.

```bash
curl -fsSL https://raw.githubusercontent.com/claudioemmanuel/squeez/main/install.sh | sh
```

### 🧠 Claude-Mem — Persistent Memory

Captures everything Claude does during sessions, compresses it, and injects relevant context into future sessions. Hybrid semantic + keyword search.

```bash
npx claude-mem install
```

### 🪨 Bedrock — Second Brain

Turns an Obsidian vault into a structured second brain using AI agents. 7 entity types, bidirectional wikilinks, external source ingestion.

```
/plugin marketplace add iurykrieger/claude-bedrock
```

### ⚡ Oh My ClaudeCode — Multi-Agent Parallelism

31+ skills, 32 specialized agents, 5 execution modes (autopilot, ultrapilot, ecomode, swarm, pipeline). 30–50% token savings.

```
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
```

---

## Setup Notes

- **Company profile:** First `/squad` run triggers setup — saved to `_squad/_memory/company.md` (gitignored)
- **Browser sessions:** Sherlock saves sessions to `_squad/_browser_profile/` (gitignored) — log in once, reuse
- **Playwright:** Required for Sherlock investigations and dashboard screenshots. Install: `npx playwright install`
- **Dashboard:** Optional. Run `cd dashboard && npm run dev` to start the local visualization server

---

*Last updated: May 5, 2026*
