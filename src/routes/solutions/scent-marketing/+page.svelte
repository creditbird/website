<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintSplitShowcase from '$lib/components/BlueprintSplitShowcase.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import LabGlasswareBlueprint from '$lib/components/LabGlasswareBlueprint.svelte';
  import LabExtractionBlueprintSection from '$lib/components/LabExtractionBlueprintSection.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import * as m from '$lib/paraglide/messages';
  import {
    Wind,
    ShieldCheck,
    Droplets,
    ExternalLink,
    Wifi,
    Award,
    FlaskConical,
    Hotel,
    Car,
    ShoppingBag,
    HeartPulse
  } from 'lucide-svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }

  const metrics = $derived([
    {
      label: m.scent_metric1_label(),
      value: m.scent_metric1_val(),
      sublabel: m.scent_metric1_sub(),
      color: '#22439c'
    },
    {
      label: m.scent_metric2_label(),
      value: m.scent_metric2_val(),
      sublabel: m.scent_metric2_sub(),
      color: '#10b981'
    },
    {
      label: m.scent_metric3_label(),
      value: m.scent_metric3_val(),
      sublabel: m.scent_metric3_sub(),
      color: '#22439c'
    },
    {
      label: m.scent_metric4_label(),
      value: m.scent_metric4_val(),
      sublabel: m.scent_metric4_sub(),
      color: '#22439c'
    }
  ]);

  const solutions = $derived([
    {
      id: '01',
      code: '_COMMERCIAL HVAC/',
      title: m.scent_sol1_title(),
      icon: Wind,
      desc: m.scent_sol1_desc(),
      tag: 'hvac integration'
    },
    {
      id: '02',
      code: '_SMART STANDALONE/',
      title: m.scent_sol2_title(),
      icon: Wifi,
      desc: m.scent_sol2_desc(),
      tag: 'iot standalone'
    },
    {
      id: '03',
      code: '_COA CERTIFIED OILS/',
      title: m.scent_sol3_title(),
      icon: FlaskConical,
      desc: m.scent_sol3_desc(),
      tag: 'certified pure oil'
    },
    {
      id: '04',
      code: '_SIGNATURE SCENT/',
      title: m.scent_sol4_title(),
      icon: Award,
      desc: m.scent_sol4_desc(),
      tag: 'brand signature'
    },
    {
      id: '05',
      code: '_PERIODIC REFILL/',
      title: m.scent_sol5_title(),
      icon: Droplets,
      desc: m.scent_sol5_desc(),
      tag: 'maintenance service'
    },
    {
      id: '06',
      code: '_WARRANTY & CARE/',
      title: m.scent_sol6_title(),
      icon: ShieldCheck,
      desc: m.scent_sol6_desc(),
      tag: 'official warranty'
    }
  ]);

  const sectors = $derived([
    {
      id: '01',
      code: '_HOSPITALITY/',
      title: m.scent_sec1_title(),
      icon: Hotel,
      desc: m.scent_sec1_desc(),
      tag: 'luxury resort'
    },
    {
      id: '02',
      code: '_AUTOMOTIVE & REAL ESTATE/',
      title: m.scent_sec2_title(),
      icon: Car,
      desc: m.scent_sec2_desc(),
      tag: 'premium showroom'
    },
    {
      id: '03',
      code: '_FASHION & RETAIL/',
      title: m.scent_sec3_title(),
      icon: ShoppingBag,
      desc: m.scent_sec3_desc(),
      tag: 'brand identity'
    },
    {
      id: '04',
      code: '_HEALTHCARE & WELLNESS/',
      title: m.scent_sec4_title(),
      icon: HeartPulse,
      desc: m.scent_sec4_desc(),
      tag: 'wellness clinic'
    }
  ]);

  const hvacBullets = $derived([
    {
      title: m.scent_bullet1_title(),
      text: m.scent_bullet1_text()
    },
    {
      title: m.scent_bullet2_title(),
      text: m.scent_bullet2_text()
    },
    {
      title: m.scent_bullet3_title(),
      text: m.scent_bullet3_text()
    }
  ]);
</script>

<SeoHead
  title={m.scent_page_title()}
  description={m.scent_page_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.scent_hero_eyebrow()}
      eyebrowIcon={Wind}
      specBadge={m.scent_hero_spec()}
      title={m.scent_hero_title()}
      description={m.scent_hero_desc()}
      primaryBtnText={m.scent_hero_btn_primary()}
      primaryBtnHref="https://www.lemyfinest.com"
      primaryBtnIcon={ExternalLink}
      secondaryBtnText={m.scent_hero_btn_secondary()}
      secondaryBtnAction={openDemo}
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid with Laboratory Blueprint Graphic) -->
    <BlueprintMetricsBar
      eyebrow={m.scent_metrics_eyebrow()}
      title={m.scent_metrics_title()}
      theme="light"
      metrics={metrics}
    >
      {#snippet graphic()}
        <LabGlasswareBlueprint />
      {/snippet}
    </BlueprintMetricsBar>

    <!-- 3. 6 Core Solutions Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="solutions"
      theme="dark"
      eyebrow={m.scent_solutions_eyebrow()}
      title={m.scent_solutions_title()}
      subheading={m.scent_solutions_sub()}
      description={m.scent_solutions_desc()}
      columns={3}
      items={solutions}
    />

    <!-- 4. Laboratory Extraction & Distillation Process Blueprint (Dark Cyanotype CAD Architecture) -->
    <LabExtractionBlueprintSection />

    <!-- 4. HVAC Deep Dive Split Showcase (Crisp Light Blueprint) -->
    <BlueprintSplitShowcase
      id="hvac-technology"
      theme="light"
      eyebrow={m.scent_hvac_eyebrow()}
      title={m.scent_hvac_title()}
      description={m.scent_hvac_desc()}
      bullets={hvacBullets}
      linkText={m.scent_hvac_link()}
      linkUrl="https://www.lemyfinest.com"
      external={true}
    >
      <!-- Telemetry Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <span class="text-[#60a5fa] font-bold">LEMY_FINEST // HVAC_DIFFUSER_V4</span>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            IOT_ONLINE
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">{m.scent_telemetry_ahu_title()}</span>
            <span class="text-[#60a5fa] tabular-nums">{m.scent_telemetry_coverage()}</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">[OIL-COA] White Tea & Thyme Signature</span>
            <span class="text-emerald-400 tabular-nums">{m.scent_telemetry_purity()}</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">{m.scent_telemetry_cycle_title()}</span>
            <span class="text-[#facc15] tabular-nums">{m.scent_telemetry_savings()}</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span>{m.scent_telemetry_cert()}</span>
          <span class="text-white">{m.scent_telemetry_safety()}</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Application Sectors Grid (Dark Cyanotype Cobalt) -->
    <BlueprintGridSection
      id="sectors"
      theme="dark"
      eyebrow={m.scent_sectors_eyebrow()}
      title={m.scent_sectors_title()}
      subheading={m.scent_sectors_sub()}
      description={m.scent_sectors_desc()}
      columns={2}
      items={sectors}
    />

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow={m.scent_cta_eyebrow()}
      title={m.scent_cta_title()}
      description={m.scent_cta_desc()}
      primaryText={m.scent_cta_btn_primary()}
      primaryAction={openDemo}
      secondaryText={m.scent_cta_btn_secondary()}
      secondaryHref="https://www.lemyfinest.com"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
