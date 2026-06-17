---
name: open
description: >
  Opens a work session by loading the business memory (company, preferences, strategy, identity)
  and returns a short summary to the user. Use when the user says "open",
  "start the day", "/open", or on the first turn of a session after /install.
---

# /open - Start Session

Short and direct. The goal is to load context and return a one-sentence synthesis so the user can start working.

## Steps

1. Read, if they exist:
   - `memory/company.md`
   - `memory/preferences.md`
   - `memory/strategy.md`
   - `brain/3-resources/identity/design-guide.md` (only to know whether it is filled or blank)
2. If a required memory file is empty, say:
   > "I saw that `memory/<file>.md` has not been filled in yet. Do you want to run `/install` now?"
3. If the files have content, respond in this format:

```
[Business name] - [what it does in 5-8 words]
Current focus: [one line from strategy]
Style: [one short line from preferences/design]

Ready. What are we doing?
```

## Rules

- Do not list which files were read. Do not confirm reading. Just use the context.
- If there is no strategy, use: "Current focus: not defined yet."
- If there is no visual identity, do not mention it unless the task is visual.
- Do not ask questions beyond "what are we doing?"
