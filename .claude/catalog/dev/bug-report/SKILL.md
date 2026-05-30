---
name: bug-report
category: dev
description: >
  Creates structured bug reports from a description. Severity-classified (Critical/High/Medium/Low)
  with reproduction steps, expected vs. actual behavior, environment table, and diagnostic data.
  Asks targeted questions to fill gaps before generating the report.
triggers:
  - "bug report"
  - "report a bug"
  - "file a bug"
  - "this is broken"
  - "something is wrong"
  - "/bug-report"
workflow_signals:
  - bugs
  - bug reports
  - issue tracking
  - defects
  - github issues
languages:
  - en
  - pt-br
---

# /bug-report — Structured Bug Report

Classifies severity, extracts reproduction steps, and produces a complete report ready for an issue tracker.

---

## Phase 1 — Severity Classification

Before writing the report, classify severity:

| Severity | Criteria | Examples |
|---|---|---|
| **Critical** | System down, data loss, security breach, blocks all users | Payment failure, data corruption, login broken for all users |
| **High** | Core feature broken for many users, no workaround | Search returns wrong results, checkout fails for 20% of users |
| **Medium** | Feature broken with workaround, affects subset of users | Export fails for CSV files >10MB, mobile layout broken on iOS |
| **Low** | Minor issue, cosmetic, affects edge cases | Tooltip text incorrect, animation jank on slow connections |

---

## Phase 2 — Information Gathering

If any of these are missing, ask targeted questions (one at a time):

1. **Reproduction steps** — "Can you walk me through exactly what you did, step by step, starting from opening the app?"
2. **Expected behavior** — "What should have happened?"
3. **Actual behavior** — "What actually happened? Any error messages, screenshots, logs?"
4. **Environment** — "What browser/OS/device/version? Does it happen on all environments or just one?"
5. **Frequency** — "Does this happen every time, sometimes, or just once?"
6. **Impact** — "How many users are affected? Is there a workaround?"

**Stop asking when you have enough to write a useful report.** Don't interrogate for information that doesn't change the bug's handling.

---

## Phase 3 — Generate Report

```markdown
## Bug: [Short title — verb + what broke, max 80 chars]

**Severity:** [Critical / High / Medium / Low]
**Status:** Open
**Reported:** [Date]
**Reported by:** [User/team if provided]

---

### Summary

[2–3 sentences: What broke? When does it happen? What's the user impact?]

---

### Steps to Reproduce

1. [Specific first step — include URLs, paths, or values where relevant]
2. [Second step]
3. [Continue until the bug appears]

**Frequency:** [Always / Sometimes (~X%) / Once]

---

### Expected Behavior

[What should happen at step N?]

---

### Actual Behavior

[What actually happens? Include error messages verbatim.]

---

### Environment

| Field | Value |
|---|---|
| Browser / Client | [Chrome 121, iOS App 2.3.1, etc.] |
| OS | [macOS 14.2, Windows 11, etc.] |
| Device | [MacBook Pro M2, iPhone 15, etc.] |
| Environment | [Production / Staging / Development] |
| User account | [Anonymous / Specific role or plan] |
| Feature flags | [Any enabled?] |

---

### Diagnostic Data

[Error messages, stack traces, logs — paste verbatim in code block]

```
[error log or stack trace here]
```

[Screenshots or recordings: [describe or embed]]

---

### Impact

- Users affected: [all / subset — describe]
- Workaround: [Describe if exists, or "None"]
- Revenue / SLA impact: [Note if applicable]

---

### Notes

[Any additional context, related issues, or suspected cause]
```

---

## Rules

- Severity is assigned based on user impact and urgency — not how annoying it is to the reporter
- Reproduction steps must be specific enough for a developer who didn't see the bug to reproduce it
- Error messages go verbatim in code blocks — never paraphrase error messages
- "Sometimes" is not enough — get a frequency estimate (always, ~50%, once) and conditions that trigger it
- Critical bugs: add "CRITICAL — needs immediate attention" at the top of the report
