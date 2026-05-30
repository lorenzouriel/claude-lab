---
name: video-script
category: content
description: >
  Writes video scripts for YouTube (long-form) and short-form (Reels, Shorts, TikTok).
  Decision-tree driven by format and goal. Hook first — always. Includes thumbnail concept,
  video description, and tags. Reads brand voice before writing.
triggers:
  - "video script"
  - "youtube script"
  - "reel script"
  - "tiktok script"
  - "shorts script"
  - "write a script"
  - "/video-script"
workflow_signals:
  - youtube
  - video
  - reels
  - shorts
  - script
  - tiktok video
  - content script
languages:
  - en
  - pt-br
---

# /video-script — YouTube & Short-Form Video Scripts

Hook first. Always. Then structure. Then call to action.

## Before writing, read:
- `_memory/company.md` — brand, audience, product
- `_memory/preferences.md` — tone, voice, what to avoid

---

## Phase 1 — Format Decision

Identify the format before writing:

| Format | Length | Platform | Pacing |
|---|---|---|---|
| YouTube long-form | 8–20 min (~1,200–3,000 words) | YouTube | Slower, educational, storytelling |
| YouTube Shorts | <60 sec (~150 words) | YouTube Shorts | Rapid, one idea, direct |
| Instagram Reels | 15–90 sec (~75–225 words) | Instagram | Fast, visual cues, musical pacing |
| TikTok | 15–60 sec (~75–150 words) | TikTok | Native, casual, trending audio |

If format is unclear, ask:

> "Is this for YouTube long-form, or short-form (Reels/Shorts/TikTok)? And roughly how long?"

---

## Phase 2 — Hook Options

The first 3–7 seconds determine if the viewer stays. Write 3 hook options before the full script:

| Hook type | Formula | Example |
|---|---|---|
| Pattern interrupt | Say something unexpected | "Stop saving money." |
| Bold claim | Promise a specific outcome | "This one habit doubled my revenue." |
| Question | Create immediate curiosity | "Why are successful people always exhausted?" |
| Story open | Drop into the middle | "Last Tuesday, a client called me furious..." |
| Problem agitation | Name the exact pain | "You've been writing your content backwards." |

**CHECKPOINT:** Present 3 hook options. Get approval before writing the full script.

---

## Phase 3 — Script Structure

**YouTube Long-Form:**

```
[HOOK] — 0:00–0:30
3 sentences maximum. The reason to watch. Promise a specific outcome.

[INTRO] — 0:30–1:30
Context: why you (the creator) are qualified to discuss this.
Preview: what the video will cover.
CTA preview: "Subscribe if you want [benefit]."

[SECTION 1: Point or Step 1] — timestamp
[Content]
Transition sentence to Section 2.

[SECTION 2: Point or Step 2] — timestamp
[Content]
Transition.

[SECTION 3] — timestamp (add more as needed)

[RECAP] — 30 sec
Summarize the 3–5 key takeaways in one sentence each.

[CTA] — final 60 sec
Primary: Subscribe / Like
Secondary: [Resource, next video, offer]
Personal close: sign-off in your brand voice
```

**Short-Form (Reels / Shorts / TikTok):**

```
[HOOK] — 0:00–0:03
One sentence. Spoken as you appear on screen. 

[SETUP] — 0:03–0:10
Context in 1–2 sentences maximum.

[PAYOFF] — 0:10–0:45
The actual content. One idea. No tangents.

[CTA] — last 3–5 sec
Simple: "Follow for more" / "Comment [word]" / "Share if..."
```

**Formatting conventions in the script:**
- `[VISUAL: description]` — note suggested cuts, B-roll, text overlays
- `[PAUSE]` — for comedic timing or emphasis
- `[TITLE CARD: text]` — text to show on screen
- Speaker lines: written in natural speech (contractions, short sentences)

---

## Phase 4 — Supporting Assets

After the script, produce:

**Thumbnail concept:**
```
Thumbnail: [Describe the visual — expression, text overlay, colors, composition]
Text on thumbnail: [Max 5 words, high contrast]
Emotional hook: [What emotion should the thumbnail trigger?]
```

**Video description (YouTube):**
```
[First 200 chars — these show in search results, must hook independently]

[Full description — 200–500 words]

Timestamps:
0:00 — Hook
0:30 — Intro
[...]

Links:
- [Resource 1]
- [Subscribe link]
- [Related video]

#Tags (10–15)
```

---

## Output

Save to `outputs/content/scripts/{platform}-{topic-slug}-{YYYY-MM-DD}.md`

---

## Rules

- Hook is always the first thing written — never start with the intro
- Short-form scripts: one idea only, no sub-topics
- All dialogue written in natural spoken language (contractions, short sentences)
- Read `_memory/preferences.md` — forbidden phrases must be purged from the script
- Thumbnail concept is not optional — it's half the click
