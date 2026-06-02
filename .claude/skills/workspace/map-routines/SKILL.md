---
name: map-routines
description: >
  Maps repetitive weekly tasks and generates custom skills to automate them. Runs a
  short interview about what the user repeats every week, proposes skills, and creates
  the approved ones in .claude/skills/. Use when the user says "/map-routines",
  "create custom skills", "automate my tasks", or "what can we automate".
---

# /map-routines — Map Repetitive Tasks into Skills

Discovery + creation. Turn what the user repeats into active automations.

## Workflow

### Step 1 — Discovery interview

Three questions, one at a time:

1. "What 3 tasks do you repeat every week and wish you didn't have to think about? (e.g. 'create a carousel', 'send a client report', 'write a brief')"
2. "For each one — what's the typical input? (e.g. 'a link', 'a spreadsheet file', 'a client name')"
3. "And what do you expect as output? (e.g. '5 PNGs ready to post', 'an email ready to send', 'a PDF summary')"

### Step 2 — Check existing skills

Read `.claude/skills/` to see if any mentioned task is already covered by an installed skill. If yes, point to it:
> "Task X is already handled by `/{skill-name}`. Want to activate it instead of creating a new one?"

### Step 3 — Propose new skills

For each uncovered task, propose a skill:

```
### /{skill-name}
What it does: {one sentence}
Input: {what it receives}
Output: {what it delivers}
Reads: {_memory files or identity files it uses}
```

Show all proposals together. Ask:
> "Which of these do you want me to create? (all, some, or none — adjustments welcome)"

### Step 4 — Create approved skills

For each approved skill:

1. Create `.claude/skills/{name}/SKILL.md` with:
   - Frontmatter: `name`, `description` (must clearly state when to invoke it)
   - Structured workflow (phases or steps)
   - Dependencies (memory files, identity files, external tools)
   - Rules (what always to do, what never to do)
2. Read `_memory/preferences.md` and `_memory/company.md` before writing to calibrate tone and context
3. If the skill needs templates or examples, create them inside the skill folder

### Step 5 — Summary

```
Created {N} skills:
✓ /{name1} — .claude/skills/{name1}/SKILL.md
✓ /{name2} — .claude/skills/{name2}/SKILL.md

To use: type /{name} in any session.
To edit a skill later: open its SKILL.md and modify it directly.
```

## Rules

- Don't create a skill for a one-off task — it must be genuinely repeatable
- Max 5 skills per mapping session; split into rounds if the user wants more
- Every skill needs a clear `description` that says when to invoke it — without it, the skill is never found
- If a skill depends on a tool or API the user doesn't have set up, warn before creating and offer a simplified version
