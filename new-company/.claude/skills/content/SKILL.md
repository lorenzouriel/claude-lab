---
name: content
description: >
  Content creation and management hub. Routes to specialized sub-skills for writing,
  humanizing, planning, scheduling, and SEO. Trigger on: "write copy",
  "content plan", "schedule post", "humanize this", "SEO",
  "content planner", "plan my week", "buffer", "rewrite", "headline", "CTA copy".
---

# Content — Content Creation & Management

Orchestrator for all content-related tasks. Routes to the right sub-skill based on your request.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/content buffer` | `buffer/SKILL.md` | "schedule post", "publish to buffer", "queue this", "social scheduling" |
| `/content plan` | `content-planner/SKILL.md` | "content plan", "plan my week", "7-day plan", "what should I post", "cross-platform plan" |
| `/content copy` | `copywriting/SKILL.md` | "write copy", "rewrite this page", "headline help", "CTA copy", "marketing copy", "landing page copy" |
| `/content humanize` | `humanizer/SKILL.md` | "humanize this", "make this sound human", "remove AI tone", "scrub AI tells", "rewrite naturally" |
| `/content seo` | `seo/SKILL.md` | "SEO", "keyword research", "rank higher", "on-page SEO", "GEO" |
