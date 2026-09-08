<script lang="ts">
  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<section id="cta" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid-ring bg-[#f8fafc] p-8 sm:p-14 rounded-lg flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <span class="snap-badge self-start">_BẮT ĐẦU NGAY/</span>
        <h2 class="h3 text-[#090e1f] max-w-2xl">Đồng hành cùng CreditBird nâng tầm hiệu quả vận hành</h2>
        <p class="p-lg text-[#475569] max-w-2xl">
          Tối ưu chi phí và bứt phá tăng trưởng với phần mềm may đo, ERP doanh nghiệp, nhân sự IT chuyên nghiệp và hệ thống máy phun tinh dầu thông minh cho không gian làm việc.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
        <button 
          type="button"
          onclick={onOpenDemo}
          class="btn-cta-primary !h-10 !px-8 cursor-pointer"
        >
          Đăng ký tư vấn giải pháp
        </button>
        <a 
          href="tel:0932640968" 
          class="btn-cta-outline h-10 px-8 text-center flex items-center justify-center"
        >
          Hotline: 0932.640.968
        </a>
      </div>
    </div>
  </div>
</section>
