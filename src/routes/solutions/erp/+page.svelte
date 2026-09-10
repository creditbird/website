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
    Layers,
    Boxes,
    Factory,
    Warehouse,
    Calculator,
    Truck,
    Receipt,
    ExternalLink
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
      label: m.erp_metric1_label(),
      value: m.erp_metric1_val(),
      sublabel: m.erp_metric1_sub(),
      color: '#22439c'
    },
    {
      label: m.erp_metric2_label(),
      value: m.erp_metric2_val(),
      sublabel: m.erp_metric2_sub(),
      color: '#10b981'
    },
    {
      label: m.erp_metric3_label(),
      value: m.erp_metric3_val(),
      sublabel: m.erp_metric3_sub(),
      color: '#22439c'
    },
    {
      label: m.erp_metric4_label(),
      value: m.erp_metric4_val(),
      sublabel: m.erp_metric4_sub(),
      color: '#22439c'
    }
  ]);

  const modules = $derived([
    {
      id: '01',
      code: '_MANUFACTURING & BOM/',
      title: m.erp_mod1_title(),
      icon: Factory,
      desc: m.erp_mod1_desc(),
      tag: 'mrp manufacturing'
    },
    {
      id: '02',
      code: '_WAREHOUSE WMS/',
      title: m.erp_mod2_title(),
      icon: Warehouse,
      desc: m.erp_mod2_desc(),
      tag: 'warehouse wms'
    },
    {
      id: '03',
      code: '_ACCOUNTING & FINANCE/',
      title: m.erp_mod3_title(),
      icon: Calculator,
      desc: m.erp_mod3_desc(),
      tag: 'financial ledger'
    },
    {
      id: '04',
      code: '_SUPPLY CHAIN (SCM)/',
      title: m.erp_mod4_title(),
      icon: Truck,
      desc: m.erp_mod4_desc(),
      tag: 'procurement scm'
    },
    {
      id: '05',
      code: '_DISTRIBUTION & SALES/',
      title: m.erp_mod5_title(),
      icon: Boxes,
      desc: m.erp_mod5_desc(),
      tag: 'sales distribution'
    },
    {
      id: '06',
      code: '_FINANCIAL RECONCILIATION/',
      title: m.erp_mod6_title(),
      icon: Receipt,
      desc: m.erp_mod6_desc(),
      tag: 'bank reconciliation'
    }
  ]);

  const mrpBullets = $derived([
    {
      title: m.erp_bullet1_title(),
      text: m.erp_bullet1_text()
    },
    {
      title: m.erp_bullet2_title(),
      text: m.erp_bullet2_text()
    },
    {
      title: m.erp_bullet3_title(),
      text: m.erp_bullet3_text()
    }
  ]);
</script>

<SeoHead
  title={m.erp_page_title()}
  description={m.erp_page_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.erp_hero_eyebrow()}
      eyebrowIcon={Layers}
      specBadge={m.erp_hero_spec()}
      title={m.erp_hero_title()}
      description={m.erp_hero_desc()}
      primaryBtnText={m.erp_hero_btn_primary()}
      primaryBtnHref="https://kelvot.com"
      primaryBtnIcon={ExternalLink}
      secondaryBtnText={m.erp_hero_btn_secondary()}
      secondaryBtnAction={openDemo}
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow={m.erp_metrics_eyebrow()}
      title={m.erp_metrics_title()}
      theme="light"
      metrics={metrics}
    />

    <!-- 3. 6 Core Modules Grid (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="modules"
      theme="dark"
      eyebrow={m.erp_modules_eyebrow()}
      title={m.erp_modules_title()}
      subheading={m.erp_modules_sub()}
      description={m.erp_modules_desc()}
      columns={3}
      items={modules}
    />

    <!-- 4. MRP Production Ledger Split Showcase (Crisp Light Blueprint) -->
    <BlueprintSplitShowcase
      id="production-deep-dive"
      theme="light"
      eyebrow={m.erp_split_eyebrow()}
      title={m.erp_split_title()}
      description={m.erp_split_desc()}
      bullets={mrpBullets}
      linkText={m.erp_split_link()}
      linkUrl="https://kelvot.com"
      external={true}
    >
      <!-- Telemetry MRP Ledger Box -->
      <div class="grid-ring bg-[#0c1633] text-white p-6 font-mono text-xs flex flex-col gap-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-[rgba(74,144,226,0.25)] pb-3">
          <span class="text-[#60a5fa] font-bold">KELVOT_ERP // PRODUCTION_LEDGER</span>
          <span class="text-emerald-400 font-bold flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            VAS_IFRS_COMPLIANT
          </span>
        </div>

        <div class="space-y-2.5 text-[#cbd5e1]">
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">{m.erp_telemetry_bom_title()}</span>
            <span class="text-[#60a5fa] tabular-nums">{m.erp_telemetry_bom_val()}</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">{m.erp_telemetry_wms_title()}</span>
            <span class="text-emerald-400 tabular-nums">{m.erp_telemetry_wms_val()}</span>
          </div>
          <div class="p-2.5 bg-[#070e22] grid-ring flex items-center justify-between">
            <span class="font-semibold">{m.erp_telemetry_acct_title()}</span>
            <span class="text-[#facc15] tabular-nums">1,420,500,000 ₫</span>
          </div>
        </div>

        <div class="pt-3 border-t border-[rgba(74,144,226,0.25)] flex items-center justify-between text-[#64748b]">
          <span>{m.erp_telemetry_audit()}</span>
          <span class="text-white">{m.erp_telemetry_db()}</span>
        </div>
      </div>
    </BlueprintSplitShowcase>

    <!-- 5. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow={m.erp_cta_eyebrow()}
      title={m.erp_cta_title()}
      description={m.erp_cta_desc()}
      primaryText={m.erp_cta_btn_primary()}
      primaryAction={openDemo}
      secondaryText={m.erp_cta_btn_secondary()}
      secondaryHref="https://kelvot.com"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  {#if isDemoOpen}
    <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />
  {/if}

</div>
