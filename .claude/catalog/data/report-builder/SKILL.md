---
name: report-builder
category: data
description: >
  Creates a KPI report from raw numbers. Executive summary, metric breakdown,
  trend commentary, and recommendations. Turns a paste of numbers into a
  stakeholder-ready document.
triggers:
  - "build a report"
  - "kpi report"
  - "metrics report"
  - "create a report from these numbers"
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

# /report-builder

Turns raw metrics into stakeholder-ready reports with narrative and recommendations.

## Before writing, read:
- `_memory/company.md` — business model, what metrics matter
- `_memory/strategy.md` — current goals and targets

---

## Step 1 — Gather data

If metrics aren't provided, ask:

> "Paste the numbers you want in the report — revenue, traffic, leads, conversions, whatever you track. Include the comparison period if you have it."

---

## Step 2 — Clarify the audience

If not stated, ask:

> "Who's reading this — internal team, a client, an investor, or yourself?"

The audience determines tone and depth.

---

## Step 3 — Write the report

```markdown
# {Company / Product} Performance Report

**Period:** {Month YYYY / Q{N} YYYY / Week of YYYY-MM-DD}
**Prepared:** {YYYY-MM-DD}
**Audience:** {Internal / Client / Investor}

---

## Executive Summary

{3-5 sentences: The headline result, the most important driver, and what it means for the next period. Should be readable standalone.}

---

## Performance Dashboard

| Metric | This Period | Last Period | Change | Target | Status |
|--------|-------------|-------------|--------|--------|--------|
| {Revenue / MRR} | {$X} | {$X} | {+/-X%} | {$X} | {✅ / ❌} |
| {Users / Customers} | {N} | {N} | {+/-X%} | {N} | {✅ / ❌} |
| {Conversion rate} | {X%} | {X%} | {+/-X pp} | {X%} | {✅ / ❌} |
| {CAC} | {$X} | {$X} | {+/-X%} | {$X} | {✅ / ❌} |
| {Churn} | {X%} | {X%} | {+/-X pp} | {X%} | {✅ / ❌} |
| {NPS / CSAT} | {N} | {N} | {+/-N} | {N} | {✅ / ❌} |

**Legend:** ✅ Met or exceeded target | ❌ Below target | — No target set

---

## Metric Deep Dives

### {Metric 1 — focus on the most important or most changed}

**Result:** {value} ({+/-X%} vs. last period)

{2-3 sentences explaining the trend. What drove this change? Is it structural or one-time?}

**Breakdown by segment / channel (if available):**

| Segment | Value | Share |
|---------|-------|-------|
| {Segment A} | {value} | {X%} |
| {Segment B} | {value} | {X%} |

### {Metric 2}

[Same structure]

---

## Highlights

**What exceeded expectations:**
- {Specific result with context}
- {Another highlight}

**What fell short:**
- {Specific shortfall with honest explanation}
- {Another}

---

## Trend Analysis

{1-2 paragraphs on the overall direction of the business. Is momentum building or slowing? Are improvements being driven by one channel or broad-based?}

---

## Recommendations

| Priority | Action | Expected impact |
|----------|--------|-----------------|
| High | {Specific action} | {Expected result} |
| Medium | {Action} | {Expected result} |
| Low | {Action} | {Expected result} |

---

## Appendix: Raw Data

{Paste the original numbers here for reference}
```

---

## Rules
- Executive Summary must be written last — it summarizes what the data actually shows, not what was expected
- Every metric must have a comparison period — a number without context is meaningless
- Recommendations must follow from the data — no generic advice ("improve your marketing")
- If a target isn't set for a metric, note it rather than leaving the Status column blank
- Audience matters: investor report uses GAAP-adjacent language; client report uses their KPIs; internal uses team language
- Save to `outputs/reports/{company}-report-{period}-{YYYY-MM-DD}.md`
