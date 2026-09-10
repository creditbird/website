<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import { ShieldCheck, Lock, Server, ChevronRight, Phone, AlertCircle } from 'lucide-svelte';
  import * as m from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import { getSecurityContent } from '$lib/data/legal/security';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const currentLocale = $derived(getLocale());
  const c = $derived(getSecurityContent(currentLocale));

  const sections = $derived([
    { id: 'tieu-chuan-iso', title: m.security_sec1() },
    { id: 'bao-mat-ma-nguon', title: m.security_sec2() },
    { id: 'sao-luu-du-lieu', title: m.security_sec3() },
    { id: 'nhan-su-it-sec', title: m.security_sec4() },
    { id: 'an-toan-iot', title: m.security_sec5() },
    { id: 'bao-cao-lo-hong', title: m.security_sec6() }
  ]);
</script>

<SeoHead
  title={m.security_meta_title()}
  description={m.security_meta_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.security_hero_eyebrow()}
      eyebrowIcon={ShieldCheck}
      specBadge={m.security_spec()}
      title={m.security_hero_title()}
      description={m.security_hero_desc()}
      primaryBtnText={m.legal_btn_consult()}
      primaryBtnAction={openDemo}
      secondaryBtnText="Hotline: +84 932 640 968"
      secondaryBtnHref="tel:+84932640968"
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
                  <span>{m.security_badge_iso()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Lock size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.security_badge_devsecops()}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Server size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span>{m.security_badge_drp()}</span>
                </div>
                <div class="flex items-center gap-2 pt-2 border-t border-[#e2e8f0]">
                  <Phone size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <a href="tel:+84932640968" class="hover:underline font-bold text-[#090e1f]">Hotline: +84 932 640 968</a>
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
            <section id="tieu-chuan-iso" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 01/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec1.title}
              </h2>
              <p>{@html c.sec1.p1}</p>
              <p>{c.sec1.p2}</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-center">
                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">{c.sec1.pillars.confidentiality.title}</span>
                  <span class="text-xs text-[#64748b]">{c.sec1.pillars.confidentiality.subtitle}</span>
                  <p class="text-xs mt-1">{c.sec1.pillars.confidentiality.desc}</p>
                </div>

                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">{c.sec1.pillars.integrity.title}</span>
                  <span class="text-xs text-[#64748b]">{c.sec1.pillars.integrity.subtitle}</span>
                  <p class="text-xs mt-1">{c.sec1.pillars.integrity.desc}</p>
                </div>

                <div class="p-3.5 bg-[#f8fafc] grid-ring flex flex-col items-center gap-1">
                  <span class="font-mono font-bold text-xs text-[var(--cb-cobalt-700)]">{c.sec1.pillars.availability.title}</span>
                  <span class="text-xs text-[#64748b]">{c.sec1.pillars.availability.subtitle}</span>
                  <p class="text-xs mt-1">{c.sec1.pillars.availability.desc}</p>
                </div>
              </div>
            </section>

            <!-- Section 2 -->
            <section id="bao-mat-ma-nguon" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 02/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec2.title}
              </h2>
              <p>{c.sec2.desc}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec2.items as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 3 -->
            <section id="sao-luu-du-lieu" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 03/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec3.title}
              </h2>
              <p>{c.sec3.desc}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec3.items as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 4 -->
            <section id="nhan-su-it-sec" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 04/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec4.title}
              </h2>
              <p>{c.sec4.desc}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec4.items as item (item.label)}
                  <li><strong>{item.label}:</strong> {item.text}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 5 -->
            <section id="an-toan-iot" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 05/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec5.title}
              </h2>
              <p>{c.sec5.desc}</p>
              <ul class="list-disc list-inside flex flex-col gap-1.5 pl-2 text-sm">
                {#each c.sec5.items as item, idx (idx)}
                  <li>{item}</li>
                {/each}
              </ul>
            </section>

            <!-- Section 6 -->
            <section id="bao-cao-lo-hong" class="flex flex-col gap-3 scroll-mt-28">
              <span class="font-mono text-xs text-[var(--cb-cobalt-600)] uppercase font-semibold">_SECTION 06/</span>
              <h2 class="text-xl md:text-2xl font-bold text-[#090e1f] border-b border-[#e2e8f0] pb-2">
                {c.sec6.title}
              </h2>
              <p>{c.sec6.desc}</p>
              <div class="p-4 bg-[#f8fafc] grid-ring text-xs flex flex-col gap-1.5 font-mono">
                <div><strong>{c.sec6.contact.deptLabel}:</strong> {c.sec6.contact.deptVal}</div>
                <div><strong>{c.sec6.contact.taxLabel}:</strong> {c.sec6.contact.taxVal}</div>
                <div><strong>{c.sec6.contact.hotlineLabel}:</strong> {c.sec6.contact.hotlineVal}</div>
                <div><strong>{c.sec6.contact.emailLabel}:</strong> {c.sec6.contact.emailVal}</div>
                <div><strong>{c.sec6.contact.slaLabel}:</strong> {c.sec6.contact.slaVal}</div>
              </div>
            </section>

          </article>

        </div>

      </div>
    </section>

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
