---
name: update
description: >
  Scans the project and updates context files (`memory/company.md`, `preferences.md`,
  `strategy.md`, `CLAUDE.md`, `brain/3-resources/identity/design-guide.md`) when they are out of sync with
  the real workspace. Use when the user says "update", "/update", "scan the project",
  or asks for a general reconciliation.
---

# /update - Context Reconciliation

## Step 1 - Survey

Scan:

- Recent files changed in the last 30 days
- Subfolders in `brain/1-projects/`, if any
- New folders, tools, processes, skills, or deliverables
- Recent files in folders such as `proposals/`, `content/`, `brain/1-projects/<x>/`

## Step 2 - Compare

Check:

- **In `memory/company.md`:** clients / services / tools match the workspace?
- **In `memory/strategy.md`:** current focus still makes sense?
- **In `memory/preferences.md`:** recent outputs follow the saved tone?
- **In `brain/3-resources/identity/design-guide.md`:** still matches recent visuals?
- **In `CLAUDE.md`:** organization rules match the actual folder structure?

## Step 3 - Propose changes

Show a short list:

```
I found 3 possible updates:

1. memory/company.md - missing client "Acme" (saw brain/1-projects/Acme/ created on [date])
2. CLAUDE.md - says proposals go in proposals/, but I see proposals in brain/1-projects/<x>/proposals/
3. memory/strategy.md - says "close first client in February", but it is already April and there are 3 active clients

Do you want me to apply these updates?
```

## Step 4 - Apply

If approved, edit surgically: only the relevant line, without reformatting the whole document. Show the diff for each applied change.

## Rules

- Do not invent facts. Record only what has evidence in the workspace.
- If evidence is ambiguous, ask before adding it.
- Do not delete context content. Only update or add.
- Keep the user's wording when it exists.
