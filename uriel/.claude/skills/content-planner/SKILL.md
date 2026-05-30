---
name: content-planner
category: content
description: "Weekly content planning for Uriel — generates a ready-to-approve content calendar covering 3 Substack articles, LinkedIn post, Instagram post, optional carousel, and TikTok caption. Review and approve, don't write from scratch."
triggers:
  - "plan this week's content"
  - "content plan"
  - "weekly plan"
  - "what should I post this week"
  - "/content-planner"
---

# /content-planner

Generates a full weekly content plan. Uriel's job is to review and approve — not write.

## Before starting, read:
- `_memory/strategy.md` — current priorities and angles
- `_memory/preferences.md` — voice, what to avoid
- `_memory/company.md` — audience, channels, weekly agenda

---

## Step 1 — Clarify

If the week's theme or topic is not stated, ask one question:

> "What's the main topic or angle for this week? (Or say 'pick for me' and I'll choose based on strategy.md.)"

If the user says "pick for me": choose the topic most aligned with the 90-day goal in `_memory/strategy.md`. State your pick and the reason in one line before proceeding.

---

## Step 2 — Generate the weekly plan

Produce this exact structure. Fill every section. Nothing left blank.

---

```markdown
# Content Plan — Week {YYYY-WW} ({date range})

**Theme:** {one-line description of the week's central angle}
**Repurposing chain:** Article 1 → YouTube → Short/Reel → Carousel

---

## Article 1 — Architecture / Fundamentals

**Format:** Substack + Medium cross-post
**Language:** English

**Title options (pick one or combine):**
1. {Curiosity gap: "The [thing] nobody explains about [topic]"}
2. {Direct value: "How [X] actually works — and why it matters for [Y]"}
3. {Story hook: "I spent [N] years doing [X] the wrong way. Here's what changed."}

**Angle:** {1-2 sentences: the specific point this article argues or explains}

**Hook:** {The opening 2-3 lines — problem statement or observation. No intro, no welcome.}

**Key points to cover:**
→ {Point 1}
→ {Point 2}
→ {Point 3}
→ {Point 4 if needed}

**Code/diagram to include:** {specific example, SQL snippet, architecture diagram, folder tree — or "none"}

**CTA:** {GitHub repo / newsletter subscription / coffee link / reach out for services}

**KB source to repurpose (check first):**
`C:\Users\loren\Workspace\xxx\obsidian\Uriel\KB\Articles\{most relevant path}`

**Repurposing:**
→ YouTube: [long-form walkthrough of this topic]
→ Short/Reel: [one key concept from this article in 60 seconds]
→ Carousel: [use Article 1's key points as slides — see Carousel section below]

---

## Article 2 — Open Source Tool / Project

**Format:** Substack + Medium cross-post
**Language:** English

**Tool / Project:** {name of the tool or project}

**Title options:**
1. {Tool name + what it solves: "[Tool] solves [specific problem] in [timeframe]"}
2. {Comparison: "I replaced [old approach] with [tool]. Here's what happened."}
3. {Tutorial hook: "How to set up [tool] in [N] minutes — the no-nonsense guide"}

**Angle:** {what's interesting or surprising about this tool that most articles miss}

**Hook:** {opening 2-3 lines}

**Key points to cover:**
→ {What the tool does and who it's for}
→ {Setup or installation — key steps only}
→ {Real example or use case from Uriel's work}
→ {One gotcha or limitation worth mentioning}

**Code/diagram to include:** {specific command, config file, architecture diagram}

**CTA:** {GitHub star / try it yourself / reach out if you need this set up}

**KB source to repurpose:** {path or "new — not in KB yet"}

**Repurposing:**
→ LinkedIn: [announce the project post — link to article]
→ Short/Reel: [demo of the tool in 60 seconds]

---

## Article 3 — Reflection

**Format:** Substack only
**Language:** English

**Topic:** {the experience, lesson, or observation to share}

**Title options:**
1. {Personal story: "At 23 I was managing a team and had no idea what I was doing"}
2. {Lesson learned: "The mistake I kept making with [X] — and how I stopped"}
3. {Observation: "Why [common belief in the industry] is wrong"}

**Hook:** {First 2-3 lines — specific moment, number, or detail that anchors the story}

**Personal anchor to use:** {one specific detail from Uriel's career that makes this real — not generic advice}

**Story arc:**
→ Setup: {the situation}
→ Conflict: {what went wrong or what changed}
→ Resolution: {what was learned or decided}
→ Takeaway: {the one thing the reader can apply}

**CTA:** {invite reply / connect on LinkedIn / newsletter subscription}

**Repurposing:**
→ Instagram: [quote or one-liner from the reflection as a caption]

---

## LinkedIn Post (PT-BR)

**Tied to:** Article {1 or 2 — pick the one with strongest hook}
**Goal:** Drive traffic to the article or to the GitHub repo

**Hook (line 1):** {Stop-the-scroll opener. Short. Specific. Problem or observation.}

**Body:**
{3-5 short paragraphs. Each separated by a blank line. → arrows for lists.}

**CTA:** {link to article / repo / invite to connect}

*Run through /humanizer before posting.*

---

## Instagram Post (PT-BR)

**Tied to:** {Article 3 reflection or a visual concept from Article 1}

**Hook (line 1):** {Same angle as LinkedIn but shorter and punchier}

**Body:** {3-5 punchy lines. One idea per line.}

**CTA:** {link in bio / save this / DM for [X]}

**Hashtags:** {8-10 relevant hashtags — niche + audience + topic. After CTA with blank line.}

*Run through /humanizer before posting.*

---

## Carousel (optional — LinkedIn or Instagram)

**Based on:** Article 1 key points
**Platform:** {LinkedIn or Instagram — pick based on topic}
**Format:** {N} slides

**Slide structure:**
- Slide 1 (cover): {title + hook — same as article title option 1}
- Slide 2: {Point 1 from article — one idea, one visual}
- Slide 3: {Point 2}
- Slide 4: {Point 3}
- Slide 5: {Point 4 if applicable}
- Slide 6: {Code example or diagram}
- Slide 7 (CTA): {Follow for more / link in bio / star the repo}

**Visual style:** Monochromatic. Dark background (#1A1A1A) or light (#F5F5F5). Fraunces for titles, JetBrains Mono for code labels, Inter for body. No emojis.

---

## TikTok Caption

**Tied to:** {Short/Reel from Article 1 or 2}

{100-150 words. First line mirrors the video hook.}

{3-5 hashtags: trending + niche.}

---

## Week checklist

- [ ] Article 1 written and humanized
- [ ] Article 2 written and humanized
- [ ] Article 3 written and humanized
- [ ] LinkedIn post approved
- [ ] Instagram post approved
- [ ] Carousel slides drafted (if doing)
- [ ] TikTok caption ready
- [ ] All CTAs link to correct destinations
```

---

## Step 3 — Humanize

After generating the plan, run the LinkedIn and Instagram posts through /humanizer. The articles will be humanized separately when they're written via /newsletter or /seo-article.

---

## Step 4 — Save

Save the output to:
`outputs/content-plans/week-{YYYY-WW}.md`

---

## Rules

- Every section must be filled — no "TBD" or blanks in the delivered plan
- Check the KB before inventing article topics: `C:\Users\loren\Workspace\xxx\obsidian\Uriel\KB\Articles\`
- Keep all three articles thematically connected when possible
- PT-BR for LinkedIn and Instagram. EN for articles.
- No emojis anywhere in the plan
- No em dashes — use commas, periods, or colons
- Carousel is optional — only include if there's a strong visual angle
- One CTA per piece — never two
- The plan is done when Uriel can read it top to bottom and approve or edit each piece without writing anything new
