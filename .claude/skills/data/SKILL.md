---
name: data
description: >
  The complete data analyst skill suite. Covers data quality auditing, exploratory
  data analysis, query validation, schema mapping, cohort and funnel analysis, A/B
  testing, segmentation, time-series, root-cause investigation, business metrics,
  dashboard specs, data storytelling, executive summaries, documentation, semantic
  models, stakeholder communication, and workflow optimization.
  Triggers on: "data quality", "audit dataset", "EDA", "exploratory analysis",
  "validate query", "schema", "cohort", "funnel", "A/B test", "segmentation",
  "time series", "root cause", "KPI", "metrics", "dashboard", "data story",
  "executive summary", "insight", "data catalog", "semantic model", "dbt metrics",
  "sql explain", "stakeholder", "data narrative", "peer review", "analysis plan".
tools:
  - Read
  - Write
  - Bash
  - Edit
  - Grep
  - Glob
  - Agent
---

# Data Analyst Skill — Orchestrator

> Routes to 34 specialized sub-skills across 6 domains. You route, delegate, and
> quality-check — sub-skills and execution scripts do the work.

## Command Router

### Data Quality & Validation

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data quality-audit` | `data-quality-validation/data-quality-audit/SKILL.md` | "audit dataset", "data quality check", "validate data", "quality scorecard", "null check", "duplicate detection" |
| `/data eda` | `data-quality-validation/programmatic-eda/SKILL.md` | "exploratory analysis", "EDA", "profile dataset", "distribution summary", "data overview" |
| `/data query-validation` | `data-quality-validation/query-validation/SKILL.md` | "validate query", "explain plan", "query performance", "SQL lint", "cardinality estimate" |
| `/data schema-map` | `data-quality-validation/schema-mapper/SKILL.md` | "map schema", "schema comparison", "field mapping", "source to target", "column mapping" |
| `/data metric-reconcile` | `data-quality-validation/metric-reconciliation/SKILL.md` | "reconcile metrics", "metrics don't match", "discrepancy", "metric mismatch" |

### Data Analysis & Investigation

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data ab-test` | `data-analysis-investigation/ab-test-analysis/SKILL.md` | "A/B test", "experiment analysis", "statistical significance", "treatment vs control" |
| `/data metrics` | `data-analysis-investigation/business-metrics-calculator/SKILL.md` | "calculate KPIs", "SaaS metrics", "MRR", "churn rate", "LTV", "business metrics" |
| `/data cohort` | `data-analysis-investigation/cohort-analysis/SKILL.md` | "cohort analysis", "retention matrix", "user retention", "weekly cohorts", "cohort report" |
| `/data funnel` | `data-analysis-investigation/funnel-analysis/SKILL.md` | "funnel analysis", "conversion funnel", "drop-off analysis", "funnel report" |
| `/data root-cause` | `data-analysis-investigation/root-cause-investigation/SKILL.md` | "root cause", "RCA", "why did X happen", "investigate anomaly", "drill down" |
| `/data segmentation` | `data-analysis-investigation/segmentation-analysis/SKILL.md` | "segment users", "customer segments", "clustering", "segmentation analysis" |
| `/data time-series` | `data-analysis-investigation/time-series-analysis/SKILL.md` | "time series", "trend analysis", "seasonality", "forecast", "time-based pattern" |

### Data Storytelling & Visualization

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data dashboard` | `data-storytelling-visualization/dashboard-specification/SKILL.md` | "dashboard spec", "design dashboard", "define metrics dashboard", "BI report spec" |
| `/data narrative` | `data-storytelling-visualization/data-narrative-builder/SKILL.md` | "data story", "build narrative", "story from data", "data-driven story" |
| `/data exec-summary` | `data-storytelling-visualization/executive-summary-generator/SKILL.md` | "executive summary", "C-suite summary", "executive report", "summarize for leadership" |
| `/data insight` | `data-storytelling-visualization/insight-synthesis/SKILL.md` | "synthesize insights", "key findings", "what does the data say", "insight report" |
| `/data viz` | `data-storytelling-visualization/visualization-builder/SKILL.md` | "build chart", "visualization", "plot data", "chart recommendation", "visual spec" |

### Documentation & Knowledge

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data assumptions-log` | `documentation-knowledge/analysis-assumptions-log/SKILL.md` | "log assumptions", "track assumptions", "analysis assumptions", "assumption register" |
| `/data document` | `documentation-knowledge/analysis-documentation/SKILL.md` | "document analysis", "analysis writeup", "methodology doc", "analysis report" |
| `/data catalog` | `documentation-knowledge/data-catalog-entry/SKILL.md` | "data catalog", "catalog entry", "document dataset", "register dataset" |
| `/data doc-metrics` | `documentation-knowledge/metric-reconciliation/SKILL.md` | "document metrics", "metric definitions", "reconcile metric definitions" |
| `/data doc-schema` | `documentation-knowledge/schema-mapper/SKILL.md` | "document schema", "schema documentation", "field definitions" |
| `/data semantic-model` | `documentation-knowledge/semantic-model-builder/SKILL.md` | "semantic model", "dbt metrics", "metric layer", "define dimensions", "define measures" |
| `/data sql-explain` | `documentation-knowledge/sql-to-business-logic/SKILL.md` | "explain SQL", "SQL to business logic", "translate query", "what does this SQL do" |

### Stakeholder Communication

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data qa-checklist` | `stakeholder-communication/analysis-qa-checklist/SKILL.md` | "QA checklist", "pre-delivery checklist", "review checklist", "analysis QA" |
| `/data impact` | `stakeholder-communication/impact-quantification/SKILL.md` | "quantify impact", "business impact", "ROI", "impact analysis", "size the impact" |
| `/data methodology` | `stakeholder-communication/methodology-explainer/SKILL.md` | "explain methodology", "how did you calculate", "walkthrough approach", "method explainer" |
| `/data requirements` | `stakeholder-communication/stakeholder-requirements-gathering/SKILL.md` | "gather requirements", "stakeholder requirements", "clarify request", "scoping analysis" |
| `/data translate` | `stakeholder-communication/technical-to-business-translator/SKILL.md` | "translate to business", "non-technical explanation", "explain to exec", "plain language" |

### Workflow Optimization

| Command | Sub-Skill | Trigger Phrases |
|---------|-----------|----------------|
| `/data plan` | `workflow-optimization/analysis-planning/SKILL.md` | "plan analysis", "analysis roadmap", "structure analysis", "analysis brief" |
| `/data retrospective` | `workflow-optimization/analysis-retrospective/SKILL.md` | "analysis retrospective", "retro", "lessons learned", "what went wrong", "analysis review" |
| `/data context-pack` | `workflow-optimization/context-packager/SKILL.md` | "package context", "handoff context", "context for meeting", "prep context" |
| `/data peer-review` | `workflow-optimization/peer-review-template/SKILL.md` | "peer review", "review my analysis", "second opinion", "review template" |

If the request doesn't clearly match one command, ask a clarifying question.
If the request spans multiple sub-skills (e.g., "plan and document my analysis"), run
the relevant sub-skills sequentially, passing output from each as input to the next.

## Context-Gathering Protocol

Before invoking ANY sub-skill, collect these inputs. If missing, ask:

1. **Data context** — What dataset or system? (table name, tool, file format)
2. **Business question** — What decision or outcome does this analysis serve?
3. **Audience** — Who consumes the output? (analyst, executive, engineer, stakeholder)

For `quality-audit`, `eda`, and `query-validation`, also collect the dataset location or
a sample of the data/query.

## Sub-Skill Invocation

When routing to a sub-skill, READ its `SKILL.md` file before executing. The sub-skill
file defines inputs, process steps, scripts to run, and output templates.

Load reference files on-demand when a sub-skill requests them. Never pre-load all files.

## Quality Gates

Every sub-skill output MUST pass before delivery:

1. **Specificity** — All findings reference the actual dataset, query, or business
   context provided. No generic advice.
2. **Completeness** — All sections defined in the sub-skill's output template are present.
3. **Actionability** — Every finding has a concrete next step. No open-ended conclusions.

If output fails a gate:
1. Identify which gate failed and why
2. Re-read the sub-skill's reference files for missing guidance
3. Re-generate only the failing sections
4. Re-check all three gates before delivery

## Output Format

Default to markdown. For scripts and queries, use code blocks with language tags.
Always end with a "Next Steps" section pointing to the logical next sub-skill
(e.g., after `eda` → suggest `quality-audit` or `root-cause`; after `insight` → suggest
`exec-summary` or `narrative`).
