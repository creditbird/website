import type { SupportedLocale } from '$lib/data/legal/types';

export interface LabExtractionTab {
  id: 'distillation' | 'separation' | 'gcms' | 'blending';
  num: string;
  code: string;
  title: string;
  sub: string;
}

export interface LabExtractionData {
  header: {
    eyebrow: string;
    title: string;
    desc: string;
  };
  tabs: LabExtractionTab[];
  techLabels: {
    specsHeader: string;
    certHeader: string;
    certStandard: string;
    certPurity: string;
    certPurityVal: string;
    certAlcohol: string;
    certCoa: string;
    certCoaVal: string;
    guaranteeNote: string;
  };
  techSpecs: {
    distillation: { title: string; desc: string };
    separation: { title: string; desc: string };
    gcms: { title: string; desc: string };
    blending: { title: string; desc: string };
  };
  svgLabels: {
    plantChamber: string;
    plantChamberSub: string;
    heatingWater: string;
    vaporDuct: string;
    oilLayer: string;
    pureOilSub: string;
    hydrosolLayer: string;
    hydrosolSub: string;
    refluxWater: string;
    glassStopper: string;
    oilPhase: string;
    oilPhaseSub: string;
    hydrosolPhase: string;
    hydrosolPhaseSub: string;
    meniscus: string;
    meniscusSub: string;
    ptfeValve: string;
    membraneFilter: string;
    pureDrop: string;
    gcmsTitle: string;
    coaResult: string;
    retentionTimeAxis: string;
    dominantPeak: string;
    nistMatch: string;
    molStructure: string;
    terpeneBenefits: string;
    scentPyramid: string;
    topNotes: string;
    topNotesList: string;
    heartNotes: string;
    heartNotesList: string;
    baseNotes: string;
    baseNotesList: string;
    longevityNote: string;
    venturiTitle: string;
    compressedAir: string;
    oilSuction: string;
    bernoulliSub: string;
    nanoMist: string;
    hvacNote: string;
  };
}

export const labExtractionData: Record<SupportedLocale, LabExtractionData> = {
  "vi": {
    "header": {
      "eyebrow": "_CÔNG NGHỆ CHIẾT TÁCH / LAB DISTILLATION ARCHITECTURE/",
      "title": "Bản Vẽ Kỹ Thuật Chiết Tách & Tinh Chế Tinh Dầu Chuẩn Dược Điển COA",
      "desc": "Toàn bộ tinh dầu Lemy Finest được chiết xuất và kiểm nghiệm nghiêm ngặt theo quy trình phòng thí nghiệm tiêu chuẩn quốc tế: Từ nồi cất hơi nước áp suất thấp, cột tách pha Clevenger đến phân tích sắc ký khí khối phổ GC-MS xác thực 100% hàm lượng tự nhiên."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_STAGE 01 / EXTRACTION",
        "title": "Chưng Cất Lôi Cuốn Hơi Nước",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_STAGE 02 / SEPARATION",
        "title": "Phễu Chiết Quả Lê & Tách Pha",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_STAGE 03 / CHROMATOGRAPHY",
        "title": "Phân Tích Sắc Ký Khí GC-MS",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_STAGE 04 / NANO DIFFUSION",
        "title": "Pha Chế & Phun Sương Nano",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "TIÊU CHUẨN THIẾT BỊ",
      "certHeader": "CHỨNG NHẬN & PHIẾU KIỂM ĐỊNH",
      "certStandard": "Tiêu chuẩn",
      "certPurity": "Độ tinh khiết",
      "certPurityVal": "100% Thiên Nhiên",
      "certAlcohol": "Cồn công nghiệp",
      "certCoa": "Kiểm định COA",
      "certCoaVal": "Từng lô nhập khẩu",
      "guaranteeNote": "Lemy Finest cam kết cung cấp đầy đủ bản mềm và bản cứng phiếu kiểm nghiệm COA / GC-MS cho mọi dự án doanh nghiệp."
    },
    "techSpecs": {
      "distillation": {
        "title": "Thép không gỉ SUS 316L & Thủy tinh Borosilicate 3.3",
        "desc": "Chịu sốc nhiệt tới 150°C, bảo toàn nguyên vẹn liên kết este và terpene không bị phân hủy nhiệt."
      },
      "separation": {
        "title": "Phễu chiết thon quả lê chia vạch & Van Teflon PTFE",
        "desc": "Loại bỏ hoàn toàn tạp chất cơ học và lượng nước đọng dư thừa bằng trọng lực tự nhiên."
      },
      "gcms": {
        "title": "Hệ thống GC-MS Agilent 7890B với đầu dò khối phổ MSD 5977A",
        "desc": "Định danh chính xác từng % pic nốt hương, loại bỏ 100% nguy cơ pha trộn hương liệu nhân tạo hay cồn công nghiệp."
      },
      "blending": {
        "title": "Béc phun hai pha hợp kim nhôm Anodized chống ăn mòn",
        "desc": "Hạt hương phân tách thành lớp sương nano vô hình lơ lửng trong không khí, không gây ẩm mốc nội thất."
      }
    },
    "svgLabels": {
      "plantChamber": "BUỒNG NGUYÊN LIỆU THẢO MỘC",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "NƯỚC GIA NHIỆT HƠI [100°C]",
      "vaporDuct": "CỔ THIÊN NGA DẪN HƠI [VAPOR DUCT Ø38]",
      "oilLayer": "LỚP TINH DẦU (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "NƯỚC CẤT HYDROSOL",
      "hydrosolSub": "Tuần hoàn hồi lưu về nồi cất",
      "refluxWater": "HỒI LƯU NƯỚC CẤT [CLOSED REFLUX]",
      "glassStopper": "NÚT THỦY TINH MÀI THẤU 24/40",
      "oilPhase": "PHA HỮU CƠ: TINH DẦU NGUYÊN CHẤT",
      "oilPhaseSub": "Tỷ trọng: 0.88 - 0.92 g/cm³ // Không tan trong nước",
      "hydrosolPhase": "PHA NƯỚC: HYDROSOL TỰ NHIÊN",
      "hydrosolPhaseSub": "Tỷ trọng: ~1.00 g/cm³ // Chứa hợp chất thơm hòa tan nhẹ",
      "meniscus": "MẶT PHÂN CÁCH PHA (MENISCUS)",
      "meniscusSub": "Phân tách cơ học 100% không dùng dung môi hóa học",
      "ptfeValve": "VAN KHÓA PTFE CHÍNH XÁC",
      "membraneFilter": "MÀNG VI LỌC 0.22 µm (KHỬ ẨM & CẶN)",
      "pureDrop": "GIỌT TINH DẦU TINH KHIẾT 100%",
      "gcmsTitle": "SẮC KÝ KHÍ KHỐI PHỔ GC-MS (AGILENT 7890B) // HP-5MS",
      "coaResult": "KẾT QUẢ: 100% ĐẠT CHUẨN COA",
      "retentionTimeAxis": "THỜI GIAN LƯU TRỮ (RETENTION TIME - MINUTES)",
      "dominantPeak": "PIC CHỦ ĐẠO: LINALOOL (99.8%)",
      "nistMatch": "Định danh phổ khối tương đồng 99.4% NIST Library",
      "molStructure": "CẤU TRÚC PHÂN TỬ",
      "terpeneBenefits": "Kháng khuẩn • An thần tự nhiên",
      "scentPyramid": "THÁP NỐT HƯƠNG ĐỘC BẢN",
      "topNotes": "TOP NOTES (HƯƠNG ĐẦU)",
      "topNotesList": "Cam Bergamot, Bưởi, Bạch Đàn",
      "heartNotes": "HEART NOTES (HƯƠNG GIỮA)",
      "heartNotesList": "Hoa Oải Hương, Trà Trắng, Nhài",
      "baseNotes": "BASE NOTES (HƯƠNG ĐÁY)",
      "baseNotesList": "Gỗ Tuyết Tùng, Hổ Phách, Xạ Hương",
      "longevityNote": "Lưu hương 24h - 48h trong không gian",
      "venturiTitle": "BÉC PHUN KHÍ NÉN VENTURI SIÊU ÂM (NANO COLD ATOMIZATION)",
      "compressedAir": "LUỒNG KHÍ NÉN [2.5 BAR]",
      "oilSuction": "HÚT TINH DẦU TỰ NHIÊN",
      "bernoulliSub": "Áp suất chân không Bernoulli",
      "nanoMist": "HẠT SƯƠNG NANO < 0.1 µm",
      "hvacNote": "Bay theo gió HVAC • Không đọng giọt"
    }
  },
  "en": {
    "header": {
      "eyebrow": "_LAB DISTILLATION & EXTRACTION ARCHITECTURE/",
      "title": "Pharmacopeial Essential Oil Extraction & Refining CAD Blueprint",
      "desc": "Lemy Finest essential oils are distilled and quality-controlled under rigorous laboratory protocols: From low-pressure steam stills, Clevenger separators to Agilent GC-MS spectrometry verifying 100% botanical authenticity."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_STAGE 01 / EXTRACTION",
        "title": "Steam Distillation & Still",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_STAGE 02 / SEPARATION",
        "title": "Separatory Funnel & Decanting",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_STAGE 03 / CHROMATOGRAPHY",
        "title": "GC-MS Spectrometry Fingerprint",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_STAGE 04 / NANO DIFFUSION",
        "title": "Bespoke Formulation & Diffusion",
        "sub": "Cold Atomization & HVAC Integration"
      }
    ],
    "techLabels": {
      "specsHeader": "EQUIPMENT STANDARDS",
      "certHeader": "CERTIFICATIONS & LAB REPORTS",
      "certStandard": "Standard",
      "certPurity": "Purity",
      "certPurityVal": "100% Pure Botanical",
      "certAlcohol": "Alcohol Content",
      "certCoa": "COA Analysis",
      "certCoaVal": "Every Import Batch",
      "guaranteeNote": "Lemy Finest commits to providing both digital and physical COA / GC-MS laboratory test reports for every enterprise project."
    },
    "techSpecs": {
      "distillation": {
        "title": "SUS 316L Stainless & Borosilicate 3.3 Glass",
        "desc": "Withstands thermal shocks up to 150°C, preserving ester and terpene molecular bonds without thermal degradation."
      },
      "separation": {
        "title": "Graduated Pear-Shaped Funnel & PTFE Valve",
        "desc": "Completely separates physical particulates and excess moisture via natural gravity."
      },
      "gcms": {
        "title": "Agilent 7890B GC-MS with MSD 5977A Mass Detector",
        "desc": "Precisely fingerprints individual aromatic notes, eliminating synthetic fragrances or industrial alcohol adulteration."
      },
      "blending": {
        "title": "Anodized Corrosion-Resistant Dual-Fluid Nozzle",
        "desc": "Aerosolizes scent into suspended sub-micron dry mist without causing interior dampness."
      }
    },
    "svgLabels": {
      "plantChamber": "BOTANICAL MATERIAL CHAMBER",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "STEAM HEATING WATER [100°C]",
      "vaporDuct": "GOOSENECK VAPOR DUCT [Ø38mm]",
      "oilLayer": "ESSENTIAL OIL LAYER (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "HYDROSOL WATER LAYER",
      "hydrosolSub": "Closed reflux recycling to boiler",
      "refluxWater": "CLOSED CONDENSATE REFLUX",
      "glassStopper": "GROUND GLASS STOPPER 24/40",
      "oilPhase": "ORGANIC PHASE: PURE ESSENTIAL OIL",
      "oilPhaseSub": "Density: 0.88 - 0.92 g/cm³ // Insoluble in water",
      "hydrosolPhase": "AQUEOUS PHASE: NATURAL HYDROSOL",
      "hydrosolPhaseSub": "Density: ~1.00 g/cm³ // Water-soluble aromatics",
      "meniscus": "PHASE BOUNDARY (MENISCUS)",
      "meniscusSub": "100% physical gravity separation without chemical solvent",
      "ptfeValve": "PRECISION PTFE STOPCOCK VALVE",
      "membraneFilter": "0.22 µm MICRO-MEMBRANE FILTER",
      "pureDrop": "100% PURE ESSENTIAL OIL DROPLET",
      "gcmsTitle": "GAS CHROMATOGRAPHY MASS SPECTROMETRY (AGILENT 7890B)",
      "coaResult": "STATUS: 100% COA COMPLIANT",
      "retentionTimeAxis": "RETENTION TIME (MINUTES)",
      "dominantPeak": "DOMINANT PEAK: LINALOOL (99.8%)",
      "nistMatch": "Mass spec NIST Library match rate 99.4%",
      "molStructure": "MOLECULAR STRUCTURE",
      "terpeneBenefits": "Antibacterial • Natural Calming",
      "scentPyramid": "BESPOKE OLFACTORY PYRAMID",
      "topNotes": "TOP NOTES",
      "topNotesList": "Bergamot, Grapefruit, Eucalyptus",
      "heartNotes": "HEART NOTES",
      "heartNotesList": "French Lavender, White Tea, Jasmine",
      "baseNotes": "BASE NOTES",
      "baseNotesList": "Cedarwood, Warm Amber, White Musk",
      "longevityNote": "Diffusion longevity 24h - 48h in space",
      "venturiTitle": "VENTURI TWO-FLUID ULTRASONIC NOZZLE",
      "compressedAir": "COMPRESSED AIR STREAM [2.5 BAR]",
      "oilSuction": "NATURAL ESSENTIAL OIL DRAW",
      "bernoulliSub": "Bernoulli vacuum suction effect",
      "nanoMist": "SUB-MICRON DRY MIST < 0.1 µm",
      "hvacNote": "Disperses via HVAC airflows • Zero residue"
    }
  },
  "zh": {
    "header": {
      "eyebrow": "_实验室萃取提纯架构 / LAB DISTILLATION ARCHITECTURE/",
      "title": "药典级天然精油萃取提纯 CAD 工业设计蓝图",
      "desc": "Lemy Finest 纯精油严格遵循国际实验室标准进行萃取与质检：从低压水蒸气蒸馏釜、克氏分液器到验证100%天然植物成分的安捷伦 GC-MS 质谱色谱分析。"
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_STAGE 01 / EXTRACTION",
        "title": "水蒸气蒸馏萃取",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_STAGE 02 / SEPARATION",
        "title": "梨形分液与重力分相",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_STAGE 03 / CHROMATOGRAPHY",
        "title": "GC-MS 色谱质谱分析",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_STAGE 04 / NANO DIFFUSION",
        "title": "专属配方与超微雾化",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "设备技术标准",
      "certHeader": "认证与质检报告",
      "certStandard": "行业标准",
      "certPurity": "纯度",
      "certPurityVal": "100% 天然萃取",
      "certAlcohol": "工业酒精",
      "certCoa": "COA质检",
      "certCoaVal": "每批进口全检",
      "guaranteeNote": "Lemy Finest 承诺为每个企业项目提供完备的纸质及电子版 COA / GC-MS 检验报告。"
    },
    "techSpecs": {
      "distillation": {
        "title": "SUS 316L不锈钢与高硼硅玻璃 3.3",
        "desc": "耐受150°C热冲击，完好保留酯类与萜烯分子键免受热降解。"
      },
      "separation": {
        "title": "刻度梨形分液漏斗与PTFE聚四氟阀门",
        "desc": "利用自然重力分离彻底去除机械杂质及残余水分。"
      },
      "gcms": {
        "title": "安捷伦 7890B GC-MS 配 MSD 5977A 质谱检测器",
        "desc": "精准定性定量分析各个芳香分子峰，彻底杜绝人造香精及工业酒精掺杂。"
      },
      "blending": {
        "title": "耐腐蚀阳极氧化铝合金二流体喷嘴",
        "desc": "香氛分子雾化为肉眼不可见纳米干雾悬浮于空中，绝不浸润室内陈设。"
      }
    },
    "svgLabels": {
      "plantChamber": "植物草本原料仓",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "蒸汽加热水源 [100°C]",
      "vaporDuct": "鹅颈导气管 [VAPOR DUCT Ø38]",
      "oilLayer": "精油富集层 (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "纯露芳香水层",
      "hydrosolSub": "自动冷凝回流至蒸馏釜",
      "refluxWater": "闭环纯露回流管线 [CLOSED REFLUX]",
      "glassStopper": "磨砂玻璃塞 24/40",
      "oilPhase": "有机相：100% 纯天然单方精油",
      "oilPhaseSub": "密度: 0.88 - 0.92 g/cm³ // 不溶于水",
      "hydrosolPhase": "水相：高活性天然植物纯露",
      "hydrosolPhaseSub": "密度: ~1.00 g/cm³ // 含微溶芳香水溶物",
      "meniscus": "两相界面弯月面 (MENISCUS)",
      "meniscusSub": "100% 物理重力分层，绝无化学萃取剂残留",
      "ptfeValve": "高精密 PTFE 聚四氟旋塞阀",
      "membraneFilter": "0.22 µm 微孔滤膜（脱水去杂）",
      "pureDrop": "100% 纯净精油精炼液滴",
      "gcmsTitle": "气相色谱质谱联用仪 (AGILENT 7890B)",
      "coaResult": "质检结论：100% 符合药典 COA 标准",
      "retentionTimeAxis": "保留时间 (RETENTION TIME - 分钟)",
      "dominantPeak": "主特征峰：芳樟醇 LINALOOL (99.8%)",
      "nistMatch": "美国国家标准 NIST 谱库匹配度 99.4%",
      "molStructure": "分子骨架结构",
      "terpeneBenefits": "抑菌净化 • 天然安神舒缓",
      "scentPyramid": "独家定制嗅觉香调金字塔",
      "topNotes": "前调 (TOP NOTES)",
      "topNotesList": "意大利香柠檬、粉红葡萄柚、尤加利",
      "heartNotes": "中调 (HEART NOTES)",
      "heartNotesList": "高地薰衣草、白茶初露、小花茉莉",
      "baseNotes": "后调 (BASE NOTES)",
      "baseNotesList": "雪松木、温暖琥珀、白麝香",
      "longevityNote": "空间留香扩散长达 24h - 48h",
      "venturiTitle": "文丘里超声冷气二流体喷嘴",
      "compressedAir": "高速微压气流 [2.5 BAR]",
      "oilSuction": "纯天然精油毛细管引流",
      "bernoulliSub": "伯努利负压自吸效应",
      "nanoMist": "超微米干雾颗粒 < 0.1 µm",
      "hvacNote": "随中央空调新风飘散 • 绝不凝聚挂壁"
    }
  },
  "ja": {
    "header": {
      "eyebrow": "_実験室抽出・精留技術 / LAB DISTILLATION ARCHITECTURE/",
      "title": "薬局方基準エッセンシャルオイル抽出・精製CAD技術設計図",
      "desc": "Lemy Finestのエッセンシャルオイルは、減圧水蒸気蒸留釜からクレベンジャー油水分離器、100%天然成分を実証するAgilent GC-MS質量分析まで、国際基準の厳格な研究室手順に従って抽出・検査されています。"
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_STAGE 01 / EXTRACTION",
        "title": "水蒸気蒸留プロセス",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_STAGE 02 / SEPARATION",
        "title": "分液ロート＆油水分離",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_STAGE 03 / CHROMATOGRAPHY",
        "title": "GC-MS ガスクロマトグラフィー",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_STAGE 04 / NANO DIFFUSION",
        "title": "調香＆ナノ冷気拡散",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "装置技術基準",
      "certHeader": "認証・検査証明書",
      "certStandard": "規格基準",
      "certPurity": "純度",
      "certPurityVal": "100% 天然純粋",
      "certAlcohol": "工業用アルコール",
      "certCoa": "COA分析",
      "certCoaVal": "全輸入ロット検査",
      "guaranteeNote": "Lemy Finestは、すべての企業プロジェクトに対し、COA / GC-MS分析レポートの原本および電子証明書を提供することを確約します。"
    },
    "techSpecs": {
      "distillation": {
        "title": "SUS 316Lステンレス & ホウケイ酸ガラス 3.3",
        "desc": "150°Cまでの耐熱衝撃性を持ち、熱分解を起こさずエステルおよびテルペン結合を完全に保持。"
      },
      "separation": {
        "title": "目盛付洋梨型分液ロート & PTFEテフロンバルブ",
        "desc": "自然重力により機械的不純物と残留水分を完全に除去。"
      },
      "gcms": {
        "title": "アジレント 7890B GC-MSシステム（MSD 5977A検出器）",
        "desc": "芳香ピークを正確に同定し、合成香料や工業用アルコールの混入リスクを100%排除。"
      },
      "blending": {
        "title": "耐腐食陽極酸化アルミニウム 二流体ナノノズル",
        "desc": "超微粒子ナノミストとして空中に浮遊拡散し、内装に湿気や残留物を残しません。"
      }
    },
    "svgLabels": {
      "plantChamber": "植物原料抽出チャンバー",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "水蒸気加熱槽 [100°C]",
      "vaporDuct": "グースネック蒸気管 [VAPOR DUCT Ø38]",
      "oilLayer": "精油層 (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "芳香蒸留水（ハイドロゾル）層",
      "hydrosolSub": "蒸留釜への自動循環還流",
      "refluxWater": "ハイドロゾル還流ライン [CLOSED REFLUX]",
      "glassStopper": "共通摺合わせガラス栓 24/40",
      "oilPhase": "有機相：100% 天然純粋精油",
      "oilPhaseSub": "比重: 0.88 - 0.92 g/cm³ // 非水溶性",
      "hydrosolPhase": "水相：天然芳香ハイドロゾル",
      "hydrosolPhaseSub": "比重: ~1.00 g/cm³ // 微量水溶性芳香成分含有",
      "meniscus": "二相境界メニスカス (MENISCUS)",
      "meniscusSub": "化学溶剤ゼロ・自然重力による100%物理的分離",
      "ptfeValve": "高精度 PTFE テフロン活栓",
      "membraneFilter": "0.22 µm 微細メンブレンフィルター",
      "pureDrop": "100% 純粋精油抽出液滴",
      "gcmsTitle": "GC-MS ガスクロマトグラフィー質量分析 (AGILENT 7890B)",
      "coaResult": "分析結果: 100% COA規格適合",
      "retentionTimeAxis": "保持時間 (RETENTION TIME - 分)",
      "dominantPeak": "主成分ピーク: リナロール (99.8%)",
      "nistMatch": "米国立標準技術研究所 NIST ライブラリ一致率 99.4%",
      "molStructure": "分子構造式",
      "terpeneBenefits": "抗菌・リラクゼーション・鎮静作用",
      "scentPyramid": "特注オルファクトリー・ピラミッド",
      "topNotes": "トップノート (TOP NOTES)",
      "topNotesList": "ベルガモット、グレープフルーツ、ユーカリ",
      "heartNotes": "ミドルノート (HEART NOTES)",
      "heartNotesList": "フレンチラベンダー、ホワイトティー、ジャスミン",
      "baseNotes": "ベースノート (BASE NOTES)",
      "baseNotesList": "シダーウッド、アンバー、ホワイトムスク",
      "longevityNote": "空間残香持続時間 24時間〜48時間",
      "venturiTitle": "ベンチュリ超音波冷気二流体ノズル",
      "compressedAir": "微圧圧縮気流 [2.5 BAR]",
      "oilSuction": "天然精油キャピラリー吸引",
      "bernoulliSub": "ベルヌーイ負圧吸引効果",
      "nanoMist": "サブミクロン乾式ナノミスト < 0.1 µm",
      "hvacNote": "空調気流で拡散 • 結露・液垂れゼロ"
    }
  },
  "ko": {
    "header": {
      "eyebrow": "_실험실 추출 및 정제 공학 / LAB DISTILLATION ARCHITECTURE/",
      "title": "약전 규격 천연 에센셜 오일 추출·정제 CAD 기술 설계도",
      "desc": "Lemy Finest 천연 에센셜 오일은 저압 증기 증류기, 클레벤저 분리기부터 100% 천연 식물성 성분을 입증하는 Agilent GC-MS 질량 분석에 이르기까지 국제 실험실 표준 프로토콜에 따라 추출 및 검증됩니다."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_STAGE 01 / EXTRACTION",
        "title": "수증기 감압 증류 공정",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_STAGE 02 / SEPARATION",
        "title": "분액 깔때기 및 유수 분리",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_STAGE 03 / CHROMATOGRAPHY",
        "title": "GC-MS 기체 크로마토그래피",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_STAGE 04 / NANO DIFFUSION",
        "title": "맞춤 조향 및 나노 분무",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "장비 기술 표준",
      "certHeader": "공식 인증 및 시험성적서",
      "certStandard": "품질 규격",
      "certPurity": "순도",
      "certPurityVal": "100% 천연 추출물",
      "certAlcohol": "산업용 알코올",
      "certCoa": "COA 시험성적서",
      "certCoaVal": "수입 전 로트 전수 검사",
      "guaranteeNote": "Lemy Finest는 모든 엔터프라이즈 프로젝트에 대해 정품 COA / GC-MS 공인 성적서 사본 및 원본을 제공합니다."
    },
    "techSpecs": {
      "distillation": {
        "title": "SUS 316L 스테인리스 및 붕규산 유리 3.3",
        "desc": "최대 150°C 열충격을 견디며 열분해 없이 에스테르 및 테르펜 분자 결합을 완벽히 보존합니다."
      },
      "separation": {
        "title": "눈금 서양배형 분액 깔때기 및 PTFE 테프론 밸브",
        "desc": "자연 중력 분리를 통해 미세 불순물과 잔류 수분을 완전 분리 배출합니다."
      },
      "gcms": {
        "title": "Agilent 7890B GC-MS 시스템 (MSD 5977A 검출기)",
        "desc": "향기 분자 피크를 정밀하게 분석하여 인공 향료 및 산업용 알코올 혼입 위험을 100% 차단합니다."
      },
      "blending": {
        "title": "내부식성 아노다이징 알루미늄 합금 2유체 노즐",
        "desc": "향기 입자를 육안에 보이지 않는 나노 건식 미스트로 분사하여 실내 마감재의 결로를 방지합니다."
      }
    },
    "svgLabels": {
      "plantChamber": "식물성 원료 추출 챔버",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "증기 가열 수조 [100°C]",
      "vaporDuct": "구스넥 증기 이송관 [VAPOR DUCT Ø38]",
      "oilLayer": "에센셜 오일층 (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "하이드로솔 워터층",
      "hydrosolSub": "증류기 자동 순환 환류",
      "refluxWater": "밀폐 순환 환류 라인 [CLOSED REFLUX]",
      "glassStopper": "정밀 접합 유리 마개 24/40",
      "oilPhase": "유기상: 100% 순수 천연 에센셜 오일",
      "oilPhaseSub": "밀도: 0.88 - 0.92 g/cm³ // 비수용성",
      "hydrosolPhase": "수상: 천연 식물성 하이드로솔",
      "hydrosolPhaseSub": "밀도: ~1.00 g/cm³ // 수용성 방향족 화합물 함유",
      "meniscus": "2상 계면 메니스커스 (MENISCUS)",
      "meniscusSub": "화학 용매 제로・자연 중력에 의한 100% 물리 분리",
      "ptfeValve": "정밀 테프론 PTFE 스톱콕 밸브",
      "membraneFilter": "0.22 µm 마이크로 멤브레인 필터",
      "pureDrop": "100% 순수 에센셜 오일 드롭",
      "gcmsTitle": "기체 크로마토그래피 질량분석 GC-MS (AGILENT 7890B)",
      "coaResult": "검증 결과: 100% 약전 COA 기준 충족",
      "retentionTimeAxis": "머무름 시간 (RETENTION TIME - 분)",
      "dominantPeak": "주성분 피크: 리날룰 LINALOOL (99.8%)",
      "nistMatch": "미국 국립표준기술원 NIST 라이브러리 일치율 99.4%",
      "molStructure": "분자 구조식",
      "terpeneBenefits": "천연 항균 • 심신 안정 및 이완",
      "scentPyramid": "비스포크 조향 올팩터리 피라미드",
      "topNotes": "탑 노트 (TOP NOTES)",
      "topNotesList": "베르가못, 그레이프프루트, 유칼립투스",
      "heartNotes": "하트 노트 (HEART NOTES)",
      "heartNotesList": "프렌치 라벤더, 화이트 티, 자스민",
      "baseNotes": "베이스 노트 (BASE NOTES)",
      "baseNotesList": "시더우드, 웜 앰버, 화이트 머스크",
      "longevityNote": "공간 발향 지속성 24시간 ~ 48시간",
      "venturiTitle": "벤투리 초음파 냉기 2유체 노즐",
      "compressedAir": "압축 미세 기류 [2.5 BAR]",
      "oilSuction": "천연 오일 모세관 흡입",
      "bernoulliSub": "베르누이 음압 진공 흡입 원리",
      "nanoMist": "서브마이크론 건식 나노 미스트 < 0.1 µm",
      "hvacNote": "공조 덕트 기류 확산 • 물방울 맺힘 제로"
    }
  },
  "es": {
    "header": {
      "eyebrow": "_ARQUITECTURA DE EXTRACCIÓN Y DESTILACIÓN DE LABORATORIO/",
      "title": "Plano Técnico CAD de Extracción y Refinación de Aceites Esenciales COA",
      "desc": "Los aceites esenciales puros Lemy Finest se extraen y analizan conforme a los estándares internacionales de laboratorio más rigurosos: desde alambiques de vapor a baja presión y separadores Clevenger hasta la espectrometría de masas Agilent GC-MS que certifica el 100% de origen botánico puro."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_ETAPA 01 / EXTRACCIÓN",
        "title": "Destilación por Arrastre de Vapor",
        "sub": "Aparato Clevenger y Alambique"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_ETAPA 02 / SEPARACIÓN",
        "title": "Embudo de Decantación y Fases",
        "sub": "Separación de Fase Sin Disolventes"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_ETAPA 03 / CROMATOGRAFÍA",
        "title": "Análisis Cromatográfico GC-MS",
        "sub": "Cromatografía de Gases y 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_ETAPA 04 / NANO DIFUSIÓN",
        "title": "Formulación y Atomización Nano",
        "sub": "Formulación Exclusiva y Climatización HVAC"
      }
    ],
    "techLabels": {
      "specsHeader": "NORMAS TÉCNICAS DEL EQUIPO",
      "certHeader": "CERTIFICADOS E INFORMES DE ENSAYO",
      "certStandard": "Estándar",
      "certPurity": "Pureza",
      "certPurityVal": "100% Botánico Puro",
      "certAlcohol": "Contenido de Alcohol",
      "certCoa": "Certificado COA",
      "certCoaVal": "En cada lote de importación",
      "guaranteeNote": "Lemy Finest se compromete a entregar informes de prueba de laboratorio COA y GC-MS físicos y digitales para cada proyecto corporativo."
    },
    "techSpecs": {
      "distillation": {
        "title": "Acero Inoxidable SUS 316L y Vidrio Borosilicato 3.3",
        "desc": "Soporta choques térmicos de hasta 150 °C, conservando intactos los enlaces moleculares de ésteres y terpenos sin degradación térmica."
      },
      "separation": {
        "title": "Embudo de Pera Graduado y Válvula de Teflón PTFE",
        "desc": "Elimina completamente las impurezas físicas y el exceso de humedad mediante gravedad natural."
      },
      "gcms": {
        "title": "Sistema Agilent 7890B GC-MS con Detector MSD 5977A",
        "desc": "Identifica de forma unívoca cada pico aromático, erradicando al 100% fragancias artificiales o adulteraciones con alcohol industrial."
      },
      "blending": {
        "title": "Boquilla de Dos Fluidos en Aleación de Aluminio Anodizado",
        "desc": "Atomiza la fragancia en una micro-niebla seca suspendida que evita la humedad o la condensación en los acabados interiores."
      }
    },
    "svgLabels": {
      "plantChamber": "CÁMARA DE MATERIA VEGETAL",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "AGUA DE GENERACIÓN DE VAPOR [100°C]",
      "vaporDuct": "CONDUCTO CUELLO DE CISNE [VAPOR DUCT Ø38]",
      "oilLayer": "FASE DE ACEITE ESENCIAL (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "FASE DE AGUA HIDROLATO",
      "hydrosolSub": "Recirculación de reflujo al alambique",
      "refluxWater": "REFLUJO DE CONDENSADO CERRADO",
      "glassStopper": "TAPÓN DE VIDRIO ESMERILADO 24/40",
      "oilPhase": "FASE ORGÁNICA: ACEITE ESENCIAL PURO",
      "oilPhaseSub": "Densidad: 0.88 - 0.92 g/cm³ // Insoluble en agua",
      "hydrosolPhase": "FASE ACUOSA: HIDROLATO NATURAL",
      "hydrosolPhaseSub": "Densidad: ~1.00 g/cm³ // Aromáticos solubles en agua",
      "meniscus": "LÍMITE DE FASES (MENISCO)",
      "meniscusSub": "Separación por gravedad 100% física sin disolventes",
      "ptfeValve": "VÁLVULA DE CORDÓN DE TEFLÓN PTFE",
      "membraneFilter": "MICRO-MEMBRANA FILTRANTE 0.22 µm",
      "pureDrop": "GOTA DE ACEITE ESENCIAL 100% PURO",
      "gcmsTitle": "CROMATOGRAFÍA DE GASES Y ESPECTROMETRÍA GC-MS (AGILENT)",
      "coaResult": "DICTAMEN: 100% CONFORME A COA",
      "retentionTimeAxis": "TIEMPO DE RETENCIÓN (MINUTOS)",
      "dominantPeak": "PICO PRINCIPAL: LINALOOL (99.8%)",
      "nistMatch": "Similitud espectral del 99.4% con NIST Library",
      "molStructure": "ESTRUCTURA MOLECULAR",
      "terpeneBenefits": "Antibacteriano • Relajante Natural",
      "scentPyramid": "PIRÁMIDE OLFATIVA PERSONALIZADA",
      "topNotes": "NOTAS DE SALIDA (TOP)",
      "topNotesList": "Bergamota, Pomelo Rosado, Eucalipto",
      "heartNotes": "NOTAS DE CORAZÓN (HEART)",
      "heartNotesList": "Lavanda Francesa, Té Blanco, Jazmín",
      "baseNotes": "NOTAS DE FONDO (BASE)",
      "baseNotesList": "Madera de Cedro, Ámbar Cálido, Almizcle Blanco",
      "longevityNote": "Persistencia aromática de 24h a 48h en el espacio",
      "venturiTitle": "BOQUILLA VENTURI ULTRASÓNICA BIFLUIDO",
      "compressedAir": "FLUJO DE AIRE COMPRIMIDO [2.5 BAR]",
      "oilSuction": "SUCCIÓN DE ACEITE ESENCIAL PURO",
      "bernoulliSub": "Principio de succión de vacío Bernoulli",
      "nanoMist": "MICRO-NIEBLA SECA NANO < 0.1 µm",
      "hvacNote": "Difusión en conductos HVAC • Sin condensación"
    }
  },
  "fr": {
    "header": {
      "eyebrow": "_ARCHITECTURE D'EXTRACTION ET DE DISTILLATION EN LABORATOIRE/",
      "title": "Plan CAO Industriel d'Extraction et de Raffinage d'Huiles Essentielles COA",
      "desc": "Les huiles essentielles pures Lemy Finest sont extraites et contrôlées selon les protocoles internationaux les plus exigeants : des alambics à vapeur basse pression et séparateurs de Clevenger à la spectrométrie de masse Agilent GC-MS certifiant 100 % d'authenticité botanique."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_ÉTAPE 01 / EXTRACTION",
        "title": "Distillation à la Vapeur d'Eau",
        "sub": "Appareil de Clevenger & Alambic"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_ÉTAPE 02 / SÉPARATION",
        "title": "Ampoule à Décanter & Séparation",
        "sub": "Séparation de Phase Sans Solvant"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_ÉTAPE 03 / CHROMATOGRAPHIE",
        "title": "Analyse Spectrométrique GC-MS",
        "sub": "Chromatographie en Phase Gazeuse & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_ÉTAPE 04 / NANO DIFFUSION",
        "title": "Formulation & Nébulisation Nano",
        "sub": "Assemblage Sur Mesure & Intégration HVAC"
      }
    ],
    "techLabels": {
      "specsHeader": "NORMES TECHNIQUES DES ÉQUIPEMENTS",
      "certHeader": "CERTIFICATS ET BULLETINS D'ANALYSE",
      "certStandard": "Norme",
      "certPurity": "Pureté",
      "certPurityVal": "100% Pur Botanique",
      "certAlcohol": "Teneur en Alcool",
      "certCoa": "Contrôle COA",
      "certCoaVal": "Chaque lot d'importation",
      "guaranteeNote": "Lemy Finest s'engage à fournir les rapports de tests d'analyse en laboratoire COA / GC-MS numériques et imprimés pour chaque projet d'entreprise."
    },
    "techSpecs": {
      "distillation": {
        "title": "Acier Inoxydable SUS 316L et Verre Borosilicaté 3.3",
        "desc": "Résiste aux chocs thermiques jusqu'à 150 °C, préservant intégralement les liaisons esters et terpènes de la dégradation thermique."
      },
      "separation": {
        "title": "Ampoule de Décantation Conique et Vanne Téflon PTFE",
        "desc": "Élimine totalement les particules solides et les résidus d'eau par gravité naturelle."
      },
      "gcms": {
        "title": "Système Agilent 7890B GC-MS avec Détecteur MSD 5977A",
        "desc": "Identifie avec précision chaque pic olfactif, éliminant tout risque de parfum de synthèse ou de coupage à l'alcool industriel."
      },
      "blending": {
        "title": "Buse Bifluide en Alliage d'Aluminium Anodisé Anticorrosion",
        "desc": "Atomise le parfum sous forme de brume sèche submicronique sans générer d'humidité sur les aménagements intérieurs."
      }
    },
    "svgLabels": {
      "plantChamber": "CHAMBRE DE MATIÈRE VÉGÉTALE",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "EAU DE CHAUFFE VAPEUR [100°C]",
      "vaporDuct": "COL DE CYGNE CONDUCTEUR [VAPOR DUCT Ø38]",
      "oilLayer": "COUCHE D'HUILE ESSENTIELLE (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "COUCHE D'HYDROLAT AQUEUX",
      "hydrosolSub": "Recirculation par reflux vers l'alambic",
      "refluxWater": "REFLUX DU CONDENSAT EN BOUCLE FERMÉE",
      "glassStopper": "BOUCHON EN VERRE RODÉ 24/40",
      "oilPhase": "PHASE ORGANIQUE : HUILE ESSENTIELLE PURE",
      "oilPhaseSub": "Densité : 0,88 - 0,92 g/cm³ // Non miscible à l'eau",
      "hydrosolPhase": "PHASE AQUEUSE : HYDROLAT NATUREL",
      "hydrosolPhaseSub": "Densité : ~1,00 g/cm³ // Composés aromatiques solubles",
      "meniscus": "LIGNE DE SÉPARATION DES PHASES (MÉNISQUE)",
      "meniscusSub": "Séparation physique 100% par gravité sans solvant",
      "ptfeValve": "VANNE DE PRÉCISION EN TÉFLON PTFE",
      "membraneFilter": "MICRO-MEMBRANE FILTRANTE 0,22 µm",
      "pureDrop": "GOUTTE D'HUILE ESSENTIELLE PURE À 100%",
      "gcmsTitle": "CHROMATOGRAPHIE EN PHASE GAZEUSE GC-MS (AGILENT)",
      "coaResult": "RÉSULTAT : 100% CONFORME COA",
      "retentionTimeAxis": "TEMPS DE RÉTENTION (MINUTES)",
      "dominantPeak": "PIC MAJEUR : LINALOL (99,8%)",
      "nistMatch": "Concordance spectrale de 99,4% bibliothèque NIST",
      "molStructure": "STRUCTURE MOLÉCULAIRE",
      "terpeneBenefits": "Antibactérien • Apaisement Naturel",
      "scentPyramid": "PYRAMIDE OLFACTIVE SUR MESURE",
      "topNotes": "NOTES DE TÊTE (TOP)",
      "topNotesList": "Bergamote, Pamplemousse, Eucalyptus",
      "heartNotes": "NOTES DE CŒUR (HEART)",
      "heartNotesList": "Lavande de Haute Provence, Thé Blanc, Jasmin",
      "baseNotes": "NOTES DE FOND (BASE)",
      "baseNotesList": "Bois de Cèdre, Ambre Solaire, Musc Blanc",
      "longevityNote": "Rémanence olfactive dans l'air de 24h à 48h",
      "venturiTitle": "BUSE VENTURI BIFLUIDE À NÉBULISATION FROIDE",
      "compressedAir": "FLUX D'AIR COMPRIMÉ [2,5 BAR]",
      "oilSuction": "ASPIRATION D'HUILE ESSENTIELLE PURE",
      "bernoulliSub": "Effet d'aspiration sous vide de Bernoulli",
      "nanoMist": "BRUME SÈCHE NANO < 0,1 µm",
      "hvacNote": "Aéroportée dans les gaines CVC • Zéro condensation"
    }
  },
  "th": {
    "header": {
      "eyebrow": "_วิศวกรรมการสกัดและการกลั่นในห้องปฏิบัติการ / LAB DISTILLATION ARCHITECTURE/",
      "title": "พิมพ์เขียวทางวิศวกรรม CAD การสกัดและทำให้บริสุทธิ์น้ำมันหอมระเหยมาตรฐาน COA",
      "desc": "น้ำมันหอมระเหยบริสุทธิ์ Lemy Finest ได้รับการสกัดและควบคุมคุณภาพตามระเบียบปฏิบัติมาตรฐานห้องปฏิบัติการสากล ตั้งแต่หม้อต้มไอน้ำความดันต่ำ เครื่องแยก Clevenger ไปจนถึงการวิเคราะห์แมสสเปกโทรเมตรี Agilent GC-MS เพื่อยืนยันความบริสุทธิ์จากธรรมชาติ 100%"
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_ขั้นตอน 01 / EXTRACTION",
        "title": "กระบวนการกลั่นด้วยไอน้ำ",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_ขั้นตอน 02 / SEPARATION",
        "title": "กรวยแยกและกระบวนการแยกชั้น",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_ขั้นตอน 03 / CHROMATOGRAPHY",
        "title": "การวิเคราะห์สเปกโตรเมตรี GC-MS",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_ขั้นตอน 04 / NANO DIFFUSION",
        "title": "การปรุงสูตรเฉพาะและการพ่นหมอกนาโน",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "มาตรฐานทางเทคนิคของอุปกรณ์",
      "certHeader": "การรับรองและรายงานผลการทดสอบ",
      "certStandard": "มาตรฐานคุณภาพ",
      "certPurity": "ความบริสุทธิ์",
      "certPurityVal": "สารสกัดธรรมชาติบริสุทธิ์ 100%",
      "certAlcohol": "แอลกอฮอล์อุตสาหกรรม",
      "certCoa": "ใบรับรอง COA",
      "certCoaVal": "ตรวจวิเคราะห์ทุกล็อตนำเข้า",
      "guaranteeNote": "Lemy Finest มุ่งมั่นที่จะมอบรายงานผลการทดสอบในห้องปฏิบัติการ COA / GC-MS ทั้งแบบดิจิทัลและเอกสารตัวจริงสำหรับทุกโครงการองค์กร"
    },
    "techSpecs": {
      "distillation": {
        "title": "สแตนเลส SUS 316L และแก้วโบโรซิลิเกต 3.3",
        "desc": "ทนความร้อนเฉียบพลันได้ถึง 150°C รักษาโครงสร้างโมเลกุลของเอสเทอร์และเทอร์พีนไม่ให้ถูกทำลายด้วยความร้อน"
      },
      "separation": {
        "title": "กรวยแยกทรงผลแพร์มีขีดบอกปริมาตรและวาล์ว PTFE เทฟลอน",
        "desc": "ขจัดสิ่งเจือปนทางกายภาพและหยดน้ำส่วนเกินออกอย่างสมบูรณ์ด้วยแรงโน้มถ่วงธรรมชาติ"
      },
      "gcms": {
        "title": "ระบบ Agilent 7890B GC-MS พร้อมเครื่องตรวจจับมวลสาร MSD 5977A",
        "desc": "วิเคราะห์อัตลักษณ์สารหอมได้อย่างแม่นยำ ป้องกันการปลอมปนน้ำหอมสังเคราะห์หรือแอลกอฮอล์อุตสาหกรรม 100%"
      },
      "blending": {
        "title": "หัวฉีดสองของไหลอลูมิเนียมอัลลอยด์อโนไดซ์ป้องกันการกัดกร่อน",
        "desc": "พ่นกระจายกลิ่นหอมเป็นละอองแห้งระดับนาโนลอยตัวในอากาศ ไม่ทำให้เฟอร์นิเจอร์หรือผนังภายในอาคารอับชื้น"
      }
    },
    "svgLabels": {
      "plantChamber": "ห้องบรรจุวัตถุดิบพืชสมุนไพร",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "น้ำสร้างไอน้ำให้ความร้อน [100°C]",
      "vaporDuct": "ท่อนำไอน้ำรูปคอหงส์ [VAPOR DUCT Ø38]",
      "oilLayer": "ชั้นน้ำมันหอมระเหย (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "ชั้นน้ำกลั่นบริสุทธิ์ไฮโดรซอล",
      "hydrosolSub": "หมุนเวียนไหลกลับเข้าสู่หม้อต้ม",
      "refluxWater": "ท่อหมุนเวียนน้ำกลั่นระบบปิด [CLOSED REFLUX]",
      "glassStopper": "จุกแก้วขัดผิวละเอียด 24/40",
      "oilPhase": "เฟสอินทรีย์: น้ำมันหอมระเหยบริสุทธิ์ 100%",
      "oilPhaseSub": "ความหนาแน่น: 0.88 - 0.92 g/cm³ // ไม่ละลายในน้ำ",
      "hydrosolPhase": "เฟสน้ำ: ไฮโดรซอลธรรมชาติบริสุทธิ์",
      "hydrosolPhaseSub": "ความหนาแน่น: ~1.00 g/cm³ // มีสารหอมที่ละลายน้ำได้เล็กน้อย",
      "meniscus": "ผิวสัมผัสรอยต่อสองเฟส (MENISCUS)",
      "meniscusSub": "การแยกชั้นทางกายภาพด้วยแรงโน้มถ่วง 100% ปราศจากสารทำละลายเคมี",
      "ptfeValve": "วาล์วเปิด-ปิดเทฟลอน PTFE ความแม่นยำสูง",
      "membraneFilter": "แผ่นกรองเมมเบรน 0.22 µm (กรองความชื้นและตะกอน)",
      "pureDrop": "หยดน้ำมันหอมระเหยบริสุทธิ์ 100%",
      "gcmsTitle": "การวิเคราะห์แก๊สโครมาโทกราฟี-แมสสเปกโทรเมตรี GC-MS (AGILENT)",
      "coaResult": "ผลการทดสอบ: ผ่านมาตรฐาน COA 100%",
      "retentionTimeAxis": "เวลาคงอยู่ (RETENTION TIME - นาที)",
      "dominantPeak": "พีคสารประกอบหลัก: LINALOOL (99.8%)",
      "nistMatch": "ความสอดคล้องกับฐานข้อมูล NIST Library 99.4%",
      "molStructure": "โครงสร้างโมเลกุล",
      "terpeneBenefits": "ยับยั้งแบคทีเรีย • ผ่อนคลายระบบประสาทตามธรรมชาติ",
      "scentPyramid": "ปิรามิดโน้ตน้ำหอมสูตรเอกสิทธิ์เฉพาะ",
      "topNotes": "กลิ่นสัมผัสแรก (TOP NOTES)",
      "topNotesList": "เบอร์กาม็อต, ส้มโอสีชมพู, ยูคาลิปตัส",
      "heartNotes": "กลิ่นหัวใจหลัก (HEART NOTES)",
      "heartNotesList": "ลาเวนเดอร์ฝรั่งเศส, ชาขาว, มะลิ",
      "baseNotes": "กลิ่นฐานติดทนนาน (BASE NOTES)",
      "baseNotesList": "ไม้ซีดาร์, อำพันอุ่น, ไวท์มัสก์",
      "longevityNote": "ความหอมติดทนนานในพื้นที่ 24 ชม. - 48 ชม.",
      "venturiTitle": "หัวพ่นไอเย็นสองของไหลระบบเวนทูรีอัลตราโซนิก",
      "compressedAir": "กระแสลมอัดความดันสูง [2.5 BAR]",
      "oilSuction": "แรงดูดน้ำมันหอมระเหยธรรมชาติ",
      "bernoulliSub": "แรงดูดสุญญากาศตามหลักการแบร์นูลลี",
      "nanoMist": "ละอองหมอกแห้งระดับนาโน < 0.1 µm",
      "hvacNote": "ลอยตัวไปตามระบบท่อลมแอร์ HVAC • ไม่เกิดหยดน้ำเกาะ"
    }
  },
  "lo": {
    "header": {
      "eyebrow": "_ເຕັກໂນໂລຢີການສະກັດໃນຫ້ອງທົດລອງ / LAB DISTILLATION ARCHITECTURE/",
      "title": "ແຜນຜັງວິສະວະກຳ CAD ການສະກັດ ແລະ ປັບປຸງນ້ຳມັນຫອມລະເຫີຍມາດຕະຖານ COA",
      "desc": "ນ້ຳມັນຫອມລະເຫີຍບໍລິສຸດ Lemy Finest ໄດ້ຮັບການສະກັດ ແລະ ທົດສອບຄຸນນະພາບຢ່າງເຂັ້ມງວດຕາມມາດຕະຖານຫ້ອງທົດລອງສາກົນ: ຕັ້ງແຕ່ໝໍ້ຕົ້ມໄອນ້ຳແຮງດັນຕ່ຳ, ອຸປະກອນແຍກ Clevenger ຈົນເຖິງການວິເຄາະ GC-MS ທີ່ຢັ້ງຢືນຄວາມບໍລິສຸດຈາກທຳມະຊາດ 100%."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_ຂັ້ນຕອນ 01 / EXTRACTION",
        "title": "ການຕົ້ມກັ່ນດ້ວຍໄອນ້ຳ",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_ຂັ້ນຕອນ 02 / SEPARATION",
        "title": "ກວຍແຍກ ແລະ ການແຍກຊັ້ນ",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_ຂັ້ນຕອນ 03 / CHROMATOGRAPHY",
        "title": "ການວິເຄາະໂຄຣມາໂຕກຣາຟີ GC-MS",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_ຂັ້ນຕອນ 04 / NANO DIFFUSION",
        "title": "ການປຸງແຕ່ງກິ່ນ ແລະ ພົ່ນໝອກນາໂນ",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "ມາດຕະຖານອຸປະກອນ",
      "certHeader": "ໃບຢັ້ງຢືນ ແລະ ລາຍງານການກວດສອບ",
      "certStandard": "ມາດຕະຖານ",
      "certPurity": "ຄວາມບໍລິສຸດ",
      "certPurityVal": "100% ທຳມະຊາດແທ້",
      "certAlcohol": "ເຫຼົ້າອຸດສາຫະກຳ",
      "certCoa": "ການກວດສອບ COA",
      "certCoaVal": "ກວດທຸກຊຸດການນຳເຂົ້າ",
      "guaranteeNote": "Lemy Finest ມຸ່ງໝັ້ນສະໜອງລາຍງານຜົນການທົດສອບຫ້ອງທົດລອງ COA / GC-MS ທັງແບບດິຈິຕອນ ແລະ ເອກະສານຕົວຈິງສຳລັບທຸກໂຄງການວິສາຫະກິດ."
    },
    "techSpecs": {
      "distillation": {
        "title": "ສະແຕນເລດ SUS 316L ແລະ ແກ້ວໂບໂຣຊິລິເກດ 3.3",
        "desc": "ທົນທານຕໍ່ການປ່ຽນແປງອຸນຫະພູມໄວເຖິງ 150°C, ຮັກສາໂຄງສ້າງໂມເລກຸນເອສເຕີ ແລະ ເທີພີນ ບໍ່ໃຫ້ເສື່ອມສະພາບດ້ວຍຄວາມຮ້ອນ."
      },
      "separation": {
        "title": "ກວຍແຍກຊົງໝາກແພຣ໌ພ້ອມຂີດບອກປະລິມານ ແລະ ວາວ PTFE",
        "desc": "ແຍກສິ່ງເຈືອປົນທາງກາຍະພາບ ແລະ ຄວາມຊຸ່ມເກີນອອກໝົດຈົດດ້ວຍແຮງໂນ້ມຖ່ວງທຳມະຊາດ."
      },
      "gcms": {
        "title": "ລະບົບ Agilent 7890B GC-MS ພ້ອມຫົວວັດມວນສານ MSD 5977A",
        "desc": "ວິເຄາະຈຳແນກໂມເລກຸນກິ່ນຫອມໄດ້ຢ່າງຊັດເຈນ, ປ້ອງກັນການປອມປົນນ້ຳຫອມສັງເຄາະ ຫຼື ເຫຼົ້າອຸດສາຫະກຳ 100%."
      },
      "blending": {
        "title": "ຫົວພົ່ນສອງທາດໄຫຼອະລູມິນຽມອະໂນໄດສ໌ກັນກັດກ່ອນ",
        "desc": "ກະຈາຍອະນຸພາກກິ່ນຫອມເປັນໝອກແຫ້ງລະດັບນາໂນລອຍຕົວໃນອາກາດ, ບໍ່ກໍ່ໃຫ້ເກີດຄວາມຊຸ່ມຊື່ນພາຍໃນອາຄານ."
      }
    },
    "svgLabels": {
      "plantChamber": "ຫ້ອງບັນຈຸວັດຖຸດິບພືດສະໝູນໄພ",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "ນ້ຳສ້າງໄອນ້ຳຄວາມຮ້ອນ [100°C]",
      "vaporDuct": "ທໍ່ນຳໄອນ້ຳຮູບຄໍຫ່ານ [VAPOR DUCT Ø38]",
      "oilLayer": "ຊັ້ນນ້ຳມັນຫອມລະເຫີຍ (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "ຊັ້ນນ້ຳກັ່ນໄຮໂດຣໂຊລ",
      "hydrosolSub": "ໝູນວຽນໄຫຼຄືນສູ່ໝໍ້ຕົ້ມກັ່ນ",
      "refluxWater": "ທໍ່ໝູນວຽນນ້ຳກັ່ນລະບົບປິດ [CLOSED REFLUX]",
      "glassStopper": "ຝາອັດແກ້ວຂັດລະອຽດ 24/40",
      "oilPhase": "ເຟສອິນຊີ: ນ້ຳມັນຫອມລະເຫີຍບໍລິສຸດ 100%",
      "oilPhaseSub": "ຄວາມໜາແໜ້ນ: 0.88 - 0.92 g/cm³ // ບໍ່ລະລາຍໃນນ້ຳ",
      "hydrosolPhase": "ເຟສນ້ຳ: ໄຮໂດຣໂຊລທຳມະຊາດ",
      "hydrosolPhaseSub": "ຄວາມໜາແໜ້ນ: ~1.00 g/cm³ // ມີສານຫອມລະລາຍນ້ຳໄດ້ເລັກນ້ອຍ",
      "meniscus": "ໜ້າສຳຜັດແຍກສອງເຟສ (MENISCUS)",
      "meniscusSub": "ການແຍກທາງກາຍະພາບດ້ວຍແຮງໂນ້ມຖ່ວງ 100% ປາສະຈາກສານເຄມີລະລາຍ",
      "ptfeValve": "ວາວຄວບຄຸມ PTFE ຄວາມຊັດເຈນສູງ",
      "membraneFilter": "ແຜ່ນຕອງເມມເບຣນ 0.22 µm (ຕອງຄວາມຊຸ່ມ & ຕະກອນ)",
      "pureDrop": "ຢົດນ້ຳມັນຫອມລະເຫີຍບໍລິສຸດ 100%",
      "gcmsTitle": "ການວິເຄາະໂຄຣມາໂຕກຣາຟີ GC-MS (AGILENT 7890B)",
      "coaResult": "ຜົນການທົດສອບ: ຜ່ານມາດຕະຖານ COA 100%",
      "retentionTimeAxis": "ເວລາຄົງຕົວ (RETENTION TIME - ນາທີ)",
      "dominantPeak": "ພີກຫຼັກ: LINALOOL (99.8%)",
      "nistMatch": "ຄວາມສອດຄ່ອງກັບ NIST Library 99.4%",
      "molStructure": "ໂຄງສ້າງໂມເລກຸນ",
      "terpeneBenefits": "ຕ້ານເຊື້ອແບັກທີເຣຍ • ຜ່ອນຄາຍຈິດໃຈທຳມະຊາດ",
      "scentPyramid": "ປີຣາມິດກິ່ນຫອມສູດພິເສດສະເພາະ",
      "topNotes": "ກິ່ນສຳຜັດທຳອິດ (TOP NOTES)",
      "topNotesList": "ໝາກກ້ຽງ Bergamot, ໝາກໂອ, ຢູຄາລິບຕັສ",
      "heartNotes": "ກິ່ນຫຼັກ (HEART NOTES)",
      "heartNotesList": "ດອກລາເວນເດີ, ຊາຂາວ, ດອກມະລິ",
      "baseNotes": "ກິ່ນພື້ນຖານ (BASE NOTES)",
      "baseNotesList": "ໄມ້ຊີດ້າ, ອຳພັນ, ມັສກ໌ຂາວ",
      "longevityNote": "ຄວາມຫອມຕິດທົນນານ 24h - 48h ໃນພື້ນທີ່",
      "venturiTitle": "ຫົວພົ່ນລະບົບ Venturi ອັລຕຣາໂຊນິກສອງທາດໄຫຼ",
      "compressedAir": "ກະແສລົມອັດແຮງດັນ [2.5 BAR]",
      "oilSuction": "ແຮງດູດນ້ຳມັນຫອມລະເຫີຍທຳມະຊາດ",
      "bernoulliSub": "ແຮງດູດສູນຍາກາດຫຼັກການ Bernoulli",
      "nanoMist": "ໝອກແຫ້ງລະດັບນາໂນ < 0.1 µm",
      "hvacNote": "ກະຈາຍຕາມທໍ່ລົມແອ HVAC • ບໍ່ເກາະເປັນຢົດນ້ຳ"
    }
  },
  "ms": {
    "header": {
      "eyebrow": "_ARKITEKTUR EKSTRAKSI MAKMAL / LAB DISTILLATION ARCHITECTURE/",
      "title": "Pelan Induk Kejuruteraan CAD Ekstraksi & Penulenan Minyak Pati COA",
      "desc": "Semua minyak pati tulen Lemy Finest diekstrak dan diuji kualiti mengikut protokol makmal antarabangsa yang ketat: Dari dandang stim bertekanan rendah, radas pemisah Clevenger sehingga analisis spektrometri GC-MS membuktikan 100% ketulenan botani semula jadi."
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_PERINGKAT 01 / EXTRACTION",
        "title": "Penyulingan Tarikan Stim",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_PERINGKAT 02 / SEPARATION",
        "title": "Corong Pemisah & Pengasingan Fasa",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_PERINGKAT 03 / CHROMATOGRAPHY",
        "title": "Analisis Kromatografi GC-MS",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_PERINGKAT 04 / NANO DIFFUSION",
        "title": "Adunan Khas & Pengabusan Nano",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "PIAWAIAN TEKNIKAL PERALATAN",
      "certHeader": "PERSIJILAN & LAPORAN MAKMAL",
      "certStandard": "Piawaian",
      "certPurity": "Ketulenan",
      "certPurityVal": "100% Botani Tulen",
      "certAlcohol": "Kandungan Alkohol",
      "certCoa": "Analisis COA",
      "certCoaVal": "Setiap Kelompok Import",
      "guaranteeNote": "Lemy Finest komited membekalkan laporan analisis makmal COA / GC-MS digital dan salinan bercetak bagi setiap projek korporat."
    },
    "techSpecs": {
      "distillation": {
        "title": "Keluli Tahan Karat SUS 316L & Kaca Borosilikat 3.3",
        "desc": "Tahan kejutan haba sehingga 150°C, mengekalkan integriti ikatan ester dan terpena tanpa degradasi haba."
      },
      "separation": {
        "title": "Corong Pemisah Berbentuk Pir & Injap Teflon PTFE",
        "desc": "Mengasingkan bendasing zarah dan kelembapan berlebihan secara graviti fizikal semula jadi."
      },
      "gcms": {
        "title": "Sistem Agilent 7890B GC-MS bersama Pengesan Jisim MSD 5977A",
        "desc": "Mengenal pasti setiap puncak aroma secara tepat, menolak 100% risiko percampuran pewangi sintetik atau alkohol industri."
      },
      "blending": {
        "title": "Muncung Dwi-Bendalir Aloi Aluminium Anodized Tahan Hakis",
        "desc": "Mengabuskan wangian menjadi kabus kering nano terapung di udara tanpa membasahi hiasan dalaman."
      }
    },
    "svgLabels": {
      "plantChamber": "RUANG BAHAN TUMBUHAN BOTANI",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "AIR PEMANASAN STIM [100°C]",
      "vaporDuct": "SALUR WAP LEHER ANGSA [VAPOR DUCT Ø38]",
      "oilLayer": "LAPISAN MINYAK PATI (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "LAPISAN AIR HIDROSOL",
      "hydrosolSub": "Kitaran refluks automatik ke dandang",
      "refluxWater": "REFLUKS KONDENSAT TERTUTUP [CLOSED REFLUX]",
      "glassStopper": "PENUTUP KACA KISAR 24/40",
      "oilPhase": "FASA ORGANIK: MINYAK PATI TULEN",
      "oilPhaseSub": "Ketumpatan: 0.88 - 0.92 g/cm³ // Tidak larut dalam air",
      "hydrosolPhase": "FASA AKUEUS: HIDROSOL SEMULA JADI",
      "hydrosolPhaseSub": "Ketumpatan: ~1.00 g/cm³ // Mengandungi aromatik larut air",
      "meniscus": "SEMPADAN FASA (MENISKUS)",
      "meniscusSub": "Pemisahan fizikal 100% graviti tanpa pelarut kimia",
      "ptfeValve": "INJAP KUNCI TEFLON PTFE KETEPATAN",
      "membraneFilter": "MEMBRAN PENAPIS MIKRO 0.22 µm",
      "pureDrop": "TITISAN MINYAK PATI TULEN 100%",
      "gcmsTitle": "KROMATOGRAFI GAS SPEKTROMETRI JISIM GC-MS (AGILENT)",
      "coaResult": "KEPUTUSAN: 100% MEMATUHI PIAWAIAN COA",
      "retentionTimeAxis": "MASA PENAHANAN (RETENTION TIME - MINIT)",
      "dominantPeak": "PUNCAK UTAMA: LINALOOL (99.8%)",
      "nistMatch": "Padanan spektrum 99.4% Perpustakaan NIST",
      "molStructure": "STRUKTUR MOLEKUL",
      "terpeneBenefits": "Anti-bakteria • Ketenangan Semula Jadi",
      "scentPyramid": "PIRAMID AROMA REKAAN KHAS",
      "topNotes": "NOTA ATAS (TOP NOTES)",
      "topNotesList": "Bergamot, Limau Gedang, Eucalyptus",
      "heartNotes": "NOTA TENGAH (HEART NOTES)",
      "heartNotesList": "Lavender Perancis, Teh Putih, Melati",
      "baseNotes": "NOTA ASAS (BASE NOTES)",
      "baseNotesList": "Kayu Cedar, Amber Hangat, Kasturi Putih",
      "longevityNote": "Ketahanan aroma berpanjangan 24j - 48j di udara",
      "venturiTitle": "MUNCUNG VENTURI ULTRASONIK DWI-BENDALIR",
      "compressedAir": "ALIRAN UDARA MAMPAT [2.5 BAR]",
      "oilSuction": "SEDUTAN MINYAK PATI SEMULA JADI",
      "bernoulliSub": "Prinsip sedutan vakum Bernoulli",
      "nanoMist": "KABUS KERING NANO < 0.1 µm",
      "hvacNote": "Beredar melalui saluran HVAC • Tiada kesan titisan air"
    }
  },
  "hi": {
    "header": {
      "eyebrow": "_प्रयोगशाला आसवन और निष्कर्षण इंजीनियरिंग / LAB DISTILLATION ARCHITECTURE/",
      "title": "फार्माकोपियल आवश्यक तेल निष्कर्षण और शोधन सीएडी ब्लूप्रिंट",
      "desc": "Lemy Finest के सभी शुद्ध आवश्यक तेलों को अंतरराष्ट्रीय प्रयोगशाला मानकों के अनुसार निकाला और परीक्षित किया जाता है: कम दबाव वाले स्टीम स्टिल, क्लेवेंजर विभाजक से लेकर 100% प्राकृतिक वनस्पति प्रामाणिकता सत्यापित करने वाले Agilent GC-MS स्पेक्ट्रोमेट्री तक।"
    },
    "tabs": [
      {
        "id": "distillation",
        "num": "01",
        "code": "_चरण 01 / EXTRACTION",
        "title": "भाप आसवन और संघनन",
        "sub": "Clevenger Apparatus & Steam Still"
      },
      {
        "id": "separation",
        "num": "02",
        "code": "_चरण 02 / SEPARATION",
        "title": "विभाजक कीप और चरण पृथक्करण",
        "sub": "Phase Separation & Zero Solvent"
      },
      {
        "id": "gcms",
        "num": "03",
        "code": "_चरण 03 / CHROMATOGRAPHY",
        "title": "जीसी-एमएस स्पेक्ट्रोमेट्री विश्लेषण",
        "sub": "Gas Chromatography & 100% COA"
      },
      {
        "id": "blending",
        "num": "04",
        "code": "_चरण 04 / NANO DIFFUSION",
        "title": "विशेष फॉर्मूलेशन और नैनो डिफ्यूजन",
        "sub": "Bespoke Blending & HVAC Cold Atomization"
      }
    ],
    "techLabels": {
      "specsHeader": "उपकरण तकनीकी मानक",
      "certHeader": "प्रमाणपत्र और परीक्षण रिपोर्ट",
      "certStandard": "मानक",
      "certPurity": "शुद्धता",
      "certPurityVal": "100% प्राकृतिक वनस्पति",
      "certAlcohol": "औद्योगिक अल्कोहल",
      "certCoa": "सीओए परीक्षण",
      "certCoaVal": "प्रत्येक आयातित लॉट की जांच",
      "guaranteeNote": "Lemy Finest प्रत्येक कॉर्पोरेट प्रोजेक्ट के लिए डिजिटल और मुद्रित COA / GC-MS परीक्षण रिपोर्ट प्रदान करने के लिए प्रतिबद्ध है।"
    },
    "techSpecs": {
      "distillation": {
        "title": "SUS 316L स्टेनलेस स्टील और बोरोसिलिकेट 3.3 ग्लास",
        "desc": "150°C तक थर्मल शॉक का सामना करता है, बिना तापीय क्षरण के एस्टर और टेरपीन आणविक बंधों को संरक्षित रखता है।"
      },
      "separation": {
        "title": "अंशांकित नाशपाती के आकार की कीप और PTFE वाल्व",
        "desc": "प्राकृतिक गुरुत्वाकर्षण द्वारा कणों और अतिरिक्त नमी को पूरी तरह से अलग करता है।"
      },
      "gcms": {
        "title": "Agilent 7890B GC-MS सिस्टम MSD 5977A डिटेक्टर के साथ",
        "desc": "व्यक्तिगत सुगंधित यौगिकों की सटीक पहचान करता है, कृत्रिम सुगंध या औद्योगिक अल्कोहल मिलावट को पूरी तरह रोकता है।"
      },
      "blending": {
        "title": "संक्षारण प्रतिरोधी एनोडाइज्ड एल्यूमीनियम दोहरी-द्रव नोजल",
        "desc": "सुगंध को हवा में निलंबित रहने वाली उप-माइक्रोन सूखी धुंध में बदलता है, जिससे आंतरिक सतहें नम नहीं होतीं।"
      }
    },
    "svgLabels": {
      "plantChamber": "वनस्पति पादप सामग्री कक्ष",
      "plantChamberSub": "Botanical Plant Material Chamber",
      "heatingWater": "भाप तापन जल [100°C]",
      "vaporDuct": "हंसगर्दन वाष्प नलिका [VAPOR DUCT Ø38]",
      "oilLayer": "आवश्यक तेल परत (ρ < 1.0)",
      "pureOilSub": "100% Pure Essential Oil",
      "hydrosolLayer": "हाइड्रोसोल जल परत",
      "hydrosolSub": "बॉयलर में बंद भाटा पुनर्चक्रण",
      "refluxWater": "बंद संघनित भाटा [CLOSED REFLUX]",
      "glassStopper": "ग्राउंड ग्लास स्टॉपर 24/40",
      "oilPhase": "कार्बनिक चरण: 100% शुद्ध आवश्यक तेल",
      "oilPhaseSub": "घनत्व: 0.88 - 0.92 g/cm³ // पानी में अघुलनशील",
      "hydrosolPhase": "जलीय चरण: प्राकृतिक हाइड्रोसोल",
      "hydrosolPhaseSub": "घनत्व: ~1.00 g/cm³ // घुलनशील सुगंधित यौगिक",
      "meniscus": "दोहरे चरण की सीमा (मेनिस्कस)",
      "meniscusSub": "रासायनिक विलायक के बिना 100% गुरुत्वाकर्षण पृथक्करण",
      "ptfeValve": "परिशुद्धता पीटीएफई स्टॉपकॉक वाल्व",
      "membraneFilter": "0.22 µm माइक्रो-झिल्ली फ़िल्टर",
      "pureDrop": "100% शुद्ध आवश्यक तेल की बूंद",
      "gcmsTitle": "गैस क्रोमैटोग्राफी मास स्पेक्ट्रोमेट्री GC-MS (AGILENT)",
      "coaResult": "परिणाम: 100% सीओए मानक अनुपालन",
      "retentionTimeAxis": "प्रतिधारण समय (RETENTION TIME - मिनट)",
      "dominantPeak": "प्रमुख शिखर: लिनालूल LINALOOL (99.8%)",
      "nistMatch": "एनआईएसटी लाइब्रेरी स्पेक्ट्रल समानता 99.4%",
      "molStructure": "आणविक संरचना",
      "terpeneBenefits": "जीवाणुरोधी • प्राकृतिक तनावमुक्ति",
      "scentPyramid": "अनुकूलित सुगंध पिरामिड",
      "topNotes": "शीर्ष नोट्स (TOP NOTES)",
      "topNotesList": "बर्गामोट, गुलाबी अंगूर, नीलगिरी",
      "heartNotes": "मध्य नोट्स (HEART NOTES)",
      "heartNotesList": "फ्रेंच लैवेंडर, सफेद चाय, चमेली",
      "baseNotes": "आधार नोट्स (BASE NOTES)",
      "baseNotesList": "देवदार की लकड़ी, गर्म एम्बर, कस्तूरी",
      "longevityNote": "अंतरिक्ष में 24 से 48 घंटे तक सुगंध की निरंतरता",
      "venturiTitle": "वेंचुरी अल्ट्रासोनिक दोहरी-द्रव नोजल",
      "compressedAir": "संपीड़ित वायु प्रवाह [2.5 BAR]",
      "oilSuction": "प्राकृतिक आवश्यक तेल चूषण",
      "bernoulliSub": "बरنौली वैक्यूम चूषण प्रभाव",
      "nanoMist": "सूखी नैनो धुंध < 0.1 µm",
      "hvacNote": "एचवीएसी एयरफ्लो के साथ प्रसार • शून्य अवशेष"
    }
  }
};
