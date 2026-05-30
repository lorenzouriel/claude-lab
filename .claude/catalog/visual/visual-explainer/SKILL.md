---
name: visual-explainer
category: visual
description: >
  Generates beautiful self-contained HTML pages that visually explain systems,
  architectures, plans, data, comparisons, and technical concepts. Use when asked
  for a diagram, architecture overview, diff review, data table, comparison, or
  any visual explanation of technical/business concepts. Also triggers proactively
  when about to render a complex ASCII table (4+ rows or 3+ columns).
triggers:
  - "diagram"
  - "visualize"
  - "architecture overview"
  - "comparison table"
  - "explain visually"
  - "create a chart"
  - "visual explanation"
  - "/visual-explainer"
workflow_signals:
  - diagram
  - visualization
  - architecture diagram
  - data visualization
  - comparison
  - flowchart
  - visual explanation
  - system overview
languages:
  - en
  - pt-br
---

# /visual-explainer — HTML Visual Diagrams & Explainers

Generates self-contained HTML files. Always opens in browser. Never falls back to ASCII art.

**Proactive rule:** If about to render a table with 4+ rows or 3+ columns, generate HTML automatically instead.

---

## Phase 1 — Think (5 seconds before writing code)

**Who is looking?** Developer understanding a system? PM seeing big picture? Team reviewing a proposal? This shapes density and complexity.

**What type of content?** Choose the rendering approach:

| Content type | Approach |
|---|---|
| Architecture (text-heavy, rich cards) | CSS Grid cards + flow arrows |
| Architecture (topology, connections) | **Mermaid** `graph TD` |
| Flowchart / pipeline | **Mermaid** `graph TD` |
| Sequence diagram | **Mermaid** `sequenceDiagram` |
| Data flow | **Mermaid** with edge labels |
| ER / schema | **Mermaid** `erDiagram` |
| State machine | **Mermaid** `stateDiagram-v2` |
| Mind map | **Mermaid** `mindmap` |
| Data tables / comparisons / audits | HTML `<table>` with sticky header |
| Timeline / roadmap | CSS central line + cards |
| Dashboard / KPIs | CSS Grid + Chart.js |
| Slide deck | Only when explicitly requested |

**What aesthetic?** Pick one and commit:

**Constrained (safer — specific requirements prevent generic output):**
- Blueprint: deep slate/blue, monospace labels, grid background
- Editorial: serif headlines, generous whitespace, earth tones
- Paper/ink: cream `#faf7f5`, terracotta/sage accents, informal
- Terminal mono: green/amber on near-black

**Flexible (requires discipline):**
- IDE theme: pick a real named scheme (Dracula, Nord, Catppuccin, Solarized, Gruvbox)
- Data-dense: small type, maximum information, muted colors

**Forbidden aesthetics:**
- Neon dashboard (cyan + magenta + purple) — always produces generic output
- Inter font + violet/indigo accents + gradient text — AI slop signal
- Gradient text headings on any background

---

## Phase 2 — Structure

**Mermaid diagrams — always use these patterns:**

1. Use `theme: 'base'` with custom `themeVariables` to match page palette
2. Always center with `display: flex; justify-content: center`
3. Add zoom controls (+/−/reset buttons) to every Mermaid container
4. Never use bare `<pre class="mermaid">` — use the full diagram-shell pattern:

```html
<div class="diagram-shell">
  <div class="mermaid-wrap">
    <div class="zoom-controls">
      <button onclick="zoomIn()">+</button>
      <button onclick="zoomOut()">−</button>
      <button onclick="zoomReset()">↺</button>
    </div>
    <div class="mermaid-viewport">
      <div class="mermaid-canvas">
        <pre class="mermaid">
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Action]
  B -->|No| D[Other Action]
        </pre>
      </div>
    </div>
  </div>
</div>
```

**Typography — always pick a distinctive font pairing:**

Good pairings (use different ones each time):
- DM Sans + Fira Code (technical, precise)
- Instrument Serif + JetBrains Mono (editorial, refined)
- IBM Plex Sans + IBM Plex Mono (reliable, readable)
- Bricolage Grotesque + Fragment Mono (bold, characterful)
- Plus Jakarta Sans + Azeret Mono (rounded, approachable)

**Forbidden as primary body font:** Inter, Roboto, Arial, Helvetica, system-ui alone.

**Colors — use CSS custom properties:**

```css
:root {
  --bg: #;        /* page background */
  --surface: #;   /* card backgrounds */
  --border: #;    /* borders */
  --text: #;      /* primary text */
  --text-dim: #;  /* secondary text */
  --accent-1: #;  /* primary accent */
  --accent-2: #;  /* secondary accent */
}
```

**Good accent palettes:**
- Terracotta + sage: `#c2410c`, `#65a30d`
- Teal + slate: `#0891b2`, `#0369a1`
- Rose + cranberry: `#be123c`, `#881337`
- Amber + emerald: `#d97706`, `#059669`
- Deep blue + gold: `#1e3a5f`, `#d4a73a`

**Forbidden accent colors:** `#8b5cf6`, `#7c3aed` (Tailwind indigo/violet), the cyan+magenta+pink combination.

---

## Phase 3 — Build

**File structure — always single self-contained HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Title</title>
  <link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">
  <!-- Mermaid (if used): -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <style>/* All CSS inline */</style>
</head>
<body>
  <!-- Semantic HTML: sections, headings, tables, inline SVG -->
  <!-- Chart.js (if used): -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
  <script>/* All JS inline — Mermaid init, zoom controls, animations */</script>
</body>
</html>
```

**Anti-patterns (forbidden):**
- Emoji icons in section headers
- Perfectly centered everything with uniform padding
- All cards styled identically (no visual hierarchy)
- Three-dot window chrome on code blocks
- Glowing box-shadows (`box-shadow: 0 0 20px` with animation)
- Symmetric layouts where left and right mirror each other

**Architecture diagrams — three approaches:**
- **Simple (<10 elements):** Mermaid `graph TD` with custom themeVariables
- **Text-heavy (<15 elements):** CSS Grid with rounded cards, colored borders, vertical flow arrows
- **Complex (15+ elements):** Hybrid — simple Mermaid overview (5–8 nodes) + CSS Grid detail cards

---

## Phase 4 — Deliver

**Output location:** Write to `outputs/diagrams/` folder. Use a descriptive filename:
- `architecture-overview.html`
- `pipeline-flow.html`
- `kpi-comparison.html`

**Open in browser:**

```bash
# Windows
start outputs/diagrams/filename.html

# macOS
open outputs/diagrams/filename.html

# Linux
xdg-open outputs/diagrams/filename.html
```

Tell the user the file path.

---

## Quality Checks

Before delivering, verify:

- **Squint test:** Blur your eyes. Can you still perceive hierarchy? Are sections distinct?
- **Swap test:** Would replacing fonts/colors with a generic dark theme make this look like every other AI diagram? If yes, push the aesthetic further.
- **Both themes:** Toggle OS between light/dark — both should look intentional.
- **Information complete:** Does it actually convey what was asked? Pretty but incomplete is a failure.
- **No overflow:** Resize to different widths. No content clips or escapes its container.
- **Mermaid zoom:** Every Mermaid container must have zoom controls.
- **No console errors:** Opens cleanly, no broken CDN links.
