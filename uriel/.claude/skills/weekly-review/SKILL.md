---
name: weekly-review
category: ops
description: >
  Runs a structured weekly review. Extracts wins, WIP, blockers, lessons, and next week's
  plan from rough notes or conversation. Identifies the single #1 priority for next week.
  Can be async (from notes) or interactive (guided questions).
triggers:
  - "weekly review"
  - "week review"
  - "weekly retrospective"
  - "week in review"
  - "end of week"
  - "/weekly-review"
workflow_signals:
  - weekly review
  - retrospective
  - weekly sync
  - week in review
  - EOW
languages:
  - en
  - pt-br
---

# /weekly-review — Weekly Review & Planning

Structured reflection. Can be async (from notes) or interactive (question-by-question).

## Before running, read:
- `_memory/strategy.md` — current goals, KPIs, priorities

---

## Phase 1 — Mode Selection

**Async mode:** User pastes notes or a brain dump → extract structure from raw input.

**Interactive mode:** Ask one question at a time:
1. "What did you actually ship, finish, or move forward this week?"
2. "What's still in progress and where does it stand?"
3. "What got in the way? Any blockers still active?"
4. "What didn't get done that was supposed to?"
5. "What's the #1 thing you need to accomplish next week?"
6. "Any lessons from this week worth writing down?"

---

## Phase 2 — Generate Weekly Review

```markdown
# Weekly Review — Week of [YYYY-MM-DD]

## Wins — What shipped or moved forward

- [Concrete win: specific, not vague]
- [Another win]
- [Another]

*Note: "Almost finished" is not a win. Only count completed or measurably advanced items.*

---

## In Progress — Current state of active work

| Project / Task | Current status | Next action | ETA |
|---|---|---|---|
| [Name] | [Where it stands] | [What happens Monday morning] | [Date] |

---

## Blockers — What's stuck right now

- [Blocker: who or what is blocking, and what's needed to unblock]
- [If no blockers: "None currently active"]

---

## What Didn't Get Done

- [Item that was planned but didn't happen]
- [Honest explanation: why?]

*This section prevents the same item from being "next week's goal" five weeks in a row.*

---

## Lessons

- [One thing learned this week — process, technical, or personal]
- [Another, if there's a genuine one — don't force it]

---

## Next Week — Plan

### #1 Priority
[One thing. The most important. If this is all that gets done next week, it's still a good week.]

### Also planned
- [Task]
- [Task]
- [Task]

*Keep this list honest — a list of 20 things is a list of 0 priorities.*

---

## Reflection (Optional)

[One paragraph if there's something worth capturing — a pattern, a realization, a decision.
Not required every week. Only write this if there's something real to say.]
```

---

## Rules

- "Almost done" doesn't go in Wins — it goes in In Progress
- The #1 Priority must be one thing, not a list
- What Didn't Get Done: required section — not having it enables avoidance
- Blockers: name the actual blocker (person, decision, missing info) — not just "it's complicated"
- If reading `_memory/strategy.md`: check whether the #1 Priority aligns with current goals
- Save to `outputs/ops/reviews/weekly-{YYYY-MM-DD}.md`
