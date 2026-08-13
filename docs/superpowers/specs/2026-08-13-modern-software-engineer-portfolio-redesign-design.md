# Modern Software Engineer Portfolio Redesign — Design Spec

**Date:** 2026-08-13  
**Repository:** `qwan30/portfolio-2026`  
**Status:** Design approved for written-spec review  
**Owner:** Tran Thanh Quan  
**Scope:** Portfolio information architecture, project presentation model, content strategy, evidence rules, case-study structure, and recruiter/technical-reader UX.

---

## 1. Purpose

Redesign the portfolio so it presents Tran Thanh Quan as a **modern Software Engineer with backend and systems depth**, not only as a developer who lists technologies.

The portfolio must communicate the ability to move through the software lifecycle:

```text
business requirement
  -> clarify constraints and domain rules
  -> design architecture and boundaries
  -> implement software
  -> verify correctness and failure behavior
  -> deploy and operate
  -> observe and improve
  -> use AI/agents as engineering tools with explicit inputs, outputs and gates
```

The homepage is optimized for **recruiter scanning**, while `/projects` and `/projects/:slug` provide the technical depth needed by senior engineers, tech leads, and engineering managers.

The design intentionally keeps many projects visible. The solution is **not** to reduce the portfolio to two or three projects. Instead, every project must have a distinct engineering thesis and a consistent evidence-first presentation model.

---

## 2. Current-State Problems

### 2.1 Homepage information hierarchy

The current homepage makes multiple elements compete for attention and places a large amount of detailed project content in one long page. The project section renders every project in an alternating half-width timeline, which produces tall cards and high scroll cost.

The current project component also treats most projects with the same structure:

```text
title
-> generic description
-> large screenshot
-> technology badges
-> several impact claims
-> GitHub link
```

This makes projects with very different engineering value look similar.

### 2.2 Screenshot-first project presentation

A large UI screenshot is currently the strongest visual element of most project cards. This is inappropriate for a portfolio that wants to demonstrate backend, systems, architecture, reliability, security, DevOps and AI engineering.

The primary visual must depend on the engineering thesis:

- product workflow for domain-heavy systems;
- benchmark for concurrency work;
- architecture for infrastructure boundaries;
- retrieval/evaluation flow for AI systems;
- sequence/state diagram for financial workflows;
- product screenshot only when the UI itself explains the engineering problem.

### 2.3 Technology-first copy

The current content frequently explains a project through stack names rather than through engineering decisions.

The new copy model is:

```text
Technology / technique
-> what it was used to do
-> which failure, business rule or system constraint it addressed
-> what evidence demonstrates the result
```

Example:

```text
Redis Lua + compensation
-> atomically reject excess stock demand and repair cache state after DB failure
-> prevents race-condition overselling and Redis/DB divergence
-> 5,000-attempt benchmark: 0 oversells, 0 Redis/MySQL drift
```

### 2.4 Unsupported, stale or ambiguous claims

Several current portfolio claims are no longer aligned with repository state or are insufficiently scoped.

The redesign must correct them before visual polish.

Examples:

- Vijaco is currently presented with a stale C#/.NET stack while the approved Release 1 stack is Flutter/Dart + NestJS/TypeScript + PostgreSQL + Storage Adapter.
- `50+ staff` must not be shown as a verified metric unless a real evidence source is provided.
- AI Hospital must not collapse evaluation state into `95.2% accuracy`; current evaluation/release gating is more nuanced.
- Ledger must not be presented as primarily Java/Spring Boot when the current implementation is NestJS/TypeScript/Prisma/PostgreSQL and the Java workspace is not the primary implemented backend.
- Hash-chain claims for Ledger must be removed unless current implementation evidence is supplied.
- Mini Banking must not advertise OTP 2FA unless the current implementation is verified; current strengths are locking, idempotency, session rotation and auditability.
- Aivora numerical impact claims remain hidden until evidence is available.
- Inventory Flash Sale must not duplicate the thesis of the newer Flash Sale Reliability project.

### 2.5 Generic professional positioning

`Backend Software Engineer` alone is too narrow for the intended story, while `Software Engineer` alone is too generic.

The portfolio must show a software engineer who is backend/systems-oriented but can participate in requirements, architecture, testing, security, delivery, observability, applied AI and engineering coordination.

---

## 3. Product Goals

The redesigned portfolio must satisfy all of the following:

1. A recruiter must understand the candidate identity and strongest evidence within **15–30 seconds**.
2. A technical reviewer must be able to determine **what engineering problem each project proves** without opening the repository.
3. The homepage must show **multiple projects** without forcing every project into a full case study.
4. Each project must have a unique engineering thesis; duplicate projects must be reframed as evolution or secondary work.
5. Numeric claims must be evidence-backed, scoped and dated.
6. The site must demonstrate breadth across the software lifecycle without becoming a keyword dump.
7. Applied AI must be presented as an engineered subsystem with retrieval, evaluation, permissions, observability and failure boundaries—not as API-key integration.
8. AI-assisted development must be presented as a workflow discipline—context, specification, decomposition, verification and review—not as a list of agent brands.
9. Business/domain reasoning must be visible in the project copy.
10. Existing editorial/brutalist visual personality should be preserved rather than replaced by a generic SaaS portfolio template.

---

## 4. Non-Goals

This redesign does **not**:

- build a CMS;
- turn the homepage into a technical blog;
- expose private repository source code;
- claim production readiness where release gates remain open;
- fabricate user counts, performance metrics, compliance or business impact;
- list every technology ever used;
- add a language switcher in this phase;
- replace project repositories as the source of technical truth;
- redesign unrelated personal branding from scratch.

Primary portfolio language for this phase is **English**. Vietnamese and English must not be mixed inside the same project card except for proper nouns.

---

## 5. Target Readers

### 5.1 Recruiter / HR

Needs to answer quickly:

- Who is this candidate?
- What roles fit him?
- What has he built?
- Is there measurable evidence?
- What core stack is he comfortable discussing?
- Where is the resume/contact link?

### 5.2 Tech lead / interviewer

Needs to answer:

- What trade-offs did he make?
- Does he understand correctness, transactions, security and failure modes?
- Does he understand the business process behind the software?
- Can he test and verify what he claims?
- Can he explain AI beyond model/API integration?

### 5.3 Engineering manager

Needs to answer:

- Can he own work beyond implementation?
- Can he decompose work and collaborate through plans, tasks and PRs?
- Can he operate software after coding?
- Does he distinguish prototype evidence from production claims?

---

## 6. Positioning

### 6.1 Positioning statement

The site should communicate:

> **Software Engineer focused on backend systems, reliability and applied AI—turning business requirements into software that can be designed, tested, deployed, observed and improved.**

### 6.2 What “modern Software Engineer” means on this portfolio

It means demonstrating evidence across these capability pillars:

1. **Product & Business Understanding** — requirements, workflows, domain rules, state transitions, constraints.
2. **Backend & Distributed Systems** — APIs, transactions, concurrency, data consistency, messaging, idempotency.
3. **Reliability & Operations** — testing, load testing, observability, failure handling, CI/CD, deployment, VPS/cloud.
4. **Architecture & Security** — system boundaries, authorization, storage/network boundaries, trade-offs, decision records.
5. **Applied AI Engineering** — retrieval, Graph RAG, evaluation, citation/evidence, permissions, guardrails, AI observability.
6. **AI-Augmented Engineering Workflow** — specs, context engineering, task decomposition, test/review gates, human-agent coordination.
7. **Collaboration & Execution** — PRs, task ownership, team coordination, Jira/Notion-style planning where supported by evidence.

These pillars are not seven large skill lists. Each is supported by project evidence.

---

## 7. Homepage Information Architecture

The homepage order becomes:

```text
1. Navbar
2. Hero
3. Engineering Proof Strip
4. Selected Engineering Work
   - 5 proof-first featured projects
   - 2–3 compact secondary projects
5. Engineering Scope / Capability Pillars
6. Technical Skills
7. Background & Education
8. Activities / Beyond Code
9. Contact CTA
10. Footer
```

### 7.1 Navbar

Use:

```text
Projects
Engineering
Skills
About
Resume
Contact
```

Rules:

- `Projects` links to the homepage project section and `/projects` remains the full project archive.
- `Engineering` replaces the current generic `Expertise` naming.
- `Activities` is removed from the primary navigation.
- `Contact` remains a high-contrast CTA.
- `Resume` is directly accessible from the navbar on desktop and from the mobile menu.

---

## 8. Hero Design and Copy

### 8.1 Hierarchy

The hero must have one clear identity hierarchy:

```text
SOFTWARE ENGINEERING · BACKEND & SYSTEMS
Tran Thanh Quan
I BUILD RELIABLE SYSTEMS.
Supporting positioning copy
Primary CTAs
Core stack line
Supporting terminal visual
```

The terminal remains because it is part of the portfolio’s visual identity, but it is supporting evidence—not the main source of identity.

### 8.2 Approved hero copy

**Eyebrow**

> SOFTWARE ENGINEERING · BACKEND & SYSTEMS

**Name**

> Tran Thanh Quan

**Headline**

> I BUILD RELIABLE SYSTEMS.

**Supporting copy**

> I turn business requirements into software that can be designed, tested, deployed, observed and improved—across backend systems, concurrency, cloud delivery and applied AI.

**Primary CTAs**

```text
View Engineering Work
Resume
GitHub
```

**Core-stack line**

```text
Java · Spring Boot · PostgreSQL · Redis · Docker · AWS · Applied AI
```

The hero must not present every language/framework used in older projects.

### 8.3 Terminal content

The terminal should communicate engineering domains rather than unverified metrics.

Recommended copy:

```text
> initialize engineering workspace...

[OK] backend systems
[OK] concurrency & consistency
[OK] observability & delivery
[OK] applied AI pipelines
[OK] verification gates

> status: ready_to_build_
```

Do not hard-code per-project marketing metrics inside the terminal.

---

## 9. Engineering Proof Strip

The proof strip appears directly below the hero and provides evidence, not slogans.

Initial content:

### Proof 1 — Flash Sale

**Value:** `0 OVERSELLS`  
**Context:** `5,000 reservation attempts · 100 concurrent threads · 1,000 stock`  
**Qualifier:** `benchmark snapshot; not a production-capacity claim`

### Proof 2 — AI Hospital

**Value:** `150 E2E PASSED`  
**Context:** `full-project browser regression run from PR #104`  
**Qualifier:** `1 skipped; test snapshot, not AI-quality accuracy`

### Proof 3 — Vijaco

**Value:** `565 BACKEND TESTS`  
**Context:** `PR #61 verification snapshot`  
**Qualifier:** `plus 335 Flutter tests and 62 upload-focused tests`

Rules:

- Every proof has an evidence source and verification date in data.
- A proof snapshot may remain visible after test counts increase only if its date/scope remains explicit.
- `95.2% ACCURACY` is removed from the hero.
- `50+ STAFF` is removed until a verifiable source exists.

---

## 10. Projects Section — Chosen Layout

### 10.1 Replace the half-width zig-zag card layout

The current alternating 50% timeline is visually distinctive but makes each card narrow and tall. It forces large vertical scrolling and gives screenshots too much visual dominance.

Replace it with **full-width horizontal proof-first cards** for featured projects.

Desktop structure:

```text
PROJECT NUMBER / CATEGORY / STATUS

┌──────────────────────────────────────────────────────────────┐
│ CONTENT / ENGINEERING STORY │ VISUAL / PROOF                │
│                              │                               │
│ Role                         │ screenshot / architecture     │
│ Project title                │ benchmark / flow              │
│ Thesis                       │ depending on thesis           │
│ Problem                      │                               │
│ 2–3 engineered decisions     │ evidence chips                │
│ Stack                        │                               │
│ Case Study CTA               │                               │
└──────────────────────────────────────────────────────────────┘
```

Alternate the visual side between featured cards to retain the editorial rhythm of the existing site.

The timeline identity may remain as:

- project number;
- a thin vertical/section progression marker;
- category accent colors;
- small milestone dots.

The timeline must no longer constrain the card to half the page width.

### 10.2 Mobile structure

Mobile order for every featured card:

```text
category/status
role
title
thesis
problem
visual
engineered decisions
proof
tools/stack
CTA
```

The user must understand the project before the large image appears.

### 10.3 Featured vs compact projects

Use two presentation levels.

**Featured proof-first cards:**

1. Vijaco
2. Flash Sale Concurrency Engine
3. AI Hospital Knowledge Assistant
4. Hospital Management System
5. Ledger Credit System

**Compact engineering cards:**

6. Mini Digital Banking Platform
7. Aivora — only after evidence cleanup
8. Inventory Flash Sale — presented as an earlier concurrency prototype/evolution item

All projects remain discoverable from `/projects`.

---

## 11. Project Content Grammar

Every featured project follows this exact information hierarchy.

### 11.1 Identity

```text
category
status
role
project title
one-sentence engineering thesis
```

### 11.2 Problem

Maximum two short sentences.

The problem must describe:

- business need;
- system risk/constraint;
- why a simple CRUD implementation is insufficient.

### 11.3 Engineered decisions

Display exactly **2–3 decisions** on the homepage.

Each decision follows:

```text
Technique / technology
-> mechanism implemented
-> resulting engineering property
```

Do not list general features such as “REST API”, “responsive UI”, “Docker support” unless they are directly tied to the thesis.

### 11.4 Proof

Use 1–3 proof items.

Proof may be:

- benchmark result;
- test result;
- verified user/business metric;
- invariant guaranteed by implementation and tests;
- release/verification status;
- a bounded security remediation result.

Proof may not be an unsourced adjective such as “high performance”, “enterprise-grade”, “100% secure”, “fully production-ready” or “HIPAA compliant”.

### 11.5 Technology stack

Stack is shown after the engineering story, not before it.

The reader should know **why** a technology matters before seeing its name.

### 11.6 CTA

Featured public repo:

```text
Read Case Study ->
View Source ->
```

Private repo:

```text
Read Case Study ->
Private Repository
```

Do not send a recruiter to an inaccessible GitHub page as the primary CTA.

---

## 12. Project Data Model

Replace the current generic `description + metrics + techHighlights` model with a typed evidence-first model.

Conceptual interface:

```ts
interface ProjectEvidence {
  value: string;
  label: string;
  context: string;
  sourceUrl?: string;
  verifiedAt?: string;
  status: 'verified' | 'historical' | 'pending';
}

interface EngineeringDecision {
  title: string;
  mechanism: string;
  outcome: string;
}

interface ProjectVisual {
  kind: 'product' | 'architecture' | 'benchmark' | 'workflow' | 'mixed';
  primaryImage?: string;
  secondaryImage?: string;
  alt: string;
  caption: string;
}

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  statusLabel: string;
  period: string;
  role: string;
  thesis: string;
  problem: string;
  decisions: EngineeringDecision[];
  evidence: ProjectEvidence[];
  techStack: string[];
  capabilities: string[];
  visual: ProjectVisual;
  presentation: 'featured' | 'compact' | 'archive';
  repositoryVisibility: 'public' | 'private' | 'unavailable';
  repositoryUrl?: string;
  caseStudyPath: string;
}
```

### 12.1 Data-source rule

`portfolioData.ts` must no longer be the only large mixed file containing personal information, skill taxonomy, project marketing copy, activities and all project deep-dive content.

Preferred content boundaries:

```text
src/
  data/
    personal.ts
    capabilities.ts
    skills.ts
    activities.ts
    projects/
      index.ts
      vijaco.ts
      flash-sale.ts
      ai-hospital.ts
      hospital-management.ts
      ledger-credit.ts
      mini-banking.ts
      aivora.ts
      inventory-flashsale.ts
```

This is a design boundary, not a requirement to build a CMS.

---

## 13. Project-Specific Content

## 13.1 Vijaco

**Category**

> INTERNAL ENTERPRISE PLATFORM

**Status**

> CONTROLLED RELEASE / PILOT

Do not use `Solo Production Freelance` while release/operational gates are still explicit in the repository.

**Role**

> Software Engineer — Product · Mobile · Backend · Delivery

**Title**

> Vijaco — Secure Internal File Operations Platform

**Thesis**

> Secure mobile access to company files without exposing databases or physical storage paths, while transfers and mutations remain permission-aware, recoverable and auditable.

**Problem**

> Employees need flexible mobile access to company files, but the system must keep authorization on the backend, reuse existing company storage safely, and survive interrupted uploads without corrupting file state.

**Engineered decisions**

1. **Backend-authoritative permissions & audit**  
   Default-deny resource access is evaluated by the backend; protected mutations depend on durable audit rather than trusting Flutter UI state.

2. **Resilient transfer pipeline**  
   Durable upload queue, chunk checksums, reconciliation, retry and idempotent completion keep transfers recoverable across network/process interruptions.

3. **Bounded remote-access architecture**  
   Mobile traffic enters through HTTPS while NestJS, PostgreSQL and physical company storage remain behind controlled boundaries and storage is addressed through logical roots/Storage Adapter.

**Evidence shown on homepage**

- `335 Flutter tests passed` — PR #61 snapshot.
- `565 backend tests passed` — PR #61 snapshot.
- `62 upload-focused tests passed` — PR #61 snapshot.

**Current limitation that must remain truthful**

> Production upload admission is not represented as fully released while its approval/evidence gate remains intentionally fail-closed.

**Stack**

```text
Flutter · Dart · NestJS · TypeScript · PostgreSQL · HTTPS · Storage Adapter
```

Only add Docker/deployment technologies when verified against current deployment artifacts.

**Visual**

Use a mixed visual:

```text
mobile product screenshot
+
Flutter -> HTTPS -> NestJS -> PostgreSQL / Storage Adapter -> Company Storage
```

The login screen must not consume most of the card.

**CTA**

`Read Case Study ->` is primary. Repository is labeled private if source access is unavailable to visitors.

---

## 13.2 Flash Sale Concurrency Engine

**Category**

> DISTRIBUTED SYSTEMS & RELIABILITY LAB

**Status**

> BENCHMARKED / EVIDENCE-BACKED

**Role**

> Backend Reliability Engineer

**Title**

> Flash Sale Concurrency Engine

**Thesis**

> Compare inventory-reservation strategies under burst concurrency and prove which designs preserve stock correctness when requests, database writes and events fail in different places.

**Problem**

> Thousands of requests can compete for a limited stock pool. A naive database path can oversell, while a cache-first path can drift from the database if partial failures are not compensated.

**Engineered decisions**

1. **Redis Lua atomic stock gate**  
   Move the hot reservation decision into one atomic Redis operation so excess demand is rejected before creating unnecessary database contention.

2. **Compensation and consistency repair**  
   Explicitly handle Redis-success/DB-failure paths so cached stock does not silently diverge from the durable source of truth.

3. **Transactional Outbox + observable workload**  
   Couple database state with durable event intent and verify behavior using reproducible JMeter/k6 workloads plus OpenTelemetry/Prometheus/Grafana instrumentation.

**Evidence shown on homepage**

- `5,000 attempts / 100 threads / 1,000 stock` benchmark scenario.
- `0 oversells` in the verified correctness run.
- `0 Redis/MySQL drift` in the same scoped run.

**Evidence qualifier**

> Correctness benchmarks are not production-capacity guarantees. Machine-specific throughput numbers must always retain benchmark date/environment context.

**Stack**

```text
Java 21 · Spring Boot · Redis · MySQL · Kafka · OpenTelemetry · JMeter · k6
```

**Visual**

Primary visual is a benchmark/comparison graphic plus a small reservation architecture. Product UI is secondary.

---

## 13.3 AI Hospital Knowledge Assistant

**Category**

> APPLIED AI ENGINEERING

**Status**

> EVALUATION-GATED

**Role**

> AI & Backend Engineer

**Title**

> AI Hospital Knowledge Assistant

**Thesis**

> Build clinical AI where evidence scope, permissions, citations and evaluation gates matter more than fluent model output.

**Problem**

> Clinical questions may require information across documents and patient history, but unauthorized evidence must never enter model context and generated claims must remain traceable to retrieved sources.

**Engineered decisions**

1. **Permission-aware retrieval**  
   Patient/document authorization constrains retrieval before evidence is assembled for the LLM.

2. **Evidence-grounded generation**  
   Retrieval, generation and citation validation are separate stages so missing or invalid evidence can fail safely instead of being hidden behind fluent text.

3. **Document intelligence pipeline**  
   OCR/document parsing, chunking, embeddings, vector/lexical retrieval, graph context and streaming are treated as one observable software pipeline rather than a single API call.

**Evidence shown on homepage**

- `670 backend tests passed` — PR #104 snapshot.
- `130 frontend tests passed` — PR #104 snapshot.
- `150 E2E passed` — PR #104 snapshot, with one skipped.

Only one or two of these need to appear on the card; the rest belongs in the case study.

**Removed claim**

> Do not display `95.2% accuracy` or `95.2% citation score` on the homepage until the current evaluation artifact, methodology and release status explicitly support that exact number.

**Compliance copy rule**

Do not state `HIPAA compliant`. Prefer factual implementation descriptions such as `permission-aware PHI access boundaries`, `de-identified/synthetic test data`, and explicit security controls.

**Stack**

```text
Python · FastAPI · PostgreSQL/pgvector · Redis/RQ · RAG/GraphRAG · React
```

**Visual**

Primary visual:

```text
Document -> OCR/Parse -> Chunk -> Retrieve -> Permission Scope
         -> LLM -> Citation Validation -> Stream
```

Use the Graph RAG screenshot as supporting product evidence, not the only hero image.

---

## 13.4 Hospital Management System

**Category**

> DOMAIN-DRIVEN BACKEND SYSTEM

**Status**

> ENTERPRISE BACKEND PROJECT

**Role**

> Backend Software Engineer

**Title**

> Hospital Management System

**Thesis**

> Model an end-to-end clinical workflow where role, patient relationship and state transitions determine what each operation is allowed to do.

**Problem**

> Hospital software is not a collection of independent CRUD screens. Booking, check-in, nursing, consultation, pharmacy, billing and discharge are connected business states, and sensitive patient data requires object-level authorization beyond role checks.

**Engineered decisions**

1. **Clinical workflow/domain modeling**  
   Model booking-to-completion as explicit business transitions instead of allowing arbitrary record mutation.

2. **Object-level PHI authorization**  
   Role permission is combined with patient/care-relationship scope; security remediation closed BOLA exposure across 13 PHI endpoints without breaking nurse workflow.

3. **Operational deployment constraints**  
   Deployment configuration was tuned for constrained infrastructure, including JVM memory bounds for a 512 MiB Render environment, demonstrating that runtime limits are part of engineering—not a post-coding concern.

**Evidence candidates**

- `13 PHI endpoints hardened` in the BOLA remediation PR.
- `34 RBAC permissions` after source-backed metric correction.
- targeted application/controller/infrastructure and Postgres integration tests from the security remediation.

Use no generic claim such as “manages all hospital records efficiently” as proof.

**Stack**

Use current repository truth. Initial presentation:

```text
Java · Spring Boot · Spring Security · PostgreSQL · Flyway · Docker
```

Do not keep stale MySQL copy if the current release architecture uses PostgreSQL.

**Visual**

Primary visual is the clinical business flow/state progression, with dashboard UI secondary.

---

## 13.5 Ledger Credit System

**Category**

> FINANCIAL SYSTEM DESIGN

**Status**

> BACKEND / FINANCIAL INFRASTRUCTURE LAB

**Role**

> Backend Systems Engineer

**Title**

> Ledger Credit System

**Thesis**

> Design financial workflows where retries cannot create money and every balance-changing operation remains explainable through an append-only ledger model.

**Problem**

> Money movement must remain exact under retries and failures. A mutable “balance-only” data model is insufficient when operators must reconstruct how credit, transfers and settlement changed state.

**Engineered decisions**

1. **Double-entry journal/posting model**  
   Represent money movement as balanced ledger entries instead of relying only on mutable account totals.

2. **Durable idempotent orchestration**  
   Repeated external requests reuse a stable operation identity so retry behavior does not duplicate the financial mutation.

3. **Recoverable operational workflows**  
   Batch close/retry paths and explicit business flows make failure recovery an intentional part of the system model.

**Removed claims**

- Remove primary `Java 21 / Spring Boot / Redis` stack presentation unless the Java implementation becomes the actual current backend.
- Remove `Hash Chain Validation` unless current code/evidence explicitly proves it.
- Remove `100% financial integrity` marketing language.

**Current primary stack**

```text
NestJS · TypeScript · Prisma · PostgreSQL
```

Java workspace may be described in the deep dive only with truthful current status.

**Visual**

Use a money-flow / journal-posting diagram rather than a generic UI screenshot.

---

## 13.6 Mini Digital Banking Platform — Compact Card

**Category**

> TRANSACTIONAL BANKING BACKEND

**Role**

> Backend Software Engineer

**Thesis**

> Build a retry-safe banking transfer workflow across authentication, account balance mutation and audit history.

**Evidence/engineering chips**

```text
Pessimistic row locking
Idempotency key
Refresh-token rotation
Append-only transaction history
```

**Stack**

```text
Java · Spring Boot · Spring Security · PostgreSQL · JWT
```

**Removed copy**

Do not advertise OTP 2FA unless the current repository implementation is verified.

**Differentiation from Ledger**

- Ledger = financial invariants and accounting infrastructure.
- Mini Banking = secure transactional application workflow.

---

## 13.7 Aivora — Compact Card with Evidence Gate

**Category**

> TEAM PRODUCT ENGINEERING

**Role**

Use the verified team role after repository/contribution evidence is available.

**Thesis**

> Coordinate a team-built freelance marketplace around escrow/payment workflow and AI-assisted requirement clarification.

**Current rule**

Until repository/contribution evidence is available:

- remove `100% financial safety`;
- remove `30% faster contract closing`;
- do not claim a specific locking/payment mechanism as verified homepage evidence;
- do not use an inaccessible repository as the primary CTA.

The case study may later become the main proof for:

```text
team collaboration
work decomposition
PR/review workflow
Jira/Notion-style planning
payment integration
cross-role coordination
```

but those claims require artifacts or explicit user-provided evidence.

---

## 13.8 Inventory Flash Sale — Archive / Evolution Card

**Presentation**

> Earlier Concurrency Prototype

**Thesis**

> An earlier inventory/concurrency implementation that led to the more evidence-driven Flash Sale Reliability Lab.

Do not show it as a second flagship project with the same Redis/Kafka/concurrency story.

Preferred presentation:

```text
Inventory prototype
  -> limitations discovered
  -> Flash Sale reliability redesign
  -> strategy comparison
  -> reproducible benchmark
  -> observability and release hardening
```

Remove `<10ms` and `100% consistency` from homepage copy unless their exact environments and evidence are supplied.

---

## 14. `/projects` Archive

Create a dedicated project archive route.

Purpose:

- show all projects without overloading the homepage;
- allow filtering/scanning by engineering capability;
- preserve chronological/evolution context.

Recommended filters:

```text
All
Backend & Systems
Reliability
Applied AI
Domain Engineering
Financial Systems
Team/Product
```

This page may retain more of the existing timeline visual language than the homepage.

---

## 15. `/projects/:slug` Technical Case Studies

Every featured project receives a dedicated case-study route.

### 15.1 Standard case-study structure

```text
1. Summary
2. Business Context
3. My Role / Ownership
4. Constraints & Invariants
5. Architecture
6. Key Engineering Decisions
7. Critical Flow / Sequence
8. Verification & Evidence
9. Reliability / Security / Operations
10. Trade-offs & Alternatives Considered
11. Current Limitations / Release Status
12. What I Learned
13. Repository / Demo / Related Evidence
```

### 15.2 Business context

The case study must explain the real process before technology.

Examples:

- Vijaco: employee/admin file lifecycle and existing company storage.
- Flash Sale: limited stock under demand bursts.
- Hospital: booking -> check-in -> clinical work -> pharmacy/billing.
- Ledger: money movement, retries and reconciliation.

### 15.3 Architecture

A case study must show **why boundaries exist**, not only a component diagram.

### 15.4 Evidence section

Evidence entries include:

```text
claim
scope
artifact/source
verified date
what it proves
what it does not prove
```

This is especially important for performance and AI-evaluation claims.

### 15.5 AI usage in software development

Do not add a generic “Built with AI” badge.

Where relevant, a case study may contain an `Engineering Workflow` section showing:

```text
human intent
-> design/spec
-> task decomposition
-> agent implementation/research
-> tests
-> independent review
-> evidence gate
-> durable decision documentation
```

The section must explain human ownership, inputs, outputs and verification boundaries.

---

## 16. Engineering Scope Section

Rename current `I CAN HELP YOU WITH` / generic Expertise framing to:

> **ENGINEERING SCOPE**

Use a 3x2 grid on desktop.

### 16.1 Product & Domain

> Translate requirements and workflows into explicit states, invariants and system boundaries.

Evidence links: Hospital Management, Vijaco, Ledger.

### 16.2 Backend & Distributed Systems

> Design APIs, transactions, concurrency control, consistency and asynchronous workflows around failure behavior.

Evidence links: Flash Sale, Ledger, Mini Banking.

### 16.3 Reliability & Operations

> Verify software with tests, load workloads, observability and deployment constraints instead of stopping at “it runs locally”.

Evidence links: Flash Sale, Vijaco, Hospital.

### 16.4 Applied AI Engineering

> Build retrieval/evaluation/citation pipelines where permissions and evidence boundaries are explicit.

Evidence links: AI Hospital.

### 16.5 AI-Augmented Engineering

> Use agents through specs, context, task decomposition, test/review gates and durable decisions rather than uncontrolled prompt-to-code execution.

Evidence links: repositories containing Superpowers/agent workflow artifacts.

### 16.6 Collaboration & Execution

> Break work into reviewable tasks, coordinate through plans/issues/PRs and communicate delivery evidence across a team.

Evidence links: Aivora after verification; selected multi-PR project work where appropriate.

---

## 17. Technical Skills Section

Skills remain visible but move from “identity” to “supporting inventory”.

Recommended groups:

```text
LANGUAGES
Java · SQL · Python · TypeScript · Dart

BACKEND
Spring Boot · Spring Security · FastAPI · NestJS · JPA/Hibernate

DATA & MESSAGING
PostgreSQL · MySQL · Redis · pgvector · Kafka · Flyway

RELIABILITY & OBSERVABILITY
JUnit · Testcontainers · Playwright · JMeter · k6 · OpenTelemetry · Prometheus · Grafana · Loki

DELIVERY & CLOUD
Docker · Docker Compose · Nginx · GitHub Actions · Linux · VPS · AWS

AI SYSTEMS
RAG · GraphRAG · Hybrid Retrieval · Evaluation · Citation Grounding · LLM Integration
```

Rules:

- Only list technologies the candidate is prepared to discuss in an interview.
- Remove stale `.NET 10`/C# prominence if it is not part of current demonstrated project work; it may remain if Aivora evidence confirms meaningful ownership.
- `AI-assisted PR Review` is not a language/framework skill. It belongs under AI-Augmented Engineering.
- Jira/Notion belong under collaboration/workflow, not technical stack.

---

## 18. Background & Education

Replace the current asymmetric About/certification column with a compact section.

Recommended copy:

> Software Engineering student focused on backend systems, reliability and applied AI. I enjoy work where correctness, business rules and operational behavior matter as much as feature delivery.

Supporting facts:

```text
FPT University
Bachelor of Engineering in Software Engineering
2023–2027
Ho Chi Minh City, Vietnam
Open to Software Engineering / Backend internship opportunities
```

Certifications become compact supporting items and must not visually compete with engineering work.

Do not repeat the profile photo if the hero already contains it.

---

## 19. Activities / Beyond Code

Rename or position community/business content as:

> **BEYOND CODE**

Do not let the activity gallery interrupt the software-engineering story.

For `Tết Luôn Vui`, show one compact story card emphasizing:

```text
9-member team leadership
3,550,000 VND raised
934 organic followers
planning / communication / logistics
```

Use one representative visual on the homepage. Additional photos belong in an expanded detail/lightbox.

This section proves teamwork, ownership and execution—not technical competence.

---

## 20. Contact CTA

End with a strong close:

**Headline**

> LET’S BUILD SOMETHING RELIABLE.

**Supporting line**

> Open to Software Engineering and Backend internship opportunities where I can work across implementation, system design, reliability and modern AI-assisted engineering workflows.

**Links**

```text
Email
LinkedIn
GitHub
Resume
```

---

## 21. Evidence and Claim Policy

This is a project-wide content rule.

### 21.1 Numeric claims

Every numeric claim requires:

- exact scope;
- evidence source;
- verification date;
- qualifier when the result is environment-specific.

Bad:

> Handles 5,000+ requests.

Good:

> 5,000 reservation attempts across 100 concurrent threads in the recorded benchmark; 0 oversells and 0 Redis/MySQL drift.

### 21.2 Performance claims

Never transform a local benchmark into production capacity.

Always distinguish:

```text
correctness benchmark
load-test snapshot
machine-specific throughput
production SLO
```

### 21.3 AI claims

Never use `accuracy` unless the metric is explicitly defined as accuracy.

AI evidence must name:

- evaluation set;
- metric;
- adapter/model/config when relevant;
- review/release status.

### 21.4 Security/compliance claims

Avoid:

```text
100% secure
HIPAA compliant
zero data leakage
enterprise-grade security
```

unless independently justified.

Prefer implementation facts:

```text
default-deny authorization
object-level patient scoping
permission-aware retrieval
fail-closed audit
secret/config hardening
```

### 21.5 Production claims

Use one of these statuses instead of casually writing `production`:

```text
Production
Controlled Release
Pilot
Release Candidate
Benchmark/Lab
Prototype
Historical/Evolution
```

The status must match repository evidence.

---

## 22. Visual Rules for Project Cards

### 22.1 Visual must prove the thesis

| Project | Primary visual |
|---|---|
| Vijaco | Mobile product + storage/security architecture |
| Flash Sale | Benchmark/comparison + reservation architecture |
| AI Hospital | Retrieval/evaluation flow + Graph RAG UI |
| Hospital Management | Clinical business workflow + dashboard |
| Ledger | Double-entry / journal money flow |
| Mini Banking | Transfer locking/idempotency sequence |
| Aivora | Escrow/payment state machine after verification |
| Inventory v1 | Engineering-evolution diagram |

### 22.2 Screenshot rules

- No screenshot may dominate a card merely because it is tall.
- Phone screenshots use `object-contain` inside a bounded visual area.
- Architecture/benchmark images must remain legible at card size.
- Every image has a project-specific alt/caption.
- Remove the current hard-coded lightbox caption that always says `Full-resolution Graph RAG Medical Knowledge Graph`; caption must come from project data.

### 22.3 Color rules

Pastel project colors may remain, but color should map consistently to engineering categories rather than rotating arbitrarily.

Suggested mapping:

```text
Blue   -> Backend / Distributed Systems
Purple -> Applied AI
Green  -> Product / Production-facing systems
Yellow -> Reliability / Infrastructure
Neutral -> Financial / Domain systems where needed
```

---

## 23. Interaction and Navigation

### 23.1 Project modal

Retire the current large generic `selectedProject` case-study modal as the primary deep-dive mechanism.

Use dedicated routes instead:

```text
/projects
/projects/vijaco
/projects/flash-sale
/projects/ai-hospital
/projects/hospital-management
/projects/ledger-credit
/projects/mini-banking
```

A modal remains appropriate only for image enlargement.

### 23.2 Routing

Use a real client-side router for clean case-study routes.

Deployment must support SPA fallback so direct requests to `/projects/:slug` resolve to the application entry point.

### 23.3 Link behavior

- Internal case studies use normal same-tab navigation.
- Public GitHub repositories open in a new tab.
- Private/unavailable repos do not expose a broken “source” CTA.
- Resume opens/downloads through a stable asset link.

---

## 24. SEO / Page Metadata

Recommended homepage title:

> Tran Thanh Quan | Software Engineer — Backend, Systems & Applied AI

Recommended description:

> Software Engineering portfolio focused on backend systems, concurrency, reliability, cloud delivery and applied AI, with evidence-backed engineering case studies.

Case-study pages should use project-specific title/description metadata.

---

## 25. Proposed Component / Content Boundaries

This design should result in focused units such as:

```text
src/
  components/
    Hero.tsx
    EngineeringProof.tsx
    projects/
      ProjectSection.tsx
      FeaturedProjectCard.tsx
      CompactProjectCard.tsx
      ProjectVisual.tsx
      EvidenceList.tsx
    EngineeringScope.tsx
    Skills.tsx
    Background.tsx
    BeyondCode.tsx
    Contact.tsx

  pages/
    ProjectsArchive.tsx
    ProjectCaseStudy.tsx

  data/
    personal.ts
    capabilities.ts
    skills.ts
    activities.ts
    projects/
      ...

  types/
    portfolio.ts
```

The exact implementation plan may adapt names to existing repository conventions, but responsibilities must remain separated.

---

## 26. Content Migration Rules

Before changing layout, content must be migrated through these rules:

1. Compare each project card with the current repository.
2. Correct title/category/role/stack first.
3. Remove unsupported metrics.
4. Write one engineering thesis.
5. Write one business/system problem.
6. Select 2–3 engineering decisions that prove distinct capability.
7. Attach evidence with source/date/status.
8. Select the visual that best proves the thesis.
9. Assign presentation level: featured, compact or archive.
10. Only then implement the UI.

Visual redesign must never preserve a known-false claim for layout convenience.

---

## 27. Success Criteria

The redesign is successful when all conditions below are met.

### Recruiter scan

Within the first viewport plus one short scroll, a reader can identify:

- Tran Thanh Quan;
- Software Engineering / Backend & Systems positioning;
- the `I BUILD RELIABLE SYSTEMS` brand line;
- core stack;
- at least three evidence-backed proof items;
- clear Projects / Resume / GitHub CTAs.

### Project scan

For each featured project, a reader can answer without opening GitHub:

- What problem was being solved?
- What did the candidate personally engineer?
- Which technology/technique mattered and why?
- What evidence supports the claim?
- What is the project’s current status/limitation?

### Breadth without duplication

The homepage visibly demonstrates:

```text
enterprise product ownership
concurrency/reliability
applied AI engineering
business/domain modeling
financial invariants
transactional security
team collaboration when evidence exists
```

No two flagship projects have the same thesis.

### Truthfulness

- No unsupported `50+ staff` claim.
- No unsupported `95.2% accuracy` claim.
- No unsupported `100%` financial/security claim.
- No stale Vijaco/ Ledger stack.
- No OTP claim without implementation evidence.
- No inaccessible private repo presented as a working public source link.

### UX

- Featured project cards are full-width proof-first cards, not half-width tall screenshot cards.
- All projects remain discoverable.
- Technical deep dives have dedicated routes.
- Mobile cards preserve problem/engineering hierarchy before visual bulk.
- Image lightbox captions are project-specific.

---

## 28. Verification Requirements

Implementation is not accepted until all of these are checked:

### Content verification

- Audit every project against its current repository README/docs/relevant PR evidence.
- Verify every numeric proof source and date.
- Search rendered copy for banned/unsupported phrases listed in this spec.
- Confirm public/private repository behavior.

### Functional verification

- `npm run lint` passes.
- `npm run build` passes.
- Homepage navigation works.
- `/projects` direct load works.
- Every `/projects/:slug` direct load works after deployment rewrite/fallback.
- All internal/external CTAs resolve correctly.
- Escape/click behavior for image lightbox remains accessible.

### Responsive verification

Test at minimum:

```text
375px
768px
1024px
1440px
```

No project thesis/problem/proof may become unreadable because a screenshot receives priority.

### Accessibility verification

- semantic heading order;
- descriptive image alt text;
- visible keyboard focus;
- buttons/links distinguishable by more than color;
- no click-only interaction without keyboard equivalent;
- sufficient contrast for pastel card variants.

---

## 29. Release Strategy

Implementation should be split into independently reviewable workstreams:

1. **Evidence & content correction** — correct stale project data and remove unsupported claims without changing the major layout.
2. **Homepage information architecture** — hero/proof/navigation/section-order changes.
3. **Project presentation system** — featured proof-first card + compact card + evidence data model.
4. **Project archive and case-study routing** — `/projects` and `/projects/:slug`.
5. **Capability/skills/background cleanup** — engineering scope, skill taxonomy, About/Activities compression.
6. **Visual/accessibility polish** — project-specific visuals, lightbox captions, responsive and interaction verification.

A content-truthfulness fix must not wait for the later visual phases.

---

## 30. Final Design Decision

The portfolio is no longer designed as:

> “Here is everything I have built and every tool I know.”

It is designed as:

> **“Here is the kind of Software Engineer I am, the problems I can reason about, the systems I have built, and the evidence that shows how those systems behave.”**

Homepage strategy:

```text
recruiter-first summary
+
5 evidence-first flagship projects
+
2–3 compact projects
+
capability map
+
concise skill/background support
```

Technical depth moves to:

```text
/projects
/projects/:slug
```

This preserves the breadth of the current portfolio while making the reader understand **business problem -> engineering decision -> technology -> evidence -> result**, which is the central narrative for the modern Software Engineer positioning.
