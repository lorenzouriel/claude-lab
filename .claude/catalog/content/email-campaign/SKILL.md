---
name: email-campaign
category: content
description: >
  Writes marketing email sequences. Decision-tree driven by campaign type (welcome,
  nurture, promotional, re-engagement, onboarding). Designs the full sequence first,
  then writes one email at a time. One CTA per email. Reads brand voice before writing.
triggers:
  - "email campaign"
  - "email sequence"
  - "drip campaign"
  - "welcome sequence"
  - "nurture sequence"
  - "email automation"
  - "/email-campaign"
workflow_signals:
  - email campaign
  - drip
  - sequences
  - nurture
  - promotional email
  - email marketing
  - automation
languages:
  - en
  - pt-br
---

# /email-campaign — Email Marketing Sequences

Designs the full sequence before writing. One CTA per email — always.

## Before writing, read:
- `_memory/company.md` — business, product, ICP, revenue model
- `_memory/preferences.md` — voice, tone, forbidden phrases

---

## Phase 1 — Campaign Type Decision

Identify which campaign type fits:

| Type | Purpose | Typical length |
|---|---|---|
| **Welcome** | Introduce new subscriber to brand | 3–5 emails, Day 0/1/3/7/14 |
| **Nurture / lead** | Build trust, educate toward purchase | 5–8 emails, weekly |
| **Promotional** | Drive a specific sale or event | 3–5 emails, compressed timeline |
| **Re-engagement** | Win back inactive subscribers | 3 emails over 2 weeks |
| **Onboarding** | Guide new customers through setup | 4–7 emails, Day 0/1/3/7/14/30 |
| **Post-purchase** | Upsell, referral, review | 3–4 emails, Day 0/3/7/30 |

If unclear, ask:

> "What triggered this campaign — a new signup, a purchase, a specific segment, or a promotion?"

---

## Phase 2 — Sequence Design

Design the full sequence before writing any email:

```markdown
## Campaign: [Type] — [Topic/Product]

Goal: [What action do we want at the end of the sequence?]
Audience: [Who receives this? How did they enter the sequence?]

### Sequence

Email 1 — [Send time] — [Subject line idea]
Goal: [What this email does]
CTA: [One action]

Email 2 — [Send time] — [Subject line idea]
Goal: [What this email does]
CTA: [One action]

[Continue...]

### Success metrics to track
- Open rate goal: [X%]
- Click rate goal: [X%]
- Conversion goal: [what counts as a conversion?]
```

**CHECKPOINT:** Present the sequence design. Get approval before writing emails.

---

## Phase 3 — Write Each Email

Write one email at a time. After each, pause and ask:

> "Email [N] ready. Want adjustments before I write Email [N+1]?"

**Standard email structure:**

```markdown
Subject: [40–60 chars, includes keyword or curiosity hook]
Preview text: [50–90 chars, extends the subject line thought]

---

[HOOK — 1–3 sentences. The one reason they should keep reading.]

[BODY — 150–300 words. One idea only. No multiple topics per email.]

[BRIDGE — 1 sentence connecting body to the action]

[CTA — ONE clear action: button text in [brackets] + the URL/action]

[SIGN-OFF]
[Name / Company]

---
P.S. [Optional — secondary point or reminder. If used, it must add value, not just repeat the CTA.]
```

**Voice rules (read `_memory/preferences.md` to calibrate):**
- Active voice
- Short sentences (avg <20 words)
- Specific over vague: "14% higher conversions" not "better results"
- Talk to one person, not a list ("you" not "subscribers")

---

## Phase 4 — Subject Line Set

After all emails are written, produce the full subject line set:

```
Email 1: [Subject line] | Preview: [Preview text]
Email 2: [Subject line] | Preview: [Preview text]
[...]
```

Check each for:
- Length: 40–60 chars
- Mobile truncation: first 30 chars carry the meaning
- Curiosity or benefit is clear without opening

---

## Output

Deliver:
1. Sequence design (confirmed)
2. All emails in order, clearly labeled (Email 1 of N, etc.)
3. Full subject line + preview text set
4. Notes on timing and segmentation

Save to `outputs/content/email-campaigns/{campaign-slug}-{YYYY-MM-DD}/`

---

## Rules

- One CTA per email — multiple CTAs reduce clicks
- Never send two promotional emails on the same day
- Sequence design must be approved before writing — prevents structural rewrites mid-sequence
- If re-writing an existing sequence: read all current emails first before suggesting changes
- P.S. lines are optional — only use if they genuinely add value
