---
name: office-pptx
category: office
description: >
  PowerPoint (.pptx) creation, editing, and analysis. Three workflows: create new
  from scratch (HTML→PPTX via pptxgenjs), edit existing (OOXML XML editing), or
  use an existing template (rearrange + replace workflow). Includes thumbnail
  generation for visual validation.
triggers:
  - "presentation"
  - "powerpoint"
  - "pptx"
  - "slides"
  - "slide deck"
  - "create slides"
  - "/office-pptx"
workflow_signals:
  - presentation
  - powerpoint
  - slide deck
  - pptx
  - slides creation
  - pitch deck
languages:
  - en
  - pt-br
---

# /office-pptx — PowerPoint Creation & Editing

Three distinct workflows. Read `identity/design-guide.md` and `_memory/company.md` before any visual work.

---

## Workflow Decision Tree

```
User wants to...
├── Read / extract text only                  → Text extraction (markitdown)
├── Create NEW presentation (no template)    → HTML→PPTX workflow (pptxgenjs)
├── Create NEW from existing template        → Template workflow (rearrange + replace)
└── Edit existing PPTX                       → OOXML XML editing workflow
```

---

## Step 1 — Text Extraction

```bash
python -m markitdown path-to-file.pptx
```

For raw XML access (comments, speaker notes, animations):

```bash
# Unpack the PPTX ZIP archive
unzip presentation.pptx -d pptx_unpacked/

# Key files:
# ppt/presentation.xml          - Main metadata
# ppt/slides/slide{N}.xml       - Individual slide contents
# ppt/notesSlides/notesSlide{N}.xml - Speaker notes
# ppt/theme/theme1.xml          - Colors and fonts
# ppt/media/                    - Images and media
```

---

## Step 2 — Design Approach (Before Writing Code)

**CRITICAL: Always state your design approach before writing any code.**

Consider:
1. **Subject matter** — what tone/industry/mood does it suggest?
2. **Brand colors** — check `identity/design-guide.md` first
3. **Content type** — narrative slides, data-heavy, conceptual?
4. **Audience** — executive, technical, client, internal?

**Palette selection** — if no brand colors, choose one:

| Palette | Colors |
|---|---|
| Deep Navy | `#1C2833`, `#2E4053`, `#AAB7B8`, `#F4F6F6` |
| Warm Blush | `#A49393`, `#EED6D3`, `#E8B4B8`, `#FAF7F2` |
| Sage & Terracotta | `#87A96B`, `#E07A5F`, `#F4F1DE`, `#2C2C2C` |
| Charcoal & Red | `#292929`, `#E33737`, `#CCCBCB` |
| Black & Gold | `#BF9A4A`, `#000000`, `#F4F6F6` |

**Layout rules:**
- Two-column layout is preferred for slides with charts/tables
- Never stack charts/tables below text in a single column
- Use full-slide layout for maximum chart impact

---

## Step 3a — Create New (HTML→PPTX Workflow)

1. Create one HTML file per slide (`720pt × 405pt` for 16:9)
2. Run through pptxgenjs to convert to `.pptx`
3. Generate thumbnails and visually verify

**HTML slide template:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { width: 720pt; height: 405pt; margin: 0; padding: 0; overflow: hidden;
           font-family: Arial, sans-serif; background: #1C2833; color: #F4F6F6; }
    .content { padding: 48pt; }
    h1 { font-size: 36pt; font-weight: 700; margin-bottom: 12pt; }
    p { font-size: 16pt; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="content">
    <h1>Slide Title</h1>
    <p>Content goes here</p>
  </div>
</body>
</html>
```

**Convert to PPTX:**
```javascript
// Requires: npm install pptxgenjs playwright
const pptxgen = require("pptxgenjs");
const { chromium } = require("playwright");

async function htmlToPptx(htmlFiles, outputPath) {
  const pptx = new pptxgen();
  const browser = await chromium.launch();
  
  for (const htmlFile of htmlFiles) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 960, height: 540 });
    await page.goto(`file://${htmlFile}`);
    const screenshot = await page.screenshot({ type: 'png' });
    
    const slide = pptx.addSlide();
    slide.addImage({ data: screenshot.toString('base64'), x: 0, y: 0, w: '100%', h: '100%' });
    await page.close();
  }
  
  await browser.close();
  await pptx.writeFile({ fileName: outputPath });
}
```

**Visual validation:**
```bash
# Generate thumbnail grid
python -c "
from pptx import Presentation
from pptx.util import Inches
import subprocess
# Convert to PDF then to images for thumbnail review
subprocess.run(['soffice', '--headless', '--convert-to', 'pdf', 'output.pptx'])
subprocess.run(['pdftoppm', '-jpeg', '-r', '100', 'output.pdf', 'thumb'])
"
```

Check thumbnails for: text cutoff, text overlap, positioning issues, contrast problems.

---

## Step 3b — Template Workflow (From Existing Template)

1. **Extract + analyze template:**
   ```bash
   python -m markitdown template.pptx > template-content.md
   soffice --headless --convert-to pdf template.pptx
   pdftoppm -jpeg -r 80 template.pdf thumb
   ```

2. **Create inventory:** List every slide with its index (0-based), layout type, and content structure. Save to `template-inventory.md`.

3. **Plan new presentation:** Map your content to template slides. Example:
   ```
   template_mapping = [0, 5, 5, 12, 20]
   # Use slide 5 twice (duplicate it)
   ```

4. **Rearrange slides via Python-pptx:**
   ```python
   from pptx import Presentation
   
   template = Presentation("template.pptx")
   new_prs = Presentation()
   new_prs.slide_width = template.slide_width
   new_prs.slide_height = template.slide_height
   
   indices = [0, 5, 5, 12, 20]
   for idx in indices:
       template_slide = template.slides[idx]
       # Copy slide layout and content...
   new_prs.save("working.pptx")
   ```

5. **Replace text:** Create `replacement-text.json` with new content per slide/shape, then apply.

6. **Validate:** Generate thumbnails and verify all slides.

---

## Step 3c — Edit Existing PPTX (OOXML)

```bash
# Unpack
unzip input.pptx -d unpacked/

# Edit XML files (mainly ppt/slides/slide{N}.xml)
# Find text to replace:
grep -n "old text" unpacked/ppt/slides/slide1.xml
```

```python
from lxml import etree

tree = etree.parse('unpacked/ppt/slides/slide1.xml')
# Find and replace text in <a:t> elements
ns = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
for t in tree.findall('.//a:t', ns):
    if t.text and 'old text' in t.text:
        t.text = t.text.replace('old text', 'new text')
tree.write('unpacked/ppt/slides/slide1.xml', xml_declaration=True, encoding='UTF-8')
```

```bash
# Repack
cd unpacked && zip -r ../output.pptx . && cd ..
```

---

## Dependencies

```bash
pip install python-pptx markitdown lxml defusedxml
npm install pptxgenjs playwright
sudo apt install libreoffice poppler-utils
```

---

## Rules

- Always state design approach before writing code
- Use web-safe fonts only: Arial, Helvetica, Times New Roman, Georgia, Courier New, Verdana
- Two-column layout preferred for charts/tables — never vertically stack
- Match layout structure to actual content count (2 items → 2-column, not 3-column)
- Validate with thumbnails before delivering — fix all cutoff/overlap issues
- Save to `outputs/presentations/{name}-{YYYY-MM-DD}.pptx`
