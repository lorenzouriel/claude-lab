---
name: technical-spec
category: dev
description: >
  Writes technical specification documents. Phase-driven: problem alignment → solution
  design → implementation plan → open questions. Non-Goals section is mandatory.
  Produces an ADR (Architecture Decision Record) format with alternatives, rationale,
  and consequences.
triggers:
  - "technical spec"
  - "tech spec"
  - "design doc"
  - "architecture doc"
  - "rfc"
  - "write a spec"
  - "/technical-spec"
workflow_signals:
  - specs
  - technical writing
  - rfcs
  - architecture docs
  - design doc
  - technical specification
languages:
  - en
  - pt-br
---

# /technical-spec — Technical Specification Document

Produces a complete technical spec. Problem section must be agreed on before solution is written.

## Before writing, read:
- `_memory/company.md` — tech stack, team structure
- `_memory/strategy.md` — current priorities and constraints

---

## Phase 1 — Problem Alignment

Before designing anything, write and confirm the problem statement:

```markdown
## Problem

### What we're trying to solve
[1–3 sentences. The actual problem, not the solution.]

### Why it matters now
[Urgency: what happens if we don't solve this? Who is affected?]

### Current state
[How does this work today? What are the pain points?]

### Success criteria
[How will we know this is solved? Measurable outcomes.]

### Non-Goals (critical — be explicit)
[What this solution deliberately does NOT solve.
This section is mandatory. If nothing is out of scope, the spec is too broad.]
```

**CHECKPOINT:** Present Phase 1 and wait for confirmation before writing the solution.

---

## Phase 2 — Solution Design

After problem confirmation:

```markdown
## Proposed Solution

### Overview
[2–4 sentences. The approach at a high level.]

### Architecture

[Diagram or description of the system components and how they interact.
For complex systems: ASCII diagram or reference to a visual-explainer diagram.]

### Implementation Plan

#### Phase 1: [Name] — [estimated time]
[Steps and deliverables]

#### Phase 2: [Name] — [estimated time]
[Steps and deliverables]

### Data Model (if applicable)

[Schema changes, new tables/fields, migration strategy]

### API Changes (if applicable)

[New endpoints, changed contracts, backwards compatibility]

### Rollout Strategy

- [ ] Feature flag controlled? [Yes: describe the flag / No]
- [ ] Rollback plan: [How do we revert if this breaks?]
- [ ] Monitoring: [What metrics/alerts will we add?]
- [ ] Comms: [Who needs to know before/after this ships?]
```

---

## Phase 3 — Alternatives Considered (ADR Format)

For each major architectural decision:

```markdown
## Alternatives Considered

### [Option A — what was chosen]
**Why chosen:** [Specific reasoning]
**Trade-off accepted:** [What we gave up]

### [Option B — rejected]
**Why rejected:** [Specific reasoning — not just "too complex"]

### [Option C — rejected]
**Why rejected:** [Specific reasoning]
```

---

## Phase 4 — Open Questions

```markdown
## Open Questions

| Question | Owner | Due by |
|---|---|---|
| [Specific question needing a decision] | [@person] | [date or milestone] |
| [Another question] | [@person] | [date or milestone] |

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [What could go wrong?] | High/Med/Low | High/Med/Low | [How we reduce it] |
```

---

## Output

Deliver the full spec in one document with all four phases. Note any assumptions made where information was missing.

**Metadata block at the top:**
```markdown
# [Feature Name] — Technical Spec

| Field | Value |
|---|---|
| **Author** | [Name] |
| **Date** | [YYYY-MM-DD] |
| **Status** | Draft / In Review / Approved |
| **Reviewers** | [Names or teams] |
| **Related** | [Links to issues, PRs, previous specs] |
```

Save to `outputs/docs/specs/{feature-slug}-spec-{YYYY-MM-DD}.md`

---

## Rules

- Non-Goals section is mandatory — spec without it is incomplete
- Problem section must be agreed on before writing the solution
- Alternatives: at least 2 must be documented with specific rejection reasoning
- Open questions must have owners — "TBD" ownership means the question won't get answered
- Avoid: "We will use X because it's better." Say why it's better for this specific context
