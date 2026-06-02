---
name: workspace
description: >
  Workspace lifecycle management skills. Covers opening a session with business
  context loaded, saving to GitHub, updating drifted memory files, and mapping
  repetitive tasks into custom skills. Use at session start/end and for workspace
  maintenance.
  Triggers on: "open", "start the day", "start session", "load context",
  "save", "backup", "push to github", "commit",
  "update", "scan the project", "context reconciliation", "update memory",
  "map routines", "create custom skills", "automate my tasks", "what can we automate".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
---

# Workspace Skill — Orchestrator

> Routes to 4 lifecycle sub-skills for session management, backup, context
> maintenance, and automation discovery. These skills operate on the workspace
> itself — not on domain work.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/workspace open` | `open/SKILL.md` | "open", "start the day", "start session", "load context", "/open", "begin session" |
| `/workspace save` | `save/SKILL.md` | "save", "backup", "push to github", "commit", "/save", "sync to github" |
| `/workspace update` | `update/SKILL.md` | "update", "scan the project", "update memory", "context reconciliation", "sync context files", "memory drift", "/update" |
| `/workspace routines` | `map-routines/SKILL.md` | "map routines", "create custom skills", "automate my tasks", "what can we automate", "/map-routines", "I repeat this every week" |

## Sub-Skill Capabilities

### `open` — Session Opener
Loads business memory (`_memory/company.md`, `preferences.md`, `strategy.md`, `identity/design-guide.md`) and returns a one-line context summary so work can start immediately. Alerts if any memory file is still a blank placeholder and offers to run setup.

**Use at:** the start of every work session.

### `save` — GitHub Backup
Commits and pushes the workspace to GitHub. Handles first-time setup (initializes git, connects remote, creates repo if needed) and subsequent incremental saves with a descriptive commit message.

**Use when:** ending a session, after significant work, or any time you want the workspace backed up.

### `update` — Context Scanner
Scans the workspace (root folders, `.claude/skills/`, `outputs/`, `wiki/`, recent files) and compares against the memory files. Proposes targeted updates for `company.md`, `preferences.md`, `strategy.md`, `CLAUDE.md`, and `identity/design-guide.md` that have drifted from the real state.

**Use when:** the workspace has evolved and context files no longer reflect reality.

### `map-routines` — Automation Discovery
Runs a 3-question discovery interview about what the user repeats weekly, proposes matching skills, and creates the approved ones in `.claude/skills/`. Checks existing skills before proposing to avoid duplicates.

**Use when:** you find yourself doing the same task repeatedly and want to turn it into a skill.

## Routing Note

These skills are order-dependent in a typical session:
1. **Start** → `open` (load context)
2. **Work** → domain skills (content, dev, data, etc.)
3. **Drift** → `update` (reconcile memory if things changed)
4. **End** → `save` (backup to GitHub)

`map-routines` is standalone — run it any time, not tied to session flow.
