---
name: excalidraw-diagram
category: visual
description: >
  Creates Excalidraw (.excalidraw) JSON diagram files that make visual arguments —
  not just display information. Diagrams show relationships, causality, and flow
  that words alone can't express. Use when the user wants to visualize workflows,
  architectures, system concepts, or technical processes as an Excalidraw file.
triggers:
  - "excalidraw"
  - "excalidraw diagram"
  - "draw a diagram"
  - "create a diagram"
  - "workflow diagram"
  - "/excalidraw-diagram"
workflow_signals:
  - excalidraw
  - diagram
  - workflow diagram
  - architecture diagram
  - visual map
  - concept map
  - draw
languages:
  - en
  - pt-br
---

# /excalidraw-diagram — Excalidraw Diagram Creator

Generates `.excalidraw` JSON files that **argue visually**, not just display information.

**Core philosophy:** The shape should BE the meaning. If you removed all text, would the structure alone communicate the concept? If not, redesign.

---

## Phase 1 — Assess Depth

Before designing, determine what level of detail is needed:

**Simple / Conceptual:**
- Explaining a mental model or philosophy
- Audience doesn't need technical specifics
- Generic labels are appropriate: "Input → Process → Output"

**Comprehensive / Technical:**
- Diagramming a real system, protocol, or architecture
- Will be used to teach or explain
- Need real event names, API endpoints, data formats
- Must include evidence artifacts (see below)

**For technical diagrams:** Look up actual specifications first. Find real event names, method names, API formats. Use real terminology, not generic placeholders.

---

## Phase 2 — Design Process

**Step 1: Understand deeply.** For each concept, ask:
- What does this concept DO? (not what IS it)
- What relationships exist between concepts?
- What is the core transformation or flow?
- What would someone need to SEE to understand this?

**Step 2: Map concepts to visual patterns:**

| If the concept... | Use this pattern |
|---|---|
| Spawns multiple outputs | Fan-out (radial arrows from center) |
| Combines inputs into one | Convergence (arrows merging) |
| Has hierarchy/nesting | Tree (lines + free-floating text) |
| Is a sequence of steps | Timeline (line + dots + labels) |
| Loops or improves | Spiral/Cycle |
| Is an abstract state | Cloud (overlapping ellipses) |
| Transforms input → output | Assembly line (before → process → after) |
| Compares two things | Side-by-side parallel structure |

**Step 3: Ensure variety.** Each major concept must use a different visual pattern. No uniform card grids.

**Step 4: Plan the flow.** Before JSON, trace how the eye moves through the diagram. There must be a clear visual story.

---

## Phase 3 — Evidence Artifacts (Technical Diagrams)

Include concrete examples that prove accuracy and help viewers learn:

| Artifact type | When | How to render |
|---|---|---|
| Code snippets | APIs, integrations | Dark rectangle + syntax-colored text |
| Data / JSON examples | Data formats, schemas | Dark rectangle + colored text |
| Event sequences | Protocols, workflows | Timeline (line + dots + labels) |
| UI mockups | Showing output/results | Nested rectangles mimicking UI |
| Real API names | Function calls, endpoints | Use actual names from docs |

Multi-zoom architecture for comprehensive diagrams:
- **Level 1:** Summary flow — simplified full pipeline overview
- **Level 2:** Section boundaries — labeled regions grouping related components
- **Level 3:** Detail — evidence artifacts inside each section

---

## Phase 4 — Generate JSON

**Large diagrams (>5 elements): build section by section. Never generate the entire file in one pass.**

1. Create base file with JSON wrapper + first section elements
2. Add one section per edit — think carefully about layout before writing JSON
3. Use descriptive string IDs: `"trigger_rect"`, `"arrow_fan_left"`, `"section_header"`
4. Namespace element IDs by section: section 1 uses `100xxx`, section 2 uses `200xxx`
5. Update cross-section bindings as you go

**JSON structure:**

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [],
  "appState": {
    "viewBackgroundColor": "#ffffff",
    "gridSize": 20
  },
  "files": {}
}
```

**Shape meaning:**

| Concept type | Shape | Why |
|---|---|---|
| Labels, descriptions | none (free-floating text) | Typography creates hierarchy |
| Section titles | none (free-floating text) | Font size/weight is enough |
| Timeline markers | small ellipse (10–20px) | Visual anchor |
| Start, trigger, input | ellipse | Soft, origin-like |
| End, output, result | ellipse | Completion |
| Decision, condition | diamond | Classic |
| Process, action | rectangle | Contained action |
| Abstract state | overlapping ellipses | Fuzzy, cloud-like |

**Rule: Default to no container.** Add shapes only when they carry meaning. Aim for <30% of text elements inside containers.

**Text element:**

```json
{
  "id": "element_id",
  "type": "text",
  "x": 100,
  "y": 100,
  "width": 200,
  "height": 30,
  "text": "Label text",
  "originalText": "Label text",
  "fontSize": 16,
  "fontFamily": 3,
  "textAlign": "center",
  "verticalAlign": "middle",
  "roughness": 0,
  "opacity": 100
}
```

**Settings:** `roughness: 0` (clean), `opacity: 100` (always), `fontFamily: 3`.

---

## Phase 5 — Render & Validate (Mandatory)

After generating JSON, render to PNG to verify visually. Run the render cycle until right.

**Render command (if render script exists):**
```bash
cd .claude/skills/excalidraw-diagram/references && uv run python render_excalidraw.py path/to/file.excalidraw
```

If no render script: open the `.excalidraw` file in https://excalidraw.com and take a screenshot.

**Review checklist:**
- Does the visual structure match the conceptual structure planned?
- Does each section use the intended pattern?
- Does the eye flow through in the designed order?
- Is the visual hierarchy correct — hero elements dominant?
- For technical: are evidence artifacts readable and properly placed?
- No text clipped by or overflowing containers
- No shapes/text overlapping unintentionally
- Arrows connect to the right elements
- Spacing is even and balanced

**Keep iterating** until the diagram passes both vision check and defect check. Typically 2–4 iterations.

---

## Rules

- Save to `outputs/diagrams/{name}.excalidraw`
- Read `identity/design-guide.md` for brand colors before choosing a palette — don't invent colors when brand ones exist
- Technical diagrams: research actual specs first, use real terminology
- Never repeat the same visual pattern across major sections
- Default to free-floating text; add containers only when they carry meaning
- `roughness: 0` always (unless explicitly asked for hand-drawn feel)
- Render and verify before delivering — never deliver unvalidated JSON
