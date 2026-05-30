---
name: meeting-notes
category: ops
description: >
  Transforms meeting transcripts, rough notes, or voice-to-text into structured
  meeting notes. Extracts decisions made, action items (verb-first, with owner and
  deadline), parking lot items, and context. Action items always have an owner.
triggers:
  - "meeting notes"
  - "meeting transcript"
  - "take notes"
  - "summarize meeting"
  - "meeting summary"
  - "/meeting-notes"
workflow_signals:
  - meetings
  - standups
  - team calls
  - meeting notes
  - 1:1s
  - transcription
languages:
  - en
  - pt-br
---

# /meeting-notes — Transcript → Structured Meeting Notes

Extracts decisions and action items from any format of meeting notes.

---

## Phase 1 — Input Classification

Classify the input type to calibrate extraction:

| Input type | Approach |
|---|---|
| Full transcript (with speaker names) | Extract verbatim decisions; attribute action items to speakers |
| Rough notes / bullet points | Infer structure; flag unclear ownership |
| Voice-to-text (unformatted) | Clean grammar; group by topic; ask about ownership |
| Summary already written | Restructure into standard format; don't invent new content |

If action item owners are unclear, list them with `[Owner TBD]` and flag at the end.

---

## Phase 2 — Extract Key Elements

Before writing the formatted output, extract:

1. **Meeting type** — standup / planning / retrospective / 1:1 / client call / team meeting
2. **Decisions made** — any conclusion reached that won't be re-discussed (marked as final)
3. **Action items** — specific tasks with a named owner
4. **Parking lot** — topics raised but deferred (needs a separate meeting or async)
5. **Blockers** — things preventing progress right now

---

## Phase 3 — Generate Structured Notes

```markdown
# Meeting Notes — [Meeting Title]

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM] — [HH:MM] [Timezone]
**Type:** [Standup / Planning / Retrospective / 1:1 / Client call]
**Attendees:** [Names, or roles if anonymous]
**Facilitator:** [Name if identifiable]
**Recorded by:** [Name or "AI-assisted"]

---

## Context

[1–3 sentences: Why did this meeting happen? What was the trigger or recurring cadence?]

---

## Discussion Summary

[Chronological or topic-organized summary of what was discussed.
Keep it factual — what was said, not what should have been said.
Aim for 3–7 bullets or short paragraphs, not an essay.]

---

## Decisions Made

- [Decision — stated as a fact: "We will use Stripe for payment processing"]
- [Decision — include the reasoning if it helps future recall]

*Note: Items listed here are final — they won't be reopened unless a specific condition changes.*

---

## Action Items

| Action | Owner | Due |
|---|---|---|
| [Verb-first: "Send the contract to..." / "Schedule the review for..." / "Fix the bug on..."] | [Name] | [Date or "EOW"] |
| [Another action] | [Name] | [Date] |

*All action items require an owner. If the owner is unknown, mark as [Owner TBD] — don't skip.*

---

## Parking Lot

*Topics raised but not resolved — need async discussion or a follow-up meeting:*

- [Topic] — [who should drive resolution?]
- [Topic]

---

## Next Meeting

**When:** [Date/time if scheduled]
**Agenda items carried forward:**
- [Item from parking lot or incomplete action]
```

---

## Rules

- Action items: always verb-first ("Send", "Schedule", "Review", "Fix") — not "we need to..."
- Action items without owners don't get done — flag all `[Owner TBD]` at the end
- Decisions must be stated as facts ("We decided to X") — not as discussions ("We talked about X")
- Parking lot is a first-class section — don't bury it in discussion notes
- Never attribute a statement to someone unless it's clear from the transcript
- If the transcript is unclear about a decision, write `[NEEDS CONFIRMATION: ...]`
