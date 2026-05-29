---
name: sop-writer
category: ops
description: >
  Creates a Standard Operating Procedure (SOP) document. Purpose, trigger, roles,
  step-by-step process, exceptions, and related documents. Turns recurring
  workflows into repeatable, delegatable processes.
triggers:
  - "write an SOP"
  - "standard operating procedure"
  - "document this process"
  - "process documentation"
  - "playbook"
  - "/sop-writer"
workflow_signals:
  - sop
  - processes
  - procedures
  - documentation
  - playbook
  - process documentation
languages:
  - en
  - pt-br
---

# /sop-writer

Creates SOPs that make any recurring workflow repeatable by anyone on the team.

## Before writing, read:
- `_memory/company.md` — team roles, tools used, how the business operates

---

## Step 1 — Gather input

Ask in one question if not provided:

> "Describe the process — what triggers it, who does it, and what the steps are. Even rough is fine."

---

## Step 2 — Write the SOP

```markdown
# SOP: {Process Name}

**Version:** 1.0
**Owner:** {Name / Role}
**Last Updated:** {YYYY-MM-DD}
**Review Date:** {YYYY-MM-DD} *(recommend reviewing every 6 months)*
**Status:** Active

---

## Purpose

{One sentence: What does this process accomplish and why does it exist?}

Example: "Ensures new client onboarding is completed consistently within 3 business days of contract signing."

---

## Scope

**Applies to:** {Who follows this SOP — e.g., "All account managers"}
**Does NOT apply to:** {Exclusions if any}

---

## Trigger

**This process starts when:**
{The specific event that kicks it off — e.g., "A new contract is signed in DocuSign" or "A customer submits a support ticket tagged 'billing'"}

---

## Roles & Responsibilities

| Role | Responsibility in this process |
|------|-------------------------------|
| {Role 1} | {What they do — specific actions} |
| {Role 2} | {What they do} |
| {Role 3 / Tool} | {Automated action or tool used} |

---

## Prerequisites

Before starting this process, ensure:
- [ ] {Requirement — e.g., "Access to CRM is granted"}
- [ ] {Another prerequisite}

---

## Process Steps

### Phase 1: {Phase name}

**Step 1.1 — {Action}**
- **Who:** {Role}
- **When:** {Timing — e.g., "Within 1 hour of trigger"}
- **How:** {Detailed instructions — specific, not vague}
- **Using:** {Tool, template, or system — link if possible}
- **Output:** {What's produced — e.g., "Welcome email sent, CRM record updated"}

**Step 1.2 — {Action}**
- **Who:** {Role}
- **When:** {Timing}
- **How:** {Instructions}
- **Output:** {Output}

---

### Phase 2: {Phase name}

**Step 2.1 — {Action}**
[Same structure]

---

## Decision Points

| Situation | Action |
|-----------|--------|
| {If X happens} | {Do Y — e.g., "Escalate to manager, do not proceed"} |
| {If Y is missing} | {Do Z} |

---

## Exceptions & Edge Cases

| Exception | How to Handle |
|-----------|--------------|
| {e.g., Client is in a different timezone} | {Adjust communication timing, note in CRM} |
| {Another edge case} | {Handling} |

---

## Tools & Templates

| Tool / Template | Purpose | Link / Location |
|-----------------|---------|-----------------|
| {CRM} | {Track client status} | {URL or path} |
| {Template name} | {Used in Step X} | {wiki/Resources/templates/} |

---

## Quality Checks

Before marking this process complete, verify:
- [ ] {Checklist item — e.g., "Client received welcome email and confirmed receipt"}
- [ ] {Another check}
- [ ] Process logged in {system}

---

## Related Documents

- {Link to related SOP or template}
- {Wiki page with context}

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | {date} | {name} | Initial version |
```

---

## Rules
- Steps must be specific enough for someone unfamiliar with the process to follow alone
- Every step must have an owner — "team" is not an owner
- Decision Points section is required — every real process has "what if" scenarios
- Quality Checks are the last gate — they prevent the process from "completing" without actually being done
- Save to `wiki/Resources/sops/{process-name}-sop.md`
