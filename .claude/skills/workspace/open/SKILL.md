---
name: open
description: >
  Opens a work session by loading business memory (company, preferences, strategy,
  identity) and returning a short summary. Use at the start of every session, when
  the user says "open", "start the day", or "/open".
---

# /open — Session Opener

Short and direct. Goal: load context and return a one-line summary so the user can start working.

## Workflow

1. Read in order:
   - `_memory/company.md` — who the company is, what it does
   - `_memory/preferences.md` — voice, tone, what to avoid
   - `_memory/strategy.md` — current focus and priorities
   - `identity/design-guide.md` — only to check if filled or blank

2. If any of the first three is blank (still a placeholder), respond:
   > "I see `_memory/{file}.md` hasn't been filled in yet. Want to go through setup now?"
   And stop.

3. If everything is filled, return ONE short message:

```
{company name} — {what it does in 5-8 words}
Current focus: {top priority from strategy, one sentence}
Tone: {3-4 word voice summary}

Ready. What are we working on?
```

4. Do not list which files were read. Do not confirm the reading. Just use the context.

## Rules

- Response fits in 5 lines
- No questions beyond "what are we working on?"
- If `identity/design-guide.md` is blank, don't mention it — only becomes a problem when a visual skill runs
