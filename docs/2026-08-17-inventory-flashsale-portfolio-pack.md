# Inventory & Flash Sale System — STAR + Resume Pack

Date: 2026-08-17
Repo: `qwan30/inventory-flashsale-system`

Numbers in this pack trace to: `testing/k6/evidence/20260315-133859-e2e3644/report.json` and `docs/04_audit_remediation/2026-06-07-project-evidence-sheet.md` in the inventory repo.

---

## STAR Bullets (Situation → Task → Action → Result)

1. **Oversell prevention under flash-sale contention**
   - **Situation:** Omnichannel stock is sold across web, app, Shopee, and TikTok Shop; a flash-sale burst on one SKU could oversell the same physical unit on multiple channels simultaneously.
   - **Task:** Guarantee zero overselling while keeping reservation/confirm/release atomic and fast enough for real buyers.
   - **Action:** Built a three-layer defense — a per-SKU Redis SET-NX lock, all quota/inventory mutation inside a relational transaction, and `@Version` optimistic locking with unique constraints as a final raced-commit rejector, deployed as a Java 21 / Spring Boot modular monolith.
   - **Result:** A promoted K6 hot-SKU run (50 VUs, ~185 req/s, 5,692 requests) completed with 0 failed requests and stock conservation holding (available+reserved+sold = 100) — zero oversells.

2. **Idempotent external ingestion under retry**
   - **Situation:** Buyer retries and marketplace webhook replays can re-apply a mutation (double reservation, double order) if the API is not idempotent.
   - **Task:** Make every mutating operation safe to replay without returning inconsistent or duplicate effects.
   - **Action:** Implemented three-tier idempotency — reservation idempotency keys, an `operation_idempotency` ledger that stores and replays the original response payload, and ingress receipt deduplication for signed TikTok callbacks.
   - **Result:** Duplicate reservations/orders return the original result or a conflict instead of repeating side effects, verified by the integration test suite.

3. **Reliable event delivery with the transactional outbox**
   - **Situation:** Writing domain state and publishing a Kafka event separately lets a crash leave them out of sync — inventory changes but the channel never learns.
   - **Action:** Wrote every state change and its versioned event envelope in a single MySQL transaction via the Outbox pattern; a scheduler publishes PENDING events and marks PUBLISHED only after Kafka acks, with retry state and admin retry.
   - **Result:** Database state and downstream events cannot diverge on partial failure; outbox-backlog-recovery scenario ran at 5.6ms avg / 0% failure with backlog drained to 0.

4. **Marketplace consistency without letting channels overwrite central truth**
   - **Situation:** TikTok Shop and Shopee inventories can lag or disagree with central stock; naive sync could let a channel clobber the source of truth.
   - **Action:** Persisted channel snapshots and sync attempts separately, added scheduled reconciliation runs that surface drifts (central vs observed) as records without auto-correction, and exposed role-gated operator remediation APIs.
   - **Result:** Central inventory remains the source of truth while drift is visible and auditable; reconciliation-load scenario ran at 8.3ms avg with 0 open drifts.

5. **Evidence-gated release discipline**
   - **Situation:** Resume/benchmark numbers are easy to assert and hard to trust; performance claims without measurable, invariant-checked proof are marketing, not engineering.
   - **Action:** Built a k6 evidence program that runs scenarios, asserts business invariants (stock conservation, non-negative inventory, endpoint health) post-run, and only promotes passing evidence into a curated catalog served by typed backend APIs.
   - **Result:** One promoted run (commit `e2e3644`) passed 5 scenarios end-to-end; every performance claim in the portfolio traces to an invariant-checked artifact rather than an assertion.

---

## Resume Bullets (choose 4–6)

- Designed a Java 21 / Spring Boot modular-monolith inventory backend (6 Maven modules, 10 Flyway migrations, 15 tables) for omnichannel flash-sale reservations.
- Eliminated overselling with layered concurrency control — Redis per-SKU locks, transactional quota checks, and `@Version` optimistic locking — proven by a 50-VU k6 contention run with 0 failed requests and stock conservation held.
- Implemented three-tier idempotency (reservation keys, operation ledger with response replay, ingress receipt dedupe) so retries and webhook replays never double-apply an effect.
- Built a transactional-outbox Kafka pipeline (39 REST endpoints, versioned envelopes, retry + admin retry) so DB state and downstream events stay consistent on partial failure.
- Added channel sync + reconciliation that surfaces Shopee/TikTok drift without letting external channels overwrite central inventory.
- Established an evidence-gated k6 program (5 promoted scenarios) so every performance claim is backed by a reproducible, invariant-checked artifact.

---

## Guardrails (do not overclaim)

- No baseline/final comparison exists — do not claim a latency *improvement* or "1000 orders/sec" (that's a target, not measured).
- No live deployment URL or adoption metrics — do not claim "production-ready" or real users.
- Benchmark numbers are local promoted k6 evidence from commit `e2e3644`, not latest production performance.
