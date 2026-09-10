import fs from "fs";

const termsData = {
  vi: {
    sec1: {
      title: "1. Quy định chung & Thông tin pháp nhân",
      intro: "Chào mừng Quý khách hàng đến với <strong>CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</strong> (dưới đây gọi tắt là \"CreditBird\" hoặc \"Chúng tôi\"). Khi Quý khách truy cập website, đăng ký tư vấn, ký kết hợp đồng cung cấp dịch vụ hoặc mua sắm sản phẩm của CreditBird, Quý khách đồng ý tuân thủ toàn bộ các điều khoản và điều kiện được nêu tại văn bản này.",
      company: {
        nameLabel: "Tên doanh nghiệp",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "Tên quốc tế",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "Mã số doanh nghiệp / MST",
        taxVal: "0315397327 (Cấp ngày 19/11/2018)",
        authLabel: "Cơ quan cấp",
        authVal: "Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh",
        addrLabel: "Địa chỉ trụ sở",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "Đại diện pháp luật",
        repVal: "TRẦN TRỌNG TRI"
      }
    },
    sec2: {
      title: "2. Phạm vi cung cấp dịch vụ & sản phẩm",
      intro: "CreditBird hoạt động và cung cấp 5 nhóm giải pháp chuyên sâu cho các tổ chức, doanh nghiệp và cá nhân:",
      services: [
        { label: "Viết phần mềm may đo (Custom Software)", text: "Thiết kế, phát triển các phần mềm web, mobile app, hệ thống vi dịch vụ (Microservices), cổng thanh toán và nền tảng quản trị số hóa theo đặc thù nghiệp vụ của từng khách hàng." },
        { label: "Phát triển hệ thống ERP cho doanh nghiệp", text: "Tư vấn kiến trúc, triển khai hệ thống quản trị nguồn lực doanh nghiệp (sản xuất, kho vận WMS, chuỗi cung ứng, kế toán VAS/IFRS, quản lý nhân sự, bán hàng đa kênh)." },
        { label: "Cho thuê nhân sự IT cho doanh nghiệp", text: "Cung ứng kỹ sư IT chuyên nghiệp làm việc trực tiếp (Onsite) tại văn phòng khách hàng hoặc làm việc từ xa (Dedicated Remote Team) theo dự án hoặc định kỳ hàng tháng." },
        { label: "Máy phun tinh dầu thông minh", text: "Cung cấp, lắp đặt và bảo trì hệ thống máy khuếch tán tinh dầu công nghiệp kết nối HVAC tòa nhà, showroom diện tích lớn và thiết bị thông minh điều khiển qua App/WiFi." },
        { label: "Tinh dầu thiên nhiên nguyên chất", text: "Cung cấp các dòng tinh dầu thiên nhiên 100% nguyên chất có đầy đủ chứng nhận nguồn gốc xuất xứ (COA), phiếu kiểm nghiệm GC-MS phục vụ giải pháp tiếp thị bằng mùi hương (Scent Marketing)." }
      ]
    },
    sec3: {
      title: "3. Quyền và nghĩa vụ của các bên",
      creditbirdTitle: "3.1. Quyền và trách nhiệm của CreditBird:",
      creditbirdItems: [
        "Cung cấp sản phẩm, dịch vụ đúng chất lượng, quy chuẩn kỹ thuật và tiến độ cam kết trong hợp đồng.",
        "Bảo hành thiết bị máy phun theo đúng thời hạn 12 - 24 tháng; cam kết chất lượng tinh dầu thiên nhiên đạt chuẩn COA.",
        "Duy trì đội ngũ nhân sự IT đạt trình độ chuyên môn như hồ sơ năng lực đã thỏa thuận; thay thế nhân sự nếu không đáp ứng yêu cầu trong vòng 05 ngày làm việc.",
        "Bảo mật tuyệt đối mọi thông tin kinh doanh, dữ liệu tài chính và bí mật công nghệ của khách hàng theo thỏa thuận NDA."
      ],
      customerTitle: "3.2. Quyền và trách nhiệm của Khách hàng:",
      customerItems: [
        "Cung cấp đầy đủ, chính xác các yêu cầu nghiệp vụ, dữ liệu đầu vào và phối hợp nghiệm thu theo đúng các mốc giai đoạn (milestone).",
        "Thanh toán đầy đủ, đúng hạn theo các điều khoản thanh toán được quy định trong Hợp đồng kinh tế.",
        "Sử dụng thiết bị máy phun tinh dầu và tinh dầu theo đúng hướng dẫn kỹ thuật của nhà sản xuất để đảm bảo độ bền và an toàn tối ưu."
      ]
    },
    sec4: {
      title: "4. Bản quyền mã nguồn & Sở hữu trí tuệ",
      p1: "Đối với các hợp đồng phát triển phần mềm may đo và ERP tùy biến, sau khi khách hàng hoàn tất các nghĩa vụ thanh toán theo hợp đồng, <strong>CreditBird chuyển giao 100% quyền sở hữu bản quyền mã nguồn (Source Code)</strong>, cơ sở dữ liệu và tài liệu kỹ thuật phát triển riêng cho khách hàng.",
      p2: "Khách hàng có toàn quyền sửa đổi, nâng cấp, phân phối nội bộ hoặc tiếp tục ủy quyền bảo trì cho đơn vị khác mà không phải trả thêm bất kỳ khoản phí cấp quyền nào cho CreditBird."
    },
    sec5: {
      title: "5. Thanh toán & Nghiệm thu bàn giao",
      intro: "Tiến độ thanh toán và biên bản bàn giao nghiệm thu được cụ thể hóa trong từng Hợp đồng kinh tế hoặc Đơn đặt hàng tương ứng:",
      items: [
        { label: "Phần mềm & ERP", text: "Thanh toán theo các mốc: Đặt cọc triển khai (30%), Hoàn thành Prototype & Alpha (30%), UAT thử nghiệm & Đào tạo (30%), Quyết toán nghiệm thu bàn giao chính thức (10%)." },
        { label: "Thuê nhân sự IT", text: "Quyết toán và xuất hóa đơn định kỳ vào cuối mỗi tháng làm việc theo bảng chấm công (Timesheet) đã được đại diện khách hàng xác nhận." },
        { label: "Máy phun & Tinh dầu", text: "Thanh toán theo từng đơn hàng hoặc hợp đồng cung ứng định kỳ, có xuất hóa đơn GTGT (VAT) điện tử hợp lệ theo quy định pháp luật." }
      ]
    },
    sec6: {
      title: "6. Cam kết bảo mật thông tin (NDA)",
      p1: "Mọi thông tin về dự án phần mềm, cấu trúc dữ liệu ERP, thông tin tài chính, cũng như bí quyết công nghệ mà các bên tiếp cận trong quá trình đàm phán và triển khai đều được bảo vệ nghiêm ngặt dưới Thỏa thuận bảo mật thông tin (NDA).",
      p2: "Nghĩa vụ bảo mật vẫn có hiệu lực vô thời hạn ngay cả khi hợp đồng dịch vụ đã kết thúc hoặc thanh lý."
    },
    sec7: {
      title: "7. Luật áp dụng & Giải quyết tranh chấp",
      p1: "Điều khoản này được điều chỉnh và giải thích theo các quy định hiện hành của pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.",
      p2: "Mọi tranh chấp phát sinh từ hoặc liên quan đến thỏa thuận này sẽ được ưu tiên giải quyết thông qua thương lượng hòa giải trên tinh thần thiện chí. Nếu không giải quyết được bằng hòa giải trong vòng 30 ngày, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết theo quy định."
    }
  },
  en: {
    sec1: {
      title: "1. General Provisions & Legal Entity",
      intro: "Welcome to <strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong> (hereinafter referred to as \"CreditBird\", \"we\", or \"us\"). By accessing our website, requesting consultations, executing service contracts, or purchasing products, you agree to comply with and be bound by all terms and conditions outlined herein.",
      company: {
        nameLabel: "Entity Name",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "International Trade Name",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "Enterprise Code / Tax ID",
        taxVal: "0315397327 (Issued Nov 19, 2018)",
        authLabel: "Licensing Authority",
        authVal: "Ho Chi Minh City Department of Planning and Investment",
        addrLabel: "Registered Office",
        addrVal: "100/20 Street 79, Phuoc Long Ward, Ho Chi Minh City, Vietnam",
        repLabel: "Legal Representative",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. Scope of Products & Services",
      intro: "CreditBird specializes in and provides five dedicated industrial solution divisions for organizations and enterprises:",
      services: [
        { label: "Custom Software Engineering", text: "Design and deployment of bespoke web platforms, mobile apps, microservices infrastructure, secure payment gateways, and enterprise digital operations software." },
        { label: "Enterprise ERP Solutions", text: "Architectural design, implementation, and roll-out of unified Enterprise Resource Planning suites (production MRP, WMS warehouse logistics, VAS/IFRS accounting, HR, omnichannel commerce)." },
        { label: "Enterprise IT Staffing", text: "Provision of verified professional IT engineers working onsite at client offices or via dedicated remote engineering pods." },
        { label: "Smart Commercial Scent Diffusers", text: "Distribution, installation, and preventative maintenance of commercial HVAC-integrated aroma diffusers and smart WiFi/App controllable devices." },
        { label: "100% Pure Natural Essential Oils", text: "Supply of pure natural essential oils accompanied by international Certificates of Analysis (COA) and GC-MS chromatography profiles for commercial scent marketing." }
      ]
    },
    sec3: {
      title: "3. Rights and Obligations of Parties",
      creditbirdTitle: "3.1. CreditBird's Rights & Responsibilities:",
      creditbirdItems: [
        "Deliver software solutions, ERP systems, and hardware adhering to strict quality benchmarks, architectural specifications, and agreed timeline milestones.",
        "Provide 12 to 24-month hardware warranties on diffuser units and guarantee 100% botanical authenticity under COA standards.",
        "Maintain qualified IT personnel meeting defined competency profiles; replace underperforming personnel within 5 business days upon verified notice.",
        "Safeguard client trade secrets, financial records, and technological assets under non-disclosure obligations."
      ],
      customerTitle: "3.2. Customer's Rights & Responsibilities:",
      customerItems: [
        "Provide accurate operational workflows, data assets, and timely collaboration during testing and acceptance milestones.",
        "Fulfill financial compensation in full accordance with contractual payment schedules.",
        "Operate diffuser machinery and essential oils in strict compliance with technical operating instructions to ensure equipment longevity and safety."
      ]
    },
    sec4: {
      title: "4. Source Code Ownership & Intellectual Property",
      p1: "Upon full settlement of all contractual financial obligations for bespoke software engineering or custom ERP implementation, <strong>CreditBird transfers 100% of source code ownership, database schemas, and proprietary technical documentation to the customer</strong>.",
      p2: "The customer retains unrestricted authority to modify, enhance, deploy internally, or reassign maintenance to third-party providers without incurring licensing royalties."
    },
    sec5: {
      title: "5. Payment Terms & Handover Milestones",
      intro: "Payment schedules and acceptance documentation are formalized in corresponding commercial contracts or purchase orders:",
      items: [
        { label: "Software & ERP Engineering", text: "Structured milestone billing: Implementation deposit (30%), Prototype & Alpha delivery (30%), UAT & Training (30%), Final handover acceptance (10%)." },
        { label: "IT Staffing Services", text: "Settled and invoiced on a recurring monthly cycle based on validated client timesheets." },
        { label: "Hardware & Essential Oils", text: "Settled per order or periodic procurement contracts, accompanied by valid electronic Value-Added Tax (VAT) invoices." }
      ]
    },
    sec6: {
      title: "6. Non-Disclosure Agreement (NDA)",
      p1: "All technical schemas, ERP data repositories, financial projections, and proprietary engineering know-how exchanged during consultations and project execution are governed by strict NDA covenants.",
      p2: "Confidentiality obligations remain in perpetual effect following contract expiration or formal liquidation."
    },
    sec7: {
      title: "7. Governing Law & Dispute Resolution",
      p1: "These terms are governed by and construed in accordance with the statutory laws of the Socialist Republic of Vietnam.",
      p2: "Any disputes arising from or connected with this agreement shall first be resolved through good-faith amicable negotiation. Should dispute resolution remain unresolved after 30 days, the matter shall be submitted to the competent People's Court in Ho Chi Minh City."
    }
  },
  zh: {
    sec1: {
      title: "1. 一般条款与法定主体信息",
      intro: "欢迎访问 <strong>CREDITBIRD 科技有限公司</strong>（以下简称“CreditBird”或“本公司”）。当您访问本网站、提交业务咨询、签署服务协议或采购产品时，即表明您完全知悉并同意受本协议所有条款之约束。",
      company: {
        nameLabel: "法定登记名称",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "国际商号",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "企业统一信用代码 / 税号",
        taxVal: "0315397327（2018年11月19日登记核发）",
        authLabel: "发证机关",
        authVal: "胡志明市计划与投资局",
        addrLabel: "注册办公地址",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "法定代表人",
        repVal: "TRẦN TRỌNG TRI（陈仲智）"
      }
    },
    sec2: {
      title: "2. 产品与服务供应范围",
      intro: "CreditBird 专注于为全球及本地企业客户提供五大核心科技解决方案：",
      services: [
        { label: "定制软件工程开发 (Custom Software)", text: "采用 Rust、Go、Svelte 等现代化高性能架构，为客户度身定制 Web 平台、原生 App、微服务集群、安全支付网关及数字化运营系统。" },
        { label: "企业级 ERP 架构开发与部署", text: "提供一体化企业资源计划系统（覆盖生产排程 MRP、WMS 智能仓储、供应链协同、VAS/IFRS 双准则财务核算、HR 人力资源及全渠道营销）。" },
        { label: "IT 人才派遣与驻场技术支持 (IT Staffing)", text: "提供资深高级工程师 Onsite 现场驻场服务或专属离岸远程工程开发团队（Dedicated Squads）。" },
        { label: "智能商用香氛扩香设备系统", text: "供应、安装及运维支持大型楼宇中央空调（HVAC）管道接入型扩香机、展厅独立设备及支持 App/WiFi 云端控制的智能硬件。" },
        { label: "100% 纯天然药典级植物精油", text: "供应具备完整国际 COA 成分检测报告和 GC-MS 气相色谱质谱验证的高品质纯精油，赋能企业空间嗅觉营销。" }
      ]
    },
    sec3: {
      title: "3. 双方权利与法律义务",
      creditbirdTitle: "3.1. CreditBird 的权利与承诺：",
      creditbirdItems: [
        "按照合同约定的技术规范、工程质量标准及交付节点，按期交付合格的软件系统与硬件设备。",
        "对商用扩香机提供 12 至 24 个月的硬件质保；确保天然精油 100% 纯度并严格符合 COA 质检标准。",
        "保障派驻 IT 人员具备约定技能资历；若客户提出合理异议，在 5 个工作日内安排同等资历人员轮换。",
        "遵循保密协议（NDA）要求，严守客户商业秘密、财务账目与技术机密。"
      ],
      customerTitle: "3.2. 客户的权利与协同义务：",
      customerItems: [
        "提供完整、准确的业务需求及基础数据，并根据约定的交付节点积极配合验收（UAT）。",
        "依据经济合同约定的付款进度，及时、全额履行支付款项义务。",
        "严格按照制造商技术规范操作维护扩香机并使用合格精油，确保硬件寿命与人员安全。"
      ]
    },
    sec4: {
      title: "4. 源代码著作权与知识产权归属",
      p1: "在定制软件开发及 ERP 深度定制项目中，客户完成合同全部款项结清后，<strong>CreditBird 将所开发的源代码（Source Code）、数据库设计文档及专属技术资料之全部著作权与所有权 100% 完整移交予客户</strong>。",
      p2: "客户拥有对源码自主修改、二次迭代、内部部署或委托第三方维护的完全权利，无需向 CreditBird 支付任何额外授权许可费用。"
    },
    sec5: {
      title: "5. 款项结算与交付验收节点",
      intro: "付款进度与验收清单在各项具体的商业合同或采购订单中详细明确：",
      items: [
        { label: "软件与 ERP 定制工程", text: "分阶段结算：项目启动首付款 (30%)、原型与 Alpha 测试交付款 (30%)、UAT 验收与培训款 (30%)、终验结算款 (10%)。" },
        { label: "IT 人才派遣与驻场服务", text: "按自然月定期结算，依据客户授权代表签字确认的工时表（Timesheet）开具账单。" },
        { label: "硬件设备与精油耗材", text: "依订单逐笔结算或签署定期采购协议，依法开具越南增值税（VAT）正规电子发票。" }
      ]
    },
    sec6: {
      title: "6. 商业秘密保护条款 (NDA)",
      p1: "双方在项目磋商、方案调研及系统实施全过程中接触的任何技术代码、ERP 财务数据及商业机密，均受保密协议的终身保护。",
      p2: "保密义务在服务合同终止或结算清算后依然长期有效。"
    },
    sec7: {
      title: "7. 适用法律与争议解决管辖",
      p1: "本协议的订立、效力、解释及争议解决均适用越南社会主义共和国之现行有效法律。",
      p2: "凡因履行本协议所引起的任何争议，双方应秉持诚意友好协商解决。若在 30 日内未能通过协商达成一致，任何一方均有权提请胡志明市有管辖权的人民法院诉讼裁判。"
    }
  },
  ja: {
    sec1: {
      title: "1. 一般規定と法人情報",
      intro: "<strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong>（以下「CreditBird」または「当社」といいます）へようこそ。お客様が当社のウェブサイトへのアクセス、コンサルティングのお申し込み、サービス契約の締結、または製品のご購入を行われる場合、本規約のすべての条項および条件を遵守することに同意するものとします。",
      company: {
        nameLabel: "法人登記名",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "国際商号",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "企業コード / 税務番号",
        taxVal: "0315397327（2018年11月19日発効）",
        authLabel: "許認可機関",
        authVal: "ホーチミン市計画投資局",
        addrLabel: "本社所在地",
        addrVal: "100/20 79 Street, Phuoc Long Ward, Ho Chi Minh City, Vietnam",
        repLabel: "法定代表者",
        repVal: "TRAN TRONG TRI（チャン・チョン・チー）"
      }
    },
    sec2: {
      title: "2. サービスおよび製品の提供範囲",
      intro: "CreditBirdは、企業、各種組織、パートナー向けに5つのコア事業ソリューションを提供しています：",
      services: [
        { label: "カスタムソフトウェア受託開発", text: "Rust、Go、Svelteなどの高性能技術を活用し、お客様固有の業務要件に合わせたWebアプリケーション、モバイルアプリ、マイクロサービス基盤、決済ゲートウェイ、DX管理プラットフォームの設計・開発。" },
        { label: "エンタープライズERPシステム", text: "製造MRP、WMS倉庫物流、サプライチェーン、VAS/IFRSデュアル会計、人事労務、オムニチャネル販売を含む統合基幹業務システムの設計コンサルティングおよび導入展開。" },
        { label: "ITエンジニア派遣・専属チーム提供", text: "厳格な審査を経たシニアエンジニアによるお客様オフィスへの常駐（Onsite）または専属リモート開発チーム（Dedicated Remote Squads）の提供。" },
        { label: "スマートアロマディフューザー機器", text: "ビル中央空調（HVAC）連動型業務用ディフューザー、大規模ショールーム向け独立機、およびクラウド/WiFi対応スマート機器の供給・設置・保守管理。" },
        { label: "100%天然純粋エッセンシャルオイル", text: "国際COA成分分析書およびGC-MSガスクロマトグラフィー検査証を完備した、プロフェッショナル向け香りマーケティング用天然精油の供給。" }
      ]
    },
    sec3: {
      title: "3. 当事者の権利と義務",
      creditbirdTitle: "3.1. CreditBirdの権利と責任:",
      creditbirdItems: [
        "契約書に規定されたエンジニアリング仕様、品質基準、およびマイルストーン工程に合致した製品・サービスを提供すること。",
        "ディフューザー機器に対して12〜24ヶ月のハードウェア保証を提供し、天然精油の100%純度およびCOA適合を保証すること。",
        "合意されたスキルプロファイルに基づき派遣ITエンジニアの専門能力を維持すること。要件を満たさない場合は5営業日以内に交代要員を提案すること。",
        "秘密保持契約（NDA）に基づき、お客様の機密データ、財務情報、および技術的営業秘密の厳格な守秘義務を遵守すること。"
      ],
      customerTitle: "3.2. お客様の権利と責任:",
      customerItems: [
        "業務要件および入力データを正確に提供し、合意されたマイルストーンに沿って適時に検収（UAT）を実施すること。",
        "経済契約書の条項に従い、期日までに支払いを完全に履行すること。",
        "安全性と耐用年数を最大限に確保するため、メーカーの技術マニュアルに従ってディフューザー機器および精油を適切に使用・保管すること。"
      ]
    },
    sec4: {
      title: "4. ソースコードの著作権と知的財産",
      p1: "カスタムソフトウェアおよび独自ERP開発契約において、お客様による契約上のすべての支払義務が完了した後、<strong>CreditBirdは開発されたソースコード（Source Code）、データベース構造、および技術資産の所有権・著作権を100%完全にお客様へ引き渡します</strong>。",
      p2: "お客様は、CreditBirdに追加のライセンス費用を支払うことなく、ソースコードの修正、機能拡張、社内展開、または第三者への保守委託を自由に行う権利を有します。"
    },
    sec5: {
      title: "5. お支払い条件と検収マイルストーン",
      intro: "お支払いスケジュールおよび検収手続きは、個別の契約書または注文書に明記されます：",
      items: [
        { label: "ソフトウェア＆ERP受託開発", text: "マイルストーン決済：着手金 (30%)、プロトタイプ＆Alpha完成時 (30%)、UAT試験＆研修完了時 (30%)、最終納品検収時 (10%)。" },
        { label: "ITエンジニア派遣サービス", text: "お客様承認済みのタイムシート（Timesheet）に基づき、毎月末に精算およびインボイスを発行。" },
        { label: "ディフューザー機器および精油", text: "ご注文ごとの精算または定期調達契約に基づき、ベトナム付加価値税（VAT）電子請求書を発行。" }
      ]
    },
    sec6: {
      title: "6. 秘密保持契約（NDA）",
      p1: "プロジェクトの交渉、設計、導入過程でお互いが知り得たソフトウェア仕様、ERPデータ、財務数値、技術ノウハウは、秘密保持契約（NDA）に基づき厳格に保護されます。",
      p2: "守秘義務は、サービス契約の終了後も無期限で存続します。"
    },
    sec7: {
      title: "7. 準拠法および紛争解決裁判管轄",
      p1: "本規約は、ベトナム社会主義共和国の現行法令に準拠し、これに従って解釈されます。",
      p2: "本契約に関連して生じた一切の紛争は、誠意ある友好的な協議により解決を図るものとします。協議開始から30日以内に解決に至らない場合は、ホーチミン市の管轄人民裁判所に提訴するものとします。"
    }
  },
  ko: {
    sec1: {
      title: "1. 일반 규정 및 법인 정보",
      intro: "<strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong>(이하 \"CreditBird\" 또는 \"당사\")에 오신 것을 환영합니다. 고객이 웹사이트에 접속하거나, 상담을 신청하거나, 서비스 계약을 체결하거나, 제품을 구매할 경우 본 약관의 모든 조건에 동의하는 것으로 간주됩니다.",
      company: {
        nameLabel: "법인 등록명",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "국제 상호",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "사업자등록번호 / 세무 코드",
        taxVal: "0315397327 (2018년 11월 19일 발급)",
        authLabel: "발급 기관",
        authVal: "호치민시 계획투자국",
        addrLabel: "본사 소재지",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "법정 대리인",
        repVal: "TRAN TRONG TRI (쩐 쫑 찌)"
      }
    },
    sec2: {
      title: "2. 제품 및 서비스 공급 범위",
      intro: "CreditBird는 기업 및 고객을 위해 5가지 전문 솔루션 사업부를 운영하고 있습니다:",
      services: [
        { label: "맞춤형 소프트웨어 수주 개발 (Custom Software)", text: "Rust, Go, Svelte 등 고성능 아키텍처를 기반으로 고객 비즈니스 요구에 맞춘 웹 플랫폼, 모바일 앱, 마이크로서비스, 결제 게이트웨이 및 DX 운영 시스템 구축." },
        { label: "엔터프라이즈 ERP 시스템 개발", text: "생산 관리 MRP, 스마트 물류 WMS, 공급망 협업, 베트남 VAS/IFRS 이중 회계, 인사 관리 및 옴니채널 판매를 아우르는 통합 ERP 구축." },
        { label: "IT 인재 파견 및 상주 아웃소싱 (IT Staffing)", text: "검증된 전문 소프트웨어 엔지니어의 고객 사무실 상주(Onsite) 파견 또는 전담 원격 개발팀(Dedicated Remote Team) 제공." },
        { label: "스마트 상업용 디퓨저 장비", text: "중앙 공조(HVAC) 연동 대형 디퓨저, 대형 쇼룸용 독립형 기기 및 Wi-Fi/모바일 앱 연동 스마트 장비 공급·설치·유지보수." },
        { label: "100% 천연 순수 에센셜 오일", text: "국제 COA 성분 시험 성적서와 GC-MS 질량 분석 데이터를 완비한 공간 향기 마케팅용 프리미엄 천연 에센셜 오일 공급." }
      ]
    },
    sec3: {
      title: "3. 계약 당사자의 권리와 의무",
      creditbirdTitle: "3.1. CreditBird의 권리와 책임:",
      creditbirdItems: [
        "계약서에 명시된 기술 규격, 품질 기준 및 마일스톤 일정에 부합하는 솔루션과 장비를 공급합니다.",
        "디퓨저 기기에 대해 12~24개월 하드웨어 보증을 제공하며 천연 오일의 100% 순도 및 COA 규격을 보장합니다.",
        "합의된 기술 역량을 갖춘 IT 인력을 제공하며, 부적합 시 5영업일 이내에 대체 인력을 제안합니다.",
        "비밀유지계약(NDA)에 의거하여 고객의 비즈니스 비밀, 회계 정보 및 기술 자산을 엄격히 보호합니다."
      ],
      customerTitle: "3.2. 고객의 권리와 책임:",
      customerItems: [
        "정확한 업무 요건 및 데이터를 제공하고, 합의된 일정에 따라 인수 시험(UAT)에 적극 협력합니다.",
        "경제 계약서에 정해진 지급 기한 및 조건에 따라 대금을 전액 결제합니다.",
        "기기 수명과 안전성을 유지하기 위해 제조사 기술 매뉴얼에 따라 디퓨저 및 오일을 올바르게 사용·보관합니다."
      ]
    },
    sec4: {
      title: "4. 소스 코드 저작권 및 지식재산권",
      p1: "맞춤형 소프트웨어 개발 및 ERP 커스텀 프로젝트에서 고객이 계약상 모든 대금 지급 의무를 완료하면, <strong>CreditBird는 개발된 소스 코드(Source Code), 데이터베이스 구조 및 기술 문서의 소유권과 저작권을 100% 전액 고객에게 양도합니다</strong>.",
      p2: "고객은 CreditBird에 추가 라이선스 비용을 지불하지 않고 소스 코드를 수정, 기능 추가, 사내 배포하거나 제3자에게 유지보수를 위탁할 완전한 권리를 보유합니다."
    },
    sec5: {
      title: "5. 대금 결제 및 검수 인수 마일스톤",
      intro: "결제 일정 및 검수 인수는 각 개별 계약서 또는 발주서에 명시됩니다:",
      items: [
        { label: "소프트웨어 및 ERP 수주 개발", text: "단계별 분할 결제: 계약금 (30%), 프로토타입/알파 납품 (30%), UAT 검수/교육 완료 (30%), 최종 잔금 (10%)." },
        { label: "IT 인재 파견 서비스", text: "고객 승인 타임시트(Timesheet)에 기반하여 매월 말 정기 정산 및 인보이스 발행." },
        { label: "디퓨저 하드웨어 및 에센셜 오일", text: "주문별 정산 또는 정기 공급 계약에 따르며, 베트남 공식 부가가치세(VAT) 전자세금계산서 발행." }
      ]
    },
    sec6: {
      title: "6. 비밀유지서약 (NDA)",
      p1: "프로젝트 협의, 설계 및 시스템 구축 과정에서 공유된 모든 소스 코드, ERP 데이터, 재무 정보 및 기술 노하우는 비밀유지협약(NDA)의 엄격한 보호를 받습니다.",
      p2: "비밀유지 의무는 서비스 계약이 종료되거나 정산이 완료된 이후에도 영구적으로 효력을 유지합니다."
    },
    sec7: {
      title: "7. 준거법 및 분쟁 해결 관할 법원",
      p1: "본 약관은 베트남 사회주의 공화국의 현행 법률에 따라 규율되고 해석됩니다.",
      p2: "본 계약과 관련하여 발생하는 모든 분쟁은 상호 선의의 협의를 통해 우선 해결합니다. 30일 이내에 협의가 이루어지지 않을 경우, 호치민시 관할 인민법원에 소송을 제기하여 해결합니다."
    }
  },
  th: {
    sec1: {
      title: "1. ข้อกำหนดทั่วไปและข้อมูลนิติบุคคล",
      intro: "ยินดีต้อนรับสู่ <strong>CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CREDITBIRD TECHNOLOGY CO., LTD)</strong> (ต่อไปนี้จะเรียกว่า \"CreditBird\" หรือ \"เรา\") เมื่อท่านเข้าใช้งานเว็บไซต์ ขอคำปรึกษา ลงนามในสัญญา หรือซื้อผลิตภัณฑ์ ท่านตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารนี้",
      company: {
        nameLabel: "ชื่อจดทะเบียนนิติบุคคล",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "ชื่อการค้าระหว่างประเทศ",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "เลขประจำตัวผู้เสียภาษี",
        taxVal: "0315397327 (ออกเมื่อวันที่ 19 พฤศจิกายน 2018)",
        authLabel: "หน่วยงานผู้ออกใบอนุญาต",
        authVal: "กรมการวางแผนและการลงทุนแห่งนครโฮจิมินห์",
        addrLabel: "ที่อยู่สำนักงานจดทะเบียน",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "ตัวแทนตามกฎหมาย",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. ขอบเขตการให้บริการและผลิตภัณฑ์",
      intro: "CreditBird ให้บริการ 5 กลุ่มโซลูชันระดับมืออาชีพสำหรับองค์กรและธุรกิจ:",
      services: [
        { label: "การพัฒนาซอฟต์แวร์ตามสั่ง (Custom Software)", text: "ออกแบบและพัฒนาระบบเว็บ แอปพลิเคชันมือถือ ไมโครเซอร์วิส เกตเวย์การชำระเงิน และแพลตฟอร์มการจัดการดิจิทัลตามความต้องการเฉพาะของธุรกิจ" },
        { label: "การพัฒนาระบบ ERP สำหรับองค์กร", text: "ให้คำปรึกษาด้านสถาปัตยกรรมและวางระบบ ERP ครบวงจร (การผลิต MRP, การจัดการคลังสินค้า WMS, บัญชี VAS/IFRS, ทรัพยากรบุคคล และการขายหลายช่องทาง)" },
        { label: "บริการจัดหาบุคลากร IT (IT Staffing)", text: "จัดหาวิศวกร IT มืออาชีพปฏิบัติงานประจำที่สำนักงานลูกค้า (Onsite) หรือทีมพัฒนาเฉพาะทางระยะไกล (Dedicated Remote Team)" },
        { label: "เครื่องกระจายกลิ่นน้ำมันหอมระเหยอัจฉริยะ", text: "จำหน่าย ติดตั้ง และบำรุงรักษาระบบกระจายกลิ่นอุตสาหกรรมเชื่อมต่อ HVAC อาคาร โชว์รูมขนาดใหญ่ และอุปกรณ์อัจฉริยะควบคุมผ่านแอป/WiFi" },
        { label: "น้ำมันหอมระเหยธรรมชาติบริสุทธิ์ 100%", text: "จัดหาน้ำมันหอมระเหยบริสุทธิ์พร้อมใบรับรองการวิเคราะห์ (COA) และรายงานผล GC-MS สำหรับการตลาดด้วยกลิ่นสัมผัส (Scent Marketing)" }
      ]
    },
    sec3: {
      title: "3. สิทธิและหน้าที่ของคู่สัญญา",
      creditbirdTitle: "3.1. สิทธิและความรับผิดชอบของ CreditBird:",
      creditbirdItems: [
        "ส่งมอบผลิตภัณฑ์และบริการที่ตรงตามมาตรฐานทางเทคนิค คุณภาพ และกรอบเวลาที่ตกลงในสัญญา",
        "รับประกันเครื่องกระจายกลิ่นเป็นเวลา 12 - 24 เดือน และรับประกันความบริสุทธิ์ของน้ำมันหอมระเหยตามมาตรฐาน COA",
        "รักษาบุคลากร IT ให้มีความเชี่ยวชาญตามที่ตกลง และจัดหาบุคลากรทดแทนภายใน 5 วันทำการหากไม่ตรงตามความต้องการ",
        "รักษาความลับทางธุรกิจ ข้อมูลทางการเงิน และทรัพย์สินทางเทคโนโลยีของลูกค้าตามสัญญา NDA อย่างเคร่งครัด"
      ],
      customerTitle: "3.2. สิทธิและความรับผิดชอบของลูกค้า:",
      customerItems: [
        "ให้ข้อมูลข้อกำหนดทางธุรกิจที่ถูกต้องครบถ้วน และร่วมมือในการตรวจรับงานตามงวดที่กำหนด (UAT)",
        "ชำระเงินครบถ้วนและตรงเวลาตามเงื่อนไขที่ระบุในสัญญาทางเศรษฐกิจ",
        "ใช้งานอุปกรณ์กระจายกลิ่นและน้ำมันหอมระเหยตามคู่มือทางเทคนิคเพื่อความปลอดภัยและความทนทานสูงสุด"
      ]
    },
    sec4: {
      title: "4. ลิขสิทธิ์ซอร์สโค้ดและทรัพย์สินทางปัญญา",
      p1: "สำหรับสัญญาพัฒนาซอฟต์แวร์ตามสั่งและ ERP เมื่อลูกค้าชำระค่าบริการครบถ้วนตามสัญญา <strong>CreditBird โอนกรรมสิทธิ์และลิขสิทธิ์ในซอร์สโค้ด (Source Code) โครงสร้างฐานข้อมูล และเอกสารทางเทคนิคทั้งหมดให้แก่ลูกค้า 100%</strong>",
      p2: "ลูกค้ามีสิทธิ์อย่างสมบูรณ์ในการแก้ไข พัฒนาต่อยอด ใช้งานภายใน หรือมอบหมายให้บุคคลภายนอกดูแล โดยไม่ต้องจ่ายค่าธรรมเนียมใบอนุญาตเพิ่มเติมให้แก่ CreditBird"
    },
    sec5: {
      title: "5. การชำระเงินและการตรวจรับมอบงาน",
      intro: "กำหนดเวลาชำระเงินและการส่งมอบระบุไว้ในสัญญาหรือใบสั่งซื้อแต่ละฉบับ:",
      items: [
        { label: "ซอฟต์แวร์และ ERP", text: "ชำระเงินตามงวด: เงินมัดจำเริ่มโครงการ (30%), ส่งมอบ Prototype & Alpha (30%), UAT และฝึกอบรม (30%), ตรวจรับมอบงานขั้นสุดท้าย (10%)" },
        { label: "บุคลากร IT", text: "ชำระเงินและออกใบแจ้งหนี้เป็นรายเดือนตามใบบันทึกเวลาทำงาน (Timesheet) ที่ได้รับการรับรองจากลูกค้า" },
        { label: "เครื่องกระจายกลิ่นและน้ำมันหอมระเหย", text: "ชำระเงินตามคำสั่งซื้อหรือสัญญาจัดซื้อเป็นงวด พร้อมออกใบกำกับภาษีมูลค่าเพิ่ม (VAT) อิเล็กทรอนิกส์ถูกต้องตามกฎหมาย" }
      ]
    },
    sec6: {
      title: "6. ข้อตกลงการรักษาความลับ (NDA)",
      p1: "ข้อมูลทั้งหมดเกี่ยวกับซอฟต์แวร์ ข้อมูล ERP ข้อมูลทางการเงิน และความลับทางเทคโนโลยีที่คู่สัญญาได้รับรู้ระหว่างการดำเนินงานจะได้รับการคุ้มครองภายใต้สัญญา NDA",
      p2: "ภาระผูกพันในการรักษาความลับยังคงมีผลบังคับใช้อย่างไม่มีกำหนดแม้สัญญาการให้บริการจะสิ้นสุดลง"
    },
    sec7: {
      title: "7. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท",
      p1: "ข้อกำหนดนี้อยู่ภายใต้บังคับและตีความตามกฎหมายแห่งสาธารณรัฐสังคมนิยมเวียดนาม",
      p2: "ข้อพิพาทใดๆ ที่เกิดขึ้นจะได้รับการแก้ไขโดยการเจรจาฉันมิตร หากไม่สามารถตกลงกันได้ภายใน 30 วัน จะถูกนำเข้าสู่การพิจารณาของศาลประชาชนผู้มีอำนาจในนครโฮจิมินห์"
    }
  },
  lo: {
    sec1: {
      title: "1. ຂໍ້ກຳນົດທົ່ວໄປ & ຂໍ້ມູນນິຕິບຸກຄົນ",
      intro: "ຍິນດີຕ້ອນຮັບສູ່ <strong>CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CREDITBIRD TECHNOLOGY CO., LTD)</strong> (ຕໍ່ໄປນີ້ເອີ້ນວ່າ \"CreditBird\" ຫຼື \"ພວກເຮົາ\"). ເມື່ອທ່ານເຂົ້າຊົມເວັບໄຊ, ຂໍຄຳປຶກສາ, ລົງນາມສັນຍາ ຫຼື ຊື້ຜະລິດຕະພັນ, ທ່ານເຫັນດີປະຕິບັດຕາມທຸກເງື່ອນໄຂທີ່ລະບຸໃນເອກະສານນີ້.",
      company: {
        nameLabel: "ຊື່ຈົດທະບຽນນິຕິບຸກຄົນ",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "ຊື່ສາກົນ",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "ລະຫັດປະຈຳຕົວຜູ້ເສຍພາສີ",
        taxVal: "0315397327 (ອອກວັນທີ 19/11/2018)",
        authLabel: "ອົງການອອກໃບອະນຸຍາດ",
        authVal: "ພະແນກແຜນການ ແລະ ການລົງທຶນ ນະຄອນໂຮ່ຈິມິນ",
        addrLabel: "ທີ່ຢູ່ສຳນັກງານໃຫຍ່",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "ຕົວແທນຕາມກົດໝາຍ",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. ຂອບເຂດການສະໜອງບໍລິການ & ຜະລິດຕະພັນ",
      intro: "CreditBird ດຳເນີນງານ ແລະ ສະໜອງ 5 ກຸ່ມວິທີແກ້ໄຂສະເພາະດ້ານສຳລັບທຸລະກິດ:",
      services: [
        { label: "ການພັດທະນາຊອບແວຕາມສັ່ງ (Custom Software)", text: "ອອກແບບ ແລະ ພັດທະນາເວັບໄຊ, ແອັບມືຖື, ລະບົບ Microservices, ປະຕູຊຳລະເງິນ ແລະ ແພລດຟອມດິຈິຕອນຕາມຄວາມຕ້ອງການສະເພາະ." },
        { label: "ການພັດທະນາລະບົບ ERP ສຳລັບທຸລະກິດ", text: "ໃຫ້ຄຳປຶກສາ ແລະ ຕິດຕັ້ງລະບົບ ERP ຄົບວົງຈອນ (ການຜະລິດ MRP, ຄັງສິນຄ້າ WMS, ບັນຊີ VAS/IFRS, ບຸກຄະລາກອນ ແລະ ການຂາຍຫຼາຍຊ່ອງທາງ)." },
        { label: "ການສະໜອງບຸກຄະລາກອນ IT (IT Staffing)", text: "ສະໜອງວິສະວະກອນ IT ມືອາຊີບເຮັດວຽກປະຈຳການ (Onsite) ຫຼື ທີມພັດທະນາໄລຍະໄກ (Dedicated Remote Team)." },
        { label: "ເຄື່ອງກະຈາຍກິ່ນນ້ຳມັນຫອມລະເຫີຍອັດສະລິຍະ", text: "ສະໜອງ, ຕິດຕັ້ງ ແລະ ບຳລຸງຮັກສາເຄື່ອງກະຈາຍກິ່ນເຊື່ອມຕໍ່ HVAC ອາຄານ, ຫ້ອງວາງສະແດງ ແລະ ອຸປະກອນຄວບຄຸມຜ່ານແອັບ/WiFi." },
        { label: "ນ້ຳມັນຫອມລະເຫີຍທຳມະຊາດ 100%", text: "ສະໜອງນ້ຳມັນຫອມລະເຫີຍບໍລິສຸດ ພ້ອມໃບຢັ້ງຢືນ COA ແລະ ຜົນກວດສອບ GC-MS ສຳລັບການຕະຫຼາດດ້ວຍກິ່ນ (Scent Marketing)." }
      ]
    },
    sec3: {
      title: "3. ສິດ ແລະ ພັນທະຂອງຄູ່ສັນຍາ",
      creditbirdTitle: "3.1. ສິດ ແລະ ຄວາມຮັບຜິດຊອບຂອງ CreditBird:",
      creditbirdItems: [
        "ສະໜອງຜະລິດຕະພັນ ແລະ ບໍລິການທີ່ຖືກຕ້ອງຕາມມາດຕະຖານເຕັກນິກ, ຄຸນນະພາບ ແລະ ກຳນົດເວລາໃນສັນຍາ.",
        "ຮັບປະກັນອຸປະກອນເຄື່ອງກະຈາຍກິ່ນ 12 - 24 ເດືອນ ແລະ ຮັບປະກັນນ້ຳມັນຫອມລະເຫີຍໄດ້ມາດຕະຖານ COA.",
        "ຮັກສາບຸກຄະລາກອນ IT ທີ່ມີຄຸນວຸດທິ ແລະ ປ່ຽນແທນພາຍໃນ 5 ວັນລັດຖະການຫາກບໍ່ຕອບສະໜອງຄວາມຕ້ອງການ.",
        "ຮັກສາຄວາມລັບທາງທຸລະກິດ ແລະ ຂໍ້ມູນລູກຄ້າພາຍໃຕ້ສັນຍາ NDA ຢ່າງເຂັ້ມງວດ."
      ],
      customerTitle: "3.2. ສິດ ແລະ ຄວາມຮັບຜິດຊອບຂອງລູກຄ້າ:",
      customerItems: [
        "ສະໜອງຄວາມຕ້ອງການ ແລະ ຂໍ້ມູນທີ່ຖືກຕ້ອງ, ພ້ອມທັງຮ່ວມມືກວດຮັບງານຕາມກຳນົດເວລາ.",
        "ຊຳລະເງິນຄົບຖ້ວນ ແລະ ທັນເວລາຕາມເງື່ອນໄຂໃນສັນຍາເສດຖະກິດ.",
        "ນຳໃຊ້ອຸປະກອນ ແລະ ນ້ຳມັນຫອມລະເຫີຍຕາມຄຳແນະນຳເຕັກນິກເພື່ອຄວາມປອດໄພ ແລະ ຄວາມທົນທານສູງສຸດ."
      ]
    },
    sec4: {
      title: "4. ລິຂະສິດຊອດໂຄ້ດ & ຊັບສິນທາງປັນຍາ",
      p1: "ສຳລັບສັນຍາພັດທະນາຊອບແວຕາມສັ່ງ ແລະ ERP, ເມື່ອລູກຄ້າຊຳລະເງິນຄົບຖ້ວນ, <strong>CreditBird ໂອນກຳມະສິດ ແລະ ລິຂະສິດໃນຊອດໂຄ້ດ (Source Code), ຖານຂໍ້ມູນ ແລະ ເອກະສານເຕັກນິກທັງໝົດໃຫ້ແກ່ລູກຄ້າ 100%</strong>.",
      p2: "ລູກຄ້າມີສິດດັດແກ້, ພັດທະນາຕໍ່ຍອດ, ນຳໃຊ້ພາຍໃນ ຫຼື ມອບໝາຍໃຫ້ພາກສ່ວນອື່ນບຳລຸງຮັກສາ ໂດຍບໍ່ຕ້ອງເສຍຄ່າທຳນຽມເພີ່ມເຕີມ."
    },
    sec5: {
      title: "5. ການຊຳລະເງິນ & ການກວດຮັບມອບວຽກ",
      intro: "ກຳນົດເວລາຊຳລະເງິນ ແລະ ການມອບຮັບຖືກກຳນົດໃນສັນຍາ ຫຼື ໃບສັ່ງຊື້ສະເພາະ:",
      items: [
        { label: "ຊອບແວ & ERP", text: "ຊຳລະຕາມງວດ: ເງິນມັດຈຳ (30%), ສົ່ງມອບ Prototype & Alpha (30%), UAT & ຝຶກອົບຮົມ (30%), ກວດຮັບຂັ້ນສຸດທ້າຍ (10%)." },
        { label: "ບຸກຄະລາກອນ IT", text: "ສະສາງ ແລະ ອອກໃບແຈ້ງໜີ້ປະຈຳເດືອນຕາມໃບບັນທຶກເວລາ (Timesheet) ທີ່ລູກຄ້າຢັ້ງຢືນ." },
        { label: "ອຸປະກອນ & ນ້ຳມັນຫອມລະເຫີຍ", text: "ຊຳລະຕາມແຕ່ລະຄຳສັ່ງຊື້ ພ້ອມອອກໃບກຳກັບພາສີມູນຄ່າເພີ່ມ (VAT) ຖືກຕ້ອງຕາມກົດໝາຍ." }
      ]
    },
    sec6: {
      title: "6. ສັນຍາຮັກສາຄວາມລັບ (NDA)",
      p1: "ຂໍ້ມູນທັງໝົດກ່ຽວກັບຊອບແວ, ERP, ການເງິນ ແລະ ເຕັກໂນໂລຊີທີ່ໄດ້ຮັບຮູ້ລະຫວ່າງການເຮັດວຽກ ແມ່ນໄດ້ຮັບການປົກປ້ອງພາຍໃຕ້ສັນຍາ NDA.",
      p2: "ພັນທະຮັກສາຄວາມລັບຍັງຄົງມີຜົນສັກສິດຢ່າງບໍ່ມີກຳນົດ ເຖິງແມ່ນສັນຍາບໍລິການຈະສິ້ນສຸດລົງ."
    },
    sec7: {
      title: "7. ກົດໝາຍທີ່ນຳໃຊ້ & ການແກ້ໄຂຂໍ້ຂັດແຍ່ງ",
      p1: "ເງື່ອນໄຂນີ້ຖືກຄຸ້ມຄອງ ແລະ ຕີຄວາມໝາຍຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ສັງຄົມນິຍົມ ຫວຽດນາມ.",
      p2: "ທຸກຂໍ້ຂັດແຍ່ງຈະຖືກແກ້ໄຂໂດຍການເຈລະຈາດ້ວຍຄວາມຈິງໃຈ. ຫາກບໍ່ສາມາດຕົກລົງກັນໄດ້ພາຍໃນ 30 ວັນ, ຈະຖືກນຳຂຶ້ນສານປະຊາຊົນທີ່ມີສິດອຳນາດຢູ່ນະຄອນໂຮ່ຈິມິນ."
    }
  },
  ms: {
    sec1: {
      title: "1. Peruntukan Umum & Entiti Perundangan",
      intro: "Selamat datang ke <strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong> (selepas ini dirujuk sebagai \"CreditBird\" atau \"Kami\"). Apabila anda melayari laman web ini, meminta perundingan, menandatangani kontrak perkhidmatan atau membeli produk, anda bersetuju untuk mematuhi semua terma dan syarat yang dinyatakan di sini.",
      company: {
        nameLabel: "Nama Entiti Berdaftar",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "Nama Dagang Antarabangsa",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "Kod Cukai / Nombor Pendaftaran",
        taxVal: "0315397327 (Dikeluarkan pada 19/11/2018)",
        authLabel: "Pihak Berkuasa Pelesenan",
        authVal: "Jabatan Perancangan dan Pelaburan Bandar Raya Ho Chi Minh",
        addrLabel: "Alamat Pejabat Berdaftar",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "Wakil Sah Perundangan",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. Skop Produk & Perkhidmatan",
      intro: "CreditBird menyediakan 5 bahagian penyelesaian industri khusus untuk organisasi dan perniagaan:",
      services: [
        { label: "Pembangunan Perisian Tersuai (Custom Software)", text: "Reka bentuk dan pembangunan aplikasi web, aplikasi mudah alih, seni bina perkhidmatan mikro (microservices), gerbang pembayaran selamat dan platform operasi digital." },
        { label: "Penyelesaian Sistem ERP Perusahaan", text: "Perundingan seni bina dan pelaksanaan sistem ERP bersepadu (pengeluaran MRP, logistik gudang WMS, perakaunan VAS/IFRS, pengurusan HR dan jualan omnisaluran)." },
        { label: "Penyumberan Luar Tenaga Kerja IT (IT Staffing)", text: "Membekalkan jurutera IT profesional yang bekerja di tapak (Onsite) pejabat pelanggan atau melalui pasukan kejuruteraan jauh khusus (Dedicated Remote Team)." },
        { label: "Peralatan Peresap Minyak Pati Pintar", text: "Pembekalan, pemasangan dan penyelenggaraan sistem peresap aroma industri bersepadu HVAC bangunan, bilik pameran dan peranti pintar dikawal melalui Aplikasi/WiFi." },
        { label: "Minyak Pati Asli 100% Tulen", text: "Membekalkan minyak pati semula jadi tulen dengan Sijil Analisis (COA) antarabangsa dan profil kromatografi GC-MS untuk pemasaran aroma komersial." }
      ]
    },
    sec3: {
      title: "3. Hak dan Kewajipan Pihak-Pihak",
      creditbirdTitle: "3.1. Hak & Tanggungjawab CreditBird:",
      creditbirdItems: [
        "Membekalkan produk dan perkhidmatan mengikut spesifikasi teknikal, piawaian kualiti dan jadual masa yang dipersetujui dalam kontrak.",
        "Menyediakan jaminan perkakasan 12 - 24 bulan bagi peranti peresap dan menjamin ketulenan minyak pati semula jadi mengikut standard COA.",
        "Mengekalkan kakitangan IT berkelayakan mengikut profil kompetensi; menggantikan kakitangan dalam tempoh 5 hari bekerja sekiranya tidak memenuhi piawaian.",
        "Melindungi rahsia perniagaan, rekod kewangan dan aset teknologi pelanggan di bawah kewajipan NDA secara ketat."
      ],
      customerTitle: "3.2. Hak & Tanggungjawab Pelanggan:",
      customerItems: [
        "Memberikan keperluan perniagaan yang tepat, data input dan bekerjasama semasa pengesahan pencapaian (UAT).",
        "Menjelaskan bayaran secara penuh dan tepat pada masanya mengikut terma pembayaran dalam kontrak ekonomi.",
        "Mengendalikan perkakasan peresap dan minyak pati mengikut arahan teknikal pengeluar untuk ketahanan dan keselamatan maksimum."
      ]
    },
    sec4: {
      title: "4. Hak Cipta Kod Sumber & Harta Intelek",
      p1: "Bagi kontrak pembangunan perisian tersuai dan ERP, selepas pelanggan menyelesaikan semua obligasi pembayaran, <strong>CreditBird memindahkan 100% hak milik kod sumber (Source Code), skema pangkalan data dan dokumentasi teknikal sepenuhnya kepada pelanggan</strong>.",
      p2: "Pelanggan mempunyai kuasa penuh untuk mengubah suai, menaik taraf, menggunakan secara dalaman atau melantik pihak ketiga untuk penyelenggaraan tanpa sebarang bayaran royalti tambahan kepada CreditBird."
    },
    sec5: {
      title: "5. Syarat Pembayaran & Pencapaian Penyerahan",
      intro: "Jadual pembayaran dan dokumen penyerahan diperincikan dalam kontrak komersial atau pesanan pembelian masing-masing:",
      items: [
        { label: "Perisian & Kejuruteraan ERP", text: "Pembayaran mengikut peringkat: Deposit permulaan (30%), Penyerahan Prototaip & Alpha (30%), UAT & Latihan (30%), Penyerahan muktamad (10%)." },
        { label: "Perkhidmatan Tenaga Kerja IT", text: "Diselesaikan dan diinvois setiap bulan berdasarkan helaian masa (Timesheet) yang disahkan oleh pelanggan." },
        { label: "Perkakasan & Minyak Pati", text: "Diselesaikan bagi setiap pesanan atau kontrak perolehan berkala, disertakan invois Cukai Nilai Tambah (VAT) elektronik yang sah." }
      ]
    },
    sec6: {
      title: "6. Perjanjian Kerahsiaan (NDA)",
      p1: "Semua maklumat projek perisian, struktur data ERP, maklumat kewangan dan kepakaran teknologi yang diakses semasa perbincangan dan pelaksanaan dilindungi dengan ketat di bawah NDA.",
      p2: "Kewajipan kerahsiaan kekal berkuat kuasa selama-lamanya walaupun kontrak perkhidmatan telah tamat atau dibubarkan."
    },
    sec7: {
      title: "7. Undang-Undang Yang Mentadbir & Penyelesaian Pertikaian",
      p1: "Terma ini ditadbir dan ditafsirkan mengikut undang-undang berkanun Republik Sosialis Vietnam.",
      p2: "Sebarang pertikaian yang timbul hendaklah diselesaikan melalui rundingan damai terlebih dahulu. Sekiranya tidak selesai dalam tempoh 30 hari, pertikaian akan dibawa ke Mahkamah Rakyat yang berbidang kuasa di Bandar Raya Ho Chi Minh."
    }
  },
  es: {
    sec1: {
      title: "1. Disposiciones Generales e Información de la Entidad Legal",
      intro: "Bienvenido a <strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong> (en adelante, \"CreditBird\" o \"Nosotros\"). Al acceder a nuestro sitio web, solicitar asesoramiento, suscribir contratos de servicios o adquirir productos, usted acepta cumplir y someterse a todos los términos y condiciones aquí establecidos.",
      company: {
        nameLabel: "Razón Social Registrada",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "Denominación Comercial Internacional",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "Código de Identificación Fiscal / NIF",
        taxVal: "0315397327 (Expedido el 19/11/2018)",
        authLabel: "Autoridad Emisora",
        authVal: "Departamento de Planificación e Inversión de Ciudad Ho Chi Minh",
        addrLabel: "Domicilio Social",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "Representante Legal",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. Alcance de Productos y Servicios",
      intro: "CreditBird desarrolla y suministra 5 divisiones de soluciones tecnológicas especializadas para empresas y organizaciones:",
      services: [
        { label: "Desarrollo de Software a Medida", text: "Diseño y despliegue de plataformas web, aplicaciones móviles, microservicios, pasarelas de pago y sistemas de operaciones digitales empresariales." },
        { label: "Desarrollo de Sistemas ERP Empresariales", text: "Consultoría e implantación de sistemas ERP integrales (producción MRP, logística WMS, contabilidad VAS/IFRS, recursos humanos y ventas omnicanal)." },
        { label: "Externalización y Selección de Talento TI", text: "Provisión de ingenieros de software cualificados trabajando en las instalaciones del cliente (Onsite) o en equipos remotos dedicados." },
        { label: "Difusores Inteligentes de Aromas", text: "Venta, instalación y mantenimiento de sistemas industriales de difusión de aromas integrados en HVAC y equipos inteligentes controlados por App/WiFi." },
        { label: "Aceites Esenciales 100% Puros y Naturales", text: "Suministro de aceites botánicos puros con Certificados de Análisis (COA) internacionales y cromatografía GC-MS para marketing olfativo corporativo." }
      ]
    },
    sec3: {
      title: "3. Derechos y Obligaciones de las Partes",
      creditbirdTitle: "3.1. Derechos y Responsabilidades de CreditBird:",
      creditbirdItems: [
        "Suministrar soluciones de software, sistemas ERP y hardware conforme a los estándares de calidad y plazos pactados en el contrato.",
        "Ofrecer garantía de hardware de 12 a 24 meses en difusores y asegurar la pureza botánica de los aceites según norma COA.",
        "Mantener personal de TI capacitado y reemplazar profesionales en un plazo máximo de 5 días hábiles si no satisfacen los requisitos.",
        "Salvaguardar los secretos comerciales, datos financieros y propiedad tecnológica del cliente bajo estrictos acuerdos NDA."
      ],
      customerTitle: "3.2. Derechos y Responsabilidades del Cliente:",
      customerItems: [
        "Facilitar especificaciones precisas, datos iniciales y colaborar activamente en las pruebas de aceptación (UAT).",
        "Efectuar los pagos en su totalidad según el calendario establecido en el contrato económico.",
        "Utilizar los difusores y aceites esenciales de acuerdo con las instrucciones técnicas del fabricante para asegurar su máxima durabilidad."
      ]
    },
    sec4: {
      title: "4. Propiedad del Código Fuente y Propiedad Intelectual",
      p1: "En los proyectos de desarrollo a medida y personalización ERP, una vez satisfechas todas las obligaciones de pago contractuales, <strong>CreditBird transfiere el 100% de la propiedad y derechos de autor del código fuente (Source Code), esquemas de base de datos y documentación técnica al cliente</strong>.",
      p2: "El cliente conserva plenos derechos para modificar, ampliar, implementar internamente o delegar el mantenimiento a terceros sin abonar regalías adicionales a CreditBird."
    },
    sec5: {
      title: "5. Condiciones de Pago y Entregas",
      intro: "Los plazos de pago y actas de recepción se detallan en cada contrato comercial o pedido correspondiente:",
      items: [
        { label: "Software e Ingeniería ERP", text: "Facturación por hitos: Anticipo de inicio (30%), Entrega de Prototipo y Alpha (30%), Aceptación UAT y formación (30%), Liquidación final (10%)." },
        { label: "Servicios de Personal TI", text: "Facturación periódica mensual basada en partes de horas (Timesheets) validados por el cliente." },
        { label: "Equipos y Aceites Esenciales", text: "Pago por pedido o contratos de suministro periódico, con emisión de factura electrónica de IVA oficial de Vietnam." }
      ]
    },
    sec6: {
      title: "6. Acuerdo de Confidencialidad (NDA)",
      p1: "Toda la información técnica, bases de datos ERP, datos financieros y metodologías compartidas durante las negociaciones y ejecución están protegidas bajo un estricto acuerdo de confidencialidad (NDA).",
      p2: "Las obligaciones de confidencialidad permanecen vigentes por tiempo indefinido incluso tras la finalización del contrato."
    },
    sec7: {
      title: "7. Ley Aplicable y Jurisdicción Competente",
      p1: "Estos términos se rigen e interpretan de conformidad con la legislación de la República Socialista de Vietnam.",
      p2: "Cualquier controversia se resolverá prioritariamente mediante negociación amistosa. Si no se alcanza un acuerdo en 30 días, se someterá a los Tribunales Populares competentes de Ciudad Ho Chi Minh."
    }
  },
  fr: {
    sec1: {
      title: "1. Dispositions Générales & Entité Juridique",
      intro: "Bienvenue sur le site de <strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong> (ci-après dénommée \"CreditBird\" ou \"Nous\"). En consultant notre site, en sollicitant un audit, en concluant un contrat de services ou en achetant nos produits, vous acceptez d'être lié par les présentes conditions générales.",
      company: {
        nameLabel: "Raison Sociale Enregistrée",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "Dénomination Commerciale Internationale",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "Numéro d'Immatriculation Fiscale",
        taxVal: "0315397327 (Délivré le 19/11/2018)",
        authLabel: "Autorité d'Enregistrement",
        authVal: "Département du Plan et de l'Investissement de Hô Chi Minh-Ville",
        addrLabel: "Siège Social",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "Représentant Légal",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. Champ d'Application des Produits & Services",
      intro: "CreditBird opère à travers 5 pôles d'expertise dédiés aux entreprises et organisations :",
      services: [
        { label: "Développement Logiciel Sur Mesure", text: "Conception de plateformes web, applications mobiles, architectures microservices, passerelles de paiement sécurisées et logiciels opérationnels." },
        { label: "Déploiement de Systèmes ERP d'Entreprise", text: "Conseil en architecture et intégration d'ERP (production MRP, gestion d'entrepôt WMS, comptabilité VAS/IFRS, RH et vente omnicanale)." },
        { label: "Délégation de Compétences IT (Régie & Équipes Dédiées)", text: "Mise à disposition d'ingénieurs qualifiés intervenant sur site (Onsite) ou au sein d'équipes de développement à distance dédiées." },
        { label: "Diffuseurs de Parfum Professionnels Connectés", text: "Fourniture, installation et maintenance de diffuseurs industriels raccordés aux réseaux de climatisation HVAC et appareils connectés WiFi/App." },
        { label: "Huiles Essentielles 100% Pures & Naturelles", text: "Fourniture d'huiles essentielles pures certifiées avec certificats d'analyse (COA) et profils chromatographiques GC-MS pour le marketing olfactif." }
      ]
    },
    sec3: {
      title: "3. Droits et Obligations des Parties",
      creditbirdTitle: "3.1. Droits et Engagements de CreditBird :",
      creditbirdItems: [
        "Fournir les prestations et équipements conformément aux spécifications techniques et jalons convenus au contrat.",
        "Assurer une garantie matérielle de 12 à 24 mois sur les diffuseurs et garantir la pureté des huiles certifiées COA.",
        "Maintenir des profils d'ingénieurs conformes aux compétences requises et procéder à un remplacement sous 5 jours ouvrés en cas d'inadéquation.",
        "Préserver la stricte confidentialité des secrets d'affaires, données financières et actifs technologiques du client."
      ],
      customerTitle: "3.2. Droits et Obligations du Client :",
      customerItems: [
        "Fournir les spécifications fonctionnelles exactes et collaborer activement lors des phases de recette (UAT).",
        "Régler les factures dans leur intégralité selon l'échéancier stipulé au contrat commercial.",
        "Utiliser le matériel et les huiles selon les préconisations techniques du fabricant afin d'en garantir la pérennité."
      ]
    },
    sec4: {
      title: "4. Propriété du Code Source & Propriété Intellectuelle",
      p1: "Pour les développements sur mesure et projets ERP, dès complet règlement des obligations financières contractuelles, <strong>CreditBird cède 100 % de la propriété et des droits d'auteur sur le code source (Source Code), les bases de données et la documentation au client</strong>.",
      p2: "Le client dispose du droit exclusif de modifier, faire évoluer, exploiter en interne ou confier la maintenance à un tiers sans redevance supplémentaire envers CreditBird."
    },
    sec5: {
      title: "5. Modalités de Paiement & Recette de Livraison",
      intro: "Le calendrier de facturation et les procès-verbaux de recette sont établis dans chaque contrat ou bon de commande :",
      items: [
        { label: "Ingénierie Logicielle & ERP", text: "Facturation par jalons : Acompte de démarrage (30%), Livraison Prototype & Alpha (30%), Validation UAT & Formation (30%), Solde de recette définitive (10%)." },
        { label: "Prestations d'Ingénierie IT", text: "Facturation mensuelle récurrente sur la base des relevés d'heures (Timesheets) approuvés par le client." },
        { label: "Matériel & Huiles Essentielles", text: "Règlement à la commande ou contrat d'approvisionnement régulier avec facture électronique TVA vietnamienne conforme." }
      ]
    },
    sec6: {
      title: "6. Engagement de Confidentialité (NDA)",
      p1: "Toutes les données de projet, structures ERP, chiffres financiers et savoir-faire technologique échangés sont protégés par un accord de confidentialité strict (NDA).",
      p2: "L'obligation de confidentialité demeure pleinement effective sans limitation de durée après la fin du contrat."
    },
    sec7: {
      title: "7. Loi Applicable & Règlement des Litiges",
      p1: "Les présentes conditions sont régies et interprétées conformément au droit de la République Socialiste du Vietnam.",
      p2: "Tout différend fera l'objet d'une tentative de conciliation amiable. À défaut d'accord sous 30 jours, le litige sera soumis aux tribunaux compétents de Hô Chi Minh-Ville."
    }
  },
  hi: {
    sec1: {
      title: "1. सामान्य नियम और कानूनी इकाई जानकारी",
      intro: "<strong>CREDITBIRD TECHNOLOGY COMPANY LIMITED</strong> (इसके बाद \"CreditBird\" या \"हम\") में आपका स्वागत है। हमारी वेबसाइट का उपयोग करने, परामर्श का अनुरोध करने, सेवा अनुबंध पर हस्ताक्षर करने या उत्पादों की खरीद करने पर, आप यहां उल्लिखित सभी नियमों और शर्तों का पालन करने के लिए सहमत होते हैं।",
      company: {
        nameLabel: "पंजीकृत इकाई नाम",
        nameVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        intlLabel: "अंतरराष्ट्रीय व्यापारिक नाम",
        intlVal: "CREDITBIRD TECHNOLOGY CO., LTD",
        taxLabel: "उद्यम कोड / कर पहचान संख्या (Tax ID)",
        taxVal: "0315397327 (जारी दिनांक: 19/11/2018)",
        authLabel: "अनुमोदन प्राधिकरण",
        authVal: "हो ची मिन्ह सिटी योजना एवं निवेश विभाग",
        addrLabel: "पंजीकृत कार्यालय पता",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        repLabel: "कानूनी प्रतिनिधि",
        repVal: "TRAN TRONG TRI"
      }
    },
    sec2: {
      title: "2. उत्पाद और सेवा आपूर्ति का दायरा",
      intro: "CreditBird उद्यमों और संगठनों के लिए 5 मुख्य तकनीकी समाधान प्रभाग संचालित करता है:",
      services: [
        { label: "कस्टम सॉफ्टवेयर इंजीनियरिंग", text: "वेब प्लेटफॉर्म, मोबाइल ऐप, माइक्रोसर्विसेज आर्किटेक्चर, सुरक्षित भुगतान गेटवे और डिजिटल संचालन प्रबंधन सॉफ्टवेयर का निर्माण।" },
        { label: "एंटरप्राइज़ ईआरपी सिस्टम विकास", text: "एकीकृत ईआरपी सिस्टम का परामर्श और कार्यान्वयन (उत्पादन एमआरपी, डब्लूएमएस वेयरहाउस लॉजिस्टिक्स, वीएएस/आईएफआरएस लेखांकन, एचआर और ओमनीचैनल बिक्री)।" },
        { label: "आईटी स्टाफिंग और विशेषज्ञ टीम आउटसोर्सिंग", text: "ग्राहक कार्यालय में ऑन-साइट या समर्पित रिमोट इंजीनियरिंग टीमों के माध्यम से योग्य सॉफ्टवेयर इंजीनियरों की आपूर्ति।" },
        { label: "स्मार्ट वाणिज्यिक डिफ्यूज़र उपकरण", text: "एचवीएसी केंद्रीय एयर कंडीशनिंग से जुड़े औद्योगिक डिफ्यूज़र, शोरूम उपकरण और ऐप/वाईफाई नियंत्रित स्मार्ट हार्डवेयर की आपूर्ति और रखरखाव।" },
        { label: "100% शुद्ध प्राकृतिक आवश्यक तेल", text: "अंतरराष्ट्रीय सीओए प्रमाणपत्र और जीसी-एमएस क्रोमैटोग्राफी प्रोफाइल के साथ वाणिज्यिक खुशबू विपणन के लिए प्रीमियम प्राकृतिक आवश्यक तेल।" }
      ]
    },
    sec3: {
      title: "3. अनुबंध पक्षों के अधिकार और दायित्व",
      creditbirdTitle: "3.1. CreditBird के अधिकार और जिम्मेदारियां:",
      creditbirdItems: [
        "अनुबंध में सहमत तकनीकी विनिर्देशों, गुणवत्ता मानकों और समय सीमा के अनुसार समाधान और उपकरण वितरित करना।",
        "डिफ्यूज़र मशीनों पर 12-24 महीने की वारंटी प्रदान करना और सीओए मानकों के तहत तेल की 100% शुद्धता की गारंटी देना।",
        "सहमति प्राप्त दक्षता वाले आईटी कर्मियों को बनाए रखना और आवश्यकता पड़ने पर 5 कार्य दिवसों के भीतर प्रतिस्थापन प्रदान करना।",
        "एनडीए समझौते के तहत ग्राहक के व्यापारिक रहस्यों, वित्तीय रिकॉर्ड और तकनीकी संपत्तियों की पूर्ण गोपनीयता सुनिश्चित करना।"
      ],
      customerTitle: "3.2. ग्राहक के अधिकार और जिम्मेदारियां:",
      customerItems: [
        "सटीक परिचालन आवश्यकताएं और डेटा प्रदान करना तथा स्वीकृति परीक्षण (UAT) में समय पर सहयोग करना।",
        "अनुबंध में निर्धारित भुगतान शर्तों के अनुसार समय पर पूर्ण भुगतान करना।",
        "उपकरण की लंबी उम्र और सुरक्षा के लिए तकनीकी निर्देशों के अनुसार डिफ्यूज़र और तेल का सही उपयोग करना।"
      ]
    },
    sec4: {
      title: "4. स्रोत कोड स्वामित्व और बौद्धिक संपदा",
      p1: "कस्टम सॉफ्टवेयर और ईआरपी विकास परियोजनाओं में, ग्राहक द्वारा पूर्ण भुगतान किए जाने के बाद, <strong>CreditBird स्रोत कोड (Source Code), डेटाबेस आर्किटेक्चर और तकनीकी दस्तावेजों का 100% स्वामित्व ग्राहक को हस्तांतरित करता है</strong>।",
      p2: "ग्राहक को CreditBird को अतिरिक्त लाइसेंस शुल्क दिए बिना स्रोत कोड को संशोधित करने, आंतरिक रूप से तैनात करने या किसी तीसरे पक्ष को रखरखाव सौंपने का पूर्ण अधिकार है।"
    },
    sec5: {
      title: "5. भुगतान शर्तें और सुपुर्दगी मील के पत्थर",
      intro: "भुगतान कार्यक्रम और स्वीकृति दस्तावेज संबंधित वाणिज्यिक अनुबंधों में निर्दिष्ट किए जाते हैं:",
      items: [
        { label: "सॉफ्टवेयर और ईआरपी इंजीनियरिंग", text: "चरणबद्ध भुगतान: परियोजना प्रारंभ अग्रिम (30%), प्रोटोटाइप/अल्फा वितरण (30%), यूएटी परीक्षण और प्रशिक्षण (30%), अंतिम समापन (10%)।" },
        { label: "आईटी स्टाफिंग सेवाएं", text: "ग्राहक द्वारा सत्यापित टाइमशीट के आधार पर मासिक आधार पर बिलिंग और चालान।" },
        { label: "हार्डवेयर और आवश्यक तेल", text: "प्रति ऑर्डर या आवधिक आपूर्ति अनुबंधों के अनुसार भुगतान, वैध वियतनाम वैट इलेक्ट्रॉनिक चालान के साथ।" }
      ]
    },
    sec6: {
      title: "6. गैर-प्रकटीकरण समझौता (NDA)",
      p1: "परियोजना के दौरान साझा किए गए सभी सॉफ्टवेयर कोड, ईआरपी डेटा, वित्तीय जानकारी और तकनीकी ज्ञान एनडीए समझौते के तहत सुरक्षित हैं।",
      p2: "गोपनीयता का दायित्व सेवा अनुबंध समाप्त होने के बाद भी अनिश्चित काल तक प्रभावी रहता है।"
    },
    sec7: {
      title: "7. लागू कानून और विवाद समाधान",
      p1: "ये शर्तें वियतनाम के समाजवादी गणराज्य के मौजूदा कानूनों द्वारा शासित और व्याख्यायित की जाती हैं।",
      p2: "किसी भी विवाद को पहले सौहार्दपूर्ण बातचीत के माध्यम से सुलझाया जाएगा। यदि 30 दिनों में समाधान नहीं होता है, तो विवाद को हो ची मिन्ह सिटी के सक्षम पीपुल्स कोर्ट में प्रस्तुत किया जाएगा।"
    }
  }
};

const output = `import type { TermsContent, SupportedLocale } from './types';

export const termsContent: Record<SupportedLocale, TermsContent> = ${JSON.stringify(termsData, null, 2)};

export function getTermsContent(locale: string): TermsContent {
  const loc = locale.toLowerCase() as SupportedLocale;
  return termsContent[loc] || termsContent['en'];
}
`;

fs.writeFileSync("src/lib/data/legal/terms.ts", output, "utf8");
console.log("Successfully generated src/lib/data/legal/terms.ts with 11 locales!");
