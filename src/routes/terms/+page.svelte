<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import { FileText, CheckCircle2, ChevronRight, Phone, AlertCircle } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import { getTermsContent } from '$lib/data/legal/terms';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const currentLocale = $derived(getLocale());
  const c = $derived(getTermsContent(currentLocale));

  const sections = $derived([
    { id: 'tong-quan', title: m.terms_sec1() },
    { id: 'pham-vi', title: m.terms_sec2() },
    { id: 'quyen-nghia-vu', title: m.terms_sec3() },
    { id: 'so-huu-tri-tue', title: m.terms_sec4() },
    { id: 'thanh-toan', title: m.terms_sec5() },
    { id: 'bao-mat', title: m.terms_sec6() },
    { id: 'tranh-chap', title: m.terms_sec7() }
  ]);
</script>

<SeoHead
  title={m.terms_meta_title()}
  description={m.terms_meta_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.terms_hero_eyebrow()}
      eyebrowIcon={FileText}
      specBadge={m.terms_spec()}
      title={m.terms_hero_title()}
      description={m.terms_hero_desc()}
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
                  <CheckCircle2 size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.terms_badge_entity()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.terms_badge_contract()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.terms_badge_copyright()}</span>
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
            <section id="tong-quan" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec1.title}
              </h2>
              <p>{@html c.sec1.intro}</p>
              <div class="p-4 bg-[#f8fafc] grid-ring text-xs flex flex-col gap-1.5 font-mono">
                <div><strong>{c.sec1.company.nameLabel}:</strong> {c.sec1.company.nameVal}</div>
                <div><strong>{c.sec1.company.intlLabel}:</strong> {c.sec1.company.intlVal}</div>
                <div><strong>{c.sec1.company.taxLabel}:</strong> {c.sec1.company.taxVal}</div>
                <div><strong>{c.sec1.company.authLabel}:</strong> {c.sec1.company.authVal}</div>
                <div><strong>{c.sec1.company.addrLabel}:</strong> {c.sec1.company.addrVal}</div>
                <div><strong>{c.sec1.company.repLabel}:</strong> {c.sec1.company.repVal}</div>
              </div>
            </section>

            <!-- Section 2 -->
            <section id="pham-vi" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec2.title}
              </h2>
              <p class="text-sm">{c.sec2.intro}</p>
              <ul class="list-disc list-inside flex flex-col gap-2 pl-2 text-sm">
                {#each c.sec2.services as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="quyen-nghia-vu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec3.title}
              </h2>
              <div class="flex flex-col gap-3 text-sm">
                <h3 class="font-bold text-[#090e1f]">{c.sec3.creditbirdTitle}</h3>
                <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2">
                  {#each c.sec3.creditbirdItems as item, idx (idx)}
                    <li>{item}</li>
                  {/each}
                </ul>

                <h3 class="font-bold text-[#090e1f] mt-2">{c.sec3.customerTitle}</h3>
                <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2">
                  {#each c.sec3.customerItems as item, idx (idx)}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            </section>

            <!-- Section 4 -->
            <section id="so-huu-tri-tue" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec4.title}
              </h2>
              <p class="text-sm">{@html c.sec4.p1}</p>
              <p class="text-sm">{c.sec4.p2}</p>
            </section>

            <!-- Section 5 -->
            <section id="thanh-toan" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec5.title}
              </h2>
              <p class="text-sm">{c.sec5.intro}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec5.items as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 6 -->
            <section id="bao-mat" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 06/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec6.title}
              </h2>
              <p class="text-sm">{c.sec6.p1}</p>
              <p class="text-sm">{c.sec6.p2}</p>
            </section>

            <!-- Section 7 -->
            <section id="tranh-chap" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 07/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec7.title}
              </h2>
              <p class="text-sm">{c.sec7.p1}</p>
              <p class="text-sm">{c.sec7.p2}</p>
            </section>

          </article>

        </div>

      </div>
    </section>

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
