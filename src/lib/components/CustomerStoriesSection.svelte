<script lang="ts">
  const secondaryPartners = [
    { name: 'Shares', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Shares-light-1.svg', url: 'https://www.shares.io/fr?ref=creditbird' },
    { name: 'GetMomo', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/GetMomo-light-1.svg', url: 'https://getmomo.de/?ref=creditbird' },
    { name: 'Mews', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Mews-light.png', url: 'https://www.mews.com/fr' },
    { name: 'Bastion', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Bastion-light-2.svg', url: 'https://bastion.com/?ref=creditbird' },
    { name: 'Deriv', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Deriv-light.png', url: 'https://deriv.com/fr/eu/regulatory' },
    { name: 'Tembo', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Tembo-light.png', url: 'https://www.tembomoney.com/' },
    { name: 'Stables', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Stables-light.svg', url: 'https://stables.money/' }
  ];
</script>

<section 
  id="testimonials" 
  class="relative theme-emerald dark bg-background text-foreground scroll-mt-20" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    
    <!-- 3-Column Asymmetric Grid with .grid-ring Lines -->
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_repeat(2,calc(var(--grid-unit)*8))_calc(var(--grid-unit)*4)]">
      
      <!-- Card 1: Header (lg:col-span-2) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu gap-3 lg:col-span-2">
        <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
          _ĐÁNH GIÁ & KHÁCH HÀNG/
        </span>
        <h2 class="h3 text-foreground">Được tin cậy bởi các doanh nghiệp tiên phong</h2>
      </div>

      <!-- Card 2: Featured Hero Quote: Chuỗi Bán lẻ & Sản xuất (lg:col-span-2 lg:row-start-2 lg:row-span-2) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu lg:col-span-2 lg:row-start-2 lg:row-span-2 lg:h-auto lg:justify-center">
        <div class="flex flex-col gap-3">
          <div class="inline-flex items-center justify-center">
            <span class="sr-only">Tập đoàn Bán lẻ & Sản xuất Đa ngành</span>
            <img 
              alt="Đối tác tiêu biểu CreditBird" 
              loading="lazy" 
              width="400" 
              height="160" 
              class="h-24 md:h-32 w-auto max-w-full object-contain" 
              src="https://35g9o342ii9njma6.public.blob.vercel-storage.com/Liberis-light-1.svg"
            />
          </div>
          <blockquote class="subheading-md font-sans italic text-foreground text-center">
            “CreditBird đã tạo bước chuyển mình vượt bậc cho chúng tôi: hệ thống ERP may đo số hóa trọn vẹn chuỗi cung ứng 18 chi nhánh cùng đội ngũ kỹ sư IT tận tụy. Đồng thời, giải pháp máy phun tinh dầu tự động tại showroom đã nâng tầm trải nghiệm khách hàng.”
          </blockquote>
          <p class="p-sm text-muted-foreground text-center">Tập đoàn Bán lẻ & Sản xuất · Triển khai ERP, Nhân sự IT & Scent Marketing</p>
          <a 
            href="#cta" 
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-8 h-9 uppercase self-center shadow-sm transition-colors"
          >
            Khám phá câu chuyện hợp tác
          </a>
        </div>
      </div>

      <!-- Card 3: Khách hàng Phần mềm & Nhân sự IT (lg:col-start-3 lg:row-start-2) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu lg:h-auto lg:justify-center lg:col-start-3 lg:row-start-2">
        <div class="flex flex-col gap-3">
          <div class="inline-flex items-center justify-center">
            <span class="sr-only">Nền tảng Y tế & E-Commerce</span>
            <img 
              alt="Đối tác Nền tảng Y tế" 
              loading="lazy" 
              width="400" 
              height="160" 
              class="h-14 md:h-18 w-auto max-w-full object-contain" 
              src="https://35g9o342ii9njma6.public.blob.vercel-storage.com/Doctolib-light.svg"
            />
          </div>
          <blockquote class="p-md font-sans italic text-foreground">
            “CreditBird cung cấp dịch vụ gia công phần mềm chuẩn mực, đội ngũ IT onsite chuyên môn cao giúp chúng tôi rút ngắn 6 tháng phát triển và vận hành hệ thống đạt 99.99% uptime.”
          </blockquote>
          <p class="p-sm text-muted-foreground">Nền tảng Y tế & Dịch vụ · Phần mềm May đo & Nhân sự IT</p>
        </div>
      </div>

      <!-- Card 4: Khách hàng Khách sạn, Resort & Scent Branding (lg:col-start-3 lg:row-start-3) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu lg:h-auto lg:justify-center lg:col-start-3 lg:row-start-3">
        <div class="flex flex-col gap-3">
          <div class="inline-flex items-center justify-center">
            <span class="sr-only">Hệ thống Khách sạn & Spa Cao cấp</span>
            <img 
              alt="Hệ thống Khách sạn Cao cấp" 
              loading="lazy" 
              width="400" 
              height="160" 
              class="h-14 md:h-18 w-auto max-w-full object-contain" 
              src="https://35g9o342ii9njma6.public.blob.vercel-storage.com/Payflip-light-1.svg"
            />
          </div>
          <blockquote class="p-md font-sans italic text-foreground">
            “Hệ thống máy phun tinh dầu công nghiệp tích hợp HVAC và tinh dầu thiên nhiên nguyên chất từ CreditBird tạo dấu ấn hương thơm độc bản, nâng cao 35% tỷ lệ hài lòng của khách lưu trú.”
          </blockquote>
          <p class="p-sm text-muted-foreground">Chuỗi Resort & Khách sạn 5 sao · Máy Phun Tinh Dầu HVAC & COA Scent</p>
        </div>
      </div>

      <!-- Card 5: Bottom Partner Logo Strip (lg:col-span-3 lg:row-start-4) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu items-center lg:col-span-3 lg:row-start-4 lg:h-auto">
        <div class="flex flex-wrap items-center justify-center gap-x-1gu gap-y-1gu">
          {#each secondaryPartners as partner}
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-center transition-opacity hover:opacity-100 opacity-80 px-2"
              title={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                class="h-10 md:h-12 w-auto max-w-[120px] object-contain"
                loading="lazy"
              />
            </a>
          {/each}
        </div>
      </div>

    </div>

  </div>
</section>
