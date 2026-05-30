# Skill Catalog

Reusable skills for the Company OS Generator. When `/workflow:new-company` runs Phase 4, it scans these skills against the client's workflow signals and copies matching ones (adapted to the company's language and context) into the generated workspace.

## Categories

| Category | Skills | Best For |
|----------|--------|----------|
| [content/](#content) | 6 | Carousels (HTML+PNG), social media, newsletters, SEO, email campaigns, video |
| [dev/](#dev) | 6 | Code review, PRs, API docs, bug reports, tech specs, landing pages |
| [marketing/](#marketing) | 4 | Ad copy, campaign briefs, competitor analysis, growth reports |
| [ops/](#ops) | 4 | Meeting notes, project briefs, weekly reviews, SOPs |
| [data/](#data) | 3 | Data analysis, report building, KPI dashboards |
| [office/](#office) | 4 | Word documents, PDF manipulation, PowerPoint, Excel/spreadsheets |
| [visual/](#visual) | 2 | HTML visual diagrams (Mermaid/CSS), Excalidraw diagrams |
| [mindset/](#mindset) | 1 | Critical thinking partner (anti-sycophancy) |

---

## Skill Matching Table

Use this table during Phase 4 of the wizard to map workflow signals to skills.

| Workflow Signal (keyword in user answer) | Skills to Install |
|------------------------------------------|-------------------|
| carousel, carrossel, slides, swipe post, visual content, instagram carousel | `content/carousel-post` |
| landing page, product page, sales page, one-pager, web presence | `dev/landing-page` |
| word, docx, document editing, tracked changes, redline, contract | `office/office-docx` |
| pdf, extract pdf, merge pdf, pdf form, ocr | `office/office-pdf` |
| presentation, powerpoint, pptx, slide deck, pitch deck | `office/office-pptx` |
| excel, spreadsheet, xlsx, financial model, csv | `office/office-xlsx` |
| diagram, visualize, architecture diagram, flowchart, comparison table | `visual/visual-explainer` |
| excalidraw, draw a diagram, workflow diagram, concept map | `visual/excalidraw-diagram` |
| real talk, honest feedback, pressure test, devil advocate, critical review | `mindset/sycophancy` |
| social media, instagram, tiktok, linkedin post, posts | `content/social-media-post` |
| newsletter, email list, substack, weekly email | `content/newsletter` |
| blog, seo, google traffic, articles, long-form | `content/seo-article` |
| email campaign, drip, sequences, nurture | `content/email-campaign` |
| youtube, video, reels, shorts, script | `content/video-script` |
| code review, pull request, github, gitlab | `dev/code-review`, `dev/pr-description` |
| documentation, api docs, readme, technical docs | `dev/api-documentation` |
| bugs, bug reports, issue tracking, defects | `dev/bug-report` |
| specs, technical writing, rfcs, architecture docs | `dev/technical-spec` |
| ads, google ads, meta ads, paid traffic, facebook ads | `marketing/ad-copy`, `marketing/campaign-brief` |
| competitors, market research, competitive analysis | `marketing/competitor-analysis` |
| growth, monthly report, metrics report, performance report | `marketing/growth-report` |
| meetings, standups, team calls, 1:1s | `ops/meeting-notes` |
| projects, kickoff, scoping, project planning | `ops/project-brief` |
| weekly review, retrospective, weekly sync | `ops/weekly-review` |
| sop, processes, procedures, documentation, playbook | `ops/sop-writer` |
| data, csv, spreadsheet, excel, analysis | `data/data-analysis` |
| kpi, dashboards, reports, numbers, metrics | `data/report-builder`, `data/kpi-dashboard` |

---

## Skill Schema

Every catalog skill follows this YAML frontmatter + body format:

```markdown
---
name: skill-name
category: content|dev|marketing|ops|data
description: >
  One or two sentences. What it does and when to use it.
triggers:
  - "exact phrase the user would say"
  - "another trigger phrase"
workflow_signals:
  - keyword
  - another keyword
languages:
  - en
  - pt-br
---

# /skill-name

[Skill instructions body]
```

---

## Adding Skills to the Catalog

1. Create a new folder under the appropriate category: `.claude/catalog/{category}/{skill-name}/`
2. Create `SKILL.md` following the schema above
3. Add the skill's `workflow_signals` to the Matching Table above
4. If PT-BR is supported, create `SKILL.pt-br.md` alongside it

---

## content/

### carousel-post
Carousel and visual posts for Instagram, TikTok, LinkedIn. Generates styled HTML + renders to 1080×1350 PNG via Playwright. Named layouts (COVER, SOLO, DUO, NUMBER, QUOTE, FINAL CTA), brand color alternation, feed sequence planning, auto-caption, and optional AI photo generation.

### social-media-post
Creates platform-optimized social media posts for Instagram, LinkedIn, X, TikTok. Reads brand voice and identity before writing.

### newsletter
Writes email newsletters with subject line, hook, body sections, and CTA. Adapts length and format for weekly/bi-weekly cadences.

### seo-article
Long-form SEO content (800-2000 words) with keyword targeting, meta description, and internal linking recommendations.

### email-campaign
Marketing email sequences — welcome series, nurture drips, promotional campaigns. One email at a time or full sequence.

### video-script
YouTube or short-form video scripts with hook, body, and CTA. Includes thumbnail concept and description.

---

## dev/

### code-review
Structured code review with severity-labeled findings (critical/major/minor/nit). Reads the diff and comments on correctness, security, and maintainability.

### pr-description
Generates PR title + description from a diff or commit list. Summary, motivation, test plan, screenshots checklist.

### api-documentation
API docs from route handlers or code. Endpoint, method, params, request/response schema, examples, error codes.

### bug-report
Structured bug report from a description. Title, severity, steps to reproduce, expected vs actual, environment, logs.

### technical-spec
Technical specification document. Problem, solution, architecture, implementation plan, open questions.

---

## marketing/

### ad-copy
Google Search + Meta (Facebook/Instagram) ad copy. Headlines, descriptions, primary text, CTAs. Multiple variants.

### campaign-brief
Marketing campaign strategy brief. Goal, audience, message, channels, budget guidance, timeline, KPIs.

### competitor-analysis
Competitor research report. Overview, positioning, strengths/weaknesses, product comparison, strategic gaps.

### growth-report
Weekly or monthly growth summary. Key metrics, what worked, what didn't, next period priorities.

---

## ops/

### meeting-notes
Meeting transcript → structured notes with context, decisions made, and action items with owners and deadlines.

### project-brief
Project kickoff document. Objective, scope, deliverables, timeline, stakeholders, risks, success criteria.

### weekly-review
Weekly wins, blockers, and next week plan. Structured for async sharing or personal retrospective.

### sop-writer
Standard operating procedure (SOP) document. Purpose, trigger, roles, step-by-step process, exceptions, related docs.

---

## data/

### data-analysis
Analyze a CSV, spreadsheet, or pasted data. Summary statistics, patterns, anomalies, and plain-English insights.

### report-builder
KPI report from raw numbers. Executive summary, metric breakdown, trend commentary, recommendations.

### kpi-dashboard
Generates a self-contained HTML KPI dashboard from data. No build step — inline charts (Chart.js via CDN).

---

## office/

### office-docx
Create, edit, analyze, and redline Word (.docx) documents. Decision-tree driven: text extraction (pandoc), new doc creation (docx-js), OOXML editing (Python), or redlining with tracked changes.

### office-pdf
PDF manipulation: text extraction, table extraction, create new PDFs, merge/split, OCR scanned pages, watermarks, password protection.

### office-pptx
PowerPoint creation and editing. Three workflows: HTML→PPTX for new decks, template rearrange+replace for existing templates, OOXML XML editing for existing files. Includes thumbnail validation.

### office-xlsx
Spreadsheet creation, editing, analysis. Zero formula errors required. Financial model color conventions. Handles CSV, XLSX, financial models, and data visualization.

---

## visual/

### visual-explainer
Self-contained HTML visual diagrams. Decision-tree driven rendering (Mermaid for topology/flow/sequence/ER/state, CSS Grid for text-heavy architecture, Chart.js for dashboards). Multiple aesthetic directions with anti-slop rules.

### excalidraw-diagram
Excalidraw JSON diagram files that make visual arguments. Evidence artifacts, multi-zoom architecture, named visual patterns (fan-out, convergence, timeline, tree, assembly line). Render-and-validate loop required.

---

## mindset/

### sycophancy
Critical thinking partner with constructive disagreement as default. Finds untested assumptions, argues the opposing case, holds position unless given new evidence. Use for pressure-testing ideas, decisions, or plans.
