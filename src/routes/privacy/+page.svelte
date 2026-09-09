<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import { ShieldCheck, Lock, UserCheck, ChevronRight, Phone } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const sections = [
    { id: 'can-cu', title: '1. Căn cứ pháp lý & Phạm vi áp dụng' },
    { id: 'muc-dich', title: '2. Mục đích xử lý dữ liệu' },
    { id: 'loai-du-lieu', title: '3. Các loại dữ liệu thu thập' },
    { id: 'bien-phap', title: '4. Biện pháp an toàn & Bảo mật kỹ thuật' },
    { id: 'luu-tru', title: '5. Thời gian và địa điểm lưu trữ dữ liệu' },
    { id: 'quyen-chu-the', title: '6. Quyền & Nghĩa vụ của chủ thể dữ liệu' },
    { id: 'lien-he-dpo', title: '7. Kênh liên hệ bộ phận bảo vệ dữ liệu' }
  ];
</script>

<svelte:head>
  <title>Chính sách Bảo mật Thông tin — CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</title>
  <meta name="description" content="Chính sách bảo mật dữ liệu cá nhân và an toàn thông tin của CreditBird (MST: 0315397327) tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    
    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow="_NGHỊ ĐỊNH 13/2023/NĐ-CP/"
      eyebrowIcon={ShieldCheck}
      specBadge="Cập nhật: Năm 2026"
      title="Chính sách Bảo mật Thông tin"
      description="Cam kết bảo vệ dữ liệu cá nhân, thông tin doanh nghiệp và tài sản số theo các tiêu chuẩn pháp lý cao nhất tại Việt Nam của CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327)."
      primaryBtnText="Đăng Ký Tư Vấn Pháp Lý Dữ Liệu"
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
                _MỤC LỤC BẢO MẬT/
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
                  <ShieldCheck size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>Nghị định 13/2023/NĐ-CP</span>
                </div>
                <div class="flex items-center gap-2">
                  <Lock size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>Mã hóa AES-256 & TLS 1.3</span>
                </div>
                <div class="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                  <Phone size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <a href="tel:0932640968" class="hover:underline font-bold text-[#090e1f]">Hotline: 0932.640.968</a>
                </div>
              </div>
            </div>
          </aside>

          <!-- Content Body (32gu) -->
          <article class="snap-card free-flow flex flex-col gap-2gu grid-ring bg-white p-1gu sm:p-2gu leading-relaxed text-[#334155]">
            
            <!-- Section 1 -->
            <section id="can-cu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                1. Căn cứ pháp lý & Phạm vi áp dụng
              </h2>
              <p>
                Chính sách này được xây dựng căn cứ theo:
              </p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li><strong>Nghị định số 13/2023/NĐ-CP</strong> ngày 17/04/2023 của Chính phủ về bảo vệ dữ liệu cá nhân.</li>
                <li><strong>Luật An toàn thông tin mạng số 86/2015/QH13</strong> và các văn bản hướng dẫn thi hành.</li>
                <li><strong>Luật An ninh mạng số 24/2018/QH14</strong> của Quốc hội Việt Nam.</li>
              </ul>
              <p class="text-sm">
                Chính sách áp dụng đối với toàn bộ dữ liệu cá nhân của khách hàng, đối tác, người liên hệ của doanh nghiệp khi tương tác với CreditBird qua website, ứng dụng phần mềm, hợp đồng dịch vụ ERP, nhân sự IT hoặc cung ứng máy phun tinh dầu.
              </p>
            </section>

            <!-- Section 2 -->
            <section id="muc-dich" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                2. Mục đích xử lý dữ liệu
              </h2>
              <p>CreditBird chỉ thu thập và xử lý dữ liệu trong phạm vi cần thiết cho các mục đích hợp pháp sau:</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li>Tư vấn giải pháp, gửi báo giá và tài liệu kỹ thuật về viết phần mềm, phát triển ERP, cung ứng nhân sự IT, thiết bị máy phun và tinh dầu.</li>
                <li>Soạn thảo, ký kết và thực thi Hợp đồng kinh tế giữa CreditBird và Quý khách hàng.</li>
                <li>Thực hiện các cam kết bảo hành thiết bị (12 - 24 tháng), cung ứng tinh dầu định kỳ và dịch vụ hỗ trợ kỹ thuật phần mềm (SLA).</li>
                <li>Xuất hóa đơn giá trị gia tăng điện tử hợp lệ theo quy định của Tổng cục Thuế Việt Nam.</li>
                <li>Gửi thông báo cập nhật phiên bản phần mềm, cảnh báo bảo mật hoặc khuyến cáo kỹ thuật liên quan đến dịch vụ đang sử dụng.</li>
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="loai-du-lieu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                3. Các loại dữ liệu thu thập
              </h2>
              <div class="flex flex-col gap-3 text-sm">
                <h3 class="font-bold text-[#090e1f]">3.1. Dữ liệu do Quý khách chủ động cung cấp:</h3>
                <ul class="list-disc list-inside flex flex-col gap-1 pl-2">
                  <li>Họ và tên người liên hệ, đại diện doanh nghiệp.</li>
                  <li>Địa chỉ email công việc, số điện thoại liên lạc.</li>
                  <li>Tên cơ quan / tổ chức / doanh nghiệp, mã số thuế, địa chỉ trụ sở.</li>
                  <li>Địa điểm khảo sát, lắp đặt máy phun tinh dầu hoặc triển khai hạ tầng phần mềm.</li>
                </ul>

                <h3 class="font-bold text-[#090e1f] mt-2">3.2. Dữ liệu kỹ thuật hệ thống tự động ghi nhận:</h3>
                <ul class="list-disc list-inside flex flex-col gap-1 pl-2">
                  <li>Địa chỉ IP, thông số thiết bị, trình duyệt và thời gian truy cập cổng dịch vụ.</li>
                  <li>Nhật ký hệ thống (Audit Logs) nhằm phục vụ phát hiện tấn công mạng và phòng ngừa gian lận.</li>
                </ul>
              </div>
            </section>

            <!-- Section 4 -->
            <section id="bien-phap" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                4. Biện pháp an toàn & Bảo mật kỹ thuật
              </h2>
              <p>
                CreditBird áp dụng các biện pháp kỹ thuật và tổ chức nghiêm ngặt nhằm phòng chống truy cập, tiết lộ, thay đổi hoặc phá hủy dữ liệu trái phép:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f] flex items-center gap-1.5">
                    <Lock size={16} class="text-[var(--cb-cobalt-600)]" /> Mã hóa đường truyền & Lưu trữ
                  </span>
                  <p class="text-xs text-[#64748b]">
                    Mã hóa TLS 1.3 cho toàn bộ dữ liệu truyền qua Internet; mã hóa chuẩn AES-256 đối với cơ sở dữ liệu lưu trữ.
                  </p>
                </div>

                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f] flex items-center gap-1.5">
                    <UserCheck size={16} class="text-[var(--cb-cobalt-600)]" /> Phân quyền tối thiểu (RBAC)
                  </span>
                  <p class="text-xs text-[#64748b]">
                    Chỉ nhân sự có thẩm quyền trực tiếp tham gia hỗ trợ dự án mới được cấp quyền tiếp cận dữ liệu khách hàng.
                  </p>
                </div>
              </div>
              <p class="text-sm">
                Chúng tôi cam kết <strong>tuyệt đối không bán, chia sẻ hoặc cho thuê dữ liệu cá nhân của khách hàng</strong> cho bất kỳ bên thứ ba nào vì mục đích thương mại hoặc quảng cáo trái phép.
              </p>
            </section>

            <!-- Section 5 -->
            <section id="luu-tru" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                5. Thời gian và địa điểm lưu trữ dữ liệu
              </h2>
              <p class="text-sm">
                Dữ liệu khách hàng được lưu trữ trên hạ tầng máy chủ đặt tại các Trung tâm Dữ liệu đạt chuẩn Tier III tại Việt Nam (Viettel IDC / VNPT Data Center / FPT Telecom), bảo đảm tuân thủ quy định về lưu trữ dữ liệu nội địa của Luật An ninh mạng.
              </p>
              <p class="text-sm">
                Dữ liệu được lưu trữ trong suốt thời gian có hiệu lực của hợp đồng và lưu trữ thêm theo thời hạn quy định của pháp luật kế toán, thuế Việt Nam trước khi được hủy an toàn.
              </p>
            </section>

            <!-- Section 6 -->
            <section id="quyen-chu-the" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 06/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                6. Quyền & Nghĩa vụ của chủ thể dữ liệu
              </h2>
              <p class="text-sm">Theo Nghị định 13/2023/NĐ-CP, Quý khách với tư cách là chủ thể dữ liệu có đầy đủ các quyền:</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                <li>Quyền được biết về hoạt động xử lý dữ liệu cá nhân của mình.</li>
                <li>Quyền đồng ý, không đồng ý hoặc rút lại sự đồng ý cho phép xử lý dữ liệu.</li>
                <li>Quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu chưa chính xác.</li>
                <li>Quyền yêu cầu xóa dữ liệu cá nhân khi mục đích xử lý đã hoàn thành.</li>
                <li>Quyền khiếu nại, tố cáo khi phát hiện vi phạm quy định bảo vệ dữ liệu.</li>
              </ul>
            </section>

            <!-- Section 7 -->
            <section id="lien-he-dpo" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 07/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                7. Kênh liên hệ bộ phận bảo vệ dữ liệu (DPO)
              </h2>
              <p class="text-sm">
                Để thực hiện các quyền của chủ thể dữ liệu hoặc phản ánh các vấn đề an toàn thông tin, Quý khách vui lòng liên hệ trực tiếp với Bộ phận Bảo vệ Dữ liệu của CreditBird:
              </p>
              <div class="p-4 bg-[#f8fafc] grid-ring text-xs flex flex-col gap-1.5 font-mono">
                <div><strong>Đơn vị kiểm soát dữ liệu:</strong> CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</div>
                <div><strong>Mã số thuế:</strong> 0315397327</div>
                <div><strong>Địa chỉ:</strong> 100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam</div>
                <div><strong>Hotline tiếp nhận:</strong> 0932.640.968</div>
                <div><strong>Email chuyên trách bảo mật:</strong> contact@creditbirdtech.com</div>
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
