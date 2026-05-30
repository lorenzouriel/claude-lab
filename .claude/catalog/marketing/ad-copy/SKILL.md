---
name: ad-copy
category: marketing
description: >
  Writes Google Search (RSA) and Meta (Facebook/Instagram) ad copy. Enforces platform
  character limits precisely. Produces 10–15 headlines, 4 descriptions for Google RSA,
  and 3 text variants for Meta. Runs compliance check at the end.
triggers:
  - "ad copy"
  - "google ads"
  - "meta ads"
  - "facebook ads"
  - "paid ads"
  - "write ads"
  - "/ad-copy"
workflow_signals:
  - ads
  - google ads
  - meta ads
  - paid traffic
  - facebook ads
  - advertising copy
  - ppc
languages:
  - en
  - pt-br
---

# /ad-copy — Google & Meta Ad Copy

Enforces platform character limits precisely. Produces all required variants.

## Before writing, read:
- `_memory/company.md` — product, ICP, value proposition, differentiators
- `_memory/preferences.md` — voice, tone, forbidden phrases
- `identity/design-guide.md` — brand positioning

---

## Phase 1 — Campaign Context

If not provided, ask:

> "What's the product/service being advertised? And what's the main goal — drive signups, sales, calls, or something else?"

Also confirm:
- Target audience (already known from `_memory/company.md` or ask)
- Landing page destination or topic
- Any competitor context? (helps with differentiation angles)

---

## Phase 2 — Google RSA (Responsive Search Ads)

**Character limits (HARD — flagged if exceeded):**
- Headlines: 30 characters each (including spaces)
- Descriptions: 90 characters each (including spaces)

**Write:**
- **10–15 headlines** across these categories:
  - Core benefit (3–4): What the product does for the user
  - Differentiation (2–3): What makes it different from alternatives
  - Social proof (1–2): Numbers, customers, results
  - CTA (2–3): What to do now
  - Keyword-rich (2–3): Include the search term naturally

- **4 descriptions** across these angles:
  - Feature + benefit pair
  - Problem solved
  - Social proof + CTA
  - Offer or guarantee

**Output format:**
```
## Google RSA Headlines

[Category]
• Headline (XX chars)
• Headline (XX chars)

[Next category...]

## Google RSA Descriptions

D1 (XX chars): [Description text]
D2 (XX chars): [Description text]
D3 (XX chars): [Description text]
D4 (XX chars): [Description text]
```

Count chars for each. Flag any over limit with ⚠️.

---

## Phase 3 — Meta Ads (Facebook/Instagram)

**Character limits (soft limits — longer shown with "See more"):**
- Primary text: 125 chars shown, 500 chars total
- Headline: 40 chars shown (ad headline below image)
- Description: 30 chars (optional, below headline)

**Write 3 variants:**

| Variant | Angle | Format |
|---|---|---|
| A | Problem/pain agitation | Opens with the problem the ICP faces |
| B | Benefit/outcome | Opens with the result the user gets |
| C | Social proof / story | Opens with a testimonial or story |

**Per-variant output:**
```
## Meta Variant [A/B/C] — [Angle]

Primary text:
[Full text — first 125 chars carry the weight]

Headline: [40 chars max]
Description: [30 chars, optional]

CTA button: [Shop Now / Learn More / Sign Up / Get Offer]
Audience note: [Who this variant works best for]
```

---

## Phase 4 — Compliance Check

Run through this list before delivering:

```
Compliance Check:
[ ] No superlatives without proof ("best", "#1", "fastest") — or remove them
[ ] No misleading claims
[ ] "Free" is accurate (no hidden conditions implied)
[ ] Interest-based targeting implications: no age/gender/race targeting implied in copy
[ ] Brand mentions: only use competitor names if explicitly approved
[ ] CTA is specific ("Get your free trial" better than "Click here")
[ ] Forbidden phrases from _memory/preferences.md: none present
```

Flag any compliance concerns prominently.

---

## Rules

- Character limits are hard limits for Google — count every character including spaces
- Never write "Click here" as the only CTA — be specific about what happens
- At least one headline per RSA must include the primary search keyword
- Meta variants: each must use a different opening angle — not three versions of the same message
- If the product has a specific offer (discount, trial, guarantee), it must appear in at least one variant
