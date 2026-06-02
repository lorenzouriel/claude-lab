---
name: finance
description: >
  The complete finance skill suite. Covers business investment decisions, financial
  modeling and analysis (DCF, ratio analysis, budget variance, forecasts), SaaS metrics
  coaching, and capital allocation. Routes to the right sub-skill based on the task.
  Triggers on: "ROI", "IRR", "NPV", "payback period", "build vs buy", "lease vs buy",
  "capital allocation", "investment decision", "equipment purchase", "vendor evaluation",
  "DCF", "discounted cash flow", "valuation", "financial ratio", "budget variance",
  "rolling forecast", "financial model", "financial analysis", "financial projection",
  "MRR", "ARR", "churn", "LTV", "CAC", "NRR", "saas metrics", "saas health",
  "how is my saas doing", "financial statements", "cash flow analysis", "company valuation".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Agent
---

# Finance Skill — Orchestrator

> Routes to 4 specialized sub-skills covering business investment decisions,
> financial modeling, and SaaS metrics coaching. Sub-skills do the work —
> this file routes and delegates.

## Command Router

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/finance invest` | `business-investment-advisor/SKILL.md` | "should I invest in", "ROI on this", "IRR", "NPV", "payback period", "build vs buy", "lease vs buy", "capital expenditure", "equipment purchase", "hire vs outsource", "vendor evaluation", "capital allocation", "where to allocate budget" |
| `/finance model` | `finance-skills/SKILL.md` | "financial model", "ratio analysis", "DCF", "discounted cash flow", "budget variance", "rolling forecast", "financial toolkit", "run a DCF", "analyze these ratios" |
| `/finance analyst` | `financial-analyst/SKILL.md` | "financial analysis", "analyze financial statements", "valuation model", "company valuation", "financial projections", "cash flow analysis", "budget variance analysis", "financial modeling", "5-phase analysis", "forecast construction" |
| `/finance saas` | `saas-metrics-coach/SKILL.md` | "saas metrics", "how is my saas doing", "MRR", "ARR", "churn rate", "LTV", "CAC", "NRR", "saas health check", "benchmark my metrics", "interpret my numbers" |

## Routing Decision

- **Capital decision with a yes/no outcome** (invest, build, hire, lease) → `business-investment-advisor`
- **Raw financial modeling with Python tools** (DCF, ratios, variance, forecast) → `finance-skills`
- **Full structured financial analysis** (5-phase, statements, projections, reporting) → `financial-analyst`
- **SaaS-specific metrics and benchmarking** (MRR, churn, NRR, LTV/CAC) → `saas-metrics-coach`

If ambiguous, ask:
> "Are you evaluating a specific investment decision, building a financial model, analyzing financial statements, or reviewing SaaS metrics?"

## Sub-Skill Capabilities

### `business-investment-advisor` — Capital Allocation Decisions
Evaluates business investments using ROI, IRR, NPV, and payback period. Covers equipment, real estate, hiring, technology, vendor contracts, and new business opportunities. Reads `company-context.md` if available. Delivers a clear go/no-go recommendation with assumptions stated and risks flagged.

**Scope:** Business capital allocation only — not personal securities or stock market advice.

### `finance-skills` — Financial Modeling Toolkit
Ratio analysis, DCF valuation, budget variance analysis, and rolling forecast construction using 4 stdlib-only Python tools. Production-ready toolkit for financial modeling and forecasting.

### `financial-analyst` — Structured Financial Analysis
5-phase workflow: Scoping → Data Analysis & Modeling → Insight Generation → Reporting → Recommendations. Covers financial statement analysis, valuation models, budget variance, and forecast construction. Use for comprehensive analysis with stakeholder reporting.

### `saas-metrics-coach` — SaaS Health Advisor
Acts as a senior SaaS CFO advisor. Takes raw revenue and customer numbers, calculates key health metrics (MRR, ARR, churn, NRR, LTV, CAC), benchmarks against industry standards, and delivers prioritized actionable advice in plain English.

## Quality Gates

1. **Stated assumptions** — Every financial model or investment recommendation must list its key assumptions explicitly. No silent inputs.
2. **Sensitivity awareness** — For investment and modeling sub-skills, flag which inputs most affect the outcome (what changes the decision).
3. **Scope boundary** — `business-investment-advisor` does not give personal securities advice. If the request is about stocks or personal investing, redirect.
