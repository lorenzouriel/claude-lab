---
name: email-campaign
category: content
description: >
  Writes marketing email sequences — welcome series, nurture drips, promotional campaigns,
  and re-engagement flows. Can write one email at a time or a full sequence.
  Reads brand voice and company context before writing.
triggers:
  - "email campaign"
  - "email sequence"
  - "welcome email"
  - "nurture sequence"
  - "drip campaign"
  - "/email-campaign"
workflow_signals:
  - email campaign
  - drip
  - sequences
  - nurture
  - welcome series
  - promotional email
languages:
  - en
  - pt-br
---

# /email-campaign

Writes email marketing sequences that convert without feeling pushy.

## Before writing, read:
- `_memory/company.md` — product/service, ICP, company voice
- `_memory/preferences.md` — tone, what to avoid
- `_memory/strategy.md` — current offer, priorities

---

## Step 1 — Clarify if not stated

Ask in one question:

> "What type of sequence — welcome series, nurture, promotional, or re-engagement? And what's the end goal (trial, purchase, call booked)?"

---

## Step 2 — Sequence map (before writing)

For sequences over 2 emails, confirm the plan:

```
Sequence: [type]
Goal: [conversion action]
Audience: [who receives this]
Emails: [N]
Sending cadence: [Day 0, Day 2, Day 5...]

Email 1 — [theme]: [one-line description]
Email 2 — [theme]: [one-line description]
...
```

Ask: "Does this flow work? I'll write each email once you confirm."

---

## Step 3 — Write each email

### Structure (applies to every email)

**Subject line** (3 options)
- Option A: Curiosity / open loop
- Option B: Direct benefit
- Option C: Short and personal

**Preview text** (40-80 chars)
Continues the subject line — don't repeat it.

**Body**
- Opening: personal, context-aware. Reference the sequence stage ("You signed up 3 days ago / You haven't opened in a while / You're on Day 5 of your trial")
- Problem or insight (1-2 paragraphs)
- Transition to solution/offer (1 paragraph)
- CTA: one link, clear action

**Closing**
Warm sign-off. First name of sender if personal brand. Company name if brand.

---

### Sequence Types

**Welcome series (3-5 emails)**
- Email 1 (Day 0): Deliver the lead magnet + set expectations
- Email 2 (Day 2): Your story / why you built this
- Email 3 (Day 4): Social proof — customer result or case study
- Email 4 (Day 6): Overcome objection or FAQ
- Email 5 (Day 8): Make the ask — clear offer with deadline

**Nurture drip (ongoing)**
- Value-first: 2-3 educational emails before any pitch
- Pitch ratio: max 1 commercial email per 3 value emails

**Promotional (3-5 days)**
- Day 1: Launch — introduce the offer
- Day 2-3: Proof + objection handling
- Day 4: Urgency (real scarcity only — no fake countdown)
- Day 5: Last chance + FAQ

**Re-engagement**
- One email: acknowledge absence, offer value or simple check-in
- If no reply/click: suppress or remove from list

---

## Rules
- One CTA per email — never two
- Subject line options always: 3, not 1
- No fake urgency (fake countdown timers, fake "only 3 left")
- Tone from `_memory/preferences.md` applies to every email
- Save each email to `outputs/campaigns/{campaign-name}/email-{N}.md`
