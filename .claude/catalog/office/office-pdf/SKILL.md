---
name: office-pdf
category: office
description: >
  PDF manipulation toolkit. Extract text and tables, create new PDFs, merge/split
  documents, handle forms, OCR scanned pages, add watermarks, and password-protect.
  Decision-tree driven: picks the right tool for each task.
triggers:
  - "pdf"
  - "extract pdf"
  - "merge pdf"
  - "create pdf"
  - "pdf form"
  - "fill pdf"
  - "/office-pdf"
workflow_signals:
  - pdf
  - document extraction
  - pdf merge
  - pdf split
  - pdf creation
  - ocr
  - pdf form
languages:
  - en
  - pt-br
---

# /office-pdf — PDF Processing Toolkit

Decision-tree driven. Always picks the right tool for the task.

---

## Workflow Decision Tree

```
User wants to...
├── Extract text (simple)          → pdftotext (CLI) or pypdf
├── Extract text + layout          → pdfplumber
├── Extract tables                 → pdfplumber + pandas
├── Create a new PDF               → reportlab
├── Merge / split PDFs             → pypdf (Python) or qpdf (CLI)
├── OCR a scanned PDF              → pytesseract + pdf2image
├── Fill a form                    → pypdf writer (with field detection)
├── Add watermark                  → pypdf merge_page()
├── Password protect / decrypt     → pypdf encrypt/decrypt
└── Convert to images              → pdftoppm (CLI)
```

---

## Step 1 — Text Extraction

**Simple text:**
```bash
pdftotext input.pdf output.txt
pdftotext -layout input.pdf output.txt    # preserve layout
pdftotext -f 1 -l 5 input.pdf output.txt  # pages 1–5 only
```

**Python with layout:**
```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        print(page.extract_text())
```

---

## Step 2 — Table Extraction

```python
import pdfplumber, pandas as pd

with pdfplumber.open("document.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        for table in page.extract_tables():
            if table:
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

combined = pd.concat(all_tables, ignore_index=True)
combined.to_excel("extracted_tables.xlsx", index=False)
```

---

## Step 3 — Create New PDFs

**Simple (direct canvas):**
```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

c = canvas.Canvas("output.pdf", pagesize=letter)
width, height = letter
c.drawString(100, height - 100, "Hello World")
c.save()
```

**Multi-page with styles:**
```python
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet

doc = SimpleDocTemplate("report.pdf", pagesize=letter)
styles = getSampleStyleSheet()
story = [
    Paragraph("Report Title", styles['Title']),
    Spacer(1, 12),
    Paragraph("Body content here...", styles['Normal']),
    PageBreak(),
    Paragraph("Page 2 Heading", styles['Heading1']),
]
doc.build(story)
```

---

## Step 4 — Merge / Split

**Merge:**
```python
from pypdf import PdfWriter, PdfReader

writer = PdfWriter()
for pdf_file in ["doc1.pdf", "doc2.pdf"]:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

with open("merged.pdf", "wb") as f:
    writer.write(f)
```

**Split (one page per file):**
```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    with open(f"page_{i+1}.pdf", "wb") as f:
        writer.write(f)
```

**CLI alternative:**
```bash
qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf
qpdf input.pdf --pages . 1-5 -- pages1-5.pdf
```

---

## Step 5 — OCR (Scanned PDFs)

```python
import pytesseract
from pdf2image import convert_from_path

images = convert_from_path('scanned.pdf')
text = ""
for i, image in enumerate(images):
    text += f"--- Page {i+1} ---\n"
    text += pytesseract.image_to_string(image)
    text += "\n\n"
print(text)
```

---

## Step 6 — Watermark / Protect

**Watermark:**
```python
from pypdf import PdfReader, PdfWriter

watermark = PdfReader("watermark.pdf").pages[0]
reader = PdfReader("document.pdf")
writer = PdfWriter()
for page in reader.pages:
    page.merge_page(watermark)
    writer.add_page(page)
with open("watermarked.pdf", "wb") as f:
    writer.write(f)
```

**Password protection:**
```python
writer.encrypt("userpassword", "ownerpassword")
```

---

## Step 7 — Convert to Images

```bash
# Convert PDF → images (one per page)
pdftoppm -jpeg -r 150 document.pdf page
# Creates: page-1.jpg, page-2.jpg, ...

# Specific range:
pdftoppm -jpeg -r 150 -f 2 -l 5 document.pdf page
```

---

## Dependencies

```bash
pip install pypdf pdfplumber reportlab pytesseract pdf2image
sudo apt install poppler-utils tesseract-ocr
```

---

## Rules

- Use `pdfplumber` (not `pypdf`) for text extraction — it handles layout better
- For table extraction: always check if table is not empty before creating DataFrame
- For OCR: convert to images first, then OCR each page individually
- Save outputs to `outputs/documents/{name}-{YYYY-MM-DD}.pdf`
