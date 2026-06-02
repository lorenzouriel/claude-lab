# {company_name} — Company OS

> Project-based work. Each client gets a folder. This workspace tracks
> everything from proposal to delivery.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — my services, current clients, tools
2. `_memory/preferences.md` — tone with clients, what to avoid
3. `_memory/strategy.md` — active projects, pipeline, revenue focus

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
If no skill exists but the task feels repetitive, ask: "This could become a skill. Want me to create one?"

**Installed:**
{skill list}

---

## File Organization

- Client work → `outputs/clients/{client-name}/{project}/`
- Proposals → `outputs/proposals/{client}-{YYYY-MM-DD}/`
- Data to analyze → `data/`
- Utility scripts → `scripts/`
- Wiki notes → `wiki/{Projects|Areas|Resources|Archives}/`

---

## Learning from corrections

When correcting something or giving a permanent instruction, ask: "Want me to save that so I don't forget?"

Route to:
- Client or service facts → `_memory/company.md`
- Voice/style → `_memory/preferences.md`
- Active projects or pipeline → `_memory/strategy.md`
- Workspace behavior → `CLAUDE.md`

---

## Keeping context current

After a task that changed something relevant (new client, closed project, new service), ask:
"That changed something. Want me to update the memory?"

---

## Profile

- **Type:** Freelancer
- **Language:** {language}
- **Setup date:** {date}
