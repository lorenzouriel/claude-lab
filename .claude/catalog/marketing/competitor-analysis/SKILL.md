---
name: competitor-analysis
category: marketing
description: >
  Creates a competitor research report. Overview, positioning, strengths/weaknesses,
  product comparison, messaging analysis, and strategic gaps. Works from URLs,
  descriptions, or pasted content.
triggers:
  - "competitor analysis"
  - "analyze competitors"
  - "competitive research"
  - "compare with competitor"
  - "/competitor-analysis"
workflow_signals:
  - competitors
  - market research
  - competitive analysis
  - competitive intelligence
languages:
  - en
  - pt-br
---

# /competitor-analysis

Creates structured competitor research reports that surface actionable strategic gaps.

## Before writing, read:
- `_memory/company.md` — our product, positioning, audience
- `_memory/strategy.md` — current focus and strategic priorities

---

## Step 1 — Clarify scope

Ask in one question if not specified:

> "Which competitors are we analyzing? List them, or describe the market segment and I'll work with what you know."

---

## Step 2 — Write the analysis

```markdown
# Competitor Analysis: {Market / Category}

**Date:** {YYYY-MM-DD}
**Prepared by:** {name}
**Scope:** {which competitors / which market segment}

---

## Market Overview

{2-3 sentences on the competitive landscape. How crowded is this market? What's the dominant model? Where are customers switching from?}

---

## Competitor Profiles

### {Competitor 1 Name}

| Field | Detail |
|-------|--------|
| Website | {URL} |
| Founded | {year or "unknown"} |
| Pricing | {Free / Freemium / $X/mo / Custom / Unknown} |
| Target audience | {who they serve} |
| Primary value prop | {their core "why us" in one sentence} |

**Product / Offering**
{What they sell. Key features, notable capabilities, limitations.}

**Messaging & Positioning**
{What emotion or outcome does their marketing lead with? What language do they use? What do they emphasize?}

**Strengths**
- {Specific advantage — e.g., "Large integration library (300+ native integrations)"}
- {Another strength}

**Weaknesses**
- {Specific gap — e.g., "No mobile app as of Q1 2026"}
- {Another weakness}

**Customer sentiment** (if data available)
{What customers say on G2, Capterra, Reddit, Twitter — positive and negative patterns}

---

### {Competitor 2 Name}

[Repeat profile structure]

---

## Side-by-Side Comparison

| Feature / Criterion | Us | {Competitor 1} | {Competitor 2} |
|---------------------|----|----------------|----------------|
| {Key feature} | ✅ | ✅ | ❌ |
| {Pricing tier} | {$X} | {$X} | {$X} |
| {Integration} | ✅ | ❌ | ✅ |
| {Support} | {email} | {24/7 chat} | {community} |

---

## Messaging Comparison

| Company | Core claim | Emotional angle | Main CTA |
|---------|-----------|-----------------|----------|
| Us | {our claim} | {our angle} | {our CTA} |
| {Comp 1} | {their claim} | {their angle} | {their CTA} |
| {Comp 2} | {their claim} | {their angle} | {their CTA} |

---

## Strategic Gaps & Opportunities

{What are competitors failing to do well? Where is there unmet demand? What audience segment is underserved?}

| Gap | Who's affected | Our opportunity |
|-----|---------------|-----------------|
| {Gap #1} | {audience} | {how we can win here} |
| {Gap #2} | {audience} | {how we can win here} |

---

## Recommendations

1. **{Recommendation #1}** — {Specific action to take based on findings}
2. **{Recommendation #2}** — {Specific action}
3. **{Recommendation #3}** — {Specific action}

---

## Sources & Limitations

| Source | Type | Date |
|--------|------|------|
| {Company website} | Primary | {YYYY-MM} |
| {G2 reviews} | User reviews | {YYYY-MM} |
| {LinkedIn / job posts} | Inferred signals | {YYYY-MM} |

**Limitations:** {What we couldn't verify. Pricing not publicly listed. No access to internal data.}
```

---

## Rules
- Strengths and weaknesses must be specific — not "good UX" but "mobile app with offline mode"
- If information isn't available, say "Not publicly available" — don't guess
- Recommendations section must follow from the findings — don't add generic advice
- Save to `wiki/Resources/competitor-analysis-{YYYY-MM-DD}.md` for ongoing reference
