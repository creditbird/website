const fs = require('fs');

const data = {
  vi: {
    header: {
      eyebrow: '_CÔNG NGHỆ CHIẾT TÁCH / LAB DISTILLATION ARCHITECTURE/',
      title: 'Bản Vẽ Kỹ Thuật Chiết Tách & Tinh Chế Tinh Dầu Chuẩn Dược Điển COA',
      desc: 'Toàn bộ tinh dầu Lemy Finest được chiết xuất và kiểm nghiệm nghiêm ngặt theo quy trình phòng thí nghiệm tiêu chuẩn quốc tế: Từ nồi cất hơi nước áp suất thấp, cột tách pha Clevenger đến phân tích sắc ký khí khối phổ GC-MS xác thực 100% hàm lượng tự nhiên.'
    },
    tabs: [
      { id: 'distillation', num: '01', code: '_STAGE 01 / EXTRACTION', title: 'Chưng Cất Lôi Cuốn Hơi Nước', sub: 'Clevenger Apparatus & Steam Still' },
      { id: 'separation', num: '02', code: '_STAGE 02 / SEPARATION', title: 'Phễu Chiết Quả Lê & Tách Pha', sub: 'Phase Separation & Zero Solvent' },
      { id: 'gcms', num: '03', code: '_STAGE 03 / CHROMATOGRAPHY', title: 'Phân Tích Sắc Ký Khí GC-MS', sub: 'Gas Chromatography & 100% COA' },
      { id: 'blending', num: '04', code: '_STAGE 04 / NANO DIFFUSION', title: 'Pha Chế & Phun Sương Nano', sub: 'Bespoke Blending & HVAC Cold Atomization' }
    ],
    techLabels: {
      specsHeader: 'TIÊU CHUẨN THIẾT BỊ',
      certHeader: 'CHỨNG NHẬN & PHIẾU KIỂM ĐỊNH',
      certStandard: 'Tiêu chuẩn',
      certPurity: 'Độ tinh khiết',
      certPurityVal: '100% Thiên Nhiên',
      certAlcohol: 'Cồn công nghiệp',
      certCoa: 'Kiểm định COA',
      certCoaVal: 'Từng lô nhập khẩu',
      guaranteeNote: 'Lemy Finest cam kết cung cấp đầy đủ bản mềm và bản cứng phiếu kiểm nghiệm COA / GC-MS cho mọi dự án doanh nghiệp.'
    },
    techSpecs: {
      distillation: { title: 'Thép không gỉ SUS 316L & Thủy tinh Borosilicate 3.3', desc: 'Chịu sốc nhiệt tới 150°C, bảo toàn nguyên vẹn liên kết este và terpene không bị phân hủy nhiệt.' },
      separation: { title: 'Phễu chiết thon quả lê chia vạch & Van Teflon PTFE', desc: 'Loại bỏ hoàn toàn tạp chất cơ học và lượng nước đọng dư thừa bằng trọng lực tự nhiên.' },
      gcms: { title: 'Hệ thống GC-MS Agilent 7890B với đầu dò khối phổ MSD 5977A', desc: 'Định danh chính xác từng % pic nốt hương, loại bỏ 100% nguy cơ pha trộn hương liệu nhân tạo hay cồn công nghiệp.' },
      blending: { title: 'Béc phun hai pha hợp kim nhôm Anodized chống ăn mòn', desc: 'Hạt hương phân tách thành lớp sương nano vô hình lơ lửng trong không khí, không gây ẩm mốc nội thất.' }
    },
    svgLabels: {
      plantChamber: 'BUỒNG NGUYÊN LIỆU THẢO MỘC',
      plantChamberSub: 'Botanical Plant Material Chamber',
      heatingWater: 'NƯỚC GIA NHIỆT HƠI [100°C]',
      vaporDuct: 'CỔ THIÊN NGA DẪN HƠI [VAPOR DUCT Ø38]',
      oilLayer: 'LỚP TINH DẦU (ρ < 1.0)',
      pureOilSub: '100% Pure Essential Oil',
      hydrosolLayer: 'NƯỚC CẤT HYDROSOL',
      hydrosolSub: 'Tuần hoàn hồi lưu về nồi cất',
      refluxWater: 'HỒI LƯU NƯỚC CẤT [CLOSED REFLUX]',
      glassStopper: 'NÚT THỦY TINH MÀI THẤU 24/40',
      oilPhase: 'PHA HỮU CƠ: TINH DẦU NGUYÊN CHẤT',
      oilPhaseSub: 'Tỷ trọng: 0.88 - 0.92 g/cm³ // Không tan trong nước',
      hydrosolPhase: 'PHA NƯỚC: HYDROSOL TỰ NHIÊN',
      hydrosolPhaseSub: 'Tỷ trọng: ~1.00 g/cm³ // Chứa hợp chất thơm hòa tan nhẹ',
      meniscus: 'MẶT PHÂN CÁCH PHA (MENISCUS)',
      meniscusSub: 'Phân tách cơ học 100% không dùng dung môi hóa học',
      ptfeValve: 'VAN KHÓA PTFE CHÍNH XÁC',
      membraneFilter: 'MÀNG VI LỌC 0.22 µm (KHỬ ẨM & CẶN)',
      pureDrop: 'GIỌT TINH DẦU TINH KHIẾT 100%',
      gcmsTitle: 'SẮC KÝ KHÍ KHỐI PHỔ GC-MS (AGILENT 7890B) // HP-5MS',
      coaResult: 'KẾT QUẢ: 100% ĐẠT CHUẨN COA',
      retentionTimeAxis: 'THỜI GIAN LƯU TRỮ (RETENTION TIME - MINUTES)',
      dominantPeak: 'PIC CHỦ ĐẠO: LINALOOL (99.8%)',
      nistMatch: 'Định danh phổ khối tương đồng 99.4% NIST Library',
      molStructure: 'CẤU TRÚC PHÂN TỬ',
      terpeneBenefits: 'Kháng khuẩn • An thần tự nhiên',
      scentPyramid: 'THÁP NỐT HƯƠNG ĐỘC BẢN',
      topNotes: 'TOP NOTES (HƯƠNG ĐẦU)',
      topNotesList: 'Cam Bergamot, Bưởi, Bạch Đàn',
      heartNotes: 'HEART NOTES (HƯƠNG GIỮA)',
      heartNotesList: 'Hoa Oải Hương, Trà Trắng, Nhài',
      baseNotes: 'BASE NOTES (HƯƠNG ĐÁY)',
      baseNotesList: 'Gỗ Tuyết Tùng, Hổ Phách, Xạ Hương',
      longevityNote: 'Lưu hương 24h - 48h trong không gian',
      venturiTitle: 'BÉC PHUN KHÍ NÉN VENTURI SIÊU ÂM (NANO COLD ATOMIZATION)',
      compressedAir: 'LUỒNG KHÍ NÉN [2.5 BAR]',
      oilSuction: 'HÚT TINH DẦU TỰ NHIÊN',
      bernoulliSub: 'Áp suất chân không Bernoulli',
      nanoMist: 'HẠT SƯƠNG NANO < 0.1 µm',
      hvacNote: 'Bay theo gió HVAC • Không đọng giọt'
    }
  },
  en: {
    header: {
      eyebrow: '_LAB DISTILLATION & EXTRACTION ARCHITECTURE/',
      title: 'Pharmacopeial Essential Oil Extraction & Refining CAD Blueprint',
      desc: 'Lemy Finest essential oils are distilled and quality-controlled under rigorous laboratory protocols: From low-pressure steam stills, Clevenger separators to Agilent GC-MS spectrometry verifying 100% botanical authenticity.'
    },
    tabs: [
      { id: 'distillation', num: '01', code: '_STAGE 01 / EXTRACTION', title: 'Steam Distillation & Still', sub: 'Clevenger Apparatus & Steam Still' },
      { id: 'separation', num: '02', code: '_STAGE 02 / SEPARATION', title: 'Separatory Funnel & Decanting', sub: 'Phase Separation & Zero Solvent' },
      { id: 'gcms', num: '03', code: '_STAGE 03 / CHROMATOGRAPHY', title: 'GC-MS Spectrometry Fingerprint', sub: 'Gas Chromatography & 100% COA' },
      { id: 'blending', num: '04', code: '_STAGE 04 / NANO DIFFUSION', title: 'Bespoke Formulation & Diffusion', sub: 'Cold Atomization & HVAC Integration' }
    ],
    techLabels: {
      specsHeader: 'EQUIPMENT STANDARDS',
      certHeader: 'CERTIFICATIONS & LAB REPORTS',
      certStandard: 'Standard',
      certPurity: 'Purity',
      certPurityVal: '100% Pure Botanical',
      certAlcohol: 'Alcohol Content',
      certCoa: 'COA Analysis',
      certCoaVal: 'Every Import Batch',
      guaranteeNote: 'Lemy Finest commits to providing both digital and physical COA / GC-MS laboratory test reports for every enterprise project.'
    },
    techSpecs: {
      distillation: { title: 'SUS 316L Stainless & Borosilicate 3.3 Glass', desc: 'Withstands thermal shocks up to 150°C, preserving ester and terpene molecular bonds without thermal degradation.' },
      separation: { title: 'Graduated Pear-Shaped Funnel & PTFE Valve', desc: 'Completely separates physical particulates and excess moisture via natural gravity.' },
      gcms: { title: 'Agilent 7890B GC-MS with MSD 5977A Mass Detector', desc: 'Precisely fingerprints individual aromatic notes, eliminating synthetic fragrances or industrial alcohol adulteration.' },
      blending: { title: 'Anodized Corrosion-Resistant Dual-Fluid Nozzle', desc: 'Aerosolizes scent into suspended sub-micron dry mist without causing interior dampness.' }
    },
    svgLabels: {
      plantChamber: 'BOTANICAL MATERIAL CHAMBER',
      plantChamberSub: 'Botanical Plant Material Chamber',
      heatingWater: 'STEAM HEATING WATER [100°C]',
      vaporDuct: 'GOOSENECK VAPOR DUCT [Ø38mm]',
      oilLayer: 'ESSENTIAL OIL LAYER (ρ < 1.0)',
      pureOilSub: '100% Pure Essential Oil',
      hydrosolLayer: 'HYDROSOL WATER LAYER',
      hydrosolSub: 'Closed reflux recycling to boiler',
      refluxWater: 'CLOSED CONDENSATE REFLUX',
      glassStopper: 'GROUND GLASS STOPPER 24/40',
      oilPhase: 'ORGANIC PHASE: PURE ESSENTIAL OIL',
      oilPhaseSub: 'Density: 0.88 - 0.92 g/cm³ // Insoluble in water',
      hydrosolPhase: 'AQUEOUS PHASE: NATURAL HYDROSOL',
      hydrosolPhaseSub: 'Density: ~1.00 g/cm³ // Water-soluble aromatics',
      meniscus: 'PHASE BOUNDARY (MENISCUS)',
      meniscusSub: '100% physical gravity separation without chemical solvent',
      ptfeValve: 'PRECISION PTFE STOPCOCK VALVE',
      membraneFilter: '0.22 µm MICRO-MEMBRANE FILTER',
      pureDrop: '100% PURE ESSENTIAL OIL DROPLET',
      gcmsTitle: 'GAS CHROMATOGRAPHY MASS SPECTROMETRY (AGILENT 7890B)',
      coaResult: 'STATUS: 100% COA COMPLIANT',
      retentionTimeAxis: 'RETENTION TIME (MINUTES)',
      dominantPeak: 'DOMINANT PEAK: LINALOOL (99.8%)',
      nistMatch: 'Mass spec NIST Library match rate 99.4%',
      molStructure: 'MOLECULAR STRUCTURE',
      terpeneBenefits: 'Antibacterial • Natural Calming',
      scentPyramid: 'BESPOKE OLFACTORY PYRAMID',
      topNotes: 'TOP NOTES',
      topNotesList: 'Bergamot, Grapefruit, Eucalyptus',
      heartNotes: 'HEART NOTES',
      heartNotesList: 'French Lavender, White Tea, Jasmine',
      baseNotes: 'BASE NOTES',
      baseNotesList: 'Cedarwood, Warm Amber, White Musk',
      longevityNote: 'Diffusion longevity 24h - 48h in space',
      venturiTitle: 'VENTURI TWO-FLUID ULTRASONIC NOZZLE',
      compressedAir: 'COMPRESSED AIR STREAM [2.5 BAR]',
      oilSuction: 'NATURAL ESSENTIAL OIL DRAW',
      bernoulliSub: 'Bernoulli vacuum suction effect',
      nanoMist: 'SUB-MICRON DRY MIST < 0.1 µm',
      hvacNote: 'Disperses via HVAC airflows • Zero residue'
    }
  }
};

