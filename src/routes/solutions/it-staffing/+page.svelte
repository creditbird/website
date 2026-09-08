<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import { 
    Users, 
    Shield, 
    Building2, 
    Cpu, 
    Terminal, 
    Layers,
    CheckCircle2,
    Clock,
    FileText,
    ArrowRight
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
      label: 'THỜI GIAN SÀNG LỌC',
      value: '48 Giờ',
      sublabel: 'Nhận danh sách CV ứng viên phù hợp với bài toán kỹ thuật',
      color: '#22439c'
    },
    {
      label: 'THỬ VIỆC THỰC TẾ',
      value: '14 Ngày',
      sublabel: 'Đánh giá năng lực trực tiếp trong sprint, đổi người 100% miễn phí',
      color: '#10b981'
    },
    {
      label: 'KINH NGHIỆM KỸ SƯ',
      value: '4 - 8 Năm',
      sublabel: 'Kỹ sư Senior có năng lực giải quyết sự cố và tối ưu kiến trúc',
      color: '#22439c'
    },
    {
      label: 'PHÁP LÝ & HÓA ĐƠN',
      value: 'Hợp Đồng B2B',
      sublabel: 'Xuất hóa đơn VAT đầy đủ (MST: 0315397327) và bảo mật NDA',
      color: '#22439c'
    }
  ];

  const models = [
    {
      id: '01',
      code: '_ONSITE STAFFING/',
      title: 'Kỹ sư IT Làm việc Onsite tại Doanh nghiệp',
      icon: Building2,
      desc: 'Nhân sự làm việc trực tiếp tại trụ sở văn phòng khách hàng. Doanh nghiệp trực tiếp quản lý, giao việc và điều phối theo văn hóa nội bộ.',
      tag: 'onsite model'
    },
    {
      id: '02',
      code: '_DEDICATED SQUAD/',
      title: 'Biệt đội Kỹ thuật Chuyên trách Từ xa',
      icon: Users,
      desc: 'Đội ngũ kỹ sư làm việc full-time độc quyền cho dự án của bạn, có kèm Tech Lead và Scrum Master hỗ trợ quản trị chất lượng mã nguồn.',
      tag: 'dedicated team'
    },
    {
      id: '03',
      code: '_PROJECT SPRINT/',
      title: 'Tăng cường Kỹ sư Ngắn hạn theo Dự án',
      icon: Clock,
      desc: 'Bổ sung nhanh chóng các vị trí kỹ thuật cấp thiết trong các đợt chạy tiến độ (Go-Live, phát hành sản phẩm mới, kiểm toán hệ thống).',
      tag: 'sprint augmentation'
    },
    {
      id: '04',
      code: '_LEGAL COMPLIANCE/',
      title: 'Hợp đồng B2B & Ký kết NDA Chặt chẽ',
      icon: Shield,
      desc: 'Xuất hóa đơn VAT đầy đủ (MST: 0315397327), cam kết pháp lý bảo mật quyền sở hữu trí tuệ và không có bất kỳ tranh chấp lao động nào.',
      tag: 'enterprise nda'
    }
  ];

  const roles = [
    {
      id: '01',
      code: '_BACKEND DEV/',
      title: 'Senior Backend Engineers',
      icon: Terminal,
      desc: 'Chuyên sâu về kiến trúc phân tán, xử lý giao dịch cao tải, tối ưu truy vấn cơ sở dữ liệu và tích hợp API hệ thống ngân hàng (Rust, Go, Python, Node.js).',
      tag: 'rust • go • python'
    },
    {
      id: '02',
      code: '_FRONTEND & MOBILE/',
      title: 'Senior Frontend & Mobile Engineers',
      icon: Layers,
      desc: 'Xây dựng giao diện ứng dụng phức tạp, mượt mà chuẩn 60fps, tối ưu hóa tốc độ hiển thị và trải nghiệm người dùng đa thiết bị (SvelteKit, React, Flutter).',
      tag: 'sveltekit • flutter'
    },
    {
      id: '03',
      code: '_DEVOPS & CLOUD/',
      title: 'DevOps & Cloud Infrastructure',
      icon: Cpu,
      desc: 'Thiết lập hạ tầng điện toán đám mây tự động co giãn, xây dựng luồng CI/CD không gián đoạn và giám sát an toàn thông tin 24/7 (Docker, K8s, AWS, Terraform).',
      tag: 'k8s • aws • ci/cd'
    },
    {
      id: '04',
      code: '_QA & AUTOMATION/',
      title: 'QA / Automation Test Engineers',
      icon: FileText,
      desc: 'Viết kịch bản kiểm thử tự động toàn diện từ Unit test, API test đến E2E test, kiểm tra khả năng chịu tải và dò quét lỗ hổng (Playwright, Cypress, K6).',
      tag: 'playwright • k6'
    }
  ];

  const steps = [
    { num: '48h', title: 'Tiếp nhận Yêu cầu & Sàng lọc CV', desc: 'CreditBird phân tích bài toán kỹ thuật của bạn và gửi danh sách hồ sơ ứng viên đạt tiêu chuẩn trong vòng 48 giờ.' },
    { num: '02', title: 'Phỏng vấn Trực tiếp 1:1', desc: 'Khách hàng trực tiếp phỏng vấn kỹ thuật và kiểm tra năng lực thực chiến của kỹ sư để đảm bảo phù hợp văn hóa.' },
    { num: '14d', title: 'Thử việc Đánh giá Thực tế 2 Tuần', desc: 'Kỹ sư bắt đầu tham gia dự án với thời gian dùng thử 2 tuần. Nếu không đạt yêu cầu, đổi nhân sự hoàn toàn miễn phí.' },
    { num: '04', title: 'Ký Hợp đồng Dịch vụ & Onboarding', desc: 'Ký hợp đồng dịch vụ chính thức giữa hai pháp nhân. CreditBird chịu trách nhiệm toàn bộ bảo hiểm, phúc lợi và hành chính.' }
  ];
</script>

<svelte:head>
  <title>Cho Thuê Nhân Sự IT Cho Doanh Nghiệp — CreditBird (MST: 0315397327)</title>
  <meta name="description" content="Dịch vụ cho thuê kỹ sư CNTT chất lượng cao Onsite & Dedicated Team. Senior Devs (Rust, Go, Python, SvelteKit, DevOps). Onboarding trong 48h, cam kết NDA bảo mật tuyệt đối." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_NGÀNH NGHỀ KINH DOANH CHÍNH / MST: 0315397327"
      eyebrowIcon={Users}
      specBadge="Onsite & Dedicated Squad • Onboarding 48h • Cam kết NDA"
      title="Cho Thuê Nhân Sự IT Chất Lượng Cao Cho Doanh Nghiệp"
      description="Giải quyết triệt để bài toán khan hiếm nhân lực kỹ thuật cấp cao. Cung cấp kỹ sư Senior phần mềm, DevOps và kiến trúc sư hệ thống làm việc Onsite tại văn phòng hoặc Dedicated Remote Team với chi phí tối ưu và pháp lý minh bạch."
      primaryBtnText="Yêu Cầu Hồ Sơ & Báo Giá Kỹ Sư"
      primaryBtnAction={openDemo}
      secondaryBtnText="Xem Quy Trình Onboard 48H"
      secondaryBtnHref="#onboarding-process"
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow="_CHỈ SỐ CAM KẾT DỊCH VỤ / SLA METRICS"
      title="Tiêu chuẩn tuyển chọn khắt khe và bảo đảm tiến độ dự án"
      theme="light"
      {metrics}
    />

    <!-- 3. 4 Cooperation Models (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="models"
      theme="dark"
      eyebrow="_MÔ HÌNH HỢP TÁC LINH HOẠT / COOPERATION MODELS/"
      title="Phương Thức Cung Ứng Nhân Sự Theo Nhu Cầu Doanh Nghiệp"
      subheading="Linh hoạt mở rộng hoặc thu hẹp quy mô đội ngũ theo từng giai đoạn phát triển dự án."
      description="Từ việc bổ sung kỹ sư làm việc tại văn phòng của bạn đến việc thiết lập một trung tâm công nghệ chuyên trách từ xa (Offshore Development Center - ODC)."
      columns={2}
      items={models}
    />

    <!-- 4. Technical Roles Grid (Crisp Light Blueprint) -->
    <BlueprintGridSection
      id="roles"
      theme="light"
      eyebrow="_VỊ TRÍ KỸ THUẬT TRỌNG YẾU / ROLES & SKILLS/"
      title="Đội Ngũ Kỹ Sư Senior Sẵn Sàng Nhận Việc Ngay"
      subheading="Đã trải qua quy trình đánh giá năng lực thuật toán, kiến trúc hệ thống và kỹ năng giao tiếp."
      description="Chúng tôi tập trung cung cấp các vị trí kỹ thuật cấp cao, có khả năng độc lập giải quyết bài toán khó và hướng dẫn các thành viên khác trong team."
      columns={2}
      items={roles}
    />

    <!-- 5. 4-Step Onboarding Process (Dark Cyanotype Blueprint) -->
    <section 
      id="onboarding-process"
      class="relative theme-cobalt-primary dark bg-background text-foreground"
      style="--section-accent:var(--cobalt-accent, #60a5fa)"
    >
      <div class="strict-grid relative z-2 py-(--grid-unit)">
        <div class="flex flex-col gap-2gu">
          
          <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
            <div class="flex flex-col gap-3 max-w-40gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                _QUY TRÌNH ONBOARDING THẦN TỐC/
              </span>
              <h2 class="h3 font-bold text-foreground">
                4 Bước Bổ Sung Kỹ Sư IT Vào Dự Án Trong 48 Giờ
              </h2>
              <p class="p-md text-muted-foreground leading-relaxed">
                Quy trình tinh gọn, bảo đảm khách hàng nắm toàn quyền kiểm tra năng lực và thử việc an toàn không rủi ro tài chính.
              </p>
            </div>
          </div>

          <!-- 4 Steps Abutting Grid -->
          <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:4]">
            {#each steps as step}
              <div 
                data-auto-snap="true"
                class="snap-group-item flex flex-col grid-ring bg-background text-foreground p-1gu justify-between"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="h3 font-mono tabular-nums font-bold" style="color:var(--section-accent)">
                      {step.num}
                    </span>
                    <span class="font-mono text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">
                      STEP
                    </span>
                  </div>
                  <h3 class="font-bold text-base text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p class="p-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            {/each}
          </div>

        </div>
      </div>
    </section>

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow="_BỔ SUNG KỸ SƯ NGAY HÔM NAY/"
      title="Bổ Sung Ngay Kỹ Sư IT Trình Độ Cao Cho Dự Án Của Bạn"
      description="CreditBird cam kết cung cấp nhân sự đúng năng lực chuyên môn, thích ứng nhanh với văn hóa doanh nghiệp và sẵn sàng bắt tay vào việc ngay trong 48 giờ."
      primaryText="Nhận Báo Giá & Hồ Sơ Kỹ Sư Trong 48H"
      primaryAction={openDemo}
      secondaryText="Hotline: 0932 640 968"
      secondaryHref="tel:0932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
