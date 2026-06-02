---
name: save
description: >
  Saves the workspace to GitHub (commit + push). Sets up the remote repository on
  first run. Use when the user says "save", "backup", "push to github", "commit",
  or "/save".
---

# /save — GitHub Backup

One job: make sure the workspace is backed up to GitHub.

## Workflow

### First time (no git repository initialized)

Detect with `git rev-parse --is-inside-work-tree`. If it fails:

1. Ask:
   > "First time saving. Do you already have a GitHub repository for this workspace?
   > (a) Yes — give me the URL (e.g. https://github.com/user/repo.git)
   > (b) No — I'll create one. What should it be called?"

2. **If (a):** run `git init`, `git add .`, `git commit -m "Initial workspace setup"`, `git branch -M main`, `git remote add origin {URL}`, `git push -u origin main`.

3. **If (b):** check if `gh` CLI is installed (`gh --version`).
   - If yes: `git init`, commit, then `gh repo create {name} --private --source=. --push`.
   - If no: instruct the user to install `gh` (https://cli.github.com/) or create the repo at github.com/new and return with the URL.

### Subsequent saves (already configured)

1. Run `git status`. If no changes: "Everything is already synced. Nothing new to save."

2. Show the short status and ask:
   > "Going to commit everything above. Describe the change in one sentence, or I'll generate a summary."

3. Use the user's message, or generate one based on changed files (format: "Update X" / "Add Y" / "Create Z").

4. `git add .` → `git commit -m "{message}"` → `git push`.

5. Confirm:
   > "Saved. View on GitHub: {remote URL}"

## Rules

- Never use `--force` unless the user explicitly asks
- Never run `git reset --hard` or other destructive commands without clear confirmation
- If push fails due to divergence, offer `git pull --rebase` before retrying
- If git user.name/email is not configured, ask and set with `git config --global` on first run
