---
name: update
description: >
  Scans the workspace and updates context files (_memory/company.md, preferences.md,
  strategy.md, CLAUDE.md, identity/design-guide.md) that have drifted from the
  real state of the workspace. Use when the user says "update", "/update",
  "scan the project", or asks for a general context reconciliation.
---

# /update — Context Scanner and Updater

Compares what's in the memory files against the real state of the workspace, then proposes targeted updates.

## Workflow

### Step 1 — Inventory

List:
- Folders at the root (each represents a work area)
- Skills in `.claude/skills/` — what exists today
- Output folders in `outputs/` — recent work done
- Wiki projects in `wiki/Projects/` — active projects
- Recent files (last 30 days) in data/, outputs/, wiki/

### Step 2 — Compare

Read the memory files and identify gaps:

- **`_memory/company.md`** — does the tools list, team size, or channel list match reality?
- **`_memory/strategy.md`** — are the priorities still current? Any dates that have passed?
- **`_memory/preferences.md`** — has anything in the voice or avoid-list changed?
- **`CLAUDE.md`** — do the listed skills match what's in `.claude/skills/`?
- **`identity/design-guide.md`** — consistent with visuals recently produced?

### Step 3 — Propose changes

Present a short list:

```
Found {N} things to update:

1. _memory/company.md — {tool/channel added but not listed}
2. _memory/strategy.md — {priority from 3 months ago, still listed as current}
3. CLAUDE.md — {skill installed but not listed in the skills section}

Apply all, some, or none?
```

### Step 4 — Apply

On approval: edit only the relevant line(s). Do not reformat entire files. Show each change before saving.

## Rules

- Never invent facts — only record what has evidence in the workspace
- If evidence is ambiguous (e.g., an empty folder), ask before adding
- Never delete content from memory files — only update and append
- If nothing needs updating, say: "Everything looks current. Nothing to update."
