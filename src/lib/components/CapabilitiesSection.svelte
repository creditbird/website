<script lang="ts">
  type Capability = {
    badge: string;
    description: string;
    tag: string;
    linkText?: string;
    linkUrl?: string;
  };

  const capabilities: Capability[] = [
    {
      badge: '_PHẦN MỀM MAY ĐO (MST 0315397327)/',
      description: 'Phát triển ứng dụng Web & Mobile theo quy trình đặc thù của doanh nghiệp. Kiến trúc Microservices (Rust, Go, Python, SvelteKit), bàn giao 100% full source code sạch.',
      tag: 'custom software',
      linkText: 'Chi tiết phần mềm may đo',
      linkUrl: '/solutions/software'
    },
    {
      badge: '_RUSTSALE CRM & OUTREACH PRO/',
      description: 'Hệ điều hành tăng trưởng All-in-One: Hộp thư hội tụ Omnichannel Zalo, WhatsApp, Facebook Messenger trên desktop viết bằng Rust Native. Xử lý tốc độ microsecond.',
      tag: 'desktop crm',
      linkText: 'Khám phá RustSale CRM',
      linkUrl: '/products/rustsale'
    },
    {
      badge: '_CHO THUÊ NHÂN SỰ IT DOANH NGHIỆP/',
      description: 'Cung ứng kỹ sư CNTT chất lượng cao Onsite hoặc Dedicated Team (Senior Backend, Frontend, DevOps, QA). Onboarding trong 48h, cam kết hợp đồng NDA pháp lý B2B.',
      tag: 'it staff augmentation',
      linkText: 'Mô hình phái cử IT',
      linkUrl: '/solutions/it-staffing'
    },
    {
      badge: '_KELVOT ERP (KELVOT.COM)/',
      description: 'Hệ thống ERP may đo chuyên sâu cho nhà máy sản xuất & phân phối: Quản trị định mức BOM đa cấp, quản lý kho thông minh WMS Barcode, kế toán tài chính VAS/IFRS.',
      tag: 'kelvot.com erp',
      linkText: 'Chi tiết Kelvot ERP',
      linkUrl: '/solutions/erp'
    },
    {
      badge: '_LEMY FINEST (LEMYFINEST.COM)/',
      description: 'Giải pháp tiếp thị mùi hương Scent Marketing: Máy khuếch tán Nano kết nối điều hòa trung tâm HVAC diện tích 500 - 5.000m² và 100% tinh dầu thiên nhiên chuẩn COA / GC-MS.',
      tag: 'scent marketing',
      linkText: 'Chi tiết Lemy Finest',
      linkUrl: '/solutions/scent-marketing'
    }
  ];
</script>

<section 
  id="capabilities" 
  class="relative theme-cobalt-primary dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _NĂNG LỰC CỐT LÕI/
          </span>
          <h2 class="h3 text-foreground">Hệ Sinh Thái Năng Lực Của CreditBird</h2>
          <p class="subheading-md text-foreground">Kết hợp chuẩn mực giữa dịch vụ kỹ thuật theo ĐKKD, sản phẩm công nghệ độc quyền và các thương hiệu chuyên sâu.</p>
          <p class="p-md text-muted-foreground">Từ phát triển phần mềm may đo, cung ứng kỹ sư IT cao cấp đến phần mềm RustSale CRM, hệ thống Kelvot ERP và giải pháp tiếp thị mùi hương Lemy Finest — mỗi năng lực đều được xây dựng chuyên sâu với cam kết chất lượng tuyệt đối.</p>
        </div>
      </div>

      <!-- 3x2 / 2x3 Capabilities Grid: Connected with .grid-ring Lines -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each capabilities as cap}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu justify-between">
            <div class="flex flex-col gap-3">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                {cap.badge}
              </span>
              <p class="p-md text-muted-foreground">
                {cap.description}
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 mt-3 border-t border-[rgba(255,255,255,0.06)]">
              <span class="badge-sm font-mono uppercase tracking-widest font-semibold" style="color:var(--section-accent)">
                {cap.tag}
              </span>
              {#if cap.linkText && cap.linkUrl}
                <a 
                  href={cap.linkUrl} 
                  class="group/link inline-flex items-center gap-1 p-sm font-medium hover:underline" 
                  style="color:var(--section-accent)"
                >
                  {cap.linkText}
                  <span aria-hidden="true" class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
