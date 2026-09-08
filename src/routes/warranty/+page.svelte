<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import { Shield, Award, Clock, ChevronRight, Phone } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const sections = [
    { id: 'bao-hanh-may', title: '1. Bảo hành máy phun tinh dầu & Thiết bị HVAC' },
    { id: 'tinh-dau-coa', title: '2. Cam kết chất lượng tinh dầu thiên nhiên COA' },
    { id: 'sla-phan-mem', title: '3. Cam kết mức độ dịch vụ (SLA) Phần mềm & ERP' },
    { id: 'quy-trinh', title: '4. Quy trình tiếp nhận & Xử lý bảo hành' },
    { id: 'mien-tru', title: '5. Các trường hợp từ chối hoặc tính phí bảo hành' }
  ];
</script>

<svelte:head>
  <title>Chính sách Bảo hành & Cam kết SLA — CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</title>
  <meta name="description" content="Chính sách bảo hành thiết bị máy phun tinh dầu 12-24 tháng, cam kết chất lượng tinh dầu thiên nhiên COA và cam kết SLA hệ thống phần mềm, ERP 99.9% của CreditBird." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_BẢO HÀNH & SLA DỊCH VỤ/"
      eyebrowIcon={Shield}
      specBadge="Cam kết chuẩn mực 2026"
      title="Chính sách Bảo hành & SLA Dịch vụ"
      description="Cam kết chất lượng thiết bị máy phun tinh dầu 12 - 24 tháng, tinh dầu thiên nhiên 100% nguyên chất có kiểm định COA và cam kết mức độ dịch vụ (SLA) phần mềm, ERP đạt 99.9% uptime của CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327)."
      primaryBtnText="Đăng Ký Tư Vấn Dịch Vụ"
      primaryBtnAction={openDemo}
      secondaryBtnText="Hotline: 0932 640 968"
      secondaryBtnHref="tel:0932640968"
    />

    <!-- 2. Main Content Area (Crisp Light Blueprint Grid) -->
    <section class="relative theme-light bg-[#f8fafc] text-[#090e1f] py-12 md:py-16 border-b border-[#e2e8f0]">
      <div class="strict-grid relative z-2 py-1gu">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Sticky Table of Contents (Col 1-4) -->
          <aside class="lg:col-span-4 sticky top-24">
            <div class="grid-ring bg-white p-6 flex flex-col gap-4">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2 py-0.5 w-fit">
                _MỤC LỤC BẢO HÀNH/
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
                  <Shield size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>Bảo hành máy 12 - 24 tháng</span>
                </div>
                <div class="flex items-center gap-2">
                  <Award size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>Tinh dầu chuẩn COA / GC-MS</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock size={14} class="text-[var(--cb-cobalt-600)]" />
                  <span>SLA Phần mềm Uptime 99.9%</span>
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
            <section id="bao-hanh-may" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                1. Bảo hành thiết bị máy phun tinh dầu & Thiết bị HVAC
              </h2>
              <p>
                CreditBird cam kết bảo hành chính hãng đối với tất cả các dòng thiết bị máy khuếch tán tinh dầu do công ty phân phối và lắp đặt:
              </p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f]">Máy phun tinh dầu công nghiệp kết nối HVAC</span>
                  <div class="text-xs text-[var(--cb-cobalt-600)] font-mono font-bold">BẢO HÀNH 24 THÁNG</div>
                  <p class="text-xs text-[#64748b]">
                    Bảo dưỡng định kỳ đường ống dẫn, đầu phun siêu âm áp lực cao và van điện từ kết nối hệ thống thông gió tòa nhà.
                  </p>
                </div>

                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f]">Máy khuếch tán Showroom & Khách sạn</span>
                  <div class="text-xs text-[var(--cb-cobalt-600)] font-mono font-bold">BẢO HÀNH 12 - 18 THÁNG</div>
                  <p class="text-xs text-[#64748b]">
                    Bảo hành bo mạch điều khiển WiFi/Bluetooth, module hẹn giờ tự động và cụm bơm khí nguyên khối.
                  </p>
                </div>
              </div>

              <h3 class="font-bold text-[#090e1f] mt-2">Chính sách đổi mới linh kiện khẩn cấp:</h3>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li>Trong vòng <strong>30 ngày đầu tiên</strong> sử dụng, nếu phát sinh lỗi phần cứng do nhà sản xuất, khách hàng được đổi mới thiết bị 100%.</li>
                <li>Hỗ trợ cung cấp <strong>thiết bị thay thế tạm thời trong vòng 24 giờ</strong> tại khu vực TP. Hồ Chí Minh trong thời gian kiểm tra hoặc sửa chữa máy chính, đảm bảo không gian hương thơm không bị gián đoạn.</li>
              </ul>
            </section>

            <!-- Section 2 -->
            <section id="tinh-dau-coa" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                2. Cam kết chất lượng tinh dầu thiên nhiên COA
              </h2>
              <p>
                Chất lượng tinh dầu là yếu tố cốt lõi bảo đảm sức khỏe con người và tuổi thọ thiết bị phun. CreditBird cam kết:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-2 pl-2 text-sm">
                <li><strong>100% Tinh dầu thiên nhiên nguyên chất:</strong> Tuyệt đối không pha cồn công nghiệp, không chứa chì, thủy ngân, phthalate hay các chất cấm theo quy định y tế.</li>
                <li><strong>Đầy đủ hồ sơ kiểm định quốc tế:</strong> Mỗi lô tinh dầu xuất kho đều kèm theo Chứng nhận phân tích thành phần (COA - Certificate of Analysis), Bảng dữ liệu an toàn vật liệu (MSDS) và Phiếu kiểm nghiệm sắc ký khí (GC-MS).</li>
                <li><strong>Chính sách đổi trả tức thì:</strong> Đổi mới 100% trong vòng 07 ngày nếu phát hiện bao bì niêm phong bị rò rỉ, vỡ hỏng do vận chuyển hoặc chất lượng mùi hương không đúng với mẫu cam kết.</li>
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="sla-phan-mem" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                3. Cam kết mức độ dịch vụ (SLA) Phần mềm & ERP
              </h2>
              <p>
                Đối với các hệ thống phần mềm may đo và ERP do CreditBird phát triển hoặc nhận ủy thác bảo trì vận hành, chúng tôi áp dụng khung cam kết dịch vụ (Service Level Agreement - SLA) nghiêm ngặt:
              </p>

              <div class="overflow-x-auto my-3">
                <table class="w-full text-left text-xs sm:text-sm grid-ring">
                  <thead class="bg-[#f8fafc] text-[#090e1f] font-mono uppercase text-xs">
                    <tr>
                      <th class="p-3 border-b border-[#e2e8f0]">Mức độ sự cố</th>
                      <th class="p-3 border-b border-[#e2e8f0]">Định nghĩa ảnh hưởng</th>
                      <th class="p-3 border-b border-[#e2e8f0]">Thời gian phản hồi</th>
                      <th class="p-3 border-b border-[#e2e8f0]">Mục tiêu xử lý</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td class="p-3 font-bold text-red-600 font-mono">P1 - Khẩn cấp</td>
                      <td class="p-3">Toàn bộ hệ thống ngừng hoạt động, không thể thực hiện giao dịch hoặc mất dữ liệu.</td>
                      <td class="p-3 font-mono font-bold">&lt; 15 phút</td>
                      <td class="p-3">Khắc phục trong vòng 2 - 4 giờ</td>
                    </tr>
                    <tr>
                      <td class="p-3 font-bold text-amber-600 font-mono">P2 - Nghiêm trọng</td>
                      <td class="p-3">Chức năng cốt lõi bị lỗi (bán hàng, kho bãi, đối soát thanh toán), có giải pháp tạm thời.</td>
                      <td class="p-3 font-mono font-bold">&lt; 1 giờ</td>
                      <td class="p-3">Khắc phục trong vòng 8 giờ</td>
                    </tr>
                    <tr>
                      <td class="p-3 font-bold text-blue-600 font-mono">P3 - Tiêu chuẩn</td>
                      <td class="p-3">Lỗi nhỏ không ảnh hưởng lớn đến vận hành, yêu cầu hỗ trợ người dùng, tối ưu giao diện.</td>
                      <td class="p-3 font-mono font-bold">&lt; 4 giờ</td>
                      <td class="p-3">Khắc phục trong vòng 24 - 48 giờ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="text-sm">
                <strong>Cam kết Uptime:</strong> CreditBird cam kết độ sẵn sàng hạ tầng máy chủ và ứng dụng đạt tối thiểu <strong>99.9%</strong> mỗi tháng (loại trừ các đợt bảo trì định kỳ có thông báo trước tối thiểu 48 giờ).
              </p>
            </section>

            <!-- Section 4 -->
            <section id="quy-trinh" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                4. Quy trình tiếp nhận & Xử lý bảo hành
              </h2>
              <div class="flex flex-col gap-3">
                <div class="flex items-start gap-3 p-3 bg-[#f8fafc] grid-ring">
                  <span class="h3 font-mono tabular-nums font-bold text-[var(--cb-cobalt-600)] shrink-0">01</span>
                  <div>
                    <h4 class="font-bold text-sm text-[#090e1f]">Tiếp nhận yêu cầu:</h4>
                    <p class="text-xs text-[#64748b]">Khách hàng liên hệ qua Hotline 0932.640.968 hoặc gửi email tới contact@creditbirdtech.com kèm mã số hợp đồng / serial thiết bị.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 bg-[#f8fafc] grid-ring">
                  <span class="h3 font-mono tabular-nums font-bold text-[var(--cb-cobalt-600)] shrink-0">02</span>
                  <div>
                    <h4 class="font-bold text-sm text-[#090e1f]">Chẩn đoán & Hướng dẫn từ xa:</h4>
                    <p class="text-xs text-[#64748b]">Kỹ sư phụ trách liên hệ trực tiếp trong 15 - 30 phút để kiểm tra logs telemetry hoặc hướng dẫn xử lý nhanh.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 bg-[#f8fafc] grid-ring">
                  <span class="h3 font-mono tabular-nums font-bold text-[var(--cb-cobalt-600)] shrink-0">03</span>
                  <div>
                    <h4 class="font-bold text-sm text-[#090e1f]">Xử lý tại hiện trường hoặc máy chủ:</h4>
                    <p class="text-xs text-[#64748b]">Kỹ thuật viên đến tận nơi kiểm tra máy phun hoặc kỹ sư triển khai hotfix mã nguồn bảo mật trên môi trường staging trước khi deploy production.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 bg-[#f8fafc] grid-ring">
                  <span class="h3 font-mono tabular-nums font-bold text-[var(--cb-cobalt-600)] shrink-0">04</span>
                  <div>
                    <h4 class="font-bold text-sm text-[#090e1f]">Nghiệm thu & Đánh giá:</h4>
                    <p class="text-xs text-[#64748b]">Khách hàng ký biên bản bàn giao hoàn thành bảo hành và đánh giá chất lượng dịch vụ.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Section 5 -->
            <section id="mien-tru" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                5. Các trường hợp từ chối hoặc tính phí bảo hành
              </h2>
              <p>Chính sách bảo hành miễn phí không áp dụng đối với các trường hợp:</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm text-[#64748b]">
                <li>Thiết bị máy phun bị va đập vật lý, rơi vỡ, biến dạng hoặc bị vào nước/chất lỏng khác ngoài tinh dầu theo khuyến nghị.</li>
                <li>Khách hàng tự ý tháo mở máy, sửa chữa bo mạch hoặc can thiệp mã nguồn phần mềm mà không có sự đồng ý bằng văn bản của CreditBird.</li>
                <li>Thiệt hại do thiên tai, hỏa hoạn, sét đánh hoặc sự cố lưới điện vượt quá thông số kỹ thuật cho phép.</li>
                <li>Sử dụng tinh dầu trôi nổi, pha cồn hoặc dầu khoáng không rõ nguồn gốc dẫn đến tắc nghẽn hoặc cháy bơm khuếch tán.</li>
              </ul>
              <p class="text-sm mt-2">
                Đối với các trường hợp trên, CreditBird vẫn cung cấp dịch vụ sửa chữa và thay thế linh kiện chính hãng với mức chi phí ưu đãi dành cho khách hàng thân thiết.
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
