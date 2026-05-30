---
name: office-docx
category: office
description: >
  Create, edit, analyze, and redline Word (.docx) documents. Decision-tree driven:
  picks the right tool for reading (pandoc), creating (docx-js), editing (Python OOXML),
  or redlining with tracked changes (batched OOXML workflow).
triggers:
  - "word document"
  - "docx"
  - "edit document"
  - "tracked changes"
  - "redline"
  - "/office-docx"
workflow_signals:
  - word
  - docx
  - document editing
  - tracked changes
  - redline
  - contract review
  - legal document
  - report creation
languages:
  - en
  - pt-br
---

# /office-docx — Word Document Creation, Editing & Analysis

Handles `.docx` files end-to-end. Before doing anything, read identity and context files if available.

---

## Workflow Decision Tree

```
User wants to...
├── Read / extract text only          → Text Extraction (pandoc)
├── Analyze structure, comments, XML  → Raw XML Access (unpack)
├── Create a NEW document             → Creation Workflow (docx-js)
├── Edit your OWN simple document     → Basic OOXML Editing (Python)
└── Edit someone else's document,     → Redlining Workflow (tracked changes)
    or legal / business / formal doc
```

---

## Step 1 — Read Workflow (Text Extraction)

Use **pandoc** when you only need the text content:

```bash
# Convert to markdown, preserving tracked changes
pandoc --track-changes=all path-to-file.docx -o output.md
# Options: --track-changes=accept|reject|all
```

**Raw XML access** (for comments, formatting, embedded media):

```bash
# Unpack the docx ZIP archive
python -c "
import zipfile, shutil
shutil.copytree('doc.docx', 'doc_unpacked', dirs_exist_ok=True)
" 
# Or: unzip doc.docx -d doc_unpacked/

# Key files:
# word/document.xml     - Main content
# word/comments.xml     - Comments
# word/media/           - Images
# Tracked: <w:ins> (insertions), <w:del> (deletions)
```

---

## Step 2 — Creation Workflow (New Document)

Use **docx-js** (JavaScript) to create new `.docx` files from scratch.

```javascript
// Install: npm install docx
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        text: "Document Title",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        children: [
          new TextRun("Normal paragraph text. "),
          new TextRun({ text: "Bold text.", bold: true }),
        ],
      }),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  require("fs").writeFileSync("output.docx", buffer);
  console.log("Document created.");
});
```

**Code style rules:**
- Write concise code, avoid verbose variable names
- No unnecessary print statements
- Export via `Packer.toBuffer()` always

---

## Step 3 — Editing Workflow (Existing Document)

Use **Python + OOXML** for editing. The docx format is a ZIP archive of XML files.

```python
import zipfile, os, shutil
from lxml import etree

# 1. Unpack
def unpack(docx_path, out_dir):
    with zipfile.ZipFile(docx_path, 'r') as z:
        z.extractall(out_dir)

# 2. Edit word/document.xml
def edit_document(out_dir):
    xml_path = os.path.join(out_dir, 'word', 'document.xml')
    tree = etree.parse(xml_path)
    root = tree.getroot()
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    # Find and replace text
    for t in root.findall('.//w:t', ns):
        if t.text and 'old phrase' in t.text:
            t.text = t.text.replace('old phrase', 'new phrase')
    
    tree.write(xml_path, xml_declaration=True, encoding='UTF-8', standalone=True)

# 3. Repack
def repack(in_dir, docx_path):
    with zipfile.ZipFile(docx_path, 'w', zipfile.ZIP_DEFLATED) as z:
        for root_dir, dirs, files in os.walk(in_dir):
            for file in files:
                file_path = os.path.join(root_dir, file)
                arcname = os.path.relpath(file_path, in_dir)
                z.write(file_path, arcname)

unpack('input.docx', 'unpacked/')
edit_document('unpacked/')
repack('unpacked/', 'output.docx')
```

---

## Step 4 — Redlining Workflow (Tracked Changes)

For reviewing someone else's document or legal/formal editing. This is the professional standard.

**Principle: Minimal, precise edits.** Only mark what actually changes.

```python
# BAD — replaces entire sentence (unprofessional)
'<w:del><w:r><w:delText>The term is 30 days.</w:delText></w:r></w:del>'
'<w:ins><w:r><w:t>The term is 60 days.</w:t></w:r></w:ins>'

# GOOD — marks only the changed word
'<w:r><w:t>The term is </w:t></w:r>'
'<w:del><w:r><w:delText>30</w:delText></w:r></w:del>'
'<w:ins><w:r><w:t>60</w:t></w:r></w:ins>'
'<w:r><w:t> days.</w:t></w:r>'
```

**Redline process:**

1. **Extract current text:**
   ```bash
   pandoc --track-changes=all input.docx -o current.md
   ```

2. **Plan all changes:** Identify every edit needed. Group into batches of 3–10 by section, type, or proximity. Do NOT use markdown line numbers — they don't map to XML.

3. **Unpack and locate text:**
   ```bash
   # Find text in XML to see how it splits across <w:r> elements
   grep -n "phrase to change" unpacked/word/document.xml
   ```

4. **Implement in batches** (one script per batch):
   - Use `get_node` / grep to find elements by surrounding context
   - Apply `<w:ins>` and `<w:del>` tags with a consistent `w:rsid`
   - Run script, verify, move to next batch

5. **Repack and verify:**
   ```bash
   pandoc --track-changes=all reviewed.docx -o verification.md
   grep "original phrase" verification.md  # Should be 0 results
   grep "new phrase" verification.md       # Should exist
   ```

---

## Step 5 — Convert to Images (Optional)

For visual analysis:

```bash
# DOCX → PDF
soffice --headless --convert-to pdf document.docx

# PDF → JPEG (each page)
pdftoppm -jpeg -r 150 document.pdf page
# Creates: page-1.jpg, page-2.jpg, ...
```

---

## Dependencies

Install what you need for the chosen workflow:

| Tool | Install | Used for |
|------|---------|----------|
| pandoc | `sudo apt install pandoc` | Text extraction |
| docx (npm) | `npm install docx` | Creating new docs |
| lxml | `pip install lxml defusedxml` | Editing XML |
| LibreOffice | `sudo apt install libreoffice` | PDF conversion |
| poppler | `sudo apt install poppler-utils` | PDF→images |

---

## Rules

- Always unpack before editing; always repack after
- Redlining: batch 3–10 changes per script run — smaller batches, easier debugging
- Only mark what changed — repeating unchanged text in redlines is unprofessional
- Verify after every batch with pandoc before continuing
- Save output to `outputs/documents/{name}-{YYYY-MM-DD}.docx`
