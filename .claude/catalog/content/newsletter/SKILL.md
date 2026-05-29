---
name: newsletter
category: content
description: >
  Writes email newsletters with subject line, preview text, hook, body sections, and CTA.
  Adapts length and format for weekly, bi-weekly, or monthly cadences.
  Reads brand voice and company context before writing.
triggers:
  - "write a newsletter"
  - "email newsletter"
  - "weekly email"
  - "newsletter draft"
  - "/newsletter"
workflow_signals:
  - newsletter
  - email list
  - substack
  - weekly email
  - subscribers
languages:
  - en
  - pt-br
---

# /newsletter

Writes email newsletters that match the company's voice and deliver real value to subscribers.

## Before writing, read:
- `_memory/company.md` — who we are, what we do, our audience
- `_memory/preferences.md` — tone, style, what to avoid
- `_memory/strategy.md` — current focus and priorities

---

## Step 1 — Clarify if not stated

Ask in one question if the topic or angle isn't clear:

> "What's the main topic or story for this newsletter? And is this a weekly update, a deep-dive, or a promotional send?"

---

## Step 2 — Write the newsletter

### Subject Line
Write 3 options:
1. Curiosity gap: "The thing nobody tells you about [topic]"
2. Direct value: "How to [outcome] in [timeframe]"
3. Story hook: "[Relatable situation] — here's what I did"

**Preview text** (45-90 chars): Complements the subject line. Don't repeat it — continue the thought.

---

### Body Structure

**Opening hook (2-3 lines)**
Personal story, surprising fact, or strong opinion. Draws the reader in before pitching anything.

**Main section(s)**
- Each section = one idea
- Use headers for newsletters over 400 words
- Short paragraphs: 2-4 lines max
- No bullet point dumps — write in sentences

**CTA (one per newsletter)**
Clear single action: read the article, buy the product, reply with X, join the waitlist.
Never two CTAs. The second dilutes both.

**Sign-off**
Warm, human, consistent with brand voice. First name only if the brand is personal.

---

### Length Guide

| Type | Words |
|------|-------|
| Weekly update | 200-400 |
| Educational deep-dive | 500-900 |
| Promotional send | 150-300 |
| Story-led | 400-700 |

---

## Step 3 — Plain-text fallback

After the HTML-ready version, offer:
> "Want a plain-text version for readers who prefer it?"

---

## Rules
- Subject line A/B test: always offer 3 options, never 1
- One CTA — not two
- No "Hi [First Name]" unless asked — it's a placeholder that often breaks
- Write for scanning: short paragraphs, occasional bold on key phrases, clear structure
- Tone follows `_memory/preferences.md` exactly — check the writing example section
- Save to `outputs/newsletters/newsletter-{topic}-{YYYY-MM-DD}.md` when complete
