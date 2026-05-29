---
name: meeting-notes
category: ops
description: >
  Transforms a meeting transcript or rough notes into structured meeting notes with
  context, decisions made, and action items with owners and deadlines.
triggers:
  - "meeting notes"
  - "summarize this meeting"
  - "write up the meeting"
  - "action items from meeting"
  - "/meeting-notes"
workflow_signals:
  - meetings
  - standups
  - team calls
  - 1:1s
  - meeting notes
  - meeting summary
languages:
  - en
  - pt-br
---

# /meeting-notes

Turns meeting transcripts or rough notes into structured, actionable documents.

---

## Step 1 — Gather input

If the transcript or notes aren't provided, ask:

> "Paste the transcript, rough notes, or bullet points from the meeting — I'll structure them into formal notes."

---

## Step 2 — Write the meeting notes

```markdown
# Meeting Notes: {Meeting Title}

**Date:** {YYYY-MM-DD}
**Time:** {HH:MM} {timezone}
**Duration:** {X minutes}
**Attendees:** {Name (Role), Name (Role), ...}
**Facilitator:** {Name}
**Note-taker:** {Name / AI-assisted}

---

## Context

{1-2 sentences: Why was this meeting called? What was the agenda or trigger?}

---

## Key Discussion Points

### {Topic 1}
{Summary of the discussion. What was raised, debated, or explored. 3-5 sentences.}

### {Topic 2}
{Summary of the discussion.}

### {Topic 3}
{Summary of the discussion.}

---

## Decisions Made

| # | Decision | Made by | Context |
|---|----------|---------|---------|
| 1 | {Clear statement of what was decided} | {person/group} | {Why this decision was made} |
| 2 | {Decision} | {person/group} | {Context} |

**Note:** If no decisions were made in this meeting, write "No decisions made — this was a working session."

---

## Action Items

| # | Action | Owner | Due Date | Priority |
|---|--------|-------|----------|----------|
| 1 | {Specific, verb-first task} | {Name} | {YYYY-MM-DD or "Next meeting"} | High/Med/Low |
| 2 | {Action} | {Name} | {date} | |
| 3 | {Action} | {Name} | {date} | |

---

## Parking Lot

{Topics that came up but weren't addressed — to revisit in a future meeting.}
- {Item}
- {Item}

---

## Next Meeting

**When:** {date / TBD}
**Agenda items already identified:**
- {Item}
```

---

## Step 3 — Format for sharing

After the notes, ask:
> "Want this formatted for Slack/email (shorter version) or as a wiki page?"

---

## Rules
- Action items must be verb-first and specific: "Send proposal to client X by Friday" not "Proposal"
- Every action item needs an owner — "team" is not an owner
- Decisions section: if something was discussed but not decided, it goes in Parking Lot, not Decisions
- Don't editorialize — write what was said and decided, not your opinion of whether it was right
- If the transcript has contradictions, flag them: "[Note: There was disagreement on this point — confirm with attendees]"
- Save to `wiki/Areas/{team-or-project}/meeting-{YYYY-MM-DD}.md`
