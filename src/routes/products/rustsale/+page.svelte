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
    Sparkles, 
    Zap, 
    BookOpen, 
    MessageSquare, 
    MapPin, 
    Users, 
    FolderTree, 
    Share2, 
    Mail, 
    Kanban, 
    Award, 
    KeyRound, 
    ExternalLink,
    Code
  } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const installCommand = 'curl -fsSL https://rustsale.creditbirdtech.com/install-linux.sh | bash';

  const metrics = [
    {
      label: 'TỐC ĐỘ XỬ LÝ',
      value: '< 1 ms',
      sublabel: 'Microsecond latency do Rust native biên dịch máy',
      color: '#22439c'
    },
    {
      label: 'TIÊU THỤ RAM',
      value: '< 45 MB',
      sublabel: 'Tiết kiệm 90% RAM so với ứng dụng nền Electron',
      color: '#10b981'
    },
    {
      label: 'BẢO MẬT DỮ LIỆU',
      value: 'Local-First',
      sublabel: 'Mã hóa SQLite & Keyring cấp hệ điều hành máy tính',
      color: '#22439c'
    },
    {
      label: 'PHÂN HỆ TÍCH HỢP',
      value: '12 Phân hệ',
      sublabel: 'Từ trích xuất Google Maps đến Hộp thư hội tụ đa kênh',
      color: '#22439c'
    }
  ];

  const modules = [
    {
      id: '01',
      code: '_DASHBOARD/',
      title: 'Trung tâm Chỉ huy & Phân tích Pipeline',
      icon: Zap,
      desc: 'Giám sát chỉ số outreach, số lead mới phát sinh, tỷ lệ phản hồi tin nhắn và giá trị phễu chuyển đổi thời gian thực.',
      tag: 'pipeline analytics'
    },
    {
      id: '02',
      code: '_GOOGLE MAPS SCRAPER/',
      title: 'Khai thác Khách hàng Địa phương',
      icon: MapPin,
      desc: 'Quét tự động thông tin doanh nghiệp theo khu vực địa lý, trích xuất chính xác số điện thoại, website, địa chỉ kinh doanh.',
      tag: 'lead generation'
    },
    {
      id: '03',
      code: '_LEADS ENGINE/',
      title: 'Động cơ Quản lý & Lọc trùng Khách hàng',
      icon: Users,
      desc: 'Phân nhóm khách hàng tiềm năng, khử trùng lặp dữ liệu thông minh, tự động chuẩn hóa định dạng số điện thoại và email.',
      tag: 'deduplication'
    },
    {
      id: '04',
      code: '_CATEGORIES & TAGS/',
      title: 'Định danh Đa tầng & Phân khúc Mục tiêu',
      icon: FolderTree,
      desc: 'Hệ thống nhãn dán tùy biến, phân loại khách hàng theo nhóm ngành nghề, quy mô doanh nghiệp và giai đoạn tiếp cận.',
      tag: 'segmentation'
    },
    {
      id: '05',
      code: '_OMNICHANNEL & AI INBOX/',
      title: 'Hộp Thư Hội Tụ & AI Smart Reply',
      icon: MessageSquare,
      desc: 'Hợp nhất tin nhắn Zalo, WhatsApp, Facebook Messenger về 1 cửa sổ. Tích hợp AI Agent phân tích ý định và gợi ý câu trả lời chốt sales tức thì.',
      tag: 'realtime inbox • ai reply'
    },
    {
      id: '06',
      code: '_FACEBOOK HUB/',
      title: 'Quản trị Tập trung Đa Fanpage',
      icon: Share2,
      desc: 'Kết nối và điều hành nhiều Fanpage Facebook cùng lúc, tự động hóa kịch bản trả lời inbox, bình luận bài viết theo từ khóa.',
      tag: 'fanpage automation'
    },
    {
      id: '07',
      code: '_AI OUTREACH & AUTOMATION/',
      title: 'AI Agent Tiếp Cận & Chăm Sóc Đa Kênh',
      icon: Sparkles,
      desc: 'Tự động gửi kết bạn Zalo, phân loại cảm xúc khách hàng và kích hoạt chuỗi nuôi dưỡng thông minh bằng AI Agent chuyên trách.',
      tag: 'ai outreach • zalo automation'
    },
    {
      id: '08',
      code: '_WHATSAPP MARKETING/',
      title: 'Chiến dịch Tin nhắn WhatsApp B2B',
      icon: Share2,
      desc: 'Gửi thông báo chăm sóc đơn hàng, cập nhật hợp đồng và chăm sóc khách hàng quốc tế với tỷ lệ mở tin nhắn trên 95%.',
      tag: 'b2b messaging'
    },
    {
      id: '09',
      code: '_COLD EMAIL ENGINE/',
      title: 'Chuỗi Email Nuôi dưỡng Khách hàng B2B',
      icon: Mail,
      desc: 'Thiết lập chiến dịch email marketing tự động hóa theo kịch bản, theo dõi tỷ lệ mở email, tỷ lệ click link chi tiết.',
      tag: 'email drip'
    },
    {
      id: '10',
      code: '_KANBAN PIPELINE/',
      title: 'Bảng Điều hướng Bán hàng Kéo thả',
      icon: Kanban,
      desc: 'Quản trị quy trình đàm phán trực quan từ Tiềm năng -> Báo giá -> Thương thảo -> Ký HĐ với thao tác kéo thả mượt mà.',
      tag: 'sales pipeline'
    },
    {
      id: '11',
      code: '_WON CONTACTS/',
      title: 'Quản trị Khách hàng Chốt Thành công',
      icon: Award,
      desc: 'Lưu trữ hồ sơ khách hàng đã ký hợp đồng, lịch sử giao dịch và kế hoạch chăm sóc gia hạn dịch vụ định kỳ trọn đời.',
      tag: 'customer retention'
    },
    {
      id: '12',
      code: '_KEYRING VAULT/',
      title: 'Kho Mật mã Mã hóa Cấp Phần cứng',
      icon: KeyRound,
      desc: 'Toàn bộ API Keys và cơ sở dữ liệu được mã hóa lưu trữ Local-First trên thiết bị người dùng, bảo vệ quyền riêng tư tuyệt đối.',
      tag: 'hardware keyring'
    }
  ];

  const omnichannelBullets = [
    {
      title: 'Đồng bộ đa tài khoản Zalo',
      text: 'Quản lý song song Zalo cá nhân và Zalo Doanh nghiệp (OA) trong một giao diện duy nhất.'
    },
    {
      title: 'AI Agent Chốt đơn & Trợ lý thông minh',
      text: 'Phân tích hội thoại thời gian thực, tự động gợi ý câu trả lời và kịch bản chốt đơn cá nhân hóa.'
    },
    {
      title: 'WhatsApp Cloud & Web Hub',
      text: 'Gửi thông báo tự động, chăm sóc khách hàng xuất nhập khẩu và khách quốc tế mượt mà.'
    },
    {
      title: 'Quản trị Facebook Fanpage',
      text: 'Gom toàn bộ tin nhắn inbox và bình luận đa page về trung tâm chỉ huy.'
    },
    {
      title: 'Kịch bản phản hồi nhanh (Quick Replies)',
      text: 'Tạo sẵn mẫu tin nhắn chuyên nghiệp theo từng phân khúc ngành nghề cho nhân viên tư vấn.'
    }
  ];
</script>

<svelte:head>
  <title>RustSale CRM & Outreach Pro — Growth Operating System All-in-One | CreditBird</title>
  <meta name="description" content="Phần mềm Desktop CRM Chat Omnichannel (Zalo, WhatsApp, Facebook) viết bằng Rust Native. Xử lý microsecond, bảo mật Local-First, cẩm nang toàn tập trên Notion." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_PROPRIETARY SOFTWARE / RUST NATIVE"
      eyebrowIcon={Sparkles}
      specBadge="Tauri v2 • Microsecond Latency • Local-First"
      title="RustSale CRM & Outreach Pro"
      description="Hệ điều hành tăng trưởng doanh số All-in-One. Hợp nhất Zalo, WhatsApp, Facebook Messenger trên một giao diện Desktop duy nhất. Viết bằng ngôn ngữ Rust thuần túy cho tốc độ phản hồi tính bằng microsecond và độ ổn định tuyệt đối."
      primaryBtnText="Xem Cẩm nang Toàn tập (Notion)"
      primaryBtnHref="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
      primaryBtnIcon={BookOpen}
      secondaryBtnText="Đăng ký Demo Trải nghiệm"
      secondaryBtnAction={openDemo}
      terminalCommand={installCommand}
    />

    <!-- 2. Blueprint Metrics Ribbon (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow="_HIỆU NĂNG VẬN HÀNH / SYSTEM TELEMETRY"
      title="Khác biệt vượt trội từ nền tảng công nghệ Rust Native"
      theme="light"
      {metrics}
    />

    <!-- 3. 12 Core Modules Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="modules"
      theme="dark"
      eyebrow="_12 PHÂN HỆ CHUYÊN SÂU KHÉP KÍN/"
      title="Bộ Công Cụ Tăng Trưởng Toàn Diện Cho Sales & Marketing B2B"
      subheading="Từ quét dữ liệu Google Maps đến quản lý hợp đồng và chăm sóc khách hàng trọn đời."
      description="RustSale CRM & Outreach Pro được cấu trúc module hóa độc lập, chạy trực tiếp trên nền hệ điều hành (Windows/macOS/Linux) với khả năng mở rộng không giới hạn."
      columns={3}
      items={modules}
    />

    <!-- 4. Detailed Omnichannel Chat Highlight (Crisp Blueprint Split Showcase) -->
    <BlueprintSplitShowcase
      id="omnichannel"
      theme="light"
      eyebrow="_HỘP THƯ HỘI TỤ / OMNICHANNEL INBOX"
      title="Tất Cả Tin Nhắn Khách Hàng Trên 1 Màn Hình Duy Nhất"
      description="Không còn tình trạng nhân viên kinh doanh phải chuyển đổi qua lại giữa hàng loạt ứng dụng Zalo, trình duyệt web WhatsApp và Fanpage Facebook gây chậm trễ và sót khách hàng."
      bullets={omnichannelBullets}
      linkText="Đọc hướng dẫn thiết lập Omnichannel trên Notion"
      linkUrl="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
      external={true}
    >
      <!-- Telemetry Cockpit Terminal Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#eab308]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
            <span class="ml-2 text-[#94a3b8] font-bold">RustSale_Omnichannel_Desktop_v2.4.0</span>
          </div>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            CONNECTED (TOKIO_RUST)
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <p class="text-[#64748b]">// Đồng bộ tin nhắn thời gian thực qua Local WebSocket Rail</p>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#38bdf8] font-semibold">[Zalo OA] 0932.640.xxx</span>
            <span class="text-[#94a3b8]">Khách hỏi báo giá phần mềm ERP</span>
            <span class="text-[#22c55e] tabular-nums">1s ago</span>
          </div>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#4ade80] font-semibold">[WhatsApp] +84 908.123.xxx</span>
            <span class="text-[#94a3b8]">Xác nhận lịch demo Onsite thứ Hai</span>
            <span class="text-[#22c55e] tabular-nums">3s ago</span>
          </div>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#818cf8] font-semibold">[Facebook] Cty TNHH Cơ Khí</span>
            <span class="text-[#94a3b8]">Cần thuê 3 Senior Rust Developer</span>
            <span class="text-[#22c55e] tabular-nums">12s ago</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span class="tabular-nums">RAM: 38.4 MB / CPU: 0.2%</span>
          <span class="text-[#cbd5e1]">Vault: AES-256 GCM Keyring</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Documentation & Resources Section (Crisp Blueprint Frame) -->
    <section class="relative theme-light bg-white text-[#090e1f]">
      <div class="strict-grid relative z-2 py-1gu no-bg-grid">
        <div class="flex flex-col gap-2gu">
          <div class="snap-card free-flow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 grid-ring bg-[#f8fafc] text-[#090e1f] p-1gu sm:p-2gu">
            <div class="flex flex-col gap-2 max-w-32gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2.5 py-0.5 w-fit">
                _HƯỚNG DẪN KỸ THUẬT CHÍNH THỨC/
              </span>
              <h3 class="h4 font-bold text-[#090e1f]">
                Cẩm Nang Sử Dụng Toàn Tập Trên Notion
              </h3>
              <p class="p-sm text-[#64748b] leading-relaxed">
                Toàn bộ quy trình cài đặt trên Linux/Windows/macOS, thiết lập khóa bảo mật Keyring, cấu hình Zalo Outreach và kịch bản tin nhắn bán hàng đã được số hóa chi tiết và cập nhật liên tục.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a 
                href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-cta-primary !h-10 !px-5 text-xs flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <BookOpen size={14} />
                <span>Mở Notion Cẩm Nang</span>
                <ExternalLink size={13} />
              </a>

              <a 
                href="https://github.com/creditbird" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-cta-outline !h-10 !px-5 text-xs flex items-center justify-center gap-2 w-full sm:w-auto text-[#090e1f]"
              >
                <Code size={14} />
                <span>GitHub CreditBird</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow="_SẴN SÀNG TRIỂN KHAI/"
      title="Trải Nghiệm Sức Mạnh Tốc Độ Microsecond Của RustSale CRM"
      description="Được phát triển và bảo chứng kỹ thuật bởi CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327). Đội ngũ kỹ sư sẵn sàng hỗ trợ cài đặt và chuyển giao quy trình cho doanh nghiệp của bạn."
      primaryText="Đăng Ký Buổi Tư Vấn & Demo 1:1"
      primaryAction={openDemo}
      secondaryText="Hotline: 0932 640 968"
      secondaryHref="tel:0932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
