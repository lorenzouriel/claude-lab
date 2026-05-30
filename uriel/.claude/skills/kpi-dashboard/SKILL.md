---
name: kpi-dashboard
category: data
description: >
  Generates a self-contained HTML KPI dashboard from metrics data. Inline Chart.js charts,
  no build step. Decision-driven: picks the right chart type for each metric automatically.
  Dark theme with brand color override. Opens directly in any browser.
triggers:
  - "kpi dashboard"
  - "html dashboard"
  - "build a dashboard"
  - "metrics dashboard"
  - "visualize metrics"
  - "/kpi-dashboard"
workflow_signals:
  - kpi
  - dashboards
  - html dashboard
  - metrics visualization
  - charts
  - business dashboard
languages:
  - en
  - pt-br
---

# /kpi-dashboard — Self-Contained HTML KPI Dashboard

No build step. Opens in any browser. Chart types chosen automatically based on data.

## Before building, read:
- `_memory/company.md` — what metrics matter
- `identity/design-guide.md` — brand colors to override the default palette

---

## Phase 1 — Data Gathering

If data isn't provided, ask:

> "Paste the metrics and time-series data you want to visualize. Include metric names, values, and dates if it's over time."

---

## Phase 2 — Chart Type Decision

Automatically pick the right chart for each metric:

| Data type | Chart type |
|---|---|
| Trend over time (single metric) | Line chart |
| Trend over time (multiple) | Multi-line or grouped bar |
| Comparison between categories | Horizontal bar |
| Part-to-whole (≤5 segments) | Donut / pie |
| Part-to-whole (>5 segments) | Stacked bar |
| Single KPI number with trend | Scorecard tile + sparkline |
| Two metrics correlated | Scatter |

**Maximum 6 charts per dashboard** — more than this and focus is lost.

**CHECKPOINT:** Confirm chart plan before writing HTML.

> "I'll create: [list charts]. Does that work, or do you want something different?"

---

## Phase 3 — Brand Colors

Check `identity/design-guide.md`. If brand colors exist, use them:

```javascript
const BRAND = {
  primary: '#[brand-primary]',
  accent: '#[brand-accent]',
  // override the defaults below
};
```

**Default dark theme palette (use when no brand colors):**
```css
:root {
  --bg: #0F1117;
  --surface: #1A1F2B;
  --border: #252B3B;
  --text: #E8EAF0;
  --text-dim: #8892A0;
}
```

**Chart color sequence:** `['#818CF8', '#34D399', '#F472B6', '#FBBF24', '#60A5FA', '#FB923C']`

---

## Phase 4 — Generate Dashboard HTML

Single `dashboard.html` file. All CSS and JS inline. Chart.js via CDN.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Company} KPI Dashboard — {Period}</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif;
           background: #0F1117; color: #E8EAF0; padding: 32px; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 4px; }
    .subtitle { color: #8892A0; font-size: 0.9rem; margin-bottom: 32px; }

    /* KPI tiles */
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 16px; margin-bottom: 32px; }
    .kpi-card { background: #1A1F2B; border-radius: 12px; padding: 20px;
                border: 1px solid #252B3B; }
    .kpi-label { font-size: 0.75rem; color: #8892A0; text-transform: uppercase;
                 letter-spacing: 0.08em; margin-bottom: 8px; }
    .kpi-value { font-size: 2rem; font-weight: 700; line-height: 1; }
    .kpi-change { font-size: 0.8rem; margin-top: 6px; }
    .kpi-change.up { color: #4ADE80; }
    .kpi-change.down { color: #F87171; }

    /* Charts */
    .chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                  gap: 24px; }
    .chart-card { background: #1A1F2B; border-radius: 12px; padding: 24px;
                  border: 1px solid #252B3B; }
    .chart-title { font-size: 0.9rem; font-weight: 600; margin-bottom: 16px; color: #C8D0DC; }
    canvas { max-height: 260px; }
  </style>
</head>
<body>
  <h1>{Company Name} Dashboard</h1>
  <p class="subtitle">Period: {period} · Updated: {date}</p>

  <!-- KPI Tiles -->
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-label">{Metric Name}</div>
      <div class="kpi-value" style="color:#818CF8">{$Value}</div>
      <div class="kpi-change up">↑ +X% vs last period</div>
    </div>
    <!-- Repeat for each KPI -->
  </div>

  <!-- Charts -->
  <div class="chart-grid">
    <div class="chart-card">
      <div class="chart-title">{Chart Title}</div>
      <canvas id="chart1"></canvas>
    </div>
  </div>

  <script>
    const chartDefaults = {
      plugins: { legend: { labels: { color: '#C8D0DC', font: { size: 12 } } } },
      scales: {
        x: { ticks: { color: '#8892A0' }, grid: { color: '#252B3B' } },
        y: { ticks: { color: '#8892A0' }, grid: { color: '#252B3B' } }
      }
    };

    new Chart(document.getElementById('chart1'), {
      type: 'line',
      data: {
        labels: {/* date labels */},
        datasets: [{ label: '{Metric}', data: {/* values */},
                     borderColor: '#818CF8', backgroundColor: 'rgba(129,140,248,0.1)',
                     fill: true, tension: 0.4, pointRadius: 4 }]
      },
      options: { ...chartDefaults, responsive: true }
    });
  </script>
</body>
</html>
```

---

## Rules

- Always inline CSS and JS — no external files besides Chart.js CDN
- If brand colors exist in `identity/design-guide.md`: use them for KPI values and chart lines
- Max 6 charts — more loses focus
- Every chart must have a title — unlabeled charts confuse readers
- KPI tiles for single-number metrics; charts for trends and comparisons
- No `fetch()` calls — data must be hardcoded in the script block so the file works offline
- Save to `outputs/dashboards/kpi-dashboard-{period}-{YYYY-MM-DD}.html`
