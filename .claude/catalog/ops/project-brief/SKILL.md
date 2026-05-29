---
name: project-brief
category: ops
description: >
  Creates a project kickoff document with objective, scope, deliverables, timeline,
  stakeholders, risks, and success criteria. Used before work begins to align everyone.
triggers:
  - "project brief"
  - "project kickoff"
  - "kickoff document"
  - "project scope"
  - "/project-brief"
workflow_signals:
  - projects
  - kickoff
  - scoping
  - project planning
  - project management
languages:
  - en
  - pt-br
---

# /project-brief

Creates project briefs that align everyone before work starts — not after.

## Before writing, read:
- `_memory/company.md` — team structure, clients if relevant
- `_memory/strategy.md` — current priorities and context

---

## Step 1 — Clarify if not stated

Ask in one question:

> "What's the project name and goal? Even rough — I'll help structure it."

---

## Step 2 — Write the brief

```markdown
# Project Brief: {Project Name}

**Date:** {YYYY-MM-DD}
**Project Lead:** {Name}
**Status:** Draft / Approved
**Version:** 1.0

---

## Overview

### Objective

{One clear sentence: What does this project accomplish and why does it matter?}

Example: "Redesign the onboarding flow to reduce time-to-first-value from 14 days to 3 days."

### Background

{2-3 sentences of context. What situation or problem triggered this project?}

---

## Scope

### In Scope
- {Specific deliverable or work item}
- {Another specific item}
- {Another}

### Out of Scope
- {Explicitly NOT included — prevents scope creep}
- {Another exclusion}

---

## Deliverables

| # | Deliverable | Format | Owner | Due Date |
|---|-------------|--------|-------|----------|
| 1 | {Specific output} | {Document / Feature / Campaign / etc.} | {Name} | {date} |
| 2 | {Deliverable} | {format} | {name} | {date} |

---

## Timeline

| Phase | Tasks | Start | End | Owner |
|-------|-------|-------|-----|-------|
| Discovery | {Research, interviews} | {date} | {date} | {name} |
| Design | {Wireframes, specs} | {date} | {date} | {name} |
| Build | {Development, production} | {date} | {date} | {name} |
| Review | {Feedback, QA} | {date} | {date} | {name} |
| Launch | {Deployment, announcement} | {date} | {date} | {name} |

**Target completion date:** {YYYY-MM-DD}

---

## Stakeholders

| Person | Role | Involvement |
|--------|------|-------------|
| {Name} | {Project Lead} | {Decision maker, daily involved} |
| {Name} | {Sponsor / Client} | {Approves deliverables, monthly check-in} |
| {Name} | {Contributor} | {Builds X, consulted on Y} |
| {Name} | {Reviewer} | {Reviews final output only} |

---

## Budget

| Item | Estimated Cost | Notes |
|------|---------------|-------|
| {Labor / hours} | {$X or X hrs} | |
| {Tools / software} | {$X} | |
| {External services} | {$X} | |
| **Total** | **{$X}** | |

**Budget approved by:** {Name} on {date}

---

## Success Criteria

| Criterion | Measurement | Target |
|-----------|------------|--------|
| {Primary goal metric} | {How measured} | {Target value} |
| {Secondary metric} | {How measured} | {Target value} |
| {Quality standard} | {How measured} | {Threshold} |

---

## Risks & Dependencies

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| {e.g., Key team member unavailable} | Medium | High | {Document all decisions, pair programming} |
| {Another risk} | Low | Medium | {mitigation} |

**Dependencies:**
- {External dependency — e.g., "Requires API from team X to be ready by Date Y"}

---

## Communication Plan

| Update type | Frequency | Format | Audience |
|-------------|-----------|--------|----------|
| Status update | Weekly | Slack message | Team |
| Milestone review | Per milestone | Meeting | Stakeholders |
| Final report | At completion | Document | All |

---

## Approvals

- [ ] Project Lead: {Name}
- [ ] Sponsor / Client: {Name}
- [ ] Budget approved: {Name}
```

---

## Rules
- Objective must be one sentence — if it needs two, the project scope is unclear
- Out of Scope section is required — vague scope is the #1 cause of project failure
- Success Criteria must be measurable — "good design" is not a criterion
- Save to `wiki/Projects/{project-name}/project-brief.md`
