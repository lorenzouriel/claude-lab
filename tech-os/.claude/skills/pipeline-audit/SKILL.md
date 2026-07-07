---
name: pipeline-audit
description: Validate a data pipeline against 60+ data engineering design patterns from "Data Engineering Design Patterns" (Bartosz Konieczny, O'Reilly 2025). Scores each pattern category, flags gaps, and generates a visual HTML scorecard. Use when the user asks to audit, score, or validate their pipeline against best practices.
license: MIT
metadata:
  author: lorenzo-uriel-panopto
  version: "1.0.0"
  source: "Data Engineering Design Patterns — Bartosz Konieczny, O'Reilly 2025"
---

# Pipeline Audit Skill

Audit any data pipeline codebase against the 60+ named design patterns from Konieczny's book. Produce a scored report with evidence from actual source files.

## When to Use

- User asks: "audit my pipeline", "score my patterns", "validate best practices", "check pipeline health"
- User invokes `/data-engineering:pipeline-audit`
- After major architecture changes to re-baseline

## Audit Process

### Phase 1: Evidence Collection (parallel agents)

Spawn up to 4 parallel investigation agents, each covering 2-3 chapters. For single-chapter audits, skip the agents and investigate directly.

**Agent A — Ingestion + Error Management (Ch 2-3)**
Search for:
- CDC connectors (Debezium, Delta CDF, Kafka Connect config)
- Incremental load logic (delta columns, partition-based, watermarks)
- Full load with swap/versioning
- Dead-letter queues/topics (DLQ, dead.letter, error topic)
- Deduplication logic (dropDuplicates, ROW_NUMBER, DISTINCT ON)
- Late data handling (watermarks, allowed lateness, lookback windows)
- Filter counters/accumulators
- Checkpoint configuration (offsets, state stores, checkpoint dirs)
- Retry logic with backoff

**Agent B — Idempotency + Data Value (Ch 4-5)**
Search for:
- Idempotency keys (deterministic IDs, dedup keys, MERGE/UPSERT)
- Overwrite patterns (INSERT OVERWRITE, write.mode('overwrite'), replaceWhere)
- Partition management (TRUNCATE, DROP+RECREATE, sub-tables)
- Enrichment joins (reference data joins, SCD Type 2, temporal joins)
- Aggregation patterns (GROUP BY, accumulators, salting for skew)
- Session logic (gap detection, pending sessions, state stores)
- Ordering guarantees (sort before write, sequence numbers)

**Agent C — Flow + Security + Storage (Ch 6-7-8)**
Search for:
- Pipeline stage separation (DAG structure, task boundaries)
- Fan-in/fan-out (parallel tasks, branch operators, trigger rules)
- Cross-pipeline coordination (sensors, external triggers, readiness files)
- Concurrency controls (max_active_runs, semaphores, visibility timeout)
- Secret management (vault refs, env vars, ARN references)
- PII handling (masking, hashing, tokenization, EXCEPT clauses)
- IAM/RBAC (role definitions, grants, policies)
- Encryption (TLS config, SSE, at-rest encryption)
- Partitioning strategy (partition columns, bucket config)
- File format choices (Parquet, Delta, Iceberg, Avro)
- Compaction (OPTIMIZE, VACUUM, rewrite_data_files)

**Agent D — Quality + Observability + Streaming (Ch 9-10-11)**
Search for:
- Schema validation (Zod, Avro, Protobuf, JSON Schema, dbt tests)
- Constraint validation (CHECK constraints, business rule tests)
- Null monitoring (null rate tracking, null alerts)
- Volume monitoring (row count checks, anomaly detection)
- Freshness checks (MAX(event_time), staleness alerts)
- Custom metrics (counters, gauges, histograms, accumulators)
- Data metrics (stored counts, null rates, completeness scores)
- Lineage (OpenLineage, catalog entries, dependency graphs)
- SLA tracking (freshness SLAs, delivery deadlines)
- Window types (tumbling, sliding, session windows)
- State management (state stores, RocksDB, in-memory state)
- Graceful shutdown (signal handlers, drain logic)

### Phase 2: Pattern Scoring

For each of the 10 chapters, score 0-10 using this rubric:

| Score | Meaning |
|-------|---------|
| 0 | Pattern applicable but completely absent |
| 1-3 | Partial/ad-hoc implementation, no systematic approach |
| 4-6 | Implemented but with notable gaps or risks |
| 7-8 | Solid implementation with minor improvements possible |
| 9-10 | Textbook implementation, production-hardened |
| N/A | Pattern not applicable to this pipeline type |

**Scoring rules:**
- Each pattern within a chapter gets an individual score
- Chapter score = weighted average (critical patterns count 2x)
- Overall score = average of applicable chapter scores
- Critical patterns (2x weight): Dead-Letter, Idempotency (any), Schema Validator, Checkpointer, Vault

**Evidence requirement:** Every score MUST cite at least one file:line as evidence. No score without evidence.

### Phase 3: Report Generation

If the user passed `--quick`, skip the HTML entirely — output only the terminal summary below.

Otherwise generate a visual HTML scorecard using the visual-explainer skill with:

1. **Header** — project name, audit date, overall grade (letter + score)
2. **Radar chart** (CSS/SVG) — 10 chapter scores on a spider/radar diagram
3. **Pattern matrix** — every pattern organized by chapter with status icon:
   - `[x]` Achieved (7+)
   - `[~]` Partial (4-6)
   - `[ ]` Missing (0-3)
   - `[-]` N/A
4. **Evidence accordion** — expandable sections per chapter with file:line citations for each scored pattern
5. **Top 5 gaps** — highest-impact missing patterns sorted by (applicability × criticality)
6. **Top 5 strengths** — best-implemented patterns worth preserving
7. **Recommendations** — ordered fix list with estimated effort (hours/days)

Style: Blueprint aesthetic (deep slate/blue, monospace labels, technical drawing feel).

Save HTML to `docs/audit/pipeline-audit-{date}.html` and open in browser.

### Grade Scale

| Grade | Score Range | Meaning |
|-------|------------|---------|
| A+ | 9.0-10.0 | Production-exemplary |
| A | 8.0-8.9 | Production-ready, minor polish |
| B+ | 7.0-7.9 | Solid, some gaps to address |
| B | 6.0-6.9 | Good foundation, notable gaps |
| C+ | 5.0-5.9 | Functional but risky |
| C | 4.0-4.9 | Significant gaps |
| D | 3.0-3.9 | Major rework needed |
| F | 0-2.9 | Fundamental patterns missing |

## Pattern Reference

Full pattern definitions with search heuristics are in `./references/patterns.md`.

## Output

The skill produces TWO artifacts:

1. **Terminal summary** — always output, regardless of `--quick`:

   ```
   ## Pipeline Audit — {project name}
   Grade: {letter} ({score}/10)

   | Chapter | Score | Status |
   |---------|-------|--------|
   | ...     | ...   | ...    |

   Top gaps: {list top 3}
   ```

2. **HTML scorecard** — visual report opened in browser via visual-explainer (skipped with `--quick`)

## Customization

Users can pass arguments to scope the audit:

```
/data-engineering:pipeline-audit                    # Full audit, all chapters
/data-engineering:pipeline-audit ingestion          # Ch 2 only
/data-engineering:pipeline-audit errors             # Ch 3 only
/data-engineering:pipeline-audit idempotency        # Ch 4 only
/data-engineering:pipeline-audit value              # Ch 5 only
/data-engineering:pipeline-audit flow               # Ch 6 only
/data-engineering:pipeline-audit security           # Ch 7 only
/data-engineering:pipeline-audit storage            # Ch 8 only
/data-engineering:pipeline-audit quality            # Ch 9 only
/data-engineering:pipeline-audit observability      # Ch 10 only
/data-engineering:pipeline-audit streaming          # Ch 11 only
/data-engineering:pipeline-audit --quick            # Score only, no HTML report
```
