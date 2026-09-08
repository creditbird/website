<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import { ShieldCheck, Lock, Server, ChevronRight, Phone } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const sections = [
    { id: 'tieu-chuan-iso', title: '1. Khung an toàn thông tin ISO/IEC 27001' },
    { id: 'bao-mat-ma-nguon', title: '2. Bảo mật mã nguồn & Quy trình DevSecOps' },
    { id: 'sao-luu-du-lieu', title: '3. An toàn dữ liệu ERP & Sao lưu khôi phục' },
    { id: 'nhan-su-it-sec', title: '4. Chuẩn an toàn cho nhân sự IT Onsite/Remote' },
    { id: 'an-toan-iot', title: '5. An ninh thiết bị máy phun IoT & HVAC' },
    { id: 'bao-cao-lo-hong', title: '6. Quy trình tiếp nhận & Xử lý lỗ hổng bảo mật' }
  ];
</script>

<svelte:head>
  <title>Chính sách An toàn Thông tin & Bảo mật — CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</title>
  <meta name="description" content="Chính sách an toàn thông tin, bảo mật mã nguồn DevSecOps và tuân thủ ISO/IEC 27001 của CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327)." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_AN TOÀN THÔNG TIN & ISO 27001/"
      eyebrowIcon={ShieldCheck}
      specBadge="Chuẩn bảo vệ cấp doanh nghiệp"
      title="Chính sách An toàn Thông tin & Bảo mật"
      description="Các nguyên tắc, quy trình và biện pháp bảo vệ mã nguồn, an toàn dữ liệu ERP và hạ tầng số tại CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327)."
      primaryBtnText="Đăng Ký Tư Vấn An Toàn Hệ Thống"
      primaryBtnAction={openDemo}
      secondaryBtnText="Hotline: 0932 640 968"
      secondaryBtnHref="tel:0932640968"
    />

    <!-- 2. Main Content Area (Crisp Light Blueprint Grid) -->
    <section class="relative theme-light bg-[#f8fafc] text-[#090e1f] py-12 md:py-16 border-b border-[#e2e8f0]">
      <div class="strict-grid relative z-2 py-1gu">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Sticky Sidebar Navigation (Col 1-4) -->
          <aside class="lg:col-span-4 sticky top-24">
            <div class="grid-ring bg-white p-6 flex flex-col gap-4">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2 py-0.5 w-fit">
                _MỤC LỤC CHÍNH SÁCH/
              </span>
              
              <nav class="flex flex-col gap-1">
                {#each sections as sec}
                  <a 
                    href="#{sec.id}" 
                    class="py-2 px-3 text-[#475569] hover:text-[var(--cb-cobalt-600)] hover:bg-[#edf2ff] transition-colors flex items-center justify-between text-xs font-mono font-medium grid-ring"
                  >
                    <span>{sec.title}</span>
                    <ChevronRight size={13} class="opacity-40" />
                  </a>
                {/each}
              </nav>

              <div class="mt-2 pt-4 border-t border-[#e2e8f0] flex flex-col gap-2.5 font-mono text-xs text-[#64748b]">
                <div class="flex items-center gap-2">
                  <ShieldCheck size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>ISO/IEC 27001 Aligned</span>
                </div>
                <div class="flex items-center gap-2">
                  <Lock size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>DevSecOps & SAST Scanner</span>
                </div>
                <div class="flex items-center gap-2">
                  <Server size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>Tier III Data Centers (VN)</span>
                </div>
                <div class="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                  <Phone size={14} class="text-[var(--cb-cobalt-600)]" />
                  <a href="tel:0932640968" class="hover:underline font-bold text-[#090e1f]">Hotline: 0932.640.968</a>
                </div>
              </div>
            </div>
          </aside>

          <!-- Content Body (Col 5-12) -->
          <article class="lg:col-span-8 flex flex-col gap-10 grid-ring bg-white p-8 md:p-12 leading-relaxed text-[#334155]">
            
            <!-- Section 1 -->
            <section id="tieu-chuan-iso" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                1. Khung an toàn thông tin ISO/IEC 27001
              </h2>
              <p>
                CreditBird thiết lập và duy trì Hệ thống quản lý an toàn thông tin (ISMS) phù hợp với chuẩn mực quốc tế <strong>ISO/IEC 27001</strong> và quy định của <strong>Luật An ninh mạng Việt Nam</strong>.
              </p>
              <p>
                Toàn bộ quy trình từ tuyển dụng nhân sự IT, tiếp nhận yêu cầu phần mềm, cấu hình máy chủ đến bàn giao mã nguồn đều tuân thủ các chính sách kiểm soát an toàn nghiêm ngặt nhằm đảm bảo 3 trụ cột cơ bản:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-center">
                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">TÍNH BẢO MẬT</span>
                  <span class="text-xs text-[#64748b]">Confidentiality</span>
                  <p class="text-xs mt-1">Chỉ những cá nhân được ủy quyền mới được truy cập dữ liệu.</p>
                </div>

                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">TÍNH TOÀN VẸN</span>
                  <span class="text-xs text-[#64748b]">Integrity</span>
                  <p class="text-xs mt-1">Dữ liệu kế toán ERP và mã nguồn không bị sửa đổi trái phép.</p>
                </div>

                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">TÍNH KHẢ DỤNG</span>
                  <span class="text-xs text-[#64748b]">Availability</span>
                  <p class="text-xs mt-1">Hệ thống sẵn sàng phục vụ 99.9% thời gian theo cam kết SLA.</p>
                </div>
              </div>
            </section>

            <!-- Section 2 -->
            <section id="bao-mat-ma-nguon" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                2. Bảo mật mã nguồn & Quy trình DevSecOps
              </h2>
              <p>
                Đối với các dự án viết phần mềm may đo và tùy biến ERP, CreditBird áp dụng quy trình phát triển phần mềm an toàn (Secure Software Development Lifecycle - SSDLC):
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li><strong>Quản lý kho mã nguồn cô lập:</strong> Mỗi dự án của khách hàng được phân bổ một Repository riêng biệt với chính sách phân quyền chi nhánh (Branch Protection Rules), yêu cầu tối thiểu 02 Senior Tech Lead phê duyệt Pull Request trước khi hợp nhất.</li>
                <li><strong>Kiểm thử bảo mật tự động:</strong> Tích hợp công cụ quét mã tĩnh (SAST) phát hiện lỗi OWASP Top 10, quét thư viện phụ thuộc (SCA) để ngăn chặn lỗ hổng zero-day trong các gói mã nguồn mở.</li>
                <li><strong>Chống rò rỉ khóa bí mật:</strong> Tự động chặn commit chứa API keys, database credentials hoặc secret tokens.</li>
                <li><strong>Bàn giao sạch 100%:</strong> Khi bàn giao mã nguồn cho khách hàng, hệ thống được nghiệm thu với báo cáo quét bảo mật sạch hoàn toàn (Zero High/Critical Vulnerabilities).</li>
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="sao-luu-du-lieu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                3. An toàn dữ liệu ERP & Sao lưu khôi phục
              </h2>
              <p>
                Dữ liệu ERP (đơn hàng, tồn kho, kế toán VAS, nhân sự) là tài sản tối quan trọng của doanh nghiệp. Cơ chế bảo vệ dữ liệu bao gồm:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li><strong>Sao lưu tự động hàng ngày:</strong> Dữ liệu được sao lưu định kỳ vào khung giờ thấp điểm và lưu giữ lịch sử khôi phục theo điểm thời gian (Point-in-time Recovery - PITR).</li>
                <li><strong>Chiến lược sao lưu 3-2-1:</strong> Tối thiểu 03 bản sao lưu, lưu trên 02 loại phương tiện độc lập và có ít nhất 01 bản lưu trữ Off-site tại trung tâm dữ liệu thứ hai.</li>
                <li><strong>Mã hóa đầu cuối:</strong> Toàn bộ các bản snapshot cơ sở dữ liệu được mã hóa bằng thuật toán AES-256 trước khi đẩy sang kho lưu trữ đám mây an toàn.</li>
                <li><strong>Nhật ký kiểm toán bất biến (Immutable Audit Trail):</strong> Mọi thao tác sửa đổi chứng từ kế toán, xuất nhập kho hoặc phân quyền người dùng đều được ghi nhận vào sổ nhật ký không thể xóa sửa.</li>
              </ul>
            </section>

            <!-- Section 4 -->
            <section id="nhan-su-it-sec" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                4. Chuẩn an toàn cho nhân sự IT Onsite/Remote
              </h2>
              <p>
                Nhằm bảo vệ tuyệt đối bí mật kinh doanh khi doanh nghiệp sử dụng dịch vụ cho thuê nhân sự IT:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li><strong>Thỏa thuận bảo mật cá nhân (Individual NDA):</strong> 100% kỹ sư IT trước khi bàn giao sang phía khách hàng đều phải ký cam kết bảo mật thông tin có giá trị pháp lý ràng buộc cá nhân.</li>
                <li><strong>Thiết bị làm việc chuẩn hóa:</strong> Kỹ sư tuân thủ quy chế sử dụng máy tính của doanh nghiệp khách hàng hoặc máy tính do CreditBird cấp phát đã cài đặt phần mềm bảo mật mã hóa ổ đĩa (BitLocker/FileVault).</li>
                <li><strong>Tuyệt đối không lưu trữ dữ liệu cá nhân:</strong> Kỹ sư không được phép sao chép mã nguồn hoặc cơ sở dữ liệu của khách hàng sang thiết bị cá nhân hoặc USB ngoài phạm vi cấp phép.</li>
              </ul>
            </section>

            <!-- Section 5 -->
            <section id="an-toan-iot" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                5. An ninh thiết bị máy phun IoT & HVAC
              </h2>
              <p>
                Các dòng máy phun tinh dầu thông minh có kết nối WiFi/App điều khiển từ xa được thiết kế an toàn:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li>Giao thức truyền thông mã hóa an toàn qua giao thức TLS/MQTT có chứng thực máy chủ.</li>
                <li>Cách ly thiết bị khỏi mạng nội bộ nhạy cảm của doanh nghiệp thông qua phân vùng mạng VLAN chuyên biệt.</li>
                <li>Firmware được ký số chính thức từ CreditBird, chống chèn mã độc hoặc chiếm quyền điều khiển trái phép.</li>
              </ul>
            </section>

            <!-- Section 6 -->
            <section id="bao-cao-lo-hong" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 06/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                6. Quy trình tiếp nhận & Xử lý lỗ hổng bảo mật
              </h2>
              <p>
                CreditBird hoan nghênh và đánh giá cao sự đóng góp của các chuyên gia bảo mật và cộng đồng trong việc phát hiện các nguy cơ an toàn thông tin. Nếu phát hiện lỗ hổng nghi vấn, Quý khách vui lòng gửi thông tin tới:
              </p>
              <div class="p-4 bg-[#f8fafc] grid-ring text-xs flex flex-col gap-1.5 font-mono">
                <div><strong>Bộ phận An ninh Thông tin:</strong> CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</div>
                <div><strong>Mã số thuế:</strong> 0315397327</div>
                <div><strong>Hotline khẩn cấp:</strong> 0932.640.968</div>
                <div><strong>Email tiếp nhận:</strong> contact@creditbirdtech.com</div>
                <div><strong>Thời gian phản hồi bước đầu:</strong> Trong vòng 24 giờ làm việc</div>
              </div>
            </section>

          </article>

        </div>

      </div>
    </section>

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
