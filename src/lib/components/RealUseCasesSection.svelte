<script lang="ts">
  import { Factory, ShoppingBag, Hotel, Building2, ArrowRight } from 'lucide-svelte';

  const cases = [
    {
      icon: Factory,
      title: 'Nhà máy sản xuất & xưởng gia công',
      problem: 'Khó kiểm soát định mức tiêu hao nguyên phụ liệu, sai lệch tồn kho giữa kế toán và thực tế.',
      solution: 'Ứng dụng Kelvot ERP quản lý định mức BOM đa cấp, xuất nhập kho quét mã Barcode và tự động hạch toán chi phí theo chuẩn VAS.',
      linkUrl: '/solutions/erp',
      linkText: 'Chi tiết giải pháp ERP sản xuất'
    },
    {
      icon: ShoppingBag,
      title: 'Doanh nghiệp thương mại & bán lẻ',
      problem: 'Tin nhắn tư vấn phân tán trên nhiều tài khoản Zalo và Fanpage khiến nhân viên dễ bỏ sót khách hàng.',
      solution: 'Trang bị phần mềm RustSale CRM gom Zalo, WhatsApp, Messenger về một màn hình máy tính tập trung, hỗ trợ gắn thẻ phân loại Lead, lưu lịch sử giao dịch và phân công nhân viên tư vấn kịp thời.',
      linkUrl: '/products/rustsale',
      linkText: 'Tìm hiểu RustSale CRM'
    },
    {
      icon: Hotel,
      title: 'Khách sạn, resort, spa & showroom',
      problem: 'Không gian sảnh và phòng dịch vụ thiếu điểm nhấn trải nghiệm, mùi ẩm mốc hoặc mùi điều hòa.',
      solution: 'Lắp đặt máy khuếch tán nano Lemy Finest kết nối hệ thống điều hòa HVAC cùng các dòng tinh dầu thiên nhiên có kiểm định COA theo hồ sơ sản phẩm.',
      linkUrl: '/solutions/scent-marketing',
      linkText: 'Xem giải pháp hương thơm HVAC'
    },
    {
      icon: Building2,
      title: 'Doanh nghiệp cần phần mềm nội bộ may đo',
      problem: 'Phần mềm hiện có chưa đáp ứng đầy đủ quy trình riêng của doanh nghiệp.',
      solution: 'CreditBird may đo ứng dụng Web/App theo đúng bài toán đặc thù, bàn giao 100% source code sạch và cung ứng nhân sự IT Senior hỗ trợ vận hành theo hợp đồng.',
      linkUrl: '/solutions/software',
      linkText: 'Dịch vụ may đo phần mềm'
    }
  ];
</script>

<section id="use-cases" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _LĨNH VỰC ỨNG DỤNG THỰC TẾ/
          </span>
          <h2 class="h3 text-[#090e1f]">
            Giải quyết đúng bài toán cho từng mô hình kinh doanh
          </h2>
          <p class="subheading-md text-[#475569]">
            Chúng tôi tập trung vào những bài toán thực tế mà doanh nghiệp tại Việt Nam thường xuyên đối mặt trong vận hành và bán hàng.
          </p>
        </div>
      </div>

      <!-- 4 Practical Use Cases Grid -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each cases as item}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-white p-1gu">
            <div>
              <div class="flex items-center gap-3 mb-1gu">
                <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                  <item.icon size={20} class="shrink-0" />
                </div>
                <h3 class="font-bold text-base text-[#090e1f]">{item.title}</h3>
              </div>

              <div class="flex flex-col gap-3 text-xs leading-relaxed mb-1gu">
                <div class="p-2.5 bg-[#fef2f2] border border-[#fecaca] text-[#991b1b]">
                  <strong>Vấn đề thường gặp:</strong> {item.problem}
                </div>
                <div class="p-2.5 bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534]">
                  <strong>Giải pháp của CreditBird:</strong> {item.solution}
                </div>
              </div>
            </div>

            <div class="pt-1gu border-t border-[#f1f5f9]">
              <a 
                href={item.linkUrl} 
                class="font-mono text-xs text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
              >
                <span>{item.linkText}</span>
                <ArrowRight size={13} class="shrink-0" />
              </a>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
