---
name: content-workflow
category: custom
description: "End-to-end content pipeline — from topic to ready-to-approve batch. Handles 3 topic-sourcing modes (direct idea, backlog, guided brainstorm). Drafts the Substack article first, waits for approval, then generates all social adaptations. Humanizes everything before presenting."
status: active
custom: true
---

# /content-workflow — Weekly Content Pipeline

Before anything else, read:
- `_memory/preferences.md` — voice, tone, what to avoid
- `_memory/company.md` — business context and channels
- `identity/design-guide.md` — if any visual reference is needed

---

## Phase 0 — Pillar + Topic Intake

### Step 1: Which pillar?

Ask (if not already stated):

> "Which pillar is this for?
> (a) Architecture & Fundamentals
> (b) Open Source Tool or Project
> (c) Reflection"

One at a time. If the user wants to continue with more after the first, they'll say so.

### Step 2: Topic sourcing — detect mode automatically

**Mode A — Direct idea** (user says "write about X"):
- Accept the topic as-is. Ask one clarifying question only if the angle is genuinely unclear:
  > "What's the core tension or insight you want the reader to leave with?"

**Mode B — Backlog pick** (user says "pick from backlog" or doesn't have a topic):
- Read `data/content-backlog.md` if it exists.
- If the file exists, present the top 3 most relevant ideas for the chosen pillar and ask which one.
- If the file doesn't exist yet, say:
  > "No backlog file found. Create `data/content-backlog.md` with your topic ideas, one per line with the pillar tag — e.g.: `[Architecture] Medallion architecture trade-offs`. Then come back and I'll pick from it."
- Do not proceed until the user provides a topic.

**Mode C — Guided brainstorm** (user has a rough trigger: a project, a tool, an event, a feeling):
- Ask: > "What's the trigger? Give me the raw material — a repo link, a tool name, a situation at work, a tweet you saw, anything."
- From the trigger, derive 2–3 possible angles. Present them:
  > "Three angles for this pillar:
  > (a) [Angle 1 — what it is, one line]
  > (b) [Angle 2]
  > (c) [Angle 3]
  > Which fits, or do you want to combine/redirect?"
- Confirm the angle before writing.

---

## Phase 1 — Substack Draft

Write the full article based on the pillar type:

### Architecture & Fundamentals
- Structure: Problem → Why it matters → The architecture/concept → Real-world pattern → Lessons/trade-offs
- Tone: Practitioner talking to peers. No definitions of what a database is.
- Length: 800–1,500 words. Include diagrams as ASCII or describe them as "Figure X: [caption]".
- Code blocks: always real, runnable, realistic (not placeholder `your_table_name` style).
- Language: English.

### Open Source Tool or Project
- Structure: Problem that existed → What the tool/project is → How it works (internals or workflow) → How to use it → When not to use it
- Include: repo link if applicable, install command, minimal working example.
- Tone: honest — if it has trade-offs, say so. Not a press release.
- Length: 600–1,200 words.
- Language: English.

### Reflection
- Structure: Situation → What happened / what I did → What I realized → What I'd do differently or what this means
- Tone: First-person, narrative, honest about struggles. No corporate lessons-learned format.
- Length: 500–900 words.
- No code unless it directly serves the story.
- Language: English.

---

## Phase 2 — Draft Approval

Present the full Substack draft. Then stop and ask:

> "Draft ready. Read it and tell me:
> — Approve as-is
> — Approve with changes (describe them)
> — Restart with a different angle"

Do not generate social adaptations until the draft is approved.
Apply any requested changes, then confirm before moving to Phase 3.

---

## Phase 3 — Social Adaptations

Once the Substack draft is approved, generate all social pieces in sequence:

### LinkedIn (PT-BR)

Format: short-form post, practitioner tone, direct.

Structure:
```
[Opening line — the pain or the hook. One sentence. No "I'm excited to share".]

[1–2 sentences expanding the problem or the situation.]

[The breakdown — use → arrow list, 3–5 items max]
→ Item
→ Item
→ Item

[Closing line — a quiet CTA, an open question, or a link with context]

[Link if applicable]
```

Rules:
- PT-BR only
- No emoji spam — one at most, only if natural
- No hashtags unless the user asks

### Instagram (PT-BR)

If the topic suits a carousel (concept explanation, step-by-step, comparison):
- Write slide-by-slide: Slide 1 (hook), Slides 2–6 (content), Last slide (CTA / save prompt)
- Each slide: headline + 1–3 supporting lines
- Caption: 2–3 sentence opener + "Slide through →"

If it suits a single post (reflection, announcement, quote):
- Caption only: hook → 2–3 lines → quiet CTA

Language: PT-BR.

### YouTube / Shorts Script (if applicable)

Ask first:
> "Does this topic work as a video? (yes / no / short only)"

If yes — full script:
```
[HOOK — 0:00–0:15]
What the viewer will get. First 15 seconds must earn the rest.

[BODY — 0:15–end]
Section by section, narrated. Include B-roll notes in [brackets].

[CTA — last 20 seconds]
Subscribe / comment / link in description.
```

If shorts only:
- 45–60 second tight script. One idea, one takeaway, one CTA.

Language: English for YouTube; PT-BR for Reels/TikTok.

---

## Phase 4 — Humanize

After all pieces are generated, run every output through the `/humanizer` skill rules:

- Strip AI-isms: em dash overuse, rule-of-three, inflated symbolism, passive constructions
- No filler openers ("In today's fast-paced...", "Have you ever wondered...")
- Match Uriel's voice: direct, short sentences, narrative spine, practitioner register
- Check PT-BR pieces separately — different register than English posts

Present the humanized versions for final review.

---

## Phase 5 — Save and Queue

Save all approved pieces to `outputs/content/{YYYY-MM-DD}/`:

```
outputs/content/{YYYY-MM-DD}/
├── substack-{slug}.md     ← full article
├── linkedin-{slug}.md     ← PT-BR short post
├── instagram-{slug}.md    ← caption or carousel slides
└── youtube-{slug}.md      ← script (if applicable)
```

Then ask:
> "That's one pillar done. Want to continue with a second one, or are we done for today?"

If yes — return to Phase 0, Step 1 for the next pillar.
If no — session ends.

---

## Content Backlog (optional)

If the user wants to maintain a topic backlog, create and update `data/content-backlog.md`:

```markdown
# Content Backlog

## Architecture & Fundamentals
- [ ] Medallion architecture trade-offs for small teams
- [ ] When NOT to use a data lakehouse

## Open Source Tool / Project
- [ ] Data Eyes: how the monitoring component works
- [ ] dbt vs raw SQL for analytics engineers

## Reflection
- [ ] What I learned taking over a stalled CDC project
- [ ] The DBA at 2AM story
```

Check this file at the start of Mode B sessions and mark completed items `[x]`.

---

## Rules

- Always read `_memory/preferences.md` first — voice calibration is non-negotiable
- PT-BR for LinkedIn and Instagram; English for Substack, Medium, YouTube
- One pillar per session unless the user explicitly wants more
- Never post anything that hasn't passed the humanizer check
- Approval gate between draft and social adaptations — no exceptions
- If a topic doesn't fit any pillar clearly, ask before forcing it
