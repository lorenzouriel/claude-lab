---
name: bug-report
category: dev
description: >
  Creates a structured bug report from a description. Title, severity, steps to reproduce,
  expected vs actual behavior, environment, and any available logs or screenshots.
triggers:
  - "write a bug report"
  - "bug report"
  - "report this bug"
  - "create issue"
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

# /bug-report

Transforms a rough bug description into a structured, actionable report.

---

## Step 1 — Gather information

If the description is incomplete, ask one question at a time:

1. "What's the exact behavior you're seeing — and what did you expect to happen?"
2. "What are the exact steps to reproduce it?"
3. "What's your environment — OS, browser/app version, account type?"

Don't ask all three at once — wait for each answer.

---

## Step 2 — Generate the bug report

````markdown
## Bug Report: {Short descriptive title}

**Severity:** {Critical / High / Medium / Low}
**Status:** Open
**Reported:** {date}
**Reporter:** {name if provided}

---

### Description

{1-2 sentences describing the bug clearly. What's broken, where, and what the user was trying to do.}

---

### Steps to Reproduce

1. {First step — be precise, e.g., "Open the app and log in as a standard user"}
2. {Next step}
3. {Next step}
4. {The step that triggers the bug}

---

### Expected Behavior

{What should happen when the steps above are followed.}

---

### Actual Behavior

{What actually happens. Include exact error messages, codes, or behaviors observed.}

---

### Environment

| Field | Value |
|-------|-------|
| OS | {Windows 11 / macOS 14 / Ubuntu 22.04} |
| Browser / App version | {Chrome 124 / App v2.1.3} |
| Device | {Desktop / iPhone 15 / etc.} |
| Account type | {Free / Pro / Admin} |
| Region / timezone | {if relevant} |

---

### Logs / Error Messages

```
{Paste exact error messages, stack traces, or console output here}
```

---

### Screenshots / Screen Recording

{List or attach if available. "None available" if not.}

---

### Frequency

- [ ] Always reproducible
- [ ] Intermittent (~{X}% of the time)
- [ ] Happened once

---

### Impact

{Who is affected and how — e.g., "All users trying to check out with a discount code see a blank page instead of the confirmation screen."}

---

### Workaround

{If there's a workaround, describe it. "None known" if not.}
````

---

## Severity Guide

| Severity | Meaning |
|----------|---------|
| Critical | Data loss, security breach, or complete feature/app unavailable in production |
| High | Core feature broken for most users, no workaround |
| Medium | Feature partially broken or broken for some users, workaround exists |
| Low | Minor visual issue, edge-case behavior, cosmetic problem |

---

## Rules
- Steps to reproduce must be specific enough for a developer who's never seen the bug to follow them
- Expected vs Actual behavior must be distinct sections — don't conflate them
- If the user says "it doesn't work," ask what specifically doesn't work before writing the report
- Save to `outputs/bugs/bug-{slug}-{YYYY-MM-DD}.md`
