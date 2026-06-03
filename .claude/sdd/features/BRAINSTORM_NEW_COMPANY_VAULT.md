---
feature: new-company-vault
phase: brainstorm
status: ready-for-define
date: 2026-06-02
---

# BRAINSTORM — new-company: Replace PARA Wiki with Optional Vault

## Problem

The `workflow:new-company` skill generates an Obsidian PARA vault (Projects/Areas/Resources/Archives) for every workspace that opts in. It also runs Phase 7 (3 questions about active projects, areas, and references) specifically to pre-populate that structure.

Two issues:
1. The PARA structure is opinionated and heavy — most users just want a folder for notes, not a full PKM methodology.
2. Phase 7 adds 3 questions that only exist to serve the PARA output. Removing PARA makes Phase 7 pointless overhead.

---

## Proposed Changes

### 1. Replace Question 4.6 (wiki question)

**Before:**
> "Do you want a knowledge wiki to organize your notes, projects, and reference documents?
> This creates a structured vault (Projects / Areas / Resources / Archives) you can open in Obsidian.
> (a) Yes — add the wiki
> (b) No — keep it simple"

**After:**
> "Do you want a vault for your notes?
> (a) Yes
> (b) No"

Record as `{wants_vault}`. Default: **no**.

If `{wants_vault}` = yes, ask one follow-up:
> "What folders do you want inside the vault? (e.g. `notes/work`, `notes/personal`)
> Press Enter to keep it empty — you can always add folders later."

Record as `{vault_folders}` (list, may be empty).

### 2. Remove Phase 7 entirely

Phases 7.1, 7.2, 7.3 (active projects, areas, key references) were introduced solely to pre-populate the PARA structure. With PARA removed, these questions have no output target and are dropped.

**Impact:** 3 fewer questions. Interview flows directly from Phase 6 (Asset Import) → Phase 8 (Generation).

### 3. Rewrite Step 8.4

**Before:** Generates full PARA folder structure + pre-populated project and area notes.

**After:** Conditional on `{wants_vault}` = yes only:
- Create `vault/README.md` with a brief header
- Create `vault/.gitkeep` if no sub-folders specified
- If `{vault_folders}` is non-empty, create one `.gitkeep` per folder: `vault/{folder}/.gitkeep`

If `{wants_vault}` = no: skip entirely.

### 4. Fix Asset Import reference (Phase 6 Q6.1)

Current instruction moves files to `wiki/Resources/` for brand guides and SOPs. This must change:

- Logo files → `{slug}/identity/assets/` (unchanged)
- Brand guides, SOPs, reference docs → `{slug}/vault/` (if `{wants_vault}` = yes) or `{slug}/data/` (fallback)
- Data files → `{slug}/data/` (unchanged)
- Other documents → `{slug}/vault/` or `{slug}/data/`

Note in `vault/README.md` if files were moved there.

### 5. Update CLAUDE.md template — File Organization section

**Before:**
```
- Wiki notes → `wiki/{Projects|Areas|Resources|Archives}/`
```

**After (conditional):**
```
{If wants_vault = yes:}
- Notes and references → `vault/`
```

If `{wants_vault}` = no, remove the line entirely.

### 6. Update Post-generation summary

Remove all wiki references. If `{wants_vault}` = yes, add:
```
vault/    (your notes folder)
```

Remove:
```
wiki/Projects/    ({N} projects pre-populated)
wiki/Areas/       ({N} areas pre-populated)
wiki/Resources/README.md
wiki/Archives/README.md
```

Remove Step 2 from "Next steps":
```
2. Open wiki/ as an Obsidian vault (File → Open vault → select wiki/)
```

If `{wants_vault}` = yes, replace with:
```
2. Open vault/ as an Obsidian vault (File → Open vault → select vault/)
```

### 7. Update skill description (frontmatter)

**Before:**
> `Obsidian PARA wiki`

**After:**
> `optional notes vault`

---

## What Was Removed (YAGNI)

| Removed | Reason |
|---------|--------|
| PARA structure (Projects/Areas/Resources/Archives) | Too opinionated; most users don't need a full PKM methodology out of the box |
| Phase 7 (3 questions) | Existed only to populate PARA. No PARA = no need for these questions |
| Pre-populated project notes | Downstream of Phase 7, also removed |
| Pre-populated area notes | Same |
| `wiki/Resources/README.md` with imported file list | Replaced by simpler vault/README.md |
| `wiki/Archives/README.md` | Part of PARA, removed |
| "Open Obsidian vault" as a required next step | Vault is optional; only shown when user opted in |

---

## Affected Files in new-company.md

| Section | Change |
|---------|--------|
| Frontmatter description | Remove "Obsidian PARA wiki", add "optional notes vault" |
| Folder structure diagram | `wiki/` → `vault/` (conditional) |
| Question 4.6 | Full replacement |
| Phase 7 (all 3 questions) | Remove entirely |
| Step 8.1 (folder structure) | Remove `wiki/` lines, add `vault/` conditional |
| Step 8.4 | Full rewrite |
| Phase 6 Q6.1 (asset routing) | Update `wiki/Resources/` references to `vault/` |
| CLAUDE.md template — File Organization | Update conditional vault line |
| Post-generation summary | Remove wiki lines, add optional vault line |
| Post-generation next steps | Update step 2 (conditional) |

---

## Selected Approach

**Minimal vault** — empty `vault/` folder + `README.md` + optional user-defined sub-folders. No methodology imposed. Works as an Obsidian vault if the user wants it; just a folder if they don't.

---

## Draft Requirements (for /define)

1. Remove the PARA wiki question (Q4.6) and replace with a simpler vault yes/no
2. If vault = yes, ask one follow-up for optional sub-folder names
3. Remove Phase 7 entirely (all 3 questions)
4. Step 8.4 generates vault/ + README.md + optional sub-folders only when vault = yes
5. Asset import routes to vault/ instead of wiki/Resources/ when vault = yes, data/ as fallback
6. CLAUDE.md template File Organization section shows vault/ line only when vault = yes
7. Post-generation summary and next steps updated to remove wiki, add optional vault
8. Skill description updated in frontmatter
