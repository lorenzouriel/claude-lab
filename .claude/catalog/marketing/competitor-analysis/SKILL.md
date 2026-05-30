---
name: competitor-analysis
category: marketing
description: >
  Creates competitor research reports. Per-competitor profiles, side-by-side comparison
  table, messaging analysis, pricing positioning, and strategic gap identification.
  Decision-driven: identifies what to do differently, not just what competitors do.
triggers:
  - "competitor analysis"
  - "competitive analysis"
  - "competitive research"
  - "analyze competitors"
  - "market research"
  - "/competitor-analysis"
workflow_signals:
  - competitors
  - market research
  - competitive analysis
  - competitive landscape
  - positioning
languages:
  - en
  - pt-br
---

# /competitor-analysis — Competitive Research Report

Produces profiles, comparison, messaging gaps, and strategic recommendations.

## Before writing, read:
- `_memory/company.md` — our product, ICP, positioning, revenue model
- `_memory/strategy.md` — current focus and goals

---

## Phase 1 — Scope

If not provided, ask:

> "Which competitors should I analyze? And is the focus on product, pricing, messaging, or market positioning?"

Confirm:
- List of competitors (if not known, ask for the ones they compete with most)
- Focus area: product features / pricing / messaging / all three
- Audience: internal strategy / investor / team / sales team

---

## Phase 2 — Per-Competitor Profiles

For each competitor, produce:

```markdown
### [Competitor Name]

**Website:** [URL]
**Founded:** [Year if known]
**Funding / Revenue:** [Stage or known figures]
**Team size:** [Range if known]

**What they do:**
[2–3 sentences on their core product and positioning]

**Target customer:**
[Specific segment they target — not "small businesses," but something more precise]

**Pricing:**
[Tiers, range, model (per seat / usage / flat) — note if pricing is hidden]

**Key features:**
- [Feature 1 — note if this is a differentiator]
- [Feature 2]
- [Feature 3]

**Messaging:**
- Headline: "[Their actual headline from homepage]"
- Value prop: [Their stated value proposition]
- Tone: [Direct / Technical / Friendly / Enterprise]

**Where they're strong:**
- [Specific strength with evidence]

**Where they're weak:**
- [Specific weakness based on product, reviews, or public info]

**Recent moves:**
- [New feature, fundraise, partnership, or market move — if known]
```

---

## Phase 3 — Side-by-Side Comparison

```markdown
## Comparison Table

| Dimension | Us | [Competitor A] | [Competitor B] | [Competitor C] |
|---|---|---|---|---|
| Core positioning | [ours] | | | |
| Target customer | [ours] | | | |
| Pricing model | [ours] | | | |
| Starting price | [ours] | | | |
| [Key feature 1] | ✓/✗/⚡ | | | |
| [Key feature 2] | ✓/✗/⚡ | | | |
| [Key feature 3] | ✓/✗/⚡ | | | |
| Integration ecosystem | | | | |
| Customer reviews (G2/Capterra) | | | | |

Legend: ✓ Has it | ✗ Doesn't have it | ⚡ Partial or limited
```

---

## Phase 4 — Strategic Gaps

```markdown
## Messaging Gaps

[What are competitors saying that resonates that we're not saying?]
[What are we saying that no competitor is saying — a genuine differentiator?]
[What's being over-said by everyone — a table stake to de-emphasize?]

## Product Gaps

[What do customers wish the competitors had? (Pull from reviews if possible)]
[What can we do that no one else can — genuine product differentiation?]

## Positioning Opportunity

[The segment no one is clearly serving]
[The message no one is clearly owning]
[The price point not being covered]

## Strategic Recommendations

1. [Specific action based on what the research showed]
2. [Specific action]
3. [Specific action]
```

---

## Rules

- Never write "X is the market leader" without evidence — say what the evidence shows
- Quote actual competitor headlines and messaging — don't paraphrase them
- Weaknesses: only state what's supported by product facts, public reviews, or known gaps — not speculation
- Recommendations must be specific enough to act on — not "improve messaging"
- Save to `outputs/marketing/research/competitive-analysis-{YYYY-MM-DD}.md`
