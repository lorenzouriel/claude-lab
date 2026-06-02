# Skill Catalog

Reusable skills for the Company OS Generator. When `/workflow:new-company` runs Phase 4, it scans these skills against the client's workflow signals and copies matching folders from `.claude/skills/` into the generated workspace.

## Categories

| Category | Sub-skills | Best For |
|----------|-----------|----------|
| [content/instagram](#instagram) | 6 sub-skills | Carousels, Reels, captions, content strategy |
| [content/linkedin](#linkedin) | 4 sub-skills | Posts, planner, comment drafter, strategy |
| [content/x](#x) | 2 sub-skills | Tweet writer, X content strategy |
| [content/tiktok](#tiktok) | 2 sub-skills | Script writer, TikTok strategy |
| [content/youtube](#youtube) | 1 skill | Scripts, SEO, thumbnails, channel strategy |
| [content/newsletters](#newsletters) | 4 sub-skills | Human newsletters, optimization, Substack notes |
| [content/content-planner](#content-planner) | 1 skill | Cross-platform planning, repurposing |
| [content/humanizer](#humanizer) | 1 skill | AI-tell scrubbing for any platform |
| [content/image](#image) | 3 sub-skills | AI image generation, HTML-to-PNG rendering, asset fetching |
| [content/publish](#publish) | 2 sub-skills | Blotato (MCP) and Buffer (CLI) for multi-platform scheduling |
| [engineering-team/](#engineering-team) | 23 skills | Full engineering squad — architecture, frontend, backend, DevOps, security, AI/ML, cloud architects |
| [marketing/](#marketing) | 6 entries | Analytics, cold email, copywriting, landing page, launch strategy |
| [data/](#data) | 34 sub-skills | Full data analyst suite across 6 domains |
| [document/](#document) | 5 entries | Word, PDF, PowerPoint, Excel, file organization |
| [visual/](#visual) | 4 entries | HTML diagrams, Excalidraw, canvas art, image enhancement |
| [finance/](#finance) | 4 entries | Investment decisions, financial modeling, SaaS metrics |
| [c-level/](#c-level) | 22 sub-skills | Founder-mode virtual C-suite and strategic sprint pipeline |
| [product-manager/](#product-manager) | 24 sub-skills | Discovery, PRDs, roadmaps, user stories, PM artifacts |
| [project-manager/](#project-manager) | 5 entries | Meetings, Scrum, enterprise PM, internal comms, Jira |
| [mindset-discovery/](#mindset-discovery) | 4 entries | Critical thinking, anti-sycophancy, perspective tools |

---

## Skill Matching Table

Use this table during Phase 4 of the wizard to map workflow signals to skills.

| Workflow Signal (keyword in user answer) | Install from |
|------------------------------------------|-------------|
| instagram, carousel, carrossel, instagram post, visual post, reels | `content/instagram` |
| linkedin, linkedin post, write on linkedin, linkedin content | `content/linkedin` |
| x, twitter, tweet, thread, twitter content, x strategy | `content/x` |
| tiktok, tiktok content, short video, viral video, tiktok strategy | `content/tiktok` |
| youtube, video, channel, subscribers, watch time, youtube strategy | `content/youtube` |
| newsletter, email list, substack, weekly email, subscribers, long-form | `content/newsletters` |
| content plan, weekly content, cross-platform, repurpose, multi-platform | `content/content-planner` |
| humanize, ai text, sounds AI, ai tone, ai tells, make this human | `content/humanizer` |
| generate image, ai image, openrouter, text to image, create visual | `content/image` |
| render html image, html to png, playwright screenshot, carousel render | `content/image` |
| publish post, schedule post, blotato, buffer, social scheduling, auto-publish | `content/publish` |
| code review, pull request, github, gitlab | `engineering-team/code-reviewer` |
| architecture, system design, tech decisions, rfcs | `engineering-team/senior-architect` |
| api, backend, database, REST, GraphQL | `engineering-team/senior-backend` |
| frontend, react, nextjs, typescript, UI | `engineering-team/senior-frontend` |
| devops, ci/cd, kubernetes, docker, infrastructure | `engineering-team/senior-devops` |
| security, penetration testing, vulnerability, threat | `engineering-team/security-pen-testing` |
| incident, on-call, postmortem, runbook | `engineering-team/incident-commander` |
| aws, cloudformation, lambda, serverless | `engineering-team/aws-solution-architect` |
| landing page, product page, sales page, one-pager, web presence | `marketing/landing-page` |
| marketing copy, homepage copy, headline, website copy, cta | `marketing/copywriting` |
| product launch, go-to-market, gtm, product hunt, launch strategy | `marketing/launch` |
| cold email, cold outreach, sales email, prospecting | `marketing/cold-email` |
| GA4, Google Tag Manager, GTM, event tracking, analytics setup, UTM | `marketing/analytics-tracking` |
| campaign analytics, attribution, ROAS, CPA, marketing ROI, ad performance | `marketing/campaign-analytics` |
| data, csv, analysis, exploratory analysis, EDA, data quality, audit | `data/` |
| cohort, funnel, A/B test, segmentation, time series, root cause | `data/` |
| KPI, dashboard spec, data story, executive summary, metrics, insight | `data/` |
| data catalog, semantic model, dbt metrics, sql explain | `data/` |
| docx, word document, tracked changes, redline, contract | `document/docx` |
| pdf, extract pdf, merge pdf, pdf form | `document/pdf` |
| presentation, powerpoint, pptx, slide deck, pitch deck | `document/pptx` |
| excel, spreadsheet, xlsx, financial model, csv | `document/xlsx` |
| organize files, clean up folder, find duplicates, file structure | `document/file-organizer` |
| diagram, visualize, architecture diagram, flowchart, html diagram | `visual/visual-explainer` |
| excalidraw, draw a diagram, workflow diagram, concept map | `visual/excalidraw-diagram` |
| poster, canvas, art, branded visual, design a visual | `visual/canvas-design` |
| enhance image, sharpen, upscale, screenshot quality | `visual/image-enhancer` |
| ROI, IRR, NPV, payback period, build vs buy, capital allocation | `finance/business-investment-advisor` |
| financial model, DCF, ratio analysis, budget variance, rolling forecast | `finance/finance-skills` |
| financial analysis, financial statements, valuation, projections | `finance/financial-analyst` |
| saas metrics, MRR, ARR, churn, LTV, CAC, NRR, saas health | `finance/saas-metrics-coach` |
| founder mode, c-suite review, CFO review, CMO review, CTO review | `c-level/` |
| boardroom, board deliberation, office hours, strategy brief, decide | `c-level/` |
| product discovery, customer interview, JTBD, PRD, user story, roadmap | `product-manager/` |
| product strategy, OST, journey map, positioning, epic breakdown | `product-manager/` |
| feature ROI, pricing decision, acquisition channel, saas health scorecard | `product-manager/` |
| meeting transcript, meeting analysis, speaking ratio, filler words | `project-manager/meeting-analyzer` |
| sprint planning, velocity, retrospective, standup, scrum, backlog | `project-manager/scrum-master` |
| project plan, risk assessment, resource allocation, milestone, portfolio | `project-manager/senior-pm` |
| weekly update, 3P update, internal newsletter, status report, incident | `project-manager/team-communications` |
| jira, confluence, JQL, atlassian, jira automation | `project-manager/pm-skills` |

**Always include `mindset-discovery/` in every generated workspace** — it contains critical thinking tools that benefit all company types.

---

## How the Catalog Works

The catalog is a **registry** — it tells the new-company wizard which skills exist and where to copy them from.

All skills are **Tier 1**: the implementation lives in `.claude/skills/{category}/{skill-name}/`. When the wizard installs a skill, it copies the **entire folder** from the source — including all subdirectories (references/, scripts/, sub-skills/, templates/). The new company workspace gets the full implementation and is 100% decoupled from master-claude.

### Copy behavior

| Signal match | What gets copied |
|---|---|
| Single sub-skill (e.g. `engineering-team/code-reviewer`) | Copy `.claude/skills/engineering-team/code-reviewer/` into `{slug}/.claude/skills/engineering-team/code-reviewer/` |
| `engineering-team/` | Copy the entire `engineering-team/` folder — all 23 skills |
| Full category (e.g. `content/instagram`) | Copy `.claude/skills/content/instagram/` into `{slug}/.claude/skills/content/instagram/` — includes all sub-skills |
| `data/` | Copy the entire `data/` folder — all 6 sub-categories and 34 sub-skills |
| `c-level/` | Copy the entire `c-level/` folder — all 22 sub-skills |
| `product-manager/` | Copy the entire `product-manager/` folder — all 24 sub-skills |
| `mindset-discovery/` | Copy the entire `mindset-discovery/` folder — always included |

---

## content/

### instagram
Instagram carousels, Reels, and visual posts. Generates styled HTML + renders to 1080×1350 PNG via Playwright.

**Sub-skills in `skills/content/instagram/`:**

| Sub-skill | Purpose |
|---|---|
| `ig-carousel-writer` | Text-only carousel writer with hook + slide copy |
| `ig-carousel` | Full HTML carousel generator with Playwright render |
| `ig-content-strategy` | Full Instagram content strategy and channel plan |
| `ig-image-downloader` | Download images from Instagram posts |
| `ig-reel-downloader` | Download Reels from Instagram |
| `ig-reel-script-writer` | Script writer for Reels with 3-second hook formula |

### linkedin
LinkedIn post writing using proven hook formulas (2025–2026). Algorithm-aware formatting, humanizer pass, and scheduling.

**Sub-skills in `skills/content/linkedin/`:**

| Sub-skill | Purpose |
|---|---|
| `linkedin-post-writer` | Write posts with hook formulas and algorithm heuristics |
| `linkedin-content-planner` | Weekly/monthly content planning with pillars |
| `linkedin-comment-drafter` | Strategic comment drafting for engagement |
| `linkedin-content-strategy` | Full LinkedIn channel strategy |

### x
X (Twitter) content strategy and post writing. Single tweets, threads, algorithm-aware formatting.

**Sub-skills in `skills/content/x/`:**

| Sub-skill | Purpose |
|---|---|
| `x-tweet-writer` | Write single tweets and threads with hook formulas |
| `x-content-strategy` | Full X content strategy and growth plan |

### tiktok
TikTok content strategy and script writing. 3-second hook formula, viral patterns, trending sounds.

**Sub-skills in `skills/content/tiktok/`:**

| Sub-skill | Purpose |
|---|---|
| `tiktok-script-writer` | Video scripts with 3-second hook + optimal structure |
| `tiktok-content-strategy` | Full TikTok strategy for app growth |

### youtube
Full YouTube creator skill. Channel audits, retention-engineered scripts, hook writing, thumbnail briefs, video SEO, Shorts optimization, analytics, monetization, repurposing.

**Skill in `skills/content/youtube/`:** Single orchestrator with 14 sub-skills (analyze, audit, calendar, competitor, hook, ideate, metadata, monetize, repurpose, script, seo, shorts, strategy, thumbnail).

### newsletters
Human newsletter writing. Sounds like a person, not a machine.

**Sub-skills in `skills/content/newsletters/`:**

| Sub-skill | Purpose |
|---|---|
| `newsletter-human` | Write newsletters with copywriting frameworks (AIDA, PAS, PASTOR) |
| `newsletter-notes-extractor` | Extract newsletter notes from Substack |
| `newsletter-optimization` | AEO and delivery optimization |
| `newsletter-thumbnail` | Create visual thumbnails for newsletter articles |

### content-planner
Cross-platform content planning (LinkedIn + X + Instagram + TikTok). One theme → platform-native content for each channel. Repurposing map + readiness check.

**Skill in `skills/content/content-planner/`:** Single skill with repurposing map and platform rules references.

### humanizer
AI-tell scrubber for any platform. Removes phrases that sound machine-generated, applies voice fingerprint, applies platform-specific scrub rules.

**Skill in `skills/content/humanizer/`:** Single skill with universal + platform-specific scrub rules.

### image
Image creation and asset acquisition. Three sub-skills covering AI generation, HTML rendering, and web/screenshot fetching.

**Sub-skills in `skills/content/image/`:**

| Sub-skill | Purpose |
|---|---|
| `image-ai-generator` | Generate images via Openrouter API — test mode (fast/cheap) and production mode (high-quality); supports reference images for brand consistency |
| `image-creator` | Render self-contained HTML/CSS to pixel-perfect PNG via Playwright; handles all platform viewports (Instagram, LinkedIn, YouTube, etc.) |
| `image-fetcher` | Acquire assets from web image search, live URL screenshots, or user-provided files; organizes with metadata |

### publish
Multi-platform social media publishing and scheduling. Two sub-skills covering MCP-native and CLI-based workflows.

**Sub-skills in `skills/content/publish/`:**

| Sub-skill | Purpose |
|---|---|
| `blotato` | MCP-native publisher — upload media, publish or schedule posts across Instagram, LinkedIn, X, TikTok, YouTube; requires `BLOTATO_API_KEY` |
| `buffer` | CLI-based scheduler via Buffer CLI — queue or schedule posts, dry-run validation; requires `BUFFER_API_KEY`; free plan covers 3 channels |

---

## engineering-team/

Full engineering squad — 23 production-ready skills across core engineering, AI/ML/data, and specialized tools. All Python scripts use stdlib-only. Copy the entire folder for full coverage, or install individual sub-skills.

### Core Engineering (13 skills)

| Sub-skill | Focus |
|---|---|
| `senior-architect` | System design, ADRs, architecture patterns, tech decision frameworks |
| `senior-frontend` | React, Next.js, TypeScript, Tailwind — component reviews and scaffolding |
| `senior-backend` | API design, database optimization, server-side code quality |
| `senior-fullstack` | Project scaffolding, full-stack code quality |
| `senior-qa` | Test generation, coverage analysis, QA strategy |
| `senior-devops` | CI/CD, containers, IaC, deployment strategies |
| `senior-secops` | Security operations, vulnerability management |
| `code-reviewer` | PR review for 13 languages (Python, TS, Go, Java, C#, Rust...) |
| `senior-security` | Threat modeling, STRIDE, penetration testing |
| `aws-solution-architect` | Serverless, CloudFormation, cost optimization |
| `ms365-tenant-manager` | Microsoft 365 administration |
| `tdd-guide` | Test-driven development workflows |
| `tech-stack-evaluator` | Technology comparison, TCO analysis |

### AI/ML/Data (5 skills)

| Sub-skill | Focus |
|---|---|
| `senior-data-scientist` | Statistical modeling, experimentation, A/B tests |
| `senior-data-engineer` | Pipelines, ETL, data quality |
| `senior-ml-engineer` | Model deployment, MLOps, LLM integration |
| `senior-prompt-engineer` | Prompt optimization, RAG, agents |
| `senior-computer-vision` | Object detection, segmentation, production vision systems |

### Specialized Tools (5 skills)

| Sub-skill | Focus |
|---|---|
| `playwright-pro` | E2E testing automation (9 sub-skills) |
| `self-improving-agent` | Memory curation and self-improvement (5 sub-skills) |
| `stripe-integration-expert` | Payment integration, webhooks |
| `incident-commander` | Incident classification, timeline reconstruction, PIRs |
| `email-template-builder` | HTML email generation |

---

## marketing/

### analytics-tracking
GA4 setup, Google Tag Manager, event taxonomy, conversion tracking, tracking plans, and analytics audits.

### campaign-analytics
Multi-touch attribution modeling, funnel conversion analysis, ROI/ROAS/CPA calculation. Python analytics tools included.

### cold-email
B2B cold email sequences to new prospects. Human-sounding outreach that gets replies — not templates.

### copywriting
Conversion copywriting for homepages, landing pages, pricing pages, feature pages, and about pages. Copy frameworks and natural-transitions references included.

### landing-page
Premium single-page HTML with 3D CSS animations, GSAP ScrollTrigger, and mouse-parallax. One prompt → one polished `.html` file.

### launch-strategy
Phased launch planning for SaaS product and feature releases. Covers Product Hunt, beta launches, early access, waitlists, and GTM sequencing.

---

## data/

Full data analyst skill suite with 34 sub-skills across 6 domains. Copy the entire `data/` folder.

### data-quality-validation (5 sub-skills)
Data quality audits, programmatic EDA, query validation, schema mapping, metric reconciliation.

### data-analysis-investigation (7 sub-skills)
A/B test analysis, business metrics calculator, cohort analysis, funnel analysis, root-cause investigation, segmentation analysis, time-series analysis.

### data-storytelling-visualization (5 sub-skills)
Dashboard specification, data narrative builder, executive summary generator, insight synthesis, visualization builder.

### documentation-knowledge (7 sub-skills)
Analysis assumptions log, analysis documentation, data catalog entry, metric reconciliation, schema mapper, semantic model builder, SQL-to-business-logic translator.

### stakeholder-communication (5 sub-skills)
Analysis QA checklist, impact quantification, methodology explainer, stakeholder requirements gathering, technical-to-business translator.

### workflow-optimization (4 sub-skills)
Analysis planning, analysis retrospective, context packager, peer review template.

---

## document/

Full document processing suite. Covers all Office file formats and file system organization.

### docx
Create, edit, analyze, and redline Word (.docx) documents. Four workflows: read/analyze, create new, edit existing, redline with tracked changes.

### pdf
PDF manipulation: text extraction, table extraction, create new PDFs, merge/split, OCR scanned pages, watermarks, password protection.

### pptx
PowerPoint creation and editing. Four workflows: read/analyze, create from scratch (html2pptx), template-based rearrange+replace, OOXML XML editing. Visual validation via thumbnail grid.

### xlsx
Spreadsheet creation, editing, analysis. Zero formula errors required. Financial model color conventions. Handles CSV, XLSX, financial models, and data visualization.

### file-organizer
Analyze folder structure, find duplicates, propose organization plans, execute moves and renames. Always proposes before executing.

---

## visual/

Full visual creation suite. Covers HTML diagrams, Excalidraw files, canvas art, and image enhancement.

### visual-explainer
Self-contained HTML visual diagrams. Decision-tree driven: Mermaid for flowcharts/sequence/ER/state, CSS Grid for text-heavy architecture, Chart.js for dashboards. Also powers: diff reviews, plan reviews, project recaps, slide decks.

### excalidraw-diagram
Excalidraw JSON diagram files. Evidence artifacts, multi-zoom architecture, named visual patterns (fan-out, convergence, timeline, tree, assembly line).

### canvas-design
Museum-quality posters, branded visuals, and art pieces. Design-philosophy-led output in `.png` or `.pdf` format.

### image-enhancer
Improve resolution, sharpen screenshots, reduce compression artifacts, upscale images, batch image processing.

---

## finance/

### business-investment-advisor
Evaluates business investments using ROI, IRR, NPV, and payback period. Covers equipment, real estate, hiring, technology, vendor contracts. Delivers a clear go/no-go recommendation.

### finance-skills
Financial modeling toolkit. Ratio analysis, DCF valuation, budget variance, and rolling forecast using 4 stdlib-only Python tools.

### financial-analyst
5-phase structured financial analysis workflow: Scoping → Data Analysis → Insight Generation → Reporting → Recommendations.

### saas-metrics-coach
Senior SaaS CFO advisor. Takes raw revenue and customer numbers, calculates health metrics (MRR, ARR, churn, NRR, LTV, CAC), benchmarks against industry standards, delivers prioritized advice.

---

## c-level/

Founder-mode virtual executive team. 22 sub-skills across the full strategic sprint pipeline.

**Entry points:** `founder-mode` (auto-routes any question), `onboard` (first-run setup)

**C-suite reviews:** cfo, cmo, cto, cpo, cro, ciso, cdo, caio, cco, vpe, gc

**Pipeline:** office-hours → brief → role reviews → boardroom → cross-eval → decide → execute → freeze → post-mortem

Copy the entire `c-level/` folder.

---

## product-manager/

Full PM skill suite with 24 sub-skills across 5 domains.

**Discovery & Research:** discovery-process, discovery-interview-prep, jobs-to-be-done, company-research

**Problem Framing & Strategy:** problem-statement, opportunity-solution-tree, customer-journey-map, positioning-statement, product-strategy-session, roadmap-planning

**PM Artifacts:** prd-development, user-story, user-story-mapping, epic-breakdown-advisor, storyboard

**Finance & Business Metrics:** business-health-diagnostic, saas-revenue-growth-metrics, saas-economics-efficiency-metrics, finance-metrics-quickref, finance-based-pricing-advisor, acquisition-channel-advisor, feature-investment-advisor

**Facilitation & Leadership:** workshop-facilitation, executive-onboarding-playbook

Copy the entire `product-manager/` folder.

---

## project-manager/

Project operations and team management. 5 sub-skills.

### meeting-analyzer
Analyzes transcripts (Granola, Otter, Fireflies, Zoom) for behavioral patterns, speaking ratio, filler words, and coaching feedback.

### scrum-master
Sprint analytics, probabilistic forecasting (Monte Carlo), and team health scoring. Input: Jira sprint JSON exports.

### senior-pm
Enterprise project management. Portfolio health, quantitative risk analysis (EMV, Monte Carlo), WSJF prioritization, stakeholder alignment, executive reporting.

### team-communications
Internal comms: 3P updates, company newsletters, FAQ roundups, incident reports, leadership updates.

### pm-skills (Atlassian)
6 specialized PM agents for Jira, Confluence, JQL, Jira automation, and Atlassian administration.

---

## mindset-discovery/

Critical thinking tools. **Always installed in every generated workspace.**

### sycophancy
Critical thinking partner with constructive disagreement as default. Finds untested assumptions, argues the opposing case, holds position unless given new evidence.

### caveman
Terse response mode — strips filler while preserving technical accuracy.

### take-a-step-back
Forces perspective reset before continuing. Useful when stuck in local optima or too close to a problem.

### last-30-days
Structured reflection on the past 30 days — what worked, what didn't, what to change.
