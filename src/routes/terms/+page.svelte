<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import { Shield, ChevronRight, Phone, Mail } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const sections = [
    { id: 'tong-quan', title: '1. Quy định chung & Thông tin pháp nhân' },
    { id: 'pham-vi', title: '2. Phạm vi cung cấp dịch vụ' },
    { id: 'quyen-nghia-vu', title: '3. Quyền và nghĩa vụ của các bên' },
    { id: 'so-huu-tri-tue', title: '4. Bản quyền mã nguồn & Sở hữu trí tuệ' },
    { id: 'thanh-toan', title: '5. Thanh toán & Nghiệm thu bàn giao' },
    { id: 'bao-mat', title: '6. Cam kết bảo mật thông tin (NDA)' },
    { id: 'tranh-chap', title: '7. Luật áp dụng & Giải quyết tranh chấp' }
  ];
</script>

<svelte:head>
  <title>Điều khoản Dịch vụ — CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</title>
  <meta name="description" content="Điều khoản dịch vụ và sử dụng của CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327) áp dụng cho phát triển phần mềm, ERP, nhân sự IT và thiết bị tinh dầu." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_PHÁP LÝ & ĐIỀU KHOẢN/"
      eyebrowIcon={Shield}
      specBadge="Hiệu lực: Tháng 01/2026"
      title="Điều khoản Dịch vụ"
      description="Quy định và điều khoản sử dụng các giải pháp, dịch vụ được cung cấp bởi CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (Mã số thuế: 0315397327)."
      primaryBtnText="Đăng Ký Hợp Tác Doanh Nghiệp"
      primaryBtnAction={openDemo}
      secondaryBtnText="Hotline: 0932 640 968"
      secondaryBtnHref="tel:0932640968"
    />

    <!-- 2. Main Content Area (Crisp Light Blueprint Grid) -->
    <section class="relative theme-light bg-[#f8fafc] text-[#090e1f]">
      <div class="strict-grid relative z-2 py-2gu">
        
        <div class="grid-docs-layout">
          
          <!-- Sticky Table of Contents (15gu) -->
          <aside class="sticky top-24">
            <div class="snap-card free-flow grid-ring bg-white p-1gu flex flex-col gap-1gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2 py-0.5 w-fit">
                _MỤC LỤC ĐIỀU KHOẢN/
              </span>
              <nav class="flex flex-col gap-1">
                {#each sections as sec}
                  <a 
                    href="#{sec.id}" 
                    class="py-2 px-3 text-[#475569] hover:text-[var(--cb-cobalt-600)] hover:bg-[#edf2ff] transition-colors flex items-center justify-between text-xs font-mono font-medium grid-ring"
                  >
                    <span>{sec.title}</span>
                    <ChevronRight size={13} class="opacity-40 shrink-0" />
                  </a>
                {/each}
              </nav>

              <div class="mt-2 pt-4 border-t border-[#e2e8f0] flex flex-col gap-2.5 font-mono text-xs text-[#64748b]">
                <div class="flex items-center gap-2">
                  <Shield size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>MST: 0315397327</span>
                </div>
                <div class="flex items-center gap-2">
                  <Phone size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <a href="tel:0932640968" class="hover:underline font-bold text-[#090e1f]">0932.640.968</a>
                </div>
                <div class="flex items-center gap-2">
                  <Mail size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <a href="mailto:contact@creditbirdtech.com" class="hover:underline truncate">contact@creditbirdtech.com</a>
                </div>
              </div>
            </div>
          </aside>

          <!-- Content Body (32gu) -->
          <article class="snap-card free-flow flex flex-col gap-2gu grid-ring bg-white p-1gu sm:p-2gu leading-relaxed text-[#334155]">
            
            <!-- Section 1 -->
            <section id="tong-quan" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                1. Quy định chung & Thông tin pháp nhân
              </h2>
              <p>
                Chào mừng Quý khách hàng đến với <strong>CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</strong> (dưới đây gọi tắt là "CreditBird" hoặc "Chúng tôi"). Khi Quý khách truy cập website, đăng ký tư vấn, ký kết hợp đồng cung cấp dịch vụ hoặc mua sắm sản phẩm của CreditBird, Quý khách đồng ý tuân thủ toàn bộ các điều khoản và điều kiện được nêu tại văn bản này.
              </p>
              <div class="p-4 bg-[#f8fafc] grid-ring text-xs flex flex-col gap-1.5 font-mono">
                <div><strong>Tên doanh nghiệp:</strong> CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</div>
                <div><strong>Tên quốc tế:</strong> CREDITBIRD TECHNOLOGY CO., LTD</div>
                <div><strong>Mã số doanh nghiệp / MST:</strong> 0315397327 (Cấp ngày 19/11/2018)</div>
                <div><strong>Cơ quan cấp:</strong> Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh</div>
                <div><strong>Địa chỉ trụ sở:</strong> 100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam</div>
                <div><strong>Đại diện pháp luật:</strong> TRẦN TRỌNG TRI</div>
              </div>
            </section>

            <!-- Section 2 -->
            <section id="pham-vi" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                2. Phạm vi cung cấp dịch vụ & sản phẩm
              </h2>
              <p class="text-sm">CreditBird hoạt động và cung cấp 5 nhóm giải pháp chuyên sâu cho các tổ chức, doanh nghiệp và cá nhân:</p>
              <ul class="list-disc list-inside flex flex-col gap-2 pl-2 text-sm">
                <li><strong>Viết phần mềm may đo (Custom Software):</strong> Thiết kế, phát triển các phần mềm web, mobile app, hệ thống vi dịch vụ (Microservices), cổng thanh toán và nền tảng quản trị số hóa theo đặc thù nghiệp vụ của từng khách hàng.</li>
                <li><strong>Phát triển hệ thống ERP cho doanh nghiệp:</strong> Tư vấn kiến trúc, triển khai hệ thống quản trị nguồn lực doanh nghiệp (sản xuất, kho vận WMS, chuỗi cung ứng, kế toán VAS/IFRS, quản lý nhân sự, bán hàng đa kênh).</li>
                <li><strong>Cho thuê nhân sự IT cho doanh nghiệp:</strong> Cung ứng kỹ sư IT chuyên nghiệp làm việc trực tiếp (Onsite) tại văn phòng khách hàng hoặc làm việc từ xa (Dedicated Remote Team) theo dự án hoặc định kỳ hàng tháng.</li>
                <li><strong>Máy phun tinh dầu thông minh:</strong> Cung cấp, lắp đặt và bảo trì hệ thống máy khuếch tán tinh dầu công nghiệp kết nối HVAC tòa nhà, showroom diện tích lớn và thiết bị thông minh điều khiển qua App/WiFi.</li>
                <li><strong>Tinh dầu thiên nhiên nguyên chất:</strong> Cung cấp các dòng tinh dầu thiên nhiên 100% nguyên chất có đầy đủ chứng nhận nguồn gốc xuất xứ (COA), phiếu kiểm nghiệm GC-MS phục vụ giải pháp tiếp thị bằng mùi hương (Scent Marketing).</li>
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="quyen-nghia-vu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                3. Quyền và nghĩa vụ của các bên
              </h2>
              <div class="flex flex-col gap-3 text-sm">
                <h3 class="font-bold text-[#090e1f]">3.1. Quyền và trách nhiệm của CreditBird:</h3>
                <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2">
                  <li>Cung cấp sản phẩm, dịch vụ đúng chất lượng, quy chuẩn kỹ thuật và tiến độ cam kết trong hợp đồng.</li>
                  <li>Bảo hành thiết bị máy phun theo đúng thời hạn 12 - 24 tháng; cam kết chất lượng tinh dầu thiên nhiên đạt chuẩn COA.</li>
                  <li>Duy trì đội ngũ nhân sự IT đạt trình độ chuyên môn như hồ sơ năng lực đã thỏa thuận; thay thế nhân sự nếu không đáp ứng yêu cầu trong vòng 05 ngày làm việc.</li>
                  <li>Bảo mật tuyệt đối mọi thông tin kinh doanh, dữ liệu tài chính và bí mật công nghệ của khách hàng theo thỏa thuận NDA.</li>
                </ul>

                <h3 class="font-bold text-[#090e1f] mt-2">3.2. Quyền và trách nhiệm của Khách hàng:</h3>
                <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2">
                  <li>Cung cấp đầy đủ, chính xác các yêu cầu nghiệp vụ, dữ liệu đầu vào và phối hợp nghiệm thu theo đúng các mốc giai đoạn (milestone).</li>
                  <li>Thanh toán đầy đủ, đúng hạn theo các điều khoản thanh toán được quy định trong Hợp đồng kinh tế.</li>
                  <li>Sử dụng thiết bị máy phun tinh dầu và tinh dầu theo đúng hướng dẫn kỹ thuật của nhà sản xuất để đảm bảo độ bền và an toàn tối ưu.</li>
                </ul>
              </div>
            </section>

            <!-- Section 4 -->
            <section id="so-huu-tri-tue" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                4. Bản quyền mã nguồn & Sở hữu trí tuệ
              </h2>
              <p class="text-sm">
                Đối với các hợp đồng phát triển phần mềm may đo và ERP tùy biến, sau khi khách hàng hoàn tất các nghĩa vụ thanh toán theo hợp đồng, <strong>CreditBird chuyển giao 100% quyền sở hữu bản quyền mã nguồn (Source Code)</strong>, cơ sở dữ liệu và tài liệu kỹ thuật phát triển riêng cho khách hàng.
              </p>
              <p class="text-sm">
                Khách hàng có toàn quyền sửa đổi, nâng cấp, phân phối nội bộ hoặc tiếp tục ủy quyền bảo trì cho đơn vị khác mà không phải trả thêm bất kỳ khoản phí cấp quyền nào cho CreditBird.
              </p>
            </section>

            <!-- Section 5 -->
            <section id="thanh-toan" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                5. Thanh toán & Nghiệm thu bàn giao
              </h2>
              <p class="text-sm">
                Tiến độ thanh toán và biên bản bàn giao nghiệm thu được cụ thể hóa trong từng Hợp đồng kinh tế hoặc Đơn đặt hàng tương ứng:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li><strong>Phần mềm & ERP:</strong> Thanh toán theo các mốc: Đặt cọc triển khai (30%), Hoàn thành Prototype & Alpha (30%), UAT thử nghiệm & Đào tạo (30%), Quyết toán nghiệm thu bàn giao chính thức (10%).</li>
                <li><strong>Thuê nhân sự IT:</strong> Quyết toán và xuất hóa đơn định kỳ vào cuối mỗi tháng làm việc theo bảng chấm công (Timesheet) đã được đại diện khách hàng xác nhận.</li>
                <li><strong>Máy phun & Tinh dầu:</strong> Thanh toán theo từng đơn hàng hoặc hợp đồng cung ứng định kỳ, có xuất hóa đơn GTGT (VAT) điện tử hợp lệ theo quy định pháp luật.</li>
              </ul>
            </section>

            <!-- Section 6 -->
            <section id="bao-mat" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 06/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                6. Cam kết bảo mật thông tin (NDA)
              </h2>
              <p class="text-sm">
                Mọi thông tin về dự án phần mềm, cấu trúc dữ liệu ERP, thông tin tài chính, cũng như bí quyết công nghệ mà các bên tiếp cận trong quá trình đàm phán và triển khai đều được bảo vệ nghiêm ngặt dưới Thỏa thuận bảo mật thông tin (NDA).
              </p>
              <p class="text-sm">
                Nghĩa vụ bảo mật vẫn có hiệu lực vô thời hạn ngay cả khi hợp đồng dịch vụ đã kết thúc hoặc thanh lý.
              </p>
            </section>

            <!-- Section 7 -->
            <section id="tranh-chap" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 07/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                7. Luật áp dụng & Giải quyết tranh chấp
              </h2>
              <p class="text-sm">
                Điều khoản này được điều chỉnh và giải thích theo các quy định hiện hành của pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
              </p>
              <p class="text-sm">
                Mọi tranh chấp phát sinh từ hoặc liên quan đến thỏa thuận này sẽ được ưu tiên giải quyết thông qua thương lượng hòa giải trên tinh thần thiện chí. Nếu không giải quyết được bằng hòa giải trong vòng 30 ngày, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết theo quy định.
              </p>
            </section>

          </article>

        </div>

      </div>
    </section>

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
