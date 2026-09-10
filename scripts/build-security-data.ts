import fs from "fs";

const securityData = {
  vi: {
    sec1: {
      title: "1. Khung an toàn thông tin ISO/IEC 27001",
      p1: "CreditBird thiết lập và duy trì Hệ thống quản lý an toàn thông tin (ISMS) phù hợp với chuẩn mực quốc tế <strong>ISO/IEC 27001</strong> và quy định của <strong>Luật An ninh mạng Việt Nam</strong>.",
      p2: "Toàn bộ quy trình từ tuyển dụng nhân sự IT, tiếp nhận yêu cầu phần mềm, cấu hình máy chủ đến bàn giao mã nguồn đều tuân thủ các chính sách kiểm soát an toàn nghiêm ngặt nhằm đảm bảo 3 trụ cột cơ bản:",
      pillars: {
        confidentiality: { title: "TÍNH BẢO MẬT", subtitle: "Confidentiality", desc: "Chỉ những cá nhân được ủy quyền mới được truy cập dữ liệu." },
        integrity: { title: "TÍNH TOÀN VẸN", subtitle: "Integrity", desc: "Dữ liệu kế toán ERP và mã nguồn không bị sửa đổi trái phép." },
        availability: { title: "TÍNH KHẢ DỤNG", subtitle: "Availability", desc: "Hệ thống sẵn sàng phục vụ 99.9% thời gian theo cam kết SLA." }
      }
    },
    sec2: {
      title: "2. Bảo mật mã nguồn & Quy trình DevSecOps",
      desc: "Đối với các dự án viết phần mềm may đo và tùy biến ERP, CreditBird áp dụng quy trình phát triển phần mềm an toàn (Secure Software Development Lifecycle - SSDLC):",
      items: [
        { label: "Quản lý kho mã nguồn cô lập", text: "Mỗi dự án của khách hàng được phân bổ một Repository riêng biệt với chính sách phân quyền chi nhánh (Branch Protection Rules), yêu cầu tối thiểu 02 Senior Tech Lead phê duyệt Pull Request trước khi hợp nhất." },
        { label: "Kiểm thử bảo mật tự động", text: "Tích hợp công cụ quét mã tĩnh (SAST) phát hiện lỗi OWASP Top 10, quét thư viện phụ thuộc (SCA) để ngăn chặn lỗ hổng zero-day trong các gói mã nguồn mở." },
        { label: "Chống rò rỉ khóa bí mật", text: "Tự động chặn commit chứa API keys, database credentials hoặc secret tokens." },
        { label: "Bàn giao sạch 100%", text: "Khi bàn giao mã nguồn cho khách hàng, hệ thống được nghiệm thu với báo cáo quét bảo mật sạch hoàn toàn (Zero High/Critical Vulnerabilities)." }
      ]
    },
    sec3: {
      title: "3. An toàn dữ liệu ERP & Sao lưu khôi phục",
      desc: "Dữ liệu ERP (đơn hàng, tồn kho, kế toán VAS, nhân sự) là tài sản tối quan trọng của doanh nghiệp. Cơ chế bảo vệ dữ liệu bao gồm:",
      items: [
        { label: "Sao lưu tự động hàng ngày", text: "Dữ liệu được sao lưu định kỳ vào khung giờ thấp điểm và lưu giữ lịch sử khôi phục theo điểm thời gian (Point-in-time Recovery - PITR)." },
        { label: "Chiến lược sao lưu 3-2-1", text: "Tối thiểu 03 bản sao lưu, lưu trên 02 loại phương tiện độc lập và có ít nhất 01 bản lưu trữ Off-site tại trung tâm dữ liệu thứ hai." },
        { label: "Mã hóa đầu cuối", text: "Toàn bộ các bản snapshot cơ sở dữ liệu được mã hóa bằng thuật toán AES-256 trước khi đẩy sang kho lưu trữ đám mây an toàn." },
        { label: "Nhật ký kiểm toán bất biến (Immutable Audit Trail)", text: "Mọi thao tác sửa đổi chứng từ kế toán, xuất nhập kho hoặc phân quyền người dùng đều được ghi nhận vào sổ nhật ký không thể xóa sửa." }
      ]
    },
    sec4: {
      title: "4. Chuẩn an toàn cho nhân sự IT Onsite/Remote",
      desc: "Nhằm bảo vệ tuyệt đối bí mật kinh doanh khi doanh nghiệp sử dụng dịch vụ cho thuê nhân sự IT:",
      items: [
        { label: "Thỏa thuận bảo mật cá nhân (Individual NDA)", text: "100% kỹ sư IT trước khi bàn giao sang phía khách hàng đều phải ký cam kết bảo mật thông tin có giá trị pháp lý ràng buộc cá nhân." },
        { label: "Thiết bị làm việc chuẩn hóa", text: "Kỹ sư tuân thủ quy chế sử dụng máy tính của doanh nghiệp khách hàng hoặc máy tính do CreditBird cấp phát đã cài đặt phần mềm bảo mật mã hóa ổ đĩa (BitLocker/FileVault)." },
        { label: "Tuyệt đối không lưu trữ dữ liệu cá nhân", text: "Kỹ sư không được phép sao chép mã nguồn hoặc cơ sở dữ liệu của khách hàng sang thiết bị cá nhân hoặc USB ngoài phạm vi cấp phép." }
      ]
    },
    sec5: {
      title: "5. An ninh thiết bị máy phun IoT & HVAC",
      desc: "Các dòng máy phun tinh dầu thông minh có kết nối WiFi/App điều khiển từ xa được thiết kế an toàn:",
      items: [
        "Giao thức truyền thông mã hóa an toàn qua giao thức TLS/MQTT có chứng thực máy chủ.",
        "Cách ly thiết bị khỏi mạng nội bộ nhạy cảm của doanh nghiệp thông qua phân vùng mạng VLAN chuyên biệt.",
        "Firmware được ký số chính thức từ CreditBird, chống chèn mã độc hoặc chiếm quyền điều khiển trái phép."
      ]
    },
    sec6: {
      title: "6. Quy trình tiếp nhận & Xử lý lỗ hổng bảo mật",
      desc: "CreditBird hoan nghênh và đánh giá cao sự đóng góp của các chuyên gia bảo mật và cộng đồng trong việc phát hiện các nguy cơ an toàn thông tin. Nếu phát hiện lỗ hổng nghi vấn, Quý khách vui lòng gửi thông tin tới:",
      contact: {
        deptLabel: "Bộ phận An ninh Thông tin",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Mã số thuế",
        taxVal: "0315397327",
        hotlineLabel: "Hotline khẩn cấp",
        hotlineVal: "+84 932 640 968",
        emailLabel: "Email tiếp nhận",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "Thời gian phản hồi bước đầu",
        slaVal: "Trong vòng 24 giờ làm việc"
      }
    }
  },
  en: {
    sec1: {
      title: "1. ISO/IEC 27001 Information Security Framework",
      p1: "CreditBird establishes and maintains an Information Security Management System (ISMS) strictly aligned with <strong>ISO/IEC 27001</strong> standards and the <strong>Cybersecurity Law of Vietnam</strong>.",
      p2: "The entire delivery lifecycle—from talent vetting, requirement intake, infrastructure configuration, to source code handover—enforces three core security pillars:",
      pillars: {
        confidentiality: { title: "CONFIDENTIALITY", subtitle: "Access Control", desc: "Information is restricted solely to authorized personnel." },
        integrity: { title: "INTEGRITY", subtitle: "Tamper Proof", desc: "ERP accounting books and code repositories are tamper-evident." },
        availability: { title: "AVAILABILITY", subtitle: "99.9% Uptime", desc: "Mission-critical services guaranteed under SLA contractual terms." }
      }
    },
    sec2: {
      title: "2. Source Code Security & DevSecOps Pipeline",
      desc: "For custom software engineering and bespoke ERP implementations, CreditBird enforces a strict Secure Software Development Lifecycle (SSDLC):",
      items: [
        { label: "Isolated Code Repository Architecture", text: "Each client project is allocated an isolated repository with branch protection rules, requiring at least 2 Senior Tech Lead approvals prior to merge." },
        { label: "Automated Security Scanning", text: "Integrated Static Application Security Testing (SAST) detecting OWASP Top 10 vulnerabilities and Software Composition Analysis (SCA) to preempt open-source zero-day vulnerabilities." },
        { label: "Secret Leak Prevention", text: "Automated pre-commit hooks and CI pipelines blocking accidental check-ins of API keys, credentials, or secret tokens." },
        { label: "100% Clean Code Handover", text: "Source code delivery accompanied by verification reports ensuring zero high/critical vulnerabilities." }
      ]
    },
    sec3: {
      title: "3. ERP Data Security & Disaster Recovery (DRP)",
      desc: "Enterprise ERP records (sales transactions, inventory ledger, VAS accounting, and HR payroll) constitute mission-critical corporate assets. Protection protocols include:",
      items: [
        { label: "Automated Daily Backups", text: "Scheduled non-peak snapshots supporting Point-In-Time Recovery (PITR) to minimize data loss risk." },
        { label: "3-2-1 Enterprise Backup Strategy", text: "At least 3 copies across 2 independent media formats, with 1 off-site immutable archive hosted in a secondary Tier III data center." },
        { label: "End-to-End Encryption", text: "All database backups are strongly encrypted using AES-256 before upload to secure sovereign cloud storage." },
        { label: "Immutable Audit Trail", text: "Every ledger voucher amendment, inventory transaction, and access permission change is recorded in write-once audit logs." }
      ]
    },
    sec4: {
      title: "4. Security Standards for Onsite/Remote IT Staffing",
      desc: "To guarantee absolute protection of client intellectual property and commercial secrets during IT outsourcing contracts:",
      items: [
        { label: "Individual Non-Disclosure Agreements (Individual NDA)", text: "100% of deployed software engineers execute legally binding personal confidentiality covenants prior to project onboarding." },
        { label: "Standardized Secure Workstations", text: "Engineers operate exclusively on client-provisioned terminals or CreditBird corporate hardware equipped with BitLocker/FileVault full-disk encryption and MDM controls." },
        { label: "Zero Local Unauthorized Storage", text: "Engineers are strictly forbidden from copying client repositories or customer databases to personal hardware or unapproved USB media." }
      ]
    },
    sec5: {
      title: "5. Smart Commercial Diffusers & HVAC Security",
      desc: "Commercial scent diffusers featuring WiFi connectivity and mobile app orchestration are engineered with hardened IoT protocols:",
      items: [
        "Encrypted TLS/MQTT communication channels backed by mutual server authentication.",
        "Network isolation segregating diffusers onto dedicated IoT VLANs away from internal enterprise networks.",
        "Digitally signed firmware updates from CreditBird to prevent unauthorized firmware tampering or hijacking."
      ]
    },
    sec6: {
      title: "6. Security Vulnerability Reporting & Incident Handling",
      desc: "CreditBird welcomes responsible vulnerability disclosures from security researchers and the global developer community. To report potential security issues, please contact:",
      contact: {
        deptLabel: "Information Security Team",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "Tax ID",
        taxVal: "0315397327",
        hotlineLabel: "Emergency Hotline",
        hotlineVal: "+84 932 640 968",
        emailLabel: "Security Inquiries",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "Initial Response SLA",
        slaVal: "Within 24 business hours"
      }
    }
  },
  zh: {
    sec1: {
      title: "1. ISO/IEC 27001 信息安全管理框架",
      p1: "CreditBird 建立并严格运行符合 <strong>ISO/IEC 27001</strong> 国际标准与<strong>越南网络安全法</strong>的信息安全管理体系（ISMS）。",
      p2: "从 IT 人才甄选、软件需求对接、服务器基础架构配置到源代码交付的完整生命周期中，严格贯彻三项核心安全基石：",
      pillars: {
        confidentiality: { title: "机密性 (CONFIDENTIALITY)", subtitle: "访问权限控制", desc: "仅限获得明确授权的人员方可访问业务数据。" },
        integrity: { title: "完整性 (INTEGRITY)", subtitle: "防篡改保障", desc: "ERP 财务总账与代码仓库具备不可篡改性与防伪追溯。" },
        availability: { title: "可用性 (AVAILABILITY)", subtitle: "99.9% 在线率", desc: "严格履行 SLA 协议承诺，确保核心业务高可用运行。" }
      }
    },
    sec2: {
      title: "2. 源代码安全与 DevSecOps 流程",
      desc: "针对定制化软件工程及企业 ERP 深度客制项目，CreditBird 严格推行安全软件开发生命周期（SSDLC）：",
      items: [
        { label: "物理隔离代码仓库架构", text: "每个客户项目均建立独立的代码仓库，配置分支保护规则（Branch Protection Rules），必须经由至少 2 位资深技术主管评审批准方可合并。" },
        { label: "全自动安全漏洞扫描", text: "集成静态代码分析（SAST）侦测 OWASP Top 10 漏洞，配合软件成分分析（SCA）防范开源第三方组件的零日漏洞。" },
        { label: "敏感机密防泄露机制", text: "自动拦截包含 API 密钥、数据库账密及敏感令牌的提交与部署。" },
        { label: "100% 洁净交付标准", text: "交付最终源代码时，附带完整的漏洞扫描报告，确保零高危与致命漏洞（Zero High/Critical Vulnerabilities）。" }
      ]
    },
    sec3: {
      title: "3. ERP 数据安全与灾难恢复（DRP）",
      desc: "ERP 数据（订单记录、库存流转、VAS 会计凭证、组织架构）是企业的核心数字资产。多层防护机制包括：",
      items: [
        { label: "自动化每日备份", text: "在业务低峰时段自动创建快照，支持精细到任意秒级的时间点恢复（PITR）。" },
        { label: "3-2-1 黄金备份法则", text: "保持至少 3 份数据副本，存储在 2 种独立的介质类型上，且至少保留 1 份异地多活数据中心归档副本。" },
        { label: "端到端高强度加密", text: "数据库快照在传输至主权云存储库前，均采用 AES-256 算法进行端到端加密。" },
        { label: "不可篡改审计日志（Immutable Audit Trail）", text: "任何财务凭证调整、物料出入库及用户权限变更，均写入防篡改、不可删除的只读日志中。" }
      ]
    },
    sec4: {
      title: "4. IT 驻场/远程外包人才安全合规标准",
      desc: "当企业使用 CreditBird 的 IT 工程师驻场或离岸团队服务时，为绝对保障客户商业机密而采取以下措施：",
      items: [
        { label: "全员签署独立保密协议（Individual NDA）", text: "100% 派驻技术人员在进驻项目前均必须签署具备个人法律效力的保密契约。" },
        { label: "标准化安全办公设备", text: "工程师仅使用客户指定终端或由 CreditBird 统一部署、开启 BitLocker/FileVault 全盘加密并安装安全管控软件的工作电脑。" },
        { label: "杜绝任何本地私自存储", text: "严禁工程师私自将客户源代码或数据库转存至私人设备、个人云盘或未经授权的 USB 移动介质。" }
      ]
    },
    sec5: {
      title: "5. 智能 IoT 香氛扩香机与中央空调联动安全",
      desc: "支持 WiFi 远程控制及 App 联动管理的商用智能香氛设备均具备高规格安全设计：",
      items: [
        "采用经过双向证书校验的 TLS/MQTT 协议实现通信通道全程加密。",
        "通过划分专有 IoT VLAN 实现网络环境严格隔离，杜绝触碰企业内网核心资产。",
        "固件附带 CreditBird 官方数字签名，防止恶意代码注入与非法越权控制。"
      ]
    },
    sec6: {
      title: "6. 安全漏洞反馈与应急处置流程",
      desc: "CreditBird 诚挚欢迎白帽安全研究人员与技术社区共同维护系统安全。如发现疑似漏洞，请及时联络我们：",
      contact: {
        deptLabel: "信息安全办公室",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird 科技有限公司)",
        taxLabel: "税务登记代码",
        taxVal: "0315397327",
        hotlineLabel: "紧急联络热线",
        hotlineVal: "+84 932 640 968",
        emailLabel: "漏洞接收邮箱",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "初始响应时效",
        slaVal: "24个工作小时内"
      }
    }
  },
  ja: {
    sec1: {
      title: "1. ISO/IEC 27001 情報セキュリティフレームワーク",
      p1: "CreditBirdは、国際規格<strong>ISO/IEC 27001</strong>および<strong>ベトナムサイバーセキュリティ法</strong>に厳格に準拠した情報セキュリティマネジメントシステム（ISMS）を構築・維持しています。",
      p2: "ITエンジニアの採用・審査、ソフトウェア要件の策定、サーバーインフラ構成からソースコード納品に至る全開発ライフサイクルにおいて、厳格なセキュリティポリシーを遵守し、以下の3本柱を確実に維持します。",
      pillars: {
        confidentiality: { title: "機密性 (CONFIDENTIALITY)", subtitle: "アクセス制御", desc: "認可された権限者のみが業務データにアクセス可能です。" },
        integrity: { title: "完全性 (INTEGRITY)", subtitle: "改ざん防止", desc: "ERP会計データおよびソースコードの不正な改ざんを防止します。" },
        availability: { title: "可用性 (AVAILABILITY)", subtitle: "稼働率99.9%", desc: "SLA契約基準に基づき、常時高可用なサービス稼働を保証します。" }
      }
    },
    sec2: {
      title: "2. ソースコードセキュリティとDevSecOpsパイプライン",
      desc: "オーダーメイドソフトウェア開発およびカスタムERPプロジェクトにおいて、CreditBirdはセキュアソフトウェア開発ライフサイクル（SSDLC）を適用しています。",
      items: [
        { label: "完全分離リポジトリ設計", text: "クライアントプロジェクトごとに独立したリポジトリを割り当て、ブランチ保護ルール（Branch Protection Rules）を適用。本番マージにはシニアテックリード2名以上の承認を義務付けています。" },
        { label: "自動セキュリティスキャン", text: "静的アプリケーションセキュリティテスト（SAST）によりOWASP Top 10の脆弱性を検出し、ソフトウェア構成分析（SCA）によりOSSライブラリのゼロデイ脆弱性を遮断します。" },
        { label: "シークレット漏洩の防止", text: "APIキー、データベース認証情報、シークレットトークンを含むコミットを自動遮断するCI/CDフックを常備。" },
        { label: "100%クリーンな納品", text: "クライアントへのソースコード納品時には、重大な脆弱性ゼロ（Zero High/Critical Vulnerabilities）の監査レポートを添えて引き渡します。" }
      ]
    },
    sec3: {
      title: "3. ERPデータ保護とディザスタリカバリ（DRP）",
      desc: "ERPデータ（受注、在庫、VAS会計帳簿、人事データ）は企業の最も重要な資産です。データ保護メカニズムには以下が含まれます。",
      items: [
        { label: "日次自動バックアップ", text: "オフピーク時に定期スナップショットを作成し、特定時点への復元（Point-In-Time Recovery - PITR）を支援します。" },
        { label: "3-2-1エンタープライズバックアップ戦略", text: "3つ以上のデータコピーを、2つの独立したストレージメディアに保存し、少なくとも1つは別地域のオフサイトデータセンターに保管します。" },
        { label: "エンドツーエンド暗号化", text: "すべてのデータベーススナップショットは、クラウド保管庫に転送される前にAES-256規格で暗号化されます。" },
        { label: "改ざん不可能な監査証跡（Immutable Audit Trail）", text: "会計伝票の修正、入出庫の記録、ユーザー権限の変更はすべて、改ざん・削除が不可能な不変ログに記録されます。" }
      ]
    },
    sec4: {
      title: "4. IT人材派遣・常駐（Onsite/Remote）のセキュリティ基準",
      desc: "IT人材派遣・常駐サービスをご利用いただく際、クライアントの企業秘密を完全に保護するため以下の対策を実施しています。",
      items: [
        { label: "個人機密保持契約（個別NDA）", text: "派遣されるすべてのエンジニアは、プロジェクト参画前に法的拘束力を持つ個人秘密保持契約（NDA）を締結します。" },
        { label: "標準化された安全な作業端末", text: "クライアント企業の支給PC、またはCreditBird支給のBitLocker/FileVault暗号化およびMDM制御が施されたセキュア端末のみを使用します。" },
        { label: "個人端末へのデータ保存の完全禁止", text: "業務コードやデータベースを個人の端末やUSBメモリ等の外部記録媒体に複製・保存することを厳格に禁止しています。" }
      ]
    },
    sec5: {
      title: "5. スマートIoT業務用ディフューザー＆空調設備セキュリティ",
      desc: "WiFiおよびアプリ経由で遠隔管理可能なスマートアロマディフューザーは、安全なIoT設計を採用しています。",
      items: [
        "サーバー相互認証を備えたセキュアなTLS/MQTTプロトコルによる通信の暗号化。",
        "専用のIoT VLANによるネットワーク分離を行い、企業の基幹内部ネットワークから完全に隔離。",
        "CreditBird公式のデジタル署名入りファームウェアにより、不正な改ざんや乗っ取りを防止。"
      ]
    },
    sec6: {
      title: "6. セキュリティ脆弱性の報告と対応プロセス",
      desc: "CreditBirdは、セキュリティ研究者やコミュニティからの脆弱性報告を歓迎し、迅速に対処します。疑わしい脆弱性を発見された場合は、下記窓口までご連絡ください。",
      contact: {
        deptLabel: "情報セキュリティ担当",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "税務コード",
        taxVal: "0315397327",
        hotlineLabel: "緊急ホットライン",
        hotlineVal: "+84 932 640 968",
        emailLabel: "報告受付窓口",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "初期応答時間",
        slaVal: "24営業時間以内"
      }
    }
  },
  ko: {
    sec1: {
      title: "1. ISO/IEC 27001 정보보안 관리 체계",
      p1: "CreditBird는 국제 표준 <strong>ISO/IEC 27001</strong> 및 <strong>베트남 사이버안보법</strong>을 엄격히 준수하는 정보보안 관리체계(ISMS)를 구축 및 운영하고 있습니다.",
      p2: "IT 전문 인력 검증, 소프트웨어 요구사항 수립, 서버 인프라 구성부터 소스 코드 인수인계에 이르는 전 과정에서 엄격한 보안 통제 정책을 적용하여 3대 핵심 원칙을 보장합니다:",
      pillars: {
        confidentiality: { title: "기밀성 (CONFIDENTIALITY)", subtitle: "접근 권한 통제", desc: "인가된 담당자만이 승인된 데이터에 접근할 수 있습니다." },
        integrity: { title: "무결성 (INTEGRITY)", subtitle: "위변조 방지", desc: "ERP 회계 원장 및 소스 코드의 무단 수정을 원천 차단합니다." },
        availability: { title: "가용성 (AVAILABILITY)", subtitle: "99.9% 가동 보장", desc: "SLA 계약 기준에 따른 중단 없는 미션 크리티컬 서비스를 지원합니다." }
      }
    },
    sec2: {
      title: "2. 소스 코드 보안 및 DevSecOps 파이프라인",
      desc: "맞춤형 소프트웨어 엔지니어링 및 커스텀 ERP 프로젝트를 위해 CreditBird는 엄격한 보안 소프트웨어 개발 수명주기(SSDLC)를 적용합니다:",
      items: [
        { label: "격리된 코드 저장소 구조", text: "고객 프로젝트별로 독립된 Git 저장소를 배정하고 브랜치 보호 규칙(Branch Protection)을 설정하여, 2인 이상의 시니어 테크 리드 승인 후에만 병합되도록 제한합니다." },
        { label: "자동화 보안 취약점 점검", text: "정적 분석(SAST)으로 OWASP Top 10 취약점을 조기 발견하고, 소프트웨어 구성 분석(SCA)을 통해 오픈소스 라이브러리의 제로데이 위협을 사전 차단합니다." },
        { label: "보안 시크릿 유출 차단", text: "API 키, 데이터베이스 자격 증명, 보안 토큰이 포함된 커밋을 사전에 감지하고 차단하는 자동화 파이프라인을 운영합니다." },
        { label: "100% 클린 코드 인도", text: "최종 소스 코드 인수인계 시 고위험/치명적 취약점 0건(Zero High/Critical) 검증 보고서를 첨부합니다." }
      ]
    },
    sec3: {
      title: "3. ERP 데이터 보안 및 재해 복구(DRP)",
      desc: "ERP 데이터(주문, 재고, 베트남 회계 기준 VAS 전표, 인사 정보)는 기업의 가장 핵심적인 자산입니다. 다층 보호 체계는 다음과 같습니다:",
      items: [
        { label: "일일 자동 백업", text: "업무 유휴 시간대에 자동 스냅샷을 생성하며, 특정 시점 복구(Point-In-Time Recovery - PITR)를 지원합니다." },
        { label: "3-2-1 엔터프라이즈 백업 원칙", text: "최소 3벌의 복사본을 2가지 서로 다른 미디어에 보관하고, 최소 1벌은 원격지 데이터센터에 오프사이트 보관합니다." },
        { label: "엔드투엔드 데이터 암호화", text: "클라우드 저장소에 보관되기 전 모든 데이터베이스 스냅샷은 AES-256 알고리즘으로 강력하게 암호화됩니다." },
        { label: "불변 감사 로그(Immutable Audit Trail)", text: "회계 전표 수정, 재고 입출고, 사용자 권한 변경 이력은 임의 삭제나 위변조가 불가능한 불변 감사 로그에 기록됩니다." }
      ]
    },
    sec4: {
      title: "4. IT 파견/상주(Onsite & Remote) 인력 보안 규정",
      desc: "IT 인재 파견 및 외주 인력 서비스를 이용하실 때 고객사의 핵심 영업비밀을 철저히 보호하기 위한 조치입니다:",
      items: [
        { label: "개인별 비밀유지서약서(Individual NDA)", text: "투입되는 모든 엔지니어는 프로젝트 투입 전 법적 구속력을 갖는 개인 비밀유지서약서(NDA)를 100% 체결합니다." },
        { label: "표준화된 보안 업무 단말기", text: "고객사 지정 단말기 또는 BitLocker/FileVault 디스크 암호화 및 보안 정책이 적용된 CreditBird 공식 업무용 PC만 사용합니다." },
        { label: "개인 장비 무단 저장 절대 금지", text: "고객사의 소스 코드 및 데이터베이스를 개인 장비나 인가되지 않은 USB 등 외장 저장장치로 복제하는 행위를 원천 금지합니다." }
      ]
    },
    sec5: {
      title: "5. 스마트 IoT 디퓨저 및 공조기(HVAC) 연동 보안",
      desc: "Wi-Fi 및 모바일 앱으로 원격 제어되는 스마트 향기 디퓨저는 견고한 IoT 보안 설계를 갖추고 있습니다:",
      items: [
        "상호 인증을 지원하는 보안 TLS/MQTT 프로토콜을 통한 통신 데이터 전송 암호화.",
        "전용 IoT VLAN 망 분리를 통해 기업의 내부 업무 네트워크로부터 안전하게 격리.",
        "CreditBird 공식 디지털 서명이 적용된 펌웨어로 악성코드 삽입 및 무단 원격 탈취 방지."
      ]
    },
    sec6: {
      title: "6. 보안 취약점 신고 및 대응 절차",
      desc: "CreditBird는 보안 전문가 및 커뮤니티의 취약점 제보를 적극 환영하며 안전한 생태계를 지향합니다. 잠재적 취약점을 발견하신 경우 아래 채널로 문의해 주시기 바랍니다:",
      contact: {
        deptLabel: "정보보안 담당",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "사업자등록번호",
        taxVal: "0315397327",
        hotlineLabel: "긴급 핫라인",
        hotlineVal: "+84 932 640 968",
        emailLabel: "접수 이메일",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "1차 대응 기한",
        slaVal: "영업일 기준 24시간 이내"
      }
    }
  },
  th: {
    sec1: {
      title: "1. กรอบความมั่นคงปลอดภัยสารสนเทศ ISO/IEC 27001",
      p1: "CreditBird จัดทำและรักษาระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ให้สอดคล้องกับมาตรฐานสากล <strong>ISO/IEC 27001</strong> และ<strong>กฎหมายความปลอดภัยทางไซเบอร์ของเวียดนาม</strong>อย่างเคร่งครัด",
      p2: "วงจรการส่งมอบงานทั้งหมด ตั้งแต่การคัดกรองบุคลากร IT, การรับข้อกำหนดซอฟต์แวร์, การกำหนดค่าโครงสร้างพื้นฐานเซิร์ฟเวอร์ ไปจนถึงการส่งมอบซอร์สโค้ด ยึดมั่นใน 3 เสาหลักด้านความปลอดภัยอย่างเข้มงวด:",
      pillars: {
        confidentiality: { title: "การรักษาความลับ (CONFIDENTIALITY)", subtitle: "การควบคุมการเข้าถึง", desc: "เฉพาะบุคลากรที่ได้รับมอบอำนาจอย่างเป็นทางการเท่านั้นที่มีสิทธิ์เข้าถึงข้อมูลทางธุรกิจ" },
        integrity: { title: "ความถูกต้องสมบูรณ์ (INTEGRITY)", subtitle: "การป้องกันการดัดแปลงแก้ไข", desc: "สมุดบัญชี ERP และคลังซอร์สโค้ดได้รับการปกป้องจากการแก้ไขโดยไม่ได้รับอนุญาตและตรวจสอบย้อนกลับได้" },
        availability: { title: "ความพร้อมใช้งาน (AVAILABILITY)", subtitle: "อัตราความพร้อมทำงาน 99.9%", desc: "รับประกันการให้บริการระบบงานสำคัญอย่างต่อเนื่องตามข้อตกลงระดับการบริการ (SLA)" }
      }
    },
    sec2: {
      title: "2. ความปลอดภัยของซอร์สโค้ดและกระบวนการ DevSecOps",
      desc: "สำหรับการพัฒนาซอฟต์แวร์แบบเฉพาะทางและการปรับแต่งระบบ ERP องค์กร CreditBird บังคับใช้วงจรการพัฒนาซอฟต์แวร์ที่มั่นคงปลอดภัย (Secure Software Development Lifecycle - SSDLC):",
      items: [
        { label: "สถาปัตยกรรมคลังโค้ดแบบแยกส่วน (Isolated Repository)", text: "แต่ละโครงการของลูกค้าจะได้รับคลังเก็บโค้ดแยกต่างหาก พร้อมกฎการปกป้องสาขา (Branch Protection Rules) โดยต้องได้รับการอนุมัติจาก Senior Tech Lead อย่างน้อย 2 ท่านก่อนการผสานโค้ด" },
        { label: "การสแกนความปลอดภัยอัตโนมัติ", text: "ผสานรวมเครื่องมือวิเคราะห์โค้ดแบบคงที่ (SAST) เพื่อตรวจจับช่องโหว่ OWASP Top 10 พร้อมการวิเคราะห์องค์ประกอบซอฟต์แวร์ (SCA) เพื่อป้องกันช่องโหว่ Zero-day ในแพ็กเกจโอเพนซอร์ส" },
        { label: "การป้องกันข้อมูลลับและกุญแจรั่วไหล", text: "ระบบสกัดกั้นการคอมมิตที่มี API Keys, รหัสผ่านฐานข้อมูล หรือ Secret Tokens โดยอัตโนมัติ" },
        { label: "ส่งมอบโค้ดสะอาด 100%", text: "ส่งมอบซอร์สโค้ดให้แก่ลูกค้าพร้อมรายงานผลการตรวจสอบความปลอดภัยที่ผ่านการรับรองปราศจากช่องโหว่ระดับสูงหรือวิกฤต (Zero High/Critical Vulnerabilities)" }
      ]
    },
    sec3: {
      title: "3. ความปลอดภัยของข้อมูล ERP และการสำรองกู้คืน (DRP)",
      desc: "ข้อมูล ERP (คำสั่งซื้อ, สินค้าคงคลัง, บัญชี VAS, ข้อมูลบุคคล) คือสินทรัพย์ดิจิทัลที่สำคัญที่สุด กลไกการปกป้องประกอบด้วย:",
      items: [
        { label: "การสำรองข้อมูลอัตโนมัติรายวัน", text: "จัดทำสแนปช็อตเป็นประจำในช่วงเวลาที่มีการใช้งานต่ำ และรองรับการกู้คืนข้อมูลย้อนหลัง ณ จุดเวลาที่ต้องการ (Point-in-Time Recovery - PITR)" },
        { label: "กลยุทธ์สำรองข้อมูลองค์กร 3-2-1", text: "เก็บสำเนาข้อมูลอย่างน้อย 3 ชุด บนสื่อบันทึกข้อมูลอิสระ 2 ประเภท และมีสำรองไว้นอกสถานที่ (Off-site) ณ ศูนย์ข้อมูลแห่งที่สองอย่างน้อย 1 ชุด" },
        { label: "การเข้ารหัสข้อมูลแบบต้นทางถึงปลายทาง (End-to-End Encryption)", text: "สแนปช็อตฐานข้อมูลทั้งหมดได้รับการเข้ารหัสด้วยอัลกอริทึม AES-256 ก่อนส่งไปยังพื้นที่จัดเก็บข้อมูลบนคลาวด์ที่ปลอดภัย" },
        { label: "บันทึกการตรวจสอบที่ไม่สามารถแก้ไขได้ (Immutable Audit Trail)", text: "ประวัติการแก้ไขเอกสารทางบัญชี การเบิกจ่ายสินค้า และการปรับเปลี่ยนสิทธิ์ผู้ใช้จะถูกบันทึกในระบบบันทึกที่ไม่สามารถลบหรือดัดแปลงได้" }
      ]
    },
    sec4: {
      title: "4. มาตรฐานความปลอดภัยสำหรับบุคลากร IT ประจำการ/ระยะไกล (Onsite & Remote)",
      desc: "เพื่อปกป้องความลับทางการค้าของลูกค้าอย่างสมบูรณ์เมื่อใช้บริการจัดหาบุคลากร IT ของ CreditBird:",
      items: [
        { label: "ข้อตกลงการรักษาความลับรายบุคคล (Individual NDA)", text: "วิศวกร IT 100% ต้องลงนามในข้อตกลงการรักษาความลับที่มีผลผูกพันทางกฎหมายเฉพาะบุคคลก่อนเริ่มปฏิบัติงานในโครงการ" },
        { label: "อุปกรณ์ทำงานมาตรฐานความปลอดภัยสูง", text: "วิศวกรต้องใช้อุปกรณ์ที่ลูกค้ากำหนด หรือคอมพิวเตอร์ที่ CreditBird จัดสรรซึ่งติดตั้งระบบเข้ารหัสฮาร์ดดิสก์ (BitLocker/FileVault) และซอฟต์แวร์ควบคุมความปลอดภัย" },
        { label: "ห้ามจัดเก็บข้อมูลในอุปกรณ์ส่วนตัวเด็ดขาด", text: "ห้ามวิศวกรคัดลอกซอร์สโค้ดหรือฐานข้อมูลของลูกค้าไปยังอุปกรณ์ส่วนบุคคลหรือ USB โดยไม่ได้รับอนุญาตโดยเด็ดขาด" }
      ]
    },
    sec5: {
      title: "5. ความปลอดภัยของอุปกรณ์กระจายกลิ่น IoT และระบบปรับอากาศ HVAC",
      desc: "เครื่องกระจายกลิ่นน้ำมันหอมระเหยอัจฉริยะเชิงพาณิชย์ที่เชื่อมต่อ WiFi และควบคุมผ่านแอป ได้รับการออกแบบตามมาตรฐานความปลอดภัย IoT:",
      items: [
        "ช่องทางการสื่อสารที่เข้ารหัสอย่างปลอดภัยผ่านโปรโตคอล TLS/MQTT พร้อมการรับรองความถูกต้องของเซิร์ฟเวอร์",
        "การแยกอุปกรณ์ออกจากเครือข่ายภายในที่ละเอียดอ่อนขององค์กรผ่านการกำหนด VLAN สำหรับ IoT โดยเฉพาะ",
        "เฟิร์มแวร์ลงนามดิจิทัลอย่างเป็นทางการจาก CreditBird ป้องกันการแทรกมัลแวร์หรือการเข้าควบคุมโดยไม่ได้รับอนุญาต"
      ]
    },
    sec6: {
      title: "6. กระบวนการรับและจัดการช่องโหว่ความปลอดภัย",
      desc: "CreditBird ยินดีรับรายงานช่องโหว่จากนักวิจัยด้านความปลอดภัยและชุมชนเทคโนโลยี หากท่านพบช่องโหว่ที่น่าสงสัย โปรดติดต่อฝ่ายความปลอดภัยข้อมูล:",
      contact: {
        deptLabel: "ฝ่ายความมั่นคงปลอดภัยสารสนเทศ",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "เลขประจำตัวผู้เสียภาษี",
        taxVal: "0315397327",
        hotlineLabel: "สายด่วนฉุกเฉิน",
        hotlineVal: "+84 932 640 968",
        emailLabel: "อีเมลรับรายงาน",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "เวลาตอบกลับเบื้องต้น",
        slaVal: "ภายใน 24 ชั่วโมงทำการ"
      }
    }
  },
  lo: {
    sec1: {
      title: "1. ໂຄງຮ່າງຄວາມປອດໄພຂໍ້ມູນ ISO/IEC 27001",
      p1: "CreditBird ສ້າງຕັ້ງ ແລະ ຮັກສາລະບົບບໍລິຫານຈັດການຄວາມປອດໄພຂໍ້ມູນ (ISMS) ທີ່ສອດຄ່ອງກັບມາດຕະຖານສາກົນ <strong>ISO/IEC 27001</strong> ແລະ <strong>ກົດໝາຍວ່າດ້ວຍຄວາມປອດໄພທາງໄຊເບີຂອງຫວຽດນາມ</strong> ຢ່າງເຂັ້ມງວດ.",
      p2: "ວົງຈອນການສົ່ງມອບວຽກທັງໝົດ ຕັ້ງແຕ່ການຄັດເລືອກບຸກຄະລາກອນ IT, ການຮັບຄວາມຕ້ອງການຊອບແວ, ການກຳນົດຄ່າພື້ນຖານໂຄງລ່າງເຊີບເວີ ຈົນເຖິງການມອບຮັບຊອດໂຄ້ດ ແມ່ນປະຕິບັດຕາມ 3 ເສົາຄ້ຳຄວາມປອດໄພຫຼັກ:",
      pillars: {
        confidentiality: { title: "ການຮັກສາຄວາມລັບ (CONFIDENTIALITY)", subtitle: "ການຄວບຄຸມການເຂົ້າເຖິງ", desc: "ສະເພາະບຸກຄົນທີ່ໄດ້ຮັບອະນຸຍາດເທົ່ານັ້ນທີ່ສາມາດເຂົ້າເຖິງຂໍ້ມູນທຸລະກິດໄດ້." },
        integrity: { title: "ຄວາມຖືກຕ້ອງສົມບູນ (INTEGRITY)", subtitle: "ປ້ອງກັນການດັດແກ້", desc: "ປຶ້ມບັນຊີ ERP ແລະ ຄັງເກັບຊອດໂຄ້ດໄດ້ຮັບການປົກປ້ອງຈາກການແກ້ໄຂໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ." },
        availability: { title: "ຄວາມພ້ອມໃຊ້ງານ (AVAILABILITY)", subtitle: "ອັດຕາເຮັດວຽກ 99.9%", desc: "ຮັບປະກັນການບໍລິການລະບົບທີ່ສຳຄັນຢ່າງຕໍ່ເນື່ອງຕາມສັນຍາ SLA." }
      }
    },
    sec2: {
      title: "2. ຄວາມປອດໄພຂອງຊອດໂຄ້ດ & ຂະບວນການ DevSecOps",
      desc: "ສຳລັບໂຄງການພັດທະນາຊອບແວຕາມສັ່ງ ແລະ ລະບົບ ERP ສະເພາະ, CreditBird ນຳໃຊ້ວົງຈອນການພັດທະນາຊອບແວທີ່ປອດໄພ (SSDLC):",
      items: [
        { label: "ສະຖາປັດຕະຍະກຳຄັງໂຄ້ດແຍກຕ່າງຫາກ", text: "ແຕ່ລະໂຄງການຂອງລູກຄ້າຈະມີ Repository ແຍກຕ່າງຫາກ ພ້ອມກົດປ້ອງກັນສາຂາ (Branch Protection Rules), ຕ້ອງຜ່ານການອະນຸມັດຈາກ Senior Tech Lead ຢ່າງໜ້ອຍ 2 ທ່ານກ່ອນລວມໂຄ້ດ." },
        { label: "ການກວດສອບຄວາມປອດໄພອັດຕະໂນມັດ", text: "ເຊື່ອມໂຍງເຄື່ອງມືກວດສອບໂຄ້ດແບບຄົງທີ່ (SAST) ເພື່ອກວດຈັບຊ່ອງໂຫວ່ OWASP Top 10 ແລະ ກວດສອບອົງປະກອບ (SCA) ເພື່ອປ້ອງກັນຊ່ອງໂຫວ່ Zero-day ໃນ Open-Source." },
        { label: "ປ້ອງກັນຂໍ້ມູນລັບ ແລະ ລະຫັດຮົ່ວໄຫຼ", text: "ສະກັດກັ້ນການ Commit ທີ່ມີ API Keys, ລະຫັດຜ່ານຖານຂໍ້ມູນ ຫຼື Secret Tokens ໂດຍອັດຕະໂນມັດ." },
        { label: "ສົ່ງມອບໂຄ້ດສະອາດ 100%", text: "ສົ່ງມອບຊອດໂຄ້ດພ້ອມບົດລາຍງານການກວດສອບຄວາມປອດໄພ ທີ່ຮັບປະກັນບໍ່ມີຊ່ອງໂຫວ່ລະດັບສູງ ຫຼື ວິກິດ (Zero High/Critical Vulnerabilities)." }
      ]
    },
    sec3: {
      title: "3. ຄວາມປອດໄພຂອງຂໍ້ມູນ ERP & ການສຳຮອງກູ້ຄືນ (DRP)",
      desc: "ຂໍ້ມູນ ERP (ຄຳສັ່ງຊື້, ຄັງສິນຄ້າ, ບັນຊີ VAS, ຂໍ້ມູນບຸກຄະລາກອນ) ແມ່ນຊັບສິນທີ່ສຳຄັນທີ່ສຸດຂອງທຸລະກິດ. ກົນໄກການປົກປ້ອງປະກອບມີ:",
      items: [
        { label: "ການສຳຮອງຂໍ້ມູນອັດຕະໂນມັດປະຈຳວັນ", text: "ສ້າງ Snapshot ຂໍ້ມູນໃນຊ່ວງເວລາທີ່ມີການໃຊ້ງານຕ່ຳ ແລະ ຮອງຮັບການກູ້ຄືນຂໍ້ມູນຕາມຈຸດເວລາທີ່ຕ້ອງການ (PITR)." },
        { label: "ຍຸດທະສາດການສຳຮອງຂໍ້ມູນ 3-2-1", text: "ຮັກສາສຳເນົາຂໍ້ມູນຢ່າງໜ້ອຍ 3 ຊຸດ ໃນ 2 ສື່ບັນທຶກທີ່ແຕກຕ່າງກັນ ແລະ ມີຢ່າງໜ້ອຍ 1 ຊຸດເກັບຮັກສາຢູ່ນອກສະຖານທີ່ (Off-site) ທີ່ສູນຂໍ້ມູນແຫ່ງທີສອງ." },
        { label: "ການເຂົ້າລະຫັດຂໍ້ມູນຕົ້ນທາງຮອດປາຍທາງ", text: "Snapshot ຖານຂໍ້ມູນທັງໝົດຖືກເຂົ້າລະຫັດດ້ວຍມາດຕະຖານ AES-256 ກ່ອນສົ່ງໄປຍັງ Cloud Storage ທີ່ປອດໄພ." },
        { label: "ບັນທຶກການກວດສອບທີ່ດັດແກ້ບໍ່ໄດ້ (Immutable Audit Trail)", text: "ປະຫວັດການແກ້ໄຂເອກະສານບັນຊີ, ການເຄື່ອນໄຫວສິນຄ້າ ແລະ ການປ່ຽນສິດຜູ້ໃຊ້ ຈະຖືກບັນທຶກໃນລະບົບທີ່ບໍ່ສາມາດລຶບ ຫຼື ແກ້ໄຂໄດ້." }
      ]
    },
    sec4: {
      title: "4. ມາດຕະຖານຄວາມປອດໄພສຳລັບບຸກຄະລາກອນ IT ປະຈຳການ/ໄລຍະໄກ (Onsite & Remote)",
      desc: "ເພື່ອປົກປ້ອງຄວາມລັບທາງທຸລະກິດຂອງລູກຄ້າຢ່າງສົມບູນ ເມື່ອນຳໃຊ້ບໍລິການບຸກຄະລາກອນ IT ຂອງ CreditBird:",
      items: [
        { label: "ສັນຍາຮັກສາຄວາມລັບສ່ວນບຸກຄົນ (Individual NDA)", text: "ວິສະວະກອນ IT 100% ຕ້ອງເຊັນສັນຍາຮັກສາຄວາມລັບທີ່ມີຜົນຜູກພັນທາງກົດໝາຍສະເພາະບຸກຄົນກ່ອນເລີ່ມປະຕິບັດງານໃນໂຄງການ." },
        { label: "ອຸປະກອນເຮັດວຽກມາດຕະຖານຄວາມປອດໄພ", text: "ນຳໃຊ້ອຸປະກອນທີ່ລູກຄ້າກຳນົດ ຫຼື ຄອມພິວເຕີທີ່ CreditBird ສະໜອງໃຫ້ ເຊິ່ງໄດ້ຕິດຕັ້ງລະບົບເຂົ້າລະຫັດຮາດດິດ (BitLocker/FileVault) ແລະ ຊອບແວຄວບຄຸມຄວາມປອດໄພ." },
        { label: "ຫ້າມບັນທຶກຂໍ້ມູນໃນອຸປະກອນສ່ວນຕົວເດັດຂາດ", text: "ຫ້າມວິສະວະກອນຄັດລອກຊອດໂຄ້ດ ຫຼື ຖານຂໍ້ມູນຂອງລູກຄ້າໄປຍັງອຸປະກອນສ່ວນຕົວ ຫຼື USB ໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດເດັດຂາດ." }
      ]
    },
    sec5: {
      title: "5. ຄວາມປອດໄພຂອງອຸປະກອນກະຈາຍກິ່ນ IoT & ລະບົບ HVAC",
      desc: "ເຄື່ອງກະຈາຍກິ່ນນ້ຳມັນຫອມລະເຫີຍອັດສະລິຍະທີ່ເຊື່ອມຕໍ່ WiFi ແລະ ແອັບ ໄດ້ຮັບການອອກແບບຕາມມາດຕະຖານຄວາມປອດໄພ IoT:",
      items: [
        "ຊ່ອງທາງການສື່ສານທີ່ເຂົ້າລະຫັດປອດໄພຜ່ານໂປຣໂຕຄອນ TLS/MQTT ພ້ອມການຢັ້ງຢືນເຊີບເວີ.",
        "ການແຍກອຸປະກອນອອກຈາກເຄືອຂ່າຍພາຍໃນຂອງທຸລະກິດຜ່ານການກຳນົດ IoT VLAN ສະເພາະ.",
        "ເຟີມແວລົງນາມດິຈິຕອນຢ່າງເປັນທາງການຈາກ CreditBird ປ້ອງກັນການແຊກແຊງ ຫຼື ຄວບຄຸມໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ."
      ]
    },
    sec6: {
      title: "6. ຂະບວນການຮັບ ແລະ ແກ້ໄຂຊ່ອງໂຫວ່ຄວາມປອດໄພ",
      desc: "CreditBird ຍິນດີຕ້ອນຮັບການລາຍງານຊ່ອງໂຫວ່ຈາກນັກວິໄຈ ແລະ ຊຸມຊົນ. ຫາກທ່ານພົບເຫັນຊ່ອງໂຫວ່, ກະລຸນາຕິດຕໍ່ພະແນກຄວາມປອດໄພຂໍ້ມູນ:",
      contact: {
        deptLabel: "ພະແນກຄວາມປອດໄພຂໍ້ມູນ",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "ລະຫັດປະຈຳຕົວຜູ້ເສຍພາສີ",
        taxVal: "0315397327",
        hotlineLabel: "ສາຍດ່ວນສຸກເສີນ",
        hotlineVal: "+84 932 640 968",
        emailLabel: "ອີເມວຮັບລາຍງານ",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "ເວລາຕອບກັບເບື້ອງຕົ້ນ",
        slaVal: "ພາຍໃນ 24 ຊົ່ວໂມງລັດຖະການ"
      }
    }
  },
  ms: {
    sec1: {
      title: "1. Rangka Kerja Keselamatan Maklumat ISO/IEC 27001",
      p1: "CreditBird menubuhkan dan mengekalkan Sistem Pengurusan Keselamatan Maklumat (ISMS) yang mematuhi piawaian antarabangsa <strong>ISO/IEC 27001</strong> dan peruntukan <strong>Undang-undang Keselamatan Siber Vietnam</strong> secara ketat.",
      p2: "Seluruh kitaran hayat penyampaian—daripada saringan bakat IT, penerimaan keperluan perisian, konfigurasi infrastruktur pelayan hingga penyerahan kod sumber—menguatkuasakan tiga tonggak keselamatan teras:",
      pillars: {
        confidentiality: { title: "KERAHSIAN (CONFIDENTIALITY)", subtitle: "Kawalan Akses", desc: "Hanya kakitangan yang diberi kuasa sahaja dibenarkan mengakses data perniagaan." },
        integrity: { title: "INTEGRITI (INTEGRITY)", subtitle: "Kalis Gangguan", desc: "Buku lejar perakaunan ERP dan repositori kod dilindungi daripada pengubahsuaian tanpa izin." },
        availability: { title: "KEBOLEHSEDIAAN (AVAILABILITY)", subtitle: "Masa Operasi 99.9%", desc: "Perkhidmatan misi kritikal dijamin beroperasi berterusan di bawah terma kontrak SLA." }
      }
    },
    sec2: {
      title: "2. Keselamatan Kod Sumber & Saluran DevSecOps",
      desc: "Bagi kejuruteraan perisian tersuai dan pelaksanaan ERP khusus, CreditBird menguatkuasakan Kitaran Hayat Pembangunan Perisian Selamat (SSDLC):",
      items: [
        { label: "Seni Bina Repositori Kod Terasing", text: "Setiap projek pelanggan diperuntukkan Repositori berasingan dengan Peraturan Perlindungan Cawangan (Branch Protection Rules), memerlukan kelulusan sekurang-kurangnya 2 Senior Tech Lead sebelum penggabungan kod." },
        { label: "Imbasan Keselamatan Automatik", text: "Mengintegrasikan alat analisis kod statik (SAST) untuk mengesan kelemahan OWASP Top 10 dan analisis komposisi perisian (SCA) bagi menyekat ancaman zero-day dalam pakej sumber terbuka." },
        { label: "Pencegahan Kebocoran Rahsia & Kunci", text: "Menyekat secara automatik sebarang komit yang mengandungi Kunci API, kelayakan pangkalan data atau Token Rahsia." },
        { label: "Penyerahan Bersih 100%", text: "Penyerahan kod sumber kepada pelanggan disertakan dengan laporan audit keselamatan yang mengesahkan tiada kerentanan kritikal atau tinggi (Zero High/Critical Vulnerabilities)." }
      ]
    },
    sec3: {
      title: "3. Keselamatan Data ERP & Sandaran Pemulihan (DRP)",
      desc: "Data ERP (pesanan, inventori, lejar perakaunan VAS, data kakitangan) merupakan aset terpenting perniagaan. Mekanisme perlindungan data merangkumi:",
      items: [
        { label: "Sandaran Harian Automatik", text: "Mencipta syot kilat (snapshot) secara berkala semasa waktu luar puncak dan menyokong pemulihan pada titik masa tertentu (Point-in-Time Recovery - PITR)." },
        { label: "Strategi Sandaran Perusahaan 3-2-1", text: "Mengekalkan sekurang-kurangnya 3 salinan data, disimpan pada 2 jenis media berbeza dan sekurang-kurangnya 1 salinan disimpan di luar tapak (Off-site) di pusat data sekunder." },
        { label: "Penyulitan Hujung-ke-Hujung", text: "Semua syot kilat pangkalan data disulitkan dengan algoritma AES-256 sebelum dihantar ke storan awan yang selamat." },
        { label: "Jejak Audit Tidak Boleh Diubah (Immutable Audit Trail)", text: "Sebarang pengubahsuaian dokumen perakaunan, pergerakan inventori dan perubahan kebenaran pengguna direkodkan dalam log kekal yang tidak boleh dipadam." }
      ]
    },
    sec4: {
      title: "4. Piawaian Keselamatan untuk Tenaga Kerja IT Di Tapak/Jauh",
      desc: "Bagi melindungi rahsia perdagangan pelanggan apabila menggunakan perkhidmatan penyumberan luar tenaga kerja IT CreditBird:",
      items: [
        { label: "Perjanjian Kerahsiaan Individu (Individual NDA)", text: "100% jurutera IT mesti menandatangani perjanjian kerahsiaan yang mengikat secara sah sebelum menyertai projek pelanggan." },
        { label: "Peralatan Kerja Piawai & Selamat", text: "Jurutera hanya menggunakan komputer yang ditetapkan oleh pelanggan atau dibekalkan oleh CreditBird yang dilengkapi penyulitan cakera penuh (BitLocker/FileVault) dan perisian keselamatan." },
        { label: "Larangan Menyimpan Data pada Peranti Peribadi", text: "Jurutera dilarang keras menyalin kod sumber atau pangkalan data pelanggan ke peranti peribadi atau pemacu USB tanpa kebenaran." }
      ]
    },
    sec5: {
      title: "5. Keselamatan Peranti Peresap Pintar IoT & HVAC",
      desc: "Rangkaian peresap minyak pati pintar komersial yang bersambung ke WiFi dan aplikasi mudah alih direka dengan piawaian keselamatan IoT:",
      items: [
        "Protokol komunikasi disulitkan melalui TLS/MQTT yang selamat dengan pengesahan pelayan dua hala.",
        "Pengasingan peranti daripada rangkaian dalaman perniagaan melalui VLAN IoT khusus.",
        "Perisian tegar (firmware) ditandatangani secara digital oleh CreditBird untuk mencegah suntikan kod berbahaya."
      ]
    },
    sec6: {
      title: "6. Pelaporan Kerentanan & Proses Pengendalian Insiden",
      desc: "CreditBird mengalu-alukan laporan kerentanan daripada penyelidik keselamatan dan komuniti. Sekiranya anda mengesan sebarang kerentanan, sila hubungi Jabatan Keselamatan Maklumat kami:",
      contact: {
        deptLabel: "Jabatan Keselamatan Maklumat",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "Kod Cukai / Nombor Pendaftaran",
        taxVal: "0315397327",
        hotlineLabel: "Talian Kecemasan",
        hotlineVal: "+84 932 640 968",
        emailLabel: "E-mel Laporan",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "Masa Tindak Balas Awal",
        slaVal: "Dalam tempoh 24 jam waktu bekerja"
      }
    }
  },
  es: {
    sec1: {
      title: "1. Marco de Seguridad de la Información ISO/IEC 27001",
      p1: "CreditBird establece y mantiene un Sistema de Gestión de Seguridad de la Información (SGSI) estrictamente alineado con la norma <strong>ISO/IEC 27001</strong> y la <strong>Ley de Ciberseguridad de Vietnam</strong>.",
      p2: "Todo el ciclo de vida del servicio—desde la selección de talento TI hasta la entrega del código fuente—cumple con tres pilares fundamentales de seguridad:",
      pillars: {
        confidentiality: { title: "CONFIDENCIALIDAD", subtitle: "Control de Acceso", desc: "La información está restringida exclusivamente al personal debidamente autorizado." },
        integrity: { title: "INTEGRIDAD", subtitle: "Protección Contra Manipulación", desc: "Los libros contables ERP y los repositorios de código están protegidos contra alteraciones no autorizadas." },
        availability: { title: "DISPONIBILIDAD", subtitle: "Disponibilidad 99.9%", desc: "Servicios de misión crítica garantizados bajo los términos contractuales del SLA." }
      }
    },
    sec2: {
      title: "2. Seguridad del Código Fuente y Flujo DevSecOps",
      desc: "Para el desarrollo de software a medida y personalizaciones ERP, CreditBird aplica un ciclo de vida de desarrollo de software seguro (SSDLC):",
      items: [
        { label: "Arquitectura de Repositorios Aislados", text: "Cada proyecto de cliente cuenta con un repositorio independiente con reglas de protección de ramas, exigiendo la aprobación de al menos 2 Senior Tech Leads antes de fusionar." },
        { label: "Análisis Automatizado de Seguridad", text: "Herramientas SAST integradas para detectar vulnerabilidades OWASP Top 10 y SCA para prevenir vulnerabilidades de día cero en componentes de código abierto." },
        { label: "Prevención de Fuga de Credenciales", text: "Bloqueo automático en pipelines de commits que contengan claves API, credenciales de bases de datos o tokens secretos." },
        { label: "Entrega de Código 100% Limpio", text: "Entrega del código fuente al cliente acompañada de un informe de auditoría que certifica cero vulnerabilidades críticas o altas." }
      ]
    },
    sec3: {
      title: "3. Seguridad de Datos ERP y Recuperación ante Desastres (DRP)",
      desc: "Los datos ERP (pedidos, inventario, contabilidad VAS, nóminas) son los activos más valiosos de la empresa. Los mecanismos de protección incluyen:",
      items: [
        { label: "Copias de Seguridad Diarias Automáticas", text: "Instantáneas programadas en horarios de bajo tráfico con soporte para recuperación en el punto temporal (PITR)." },
        { label: "Estrategia Empresarial 3-2-1", text: "Al menos 3 copias de datos en 2 tipos de soportes independientes, con 1 copia fuera de las instalaciones (Off-site) en un centro de datos secundario." },
        { label: "Cifrado de Extremo a Extremo", text: "Todas las copias de seguridad de las bases de datos se cifran mediante AES-256 antes de transferirse al almacenamiento en la nube soberana." },
        { label: "Registro de Auditoría Inmutable (Immutable Audit Trail)", text: "Cualquier modificación de comprobantes contables o cambios de permisos queda registrada en un registro permanente que no puede alterarse ni eliminarse." }
      ]
    },
    sec4: {
      title: "4. Normas de Seguridad para Personal de TI In Situ y Remoto",
      desc: "Para proteger de forma absoluta los secretos comerciales del cliente en servicios de outsourcing y asignación de personal TI:",
      items: [
        { label: "Acuerdo de Confidencialidad Individual (NDA)", text: "El 100% de los ingenieros de TI firman un acuerdo de confidencialidad con validez jurídica vinculante antes de incorporarse al proyecto." },
        { label: "Equipos de Trabajo Estandarizados y Seguros", text: "Los ingenieros utilizan terminales autorizados por el cliente o equipos de CreditBird configurados con cifrado de disco completo (BitLocker/FileVault) y control de seguridad." },
        { label: "Prohibición Absoluta de Almacenamiento Local No Autorizado", text: "Está estrictamente prohibido copiar código fuente o bases de datos de clientes a dispositivos personales o memorias USB externas." }
      ]
    },
    sec5: {
      title: "5. Seguridad de Difusores Inteligentes IoT y Climatización HVAC",
      desc: "Los difusores de aromas comerciales conectados por WiFi y controlados por aplicación móvil incorporan diseño de seguridad IoT robusto:",
      items: [
        "Protocolos de comunicación cifrados mediante TLS/MQTT con autenticación mutua de servidor.",
        "Aislamiento de red que confina los difusores en VLAN exclusivas para IoT, aislándolos de la red corporativa interna.",
        "Firmware con firma digital oficial de CreditBird para evitar inyecciones de código malicioso o accesos no autorizados."
      ]
    },
    sec6: {
      title: "6. Notificación de Vulnerabilidades y Gestión de Incidentes",
      desc: "CreditBird fomenta la divulgación responsable de vulnerabilidades. Si detecta alguna anomalía o posible fallo de seguridad, póngase en contacto con nuestro equipo:",
      contact: {
        deptLabel: "Departamento de Seguridad de la Información",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "Número de Identificación Fiscal",
        taxVal: "0315397327",
        hotlineLabel: "Línea de Emergencia",
        hotlineVal: "+84 932 640 968",
        emailLabel: "Correo Electrónico de Seguridad",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "Plazo de Respuesta Inicial",
        slaVal: "En un plazo máximo de 24 horas laborables"
      }
    }
  },
  fr: {
    sec1: {
      title: "1. Cadre de Sécurité de l'Information ISO/IEC 27001",
      p1: "CreditBird applique un Système de Management de la Sécurité de l'Information (SMSI) rigoureusement conforme à la norme <strong>ISO/IEC 27001</strong> et à la <strong>Loi sur la Cybersécurité du Vietnam</strong>.",
      p2: "L'ensemble du cycle de réalisation—du recrutement d'ingénieurs qualifiés à la livraison du code source—repose sur trois piliers de sécurité fondamentaux :",
      pillars: {
        confidentiality: { title: "CONFIDENTIALITÉ", subtitle: "Contrôle d'Accès", desc: "L'accès aux données est strictement réservé aux personnes dûment autorisées." },
        integrity: { title: "INTÉGRITÉ", subtitle: "Protection Contre la Falsification", desc: "Les grands livres comptables ERP et les dépôts de code source sont inviolables et traçables." },
        availability: { title: "DISPONIBILITÉ", subtitle: "Disponibilité de 99,9%", desc: "Haute disponibilité garantie contractuellement dans le cadre de nos accords SLA." }
      }
    },
    sec2: {
      title: "2. Sécurité du Code Source & Pipeline DevSecOps",
      desc: "Pour les projets de développement logiciel sur mesure et d'intégration ERP, CreditBird met en œuvre un cycle de développement sécurisé (SSDLC) :",
      items: [
        { label: "Architecture de Dépôts Isolés", text: "Chaque projet client dispose d'un dépôt Git dédié avec des règles de protection de branches, nécessitant la validation d'au moins 2 Senior Tech Leads avant toute fusion." },
        { label: "Analyse Automatisée des Vulnérabilités", text: "Intégration d'outils SAST (détection des failles OWASP Top 10) et SCA (analyse des dépendances open source pour contrer les failles zero-day)." },
        { label: "Prévention des Fuites de Secrets", text: "Détection et blocage automatique en amont de tout commit contenant des clés API, identifiants de bases de données ou tokens sensibles." },
        { label: "Livraison 100% Sécurisée", text: "Remise du code source au client certifiée par un rapport d'audit attestant de zéro vulnérabilité critique ou élevée." }
      ]
    },
    sec3: {
      title: "3. Sécurité des Données ERP & Plan de Reprise d'Activité (PRA)",
      desc: "Les données ERP (commandes, stocks, écritures comptables VAS, ressources humaines) constituent les actifs stratégiques de l'entreprise :",
      items: [
        { label: "Sauvegardes Quotidiennes Automatisées", text: "Création de snapshots réguliers en heures creuses et prise en charge de la restauration à un instant précis (Point-in-Time Recovery - PITR)." },
        { label: "Stratégie de Sauvegarde 3-2-1", text: "Conservation d'au moins 3 copies sur 2 types de supports distincts, dont 1 copie externalisée hors site dans un centre de données secondaire." },
        { label: "Chiffrement de Bout en Bout", text: "Tous les snapshots de bases de données sont chiffrés en AES-256 avant leur transfert vers un stockage cloud hautement sécurisé." },
        { label: "Piste d'Audit Immuable (Immutable Audit Trail)", text: "Toute modification de pièces comptables, mouvement de stock ou modification de droits est consignée dans un journal d'audit infalsifiable." }
      ]
    },
    sec4: {
      title: "4. Normes de Sécurité pour les Équipes IT sur Site et à Distance",
      desc: "Afin de garantir une protection absolue du secret des affaires lors des prestations de régie ou d'externalisation IT :",
      items: [
        { label: "Accord de Confidentialité Individuel (NDA)", text: "100 % des ingénieurs affectés signent un engagement de confidentialité juridiquement contraignant avant de démarrer toute mission." },
        { label: "Postes de Travail Sécurisés et Standardisés", text: "Utilisation exclusive de machines fournies par le client ou d'équipements CreditBird configurés avec chiffrement de disque complet (BitLocker/FileVault) et solutions MDM." },
        { label: "Interdiction Stricte de Stockage Personnel", text: "Il est formellement interdit de dupliquer ou de transférer le code source ou les données du client sur des supports personnels ou des clés USB non autorisées." }
      ]
    },
    sec5: {
      title: "5. Sécurité des Diffuseurs Connectés IoT & Climatisation HVAC",
      desc: "Nos systèmes de diffusion de parfum connectés par WiFi et pilotés par application mobile bénéficient d'une architecture de sécurité IoT éprouvée :",
      items: [
        "Communications chiffrées via les protocoles sécurisés TLS/MQTT avec authentification mutuelle serveur.",
        "Segmentation réseau stricte confinant les diffuseurs sur un VLAN IoT dédié, hors du réseau d'entreprise sensible.",
        "Firmware officiel signé numériquement par CreditBird empêchant toute injection de code malveillant ou prise de contrôle pirate."
      ]
    },
    sec6: {
      title: "6. Signalement des Vulnérabilités & Gestion des Incidents",
      desc: "CreditBird collabore activement avec la communauté d'experts en cybersécurité. En cas de découverte d'une vulnérabilité potentielle, merci de nous contacter :",
      contact: {
        deptLabel: "Département Sécurité de l'Information",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "Numéro d'immatriculation fiscale",
        taxVal: "0315397327",
        hotlineLabel: "Ligne d'Urgence",
        hotlineVal: "+84 932 640 968",
        emailLabel: "Adresse de Signalement",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "Délai de Réponse Initial",
        slaVal: "Sous 24 heures ouvrées"
      }
    }
  },
  hi: {
    sec1: {
      title: "1. ISO/IEC 27001 सूचना सुरक्षा रूपरेखा",
      p1: "CreditBird अंतरराष्ट्रीय मानक <strong>ISO/IEC 27001</strong> और <strong>वियतनाम साइबर सुरक्षा कानून</strong> के अनुरूप एक सख्त सूचना सुरक्षा प्रबंधन प्रणाली (ISMS) संचालित करता है।",
      p2: "आईटी प्रतिभा चयन, सॉफ्टवेयर आवश्यकताओं के विश्लेषण, सर्वर बुनियादी ढांचे के कॉन्फ़िगरेशन से लेकर सोर्स कोड सौंपने तक के पूरे विकास चक्र में तीन मुख्य स्तंभों का पालन किया जाता है:",
      pillars: {
        confidentiality: { title: "गोपनीयता (CONFIDENTIALITY)", subtitle: "पहुँच नियंत्रण", desc: "केवल अधिकृत कर्मियों को ही व्यावसायिक डेटा तक पहुँचने की अनुमति है।" },
        integrity: { title: "अखंडता (INTEGRITY)", subtitle: "छेड़छाड़ रोकथाम", desc: "ईआरपी वित्तीय बहीखाते और कोड रिपॉजिटरी अनधिकृत संशोधनों से पूरी तरह सुरक्षित हैं।" },
        availability: { title: "उपलब्धता (AVAILABILITY)", subtitle: "99.9% अपटाइम", desc: "एसएलए अनुबंध शर्तों के तहत निरंतर और विश्वसनीय सेवा सुनिश्चित की जाती है।" }
      }
    },
    sec2: {
      title: "2. स्रोत कोड सुरक्षा और DevSecOps पाइपलाइन",
      desc: "कस्टम सॉफ्टवेयर इंजीनियरिंग और समर्पित ईआरपी कार्यान्वयन के लिए, CreditBird एक कठोर सुरक्षित सॉफ्टवेयर विकास जीवन चक्र (SSDLC) लागू करता है:",
      items: [
        { label: "पृथक कोड रिपॉजिटरी संरचना", text: "प्रत्येक ग्राहक परियोजना के लिए समर्पित रिपॉजिटरी और शाखा सुरक्षा नियम (Branch Protection) लागू होते हैं, जिसमें कोड विलय से पहले कम से कम 2 सीनियर टेक लीड्स का अनुमोदन अनिवार्य है।" },
        { label: "स्वचालित सुरक्षा भेद्यता स्कैनिंग", text: "OWASP Top 10 सुरक्षा खामियों की पहचान के लिए SAST और ओपन-सोर्स पैकेजों में जीरो-डे खतरों से बचाव के लिए SCA उपकरण एकीकृत हैं।" },
        { label: "गुप्त क्रेडेंशियल रिसाव रोकथाम", text: "एपीआई कुंजी, डेटाबेस क्रेडेंशियल या सीक्रेट टोकन वाले कमिट को स्वचालित रूप से ब्लॉक किया जाता है।" },
        { label: "100% स्वच्छ कोड सुपुर्दगी", text: "ग्राहक को सोर्स कोड शून्य उच्च/गंभीर भेद्यता (Zero High/Critical Vulnerabilities) ऑडिट रिपोर्ट के साथ सौंपा जाता है।" }
      ]
    },
    sec3: {
      title: "3. ईआरपी डेटा सुरक्षा और आपदा पुनर्प्राप्ति (DRP)",
      desc: "ईआरपी डेटा (ऑर्डर, इन्वेंटरी, लेखा बहीखाता, मानव संसाधन) उद्यम की सबसे मूल्यवान डिजिटल संपत्ति है। सुरक्षा तंत्र में शामिल हैं:",
      items: [
        { label: "स्वचालित दैनिक बैकअप", text: "कम उपयोग के समय नियमित स्नैपशॉट बनाए जाते हैं और विशिष्ट समय पर डेटा पुनर्प्राप्ति (PITR) की सुविधा दी जाती है।" },
        { label: "3-2-1 एंटरप्राइज़ बैकअप रणनीति", text: "कम से कम 3 प्रतियां 2 अलग-अलग मीडिया प्रारूपों में रखी जाती हैं, जिसमें से कम से कम 1 प्रति द्वितीयक डेटा सेंटर में सुरक्षित रखी जाती है।" },
        { label: "एंड-टू-एंड डेटा एन्क्रिप्शन", text: "क्लाउड स्टोरेज में स्थानांतरित करने से पहले सभी डेटाबेस स्नैपशॉट को AES-256 एल्गोरिदम के साथ एन्क्रिप्ट किया जाता है।" },
        { label: "अपरिवर्तनीय ऑडिट ट्रेल (Immutable Audit Trail)", text: "लेखांकन दस्तावेजों में संशोधन, स्टॉक गतिविधि और उपयोगकर्ता अनुमतियों के परिवर्तन को स्थायी रिकॉर्ड में दर्ज किया जाता है जिसे बदला नहीं जा सकता।" }
      ]
    },
    sec4: {
      title: "4. ऑन-साइट और रिमोट आईटी कर्मियों के लिए सुरक्षा मानक",
      desc: "आईटी स्टाफिंग और आउटसोर्सिंग सेवाओं का उपयोग करते समय ग्राहकों के व्यावसायिक रहस्यों की पूर्ण सुरक्षा सुनिश्चित करने के उपाय:",
      items: [
        { label: "व्यक्तिगत गैर-प्रकटीकरण समझौता (Individual NDA)", text: "सभी आईटी इंजीनियर परियोजना में शामिल होने से पहले कानूनी रूप से बाध्यकारी व्यक्तिगत गोपनीयता समझौते पर हस्ताक्षर करते हैं।" },
        { label: "मानकीकृत सुरक्षित वर्कस्टेशन", text: "इंजीनियर केवल ग्राहक द्वारा निर्दिष्ट या CreditBird द्वारा प्रदान किए गए लैपटॉप का उपयोग करते हैं जिनमें फुल-डिस्क एन्क्रिप्शन (BitLocker/FileVault) सक्षम होता है।" },
        { label: "व्यक्तिगत उपकरणों पर डेटा भंडारण का पूर्ण निषेध", text: "इंजीनियरों को ग्राहक के सोर्स कोड या डेटाबेस को व्यक्तिगत उपकरणों या यूएसबी ड्राइव पर कॉपी करने की सख्त मनाही है।" }
      ]
    },
    sec5: {
      title: "5. स्मार्ट आईओटी डिफ्यूज़र और एचवीएसी सुरक्षा",
      desc: "वाई-फाई और मोबाइल ऐप से नियंत्रित होने वाले वाणिज्यिक आवश्यक तेल डिफ्यूज़र उन्नत आईओटी सुरक्षा मानकों के साथ डिज़ाइन किए गए हैं:",
      items: [
        "सर्वर प्रमाणीकरण के साथ सुरक्षित TLS/MQTT प्रोटोकॉल के माध्यम से एन्क्रिप्टेड संचार चैनल।",
        "समर्पित आईओटी वीलैन (VLAN) के माध्यम से डिवाइस को उद्यम के संवेदनशील आंतरिक नेटवर्क से अलग रखना।",
        "अनधिकृत छेड़छाड़ या नियंत्रण को रोकने के लिए CreditBird द्वारा डिजिटल रूप से हस्ताक्षरित फर्मवेयर।"
      ]
    },
    sec6: {
      title: "6. सुरक्षा भेद्यता रिपोर्टिंग और समाधान प्रक्रिया",
      desc: "CreditBird सुरक्षा शोधकर्ताओं से संभावित सुरक्षा खामियों की रिपोर्ट का स्वागत करता है। यदि आपको कोई संदिग्ध भेद्यता मिलती है, तो कृपया संपर्क करें:",
      contact: {
        deptLabel: "सूचना सुरक्षा विभाग",
        deptVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "कर पहचान संख्या (Tax ID)",
        taxVal: "0315397327",
        hotlineLabel: "आपातकालीन हॉटलाइन",
        hotlineVal: "+84 932 640 968",
        emailLabel: "रिपोर्टिंग ईमेल",
        emailVal: "contact@creditbirdtech.com",
        slaLabel: "प्रारंभिक प्रतिक्रिया समय",
        slaVal: "24 कार्य घंटों के भीतर"
      }
    }
  }
};

const output = `import type { SecurityContent, SupportedLocale } from './types';

export const securityContent: Record<SupportedLocale, SecurityContent> = ${JSON.stringify(securityData, null, 2)};

export function getSecurityContent(locale: string): SecurityContent {
  const loc = locale.toLowerCase() as SupportedLocale;
  return securityContent[loc] || securityContent['en'];
}
`;

fs.writeFileSync("src/lib/data/legal/security.ts", output, "utf8");
console.log("Successfully generated src/lib/data/legal/security.ts with 11 locales!");
