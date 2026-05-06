# master-claude

A unified Claude Code workspace combining software engineering workflow (AgentSpec) with content squad orchestration (Opensquad). One tool, one mental model.

## Response Style

Be terse. No filler words, no pleasantries, no hedging. Preserve full technical accuracy.
Strip: "Sure, I'd be happy to...", "It might be worth considering...", "As mentioned above...".
Keep: code blocks, error messages, technical terms, file paths, git output.

---

## Quick Start

### Software Engineering (AgentSpec)

| Command | Phase | Purpose |
|---------|-------|---------|
| `/workflow:brainstorm` | 0 | Explore ideas through dialogue |
| `/workflow:define` | 1 | Capture and validate requirements |
| `/workflow:design` | 2 | Create architecture and technical spec |
| `/workflow:build` | 3 | Execute implementation |
| `/workflow:ship` | 4 | Archive completed feature |

### Content Squads (Opensquad)

| Command | Purpose |
|---------|---------|
| `/squad` | Open the main squad menu |
| `/squad create` | Create a new content squad (conversational) |
| `/squad run <name>` | Execute a squad's pipeline |
| `/squad edit <name>` | Modify an existing squad |
| `/squad skills` | Browse and install squad skills |
| `/squad:dashboard-design` | Design the 2D virtual office |

### Other Commands

- `/review` — Code review
- `/visual-explainer:*` — Visual diagrams and explainers
- `/data-engineering:*` — Data pipeline tools
- `/core:memory` — Save session insights

---

## Directory Structure

```
master-claude/
├── .claude/
│   ├── agents/        — 50+ Claude Code sub-agents (data engineering, cloud, workflow...)
│   ├── commands/
│   │   ├── workflow/  — SDD phases (brainstorm → define → design → build → ship)
│   │   ├── squad/     — Squad orchestration (/squad, /squad:dashboard-design)
│   │   ├── core/      — Memory, status, readme, meeting analysis
│   │   ├── review/    — Code review commands
│   │   └── ...
│   ├── kb/            — Knowledge base (patterns, domain concepts)
│   └── sdd/           — SDD workflow artifacts (features, reports, archive)
│
├── _squad/            — Squad runtime (do not edit manually)
│   ├── core/          — Prompts, pipeline runner, skills engine, best-practices
│   ├── _memory/       — Company profile + preferences (gitignored, private)
│   ├── _browser_profile/ — Persistent browser sessions (gitignored, private)
│   └── config/        — Playwright config
│
├── squads/            — Your created squads (each in its own directory)
├── skills/            — Installable squad skills catalog
├── dashboard/         — Live squad visualization (React + Phaser)
│
├── .mcp.json          — Playwright MCP (for Sherlock + dashboard design)
└── .gitignore         — Protects _squad/_memory/ and squad outputs
```

---

## How the Two Systems Work Together

Both systems share the same phased workflow pattern:

```
AgentSpec:  Brainstorm → Define → Design → Build → Ship   (software)
Opensquad:  Discovery  → Investigate → Design → Build → Run (content)
```

They are independent but complementary:
- Use **AgentSpec** when building software, data pipelines, or technical features
- Use **Opensquad** when creating content, running marketing automation, or orchestrating multi-agent creative workflows
- master-claude's **Claude Code agents** (`.claude/agents/`) can be referenced as available team members when creating squads

---

## Company Profile (Opensquad)

On first `/squad` run, you'll be prompted to set up your company profile. This is saved to `_squad/_memory/company.md` and loaded for every squad run.

To update: `/squad edit-company`
To view: `/squad show-company`

---

## Squad Dashboard

The live visualization runs as a separate local server:

```bash
cd dashboard && npm run dev
```

Then use `/squad:dashboard-design` to customize the 2D office.

---

## Rules

- Use `/workflow:*` for software engineering work
- Use `/squad` for content creation and automation
- Never manually edit files in `_squad/core/`
- Company context (`_squad/_memory/`) is gitignored — it's private to you
- Squad outputs (`squads/*/output/`) are gitignored — generated content stays local
