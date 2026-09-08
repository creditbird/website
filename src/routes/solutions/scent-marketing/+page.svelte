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
    Wind, 
    ShieldCheck, 
    Droplets, 
    ExternalLink, 
    Wifi, 
    Award, 
    FlaskConical,
    Hotel,
    Car,
    ShoppingBag,
    HeartPulse
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
      label: 'DIỆN TÍCH PHỦ SÓNG',
      value: '500 - 5.000 m²',
      sublabel: 'Kết nối trực tiếp hệ thống ống gió điều hòa trung tâm HVAC',
      color: '#22439c'
    },
    {
      label: 'CÔNG NGHỆ KHUẾCH TÁN',
      value: '< 0.1 µm',
      sublabel: 'Hạt hương sương nano siêu mịn lơ lửng, tuyệt đối không ngưng tụ',
      color: '#10b981'
    },
    {
      label: 'CHỨNG NHẬN CHẤT LƯỢNG',
      value: '100% COA',
      sublabel: 'Phiếu kiểm định quốc tế COA & phân tích sắc ký khí GC-MS',
      color: '#22439c'
    },
    {
      label: 'ĐIỀU KHIỂN THÔNG MINH',
      value: 'WiFi & App',
      sublabel: 'Lập trình hẹn giờ tự động và điều chỉnh mật độ hương theo khung giờ',
      color: '#22439c'
    }
  ];

  const solutions = [
    {
      id: '01',
      code: '_COMMERCIAL HVAC/',
      title: 'Máy Khuếch Tán Công Nghiệp Kết Nối HVAC',
      icon: Wind,
      desc: 'Tích hợp trực tiếp vào hệ thống thông gió điều hòa trung tâm HVAC. Công nghệ sóng nano tách hạt tinh dầu siêu mịn dưới 0.1 micron, không ngưng tụ, phủ đều không gian 500 - 5.000m².',
      tag: 'hvac integration'
    },
    {
      id: '02',
      code: '_SMART STANDALONE/',
      title: 'Thiết Bị Khuếch Tán Thông Minh Phủ Sảnh & Showroom',
      icon: Wifi,
      desc: 'Thiết kế sang trọng cho sảnh chờ, showroom, spa từ 100 - 500m². Cài đặt chính xác thời gian phun, cường độ hương theo từng khung giờ cao điểm qua App kết nối WiFi/Bluetooth.',
      tag: 'iot standalone'
    },
    {
      id: '03',
      code: '_COA CERTIFIED OILS/',
      title: '100% Tinh Dầu Thiên Nhiên Chuẩn COA & GC-MS',
      icon: FlaskConical,
      desc: 'Nguyên liệu nhập khẩu chính ngạch, có đầy đủ phiếu kiểm nghiệm chất lượng COA (Certificate of Analysis) và phân tích sắc ký khí GC-MS, không cồn công nghiệp, tuyệt đối an toàn cho sức khỏe.',
      tag: 'certified pure oil'
    },
    {
      id: '04',
      code: '_SIGNATURE SCENT/',
      title: 'Thiết Kế Mùi Hương Nhận Diện Thương Hiệu Độc Quyền',
      icon: Award,
      desc: 'Đội ngũ chuyên gia mùi hương điều chế nốt hương độc bản (Bespoke Signature Scent), tạo dấu ấn cảm xúc khó quên giúp gia tăng thời gian lưu lại và hành vi mua sắm của khách hàng.',
      tag: 'brand signature'
    },
    {
      id: '05',
      code: '_PERIODIC REFILL/',
      title: 'Dịch Vụ Cung Cấp Định Kỳ & Bảo Trì Tận Nơi',
      icon: Droplets,
      desc: 'Gói giải pháp trọn gói hàng tháng: nhân viên kỹ thuật đến nạp tinh dầu định kỳ, vệ sinh kim phun, thay lọc định kỳ, bảo đảm không gian của bạn luôn thơm mát liên tục.',
      tag: 'maintenance service'
    },
    {
      id: '06',
      code: '_WARRANTY & CARE/',
      title: 'Bảo Hành 12 - 24 Tháng & Đổi Mới Linh Kiện',
      icon: ShieldCheck,
      desc: 'Cam kết chính sách bảo hành chính hãng từ 12 đến 24 tháng cho thiết bị, đổi mới máy nếu phát sinh lỗi kỹ thuật từ nhà sản xuất trong vòng 30 ngày đầu tiên.',
      tag: 'official warranty'
    }
  ];

  const sectors = [
    {
      id: '01',
      code: '_HOSPITALITY/',
      title: 'Khách Sạn & Resort Nghỉ Dưỡng',
      icon: Hotel,
      desc: 'Đón tiếp du khách bằng hương thơm sang trọng, thư thái ngay từ khi bước vào tiền sảnh, ghi dấu ấn trải nghiệm đẳng cấp 5 sao.',
      tag: 'luxury resort'
    },
    {
      id: '02',
      code: '_AUTOMOTIVE & REAL ESTATE/',
      title: 'Showroom Ô Tô & Bất Động Sản',
      icon: Car,
      desc: 'Khẳng định đẳng cấp không gian giao dịch, khơi gợi cảm xúc tin cậy và thúc đẩy quyết định xuống tiền mua tài sản giá trị cao.',
      tag: 'premium showroom'
    },
    {
      id: '03',
      code: '_FASHION & RETAIL/',
      title: 'Chuỗi Bán Lẻ & Thời Trang',
      icon: ShoppingBag,
      desc: 'Định hình phong cách thương hiệu thời thượng, kéo dài thời gian mua sắm và gia tăng tỷ lệ quay lại của khách hàng trung thành.',
      tag: 'brand identity'
    },
    {
      id: '04',
      code: '_HEALTHCARE & WELLNESS/',
      title: 'Bệnh Viện Thẩm Mỹ, Nha Khoa & Spa',
      icon: HeartPulse,
      desc: 'Khử mùi kháng khuẩn tự nhiên, xua tan cảm giác lo âu căng thẳng và tạo môi trường nghỉ dưỡng thư thái tuyệt đối.',
      tag: 'wellness clinic'
    }
  ];

  const hvacBullets = [
    {
      title: 'Khuếch tán Nano siêu mịn',
      text: 'Hạt tinh dầu phân tách dưới 0.1 micron, bay theo luồng gió điều hòa bao phủ toàn bộ diện tích sàn mà không để lại bất kỳ giọt dầu đọng nào.'
    },
    {
      title: 'Kiểm soát thông minh qua IoT',
      text: 'Lập lịch tự động bật/tắt theo ca làm việc, điều chỉnh nồng độ phun theo từng mét khối không khí thực tế.'
    },
    {
      title: 'Tiết kiệm chi phí vận hành',
      text: 'Mức tiêu hao tinh dầu cực kỳ tối ưu, giảm hơn 40% chi phí so với việc đặt nhiều máy phun nhỏ phân tán.'
    }
  ];
</script>

<svelte:head>
  <title>Lemy Finest — Giải Pháp Scent Marketing & Tinh Dầu Thiên Nhiên | CreditBird</title>
  <meta name="description" content="Lemy Finest (lemyfinest.com) — Máy khuếch tán tinh dầu kết nối HVAC và 100% tinh dầu thiên nhiên chuẩn kiểm định COA / GC-MS. Trực thuộc hệ sinh thái CreditBird." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_THƯƠNG HIỆU ĐỘC LẬP / LEMYFINEST.COM"
      eyebrowIcon={Wind}
      specBadge="Scent Marketing • Máy Phun HVAC • Tinh Dầu COA / GC-MS"
      title="Lemy Finest — Đẳng Cấp Hương Thơm Doanh Nghiệp"
      description="Thương hiệu tinh dầu và thiết bị khuếch tán mùi hương chuyên nghiệp trực thuộc hệ sinh thái CreditBird. Cung cấp máy phun tinh dầu công nghiệp kết nối hệ thống điều hòa HVAC trung tâm và 100% tinh dầu thiên nhiên nguyên chất đạt chuẩn kiểm định quốc tế."
      primaryBtnText="Truy Cập Website LemyFinest.com"
      primaryBtnHref="https://www.lemyfinest.com"
      primaryBtnIcon={ExternalLink}
      secondaryBtnText="Đăng Ký Khảo Sát Không Gian Miễn Phí"
      secondaryBtnAction={openDemo}
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow="_TIÊU CHUẨN KỸ THUẬT / SCENT TELEMETRY"
      title="Năng lực khuếch tán diện rộng và kiểm định chất lượng quốc tế"
      theme="light"
      {metrics}
    />

    <!-- 3. 6 Core Solutions Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="solutions"
      theme="dark"
      eyebrow="_HỆ THỐNG GIẢI PHÁP / SCENT ARCHITECTURE/"
      title="Giải Pháp Tiếp Thị Mùi Hương Chuyên Nghiệp Toàn Diện"
      subheading="Từ thiết bị công nghiệp kết nối HVAC đến tinh dầu thiên nhiên chuẩn COA và dịch vụ bảo trì định kỳ."
      description="Lemy Finest kết hợp công nghệ khuếch tán hiện đại và nghệ thuật điều hương để tạo ra những không gian kinh doanh có bản sắc và giàu cảm xúc."
      columns={3}
      items={solutions}
    />

    <!-- 4. HVAC Deep Dive Split Showcase (Crisp Light Blueprint) -->
    <BlueprintSplitShowcase
      id="hvac-technology"
      theme="light"
      eyebrow="_CÔNG NGHỆ HVAC / NANO DIFFUSION"
      title="Phủ Đều Hương Thơm Cho Không Gian Từ 500 Đến 5.000 m²"
      description="Máy khuếch tán kết nối trực tiếp vào ống gió điều hòa trung tâm AHU/FCU, tận dụng lưu lượng gió sẵn có để phân tán hương thơm đồng đều đến từng góc phòng."
      bullets={hvacBullets}
      linkText="Khám phá chi tiết thiết bị tại LemyFinest.com"
      linkUrl="https://www.lemyfinest.com"
      external={true}
    >
      <!-- Telemetry Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <span class="text-[#60a5fa] font-bold">LEMY_FINEST // HVAC_DIFFUSER_V4</span>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            IOT_ONLINE
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[HVAC-AHU01] Sảnh Chính Khách Sạn</span>
            <span class="text-[#60a5fa] tabular-nums">Coverage: 2,800 m²</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[OIL-COA] White Tea & Thyme Signature</span>
            <span class="text-emerald-400 tabular-nums">Purity: 100% COA</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[CYCLE] Chu kỳ 60s Phun / 180s Nghỉ</span>
            <span class="text-[#facc15] tabular-nums">Tiết kiệm: 42%</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span>Cert: GC-MS / IFRA Standards</span>
          <span class="text-white">Safety: Non-Alcohol / Non-Toxic</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Application Sectors Grid (Dark Cyanotype Cobalt) -->
    <BlueprintGridSection
      id="sectors"
      theme="dark"
      eyebrow="_LĨNH VỰC ỨNG DỤNG / TARGET SECTORS/"
      title="Khẳng Định Đẳng Cấp Thương Hiệu Trong Từng Ngành Nghề"
      subheading="Được tin tưởng bởi hàng trăm khách sạn, showroom xe hơi và hệ thống chăm sóc sắc đẹp."
      description="Mỗi không gian kinh doanh có đặc thù đối tượng khách hàng khác nhau. Lemy Finest thiết kế công thức mùi hương phù hợp với hành vi và tâm lý của khách hàng mục tiêu."
      columns={2}
      items={sectors}
    />

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow="_TIẾP THỊ MÙI HƯƠNG ĐẲNG CẤP/"
      title="Kiến Tạo Trải Nghiệm Mùi Hương Độc Bản Cho Không Gian Của Bạn"
      description="Đội ngũ chuyên gia Lemy Finest và CreditBird sẵn sàng mang thiết bị đến khảo sát thực địa, đo lưu lượng gió và thử nghiệm mùi hương trực tiếp tại cơ sở của bạn."
      primaryText="Đăng Ký Khảo Sát Không Gian Miễn Phí"
      primaryAction={openDemo}
      secondaryText="Khám Phá Website LemyFinest.com"
      secondaryHref="https://www.lemyfinest.com"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
