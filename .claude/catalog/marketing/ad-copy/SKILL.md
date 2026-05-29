---
name: ad-copy
category: marketing
description: >
  Writes Google Search and Meta (Facebook/Instagram) ad copy. Headlines, descriptions,
  primary text, and CTAs. Generates multiple variants for A/B testing.
triggers:
  - "write ad copy"
  - "google ads"
  - "facebook ad"
  - "meta ad"
  - "ad copy"
  - "/ad-copy"
workflow_signals:
  - ads
  - google ads
  - meta ads
  - paid traffic
  - facebook ads
  - instagram ads
  - ad copy
languages:
  - en
  - pt-br
---

# /ad-copy

Writes performance ad copy for Google Search and Meta that converts.

## Before writing, read:
- `_memory/company.md` — product/service, ICP, key benefits
- `_memory/preferences.md` — tone, forbidden phrases

---

## Step 1 — Clarify if not stated

Ask in one question:

> "Which platform — Google Search, Meta (FB/IG), or both? And what's the offer or product you're promoting?"

---

## Step 2 — Write the ads

### Google Search Ads

**Responsive Search Ad**

Write 10-15 headlines (max 30 chars each) and 4 descriptions (max 90 chars each):

```
HEADLINES (write at least 10):
H1: [Keyword in headline] (30 chars)
H2: [Benefit #1] (30 chars)
H3: [Benefit #2] (30 chars)
H4: [Social proof — "5000+ customers"] (30 chars)
H5: [Urgency or offer] (30 chars)
H6: [Brand name] (30 chars)
...

DESCRIPTIONS (write at least 4):
D1: [Main benefit + CTA] (90 chars)
D2: [Address objection + CTA] (90 chars)
D3: [Feature-focused] (90 chars)
D4: [Trust signal + CTA] (90 chars)
```

**Headline categories to cover:**
- Include keyword (at least 3 headlines)
- Benefit / outcome (what the user gets)
- Social proof (reviews, users, years in business)
- Differentiator (what makes this better)
- Urgency / offer (free trial, limited time, discount)
- CTA (Get Started, Try Free, Learn More, Shop Now)

**Character counts are strict** — flag anything over the limit.

---

### Meta Ads (Facebook / Instagram)

**Primary text** (3 variants):

```
VARIANT A — Problem/Solution:
[Hook that names the pain] + [Agitate it] + [Solution = your product] + [CTA]
Target: 125 chars before "See more" break

VARIANT B — Social proof:
[Result or testimonial] + [Why this product produced it] + [CTA]

VARIANT C — Direct offer:
[Offer front-loaded] + [Key benefits] + [Urgency] + [CTA]
```

**Headline** (5 options, max 40 chars):
Used as the link description. Short, benefit-focused.

**Description** (3 options, max 30 chars):
Below the headline. Often "Learn More" or a supporting benefit.

**CTA button:** Shop Now / Learn More / Sign Up / Get Quote / Book Now

---

## Step 3 — Compliance check

Before delivering, verify:
- No superlatives without evidence ("best in the world") — flag these
- No before/after claims for health products
- No guaranteed results language
- No "you" in Google ad headlines (policy violation)
- Meta: no shocking content, no discrimination signals

---

## Rules
- Character limits are hard limits — Google/Meta will reject ads over them
- Never write only one variant — minimum 3 headlines/variants per placement
- Tone from `_memory/preferences.md` applies, but ad copy can be more direct than regular content
- Save to `outputs/ads/{campaign-name}-copy-{YYYY-MM-DD}.md`
