<script lang="ts">
  import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-svelte';

  type DayRecord = {
    id: string;
    label: string;
    ledgerHeight: number; // percentage
    externalHeight: number; // percentage
    driftHeight?: number; // percentage
    hasDrift: boolean;
    ledgerAmount: string;
    externalAmount: string;
    driftAmount?: string;
    details: string;
  };

  const days: DayRecord[] = [
    {
      id: 'd5',
      label: 'D-5',
      ledgerHeight: 55,
      externalHeight: 55,
      hasDrift: false,
      ledgerAmount: '8,420,000,000₫',
      externalAmount: '8,420,000,000₫',
      details: 'Đối soát sản xuất & kho WMS khớp 100%. Không phát sinh chênh lệch.'
    },
    {
      id: 'd4',
      label: 'D-4',
      ledgerHeight: 72,
      externalHeight: 72,
      hasDrift: false,
      ledgerAmount: '9,180,000,000₫',
      externalAmount: '9,180,000,000₫',
      details: 'Kiểm soát chấm công và bàn giao sprint cho 50+ kỹ sư IT phái cử.'
    },
    {
      id: 'd3',
      label: 'D-3',
      ledgerHeight: 48,
      externalHeight: 48,
      hasDrift: false,
      ledgerAmount: '7,950,000,000₫',
      externalAmount: '7,950,000,000₫',
      details: 'Mạng lưới 500+ máy phun tinh dầu HVAC hoạt động ổn định 24/7.'
    },
    {
      id: 'd2',
      label: 'D-2',
      ledgerHeight: 86,
      externalHeight: 62,
      driftHeight: 24,
      hasDrift: true,
      ledgerAmount: '11,450,000,000₫',
      externalAmount: '8,250,000,000₫',
      driftAmount: '3,200,000,000₫',
      details: 'Chênh lệch tạm thời tại kho nguyên liệu trung chuyển; tự động khoanh vùng và xử lý trong 2h.'
    },
    {
      id: 'd1',
      label: 'D-1',
      ledgerHeight: 64,
      externalHeight: 64,
      hasDrift: false,
      ledgerAmount: '10,240,000,000₫',
      externalAmount: '10,240,000,000₫',
      details: 'Lô tinh dầu thiên nhiên nhập khẩu đã hoàn tất kiểm định COA và nhập kho ERP.'
    },
    {
      id: 'd0',
      label: 'D-0',
      ledgerHeight: 78,
      externalHeight: 78,
      hasDrift: false,
      ledgerAmount: '13,340,000,000₫',
      externalAmount: '13,340,000,000₫',
      details: 'Toàn bộ hệ thống phần mềm, ERP và thiết bị Scent IoT streaming dữ liệu trực tiếp.'
    }
  ];

  let selectedDayIndex = $state(3); // Default to D-2 to showcase drift discovery
  let selected = $derived(days[selectedDayIndex]);
</script>

<section id="operations-audit" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0] scroll-mt-20">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- Left Visual Card -->
      <div class="lg:col-span-6">
        <div class="grid-ring bg-white p-6 sm:p-8 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          
          <!-- Top Telemetry Header -->
          <div class="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
            <div>
              <span class="badge-sm font-mono uppercase tracking-widest text-[#64748b]">Giám sát Vận hành</span>
              <div class="text-sm font-semibold text-[#090e1f] mt-0.5">Đối soát Số liệu ERP & Trạng thái Thiết bị</div>
            </div>
            
            {#if selected.hasDrift}
              <span class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#fee2e2] text-[#dc2626]">
                <AlertTriangle size={13} />
                <span>PHÁT HIỆN SAI LỆCH</span>
              </span>
            {:else}
              <span class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--cb-emerald-500)]/10 text-[var(--cb-emerald-600)]">
                <CheckCircle2 size={13} />
                <span>ĐỒNG BỘ 100%</span>
              </span>
            {/if}
          </div>

          <!-- Dual Bar Chart Visualizer -->
          <div class="flex flex-col gap-3">
            <div 
              class="flex items-end justify-between gap-2 sm:gap-4 px-2 py-4 border-b border-[#e2e8f0]"
              style="min-height: 220px;"
            >
              {#each days as day, idx}
                <button
                  type="button"
                  onclick={() => selectedDayIndex = idx}
                  class="flex-1 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  aria-label="Xem ngày {day.label}"
                >
                  <!-- Dual Bar Column Container -->
                  <div class="flex items-end gap-1 sm:gap-1.5 h-44 w-full max-w-[42px] justify-center">
                    
                    <!-- 1. Internal Ledger Bar -->
                    <div 
                      class="octi-grow w-3 sm:w-3.5 rounded-t transition-all duration-300 {selectedDayIndex === idx ? 'bg-[var(--cb-cobalt-500)] shadow-sm' : 'bg-[#0f172a] group-hover:bg-[var(--cb-cobalt-500)]'}"
                      style="height: {day.ledgerHeight}%; animation-delay: {idx * 60}ms;"
                    ></div>

                    <!-- 2. External Rail Bar -->
                    <div class="relative flex items-end h-full w-3 sm:w-3.5">
                      {#if day.hasDrift && day.driftHeight}
                        <!-- Matching baseline height -->
                        <div 
                          class="octi-grow w-full rounded-b transition-all"
                          style="height: {day.externalHeight}%; background-color: transparent; border: 1.5px solid #e8857f; animation-delay: {idx * 60 + 40}ms;"
                        ></div>

                        <!-- Coral Dashed Drift Gap Block -->
                        <div 
                          class="octi-grow absolute left-0 w-full rounded-t"
                          style="
                            bottom: {day.externalHeight}%;
                            height: {day.driftHeight}%;
                            background: repeating-linear-gradient(
                              -45deg,
                              #fee2e2,
                              #fee2e2 3px,
                              #ef4444 3px,
                              #ef4444 6px
                            );
                            border: 1px dashed #ef4444;
                            animation-delay: {idx * 60 + 80}ms;
                          "
                        ></div>
                      {:else}
                        <div 
                          class="octi-grow w-full rounded-t transition-all"
                          style="height: {day.externalHeight}%; background-color: transparent; border: 1.5px solid #3287ff; animation-delay: {idx * 60 + 40}ms;"
                        ></div>
                      {/if}
                    </div>

                  </div>

                  <!-- X-Axis Label -->
                  <span class="font-mono text-xs font-medium {selectedDayIndex === idx ? 'text-[var(--cb-cobalt-500)] font-bold' : 'text-[#64748b]'}">
                    {day.label}
                  </span>
                </button>
              {/each}
            </div>

            <!-- Legend Bar -->
            <div class="flex items-center justify-between font-mono text-[0.6875rem] text-[#64748b] pt-1 px-1">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded bg-[var(--cb-cobalt-500)]"></span>
                  <span>Kế hoạch & Định mức</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded border border-[#3287ff] bg-white"></span>
                  <span>Thực tế Thực thi</span>
                </div>
              </div>
              <div class="flex items-center gap-1.5 text-[#ef4444]">
                <span class="w-2.5 h-2.5 rounded border border-dashed border-[#ef4444] bg-[#fee2e2]"></span>
                <span>Sai lệch (Cảnh báo)</span>
              </div>
            </div>

          </div>

          <!-- Bottom Inspector Card for Selected Day -->
          <div class="bg-[#f8fafc] border border-[#e2e8f0] rounded p-4 font-mono text-xs">
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#e2e8f0]">
              <span class="text-[#090e1f] font-bold">CHI TIẾT NGÀY {selected.label}</span>
              <span class="{selected.hasDrift ? 'text-[#dc2626]' : 'text-[var(--cb-emerald-500)]'} font-semibold">
                {selected.hasDrift ? 'CHÊNH LỆCH: ' + selected.driftAmount : 'ĐỒNG BỘ TUYỆT ĐỐI'}
              </span>
            </div>
            <p class="text-[#475569] leading-relaxed mb-0">{selected.details}</p>
          </div>

        </div>
      </div>

      <!-- Right Column: Strategic Copy -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <span class="snap-badge self-start">_ĐỐI SOÁT & GIÁM SÁT/</span>
        
        <h2 class="h3 text-[#090e1f]">Kiểm soát Số liệu Thời gian Thực</h2>
        
        <p class="subheading-md text-[#090e1f]">
          Đồng bộ ERP, kho vận và tình trạng thiết bị không độ trễ.
        </p>
        
        <p class="p-md text-[#475569] leading-relaxed">
          CreditBird thiết lập cơ chế đối soát liên tục giữa số liệu đơn hàng, định mức sản xuất, tồn kho thực tế và tình trạng vận hành của các thiết bị máy phun tinh dầu thông minh. Bất kỳ sai lệch nào cũng được cảnh báo ngay lập tức.
        </p>

        <div class="flex flex-col gap-3.5 pt-2 font-mono text-xs text-[#334155]">
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Đối soát Kho & Tài chính Tức thì:</strong> Tự động khớp lệnh sản xuất với dữ liệu xuất nhập kho WMS và sổ cái kế toán VAS.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Khoanh vùng & Cảnh báo Tự động:</strong> Hệ thống tự động cách ly các giao dịch bất thường hoặc thiết bị IoT gặp sự cố để kỹ thuật can thiệp trong vòng 2 giờ.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Báo cáo Kiểm toán Minh bạch:</strong> Dễ dàng xuất báo cáo tiến độ dự án, báo cáo định mức tiêu hao tinh dầu và tài chính theo chuẩn mực kiểm toán.
            </div>
          </div>
        </div>

        <div class="pt-4">
          <a 
            href="#why" 
            class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cb-cobalt-500)] hover:underline font-medium"
          >
            <span>Tìm hiểu quy chuẩn giám sát của CreditBird</span>
            <span aria-hidden="true" class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        </div>

      </div>

    </div>
  </div>
</section>
