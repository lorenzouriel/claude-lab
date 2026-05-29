---
name: campaign-brief
category: marketing
description: >
  Creates a marketing campaign strategy brief. Goal, audience, message, channels,
  budget guidance, timeline, and KPIs. Used before campaign execution to align
  creative and media decisions.
triggers:
  - "campaign brief"
  - "marketing campaign"
  - "campaign strategy"
  - "plan a campaign"
  - "/campaign-brief"
workflow_signals:
  - campaign
  - campaign brief
  - marketing campaign
  - launch campaign
languages:
  - en
  - pt-br
---

# /campaign-brief

Creates a marketing campaign brief that aligns team and creative decisions before execution.

## Before writing, read:
- `_memory/company.md` — product, audience, positioning
- `_memory/strategy.md` — current focus, priorities, goals

---

## Step 1 — Clarify if not stated

Ask in one question:

> "What's the campaign for — product launch, lead gen, seasonal promotion, or brand awareness? And what's the rough timeline?"

---

## Step 2 — Write the brief

```markdown
# Campaign Brief: {Campaign Name}

**Date:** {YYYY-MM-DD}
**Owner:** {name}
**Status:** Draft

---

## Campaign Overview

| Field | Value |
|-------|-------|
| Campaign type | {Product launch / Lead gen / Seasonal promo / Brand awareness} |
| Product/Service | {what's being promoted} |
| Campaign period | {start date} → {end date} |
| Budget range | {if known, or "TBD"} |

---

## Goal

**Primary goal:** {One specific, measurable outcome}
Example: "Generate 200 qualified leads in 30 days" or "Sell 500 units of [product] by [date]"

**Secondary goals (optional):**
- {Brand awareness metric}
- {Email list growth}

---

## Target Audience

**Primary audience:**
{1-2 sentence description. Real people, not personas. Who specifically is this for?}

**What they care about:**
- {Pain point or desire #1}
- {Pain point or desire #2}

**Where they are:**
{Channels where this audience spends time}

**What they've seen from us before:**
{Cold audience / warm (visited site) / existing customers / email subscribers}

---

## Message

**Core message (one sentence):**
{The single idea this campaign communicates. Not a tagline — a clear statement.}

**Proof / reason to believe:**
{What supports the core message — data, testimonials, demonstrations}

**Tone:**
{Reference _memory/preferences.md or describe: urgent / educational / conversational / bold}

---

## Channels & Tactics

| Channel | Role | Format |
|---------|------|--------|
| {Instagram} | {Awareness} | {Reels + Stories} |
| {Google Search} | {Conversion} | {RSA} |
| {Email} | {Nurture} | {3-email sequence} |
| {Retargeting} | {Re-engagement} | {Static image + video} |

---

## Content Requirements

| Asset | Format | Quantity | Owner |
|-------|--------|----------|-------|
| {Ad creative} | {1080x1350 + 1080x1920} | {6 variants} | {designer} |
| {Copy} | {Headlines + body} | {3 sets} | {copywriter} |
| {Landing page} | {Desktop + mobile} | {1} | {dev} |

---

## Timeline

| Milestone | Date |
|-----------|------|
| Brief approved | {date} |
| Creative delivered | {date} |
| Copy delivered | {date} |
| Campaign live | {date} |
| Mid-campaign review | {date} |
| Campaign ends | {date} |
| Results report | {date} |

---

## KPIs

| Metric | Target | How Measured |
|--------|--------|-------------|
| {Leads / sales} | {N} | {CRM / analytics} |
| {CTR} | {X%} | {ad platform} |
| {CPA} | {$X} | {ad platform} |
| {ROAS} | {Xx} | {ad platform + revenue data} |

---

## Budget Allocation (if known)

| Channel | Budget | % |
|---------|--------|---|
| {Paid social} | {$X} | {X%} |
| {Google Ads} | {$X} | {X%} |
| {Creative production} | {$X} | {X%} |
| **Total** | **{$X}** | **100%** |

---

## Risks & Assumptions

| Risk | Mitigation |
|------|------------|
| {Delayed creative} | {Buffer 3 days in timeline} |
| {Low CTR on first week} | {Pause underperformers at Day 5, rotate new variants} |

---

## Approvals

- [ ] Marketing team
- [ ] Finance / budget
- [ ] Legal / compliance (if needed)
```

---

## Rules
- Primary goal must be one thing and measurable — not "grow brand awareness and generate leads"
- Budget section: if unknown, leave as TBD rather than guessing
- Risks section requires at least 2 entries — campaigns always have risks
- Save to `outputs/campaigns/{campaign-slug}-brief-{YYYY-MM-DD}.md`
