---
name: social-media-post
category: content
description: >
  Creates platform-optimized social media posts. Decision-tree driven: picks format,
  hook formula, character limits, and hashtag strategy based on platform (Instagram,
  LinkedIn, X, TikTok). Reads brand voice and identity before writing. Offers 3 variations.
triggers:
  - "social media post"
  - "instagram post"
  - "linkedin post"
  - "twitter post"
  - "x post"
  - "tiktok caption"
  - "write a post"
  - "/social-media-post"
workflow_signals:
  - social media
  - instagram
  - linkedin
  - tiktok
  - content creation
  - posts
  - feed content
languages:
  - en
  - pt-br
---

# /social-media-post — Platform-Optimized Social Posts

Always reads brand context first. Offers 3 variations for every post.

## Before writing, read:
- `_memory/company.md` — business, ICP, what not to say
- `_memory/preferences.md` — voice, tone, what to avoid
- `identity/design-guide.md` — brand context

---

## Phase 1 — Clarify

If not already provided, ask ONE question:

> "What platform (Instagram, LinkedIn, X/Twitter, TikTok)? And what's the topic or goal of the post?"

If both are clear from context, skip straight to Phase 2.

---

## Phase 2 — Platform Decision Tree

Apply platform-specific constraints before writing:

**Instagram:**
- Caption: 2,200 char max; first 125 chars show before "more" — lead with the hook
- Hashtags: 3–10 relevant; add at end separated by blank line or in first comment
- Format: Line breaks for visual breathing room; 1–3 sentences per paragraph
- Tone: Conversational, visual-first, story-driven

**LinkedIn:**
- Caption: 3,000 char; first 210 chars show — strong opening line is essential
- Hashtags: 3–5 at end; professional terms only
- Format: Short paragraphs (1–2 sentences); line breaks between every paragraph
- Tone: Professional but human; insight or data before opinion
- Hook types: Bold claim, contrarian take, surprising statistic, personal failure

**X (Twitter):**
- Single tweet: 280 chars
- Thread: 1–25 tweets; tweet 1 is the hook, tweet 2 is the promise, final is the CTA
- No hashtags in body; 1–2 max at end if used
- Tone: Direct, opinionated, punchy

**TikTok caption:**
- 2,200 char; shown below video — supplements, doesn't repeat
- 3–5 hashtags including 1 trending
- Tone: Casual, native, matches the energy of the video

---

## Phase 3 — Hook Formula Selection

Pick the formula that fits the topic:

| Formula | Pattern | Best for |
|---|---|---|
| Problem-Agitate | Name the pain → amplify it | Selling a solution |
| Bold claim | "Most people are wrong about X" | Building authority |
| Story open | "Two years ago I [failed/learned/did]..." | Engagement, relatability |
| Data hook | "73% of [audience] [surprising fact]" | Credibility, LinkedIn |
| Question | "What if you could [desirable outcome]?" | Conversational |
| List promise | "5 things I wish I knew before [X]" | Educational content |

---

## Phase 4 — Write 3 Variations

Write three complete posts. Each variation should use a different hook formula and/or different angle on the same topic.

**Format for each variation:**
```
Variation A — [Hook type used]
---
[Full post text]

[Hashtags]
```

After the three variations, note:
```
Platform limits: ✓ (or flag any that exceed limits)
```

---

## Phase 5 — Checkpoint

Present all 3 variations. Ask:

> "Which direction resonates? I can develop any of these further or blend elements."

If the user picks one: ask if they want any tweaks before finalizing.
If they want changes: apply and re-present just the modified version (not all 3 again).

---

## Output

Save final approved post to `outputs/content/posts/{platform}-{topic-slug}-{YYYY-MM-DD}.md` with the post text, platform, and hashtag block clearly separated.

---

## Rules

- Never exceed platform character limits — count before delivering
- First line is always the hook — never start with "I" or the company name
- Hashtags never go in the middle of text — only at end or first comment
- Read `_memory/preferences.md` — if there are forbidden phrases or words, avoid them in every variation
- Never ask which platform twice if the user already said it
