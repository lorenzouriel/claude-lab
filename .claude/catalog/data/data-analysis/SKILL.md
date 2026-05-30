---
name: data-analysis
category: data
description: >
  Analyzes CSV files, spreadsheet data, or pasted tables. 4-layer analysis: overview
  → statistics → patterns → anomalies. Uses pandas for computation. Never invents numbers —
  only states what the data shows. Produces actionable insights in plain English.
triggers:
  - "analyze this data"
  - "data analysis"
  - "analyze csv"
  - "what does this data show"
  - "analyze this spreadsheet"
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

# /data-analysis — Data Analysis Workflow

4-layer analysis. Never invents numbers. States what the data shows, not what should be there.

---

## Phase 1 — Data Ingestion

**Read the data first.** Understand its structure before analyzing:

```python
import pandas as pd

# Load data
df = pd.read_csv("data.csv")           # or read_excel, read_json
print(f"Shape: {df.shape}")            # rows × columns
print(df.dtypes)                       # column types
print(df.head(10))                     # first 10 rows
print(df.isnull().sum())              # missing values per column
print(df.duplicated().sum())           # duplicate rows
```

**Data quality check before analysis:**

```python
quality_report = {
    "total_rows": len(df),
    "total_columns": len(df.columns),
    "missing_values": df.isnull().sum().to_dict(),
    "duplicate_rows": df.duplicated().sum(),
    "numeric_columns": df.select_dtypes(include='number').columns.tolist(),
    "categorical_columns": df.select_dtypes(include='object').columns.tolist(),
}
```

Report data quality issues before analysis — don't analyze dirty data silently.

---

## Phase 2 — Layer 1: Overview

```python
# Basic summary
print(df.describe())

# Value counts for categorical columns
for col in df.select_dtypes(include='object').columns:
    print(f"\n{col}:")
    print(df[col].value_counts().head(10))
```

**Output section:**
```
## Dataset Overview

- Rows: X | Columns: Y
- Date range: [if time series]
- Key categories: [if categorical]
- Data quality: [X missing values in Y columns; Z duplicates]
```

---

## Phase 3 — Layer 2: Statistics

```python
# Distribution for numeric columns
import matplotlib.pyplot as plt

numeric_cols = df.select_dtypes(include='number').columns

stats = df[numeric_cols].agg(['mean', 'median', 'std', 'min', 'max'])
print(stats)

# Correlation matrix
corr = df[numeric_cols].corr()
print("\nHigh correlations (|r| > 0.7):")
print(corr[(corr.abs() > 0.7) & (corr != 1.0)].dropna(how='all').dropna(axis=1, how='all'))
```

---

## Phase 4 — Layer 3: Patterns

Look for meaningful patterns:

```python
# Time series trends (if date column exists)
date_cols = [c for c in df.columns if 'date' in c.lower() or 'time' in c.lower()]
if date_cols:
    df[date_cols[0]] = pd.to_datetime(df[date_cols[0]])
    df.set_index(date_cols[0], inplace=True)
    monthly = df.resample('M').sum()  # or mean()

# Group comparisons
# df.groupby('category')['metric'].agg(['mean', 'count', 'sum'])

# Top/bottom N
print(df.nlargest(10, 'metric_column'))
print(df.nsmallest(10, 'metric_column'))
```

---

## Phase 5 — Layer 4: Anomalies

Flag values that don't fit the pattern:

```python
# Outlier detection (IQR method)
for col in numeric_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    outliers = df[(df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)]
    if len(outliers) > 0:
        print(f"{col}: {len(outliers)} outliers")
        print(outliers[[col]].head())
```

---

## Phase 6 — Plain English Findings

After all computation, write the findings in plain English:

```markdown
## Findings

### What the data shows
[3–5 bullet points. Each is a specific finding, not a process description.
"Revenue peaks in Q4, with December accounting for 34% of annual total."
NOT "We analyzed the revenue by quarter."]

### Patterns worth noting
[What's trending, what correlates, what differs across segments]

### Anomalies or concerns
[Outliers, data quality issues, unexpected values — flag but don't diagnose causes not in the data]

### What I can't tell from this data
[Limitations — what questions this data can't answer, what additional data would help]
```

---

## Rules

- Never state a number not in the data — report what exists, flag what's missing
- Anomaly ≠ error — some outliers are correct data points, some are data quality issues; distinguish them
- Correlation ≠ causation — never write "X causes Y" from correlation analysis
- "What I can't tell" section is required — all datasets have limits
- If data has quality issues: report them before findings, not after
- Save analysis script to `outputs/data/analysis-{dataset-name}-{YYYY-MM-DD}.py` and findings to `.md`
