<script lang="ts">
  import { Code, Layers, Wind, ArrowRight, ExternalLink, Sparkles } from 'lucide-svelte';

  const domains = [
    {
      id: 'software',
      code: '_NHÓM 01 / CÔNG NGHỆ PHẦN MỀM',
      title: 'Phát triển phần mềm theo yêu cầu & RustSale CRM',
      desc: 'Thiết kế và lập trình Web, Mobile App, hệ thống quản trị chuyên biệt theo quy trình nghiệp vụ nội bộ của doanh nghiệp. Đi kèm sản phẩm phần mềm độc quyền RustSale CRM hội tụ đa kênh.',
      icon: Code,
      badge: 'PHẦN MỀM MAY ĐO',
      badgeColor: 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]',
      features: [
        'May đo phần mềm theo quy trình nghiệp vụ riêng, không rập khuôn',
        'Bàn giao 100% source code sạch, tài liệu kỹ thuật theo hợp đồng',
        'RustSale CRM: Gom Zalo, WhatsApp, FB Messenger vào 1 màn hình máy tính',
        'Cung ứng kỹ sư Senior Onsite hoặc Dedicated Squad khi cần bổ sung nhân sự'
      ],
      primaryLink: '/solutions/software',
      primaryText: 'Xem dịch vụ phần mềm',
      secondaryLink: '/products/rustsale',
      secondaryText: 'Khám phá RustSale CRM'
    },
    {
      id: 'erp',
      code: '_NHÓM 02 / QUẢN TRỊ DOANH NGHIỆP',
      title: 'Giải pháp quản trị Kelvot ERP cho nhà máy & kho bãi',
      desc: 'Nền tảng ERP chuyên sâu do CreditBird phát triển và triển khai cho các đơn vị sản xuất, chuỗi cung ứng và doanh nghiệp thương mại để số hóa toàn diện quy trình vận hành.',
      icon: Layers,
      badge: 'KELVOT.COM',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      features: [
        'Định mức nguyên vật liệu BOM đa cấp & hoạch định lệnh sản xuất (MO)',
        'Quản lý kho WMS Barcode/QR định vị chính xác vị trí ô kệ pallet',
        'Kế toán quản trị, sổ cái tổng hợp tuân thủ VAS (TT 200/133) và IFRS',
        'Kiểm soát giá thành sản phẩm và đối soát tồn kho thời gian thực'
      ],
      primaryLink: '/solutions/erp',
      primaryText: 'Xem giải pháp Kelvot ERP',
      secondaryLink: 'https://kelvot.com',
      secondaryText: 'Website Kelvot.com',
      isExternal: true
    },
    {
      id: 'scent',
      code: '_NHÓM 03 / HƯƠNG THƠM DOANH NGHIỆP',
      title: 'Tinh dầu thiên nhiên & máy phun khuếch tán Lemy Finest',
      desc: 'CreditBird cung cấp các dòng máy phun khuếch tán hương thơm cùng tinh dầu thiên nhiên có hồ sơ kiểm nghiệm COA/GC-MS theo từng mã sản phẩm qua thương hiệu Lemy Finest.',
      icon: Wind,
      badge: 'LEMYFINEST.COM',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      features: [
        'Máy khuếch tán để bàn cho văn phòng, phòng họp, spa và gia đình',
        'Hệ thống máy phun công nghiệp kết nối ống gió điều hòa trung tâm HVAC',
        'Tinh dầu có hồ sơ kiểm định COA và phân tích thành phần theo từng mã',
        'Chính sách linh hoạt: Mua đứt thiết bị, thuê máy hoặc dịch vụ nạp dầu định kỳ'
      ],
      primaryLink: '/solutions/scent-marketing',
      primaryText: 'Khám phá tinh dầu & máy phun',
      secondaryLink: 'https://www.lemyfinest.com',
      secondaryText: 'Website LemyFinest.com',
      isExternal: true
    }
  ];
</script>

<section id="domains" class="relative theme-light bg-white text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header Card -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] self-start">
            _3 LĨNH VỰC HOẠT ĐỘNG CHÍNH/
          </span>
          <h2 class="h3 text-[#090e1f]">
            Tập trung vào 3 nhu cầu cốt lõi của doanh nghiệp
          </h2>
          <p class="subheading-md text-[#475569]">
            Mỗi nhóm giải pháp đều có đội ngũ chuyên trách, quy trình thực thi rõ ràng và phương án bàn giao minh bạch.
          </p>
        </div>
      </div>

      <!-- Blueprint Modular Grid: Snapped to 32px coordinate grid lines -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each domains as item}
          <div 
            data-auto-snap="true" 
            class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-white text-[#090e1f] p-1gu transition-colors hover:bg-[#f8fafc] group"
          >
            <div>
              <!-- Tag & Badge -->
              <div class="flex items-center justify-between mb-1gu">
                <span class="font-mono text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
                  {item.code}
                </span>
                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded border {item.badgeColor}">
                  {item.badge}
                </span>
              </div>

              <!-- Title & Icon -->
              <div class="flex items-start gap-1gu mb-1gu">
                <div class="w-10 h-10 grid-ring bg-[#edf2ff] border border-[#c2d2fc] flex items-center justify-center text-[var(--cb-cobalt-600)] group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors shrink-0">
                  <item.icon size={20} class="shrink-0" />
                </div>
                <h3 class="text-base sm:text-lg font-bold text-[#090e1f] leading-snug">
                  {item.title}
                </h3>
              </div>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-1gu">
                {item.desc}
              </p>

              <!-- Features list -->
              <div class="flex flex-col gap-2 mb-1gu pt-1gu border-t border-[#f1f5f9]">
                {#each item.features as f}
                  <div class="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                    <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-azure-500)] mt-1.5 shrink-0"></span>
                    <span>{f}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Action Links at Bottom -->
            <div class="flex flex-col gap-2 pt-1gu border-t border-[#e2e8f0]">
              <a 
                href={item.primaryLink} 
                class="btn-cta-primary !h-9 text-xs px-3 flex items-center justify-between"
              >
                <span>{item.primaryText}</span>
                <ArrowRight size={13} class="shrink-0" />
              </a>

              {#if item.isExternal}
                <a 
                  href={item.secondaryLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-cta-outline !h-9 text-xs px-3 flex items-center justify-between text-[#475569] hover:text-[#090e1f]"
                >
                  <span>{item.secondaryText}</span>
                  <ExternalLink size={13} class="shrink-0" />
                </a>
              {:else}
                <a 
                  href={item.secondaryLink} 
                  class="btn-cta-outline !h-9 text-xs px-3 flex items-center justify-between text-[#475569] hover:text-[#090e1f]"
                >
                  <span>{item.secondaryText}</span>
                  <ArrowRight size={13} class="shrink-0" />
                </a>
              {/if}
            </div>

          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
