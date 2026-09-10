<script lang="ts">
  import { Factory, ShoppingBag, Hotel, Building2, ArrowRight } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  const cases = $derived([
    {
      icon: Factory,
      title: m.usecase_1_title(),
      problem: m.usecase_1_problem(),
      solution: m.usecase_1_solution(),
      linkUrl: localizeHref('/solutions/erp'),
      linkText: m.usecase_1_link()
    },
    {
      icon: ShoppingBag,
      title: m.usecase_2_title(),
      problem: m.usecase_2_problem(),
      solution: m.usecase_2_solution(),
      linkUrl: localizeHref('/products/rustsale'),
      linkText: m.usecase_2_link()
    },
    {
      icon: Hotel,
      title: m.usecase_3_title(),
      problem: m.usecase_3_problem(),
      solution: m.usecase_3_solution(),
      linkUrl: localizeHref('/solutions/scent-marketing'),
      linkText: m.usecase_3_link()
    },
    {
      icon: Building2,
      title: m.usecase_4_title(),
      problem: m.usecase_4_problem(),
      solution: m.usecase_4_solution(),
      linkUrl: localizeHref('/solutions/software'),
      linkText: m.usecase_4_link()
    }
  ]);
</script>

<section id="use-cases" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Section Header -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _{m.usecases_badge()}/
          </span>
          <h2 class="h3 text-[#090e1f]">
            {m.usecases_title()}
          </h2>
          <p class="subheading-md text-[#475569]">
            {m.usecases_subtitle()}
          </p>
        </div>
      </div>

      <!-- 4 Practical Use Cases Grid -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each cases as item}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col justify-between grid-ring bg-white p-1gu">
            <div>
              <div class="flex items-center gap-3 mb-1gu">
                <div class="w-10 h-10 grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0">
                  <item.icon size={20} class="shrink-0" />
                </div>
                <h3 class="font-bold text-base text-[#090e1f]">{item.title}</h3>
              </div>

              <div class="flex flex-col gap-3 text-xs leading-relaxed mb-1gu">
                <div class="p-2.5 bg-[#fef2f2] border border-[#fecaca] text-[#991b1b]">
                  <strong>{m.usecases_label_problem()}</strong> {item.problem}
                </div>
                <div class="p-2.5 bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534]">
                  <strong>{m.usecases_label_solution()}</strong> {item.solution}
                </div>
              </div>
            </div>

            <div class="pt-1gu border-t border-[#f1f5f9]">
              <a 
                href={item.linkUrl} 
                class="font-mono text-xs text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1.5 font-semibold"
              >
                <span>{item.linkText}</span>
                <ArrowRight size={13} class="shrink-0" />
              </a>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
