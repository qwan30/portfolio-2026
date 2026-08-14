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
      tagline: "Hệ thống quản lý tài liệu nội bộ tích hợp phân quyền bảo mật cho 50+ nhân viên",
      description: "Thiết kế và phát triển độc lập hệ thống quản lý tài liệu tập trung cho doanh nghiệp Vijaco. Đảm bảo an toàn thông tin với phân quyền chi tiết tới từng vai trò và tài nguyên (RBAC/ABAC), lưu vết lịch sử thao tác (Audit Trail) chống rò rỉ hay xóa nhầm dữ liệu.",
      techStack: ["NestJS", "TypeScript", "Flutter", "PostgreSQL", "Docker", "TypeORM", "REST API"],
      metrics: [
        "Phục vụ 50+ nhân viên doanh nghiệp vận hành hàng ngày",
        "Bảo mật tài liệu nhiều cấp với Audit History đầy đủ",
        "Tối ưu chi phí hạ tầng và lưu trữ trên tài nguyên công ty"
      ],
      githubUrl: "https://vijaco.vn/",
      nonTechImpact: "Giúp doanh nghiệp tự động hóa quy trình quản lý văn bản nội bộ, ngăn ngừa hoàn toàn rò rỉ dữ liệu và tiết kiệm đáng kể chi phí hạ tầng.",
      techHighlights: "Tự thiết kế RBAC/ABAC granular permissions, quản lý vòng đời tài liệu (Document Lifecycle Management), lưu lịch sử kiểm vết (Audit Trail).",
      hoverPreviewImage: "/vijaco-screens/18_user_list.png",
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
        context: "Doanh nghiệp vận hành với 50+ nhân viên, quản lý ~4TB tài liệu hồ sơ phân tán trên các ổ đĩa mạng vật lý (Y:/, Z:). Việc chia sẻ thủ công qua mạng LAN tiềm ẩn rủi ro lớn về bảo mật và thất lạc dữ liệu.",
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
          "Phục vụ 50+ nhân viên doanh nghiệp vận hành trơn tru hàng ngày với độ trễ phản hồi API < 100ms.",
          "Bảo mật dữ liệu tuyệt đối: 0 sự cố rò rỉ hay xóa nhầm dữ liệu, 100% thao tác nhạy cảm được truy vết kiểm toán.",
          "Tối ưu 100% chi phí hạ tầng: Tận dụng hoàn toàn ~4TB dung lượng ổ cứng sẵn có, triển khai On-Premise qua Docker không tốn chi phí Cloud hàng tháng.",
          "Nâng cao 40% hiệu suất tìm kiếm và luân chuyển tài liệu nội bộ giữa các phòng ban."
        ]
      }
    },
    {
      id: "aivora-marketplace",
      title: "Aivora — Freelance Marketplace",
      category: "Fullstack Platform (Backend Lead)",
      period: "May. 2026 – Present",
      role: ".NET 10 Backend Lead (4-Member Team)",
      tagline: "Sàn việc làm tự do tích hợp ví tạm giữ an toàn và trợ lý AI phân tích yêu cầu",
      description: "Dẫn dắt nhóm 4 người phát triển backend cho sàn giao dịch công việc freelancer. Triển khai luồng thanh toán tạm giữ (Escrow) theo cột mốc qua VNPay, sử dụng khoá dữ liệu (Pessimistic Locking) và callback an toàn để bảo vệ 100% dòng tiền của khách hàng.",
      techStack: [".NET 10", "PostgreSQL", "SignalR", "VNPay", "React"],
      metrics: [
        "Bảo vệ 100% an toàn tài chính cho luồng thanh toán Escrow",
        "Trợ lý AI hỗ trợ làm rõ yêu cầu & chốt hợp đồng nhanh hơn 30%"
      ],
      githubUrl: "https://github.com/qwan30/swp-2026",
      nonTechImpact: "Tạo môi trường giao dịch minh bạch giữa nhà tuyển dụng và freelancer, bảo vệ khoản tiền thanh toán và tự động hóa đề xuất công việc bằng AI.",
      techHighlights: "Milestone-based Escrow payment flow, VNPay Idempotent Callbacks chống nạp/thanh toán trùng, Pessimistic Locking xử lý tranh chấp số dư.",
      hoverPreviewImage: "/AIVORA-project (2).png"
    },
    {
      id: "flash-sale-reliability-lab",
      title: "Flash Sale System & Reliability Lab",
      category: "High-Concurrency Backend",
      period: "Feb. 2026 – Present",
      role: "Backend Reliability Engineer",
      tagline: "Lõi bán hàng giờ vàng xử lý hàng ngàn giao dịch đồng thời với độ chính xác tuyệt đối",
      description: "Xây dựng hệ thống xử lý đơn hàng chịu tải lớn trong các đợt Flash Sale. Ứng dụng Redis Lua Script để khoá giữ tồn kho tức thì và cơ chế bù trừ tự động, loại bỏ hoàn toàn rủi ro bán vượt số lượng tồn (oversell) khi gặp truy cập bùng nổ.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Kafka", "MySQL", "JMeter"],
      metrics: [
        "Chịu tải 5,000+ yêu cầu / 100 luồng đồng thời (Verified)",
        "0 sản phẩm bị bán lố (Zero oversell & data drift)"
      ],
      githubUrl: "https://github.com/qwan30/Flash-Sale-Concurrency-Engine",
      nonTechImpact: "Đảm bảo hệ thống bán hàng luôn thông suốt trong các sự kiện săn sale lớn, mang lại trải nghiệm mua sắm tin cậy cho người dùng mà không bị lỗi hệ thống.",
      techHighlights: "Redis Lua stock gate chống race condition, Transactional Outbox Pattern kết hợp Kafka đảm bảo dữ liệu ghi DB và gửi Event luôn nhất quán.",
      hoverPreviewImage: "/08-admin-benchmark.png"
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
      nonTechImpact: "Giúp bác sĩ và nhân viên y tế tra cứu tiền sử bệnh, đơn thuốc và kết quả xét nghiệm của bệnh nhân tức thì với nguồn trích dẫn minh bạch.",
      techHighlights: "Graph RAG liên kết dữ liệu y tế đa chiều (Longitudinal Patient Graph), OCR-to-RAG pipeline xử lý tài liệu quét, Vector Search với pgvector.",
      hoverPreviewImage: "/graph-rag-detail.png"
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
