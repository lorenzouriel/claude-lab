---
name: visual
description: >
  The complete visual creation skill suite. Covers HTML diagrams, architecture
  visualizations, Excalidraw diagrams, canvas-quality art and posters, and image
  enhancement. Routes to the right sub-skill based on output type and intent.
  Triggers on: "diagram", "visualize", "architecture diagram", "flowchart",
  "excalidraw", "canvas", "poster", "art", "design", "visual", "html diagram",
  "system diagram", "sequence diagram", "ER diagram", "state machine", "data table",
  "slide deck", "enhance image", "upscale", "sharpen image", "screenshot quality",
  "diff review", "plan review", "project recap", "explain visually".
tools:
  - Read
  - Write
  - Bash
  - Edit
  - Grep
  - Glob
  - Agent
---

# Visual Skill — Orchestrator

> Routes to 4 specialized sub-skills covering every type of visual output.
> You route, delegate, and quality-check — sub-skills do the work.

## Command Router

| Command | Sub-Skill | When to Use |
|---------|-----------|-------------|
| `/visual diagram` | `visual-explainer/SKILL.md` | HTML diagrams, architecture overviews, flowcharts, sequence diagrams, ER schemas, state machines, data tables, dashboards, slide decks, diff reviews, plan reviews, project recaps |
| `/visual excalidraw` | `excalidraw-diagram/SKILL.md` | Excalidraw `.excalidraw` JSON files — whiteboard-style diagrams, architecture arguments, workflow visualizations for direct use in Excalidraw |
| `/visual art` | `canvas-design/SKILL.md` | Posters, art pieces, branded visuals, design-philosophy-led output in `.png` or `.pdf` format |
| `/visual enhance` | `image-enhancer/SKILL.md` | Improve resolution, sharpen screenshots, reduce compression artifacts, upscale images, batch image processing |

If the request doesn't clearly match one command, use this decision tree:

1. **Output format** — Is the user asking for `.excalidraw`? → `excalidraw`. A standalone image/poster? → `art`. Improving an existing image? → `enhance`. Otherwise → `diagram`.
2. **Intent** — Is it a whiteboard/argument diagram? → `excalidraw`. Is it art/design/aesthetic? → `art`. Is it technical documentation? → `diagram`.
3. **Audience** — Shown in Excalidraw editor? → `excalidraw`. Opened in browser? → `diagram`. Printed/displayed as art? → `art`.

If still ambiguous, ask one clarifying question: "Should this open in Excalidraw, a browser, or be a standalone image?"

## Sub-Skill Capabilities at a Glance

### `/visual diagram` — visual-explainer
Best for: HTML output with full styling, Mermaid diagrams, interactive tables, slide decks, any technical explanation that opens in a browser.

| Output Type | Example Trigger |
|-------------|----------------|
| Architecture diagram | "visualize this system", "draw the architecture" |
| Flowchart / pipeline | "flowchart of the onboarding process", "diagram this pipeline" |
| Sequence diagram | "sequence diagram for the auth flow" |
| ER / schema diagram | "visualize the database schema" |
| State machine | "diagram the order states" |
| Data table | "show this comparison as a visual table" |
| Dashboard / metrics | "create a metrics dashboard view" |
| Slide deck | "turn this into slides", `/generate-slides` |
| Diff review | "visual review of this diff", `/diff-review` |
| Plan review | "visualize this plan", `/plan-review` |
| Project recap | "mental model of this project", `/project-recap` |

### `/visual excalidraw` — excalidraw-diagram
Best for: `.excalidraw` JSON files, visual arguments, whiteboard diagrams, architecture diagrams intended for editing in Excalidraw.

| Output Type | Example Trigger |
|-------------|----------------|
| Architecture diagram | "create an excalidraw diagram", "draw this as excalidraw" |
| Workflow visualization | "visualize this workflow in excalidraw" |
| Concept diagram | "create a diagram that argues [concept]" |

### `/visual art` — canvas-design
Best for: museum-quality visual art, posters, branded pieces, design-philosophy-driven output.

| Output Type | Example Trigger |
|-------------|----------------|
| Poster / art piece | "create a poster for...", "design a visual for..." |
| Branded visual | "design something to represent..." |
| PDF/PNG artwork | "create a PDF artwork", "design a PNG" |

### `/visual enhance` — image-enhancer
Best for: improving existing images — screenshots, photos, compressed images.

| Output Type | Example Trigger |
|-------------|----------------|
| Screenshot enhancement | "improve this screenshot", "sharpen this image" |
| Upscaling | "upscale to 4K", "increase resolution" |
| Artifact removal | "reduce compression artifacts" |
| Batch processing | "enhance all images in this folder" |

## Context-Gathering Protocol

Before invoking ANY sub-skill, collect:

1. **Output format** — HTML in browser, Excalidraw file, PNG/PDF artwork, or processed image?
2. **Content / subject** — What is being visualized or processed?
3. **Audience** — Developer, executive, general viewer?

For `diagram` and `excalidraw`: also confirm if this is a conceptual overview or a technical deep-dive (determines whether evidence artifacts and concrete specs are needed).

For `enhance`: confirm the source file path and intended use (web, print, social media).

## Sub-Skill Invocation

When routing to a sub-skill, READ its `SKILL.md` before executing. The sub-skill file defines its full process, references, and output standards.

Load reference files on-demand as the sub-skill directs. Never pre-load all files.

## Quality Gates

Every sub-skill output MUST pass before delivery:

1. **Format correctness** — Output is the right format for the use case (HTML opens in browser, `.excalidraw` loads in Excalidraw, PNG/PDF renders correctly).
2. **Visual hierarchy** — Important elements are visually dominant. No uniform grids where everything has the same weight.
3. **Completeness** — The visual covers the full subject without cutting content.

If output fails a gate:
1. Identify which gate failed and why
2. Re-read the sub-skill's reference files or templates
3. Re-generate the failing parts
4. Re-check all three gates before delivery
