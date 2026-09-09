<script lang="ts">
  import { ArrowRight, Code, Sparkles, Users, Layers, Wind, ExternalLink } from 'lucide-svelte';

  const pillars = [
    {
      code: '_CORE SERVICES (MST 0315397327)/',
      title: 'Viết Phần Mềm May Đo',
      badge: 'NGÀNH CHÍNH',
      badgeColor: 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]',
      desc: 'Phát triển Web, Mobile App, Microservices theo đúng quy trình nghiệp vụ đặc thù. Bàn giao 100% mã nguồn sạch, cam kết không vendor lock-in.',
      linkText: 'Chi tiết dịch vụ phần mềm',
      linkUrl: '/solutions/software',
      icon: Code,
      external: false
    },
    {
      code: '_PROPRIETARY SOFTWARE / CRM/',
      title: 'RustSale CRM & Outreach Pro',
      badge: 'BẢN QUYỀN',
      badgeColor: 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]',
      desc: 'Hệ điều hành tăng trưởng All-in-One: Hộp thư hội tụ Omnichannel Zalo, WhatsApp, Facebook Messenger trên 1 màn hình. Tốc độ microsecond, cẩm nang Notion.',
      linkText: 'Khám phá RustSale CRM',
      linkUrl: '/products/rustsale',
      icon: Sparkles,
      external: false
    },
    {
      code: '_CORE SERVICES (MST 0315397327)/',
      title: 'Cho Thuê Nhân Sự IT Doanh Nghiệp',
      badge: 'NGÀNH CHÍNH',
      badgeColor: 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]',
      desc: 'Cung ứng kỹ sư Senior Onsite hoặc Dedicated Remote Team (Rust, Go, Python, SvelteKit, DevOps). Onboard thần tốc trong 48h, hợp đồng NDA pháp lý B2B.',
      linkText: 'Xem mô hình phái cử IT',
      linkUrl: '/solutions/it-staffing',
      icon: Users,
      external: false
    },
    {
      code: '_ECOSYSTEM BRAND / KELVOT.COM/',
      title: 'Kelvot ERP — Sản Xuất, Kho & Kế Toán',
      badge: 'kelvot.com',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      desc: 'Thương hiệu ERP độc lập cho nhà máy & chuỗi phân phối: Định mức nguyên liệu BOM đa cấp, quản lý kho WMS Barcode, kế toán quản trị VAS & IFRS.',
      linkText: 'Xem giải pháp Kelvot ERP',
      linkUrl: '/solutions/erp',
      icon: Layers,
      external: false
    },
    {
      code: '_ECOSYSTEM BRAND / LEMYFINEST.COM/',
      title: 'Lemy Finest — Scent Marketing & Tinh Dầu',
      badge: 'lemyfinest.com',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      desc: 'Thương hiệu tinh dầu độc lập: Máy phun khuếch tán Nano kết nối điều hòa trung tâm HVAC diện tích 500 - 5.000m² và 100% tinh dầu thiên nhiên chuẩn COA / GC-MS.',
      linkText: 'Khám phá Lemy Finest',
      linkUrl: '/solutions/scent-marketing',
      icon: Wind,
      external: false
    }
  ];
</script>

<section id="why" class="py-20 border-b border-[#e2e8f0] bg-white">
  <div class="strict-grid-container">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="snap-badge mb-3">_5 TRỤ CỘT KINH DOANH/</span>
      <h2 class="section-title text-[#090e1f]">Hệ Sinh Thái Toàn Diện Của CreditBird</h2>
      <p class="text-[#475569] mt-3 text-base sm:text-lg">
        Tổ chức rõ ràng giữa ngành nghề kinh doanh cốt lõi đã đăng ký thành lập từ 2018 (MST: 0315397327), sản phẩm phần mềm độc quyền và các thương hiệu chuyên biệt trong hệ sinh thái.
      </p>
    </div>

    <!-- 5 Pillars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each pillars as p, idx}
        <div class="grid-ring p-7 bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] rounded-lg transition-all flex flex-col justify-between group shadow-xs hover:shadow-md {idx === 0 || idx === 1 ? 'md:col-span-1 lg:col-span-1' : ''}">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">{p.code}</span>
              <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded border {p.badgeColor}">{p.badge}</span>
            </div>

            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-md bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[var(--cb-cobalt-600)] group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors shrink-0">
                <p.icon size={20} />
              </div>
              <h3 class="text-lg font-bold text-[#090e1f] leading-snug">{p.title}</h3>
            </div>

            <p class="text-[#475569] text-sm leading-relaxed mb-6">
              {p.desc}
            </p>
          </div>

          <a 
            href={p.linkUrl} 
            class="font-mono text-xs text-[var(--cb-cobalt-600)] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-medium pt-3 border-t border-[#f1f5f9]"
          >
            <span>{p.linkText}</span>
            <ArrowRight size={13} />
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
