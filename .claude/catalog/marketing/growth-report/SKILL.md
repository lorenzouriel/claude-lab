---
name: growth-report
category: marketing
description: >
  Creates weekly or monthly growth summary reports. Executive summary written last
  (after data). Metrics table with targets and status. What worked / what didn't /
  next priorities. Audience-aware: adjusts depth for internal vs. investor vs. client.
triggers:
  - "growth report"
  - "weekly report"
  - "monthly report"
  - "marketing report"
  - "performance report"
  - "/growth-report"
workflow_signals:
  - growth report
  - monthly report
  - metrics report
  - performance report
  - business report
  - weekly review report
languages:
  - en
  - pt-br
---

# /growth-report — Growth & Performance Summary

Executive summary written last. Metrics before narrative. Honest analysis required.

## Before writing, read:
- `_memory/company.md` — business model, what metrics matter
- `_memory/strategy.md` — current goals, targets, priorities

---

## Phase 1 — Data Gathering

If metrics aren't provided, ask:

> "Paste the numbers for this period — revenue, traffic, leads, conversions, whatever you track. Include last period's numbers for comparison if you have them."

Also ask: **"Who's reading this — internal team, a client, or an investor?"**

The audience determines depth, tone, and what gets emphasized.

---

## Phase 2 — Metrics Table

Build the metrics table before writing any narrative:

```markdown
## Performance Dashboard

**Period:** [Month YYYY / Week of YYYY-MM-DD]
**Comparison:** vs. [Previous period]

| Metric | This Period | Last Period | Change | Target | Status |
|---|---|---|---|---|---|
| [Revenue / MRR] | [$X] | [$X] | [+/-X%] | [$X] | ✅/❌/— |
| [New Customers] | [N] | [N] | [+/-X%] | [N] | ✅/❌/— |
| [Conversion rate] | [X%] | [X%] | [+/-X pp] | [X%] | ✅/❌/— |
| [CAC] | [$X] | [$X] | [+/-X%] | [$X] | ✅/❌/— |
| [Churn] | [X%] | [X%] | [+/-X pp] | [X%] | ✅/❌/— |
| [Leads / MQLs] | [N] | [N] | [+/-X%] | [N] | ✅/❌/— |
| [Traffic] | [N] | [N] | [+/-X%] | [N] | ✅/❌/— |

**Legend:** ✅ Met or exceeded target | ❌ Below target | — No target set
```

---

## Phase 3 — Metric Deep Dives

For the 2–3 most important or most changed metrics:

```markdown
### [Metric] — [Result] ([+/-X%] vs. last period)

[2–3 sentences: what drove this change? Is this structural or one-time?]

**Breakdown (if available):**
| Segment | This period | Change |
|---|---|---|
| [Segment A] | [value] | [+/-X%] |
```

---

## Phase 4 — What Worked / What Didn't

```markdown
## Analysis

### What exceeded expectations
- [Specific result with context — not just "organic traffic grew"]
- [Another highlight]

### What fell short
- [Specific shortfall with honest explanation — not excuse]
- [Another miss]

### Root cause (if patterns are clear)
[1 paragraph on underlying trend — is something structurally improving or declining?]
```

---

## Phase 5 — Executive Summary (Write Last)

After all data and analysis is complete, write the executive summary:

```markdown
## Executive Summary

[3–5 sentences: The headline result, the most important driver, what it means for next period.
Written after seeing all the data, so it accurately reflects what happened.
Should be readable standalone — someone who only reads this section understands the state of the business.]
```

---

## Phase 6 — Recommendations

```markdown
## Next Period Priorities

| Priority | Action | Expected impact | Owner |
|---|---|---|---|
| High | [Specific action] | [Expected result] | [Name] |
| Medium | [Action] | [Expected result] | [Name] |
| Low | [Action] | [Expected result] | [Name] |
```

---

## Audience Calibration

**Internal team:** Full data, honest analysis, direct language, root cause discussion
**Client:** Lead with results, focus on their KPIs, recommendations framed as next steps
**Investor:** Business model health (MRR, CAC, churn), trend over time, forward guidance

---

## Rules

- Executive summary is always written last — it summarizes what the data shows, not what was hoped
- Every metric must have a comparison period — a number without context is meaningless
- Recommendations must follow from the data — no generic advice ("improve your marketing")
- If a target isn't set for a metric, note `—` rather than leaving it blank
- Never invent numbers — if data is missing, mark as `[data not available]`
- Save to `outputs/reports/{company-slug}-growth-{period}-{YYYY-MM-DD}.md`
