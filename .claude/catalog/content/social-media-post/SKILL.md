---
name: social-media-post
category: content
description: >
  Creates platform-optimized social media posts reading the company's brand voice,
  tone, and identity. Supports Instagram, LinkedIn, X (Twitter), and TikTok.
  Adapts format, length, and hook style per platform.
triggers:
  - "write a post"
  - "instagram post"
  - "linkedin post"
  - "social media post"
  - "post for instagram"
  - "post for linkedin"
  - "create a post"
  - "/social-media-post"
workflow_signals:
  - social media
  - instagram
  - linkedin
  - tiktok
  - twitter
  - posts
  - content creation
languages:
  - en
  - pt-br
---

# /social-media-post

Creates platform-optimized social media posts that match the company's brand voice and goals.

## Before writing, read:
- `_memory/company.md` — company context, audience, what we sell
- `_memory/preferences.md` — tone of voice, what to avoid
- `identity/design-guide.md` — visual style (for image prompts if needed)

---

## Step 1 — Clarify if not stated

If the user didn't specify, ask in one question:

> "Which platform — Instagram, LinkedIn, X, or TikTok? And what's the topic or goal of the post?"

---

## Step 2 — Write the post

### Instagram
- **Hook (line 1):** Stop-the-scroll. Bold statement, question, or surprising fact. Max 125 chars before "more."
- **Body:** 3-7 short paragraphs or punchy lines. One idea per paragraph. No filler.
- **CTA:** One clear action. Save, comment, share, link in bio, DM.
- **Hashtags:** 5-10 targeted. Niche + audience + topic mix. After the CTA with a line break.
- **Length:** 150-300 words for educational content. 50-100 for punchy/inspirational.

### LinkedIn
- **Hook (line 1):** Professional but human. Story opener, counterintuitive take, or strong opinion.
- **Body:** 3-5 short paragraphs. Each separated by a blank line. No walls of text.
- **CTA:** Invite discussion ("What's your take?") or soft pitch. Not hard sell.
- **Hashtags:** 3-5 max. Professional + industry + topic.
- **Emojis:** Use sparingly if the brand allows — check `_memory/preferences.md`.

### X (Twitter)
- **Single tweet:** Max 280 chars. Hook + insight + optional CTA.
- **Thread:** Hook tweet (compelling teaser) → 3-7 substance tweets → closer with CTA or summary.
- No hashtags unless trending topic.

### TikTok caption
- Short: 100-150 words max.
- Hook in the first line (mirrors the video hook).
- 3-5 hashtags: trending + niche.
- CTA: follow, comment, duet.

---

## Step 3 — Image prompt (optional)

If the user needs a visual concept, generate one image prompt in English following this format:

```
Professional [TYPE] photography of [SUBJECT],
[DETAILS], [ENVIRONMENT],
[LIGHTING] lighting, [PERSPECTIVE],
editorial quality, brand colors: [COLOR from design-guide]
```

---

## Step 4 — Offer variations

After the main post, offer:
> "Want 2 alternative angles on this — different hook or format?"

---

## Rules
- Write in the company's language (check `_memory/preferences.md`)
- Follow the tone exactly — if the example in preferences is casual, don't write formally
- Never use banned words or phrases from `_memory/preferences.md`
- Hashtags go at the end, never inline in the copy
- One CTA per post — never two
- Don't ask if the user wants variations upfront — offer after delivery
