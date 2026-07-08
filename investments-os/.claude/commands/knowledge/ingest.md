---
name: ingest
description: Distill new root study notes into the KB — delegates to kb-curator
---

# Knowledge Ingest

> The study pipeline: raw notes (your Obsidian vault at the root) → distilled KB (concepts, patterns, quick-references) → registered in `_index.yaml`.

## Usage

```bash
/knowledge:ingest [pasta/nota específica, ou vazio para varredura completa]
```

## Examples

```bash
/knowledge:ingest                                  # scan all root note folders for drift
/knowledge:ingest "Renda Variável/BDRs.md"         # ingest one new note
/knowledge:ingest "atualizei minhas notas de tributação"
```

## What This Command Does

1. Invokes the **kb-curator** agent
2. Globs the root note folders (`Renda Fixa/`, `Renda Variável/`, `Fundos de Investimento/`, `Tributação/`, root .md files) and diffs against KB `Source:` headers and `_index.yaml`
3. For each new/changed topic:
   - Places it in an existing domain (new domain = asks first)
   - Distills to the house format within `_index.yaml` limits — concepts (what it is, mistakes), patterns (processes, trees, formulas)
   - Adds the `Source:` traceback line
   - Updates the domain `index.md`, `quick-reference.md`, and `_index.yaml`
4. Contradiction between a note and existing KB → stops and asks (your current understanding wins)
5. **Never touches the raw notes** — they are your vault, read-only

## Agent Delegation

| Agent | Role |
|-------|------|
| `kb-curator` | Primary |

## Output

Ingestion table (note → KB file, type), skipped items with reasons, registry status.
