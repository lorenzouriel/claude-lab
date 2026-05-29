---
name: code-review
category: dev
description: >
  Structured code review with severity-labeled findings (critical/major/minor/nit).
  Reviews correctness, security, performance, and maintainability. Works with any diff,
  file, or pasted code.
triggers:
  - "review this code"
  - "code review"
  - "review my PR"
  - "check this code"
  - "/code-review"
workflow_signals:
  - code review
  - pull request
  - github
  - gitlab
  - code quality
languages:
  - en
  - pt-br
---

# /code-review

Structured code review focused on what matters: correctness, security, and maintainability.

---

## Step 1 — Gather context

If not provided, ask in one question:

> "What language/framework is this, and is there anything specific you want me to focus on — correctness, security, performance, or all of it?"

---

## Step 2 — Review the code

Scan for issues in this priority order:

### Severity Levels

| Severity | Label | Meaning |
|----------|-------|---------|
| 🔴 Critical | `[CRITICAL]` | Bug that will cause data loss, security breach, or crash in production. Must fix before merging. |
| 🟠 Major | `[MAJOR]` | Logic error, wrong behavior, or significant performance problem. Should fix. |
| 🟡 Minor | `[MINOR]` | Code smell, poor naming, missing error handling for edge cases. Recommended fix. |
| 🔵 Nit | `[NIT]` | Style, formatting, personal preference. Take it or leave it. |

### What to Check

**Correctness**
- Off-by-one errors, null/undefined handling
- Race conditions, incorrect assumptions about data types
- Edge cases not handled (empty arrays, zero values, negative inputs)

**Security**
- SQL injection, XSS, CSRF risks
- Secrets or credentials in code
- Unvalidated user input reaching sensitive operations
- Over-permissive access controls

**Performance**
- N+1 queries
- Unnecessary loops inside loops
- Missing indexes (inferred from query patterns)
- Large objects passed by value when reference suffices

**Maintainability**
- Functions doing more than one thing
- Magic numbers without constants
- Missing or misleading variable names
- Dead code

---

## Step 3 — Format findings

```
## Code Review

### Summary
[2-3 sentences: overall quality, main concerns, whether it's safe to merge]

### Findings

#### [CRITICAL] {Short title}
**File:** `{filename}` | **Line:** {N}
**Issue:** {What's wrong and why it matters}
**Fix:**
```{language}
// suggested fix code
```

#### [MAJOR] {Short title}
...

#### [MINOR] {Short title}
...

#### [NIT] {Short title}
...

### What's Good
[Acknowledge what's done well — 2-3 specific things]
```

---

## Rules
- Always start with Summary — reviewer and author need the bottom line first
- If no issues found, say so explicitly — don't invent nits to seem thorough
- "What's Good" section is not optional — code review is not only about problems
- Don't rewrite the whole function in a suggestion — show the minimal targeted fix
- Focus findings on code in the diff/selection, not the entire codebase
