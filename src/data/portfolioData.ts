export interface GalleryItem {
  url: string;
  title: string;
  badge?: string;
  description?: string;
}

export interface EngineeredDecision {
  technique: string;
  mechanism: string;
  property: string;
}

export interface FailureMode {
  failureMode: string;
  mitigation: string;
  tradeOff: string;
}

export interface VerificationItem {
  type: string;
  details: string;
  result: string;
}

export interface CaseStudyData {
  executiveSummary: string;
  businessContext: string;
  problemStatement: string;
  systemConstraints: string[];
  architecture: string;
  architectureHighlights: string[];
  deepDecisions: {
    title: string;
    technique: string;
    mechanism: string;
    impact: string;
  }[];
  failureModesAndTradeoffs: FailureMode[];
  testingAndVerification: VerificationItem[];
  deploymentAndObservability: string[];
  operationalOutcomes: string[];
  gallery: GalleryItem[];
}

export interface FeaturedProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  role: string;
  period: string;
  thesis: string;
  problem: string;
  engineeredDecisions: EngineeredDecision[];
  proofChips: string[];
  techStack: string[];
  githubUrl?: string; // undefined for private repos (Vijaco)
  liveUrl?: string;
  featuredImage: string;
  thumbnails: GalleryItem[];
  caseStudy: CaseStudyData;
}

export interface SecondaryProjectItem {
  id: string;
  title: string;
  category: string;
  statusBadge: string;
  role: string;
  period: string;
  thesis: string;
  representativeImage: string;
  techStack: string[];
  proofChip: string;
  githubUrl?: string; // undefined for Aivora!
  liveUrl?: string;
  caseStudy: CaseStudyData;
}

export interface ProofMetricItem {
  metric: string;
  context: string;
  source: string;
}

export interface EngineeringFocusArea {
  number: string;
  title: string;
  description: string;
  linkedProject: string;
  linkedProjectId: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
}

export interface BeyondCodeData {
  title: string;
  role: string;
  projectName: string;
  description: string;
  metrics: string[];
  images: string[];
}

export interface PersonalData {
  name: string;
  eyebrow: string;
  title: string;
  email: string;
  phone: string;
  phoneRaw: string;
  location: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
  };
  heroStatement: string;
  heroSubstatement: string;
  heroTerminalLines: string[];
  heroProofMetrics: ProofMetricItem[];
  summary: string;
  education: EducationItem[];
  certifications: CertificationItem[];
  engineeringFocus: EngineeringFocusArea[];
  technicalSkills: {
    [tier: string]: string[];
  };
  beyondCode: BeyondCodeData;
}

export interface PortfolioData {
  personal: PersonalData;
  featuredProjects: FeaturedProjectItem[];
  secondaryProjects: SecondaryProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tran Thanh Quan",
    eyebrow: "SOFTWARE ENGINEERING · BACKEND & SYSTEMS",
    title: "Backend Software Engineer",
    email: "tranthanhquan09@gmail.com",
    phone: "+84 974 426 058",
    phoneRaw: "0974426058",
    location: "Ho Chi Minh City, Vietnam",
    resumeUrl: "/SE196734_Tran_Thanh_Quan_CV.pdf",
    socials: {
      github: "https://github.com/qwan30",
      linkedin: "https://www.linkedin.com/in/quan-tran-78842b326/",
      facebook: "https://www.facebook.com/tran.quan.182591/?locale=vi_VN"
    },
    heroStatement: "I BUILD RELIABLE SYSTEMS.",
    heroSubstatement: "Specializing in high-concurrency backend systems, transactional data integrity, fail-closed security models, and applied AI retrieval engines.",
    heroTerminalLines: [
      "> Initializing distributed core services...",
      "[OK] Vijaco Doc-Mgmt System active (30+ staff)",
      "[OK] Redis Lua stock gate & compensation ready",
      "[OK] Transactional Outbox event relay online",
      "> System operational. Ready for high-throughput traffic."
    ],
    heroProofMetrics: [
      {
        metric: "0 Oversells",
        context: "5,000 reservation attempts across 100 concurrent threads",
        source: "JMeter Concurrency Benchmark"
      },
      {
        metric: "30+ Staff",
        context: "Multi-role internal document management system in daily operation",
        source: "Vijaco Production Deployment"
      },
      {
        metric: "95.2% Score",
        context: "Citation precision across 300 verified clinical cases",
        source: "Graph RAG Evaluation Benchmark"
      }
    ],
    summary: "Software Engineering student at FPT University specializing in backend systems, high-concurrency transaction architectures, and applied AI. Experienced in delivering production systems with multi-tier RBAC/ABAC authorization, idempotent payment workflows, and Graph RAG knowledge pipelines.",
    education: [
      {
        degree: "Bachelor of Engineering in Software Engineering",
        institution: "FPT University",
        duration: "Aug. 2023 – Aug. 2027",
        gpa: "8.0 / 10"
      }
    ],
    certifications: [
      {
        name: "Architecting Solutions on AWS",
        issuer: "Amazon Web Services",
        year: "2026",
        image: "/certificates/AWS.jpeg"
      },
      {
        name: "Retrieval Augmented Generation (RAG)",
        issuer: "DeepLearning.AI",
        year: "2026",
        image: "/certificates/rag.jpeg"
      },
      {
        name: "Foundations of User Experience (UX) Design",
        issuer: "Google",
        year: "2026",
        image: "/certificates/UX (User Experience).jpeg"
      }
    ],
    engineeringFocus: [
      {
        number: "01",
        title: "Backend Systems",
        description: "Enterprise APIs, transactional consistency, granular RBAC/ABAC authorization models, and domain-driven service boundaries.",
        linkedProject: "Enterprise Hospital Management System (HMS)",
        linkedProjectId: "hospital-management-system"
      },
      {
        number: "02",
        title: "Concurrency & Reliability",
        description: "In-memory atomic gating, two-layer compensation reconciliation, distributed locking, and JMeter load testing.",
        linkedProject: "Flash Sale Concurrency Engine",
        linkedProjectId: "flash-sale-concurrency-engine"
      },
      {
        number: "03",
        title: "Delivery & Operations",
        description: "Multi-stage Docker builds, GitHub Actions CI/CD pipelines, Prometheus/Grafana metrics, and automated Playwright test gates.",
        linkedProject: "Enterprise Hospital Management System (HMS)",
        linkedProjectId: "hospital-management-system"
      },
      {
        number: "04",
        title: "Applied AI & Retrieval",
        description: "Permission-aware Graph RAG, pgvector hybrid search (HNSW + BM25), hallucination guardrails, and async OCR ingestion.",
        linkedProject: "AI Hospital Knowledge Assistant",
        linkedProjectId: "ai-hospital-knowledge-assistant"
      }
    ],
    technicalSkills: {
      "Languages": [
        "Java",
        "Python",
        "SQL",
        "TypeScript"
      ],
      "Backend": [
        "Spring Boot",
        "Spring Security",
        "FastAPI",
        "JPA/Hibernate",
        "REST APIs",
        "Redis/RQ"
      ],
      "Data & Messaging": [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "pgvector",
        "Kafka",
        "Flyway"
      ],
      "Testing & Observability": [
        "JUnit",
        "Testcontainers",
        "JMeter",
        "k6",
        "Prometheus",
        "Playwright",
        "Grafana",
        "Loki",
        "ELK"
      ],
      "DevOps & Cloud": [
        "Docker",
        "Docker Compose",
        "Dokploy Traefik",
        "Nginx",
        "Git",
        "GitHub Actions",
        "AWS"
      ],
      "Code Quality & Security": [
        "AI-assisted PR Review",
        "SonarCloud",
        "CodeQL",
        "Trivy",
        "Dependabot"
      ]
    },
    beyondCode: {
      title: "Beyond Code: Community",
      role: "Project Lead — Media & Logistics",
      projectName: "Tết Luôn Vui — Community Fundraising Project",
      description: "Led a 9-member team organizing charity workshops and handmade craft sales, directly raising and donating 3,550,000 VNĐ to the Vietnam Fatherland Front during Lunar New Year.",
      metrics: [
        "3,550,000 VNĐ raised for Vietnam Fatherland Front",
        "9-member team organized and led"
      ],
      images: [
        "/activities/poster.jpg",
        "/activities/hoa.jpg",
        "/activities/SE1905_Group3_UngHoMTTQ.jpg"
      ]
    }
  },

  featuredProjects: [
    {
      id: "vijaco-doc-mgmt",
      number: "01",
      title: "Vijaco — Internal Document Management System",
      category: "Enterprise Security & Storage",
      status: "Production Deployment",
      role: "Solo Software Engineer (Freelance)",
      period: "Jun. 2026 – Present",
      thesis: "Centralized document platform replacing unmanaged physical network shares with multi-tier RBAC/ABAC authorization and fail-closed audit trails.",
      problem: "Enterprise operations across 30+ staff relied on ~4TB shared network drives (Y:/, Z:), creating severe risks of file accidental deletion, untracked modifications, and unauthorized document access.",
      engineeredDecisions: [
        {
          technique: "Canonical Precedence Engine",
          mechanism: "Evaluates Resource Rank (File → Folder) over Subject Rank (User → Role → Dept) with strict DENY dominance",
          property: "Deterministic authorization with zero permission ambiguity"
        },
        {
          technique: "Fail-Closed Audit Trail",
          mechanism: "Synchronously records access telemetry before initiating file streaming",
          property: "Immutable operation history covering 100% of sensitive actions"
        },
        {
          technique: "Storage Root Abstraction",
          mechanism: "Encapsulates physical disk paths behind virtual root identifiers with strict path containment checks",
          property: "Zero physical path exposure to client applications"
        }
      ],
      proofChips: [
        "30+ daily active staff",
        "~4TB managed on-premise storage",
        "Fail-closed audit logging"
      ],
      techStack: ["NestJS", "TypeScript", "Flutter", "PostgreSQL", "Docker", "TypeORM"],
      // NOTE: githubUrl is omitted because Vijaco is a private freelance project
      githubUrl: undefined,
      liveUrl: "https://vijaco.vn",
      featuredImage: "/vijaco-screens/18_user_list.png",
      thumbnails: [
        {
          url: "/vijaco-screens/19_access_permissions.png",
          title: "Multi-level RBAC/ABAC Permission Matrix",
          badge: "Security Engine"
        },
        {
          url: "/vijaco-screens/11_audit_logs.png",
          title: "Fail-Closed Immutable Audit Logging",
          badge: "Audit Trail"
        },
        {
          url: "/vijaco-screens/14_upload_files.png",
          title: "Resumable Chunked File Upload with SHA-256 Checksums",
          badge: "Storage Pipeline"
        }
      ],
      caseStudy: {
        executiveSummary: "Designed and independently implemented a production document management platform for Vijaco, transitioning 30+ corporate staff from unmanaged physical network shares into a secure, multi-role digital ecosystem.",
        businessContext: "The enterprise operated with ~4TB of critical engineering and administrative documentation stored across physical network drives (Y:/, Z:). Unrestricted LAN access caused recurrent accidental file overwrites, missing revisions, and untracked document exposure.",
        problemStatement: "The business required an on-premise document management system that eliminates permission leaks, records 100% of document interactions, supports chunked resumable transfers for massive files, and runs on existing on-premise infrastructure without ongoing cloud storage costs.",
        systemConstraints: [
          "Zero recurring cloud storage expenditure — must run on on-premise Docker infrastructure.",
          "Strict physical isolation — physical disk paths must never be exposed over API payloads.",
          "Network resilience — multi-gigabyte engineering uploads must survive network interruptions.",
          "Compliance — all file reads, downloads, and lifecycle transitions must be auditable."
        ],
        architecture: "Modular Monolith architecture built on NestJS and TypeScript following Hexagonal (Ports & Adapters) principles, coupled with a cross-platform Flutter application for desktop and mobile clients, PostgreSQL 16 for metadata, and Docker Compose for deployment.",
        architectureHighlights: [
          "Hexagonal Ports & Adapters isolating Storage Adapter from domain business rules.",
          "Dual-token authentication with short-lived JWTs and rotating refresh tokens in secure HTTP-only cookies.",
          "Chunked staging directory with scheduled background cleanup for orphaned upload parts."
        ],
        deepDecisions: [
          {
            title: "Multi-tier RBAC/ABAC Precedence Resolution",
            technique: "Canonical Precedence Resolver",
            mechanism: "Resolves conflicting permission rules through a two-dimensional priority hierarchy: Resource Rank (File > Folder > Ancestor) intersected with Subject Rank (User Override > Role > Department). Explicit DENY immediately aborts evaluation.",
            impact: "Eliminates authorization race conditions and guarantees predictable security boundaries."
          },
          {
            title: "Fail-Closed Audit Trail Enforcement",
            technique: "Synchronous Audit Interceptor",
            mechanism: "File read and download streams are bound to an audit transaction. If the audit logger fails to persist the access entry, the file stream is immediately severed before byte transmission.",
            impact: "Guarantees zero unrecorded document access events across the entire system."
          },
          {
            title: "Chunked Resumable Upload Engine",
            technique: "SHA-256 Verified Chunk Staging",
            mechanism: "Large files are sliced client-side into 5MB chunks. Each chunk is uploaded with offset tracking and merged upon final chunk delivery after verifying whole-file SHA-256 integrity.",
            impact: "Enables seamless recovery from network drops without restarting large multi-gigabyte uploads."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Storage Disk Full / IO Stalling",
            mitigation: "Pre-allocation checks reject uploads exceeding remaining storage capacity with HTTP 507.",
            tradeOff: "Small processing overhead before file streaming begins."
          },
          {
            failureMode: "Orphaned Chunk Leakage on Aborted Uploads",
            mitigation: "Automated cron job scans staging directories and purges chunks older than 24 hours.",
            tradeOff: "Aborted uploads cannot be resumed after the 24-hour expiration window."
          }
        ],
        testingAndVerification: [
          {
            type: "Security & Authorization Testing",
            details: "120+ unit and integration test suites validating permission conflict resolution matrices.",
            result: "100% of tested permission edge cases resolved to the expected allow/deny outcome."
          },
          {
            type: "Resilience & Network Interrupt Testing",
            details: "Simulated 50% packet drop and socket disconnects during 500MB chunked file transfers.",
            result: "100% successful reassembly with matching SHA-256 hashes."
          }
        ],
        deploymentAndObservability: [
          "On-Premise Docker Compose stack with volume mounts to physical storage arrays.",
          "Healthcheck probes on PostgreSQL and NestJS container services.",
          "Structured JSON logging outputting to rotating local log files with retention policies."
        ],
        operationalOutcomes: [
          "30+ daily active staff operating the system across engineering and administration departments.",
          "Zero reported data leaks or unauthorized document accesses since production deployment.",
          "Sub-100ms API response latency for search, metadata browsing, and permission validation."
        ],
        gallery: [
          { url: "/vijaco-screens/18_user_list.png", title: "User & Role Management Dashboard", badge: "User Directory" },
          { url: "/vijaco-screens/19_access_permissions.png", title: "Granular Access Control Matrix (RBAC/ABAC)", badge: "Security Engine" },
          { url: "/vijaco-screens/11_audit_logs.png", title: "Fail-Closed Immutable Audit Trail Log", badge: "Audit Trail" },
          { url: "/vijaco-screens/14_upload_files.png", title: "Resumable Chunked Upload Interface", badge: "Chunked Transfer" },
          { url: "/vijaco-screens/05_file_version_history.png", title: "Document Version History & Reversion", badge: "Version Control" },
          { url: "/vijaco-screens/16_trash.png", title: "30-Day Safe Retention Recycle Bin", badge: "Recycle Bin" },
          { url: "/vijaco-screens/10_pdf_preview.png", title: "In-Browser PDF Viewer & Secure Stream", badge: "Secure Stream" },
          { url: "/vijaco-screens/08_mfa_verification.png", title: "TOTP 2-Factor Authentication Gate", badge: "MFA 2FA Gate" },
          { url: "/vijaco-screens/15_admin_dashboard.png", title: "System Administration & Metric Overview", badge: "Admin Dashboard" },
          { url: "/vijaco-screens/01_department_position_list.png", title: "Department & Position Hierarchy Manager", badge: "Organization" }
        ]
      }
    },
    {
      id: "flash-sale-concurrency-engine",
      number: "02",
      title: "Flash Sale Concurrency Engine",
      category: "High-Concurrency & Distributed Systems",
      status: "Benchmark Verified",
      role: "Backend Reliability Engineer",
      period: "Feb. 2026 – Present",
      thesis: "High-throughput inventory reservation engine utilizing Redis Lua atomic pre-gating, transactional outbox event relays, and two-layer compensation reconciliation.",
      problem: "Surges of thousands of concurrent shoppers during flash-sale events cause severe database row-lock contention, lock wait timeouts, and devastating overselling when using conventional database transactions.",
      engineeredDecisions: [
        {
          technique: "Redis Lua Atomic Pre-Gating",
          mechanism: "Executes stock verification and decrement inside a single atomic script in memory",
          property: "Shields database from 80%+ invalid demand spikes with microsecond latency"
        },
        {
          technique: "Two-Layer Compensation Reconciliation",
          mechanism: "Triggers immediate in-memory rollback on commit failure paired with 30s scheduled drift correction",
          property: "Eliminates cache/database state drift across distributed failures"
        },
        {
          technique: "Transactional Outbox with Apache Kafka",
          mechanism: "Persists order state and event records in the same ACID transaction before asynchronous relay",
          property: "Guarantees at-least-once message delivery without distributed 2PC locks"
        }
      ],
      proofChips: [
        "0 oversells across 5,000 requests",
        "443 req/s throughput (5.2x baseline)",
        "0 Redis/MySQL data drift"
      ],
      techStack: ["Java 21", "Spring Boot", "Redis", "Kafka", "MySQL", "JMeter"],
      githubUrl: "https://github.com/qwan30/Flash-Sale-Concurrency-Engine",
      featuredImage: "/flashsale-screens/architecture-overview.png",
      thumbnails: [
        {
          url: "/flashsale-screens/strategy-comparison.png",
          title: "4-Strategy Inventory Reservation Matrix",
          badge: "Strategy Matrix"
        },
        {
          url: "/flashsale-screens/jmeter_redis_lua_summary.png",
          title: "JMeter Concurrency Benchmark (5,000 Reqs / 100 Threads)",
          badge: "Load Benchmark"
        },
        {
          url: "/flashsale-screens/grafana_system_metrics.png",
          title: "Grafana Realtime Telemetry: JVM & Latency",
          badge: "Observability"
        }
      ],
      caseStudy: {
        executiveSummary: "Engineered a high-concurrency flash sale backend in Java 21 and Spring Boot, systematically benchmarking 4 inventory decrement strategies under intense traffic to achieve absolute zero overselling and zero data drift.",
        businessContext: "E-commerce platforms experience severe traffic spikes during flash sales, where tens of thousands of buyers attempt to purchase limited inventory within seconds. Standard database architectures collapse due to row-lock contention and lock wait timeouts.",
        problemStatement: "The system must process thousands of concurrent purchase attempts without overselling inventory, prevent cascading database deadlocks, maintain strict consistency between in-memory caches and relational databases, and recover gracefully from service crashes.",
        systemConstraints: [
          "Absolute zero overselling under all concurrent load scenarios.",
          "Sub-200ms p95 latency under high thread saturation.",
          "Dual-write consistency between Redis cache and MySQL database.",
          "Asynchronous order processing without data loss during broker downtime."
        ],
        architecture: "Domain-Driven Design (DDD) modular monolith split across 5 Maven modules, running on Java 21 Virtual Threads (Project Loom), Redis 7.x Lua scripts for atomic in-memory gating, MySQL 8.0 for transactional persistence, and Apache Kafka 3.9 for reliable asynchronous event processing.",
        architectureHighlights: [
          "5 DDD Maven modules: domain, application, infrastructure, bootstrap, and benchmark.",
          "Project Loom Virtual Threads handling high concurrent IO without thread-pool exhaustion.",
          "Resilience4j adaptive rate limiting rejecting excess traffic with HTTP 429."
        ],
        deepDecisions: [
          {
            title: "In-Memory Atomic Pre-Gating via Redis Lua",
            technique: "Single-Threaded Lua Script Execution",
            mechanism: "Executes stock check and deduction atomically in Redis memory. If available inventory is insufficient, the request is rejected immediately without generating any database load.",
            impact: "Filters out 80%+ of failing traffic before touching MySQL, eliminating lock contention."
          },
          {
            title: "Two-Layer Compensation & Scheduled Reconciliation",
            technique: "SAGA-Style Rollback + 30s Drift Healer",
            mechanism: "Layer 1: When a MySQL transaction fails after a Redis decrement, an immediate asynchronous INCR compensation restores Redis stock. Layer 2: A scheduled background worker checks actual settled orders against Redis stock every 30 seconds and repairs discrepancies.",
            impact: "Ensures total data convergence between memory and persistent storage even across node crashes."
          },
          {
            title: "Transactional Outbox Pattern for Asynchronous Ordering",
            technique: "Database-Coupled Event Publishing",
            mechanism: "Order records and corresponding order_created events are written within the same local database transaction. An outbox polling worker then streams events to Apache Kafka with retry policies.",
            impact: "Eliminates dual-write anomalies and guarantees at-least-once message delivery without distributed two-phase commit protocols."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Redis Instance Network Partition",
            mitigation: "Circuit breaker switches to conditional database updates with strict rate limiting.",
            tradeOff: "Throughput temporarily decreases to preserve absolute transactional correctness."
          },
          {
            failureMode: "Kafka Broker Unavailability",
            mitigation: "Events remain safely persisted in the outbox table until the broker reconnects.",
            tradeOff: "Downstream asynchronous notifications experience temporary delivery delay."
          }
        ],
        testingAndVerification: [
          {
            type: "Apache JMeter Concurrency Benchmark",
            details: "5,000 total requests executed by 100 concurrent threads against 100 available items.",
            result: "Exactly 100 items sold, 0 oversells, 443.03 req/s throughput (vs 84.7 req/s on naive DB)."
          },
          {
            type: "Chaos Engineering & Network Injection",
            details: "Simulated MySQL socket timeouts and killed worker processes during active flash-sale runs.",
            result: "Compensation workers recovered 100% of stranded stock reservations with zero data drift."
          }
        ],
        deploymentAndObservability: [
          "Docker Compose orchestration running Spring Boot, Redis, Kafka, and MySQL 8.0.",
          "Micrometer integration exposing metrics to Prometheus and Grafana dashboards.",
          "ELK centralized logging tracing transaction correlation IDs across services."
        ],
        operationalOutcomes: [
          "Zero oversells achieved across all benchmark and chaos engineering test runs.",
          "Throughput increased by 5.23x compared to conditional database locking baselines.",
          "Average transaction latency dropped from 1,084ms to 165.95ms under heavy concurrent load."
        ],
        gallery: [
          { url: "/flashsale-screens/architecture-overview.png", title: "Complete System Architecture & Gating Flow", badge: "Architecture Overview" },
          { url: "/flashsale-screens/strategy-comparison.png", title: "Strategy Matrix & Bottleneck Shift Analysis", badge: "Strategy Matrix" },
          { url: "/flashsale-screens/strategy-comparison-flow.png", title: "Distributed Inventory Decrement Sequence", badge: "Strategy Flow" },
          { url: "/flashsale-screens/strategy-routing-and-recovery.png", title: "Automated Compensation & Recovery Routing", badge: "Routing & Recovery" },
          { url: "/flashsale-screens/ddd-modules.png", title: "DDD 5-Maven-Module Structural Layout", badge: "DDD Architecture" },
          { url: "/flashsale-screens/ddd-module-layout.png", title: "Ports & Adapters Boundary Dependencies", badge: "Module Boundaries" },
          { url: "/flashsale-screens/jmeter_redis_lua_summary.png", title: "JMeter Benchmark: 443 req/s with 0.00% Error", badge: "JMeter Summary" },
          { url: "/flashsale-screens/jmeter_redis_lua_throughput.png", title: "Throughput Distribution under 100 Threads", badge: "Throughput Curve" },
          { url: "/flashsale-screens/jmeter_redis_lua_latency.png", title: "Flat Latency Distribution Profile", badge: "Latency Curve" },
          { url: "/flashsale-screens/grafana_system_metrics.png", title: "Grafana JVM & Order Metric Monitoring", badge: "Grafana Metrics" },
          { url: "/flashsale-screens/elk_conditional_db_bottleneck.png", title: "Centralized Kibana Logging capturing Lock Timeouts", badge: "ELK Centralized Log" }
        ]
      }
    },
    {
      id: "hospital-management-system",
      number: "03",
      title: "Enterprise Hospital Management System (HMS)",
      category: "Healthcare ERP & DDD Architecture",
      status: "Release Candidate 1.0",
      role: "Fullstack Backend Lead",
      period: "Jan. 2026 – Jun. 2026",
      thesis: "Modular monolith healthcare ERP coordinating 7 clinical lifecycles with strict queue state machines, AES-GCM encryption for PHI, and lot-level FIFO pharmacy tracking.",
      problem: "Fragmented hospital workflows led to recurring doctor double-booking, clinical triage delays, drug expiration losses in pharmacy storage, and non-compliance risks regarding patient Protected Health Information (PHI).",
      engineeredDecisions: [
        {
          technique: "Transactional Slot Locking",
          mechanism: "Combines optimistic concurrency control (OCC) with hashed slot identity constraints",
          property: "Completely eliminates doctor double-booking across concurrent booking attempts"
        },
        {
          technique: "Strict Queue State Machine",
          mechanism: "Enforces deterministic progression across 5 clinical stages with domain-level transition guards",
          property: "Prevents out-of-order triage and patient workflow corruption"
        },
        {
          technique: "AES-GCM at Rest + SHA-256 Indexing",
          mechanism: "Encrypts national IDs with AES-256-GCM while storing blinded SHA-256 hashes for lookups",
          property: "HIPAA-aligned PHI privacy without compromising database search indexing"
        }
      ],
      proofChips: [
        "17 DDD Bounded Contexts",
        "930+ CI Playwright tests",
        "100% PHI AES-GCM encrypted"
      ],
      techStack: ["Java 17", "Spring Boot 3.3", "PostgreSQL 15", "Next.js 16", "React 19", "Playwright"],
      githubUrl: "https://github.com/qwan30/hospital-management-system",
      featuredImage: "/hms-screens/system-architecture-overview.png",
      thumbnails: [
        {
          url: "/hms-screens/clinical-workflow.png",
          title: "7-Stage End-to-End Clinical Workflow Lifecycle",
          badge: "Clinical Workflow"
        },
        {
          url: "/hms-screens/ddd-modular-monolith.png",
          title: "17 Bounded Contexts DDD Modular Monolith Layout",
          badge: "DDD Architecture"
        },
        {
          url: "/hms-screens/pharmacy-inventory.png",
          title: "Pharmacy Lot Tracking & FIFO Expiration Automation",
          badge: "Pharmacy FIFO"
        }
      ],
      caseStudy: {
        executiveSummary: "Led the architecture and fullstack engineering of an enterprise Healthcare ERP system supporting 7 complete clinical lifecycles, structured as a Domain-Driven Design (DDD) modular monolith with comprehensive automated testing.",
        businessContext: "Hospital outpatient operations faced persistent queue delays, doctor scheduling collisions, unmonitored drug expiration risks in pharmacy stockrooms, and legal exposure from unencrypted patient identification data.",
        problemStatement: "The institution required a unified clinical platform that orchestrates appointments, nurse triage, medical records (EHR), pharmacy dispensation, and billing while adhering to rigorous HIPAA-aligned data privacy standards.",
        systemConstraints: [
          "Zero scheduling collisions during simultaneous appointment bookings.",
          "HIPAA-aligned data protection for patient identifiers (National IDs, insurance cards).",
          "Automated FIFO drug dispensation based on manufacturing lot expiration dates.",
          "Strict separation of concerns without the operational complexity of microservices."
        ],
        architecture: "Domain-Driven Design Modular Monolith with 5 Maven modules (domain, application, infrastructure, controller, bootstrap) encapsulating 17 Bounded Contexts, paired with a Next.js 16 (React 19) frontend, PostgreSQL 15, and comprehensive CI test gates.",
        architectureHighlights: [
          "Pure domain layer with zero framework dependencies (Dependency Inversion).",
          "Granular method security via Spring Security @PreAuthorize across 34 distinct permissions.",
          "Automated Flyway database migrations ensuring zero-downtime schema evolution."
        ],
        deepDecisions: [
          {
            title: "Transactional Slot Locking & OCC",
            technique: "Optimistic Concurrency Control with Slot Hashing",
            mechanism: "Each appointment time window is assigned a deterministic slot hash. During booking, the system verifies slot availability using OCC version tokens and transactional isolation.",
            impact: "Completely prevents double-booking without blocking database rows during user browsing."
          },
          {
            title: "Protected Health Information (PHI) Security Architecture",
            technique: "AES-256-GCM Encryption with Blinded SHA-256 Hashes",
            mechanism: "Sensitive fields (National ID, medical history) are encrypted with symmetric AES-GCM keys before database write. A one-way HMAC/SHA-256 hash is stored alongside to permit instant indexed lookups.",
            impact: "Ensures plaintext patient identities are never exposed in database dumps or storage layers."
          },
          {
            title: "Pharmacy Lot-Level FIFO Dispatch Engine",
            technique: "Automated FEFO / FIFO Allocation",
            mechanism: "Prescription fulfillment orders query active drug inventory sorted by nearest expiration date (First-Expired, First-Out), automatically generating pick-lists for pharmacists.",
            impact: "Eliminates expired medication dispensation and reduces pharmaceutical waste."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Concurrent Prescription Dispensation Conflict",
            mitigation: "Pessimistic row-locking on drug inventory rows during the checkout phase.",
            tradeOff: "Slight serialization of checkout operations on the exact same medication SKU."
          },
          {
            failureMode: "Notification Service Delivery Failure",
            mitigation: "Asynchronous retry queue with exponential backoff for patient SMS/email alerts.",
            tradeOff: "Alert delivery may occur with minor delay during upstream gateway outages."
          }
        ],
        testingAndVerification: [
          {
            type: "Automated E2E Playwright CI Suite",
            details: "930 automated end-to-end user journeys executed across Chromium, Firefox, and WebKit.",
            result: "100% passing rate in GitHub Actions CI release gate."
          },
          {
            type: "Backend Integration & Security Tests",
            details: "148 Spring Boot slice tests validating RBAC permissions and encryption filters.",
            result: "Zero unauthorized endpoint accesses detected across 34 role permutations."
          }
        ],
        deploymentAndObservability: [
          "Dockerized deployment with multi-stage image optimization.",
          "Prometheus metrics scraping JVM memory, HTTP response latencies, and database pool utilization.",
          "Grafana dashboards monitoring queue wait times and appointment volume."
        ],
        operationalOutcomes: [
          "118 REST API endpoints operating across 32 controllers with sub-150ms average latency.",
          "Zero reported double-booking incidents across all integration and stress testing scenarios.",
          "Complete HIPAA-aligned encryption covering 100% of stored patient identifiers."
        ],
        gallery: [
          { url: "/hms-screens/system-architecture-overview.png", title: "Complete System Architecture & Gateways", badge: "Architecture Overview" },
          { url: "/hms-screens/clinical-workflow.png", title: "7-Stage End-to-End Clinical Lifecycle", badge: "Clinical Lifecycle" },
          { url: "/hms-screens/ddd-modular-monolith.png", title: "17 Bounded Contexts DDD Modular Monolith", badge: "DDD Monolith" },
          { url: "/hms-screens/home-page.png", title: "Public Hospital Web Portal & Online Booking", badge: "Public Web" },
          { url: "/hms-screens/portal-overview.png", title: "Patient Self-Service Health Portal", badge: "Patient Portal" },
          { url: "/hms-screens/staff-login.png", title: "Role-Based Central Staff Authentication", badge: "Staff Auth" },
          { url: "/hms-screens/nurse-overview.png", title: "Nurse Triage & Patient Queue Coordinator", badge: "Nurse Triage" },
          { url: "/hms-screens/nurse-appointment.png", title: "Vitals Check-in & Examination Intake", badge: "Vitals Check-in" },
          { url: "/hms-screens/pharmacy-inventory.png", title: "Pharmacy Inventory with FIFO Lot Tracking", badge: "Pharmacy FIFO" },
          { url: "/hms-screens/10-admin-dashboard.png", title: "Executive Healthcare Administration Dashboard", badge: "Admin Dashboard" },
          { url: "/hms-screens/admin-queue.png", title: "Realtime Queue Telemetry & Wait-Time Analytics", badge: "Queue Analytics" }
        ]
      }
    },
    {
      id: "ai-hospital-knowledge-assistant",
      number: "04",
      title: "AI Hospital Knowledge Assistant",
      category: "Applied AI & Knowledge Retrieval",
      status: "In-House Benchmark Verified",
      role: "AI & Data Engineer",
      period: "Feb. 2026 – Present",
      thesis: "Permission-aware Graph RAG assistant synthesizing longitudinal patient medical records with citation verification guardrails and async OCR processing.",
      problem: "Clinicians spend 10–15 minutes per consultation parsing hundreds of pages of fragmented medical records, while standard LLMs pose severe risks of medical hallucinations and HIPAA context leakage.",
      engineeredDecisions: [
        {
          technique: "SQL-Backed Graph RAG",
          mechanism: "Traverses clinical entity relations (treats, causes, contraindicates) via 2-hop BFS queries",
          property: "Provides longitudinal medical context without third-party graph database overhead"
        },
        {
          technique: "Anti-Hallucination Citation Gate",
          mechanism: "Validates every response citation tag against retrieved chunks before streaming output",
          property: "Achieves 95.2% citation precision across 300 clinical evaluation cases"
        },
        {
          technique: "SQL Predicate Pre-Filtering",
          mechanism: "Injects clinical role and patient scope predicates directly into vector search queries",
          property: "Guarantees zero context leakage across patient authorization boundaries"
        }
      ],
      proofChips: [
        "95.2% citation precision (300 cases)",
        "0% cross-patient context leakage",
        "On-Premise 16GB RAM deployable"
      ],
      techStack: ["FastAPI", "Python", "pgvector", "Redis / RQ", "RAG", "React"],
      githubUrl: "https://github.com/qwan30/chat-hospital-system",
      featuredImage: "/hospital-screens/graph-rag-detail.png",
      thumbnails: [
        {
          url: "/hospital-screens/system-architecture.png",
          title: "Multi-layer BFF, pgvector, and CDSS Agent Architecture",
          badge: "System Architecture"
        },
        {
          url: "/hospital-screens/chatbot-architecture.png",
          title: "Clinical Chatbot with Citation Verification Gate",
          badge: "RAG Pipeline"
        },
        {
          url: "/hospital-screens/chat.png",
          title: "Clinical AI Chat with SSE Streaming & Citation Badges",
          badge: "Clinical AI Chat"
        }
      ],
      caseStudy: {
        executiveSummary: "Built an on-premise clinical knowledge retrieval engine utilizing SQL-backed Graph RAG and hybrid vector search, enabling physicians to synthesize longitudinal medical histories with transparent, auditable citations.",
        businessContext: "Hospital medical records accumulate across unstructured formats (scanned test reports, discharge summaries, prescription slips). Manual review consumes critical clinician time and risks missing subtle drug allergies or drug-drug contraindications.",
        problemStatement: "The assistant must extract and index unstructured medical documents, answer complex clinical queries with 100% cited source evidence, enforce strict patient privacy boundaries, and operate on local workstation hardware.",
        systemConstraints: [
          "Zero hallucinated medical facts — missing data must trigger safe refusal.",
          "Strict data sovereignty — patient data must never leave on-premise hardware.",
          "Sub-30 second end-to-end record synthesis (vs 10–15 min manual lookup).",
          "Workstation deployability — must run efficiently within 16GB RAM constraints."
        ],
        architecture: "Hybrid Clean/Pipeline architecture featuring an asynchronous FastAPI backend, PostgreSQL 16 with pgvector (HNSW) and BM25 full-text indexing, Redis/RQ background workers, local LLM orchestration (Ollama), and a modern React interface.",
        architectureHighlights: [
          "Hybrid Retrieval combining dense pgvector embeddings with sparse BM25 keyword matching via Reciprocal Rank Fusion (RRF).",
          "Asynchronous OCR pipeline using PyMuPDF and PaddleOCR with Dead-Letter Queue handling.",
          "Server-Sent Events (SSE) streaming with progressive citation badge rendering."
        ],
        deepDecisions: [
          {
            title: "SQL-Backed Graph RAG Architecture",
            technique: "Relational Entity-Graph Traversal",
            mechanism: "Clinical entities (medications, conditions, lab tests) and relationships are stored in indexed PostgreSQL tables. Queries trigger a 2-hop BFS traversal scoped to the specific patient ID.",
            impact: "Delivers connected longitudinal patient history without managing a dedicated external graph database."
          },
          {
            title: "Anti-Hallucination Citation Verification Gate",
            technique: "Post-Generation Evidence Verification",
            mechanism: "A post-processing sentinel parses every bracketed citation tag `[Doc#Page]` in the generated response and matches it against the retrieved text chunks. Unverified claims trigger the Safe-Refusal pipeline.",
            impact: "Achieved 95.2% citation precision across a rigorous 300-case clinical evaluation suite."
          },
          {
            title: "SQL Predicate Pre-Filtering for Data Isolation",
            technique: "Authorization-Enforced Vector Search",
            mechanism: "Vector similarity searches in pgvector embed SQL WHERE clauses enforcing the authenticated clinician's role and patient assignment before similarity ranking.",
            impact: "Ensures mathematical impossibility of cross-patient information leakage during retrieval."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Unclear / Ambiguous Medical Query",
            mitigation: "Safe-Refusal pipeline returns explicit notification that evidence is insufficient.",
            tradeOff: "Refuses to answer when evidence is borderline rather than guessing."
          },
          {
            failureMode: "Corrupt or Unreadable Scanned PDF",
            mitigation: "Dead-Letter Queue flags document for administrative review with failure reason.",
            tradeOff: "Requires manual document re-upload when source scan resolution is below OCR threshold."
          }
        ],
        testingAndVerification: [
          {
            type: "Clinical Retrieval Benchmark (300 Cases)",
            details: "Evaluated across 300 curated clinical questions testing entity recall and citation validity.",
            result: "95.2% verified citation accuracy with 0% unauthorized context bleed."
          },
          {
            type: "Local Hardware Load & Memory Profiling",
            details: "Monitored memory consumption during continuous document ingestion and streaming chat.",
            result: "Sustained peak memory utilization under 12GB on a standard 16GB RAM workstation."
          }
        ],
        deploymentAndObservability: [
          "Docker Compose configuration with localized Ollama LLM runtime.",
          "Prometheus metrics tracking query response latencies and token generation speed.",
          "Structured audit log recording all retrieval queries for HIPAA compliance."
        ],
        operationalOutcomes: [
          "Reduced patient record synthesis time from 10–15 minutes down to < 30 seconds.",
          "100% on-premise execution with zero external cloud API dependencies.",
          "Zero detected patient context leaks across all automated security test suites."
        ],
        gallery: [
          { url: "/hospital-screens/graph-rag-detail.png", title: "Clinical Entity Graph & Evidence Citations", badge: "Graph RAG Detail" },
          { url: "/hospital-screens/graph-rag.png", title: "Patient Knowledge Graph Visualization", badge: "Graph RAG View" },
          { url: "/hospital-screens/system-architecture.png", title: "System Architecture: BFF, Vector DB, and Workers", badge: "System Architecture" },
          { url: "/hospital-screens/chatbot-architecture.png", title: "Clinical Chatbot Guardrails & Citation Flow", badge: "Chatbot Architecture" },
          { url: "/hospital-screens/graphrag-architecture.png", title: "SQL-Backed GraphRAG Entity Relations", badge: "GraphRAG Architecture" },
          { url: "/hospital-screens/ocr-architecture.png", title: "Asynchronous OCR Pipeline & Dead-Letter Queue", badge: "OCR Architecture" },
          { url: "/hospital-screens/cicd-pipeline.png", title: "CI/CD Pipeline with 300-Case Evaluation Gate", badge: "CI/CD Pipeline" },
          { url: "/hospital-screens/deployment-architecture.png", title: "On-Premise Docker Deployment Topology", badge: "Deployment Topology" },
          { url: "/hospital-screens/chat.png", title: "Clinical AI Chat with SSE Streaming & Citation Badges", badge: "Clinical AI Chat" },
          { url: "/hospital-screens/patient.png", title: "Patient Profile with Predicate Authorization Filtering", badge: "Patient Directory" },
          { url: "/hospital-screens/time-line.png", title: "Longitudinal Medical History Timeline", badge: "Medical Timeline" },
          { url: "/hospital-screens/dashboard.png", title: "Operational Impact & Clinical Telemetry Dashboard", badge: "Impact Dashboard" },
          { url: "/hospital-screens/audit-screen-new.png", title: "Immutable PHI Query Audit Trail", badge: "Fail-Closed Audit" },
          { url: "/hospital-screens/notification.png", title: "Automated CDSS Allergy & Contraindication Alerts", badge: "CDSS Alerts" }
        ]
      }
    }
  ],

  secondaryProjects: [
    {
      id: "aivora-marketplace",
      title: "Aivora — AI Freelance Marketplace",
      category: "Fullstack Platform & Fintech",
      statusBadge: "Backend Lead (.NET 10)",
      role: ".NET 10 Backend Lead (4-Member Team)",
      period: "May. 2026 – Present",
      thesis: "Freelance marketplace backend featuring 2-phase milestone escrow, pessimistic concurrency control, deadlock prevention algorithms, and VNPay IPN idempotency.",
      representativeImage: "/AIVORA-project (2).png",
      techStack: [".NET 10", "C# 13", "PostgreSQL", "EF Core", "SignalR", "Docker"],
      proofChip: "100% financial transaction integrity (0 balance drift)",
      // NOTE: Aivora is a private repository as requested by user
      githubUrl: undefined,
      caseStudy: {
        executiveSummary: "Led a 4-engineer team developing the backend architecture for an AI-focused freelance marketplace, creating a resilient Treasury subsystem with 2-phase milestone escrow and deadlock-free wallet locking.",
        businessContext: "Freelance platforms face financial disputes, double-spending vulnerabilities in wallet transfers, and deadlock timeouts when multiple transactions update user balances concurrently.",
        problemStatement: "Build a reliable financial backend that manages project escrow, guarantees transactional balance integrity, standardizes requirement decomposition via GenAI, and delivers realtime WebSocket messaging.",
        systemConstraints: [
          "Strict ACID compliance for wallet top-ups, milestone escrows, and disbursement.",
          "Zero double-spend risk during payment gateway webhook callbacks.",
          "Realtime bidirectional communication for messaging and project state transitions."
        ],
        architecture: "Clean Architecture in .NET 10 and C# 13 with Domain Services, EF Core with PostgreSQL 16, SignalR Hubs for realtime events, and Strategy Pattern for AI providers.",
        architectureHighlights: [
          "Treasury Deep Module encapsulating financial state transitions.",
          "Deterministic wallet ID sorting algorithm eliminating deadlock cycles.",
          "VNPay IPN idempotency filter based on unique transaction references."
        ],
        deepDecisions: [
          {
            title: "2-Phase Milestone Escrow Architecture",
            technique: "State-Gated Wallet Escrow",
            mechanism: "Locks 30% initial deposit in platform escrow upon milestone start, releasing the remaining 70% upon client acceptance while deducting 10% platform commission.",
            impact: "Eliminates payment default risks for both clients and experts."
          },
          {
            title: "Deadlock Prevention via Ascending Key Sorting",
            technique: "Deterministic Lock Acquisition Ordering",
            mechanism: "Transfers involving multiple wallets sort all target wallet IDs in ascending order before executing SELECT ... FOR UPDATE queries in PostgreSQL.",
            impact: "Mathematically eliminates circular wait conditions and deadlock exceptions."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Duplicate Payment Gateway Webhook Deliveries",
            mitigation: "Database-level unique constraint on gateway transaction references.",
            tradeOff: "Duplicate webhook attempts are rejected with idempotent HTTP 200 responses."
          }
        ],
        testingAndVerification: [
          {
            type: "Financial Concurrency Tests",
            details: "xUnit multi-threaded simulation of concurrent top-ups and simultaneous escrows.",
            result: "Zero balance discrepancies detected across all execution runs."
          }
        ],
        deploymentAndObservability: [
          "Containerized .NET 10 services deployed with Docker Compose and Nginx reverse proxy.",
          "Centralized Serilog logging with trace correlation IDs."
        ],
        operationalOutcomes: [
          "Standardized 24+ RESTful API controllers with uniform response envelopes.",
          "100% verified financial integrity across all escrow and disbursement flows."
        ],
        gallery: [
          { url: "/AIVORA-project (2).png", title: "Aivora Freelance Platform Core Overview", badge: "Marketplace Core" }
        ]
      }
    },
    {
      id: "ledger-credit-system",
      title: "Ledger Credit & Double-Entry System",
      category: "Financial Infrastructure",
      statusBadge: "Financial Core",
      role: "Backend Infrastructure Engineer",
      period: "Dec. 2025 – Present",
      thesis: "Append-only double-entry ledger with BigInt-exact money arithmetic, Stripe-style idempotency-key replay, and adapter-based external rails — every financial movement traceable via immutable journal entries.",
      representativeImage: "/ledger-screens/double-entry-architecture.svg",
      techStack: ["TypeScript", "NestJS 11", "Fastify", "PostgreSQL", "Prisma 6", "Vitest"],
      proofChip: "BigInt-exact money — zero rounding drift",
      githubUrl: "https://github.com/qwan30/ledger-credit-system",
      caseStudy: {
        executiveSummary: "Built a finance-domain backend that models correctness under retry: exact BigInt money, append-only journal/posting records, idempotent transfer submission, adapter-isolated external rails with automatic compensation, and a versioned credit-scoring policy.",
        businessContext: "Finance systems fail silently when money is stored as float, when a duplicated request double-charges, or when a journal entry can be written without equal debits and credits. This reference backend demonstrates each concern solved at the domain boundary.",
        problemStatement: "Guarantee that every journal entry balances to zero, that money arithmetic never loses precision, that a retried transfer never double-posts, and that every state-changing action is reconstructable from an immutable audit trail.",
        systemConstraints: [
          "Every journal entry must balance: SUM(debits) === SUM(credits), enforced before persistence.",
          "Money is exact: minor units as bigint, never float/double.",
          "Transfers require an Idempotency-Key header with SHA-256 request hashing.",
          "External settlement adapters are swappable without touching the ledger core."
        ],
        architecture: "NestJS + Fastify modular monolith with a framework-free domain core (Money, state machine, scoring policy), Prisma 6 over PostgreSQL for append-only JournalEntry/Posting records plus read-model projections, and an adapter registry abstracting external rail providers.",
        architectureHighlights: [
          "Append-only ledger: JournalEntry/Posting are immutable history while BalanceProjection/AccountStatementProjection serve reads.",
          "Money value object enforcing same-currency constraints and safe-integer serialization.",
          "ExternalRailAdapter + ExternalRailRegistry following Ports & Adapters, isolating simulator/mock-bank providers."
        ],
        deepDecisions: [
          {
            title: "BigInt-Exact Money Value Object",
            technique: "Money Minor Units as bigint",
            mechanism: "All amounts are carried as minor units in bigint. Addition/subtraction are exact integers; currency mismatches throw, and JSON serialization rejects values beyond safe integer range.",
            impact: "Eliminates floating-point rounding that silently corrupts balances over time."
          },
          {
            title: "Double-Entry Balance Enforcement with Compensation Journal",
            technique: "Zero-Sum Invariant + Auto-Compensation",
            mechanism: "postJournalEntry rejects any journal entry whose debit total does not equal credit total. When an external rail fails an interbank transfer, a compensating journal entry (clearing debit → source credit) is written automatically.",
            impact: "Every financial state transition remains balanced to zero and reconstructable."
          },
          {
            title: "Stripe-Style Idempotency with Response Replay",
            technique: "Persisted IdempotencyRecord + requestHash",
            mechanism: "A unique (operationType, key) record stores a SHA-256 request hash; a replay with a mismatching hash is a 409 conflict, a completed operation returns the original response body, and in-progress keys are correctly rejected.",
            impact: "Retries and duplicate submissions never double-post or repeat side effects under any network ambiguity."
          },
          {
            title: "Domain State Machine & Adapter Registry",
            technique: "Explicit Transfer Transitions + Swappable Rail Adapters",
            mechanism: "A transfer-state-machine enumerates legal status transitions; external rail providers register as typed adapters normalized through a single event application path.",
            impact: "Deterministic transfer lifecycle and zero coupling between the ledger core and real settlement."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Idempotency key reused with a different payload",
            mitigation: "requestHash mismatch returns 409 idempotency_conflict instead of silently recharging.",
            tradeOff: "Clients must keep key/payload pairs content-stable or fetch a fresh key for each payload."
          },
          {
            failureMode: "External rail rejects an interbank transfer after funds left the source account",
            mitigation: "Automatic compensating journal entry restores the source account via the clearing ledger account.",
            tradeOff: "Compensation is model-level; real provider reconciliation is simulator/mock-bank only in the current source."
          }
        ],
        testingAndVerification: [
          {
            type: "Ledger & Money Invariant Suite",
            details: "Unit coverage across money, ledger balance enforcement, currency mismatch, and overflow-safe serialization.",
            result: "Balanced-journal and same-currency invariants held across all covered cases."
          },
          {
            type: "Test File Inventory (source-verified)",
            details: "27 test/spec files alongside 24 route methods, 21 Prisma models, 15 enums, and 5 migrations.",
            result: "Fastify modular monolith in a source-truth state — every claim refreshed from source before reuse."
          }
        ],
        deploymentAndObservability: [
          "Fastify helmet, rate limiting, and CORS via bootstrap setup; correlation IDs attached per request.",
          "Structured logging with authorization/cookie redaction paths.",
          "OpenAPI/Swagger contract at /docs with /api/v1 global prefix."
        ],
        operationalOutcomes: [
          "Append-only journal + audit trail enabling reconstruction of every transfer (internal, interbank, and automated compensation)."
        ],
        gallery: [
          { url: "/ledger-screens/double-entry-architecture.svg", title: "Double-Entry Ledger Architecture & Money Movement", badge: "Ledger Model" }
        ]
      }
    },
    {
      id: "mini-digital-banking-platform",
      title: "Mini Digital Banking Platform",
      category: "Fintech & Banking",
      statusBadge: "Fintech MVP",
      role: "Backend Software Engineer",
      period: "Nov. 2025 – Dec. 2025",
      thesis: "Modular digital banking service enforcing double-entry ledger integrity, deterministic deadlock-free transfer locking, client idempotency-key replay, and DB-backed refresh-token rotation.",
      representativeImage: "/hero-bg.png",
      techStack: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL 15", "Flyway", "Next.js 16", "Playwright"],
      proofChip: "ACID transfers — 0 balance drift under 100-iteration concurrency",
      githubUrl: "https://github.com/qwan30/mini-digital-banking-platform",
      caseStudy: {
        executiveSummary: "Built a hexagonal modular monolith (domain / application / infrastructure / controller / start) with a framework-free domain, immutable double-entry ledger, and retry-safe money movement.",
        businessContext: "A source-backed fintech portfolio project demonstrating what demo banking systems often underbuild: decimal money handling, immutable transaction evidence, ownership boundaries, session lifecycle, and a handover-ready verification gate.",
        problemStatement: "Build a banking API that survives concurrent transfers without deadlock or balance drift and replays duplicate requests without double-charging.",
        systemConstraints: [
          "No overdraft beyond authorized balance limits.",
          "Balances are decimal-exact (DECIMAL(19,4)) — no float/double for money.",
          "BCrypt password hashing, JWT access tokens, DB-backed rotating refresh tokens."
        ],
        architecture: "Spring Boot modular monolith with strict dependency direction (start → controller → application → domain); domain module has zero Spring imports, enforcing ports-and-adapters boundaries.",
        architectureHighlights: [
          "Pessimistic write locks with deterministic UUID lock ordering to prevent transfer deadlocks.",
          "PostgreSQL + Flyway migrations (V1–V7) with CHECK/UNIQUE business-rule constraints.",
          "Correlation-ID and structured request logging for end-to-end traceability."
        ],
        deepDecisions: [
          {
            title: "Deadlock-Free Transfer Engine",
            technique: "Deterministic Lock Ordering + Pessimistic Write Locks",
            mechanism: "Both accounts are locked via findByIdForUpdate in UUID order (smaller first), so A→B and B→A reverse transfers acquire locks in the same sequence.",
            impact: "100-iteration reverse-transfer concurrency test reconciles balances exactly with zero deadlocks and zero drift."
          },
          {
            title: "Idempotency-Key Replay",
            technique: "Persisted Idempotency Log with Response Replay",
            mechanism: "Transfers require a client X-Idempotency-Key; a duplicate key returns the previously serialized response instead of executing a second debit/credit.",
            impact: "Retries and double-submits never double-charge — each side is debited/credited exactly once."
          },
          {
            title: "Immutable Double-Entry Ledger",
            technique: "Append-Only Ledger with Before/After Snapshots",
            mechanism: "A transfer writes linked TRANSFER_DEBIT and TRANSFER_CREDIT rows sharing a correlation group, each capturing balanceBefore / balanceAfter.",
            impact: "An audit-friendly, append-only history with full reconciliation between any two accounts."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Duplicate transfer retry (network timeout after commit)",
            mitigation: "Idempotency log detects the reused key and replays the saved response.",
            tradeOff: "Adds a log write per transfer in exchange for retry safety."
          },
          {
            failureMode: "Concurrent reverse transfers on the same two accounts",
            mitigation: "Deterministic lock ordering prevents the classic deadlock cycle.",
            tradeOff: "Single global lock order reduces lock granularity but guarantees progress."
          }
        ],
        testingAndVerification: [
          {
            type: "Transfer Concurrency IT",
            details: "100 reverse A→B / B→A transfers across 4 threads against real Postgres Testcontainer.",
            result: "Total balance conserved at 20000.0000; no deadlock; no negative balances."
          },
          {
            type: "Backend Verification Gate",
            details: "mvn verify across all 5 modules (unit + @WebMvcTest slices + Testcontainers integration tests).",
            result: "224 tests, 0 failures, 0 errors; 7 Flyway migrations validated."
          }
        ],
        deploymentAndObservability: [
          "Multi-stage Docker build running as a non-root user with actuator healthcheck.",
          "CI gates backend verify, frontend lint/type/unit/build, mocked Playwright, and Docker Compose smoke."
        ],
        operationalOutcomes: [
          "Complete banking lifecycle (auth, accounts, transfer, history, audit, admin) with a documented 224-test verification gate."
        ],
        gallery: [
          { url: "/hero-bg.png", title: "Banking API Architecture & Transfer Lifecycles", badge: "Banking Core" }
        ]
      }
    },
    {
      id: "inventory-flashsale-system",
      title: "Inventory & Flash Sale System",
      category: "Distributed Systems & Inventory",
      statusBadge: "Correctness-First",
      role: "Backend Engineer (Solo)",
      period: "Mar. 2026 – Present",
      thesis: "Correctness-first omnichannel inventory & flash-sale platform that guarantees zero overselling under contention through layered locking, durable idempotency, and an evidence-gated load-testing program.",
      representativeImage: "/08-admin-benchmark.png",
      techStack: ["Java 21", "Spring Boot 3", "MySQL 8.4", "Redis 7.4", "Kafka", "Testcontainers", "Flyway", "React", "Playwright"],
      proofChip: "0 oversells under 50-VU / 5.7K-request contention test",
      githubUrl: "https://github.com/qwan30/inventory-flashsale-system",
      caseStudy: {
        executiveSummary: "A modular-monolith Java 21 / Spring Boot 3 backend that makes inventory correctness the product: layered concurrency control, durable idempotency, transactional outbox, and channel reconciliation — validated by a promoted K6 suite whose invariants gate every release claim.",
        businessContext: "Omnichannel commerce sells the same physical stock across web, app, Shopee, and TikTok Shop. Without serialized mutation and durable eventing, flash-sale bursts oversell and channels drift from central truth.",
        problemStatement: "Guarantee zero overselling and consistent multi-channel stock views under flash-sale contention, while keeping event delivery reliable and every result reproducible through measured evidence rather than asserted claims.",
        systemConstraints: [
          "Strict stock conservation under concurrent reserve/confirm/release requests.",
          "Idempotent external ingestion so webhook retries never double-apply an effect.",
          "Exactly-once state transitions per operation preserved even across crashes.",
          "Performance only claimed once a promoted invariants-gated benchmark passes."
        ],
        architecture: "Six Maven modules (common, inventory, flashsale, order, outbox, channel) deployed through one Spring Boot app, with MySQL/Flyway state, Redis SKU locks, Kafka outbox events, and a React operator UI.",
        architectureHighlights: [
          "Three-layer oversell defense: Redis SET-NX lock, transaction-scoped quota checks, and @Version optimistic locking.",
          "Transactional outbox writes state and Kafka events atomically in one MySQL transaction.",
          "Scheduled channel sync + reconciliation keeps marketplace views honest without letting channels overwrite central inventory."
        ],
        deepDecisions: [
          {
            title: "Three-Layer Oversell Defense",
            technique: "Redis Lock → Transaction → Optimistic Lock",
            mechanism: "Serialize per-SKU mutation with a Redis SET-NX lock, run quota/inventory changes inside a relational transaction, and let @Version + unique constraints reject any raced commit.",
            impact: "Zero oversells across a 50-VU / ~185 req/s hot-SKU run with stock conservation holding (available+reserved+sold=100)."
          },
          {
            title: "Three-Tier Durable Idempotency",
            technique: "Unique Keys + Operation Ledger + Response Replay",
            mechanism: "Reservation uniqueness keys prevent duplicate creation, an operation_idempotency ledger replays the original response, and ingress receipts dedupe external callbacks.",
            impact: "Buyer retries and webhook replays return the original result instead of repeating side effects."
          },
          {
            title: "Transactional Outbox",
            technique: "DB Transaction + Scheduled Kafka Publish",
            mechanism: "Every state change writes a versioned event envelope in the same transaction as its data mutation; a scheduler publishes PENDING events and marks PUBLISHED only after Kafka ack.",
            impact: "Database state and downstream events cannot diverge on partial failure."
          },
          {
            title: "Evidence-Gated K6 Program",
            technique: "Promoted Artifacts + Business Invariants",
            mechanism: "A K6 suite runs scenarios, asserts inventory invariants post-run, and only promotes passing evidence into a curated catalog served by typed backend APIs.",
            impact: "Every performance claim is backed by a reproducible, invariant-checked artifact — a deliberate antidote to marketing-layer benchmark numbers."
          }
        ],
        failureModesAndTradeoffs: [
          {
            failureMode: "Per-SKU lock serialization under extreme contention",
            mitigation: "Bounds correctness by serializing each SKU; documented as the trade-off that motivated the throughput-first Lua pre-gating in the companion Flash Sale Concurrency Engine.",
            tradeOff: "Sacrifices raw throughput for guaranteed correctness — the inverse trade-off of the featured engine, giving a complete before/after story across both projects."
          },
          {
            failureMode: "Lock lease expiry vs long transaction",
            mitigation: "Fixed TTL with release token limits exposure; watchdog renewal and a SELECT FOR UPDATE fallback are logged follow-ups.",
            tradeOff: "Crash safety over risk of early expiry, which the optimistic lock still catches."
          },
          {
            failureMode: "Outbox assumes single-instance polling",
            mitigation: "Safe for a single deployable; row-level claim/lease is the documented next step for horizontal scale.",
            tradeOff: "At-least-once delivery requires consumer-side idempotency as a compensating control."
          }
        ],
        testingAndVerification: [
          {
            type: "Concurrency integration test",
            details: "100 requests / 20 threads against a singleton Testcontainers stack (MySQL + Redis + Kafka).",
            result: "No oversell; stock conservation and quotas held under contention."
          },
          {
            type: "Promoted K6 evidence run",
            details: "Five scenarios at commit e2e3644: hot-sku 164ms avg / 920ms p95, down to 5.6ms avg for outbox recovery.",
            result: "0% failed requests, stock conservation passed, outbox backlog 0, reconciliation drifts 0."
          },
          {
            type: "Unit + browser coverage",
            details: "27 Java test files (75 methods), 6 Vitest files (25 tests), and 7 Playwright e2e tests.",
            result: "Green on the last full backend compile plus a fresh admin-ui unit/e2e run."
          }
        ],
        deploymentAndObservability: [
          "CI/CD on GitHub Actions: path-filtered jobs, container image builds, and a gated rollback workflow with health checks.",
          "Micrometer counters/gauges on reservations, outbox, and channel sync; Spring Actuator health/info/metrics endpoints.",
          "Operational alerting evaluates backlog and drift thresholds against persisted delivery state."
        ],
        operationalOutcomes: [
          "Delivered a correctness-first inventory backbone whose oversell defense transfers directly to the throughput-first Flash Sale Concurrency Engine.",
          "Established an evidence-gated release discipline: no performance claim ships without a promoted, invariant-checked benchmark artifact."
        ],
        gallery: [
          { url: "/08-admin-benchmark.png", title: "K6 Benchmark Evidence Dashboard", badge: "Invariants-Gated" }
        ]
      }
    }
  ]
};
