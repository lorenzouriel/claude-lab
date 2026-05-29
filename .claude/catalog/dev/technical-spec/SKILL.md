---
name: technical-spec
category: dev
description: >
  Writes a technical specification document. Covers problem, proposed solution,
  architecture, implementation plan, trade-offs, and open questions.
  Used before implementation to align the team.
triggers:
  - "write a spec"
  - "technical spec"
  - "technical specification"
  - "write an RFC"
  - "design doc"
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

# /technical-spec

Writes technical specification documents that align teams before implementation starts.

---

## Step 1 — Gather context

If not provided, ask in one question:

> "What problem does this spec address, and do you have a solution in mind or are we still exploring options?"

---

## Step 2 — Write the spec

````markdown
# Technical Spec: {Feature / System Name}

**Author:** {name}
**Date:** {YYYY-MM-DD}
**Status:** Draft / In Review / Accepted / Superseded
**Reviewers:** {list if known}

---

## Summary

{2-3 sentences: what this spec is about and what decision it asks reviewers to make or confirm.}

---

## Problem

### Background

{Context. What situation led to this spec? What's the current state of the system?}

### Problem Statement

{The specific problem to solve. Be precise — not "the system is slow" but "the checkout API takes >5s for users with >100 items in cart."}

### Goals

- {What we want to achieve}
- {Another goal}

### Non-Goals

- {What we are explicitly NOT trying to solve with this change}

---

## Proposed Solution

### Overview

{High-level description of the approach in 2-4 sentences.}

### Architecture

```
[Component A] → [Component B] → [Storage]
      ↓
[External API]
```

### Key Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| {name} | {what it does} | {tech} |

### Data Model

{Schema changes, new tables/collections, or data structures. Use code blocks.}

### API Changes

{New or modified endpoints. Reference the api-documentation skill format.}

### Implementation Plan

| Phase | Tasks | Estimated Effort |
|-------|-------|-----------------|
| 1 | {Tasks} | {S / M / L} |
| 2 | {Tasks} | {S / M / L} |

---

## Alternative Approaches

### Option A: {Name} ← Recommended

{Description}

**Pros:** {benefit 1}, {benefit 2}
**Cons:** {trade-off 1}

### Option B: {Name}

{Description}

**Why not recommended:** {reason}

---

## Trade-offs and Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| {Risk description} | Low/Med/High | Low/Med/High | {How to handle} |

---

## Dependencies

- {External system or team this depends on}
- {Library or service required}

---

## Testing Strategy

- Unit tests: {what to cover}
- Integration tests: {what to cover}
- Load/performance tests: {if applicable}
- Rollback plan: {how to revert if issues arise}

---

## Rollout Plan

- [ ] Feature flag / gradual rollout? {Yes — roll out to X% first / No — full deploy}
- [ ] Monitoring: {what metrics to watch}
- [ ] Definition of done: {when is this considered shipped}

---

## Open Questions

| Question | Owner | Due |
|----------|-------|-----|
| {Question that needs answering before implementation} | {who} | {date} |

---

## Appendix

{Supporting diagrams, external links, related specs.}
````

---

## Rules
- "Non-Goals" section is required — it prevents scope creep
- Open Questions must have an owner — questions without owners don't get answered
- Alternatives section is required — document why the rejected approach wasn't chosen
- Save to `wiki/Resources/{spec-name}-spec.md` for team reference
