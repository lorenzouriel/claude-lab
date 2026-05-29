---
name: weekly-review
category: ops
description: >
  Creates a weekly wins, blockers, and next week plan document. Structured for
  async sharing with a team or personal retrospective use.
triggers:
  - "weekly review"
  - "week review"
  - "weekly update"
  - "weekly retrospective"
  - "/weekly-review"
workflow_signals:
  - weekly review
  - retrospective
  - weekly sync
  - weekly update
  - week in review
languages:
  - en
  - pt-br
---

# /weekly-review

Creates weekly reviews that close the loop on what happened and open the next week with clarity.

## Before writing, read:
- `_memory/strategy.md` — current goals and priorities
- `_memory/company.md` — context on team and projects

---

## Step 1 — Gather input

Ask in one question if not provided:

> "Tell me what happened this week — wins, blockers, what you're working on next. Even rough notes work."

---

## Step 2 — Write the weekly review

```markdown
# Weekly Review: Week of {YYYY-MM-DD}

**Prepared by:** {Name}
**Date written:** {YYYY-MM-DD}

---

## This Week at a Glance

{2-3 sentences: overall tone of the week. Was it productive, reactive, a turning point? What's the headline?}

---

## Wins

Things completed, shipped, or progressed this week:

- ✅ {Specific win — what, not just that it happened. "Launched email sequence — first send hit 42% open rate"}
- ✅ {Another win}
- ✅ {Another win}

---

## Work in Progress

What moved forward but isn't done yet:

| Project / Task | Status | Next step |
|---------------|--------|-----------|
| {Task} | {X% done / In review / Waiting on Y} | {Specific next action} |
| {Task} | {status} | {next step} |

---

## Blockers

What's stuck and why:

- 🔴 **{Blocker}** — {What's blocking it and what needs to happen to unblock. Who can help?}
- 🟡 **{Slow mover}** — {Not fully blocked, but slower than expected. Why?}

If no blockers: "No blockers this week."

---

## What Didn't Get Done

Items that were planned but didn't happen:

- ❌ {Task} — {Why it slipped: deprioritized / blocked / underestimated}
- ❌ {Task} — {Why}

---

## Lessons Learned

{1-3 things that became clearer this week. Process improvements, mistakes not to repeat, things that worked unexpectedly well.}

- {Lesson}
- {Lesson}

---

## Next Week Plan

| Priority | Task | Owner | Time estimate |
|----------|------|-------|--------------|
| 1 | {Most important thing} | {Name} | {X hrs / 1 day} |
| 2 | {Second priority} | {Name} | {estimate} |
| 3 | {Third priority} | {Name} | {estimate} |

**This week's #1 goal:** {One sentence — if nothing else gets done, this must.}

---

## Metrics Snapshot (optional)

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| {Metric} | {value} | {value} | {↑↓→} |

---

## Notes / Context for Next Week

{Anything a team member picking this up next week needs to know. Upcoming events, waiting on external parties, decisions pending.}
```

---

## Rules
- Wins must be specific — "worked on the project" is not a win
- Blockers must have a clear owner or escalation path — write who can unblock it
- "What Didn't Get Done" is not a shame section — it's a signal to reprioritize or re-scope
- Next Week Plan: #1 priority must be truly the most important, not just the most urgent
- Save to `wiki/Areas/{team-or-self}/week-{YYYY-MM-DD}.md`
