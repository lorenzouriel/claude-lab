---
name: document
description: >
  The complete document skill suite. Covers creating, editing, and analyzing
  PowerPoint presentations (.pptx), Word documents (.docx), PDF files (.pdf),
  Excel spreadsheets (.xlsx), and file system organization. Routes to the right
  sub-skill based on file type or task. Triggers on: "pptx", "powerpoint",
  "presentation", "slides", "deck", "docx", "word document", "word file",
  "tracked changes", "redline", "pdf", "pdf form", "fill pdf", "merge pdfs",
  "xlsx", "excel", "spreadsheet", "financial model", "formula", "organize files",
  "find duplicates", "clean up folder", "organize downloads", "file structure",
  "create a presentation", "edit a document", "extract text from pdf",
  "create a spreadsheet", "office file".
tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Agent
---

# Document Skill — Orchestrator

> Routes to 5 specialized sub-skills covering all document formats and file organization.
> Detects the file type or task from the user's request, then delegates.
> Sub-skills do the work — this file routes and quality-checks.

## Command Router

| Command | Sub-Skill | File Types / Trigger Phrases |
|---------|-----------|------------------------------|
| `/document pptx` | `pptx/SKILL.md` | `.pptx`, "PowerPoint", "presentation", "slides", "deck", "create slides", "edit presentation", "thumbnail grid", "template-based slides" |
| `/document docx` | `docx/SKILL.md` | `.docx`, "Word document", "word file", "tracked changes", "redline", "add comments", "create a report", "edit this document" |
| `/document pdf` | `pdf/SKILL.md` | `.pdf`, "PDF", "fill out form", "merge PDFs", "split PDF", "extract text from PDF", "OCR", "PDF form", "add watermark", "password protect" |
| `/document xlsx` | `xlsx/SKILL.md` | `.xlsx`, `.xlsm`, `.csv`, "Excel", "spreadsheet", "financial model", "create a table", "data analysis", "formula", "recalculate" |
| `/document organize` | `file-organizer/SKILL.md` | "organize files", "clean up folder", "find duplicates", "organize downloads", "restructure projects", "archive old files", "sort photos by date" |

## File Type Detection

If the user provides a file path, detect the extension and route automatically.
If the request is ambiguous (e.g., "help me with this file" without extension), ask:

> "What file format are you working with? PowerPoint (.pptx), Word (.docx), PDF (.pdf), Excel (.xlsx), or file organization?"

## Context-Gathering Protocol

Before invoking ANY sub-skill, collect:

1. **Task type:**
   - Create new file from scratch
   - Edit existing file
   - Analyze / extract content
   - Convert between formats
   - Organize / clean up files
2. **File path** (if editing an existing file) — or description of desired output (if creating new)
3. **Template** — does the user have an existing template to match or start from? (pptx/docx)

## Sub-Skill Capabilities

### `pptx` — PowerPoint
Four workflows:
- **Read/analyze** — text extraction via `markitdown`, raw XML via unpack for comments, speaker notes, animations
- **Create from scratch** — html2pptx workflow (HTML → PowerPoint via JavaScript). Design system: 18 curated color palettes, geometric patterns, typography treatments, layout innovations
- **Template-based** — inventory template slides (`inventory.py`), rearrange with `rearrange.py`, replace text with `replace.py`
- **Edit existing** — OOXML workflow (unpack → edit XML → `validate.py` → pack)
- **Visual validation** — mandatory thumbnail grid (`thumbnail.py`) to catch text cutoff, overlap, contrast issues

### `docx` — Word Documents
Four workflows:
- **Read/analyze** — text extraction via pandoc (`--track-changes=all`), raw XML for comments/formatting
- **Create new** — docx-js (JavaScript) for new documents
- **Edit existing** — Document library (Python OOXML manipulation)
- **Redlining** — tracked changes, batched 3–10 changes per pass. Default for editing others' documents or legal/business docs. Marks only changed text — preserves original `<w:r>` elements for unchanged runs.

### `pdf` — PDF Files
Operations via Python (pypdf, pdfplumber, reportlab) and CLI tools (qpdf, pdftotext):
- **Extract text** — pdfplumber with layout preservation
- **Extract tables** — pdfplumber → pandas → Excel
- **Create PDFs** — reportlab (canvas or Platypus flow)
- **Merge / split** — pypdf or qpdf
- **Fill forms** — pdf-lib or pypdf (see `forms.md`)
- **OCR scanned PDFs** — pytesseract + pdf2image
- **Password protect / watermark** — pypdf encrypt, merge_page

### `xlsx` — Excel Spreadsheets
Operations via pandas (data analysis) and openpyxl (formulas/formatting):
- **Read/analyze** — pandas for data analysis, statistics, exploration
- **Create new** — openpyxl with Excel formulas; recalc via `recalc.py` (mandatory)
- **Edit existing** — openpyxl preserving formulas and formatting
- **Financial models** — industry color coding (blue = inputs, black = formulas, green = cross-sheet links), number formatting standards ($#,##0; 0.0%; parentheses for negatives), formula construction rules

**Critical rule:** Always use Excel formulas (`=SUM(B2:B9)`) instead of calculating in Python.

### `file-organizer` — File System Organization
- **Analyze** current folder structure, file type breakdown, size distribution
- **Find duplicates** by hash, name, or similar size
- **Propose** a logical folder structure before making any changes
- **Execute** moves, renames, and archiving after user approval
- **Use cases:** Downloads cleanup, project archive separation, photo organization by date, work/personal separation

**Critical rule:** Always propose the organization plan and get user confirmation before executing moves or deletions.

## Routing Logic for Conversions

| Request | Sub-Skill | Notes |
|---------|-----------|-------|
| DOCX → PDF | `docx` | `soffice --convert-to pdf` |
| PPTX → PDF | `pptx` | `soffice --convert-to pdf` |
| PDF → images | `pdf` | `pdftoppm` |
| CSV → XLSX | `xlsx` | pandas read_csv + to_excel |
| Excel tables → PDF | `xlsx` then `pdf` | Export then convert |

## Quality Gates

Every sub-skill output MUST pass before delivery:

1. **Zero errors** — XLSX: zero formula errors (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?). PPTX/DOCX: XML validates without errors.
2. **Formula integrity** (xlsx) — No calculated values hardcoded in Python. All calculations as Excel formulas.
3. **Redline precision** (docx) — Tracked changes mark only what actually changed. Unchanged text reuses original `<w:r>` elements.
4. **Visual validation** (pptx) — Thumbnail grid reviewed and all layout issues resolved before delivery.
5. **Confirmation gate** (file-organizer) — Organization plan proposed and approved before any file moves or deletions.

## Output Format

Always report: what was created/modified, file path, dependency requirements needed. For PPTX, render and show thumbnail grid. For DOCX redlines, show the batch change summary. For XLSX, show recalc.py JSON confirming zero errors. For file organization, show before/after folder structure.
