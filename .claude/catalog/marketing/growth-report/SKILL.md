---
name: growth-report
category: marketing
description: >
  Creates a weekly or monthly growth summary. Key metrics, what worked, what didn't,
  next period priorities. Reads company context and strategy before writing.
triggers:
  - "growth report"
  - "monthly report"
  - "weekly report"
  - "performance report"
  - "/growth-report"
workflow_signals:
  - growth
  - monthly report
  - weekly report
  - metrics report
  - performance report
  - business report
languages:
  - en
  - pt-br
---

# /growth-report

Creates growth summaries that make the numbers tell a story and drive decisions.

## Before writing, read:
- `_memory/company.md` — what we track, business model
- `_memory/strategy.md` — current goals and KPIs

---

## Step 1 — Gather data

Ask in one question if data isn't provided:

> "Paste the key numbers for this period — revenue, traffic, leads, conversions, or whatever you track. I'll turn them into the report."

---

## Step 2 — Write the report

```markdown
# Growth Report: {Period}

**Period:** {Week of YYYY-MM-DD / Month of MMMM YYYY}
**Prepared:** {date}

---

## Executive Summary

{3-4 sentences: Was this a good period or not? What moved the needle? What's the single most important thing to know? What's the implication for next period?}

---

## Key Metrics

| Metric | This Period | Last Period | Change | vs Goal |
|--------|-------------|-------------|--------|---------|
| {Revenue / MRR} | {$X} | {$X} | {+/-X%} | {✅ / ❌ / —} |
| {New customers} | {N} | {N} | {+/-X%} | {✅ / ❌ / —} |
| {Website traffic} | {N} | {N} | {+/-X%} | {✅ / ❌ / —} |
| {Conversion rate} | {X%} | {X%} | {+/-X pp} | {✅ / ❌ / —} |
| {Churn rate} | {X%} | {X%} | {+/-X pp} | {✅ / ❌ / —} |
| {CAC} | {$X} | {$X} | {+/-X%} | {✅ / ❌ / —} |
| {LTV} | {$X} | {$X} | {+/-X%} | {✅ / ❌ / —} |

**Legend:** ✅ On/above target | ❌ Below target | — No target set

---

## What Worked

1. **{Initiative or channel}** — {Result + why it worked}
2. **{Initiative or channel}** — {Result + why it worked}
3. **{Initiative or channel}** — {Result + why it worked}

---

## What Didn't Work

1. **{Initiative or channel}** — {Result + likely cause}
2. **{Initiative or channel}** — {Result + likely cause}

---

## Key Events This Period

| Date | Event | Impact |
|------|-------|--------|
| {date} | {Product launch / campaign / pricing change} | {+X leads / -X% churn / etc.} |

---

## Channel Breakdown

| Channel | Sessions/Leads | vs Last Period | Notes |
|---------|---------------|----------------|-------|
| Organic search | {N} | {+/-X%} | {notable change} |
| Paid social | {N} | {+/-X%} | {ROAS: Xx} |
| Email | {N opens / N clicks} | {+/-X%} | {CTR: X%} |
| Direct / branded | {N} | {+/-X%} | |
| Referral | {N} | {+/-X%} | |

---

## Next Period Priorities

1. **{Priority #1}** — {What, why, and what success looks like}
2. **{Priority #2}** — {What, why, and what success looks like}
3. **{Priority #3}** — {What, why, and what success looks like}

---

## Risks to Watch

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| {e.g., Ad CPM rising ahead of peak season} | Medium | {Shift budget to organic, test email reactivation} |

---

## Open Questions

- {Question that needs data or decision before next report}
```

---

## Rules
- Executive Summary comes first and must be readable standalone — stakeholders often read only this
- "What Worked" and "What Didn't" must be specific — not "email performed well" but "the subject line test with [FIRST NAME] drove 12% higher open rate"
- If data wasn't provided for a metric row, write "Not tracked" — not "N/A" or "—"
- Numbers must be verified by the user — don't invent or estimate metrics
- Save to `outputs/reports/growth-report-{period}-{YYYY-MM-DD}.md`
