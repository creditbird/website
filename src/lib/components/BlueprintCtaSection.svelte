<script lang="ts">
  import { ArrowRight, Phone } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';

  let {
    eyebrow = `_${m.cta_badge()}/`,
    title,
    description,
    primaryText = m.cta_btn_contact(),
    primaryAction,
    secondaryText = 'HOTLINE: +84 932 640 968',
    secondaryHref = 'tel:+84932640968',
    theme = 'dark'
  }: {
    eyebrow?: string;
    title: string;
    description: string;
    primaryText?: string;
    primaryAction?: () => void;
    secondaryText?: string;
    secondaryHref?: string;
    theme?: 'dark' | 'light';
  } = $props();
</script>

<section 
  class="relative {theme === 'dark' ? 'theme-cobalt-primary dark bg-background text-foreground' : 'theme-light bg-white text-[#090e1f]'}"
  style="--section-accent:var(--cobalt-accent, {theme === 'dark' ? '#60a5fa' : '#22439c'})"
>
  <div class="strict-grid relative z-2 py-(--grid-unit) no-bg-grid">
    <div class="flex flex-col gap-2gu">
      
      <div class="snap-card free-flow flex flex-col grid-ring {theme === 'dark' ? 'bg-background text-foreground' : 'bg-[#f8fafc] text-[#090e1f]'} px-1gu py-2gu sm:p-2gu items-center text-center">
        <div class="flex flex-col items-center gap-4 max-w-36gu">
          
          <span 
            class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 {theme === 'dark' ? 'text-eyebrow-foreground bg-eyebrow-background' : 'text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc]'}"
          >
            {eyebrow}
          </span>

          <h2 class="h3 font-bold tracking-tight {theme === 'dark' ? 'text-white' : 'text-[#090e1f]'} max-w-28gu">
            {title}
          </h2>

          <p class="p-md {theme === 'dark' ? 'text-muted-foreground' : 'text-[#475569]'} max-w-32gu leading-relaxed">
            {description}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 w-full sm:w-auto justify-center">
            {#if primaryAction}
              <button 
                type="button" 
                onclick={primaryAction}
                class="btn-cta-primary !h-11 !px-8 text-xs font-semibold cursor-pointer w-full sm:w-auto"
              >
                {primaryText}
              </button>
            {/if}

            {#if secondaryHref}
              <a 
                href={secondaryHref} 
                class="btn-cta-outline {theme === 'dark' ? 'text-white !border-[rgba(74,144,226,0.4)] hover:!bg-white/10' : 'text-[#090e1f]'} !h-11 !px-6 text-xs flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone size={14} class="shrink-0" />
                <span>{secondaryText}</span>
              </a>
            {/if}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
