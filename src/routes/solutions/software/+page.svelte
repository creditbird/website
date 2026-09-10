<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import BlueprintSubpageHero from '$lib/components/BlueprintSubpageHero.svelte';
  import BlueprintMetricsBar from '$lib/components/BlueprintMetricsBar.svelte';
  import BlueprintGridSection from '$lib/components/BlueprintGridSection.svelte';
  import BlueprintCtaSection from '$lib/components/BlueprintCtaSection.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import * as m from '$lib/paraglide/messages';
  import {
    Code,
    Server,
    FileCode2,
    ShieldCheck,
    Layers,
    Boxes,
    Workflow,
    Cpu,
    Smartphone,
    Cloud,
    Sparkles,
    Database
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
      label: m.sw_metric1_label(),
      value: m.sw_metric1_val(),
      sublabel: m.sw_metric1_sub(),
      color: '#22439c'
    },
    {
      label: m.sw_metric2_label(),
      value: m.sw_metric2_val(),
      sublabel: m.sw_metric2_sub(),
      color: '#10b981'
    },
    {
      label: m.sw_metric3_label(),
      value: m.sw_metric3_val(),
      sublabel: m.sw_metric3_sub(),
      color: '#22439c'
    },
    {
      label: m.sw_metric4_label(),
      value: m.sw_metric4_val(),
      sublabel: m.sw_metric4_sub(),
      color: '#22439c'
    }
  ]);

  const pillars = $derived([
    {
      id: '01',
      code: '_ARCHITECTURE & AI/',
      title: m.sw_pillar1_title(),
      icon: Server,
      desc: m.sw_pillar1_desc(),
      tag: 'high concurrency • ai pipeline'
    },
    {
      id: '02',
      code: '_OWNERSHIP/',
      title: m.sw_pillar2_title(),
      icon: FileCode2,
      desc: m.sw_pillar2_desc(),
      tag: 'full ownership & ai weights'
    },
    {
      id: '03',
      code: '_SECURITY & DATA PRIVACY/',
      title: m.sw_pillar3_title(),
      icon: ShieldCheck,
      desc: m.sw_pillar3_desc(),
      tag: 'devsecops • private llm'
    },
    {
      id: '04',
      code: '_FULLSTACK UI/UX/',
      title: m.sw_pillar4_title(),
      icon: Layers,
      desc: m.sw_pillar4_desc(),
      tag: 'sveltekit • flutter • ai agent'
    },
    {
      id: '05',
      code: '_INTEGRATION & AUTOMATION/',
      title: m.sw_pillar5_title(),
      icon: Boxes,
      desc: m.sw_pillar5_desc(),
      tag: 'banking • agentic workflows'
    },
    {
      id: '06',
      code: '_SLA & LIFECYCLE/',
      title: m.sw_pillar6_title(),
      icon: Workflow,
      desc: m.sw_pillar6_desc(),
      tag: 'continuous sla & model updates'
    }
  ]);

  const techStacks = $derived([
    {
      id: '01',
      code: '_BACKEND STACK/',
      title: m.sw_tech1_title(),
      icon: Cpu,
      desc: m.sw_tech1_desc(),
      tag: 'rust • go • python'
    },
    {
      id: '02',
      code: '_ENTERPRISE AI & RAG/',
      title: m.sw_tech2_title(),
      icon: Sparkles,
      desc: m.sw_tech2_desc(),
      tag: 'rag • private llm • ai agents'
    },
    {
      id: '03',
      code: '_FRONTEND STACK/',
      title: m.sw_tech3_title(),
      icon: Layers,
      desc: m.sw_tech3_desc(),
      tag: 'sveltekit • react • typescript'
    },
    {
      id: '04',
      code: '_MOBILE APP STACK/',
      title: m.sw_tech4_title(),
      icon: Smartphone,
      desc: m.sw_tech4_desc(),
      tag: 'flutter • react native'
    },
    {
      id: '05',
      code: '_DATA & VECTOR DB/',
      title: m.sw_tech5_title(),
      icon: Database,
      desc: m.sw_tech5_desc(),
      tag: 'vector db • postgresql • kafka'
    },
    {
      id: '06',
      code: '_DEVOPS, MLOPS & CLOUD/',
      title: m.sw_tech6_title(),
      icon: Cloud,
      desc: m.sw_tech6_desc(),
      tag: 'k8s • mlops • gpu clusters'
    }
  ]);

  const steps = $derived([
    { num: '01', title: m.sw_step1_title(), desc: m.sw_step1_desc() },
    { num: '02', title: m.sw_step2_title(), desc: m.sw_step2_desc() },
    { num: '03', title: m.sw_step3_title(), desc: m.sw_step3_desc() },
    { num: '04', title: m.sw_step4_title(), desc: m.sw_step4_desc() },
    { num: '05', title: m.sw_step5_title(), desc: m.sw_step5_desc() },
    { num: '06', title: m.sw_step6_title(), desc: m.sw_step6_desc() }
  ]);
</script>

<SeoHead
  title={m.sw_page_title()}
  description={m.sw_page_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.sw_hero_eyebrow()}
      eyebrowIcon={Code}
      specBadge={m.sw_hero_spec()}
      title={m.sw_hero_title()}
      description={m.sw_hero_desc()}
      primaryBtnText={m.sw_hero_btn_primary()}
      primaryBtnAction={openDemo}
      secondaryBtnText={m.sw_hero_btn_secondary()}
      secondaryBtnHref="#roadmap-steps"
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow={m.sw_metrics_eyebrow()}
      title={m.sw_metrics_title()}
      theme="light"
      metrics={metrics}
    />

    <!-- 3. 6 Core Technical Pillars (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="pillars"
      theme="dark"
      eyebrow={m.sw_pillar_eyebrow()}
      title={m.sw_pillar_title()}
      subheading={m.sw_pillar_sub()}
      description={m.sw_pillar_desc()}
      columns={3}
      items={pillars}
    />

    <!-- 4. Tech Stack Matrix Grid (Crisp Light Blueprint) -->
    <BlueprintGridSection
      id="tech-stack"
      theme="light"
      eyebrow={m.sw_tech_eyebrow()}
      title={m.sw_tech_title()}
      subheading={m.sw_tech_sub()}
      description={m.sw_tech_desc()}
      columns={3}
      items={techStacks}
    />

    <!-- 5. 6-Step Delivery Roadmap (Dark Cyanotype Blueprint) -->
    <section
      id="roadmap-steps"
      class="relative theme-cobalt-primary dark bg-background text-foreground"
      style="--section-accent:var(--cobalt-accent, #60a5fa)"
    >
      <div class="strict-grid relative z-2 py-(--grid-unit)">
        <div class="flex flex-col gap-2gu">

          <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
            <div class="flex flex-col gap-3 max-w-40gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                _{m.sw_roadmap_badge()}/
              </span>
              <h2 class="h3 font-bold text-foreground">
                {m.sw_roadmap_title()}
              </h2>
              <p class="p-md text-muted-foreground leading-relaxed">
                {m.sw_roadmap_desc()}
              </p>
            </div>
          </div>

          <!-- 6 Steps Grid (2x3 or 3x2) with .snap-group-item and .grid-ring -->
          <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
            {#each steps as step}
              <div
                data-auto-snap="true"
                class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu justify-between"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="h3 font-mono tabular-nums font-bold" style="color:var(--section-accent)">
                      {step.num}
                    </span>
                    <span class="font-mono text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">
                      PHASE
                    </span>
                  </div>
                  <h3 class="font-bold text-base text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p class="p-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            {/each}
          </div>

        </div>
      </div>
    </section>

    <!-- 6. Bottom Blueprint CTA Banner (Dark Cyanotype Cobalt) -->
    <BlueprintCtaSection
      eyebrow={m.sw_cta_eyebrow()}
      title={m.sw_cta_title()}
      description={m.sw_cta_desc()}
      primaryText={m.sw_cta_btn()}
      primaryAction={openDemo}
      secondaryText="Hotline: +84 932 640 968"
      secondaryHref="tel:+84932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  {#if isDemoOpen}
    <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />
  {/if}

</div>
