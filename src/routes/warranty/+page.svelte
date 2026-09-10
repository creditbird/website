<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import { Award, ShieldCheck, Clock, ChevronRight, Phone, AlertCircle } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import { getWarrantyContent } from '$lib/data/legal/warranty';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const currentLocale = $derived(getLocale());
  const c = $derived(getWarrantyContent(currentLocale));

  const sections = $derived([
    { id: 'bao-hanh-may', title: m.warranty_sec1() },
    { id: 'tinh-dau-coa', title: m.warranty_sec2() },
    { id: 'sla-phan-mem', title: m.warranty_sec3() },
    { id: 'quy-trinh', title: m.warranty_sec4() },
    { id: 'mien-tru', title: m.warranty_sec5() }
  ]);
</script>

<SeoHead
  title={m.warranty_meta_title()}
  description={m.warranty_meta_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.warranty_hero_eyebrow()}
      eyebrowIcon={Award}
      specBadge={m.warranty_spec()}
      title={m.warranty_hero_title()}
      description={m.warranty_hero_desc()}
      primaryBtnText={m.legal_btn_consult()}
      primaryBtnAction={openDemo}
      secondaryBtnText="Hotline: 0932 640 968"
      secondaryBtnHref="tel:0932640968"
    />

    <!-- 2. Main Content Area (Crisp Light Blueprint Grid) -->
    <section class="relative theme-light bg-[#f8fafc] text-[#090e1f]">
      <div class="strict-grid relative z-2 py-2gu">

        <div class="grid-docs-layout">

          <!-- Sticky Sidebar Navigation (15gu) -->
          <aside class="sticky top-24">
            <div class="snap-card free-flow grid-ring bg-white p-1gu flex flex-col gap-1gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2 py-0.5 w-fit">
                _{m.legal_toc_title()}/
              </span>

              <nav class="flex flex-col gap-1">
                {#each sections as sec (sec.id)}
                  <a
                    href="#{sec.id}"
                    class="py-2 px-3 text-[#475569] hover:text-[var(--cb-cobalt-600)] hover:bg-[#edf2ff] transition-colors flex items-center justify-between text-xs font-mono font-medium grid-ring"
                  >
                    <span>{sec.title}</span>
                    <ChevronRight size={13} class="opacity-40 shrink-0" />
                  </a>
                {/each}
              </nav>

              <div class="mt-2 pt-4 border-t border-[#e2e8f0] flex flex-col gap-2.5 font-mono text-xs text-[#64748b]">
                <div class="flex items-center gap-2">
                  <ShieldCheck size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.warranty_badge_diffuser()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <ShieldCheck size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.warranty_badge_oils()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.warranty_badge_sla()}</span>
                </div>
                <div class="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                  <Phone size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <a href="tel:0932640968" class="hover:underline font-bold text-[#090e1f]">Hotline: 0932.640.968</a>
                </div>
              </div>
            </div>
          </aside>

          <!-- Content Body (32gu) -->
          <article class="snap-card free-flow flex flex-col gap-2gu grid-ring bg-white p-1gu sm:p-2gu leading-relaxed text-[#334155]">

            {#if currentLocale !== 'vi'}
              <!-- Bilingual Reference Disclaimer -->
              <div class="p-4 bg-[#eff6ff] border border-[#bfdbfe] text-xs font-sans text-[#1e40af] flex items-start gap-3">
                <AlertCircle size={18} class="text-[#3b82f6] shrink-0 mt-0.5" />
                <div class="flex flex-col gap-1">
                  <strong class="font-semibold">{m.legal_disclaimer_title()}</strong>
                  <p class="leading-relaxed text-[#1e3a8a]">{m.legal_disclaimer_desc()}</p>
                </div>
              </div>
            {/if}

            <!-- Section 1 -->
            <section id="bao-hanh-may" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec1.title}
              </h2>
              <p>{c.sec1.intro}</p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f]">{c.sec1.cards.hvacTitle}</span>
                  <div class="text-xs text-[var(--cb-cobalt-600)] font-mono font-bold">{c.sec1.cards.hvacWarranty}</div>
                  <p class="text-xs text-[#64748b]">{c.sec1.cards.hvacDesc}</p>
                </div>

                <div class="p-4 grid-ring bg-[#f8fafc] flex flex-col gap-1.5">
                  <span class="font-bold text-sm text-[#090e1f]">{c.sec1.cards.retailTitle}</span>
                  <div class="text-xs text-[var(--cb-cobalt-600)] font-mono font-bold">{c.sec1.cards.retailWarranty}</div>
                  <p class="text-xs text-[#64748b]">{c.sec1.cards.retailDesc}</p>
                </div>
              </div>

              <h3 class="font-bold text-[#090e1f] mt-2">{c.sec1.replacementTitle}</h3>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec1.replacementItems as item, idx (idx)}
                  <li>{@html item}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 2 -->
            <section id="tinh-dau-coa" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec2.title}
              </h2>
              <p>{c.sec2.intro}</p>
              <ul class="list-disc list-inside flex flex-col gap-2 pl-2 text-sm">
                {#each c.sec2.items as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="sla-phan-mem" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec3.title}
              </h2>
              <p>{c.sec3.intro}</p>

              <div class="overflow-x-auto my-3">
                <table class="w-full text-left text-xs sm:text-sm grid-ring">
                  <thead class="bg-[#f8fafc] text-[#090e1f] font-mono uppercase text-xs">
                    <tr>
                      <th class="p-3 border-b border-[#e2e8f0]">{c.sec3.table.thLevel}</th>
                      <th class="p-3 border-b border-[#e2e8f0]">{c.sec3.table.thImpact}</th>
                      <th class="p-3 border-b border-[#e2e8f0]">{c.sec3.table.thResponse}</th>
                      <th class="p-3 border-b border-[#e2e8f0]">{c.sec3.table.thResolution}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#e2e8f0]">
                    {#each c.sec3.table.rows as row (row.level)}
                      <tr>
                        <td class="p-3 font-bold font-mono {row.levelClass}">{row.level}</td>
                        <td class="p-3">{row.impact}</td>
                        <td class="p-3 font-mono font-bold">{row.response}</td>
                        <td class="p-3">{row.resolution}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>

              <p class="text-sm">
                <strong>{c.sec3.uptimeLabel}</strong> {c.sec3.uptimeNote}
              </p>
            </section>

            <!-- Section 4 -->
            <section id="quy-trinh" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec4.title}
              </h2>
              <div class="flex flex-col gap-3">
                {#each c.sec4.steps as step (step.num)}
                  <div class="flex items-start gap-3 p-3 bg-[#f8fafc] grid-ring">
                    <span class="h3 font-mono tabular-nums font-bold text-[var(--cb-cobalt-600)] shrink-0">{step.num}</span>
                    <div>
                      <h4 class="font-bold text-sm text-[#090e1f]">{step.title}</h4>
                      <p class="text-xs text-[#64748b]">{step.desc}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </section>

            <!-- Section 5 -->
            <section id="mien-tru" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec5.title}
              </h2>
              <p>{c.sec5.intro}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm text-[#64748b]">
                {#each c.sec5.exclusions as item, idx (idx)}
                  <li>{item}</li>
                {/each}
              </ul>
              <p class="text-sm mt-2">{c.sec5.paidSupportNote}</p>
            </section>

          </article>

        </div>

      </div>
    </section>

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
