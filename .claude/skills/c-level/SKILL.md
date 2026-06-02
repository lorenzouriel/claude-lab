---
name: c-level
description: >
  Founder-mode virtual executive team. 11 C-suite role advisors plus a full
  strategic sprint pipeline: office hours → strategy brief → C-suite reviews →
  boardroom deliberation → cross-model eval → decision logging → execution plan →
  decision freeze → post-mortem. Use when a founder needs expert interrogation
  from a specific C-role, a multi-role board deliberation, or end-to-end strategic
  decision support.
  Triggers on: "founder mode", "c-suite review", "CFO review", "CMO review",
  "CTO review", "CPO review", "CRO review", "CISO review", "CDO review",
  "CAIO review", "CCO review", "VPE review", "GC review", "general counsel",
  "boardroom", "board deliberation", "office hours", "strategy brief",
  "cross eval", "log decision", "execution plan", "90-day plan", "freeze decision",
  "post-mortem", "decision review", "onboard c-level", "founder question".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Agent
---

# C-Level Skill — Orchestrator

> Virtual C-suite for founders. Routes to 22 sub-skills across role reviews,
> deliberation, and decision pipeline. Use `founder-mode` as the single entry
> point for any founder question, or invoke a specific role or pipeline step directly.

## Quick Start

**Not sure where to go?** → `/c-level founder-mode` auto-routes any question to the right role or boardroom.

**First time?** → Run `/c-level onboard` first to populate company context.

---

## Command Router

### Entry Points

| Command | Sub-Skill | When to Use |
|---------|-----------|------------|
| `/c-level onboard` | `onboard/SKILL.md` | First run — populates `~/.claude/company-context.md` via founder interview |
| `/c-level founder-mode` | `founder-mode/SKILL.md` | Any founder question — auto-routes to the right C-role or boardroom |

### Pipeline: Problem Clarity

| Command | Sub-Skill | When to Use |
|---------|-----------|------------|
| `/c-level office-hours` | `office-hours/SKILL.md` | YC-style 6-question interrogation before any advice — forces clarity on problem, customer, distribution, defensibility, capital, founder fit |
| `/c-level brief` | `brief/SKILL.md` | Generate a one-page strategy brief from an office-hours intake |

### Pipeline: C-Suite Role Reviews

| Command | Sub-Skill | Interrogates |
|---------|-----------|-------------|
| `/c-level cfo` | `cfo-review/SKILL.md` | Money, unit economics, runway, dilution, capital allocation |
| `/c-level cmo` | `cmo-review/SKILL.md` | Positioning, ICP, message house, channel mix |
| `/c-level cto` | `cto-review/SKILL.md` | Architecture, tech debt, scaling cliffs, build-vs-buy |
| `/c-level cpo` | `cpo-review/SKILL.md` | Product roadmap, PMF signal, JTBD, portfolio focus |
| `/c-level cro` | `cro-review/SKILL.md` | Revenue, pipeline, win rate, NRR, ramp time |
| `/c-level ciso` | `ciso-review/SKILL.md` | Security, compliance, data risk, production access |
| `/c-level cdo` | `cdo-review/SKILL.md` | Data architecture, training data, data productization, data team |
| `/c-level caio` | `caio-review/SKILL.md` | AI model selection, risk classification, cost economics, AI hiring |
| `/c-level cco` | `cco-review/SKILL.md` | Customer retention, segmentation, CS team sizing |
| `/c-level vpe` | `vpe-review/SKILL.md` | Delivery throughput, eng hiring, team structure, production discipline |
| `/c-level gc` | `gc-review/SKILL.md` | Contracts, IP, regulatory, term sheets, employment law |

### Pipeline: Deliberation & Consensus

| Command | Sub-Skill | When to Use |
|---------|-----------|------------|
| `/c-level boardroom` | `boardroom/SKILL.md` | 6-phase multi-role deliberation across the full C-suite — outputs a board memo |
| `/c-level cross-eval` | `cross-eval/SKILL.md` | Multi-model consensus on a board memo or strategy brief (Claude + Codex + Gemini) |

### Pipeline: Decision & Execution

| Command | Sub-Skill | When to Use |
|---------|-----------|------------|
| `/c-level decide` | `decide/SKILL.md` | Log an approved decision to two-layer memory |
| `/c-level execute` | `execute/SKILL.md` | Generate a 90-day execution plan with weekly milestones, DRIs, and check-in cadence |
| `/c-level freeze` | `freeze/SKILL.md` | Lock a strategic decision for a cooldown period to prevent impulse reversal |
| `/c-level post-mortem` | `post-mortem/SKILL.md` | Retrospective on an executed decision — scored against original assumptions and dissent |

---

## Strategic Sprint Pipeline

Full end-to-end flow for a major decision:

```
1. /c-level onboard       — set company context (first time only)
2. /c-level office-hours  — clarify the problem with 6 forcing questions
3. /c-level brief         — compress intake into a one-page strategy brief
4. /c-level <role>        — interrogate from relevant C-suite perspectives
5. /c-level boardroom     — multi-role deliberation → board memo
6. /c-level cross-eval    — multi-model consensus check
7. /c-level decide        — log the approved decision to memory
8. /c-level execute       — generate 90-day plan with DRIs
9. /c-level freeze        — lock decision for cooldown period
10. /c-level post-mortem  — retrospective after execution
```

**Shortcut:** Skip to step 4–5 if the problem is already clear. Use `founder-mode` to auto-route when unsure which step or role to invoke.

---

## Routing Decision

- **Any founder question without a clear destination** → `founder-mode`
- **Specific financial concern** → `cfo`
- **Go-to-market or positioning question** → `cmo`
- **Technical architecture question** → `cto`
- **Product direction question** → `cpo`
- **Revenue or sales question** → `cro`
- **Security, compliance, or legal** → `ciso` or `gc`
- **AI-specific decision** → `caio`
- **Customer retention concern** → `cco`
- **Engineering team or delivery** → `vpe`
- **Multi-stakeholder strategic decision** → `boardroom`
- **Need a second opinion across models** → `cross-eval`

---

## Quality Gates

1. **Company context first** — Most reviews read `~/.claude/company-context.md`. Run `onboard` before using any review skills cold.
2. **Problem clarity before advice** — Run `office-hours` before `boardroom` or a role review when the problem statement is still vague.
3. **Decision logging before execution** — Always run `decide` before `execute` to ensure the approved decision is on record before generating a 90-day plan.
