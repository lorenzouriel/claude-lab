---
name: seo-article
category: content
description: >
  Writes long-form SEO content (800-2000 words) with keyword targeting, optimized headers,
  meta description, and internal linking recommendations. Reads company context and brand
  voice before writing.
triggers:
  - "write a blog post"
  - "seo article"
  - "blog post about"
  - "article for google"
  - "/seo-article"
workflow_signals:
  - blog
  - seo
  - google traffic
  - articles
  - long-form
  - organic search
languages:
  - en
  - pt-br
---

# /seo-article

Writes SEO-optimized long-form articles that rank and convert.

## Before writing, read:
- `_memory/company.md` — business context, audience, services
- `_memory/preferences.md` — tone, writing style, forbidden phrases
- `_memory/strategy.md` — current focus, product priorities

---

## Step 1 — Clarify if not stated

If keyword or topic isn't clear, ask:

> "What's the main keyword or topic? And what should the reader be able to do or understand after reading it?"

---

## Step 2 — SEO brief (before writing)

Show the user this before drafting:

```
Target keyword: [keyword]
Secondary keywords: [2-3 related terms]
Search intent: [informational / commercial / navigational]
Target word count: [800 / 1200 / 2000]
Audience: [from _memory/company.md]
CTA goal: [newsletter signup / product page / contact]
```

Ask: "Does this look right? I'll write the article based on this."

---

## Step 3 — Write the article

### Structure

**Title (H1)**
- Include exact keyword near the start
- Max 60 characters for full display in Google
- Power words: "Complete", "Guide", "How to", "Best", current year

**Meta description** (write after article)
- 150-160 characters
- Include keyword naturally
- One clear benefit or promise
- No clickbait

**Opening paragraph (no H2)**
- Hook: stat, question, or bold claim
- Include target keyword in first 100 words
- State what the article covers and for whom

**Body sections (H2 + H3)**
- H2 for major sections (include keyword variations)
- H3 for subsections
- 2-4 paragraphs per H2
- Use numbered lists for processes, bullet points for features/options
- Short paragraphs (3-4 lines)
- Bold key terms on first use

**Internal links**
After writing, suggest 2-3 internal links:
> "You could link [anchor text] to your [page about X]"

**CTA section (final H2)**
- Don't make it sound like an ad
- Frame as the natural next step
- One action, clear benefit

---

## Step 4 — SEO checklist before delivery

- [ ] H1 contains exact keyword
- [ ] Keyword in first 100 words
- [ ] At least 2 keyword variations in H2s
- [ ] Meta description ≤ 160 chars with keyword
- [ ] No keyword stuffing (keyword density ~1-2%)
- [ ] Short paragraphs throughout
- [ ] At least one image alt text suggestion

---

## Rules
- Never write keyword-stuffed content — it reads badly and Google penalizes it
- Tone from `_memory/preferences.md` applies even in SEO content — don't go corporate
- Save to `outputs/blog/{slug}-{YYYY-MM-DD}.md`
- Suggest a featured image concept at the end (describe it, don't generate unless asked)
