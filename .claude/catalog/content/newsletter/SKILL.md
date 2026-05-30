---
name: newsletter
category: content
description: >
  Writes email newsletters with 3 subject line options, preview text, hook, body sections,
  and CTA. Decision-tree driven by audience and cadence. Reads brand voice before writing.
  Structures content for scannability — most readers skim before they read.
triggers:
  - "newsletter"
  - "email newsletter"
  - "weekly email"
  - "subscriber email"
  - "write a newsletter"
  - "/newsletter"
workflow_signals:
  - newsletter
  - email list
  - substack
  - weekly email
  - subscriber
  - email content
languages:
  - en
  - pt-br
---

# /newsletter — Email Newsletter Writer

Writes subscriber emails that people open, read, and click.

## Before writing, read:
- `_memory/company.md` — business context, audience
- `_memory/preferences.md` — voice, tone, what to avoid

---

## Phase 1 — Clarify

If not provided, ask:

> "What's this newsletter about? And what's the one thing you want readers to do or feel after reading?"

If context is already clear, skip to Phase 2.

---

## Phase 2 — Newsletter Type Decision

**Curated digest:** Summarize external links/news with your commentary. Structure: intro → 3–5 items with headline + 1-sentence commentary + link → outro + CTA.

**Original content:** One long idea, story, or lesson. Structure: hook → story/argument → insight → CTA.

**Product/announcement:** Company news or offer. Structure: headline → what's new → why it matters to the reader → clear CTA.

**Hybrid:** Short intro + one original piece + 1–2 links. Best for weekly newsletters with mixed content.

---

## Phase 3 — Subject Line Options

Write 3 subject lines using different approaches:

| Type | Formula | Example |
|---|---|---|
| Curiosity gap | "[Unexpected claim] — here's why" | "We almost didn't ship this — here's why" |
| Specific benefit | "[Result] in [timeframe]" | "Double your open rates in 30 days" |
| Direct | State the topic plainly | "This week: pricing strategy for founders" |

Add **preview text** for each (50–90 chars shown in inbox after subject):

```
Subject: [subject line]
Preview: [preview text — continues the thought from the subject]
```

---

## Phase 4 — Write the Newsletter

**Standard structure:**

```markdown
## [Subject line as H2]

[HOOK — 1–3 sentences. The reason they should keep reading. Can be a story open,
a bold claim, or a question. Never "in today's newsletter we will..."]

---

[BODY — the meat of the content]

[For original content: one idea, developed in 300–600 words]
[For digest: 3–5 items, each with headline + 1 sentence + link]
[For announcements: what → why it matters → proof]

---

[BRIDGE — 1–2 sentences connecting the body to the CTA]

[CTA — one clear action. Button-style: "[Action verb] [what they get]"]
```

**Scannability rules:**
- Max 3 sentences per paragraph
- Subheadings every 150–200 words for longer pieces
- One bold or italic highlight per section max
- No bullet lists of more than 5 items

---

## Phase 5 — Checkpoint

Present the 3 subject line options + the full email. Ask:

> "Which subject line? And any tweaks to the email before it's ready?"

---

## Output

Deliver:
1. Chosen subject line + preview text
2. Full newsletter body (plain text + markdown formatting for easy copying)
3. Word count and estimated reading time

Save to `outputs/content/newsletters/{issue-slug}-{YYYY-MM-DD}.md`

---

## Rules

- Never start the body with "I" or the company name
- Never write "In today's newsletter..." or "Today I want to talk about..."
- One CTA per email — multiple CTAs reduce clicks
- If the user provides previous newsletters, read them first and match the voice
- Subject lines: 40–60 chars for mobile; flag anything over 60 chars
