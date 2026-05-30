---
name: seo-article
category: content
description: >
  Writes long-form SEO content (800–2500 words). Phase-driven: keyword research brief
  → structural outline → full article → SEO checklist. Produces H1/H2/H3 structure,
  meta description, internal link suggestions, and a final SEO checklist before delivery.
triggers:
  - "seo article"
  - "blog post"
  - "long form content"
  - "blog article"
  - "seo content"
  - "write for google"
  - "/seo-article"
workflow_signals:
  - blog
  - seo
  - google traffic
  - articles
  - long-form content
  - content marketing
languages:
  - en
  - pt-br
---

# /seo-article — Long-Form SEO Content

Produces structured, keyword-optimized articles. Brief first, article second.

## Before writing, read:
- `_memory/company.md` — business context, audience, domain expertise
- `_memory/preferences.md` — voice, tone, what to avoid
- `identity/design-guide.md` — brand voice summary

---

## Phase 1 — Keyword Brief

Before writing a word of the article, produce a brief:

```markdown
## SEO Brief

**Primary keyword:** [exact phrase, 2–4 words]
**Search intent:** [Informational / Commercial / Transactional / Navigational]
**Secondary keywords:** [3–5 related terms to include naturally]
**Target audience:** [who is searching this?]
**Article goal:** [rank for keyword / build authority / capture leads / answer FAQ]
**Target length:** [800–1200 / 1200–1800 / 1800–2500 words]
**Competitor gap:** [what are existing articles missing that this one should cover?]
```

**CHECKPOINT:** Present the brief. Wait for confirmation before writing the article.

---

## Phase 2 — Structural Outline

After brief approval, write a detailed outline:

```markdown
## Outline

**H1:** [Primary keyword in natural phrasing — not stuffed, reads like a real headline]

**Meta description:** [150–160 chars — includes primary keyword, has a clear hook]

---

**Introduction** (100–150 words)
- Hook: [what problem or question opens the article?]
- Promise: [what will the reader know/be able to do after reading?]

**H2: [Section title including secondary keyword]**
- [Key point 1]
- [Key point 2]
- [Supporting data or example]

**H2: [Section title]**
[Continue...]

**H2: [Section with "how to" or step-by-step if relevant]**

**Conclusion** (100–150 words)
- Summary of key takeaway
- CTA: [what do you want the reader to do next?]

**Internal links to suggest:** [2–3 pages on the site this article could link to]
```

**CHECKPOINT:** Present outline. Get approval before writing.

---

## Phase 3 — Write the Article

Write the full article following the approved outline.

**Formatting rules:**
- H1: exactly one, contains the primary keyword
- H2s: 3–6 per article, contain secondary keywords naturally
- H3s: use for sub-sections, numbered lists, or step-by-step breakdowns
- Paragraphs: max 4 sentences; 2–3 sentence paragraphs are ideal for web
- First paragraph: includes primary keyword within first 100 words
- Bold: use for key terms or important phrases (max 1 per paragraph)
- Images: note `[IMAGE: descriptive alt text with keyword]` where images should go

**Writing quality rules:**
- Use active voice throughout
- Cite specific data/statistics with sources (even if hypothetical for drafts)
- Include a real example, case study, or story in at least one H2 section
- Use "you" to speak directly to the reader
- No filler phrases: "It's important to note...", "In conclusion...", "As we can see..."

---

## Phase 4 — SEO Checklist

After writing, run through this checklist and note any gaps:

```
SEO Checklist:
[ ] H1 contains primary keyword (exact or natural variation)
[ ] Primary keyword appears in first 100 words
[ ] Meta description: 150–160 chars, includes keyword, has hook
[ ] H2s include secondary keywords (not stuffed — reads naturally)
[ ] Article length: [X] words (target: [Y])
[ ] At least one data point or statistic included
[ ] CTA clear in conclusion
[ ] 2–3 internal link suggestions noted
[ ] Alt text noted for all image placeholders
[ ] No keyword stuffing — primary keyword appears [N] times
```

---

## Output

Deliver in this order:
1. SEO brief (confirmed)
2. Outline (confirmed)
3. Full article with H1/H2/H3 structure
4. Meta description (separate, clearly labeled)
5. SEO checklist results
6. Internal link suggestions

Save to `outputs/content/articles/{keyword-slug}-{YYYY-MM-DD}.md`

---

## Rules

- Brief and outline are NOT optional steps — they prevent wasted full-article rewrites
- Never write the article before the brief is confirmed
- If the user gives a keyword, research what the top results cover (ask them if you can't search)
- Keyword density: primary keyword 1–2% (about 1 every 100–150 words max)
- Never sacrifice readability for keyword inclusion — if it sounds stuffed, it is
