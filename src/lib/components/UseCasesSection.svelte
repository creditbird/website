<script lang="ts">
  import { ArrowRight, ExternalLink } from 'lucide-svelte';

  type CaseLink = {
    label: string;
    href: string;
    external?: boolean;
  };

  type UseCase = {
    title: string;
    links: CaseLink[];
  };

  const cases: UseCase[] = [
    {
      title: 'Sản xuất & Chuỗi cung ứng',
      links: [
        { label: 'Kelvot ERP: Quản lý BOM & Kế hoạch sản xuất', href: '/solutions/erp' },
        { label: 'Quản lý kho nguyên vật liệu & thành phẩm WMS', href: '/solutions/erp' },
        { label: 'Tính giá thành công đoạn tự động theo VAS/IFRS', href: '/solutions/erp' },
        { label: 'Khử mùi phân xưởng & tạo hương công nghiệp HVAC', href: '/solutions/scent-marketing' }
      ]
    },
    {
      title: 'Kinh doanh Đa kênh & CRM',
      links: [
        { label: 'RustSale CRM: Hộp thư Zalo, WhatsApp, FB Messenger', href: '/products/rustsale' },
        { label: 'Tốc độ phản hồi microsecond & Local-First Keyring', href: '/products/rustsale' },
        { label: 'Cẩm nang hướng dẫn sử dụng toàn tập trên Notion', href: 'https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39', external: true },
        { label: 'Mã nguồn mở & tài nguyên kỹ thuật trên GitHub', href: 'https://github.com/creditbird', external: true }
      ]
    },
    {
      title: 'Chuỗi Bán lẻ & E-Commerce',
      links: [
        { label: 'Viết phần mềm bán hàng Omnichannel & POS may đo', href: '/solutions/software' },
        { label: 'Tích hợp cổng thanh toán & đối soát tự động', href: '/solutions/software' },
        { label: 'Scent Marketing nhận diện tại chuỗi cửa hàng', href: '/solutions/scent-marketing' },
        { label: 'Máy khuếch tán tinh dầu showroom tự động', href: '/solutions/scent-marketing' }
      ]
    },
    {
      title: 'Khách sạn, Resort & Spa',
      links: [
        { label: 'Lemy Finest: Hệ thống máy phun tinh dầu HVAC trung tâm', href: '/solutions/scent-marketing' },
        { label: '100% Tinh dầu thiên nhiên nguyên chất chuẩn COA / GC-MS', href: '/solutions/scent-marketing' },
        { label: 'Khuếch tán không gian rộng từ 500m² - 5.000m²', href: '/solutions/scent-marketing' },
        { label: 'Website chính thức thương hiệu Lemy Finest', href: 'https://www.lemyfinest.com', external: true }
      ]
    },
    {
      title: 'Doanh nghiệp Công nghệ & Startup',
      links: [
        { label: 'Cho thuê nhân sự IT chất lượng cao (Onsite & Remote)', href: '/solutions/it-staffing' },
        { label: 'Cung ứng Senior Backend, Frontend, DevOps trong 48h', href: '/solutions/it-staffing' },
        { label: 'May đo phần mềm Microservices, chuyển giao 100% code', href: '/solutions/software' },
        { label: 'Chính sách thử việc 14 ngày & ký kết bảo mật NDA', href: '/solutions/it-staffing' }
      ]
    },
    {
      title: 'Tài chính, Kế toán & Vận hành',
      links: [
        { label: 'Kelvot ERP: Kế toán chuẩn Thông tư 200 / 133 / VAS', href: '/solutions/erp' },
        { label: 'Website chính thức phân hệ quản trị Kelvot ERP', href: 'https://kelvot.com', external: true },
        { label: 'Đối soát số liệu thời gian thực và Audit Log an toàn', href: '/solutions/software' },
        { label: 'Chính sách bảo hành và cam kết SLA trọn gói', href: '/warranty' }
      ]
    }
  ];
</script>

<section id="use-cases" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    
    <div class="flex flex-col items-center gap-3 text-center mb-16">
      <span class="snap-badge">_LĨNH VỰC ỨNG DỤNG/</span>
      <h2 class="h3 text-[#090e1f] max-w-2xl">Một hệ sinh thái. Phục vụ mọi mô hình doanh nghiệp.</h2>
      <p class="p-lg text-[#475569] max-w-xl">
        Từ chuyển đổi số vận hành với phần mềm may đo, RustSale CRM, Kelvot ERP, đội ngũ kỹ sư IT chuyên nghiệp đến kiến tạo trải nghiệm giác quan bằng giải pháp máy phun tinh dầu Lemy Finest.
      </p>
    </div>

    <!-- 6-Card Grid (Formance Parity) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cases as c}
        <div class="grid-ring bg-white p-6 sm:p-7 rounded-lg flex flex-col justify-between transition-all hover:border-[var(--cb-cobalt-500)] hover:shadow-sm">
          <div class="flex flex-col gap-4">
            <span class="badge-sm font-mono uppercase tracking-widest text-[#64748b]">_ỨNG DỤNG/</span>
            <h3 class="h5 text-[#090e1f]">{c.title}</h3>
            
            <div class="flex flex-col gap-2.5 pt-2 border-t border-[#e2e8f0]">
              {#each c.links as link}
                <a 
                  href={link.href} 
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  class="group/link inline-flex items-center justify-between text-sm font-medium text-[#475569] hover:text-[var(--cb-cobalt-600)] transition-colors py-1"
                >
                  <span class="pr-2">{link.label}</span>
                  {#if link.external}
                    <ExternalLink size={13} class="opacity-40 group-hover/link:opacity-100 transition-all text-[var(--cb-cobalt-500)] shrink-0" />
                  {:else}
                    <ArrowRight size={14} class="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-[var(--cb-cobalt-500)] shrink-0" />
                  {/if}
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
