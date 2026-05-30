---
name: pr-description
category: dev
description: >
  Generates a pull request title and description from a diff, commit list, or change
  summary. Detects PR type (feat/fix/refactor/chore/docs/test), applies the right
  template, flags large PRs, and produces a full test plan checklist.
triggers:
  - "pr description"
  - "pull request"
  - "write a PR"
  - "PR template"
  - "describe this change"
  - "/pr-description"
workflow_signals:
  - pull request
  - pr description
  - github pr
  - change description
  - merge request
languages:
  - en
  - pt-br
---

# /pr-description — Pull Request Title & Description

Analyzes the change, picks the right PR type, and produces a complete description with test plan.

---

## Phase 1 — Analyze the Change

Read the diff, commit list, or change description provided. Determine:

1. **PR type** (one only):
   - `feat` — new feature or behavior
   - `fix` — bug fix
   - `refactor` — code restructuring without behavior change
   - `chore` — dependencies, config, build changes
   - `docs` — documentation only
   - `test` — adding or updating tests
   - `perf` — performance improvement

2. **Scope** — what area of the codebase? (e.g., `auth`, `api`, `ui`, `db`)

3. **Size check:**
   - Small: <200 lines changed → proceed
   - Medium: 200–500 lines → note it and proceed
   - Large: >500 lines → flag with a warning before proceeding

4. **Breaking change?** — does this change an API, interface, or behavior that consumers depend on?

---

## Phase 2 — Generate PR

**Title format:**
```
{type}({scope}): {concise description in imperative mood, max 72 chars}
```

Examples:
```
feat(auth): add OAuth2 login with Google
fix(api): handle null response from payment gateway
refactor(db): replace raw SQL with query builder
```

**Description template:**

```markdown
## What

[1–3 sentences. What changed? What is the system doing now that it wasn't before?
Be specific about the change, not the motivation.]

## Why

[1–3 sentences. What problem does this solve, or what goal does it advance?
Link to the issue/ticket if one exists: Closes #123]

## How

[Optional — include only if the implementation approach is non-obvious.
For simple changes, skip this section.]

## Test Plan

- [ ] [Unit tests written / updated for: specific function or behavior]
- [ ] [Integration test covering: specific path]
- [ ] [Manual test: specific scenario to verify]
- [ ] [Edge case verified: empty input, null, boundary condition]

## Screenshots / Recordings

[Delete if not applicable — UI changes should always have screenshots]

## Notes

[Breaking changes, deprecations, migration instructions, or anything reviewers should know.]
```

---

## Phase 3 — Flags

After generating, check and report:

```
PR Size: Small / Medium / Large ⚠️
Breaking change: Yes ⚠️ / No
Test coverage: Tests included / No tests — reason: [...]
Screenshots: Required / Included / Not applicable
```

**Large PR warning (>500 lines):**
```
⚠️ This PR is large (>500 lines). Consider splitting into:
- [Suggestion 1: specific logical separation]
- [Suggestion 2: specific logical separation]
Reviewers will have a harder time with this. Confirm to proceed.
```

---

## Rules

- Title: imperative mood ("add", "fix", "remove") — not "added", "fixes", "removing"
- Title: max 72 chars — flag if longer
- One PR type only — if it's multiple types, the PR should probably be split
- Test plan is not optional — if there are no tests, explain why in the test plan section
- Breaking changes must be noted prominently — never buried in "Notes"
