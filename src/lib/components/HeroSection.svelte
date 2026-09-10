<script lang="ts">
  import { 
    Code, 
    Layers, 
    Wind, 
    ArrowRight, 
    PhoneCall 
  } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  const options = $derived([
    {
      id: 'software',
      num: '01',
      title: m.domain_1_title(),
      desc: m.domain_1_desc(),
      icon: Code,
      linkUrl: localizeHref('/solutions/software'),
      linkText: m.nav_custom_software()
    },
    {
      id: 'erp',
      num: '02',
      title: m.domain_2_title(),
      desc: m.domain_2_desc(),
      icon: Layers,
      linkUrl: localizeHref('/solutions/erp'),
      linkText: m.nav_erp()
    },
    {
      id: 'scent',
      num: '03',
      title: m.domain_3_title(),
      desc: m.domain_3_desc(),
      icon: Wind,
      linkUrl: localizeHref('/solutions/scent-marketing'),
      linkText: m.nav_scent()
    }
  ]);
</script>

<section id="hero" class="relative theme-light bg-white text-[#090e1f] overflow-hidden">
  <div class="strict-grid relative z-2 py-1gu sm:py-2gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Introductory Header Card -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu items-center text-center">
        <div class="flex flex-col items-center gap-4 max-w-40gu">
          
          <!-- Top Eyebrow Tag -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#cbd5e1] bg-[#f8fafc] shadow-xs">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)] animate-pulse"></span>
            <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
              _{m.hero_eyebrow()}/
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="hero-title text-[#090e1f] max-w-4xl text-3xl sm:text-5xl font-bold tracking-tight">
            {m.hero_title_line1()} <br class="hidden sm:inline" />{m.hero_title_line2()}
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg md:text-xl leading-relaxed text-[#475569] max-w-3xl font-normal">
            {m.hero_subtitle()}
          </p>

          <!-- CTAs -->
          <div class="flex items-center justify-center gap-3 flex-wrap pt-2">
            <button 
              type="button" 
              onclick={onOpenDemo}
              class="btn-cta-primary min-w-[160px] cursor-pointer"
            >
              {m.hero_cta_primary()}
            </button>

            <a href="#domains" class="btn-cta-outline min-w-[170px]">
              {m.hero_cta_secondary()}
            </a>

            <a 
              href="tel:0932640968" 
              class="inline-flex items-center justify-center gap-1.5 px-4 h-10 rounded font-mono text-xs font-semibold bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] hover:bg-[var(--cb-cobalt-500)] hover:text-white transition-all shadow-xs"
            >
              <PhoneCall size={13} class="shrink-0" />
              <span>0932.640.968</span>
            </a>
          </div>

        </div>
      </div>

      <!-- 3 Choices Grid: Ba lựa chọn rõ ràng, ngắn gọn, không lặp lại Sprint/CI/CD -->
      <div class="free-flow grid-row [--_cols-md:3] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each options as opt}
          <div 
            data-auto-snap="true" 
            class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-[#f8fafc] text-[#090e1f] p-1gu transition-colors hover:bg-white group"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-[var(--cb-cobalt-600)] bg-white px-2 py-0.5 border border-[#c2d2fc]">
                  {m.hero_option_label()} {opt.num}
                </span>
                <div class="w-8 h-8 grid-ring bg-white text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <opt.icon size={16} class="shrink-0" />
                </div>
              </div>

              <h2 class="text-base sm:text-lg font-bold text-[#090e1f] mb-2 leading-snug">
                {opt.title}
              </h2>

              <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                {opt.desc}
              </p>
            </div>

            <div class="pt-3 border-t border-[#e2e8f0] flex items-center justify-between">
              <a 
                href={opt.linkUrl} 
                class="font-mono text-xs text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>{opt.linkText}</span>
                <ArrowRight size={13} class="shrink-0" />
              </a>

              <button 
                type="button" 
                onclick={onOpenDemo}
                class="text-[11px] font-mono text-[#64748b] hover:text-[#090e1f] cursor-pointer"
              >
                {m.footer_btn_consultation()} →
              </button>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
