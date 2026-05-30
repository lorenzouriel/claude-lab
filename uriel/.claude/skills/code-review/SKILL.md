---
name: code-review
category: dev
description: >
  Structured 4-phase code review: context gathering, high-level review, line-by-line
  analysis, and summary with a SHIP/REVISE/DISCUSS decision. Classifies every finding
  by severity (BLOCKING / IMPORTANT / MINOR / NIT / PRAISE) with concrete suggestions.
  Use when reviewing a pull request, diff, or code before merging.
triggers:
  - "code review"
  - "review this code"
  - "review the diff"
  - "review my PR"
  - "check this code"
  - "/code-review"
workflow_signals:
  - code review
  - pull request
  - diff review
  - code quality
  - review code
  - github review
languages:
  - en
  - pt-br
---

# /code-review — 4-Phase Code Review

Runs four phases in sequence. Each phase produces a named artifact before advancing.

## Before starting, read:
- `_memory/company.md` — tech stack, coding standards
- `_memory/preferences.md` — any style conventions

---

## Severity Scale

Every finding gets exactly one label. No unlabeled observations.

| Label | Meaning | Action |
|---|---|---|
| **BLOCKING** | Correctness bug, security vulnerability, data loss risk | Must fix before merge |
| **IMPORTANT** | Design problem, missing error handling, real performance issue | Fix before merge, or justify |
| **MINOR** | Inconsistency, unclear naming, missing edge case test | Fix when convenient |
| **NIT** | Style, whitespace, personal preference | Optional |
| **PRAISE** | Genuinely well-done — clever, clean, well-tested | Call it out |

---

## Phase 1 — Context Gathering

Before reading code, answer:

1. **What is this change trying to do?** (PR description, commit message, or ask the user)
2. **What's the risk surface?** (Auth? Payment? Data migration? Public API? Internal tool?)
3. **What are the constraints?** (Performance, backwards compatibility, platform)
4. **How big is the diff?** (>500 lines → section-by-section, not full line-by-line)

**Artifact:** One paragraph answering these four questions. State it before reviewing.

---

## Phase 2 — High-Level Review

Read the full diff at a high level:

1. **Does the architecture make sense?** Right solution to the right problem?
2. **Are there missing pieces?** Tests? Error handling? Documentation?
3. **Red flags?** Anything requiring careful line-by-line attention?
4. **Scope correct?** Too much or too little in one change?

**Artifact:** 3–5 bullets on the high-level assessment. Flag areas for close line-by-line review.

---

## Phase 3 — Line-by-Line Analysis

Review flagged areas and all high-risk code. Check these systematically:

**Correctness:**
- Off-by-one errors, null/undefined dereferences
- Race conditions, improper state management
- Wrong assumptions about input (empty arrays, zero, negative)
- Missing edge cases not covered by tests

**Security:**
- SQL injection, XSS, command injection, path traversal
- Exposed secrets or credentials
- Auth checks missing or bypassable
- Input validation gaps

**Performance:**
- N+1 queries inside loops
- Unbounded memory growth
- Synchronous operations that should be async
- Missing database indexes for new query patterns

**Maintainability:**
- Functions doing more than one thing
- Magic numbers without named constants
- Duplicated logic that should be extracted
- Naming that obscures intent

**Format each finding:**
```
[SEVERITY] file.py:line_number
Problem: What's wrong and why it matters.
Suggestion: Concrete fix or direction.
```

---

## Phase 4 — Summary & Decision

**Decision:**
```
SHIP    — No blocking or important issues. Ready to merge.
REVISE  — Blocking or important issues. Must address before merge.
DISCUSS — Architectural question needs a conversation first.
```

**Output format:**
```markdown
## Code Review

Decision: REVISE

### What's Good
- [PRAISE] ...

### Must Fix (blocks merge)
- [BLOCKING] `file.py:42` — Problem description. Suggestion.
- [IMPORTANT] `file.py:87` — Problem description. Suggestion.

### Fix When Convenient
- [MINOR] `file.py:12` — Description.
- [NIT] `config.py:5` — Description.

### Notes
Any additional context, open questions, or architectural thoughts.
```

---

## Rules

- Every finding must have a severity label — no unlabeled observations
- Every BLOCKING and IMPORTANT must have a concrete suggestion, not just a problem
- Call out what's genuinely good (PRAISE) — reviews without praise read as hostile
- Large diffs (>500 lines): high-level review first, then ask which sections to focus on
- If a potential bug requires running the code to confirm, say so explicitly
- Never comment on style without a clear existing convention to cite
