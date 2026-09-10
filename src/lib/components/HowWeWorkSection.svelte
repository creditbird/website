<script lang="ts">
  import { Code, Wind, ArrowRight } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  const softwareSteps = $derived([
    {
      num: '01',
      title: m.workflow_tech_step1_title(),
      desc: m.workflow_tech_step1_desc()
    },
    {
      num: '02',
      title: m.workflow_tech_step2_title(),
      desc: m.workflow_tech_step2_desc()
    },
    {
      num: '03',
      title: m.workflow_tech_step3_title(),
      desc: m.workflow_tech_step3_desc()
    },
    {
      num: '04',
      title: m.workflow_tech_step4_title(),
      desc: m.workflow_tech_step4_desc()
    }
  ]);

  const scentSteps = $derived([
    {
      num: '01',
      title: m.workflow_scent_step1_title(),
      desc: m.workflow_scent_step1_desc()
    },
    {
      num: '02',
      title: m.workflow_scent_step2_title(),
      desc: m.workflow_scent_step2_desc()
    },
    {
      num: '03',
      title: m.workflow_scent_step3_title(),
      desc: m.workflow_scent_step3_desc()
    },
    {
      num: '04',
      title: m.workflow_scent_step4_title(),
      desc: m.workflow_scent_step4_desc()
    }
  ]);
</script>

<section id="workflow" class="relative theme-light bg-white text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">

      <!-- Top Section Header -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] self-start">
            _{m.how_badge()}/
          </span>
          <h2 class="h3 text-[#090e1f]">
            {m.how_title()}
          </h2>
          <p class="subheading-md text-[#475569]">
            {m.how_subtitle()}
          </p>
        </div>
      </div>

      <!-- 2 Columns: Software Workflow vs Scent Workflow -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">

        <!-- Workflow Column 1: Phần mềm & Kelvot ERP -->
        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
          <div>
            <div class="flex items-center gap-3 mb-1gu pb-1gu border-b border-[#e2e8f0]">
              <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                <Code size={20} class="shrink-0" />
              </div>
              <div>
                <span class="font-mono text-[10px] text-[var(--cb-cobalt-600)] uppercase font-bold tracking-wider block">{m.workflow_tech_tag()}</span>
                <h3 class="text-base sm:text-lg font-bold text-[#090e1f]">{m.workflow_tech_title()}</h3>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              {#each softwareSteps as step}
                <div class="flex items-start gap-3.5">
                  <span class="font-mono text-xs font-bold px-2 py-1 bg-white border border-[#cbd5e1] text-[var(--cb-cobalt-600)] shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-[#090e1f] mb-1">{step.title}</h4>
                    <p class="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-1gu pt-1gu border-t border-[#e2e8f0]">
            <a
              href={localizeHref('/solutions/software')}
              class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
            >
              <span>{m.workflow_tech_link()}</span>
              <ArrowRight size={13} class="shrink-0" />
            </a>
          </div>
        </div>

        <!-- Workflow Column 2: Tinh Dầu & Máy Phun Lemy Finest -->
        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-[#f8fafc] p-1gu sm:p-2gu">
          <div>
            <div class="flex items-center gap-3 mb-1gu pb-1gu border-b border-[#e2e8f0]">
              <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                <Wind size={20} class="shrink-0" />
              </div>
              <div>
                <span class="font-mono text-[10px] text-[var(--cb-cobalt-600)] uppercase font-bold tracking-wider block">{m.workflow_scent_tag()}</span>
                <h3 class="text-base sm:text-lg font-bold text-[#090e1f]">{m.workflow_scent_title()}</h3>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              {#each scentSteps as step}
                <div class="flex items-start gap-3.5">
                  <span class="font-mono text-xs font-bold px-2 py-1 bg-white border border-[#cbd5e1] text-[var(--cb-cobalt-600)] shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-[#090e1f] mb-1">{step.title}</h4>
                    <p class="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-1gu pt-1gu border-t border-[#e2e8f0]">
            <a
              href={localizeHref('/solutions/scent-marketing')}
              class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
            >
              <span>{m.workflow_scent_link()}</span>
              <ArrowRight size={13} class="shrink-0" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
