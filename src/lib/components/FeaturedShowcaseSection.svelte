<script lang="ts">
  import { 
    Monitor, 
    Layers, 
    Droplets, 
    Wind, 
    Check, 
    ArrowRight, 
    ExternalLink, 
    ShieldCheck, 
    Sparkles, 
    Cpu, 
    Barcode, 
    Flame 
  } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  type ShowcaseTab = 'software' | 'erp' | 'scent';
  let activeTab = $state<ShowcaseTab>('software');
</script>

<section id="showcase" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header with Integrated Tab Selector -->
      <div data-auto-snap="true" class="snap-card free-flow flex flex-col justify-between grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _SẢN PHẨM & GIẢI PHÁP TIÊU BIỂU/
          </span>
          <h2 class="h3 text-[#090e1f]">
            Trực quan hóa giải pháp & giao diện minh họa
          </h2>
          <p class="subheading-md text-[#475569]">
            Khám phá tính năng phần mềm, giải pháp Kelvot ERP và danh mục tinh dầu, máy phun Lemy Finest.
          </p>
        </div>

        <!-- Integrated Tab Buttons -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1gu mt-1gu border-t border-[#f1f5f9]">
          <button 
            type="button" 
            onclick={() => activeTab = 'software'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'software' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Monitor size={16} class="shrink-0" />
            <span>Giao diện minh họa Phần mềm & RustSale CRM</span>
          </button>

          <button 
            type="button" 
            onclick={() => activeTab = 'erp'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'erp' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Layers size={16} class="shrink-0" />
            <span>Giao diện minh họa Hệ thống Kelvot ERP</span>
          </button>

          <button 
            type="button" 
            onclick={() => activeTab = 'scent'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'scent' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Wind size={16} class="shrink-0" />
            <span>Máy phun & Tinh dầu Lemy Finest</span>
          </button>
        </div>
      </div>

      <!-- TAB 1: PHẦN MỀM & RUSTSALE CRM -->
      {#if activeTab === 'software'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-center">
            
            <div class="lg:col-span-6 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_GIAO DIỆN MINH HỌA / RUST NATIVE CRM</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                RustSale CRM — Hộp thư hội tụ Zalo, WhatsApp, Messenger
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                Được viết bằng Rust Native tối ưu hiệu năng, RustSale CRM giải quyết bài toán tin nhắn tư vấn phân tán trên nhiều kênh và thất thoát khách hàng tiềm năng. Dữ liệu được mã hóa và lưu trữ trực tiếp trên thiết bị của doanh nghiệp.
              </p>

              <div class="flex flex-col gap-2 pt-2">
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>Quản lý đồng thời nhiều tài khoản Zalo cá nhân & Zalo OA trên 1 màn hình</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>Tích hợp luồng trò chuyện WhatsApp B2B & Fanpage Messenger</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>Bộ lọc thẻ Lead, ghi chú lịch sử giao dịch và phân công nhân viên tư vấn</span>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-3 flex-wrap">
                <a href="/products/rustsale" class="btn-cta-primary !h-9 text-xs px-5 inline-flex items-center gap-1.5">
                  <span>Khám phá RustSale CRM</span>
                  <ArrowRight size={13} class="shrink-0" />
                </a>
                <a href="/solutions/software" class="btn-cta-outline !h-9 text-xs px-4 text-[#334155]">
                  <span>Dịch vụ may đo phần mềm</span>
                </a>
              </div>
            </div>

            <!-- Visual Mockup Card -->
            <div class="lg:col-span-6 bg-[#090e1f] p-4 sm:p-5 border border-[#1e293b] text-white font-mono text-xs shadow-lg">
              <div class="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#10b981]"></span>
                  <span class="text-[#94a3b8] text-[11px] ml-2">RustSale Omnichannel Hub (Giao diện minh họa)</span>
                </div>
                <span class="text-[var(--cb-emerald-400)] text-[10px]">CONNECTED 4 CHANNELS</span>
              </div>

              <!-- Mockup Split View -->
              <div class="grid grid-cols-12 gap-3 text-[11px]">
                <!-- Column 1: Conversations List -->
                <div class="col-span-5 bg-[#0d1527] p-2.5 border border-[#1e293b] flex flex-col gap-2">
                  <div class="text-[10px] text-[#64748b] uppercase font-bold">HỘI THOẠI HỘI TỤ</div>
                  <div class="p-2 bg-[var(--cb-cobalt-500)]/30 border border-[var(--cb-azure-500)]/40 text-white">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[var(--cb-azure-300)] font-bold">[Zalo] Cty Thép An Phát</span>
                      <span class="text-[9px] text-[#94a3b8]">10:42</span>
                    </div>
                    <div class="truncate text-[10px] text-[#cbd5e1] mt-0.5">Báo giá giúp lô hàng ống thép...</div>
                  </div>

                  <div class="p-2 bg-white/5 border border-white/5 text-[#94a3b8]">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[#10b981] font-bold">[WhatsApp] FDI Logistics</span>
                      <span class="text-[9px]">09:15</span>
                    </div>
                    <div class="truncate text-[10px]">Contract terms approved.</div>
                  </div>

                  <div class="p-2 bg-white/5 border border-white/5 text-[#94a3b8]">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[#60a5fa] font-bold">[FB Page] Chuỗi Nhà Thuốc</span>
                      <span class="text-[9px]">Hôm qua</span>
                    </div>
                    <div class="truncate text-[10px]">Tư vấn máy phun sảnh chờ...</div>
                  </div>
                </div>

                <!-- Column 2: Active Chat & Lead Details -->
                <div class="col-span-7 bg-[#0d1527] p-3 border border-[#1e293b] flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between border-b border-[#1e293b] pb-2 mb-2.5">
                      <span class="font-bold text-white text-xs">CÔNG TY THÉP AN PHÁT (ZALO B2B)</span>
                      <span class="px-1.5 py-0.5 bg-[#f59e0b]/20 text-[#fbbf24] text-[9px] font-bold">LEAD HOT</span>
                    </div>
                    <div class="flex flex-col gap-2 text-[10px] text-[#cbd5e1]">
                      <div class="p-2 bg-white/5">
                        <span class="text-[#64748b]">Khách hàng:</span> "Bên em cần may đo phần mềm quản lý kho kết nối Barcode và kế toán, anh tư vấn giúp."
                      </div>
                      <div class="p-2 bg-[var(--cb-cobalt-500)]/20 border border-[var(--cb-cobalt-500)]/40 text-[var(--cb-azure-200)]">
                        <span class="text-[#93c5fd]">CreditBird:</span> "Dạ CreditBird có sẵn giải pháp Kelvot ERP chuyên sâu về định mức BOM và kho WMS Barcode, em gửi anh tài liệu qua Zalo nhé."
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-[#1e293b] flex items-center justify-between text-[10px] text-[#94a3b8]">
                    <span>Local DB: Encrypted</span>
                    <span class="text-[var(--cb-emerald-400)]">Xử lý dữ liệu nội bộ (Local)</span>
                  </div>
                </div>
              </div>

              <div class="mt-3 text-[10px] text-[#94a3b8] italic text-right">
                * Giao diện minh họa tính năng; cấu hình thực tế tùy theo nhu cầu triển khai.
              </div>
            </div>

          </div>
        </div>
      {/if}

      <!-- TAB 2: KELVOT ERP -->
      {#if activeTab === 'erp'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-center">
            
            <div class="lg:col-span-6 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_GIAO DIỆN MINH HỌA / KELVOT ERP</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                Kelvot ERP — Chuyên sâu cho nhà máy, kho bãi & kế toán VAS
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                Giải pháp ERP được thiết kế theo đúng quy chuẩn kế toán Việt Nam (Thông tư 200/133) và giải quyết các bài toán của doanh nghiệp sản xuất: định mức hao hụt nguyên vật liệu, quản trị kho mã vạch và tính giá thành công đoạn.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">ĐỊNH MỨC BOM ĐA CẤP</div>
                  <p class="text-xs text-[#64748b]">Tự động bóc tách nguyên vật liệu phụ kiện cho từng lệnh sản xuất.</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">QUẢN TRỊ KHO WMS</div>
                  <p class="text-xs text-[#64748b]">Quét mã Barcode kiểm soát tồn kho theo vị trí kệ, lô hàng, hạn sử dụng.</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">KẾ TOÁN QUẢN TRỊ</div>
                  <p class="text-xs text-[#64748b]">Sổ cái hạch toán tự động, báo cáo doanh thu, chi phí và thuế.</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">KẾT NỐI MỞ API</div>
                  <p class="text-xs text-[#64748b]">Tích hợp hóa đơn điện tử, ngân hàng và sàn thương mại điện tử.</p>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-3 flex-wrap">
                <a href="/solutions/erp" class="btn-cta-primary !h-9 text-xs px-5 inline-flex items-center gap-1.5">
                  <span>Chi tiết giải pháp Kelvot ERP</span>
                  <ArrowRight size={13} class="shrink-0" />
                </a>
                <a href="https://kelvot.com" target="_blank" rel="noopener noreferrer" class="btn-cta-outline !h-9 text-xs px-4 text-[#334155] inline-flex items-center gap-1">
                  <span>Website Kelvot.com</span>
                  <ExternalLink size={12} class="shrink-0" />
                </a>
              </div>
            </div>

            <!-- ERP Visual Table Mockup -->
            <div class="lg:col-span-6 bg-white border border-[#cbd5e1] p-4 sm:p-5 shadow-sm font-sans text-xs">
              <div class="flex items-center justify-between border-b border-[#e2e8f0] pb-3 mb-3">
                <div class="flex items-center gap-2">
                  <Layers size={16} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span class="font-bold text-[#090e1f]">[GIAO DIỆN MINH HỌA] LỆNH SẢN XUẤT: MO-2026-089</span>
                </div>
                <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">ĐANG THỰC THI</span>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr class="bg-[#f8fafc] text-[#64748b] border-b border-[#e2e8f0]">
                      <th class="p-2">MÃ VẬT TƯ</th>
                      <th class="p-2">TÊN NGUYÊN LIỆU</th>
                      <th class="p-2 text-right">ĐỊNH MỨC</th>
                      <th class="p-2 text-right">THỰC XUẤT</th>
                      <th class="p-2 text-center">TRẠNG THÁI</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#f1f5f9] text-[#334155]">
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">NVL-STEEL-01</td>
                      <td class="p-2">Thép lá cán nguội 1.2mm</td>
                      <td class="p-2 text-right">1.200 kg</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">1.200 kg</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">ĐỦ 100%</span></td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">NVL-COPPER-04</td>
                      <td class="p-2">Dây đồng kỹ thuật phi 0.8</td>
                      <td class="p-2 text-right">450 kg</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">450 kg</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">ĐỦ 100%</span></td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">PK-BOLT-M6</td>
                      <td class="p-2">Bu-lông đai ốc M6x20 Inox</td>
                      <td class="p-2 text-right">5.000 con</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">5.000 con</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">ĐỦ 100%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-4 p-3 bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-between text-xs">
                <span class="text-[#64748b]">Bút toán tự động hạch toán:</span>
                <span class="font-mono font-bold text-[var(--cb-cobalt-600)]">Nợ TK 154 / Có TK 152 (Chuẩn VAS)</span>
              </div>

              <div class="mt-2 text-[10px] text-[#64748b] italic">
                * Mô phỏng bảng tính định mức BOM; cấu hình thực tế được tùy biến theo quy trình của từng nhà máy.
              </div>
            </div>

          </div>
        </div>
      {/if}

      <!-- TAB 3: MÁY PHUN & TINH DẦU LEMY FINEST -->
      {#if activeTab === 'scent'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-start">
            
            <!-- Left Overview & Details -->
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_THIẾT BỊ HƯƠNG THƠM & TINH DẦU / LEMYFINEST.COM</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                Sản phẩm tinh dầu & thiết bị máy phun Lemy Finest
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                CreditBird cung cấp cả 2 dòng sản phẩm chủ lực: <strong>Thiết bị máy phun khuếch tán</strong> (để bàn và kết nối điều hòa HVAC) cùng <strong>tinh dầu thiên nhiên</strong> có hồ sơ kiểm định COA và phân tích GC-MS theo từng mã sản phẩm.
              </p>

              <div class="p-3.5 bg-[#edf2ff] border border-[#c2d2fc] text-xs text-[#1e293b] leading-relaxed">
                <strong class="text-[var(--cb-cobalt-600)] block mb-1">Chính sách cung ứng & dịch vụ:</strong>
                • <strong>Mua trọn bộ thiết bị:</strong> Bảo hành chính hãng theo hợp đồng và từng gói thiết bị.<br />
                • <strong>Thuê máy & nạp dầu định kỳ:</strong> Khảo sát thể tích thực tế, lắp đặt và định kỳ kiểm tra máy, nạp thêm tinh dầu theo thỏa thuận.<br />
                • <strong>Cung cấp tinh dầu sỉ & lẻ:</strong> Can 500ml, 1.000ml hoặc chai 50ml, 100ml tùy chọn.
              </div>

              <div class="flex items-center gap-3 pt-2 flex-wrap">
                <button 
                  type="button" 
                  onclick={onOpenDemo}
                  class="btn-cta-primary !h-9 text-xs px-4 cursor-pointer"
                >
                  Nhận tư vấn thiết bị & tinh dầu
                </button>
                <a href="/solutions/scent-marketing" class="btn-cta-outline !h-9 text-xs px-4 text-[#334155]">
                  <span>Chi tiết giải pháp Scent</span>
                </a>
              </div>
            </div>

            <!-- Right: 2 Columns Product Cards (Hardware vs Essential Oils) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <!-- Product Card 1: Máy Phun Khuếch Tán -->
              <div class="p-1gu bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="font-mono text-[10px] text-[#64748b] font-bold uppercase">THIẾT BỊ MÁY PHUN</span>
                    <span class="px-2 py-0.5 bg-blue-50 text-blue-700 font-mono text-[9px] font-bold border border-blue-200">2 DÒNG MÁY</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#090e1f] mb-2">Máy khuếch tán công nghệ sương nano</h4>
                  
                  <div class="flex flex-col gap-2.5 text-xs text-[#475569] mb-4">
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">1. Dòng máy để bàn:</strong>
                      Phù hợp phòng làm việc, phòng họp, spa và gia đình. Diện tích sử dụng tham khảo: 30–80 m², tùy model và điều kiện không gian.
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">2. Dòng máy kết nối HVAC:</strong>
                      Phù hợp sảnh lớn, tòa nhà, showroom và khách sạn. Độ phủ tham khảo 500 - 5.000 m² (khảo sát lưu lượng gió và thể tích m³ thực tế để chọn công suất phù hợp).
                    </div>
                  </div>
                  <div class="text-[10px] text-[#64748b] italic mb-2">
                    * Thông số kỹ thuật cụ thể và cam kết độ phủ đối chiếu theo hồ sơ kiểm thử của từng thiết bị.
                  </div>
                </div>

                <a 
                  href="/solutions/scent-marketing" 
                  class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1 font-semibold pt-2 border-t border-[#e2e8f0]"
                >
                  <span>Xem thông số các dòng máy phun</span>
                  <ArrowRight size={12} class="shrink-0" />
                </a>
              </div>

              <!-- Product Card 2: Tinh Dầu Thiên Nhiên -->
              <div class="p-1gu bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="font-mono text-[10px] text-[#64748b] font-bold uppercase">TINH DẦU COA</span>
                    <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold border border-emerald-200">KIỂM ĐỊNH COA</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#090e1f] mb-2">Bộ sưu tập mùi hương chuẩn kiểm nghiệm</h4>
                  
                  <div class="flex flex-col gap-2 text-xs text-[#475569] mb-4">
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">Nốt hương phổ biến:</strong>
                      Cam ngọt (Sweet Orange), Sả chanh (Lemongrass), Trà trắng (White Tea), Trầm hương (Oud Wood), Lavender Pháp.
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">Kiểm định & an toàn:</strong>
                      Từng mã sản phẩm tinh dầu có phiếu kiểm nghiệm COA và phân tích GC-MS đối chiếu thành phần theo hồ sơ kỹ thuật riêng.
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">Quy cách đóng gói:</strong>
                      Chai 50ml, 100ml cho cá nhân & Can 500ml, 1.000ml cho máy công nghiệp.
                    </div>
                  </div>
                  <div class="text-[10px] text-[#64748b] italic mb-2">
                    * Hình ảnh thực tế và chứng chỉ COA được cung cấp đầy đủ khi tư vấn và bàn giao.
                  </div>
                </div>

                <a 
                  href="/solutions/scent-marketing" 
                  class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1 font-semibold pt-2 border-t border-[#e2e8f0]"
                >
                  <span>Xem danh mục bảng mùi hương</span>
                  <ArrowRight size={12} class="shrink-0" />
                </a>
              </div>

            </div>

          </div>
        </div>
      {/if}

    </div>
  </div>
</section>
