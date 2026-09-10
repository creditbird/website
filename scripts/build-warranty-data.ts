import fs from "fs";

const warrantyData = {
  vi: {
    sec1: {
      title: "1. Bảo hành thiết bị máy phun tinh dầu & Thiết bị HVAC",
      intro: "CreditBird cam kết bảo hành chính hãng đối với tất cả các dòng thiết bị máy khuếch tán tinh dầu do công ty phân phối và lắp đặt:",
      cards: {
        hvacTitle: "Máy phun tinh dầu công nghiệp kết nối HVAC",
        hvacWarranty: "BẢO HÀNH 24 THÁNG",
        hvacDesc: "Bảo dưỡng định kỳ đường ống dẫn, đầu phun siêu âm áp lực cao và van điện từ kết nối hệ thống thông gió tòa nhà.",
        retailTitle: "Máy khuếch tán Showroom & Khách sạn",
        retailWarranty: "BẢO HÀNH 12 - 18 THÁNG",
        retailDesc: "Bảo hành bo mạch điều khiển WiFi/Bluetooth, module hẹn giờ tự động và cụm bơm khí nguyên khối."
      },
      replacementTitle: "Chính sách đổi mới linh kiện khẩn cấp:",
      replacementItems: [
        "Trong vòng 30 ngày đầu tiên sử dụng, nếu phát sinh lỗi phần cứng do nhà sản xuất, khách hàng được đổi mới thiết bị 100%.",
        "Hỗ trợ cung cấp thiết bị thay thế tạm thời trong vòng 24 giờ tại khu vực TP. Hồ Chí Minh trong thời gian kiểm tra hoặc sửa chữa máy chính, đảm bảo không gian hương thơm không bị gián đoạn."
      ]
    },
    sec2: {
      title: "2. Cam kết chất lượng tinh dầu thiên nhiên COA",
      intro: "Chất lượng tinh dầu là yếu tố cốt lõi bảo đảm sức khỏe con người và tuổi thọ thiết bị phun. CreditBird cam kết:",
      items: [
        { label: "100% Tinh dầu thiên nhiên nguyên chất", text: "Tuyệt đối không pha cồn công nghiệp, không chứa chì, thủy ngân, phthalate hay các chất cấm theo quy định y tế." },
        { label: "Đầy đủ hồ sơ kiểm định quốc tế", text: "Mỗi lô tinh dầu xuất kho đều kèm theo Chứng nhận phân tích thành phần (COA - Certificate of Analysis), Bảng dữ liệu an toàn vật liệu (MSDS) và Phiếu kiểm nghiệm sắc ký khí (GC-MS)." },
        { label: "Chính sách đổi trả tức thì", text: "Đổi mới 100% trong vòng 07 ngày nếu phát hiện bao bì niêm phong bị rò rỉ, vỡ hỏng do vận chuyển hoặc chất lượng mùi hương không đúng với mẫu cam kết." }
      ]
    },
    sec3: {
      title: "3. Cam kết mức độ dịch vụ (SLA) Phần mềm & ERP",
      intro: "Đối với các hệ thống phần mềm may đo và ERP do CreditBird phát triển hoặc nhận ủy thác bảo trì vận hành, chúng tôi áp dụng khung cam kết dịch vụ (Service Level Agreement - SLA) nghiêm ngặt:",
      table: {
        thLevel: "Mức độ sự cố",
        thImpact: "Định nghĩa ảnh hưởng",
        thResponse: "Thời gian phản hồi",
        thResolution: "Mục tiêu xử lý",
        rows: [
          { level: "P1 - Khẩn cấp", levelClass: "text-red-600", impact: "Toàn bộ hệ thống ngừng hoạt động, không thể thực hiện giao dịch hoặc mất dữ liệu.", response: "< 15 phút", resolution: "Khắc phục trong vòng 2 - 4 giờ" },
          { level: "P2 - Nghiêm trọng", levelClass: "text-amber-600", impact: "Chức năng cốt lõi bị lỗi (bán hàng, kho bãi, đối soát thanh toán), có giải pháp tạm thời.", response: "< 1 giờ", resolution: "Khắc phục trong vòng 8 giờ" },
          { level: "P3 - Tiêu chuẩn", levelClass: "text-blue-600", impact: "Lỗi nhỏ không ảnh hưởng lớn đến vận hành, yêu cầu hỗ trợ người dùng, tối ưu giao diện.", response: "< 4 giờ", resolution: "Khắc phục trong vòng 24 - 48 giờ" }
        ]
      },
      uptimeNote: "CreditBird cam kết độ sẵn sàng hạ tầng máy chủ và ứng dụng đạt tối thiểu 99.9% mỗi tháng (loại trừ các đợt bảo trì định kỳ có thông báo trước tối thiểu 48 giờ)."
    },
    sec4: {
      title: "4. Quy trình tiếp nhận & Xử lý bảo hành",
      steps: [
        { num: "01", title: "Tiếp nhận yêu cầu:", desc: "Khách hàng liên hệ qua Hotline +84 932 640 968 hoặc gửi email tới contact@creditbirdtech.com kèm mã số hợp đồng / serial thiết bị." },
        { num: "02", title: "Chẩn đoán & Hướng dẫn từ xa:", desc: "Kỹ sư phụ trách liên hệ trực tiếp trong 15 - 30 phút để kiểm tra logs telemetry hoặc hướng dẫn xử lý nhanh." },
        { num: "03", title: "Xử lý tại hiện trường hoặc máy chủ:", desc: "Kỹ thuật viên đến tận nơi kiểm tra máy phun hoặc kỹ sư triển khai hotfix mã nguồn bảo mật trên môi trường staging trước khi deploy production." },
        { num: "04", title: "Nghiệm thu & Đánh giá:", desc: "Khách hàng ký biên bản bàn giao hoàn thành bảo hành và đánh giá chất lượng dịch vụ." }
      ]
    },
    sec5: {
      title: "5. Các trường hợp từ chối hoặc tính phí bảo hành",
      intro: "Chính sách bảo hành miễn phí không áp dụng đối với các trường hợp:",
      exclusions: [
        "Thiết bị máy phun bị va đập vật lý, rơi vỡ, biến dạng hoặc bị vào nước/chất lỏng khác ngoài tinh dầu theo khuyến nghị.",
        "Khách hàng tự ý tháo mở máy, sửa chữa bo mạch hoặc can thiệp mã nguồn phần mềm mà không có sự đồng ý bằng văn bản của CreditBird.",
        "Thiệt hại do thiên tai, hỏa hoạn, sét đánh hoặc sự cố lưới điện vượt quá thông số kỹ thuật cho phép.",
        "Sử dụng tinh dầu trôi nổi, pha cồn hoặc dầu khoáng không rõ nguồn gốc dẫn đến tắc nghẽn hoặc cháy bơm khuếch tán."
      ],
      paidSupportNote: "Đối với các trường hợp trên, CreditBird vẫn cung cấp dịch vụ sửa chữa và thay thế linh kiện chính hãng với mức chi phí ưu đãi dành cho khách hàng thân thiết."
    }
  },
  en: {
    sec1: {
      title: "1. Hardware & HVAC Diffuser Warranty",
      intro: "CreditBird guarantees comprehensive manufacturer warranty support for all commercial diffuser units supplied and deployed:",
      cards: {
        hvacTitle: "HVAC-Integrated Industrial Scent Diffusers",
        hvacWarranty: "24-MONTH WARRANTY",
        hvacDesc: "Preventative maintenance of aerosol conduits, high-pressure ultrasonic nozzles, and building ventilation solenoid valves.",
        retailTitle: "Showroom & Hospitality Fragrance Diffusers",
        retailWarranty: "12 - 18 MONTH WARRANTY",
        retailDesc: "Hardware coverage for WiFi/Bluetooth controller motherboards, automated timer modules, and monolithic air compression pumps."
      },
      replacementTitle: "Rapid Component Replacement Policy:",
      replacementItems: [
        "Full unit replacement within the first 30 days of operation in the event of validated manufacturing hardware defects.",
        "Hot-swap temporary machine delivery within 24 hours in the Ho Chi Minh City metropolitan area during diagnostic servicing."
      ]
    },
    sec2: {
      title: "2. COA Pure Botanical Essential Oil Quality Pledge",
      intro: "Essential oil purity directly governs consumer health and hardware lifespan. CreditBird certifies:",
      items: [
        { label: "100% Pure Botanical Essential Oils", text: "Zero industrial alcohol blending, strictly devoid of lead, mercury, phthalates, or prohibited additives." },
        { label: "Complete International Verification Dossiers", text: "Every batch ships with official Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), and GC-MS chromatography profiles." },
        { label: "Immediate Replacement Assurance", text: "100% replacement within 7 days if factory seals are compromised during transit or aroma profiles deviate from approved benchmark samples." }
      ]
    },
    sec3: {
      title: "3. Service Level Agreements (SLA) for Software & ERP",
      intro: "For bespoke software architectures and ERP environments engineered or maintained by CreditBird, we uphold rigorous SLA benchmarks:",
      table: {
        thLevel: "Incident Priority",
        thImpact: "Business Impact Definition",
        thResponse: "Initial Response SLA",
        thResolution: "Target Resolution Time",
        rows: [
          { level: "P1 - Critical Outage", levelClass: "text-red-600", impact: "System-wide outage, transactional failure, or immediate threat of data corruption.", response: "< 15 mins", resolution: "Resolution within 2 - 4 hours" },
          { level: "P2 - High Severity", levelClass: "text-amber-600", impact: "Core operational degradation (sales processing, inventory ledger, billing), workaround available.", response: "< 1 hour", resolution: "Resolution within 8 hours" },
          { level: "P3 - Standard Issue", levelClass: "text-blue-600", impact: "Non-critical bugs, cosmetic inconsistencies, workflow user support, or minor UI adjustments.", response: "< 4 hours", resolution: "Resolution within 24 - 48 hours" }
        ]
      },
      uptimeNote: "CreditBird guarantees a minimum monthly server infrastructure and application availability of 99.9% (excluding scheduled maintenance pre-notified 48 hours in advance)."
    },
    sec4: {
      title: "4. Warranty Intake & Incident Resolution Protocol",
      steps: [
        { num: "01", title: "Incident Intake:", desc: "Submit tickets via Hotline +84 932 640 968 or email contact@creditbirdtech.com referencing your contract code and hardware serial number." },
        { num: "02", title: "Remote Telemetry & Triage:", desc: "Assigned engineering leads respond within 15 - 30 minutes to review telemetry error logs or initiate remote diagnostics." },
        { num: "03", title: "Onsite Service or Code Hotfix:", desc: "Technicians dispatch onsite for hardware repairs, or engineers deploy security hotfixes to staging prior to zero-downtime production deployment." },
        { num: "04", title: "Client Acceptance & Closure:", desc: "Formal sign-off of the incident handover report and satisfaction review upon resolution." }
      ]
    },
    sec5: {
      title: "5. Warranty Exclusions & Billable Servicing",
      intro: "Complimentary warranty coverage does not apply under the following circumstances:",
      exclusions: [
        "Physical impacts, drops, external deformation, or liquid ingress other than approved essential oils.",
        "Unauthorized disassembly, unauthorized circuit modifications, or codebase tampering without prior written authorization from CreditBird.",
        "Damage resulting from natural disasters, lightning strikes, fire, or severe electrical grid surges exceeding hardware ratings.",
        "Utilization of counterfeit, mineral-diluted, or non-certified essential oils causing diffusion pump clogs or motor burnouts."
      ],
      paidSupportNote: "In non-covered circumstances, CreditBird provides paid maintenance and genuine component replacements at preferential rates for enterprise partners."
    }
  },
  zh: {
    sec1: {
      title: "1. 智能扩香机与中央空调 HVAC 设备质保",
      intro: "CreditBird 为本公司销售并负责安装的全部商用香氛扩香设备提供官方品质保证：",
      cards: {
        hvacTitle: "中央空调 HVAC 管道接入型工业扩香机",
        hvacWarranty: "整机质保 24 个月",
        hvacDesc: "定期维保连接管道、高压超微雾化喷嘴及楼宇通风系统联动电磁阀门。",
        retailTitle: "展厅独立型与酒店商用扩香机",
        retailWarranty: "质保 12 至 18 个月",
        retailDesc: "全方位保障 WiFi/蓝牙智能控制主板、自动化定时芯片及一体化静音气泵总成。"
      },
      replacementTitle: "突发故障快速换机与备用机政策：",
      replacementItems: [
        "自交付使用起 30 日内，若因制造缺陷发生硬件故障，免费换全新原装设备。",
        "在主要大都市圈（胡志明市及周边）提供 24 小时内应急备用机上门安装，保障客户香氛空间无缝运作。"
      ]
    },
    sec2: {
      title: "2. 100% 纯天然精油国际 COA 质量承诺",
      intro: "精油品质直接关系到人体呼吸健康与扩香设备寿命。CreditBird 郑重承诺：",
      items: [
        { label: "100% 纯天然植物萃取原油", text: "严禁添加工业酒精、邻苯二甲酸酯、重金属铅汞等任何卫生健康法规明令禁止的化学添加剂。" },
        { label: "随货附带完整国际质检报告", text: "每批出库精油均附带成分分析证书（COA）、材料安全数据表（MSDS）及安捷伦 GC-MS 色谱质谱检测凭证。" },
        { label: "损坏即时补发与包退包换", text: "运输途中出现瓶体破损、渗漏或气味与封样不符，7 个自然日内提供 100% 极速免费换新。" }
      ]
    },
    sec3: {
      title: "3. 软件工程与企业 ERP 服务等级协议 (SLA)",
      intro: "对于由 CreditBird 研发或受托运维的定制软件及企业级 ERP 系统，严格履行以下服务等级协议（SLA）：",
      table: {
        thLevel: "故障优先级",
        thImpact: "业务影响界定",
        thResponse: "首次响应时效",
        thResolution: "问题解决目标",
        rows: [
          { level: "P1 - 紧急中断", levelClass: "text-red-600", impact: "系统全局瘫痪、核心交易中断或面临数据损毁风险。", response: "< 15 分钟", resolution: "2 至 4 小时内排除" },
          { level: "P2 - 严重故障", levelClass: "text-amber-600", impact: "核心业务模块受阻（销售、仓储盘点、财务对账），存在临时应急方案。", response: "< 1 小时", resolution: "8 小时内排除" },
          { level: "P3 - 一般问题", levelClass: "text-blue-600", impact: "非关键功能微小瑕疵、界面显示优化、用户常规咨询协助。", response: "< 4 小时", resolution: "24 至 48 小时内完成" }
        ]
      },
      uptimeNote: "CreditBird 承诺月度基础设施与应用系统可用性不低于 99.9%（提前 48 小时通知的计划性停机维护除外）。"
    },
    sec4: {
      title: "4. 售后申报与工单闭环处置流程",
      steps: [
        { num: "01", title: "工单受理接入：", desc: "拨打热线 +84 932 640 968 或发送邮件至 contact@creditbirdtech.com，注明合同编号及设备序列号。" },
        { num: "02", title: "远程遥测与技术分流：", desc: "专属工程技术专家在 15-30 分钟内调取系统日志进行远程诊断排查。" },
        { num: "03", title: "现场派工或热修复部署：", desc: "技术专员上门检修扩香硬件，或软件团队在 Staging 环境验证后部署代码 Hotfix。" },
        { num: "04", title: "复核验收与服务归档：", desc: "客户签署售后服务验收单并对技术响应与处置质量进行打分评价。" }
      ]
    },
    sec5: {
      title: "5. 免责除外条款与有偿维保说明",
      intro: "以下情形不属于免费质保受理范围：",
      exclusions: [
        "人为物理跌落、外力撞击导致的外壳破损或加注非推荐液体造成的进液腐蚀。",
        "未经 CreditBird 书面授权私自拆解设备电路或擅自篡改系统底层源码。",
        "因火灾、雷击、水灾等不可抗力或超出设备额定电压造成的硬件电气烧毁。",
        "使用劣质、掺杂工业溶剂或矿物油导致的喷头结焦与气泵烧毁。"
      ],
      paidSupportNote: "对于上述除外情况，CreditBird 仍将提供优质的有偿维修与原厂配件更换支持。"
    }
  },
  ja: {
    sec1: {
      title: "1. アロマディフューザー機器および空調（HVAC）機器の製品保証",
      intro: "CreditBirdは、販売および施工を行うすべての業務用ディフューザー機器に対して公式保証を提供します：",
      cards: {
        hvacTitle: "空調（HVAC）連動型業務用ディフューザー",
        hvacWarranty: "24ヶ月間保証",
        hvacDesc: "配管ダクト、高圧超音波マイクロノズル、および空調連動ソレノイドバルブの定期点検と保守。",
        retailTitle: "ショールーム・ホテル向けディフューザー",
        retailWarranty: "12〜18ヶ月間保証",
        retailDesc: "WiFi/Bluetooth制御基板、自動タイマーモジュール、および高耐久ポンプユニットのハードウェア保証。"
      },
      replacementTitle: "緊急部品交換および代替機サポート：",
      replacementItems: [
        "納品後30日以内に初期不良が発生した場合、無償で新品交換いたします。",
        "ホーチミン市近郊エリアでは、修理期間中も芳香空間を維持できるよう24時間以内に代替機を無償提供します。"
      ]
    },
    sec2: {
      title: "2. 100%天然純粋エッセンシャルオイル COA品質保証",
      intro: "精油の品質は人体への安全性と機器の耐用年数に直結します。当社は以下を保証します：",
      items: [
        { label: "100%天然純粋精油の保証", text: "工業用アルコール、鉛、水銀、フタル酸エステルなどの有害物質は一切添加していません。" },
        { label: "国際検査書類の完備", text: "出荷ロットごとに成分分析書（COA）、安全データシート（MSDS）、およびGC-MSガスクロマトグラフィー検査証を添付。" },
        { label: "迅速な交換対応", text: "配送時の破損、漏れ、または香りの異常が確認された場合、7日以内に全量新品と交換いたします。" }
      ]
    },
    sec3: {
      title: "3. ソフトウェアおよびERPシステム SLA保証基準",
      intro: "CreditBirdが受託開発または保守運用を担当するシステムについて、厳格なサービスレベル合意（SLA）を適用します：",
      table: {
        thLevel: "障害レベル",
        thImpact: "業務影響の定義",
        thResponse: "初回応答時間",
        thResolution: "復旧対応目標",
        rows: [
          { level: "P1 - 緊急停止", levelClass: "text-red-600", impact: "全システム停止、決済不能、またはデータ喪失の危険。", response: "15分以内", resolution: "2〜4時間以内に復旧" },
          { level: "P2 - 重大障害", levelClass: "text-amber-600", impact: "主要機能（販売、在庫、会計）の停止、代替回避策あり。", response: "1時間以内", resolution: "8時間以内に復旧" },
          { level: "P3 - 標準事象", levelClass: "text-blue-600", impact: "軽微なバグ、UI表示の乱れ、一般的な操作問い合わせ。", response: "4時間以内", resolution: "24〜48時間以内に対応" }
        ]
      },
      uptimeNote: "当社は、月間サーバーおよびアプリケーション稼働率99.9%以上を保証します（48時間前に通知された計画保守を除く）。"
    },
    sec4: {
      title: "4. サポート受付およびトラブルシューティング手順",
      steps: [
        { num: "01", title: "サポート受付:", desc: "ホットライン +84 932 640 968 またはメール contact@creditbirdtech.com まで契約コードを添えてご連絡ください。" },
        { num: "02", title: "遠隔診断とトリアージ:", desc: "担当エンジニアが15〜30分以内にテレメトリログを確認し初期診断を行います。" },
        { num: "03", title: "現場対応または修正パッチ:", desc: "技術スタッフによる現地訪問点検、またはステージング検証後のコードHotfixを適用します。" },
        { num: "04", title: "完了確認と検収:", desc: "復旧完了報告書をご確認いただき、対応品質の評価をいただきます。" }
      ]
    },
    sec5: {
      title: "5. 保証適用外事項および有償サポート",
      intro: "以下の事由に起因する故障は無償保証の対象外となります：",
      exclusions: [
        "落下、強い衝撃による破損、または指定外液体の混入による内部腐食。",
        "当社の書面による事前承諾なしに行われた機器の分解、基板改造、またはソースコードの改変。",
        "天災地変、落雷、火災、または許容値を超える異常電圧に起因する故障。",
        "粗悪な精油や鉱物油の使用に起因するノズルの詰まりやポンプの焼き付き。"
      ],
      paidSupportNote: "保証対象外の場合でも、純正部品を用いた有償修理サービスを特別優待価格にて承ります。"
    }
  },
  ko: {
    sec1: {
      title: "1. 스마트 디퓨저 및 공조기(HVAC) 하드웨어 품질 보증",
      intro: "CreditBird는 유통 및 설치하는 모든 상업용 향기 디퓨저 기기에 대해 정품 보증을 제공합니다:",
      cards: {
        hvacTitle: "중앙 공조(HVAC) 연동형 산업용 디퓨저",
        hvacWarranty: "24개월 무상 보증",
        hvacDesc: "연결 덕트, 고압 초음파 마이크로 노즐 및 공조 연동 솔레노이드 밸브 정기 점검 지원.",
        retailTitle: "쇼룸 및 호텔 상업용 독립형 디퓨저",
        retailWarranty: "12~18개월 무상 보증",
        retailDesc: "WiFi/블루투스 제어 메인보드, 자동 타이머 모듈 및 고내구성 에어펌프 하드웨어 보증."
      },
      replacementTitle: "긴급 부품 교체 및 대체 장비 지원:",
      replacementItems: [
        "설치 후 30일 이내 제조상 결함으로 인한 하드웨어 불량 발생 시 100% 새 제품으로 즉시 교환.",
        "호치민 및 인근 지역 내 수리 기간 중 향기 공백이 발생하지 않도록 24시간 이내 대체 장비 무상 대여."
      ]
    },
    sec2: {
      title: "2. 100% 천연 순수 에센셜 오일 COA 품질 보증",
      intro: "에센셜 오일의 순도는 고객의 건강과 기기 수명에 직결됩니다. 당사는 다음을 보증합니다:",
      items: [
        { label: "100% 순수 천연 에센셜 오일", text: "공업용 알코올, 납, 수은, 프탈레이트 등 유해 물질이 전혀 포함되지 않은 천연 원유만을 공급합니다." },
        { label: "국제 시험 성적서 완비", text: "모든 출고 로트마다 성분분석표(COA), 물질안전보건자료(MSDS), GC-MS 가스 크로마토그래피 검사 성적서 첨부." },
        { label: "즉각적인 무상 교환", text: "운송 중 용기 파손이나 누유, 또는 향취 이상 발견 시 7일 이내 100% 무상 교환을 보장합니다." }
      ]
    },
    sec3: {
      title: "3. 소프트웨어 및 ERP 서비스 수준 협약 (SLA)",
      intro: "CreditBird가 개발 또는 운영을 위탁받은 커스텀 소프트웨어 및 ERP에 대해 엄격한 SLA를 준수합니다:",
      table: {
        thLevel: "장애 등급",
        thImpact: "비즈니스 영향도",
        thResponse: "초기 응답 시한",
        thResolution: "조치 완료 목표",
        rows: [
          { level: "P1 - 긴급 중단", levelClass: "text-red-600", impact: "전체 시스템 가동 중단, 결제 불능, 데이터 손실 위험.", response: "15분 이내", resolution: "2~4시간 이내 해결" },
          { level: "P2 - 주요 장애", levelClass: "text-amber-600", impact: "핵심 업무 기능 오류(주문, 재고, 회계 전표), 임시 우회 방안 존재.", response: "1시간 이내", resolution: "8시간 이내 해결" },
          { level: "P3 - 일반 문의", levelClass: "text-blue-600", impact: "경미한 버그, UI 표시 최적화, 일반 기능 문의.", response: "4시간 이내", resolution: "24~48시간 이내 조치" }
        ]
      },
      uptimeNote: "당사는 월간 서버 및 인프라 가동률 99.9% 이상을 보장합니다 (48시간 사전 공지된 정기 유지보수 제외)."
    },
    sec4: {
      title: "4. 장애 접수 및 조치 프로세스",
      steps: [
        { num: "01", title: "장애 접수:", desc: "핫라인 +84 932 640 968 또는 이메일 contact@creditbirdtech.com으로 계약 번호와 기기 시리얼을 접수합니다." },
        { num: "02", title: "원격 진단 및 분석:", desc: "담당 엔지니어가 15~30분 이내에 시스템 로그를 확인하고 원격 진단을 진행합니다." },
        { num: "03", title: "현장 방문 또는 패치 배포:", desc: "현장 엔지니어가 출동하여 기기를 점검하거나 스테이징 환경 검증 후 핫픽스 코드를 배포합니다." },
        { num: "04", title: "최종 검수 및 종료:", desc: "고객 담당자의 복구 확인 서명 및 만족도 평가 후 지원을 완료합니다." }
      ]
    },
    sec5: {
      title: "5. 무상 보증 제외 사항 및 유상 지원",
      intro: "다음의 사유로 인한 고장은 무상 보증 대상에서 제외됩니다:",
      exclusions: [
        "외력에 의한 파손, 낙하 충격, 권장하지 않는 액체 투입으로 인한 침수 및 부식.",
        "CreditBird의 서면 동의 없는 임의 분해, 회로 기판 개조, 소프트웨어 소스 코드 임의 변경.",
        "천재지변, 화재, 낙뢰 또는 규격 허용치를 초과하는 이상 전압으로 인한 부품 소손.",
        "불량 오일 또는 광물성 오일 혼합 사용으로 인한 분사 노즐 막힘 및 모터 과열."
      ],
      paidSupportNote: "무상 보증 제외 건에 대해서도 CreditBird 정품 부품을 사용한 유상 수리를 우대 비용으로 제공합니다."
    }
  },
  th: {
    sec1: {
      title: "1. การรับประกันอุปกรณ์กระจายกลิ่นและระบบ HVAC",
      intro: "CreditBird ให้การรับประกันของแท้สำหรับเครื่องกระจายกลิ่นน้ำมันหอมระเหยทุกรุ่นที่ติดตั้งและจัดจำหน่าย:",
      cards: {
        hvacTitle: "เครื่องกระจายกลิ่นอุตสาหกรรมเชื่อมต่อระบบ HVAC",
        hvacWarranty: "รับประกัน 24 เดือน",
        hvacDesc: "บำรุงรักษาท่อส่ง หัวพ่นละอองความดันสูง และโซลินอยด์วาล์วเชื่อมต่อระบบระบายอากาศของอาคาร",
        retailTitle: "เครื่องกระจายกลิ่นสำหรับโชว์รูมและโรงแรม",
        retailWarranty: "รับประกัน 12 - 18 เดือน",
        retailDesc: "รับประกันแผงวงจรควบคุม WiFi/บลูทูธ โมดูลตั้งเวลาอัตโนมัติ และชุดปั๊มลมแรงดันสูง"
      },
      replacementTitle: "นโยบายการเปลี่ยนชิ้นส่วนและเครื่องทดแทนฉุกเฉิน:",
      replacementItems: [
        "ภายใน 30 วันแรกของการใช้งาน หากเกิดข้อบกพร่องจากการผลิต เปลี่ยนเครื่องใหม่ให้ 100%",
        "บริการจัดส่งเครื่องทดแทนชั่วคราวภายใน 24 ชั่วโมงในเขตพื้นที่นครโฮจิมินห์ระหว่างรอการตรวจสอบหรือซ่อมแซม"
      ]
    },
    sec2: {
      title: "2. คำมั่นสัญญาด้านคุณภาพน้ำมันหอมระเหยแท้ COA",
      intro: "ความบริสุทธิ์ของน้ำมันหอมระเหยเป็นหัวใจสำคัญต่อสุขภาพและการทำงานของเครื่องจักร CreditBird รับประกัน:",
      items: [
        { label: "น้ำมันหอมระเหยธรรมชาติบริสุทธิ์ 100%", text: "ปราศจากแอลกอฮอล์อุตสาหกรรม สารตะกั่ว ปรอท หรือสารต้องห้ามทางการแพทย์อย่างสิ้นเชิง" },
        { label: "เอกสารรับรองมาตรฐานสากลครบถ้วน", text: "ทุกล็อตที่จัดส่งมาพร้อมใบรับรองการวิเคราะห์ (COA), เอกสารข้อมูลความปลอดภัย (MSDS) และผลทดสอบ GC-MS" },
        { label: "นโยบายเปลี่ยนคืนสินค้าทันที", text: "เปลี่ยนสินค้าใหม่ 100% ภายใน 7 วัน หากบรรจุภัณฑ์รั่วซึม ชำรุดจากการขนส่ง หรือกลิ่นไม่ตรงตามตัวอย่างที่ตกลง" }
      ]
    },
    sec3: {
      title: "3. ข้อตกลงระดับการบริการ (SLA) ด้านซอฟต์แวร์และ ERP",
      intro: "สำหรับระบบซอฟต์แวร์และ ERP ที่พัฒนาหรือดูแลโดย CreditBird เราปฏิบัติตามกรอบ SLA อย่างเข้มงวด:",
      table: {
        thLevel: "ระดับความรุนแรง",
        thImpact: "ผลกระทบต่อธุรกิจ",
        thResponse: "เวลาตอบกลับเบื้องต้น",
        thResolution: "เป้าหมายการแก้ไข",
        rows: [
          { level: "P1 - ฉุกเฉินระดับวิกฤต", levelClass: "text-red-600", impact: "ระบบทั้งหมดหยุดทำงาน ไม่สามารถทำธุรกรรมได้ หรือมีความเสี่ยงต่อการสูญหายของข้อมูล", response: "< 15 นาที", resolution: "แก้ไขภายใน 2 - 4 ชั่วโมง" },
          { level: "P2 - รุนแรง", levelClass: "text-amber-600", impact: "ฟังก์ชันหลักทำงานผิดพลาด (การขาย คลังสินค้า บัญชี) มีวิธีแก้ปัญหาชั่วคราว", response: "< 1 ชั่วโมง", resolution: "แก้ไขภายใน 8 ชั่วโมง" },
          { level: "P3 - มาตรฐาน", levelClass: "text-blue-600", impact: "ข้อผิดพลาดเล็กน้อย การปรับแต่งหน้าจอ การสนับสนุนการใช้งานทั่วไป", response: "< 4 ชั่วโมง", resolution: "แก้ไขภายใน 24 - 48 ชั่วโมง" }
        ]
      },
      uptimeNote: "CreditBird รับประกันความพร้อมทำงานของโครงสร้างพื้นฐานและแอปพลิเคชันไม่ต่ำกว่า 99.9% ต่อเดือน (ไม่รวมการบำรุงรักษาตามแผนที่แจ้งล่วงหน้า 48 ชั่วโมง)"
    },
    sec4: {
      title: "4. ขั้นตอนการรับแจ้งและแก้ไขปัญหาการรับประกัน",
      steps: [
        { num: "01", title: "รับแจ้งเรื่อง:", desc: "ติดต่อสายด่วน +84 932 640 968 หรือส่งอีเมลมาที่ contact@creditbirdtech.com พร้อมระบุรหัสสัญญา/หมายเลขซีเรียลเครื่อง" },
        { num: "02", title: "วินิจฉัยจากระยะไกล:", desc: "วิศวกรผู้รับผิดชอบติดต่อกลับภายใน 15 - 30 นาที เพื่อตรวจสอบบันทึกระบบหรือให้คำแนะนำเบื้องต้น" },
        { num: "03", title: "ลงพื้นที่หรือปล่อย Hotfix:", desc: "ส่งช่างเทคนิคลงพื้นที่ตรวจสอบอุปกรณ์ หรือทีมซอฟต์แวร์ปล่อยโค้ดแก้ไขด่วนหลังทดสอบในระบบ Staging" },
        { num: "04", title: "ตรวจรับและปิดงาน:", desc: "ลูกค้าลงนามในเอกสารส่งมอบงานรับประกันและประเมินคุณภาพการให้บริการ" }
      ]
    },
    sec5: {
      title: "5. ข้อยกเว้นการรับประกันและบริการแบบมีค่าใช้จ่าย",
      intro: "การรับประกันฟรีไม่ครอบคลุมในกรณีดังต่อไปนี้:",
      exclusions: [
        "อุปกรณ์ตกหล่น กระแทก แตกหัก ผิดรูปทรง หรือมีของเหลวอื่นนอกเหนือจากน้ำมันหอมระเหยเข้าสู่ตัวเครื่อง",
        "การรื้อ ถอด ซ่อมแซม หรือดัดแปลงวงจรไฟฟ้าและซอร์สโค้ดโดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรจาก CreditBird",
        "ความเสียหายจากภัยธรรมชาติ ฟ้าผ่า อัคคีภัย หรือปัญหาแรงดันไฟฟ้าเกินมาตรฐาน",
        "การใช้น้ำมันหอมระเหยปลอมปน แอลกอฮอล์ หรือน้ำมันแร่ที่ไม่ได้มาตรฐานจนทำให้หัวพ่นอุดตันหรือปั๊มไหม้"
      ],
      paidSupportNote: "ในกรณีข้างต้น CreditBird ยังคงให้บริการซ่อมแซมและเปลี่ยนชิ้นส่วนอะไหล่แท้ในราคาพิเศษสำหรับลูกค้าองค์กร"
    }
  },
  lo: {
    sec1: {
      title: "1. ການຮັບປະກັນອຸປະກອນກະຈາຍກິ່ນ & ລະບົບ HVAC",
      intro: "CreditBird ຮັບປະກັນຂອງແທ້ສຳລັບທຸກລຸ້ນອຸປະກອນກະຈາຍກິ່ນນ້ຳມັນຫອມລະເຫີຍທີ່ບໍລິສັດຕິດຕັ້ງ ແລະ ຈຳໜ່າຍ:",
      cards: {
        hvacTitle: "ເຄື່ອງກະຈາຍກິ່ນອຸດສາຫະກຳເຊື່ອມຕໍ່ລະບົບ HVAC",
        hvacWarranty: "ຮັບປະກັນ 24 ເດືອນ",
        hvacDesc: "ບຳລຸງຮັກສາທໍ່ສົ່ງ, ຫົວພົ່ນຄວາມດັນສູງ ແລະ ວາວໄຟຟ້າເຊື່ອມຕໍ່ລະບົບລະບາຍອາກາດຂອງອາຄານ.",
        retailTitle: "ເຄື່ອງກະຈາຍກິ່ນສຳລັບຫ້ອງວາງສະແດງ & ໂຮງແຮມ",
        retailWarranty: "ຮັບປະກັນ 12 - 18 ເດືອນ",
        retailDesc: "ຮັບປະກັນແຜງວົງຈອນ WiFi/Bluetooth, ໂມດູນຕັ້ງເວລາ ແລະ ຊຸດປ້ຳລົມ."
      },
      replacementTitle: "ນະໂຍບາຍປ່ຽນອຸປະກອນ & ເຄື່ອງທົດແທນສຸກເສີນ:",
      replacementItems: [
        "ພາຍໃນ 30 ວັນທຳອິດຂອງການນຳໃຊ້ ຫາກເກີດຂໍ້ຜິດພາດຈາກໂຮງງານ ປ່ຽນເຄື່ອງໃໝ່ໃຫ້ 100%.",
        "ສະໜອງເຄື່ອງທົດແທນຊົ່ວຄາວພາຍໃນ 24 ຊົ່ວໂມງໃນເຂດນະຄອນໂຮ່ຈິມິນໃນລະຫວ່າງການກວດເຊັກຫຼືສ້ອມແປງ."
      ]
    },
    sec2: {
      title: "2. ຄຳໝັ້ນສັນຍາຄຸນນະພາບນ້ຳມັນຫອມລະເຫີຍທຳມະຊາດ COA",
      intro: "ຄວາມບໍລິສຸດຂອງນ້ຳມັນຫອມລະເຫີຍແມ່ນຫົວໃຈສຳຄັນຕໍ່ສຸຂະພາບ ແລະ ອາຍຸການໃຊ້ງານຂອງອຸປະກອນ. CreditBird ຮັບປະກັນ:",
      items: [
        { label: "ນ້ຳມັນຫອມລະເຫີຍທຳມະຊາດ 100%", text: "ບໍ່ມີສານເຄມີ, ບໍ່ປະສົມເຫຼົ້າອຸດສາຫະກຳ, ບໍ່ມີສານຕະກົ່ວ ຫຼື ສານຕ້ອງຫ້າມ." },
        { label: "ເອກະສານກວດສອບສາກົນຄົບຊຸດ", text: "ທຸກຊຸດມີໃບຢັ້ງຢືນ COA, ເອກະສານ MSDS ແລະ ຜົນກວດສອບ GC-MS ຢ່າງຄົບຖ້ວນ." },
        { label: "ນະໂຍບາຍປ່ຽນແທນທັນທີ", text: "ປ່ຽນໃໝ່ 100% ພາຍໃນ 7 ວັນ ຫາກພົບການຮົ່ວໄຫຼ ຫຼື ຄຸນນະພາບກິ່ນບໍ່ກົງກັບມາດຕະຖານ." }
      ]
    },
    sec3: {
      title: "3. ຂໍ້ຕົກລົງລະດັບການບໍລິການ (SLA) ຊອບແວ & ERP",
      intro: "ສຳລັບລະບົບຊອບແວ ແລະ ERP ທີ່ພັດທະນາ ຫຼື ບຳລຸງຮັກສາໂດຍ CreditBird, ພວກເຮົາປະຕິບັດຕາມມາດຕະຖານ SLA ຢ່າງເຂັ້ມງວດ:",
      table: {
        thLevel: "ລະດັບເຫດການ",
        thImpact: "ຜົນກະທົບຕໍ່ທຸລະກິດ",
        thResponse: "ເວລາຕອບກັບເບື້ອງຕົ້ນ",
        thResolution: "ເປົ້າໝາຍການແກ້ໄຂ",
        rows: [
          { level: "P1 - ສຸກເສີນວິກິດ", levelClass: "text-red-600", impact: "ລະບົບຢຸດເຮັດວຽກທັງໝົດ, ບໍ່ສາມາດດຳເນີນທຸລະກຳ ຫຼື ສ່ຽງຕໍ່ການສູນເສຍຂໍ້ມູນ.", response: "< 15 ນາທີ", resolution: "ແກ້ໄຂພາຍໃນ 2 - 4 ຊົ່ວໂມງ" },
          { level: "P2 - ຮ້າຍແຮງ", levelClass: "text-amber-600", impact: "ຟັງຊັນຫຼັກຜິດພາດ (ການຂາຍ, ຄັງສິນຄ້າ, ບັນຊີ), ມີວິທີແກ້ໄຂຊົ່ວຄາວ.", response: "< 1 ຊົ່ວໂມງ", resolution: "ແກ້ໄຂພາຍໃນ 8 ຊົ່ວໂມງ" },
          { level: "P3 - ມາດຕະຖານ", levelClass: "text-blue-600", impact: "ຂໍ້ຜິດພາດເລັກນ້ອຍ, ການປັບແຕ່ງໜ້າຈໍ, ການຊ່ວຍເຫຼືອຜູ້ໃຊ້ທົ່ວໄປ.", response: "< 4 ຊົ່ວໂມງ", resolution: "ແກ້ໄຂພາຍໃນ 24 - 48 ຊົ່ວໂມງ" }
        ]
      },
      uptimeNote: "CreditBird ຮັບປະກັນຄວາມພ້ອມໃຊ້ງານຂອງລະບົບເຊີບເວີ ແລະ ແອັບພລິເຄຊັນບໍ່ຕ່ຳກວ່າ 99.9% ຕໍ່ເດືອນ."
    },
    sec4: {
      title: "4. ຂັ້ນຕອນການຮັບແຈ້ງ & ແກ້ໄຂບັນຫາການຮັບປະກັນ",
      steps: [
        { num: "01", title: "ຮັບແຈ້ງເຫດການ:", desc: "ຕິດຕໍ່ສາຍດ່ວນ +84 932 640 968 ຫຼື ສົ່ງອີເມວຫາ contact@creditbirdtech.com ພ້ອມລະບຸເລກສັນຍາ/ຊີຣຽວອຸປະກອນ." },
        { num: "02", title: "ວິເຄາະຈາກໄລຍະໄກ:", desc: "ວິສະວະກອນຕິດຕໍ່ກັບພາຍໃນ 15 - 30 ນາທີ ເພື່ອກວດສອບບັນທຶກລະບົບ ຫຼື ແນະນຳເບື້ອງຕົ້ນ." },
        { num: "03", title: "ລົງພື້ນທີ່ ຫຼື ປ່ອຍ Hotfix:", desc: "ຊ່າງເຕັກນິກລົງກວດເຊັກອຸປະກອນ ຫຼື ທີມງານຊອບແວປ່ອຍ Hotfix ຫຼັງທົດສອບໃນ Staging." },
        { num: "04", title: "ກວດຮັບ & ປິດວຽກ:", desc: "ລູກຄ້າລົງນາມໃນໃບມອບຮັບການຮັບປະກັນ ແລະ ປະເມີນຄຸນນະພາບການບໍລິການ." }
      ]
    },
    sec5: {
      title: "5. ກໍລະນີຍົກເວັ້ນການຮັບປະກັນ & ການບໍລິການຄິດຄ່າ",
      intro: "ນະໂຍບາຍຮັບປະກັນຟຣີບໍ່ກວມເອົາກໍລະນີດັ່ງຕໍ່ໄປນີ້:",
      exclusions: [
        "ອຸປະກອນຕົກແຕກ, ກະທົບແຮງ, ຜິດຮູບຊົງ ຫຼື ມີນ້ຳ/ທາດແຫຼວອື່ນນອກຈາກນ້ຳມັນຫອມລະເຫີຍເຂົ້າໄປໃນເຄື່ອງ.",
        "ການຮື້, ຖອດ, ສ້ອມແປງ ຫຼື ດັດແປງວົງຈອນ ແລະ ຊອດໂຄ້ດໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດເປັນລາຍລັກອັກສອນຈາກ CreditBird.",
        "ຄວາມເສຍຫາຍຈາກໄພທຳມະຊາດ, ຟ້າຜ່າ, ໄຟໄໝ້ ຫຼື ໄຟຟ້າເກີນມາດຕະຖານ.",
        "ການໃຊ້ນ້ຳມັນຫອມລະເຫີຍປອມ, ປະສົມເຫຼົ້າ ຫຼື ນ້ຳມັນແຮ່ທີ່ພາໃຫ້ຫົວພົ່ນອຸດຕັນ ຫຼື ປ້ຳໄໝ້."
      ],
      paidSupportNote: "ສຳລັບກໍລະນີຂ້າງເທິງ, CreditBird ຍັງໃຫ້ບໍລິການສ້ອມແປງ ແລະ ປ່ຽນອາໄຫຼ່ແທ້ໃນລາຄາພິເສດ."
    }
  },
  ms: {
    sec1: {
      title: "1. Jaminan Peranti Peresap & Peralatan HVAC",
      intro: "CreditBird menjamin sokongan waranti pengeluar komprehensif untuk semua unit peresap komersial yang dipasang dan diedarkan:",
      cards: {
        hvacTitle: "Peresap Aroma Industri Bersepadu HVAC",
        hvacWarranty: "JAMINAN 24 BULAN",
        hvacDesc: "Penyelenggaraan berkala saluran aerosol, muncung ultrasonik tekanan tinggi dan injap solenoid pengudaraan bangunan.",
        retailTitle: "Peresap Aroma Bilik Pameran & Perhotelan",
        retailWarranty: "JAMINAN 12 - 18 BULAN",
        retailDesc: "Perlindungan perkakasan untuk papan induk WiFi/Bluetooth, modul pemasa automatik dan pam udara monolitik."
      },
      replacementTitle: "Dasar Penggantian Komponen Segera:",
      replacementItems: [
        "Penggantian unit baharu 100% dalam tempoh 30 hari pertama operasi sekiranya berlaku kecacatan perkakasan pengeluar.",
        "Penghantaran mesin gantian sementara dalam tempoh 24 jam di kawasan metropolitan Bandar Raya Ho Chi Minh sepanjang tempoh pemeriksaan."
      ]
    },
    sec2: {
      title: "2. Jaminan Kualiti Minyak Pati Semula Jadi COA",
      intro: "Ketulenan minyak pati berkait rapat dengan kesihatan pengguna dan jangka hayat mesin. CreditBird memperakui:",
      items: [
        { label: "100% Minyak Pati Semula Jadi Tulen", text: "Tiada campuran alkohol industri, bebas plumbum, merkuri, ftalat atau bahan larangan kesihatan." },
        { label: "Dossier Pengesahan Antarabangsa Lengkap", text: "Setiap kelompok dihantar bersama Sijil Analisis (COA), Helaian Data Keselamatan (MSDS) dan profil kromatografi GC-MS." },
        { label: "Jaminan Penggantian Segera", text: "Penggantian 100% dalam masa 7 hari sekiranya pembungkusan bocor semasa transit atau kualiti bauan tidak menepati sampel yang dipersetujui." }
      ]
    },
    sec3: {
      title: "3. Perjanjian Tahap Perkhidmatan (SLA) Perisian & ERP",
      intro: "Bagi seni bina perisian tersuai dan persekitaran ERP yang dibangunkan atau diselenggara oleh CreditBird, kami mematuhi piawaian SLA yang ketat:",
      table: {
        thLevel: "Tahap Insiden",
        thImpact: "Takrifan Impak Perniagaan",
        thResponse: "Masa Tindak Balas Awal",
        thResolution: "Sasaran Penyelesaian",
        rows: [
          { level: "P1 - Kecemasan Kritikal", levelClass: "text-red-600", impact: "Seluruh sistem terhenti, kegagalan transaksi atau risiko kehilangan data.", response: "< 15 minit", resolution: "Penyelesaian dalam 2 - 4 jam" },
          { level: "P2 - Keterukan Tinggi", levelClass: "text-amber-600", impact: "Fungsi teras terganggu (jualan, lejar gudang, perakaunan), pelan luar jangka tersedia.", response: "< 1 jam", resolution: "Penyelesaian dalam 8 jam" },
          { level: "P3 - Isu Standard", levelClass: "text-blue-600", impact: "Pepijat kecil tidak menjejaskan operasi, sokongan pengguna atau pengoptimuman UI.", response: "< 4 jam", resolution: "Penyelesaian dalam 24 - 48 jam" }
        ]
      },
      uptimeNote: "CreditBird menjamin ketersediaan pelayan dan aplikasi minimum 99.9% setiap bulan (tidak termasuk penyelenggaraan berjadual yang dimaklumkan 48 jam lebih awal)."
    },
    sec4: {
      title: "4. Protokol Penerimaan & Pengendalian Jaminan",
      steps: [
        { num: "01", title: "Penerimaan Tiket:", desc: "Hubungi Talian Kecemasan +84 932 640 968 atau e-mel contact@creditbirdtech.com dengan kod kontrak dan nombor siri perkakasan." },
        { num: "02", title: "Telemetri & Triaj Jauh:", desc: "Jurutera bertugas menghubungi dalam tempoh 15 - 30 minit untuk menyemak log ralat atau panduan diagnostik pantas." },
        { num: "03", title: "Servis Di Tapak atau Hotfix Kod:", desc: "Juruteknik dihantar ke tapak untuk pemeriksaan perkakasan, atau jurutera melancarkan hotfix pada persekitaran staging." },
        { num: "04", title: "Pengesahan & Penilaian:", desc: "Pelanggan menandatangani laporan serah tugas jaminan dan menilai kualiti perkhidmatan yang diberikan." }
      ]
    },
    sec5: {
      title: "5. Pengecualian Jaminan & Perkhidmatan Berbayar",
      intro: "Perlindungan jaminan percuma tidak terpakai bagi keadaan berikut:",
      exclusions: [
        "Kerosakan fizikal, jatuh, perubahan bentuk atau kemasukan cecair selain minyak pati yang disyorkan.",
        "Membuka atau membaiki perkakasan serta mengubah suai kod sumber tanpa kebenaran bertulis daripada CreditBird.",
        "Kerosakan akibat bencana alam, kilat, kebakaran atau voltan elektrik yang melebihi had teknikal.",
        "Penggunaan minyak pati tiruan atau minyak mineral tidak berkualiti yang menyebabkan muncung tersumbat atau pam terbakar."
      ],
      paidSupportNote: "Bagi kes di luar jaminan, CreditBird tetap menyediakan perkhidmatan pembaikan dan penggantian alat ganti tulen pada kadar istimewa untuk rakan kongsi."
    }
  },
  es: {
    sec1: {
      title: "1. Garantía de Equipos Difusores y Sistemas HVAC",
      intro: "CreditBird ofrece garantía oficial de fabricante para todos los equipos difusores comerciales suministrados e instalados:",
      cards: {
        hvacTitle: "Difusores Industriales Conectados a HVAC",
        hvacWarranty: "GARANTÍA DE 24 MESES",
        hvacDesc: "Mantenimiento periódico de conductos de aerosol, boquillas ultrasónicas de alta presión y válvulas solenoides de ventilación.",
        retailTitle: "Difusores de Fragancias para Hoteles y Comercios",
        retailWarranty: "GARANTÍA DE 12 - 18 MESES",
        retailDesc: "Cobertura de placa base WiFi/Bluetooth, temporizador programable y conjunto de bomba de compresión de aire."
      },
      replacementTitle: "Política de Sustitución Rápida de Componentes:",
      replacementItems: [
        "Sustitución completa por equipo nuevo en los primeros 30 días de uso en caso de defecto de fabricación contrastado.",
        "Suministro de equipo de sustitución temporal en menos de 24 horas en el área metropolitana de Ciudad Ho Chi Minh durante las reparaciones."
      ]
    },
    sec2: {
      title: "2. Compromiso de Calidad de Aceites Esenciales COA",
      intro: "La pureza botánica protege la salud de las personas y prolonga la vida útil de los equipos. CreditBird certifica:",
      items: [
        { label: "100% Aceites Esenciales Puros y Naturales", text: "Sin alcoholes industriales, sin plomo, mercurio, ftalatos ni aditivos químicos no autorizados." },
        { label: "Expediente de Calidad Internacional Completo", text: "Cada lote se suministra con Certificado de Análisis (COA), Ficha de Datos de Seguridad (MSDS) y cromatografía GC-MS." },
        { label: "Garantía de Reposición Inmediata", text: "Reposición al 100% en un plazo de 7 días si los envases sufren daños en el transporte o el aroma difiere de la muestra aprobada." }
      ]
    },
    sec3: {
      title: "3. Acuerdos de Nivel de Servicio (SLA) de Software y ERP",
      intro: "Para sistemas a medida y soluciones ERP desarrolladas o mantenidas por CreditBird, aplicamos un riguroso marco SLA:",
      table: {
        thLevel: "Nivel de Incidencia",
        thImpact: "Impacto en el Negocio",
        thResponse: "Tiempo de Respuesta",
        thResolution: "Objetivo de Resolución",
        rows: [
          { level: "P1 - Crítico / Parada Total", levelClass: "text-red-600", impact: "Interrupción global del sistema, fallo en transacciones o riesgo inminente de pérdida de datos.", response: "< 15 minutos", resolution: "Resolución en 2 - 4 horas" },
          { level: "P2 - Gravedad Alta", levelClass: "text-amber-600", impact: "Funcionalidades troncales afectadas (ventas, almacén, facturación) con solución temporal disponible.", response: "< 1 hora", resolution: "Resolución en 8 horas" },
          { level: "P3 - Incidencia Estándar", levelClass: "text-blue-600", impact: "Incidencias menores sin bloqueo operativo, dudas de usuarios u optimizaciones de interfaz.", response: "< 4 horas", resolution: "Resolución en 24 - 48 horas" }
        ]
      },
      uptimeNote: "CreditBird garantiza una disponibilidad mensual mínima de infraestructura y aplicaciones del 99.9% (salvo mantenimiento programado notificado con 48h de antelación)."
    },
    sec4: {
      title: "4. Protocolo de Gestión de Garantías y Resolución",
      steps: [
        { num: "01", title: "Apertura de Incidencia:", desc: "Contacte vía teléfono +84 932 640 968 o email contact@creditbirdtech.com indicando número de contrato y serie del equipo." },
        { num: "02", title: "Diagnóstico Remoto y Triaje:", desc: "Los ingenieros asignados contactan en 15 - 30 minutos para revisar registros de telemetría y guiar el diagnóstico." },
        { num: "03", title: "Intervención In Situ o Hotfix:", desc: "Desplazamiento técnico para revisión física o despliegue de hotfix de código en staging antes de producción." },
        { num: "04", title: "Cierre y Aceptación:", desc: "Firma del acta de resolución de incidencia y evaluación de la calidad del servicio." }
      ]
    },
    sec5: {
      title: "5. Exclusiones de Garantía y Servicios Facturables",
      intro: "La cobertura de garantía gratuita no aplica en los siguientes supuestos:",
      exclusions: [
        "Daños por caídas, impactos mecánicos, deformación externa o entrada de líquidos no recomendados.",
        "Apertura del chasis, manipulación de placas o modificación del código fuente sin autorización escrita de CreditBird.",
        "Averías provocadas por catástrofes naturales, rayos, incendios o sobretensiones eléctricas no conformes.",
        "Uso de aceites de procedencia dudosa, diluidos en alcohol o aceites minerales que obstruyan difusores."
      ],
      paidSupportNote: "Para casos fuera de garantía, CreditBird ofrece reparaciones y repuestos originales a tarifas preferenciales para clientes de empresa."
    }
  },
  fr: {
    sec1: {
      title: "1. Garantie Matérielle des Diffuseurs & Équipements HVAC",
      intro: "CreditBird assure une garantie fabricant complète pour l'ensemble des systèmes de diffusion olfactive distribués et installés :",
      cards: {
        hvacTitle: "Diffuseurs Industriels Raccordés HVAC",
        hvacWarranty: "GARANTIE 24 MOIS",
        hvacDesc: "Maintenance préventive des conduits d'aérosol, buses ultrasoniques haute pression et électrovannes de ventilation.",
        retailTitle: "Diffuseurs pour Showrooms & Hôtellerie",
        retailWarranty: "GARANTIE 12 - 18 MOIS",
        retailDesc: "Couverture matérielle des cartes mères de contrôle WiFi/Bluetooth, programmateurs et blocs pompes pneumatiques."
      },
      replacementTitle: "Politique de Remplacement Express :",
      replacementItems: [
        "Échange à neuf sous 30 jours en cas de défaut matériel avéré imputable à la fabrication.",
        "Prêt d'un matériel temporaire de remplacement sous 24h dans l'agglomération de Hô Chi Minh-Ville en cas de panne."
      ]
    },
    sec2: {
      title: "2. Engagement Qualité Huiles Essentielles COA",
      intro: "La pureté des huiles protège la santé des personnes et préserve la durée de vie des équipements. CreditBird certifie :",
      items: [
        { label: "100% Huiles Essentielles Pures & Naturelles", text: "Absence totale d'alcool industriel, sans plomb, mercure, phtalates ni substances toxiques interdites." },
        { label: "Dossiers de Certification Internationaux Complets", text: "Chaque lot est expédié avec son Certificat d'Analyse (COA), sa Fiche de Données de Sécurité (FDS) et son analyse GC-MS." },
        { label: "Remplacement Immédiat", text: "Échange à 100% sous 7 jours en cas d'avarie de transport ou de non-conformité olfactive avec l'échantillon de référence." }
      ]
    },
    sec3: {
      title: "3. Accords de Niveau de Service (SLA) Logiciels & ERP",
      intro: "Pour les solutions logicielles sur mesure et plateformes ERP opérées par CreditBird, nous appliquons un cadre SLA strict :",
      table: {
        thLevel: "Niveau d'Urgence",
        thImpact: "Impact Opérationnel Déclaré",
        thResponse: "Délai de Prise en Compte",
        thResolution: "Objectif de Résolution",
        rows: [
          { level: "P1 - Bloquant / Incident Majeur", levelClass: "text-red-600", impact: "Interruption totale du service, échec transactionnel ou risque de corruption des données.", response: "< 15 minutes", resolution: "Résolution sous 2 à 4 heures" },
          { level: "P2 - Critique", levelClass: "text-amber-600", impact: "Dégradation d'un module clé (ventes, gestion logistique, comptabilité), solution de contournement.", response: "< 1 heure", resolution: "Résolution sous 8 heures" },
          { level: "P3 - Standard", levelClass: "text-blue-600", impact: "Anomalie mineure sans impact bloquant, assistance fonctionnelle ou ajustement ergonomique.", response: "< 4 heures", resolution: "Résolution sous 24 à 48 heures" }
        ]
      },
      uptimeNote: "CreditBird garantit une disponibilité mensuelle minimale de l'infrastructure et des applications de 99,9% (hors plages de maintenance annoncées 48h à l'avance)."
    },
    sec4: {
      title: "4. Procédure de Traitement des Demandes de Garantie",
      steps: [
        { num: "01", title: "Enregistrement du Ticket :", desc: "Contactez le +84 932 640 968 ou écrivez à contact@creditbirdtech.com en précisant le contrat et le numéro de série." },
        { num: "02", title: "Diagnostic & Télémesure :", desc: "Prise en charge par un ingénieur sous 15 à 30 minutes pour analyse des journaux d'erreurs et télédiagnostic." },
        { num: "03", title: "Intervention sur Site ou Patch :", desc: "Dépêchement d'un technicien ou déploiement d'un correctif validé en staging avant mise en production." },
        { num: "04", title: "Recette & Clôture :", desc: "Signature du bon d'intervention et recueil de l'évaluation de satisfaction du client." }
      ]
    },
    sec5: {
      title: "5. Exclusions de Garantie & Prestations Facturables",
      intro: "La garantie constructeur gratuite ne couvre pas les cas suivants :",
      exclusions: [
        "Chocs physiques, chutes, déformations du boîtier ou pénétration de liquides inappropriés.",
        "Démontage non autorisé, modification des circuits électroniques ou altération du code source sans accord écrit.",
        "Sinistres causés par des catastrophes naturelles, la foudre, un incendie ou des surtensions électriques anormales.",
        "Utilisation d'huiles synthétiques ou de qualité douteuse provoquant l'encrassement des buses et le grippage des pompes."
      ],
      paidSupportNote: "En cas d'exclusion, CreditBird propose un service de réparation et de pièces d'origine à tarif préférentiel."
    }
  },
  hi: {
    sec1: {
      title: "1. स्मार्ट डिफ्यूज़र और एचवीएसी हार्डवेयर वारंटी",
      intro: "CreditBird आपूर्ति और स्थापित किए गए सभी वाणिज्यिक खुशबू डिफ्यूज़र उपकरणों के लिए व्यापक वारंटी प्रदान करता है:",
      cards: {
        hvacTitle: "एचवीएसी-एकीकृत औद्योगिक खुशबू डिफ्यूज़र",
        hvacWarranty: "24 महीने की वारंटी",
        hvacDesc: "एरोसोल पाइपलाइनों, उच्च-दबाव अल्ट्रासोनिक नोजल और वेंटिलेशन सोलेनोइड वाल्व का नियमित रखरखाव।",
        retailTitle: "शोरूम और आतिथ्य डिफ्यूज़र",
        retailWarranty: "12 - 18 महीने की वारंटी",
        retailDesc: "वाईफाई/ब्लूटूथ मदरबोर्ड, स्वचालित टाइमर मॉड्यूल और उच्च प्रदर्शन एयर पंप हार्डवेयर कवरेज।"
      },
      replacementTitle: "त्वरित घटक प्रतिस्थापन नीति:",
      replacementItems: [
        "निर्माण दोष के मामले में उपयोग के पहले 30 दिनों के भीतर 100% नई मशीन प्रतिस्थापन।",
        "मरम्मत अवधि के दौरान खुशबू सेवा को निर्बाध रखने के लिए हो ची मिन्ह सिटी में 24 घंटे के भीतर अस्थायी मशीन प्रदान करना।"
      ]
    },
    sec2: {
      title: "2. 100% प्राकृतिक आवश्यक तेल सीओए गुणवत्ता वादा",
      intro: "आवश्यक तेल की शुद्धता सीधे स्वास्थ्य और मशीन की लंबी उम्र से जुड़ी है। CreditBird प्रमाणित करता है:",
      items: [
        { label: "100% शुद्ध प्राकृतिक आवश्यक तेल", text: "औद्योगिक अल्कोहल, सीसा, पारा, थैलेट्स या किसी भी प्रतिबंधित रासायनिक पदार्थ से पूरी तरह मुक्त।" },
        { label: "पूर्ण अंतरराष्ट्रीय प्रमाणन दस्तावेज", text: "प्रत्येक बैच के साथ विश्लेषण प्रमाणपत्र (COA), सामग्री सुरक्षा डेटा शीट (MSDS) और GC-MS रिपोर्ट संलग्न होती है।" },
        { label: "तत्काल प्रतिस्थापन गारंटी", text: "परिवहन में रिसाव या गुणवत्ता में विचलन पाए जाने पर 7 दिनों के भीतर 100% नया प्रतिस्थापन।" }
      ]
    },
    sec3: {
      title: "3. सॉफ्टवेयर और ईआरपी सेवा स्तर समझौता (SLA)",
      intro: "CreditBird द्वारा विकसित या प्रबंधित सॉफ्टवेयर और ईआरपी सिस्टम के लिए, हम सख्त एसएलए मानकों का पालन करते हैं:",
      table: {
        thLevel: "घटना प्राथमिकता",
        thImpact: "व्यावसायिक प्रभाव",
        thResponse: "प्रारंभिक प्रतिक्रिया समय",
        thResolution: "समाधान लक्ष्य",
        rows: [
          { level: "P1 - गंभीर संकट", levelClass: "text-red-600", impact: "पूरा सिस्टम बंद, लेन-देन विफलता, या डेटा हानि का आसन्न खतरा।", response: "< 15 मिनट", resolution: "2 - 4 घंटे के भीतर समाधान" },
          { level: "P2 - उच्च गंभीरता", levelClass: "text-amber-600", impact: "मुख्य व्यावसायिक कार्य प्रभावित (बिक्री, गोदाम, लेखांकन), अस्थायी समाधान उपलब्ध।", response: "< 1 घंटा", resolution: "8 घंटे के भीतर समाधान" },
          { level: "P3 - सामान्य समस्या", levelClass: "text-blue-600", impact: "मामूली बग, इंटरफ़ेस अनुकूलन, सामान्य उपयोगकर्ता सहायता।", response: "< 4 घंटे", resolution: "24 - 48 घंटे के भीतर समाधान" }
        ]
      },
      uptimeNote: "CreditBird सर्वर और एप्लिकेशन के लिए प्रति माह न्यूनतम 99.9% अपटाइम की गारंटी देता है (48 घंटे पूर्व-सूचित रखरखाव को छोड़कर)।"
    },
    sec4: {
      title: "4. वारंटी दावा और समाधान प्रक्रिया",
      steps: [
        { num: "01", title: "घटना पंजीकरण:", desc: "हॉटलाइन +84 932 640 968 पर कॉल करें या अनुबंध संख्या और मशीन सीरियल के साथ contact@creditbirdtech.com पर ईमेल करें।" },
        { num: "02", title: "रिमोट टेलीमेट्री निदान:", desc: "इंजीनियर 15 - 30 मिनट के भीतर सिस्टम लॉग की समीक्षा करने के लिए संपर्क करते हैं।" },
        { num: "03", title: "ऑन-साइट सेवा या कोड हॉटफिक्स:", desc: "तकनीशियन हार्डवेयर निरीक्षण के लिए पहुंचते हैं या सॉफ्टवेयर इंजीनियर स्टेजिंग परीक्षण के बाद हॉटफिक्स तैनात करते हैं।" },
        { num: "04", title: "स्वीकृति और समापन:", desc: "ग्राहक समाधान रिपोर्ट पर हस्ताक्षर करते हैं और सेवा की गुणवत्ता का मूल्यांकन करते हैं।" }
      ]
    },
    sec5: {
      title: "5. वारंटी बहिष्करण और सशुल्क सेवाएं",
      intro: "निःशुल्क वारंटी कवरेज निम्नलिखित मामलों में लागू नहीं होता है:",
      exclusions: [
        "भौतिक क्षति, गिरना, बाहरी विरूपण या अनुशंसित तेल के अलावा अन्य तरल पदार्थों का प्रवेश।",
        "CreditBird की लिखित सहमति के बिना मशीन को खोलना, सर्किट में संशोधन या सॉफ्टवेयर कोड में छेड़छाड़।",
        "प्राकृतिक आपदाओं, बिजली गिरने, आग या असामान्य विद्युत वोल्टेज के कारण होने वाला नुकसान।",
        "घटिया या खनिज तेल के उपयोग से नोजल का बंद होना या पंप का जलना।"
      ],
      paidSupportNote: "उपरोक्त मामलों में भी CreditBird कॉर्पोरेट भागीदारों के लिए रियायती दरों पर वास्तविक स्पेयर पार्ट्स के साथ सशुल्क मरम्मत प्रदान करता है।"
    }
  }
};

const output = `import type { WarrantyContent, SupportedLocale } from './types';

export const warrantyContent: Record<SupportedLocale, WarrantyContent> = ${JSON.stringify(warrantyData, null, 2)};

export function getWarrantyContent(locale: string): WarrantyContent {
  const loc = locale.toLowerCase() as SupportedLocale;
  return warrantyContent[loc] || warrantyContent['en'];
}
`;

fs.writeFileSync("src/lib/data/legal/warranty.ts", output, "utf8");
console.log("Successfully generated src/lib/data/legal/warranty.ts with 11 locales!");
