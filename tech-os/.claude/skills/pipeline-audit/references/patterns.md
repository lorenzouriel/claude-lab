# Data Engineering Design Patterns — Reference

Source: *Data Engineering Design Patterns* — Bartosz Konieczny, O'Reilly 2025

Each pattern includes: definition, search heuristics (what to grep/glob for), and scoring criteria.

---

## Chapter 2: Data Ingestion (7 patterns)

### 2.1 Full Loader
**What:** Replace entire dataset each run with swap/versioning to avoid empty-window exposure.
**Search:** `write.mode('overwrite')`, `INSERT OVERWRITE`, `LOAD DATA`, versioned tables, view swap, `REPLACE TABLE`
**Score 7+:** Transactional swap (Delta overwrite, view pointer) preventing consumer reads during incomplete writes.
**Score 4-6:** Overwrite exists but no empty-window protection.
**Score 0-3:** No full load pattern or naive truncate+insert without protection.

### 2.2 Incremental Loader
**What:** Read only new rows via delta column or time-based partitions. Always bound the window.
**Search:** `WHERE ingestion_time BETWEEN`, `WHERE updated_at >`, `INTERVAL`, offset tracking, `lastModified`, checkpoint files, cursor-based pagination
**Score 7+:** Bounded incremental window with backfill safety.
**Score 4-6:** Incremental load exists but window unbounded or uses event time without late-data handling.
**Score 0-3:** No incremental strategy.

### 2.3 Change Data Capture (CDC)
**What:** Read from database commit log via Debezium/Kafka Connect/Delta CDF for low-latency + hard-delete support.
**Search:** `debezium`, `connector`, `cdc`, `change.data.capture`, `op` field filtering (`c`, `u`, `d`, `r`), `__debezium`, `wal2json`, `pgoutput`, `Change Data Feed`, `table_changes`
**Score 7+:** Full CDC with op filtering, schema evolution handling, and monitoring.
**Score 4-6:** CDC configured but missing op handling or monitoring.
**Score 0-3:** No CDC.

### 2.4 Passthrough Replicator
**What:** Copy data as-is between environments. Push model, simplest API.
**Search:** `replicate`, `mirror`, `sync`, `copy`, cross-region, cross-account, `MirrorMaker`
**Score 7+:** Push-based replication with metadata preservation.
**N/A if:** Single-environment pipeline.

### 2.5 Transformation Replicator
**What:** Strip/mask PII before replication.
**Search:** `EXCEPT`, `REPLACE`, `mask`, `redact`, `anonymize` in replication context
**Score 7+:** Minimal transformation with catalog-driven PII detection.
**N/A if:** No cross-environment replication.

### 2.6 Compactor
**What:** Merge small files. OPTIMIZE + VACUUM.
**Search:** `OPTIMIZE`, `VACUUM`, `rewrite_data_files`, `compact`, `coalesce`, `repartition` before write
**Score 7+:** Scheduled compaction + cleanup.
**N/A if:** No file-based storage (pure streaming to API).

### 2.7 Readiness Marker
**What:** Signal that a partition is ready for downstream consumption.
**Search:** `_SUCCESS`, `FileSensor`, `ExternalTaskSensor`, `trigger_dag`, completion flag, `done` file
**Score 7+:** Explicit readiness signal consumed by downstream.
**N/A if:** No batch downstream consumers.

### 2.8 External Trigger
**What:** Event-driven pipeline trigger (Lambda on S3 event, webhook, API trigger).
**Search:** `schedule_interval=None`, `@once`, Lambda trigger, S3 event notification, webhook, `trigger_dag_run`, CloudWatch Events
**Score 7+:** Event-driven with metadata enrichment on trigger.
**N/A if:** Pipeline runs on fixed schedule only.

---

## Chapter 3: Error Management (7 patterns)

### 3.1 Dead-Letter Pattern
**What:** Route unprocessable records to side store instead of crashing.
**Search:** `dead.letter`, `dlq`, `DLQ`, `dead_letter`, side output, `OutputTag`, error topic, error queue, `sendToDlq`, `SQS.*dlq`
**Score 7+:** DLQ with monitoring, alerting, and replay capability. Dead-letter rate tracked.
**Score 4-6:** DLQ exists but no monitoring or no replay path.
**Score 0-3:** Bad records crash the pipeline or are silently swallowed without routing.

### 3.2 Windowed Deduplicator
**What:** Remove duplicates within a bounded time window.
**Search:** `dropDuplicates`, `DISTINCT ON`, `ROW_NUMBER.*PARTITION BY`, `dedup`, `deduplicate`, `withWatermark.*dropDuplicates`, idempotency key check
**Score 7+:** Bounded dedup window with watermark in streaming, or partition-scoped dedup in batch.
**Score 4-6:** Dedup exists but window unbounded (state grows forever).
**Score 0-3:** No deduplication.

### 3.3 Late Data Detector
**What:** Identify events arriving after the watermark.
**Search:** `watermark`, `allowed.lateness`, `withWatermark`, `MAX(event_time)`, late data counter, `lateDataOutputTag`
**Score 7+:** Watermark-based detection with late data routing/counting.
**Score 4-6:** Event-time vs processing-time awareness exists but no formal watermark.
**Score 0-3:** No late data handling.

### 3.4 Static Late Data Integrator
**What:** Fixed lookback window to reprocess recent partitions.
**Search:** `lookback`, `timedelta`, `date_sub`, reprocess last N days/hours, `expand_range`, backfill window
**Score 7+:** Static lookback with replay-safe design (replay from last execution only).
**Score 0-3:** No lookback strategy.

### 3.5 Dynamic Late Data Integrator
**What:** State table tracking which partitions have new data.
**Search:** `last_processed_version`, `getChanges`, `table_changes`, partition state table, `is_processed` flag
**Score 7+:** State-table-driven with concurrency protection.
**N/A if:** Bounded lateness makes static integrator sufficient.

### 3.6 Filter Interceptor
**What:** Track per-predicate filter counts for debugging.
**Search:** `accumulator`, `Accumulator`, filter counter, `CASE.*WHEN.*filter`, `metric.*filter`, drop reason counter, `filteredCount`
**Score 7+:** Per-predicate counters with alerting on anomalous filter rates.
**Score 4-6:** Drop reasons logged but no aggregate counters.
**Score 0-3:** Filtered records vanish with no visibility.

### 3.7 Checkpointer
**What:** Persist processing state for fault-tolerant restart.
**Search:** `checkpoint`, `checkpointLocation`, `commitOffsets`, `offset.commit`, `savepoint`, WAL, `flink.checkpoint`, state backend
**Score 7+:** Checkpointing paired with idempotent writes for exactly-once semantics.
**Score 4-6:** Checkpointing exists but only provides at-least-once (no idempotent writes).
**Score 0-3:** No checkpointing; restart = reprocess from beginning.

---

## Chapter 4: Idempotency (8 patterns)

### 4.1 Fast Metadata Cleaner
**What:** Divide dataset into physical sub-tables, TRUNCATE at partition granularity.
**Search:** `TRUNCATE`, `DROP.*CREATE`, sub-table, weekly/monthly table rotation, partition swap
**Score 7+:** Sub-table rotation with view abstraction and backfill awareness.
**N/A if:** Streaming pipeline with no persistent analytical store.

### 4.2 Data Overwrite
**What:** Physical overwrite of partition/dataset.
**Search:** `write.mode('overwrite')`, `INSERT OVERWRITE`, `replaceWhere`, `LOAD DATA OVERWRITE`
**Score 7+:** Partition-scoped overwrite with VACUUM.
**N/A if:** Fire-and-forget to external API (no local persistent store).

### 4.3 Merger (UPSERT)
**What:** MERGE with insert/update/delete handling via soft-delete flag.
**Search:** `MERGE INTO`, `UPSERT`, `ON CONFLICT`, `INSERT.*ON DUPLICATE KEY`, `is_deleted`, `__deleted`, soft delete
**Score 7+:** Three-way MERGE (insert + update + delete) with correct NOT MATCHED condition.
**Score 4-6:** UPSERT exists but missing delete handling.

### 4.4 Proxy Pattern
**What:** Immutable pointer (view) to current version of mutable data.
**Search:** `CREATE VIEW`, `CREATE OR REPLACE VIEW`, `ALTER VIEW`, view swap, pointer table
**Score 7+:** View abstraction decouples consumers from physical layout changes.

### 4.5 Stamp
**What:** Write unique run identifier with each batch for traceability.
**Search:** `run_id`, `batch_id`, `execution_id`, `dag_run_id`, `{{ ds }}`, `{{ data_interval_start }}`, processing timestamp column
**Score 7+:** Deterministic execution stamp used as idempotency key.
**Score 4-6:** Timestamp exists but uses NOW() instead of immutable execution ID.

### 4.6 Deterministic Output IDs
**What:** Derive output IDs deterministically from input (not random UUIDs).
**Search:** `uuid5`, `uuidv5`, deterministic UUID, hash-based ID, `sha256.*id`, content-addressable
**Score 7+:** Same input always produces same output ID. Retries are automatically idempotent.
**Score 0-3:** Random UUIDs on every run — retries produce duplicates.

### 4.7 Immutable Logs
**What:** Append-only table where duplicates are identifiable but never removed.
**Search:** `append`, `INSERT INTO` (no overwrite), append-only, immutable log, event store
**Score 7+:** Append-only with dedup-on-read capability.

### 4.8 Accumulator (Idempotent Aggregation)
**What:** MERGE on aggregate tables for idempotent incremental aggregation.
**Search:** `MERGE.*aggregate`, `MERGE.*SUM`, `MERGE.*COUNT`, incremental rollup
**N/A if:** No aggregation tables.

---

## Chapter 5: Data Value (9 patterns)

### 5.1 Static Joiner
**What:** Enrich streaming data with slowly-changing reference data. SCD Type 2 for time-accurate joins.
**Search:** `JOIN.*reference`, `LEFT JOIN`, `SCD`, `start_date.*end_date`, `BETWEEN.*start.*end`, temporal join, enrichment query
**Score 7+:** Reference join with time-accurate SCD and immutable execution timestamp.
**Score 4-6:** Reference join exists but uses NOW() or ignores SCD validity periods.

### 5.2 Dynamic Joiner
**What:** Stream-to-stream join with time-bounded buffers.
**Search:** `stream.*join`, `withWatermark.*join`, `INTERVAL.*join`, temporal table join, `EventTimeTrigger`
**Score 7+:** Both streams watermarked with explicit time condition and GC.
**N/A if:** Only one streaming source.

### 5.3 Wrapper
**What:** Separate raw vs computed fields in output for downstream clarity.
**Search:** `raw`, `computed`, `processing_context`, `NAMED_STRUCT`, envelope pattern, `withColumn.*struct`
**Score 7+:** Clear separation of raw input and computed enrichment.
**Score 4-6:** Some separation exists but boundary is unclear.

### 5.4 Metadata Decorator
**What:** Technical context (job version, batch ID, processing time) stored separately from business data.
**Search:** `headers`, `metadata`, `processing_time`, `batch_id`, `job_version`, `includeHeaders`, technical context table
**Score 7+:** Technical metadata in headers/side table, invisible to business users.
**Score 4-6:** Some metadata exists but mixed with business data.

### 5.5 Distributed Aggregator
**What:** Group-and-reduce across a cluster with shuffle awareness.
**Search:** `groupBy`, `GROUP BY`, `aggregate`, `Exchange hashpartitioning`, salting, `explain()`, `repartition`
**N/A if:** Single-instance pipeline.

### 5.6 Local Aggregator
**What:** Aggregate within partition without shuffle (co-located data).
**Search:** `groupByKey`, `sortWithinPartitions`, `foreachPartition`, `DISTKEY`, local buffer aggregation
**Score 7+:** Partition-local aggregation with consistent partition key.
**Score 4-6:** Local grouping exists but partition key not guaranteed stable.

### 5.7 Incremental Sessionizer
**What:** Batch sessionization with pending sessions store.
**Search:** `session`, `pending`, `completed`, `gap`, session start/accumulate/finalize, `{{ ds }}` as session key
**Score 7+:** Three-store design (input, completed, pending) with idempotent execution stamp.

### 5.8 Stateful Sessionizer
**What:** Streaming sessionization with durable state store.
**Search:** `applyInPandasWithState`, `EventTimeSessionWindows`, session window, `flatMapGroupsWithState`, state store, `mapGroupsWithState`
**Score 7+:** Event-time expiration, checkpoint-backed state.
**Score 4-6:** Session logic exists but in-memory only (lost on restart).

### 5.9 Bin Pack Orderer / FIFO Orderer
**What:** Ordered delivery under partial-commit semantics.
**Search:** `sort.*before.*write`, `SequenceNumberForOrdering`, `ordering_key`, `max.in.flight`, bin packing, sequential delivery
**Score 7+:** Entity-key ordering with partial-failure isolation.
**Score 4-6:** Sorting exists but no partial-failure handling.

---

## Chapter 6: Data Flow (6 patterns)

### 6.1 Local Sequencer
**What:** Decompose monolith into sequential tasks with restart boundaries.
**Search:** Task/stage separation, `>>` (Airflow), pipeline stages, middleware chain, step functions, sequential handlers
**Score 7+:** Clear stage boundaries where failure in stage N doesn't re-trigger stage N-1.
**Score 4-6:** Stages exist but failure cascades or retries are coarse-grained.

### 6.2 Isolated Sequencer
**What:** Cross-team pipeline coordination via data-based or task-based coupling.
**Search:** `ExternalTaskSensor`, `ExternalTaskMarker`, `FileSensor`, cross-DAG dependency, `TriggerDagRunOperator`, readiness marker consumption
**Score 7+:** Data-based coupling (readiness markers) for cross-team; task-based only within team.
**N/A if:** Single-team, single-pipeline.

### 6.3 Aligned Fan-In
**What:** All parent branches must succeed before child runs.
**Search:** `trigger_rule='all_success'`, parallel tasks merging, `Promise.all`, `asyncio.gather`, barrier
**Score 7+:** Parallel branches with granular backfill on failure.

### 6.4 Unaligned Fan-In
**What:** Child runs when some (not all) parents succeed.
**Search:** `trigger_rule='one_success'`, `trigger_rule='all_done'`, partial dataset flag, `Promise.allSettled`
**Score 7+:** Partial delivery with explicit incomplete-data flagging.

### 6.5 Exclusive Choice (Fan-Out)
**What:** Conditional branching based on runtime condition.
**Search:** `BranchPythonOperator`, `if.*else.*route`, conditional task skip, `trigger_rule='none_failed_or_skipped'`, branch logic
**Score 7+:** Clean branching with skipped-branch handling.

### 6.6 Concurrency Control
**What:** Limit simultaneous pipeline runs.
**Search:** `max_active_runs`, `concurrency`, `max_concurrent`, semaphore, `VisibilityTimeout`, `DesiredCount`, rate limiting
**Score 7+:** Explicit concurrency limits with backfill awareness.
**Score 4-6:** Limits exist but not tuned for backfill scenarios.

---

## Chapter 7: Data Security (6 patterns)

### 7.1 Anonymizer
**What:** Pseudonymize or anonymize PII before it crosses a boundary.
**Search:** `sha2`, `HMAC`, `hash`, `mask`, `anonymize`, `pseudonymize`, `EXCEPT.*pii`, `SUBSTRING.*email`, `replace.*pii`
**Score 7+:** Consistent strategy with salt rotation for pseudonymization.
**Score 4-6:** Some PII masking but inconsistent or missing salt.
**N/A if:** PII transmission is required by protocol (e.g., Caliper spec).

### 7.2 Tokenizer
**What:** Replace sensitive values with opaque vault-backed tokens.
**Search:** `token.*vault`, `tokenize`, `detokenize`, lookup table for sensitive values
**Score 7+:** Vault-backed token store, data lake only sees tokens.

### 7.3 Vault (Secret Manager)
**What:** No credentials in code/config. Runtime retrieval from secret manager.
**Search:** `SecretManager`, `GetSecretValue`, `KEY_VAULT`, `VAULT_ADDR`, `SecretBackend`, `secretsmanager`, ARN reference for secrets, `process.env` for non-secret config only
**Score 7+:** All secrets in vault, auto-rotation, no plaintext in config/env files.
**Score 4-6:** Vault used but some secrets in env vars or rotation is manual.

### 7.4 Coarse-Grained Accessor
**What:** Table/schema-level access control via GRANT.
**Search:** `GRANT`, `REVOKE`, IAM policy, role-based access, `Principal`, `Resource` in policy
**Score 7+:** Least-privilege IAM with scoped resource ARNs.
**Score 4-6:** IAM exists but some `Resource: "*"` wildcards.

### 7.5 Fine-Grained Accessor
**What:** Row and column level access control.
**Search:** `ROW FILTER`, `COLUMN MASK`, column-level GRANT, row-level security policy, data masking policy
**Score 7+:** Native row/column security enforced at storage layer.
**N/A if:** Single consumer with full access by design.

### 7.6 Encryption
**What:** At rest (SSE, column encryption) and in transit (TLS).
**Search:** `ssl=true`, `security.protocol=SSL`, `SASL_SSL`, TLS config, `SSE`, `encryption`, `AES`, `KMS`, certificate config
**Score 7+:** TLS everywhere + at-rest encryption on all stores.
**Score 4-6:** TLS for some connections, at-rest encryption missing on some stores.

---

## Chapter 8: Data Storage (6 patterns)

### 8.1 Partitioner
**What:** Physical partition by low-cardinality column for query pruning.
**Search:** `partitionBy`, `PARTITIONED BY`, `PARTITION`, `event_date`, partition column, `DISTKEY`
**Score 7+:** Partition by date/category with pruning-aware queries.
**N/A if:** No persistent analytical store.

### 8.2 Bucket
**What:** Hash-partition within partition for join colocation.
**Search:** `bucketBy`, `CLUSTERED BY`, `INTO.*BUCKETS`, hash partition
**Score 7+:** Both join tables bucketed on same key with same count.
**N/A if:** No analytical joins.

### 8.3 Sorter
**What:** Within-file sorting for data skipping and compression.
**Search:** `ZORDER`, `sortBy`, `ORDER BY` in write, `OPTIMIZE.*ZORDER`, `sort_columns`
**Score 7+:** Z-Order or sort on filter columns.
**N/A if:** No persistent file storage.

### 8.4 Table File Format Selector
**What:** Choose Delta/Iceberg/Hudi based on engine and write pattern.
**Search:** `delta`, `iceberg`, `hudi`, `USING DELTA`, `format('delta')`, `.parquet`, table format config
**Score 7+:** Format chosen with clear rationale matching engine and query patterns.
**N/A if:** No lakehouse.

### 8.5 Columnar Format
**What:** Parquet/ORC for analytical workloads; Avro/JSON at ingestion boundary only.
**Search:** `.parquet`, `.orc`, `format('parquet')`, `STORED AS PARQUET`, columnar config
**Score 7+:** Parquet for all analytics, row format only at ingestion boundary.
**N/A if:** No persistent file storage.

### 8.6 Compactor
**What:** Merge small files + vacuum.
**Search:** `OPTIMIZE`, `VACUUM`, `rewrite_data_files`, `compact`, coalesce
**(Same as 2.6 — score once, apply to both chapters.)**

---

## Chapter 9: Data Quality (8 patterns)

### 9.1 Schema Validator
**What:** Enforce schema at write/read time.
**Search:** `schema`, `Schema Registry`, `schemaMode`, `strict`, `Zod`, `z.object`, `joi`, `yup`, `JSON Schema`, `ajv`, `Avro`, `Protobuf`, `not_null`, `dbt.*test`
**Score 7+:** Schema enforcement at both ingestion boundary and output, with evolution support.
**Score 4-6:** Schema validation exists but only at one layer.

### 9.2 Constraint Validator
**What:** Business rules that schema can't express.
**Search:** `CHECK`, `assert`, business rule validation, `accepted_values`, `CASE.*WHEN.*THEN.*error`, enum validation, range check
**Score 7+:** Business constraints validated at each pipeline layer.
**Score 4-6:** Some business validation but not comprehensive.

### 9.3 Null Validator
**What:** Track null rates per column over time, alert on spikes.
**Search:** `IS NULL`, `COUNT.*NULL`, null rate, null check, `nullable()`, null threshold, null alert
**Score 7+:** Null rate time series with anomaly alerting.
**Score 4-6:** Null handling in code but no rate tracking or alerting.

### 9.4 Volume Validator
**What:** Track row counts per partition, alert on anomalies.
**Search:** `COUNT(*)`, row count check, volume alert, volume threshold, expected count, baseline comparison
**Score 7+:** Volume tracking with historical baseline + standard deviation alerting.
**Score 0-3:** No volume monitoring.

### 9.5 Freshness Validator
**What:** Track MAX(event_time) or MAX(ingestion_time), alert on staleness.
**Search:** `MAX(event_time)`, `MAX(ingestion_time)`, freshness check, staleness alert, `freshness_check`, `dbt_utils.freshness`
**Score 7+:** Freshness SLA with proactive alerting before consumers notice.
**Score 4-6:** Consumer lag monitoring as proxy but no true data freshness check.

### 9.6 Referential Integrity Validator
**What:** Detect orphaned records from sync issues between sources.
**Search:** `LEFT JOIN.*WHERE.*IS NULL`, orphan check, FK validation, referential integrity test, `relationships` (dbt)
**Score 7+:** Referential checks in transformation layer with alerting.
**Score 4-6:** JOIN naturally drops orphans but no explicit reporting.

### 9.7 Accuracy Validator
**What:** Cross-validate between pipeline output and authoritative source.
**Search:** `cross.*validate`, `reconcile`, `SUM.*compare`, accuracy check, source-of-truth comparison
**Score 7+:** Regular reconciliation against authoritative system.
**Score 0-3:** No cross-validation.

### 9.8 SCD Validator (Consistency)
**What:** Validate SCD timeline coherence (no overlaps, no gaps).
**Search:** `overlap`, `gap`, SCD validation, validity period check, `end_date.*start_date`
**N/A if:** No SCD tables.

---

## Chapter 10: Data Observability (5 patterns)

### 10.1 Pipeline Metrics Collector
**What:** Emit job-level metrics: duration, records read/written, error counts.
**Search:** `metric`, `counter`, `gauge`, `histogram`, `accumulator`, `StatsD`, `Prometheus`, `CloudWatch.*metric`, `on_success_callback`, `on_failure_callback`, custom metric, EMF
**Score 7+:** Custom app metrics pushed to time-series store with dashboards and alerts.
**Score 4-6:** AWS/infra-managed metrics only; no custom app-level metrics.

### 10.2 Data Metrics Collector
**What:** Compute data-level metrics (counts, nulls, freshness) as pipeline output.
**Search:** `data.*metric`, `elementary`, `dbt-expectations`, metrics table, data profiling, statistics output
**Score 7+:** Data metrics stored as time series, queryable, with trend analysis.
**Score 0-3:** No data-level metrics.

### 10.3 Lineage Tracker
**What:** Record input→output dataset relationships.
**Search:** `OpenLineage`, `lineage`, `Marquez`, `Atlan`, `RunEvent`, dependency graph, `data_catalog`, `provenance`
**Score 7+:** OpenLineage or equivalent with automated graph generation.
**Score 4-6:** Manual documentation of dependencies but no automated tracking.
**Score 0-3:** No lineage.

### 10.4 Anomaly Detector
**What:** Statistical anomaly detection on metrics time series.
**Search:** `anomaly`, `STDDEV`, `z-score`, `Prophet`, outlier detection, `rolling.*mean`, threshold + deviation
**Score 7+:** Statistical detection with seasonality awareness.
**Score 4-6:** Fixed thresholds only.
**Score 0-3:** No anomaly detection.

### 10.5 SLA Tracker
**What:** Formalize and track data delivery promises.
**Search:** `SLA`, `sla_miss_callback`, `dagrun_timeout`, freshness SLA, delivery deadline, `meta.sla`
**Score 7+:** Formal SLA definitions with proactive miss alerting.
**Score 0-3:** No SLA tracking.

---

## Chapter 11: Streaming Patterns (5 patterns)

### 11.1 Tumbling Window
**What:** Fixed, non-overlapping time buckets.
**Search:** `window(`, `TumblingEventTimeWindows`, `TumblingProcessingTimeWindows`, fixed interval flush, `TUMBLE(`, time bucket
**Score 7+:** Event-time tumbling windows with watermark.
**Score 4-6:** Processing-time windows or fixed-interval flush (close but not event-time-based).

### 11.2 Sliding Window
**What:** Overlapping windows for moving averages.
**Search:** `SlidingEventTimeWindows`, `HOP(`, sliding window, `window(.*slideDuration`, moving average
**N/A if:** No moving-average use case.

### 11.3 Session Window
**What:** Dynamic windows that close on inactivity gap.
**Search:** `EventTimeSessionWindows`, `SESSION(`, session gap, `applyInPandasWithState`, session timeout, inactivity
**Score 7+:** Event-time session windows with durable state and watermark expiration.
**Score 4-6:** Session logic exists but in-memory only or processing-time-based.

### 11.4 Watermark
**What:** Track event-time progress for late data and state GC.
**Search:** `withWatermark`, `forBoundedOutOfOrderness`, `WATERMARK FOR`, `allowed.lateness`, watermark strategy
**Score 7+:** Explicit watermark strategy with late data routing.
**Score 0-3:** No watermark concept.

### 11.5 Graceful Shutdown
**What:** Drain in-flight work, flush buffers, commit state before exit.
**Search:** `SIGTERM`, `SIGINT`, `process.on('SIGTERM')`, `shutdown`, `drain`, `flushAll`, `disconnect`, graceful, signal handler
**Score 7+:** Signal handler → stop accepting → drain → flush → commit → disconnect. Tested.
**Score 4-6:** Signal handler exists but incomplete drain or untested.
**Score 0-3:** No graceful shutdown; kill = data loss.
