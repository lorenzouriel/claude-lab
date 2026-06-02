# {company_name} — Company OS

> An agency. Multiple clients, a team, recurring delivery. This workspace
> keeps operations consistent and context up to date across all accounts.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — who we are, active clients, team structure, tools
2. `_memory/preferences.md` — our voice, client communication standards, what to avoid
3. `_memory/strategy.md` — current priorities, key accounts, revenue goals

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
If no skill exists but the task is a recurring agency deliverable, ask:
"This could become a skill so the whole team has a consistent process. Want me to create one?"

**Installed:**
{skill list}

---

## File Organization

- Client deliverables → `outputs/clients/{client-name}/{deliverable}-{YYYY-MM-DD}/`
- Internal work → `outputs/internal/{type}-{YYYY-MM-DD}/`
- Data to analyze → `data/`
- Utility scripts → `scripts/`
- Wiki → `wiki/{Projects|Areas|Resources|Archives}/`

---

## Learning from corrections

When correcting something or giving a permanent instruction, ask: "Want me to save that?"

Route to:
- Client, service, team fact → `_memory/company.md`
- Communication standards or style → `_memory/preferences.md`
- Priorities or key accounts → `_memory/strategy.md`
- Workspace behavior → `CLAUDE.md`

---

## Keeping context current

After a task that changed something (new client onboarded, project closed, team change), ask:
"That changed something. Want me to update the memory?"

---

## Profile

- **Type:** Agency / Consultancy
- **Language:** {language}
- **Setup date:** {date}
