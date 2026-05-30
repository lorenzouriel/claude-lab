---
name: sop-writer
category: ops
description: >
  Creates Standard Operating Procedure (SOP) documents. Trigger-based structure with
  roles, step-by-step process (Who/When/How/Output per step), decision points, quality
  checks, and exception handling. Validates completeness before delivery.
triggers:
  - "sop"
  - "standard operating procedure"
  - "process document"
  - "playbook"
  - "how-to guide"
  - "write a process"
  - "/sop-writer"
workflow_signals:
  - sop
  - processes
  - procedures
  - playbook
  - documentation
  - process design
languages:
  - en
  - pt-br
---

# /sop-writer — Standard Operating Procedure

Trigger-based process documentation. Every step has an owner and an output.

---

## Phase 1 — Process Scoping

Before writing, ask targeted questions if the information is missing:

1. **What triggers this process?** — What event or condition starts it? (New client onboarded, invoice received, support ticket escalated)
2. **What's the end state?** — How do you know it's done?
3. **Who's involved?** — List roles (not names) who touch this process
4. **How often does this happen?** — Frequency and volume context
5. **What tools or systems are used?**
6. **What can go wrong?** — Common exceptions or failure modes

---

## Phase 2 — Generate SOP

```markdown
# SOP: [Process Name]

**SOP ID:** [SOP-XXX]
**Version:** 1.0
**Last updated:** [YYYY-MM-DD]
**Owner:** [Role responsible for this SOP]
**Approved by:** [Role or name]

---

## Purpose

[1–2 sentences: what this process achieves and why it exists]

---

## Scope

**Applies to:** [Which team, system, or type of request this covers]
**Does NOT apply to:** [Exclusions]
**Frequency:** [Daily / Weekly / Per event / As needed]

---

## Trigger

**This process starts when:**
[Specific event — "A new client signs a contract in HubSpot" / "An invoice is received from a vendor" / "A user submits a support ticket tagged Urgent"]

**Initiated by:** [Role]

---

## Roles & Responsibilities

| Role | Responsibility in this process |
|---|---|
| [Role A] | [What they own in this process] |
| [Role B] | [What they own] |
| [External / system] | [What the system does automatically] |

---

## Process Steps

### Step 1 — [Step name]

| Field | Detail |
|---|---|
| **Who** | [Role] |
| **When** | [Within X hours of trigger / At the same time as Step 2 / After Step N is complete] |
| **How** | [Specific instructions — tool, action, inputs needed] |
| **Output** | [What is produced — artifact, status change, notification sent] |

**Decision point:**
```
If [condition A] → proceed to Step 2
If [condition B] → go to Exception: [Name]
```

---

### Step 2 — [Step name]

[Same structure]

---

[Continue for all steps...]

---

## Quality Checks

Before marking this process complete, verify:
- [ ] [Specific check — "Invoice is in accounting system with correct GL code"]
- [ ] [Another check]
- [ ] [Notification sent to relevant party]

---

## Exceptions & Edge Cases

### Exception: [Name]

**When it happens:** [Condition]
**Who handles it:** [Role]
**What to do:**
1. [Step]
2. [Step]
**Escalate to:** [Role / Manager] if [condition]

---

## Tools & Systems

| Tool | Used in step(s) | Purpose |
|---|---|---|
| [Tool name] | Step 1, 3 | [What it does in this process] |

---

## Related Documents

- [Link to related SOP, template, or form]

---

## Revision History

| Version | Date | Changed by | Summary |
|---|---|---|---|
| 1.0 | [Date] | [Name] | Initial version |
```

---

## Phase 3 — Completeness Check

After generating, verify:
```
SOP Completeness Check:
[ ] Every step has a named role (not "someone" or "the team")
[ ] Every step has a clear output / artifact
[ ] Trigger is specific — not "when needed"
[ ] At least one exception or edge case documented
[ ] Quality checks are verifiable (yes/no), not vague
[ ] Tools section complete
```

Flag any gaps before delivering.

---

## Rules

- Every step must have an owner role — shared ownership means no ownership
- Outputs must be concrete: a document, a status in a system, a notification sent — not "task completed"
- Decision points must be explicit — SOPs that say "use judgment here" aren't SOPs
- Write for someone new to the role — assume nothing is obvious
- Save to `outputs/ops/sops/{sop-name}-v1-{YYYY-MM-DD}.md`
