<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintSplitShowcase from '$lib/components/BlueprintSplitShowcase.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import { 
    Layers, 
    Boxes, 
    Factory, 
    Warehouse, 
    Calculator, 
    Truck, 
    Receipt, 
    ExternalLink
  } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const metrics = [
    {
      label: 'ĐỊNH MỨC SẢN XUẤT',
      value: 'Multi-BOM',
      sublabel: 'Kiểm soát chi tiết định mức hao hụt nguyên phụ liệu đa cấp',
      color: '#22439c'
    },
    {
      label: 'ĐỘ CHÍNH XÁC KHO',
      value: '99.8%',
      sublabel: 'Nhận diện quét mã Barcode/QR vị trí ô kệ không sai sót',
      color: '#10b981'
    },
    {
      label: 'BÁO CÁO TÀI CHÍNH',
      value: 'Realtime',
      sublabel: 'Tự động kết chuyển chi phí và hạch toán dòng tiền cuối kỳ',
      color: '#22439c'
    },
    {
      label: 'CHUẨN MỰC HẠCH TOÁN',
      value: 'VAS & IFRS',
      sublabel: 'Tuân thủ nghiêm Thông tư 200/133 và chuẩn mực quốc tế',
      color: '#22439c'
    }
  ];

  const modules = [
    {
      id: '01',
      code: '_MANUFACTURING & BOM/',
      title: 'Quản Trị Sản Xuất & Định Mức BOM Đa Cấp',
      icon: Factory,
      desc: 'Thiết lập cây định mức nguyên vật liệu (Multi-level Bill of Materials), tính toán nhu cầu nguyên vật liệu (MRP) và phân bổ chi phí sản xuất theo từng công đoạn chuyền.',
      tag: 'mrp manufacturing'
    },
    {
      id: '02',
      code: '_WAREHOUSE WMS/',
      title: 'Quản Lý Kho Bãi Thông Minh (WMS)',
      icon: Warehouse,
      desc: 'Quản lý theo vị trí ô kệ (Bin location), kiểm soát hạn sử dụng (FIFO/FEFO), quản lý theo số Lô (Batch number) và kiểm đếm bằng Barcode/QR code.',
      tag: 'warehouse wms'
    },
    {
      id: '03',
      code: '_ACCOUNTING & FINANCE/',
      title: 'Kế Toán Quản Trị Chuẩn VAS & IFRS',
      icon: Calculator,
      desc: 'Tuân thủ nghiêm ngặt Thông tư 200/133 của Bộ Tài chính và chuẩn mực quốc tế IFRS. Tự động sinh bút toán kép từ các nghiệp vụ kho, mua sắm và bán hàng.',
      tag: 'financial ledger'
    },
    {
      id: '04',
      code: '_SUPPLY CHAIN (SCM)/',
      title: 'Chuỗi Cung Ứng & Mua Hàng Tập Trung',
      icon: Truck,
      desc: 'Quy trình phê duyệt báo giá đa cấp bậc, theo dõi trạng thái đơn mua hàng (PO), đánh giá năng lực nhà cung cấp và quản lý thời hạn công nợ chi tiết.',
      tag: 'procurement scm'
    },
    {
      id: '05',
      code: '_DISTRIBUTION & SALES/',
      title: 'Quản Trị Kênh Phân Phối & Bán Hàng',
      icon: Boxes,
      desc: 'Thiết lập ma trận chính sách giá linh hoạt theo cấp đại lý, khu vực địa lý, hạn mức tín dụng và tự động tính chiết khấu thương mại theo doanh số.',
      tag: 'sales distribution'
    },
    {
      id: '06',
      code: '_FINANCIAL RECONCILIATION/',
      title: 'Đối Soát Tự Động & Hóa Đơn Điện Tử',
      icon: Receipt,
      desc: 'Kết nối liên thông ngân hàng (Bank Hub), tự động đối soát sổ phụ với số dư thực tế, tích hợp trực tiếp các nhà cấp hóa đơn điện tử hợp chuẩn.',
      tag: 'bank reconciliation'
    }
  ];

  const mrpBullets = [
    {
      title: 'Định mức hao hụt động',
      text: 'Tự động tính toán tỷ lệ hao hụt nguyên vật liệu theo từng lô máy móc và tay nghề nhân công.'
    },
    {
      title: 'Lập kế hoạch mua hàng MRP tự động',
      text: 'Đối chiếu tồn kho khả dụng để tự sinh đơn mua hàng PO trước khi chuyền sản xuất bị gián đoạn.'
    },
    {
      title: 'Tính giá thành đích danh thời gian thực',
      text: 'Phân bổ chính xác 3 yếu tố giá thành: Chi phí NVL trực tiếp, chi phí nhân công và chi phí sản xuất chung.'
    }
  ];
</script>

<svelte:head>
  <title>Kelvot ERP — Hệ Thống ERP Sản Xuất, Kho Bãi & Kế Toán Quản Trị | CreditBird</title>
  <meta name="description" content="Kelvot ERP (kelvot.com) — Hệ thống ERP may đo chuyên sâu cho sản xuất định mức BOM, quản lý kho WMS và kế toán tài chính VAS/IFRS. Phát triển bởi CreditBird." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_THƯƠNG HIỆU ERP ĐỘC LẬP / KELVOT.COM"
      eyebrowIcon={Layers}
      specBadge="Định Mức BOM • Kho WMS • Kế Toán VAS/IFRS"
      title="Kelvot ERP — Quản Trị Toàn Diện Sản Xuất, Kho & Tài Chính"
      description="Thương hiệu phần mềm ERP chuyên sâu trực thuộc hệ sinh thái CreditBird. Được kiến trúc may đo dành riêng cho các nhà máy sản xuất, chuỗi bán lẻ và tập đoàn phân phối cần kiểm soát dòng tiền và chi phí sản xuất theo thời gian thực."
      primaryBtnText="Truy Cập Website Kelvot.com"
      primaryBtnHref="https://kelvot.com"
      primaryBtnIcon={ExternalLink}
      secondaryBtnText="Đăng Ký Khảo Sát & Demo ERP"
      secondaryBtnAction={openDemo}
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow="_CHỈ SỐ THỰC CHỨNG / PRODUCTION METRICS"
      title="Tiêu chuẩn kiểm soát chất lượng và tối ưu hóa chi phí vận hành"
      theme="light"
      {metrics}
    />

    <!-- 3. 6 Core Modules Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="modules"
      theme="dark"
      eyebrow="_PHÂN HỆ TRỌNG YẾU / CORE MODULES/"
      title="Kiến Trúc ERP Khép Kín Cho Doanh Nghiệp Sản Xuất & Thương Mại"
      subheading="Khả năng module hóa cao độ, triển khai độc lập hoặc đồng bộ liên thông toàn diện."
      description="Mỗi phân hệ của Kelvot ERP được thiết kế theo chuẩn microservices độc lập, đảm bảo dữ liệu kế toán tài chính, kho vận và kế hoạch sản xuất đồng bộ tức thì."
      columns={3}
      items={modules}
    />

    <!-- 4. MRP Production Ledger Split Showcase (Crisp Light Blueprint) -->
    <BlueprintSplitShowcase
      id="production-deep-dive"
      theme="light"
      eyebrow="_SẢN XUẤT THỰC CHIẾN / BOM & MRP"
      title="Kiểm Soát Từng Gram Nguyên Liệu & Giây Máy Chạy"
      description="Khắc phục triệt để tình trạng thiếu hụt nguyên vật liệu làm đình trệ đơn hàng hoặc tồn kho nguyên phụ liệu quá mức gây đọng vốn lưu động."
      bullets={mrpBullets}
      linkText="Tìm hiểu thêm tài liệu kỹ thuật tại Kelvot.com"
      linkUrl="https://kelvot.com"
      external={true}
    >
      <!-- Telemetry MRP Ledger Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <span class="text-[#60a5fa] font-bold">KELVOT_ERP // PRODUCTION_LEDGER</span>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            VAS_IFRS_COMPLIANT
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[BOM-102] Thành phẩm Động cơ Diesel</span>
            <span class="text-[#60a5fa] tabular-nums">12 Cụm chi tiết</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[WMS-BIN] Kho NVL Thép Tấm - Dãy B04</span>
            <span class="text-emerald-400 tabular-nums">Tồn: 42.5 Tấn</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[ACCT-TK154] Chi phí SX Dở dang</span>
            <span class="text-[#facc15] tabular-nums">1,420,500,000 ₫</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span>Audit Hash: SHA-256 Valid</span>
          <span class="text-white">DB: PostgreSQL ACID Double-Entry</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow="_TƯ VẤN TRIỂN KHAI KELVOT ERP/"
      title="Chuẩn Hóa Toàn Bộ Quy Trình Vận Hành Doanh Nghiệp"
      description="Đội ngũ chuyên gia ERP của Kelvot và CreditBird sẵn sàng đến tận nhà máy của bạn để khảo sát quy trình, tư vấn giải pháp và xây dựng lộ trình số hóa chi tiết."
      primaryText="Đăng Ký Khảo Sát Nhà Máy & Báo Giá"
      primaryAction={openDemo}
      secondaryText="Khám Phá Website Kelvot.com"
      secondaryHref="https://kelvot.com"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
