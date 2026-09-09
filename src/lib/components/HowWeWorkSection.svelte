<script lang="ts">
  import { Code, Wind, ArrowRight, CheckCircle2 } from 'lucide-svelte';

  const softwareSteps = [
    {
      num: '01',
      title: 'Khảo sát & lập kiến trúc',
      desc: 'Phân tích chi tiết quy trình nghiệp vụ hiện tại của doanh nghiệp, tư vấn giải pháp kỹ thuật, lập bản đặc tả chức năng và ký kết hợp đồng B2B kèm cam kết bảo mật NDA.'
    },
    {
      num: '02',
      title: 'Thiết kế & phát triển theo từng giai đoạn',
      desc: 'Chia dự án thành các giai đoạn ngắn, kiểm thử thường xuyên và cập nhật tiến độ để khách hàng xem, góp ý từng tính năng.'
    },
    {
      num: '03',
      title: 'Kiểm thử nghiệm thu & hướng dẫn sử dụng',
      desc: 'Cùng khách hàng kiểm thử theo yêu cầu đã thống nhất, hướng dẫn sử dụng và chuyển dữ liệu sang hệ thống mới theo kế hoạch triển khai.'
    },
    {
      num: '04',
      title: 'Bàn giao mã nguồn & bảo hành kỹ thuật',
      desc: 'Bàn giao đầy đủ quyền sở hữu kho mã nguồn (cho các dự án phát triển may đo), tài liệu kỹ thuật và chính sách bảo hành 12 - 24 tháng theo phạm vi hợp đồng.'
    }
  ];

  const scentSteps = [
    {
      num: '01',
      title: 'Khảo sát thể tích & luồng gió',
      desc: 'Đo đạc diện tích mặt sàn (m²) và chiều cao trần (m). Khảo sát cấu trúc luồng gió tự nhiên hoặc hệ thống ống gió điều hòa trung tâm HVAC.'
    },
    {
      num: '02',
      title: 'Thử mẫu hương & chọn thiết bị',
      desc: 'Mang mẫu trực tiếp các dòng tinh dầu thiên nhiên có kiểm định COA cho khách hàng trải nghiệm thực tế; lựa chọn dòng máy để bàn hoặc máy công nghiệp phù hợp.'
    },
    {
      num: '03',
      title: 'Lắp đặt & cài đặt phun tự động',
      desc: 'Kỹ thuật viên lắp đặt an toàn, thẩm mỹ. Cài đặt hẹn giờ bật/tắt và điều chỉnh nồng độ phun sương nano theo khung giờ hoạt động của doanh nghiệp.'
    },
    {
      num: '04',
      title: 'Bảo dưỡng & nạp dầu định kỳ',
      desc: 'Dịch vụ chăm sóc định kỳ: vệ sinh béc phun nano, kiểm tra máy và châm thêm tinh dầu tận nơi theo phạm vi hợp đồng hoặc gói dịch vụ khách hàng lựa chọn.'
    }
  ];
</script>

<section id="workflow" class="relative theme-light bg-white text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _CÁCH CREDITBIRD LÀM VIỆC/
          </span>
          <h2 class="h3 text-[#090e1f]">
            Quy trình triển khai rõ ràng cho từng nhóm nhu cầu
          </h2>
          <p class="subheading-md text-[#475569]">
            Phân biệt minh bạch giữa quy trình phát triển phần mềm/ERP và quy trình cung cấp, lắp đặt thiết bị máy phun tinh dầu.
          </p>
        </div>
      </div>

      <!-- 2 Columns: Software Workflow vs Scent Workflow -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        
        <!-- Workflow Column 1: Phần mềm & Kelvot ERP -->
        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
          <div>
            <div class="flex items-center gap-3 mb-1gu pb-1gu border-b border-[#e2e8f0]">
              <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                <Code size={20} class="shrink-0" />
              </div>
              <div>
                <span class="font-mono text-[10px] text-[var(--cb-cobalt-600)] uppercase font-bold tracking-wider block">QUY TRÌNH KỸ THUẬT</span>
                <h3 class="text-base sm:text-lg font-bold text-[#090e1f]">1. Phát triển phần mềm & Kelvot ERP</h3>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              {#each softwareSteps as step}
                <div class="flex items-start gap-3.5">
                  <span class="font-mono text-xs font-bold px-2 py-1 bg-white border border-[#cbd5e1] text-[var(--cb-cobalt-600)] shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-[#090e1f] mb-1">{step.title}</h4>
                    <p class="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-1gu pt-1gu border-t border-[#e2e8f0]">
            <a 
              href="/solutions/software" 
              class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
            >
              <span>Xem chi tiết cam kết dịch vụ phần mềm</span>
              <ArrowRight size={13} class="shrink-0" />
            </a>
          </div>
        </div>

        <!-- Workflow Column 2: Tinh Dầu & Máy Phun Lemy Finest -->
        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
          <div>
            <div class="flex items-center gap-3 mb-1gu pb-1gu border-b border-[#e2e8f0]">
              <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                <Wind size={20} class="shrink-0" />
              </div>
              <div>
                <span class="font-mono text-[10px] text-[var(--cb-cobalt-600)] uppercase font-bold tracking-wider block">QUY TRÌNH HƯƠNG THƠM</span>
                <h3 class="text-base sm:text-lg font-bold text-[#090e1f]">2. Tư vấn & lắp đặt máy phun Lemy Finest</h3>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              {#each scentSteps as step}
                <div class="flex items-start gap-3.5">
                  <span class="font-mono text-xs font-bold px-2 py-1 bg-white border border-[#cbd5e1] text-[var(--cb-cobalt-600)] shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-[#090e1f] mb-1">{step.title}</h4>
                    <p class="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-1gu pt-1gu border-t border-[#e2e8f0]">
            <a 
              href="/solutions/scent-marketing" 
              class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
            >
              <span>Xem bảng khảo sát & dịch vụ nạp tinh dầu</span>
              <ArrowRight size={13} class="shrink-0" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
