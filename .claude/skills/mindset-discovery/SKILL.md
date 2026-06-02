---
name: mindset-discovery
description: >
  Meta-skills that change how Claude operates or researches. Covers compressed
  response mode, multi-source research briefs, critical thinking pressure-testing,
  and mid-conversation strategic resets. These are not domain skills — they adjust
  Claude's behavior or reasoning posture.
  Triggers on: "caveman", "compress responses", "short mode", "terse mode",
  "research this topic", "last 30 days", "what's happening with", "what are people saying",
  "sycophancy", "pressure test this", "argue against this", "find the flaw",
  "take a step back", "step back", "zoom out", "bigger picture", "sanity check",
  "are we on track", "are we overthinking", "forest for the trees".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - WebSearch
  - Agent
---

# Mindset & Discovery Skill — Orchestrator

> Routes to 4 meta-skills that change Claude's operating mode or research posture.
> These skills work on the conversation itself — not on producing domain artifacts.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/mindset caveman` | `caveman/SKILL.md` | "caveman mode", "compress responses", "short mode", "terse mode", "cut token usage", "ultra-compressed", "wenyan", "caveman lite/full/ultra" |
| `/mindset research` | `last-30-days/SKILL.md` | "research [topic]", "last 30 days on [topic]", "what's happening with [topic]", "what are people saying about", "find me info on", "run last-30-days", "competitor research", "trend discovery", "tool comparison" |
| `/mindset sycophancy` | `sycophancy/SKILL.md` | "pressure test this", "argue against this", "find the flaw", "steelman the opposite", "what am I missing", "challenge this", "be critical", "poke holes", "devil's advocate" |
| `/mindset step-back` | `take-a-step-back/SKILL.md` | "take a step back", "step back", "zoom out", "bigger picture", "sanity check", "are we on track", "are we overthinking", "forest for the trees", "let's pause", "are we missing something" |

## Sub-Skill Capabilities

### `caveman` — Compressed Response Mode
Cuts output tokens ~75% while preserving technical accuracy. Five intensity levels:
`lite` (light compression), `full` (standard), `ultra` (maximum), `wenyan-lite`, `wenyan` (classical Chinese compression style).
Includes sub-modes for commit messages, code review output, file compression, and session token stats.

**Use when:** responses are too long, token usage needs cutting, or you want dense technical output without filler.

### `last-30-days` — Multi-Source Research Brief
Investigates any topic across Reddit, Hacker News, the web, and X/Twitter (via Grok) over the past 30 days. Returns a synthesized briefing with real citations and engagement data, saved as a markdown file.

**Use when:** researching a topic, competitor, tool, or trend — and you want what people are actually saying right now, not a generic overview.

### `sycophancy` — Critical Thinking Partner
Constructive disagreement as the default mode. Finds untested assumptions, argues the opposing case, and holds its position unless given new evidence or reasoning. Does not validate — it interrogates.

**Use when:** pressure-testing an idea, decision, plan, or interpretation before committing to it.

### `take-a-step-back` — Strategic Reset
Mid-conversation reflection that zooms out from implementation details to check direction. Not a summary — a genuine reassessment of whether the right problem is being solved, the right framing is in place, and the conversation is on track.

**Use when:** the conversation has gone deep on details without a strategic check-in, progress is stalling, or something feels off but it's not clear what.

## Routing Note

These skills have no shared context-gathering protocol — each activates on a single intent signal. If the trigger phrase is present, route immediately without collecting additional inputs first.

The exception: `last-30-days` requires a topic. If none is given, ask: "What topic should I research?"
