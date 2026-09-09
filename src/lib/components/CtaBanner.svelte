<script lang="ts">
  import { PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Check } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<section id="cta" class="relative theme-light bg-[#ffffff] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu no-bg-grid">
    <div class="flex flex-col gap-2gu">
      <div data-auto-snap="true" class="snap-card free-flow flex flex-col grid-ring bg-[#f8fafc] text-[#090e1f] p-1gu sm:p-2gu gap-1gu">
        
        <div class="flex flex-col gap-3">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _LIÊN HỆ TƯ VẤN/
          </span>
          <h2 class="h3 text-[#090e1f] max-w-3xl">
            Bạn đang cần giải pháp nào?
          </h2>
          <p class="p-lg text-[#475569] max-w-2xl leading-relaxed">
            Trao đổi trực tiếp với chuyên viên của CreditBird để nhận tư vấn may đo phần mềm, đăng ký trải nghiệm giải pháp Kelvot ERP hoặc tư vấn máy phun tinh dầu Lemy Finest.
          </p>
        </div>

        <!-- 3 Needs Badges -->
        <div class="flex flex-wrap gap-2 pt-1 text-xs">
          <span class="px-3 py-1.5 bg-white border border-[#cbd5e1] text-[#334155] flex items-center gap-1.5 font-medium">
            <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
            <span>1. Phần mềm may đo & RustSale CRM</span>
          </span>
          <span class="px-3 py-1.5 bg-white border border-[#cbd5e1] text-[#334155] flex items-center gap-1.5 font-medium">
            <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
            <span>2. Giải pháp quản trị Kelvot ERP</span>
          </span>
          <span class="px-3 py-1.5 bg-white border border-[#cbd5e1] text-[#334155] flex items-center gap-1.5 font-medium">
            <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
            <span>3. Máy phun & tinh dầu Lemy Finest</span>
          </span>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-1gu border-t border-[#e2e8f0]">
          <button 
            type="button"
            onclick={onOpenDemo}
            class="btn-cta-primary !h-11 !px-8 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Nhận tư vấn trực tuyến</span>
            <ArrowRight size={14} class="shrink-0" />
          </button>

          <a 
            href="tel:0932640968" 
            class="btn-cta-outline !h-11 !px-6 text-center flex items-center justify-center gap-2 font-mono text-xs font-semibold"
          >
            <PhoneCall size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
            <span>Hotline: 0932.640.968</span>
          </a>

          <a 
            href="https://zalo.me/0932640968" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-cta-outline !h-11 !px-5 text-center flex items-center justify-center gap-1.5 font-mono text-xs font-semibold text-[#0068ff]"
          >
            <MessageSquare size={14} class="shrink-0" />
            <span>Chat Zalo</span>
          </a>
        </div>

        <div class="flex items-center gap-2 text-xs text-[#64748b]">
          <ShieldCheck size={13} class="text-[var(--cb-emerald-500)] shrink-0" />
          <span class="font-mono text-[0.6875rem]">CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD • MST: 0315397327 • Cam kết bảo mật thông tin</span>
        </div>

      </div>
    </div>
  </div>
</section>
