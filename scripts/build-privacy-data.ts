import fs from "fs";

const privacyData = {
  vi: {
    sec1: {
      title: "1. Căn cứ pháp lý & Phạm vi áp dụng",
      intro: "Chính sách này được xây dựng căn cứ theo:",
      legalBases: [
        "Nghị định số 13/2023/NĐ-CP ngày 17/04/2023 của Chính phủ về bảo vệ dữ liệu cá nhân.",
        "Luật An toàn thông tin mạng số 86/2015/QH13 và các văn bản hướng dẫn thi hành.",
        "Luật An ninh mạng số 24/2018/QH14 của Quốc hội Việt Nam."
      ],
      scope: "Chính sách áp dụng đối với toàn bộ dữ liệu cá nhân của khách hàng, đối tác, người liên hệ của doanh nghiệp khi tương tác với CreditBird qua website, ứng dụng phần mềm, hợp đồng dịch vụ ERP, nhân sự IT hoặc cung ứng máy phun tinh dầu."
    },
    sec2: {
      title: "2. Mục đích xử lý dữ liệu",
      intro: "CreditBird chỉ thu thập và xử lý dữ liệu trong phạm vi cần thiết cho các mục đích hợp pháp sau:",
      purposes: [
        "Tư vấn giải pháp, gửi báo giá và tài liệu kỹ thuật về viết phần mềm, phát triển ERP, cung ứng nhân sự IT, thiết bị máy phun và tinh dầu.",
        "Soạn thảo, ký kết và thực thi Hợp đồng kinh tế giữa CreditBird và Quý khách hàng.",
        "Thực hiện các cam kết bảo hành thiết bị (12 - 24 tháng), cung ứng tinh dầu định kỳ và dịch vụ hỗ trợ kỹ thuật phần mềm (SLA).",
        "Xuất hóa đơn giá trị gia tăng điện tử hợp lệ theo quy định của Tổng cục Thuế Việt Nam.",
        "Gửi thông báo cập nhật phiên bản phần mềm, cảnh báo bảo mật hoặc khuyến cáo kỹ thuật liên quan đến dịch vụ đang sử dụng."
      ]
    },
    sec3: {
      title: "3. Các loại dữ liệu thu thập",
      directTitle: "3.1. Dữ liệu do Quý khách chủ động cung cấp:",
      directItems: [
        "Họ và tên người liên hệ, đại diện doanh nghiệp.",
        "Địa chỉ email công việc, số điện thoại liên lạc.",
        "Tên cơ quan / tổ chức / doanh nghiệp, mã số thuế, địa chỉ trụ sở.",
        "Địa điểm khảo sát, lắp đặt máy phun tinh dầu hoặc triển khai hạ tầng phần mềm."
      ],
      autoTitle: "3.2. Dữ liệu kỹ thuật hệ thống tự động ghi nhận:",
      autoItems: [
        "Địa chỉ IP, thông số thiết bị, trình duyệt và thời gian truy cập cổng dịch vụ.",
        "Nhật ký hệ thống (Audit Logs) nhằm phục vụ phát hiện tấn công mạng và phòng ngừa gian lận."
      ]
    },
    sec4: {
      title: "4. Biện pháp an toàn & Bảo mật kỹ thuật",
      intro: "CreditBird áp dụng các biện pháp kỹ thuật và tổ chức nghiêm ngặt nhằm phòng chống truy cập, tiết lộ, thay đổi hoặc phá hủy dữ liệu trái phép:",
      cards: {
        encryptionTitle: "Mã hóa đường truyền & Lưu trữ",
        encryptionDesc: "Mã hóa TLS 1.3 cho toàn bộ dữ liệu truyền qua Internet; mã hóa chuẩn AES-256 đối với cơ sở dữ liệu lưu trữ.",
        rbacTitle: "Phân quyền tối thiểu (RBAC)",
        rbacDesc: "Chỉ nhân sự có thẩm quyền trực tiếp tham gia hỗ trợ dự án mới được cấp quyền tiếp cận dữ liệu khách hàng."
      },
      noSellCommitment: "Chúng tôi cam kết tuyệt đối không bán, chia sẻ hoặc cho thuê dữ liệu cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại hoặc quảng cáo trái phép."
    },
    sec5: {
      title: "5. Thời gian và địa điểm lưu trữ dữ liệu",
      p1: "Dữ liệu khách hàng được lưu trữ trên hạ tầng máy chủ đặt tại các Trung tâm Dữ liệu đạt chuẩn Tier III tại Việt Nam (Viettel IDC / VNPT Data Center / FPT Telecom), bảo đảm tuân thủ quy định về lưu trữ dữ liệu nội địa của Luật An ninh mạng.",
      p2: "Dữ liệu được lưu trữ trong suốt thời gian có hiệu lực của hợp đồng và lưu trữ thêm theo thời hạn quy định của pháp luật kế toán, thuế Việt Nam trước khi được hủy an toàn."
    },
    sec6: {
      title: "6. Quyền & Nghĩa vụ của chủ thể dữ liệu",
      intro: "Theo Nghị định 13/2023/NĐ-CP, Quý khách với tư cách là chủ thể dữ liệu có đầy đủ các quyền:",
      rights: [
        "Quyền được biết về hoạt động xử lý dữ liệu cá nhân của mình.",
        "Quyền đồng ý, không đồng ý hoặc rút lại sự đồng ý cho phép xử lý dữ liệu.",
        "Quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu chưa chính xác.",
        "Quyền yêu cầu xóa dữ liệu cá nhân khi mục đích xử lý đã hoàn thành.",
        "Quyền khiếu nại, tố cáo khi phát hiện vi phạm quy định bảo vệ dữ liệu."
      ]
    },
    sec7: {
      title: "7. Kênh liên hệ bộ phận bảo vệ dữ liệu (DPO)",
      intro: "Để thực hiện các quyền của chủ thể dữ liệu hoặc phản ánh các vấn đề an toàn thông tin, Quý khách vui lòng liên hệ trực tiếp với Bộ phận Bảo vệ Dữ liệu của CreditBird:",
      contact: {
        controllerLabel: "Đơn vị kiểm soát dữ liệu",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Mã số thuế",
        taxVal: "0315397327",
        addrLabel: "Địa chỉ",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "Hotline tiếp nhận",
        hotlineVal: "0932.640.968",
        emailLabel: "Email chuyên trách bảo mật",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  en: {
    sec1: {
      title: "1. Legal Basis & Scope of Application",
      intro: "This privacy policy is established in rigorous compliance with:",
      legalBases: [
        "Government Decree No. 13/2023/ND-CP on Personal Data Protection dated April 17, 2023.",
        "Law on Cyber Information Security No. 86/2015/QH13 and regulatory guidance.",
        "Law on Cybersecurity No. 24/2018/QH14 passed by the National Assembly of Vietnam."
      ],
      scope: "This policy applies to all personal and enterprise contact data collected through CreditBird websites, software apps, ERP systems, IT staffing arrangements, and smart scent diffuser installations."
    },
    sec2: {
      title: "2. Purposes of Data Processing",
      intro: "CreditBird collects and processes data strictly within the necessary bounds for legitimate business operations:",
      purposes: [
        "Consulting, issuing technical proposals, and preparing quotations for custom software, ERP, IT staffing, and aroma systems.",
        "Drafting, concluding, and executing commercial contracts between CreditBird and clients.",
        "Fulfilling hardware warranty commitments (12 - 24 months), regular oil supply, and software SLA maintenance.",
        "Issuing statutory electronic Value-Added Tax (VAT) invoices compliant with General Department of Taxation regulations.",
        "Delivering software patch notifications, cybersecurity bulletins, and system operational advisories."
      ]
    },
    sec3: {
      title: "3. Types of Data Collected",
      directTitle: "3.1. Data Actively Provided by Clients:",
      directItems: [
        "Full names of contact persons and legal corporate representatives.",
        "Business email addresses and direct telephone numbers.",
        "Corporate entity names, enterprise tax identification numbers, and headquarters addresses.",
        "Facility survey sites, hardware installation coordinates, or cloud deployment locations."
      ],
      autoTitle: "3.2. Technical Telemetry Recorded Automatically:",
      autoItems: [
        "IP addresses, client device characteristics, browser user-agents, and connection access logs.",
        "System audit logs utilized for intrusion detection and fraud prevention."
      ]
    },
    sec4: {
      title: "4. Technical Security & Protection Safeguards",
      intro: "CreditBird enforces stringent technical and organizational protocols to prevent unauthorized data access, leakage, or loss:",
      cards: {
        encryptionTitle: "Transit & Storage Encryption",
        encryptionDesc: "TLS 1.3 encryption across all public networks; AES-256 cryptographic standards for data at rest.",
        rbacTitle: "Role-Based Access Control (RBAC)",
        rbacDesc: "Least-privilege access restricted exclusively to engineers assigned to active project contracts."
      },
      noSellCommitment: "We strictly pledge never to sell, monetize, or lease personal or corporate client data to any external third party for commercial or advertising gain."
    },
    sec5: {
      title: "5. Data Retention & Geographic Data Sovereign Location",
      p1: "Client data is hosted in domestic sovereign Tier III Data Centers in Vietnam (Viettel IDC, VNPT Data Center, FPT Telecom), ensuring compliance with onshore data residency mandates under the Vietnam Cybersecurity Law.",
      p2: "Records are retained for the duration of the commercial agreement and archived pursuant to Vietnamese tax and accounting statutes before undergoing secure cryptographic deletion."
    },
    sec6: {
      title: "6. Data Subject Rights & Controls",
      intro: "Under Decree 13/2023/ND-CP, data subjects possess full statutory rights:",
      rights: [
        "Right to be informed regarding personal data processing operations.",
        "Right to give consent, withhold consent, or withdraw prior authorization.",
        "Right to access, review, and request correction of inaccurate records.",
        "Right to request deletion of personal information once processing objectives conclude.",
        "Right to lodge formal complaints regarding regulatory data violations."
      ]
    },
    sec7: {
      title: "7. Data Protection Officer (DPO) Contact",
      intro: "To exercise data subject rights or report cybersecurity concerns, please contact our Data Protection Office:",
      contact: {
        controllerLabel: "Data Controller",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Tax Identification",
        taxVal: "0315397327",
        addrLabel: "Headquarters",
        addrVal: "100/20 Street 79, Phuoc Long Ward, Ho Chi Minh City, Vietnam",
        hotlineLabel: "DPO Hotline",
        hotlineVal: "0932.640.968",
        emailLabel: "Dedicated Privacy Email",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  zh: {
    sec1: {
      title: "1. 法律依据与适用范围",
      intro: "本个人信息保护与隐私政策严格依据以下法律法规制定：",
      legalBases: [
        "越南政府第 13/2023/NĐ-CP 号关于个人数据保护的法令（2023年4月17日颁布）。",
        "越南第 86/2015/QH13 号网络信息安全法及相关实施细则。",
        "越南国会第 24/2018/QH14 号网络安全法。"
      ],
      scope: "本政策适用于客户、商业伙伴及企业联系人在通过网站、软件系统、ERP 实施、IT 人才服务及扩香设备业务与 CreditBird 交互过程中产生的所有数据。"
    },
    sec2: {
      title: "2. 数据处理与使用目的",
      intro: "CreditBird 仅在合法业务运营所必需的限度内收集与处理数据：",
      purposes: [
        "方案咨询、定制软件开发报价、ERP 架构蓝图交付及硬件采购对接。",
        "起草、订立并履行双方之间的各项商业与技术服务合同。",
        "履行硬件质保（12 至 24 个月）、精油周期性配送及软件 SLA 运维支持。",
        "依据越南国家税务总局规定开具正规电子增值税发票（VAT）。",
        "发送系统重要补丁、安全漏洞预警及技术更新建议。"
      ]
    },
    sec3: {
      title: "3. 收集的数据类别",
      directTitle: "3.1. 客户主动提交的信息：",
      directItems: [
        "企业对接人及法定代表人的姓名。",
        "工作电子邮箱及直接联络电话。",
        "企业官方名称、统一税号及注册经营地址。",
        "硬件安装实地勘测地点或云基础设施部署网络节点。"
      ],
      autoTitle: "3.2. 系统自动记录的技术日志：",
      autoItems: [
        "访问 IP 地址、终端设备特征、浏览器指纹及访问时间戳。",
        "用于网络威胁防御与反欺诈审计的不可篡改系统操作日志（Audit Logs）。"
      ]
    },
    sec4: {
      title: "4. 技术安全保障与保密机制",
      intro: "CreditBird 部署高标准的技术架构和管控流程，严防数据泄露与非法篡改：",
      cards: {
        encryptionTitle: "传输与存储全程加密",
        encryptionDesc: "网络传输全面采用 TLS 1.3 协议；存储层采用高强度 AES-256 算法加密。",
        rbacTitle: "最小权限原则 (RBAC)",
        rbacDesc: "严格限制访问权限，仅向派驻参与该项目的必要技术人员开放。"
      },
      noSellCommitment: "我们郑重承诺：绝不出售、出租或未经授权向任何第三方商业实体提供客户个人或企业数据用于营销用途。"
    },
    sec5: {
      title: "5. 数据保存周期与境内存储合规",
      p1: "所有数据均存储在越南境内符合 Tier III 国际认证的数据中心机房（Viettel IDC / VNPT Data Center / FPT Telecom），完全符合越南网络安全法关于境内数据留存的主权合规要求。",
      p2: "数据在服务合同期内妥善留存，并在法定税务与会计存档要求期满后执行安全的数据销毁流程。"
    },
    sec6: {
      title: "6. 数据主体的法定权利",
      intro: "依据第 13/2023/NĐ-CP 号法令，您作为数据主体享有如下完整法定权利：",
      rights: [
        "知情权：获悉个人数据的收集目的与处理方式。",
        "同意权：同意、拒绝或随时撤回对数据处理的授权。",
        "查阅更正权：查阅、核对并要求更正不准确的个人信息。",
        "删除权：在处理目的达成后要求彻底删除相关个人数据。",
        "投诉控告权：在发现侵权行为时向主管部门提起申诉。"
      ]
    },
    sec7: {
      title: "7. 数据保护官（DPO）联络通道",
      intro: "如需行使数据主体权利或咨询数据安全事项，请联络 CreditBird 数据保护团队：",
      contact: {
        controllerLabel: "数据控制者",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird 科技有限公司)",
        taxLabel: "税务识别代码",
        taxVal: "0315397327",
        addrLabel: "公司地址",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "应急服务热线",
        hotlineVal: "0932.640.968",
        emailLabel: "专职安全邮箱",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  ja: {
    sec1: {
      title: "1. 法的根拠および適用範囲",
      intro: "本プライバシーポリシーは、以下の法令に厳格に準拠して策定されています：",
      legalBases: [
        "個人データ保護に関するベトナム政府政令第13/2023/ND-CP号（2023年4月17日公布）。",
        "ベトナムネットワーク情報セキュリティ法第86/2015/QH13号および関連細則。",
        "ベトナムサイバーセキュリティ法第24/2018/QH14号。"
      ],
      scope: "本方針は、CreditBirdのWebサイト、受託ソフトウェア、ERP基盤、IT人材派遣、およびアロマ機器サービスを利用されるすべての顧客および関係者のデータに適用されます。"
    },
    sec2: {
      title: "2. データ処理の目的",
      intro: "当社は、以下の正当な事業目的の達成に必要な範囲に限りデータを処理します：",
      purposes: [
        "カスタムソフトウェア開発、ERP導入、IT人材派遣、ディフューザー機器の見積書・提案書作成。",
        "経済契約の起草、締結、および業務の適正な履行。",
        "ハードウェア保証（12〜24ヶ月）、精油の定期供給、およびSLA保守サポートの実施。",
        "ベトナム税務総局の規定に準拠した正規電子付加価値税（VAT）インボイスの発行。",
        "セキュリティアップデート、脆弱性アラート、および技術アドバイザリーの配信。"
      ]
    },
    sec3: {
      title: "3. 収集する個人・業務データ項目",
      directTitle: "3.1. お客様から直接ご提供いただく情報：",
      directItems: [
        "企業担当者および法定代表者の氏名。",
        "業務連絡用メールアドレスおよび電話番号。",
        "企業名、税務登録コード（Tax ID）、および本社所在地。",
        "アロマ機器の現地設置場所またはクラウドインフラ展開先。"
      ],
      autoTitle: "3.2. 自動的に記録されるシステムログ：",
      autoItems: [
        "アクセス元IPアドレス、端末属性、ブラウザ識別情報、およびタイムスタンプ。",
        "不正アクセス検知および改ざん防止を目的とした不変監査ログ（Audit Logs）。"
      ]
    },
    sec4: {
      title: "4. 技術的安全管理措置とセキュリティ",
      intro: "CreditBirdは、不正アクセスや漏洩を防ぐため厳格な技術的・組織的安全管理措置を講じています：",
      cards: {
        encryptionTitle: "伝送路および保管データの暗号化",
        encryptionDesc: "すべての通信にTLS 1.3を採用し、保管データベースにはAES-256暗号化を適用。",
        rbacTitle: "最小特権アクセス制御 (RBAC)",
        rbacDesc: "当該プロジェクトの担当エンジニアに限定して必要最小限のアクセス権を付与。"
      },
      noSellCommitment: "当社は、商業目的や広告配信のために顧客データを第三者に販売、貸与、または開示しないことを固く誓約します。"
    },
    sec5: {
      title: "5. 保管期間および国内データセンター所在",
      p1: "すべてのデータは、ベトナム国内のTier III基準データセンター（Viettel IDC / VNPT Data Center / FPT Telecom）に保管され、サイバーセキュリティ法に基づくデータローカライゼーション規制に適合しています。",
      p2: "契約期間中にわたり安全に保持され、ベトナムの会計・税務関連法令が定める法定保存期間の満了後に安全に消去されます。"
    },
    sec6: {
      title: "6. データ主体の権利",
      intro: "政令第13/2023/ND-CP号に基づき、データ主体には以下の権利が保障されています：",
      rights: [
        "自己の個人データの処理活動について通知を受ける権利。",
        "データ処理に同意し、拒否し、または同意を撤回する権利。",
        "個人データを開示請求し、訂正を求める権利。",
        "目的達成後に個人データの消去を請求する権利。",
        "法規制違反に対して管轄当局に異議を申し立てる権利。"
      ]
    },
    sec7: {
      title: "7. データ保護責任者（DPO）のお問い合わせ窓口",
      intro: "権利行使またはセキュリティに関するお問い合わせは、下記窓口までご連絡ください：",
      contact: {
        controllerLabel: "データ管理者",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "税務コード",
        taxVal: "0315397327",
        addrLabel: "本社所在地",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "受付窓口電話",
        hotlineVal: "0932.640.968",
        emailLabel: "セキュリティ専用メール",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  ko: {
    sec1: {
      title: "1. 법적 근거 및 적용 범위",
      intro: "본 개인정보 처리방침은 다음 관련 법령을 엄격히 준수하여 수립되었습니다:",
      legalBases: [
        "베트남 정부 개인정보보호에 관한 시행령 제13/2023/ND-CP호 (2023년 4월 17일 공포).",
        "네트워크 정보보안법 제86/2015/QH13호 및 관련 지침.",
        "베트남 국회 사이버안보법 제24/2018/QH14호."
      ],
      scope: "본 방침은 웹사이트, 맞춤형 소프트웨어, ERP 구축, IT 인재 파견 및 디퓨저 서비스를 이용하는 모든 고객과 기업 담당자의 데이터에 적용됩니다."
    },
    sec2: {
      title: "2. 개인정보의 처리 목적",
      intro: "CreditBird는 정당한 사업 운영에 필요한 최소한의 범위 내에서만 데이터를 처리합니다:",
      purposes: [
        "소프트웨어 개발, ERP 구축, IT 인재 파견, 디퓨저 장비 견적서 및 기술 제안서 발송.",
        "CreditBird와 고객사 간의 상업적 서비스 계약 체결 및 성실한 계약 이행.",
        "하드웨어 품질 보증(12~24개월), 에센셜 오일 정기 공급 및 소프트웨어 SLA 유지보수.",
        "베트남 국세청 규정에 부합하는 법정 전자 부가가치세(VAT) 인보이스 발행.",
        "소프트웨어 보안 패치 업데이트, 취약점 경고 및 기술 권고 사항 공지."
      ]
    },
    sec3: {
      title: "3. 수집하는 데이터 항목",
      directTitle: "3.1. 고객이 직접 제공하는 정보:",
      directItems: [
        "기업 담당자 및 법정 대리인의 성명.",
        "업무용 이메일 주소 및 유선/휴대전화 번호.",
        "회사명, 사업자등록번호(Tax ID) 및 본사 소재지 주소.",
        "디퓨저 설치 현장 위치 또는 클라우드 인프라 배포 네트워크 좌표."
      ],
      autoTitle: "3.2. 시스템에 의해 자동으로 수집되는 정보:",
      autoItems: [
        "접속 IP 주소, 기기 식별값, 브라우저 사양 및 접속 일시 로그.",
        "사이버 침해 사고 탐지 및 부정 사용 방지를 위한 시스템 감사 로그(Audit Logs)."
      ]
    },
    sec4: {
      title: "4. 기술적·관리적 보호 조치",
      intro: "CreditBird는 데이터의 도난, 유출, 변조를 방지하기 위해 다층 보안 조치를 적용합니다:",
      cards: {
        encryptionTitle: "네트워크 및 저장소 암호화",
        encryptionDesc: "모든 외부 통신에 TLS 1.3 적용, 데이터베이스 저장 시 AES-256 표준 암호화 적용.",
        rbacTitle: "최소 권한 기반 제어 (RBAC)",
        rbacDesc: "프로젝트 수행에 직접 참여하는 인가된 엔지니어에게만 최소한의 접근 권한 부여."
      },
      noSellCommitment: "당사는 어떠한 상업적 또는 광고 목적으로도 고객의 정보를 제3자에게 판매하거나 대여하지 않습니다."
    },
    sec5: {
      title: "5. 데이터 보존 기간 및 베트남 역내 저장",
      p1: "모든 데이터는 베트남 사이버안보법에 따라 베트남 국내 Tier III 표준 데이터 센터(Viettel IDC / VNPT Data Center / FPT Telecom)에 안전하게 보관됩니다.",
      p2: "계약 기간 동안 안전하게 보관되며, 베트남 회계 및 세무 법령이 규정하는 법정 의무 보존 기간 만료 후 영구 파기됩니다."
    },
    sec6: {
      title: "6. 정보주체의 권리 및 행사 방법",
      intro: "시행령 제13/2023/ND-CP호에 따라 정보주체는 다음과 같은 법적 권리를 가집니다:",
      rights: [
        "자신의 개인정보 처리 현황에 대해 통지받을 권리.",
        "개인정보 처리에 동의하거나 동의를 철회할 권리.",
        "개인정보에 대한 열람 및 오류 정정을 요구할 권리.",
        "처리 목적 달성 후 개인정보의 삭제를 요청할 권리.",
        "법령 위반에 대해 감독 기관에 이의를 제기할 권리."
      ]
    },
    sec7: {
      title: "7. 개인정보 보호책임자 (DPO) 연락처",
      intro: "정보주체의 권리 행사 및 개인정보 관련 문의는 아래 담당 부서로 연락해 주시기 바랍니다:",
      contact: {
        controllerLabel: "개인정보 처리자",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "사업자등록번호",
        taxVal: "0315397327",
        addrLabel: "소재지 주소",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "고객 접수 핫라인",
        hotlineVal: "0932.640.968",
        emailLabel: "보안 전용 이메일",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  th: {
    sec1: {
      title: "1. ฐานทางกฎหมายและขอบเขตการบังคับใช้",
      intro: "นโยบายความเป็นส่วนตัวนี้จัดทำขึ้นโดยสอดคล้องกับ:",
      legalBases: [
        "กฤษฎีกาของรัฐบาลเวียดนาม ฉบับที่ 13/2023/NĐ-CP ว่าด้วยการคุ้มครองข้อมูลส่วนบุคคล ลงวันที่ 17 เมษายน 2023",
        "กฎหมายว่าด้วยความมั่นคงปลอดภัยสารสนเทศทางไซเบอร์ ฉบับที่ 86/2015/QH13",
        "กฎหมายว่าด้วยความมั่นคงปลอดภัยทางไซเบอร์ ฉบับที่ 24/2018/QH14 ของสมัชชาแห่งชาติเวียดนาม"
      ],
      scope: "นโยบายนี้ใช้บังคับกับข้อมูลส่วนบุคคลและข้อมูลธุรกิจทั้งหมดที่เก็บรวบรวมผ่านเว็บไซต์ แอปพลิเคชัน ระบบ ERP การจัดหาบุคลากร IT และการติดตั้งเครื่องกระจายกลิ่นอัจฉริยะของ CreditBird"
    },
    sec2: {
      title: "2. วัตถุประสงค์ในการประมวลผลข้อมูล",
      intro: "CreditBird เก็บรวบรวมและประมวลผลข้อมูลเฉพาะเท่าที่จำเป็นเพื่อวัตถุประสงค์อันชอบด้วยกฎหมาย:",
      purposes: [
        "การให้คำปรึกษา จัดทำใบเสนอราคา และเอกสารทางเทคนิคสำหรับซอฟต์แวร์, ERP, บุคลากร IT และระบบกระจายกลิ่น",
        "การร่าง การลงนาม และการปฏิบัติตามสัญญาทางเศรษฐกิจระหว่างคู่สัญญา",
        "การปฏิบัติตามคำมั่นในการรับประกันฮาร์ดแวร์ (12 - 24 เดือน), การจัดส่งน้ำมันหอมระเหย และการบำรุงรักษาซอฟต์แวร์ตาม SLA",
        "การออกใบกำกับภาษีมูลค่าเพิ่ม (VAT) อิเล็กทรอนิกส์ตามกฎหมายภาษีของเวียดนาม",
        "การแจ้งเตือนการอัปเดตระบบ ความปลอดภัย และข้อแนะนำทางเทคนิค"
      ]
    },
    sec3: {
      title: "3. ประเภทของข้อมูลที่จัดเก็บ",
      directTitle: "3.1. ข้อมูลที่ลูกค้าเป็นผู้ให้โดยตรง:",
      directItems: [
        "ชื่อและนามสกุลของผู้ประสานงานและตัวแทนองค์กร",
        "ที่อยู่อีเมลสำหรับติดต่อทางธุรกิจและหมายเลขโทรศัพท์",
        "ชื่อองค์กร/นิติบุคคล, เลขประจำตัวผู้เสียภาษี และที่อยู่สำนักงาน",
        "สถานที่สำรวจ ติดตั้งอุปกรณ์กระจายกลิ่น หรือจุดเชื่อมต่อเครือข่ายคลาวด์"
      ],
      autoTitle: "3.2. ข้อมูลทางเทคนิคที่ระบบบันทึกโดยอัตโนมัติ:",
      autoItems: [
        "ที่อยู่ IP, ข้อมูลจำเพาะของอุปกรณ์, เบราว์เซอร์ และบันทึกเวลาในการเข้าถึง",
        "บันทึกประวัติการทำงานของระบบ (Audit Logs) เพื่อการตรวจจับภัยคุกคามและป้องกันการทุจริต"
      ]
    },
    sec4: {
      title: "4. มาตรการรักษาความมั่นคงปลอดภัยทางเทคนิค",
      intro: "CreditBird บังคับใช้มาตรการทางเทคนิคและการบริหารจัดการที่เข้มงวดเพื่อป้องกันการเข้าถึงหรือเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต:",
      cards: {
        encryptionTitle: "การเข้ารหัสระหว่างส่งและจัดเก็บ",
        encryptionDesc: "เข้ารหัสด้วย TLS 1.3 สำหรับข้อมูลบนเครือข่าย และเข้ารหัสฐานข้อมูลด้วยมาตรฐาน AES-256",
        rbacTitle: "การควบคุมการเข้าถึงตามบทบาท (RBAC)",
        rbacDesc: "จำกัดสิทธิ์การเข้าถึงข้อมูลเฉพาะวิศวกรที่ได้รับมอบหมายในโครงการเท่านั้น"
      },
      noSellCommitment: "เราให้คำมั่นสัญญาอย่างเด็ดขาดว่าจะไม่ขาย ให้เช่า หรือเปิดเผยข้อมูลของลูกค้าให้แก่บุคคลภายนอกเพื่อผลประโยชน์ทางการค้าหรือโฆษณา"
    },
    sec5: {
      title: "5. ระยะเวลาและสถานที่จัดเก็บข้อมูล",
      p1: "ข้อมูลทั้งหมดจัดเก็บอยู่บนโครงสร้างพื้นฐานศูนย์ข้อมูลมาตรฐาน Tier III ในประเทศเวียดนาม (Viettel IDC / VNPT Data Center / FPT Telecom) เพื่อให้เป็นไปตามข้อกำหนดการจัดเก็บข้อมูลภายในประเทศภายใต้กฎหมายความปลอดภัยทางไซเบอร์",
      p2: "ข้อมูลจะถูกเก็บรักษาไว้ตลอดอายุของสัญญาบริการ และเก็บรักษาเพิ่มเติมตามระยะเวลาที่กฎหมายบัญชีและภาษีของเวียดนามกำหนดก่อนจะถูกทำลายอย่างปลอดภัย"
    },
    sec6: {
      title: "6. สิทธิของเจ้าของข้อมูลส่วนบุคคล",
      intro: "ภายใต้กฤษฎีกา 13/2023/NĐ-CP ท่านในฐานะเจ้าของข้อมูลมีสิทธิ์ตามกฎหมายอย่างสมบูรณ์:",
      rights: [
        "สิทธิในการได้รับแจ้งเกี่ยวกับการประมวลผลข้อมูลส่วนบุคคลของตน",
        "สิทธิในการให้ความยินยอม ไม่ยินยอม หรือเพิกถอนความยินยอม",
        "สิทธิในการเข้าถึง ตรวจสอบ และขอให้แก้ไขข้อมูลที่ไม่ถูกต้อง",
        "สิทธิในการขอให้ลบข้อมูลส่วนบุคคลเมื่อวัตถุประสงค์สิ้นสุดลง",
        "สิทธิในการร้องเรียนเมื่อพบการละเมิดกฎหมายคุ้มครองข้อมูล"
      ]
    },
    sec7: {
      title: "7. ช่องทางติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)",
      intro: "หากต้องการใช้สิทธิของเจ้าของข้อมูลหรือสอบถามประเด็นความปลอดภัย โปรดติดต่อฝ่ายคุ้มครองข้อมูลของ CreditBird:",
      contact: {
        controllerLabel: "ผู้ควบคุมข้อมูล",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (CreditBird Technology Co., Ltd.)",
        taxLabel: "เลขประจำตัวผู้เสียภาษี",
        taxVal: "0315397327",
        addrLabel: "ที่อยู่สำนักงาน",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "สายด่วนติดต่อ",
        hotlineVal: "0932.640.968",
        emailLabel: "อีเมลด้านความปลอดภัย",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  lo: {
    sec1: {
      title: "1. ພື້ນຖານທາງກົດໝາຍ & ຂອບເຂດການນຳໃຊ້",
      intro: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວນີ້ຖືກສ້າງຂຶ້ນໂດຍສອດຄ່ອງກັບ:",
      legalBases: [
        "ດຳລັດລັດຖະບານຫວຽດນາມ ເລກທີ 13/2023/NĐ-CP ລົງວັນທີ 17 ເມສາ 2023 ວ່າດ້ວຍການປົກປ້ອງຂໍ້ມູນສ່ວນບຸກຄົນ.",
        "ກົດໝາຍວ່າດ້ວຍຄວາມປອດໄພຂໍ້ມູນຂ່າວສານທາງໄຊເບີ ເລກທີ 86/2015/QH13.",
        "ກົດໝາຍວ່າດ້ວຍຄວາມປອດໄພທາງໄຊເບີ ເລກທີ 24/2018/QH14 ຂອງສະພາແຫ່ງຊາດຫວຽດນາມ."
      ],
      scope: "ນະໂຍບາຍນີ້ກວມເອົາຂໍ້ມູນທັງໝົດທີ່ເກັບກຳຜ່ານເວັບໄຊ, ຊອບແວ, ລະບົບ ERP, ການສະໜອງບຸກຄະລາກອນ IT ແລະ ເຄື່ອງກະຈາຍກິ່ນອັດສະລິຍະຂອງ CreditBird."
    },
    sec2: {
      title: "2. ຈຸດປະສົງໃນການປະມວນຜົນຂໍ້ມູນ",
      intro: "CreditBird ເກັບກຳ ແລະ ປະມວນຜົນຂໍ້ມູນສະເພາະຂອບເຂດທີ່ຈຳເປັນເພື່ອຈຸດປະສົງທີ່ຖືກຕ້ອງຕາມກົດໝາຍ:",
      purposes: [
        "ໃຫ້ຄຳປຶກສາ, ສົ່ງໃບສະເໜີລາຄາ ແລະ ເອກະສານເຕັກນິກສຳລັບຊອບແວ, ERP, ບຸກຄະລາກອນ IT ແລະ ເຄື່ອງກະຈາຍກິ່ນ.",
        "ຮ່າງ, ລົງນາມ ແລະ ປະຕິບັດສັນຍາເສດຖະກິດລະຫວ່າງຄູ່ສັນຍາ.",
        "ປະຕິບັດການຮັບປະກັນອຸປະກອນ (12 - 24 ເດືອນ), ສະໜອງນ້ຳມັນຫອມລະເຫີຍ ແລະ ບຳລຸງຮັກສາຊອບແວຕາມ SLA.",
        "ອອກໃບກຳກັບພາສີມູນຄ່າເພີ່ມ (VAT) ເອເລັກໂຕຣນິກຖືກຕ້ອງຕາມກົດໝາຍພາສີຫວຽດນາມ.",
        "ແຈ້ງເຕືອນການອັບເດດຊອບແວ, ການເຕືອນໄພຄວາມປອດໄພ ແລະ ຄຳແນະນຳເຕັກນິກ."
      ]
    },
    sec3: {
      title: "3. ປະເພດຂໍ້ມູນທີ່ເກັບກຳ",
      directTitle: "3.1. ຂໍ້ມູນທີ່ລູກຄ້າສະໜອງໂດຍກົງ:",
      directItems: [
        "ຊື່ ແລະ ນາມສະກຸນຂອງຜູ້ປະສານງານ ແລະ ຕົວແທນອົງກອນ.",
        "ອີເມວວຽກງານ ແລະ ເບີໂທລະສັບຕິດຕໍ່.",
        "ຊື່ວິສາຫະກິດ, ລະຫັດປະຈຳຕົວຜູ້ເສຍພາສີ ແລະ ທີ່ຢູ່ສຳນັກງານ.",
        "ສະຖານທີ່ສຳຫຼວດ, ຕິດຕັ້ງເຄື່ອງກະຈາຍກິ່ນ ຫຼື ພື້ນຖານໂຄງລ່າງ Cloud."
      ],
      autoTitle: "3.2. ຂໍ້ມູນເຕັກນິກທີ່ລະບົບບັນທຶກອັດຕະໂນມັດ:",
      autoItems: [
        "ທີ່ຢູ່ IP, ຄຸນລັກສະນະຂອງອຸປະກອນ, ບຣາວເຊີ ແລະ ບັນທຶກເວລາເຂົ້າເຖິງ.",
        "ບັນທຶກການກວດສອບລະບົບ (Audit Logs) ເພື່ອກວດຈັບການໂຈມຕີ ແລະ ປ້ອງກັນການສໍ້ໂກງ."
      ]
    },
    sec4: {
      title: "4. ມາດຕະການຄວາມປອດໄພ & ການປົກປ້ອງເຕັກນິກ",
      intro: "CreditBird ນຳໃຊ້ມາດຕະການເຕັກນິກ ແລະ ການຈັດຕັ້ງທີ່ເຂັ້ມງວດເພື່ອປ້ອງກັນການເຂົ້າເຖິງຂໍ້ມູນໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ:",
      cards: {
        encryptionTitle: "ການເຂົ້າລະຫັດການສົ່ງ & ການຈັດເກັບ",
        encryptionDesc: "ເຂົ້າລະຫັດ TLS 1.3 ສຳລັບຂໍ້ມູນໃນເຄືອຂ່າຍ ແລະ ເຂົ້າລະຫັດຖານຂໍ້ມູນດ້ວຍມາດຕະຖານ AES-256.",
        rbacTitle: "ການຄວບຄຸມສິດເຂົ້າເຖິງຕາມບົດບາດ (RBAC)",
        rbacDesc: "ຈຳກັດສິດເຂົ້າເຖິງສະເພາະວິສະວະກອນທີ່ໄດ້ຮັບມອບໝາຍໃນໂຄງການເທົ່ານັ້ນ."
      },
      noSellCommitment: "ພວກເຮົາໃຫ້ຄຳໝັ້ນສັນຍາຢ່າງເດັດຂາດວ່າ ຈະບໍ່ຂາຍ, ໃຫ້ເຊົ່າ ຫຼື ເປີດເຜີຍຂໍ້ມູນຂອງລູກຄ້າໃຫ້ແກ່ພາກສ່ວນທີສາມເພື່ອຜົນປະໂຫຍດທາງການຄ້າ."
    },
    sec5: {
      title: "5. ໄລຍະເວລາ ແລະ ສະຖານທີ່ຈັດເກັບຂໍ້ມູນ",
      p1: "ຂໍ້ມູນທັງໝົດຖືກເກັບຮັກສາໄວ້ໃນສູນຂໍ້ມູນມາດຕະຖານ Tier III ພາຍໃນປະເທດຫວຽດນາມ (Viettel IDC / VNPT Data Center / FPT Telecom) ເພື່ອຮັບປະກັນການປະຕິບັດຕາມກົດໝາຍຄວາມປອດໄພທາງໄຊເບີ.",
      p2: "ຂໍ້ມູນຈະຖືກເກັບຮັກສາໄວ້ຕະຫຼອດອາຍຸສັນຍາ ແລະ ເກັບຮັກສາເພີ່ມເຕີມຕາມກຳນົດເວລາຂອງກົດໝາຍບັນຊີ ແລະ ພາສີ ກ່ອນຈະຖືກທຳລາຍຢ່າງປອດໄພ."
    },
    sec6: {
      title: "6. ສິດຂອງເຈົ້າຂອງຂໍ້ມູນສ່ວນບຸກຄົນ",
      intro: "ອີງຕາມດຳລັດ 13/2023/NĐ-CP, ທ່ານໃນຖານະເຈົ້າຂອງຂໍ້ມູນມີສິດຕາມກົດໝາຍຢ່າງຄົບຖ້ວນ:",
      rights: [
        "ສິດໄດ້ຮັບການແຈ້ງກ່ຽວກັບການປະມວນຜົນຂໍ້ມູນສ່ວນບຸກຄົນຂອງຕົນ.",
        "ສິດເຫັນດີ, ບໍ່ເຫັນດີ ຫຼື ຖອນຄວາມເຫັນດີໃນການປະມວນຜົນຂໍ້ມູນ.",
        "ສິດເຂົ້າເບິ່ງ ແລະ ຂໍໃຫ້ແກ້ໄຂຂໍ້ມູນທີ່ບໍ່ຖືກຕ້ອງ.",
        "ສິດຂໍໃຫ້ລຶບຂໍ້ມູນສ່ວນບຸກຄົນເມື່ອຈຸດປະສົງສິ້ນສຸດລົງ.",
        "ສິດຮ້ອງຮຽນເມື່ອພົບການລະເມີດກົດໝາຍປົກປ້ອງຂໍ້ມູນ."
      ]
    },
    sec7: {
      title: "7. ຊ່ອງທາງຕິດຕໍ່ພະແນກປົກປ້ອງຂໍ້ມູນ (DPO)",
      intro: "ເພື່ອປະຕິບັດສິດຂອງເຈົ້າຂອງຂໍ້ມູນ ຫຼື ສອບຖາມເລື່ອງຄວາມປອດໄພ, ກະລຸນາຕິດຕໍ່ພະແນກປົກປ້ອງຂໍ້ມູນຂອງ CreditBird:",
      contact: {
        controllerLabel: "ຜູ້ຄວບຄຸມຂໍ້ມູນ",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "ລະຫັດປະຈຳຕົວຜູ້ເສຍພາສີ",
        taxVal: "0315397327",
        addrLabel: "ທີ່ຢູ່ສຳນັກງານ",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "ສາຍດ່ວນຕິດຕໍ່",
        hotlineVal: "0932.640.968",
        emailLabel: "ອີເມວຄວາມປອດໄພ",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  ms: {
    sec1: {
      title: "1. Asas Perundangan & Skop Pemakaian",
      intro: "Dasar privasi ini digubal dengan pematuhan ketat terhadap:",
      legalBases: [
        "Dekri Kerajaan Vietnam No. 13/2023/ND-CP mengenai Perlindungan Data Peribadi bertarikh 17 April 2023.",
        "Undang-undang Keselamatan Maklumat Siber No. 86/2015/QH13.",
        "Undang-undang Keselamatan Siber No. 24/2018/QH14 oleh Perhimpunan Kebangsaan Vietnam."
      ],
      scope: "Dasar ini terpakai kepada semua data peribadi dan korporat yang dikumpul melalui laman web, aplikasi perisian, sistem ERP, perkhidmatan tenaga kerja IT dan peranti peresap minyak pati CreditBird."
    },
    sec2: {
      title: "2. Tujuan Pemprosesan Data",
      intro: "CreditBird mengumpul dan memproses data mengikut had yang diperlukan untuk tujuan perniagaan yang sah:",
      purposes: [
        "Perundingan penyelesaian, penyediaan sebut harga dan dokumen teknikal bagi perisian, ERP, tenaga kerja IT dan peranti aroma.",
        "Penggubalan, pemeteraian dan pelaksanaan kontrak komersial antara pihak-pihak.",
        "Memenuhi komitmen jaminan perkakasan (12 - 24 bulan), pembekalan minyak pati berkala dan sokongan SLA perisian.",
        "Pengeluaran invois Cukai Nilai Tambah (VAT) elektronik yang sah mengikut peraturan Jabatan Percukaian Vietnam.",
        "Menghantar makluman kemas kini perisian, amaran keselamatan dan nasihat teknikal berkaitan perkhidmatan."
      ]
    },
    sec3: {
      title: "3. Jenis Data Yang Dikumpul",
      directTitle: "3.1. Data Yang Disediakan Secara Langsung oleh Pelanggan:",
      directItems: [
        "Nama penuh pegawai perhubungan dan wakil sah perniagaan.",
        "Alamat e-mel perniagaan dan nombor telefon untuk dihubungi.",
        "Nama entiti syarikat, nombor pendaftaran cukai dan alamat ibu pejabat.",
        "Lokasi pemasangan peralatan peresap atau infrastruktur pelayan awan."
      ],
      autoTitle: "3.2. Data Teknikal Yang Direkodkan Secara Automatik:",
      autoItems: [
        "Alamat IP, parameter peranti, maklumat pelayar web dan masa capaian perkhidmatan.",
        "Log audit sistem (Audit Logs) bagi tujuan pengesanan pencerobohan siber dan pencegahan penipuan."
      ]
    },
    sec4: {
      title: "4. Langkah Keselamatan & Perlindungan Teknikal",
      intro: "CreditBird menguatkuasakan langkah teknikal dan operasi yang ketat untuk mengelakkan akses atau pendedahan data tanpa kebenaran:",
      cards: {
        encryptionTitle: "Penyulitan Penghantaran & Storan",
        encryptionDesc: "Penyulitan TLS 1.3 untuk data dalam transit; algoritma AES-256 untuk data pegun dalam pangkalan data.",
        rbacTitle: "Kawalan Akses Berasaskan Peranan (RBAC)",
        rbacDesc: "Akses terhad secara ketat hanya kepada jurutera yang ditugaskan dalam projek berkenaan."
      },
      noSellCommitment: "Kami berikrar sama sekali tidak akan menjual, menyewakan atau mendedahkan data pelanggan kepada mana-mana pihak ketiga bagi tujuan komersial atau pengiklanan tanpa kebenaran."
    },
    sec5: {
      title: "5. Tempoh dan Lokasi Penyimpanan Data",
      p1: "Semua data disimpan di Pusat Data Bertaraf Tier III di Vietnam (Viettel IDC / VNPT Data Center / FPT Telecom), memastikan pematuhan terhadap peraturan penyimpanan data tempatan mengikut Undang-undang Keselamatan Siber.",
      p2: "Data disimpan sepanjang tempoh kontrak berkuat kuasa dan tempoh tambahan mengikut statut percukaian dan perakaunan Vietnam sebelum dimusnahkan secara selamat."
    },
    sec6: {
      title: "6. Hak dan Kawalan Subjek Data",
      intro: "Di bawah Dekri 13/2023/ND-CP, anda sebagai subjek data mempunyai hak undang-undang yang lengkap:",
      rights: [
        "Hak untuk dimaklumkan mengenai aktiviti pemprosesan data peribadi anda.",
        "Hak untuk bersetuju, menolak atau menarik balik kebenaran pemprosesan data.",
        "Hak untuk mengakses, menyemak dan meminta pembetulan data yang tidak tepat.",
        "Hak untuk meminta pemadaman data peribadi apabila tujuan pemprosesan telah selesai.",
        "Hak untuk membuat aduan rasmi sekiranya berlaku pelanggaran peraturan perlindungan data."
      ]
    },
    sec7: {
      title: "7. Saluran Hubungan Pegawai Perlindungan Data (DPO)",
      intro: "Untuk melaksanakan hak anda atau melaporkan isu keselamatan, sila hubungi Pejabat Perlindungan Data CreditBird:",
      contact: {
        controllerLabel: "Pengawal Data",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Kod Cukai / Nombor Pendaftaran",
        taxVal: "0315397327",
        addrLabel: "Alamat Berdaftar",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "Talian Khidmat Pelanggan",
        hotlineVal: "0932.640.968",
        emailLabel: "E-mel Keselamatan Khas",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  es: {
    sec1: {
      title: "1. Base Jurídica y Ámbito de Aplicación",
      intro: "Esta política de privacidad se formula en riguroso cumplimiento de:",
      legalBases: [
        "Decreto Gubernamental N° 13/2023/ND-CP sobre Protección de Datos Personales, de 17 de abril de 2023.",
        "Ley de Seguridad de la Información en Redes N° 86/2015/QH13.",
        "Ley de Ciberseguridad N° 24/2018/QH14 de la Asamblea Nacional de Vietnam."
      ],
      scope: "Esta política se aplica a todos los datos personales y corporativos recopilados a través de sitios web, software a medida, sistemas ERP, selección de personal TI e instalaciones de difusores aromáticos de CreditBird."
    },
    sec2: {
      title: "2. Finalidades del Tratamiento de Datos",
      intro: "CreditBird recopila y trata datos únicamente en la medida necesaria para los siguientes fines legítimos:",
      purposes: [
        "Asesoramiento de soluciones, presupuestos técnicos y propuestas para desarrollo de software, ERP, personal TI y equipos aromáticos.",
        "Redacción, firma y ejecución de contratos comerciales de prestación de servicios entre las partes.",
        "Cumplimiento de garantías de hardware (12 - 24 meses), suministro de aceites y soporte de mantenimiento SLA.",
        "Emisión de facturas electrónicas oficiales con IVA de conformidad con la normativa de la Dirección General de Tributos de Vietnam.",
        "Envío de actualizaciones de seguridad de software, alertas de vulnerabilidades y notificaciones operativas."
      ]
    },
    sec3: {
      title: "3. Categorías de Datos Recopilados",
      directTitle: "3.1. Datos Facilitados Directamente por el Cliente:",
      directItems: [
        "Nombre y apellidos de los representantes y personas de contacto.",
        "Dirección de correo electrónico corporativo y teléfonos de contacto.",
        "Razón social de la empresa, CIF/NIF y domicilio fiscal.",
        "Ubicación de inspección técnica, instalación de equipos o despliegue en la nube."
      ],
      autoTitle: "3.2. Datos Técnicos Recopilados Automáticamente:",
      autoItems: [
        "Dirección IP, especificaciones del dispositivo, tipo de navegador y registros horarios de acceso.",
        "Registros de auditoría del sistema (Audit Logs) para la detección de ciberataques y prevención de fraudes."
      ]
    },
    sec4: {
      title: "4. Medidas Técnicas de Seguridad y Salvaguardas",
      intro: "CreditBird implementa estrictas medidas técnicas y organizativas para impedir accesos no autorizados o pérdidas de datos:",
      cards: {
        encryptionTitle: "Cifrado en Tránsito y Reposo",
        encryptionDesc: "Cifrado TLS 1.3 para datos transmitidos por Internet; cifrado estándar AES-256 para bases de datos.",
        rbacTitle: "Control de Acceso Basado en Roles (RBAC)",
        rbacDesc: "Acceso mínimo concedido exclusivamente a ingenieros asignados activamente al proyecto."
      },
      noSellCommitment: "Nos comprometemos firmemente a no vender, ceder ni alquilar datos personales o empresariales a terceros con fines comerciales o publicitarios."
    },
    sec5: {
      title: "5. Plazos de Conservación y Almacenamiento Territorial",
      p1: "Todos los datos se custodian en Centros de Datos Tier III situados en territorio vietnamita (Viettel IDC / VNPT / FPT Telecom), garantizando el cumplimiento de residencia de datos bajo la Ley de Ciberseguridad.",
      p2: "Los datos se conservan durante la vigencia del contrato y el plazo legal exigido por la normativa contable y fiscal vietnamita antes de su destrucción segura."
    },
    sec6: {
      title: "6. Derechos del Interesado",
      intro: "Conforme al Decreto 13/2023/ND-CP, el interesado goza de los siguientes derechos:",
      rights: [
        "Derecho a ser informado sobre las operaciones de tratamiento de sus datos.",
        "Derecho a prestar, denegar o revocar el consentimiento prestado.",
        "Derecho de acceso y rectificación de datos inexactos.",
        "Derecho de supresión de datos una vez alcanzada la finalidad del tratamiento.",
        "Derecho a presentar reclamaciones ante las autoridades competentes en caso de infracción."
      ]
    },
    sec7: {
      title: "7. Canal de Contacto del Delegado de Protección de Datos (DPO)",
      intro: "Para ejercer sus derechos o plantear consultas de seguridad, contacte con nuestra Oficina de Protección de Datos:",
      contact: {
        controllerLabel: "Responsable del Tratamiento",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Número de Identificación Fiscal",
        taxVal: "0315397327",
        addrLabel: "Domicilio Social",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "Línea de Atención",
        hotlineVal: "0932.640.968",
        emailLabel: "Correo Electrónico de Seguridad",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  fr: {
    sec1: {
      title: "1. Fondement Juridique & Champ d'Application",
      intro: "La présente politique de confidentialité est établie en conformité avec :",
      legalBases: [
        "Le Décret gouvernemental n° 13/2023/ND-CP relatif à la protection des données personnelles du 17 avril 2023.",
        "La Loi sur la sécurité des informations sur les réseaux n° 86/2015/QH13.",
        "La Loi sur la cybersécurité n° 24/2018/QH14 adoptée par l'Assemblée nationale du Vietnam."
      ],
      scope: "Cette politique s'applique à l'ensemble des données personnelles et professionnelles collectées via les plateformes en ligne, applications sur mesure, ERP, prestations d'ingénierie et diffuseurs de parfum de CreditBird."
    },
    sec2: {
      title: "2. Finalités du Traitement des Données",
      intro: "CreditBird ne traite les données que dans la stricte mesure nécessaire aux finalités légitimes suivantes :",
      purposes: [
        "Conseil technique, établissement de devis et dossiers d'ingénierie logicielle, ERP, régie IT et diffusion olfactive.",
        "Rédaction, conclusion et exécution des contrats commerciaux liant les parties.",
        "Respect des garanties matérielles (12 à 24 mois), réassort d'huiles essentielles et contrats SLA de maintenance.",
        "Émission de factures électroniques conformes aux règles de l'Administration fiscale du Vietnam.",
        "Diffusion d'alertes de sécurité, correctifs logiciels et avis opérationnels."
      ]
    },
    sec3: {
      title: "3. Catégories de Données Collectées",
      directTitle: "3.1. Données Fournies Directement par le Client :",
      directItems: [
        "Nom et prénom des interlocuteurs et représentants légaux.",
        "Adresse email professionnelle et coordonnées téléphoniques directes.",
        "Raison sociale, identifiant fiscal et adresse du siège de l'entreprise.",
        "Emplacement des installations techniques ou des serveurs cloud."
      ],
      autoTitle: "3.2. Données Techniques Collectées Automatiquement :",
      autoItems: [
        "Adresse IP, spécifications de l'équipement, type de navigateur et horodatage des connexions.",
        "Journaux d'audit système (Audit Logs) pour la prévention des cyberattaques et de la fraude."
      ]
    },
    sec4: {
      title: "4. Mesures Techniques de Sécurité & Garanties",
      intro: "CreditBird applique des mesures techniques et organisationnelles rigoureuses pour empêcher tout accès non autorisé :",
      cards: {
        encryptionTitle: "Chiffrement en Transit et au Repos",
        encryptionDesc: "Protocole TLS 1.3 pour toutes les communications Internet ; chiffrement AES-256 pour les bases de données.",
        rbacTitle: "Contrôle d'Accès Basé sur les Rôles (RBAC)",
        rbacDesc: "Privilèges minimaux accordés exclusivement aux ingénieurs affectés aux projets concernés."
      },
      noSellCommitment: "Nous nous engageons formellement à ne jamais vendre, louer ou divulguer les données de nos clients à des tiers à des fins commerciales ou publicitaires."
    },
    sec5: {
      title: "5. Durée de Conservation & Hébergement Souverain",
      p1: "Toutes les données sont hébergées dans des centres de données Tier III situés au Vietnam (Viettel IDC / VNPT / FPT Telecom), conformément aux impératifs de localisation des données de la Loi sur la cybersécurité.",
      p2: "Les données sont conservées pendant toute la durée contractuelle, puis archivées conformément aux durées légales fiscales et comptables avant destruction sécurisée."
    },
    sec6: {
      title: "6. Droits de la Personne Concernée",
      intro: "Conformément au Décret 13/2023/ND-CP, toute personne concernée dispose des droits suivants :",
      rights: [
        "Droit d'être informée des opérations de traitement de ses données personnelles.",
        "Droit de donner, refuser ou retirer son consentement.",
        "Droit d'accès et de rectification des données inexactes.",
        "Droit à l'effacement des données lorsque la finalité est atteinte.",
        "Droit d'introduire une réclamation auprès des autorités compétentes en cas d'infraction."
      ]
    },
    sec7: {
      title: "7. Contact du Délégué à la Protection des Données (DPO)",
      intro: "Pour toute demande relative à vos droits ou à la sécurité de vos données, veuillez contacter notre DPO :",
      contact: {
        controllerLabel: "Responsable du Traitement",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "Identifiant Fiscal",
        taxVal: "0315397327",
        addrLabel: "Siège Social",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "Ligne Téléphonique",
        hotlineVal: "0932.640.968",
        emailLabel: "Email Dédié Sécurité",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  },
  hi: {
    sec1: {
      title: "1. कानूनी आधार और प्रयोज्यता का दायरा",
      intro: "यह गोपनीयता नीति निम्नलिखित कानूनों के अनुपालन में तैयार की गई है:",
      legalBases: [
        "व्यक्तिगत डेटा संरक्षण पर वियतनाम सरकार का डिक्री संख्या 13/2023/ND-CP दिनांक 17 अप्रैल 2023।",
        "साइबर सूचना सुरक्षा कानून संख्या 86/2015/QH13।",
        "वियतनाम की नेशनल असेंबली द्वारा पारित साइबर सुरक्षा कानून संख्या 24/2018/QH14।"
      ],
      scope: "यह नीति CreditBird की वेबसाइट, कस्टम सॉफ्टवेयर, ईआरपी सिस्टम, आईटी स्टाफिंग और डिफ्यूज़र सेवाओं के माध्यम से एकत्र किए गए सभी व्यक्तिगत और व्यावसायिक डेटा पर लागू होती है।"
    },
    sec2: {
      title: "2. डेटा प्रसंस्करण के उद्देश्य",
      intro: "CreditBird केवल वैध व्यावसायिक उद्देश्यों के लिए आवश्यक सीमा तक ही डेटा एकत्र और संसाधित करता है:",
      purposes: [
        "सॉफ्टवेयर, ईआरपी, आईटी स्टाफिंग और डिफ्यूज़र उपकरणों के लिए तकनीकी प्रस्ताव और उद्धरण तैयार करना।",
        "पक्षों के बीच वाणिज्यिक सेवा अनुबंधों का मसौदा तैयार करना, हस्ताक्षर करना और निष्पादन करना।",
        "हार्डवेयर वारंटी प्रतिबद्धताओं (12 - 24 महीने), आवश्यक तेल आपूर्ति और सॉफ्टवेयर एसएलए रखरखाव का पालन करना।",
        "वियतनाम कराधान विभाग के नियमों के अनुसार वैध इलेक्ट्रॉनिक वैट चालान जारी करना।",
        "सॉफ्टवेयर सुरक्षा पैच, भेद्यता अलर्ट और परिचालन तकनीकी सलाह भेजना।"
      ]
    },
    sec3: {
      title: "3. एकत्र किए गए डेटा की श्रेणियां",
      directTitle: "3.1. ग्राहकों द्वारा सीधे प्रदान किया गया डेटा:",
      directItems: [
        "कंपनी के संपर्क व्यक्तियों और कानूनी प्रतिनिधियों का पूरा नाम।",
        "व्यावसायिक ईमेल पता और संपर्क टेलीफोन नंबर।",
        "कंपनी का आधिकारिक नाम, कर पहचान संख्या और पंजीकृत कार्यालय का पता।",
        "डिफ्यूज़र स्थापना का स्थान या क्लाउड इंफ्रास्ट्रक्चर नेटवर्क निर्देशांक।"
      ],
      autoTitle: "3.2. सिस्टम द्वारा स्वचालित रूप से दर्ज किया गया डेटा:",
      autoItems: [
        "आईपी पता, डिवाइस पैरामीटर, ब्राउज़र प्रकार और एक्सेस टाइमस्टैम्प।",
        "साइबर हमलों का पता लगाने और धोखाधड़ी की रोकथाम के लिए अपरिवर्तनीय सिस्टम ऑडिट लॉग (Audit Logs)।"
      ]
    },
    sec4: {
      title: "4. तकनीकी सुरक्षा उपाय और सुरक्षा मानक",
      intro: "CreditBird डेटा की अनधिकृत पहुंच या हानि को रोकने के लिए कड़े तकनीकी उपाय लागू करता है:",
      cards: {
        encryptionTitle: "ट्रांजिट और स्टोरेज एन्क्रिप्शन",
        encryptionDesc: "इंटरनेट पर सभी संचार के लिए टीएलएस 1.3 एन्क्रिप्शन; डेटाबेस के लिए एईएस-256 एन्क्रिप्शन मानक।",
        rbacTitle: "भूमिका-आधारित पहुँच नियंत्रण (RBAC)",
        rbacDesc: "केवल संबंधित परियोजना में सक्रिय रूप से नियुक्त इंजीनियरों को ही न्यूनतम आवश्यक पहुँच दी जाती है।"
      },
      noSellCommitment: "हम दृढ़तापूर्वक वचन देते हैं कि हम वाणिज्यिक या विज्ञापन उद्देश्यों के लिए किसी भी तीसरे पक्ष को ग्राहक डेटा कभी नहीं बेचेंगे या पट्टे पर नहीं देंगे।"
    },
    sec5: {
      title: "5. डेटा प्रतिधारण और वियतनाम में घरेलू भंडारण",
      p1: "साइबर सुरक्षा कानून के अनुपालन में सारा डेटा वियतनाम के टियर III मानक डेटा केंद्रों (Viettel IDC / VNPT / FPT Telecom) में सुरक्षित रखा जाता है।",
      p2: "डेटा अनुबंध की अवधि के दौरान सुरक्षित रखा जाता है, और कानूनी कर एवं लेखा अवधि की समाप्ति के बाद सुरक्षित रूप से नष्ट कर दिया जाता है।"
    },
    sec6: {
      title: "6. डेटा विषय के कानूनी अधिकार",
      intro: "डिक्री 13/2023/ND-CP के तहत, एक डेटा विषय के रूप में आपके पास पूर्ण कानूनी अधिकार हैं:",
      rights: [
        "अपने व्यक्तिगत डेटा के प्रसंस्करण कार्यों के बारे में सूचित होने का अधिकार।",
        "डेटा प्रसंस्करण के लिए सहमति देने, अस्वीकार करने या सहमति वापस लेने का अधिकार।",
        "अशुद्ध डेटा तक पहुँचने और सुधार का अनुरोध करने का अधिकार।",
        "उद्देश्य पूरा होने के बाद व्यक्तिगत डेटा को हटाने का अनुरोध करने का अधिकार।",
        "डेटा उल्लंघन की स्थिति में सक्षम अधिकारियों के समक्ष शिकायत दर्ज करने का अधिकार।"
      ]
    },
    sec7: {
      title: "7. डेटा संरक्षण अधिकारी (DPO) संपर्क विवरण",
      intro: "अपने अधिकारों का उपयोग करने या सुरक्षा प्रश्नों के लिए, कृपया हमारे डेटा संरक्षण कार्यालय से संपर्क करें:",
      contact: {
        controllerLabel: "डेटा नियंत्रक",
        controllerVal: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD",
        taxLabel: "कर पहचान संख्या (Tax ID)",
        taxVal: "0315397327",
        addrLabel: "पंजीकृत कार्यालय पता",
        addrVal: "100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam",
        hotlineLabel: "हेल्पलाइन नंबर",
        hotlineVal: "0932.640.968",
        emailLabel: "सुरक्षा ईमेल",
        emailVal: "contact@creditbirdtech.com"
      }
    }
  }
};

const output = `import type { PrivacyContent, SupportedLocale } from './types';

export const privacyContent: Record<SupportedLocale, PrivacyContent> = ${JSON.stringify(privacyData, null, 2)};

export function getPrivacyContent(locale: string): PrivacyContent {
  const loc = locale.toLowerCase() as SupportedLocale;
  return privacyContent[loc] || privacyContent['en'];
}
`;

fs.writeFileSync("src/lib/data/legal/privacy.ts", output, "utf8");
console.log("Successfully generated src/lib/data/legal/privacy.ts with 11 locales!");
