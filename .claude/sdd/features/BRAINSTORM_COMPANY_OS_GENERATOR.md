# BRAINSTORM: Company OS Generator

> Exploratory session to clarify intent and approach before requirements capture

## Metadata

| Attribute | Value |
|-----------|-------|
| **Feature** | COMPANY_OS_GENERATOR |
| **Date** | 2026-05-28 |
| **Author** | brainstorm-agent |
| **Status** | Ready for Define |

---

## Initial Idea

**Raw Input:** Build a step-by-step methodology for starting a new project from scratch. The goal is to give any company, startup, or solo developer a "full company" to work with — customized skills, agents, brand, wiki, and dashboard. Similar to what MazyOS does but generated dynamically per client, with an Obsidian PARA wiki and a live agent/skill dashboard.

**Context Gathered:**
- `MazyOS/` is an existing Portuguese-language business OS with `/instalar` wizard, `_memoria/`, `identidade/`, `.claude/skills/`, and profile templates
- master-claude already has 50+ agents, a skills catalog, and a dashboard (React + Phaser) for squad visualization
- MazyOS `/instalar` covers: profile type, company identity, voice, focus, brand — in 6 phases via conversational interview
- master-claude has a skills/agents system but no wizard to bootstrap a new company workspace

**Technical Context Observed:**

| Aspect | Observation | Implication |
|--------|-------------|-------------|
| Generator location | Lives inside master-claude as a new `/workflow:new-company` command | Does not need a separate repo |
| Output | Standalone company repo (like MazyOS) per client | One folder per company, fully self-contained |
| Existing patterns | MazyOS `/instalar` + master-claude agent system | Generator extends both, doesn't replace either |
| Skills sourcing | master-claude has skill catalog; MazyOS has PT-BR skills | New catalog needed that covers both + generates missing |
| Dashboard | master-claude has React+Phaser squad dashboard | Company dashboard is simpler — HTML or lightweight React |

---

## Discovery Questions & Answers

| # | Question | Answer | Impact |
|---|----------|--------|--------|
| 1 | Who is the primary user of this methodology? | Both: you run it with clients (template + service model) | Generator must be easy for you to run AND produce something clients can maintain independently |
| 2 | How does this relate to master-claude? | Standalone repo per company, like MazyOS | Generator lives in master-claude; output is a separate folder/repo |
| 3 | What language should generated workspaces use? | Match client language (EN, PT-BR, ES, etc.) | Wizard must detect/ask language first; all generated files must respect it |
| 4 | How should the Obsidian wiki relate to the workspace? | Subfolder inside the company repo (`wiki/` with PARA structure) | Single repo, Obsidian opens `wiki/` as vault; Claude can reference it |
| 5 | What does the dashboard need to show? | Company profile overview + active agents/skills (live) + wiki PARA navigator | Three panels; wiki navigator can be deferred to v2 |
| 6 | How should skills be assembled? | Catalog first, then generate custom ones for gaps | Build a categorized skill catalog; custom generation as a post-setup step |

---

## Sample Data Inventory

| Type | Location | Count | Notes |
|------|----------|-------|-------|
| Existing wizard | `MazyOS/.claude/skills/instalar/SKILL.md` | 1 | Strong reference for conversation flow and file population |
| Profile templates | `MazyOS/templates/perfis/` | 4 | solopreneur, freelancer, agency, company — extend these |
| Memory templates | `MazyOS/_memoria/` | 3 | empresa, preferencias, estrategia — adapt and expand |
| Identity template | `MazyOS/identidade/design-guide.md` | 1 | Extend with more brand asset fields |
| Existing skills | `MazyOS/.claude/skills/` | 15 | PT-BR catalog baseline |
| master-claude agents | `.claude/agents/` | 50+ | Agent pool to reference in generated workspace |

**How samples will be used:**
- MazyOS `/instalar` flow → reference for wizard conversation pattern (ask one thing at a time, no bureaucratic forms)
- Profile templates → extend with EN versions and new profile types (SaaS, e-commerce, content studio)
- Memory/identity templates → generated and pre-filled by wizard from interview answers

---

## Approaches Explored

### Approach A: Phased Wizard with Layered Generation ⭐ Recommended

**Description:** `/workflow:new-company` runs 8 sequential phases. Each phase collects data conversationally, confirms, then advances. After all phases, generation runs as a single batch — all files created in parallel.

**Phases:**
```
Phase 1: Language + Profile type
Phase 2: Company identity + revenue model + target audience
Phase 3: Goals & KPIs (90-day focus, what they measure)
Phase 4: Workflow needs + tools/integrations + channels + biggest pain
Phase 5: Brand (colors, fonts, logo, tone, writing examples)
Phase 6: Asset import (existing docs, SOPs, guides → wiki/Resources)
Phase 7: Wiki kickstart (active projects, ongoing areas)
Phase 8: Generation (folder structure + skills + wiki + dashboard)
```

**Pros:**
- Predictable, resumable, clear separation between interview and build
- Phase 6 (asset import) makes the wiki useful from day one — not just empty scaffolding
- Generation phase can parallelize (create 5+ files at once)
- Easy to skip optional phases (Phase 6 has explicit "skip for now" path)

**Cons:**
- 8 phases feels long — needs tight question discipline (no filler, no repetition)
- Less adaptive than a free conversation

**Why Recommended:** Predictable = auditable. You can run this consistently across different clients and always know what was captured and what wasn't.

---

### Approach B: Conversational Intelligence

**Description:** Single long conversation. Claude extracts everything organically — asks follow-ups based on answers, never asks for information already inferred.

**Pros:**
- Highest UX quality
- Adapts dynamically to what the user says

**Cons:**
- No clear resume point if session breaks
- Hard to run consistently across clients — output quality varies by conversation
- Difficult to audit what was captured

---

### Approach C: Profile Templates + Wizard for Gaps

**Description:** Curated templates (content-creator, developer, agency, ops-heavy). Wizard only fills blanks the template doesn't cover.

**Pros:**
- Fastest path to working workspace
- 80% pre-built

**Cons:**
- Clients who don't fit a template get a worse result
- Templates fossilize assumptions — hard to update across all clients later

---

## Selected Approach

| Attribute | Value |
|-----------|-------|
| **Chosen** | Approach A — Phased Wizard with Layered Generation |
| **User Confirmation** | 2026-05-28 |
| **Reasoning** | Predictable, auditable, consistent across clients; asset import phase makes wiki immediately useful |

---

## Key Decisions Made

| # | Decision | Rationale | Alternative Rejected |
|---|----------|-----------|----------------------|
| 1 | Standalone repo per company (like MazyOS) | Each client gets a self-contained workspace they can maintain independently | Module inside master-claude (would couple client data to your personal tooling) |
| 2 | Subfolder wiki/ with PARA inside the company repo | One folder, Obsidian opens wiki/ as vault, Claude reads same files | Separate Obsidian vault (sync complexity), or same root (messier file organization) |
| 3 | Language matches client (wizard asks first) | International clients, better UX, not tied to PT-BR | EN-only (excludes PT-BR clients), PT-BR only (excludes international) |
| 4 | Catalog + generate missing for skills | Fast baseline with room for custom gaps | Catalog-only (too rigid), generate-from-scratch (too slow, inconsistent quality) |
| 5 | 8-phase wizard with explicit asset import phase | Assets (logos, SOPs, brand guides) must go in before generation or wiki is empty scaffolding | Asset import as a post-setup step (most clients never go back to do it) |

---

## Features Removed (YAGNI)

| Feature Suggested | Reason Removed | Can Add Later? |
|-------------------|----------------|----------------|
| Wiki PARA navigator in dashboard (v1) | Requires parsing live folder structure; complex for MVP | Yes — v2 |
| Live hook-based skill/agent tracking | Claude Code hooks write state files; complex to wire up for MVP | Yes — v2 |
| Full multi-language support (ES, FR, etc.) | Start with EN + PT-BR; add other languages once structure is stable | Yes |
| Custom agent generation during setup | Catalog agents cover most cases; generating new agents is high-effort and QA-heavy | Yes — after catalog is exhausted |
| Asset file parsing/indexing (OCR, PDF extraction) | Phase 6 imports files by moving them; parsing content is a separate feature | Yes |
| Client-facing onboarding UI (non-Claude) | Claude Code wizard is sufficient; web UI is over-engineering for v1 | Yes |

---

## Generated Workspace Structure

```
{company-slug}/
├── .claude/
│   ├── skills/              — skills selected from catalog + custom-generated ones
│   └── agents/              — any custom agents generated for this company
├── CLAUDE.md                — generated from profile template, adapted to company
├── _memory/
│   ├── company.md           — identity, revenue model, audience, team
│   ├── preferences.md       — tone, style, writing examples, what to avoid
│   └── strategy.md          — 90-day goals, KPIs, biggest pain, current priorities
├── identity/
│   ├── design-guide.md      — colors, fonts, logo, visual style, dos/don'ts
│   └── assets/              — logo files, brand images
├── wiki/                    — Obsidian vault (open this folder in Obsidian)
│   ├── Projects/            — active work with deadlines (from Phase 7)
│   ├── Areas/               — ongoing responsibilities (marketing, ops, product...)
│   ├── Resources/           — reference material imported in Phase 6
│   └── Archives/            — completed/inactive projects
├── data/                    — files to analyze (CSV, PDF, spreadsheets)
├── outputs/                 — generated content (gitignored)
├── dashboard/
│   ├── index.html           — company profile + installed skills panel
│   └── state.json           — skill/agent activation state (updated by hooks)
└── .gitignore               — protects outputs/, _memory/ (if private)
```

---

## Incremental Validations

| Section | Presented | User Feedback | Adjusted? |
|---------|-----------|---------------|-----------|
| Overall scope & target user | ✅ | "Both (template + service)" | No — matched |
| Architecture (standalone vs module) | ✅ | Standalone, like MazyOS | No — matched |
| Wiki placement (same folder vs subfolder vs separate) | ✅ | Subfolder inside repo | No — matched |
| Dashboard scope | ✅ | Profile overview + active agents/skills + wiki navigator | Yes — wiki navigator deferred to v2 |
| Skill assembly approach | ✅ | Catalog + generate missing | No — matched |
| Phase structure (6 phases → 8 phases) | ✅ | "Looks good, what's missing?" → expanded to 8 | Yes — added Goals/KPIs, Tools, Asset Import |
| Final phase map (8 phases) | ✅ | "Looks good" | No — confirmed |

---

## Suggested Requirements for /define

### Problem Statement (Draft)
A solo developer, startup, or company needs a fully configured Claude workspace — with custom skills, brand identity, memory, and an Obsidian wiki — but has no structured methodology to build one from scratch.

### Target Users

| User | Pain Point |
|------|------------|
| Lorenzo (you, the service provider) | Running this consistently across different clients without reinventing the setup each time |
| Client (solo dev / startup / company) | Starts with a blank Claude workspace, has no idea which skills to install or how to structure their knowledge |

### Success Criteria (Draft)
- [ ] Running `/workflow:new-company` produces a complete, working standalone workspace in under 20 minutes of wizard interaction
- [ ] Generated workspace includes: CLAUDE.md, all 3 memory files, design-guide, at least 3 relevant skills, wiki/ PARA structure with content from the interview, and a functional dashboard/index.html
- [ ] Dashboard shows company profile and installed skills correctly from a static file
- [ ] Workspace is Obsidian-compatible (open wiki/ as vault, all links valid)
- [ ] Language of all generated files matches client's chosen language
- [ ] Asset import phase correctly moves client files into wiki/Resources/

### Constraints Identified
- Must work inside Claude Code (no external web UI or separate tool)
- Skills catalog must exist before the generator can reference it (build catalog first)
- Phase 6 (asset import) requires client to have files ready — needs a clear "skip and come back" path
- Dashboard v1 is static HTML (no live hook tracking) — hooks architecture for live status is v2

### Out of Scope (Confirmed)
- Wiki PARA navigator in dashboard (v1)
- Live hook-based skill/agent tracking (v1)
- Languages beyond EN + PT-BR (v1)
- Custom agent generation during setup wizard (v1)
- Asset content parsing / OCR / PDF indexing (v1)
- Client-facing web UI (non-Claude)

---

## Session Summary

| Metric | Value |
|--------|-------|
| Questions Asked | 6 |
| Approaches Explored | 3 |
| Features Removed (YAGNI) | 6 |
| Validations Completed | 7 |
| Status | Ready for /define |

---

## Next Step

**Ready for:** `/workflow:define .claude/sdd/features/BRAINSTORM_COMPANY_OS_GENERATOR.md`
