---
name: product-manager
description: >
  The complete product manager skill suite. Covers discovery, problem framing, strategy,
  roadmapping, PRDs, user stories, SaaS finance metrics, pricing, acquisition channels,
  feature investment, workshops, and executive onboarding. Routes to the right sub-skill
  based on the PM task.
  Triggers on: "discovery", "customer interview", "jobs to be done", "JTBD", "problem statement",
  "opportunity solution tree", "OST", "customer journey map", "positioning statement",
  "product strategy", "roadmap", "PRD", "product requirements", "user story", "acceptance criteria",
  "epic breakdown", "story splitting", "storyboard", "user story map", "company research",
  "SaaS metrics", "MRR", "ARR", "churn", "NRR", "CAC", "LTV", "unit economics", "Rule of 40",
  "pricing", "acquisition channel", "feature investment", "feature ROI",
  "workshop facilitation", "executive onboarding", "CPO onboarding", "30-60-90 plan",
  "business health", "finance metrics".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - WebSearch
  - Agent
---

# Product Manager Skill — Orchestrator

> Routes to 24 specialized sub-skills across 5 domains: Discovery & Research,
> Problem Framing & Strategy, PM Artifacts, Finance & Business Metrics, and
> Facilitation & Leadership. Sub-skills do the work — this file routes and delegates.

## Command Router

### Discovery & Research

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm discovery` | `discovery-process/SKILL.md` | "run a discovery", "discovery cycle", "validate a problem", "discovery from scratch", "hypothesis to solution" |
| `/pm interview-prep` | `discovery-interview-prep/SKILL.md` | "prepare customer interviews", "discovery interview plan", "interview methodology", "who should I interview", "customer interview guide" |
| `/pm jtbd` | `jobs-to-be-done/SKILL.md` | "jobs to be done", "JTBD", "what is the customer trying to do", "unmet needs", "customer pains and gains" |
| `/pm company-research` | `company-research/SKILL.md` | "company research", "research this company", "competitive analysis", "company profile", "exec quotes", "prepare for interview" |

### Problem Framing & Strategy

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm problem-statement` | `problem-statement/SKILL.md` | "write a problem statement", "frame the problem", "who is blocked and why", "user-centered problem" |
| `/pm ost` | `opportunity-solution-tree/SKILL.md` | "opportunity solution tree", "OST", "frame a stakeholder request", "opportunities from outcome", "move from request to problem" |
| `/pm journey-map` | `customer-journey-map/SKILL.md` | "customer journey map", "journey map", "map the customer experience", "touchpoints", "stages and emotions" |
| `/pm positioning` | `positioning-statement/SKILL.md` | "positioning statement", "Geoffrey Moore positioning", "who we serve and why", "product positioning", "value proposition statement" |
| `/pm strategy` | `product-strategy-session/SKILL.md` | "product strategy session", "end-to-end strategy", "strategy before execution", "validated product direction" |
| `/pm roadmap` | `roadmap-planning/SKILL.md` | "roadmap planning", "strategic roadmap", "prioritize initiatives", "release plan", "sequencing epics" |

### PM Artifacts

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm prd` | `prd-development/SKILL.md` | "write a PRD", "product requirements document", "engineering handoff", "requirements doc", "PRD from discovery notes" |
| `/pm user-story` | `user-story/SKILL.md` | "user story", "write a user story", "acceptance criteria", "Gherkin", "as a user I want", "story format" |
| `/pm story-map` | `user-story-mapping/SKILL.md` | "user story map", "story mapping", "activities and steps", "MVP slice", "release slices", "backlog from journey" |
| `/pm epic-breakdown` | `epic-breakdown-advisor/SKILL.md` | "epic breakdown", "split this epic", "story splitting", "too large to estimate", "Humanizing Work patterns", "vertical slices" |
| `/pm storyboard` | `storyboard/SKILL.md` | "storyboard", "6-frame storyboard", "product narrative", "user journey story", "concept alignment", "pitch a feature" |

### Finance & Business Metrics

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm health` | `business-health-diagnostic/SKILL.md` | "business health", "SaaS health scorecard", "business review", "diagnose my SaaS", "board prep metrics", "fundraising metrics" |
| `/pm revenue-metrics` | `saas-revenue-growth-metrics/SKILL.md` | "MRR", "ARR", "churn rate", "NRR", "net revenue retention", "revenue metrics", "product-market fit signals", "expansion MRR" |
| `/pm unit-economics` | `saas-economics-efficiency-metrics/SKILL.md` | "unit economics", "CAC", "LTV", "payback period", "Rule of 40", "burn rate", "capital efficiency", "magic number" |
| `/pm metrics-ref` | `finance-metrics-quickref/SKILL.md` | "metric formula", "quick metric lookup", "what is the formula for", "benchmark for", "SaaS metric definition" |
| `/pm pricing` | `finance-based-pricing-advisor/SKILL.md` | "pricing change", "price increase", "new pricing tier", "discount impact", "ARPU impact", "pricing go/no-go" |
| `/pm channel` | `acquisition-channel-advisor/SKILL.md` | "acquisition channel", "scale this channel", "CAC payback", "channel unit economics", "kill this channel", "channel quality" |
| `/pm feature-investment` | `feature-investment-advisor/SKILL.md` | "feature ROI", "should I build this", "feature investment", "revenue impact of feature", "build vs don't build", "prioritization math" |

### Facilitation & Leadership

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/pm workshop` | `workshop-facilitation/SKILL.md` | "facilitate a workshop", "workshop session", "guided session", "step-by-step facilitation", "interactive PM session" |
| `/pm onboarding` | `executive-onboarding-playbook/SKILL.md` | "executive onboarding", "CPO onboarding", "VP product first 90 days", "30-60-90 plan", "new product leadership role", "starting a CPO role" |

## Context-Gathering Protocol

Before invoking ANY sub-skill, collect:

1. **Company/product stage** — Early-stage, growth, or enterprise? B2B or B2C?
2. **Role context** — IC PM, lead PM, head of product, CPO?
3. **Specific artifact or decision** — What does the user need to produce or decide?

For finance sub-skills, also ask which metrics are already available vs. unknown.
For discovery sub-skills, ask what is already known about the problem space.

## Routing Decision

If the request names a **specific framework or artifact** (PRD, OST, JTBD, storyboard) → route to that sub-skill directly.

If the request describes a **workflow spanning multiple steps** (e.g., "strategy before execution", "discovery cycle", "roadmap planning") → route to the relevant workflow sub-skill (`discovery-process`, `product-strategy-session`, `roadmap-planning`) which orchestrates the other skills internally.

If the request is about **finance or metrics** and doesn't need deep analysis → use `finance-metrics-quickref`. For decision-making use cases → use the specific advisor (`pricing`, `channel`, `feature-investment`, `health`).

If ambiguous, ask:
> "What's the PM task? Discovery, problem framing, an artifact (PRD/story/storyboard), metrics, or strategy?"

## Quality Gates

Every sub-skill output MUST pass before delivery:

1. **Problem before solution** — Discovery and framing sub-skills must align on the problem statement before generating solutions or recommendations.
2. **No invented metrics** — Finance sub-skills must mark unavailable inputs as `[INPUT NEEDED]` rather than assuming numbers.
3. **User-centered framing** — Stories, PRDs, and journey maps must be framed around user outcomes, not feature requests or technical tasks.
