# master-claude

A unified workspace combining software engineering workflow (AgentSpec) with content squad orchestration (Opensquad). One tool, one mental model.

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
├── .opencode/
│   ├── agents/        — 58 sub-agents (data engineering, cloud, workflow...)
│   └── commands/      — All slash commands (workflow, squad, core, review...)
│
├── _squad/            — Squad runtime (do not edit manually)
│   ├── core/          — Prompts, pipeline runner, skills engine, best-practices
│   ├── _memory/       — Company profile + preferences (gitignored, private)
│   └── config/        — Playwright config
│
├── squads/            — Your created squads
├── skills/            — Installable squad skills catalog
├── dashboard/         — Live squad visualization (React + Phaser)
│
├── opencode.json      — MCP config (Playwright for Sherlock + dashboard design)
└── .gitignore         — Protects _squad/_memory/ and squad outputs
```

---

## How the Two Systems Work Together

```
AgentSpec:  Brainstorm → Define → Design → Build → Ship   (software)
Opensquad:  Discovery  → Investigate → Design → Build → Run (content)
```

- Use `/workflow:*` for software engineering work
- Use `/squad` for content creation and automation

---

## Company Profile (Opensquad)

On first `/squad` run, set up your company profile — saved to `_squad/_memory/company.md`.

To update: `/squad edit-company`
To view: `/squad show-company`

---

## Rules

- Never manually edit files in `_squad/core/`
- Company context (`_squad/_memory/`) is gitignored — private to you
- Squad outputs (`squads/*/output/`) are gitignored — generated content stays local
