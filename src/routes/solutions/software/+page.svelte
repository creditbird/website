<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import { 
    Code, 
    Server, 
    FileCode2, 
    ShieldCheck, 
    Layers, 
    Boxes, 
    Workflow,
    Cpu,
    Smartphone,
    Cloud,
    Sparkles,
    Bot,
    Database
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
      label: 'BÀN GIAO MÃ NGUỒN',
      value: '100% Full Code',
      sublabel: 'Bàn giao trọn bộ Git repository, tài liệu API và sơ đồ kiến trúc',
      color: '#22439c'
    },
    {
      label: 'KHẢ NĂNG CHỊU TẢI',
      value: '100k+ CCU',
      sublabel: 'Kiến trúc High-Concurrency bằng Rust, Go và Microservices',
      color: '#10b981'
    },
    {
      label: 'CAM KẾT VẬN HÀNH',
      value: 'SLA 99.9%',
      sublabel: 'Thời gian phản hồi ứng cứu sự cố khẩn cấp dưới 15 phút',
      color: '#22439c'
    },
    {
      label: 'BẢO HÀNH KỸ THUẬT',
      value: '12 - 24 Tháng',
      sublabel: 'Miễn phí vá lỗi bảo mật và hỗ trợ chuyển giao kỹ thuật tận tâm',
      color: '#22439c'
    }
  ];

  const pillars = [
    {
      id: '01',
      code: '_ARCHITECTURE & AI/',
      title: 'Kiến trúc Microservices & AI-Ready',
      icon: Server,
      desc: 'Phát triển backend bằng Rust, Go và Python tối ưu hiệu năng bộ nhớ, tích hợp sẵn các pipeline AI Inference và Microservices chịu tải hàng triệu requests.',
      tag: 'high concurrency • ai pipeline'
    },
    {
      id: '02',
      code: '_OWNERSHIP/',
      title: 'Bàn giao 100% Mã nguồn Sạch & Quyền sở hữu AI',
      icon: FileCode2,
      desc: 'Doanh nghiệp sở hữu trọn vẹn toàn bộ mã nguồn Git, cơ sở dữ liệu, API specs và trọng số mô hình AI huấn luyện riêng. Không vendor lock-in.',
      tag: 'full ownership & ai weights'
    },
    {
      id: '03',
      code: '_SECURITY & DATA PRIVACY/',
      title: 'Bảo mật Cấp Ngân hàng & Private AI',
      icon: ShieldCheck,
      desc: 'Mã hóa dữ liệu tại chỗ (At-Rest) và trên đường truyền (In-Transit). Triển khai Private LLM On-Premise bảo mật tuyệt đối dữ liệu nội bộ doanh nghiệp.',
      tag: 'devsecops • private llm'
    },
    {
      id: '04',
      code: '_FULLSTACK UI/UX/',
      title: 'Giao diện Web, App & Trợ lý AI Agent',
      icon: Layers,
      desc: 'Ứng dụng SvelteKit, React và Flutter xây dựng trải nghiệm mượt mà, tích hợp giao diện hội thoại và trợ lý AI Agent tương tác thông minh theo ngữ cảnh.',
      tag: 'sveltekit • flutter • ai agent'
    },
    {
      id: '05',
      code: '_INTEGRATION & AUTOMATION/',
      title: 'Kết nối Core Banking & Tự động hóa Agentic',
      icon: Boxes,
      desc: 'Tích hợp liên thông tài khoản ngân hàng, VietQR, hạch toán đối soát tự động và các quy trình Agentic Workflows tự xử lý nghiệp vụ không cần can thiệp thủ công.',
      tag: 'banking • agentic workflows'
    },
    {
      id: '06',
      code: '_SLA & LIFECYCLE/',
      title: 'Cam kết SLA 99.9% & Tối ưu Mô hình Dài hạn',
      icon: Workflow,
      desc: 'Chính sách bảo hành kỹ thuật 12 - 24 tháng, cam kết đội ngũ kỹ sư hỗ trợ ứng cứu sự cố 24/7 với thời gian phản hồi dưới 15 phút và liên tục cập nhật công nghệ mới.',
      tag: 'continuous sla & model updates'
    }
  ];

  const techStacks = [
    {
      id: '01',
      code: '_BACKEND STACK/',
      title: 'Hệ Thống Backend Siêu Tốc',
      icon: Cpu,
      desc: 'Rust, Golang, Python, Node.js kết hợp Microservices hiệu năng cao, tối ưu hóa xử lý đồng thời cực lớn.',
      tag: 'rust • go • python'
    },
    {
      id: '02',
      code: '_ENTERPRISE AI & RAG/',
      title: 'Trí Tuệ Nhân Tạo & AI Agents',
      icon: Sparkles,
      desc: 'Tích hợp OpenAI/Claude/Llama, Private LLM On-Premise, RAG tra cứu tri thức nội bộ và Agentic Workflows tự động xử lý quy trình nghiệp vụ.',
      tag: 'rag • private llm • ai agents'
    },
    {
      id: '03',
      code: '_FRONTEND STACK/',
      title: 'Frontend Web Ứng Dụng',
      icon: Layers,
      desc: 'SvelteKit, React, Tailwind CSS, TypeScript tối ưu hóa SSR/SSG cho trải nghiệm người dùng mượt mà tức thì.',
      tag: 'sveltekit • react • typescript'
    },
    {
      id: '04',
      code: '_MOBILE APP STACK/',
      title: 'Ứng Dụng Di Động Đa Nền Tảng',
      icon: Smartphone,
      desc: 'Flutter, React Native, Swift và Kotlin Native cho trải nghiệm giao diện mượt mà 120Hz trên iOS và Android.',
      tag: 'flutter • react native'
    },
    {
      id: '05',
      code: '_DATA & VECTOR DB/',
      title: 'Cơ Sở Dữ Liệu & Vector Search',
      icon: Database,
      desc: 'PostgreSQL, ScyllaDB, Redis, Kafka phân tán cùng Qdrant / pgvector cho tìm kiếm ngữ nghĩa và lưu trữ vector embeddings.',
      tag: 'vector db • postgresql • kafka'
    },
    {
      id: '06',
      code: '_DEVOPS, MLOPS & CLOUD/',
      title: 'Hạ Tầng Tự Động & AI Cluster',
      icon: Cloud,
      desc: 'Docker, Kubernetes, GPU Inference Clusters, Terraform, AWS, GCP và CI/CD tự động hóa kiểm thử liên tục.',
      tag: 'k8s • mlops • gpu clusters'
    }
  ];

  const steps = [
    { num: '01', title: 'Khảo sát, Đặc tả (SRS) & Khả thi AI', desc: 'Phân tích quy trình nghiệp vụ thực tế, đánh giá tính khả thi ứng dụng AI, xây dựng sơ đồ luồng dữ liệu và tài liệu kiến trúc chi tiết.' },
    { num: '02', title: 'Thiết kế Kiến trúc & UX/UI Bản mẫu', desc: 'Thiết kế giao diện chuẩn Design System, thiết kế luồng tương tác AI Agent, chốt tiêu chuẩn bảo mật và API Schema.' },
    { num: '03', title: 'Lập trình Agile & Tăng tốc với AI Pair', desc: 'Chia nhỏ tính năng theo các sprint 2 tuần, ứng dụng AI-Augmented Development tăng tốc tiến độ gấp 2x kèm CI/CD kiểm thử liên tục.' },
    { num: '04', title: 'Kiểm thử Tự động, Pentest & Rà soát AI', desc: 'Stress test chịu tải cao, kiểm tra lỗ hổng OWASP Top 10, đo lường độ chính xác và an toàn của các phân hệ AI/RAG.' },
    { num: '05', title: 'Bàn giao Source Code & Triển khai Cloud', desc: 'Bàn giao 100% Git repository, Docker container, kịch bản triển khai Kubernetes và tài liệu chuyển giao vận hành.' },
    { num: '06', title: 'Bảo hành, SLA 24/7 & Nâng cấp AI', desc: 'Bảo trì hệ thống toàn diện, giám sát hiệu năng qua Prometheus/Grafana và đồng hành nâng cấp mô hình AI định kỳ.' }
  ];
</script>

<svelte:head>
  <title>Viết Phần Mềm May Đo Theo Yêu Cầu — CreditBird (MST: 0315397327)</title>
  <meta name="description" content="Dịch vụ phát triển phần mềm may đo doanh nghiệp, kiến trúc Microservices (Rust, Go, Python, SvelteKit). Bàn giao 100% full source code, cam kết SLA 99.9%." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_NGÀNH NGHỀ KINH DOANH CHÍNH / MST: 0315397327"
      eyebrowIcon={Code}
      specBadge="Microservices • 100% Full Source Code • Zero Vendor Lock-in"
      title="Viết Phần Mềm Doanh Nghiệp May Đo Theo Yêu Cầu"
      description="Cung cấp dịch vụ kiến trúc và phát triển phần mềm chuyên biệt theo đúng quy trình vận hành độc thù của doanh nghiệp. Cam kết bàn giao 100% mã nguồn sạch, bảo hành dài hạn và đồng hành chuyển đổi số bền vững."
      primaryBtnText="Đăng Ký Tư Vấn Kiến Trúc Phần Mềm"
      primaryBtnAction={openDemo}
      secondaryBtnText="Xem Quy Trình 6 Bước"
      secondaryBtnHref="#roadmap-steps"
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow="_TIÊU CHUẨN KỸ THUẬT / ENGINEERING STANDARDS"
      title="Cam kết chất lượng mã nguồn và độ ổn định cấp ngân hàng"
      theme="light"
      {metrics}
    />

    <!-- 3. 6 Core Technical Pillars (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="pillars"
      theme="dark"
      eyebrow="_6 TRỤ CỘT KỸ THUẬT / TECHNICAL PILLARS/"
      title="Nền Tảng Công Nghệ Hiện Đại Dành Cho Doanh Nghiệp Tăng Trưởng"
      subheading="Xóa bỏ hoàn toàn nỗi lo phụ thuộc nhà cung cấp giải pháp với cam kết sở hữu 100% mã nguồn."
      description="Chúng tôi áp dụng các tiêu chuẩn kiến trúc phần mềm tiên tiến nhất trên thế giới để đảm bảo hệ thống có thể chịu tải hàng chục ngàn người dùng đồng thời mà vẫn mượt mà."
      columns={3}
      items={pillars}
    />

    <!-- 4. Tech Stack Matrix Grid (Crisp Light Blueprint) -->
    <BlueprintGridSection
      id="tech-stack"
      theme="light"
      eyebrow="_CÔNG NGHỆ CHUYÊN SÂU / TECH STACK MATRIX/"
      title="Lựa Chọn Công Nghệ Tối Ưu Cho Từng Bài Toán"
      subheading="Tập trung vào các ngôn ngữ hiện đại, hiệu năng bộ nhớ tối đa và an toàn kiểu dữ liệu."
      description="Mỗi dự án được thiết kế với sự kết hợp công nghệ phù hợp nhất để tối đa hóa tốc độ phản hồi và giảm thiểu chi phí máy chủ hàng tháng."
      columns={3}
      items={techStacks}
    />

    <!-- 5. 6-Step Delivery Roadmap (Dark Cyanotype Blueprint) -->
    <section 
      id="roadmap-steps"
      class="relative theme-cobalt-primary dark bg-background text-foreground"
      style="--section-accent:var(--cobalt-accent, #60a5fa)"
    >
      <div class="strict-grid relative z-2 py-(--grid-unit)">
        <div class="flex flex-col gap-2gu">
          
          <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
            <div class="flex flex-col gap-3 max-w-40gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                _LỘ TRÌNH TRIỂN KHAI / 6-STEP ROADMAP/
              </span>
              <h2 class="h3 font-bold text-foreground">
                Quy Trình Phát Triển Phần Mềm Minh Bạch Từ Đầu Đến Cuối
              </h2>
              <p class="p-md text-muted-foreground leading-relaxed">
                Áp dụng quy trình Agile/Scrum linh hoạt với các mốc nghiệm thu rõ ràng, giúp khách hàng luôn kiểm soát được tiến độ và chất lượng sản phẩm.
              </p>
            </div>
          </div>

          <!-- 6 Steps Grid (2x3 or 3x2) with .snap-group-item and .grid-ring -->
          <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
            {#each steps as step}
              <div 
                data-auto-snap="true"
                class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu justify-between"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="h3 font-mono tabular-nums font-bold" style="color:var(--section-accent)">
                      {step.num}
                    </span>
                    <span class="font-mono text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">
                      PHASE
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
      eyebrow="_KHỞI TẠO DỰ ÁN PHẦN MỀM/"
      title="Hiện Thực Hóa Ý Tưởng Phần Mềm Với Chuẩn Mực Kỹ Thuật Cao Nhất"
      description="Đội ngũ kiến trúc sư giải pháp của CreditBird sẵn sàng lắng nghe bài toán nghiệp vụ của bạn để tư vấn kiến trúc tối ưu nhất ngay từ ngày đầu tiên."
      primaryText="Đăng Ký Tư Vấn & Nhận Bản Phân Tích Kỹ Thuật"
      primaryAction={openDemo}
      secondaryText="Hotline: 0932 640 968"
      secondaryHref="tel:0932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
