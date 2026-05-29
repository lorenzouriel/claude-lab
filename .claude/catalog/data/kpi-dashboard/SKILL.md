---
name: kpi-dashboard
category: data
description: >
  Generates a self-contained HTML KPI dashboard from metrics data. Inline charts
  (Chart.js via CDN), no build step required. Opens directly in any browser.
triggers:
  - "kpi dashboard"
  - "html dashboard"
  - "build a dashboard"
  - "metrics dashboard"
  - "/kpi-dashboard"
workflow_signals:
  - kpi
  - dashboards
  - html dashboard
  - metrics visualization
  - charts
languages:
  - en
  - pt-br
---

# /kpi-dashboard

Generates a self-contained HTML dashboard with charts that opens in any browser — no build step.

---

## Step 1 — Gather data

Ask if not provided:

> "Paste the metrics and time-series data you want to visualize. Include metric names, values, and dates if it's over time."

---

## Step 2 — Confirm chart types

After reviewing the data, confirm:

> "I'll create: [line chart for revenue trend / bar chart for channel comparison / donut for segment split / scorecard tiles for KPIs]. Does that work, or want something different?"

---

## Step 3 — Generate the dashboard

Produce a single `dashboard.html` file:

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
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0F1117;
      color: #E8EAF0;
      padding: 32px;
    }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 4px; }
    .subtitle { color: #8892A0; font-size: 0.9rem; margin-bottom: 32px; }
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 32px; }
    .kpi-card {
      background: #1A1F2B;
      border-radius: 12px;
      padding: 20px;
      border: 1px solid #252B3B;
    }
    .kpi-label { font-size: 0.75rem; color: #8892A0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
    .kpi-value { font-size: 2rem; font-weight: 700; line-height: 1; }
    .kpi-change { font-size: 0.8rem; margin-top: 6px; }
    .kpi-change.up { color: #4ADE80; }
    .kpi-change.down { color: #F87171; }
    .chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; }
    .chart-card {
      background: #1A1F2B;
      border-radius: 12px;
      padding: 24px;
      border: 1px solid #252B3B;
    }
    .chart-title { font-size: 0.9rem; font-weight: 600; margin-bottom: 16px; color: #C8D0DC; }
    canvas { max-height: 260px; }
  </style>
</head>
<body>
  <h1>{Company Name} Dashboard</h1>
  <p class="subtitle">Period: {period} &nbsp;·&nbsp; Updated: {date}</p>

  <!-- KPI Tiles -->
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-label">Revenue</div>
      <div class="kpi-value" style="color:#818CF8">{$X}</div>
      <div class="kpi-change up">↑ +X% vs last period</div>
    </div>
    <!-- Repeat kpi-card for each metric -->
  </div>

  <!-- Charts -->
  <div class="chart-grid">
    <div class="chart-card">
      <div class="chart-title">Revenue Trend</div>
      <canvas id="revenueChart"></canvas>
    </div>
    <div class="chart-card">
      <div class="chart-title">Channel Breakdown</div>
      <canvas id="channelChart"></canvas>
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

    // Revenue line chart
    new Chart(document.getElementById('revenueChart'), {
      type: 'line',
      data: {
        labels: {/* month labels from data */},
        datasets: [{
          label: 'Revenue',
          data: {/* values from data */},
          borderColor: '#818CF8',
          backgroundColor: 'rgba(129,140,248,0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4
        }]
      },
      options: { ...chartDefaults, responsive: true }
    });

    // Channel donut / bar chart
    new Chart(document.getElementById('channelChart'), {
      type: 'bar',  // or 'doughnut'
      data: {
        labels: {/* channel names */},
        datasets: [{
          data: {/* values */},
          backgroundColor: ['#818CF8','#34D399','#F472B6','#FBBF24','#60A5FA']
        }]
      },
      options: { ...chartDefaults, responsive: true }
    });
  </script>
</body>
</html>
```

---

## Chart Type Guide

| Data type | Chart type |
|-----------|-----------|
| Trend over time (single metric) | Line chart |
| Trend over time (multiple) | Multi-line or grouped bar |
| Comparison between categories | Horizontal bar |
| Part-to-whole (≤5 segments) | Donut / pie |
| Part-to-whole (>5 segments) | Stacked bar |
| Distribution | Histogram (Chart.js bar with binned data) |
| Two metrics correlated | Scatter |

---

## Rules
- Always inline CSS and JS — no external files besides Chart.js CDN
- Color palette: use the brand colors from `identity/design-guide.md` if available; default to the dark theme palette above
- Max 6 charts per dashboard — more than this and the dashboard loses focus
- Each chart must have a title — unlabeled charts confuse readers
- Save to `outputs/dashboards/kpi-dashboard-{period}-{YYYY-MM-DD}.html`
- To view: open the file in any browser — no server needed (no fetch() calls)
