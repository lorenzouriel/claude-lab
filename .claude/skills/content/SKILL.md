---
name: content
description: >
  The complete content creation skill suite. Covers all major social platforms
  (LinkedIn, Instagram, TikTok, X/Twitter, YouTube), newsletters, multi-platform
  content planning, and AI-tell humanizing. Routes to the right platform orchestrator
  or cross-platform skill based on the request.
  Triggers on: "linkedin", "instagram", "tiktok", "x", "twitter", "tweet", "youtube",
  "newsletter", "substack", "reel", "carousel", "post", "script", "hook",
  "content strategy", "content plan", "content calendar", "write a post",
  "write a script", "social media", "humanize this", "sounds AI", "ai tells",
  "repurpose content", "plan my week", "cross-platform", "animated video",
  "motion graphic", "motion design", "logo animation", "remotion", "make a video".
tools:
  - Read
  - Write
  - Bash
  - WebSearch
  - Edit
  - Grep
  - Glob
  - Agent
---

# Content Skill — Orchestrator

> Top-level router for all content creation. Routes platform-specific requests to
> the right platform orchestrator, and cross-platform requests to the planning or
> humanizing skills. Platform orchestrators handle their own sub-skill routing.

## Command Router

### Platform Skills

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/content linkedin` | `linkedin/SKILL.md` | "linkedin post", "linkedin comment", "linkedin strategy", "linkedin content plan", "linkedin growth", "write a linkedin post", "linkedin hook", "build linkedin presence" |
| `/content instagram` | `instagram/SKILL.md` | "instagram", "IG", "reel", "carousel", "instagram post", "instagram strategy", "reel script", "download reel", "download instagram post", "carousel slides" |
| `/content tiktok` | `tiktok/SKILL.md` | "tiktok", "tiktok script", "tiktok strategy", "tiktok hook", "viral on tiktok", "FYP", "tiktok algorithm", "write a tiktok" |
| `/content x` | `x/SKILL.md` | "x post", "tweet", "thread", "x strategy", "x content plan", "x hook", "grow on x", "twitter", "write a tweet" |
| `/content youtube` | `youtube/SKILL.md` | "youtube", "channel", "video script", "youtube seo", "thumbnail", "youtube strategy", "shorts", "youtube audit", "video ideas", "youtube analytics", "monetize" |
| `/content newsletter` | `newsletters/SKILL.md` | "newsletter", "write a newsletter", "newsletter draft", "substack", "article", "edition", "optimize for AI", "AEO", "thumbnail for article", "substack notes" |

### Production Skills

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/content video` | `video/motion-design/SKILL.md` | "animated video", "motion graphic", "logo animation", "animated intro", "animated outro", "kinetic text", "make a video from this", "remotion" |
| `/content video approved` | `video/motion-approved/SKILL.md` | "motion approved", "video approved", "finalize the video", "clean the video folder", "keep only the mp4" |

### Cross-Platform Skills

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/content plan` | `content-planner/SKILL.md` | "plan content across platforms", "weekly content calendar", "repurpose this idea", "multi-platform plan", "plan my week", "repurposing map", "content for all platforms" |
| `/content humanize` | `humanizer/SKILL.md` | "humanize this", "sounds AI", "remove AI tells", "less robotic", "make this sound human", "ai writing", "scrub this post", "humanize my content" |

## Routing Decision

If the request mentions a **specific platform** → route to that platform's orchestrator.
If the request mentions **multiple platforms** or "all platforms" → route to `content-planner`.
If the request is about **making content sound human** → route to `humanizer`.

If ambiguous (e.g., "write me a post"), ask:
> "Which platform? LinkedIn, Instagram, TikTok, X, YouTube, or a newsletter?"

## What Each Platform Orchestrator Covers

| Platform | Sub-Skills Available |
|----------|---------------------|
| **LinkedIn** | Post writer, comment drafter, content planner, content strategy |
| **Instagram** | Carousel writer, Reel script writer, visual carousel generator, content strategy, Reel downloader, image downloader |
| **TikTok** | Script writer, content strategy |
| **X** | Tweet writer, content strategy |
| **YouTube** | Audit, SEO, script, hook, thumbnail, strategy, calendar, Shorts, analytics, repurpose, monetize, competitor, metadata, ideate |
| **Newsletters** | Human writer, AEO optimization, Substack notes extractor, thumbnail generator |

## Cross-Platform Skills

### `content-planner` — Unified Weekly Planning
One theme → 4 platform-native pieces. Builds a 7-day calendar across LinkedIn, X, Instagram,
and TikTok using the 3-pillar framework (Insight 40% / Personal 30% / Reach 30%).
Produces: repurposing map, 7-day calendar, daily engagement actions, weekly readiness check.
**Use when:** planning a content week, repurposing one idea across platforms, growth sprints.

### `humanizer` — AI-Tell Scrub
Unified humanizer with auto-platform detection. Applies 30 universal scrub rules (Wikipedia
AI-writing taxonomy) + platform-specific rules on top. Three passes: SCRUB → BREAK → ADD.
Modes: forensic / strict / aesthetic / audit.
**Use when:** any AI-drafted post needs to sound human before publishing.

## Quality Gates

Every platform orchestrator enforces its own quality gates. At the top level:

1. **Platform-native output** — No copy-pasting the same text across platforms. Each platform gets format-native content.
2. **No hallucinated benchmarks** — Engagement stats, algorithm rules, and platform specs must come from the sub-skill's reference files.
3. **Human voice** — Any content that passes through `humanizer` must clear the three-pass scrub before delivery.
