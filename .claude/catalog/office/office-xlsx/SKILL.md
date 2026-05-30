---
name: office-xlsx
category: office
description: >
  Spreadsheet creation, editing, and analysis. Handles .xlsx, .xlsm, .csv, .tsv.
  Zero formula errors required. Financial model color conventions enforced.
  Decision-tree driven: picks the right tool for reading (pandas), creating (openpyxl),
  or analyzing (pandas + visualization).
triggers:
  - "excel"
  - "spreadsheet"
  - "xlsx"
  - "csv analysis"
  - "financial model"
  - "create spreadsheet"
  - "/office-xlsx"
workflow_signals:
  - excel
  - spreadsheet
  - xlsx
  - financial model
  - csv
  - data analysis
  - formula
languages:
  - en
  - pt-br
---

# /office-xlsx — Spreadsheet Creation, Editing & Analysis

Every Excel file delivered must have ZERO formula errors (`#REF!`, `#DIV/0!`, `#VALUE!`, `#N/A`, `#NAME?`).

---

## Workflow Decision Tree

```
User wants to...
├── Read / analyze data                → pandas (read_excel / read_csv)
├── Create new spreadsheet            → openpyxl
├── Create financial model            → openpyxl + financial conventions
├── Modify existing (preserve formulas)→ openpyxl load_workbook(keep_vba=True)
├── Visualize data                    → pandas + matplotlib / or seaborn
└── Recalculate formulas              → LibreOffice headless (recalc.py)
```

---

## Step 1 — Read / Analyze Data

```python
import pandas as pd

# Read Excel
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# Read CSV
df = pd.read_csv("data.csv")

# Quick overview
print(df.head())
print(df.info())
print(df.describe())

# Check for missing values
print(df.isnull().sum())
```

**Multi-sheet workbook:**
```python
xl = pd.ExcelFile("workbook.xlsx")
print(xl.sheet_names)
df_sheet1 = xl.parse("Sheet1")
df_sheet2 = xl.parse("Sheet2")
```

---

## Step 2 — Create New Spreadsheet

```python
import openpyxl
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = Workbook()
ws = wb.active
ws.title = "Summary"

# Headers
headers = ["Item", "Q1", "Q2", "Q3", "Q4", "Total"]
for col, header in enumerate(headers, 1):
    cell = ws.cell(row=1, column=col, value=header)
    cell.font = Font(bold=True, color="FFFFFF")
    cell.fill = PatternFill("solid", fgColor="1C2833")
    cell.alignment = Alignment(horizontal="center")

# Data rows
data = [
    ["Revenue", 100000, 120000, 110000, 130000],
    ["Expenses", 80000, 85000, 82000, 90000],
]
for row_idx, row_data in enumerate(data, 2):
    for col_idx, value in enumerate(row_data, 1):
        ws.cell(row=row_idx, column=col_idx, value=value)
    # Total formula
    ws.cell(row=row_idx, column=6, 
            value=f"=SUM(B{row_idx}:E{row_idx})")

# Column widths
for col in ws.columns:
    max_len = max(len(str(cell.value or "")) for cell in col) + 2
    ws.column_dimensions[get_column_letter(col[0].column)].width = max_len

wb.save("output.xlsx")
```

---

## Step 3 — Financial Model Conventions

When creating financial models, enforce these standards:

**Color coding (industry-standard):**

| Text color | Meaning | When to use |
|---|---|---|
| Blue (`0,0,255`) | Hardcoded input | Numbers users change for scenarios |
| Black (`0,0,0`) | Formula / calculation | ALL computed values |
| Green (`0,128,0`) | Cross-sheet link | Pulling from other worksheet in same workbook |
| Red (`255,0,0`) | External link | Links to other files |
| Yellow background | Key assumption | Cells needing attention or update |

```python
from openpyxl.styles import Font, PatternFill

# Blue input cell
cell.font = Font(color="0000FF")

# Black formula cell  
cell.font = Font(color="000000")

# Yellow background for key assumption
cell.fill = PatternFill("solid", fgColor="FFFF00")
```

**Number formatting standards:**

| Data type | Format |
|---|---|
| Currency | `$#,##0` — always specify units in header: "Revenue ($mm)" |
| Zeros | `$#,##0;($#,##0);-` — zeros display as dash |
| Percentages | `0.0%` (one decimal) |
| Multiples | `0.0x` (EV/EBITDA, P/E) |
| Negative numbers | Use parentheses `(123)` not minus `-123` |
| Years | Text strings `"2024"` not numbers (prevents "2,024") |

**Formula construction rules:**
- Place ALL assumptions (growth rates, margins) in separate assumption cells
- Use cell references instead of hardcoded values: `=B5*(1+$B$6)` not `=B5*1.05`
- Comment hardcoded sources: `"Source: Company 10-K, FY2024, Page 45, Revenue Note"`
- Test edge cases: zero values, negative numbers, division by zero

---

## Step 4 — Modify Existing Spreadsheet

```python
import openpyxl

# Load preserving formulas and formatting
wb = openpyxl.load_workbook("existing.xlsx", keep_vba=True)
ws = wb["Sheet1"]

# Read before writing — study existing patterns first
# NEVER impose new formatting when existing conventions exist

# Edit specific cell
ws["B5"] = 150000  # Change input value

# Edit formula
ws["F5"] = "=SUM(B5:E5)"

wb.save("modified.xlsx")
```

**Important:** When modifying an existing file:
1. Read every formula and format before changing anything
2. Match existing conventions exactly
3. Never reformatting established patterns

---

## Step 5 — Data Visualization

```python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

df = pd.read_excel("data.xlsx")

# Revenue trend
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# Line chart
df.plot(x='Month', y='Revenue', ax=ax1, marker='o')
ax1.set_title('Revenue Trend')
ax1.set_ylabel('Revenue ($)')

# Bar chart
df.plot.bar(x='Category', y='Value', ax=ax2)
ax2.set_title('Category Breakdown')

plt.tight_layout()
plt.savefig("outputs/charts/revenue-analysis.png", dpi=150)
```

---

## Step 6 — Formula Recalculation

When formulas need to be recalculated (not just written):

```bash
# Using LibreOffice headless
soffice --headless --calc --infilter="Calc MS Excel 2007 XML" \
        --convert-to xlsx --outdir . workbook.xlsx
```

---

## Dependencies

```bash
pip install openpyxl pandas matplotlib seaborn
sudo apt install libreoffice
```

---

## Rules

- **Zero formula errors** — verify every formula before saving
- **Preserve existing templates** — study and match exactly when modifying existing files
- When a formula depends on assumptions, put assumptions in separate cells
- Financial models: always use the color coding standard unless overridden by existing template
- Save to `outputs/spreadsheets/{name}-{YYYY-MM-DD}.xlsx`
