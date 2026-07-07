---
name: pipeline-audit
description: Audit pipeline against 60+ data engineering design patterns (Konieczny, O'Reilly 2025). Scores each category and generates visual HTML scorecard.
---

# Pipeline Audit

> Score your data pipeline against the patterns from *Data Engineering Design Patterns* (Bartosz Konieczny, O'Reilly 2025).

## Usage

```
/data-engineering:pipeline-audit                    # Full audit, all 10 chapters
/data-engineering:pipeline-audit ingestion          # Ch 2 only (7 patterns)
/data-engineering:pipeline-audit errors             # Ch 3 only (7 patterns)
/data-engineering:pipeline-audit idempotency        # Ch 4 only (8 patterns)
/data-engineering:pipeline-audit value              # Ch 5 only (9 patterns)
/data-engineering:pipeline-audit flow               # Ch 6 only (6 patterns)
/data-engineering:pipeline-audit security           # Ch 7 only (6 patterns)
/data-engineering:pipeline-audit storage            # Ch 8 only (6 patterns)
/data-engineering:pipeline-audit quality            # Ch 9 only (8 patterns)
/data-engineering:pipeline-audit observability      # Ch 10 only (5 patterns)
/data-engineering:pipeline-audit streaming          # Ch 11 only (5 patterns)
/data-engineering:pipeline-audit --quick            # Terminal scores only, no HTML
```

## Instructions

Read `.claude/skills/pipeline-audit/SKILL.md` and follow it, passing the arguments above through as the audit scope. The skill defines the full process: evidence collection, scoring rubric, report generation, and output format. Pattern definitions and search heuristics live in `.claude/skills/pipeline-audit/references/patterns.md`.

Do not restate or reinterpret the process here — the skill is the single source of truth.
