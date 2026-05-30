---
name: report-builder
category: data
description: >
  Creates KPI reports from raw numbers. Audience-aware (internal/client/investor).
  Executive summary written last — after seeing the data. Metric deep dives with
  trend explanation. Recommendations must follow from the data, not be generic advice.
triggers:
  - "build a report"
  - "kpi report"
  - "metrics report"
  - "performance report"
  - "create a report"
  - "/report-builder"
workflow_signals:
  - kpi
  - report
  - metrics report
  - numbers
  - performance report
  - business report
languages:
  - en
  - pt-br
---

# /report-builder — KPI Report from Raw Numbers

Executive summary written last. Audience determines depth and language.

## Before writing, read:
- `_memory/company.md` — business model, what metrics matter
- `_memory/strategy.md` — current goals and targets

---

## Phase 1 — Data Gathering

If metrics aren't provided, ask:

> "Paste the numbers — revenue, traffic, leads, conversions, whatever you track. Include comparison period if you have it."

Also ask (once): **"Who's reading this — internal team, a client, or an investor?"**

---

## Phase 2 — Audience Calibration

| Audience | Tone | Depth | Language |
|---|---|---|---|
| Internal team | Direct, honest | Full data, root causes | Team language, operational terms |
| Client | Results-focused | Their KPIs, next steps | Business outcomes, minimal jargon |
| Investor | Business health | MRR, CAC, churn, LTV, trends | GAAP-adjacent, forward guidance |

---

## Phase 3 — Metrics Table

Build the table before writing any narrative:

```markdown
## Performance Dashboard

**Period:** [Month YYYY / Q{N} YYYY / Week of YYYY-MM-DD]
**Prepared:** [YYYY-MM-DD]
**Audience:** [Internal / Client / Investor]

| Metric | This Period | Last Period | Change | Target | Status |
|---|---|---|---|---|---|
| [Revenue / MRR] | [$X] | [$X] | [+/-X%] | [$X] | ✅/❌/— |
| [Users / Customers] | [N] | [N] | [+/-X%] | [N] | ✅/❌/— |
| [Conversion rate] | [X%] | [X%] | [+/-X pp] | [X%] | ✅/❌/— |
| [CAC] | [$X] | [$X] | [+/-X%] | [$X] | ✅/❌/— |
| [Churn] | [X%] | [X%] | [+/-X pp] | [X%] | ✅/❌/— |
| [NPS / CSAT] | [N] | [N] | [+/-N] | [N] | ✅/❌/— |

**Legend:** ✅ Met or exceeded | ❌ Below target | — No target set
```

---

## Phase 4 — Metric Deep Dives

For 2–3 most important or most changed metrics:

```markdown
### [Metric Name] — [Result] ([+/-X%] vs. last period)

[2–3 sentences: What drove this change? Is it structural or one-time?
Don't describe the number — explain the movement.]

**Breakdown by segment (if available):**
| Segment | Value | Share |
|---|---|---|
| [Segment A] | [value] | [X%] |
```

---

## Phase 5 — Highlights

```markdown
## Highlights

**What exceeded expectations:**
- [Specific result with context — not just "revenue grew"]

**What fell short:**
- [Specific shortfall with honest explanation]
```

---

## Phase 6 — Recommendations

```markdown
## Recommendations

| Priority | Action | Expected impact |
|---|---|---|
| High | [Specific action] | [Expected result] |
| Medium | [Action] | [Expected result] |
| Low | [Action] | [Expected result] |
```

Recommendations must follow from the data. "Improve your marketing" is not a recommendation.

---

## Phase 7 — Executive Summary (Write Last)

After all sections are complete:

```markdown
## Executive Summary

[3–5 sentences: The headline result. The most important driver. What it means for next period.
Written after seeing all the data — not before.
Should be readable standalone.]
```

---

## Rules

- Executive summary is always last — it's a synthesis, not an introduction
- Every metric must have a comparison period — a single number has no meaning
- Recommendations: specific and data-driven — generic advice invalidates the entire report
- If a target isn't set: note `—` rather than leaving it blank
- Never invent numbers — mark missing data as `[data not available]`
- Audience: investor report uses GAAP language; client report uses their KPIs; internal uses team shorthand
- Save to `outputs/reports/{company-slug}-report-{period}-{YYYY-MM-DD}.md`
