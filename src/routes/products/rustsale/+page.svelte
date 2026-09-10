<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintSplitShowcase from '$lib/components/BlueprintSplitShowcase.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import * as m from '$lib/paraglide/messages';
  import {
    Sparkles,
    Zap,
    BookOpen,
    MessageSquare,
    MapPin,
    Users,
    FolderTree,
    Share2,
    Mail,
    Kanban,
    Award,
    KeyRound,
    ExternalLink,
    Code
  } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const installCommand = 'curl -fsSL https://rustsale.creditbirdtech.com/install-linux.sh | bash';

  const metrics = $derived([
    {
      label: m.rs_metric1_label(),
      value: m.rs_metric1_val(),
      sublabel: m.rs_metric1_sub(),
      color: '#22439c'
    },
    {
      label: m.rs_metric2_label(),
      value: m.rs_metric2_val(),
      sublabel: m.rs_metric2_sub(),
      color: '#10b981'
    },
    {
      label: m.rs_metric3_label(),
      value: m.rs_metric3_val(),
      sublabel: m.rs_metric3_sub(),
      color: '#22439c'
    },
    {
      label: m.rs_metric4_label(),
      value: m.rs_metric4_val(),
      sublabel: m.rs_metric4_sub(),
      color: '#22439c'
    }
  ]);

  const modules = $derived([
    {
      id: '01',
      code: '_DASHBOARD/',
      title: m.rs_mod1_title(),
      icon: Zap,
      desc: m.rs_mod1_desc(),
      tag: 'pipeline analytics'
    },
    {
      id: '02',
      code: '_GOOGLE MAPS SCRAPER/',
      title: m.rs_mod2_title(),
      icon: MapPin,
      desc: m.rs_mod2_desc(),
      tag: 'lead generation'
    },
    {
      id: '03',
      code: '_LEADS ENGINE/',
      title: m.rs_mod3_title(),
      icon: Users,
      desc: m.rs_mod3_desc(),
      tag: 'deduplication'
    },
    {
      id: '04',
      code: '_CATEGORIES & TAGS/',
      title: m.rs_mod4_title(),
      icon: FolderTree,
      desc: m.rs_mod4_desc(),
      tag: 'segmentation'
    },
    {
      id: '05',
      code: '_OMNICHANNEL & AI INBOX/',
      title: m.rs_mod5_title(),
      icon: MessageSquare,
      desc: m.rs_mod5_desc(),
      tag: 'realtime inbox • ai reply'
    },
    {
      id: '06',
      code: '_FACEBOOK HUB/',
      title: m.rs_mod6_title(),
      icon: Share2,
      desc: m.rs_mod6_desc(),
      tag: 'fanpage automation'
    },
    {
      id: '07',
      code: '_AI OUTREACH & AUTOMATION/',
      title: m.rs_mod7_title(),
      icon: Sparkles,
      desc: m.rs_mod7_desc(),
      tag: 'ai outreach • zalo automation'
    },
    {
      id: '08',
      code: '_WHATSAPP MARKETING/',
      title: m.rs_mod8_title(),
      icon: Share2,
      desc: m.rs_mod8_desc(),
      tag: 'b2b messaging'
    },
    {
      id: '09',
      code: '_COLD EMAIL ENGINE/',
      title: m.rs_mod9_title(),
      icon: Mail,
      desc: m.rs_mod9_desc(),
      tag: 'email drip'
    },
    {
      id: '10',
      code: '_KANBAN PIPELINE/',
      title: m.rs_mod10_title(),
      icon: Kanban,
      desc: m.rs_mod10_desc(),
      tag: 'sales pipeline'
    },
    {
      id: '11',
      code: '_WON CONTACTS/',
      title: m.rs_mod11_title(),
      icon: Award,
      desc: m.rs_mod11_desc(),
      tag: 'customer retention'
    },
    {
      id: '12',
      code: '_KEYRING VAULT/',
      title: m.rs_mod12_title(),
      icon: KeyRound,
      desc: m.rs_mod12_desc(),
      tag: 'hardware keyring'
    }
  ]);

  const omnichannelBullets = $derived([
    {
      title: m.rs_bullet1_title(),
      text: m.rs_bullet1_text()
    },
    {
      title: m.rs_bullet2_title(),
      text: m.rs_bullet2_text()
    },
    {
      title: m.rs_bullet3_title(),
      text: m.rs_bullet3_text()
    },
    {
      title: m.rs_bullet4_title(),
      text: m.rs_bullet4_text()
    },
    {
      title: m.rs_bullet5_title(),
      text: m.rs_bullet5_text()
    }
  ]);
</script>

<SeoHead
  title={m.rs_page_title()}
  description={m.rs_page_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.rs_hero_eyebrow()}
      eyebrowIcon={Sparkles}
      specBadge={m.rs_hero_spec()}
      title={m.rs_hero_title()}
      description={m.rs_hero_desc()}
      primaryBtnText={m.rs_hero_btn_primary()}
      primaryBtnHref="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
      primaryBtnIcon={BookOpen}
      secondaryBtnText={m.rs_hero_btn_secondary()}
      secondaryBtnAction={openDemo}
      terminalCommand={installCommand}
    />

    <!-- 2. Blueprint Metrics Ribbon (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow={m.rs_metrics_eyebrow()}
      title={m.rs_metrics_title()}
      theme="light"
      metrics={metrics}
    />

    <!-- 3. 12 Core Modules Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="modules"
      theme="dark"
      eyebrow={m.rs_modules_eyebrow()}
      title={m.rs_modules_title()}
      subheading={m.rs_modules_sub()}
      description={m.rs_modules_desc()}
      columns={3}
      items={modules}
    />

    <!-- 4. Detailed Omnichannel Chat Highlight (Crisp Blueprint Split Showcase) -->
    <BlueprintSplitShowcase
      id="omnichannel"
      theme="light"
      eyebrow={m.rs_split_eyebrow()}
      title={m.rs_split_title()}
      description={m.rs_split_desc()}
      bullets={omnichannelBullets}
      linkText={m.rs_split_link()}
      linkUrl="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
      external={true}
    >
      <!-- Telemetry Cockpit Terminal Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#eab308]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
            <span class="ml-2 text-[#94a3b8] font-bold">RustSale_Omnichannel_Desktop_v2.4.0</span>
          </div>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            CONNECTED (TOKIO_RUST)
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <p class="text-[#64748b]">{m.rs_sync_note()}</p>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#38bdf8] font-semibold">[Zalo OA] 0932.640.xxx</span>
            <span class="text-[#94a3b8]">{m.showcase_tab1_mockup_chat1_preview()}</span>
            <span class="text-[#22c55e] tabular-nums">1s ago</span>
          </div>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#4ade80] font-semibold">[WhatsApp] +84 908.123.xxx</span>
            <span class="text-[#94a3b8]">{m.showcase_tab1_mockup_chat2_preview()}</span>
            <span class="text-[#22c55e] tabular-nums">{m.rs_telemetry_time_3s()}</span>
          </div>
          <div class="p-2.5 bg-[#070d1e] grid-ring flex items-center justify-between">
            <span class="text-[#818cf8] font-semibold">{m.showcase_tab1_mockup_chat3_name()}</span>
            <span class="text-[#94a3b8]">{m.showcase_tab1_mockup_chat3_preview()}</span>
            <span class="text-[#22c55e] tabular-nums">{m.rs_telemetry_time_12s()}</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span class="tabular-nums">RAM: 38.4 MB / CPU: 0.2%</span>
          <span class="text-[#cbd5e1]">{m.rs_telemetry_vault()}</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Documentation & Resources Section (Crisp Blueprint Frame) -->
    <section class="relative theme-light bg-white text-[#090e1f]">
      <div class="strict-grid relative z-2 py-1gu no-bg-grid">
        <div class="flex flex-col gap-2gu">
          <div class="snap-card free-flow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 grid-ring bg-[#f8fafc] text-[#090e1f] p-1gu sm:p-2gu">
            <div class="flex flex-col gap-2 max-w-32gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc] px-2.5 py-0.5 w-fit">
                _{m.rs_doc_eyebrow()}/
              </span>
              <h3 class="h4 font-bold text-[#090e1f]">
                {m.rs_doc_title()}
              </h3>
              <p class="p-sm text-[#64748b] leading-relaxed">
                {m.rs_doc_desc()}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-cta-primary !h-10 !px-5 text-xs flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <BookOpen size={14} />
                <span>{m.rs_doc_btn_notion()}</span>
                <ExternalLink size={13} />
              </a>

              <a
                href="https://github.com/creditbird"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-cta-outline !h-10 !px-5 text-xs flex items-center justify-center gap-2 w-full sm:w-auto text-[#090e1f]"
              >
                <Code size={14} />
                <span>{m.rs_doc_btn_github()}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow={m.rs_cta_eyebrow()}
      title={m.rs_cta_title()}
      description={m.rs_cta_desc()}
      primaryText={m.rs_cta_btn_primary()}
      primaryAction={openDemo}
      secondaryText="Hotline: +84 932 640 968"
      secondaryHref="tel:+84932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
