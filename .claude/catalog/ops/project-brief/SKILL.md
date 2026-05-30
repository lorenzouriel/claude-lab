---
name: project-brief
category: ops
description: >
  Creates project kickoff documents. Phase-driven: objective → scope → deliverables
  → timeline → stakeholders → risks → success criteria. Objective must be one sentence.
  Scope must include explicit Out-of-Scope section. RACI matrix for complex projects.
triggers:
  - "project brief"
  - "project kickoff"
  - "project scope"
  - "scope document"
  - "project plan"
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

# /project-brief — Project Kickoff Document

Objective must be one sentence. Scope must include explicit Out-of-Scope items.

## Before writing, read:
- `_memory/company.md` — company context, team structure
- `_memory/strategy.md` — current priorities

---

## Phase 1 — Clarify

If not provided, ask:

> "What's the project? And what's the deadline or key milestone?"

Also confirm:
- Who's leading the project?
- Who are the key stakeholders?
- Is there a budget constraint?

---

## Phase 2 — Generate Brief

```markdown
# Project Brief: [Project Name]

**Date:** [YYYY-MM-DD]
**Project lead:** [Name]
**Status:** Kickoff / Planning / Active / On Hold

---

## Objective

[ONE sentence. Starts with an active verb. States what will be different when this project is complete.
Example: "Launch the customer portal by Q3 so users can self-serve without contacting support."]

---

## Scope

### In Scope
- [Specific deliverable or capability — not a vague area]
- [Another specific deliverable]
- [Another]

### Out of Scope
- [What this project explicitly does NOT cover — be precise]
- [Decisions deferred to a future project]
- [Responsibilities that belong elsewhere]

*Out-of-Scope is mandatory — a brief without it leads to scope creep.*

---

## Deliverables

| Deliverable | Description | Owner | Due date |
|---|---|---|---|
| [Name] | [What it is and what "done" looks like] | [Name] | [Date] |
| [Name] | | [Name] | [Date] |

---

## Timeline

| Phase | Description | Start | End |
|---|---|---|---|
| Discovery | [Research, requirements, design] | [Date] | [Date] |
| Build | [Development or execution] | [Date] | [Date] |
| Review | [QA, stakeholder review] | [Date] | [Date] |
| Launch | [Go-live or handoff] | [Date] | [Date] |

**Key milestone:** [Most important date and what must be true then]

---

## Stakeholders

| Name / Role | Involvement | Decisions they make |
|---|---|---|
| [Project lead] | Daily | [Scope, priority, resources] |
| [Sponsor / Executive] | Weekly / as needed | [Budget, escalations] |
| [Key contributor] | Daily | [Technical decisions] |
| [External / Client] | Weekly | [Approvals] |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Risk description] | High/Med/Low | High/Med/Low | [Specific action to reduce it] |

---

## Budget

**Allocated:** $[X]
**Key costs:**
- [Line item: $X]
- [Line item: $X]

---

## Success Criteria

[How will we know this project was successful? Measurable outcomes, not process compliance.]

- Outcome 1: [Specific, measurable]
- Outcome 2: [Specific, measurable]
- Outcome 3: [Optional]

---

## Dependencies

[What must be true or done before this project can complete?]
- [Dependency: who owns it, when is it needed]

---

## Open Questions

| Question | Owner | By when |
|---|---|---|
| [Question] | [Name] | [Date] |
```

---

## Rules

- Objective: one sentence, one project — if it takes more than one sentence, it's two projects
- Out-of-Scope: at least 2 items required — every project has things it's deliberately not doing
- Deliverables: "done" must be defined for each one — not "design the feature" but "approved Figma mockup with 3 screens"
- Risks: at least one mitigation per risk — listing risks without mitigations is just worry
- Success criteria must be measurable — not "users are happy" but "support tickets reduced by 30%"
- Save to `outputs/ops/projects/{project-slug}-brief-{YYYY-MM-DD}.md`
