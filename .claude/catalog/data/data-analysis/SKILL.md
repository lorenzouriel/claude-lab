---
name: data-analysis
category: data
description: >
  Analyzes CSV files, spreadsheet data, or pasted tables. Provides summary statistics,
  patterns, anomalies, and plain-English insights. No code required from the user.
triggers:
  - "analyze this data"
  - "analyze this CSV"
  - "what does this data say"
  - "data analysis"
  - "/data-analysis"
workflow_signals:
  - data
  - csv
  - spreadsheet
  - excel
  - analysis
  - data analysis
languages:
  - en
  - pt-br
---

# /data-analysis

Analyzes data and translates numbers into plain-English insights and actionable findings.

---

## Step 1 — Receive the data

If data isn't provided, ask:

> "Paste the data (CSV, table, or spreadsheet content) — or describe what you're trying to understand from it."

Accept: CSV, markdown tables, JSON arrays, pasted spreadsheet rows.

---

## Step 2 — Understand the goal

If the analysis goal isn't clear, ask one question:

> "What decision are you trying to make with this data, or what question are you trying to answer?"

---

## Step 3 — Analyze

Work through these layers in order:

### Layer 1: Overview
- How many rows and columns?
- What does each column represent?
- Date range if time-series data
- Any obvious data quality issues (missing values, duplicates, outliers)?

### Layer 2: Summary Statistics
For numeric columns:
- Min, max, mean, median
- Distribution: is it clustered or spread?
- Outliers: any values that stand out significantly?

For categorical columns:
- Unique values and counts
- Most/least common values
- Any unexpected categories?

### Layer 3: Patterns & Trends
- Are there time trends? (up, down, cyclical, seasonal?)
- Correlations between columns?
- Segments that behave differently?

### Layer 4: Anomalies
- What doesn't fit the pattern?
- Missing data patterns (random or systematic?)
- Spikes or drops that need explanation

---

## Step 4 — Write the analysis report

```markdown
# Data Analysis: {Dataset Name / Description}

**Analyzed:** {YYYY-MM-DD}
**Dataset:** {N rows × N columns / {date range}}
**Question:** {What the user wanted to know}

---

## Executive Summary

{3-5 sentences: The most important findings in plain English. What should the reader do or know based on this data?}

---

## Data Overview

| Dimension | Value |
|-----------|-------|
| Rows | {N} |
| Columns | {N} |
| Date range | {if applicable} |
| Missing values | {N total / which columns} |

---

## Key Findings

### Finding 1: {Short descriptive title}
{What the data shows + why it matters. 2-4 sentences. Specific numbers.}

### Finding 2: {Title}
{Finding + implication}

### Finding 3: {Title}
{Finding + implication}

---

## Notable Anomalies

| Anomaly | Location | Possible Explanation |
|---------|----------|---------------------|
| {Spike in column X on date Y} | Row {N} | {Seasonal event / data error / genuine outlier} |

---

## Data Quality Notes

{Issues found that could affect the analysis: missing values, likely errors, columns with unclear meaning.}

---

## Recommendations

Based on this data:
1. {Specific action or decision the data supports}
2. {Another recommendation}
3. {What to measure or investigate next}
```

---

## Rules
- Never invent or estimate numbers — only report what's in the data
- Flag data quality issues clearly — don't silently work around them
- Plain English only — no statistics jargon without explanation
- If the data is too large to analyze in full, say so and sample representative rows
- Save to `outputs/analysis/{dataset-name}-analysis-{YYYY-MM-DD}.md`
