---
name: marketing
description: >
  The complete marketing skill suite. Covers analytics tracking implementation,
  campaign performance analysis, B2B cold email outreach, marketing copywriting,
  landing page generation, and product launch strategy. Routes to the right
  sub-skill based on the task.
  Triggers on: "GA4", "Google Tag Manager", "GTM", "event tracking", "analytics setup",
  "tracking plan", "UTM", "analytics audit", "conversion tracking",
  "campaign analytics", "attribution", "ROAS", "CPA", "marketing ROI", "ad performance",
  "cold email", "cold outreach", "prospecting email", "SDR email", "sales email",
  "follow-up sequence", "email prospecting",
  "marketing copy", "homepage copy", "landing page copy", "headline", "CTA copy",
  "landing page", "product page", "one-pager", "sales page", "web presence",
  "product launch", "launch strategy", "Product Hunt", "go-to-market", "GTM plan",
  "feature release", "launch checklist", "beta launch", "early access", "waitlist".
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

# Marketing Skill — Orchestrator

> Routes to 6 specialized sub-skills covering analytics, outreach, copy, and launch.
> Sub-skills do the work — this file routes and delegates.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/marketing tracking` | `analytics-tracking/SKILL.md` | "GA4 setup", "Google Tag Manager", "GTM", "event tracking", "tracking plan", "analytics audit", "missing events", "conversion tracking", "UTM tracking", "custom dimensions", "analytics broken" |
| `/marketing campaign` | `campaign-analytics/SKILL.md` | "campaign analytics", "campaign performance", "attribution model", "multi-touch attribution", "ROAS", "CPA", "marketing ROI", "funnel conversion", "ad performance", "channel ROI" |
| `/marketing cold-email` | `cold-email/SKILL.md` | "cold email", "cold outreach", "prospecting email", "SDR email", "sales email", "first touch email", "follow-up sequence", "email prospecting", "B2B outreach", "humanize this sales email" |
| `/marketing copy` | `copywriting/SKILL.md` | "marketing copy", "write copy for", "improve this copy", "homepage copy", "landing page copy", "pricing page copy", "headline help", "CTA copy", "rewrite this page" |
| `/marketing landing-page` | `landing-page/SKILL.md` | "create a landing page", "build a landing page", "product page", "one-pager", "sales page", "web presence", "promotional page", "HTML landing page" |
| `/marketing launch` | `launch-strategy/SKILL.md` | "product launch", "launch strategy", "Product Hunt", "feature release", "go-to-market", "GTM plan", "launch checklist", "beta launch", "early access", "waitlist", "launch momentum", "announcement" |

## Routing Decision

- **Setting up or debugging tracking** (GA4, GTM, events, UTM) → `analytics-tracking`
- **Analyzing campaign results** (attribution, ROI, ROAS, funnel) → `campaign-analytics`
- **Writing unsolicited outreach to new prospects** → `cold-email`
- **Writing or improving marketing page copy** → `copywriting`
- **Building a visual HTML landing page** → `landing-page`
- **Planning a product or feature launch** → `launch-strategy`

If ambiguous between `copywriting` and `landing-page`: if the output should be a working `.html` file → `landing-page`; if the output is just the copy text → `copywriting`.

If ambiguous between `analytics-tracking` and `campaign-analytics`: if the question is about *implementation* (events, tags, setup) → `analytics-tracking`; if about *interpreting data* (performance, ROI, attribution) → `campaign-analytics`.

If unsure, ask:
> "Are you setting up tracking, analyzing campaign results, writing outreach, writing copy, building a page, or planning a launch?"

## Sub-Skill Capabilities

### `analytics-tracking` — Analytics Implementation
GA4 setup, Google Tag Manager, event taxonomy, conversion tracking, tracking plan creation, and analytics audits. Covers building from scratch, auditing existing setups for gaps, and debugging missing or broken events.

### `campaign-analytics` — Campaign Performance Analysis
Multi-touch attribution modeling, funnel conversion analysis, and ROI/ROAS/CPA calculation. Uses Python tools: `attribution_analyzer.py`, `funnel_analyzer.py`, `campaign_roi_calculator.py`.

### `cold-email` — B2B Cold Outreach
Write and iterate on cold email sequences to new prospects. Focuses on human-sounding outreach that gets replies — not sales-machine templates. Covers first touch, follow-up sequences, and humanizing drafts that sound too sales-y.

**Scope:** Unsolicited outreach to new prospects only. For lifecycle/nurture emails to opted-in subscribers, use a different skill.

### `copywriting` — Marketing Page Copy
Conversion copywriting for homepages, landing pages, pricing pages, feature pages, and about pages. Reads `.claude/product-marketing-context.md` if available.

### `landing-page` — HTML Landing Page Generator
Premium single-page HTML with 3D CSS animations, GSAP ScrollTrigger, and mouse-parallax. One prompt in, one polished `.html` file out. Applies full brand system.

### `launch-strategy` — Product Launch Planning
Phased launch planning, channel strategy, and launch momentum for SaaS product and feature releases. Covers Product Hunt, beta launches, early access, waitlists, and GTM sequencing.

## Quality Gates

1. **Scope boundary** — `cold-email` is for unsolicited outreach only. `analytics-tracking` is for implementation only — not analysis. Redirect if the request falls outside the sub-skill's scope.
2. **Brand context first** — `copywriting` and `landing-page` check for existing brand/product context before asking questions.
3. **Data before recommendations** — `campaign-analytics` must have actual numbers before calculating ROI or attribution. Flag missing inputs rather than assuming.
