export interface GalleryItem {
  url: string;
  title: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: string[];
  githubUrl: string;
  nonTechImpact: string;
  techHighlights: string;
  hoverPreviewImage?: string;
  quickSpecs?: {
    tech: string;
    infra: string;
    scale: string;
  };
  gallery?: GalleryItem[];
  overview?: {
    purpose: string;
    context: string;
    problem: string;
  };
  solution?: {
    architecture: string;
    coreFeatures: { title: string; desc: string }[];
  };
  results?: {
    summary?: string;
    items: string[];
  };
}

export const portfolioData = {
  personal: {
    name: "Tran Thanh Quan",
    title: "Backend Software Engineer",
    email: "tranthanhquan09@gmail.com",
    phone: "0974426058",
    location: "Ho Chi Minh City, Vietnam",
    socials: {
      github: "https://github.com/qwan30",
      linkedin: "https://www.linkedin.com/in/tran-thanh-quan-eric-78842b326/",
      facebook: "https://www.facebook.com/tran.quan.182591/?locale=vi_VN"
    },
    summary: "Software Engineering student focused on backend development, reliable system design, and AI-assisted workflows. Experienced in building production systems with role-based permissions, high-concurrency transaction engines, idempotent payment flows, and Graph RAG architectures.",
    education: [
      {
        degree: "Bachelor of Engineering in Software Engineering",
        institution: "FPT University",
        duration: "Aug. 2023 - Aug. 2027",
        gpa: "8.0/10"
      }
    ],
    certifications: [
      {
        name: "Architecting Solutions on AWS (2026)",
        image: "/certificates/AWS.jpeg"
      },
      {
        name: "Retrieval Augmented Generation (RAG) (2026)",
        image: "/certificates/rag.jpeg"
      },
      {
        name: "Foundations of User Experience (UX) Design (2026)",
        image: "/certificates/UX (User Experience).jpeg"
      }
    ],
    skills: [
      "Java", "Python", "C#", "SQL", "TypeScript",
      "Spring Boot", "Spring Security", ".NET 10", "FastAPI", "JPA/Hibernate", "SignalR", "REST APIs", "Redis/RQ",
      "PostgreSQL", "MySQL", "Redis", "pgvector", "Kafka", "Flyway",
      "JUnit", "Testcontainers", "JMeter", "k6", "Prometheus", "Playwright", "Grafana", "Loki",
      "Docker", "Docker Compose", "Nginx", "Git", "GitHub Actions", "GHCR", "AWS",
      "AI-assisted PR Review", "SonarCloud", "CodeQL", "Trivy", "Dependabot",
      "Domain-Driven Design", "Event-Driven", "Transactional Outbox", "Hybrid Retrieval", "RAG"
    ],
    technicalSkills: {
      "LANGUAGES": ["Java", "Python", "C#", "SQL", "TypeScript"],
      "BACKEND": ["Spring Boot", "Spring Security", ".NET 10", "FastAPI", "JPA/Hibernate", "SignalR", "REST APIs", "Redis/RQ"],
      "DATA & MESSAGING": ["PostgreSQL", "MySQL", "Redis", "pgvector", "Kafka", "Flyway"],
      "TESTING & OBSERVABILITY": ["JUnit", "Testcontainers", "JMeter", "k6", "Prometheus", "Playwright", "Grafana", "Loki"],
      "DEVOPS & CLOUD": ["Docker", "Docker Compose", "Nginx", "Git", "GitHub Actions", "GHCR", "AWS"],
      "CODE QUALITY & SECURITY": ["AI-assisted PR Review", "SonarCloud", "CodeQL", "Trivy", "Dependabot"],
      "SYSTEM DESIGN & AI": ["Domain-Driven Design", "Event-Driven", "Transactional Outbox", "Hybrid Retrieval", "RAG"]
    }
  },
  projects: [
    {
      id: "vijaco-doc-mgmt",
      title: "Vijaco — Internal Document Management App",
      category: "Solo Production Freelance",
      period: "Jun. 2026 – Present",
      role: "Freelance (Solo Developer)",
      tagline: "Hệ thống quản lý tài liệu nội bộ tích hợp phân quyền bảo mật cho 30+ nhân viên",
      description: "Thiết kế và phát triển độc lập hệ thống quản lý tài liệu tập trung cho doanh nghiệp Vijaco. Đảm bảo an toàn thông tin với phân quyền chi tiết tới từng vai trò và tài nguyên (RBAC/ABAC), lưu vết lịch sử thao tác (Audit Trail) chống rò rỉ hay xóa nhầm dữ liệu.",
      techStack: ["NestJS", "TypeScript", "Flutter", "PostgreSQL", "Docker", "TypeORM", "REST API"],
      metrics: [
        "Phục vụ 30+ nhân viên doanh nghiệp vận hành hàng ngày",
        "Bảo mật tài liệu nhiều cấp với Audit History đầy đủ",
        "Tối ưu chi phí hạ tầng và lưu trữ trên tài nguyên công ty"
      ],
      githubUrl: "https://vijaco.vn/",
      nonTechImpact: "Giúp doanh nghiệp tự động hóa quy trình quản lý văn bản nội bộ, ngăn ngừa hoàn toàn rò rỉ dữ liệu và tiết kiệm đáng kể chi phí hạ tầng.",
      techHighlights: "Tự thiết kế RBAC/ABAC granular permissions, quản lý vòng đời tài liệu (Document Lifecycle Management), lưu lịch sử kiểm vết (Audit Trail).",
      hoverPreviewImage: "/vijaco-screens/18_user_list.png",
      quickSpecs: {
        tech: "NestJS (TS) + Flutter (Dart)",
        infra: "On-Premise Docker (~4TB)",
        scale: "30+ Nhân sự vận hành"
      },
      gallery: [
        { url: "/vijaco-screens/18_user_list.png", title: "Quản lý Danh sách Người dùng & Tài khoản", badge: "User Management" },
        { url: "/vijaco-screens/19_access_permissions.png", title: "Ma trận Phân quyền RBAC/ABAC Đa cấp", badge: "RBAC/ABAC Security" },
        { url: "/vijaco-screens/11_audit_logs.png", title: "Nhật ký Kiểm toán Fail-Closed Bất biến", badge: "Audit Trail" },
        { url: "/vijaco-screens/14_upload_files.png", title: "Tải lên Phân đoạn Resumable Chunked", badge: "Chunked Transfer" },
        { url: "/vijaco-screens/05_file_version_history.png", title: "Lịch sử Phiên bản Tài liệu (Versioning)", badge: "Version Control" },
        { url: "/vijaco-screens/16_trash.png", title: "Thùng rác An toàn 30 Ngày (Recycle Bin)", badge: "Recycle Bin" },
        { url: "/vijaco-screens/10_pdf_preview.png", title: "Xem trước PDF & Tải về Bảo mật", badge: "Secure Stream" },
        { url: "/vijaco-screens/08_mfa_verification.png", title: "Cổng Xác thực MFA TOTP Super Admin", badge: "MFA 2FA Gate" },
        { url: "/vijaco-screens/15_admin_dashboard.png", title: "Bảng Điều khiển Quản trị Hệ thống", badge: "Dashboard" },
        { url: "/vijaco-screens/01_department_position_list.png", title: "Quản lý Cơ cấu Phòng ban & Chức danh", badge: "Organization" }
      ],
      overview: {
        purpose: "Thiết kế và phát triển độc lập hệ thống quản lý tài liệu tập trung, lưu trữ bảo mật và số hóa quy trình luân chuyển văn bản cho doanh nghiệp Vijaco.",
        context: "Doanh nghiệp vận hành với 30+ nhân viên, quản lý ~4TB tài liệu hồ sơ phân tán trên các ổ đĩa mạng vật lý (Y:/, Z:). Việc chia sẻ thủ công qua mạng LAN tiềm ẩn rủi ro lớn về bảo mật và thất lạc dữ liệu.",
        problem: "Cần xóa bỏ nguy cơ rò rỉ dữ liệu nội bộ, ngăn chặn tình trạng vô tình xóa/ghi đè file, kiểm soát phân quyền chi tiết theo phòng ban/vị trí và lưu vết 100% hành vi truy cập mà vẫn tối ưu chi phí hạ tầng."
      },
      solution: {
        architecture: "Xây dựng theo kiến trúc NestJS / TypeScript Modular Monolith (Hexagonal Ports & Adapters) kết hợp ứng dụng mobile Flutter (Dart) cho Android & iOS, PostgreSQL 16 và đóng gói trọn gói qua Docker Compose.",
        coreFeatures: [
          {
            title: "Động cơ phân quyền RBAC/ABAC đa cấp",
            desc: "Canonical Precedence Engine xử lý xung đột quyền theo thứ bậc chuẩn xác: Resource Rank (File → Folder → Ancestor) → Subject Rank (User → Role → Department) → DENY wins, tự động cấp quyền UPLOADER_DEFAULT cho người tạo."
          },
          {
            title: "Kiểm toán bất biến (Fail-Closed Audit Trail)",
            desc: "Lưu vết 100% thao tác nhạy cảm (View, Download, Upload, Move, Delete, Restore). Cơ chế Fail-Closed tự động chặn xuất file/stream nếu hệ thống lưu vết audit gặp sự cố."
          },
          {
            title: "Tải lên phân đoạn (Resumable Chunked Upload)",
            desc: "Hỗ trợ tải tệp dung lượng lớn theo từng chunk độc lập, resume sau ngắt kết nối mạng, kiểm tra mã băm SHA-256 toàn vẹn và dọn dẹp staging tự động."
          },
          {
            title: "Storage Adapter & Che giấu đường dẫn vật lý",
            desc: "Giao tiếp ổ đĩa vật lý qua Storage Root trừu tượng (Y:/, Z:), kiểm soát Path Containment nghiêm ngặt, tuyệt đối không để lộ Physical Path ra client."
          },
          {
            title: "Vòng đời tài liệu & Thùng rác an toàn 30 ngày",
            desc: "Xóa mềm (Soft Delete) vào Recycle Bin 30 ngày, khôi phục an toàn chống xung đột trùng tên (Collision), hỗ trợ quản lý đa phiên bản (Versioning)."
          }
        ]
      },
      results: {
        summary: "Dự án hoàn thiện đúng cam kết chất lượng, giải quyết triệt để bài toán quản lý tài liệu và tối ưu chi phí vận hành cho doanh nghiệp.",
        items: [
          "Phục vụ 30+ nhân viên doanh nghiệp vận hành trơn tru hàng ngày với độ trễ phản hồi API < 100ms.",
          "Bảo mật dữ liệu tuyệt đối: 0 sự cố rò rỉ hay xóa nhầm dữ liệu, 100% thao tác nhạy cảm được truy vết kiểm toán.",
          "Tối ưu 100% chi phí hạ tầng: Tận dụng hoàn toàn ~4TB dung lượng ổ cứng sẵn có, triển khai On-Premise qua Docker không tốn chi phí Cloud hàng tháng.",
          "Nâng cao 40% hiệu suất tìm kiếm và luân chuyển tài liệu nội bộ giữa các phòng ban."
        ]
      }
    },
    {
      id: "aivora-marketplace",
      title: "Aivora — AI-Powered Freelance Marketplace",
      category: "Fullstack Platform (Backend Lead)",
      period: "May. 2026 – Present",
      role: ".NET 10 Backend Lead (4-Member Team)",
      tagline: "Sàn giao dịch việc làm chuyên gia AI tích hợp ví tạm giữ đa pha và trợ lý GenAI phân rã yêu cầu",
      description: "Dẫn dắt nhóm 4 kỹ sư thiết kế và phát triển toàn bộ kiến trúc backend cho sàn giao dịch việc làm chuyên gia AI. Triển khai mô hình tài chính Treasury giải ngân 2 pha (30% cọc / 70% nghiệm thu), ứng dụng Pessimistic Locking (SELECT ... FOR UPDATE), thuật toán sắp xếp ID chống Deadlock và tích hợp VNPay IPN Idempotent Callback bảo vệ 100% dòng tiền giao dịch.",
      techStack: [".NET 10", "C# 13", "PostgreSQL", "EF Core", "SignalR", "VNPay", "Gemini 2.5", "Docker"],
      metrics: [
        "Bảo vệ 100% an toàn tài chính cho luồng thanh toán Escrow & Milestone",
        "Trợ lý AI giúp làm rõ yêu cầu thô & phân rã Milestone tự động nhanh hơn 30%",
        "24+ RESTful Controllers & SignalR Hub phục vụ kết nối thời gian thực"
      ],
      githubUrl: "https://github.com/qwan30/swp-2026",
      nonTechImpact: "Tạo môi trường giao dịch minh bạch, an toàn tuyệt đối cho người thuê (Client) và chuyên gia (Expert); rút ngắn thời gian chốt hợp đồng và loại bỏ rủi ro quỵt tiền hay gian lận thanh toán.",
      techHighlights: "Treasury Deep Module giải ngân 2 pha, Pessimistic Locking (SELECT ... FOR UPDATE) chống tranh chấp số dư ví, Deadlock Prevention, Concurrency Tokens, Hybrid Expert Recommendation Scorer + Gemini Flash Re-ranking.",
      hoverPreviewImage: "/AIVORA-project (2).png",
      quickSpecs: {
        tech: ".NET 10 (C# 13) + React",
        infra: "PostgreSQL 16 + SignalR + VNPay",
        scale: "4-Member Team • 24+ Controllers"
      },
      gallery: [
        { url: "/AIVORA-project (2).png", title: "Tổng quan Nền tảng Freelance Marketplace Aivora", badge: "Marketplace Core" }
      ],
      overview: {
        purpose: "Dẫn dắt nhóm 4 kỹ sư xây dựng hệ thống backend cho sàn giao dịch việc làm chuyên sâu về AI & Công nghệ, quản lý trọn vẹn vòng đời từ tuyển dụng, ký kết, thực thi milestone đến thanh toán giải ngân an toàn.",
        context: "Thị trường tuyển dụng tự do thường đối mặt với rủi ro tranh chấp tài chính, mô tả công việc mơ hồ gây bất đồng kỳ vọng giữa Client - Expert, và nguy cơ race condition / duplicate credit trong xử lý số dư ví khi có lưu lượng giao dịch đồng thời.",
        problem: "Cần xây dựng hệ thống xử lý giao dịch tài chính với độ tin cậy tuyệt đối (chống double-spending, race condition, deadlock), tích hợp trợ lý AI chuẩn hóa yêu cầu tự động và động cơ chấm điểm khớp chuyên gia thông minh."
      },
      solution: {
        architecture: "Clean Architecture 3 tầng (.NET 10 Web API → Domain Services → Repositories EF Core), ứng dụng Deep Module Pattern cho phân hệ Tài chính Treasury, Strategy Pattern cho GenAI Provider (Gemini 2.5 Flash / Mock fallback) và SignalR WebSocket Hub cho giao tiếp thời gian thực.",
        coreFeatures: [
          {
            title: "Lõi tài chính Treasury & Giải ngân 2 pha (2-Phase Milestone Escrow)",
            desc: "Quy trình thanh toán minh bạch: Fund cọc 30% khi bắt đầu milestone (Client → Expert) và giải ngân 70% còn lại khi Client nghiệm thu sản phẩm (tự động khấu trừ 10% hoa hồng nền tảng vào Platform Wallet)."
          },
          {
            title: "Kiểm soát xung đột đồng thời & Chống Deadlock (Concurrency Control)",
            desc: "Ứng dụng PostgreSQL row-level Pessimistic Locking (SELECT ... FOR UPDATE) trên bảng Wallets, thuật toán sắp xếp UserId tăng dần trước khi lock nhiều ví để triệt tiêu Deadlock, và Concurrency Token (DbUpdateConcurrencyException) ngăn chặn triệt để double-fund/approve."
          },
          {
            title: "Cổng thanh toán VNPay & Xử lý Webhook Idempotency",
            desc: "Tích hợp VNPay nạp tiền tự động với mã băm chữ ký số HMAC-SHA512 (vnp_SecureHash); cơ chế IPN Callback Idempotent dựa trên Unique Constraint của ExternalTxnRef bảo đảm không bao giờ nạp trùng giao dịch."
          },
          {
            title: "Trợ lý GenAI Phân tích yêu cầu & Sinh Milestone (Gemini Flash Strategy)",
            desc: "Tự động phân tích câu lệnh thô của Client để sinh mô tả dự án chuẩn hóa, đề xuất Skill, khoảng ngân sách, timeline và phân rã các Milestone Steps chi tiết; hỗ trợ đa vòng tinh chỉnh hội thoại (Multi-turn Refinement)."
          },
          {
            title: "Động cơ gợi ý Chuyên gia lai (Hybrid Recommendation Engine)",
            desc: "Lọc trước Top 50 chuyên gia ở tầng Database, kết hợp thuật toán chấm điểm đa trọng số (0.40 Skill + 0.20 Budget + 0.20 Rating + 0.10 Availability + 0.10 Completion - Dispute/Overdue Penalties) và AI Semantic Re-ranking."
          },
          {
            title: "Giao tiếp thời gian thực & Phân vùng Rate Limiting",
            desc: "SignalR ChatHub kết nối WebSocket quản lý chat 1-1, typing indicators, read receipts và phát broadcast sự kiện trạng thái dự án (JobStatusUpdated, MilestoneUpdated); cấu hình Fixed Window Rate Limiter 3 cấp (Strict, AI, General)."
          }
        ]
      },
      results: {
        summary: "Hệ thống backend hoàn thiện đạt chuẩn enterprise, bảo đảm 100% tính toàn vẹn tài chính và vận hành ổn định cho toàn bộ vòng đời dự án.",
        items: [
          "Bảo vệ 100% dòng tiền giao dịch: 0 lỗi thất thoát số dư, loại bỏ hoàn toàn rủi ro Race Condition và Double-spending.",
          "Chuẩn hóa 24+ RESTful API Controllers và SignalR Hub với chuẩn response đồng nhất { success, message, data, traceId }.",
          "Trợ lý AI giúp rút ngắn 30% thời gian làm rõ yêu cầu và chốt phạm vi công việc giữa Client và Expert.",
          "Hệ thống đạt chuẩn kiểm thử xUnit & Moq với độ bao phủ logic tài chính và nghiệp vụ cốt lõi cao."
        ]
      }
    },
    {
      id: "flash-sale-reliability-lab",
      title: "Flash Sale System & Reliability Lab",
      category: "High-Concurrency Backend",
      period: "Feb. 2026 – Present",
      role: "Backend Reliability Engineer",
      tagline: "Lõi bán hàng giờ vàng xử lý hàng ngàn giao dịch đồng thời với cam kết Zero Oversell và Zero Data Drift",
      description: "Xây dựng hệ thống xử lý đơn hàng chịu tải lớn trong các đợt Flash Sale. Ứng dụng Redis Lua Script để khoá giữ tồn kho tức thì và cơ chế bù trừ tự động 2 lớp (SAGA-like Compensation & 30s Scheduled Reconciliation), loại bỏ hoàn toàn rủi ro bán vượt tồn (Zero Oversell) và triệt tiêu sai lệch dữ liệu giữa Cache và DB khi gặp truy cập bùng nổ.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Kafka", "MySQL", "JMeter", "Resilience4j", "OpenTelemetry", "Docker"],
      metrics: [
        "Chịu tải 5,000+ yêu cầu / 100 luồng đồng thời (Throughput 443.03 req/s)",
        "0 sản phẩm bị bán lố (Zero oversell & Zero data drift)",
        "Giảm 80% áp lực Row-Lock Contention trên MySQL"
      ],
      githubUrl: "https://github.com/qwan30/Flash-Sale-Concurrency-Engine",
      nonTechImpact: "Đảm bảo hệ thống bán hàng luôn thông suốt và chính xác tuyệt đối trong các đợt mở bán giờ vàng chớp nhoáng, bảo vệ 100% doanh thu và mang lại trải nghiệm mua sắm tin cậy không gián đoạn cho khách hàng.",
      techHighlights: "Redis Lua atomic pre-gate, Two-layer Compensation & Reconciliation, Transactional Outbox Pattern with Kafka, Java 21 Virtual Threads, DDD 5-Module Architecture.",
      hoverPreviewImage: "/flashsale-screens/architecture-overview.png",
      quickSpecs: {
        tech: "Java 21 + Spring Boot 3.3",
        infra: "Docker (MySQL + Redis + Kafka)",
        scale: "5,000 Reqs / 100 Threads (443 req/s)"
      },
      gallery: [
        { url: "/flashsale-screens/architecture-overview.png", title: "Tổng quan Kiến trúc Hệ thống: Redis Pre-gating, SAGA Compensation, Transactional Outbox & Kafka", badge: "Architecture Overview" },
        { url: "/flashsale-screens/strategy-comparison.png", title: "So sánh 4 Chiến lược Trừ tồn kho & Cơ chế Dịch chuyển Điểm nghẽn (Bottleneck Shift)", badge: "Strategy Matrix" },
        { url: "/flashsale-screens/strategy-comparison-flow.png", title: "Luồng Xử lý Chi tiết & Điều phối Chiến lược Trừ Tồn kho Phân tán", badge: "Strategy Flow" },
        { url: "/flashsale-screens/strategy-routing-and-recovery.png", title: "Sơ đồ Điều hướng Chiến lược & Cơ chế Phục hồi Bù trừ Tự động", badge: "Routing & Recovery" },
        { url: "/flashsale-screens/ddd-modules.png", title: "Kiến trúc Phân rã 5 Maven Modules chuẩn Domain-Driven Design (DDD Layout)", badge: "DDD Architecture" },
        { url: "/flashsale-screens/ddd-module-layout.png", title: "Sơ đồ Phụ thuộc & Ranh giới Module (Ports & Adapters Hexagonal)", badge: "Module Boundaries" },
        { url: "/flashsale-screens/jmeter_redis_lua_summary.png", title: "Báo cáo Tải JMeter: Error Rate 0.00% & Throughput 443 req/s Vượt trội", badge: "JMeter Summary" },
        { url: "/flashsale-screens/jmeter_redis_lua_throughput.png", title: "Đồ thị Thông lượng Throughput: Duy trì Mức Tải cao Ổn định", badge: "Throughput Curve" },
        { url: "/flashsale-screens/jmeter_redis_lua_latency.png", title: "Đồ thị Độ trễ Latency: Phẳng và Đồng đều Cực thấp trên Redis Lua", badge: "Latency Curve" },
        { url: "/flashsale-screens/grafana_system_metrics.png", title: "Grafana Dashboard: Giám sát Realtime JVM, CPU, Memory & Custom Order Latency", badge: "Grafana Metrics" },
        { url: "/flashsale-screens/elk_conditional_db_bottleneck.png", title: "Kibana ELK Logging: Bắt 833 lỗi DB Lock Wait Timeout khi chưa dùng Redis Gate", badge: "ELK Centralized Log" }
      ],
      overview: {
        purpose: "Xây dựng nền tảng backend xử lý đơn hàng chịu tải cực lớn (Flash Sale Concurrency Engine), thử nghiệm thực nghiệm và so sánh các chiến lược trừ tồn kho dưới áp lực hàng ngàn request đồng thời.",
        context: "Trong các đợt mở bán giờ vàng hoặc sự kiện vé hot, hàng chục ngàn người cùng bấm mua 1 lượng hàng hữu hạn trong 1 vài giây. Các giải pháp DB truyền thống lập tức sụp đổ vì nghẽn hàng đợi Row-Lock (Lock Wait Timeout) và rủi ro bán lố (Oversell) nghiêm trọng.",
        problem: "Cần loại bỏ triệt để rủi ro bán vượt tồn kho (Oversell), giải tỏa 80%+ áp lực tranh chấp khóa hàng trên MySQL, đồng thời xử lý trọn vẹn rủi ro mất nhất quán dữ liệu (Dual-write drift) giữa Redis Cache và Database khi có sự cố mạng hoặc sập node giữa chừng."
      },
      solution: {
        architecture: "Kiến trúc Domain-Driven Design (DDD) phân rã 5 Maven Modules độc lập, chạy trên Java 21 Virtual Threads (Project Loom), kết hợp Redis 7.x Lua Scripting, MySQL 8.0 với Transactional Outbox Pattern và Apache Kafka 3.9.",
        coreFeatures: [
          {
            title: "Động cơ trừ tồn kho 4 chiến lược (Strategy Pattern)",
            desc: "So sánh thực nghiệm 4 thuật toán: UNSAFE_DB (mô phỏng bán lố baseline -2,278 tồn), CONDITIONAL_DB (MySQL atomic update), REDIS_LUA (In-memory gate), và REDIS_LUA_WITH_COMPENSATION (Gating + Rollback bù trừ tự động đạt Zero Oversell)."
          },
          {
            title: "Cổng chặn nguyên tử Redis Lua (Atomic Pre-gating)",
            desc: "Thực thi kiểm tra và trừ tồn kho trực tiếp trên RAM bằng Redis Lua Scripting trong vài microsecond, loại bỏ tức thì 80%+ request dư thừa trước khi chạm tới cơ sở dữ liệu."
          },
          {
            title: "Cơ chế bù trừ 2 lớp & Đối soát dữ liệu (Compensation & Reconciliation)",
            desc: "Layer 1: Tự động rollback INCR trên Redis trong mili-giây khi DB commit thất bại. Layer 2: Job nền quét định kỳ mỗi 30s đối soát số bán thực tế trong MySQL và tự sửa chữa sai lệch (Drift) trên Redis."
          },
          {
            title: "Phát sự kiện tin cậy (Transactional Outbox + Kafka)",
            desc: "Lưu bản ghi đơn hàng và event vào bảng outbox_event trong cùng một DB transaction, relay bất đồng bộ sang Apache Kafka với cơ chế At-Least-Once Delivery chống mất mát thông điệp."
          },
          {
            title: "Kiểm soát truy cập & Điều phối tải (Resilience4j Admission Control)",
            desc: "Tích hợp Rate Limiter shed tải với mã lỗi HTTP 429 và phân làn ưu tiên (Priority Admission Lanes) bảo vệ hệ thống trước các đợt bùng nổ lưu lượng."
          }
        ]
      },
      results: {
        summary: "Hệ thống đã được kiểm chứng tải nghiêm ngặt qua Apache JMeter (5,000 requests / 100 threads đồng thời) và trực quan hóa qua Grafana/ELK với kết quả vượt trội.",
        items: [
          "Throughput tăng 5.23 lần (từ 84.71 lên 443.03 req/s), độ trễ trung bình giảm 84.7% (từ 1,084ms xuống 165.95ms).",
          "Đạt Zero Oversell tuyệt đối (0 sản phẩm bán lố) và Zero Data Drift (0 lệch dữ liệu giữa Redis và DB).",
          "Giảm 80% tải truy vấn và triệt tiêu hoàn toàn nghẽn hàng đợi Row-Lock trên MySQL (xóa bỏ 833 lỗi lock timeout).",
          "Tự phục hồi sau 5 kịch bản sự cố phân tán (Chaos Engineering: crash DB, timeout Redis, rớt mạng Kafka)."
        ]
      }
    },
    {
      id: "ai-hospital-rag",
      title: "AI Hospital Knowledge Assistant",
      category: "AI & Data Engineering",
      period: "Feb. 2026 – Present",
      role: "AI & Data Engineer",
      tagline: "Trợ lý AI tra cứu hồ sơ y tế thông minh với độ chính xác trích dẫn nguồn 95.2%",
      description: "Xây dựng hệ thống xử lý và truy xuất dữ liệu bệnh án tự động cho bệnh viện. Ứng dụng công nghệ Graph RAG kết nối lịch sử khám chữa bệnh thành đồ thị tri thức, giúp câu trả lời của AI chính xác và có nguồn trích dẫn bằng chứng rõ ràng.",
      techStack: ["FastAPI", "Python", "pgvector", "Redis/RQ", "RAG", "React"],
      metrics: [
        "Đạt 95.2% độ chính xác trích dẫn nguồn minh chứng (300 cases)",
        "Đạt tiêu chuẩn bảo mật dữ liệu y tế (HIPAA-aligned)"
      ],
      githubUrl: "https://github.com/qwan30/chat-hospital-system",
      nonTechImpact: "Giúp bác sĩ và nhân viên y tế tra cứu tiền sử bệnh, đơn thuốc và kết quả xét nghiệm của bệnh nhân tức thì với nguồn trích dẫn minh bạch, rút ngắn 80% thời gian tra cứu hồ sơ bệnh án.",
      techHighlights: "Graph RAG liên kết dữ liệu y tế đa chiều (Longitudinal Patient Graph), Pipeline OCR-to-RAG bất đồng bộ qua Redis/RQ, Hybrid Search (pgvector HNSW + BM25), Cổng xác thực trích dẫn (Citation Verification Gate) chống ảo giác AI.",
      hoverPreviewImage: "/hospital-screens/graph-rag-detail.png",
      quickSpecs: {
        tech: "FastAPI + pgvector + Redis/RQ",
        infra: "On-Premise Docker & Local LLM (16GB RAM)",
        scale: "300 Verified Cases (95.2% Citation)"
      },
      gallery: [
        { url: "/hospital-screens/graph-rag-detail.png", title: "Chi tiết Đồ thị Thực thể, Quan hệ Lâm sàng & Bằng chứng Nguồn Trích dẫn", badge: "Graph RAG Detail" },
        { url: "/hospital-screens/graph-rag.png", title: "Giao diện Trực quan hóa Đồ thị Tri thức Bệnh nhân (Knowledge Graph Explainability)", badge: "Graph RAG View" },
        { url: "/hospital-screens/system-architecture.png", title: "Tổng quan Kiến trúc Hệ thống: Multi-layer BFF, pgvector, RQ Worker, CDSS Agent & HMS Bridge", badge: "System Architecture" },
        { url: "/hospital-screens/chatbot-architecture.png", title: "Kiến trúc Clinical Chatbot: Permission-first RAG, Input/Output Guardrails & Citation Gate", badge: "Chatbot Architecture" },
        { url: "/hospital-screens/graphrag-architecture.png", title: "Kiến trúc SQL-Backed GraphRAG: Bóc tách Thực thể, Quan hệ & Duyệt BFS 2-Hop", badge: "GraphRAG Architecture" },
        { url: "/hospital-screens/ocr-architecture.png", title: "Kiến trúc Ingestion & OCR Pipeline: PyMuPDF + PaddleOCR, Hashing SHA-256 & Dead-Letter Queue", badge: "OCR Architecture" },
        { url: "/hospital-screens/cicd-pipeline.png", title: "Quy trình CI/CD Pipeline: 8 Jobs, CodeQL, Benchmark 300 Cases & Release Gate Sentinel", badge: "CI/CD Pipeline" },
        { url: "/hospital-screens/deployment-architecture.png", title: "Kiến trúc Triển khai On-Premise: Docker Compose, Nginx Reverse Proxy, Grafana & Loki", badge: "Deployment Architecture" },
        { url: "/hospital-screens/chat.png", title: "Giao diện AI Chat Lâm sàng: Server-Sent Events Streaming & Thẻ Trích dẫn Nguồn", badge: "Clinical AI Chat" },
        { url: "/hospital-screens/patient.png", title: "Quản lý Hồ sơ Bệnh nhân: Phân quyền RBAC 7 Roles & SQL Predicate Pre-Filtering", badge: "Patient EMR" },
        { url: "/hospital-screens/time-line.png", title: "Dòng Thời gian Lịch sử Bệnh lý Đa chiều theo Trật tự Thời gian", badge: "Patient Timeline" },
        { url: "/hospital-screens/dashboard.png", title: "Bảng Điều khiển Giám sát Vận hành & Phân tích Thời gian Tiết kiệm", badge: "Impact Dashboard" },
        { url: "/hospital-screens/audit-screen-new.png", title: "Nhật ký Kiểm toán Truy vết Fail-Closed Bất biến Chuẩn HIPAA", badge: "Fail-Closed Audit" },
        { url: "/hospital-screens/notification.png", title: "Thông báo & Cảnh báo Lâm sàng Tương tác Thuốc/Dị ứng Tự động (CDSS)", badge: "CDSS Alerts" },
        { url: "/hospital-screens/screen-index.png", title: "Mục lục Điều hướng Toàn bộ 90+ Màn hình Nghiệp vụ Hệ thống", badge: "Screen Index" },
        { url: "/hospital-screens/login-demo.png", title: "Cổng Đăng nhập Xác thực JWT Scoped Session", badge: "Auth & RBAC" }
      ],
      overview: {
        purpose: "Xây dựng hệ thống trợ lý tri thức y tế và hỗ trợ quyết định lâm sàng (CDSS) ứng dụng AI, giúp bác sĩ tra cứu tức thì tiền sử bệnh, đơn thuốc, xét nghiệm từ hàng ngàn trang tài liệu bệnh án phân tán với nguồn trích dẫn bằng chứng xác thực 100%.",
        context: "Trong môi trường bệnh viện, hồ sơ bệnh án tích lũy qua nhiều năm dưới các định dạng phức tạp (PDF quét, ảnh chụp kết quả, phiếu xét nghiệm, dữ liệu EMR). Việc tra cứu thủ công mất 10–15 phút/ca và tiềm ẩn nguy cơ bỏ sót các tương tác thuốc hoặc tiền sử dị ứng nguy hiểm.",
        problem: "Các mô hình AI thông thường dễ mắc lỗi ảo giác (Hallucination), bịa đặt số liệu y khoa, thiếu khả năng liên kết dữ liệu theo thời gian (Longitudinal Context) và đối mặt với nguy cơ vi phạm bảo mật dữ liệu y tế (PHI/HIPAA) nếu rò rỉ dữ liệu qua các API đám mây công cộng."
      },
      solution: {
        architecture: "Kiến trúc Hybrid Clean/Pipeline kết hợp FastAPI Asynchronous Backend, PostgreSQL 16 (pgvector HNSW + tsvector BM25), hàng đợi tác vụ Redis/RQ, mô hình LLM On-Premise nội bộ (Ollama Qwen2.5/Llama) và frontend React 19 / TanStack Start.",
        coreFeatures: [
          {
            title: "Đồ thị tri thức y tế (SQL-Backed Graph RAG)",
            desc: "Bóc tách thực thể (thuốc, bệnh lý, xét nghiệm) và mối quan hệ lâm sàng (treats, causes, contraindicates) vào bảng GraphEntity/GraphRelation; thực hiện duyệt BFS 2-hop theo phạm vi bệnh nhân để cung cấp ngữ cảnh đa chiều mà không phụ thuộc vào Graph DB rời bên ngoài."
          },
          {
            title: "Tìm kiếm lai (Hybrid Retrieval: Dense Vector + Sparse BM25)",
            desc: "Kết hợp tìm kiếm tương đồng vector pgvector (HNSW Cosine Distance) với tìm kiếm từ khóa y tế chính xác BM25 (tsvector). Áp dụng Reciprocal Rank Fusion (RRF) và Reranking để chọn lọc Top-K đoạn bằng chứng chuẩn xác nhất."
          },
          {
            title: "Cổng xác thực trích dẫn & Từ chối an toàn (Anti-Hallucination Gate)",
            desc: "Hậu xử lý đối chiếu từng mã trích dẫn trong câu trả lời với tập đoạn nguồn (Retrieved Chunks); tự động loại bỏ nguồn giả lập và kích hoạt Safe-Refusal Pipeline (NO_EVIDENCE_ANSWER) từ chối an toàn khi thiếu dữ liệu y khoa."
          },
          {
            title: "Pipeline OCR & Indexing bất đồng bộ với Dead-Letter Queue",
            desc: "Tự động phân tách PDF văn bản qua PyMuPDF và kích hoạt PaddleOCR cho tài liệu quét qua hàng đợi Redis/RQ. Kiểm soát tính toàn vẹn SHA-256, tự động retry và chuyển hướng tài liệu lỗi vào Dead-Letter Queue (DLQ) để API luôn phản hồi tức thì."
          },
          {
            title: "Đại lý cảnh báo lâm sàng tự động (Autonomous CDSS Agent)",
            desc: "Worker ngầm tự động kích hoạt ngay sau khi tài liệu bệnh án được index, gom toàn bộ đồ thị tri thức bệnh nhân đối chiếu với đơn thuốc mới để phát hiện sớm các nguy cơ dị ứng, tương tác thuốc và lưu cảnh báo vào ClinicalAlerts."
          },
          {
            title: "Phân quyền 3 lớp & Kiểm toán Fail-Closed (HIPAA-Aligned)",
            desc: "Phân quyền theo 7 vai trò lâm sàng (RBAC) kết hợp phạm vi bệnh nhân (ABAC), chèn điều kiện lọc quyền trực tiếp vào câu lệnh SQL (SQL Predicate Pre-Filtering) và lưu vết 100% nhật ký truy vấn bảo vệ dữ liệu PHI."
          }
        ]
      },
      results: {
        summary: "Dự án hoàn thiện trọn vẹn toàn bộ chu trình xử lý dữ liệu và trợ lý lâm sàng, vượt qua bài đánh giá nghiệm thu nghiêm ngặt 300 ca bệnh thực tế với các chỉ số ấn tượng:",
        items: [
          "Đạt 95.2% độ chính xác trích dẫn nguồn minh chứng (Citation Precision) trên bộ dữ liệu kiểm thử 300 ca lâm sàng.",
          "0% rò rỉ dữ liệu ngoài thẩm quyền (Zero Context Leakage) nhờ cơ chế SQL Predicate Pre-Filtering trước khi truy vấn vector.",
          "Rút ngắn thời gian tổng hợp bệnh án từ 10–15 phút xuống < 30 giây (giảm > 80% thời gian tra cứu của bác sĩ).",
          "Vận hành On-Premise mượt mà trên máy trạm 16GB RAM tiêu chuẩn bệnh viện, tuân thủ nghiêm ngặt chuẩn an toàn dữ liệu y tế (HIPAA-aligned)."
        ]
      }
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      category: "Enterprise Java Backend",
      period: "Jan. 2026 – Feb. 2026",
      role: "Backend Developer",
      tagline: "Hệ thống quản lý bệnh viện tổng thể xử lý quy trình tiếp nhận, hồ sơ bệnh án và lịch khám bác sĩ",
      description: "Thiết kế và xây dựng dịch vụ backend cho hệ thống quản lý bệnh viện đa phân hệ. Tối ưu hóa mô hình dữ liệu quan hệ, số hóa hồ sơ khám bệnh điện tử và triển khai phân quyền truy cập chặt chẽ cho đội ngũ y bác sĩ.",
      techStack: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "REST API", "Tailwind CSS"],
      metrics: [
        "Quản lý tập trung toàn bộ hồ sơ bệnh án và lịch khám bệnh nhân",
        "Tối ưu truy vấn dữ liệu y tế với đánh chỉ mục Indexing chính xác"
      ],
      githubUrl: "https://github.com/qwan30/hospital-management-system",
      nonTechImpact: "Giúp bệnh viện tự động hóa quy trình quản lý hồ sơ khám bệnh, giảm thiểu sai sót thủ công và nâng cao tốc độ phục vụ bệnh nhân.",
      techHighlights: "Architecture Spring Boot Layered Architecture, Schema Relational Database MySQL chuẩn hóa, phân quyền chi tiết RBAC.",
      hoverPreviewImage: "/hospital-system.png"
    },
    {
      id: "inventory-flashsale-system",
      title: "Inventory & Flash Sale Concurrency Engine",
      category: "Distributed Backend & Inventory",
      period: "Jan. 2026 – Present",
      role: "Backend Engineer",
      tagline: "Hệ thống quản lý tồn kho và khóa giữ hàng chịu tải cao cho môi trường mua sắm bùng nổ",
      description: "Nghiên cứu và triển khai giải pháp khoán giữ tồn kho thời gian thực cho hệ thống E-commerce. Áp dụng kỹ thuật khóa phân tán (Distributed Lock) và hàng đợi thông điệp bất đồng bộ để bảo đảm tính nhất quán dữ liệu giữa kho và đơn hàng.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Kafka", "PostgreSQL"],
      metrics: [
        "Kiểm soát tồn kho thời gian thực với độ trễ phản hồi cực thấp (<10ms)",
        "Đảm bảo 100% tính nhất quán dữ liệu tồn kho đa kho hàng"
      ],
      githubUrl: "https://github.com/qwan30/inventory-flashsale-system",
      nonTechImpact: "Giúp doanh nghiệp tự tin triển khai các đợt mở bán lớn mà không lo nghẽn kho, bán lố số lượng hay gây gián đoạn trải nghiệm người dùng.",
      techHighlights: "Distributed Locking với Redis, Asynchronous Event-Driven updates qua Kafka, Idempotent Transaction Handlers.",
      hoverPreviewImage: "/08-admin-benchmark.png"
    },
    {
      id: "ledger-credit-system",
      title: "Ledger Credit & Double-Entry Accounting System",
      category: "Financial Infrastructure & Ledger",
      period: "Dec. 2025 – Present",
      role: "Backend Infrastructure Engineer",
      tagline: "Lõi sổ kế toán kép ghi nợ/có xử lý giao dịch tài chính với tính toàn vẹn và bất biến dữ liệu 100%",
      description: "Thiết kế và phát triển hệ thống sổ cái tài chính (Double-Entry Ledger) cho các giao dịch tín dụng và ví điện tử. Triển khai cơ chế Ghi sổ kép (Debit/Credit), đảm bảo tổng nợ luôn cân bằng tổng có (Zero Sum Balance) và nhật ký giao dịch bất biến (Immutable Audit Log).",
      techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
      metrics: [
        "100% tính toán chính xác số dư theo chuẩn kế toán kép (Zero balance drift)",
        "Bảo vệ toàn vẹn lịch sử giao dịch bất biến với Hash Chain Validation"
      ],
      githubUrl: "https://github.com/qwan30/ledger-credit-system",
      nonTechImpact: "Tạo nền tảng quản lý tài khoản tín dụng và ví tiền minh bạch, loại bỏ hoàn toàn rủi ro sai lệch số dư hay gian lận chỉnh sửa lịch sử giao dịch.",
      techHighlights: "Double-Entry Bookkeeping Ledger Engine, Strict ACID Concurrency Controls, Immutable Audit Log với Hash Validation."
    },
    {
      id: "mini-digital-banking-platform",
      title: "Mini Digital Banking Platform",
      category: "Fintech Backend System",
      period: "Nov. 2025 – Dec. 2025",
      role: "Backend Software Engineer",
      tagline: "Hệ thống ngân hàng số thu nhỏ tích hợp giao dịch tài khoản, chuyển tiền nội bộ và xác thực OTP 2FA",
      description: "Xây dựng dịch vụ ngân hàng kỹ thuật số mô phỏng quy trình giao dịch thực tế. Triển khai kiến trúc backend phân tầng bảo mật, xử lý giao dịch chuyển tiền an toàn với giao thức kiểm tra tài khoản, mã hóa mật khẩu BCrypt và mã OTP xác thực thời gian thực.",
      techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "REST API"],
      metrics: [
        "Đảm bảo xác thực 2FA OTP & JWT Token bảo mật nhiều lớp",
        "Xử lý luồng giao dịch nạp/rút/chuyển tiền chuẩn ACID hoàn toàn mượt mà"
      ],
      githubUrl: "https://github.com/qwan30/mini-digital-banking-platform",
      nonTechImpact: "Cung cấp trải nghiệm ngân hàng số an toàn, tiện lợi cho người dùng thực hiện giao dịch chuyển tiền và quản lý tài khoản cá nhân mọi lúc mọi nơi.",
      techHighlights: "Transactional Banking Engine, Spring Security JWT & OTP 2FA, Transaction History & Balance Audit, Data Encryption."
    }
  ],
  activities: [
    {
      id: "tet-luon-vui",
      title: "Tết Luôn Vui — Dự Án Gây Quỹ Cộng Đồng",
      role: "Trưởng Nhóm Dự Án, Quản Lý Truyền Thông & Logistics",
      description: "Dự án cộng đồng do sinh viên ĐH FPT tổ chức nhằm gây quỹ ủng hộ Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam nhân dịp Tết. Tổ chức thành công các hoạt động bán hàng thủ công và workshop trải nghiệm sáng tạo.",
      metrics: [
        "Gây quỹ ủng hộ 3,550,000 VNĐ cho Mặt trận Tổ quốc Việt Nam",
        "Phát triển Fanpage đạt 934 lượt theo dõi tự nhiên",
        "Dẫn dắt nhóm 9 thành viên hoàn thành xuất sắc mục tiêu đề ra"
      ],
      images: [
        "/activities/poster.jpg",
        "/activities/hoa.jpg",
        "/activities/SE1905_Group3_UngHoMTTQ.jpg"
      ]
    }
  ]
};
