---
name: pr-description
category: dev
description: >
  Generates a pull request title and description from a diff, commit list, or
  plain description. Includes summary, motivation, test plan, and checklist.
triggers:
  - "write PR description"
  - "PR description"
  - "pull request description"
  - "write PR"
  - "/pr-description"
workflow_signals:
  - pull request
  - github
  - gitlab
  - pr description
  - merge request
languages:
  - en
  - pt-br
---

# /pr-description

Generates clear, useful PR descriptions that give reviewers everything they need.

---

## Step 1 — Gather input

If not already provided, ask:

> "Paste the diff, commit messages, or describe what this PR does — I'll write the description."

---

## Step 2 — Generate the PR

### Title Format

```
{type}: {short description of what changed}
```

Types: `feat` `fix` `refactor` `chore` `docs` `test` `perf` `style`

Examples:
- `feat: add OAuth2 login with Google`
- `fix: prevent null pointer in cart checkout`
- `refactor: extract payment service from checkout controller`

Title rules:
- Max 72 characters
- Imperative mood: "add", "fix", "remove" (not "added", "fixed")
- No period at the end

---

### Body Template

```markdown
## What

[2-4 sentences: what this PR does and why it was needed. Be specific — not "bug fix" but "fixes null pointer when cart is empty on checkout".]

## Why

[The motivation. What problem does this solve? Link to the issue if one exists: Closes #123]

## How

[How the approach works. Only include this if the implementation isn't obvious from reading the diff. Skip if simple.]

## Test Plan

- [ ] {Manual test step — e.g., "Log out and back in to verify session persists"}
- [ ] {Another test step}
- [ ] Unit tests added/updated
- [ ] Integration tests pass

## Screenshots (if applicable)

<!-- Before/after screenshots for UI changes -->

## Notes for Reviewers

[Optional: anything the reviewer should pay special attention to, known limitations, or context that helps review.]
```

---

## Step 3 — Flag if anything is missing

After generating, note:
- If the PR appears very large: "This looks like a big PR — worth splitting into [X] + [Y]?"
- If there are no tests: "I didn't see test changes — is this covered by existing tests?"

---

## Rules
- Title is the most important line — every reviewer reads it first
- "What" explains change; "Why" explains decision — don't conflate
- Test plan should be runnable by a human who didn't write the code
- Never mention filenames in the title — they belong in the diff
- If the commit messages are already descriptive, synthesize them; don't just list them
