# {company_name} — Company OS

> An established company with defined departments and recurring operations.
> This workspace handles cross-functional work and keeps institutional context current.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — company overview, departments, key stakeholders, tools
2. `_memory/preferences.md` — communication standards, brand voice, what to avoid
3. `_memory/strategy.md` — quarterly priorities, KPIs, active initiatives

Use this context in every response. For any visual task, read `identity/design-guide.md`.

---

## Workspace commands

| Command | Purpose |
|---------|---------|
| `/open` | Load memory and start the session with a status summary |
| `/update` | Scan the workspace and reconcile stale memory files |
| `/save` | Commit and push to GitHub |
| `/map-routines` | Map repetitive tasks and create custom skills for them |

---

## Skills

Before starting any task, check `.claude/skills/` for a relevant skill. If one exists, follow it.
If no skill exists but the task is a recurring operation, ask:
"This could become a standardized skill for the team. Want me to create one?"

**Installed:**
{skill list}

---

## File Organization

- Department work → `outputs/{department}/{type}-{YYYY-MM-DD}/`
- Reports → `outputs/reports/{topic}-{YYYY-MM-DD}/`
- Data to analyze → `data/`
- Utility scripts → `scripts/`
- Wiki → `wiki/{Projects|Areas|Resources|Archives}/`

---

## Learning from corrections

When correcting something or giving a permanent instruction, ask: "Want me to save that?"

Route to:
- Company facts (departments, team, tools) → `_memory/company.md`
- Communication/brand standards → `_memory/preferences.md`
- Strategic priorities or KPIs → `_memory/strategy.md`
- Workspace behavior → `CLAUDE.md`

---

## Keeping context current

After a task that changed something (new initiative, restructure, priority shift), ask:
"That changed something in context. Want me to update the memory?"

---

## Profile

- **Type:** Established Company
- **Language:** {language}
- **Setup date:** {date}
