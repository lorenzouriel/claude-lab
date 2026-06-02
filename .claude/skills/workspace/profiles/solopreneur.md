# {company_name} — Company OS

> One person. One brand. This workspace is the operating system for everything
> you create, publish, and sell.

---

## Business Context

At the start of every conversation, read:
1. `_memory/company.md` — who I am, what I do, my audience
2. `_memory/preferences.md` — my voice, tone, what to avoid
3. `_memory/strategy.md` — current focus, priorities, and KPIs

Use this context in every response. Don't list what was read — just use it.
For any visual task, read `identity/design-guide.md` before creating anything.

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

- Content and visuals → `outputs/{type}/{topic}-{YYYY-MM-DD}/`
- Data to analyze → `data/`
- Utility scripts → `scripts/`
- Wiki notes → `wiki/{Projects|Areas|Resources|Archives}/`
- Feature development → `.claude/sdd/`

---

## Learning from corrections

When correcting something or giving a permanent instruction ("always", "never",
"from now on", "prefer"), ask: "Want me to save that so I don't forget?"

Route to:
- Voice/style → `_memory/preferences.md`
- Business facts → `_memory/company.md`
- Focus/priorities → `_memory/strategy.md`
- Workspace behavior → `CLAUDE.md`

---

## Keeping context current

After a task that changed something relevant, ask: "That changed something. Want me to update the memory?"

---

## Profile

- **Type:** Solopreneur
- **Language:** {language}
- **Setup date:** {date}
