---
name: campaign-brief
category: marketing
description: >
  Creates marketing campaign strategy briefs. Phase-driven: goal → audience → message
  → channels → timeline → KPIs → budget → approvals. Prevents campaigns from launching
  without a clear hypothesis and measurable success criteria.
triggers:
  - "campaign brief"
  - "marketing brief"
  - "campaign strategy"
  - "plan a campaign"
  - "marketing plan"
  - "/campaign-brief"
workflow_signals:
  - campaign
  - marketing brief
  - campaign strategy
  - launch plan
  - marketing plan
languages:
  - en
  - pt-br
---

# /campaign-brief — Marketing Campaign Strategy Brief

Prevents campaigns from launching without a clear hypothesis. Brief-first, execution-second.

## Before writing, read:
- `_memory/company.md` — business, ICP, revenue model
- `_memory/strategy.md` — current priorities, KPIs, goals
- `_memory/preferences.md` — brand voice

---

## Phase 1 — Campaign Context

If not provided, ask:

> "What's the campaign goal and what's the trigger — a launch, a seasonal push, a new audience segment?"

Confirm:
- Product/service being promoted
- Timeline (start date, end date, or campaign type)
- Budget range (even a rough order of magnitude)

---

## Phase 2 — Generate Brief

```markdown
# Campaign Brief: [Campaign Name]

**Date:** [YYYY-MM-DD]
**Owner:** [Name or team]
**Status:** Draft

---

## Goal

**Primary objective:** [One sentence: what this campaign achieves]

**Campaign type:**
- [ ] Awareness — introduce to new audiences
- [ ] Consideration — move warm audience toward decision
- [ ] Conversion — drive specific purchase / signup / action
- [ ] Retention — re-engage or upsell existing customers

**Hypothesis:** If we [do X], then [audience Y] will [take action Z], because [reason].

---

## Audience

**Primary segment:** [Who this is for — specific, not broad]
- Pain point: [What keeps them up at night]
- Current behavior: [What they do now instead of using our product]
- Where we reach them: [Platforms, communities, events]

**Secondary segment (if applicable):** [Lookalike, adjacent audience]

**Exclusions:** [Who this campaign is NOT for]

---

## Message

**Core message:** [One sentence — the single thing we want them to remember]

**Value proposition:** [Why this product/offer, why now, why us]

**Proof point:** [Stat, testimonial, or evidence that makes the message credible]

**CTA:** [One specific action — "Start your free trial", "Book a call", "Shop now"]

---

## Channels & Tactics

| Channel | Tactic | Format | Responsibility |
|---|---|---|---|
| [Paid Social] | [Meta retargeting] | [Static + video] | [Name] |
| [Email] | [3-email sequence] | [Newsletter style] | [Name] |
| [Organic] | [LinkedIn + IG posts] | [Carousel + text] | [Name] |

---

## Timeline

| Date | Milestone |
|---|---|
| [MM-DD] | Brief approved |
| [MM-DD] | Creative ready for review |
| [MM-DD] | Campaign live |
| [MM-DD] | Mid-campaign review |
| [MM-DD] | Campaign ends |
| [MM-DD] | Performance report |

---

## KPIs & Success Criteria

| Metric | Target | Minimum acceptable |
|---|---|---|
| [Impressions] | [X] | [Y] |
| [CTR] | [X%] | [Y%] |
| [Conversions] | [X] | [Y] |
| [CAC] | [$X] | [$Y] |
| [ROI] | [X%] | [Y%] |

**Success definition:** [What "win" looks like for this specific campaign]

---

## Budget

| Line item | Allocated | Notes |
|---|---|---|
| Paid media | $[X] | |
| Creative production | $[X] | |
| Tools / software | $[X] | |
| **Total** | **$[X]** | |

---

## Approvals Required

| Decision | Owner | By when |
|---|---|---|
| Brief approval | [Name] | [Date] |
| Creative approval | [Name] | [Date] |
| Budget approval | [Name] | [Date] |
| Legal review | [Name / N/A] | [Date] |
```

---

## Rules

- Hypothesis is mandatory — campaigns without one are guesses
- One CTA only — multiple CTAs split attention and reduce conversion
- KPIs must have targets before the campaign launches — not set after seeing results
- Exclusions section is not optional — it clarifies who NOT to spend on
- Save to `outputs/marketing/briefs/{campaign-slug}-brief-{YYYY-MM-DD}.md`
