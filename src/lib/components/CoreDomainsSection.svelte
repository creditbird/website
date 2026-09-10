<script lang="ts">
  import { Code, Layers, Wind, ArrowRight, ExternalLink, Sparkles } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  const domains = $derived([
    {
      id: 'software',
      code: m.domain_software_code(),
      title: m.domain_1_title(),
      desc: m.domain_1_desc(),
      icon: Code,
      badge: 'SOFTWARE',
      badgeColor: 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]',
      features: [
        m.announcement_text(),
        m.nav_custom_software_desc(),
        m.nav_rustsale_desc(),
        m.nav_it_staffing_desc()
      ],
      primaryLink: localizeHref('/solutions/software'),
      primaryText: m.nav_custom_software(),
      secondaryLink: localizeHref('/products/rustsale'),
      secondaryText: m.nav_rustsale()
    },
    {
      id: 'erp',
      code: m.domain_erp_code(),
      title: m.domain_2_title(),
      desc: m.domain_2_desc(),
      icon: Layers,
      badge: 'KELVOT.COM',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      features: [
        m.domain_erp_feat_1(),
        m.domain_erp_feat_2(),
        m.domain_erp_feat_3(),
        m.domain_erp_feat_4()
      ],
      primaryLink: localizeHref('/solutions/erp'),
      primaryText: m.nav_erp(),
      secondaryLink: 'https://kelvot.com',
      secondaryText: m.domain_erp_website(),
      isExternal: true
    },
    {
      id: 'scent',
      code: m.domain_scent_code(),
      title: m.domain_3_title(),
      desc: m.domain_3_desc(),
      icon: Wind,
      badge: 'LEMYFINEST.COM',
      badgeColor: 'bg-[#f1f5f9] text-[#334155] border-[#cbd5e1]',
      features: [
        m.domain_scent_feat_1(),
        m.domain_scent_feat_2(),
        m.domain_scent_feat_3(),
        m.domain_scent_feat_4()
      ],
      primaryLink: localizeHref('/solutions/scent-marketing'),
      primaryText: m.nav_scent(),
      secondaryLink: 'https://www.lemyfinest.com',
      secondaryText: m.domain_scent_website(),
      isExternal: true
    }
  ]);
</script>

<section id="domains" class="relative theme-light bg-white text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header Card -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] self-start">
            _{m.domains_badge()}/
          </span>
          <h2 class="h3 text-[#090e1f]">
            {m.domains_title()}
          </h2>
          <p class="subheading-md text-[#475569]">
            {m.domains_subtitle()}
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
