<script lang="ts">
  import { ShieldCheck, Calendar, FileText, CheckCircle2, ArrowRight } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';

  const commitments = $derived([
    {
      metric: '2018',
      title: m.footer_founded(),
      desc: m.about_subtitle()
    },
    {
      metric: m.hero_metric_code_val(),
      title: m.hero_metric_code(),
      desc: m.announcement_text()
    },
    {
      metric: 'COA / GC-MS',
      title: m.domain_3_title(),
      desc: m.domain_3_desc()
    },
    {
      metric: 'B2B NDA',
      title: m.nav_terms(),
      desc: m.nav_it_staffing_desc()
    }
  ]);
</script>

<section id="about" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Company Identity & Narrative -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _{m.about_badge()}/
          </span>
          <h2 class="h3 text-[#090e1f]">
            {m.about_title()}
          </h2>
          <p class="subheading-md text-[#334155]">
            {m.about_subtitle()}
          </p>
          <div class="p-md text-[#475569] flex flex-col gap-3 leading-relaxed mt-1">
            <p>
              {m.hero_subtitle()}
            </p>
          </div>
        </div>
      </div>

      <!-- 4 Fact-Based Commitment Cards: Abutting Formance Telemetry cells (gap: 0, 12 GU each) -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:4] !gap-0">
        {#each commitments as c}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu justify-center min-h-[calc(var(--grid-unit)*6)]">
            <span class="font-mono text-xl sm:text-2xl font-bold text-[var(--cb-cobalt-600)] mb-1">{c.metric}</span>
            <span class="font-semibold text-sm text-[#090e1f] mb-1.5">{c.title}</span>
            <p class="text-xs text-[#64748b] leading-relaxed">{c.desc}</p>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
