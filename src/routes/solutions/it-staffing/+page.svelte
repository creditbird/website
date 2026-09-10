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
    Users,
    Shield,
    Building2,
    Cpu,
    Terminal,
    Layers,
    Clock,
    FileText
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
      label: m.it_metric1_label(),
      value: m.it_metric1_val(),
      sublabel: m.it_metric1_sub(),
      color: '#22439c'
    },
    {
      label: m.it_metric2_label(),
      value: m.it_metric2_val(),
      sublabel: m.it_metric2_sub(),
      color: '#10b981'
    },
    {
      label: m.it_metric3_label(),
      value: m.it_metric3_val(),
      sublabel: m.it_metric3_sub(),
      color: '#22439c'
    },
    {
      label: m.it_metric4_label(),
      value: m.it_metric4_val(),
      sublabel: m.it_metric4_sub(),
      color: '#22439c'
    }
  ]);

  const models = $derived([
    {
      id: '01',
      code: '_ONSITE STAFFING/',
      title: m.it_model1_title(),
      icon: Building2,
      desc: m.it_model1_desc(),
      tag: 'onsite model'
    },
    {
      id: '02',
      code: '_DEDICATED SQUAD/',
      title: m.it_model2_title(),
      icon: Users,
      desc: m.it_model2_desc(),
      tag: 'dedicated team'
    },
    {
      id: '03',
      code: '_PROJECT SPRINT/',
      title: m.it_model3_title(),
      icon: Clock,
      desc: m.it_model3_desc(),
      tag: 'sprint augmentation'
    },
    {
      id: '04',
      code: '_LEGAL COMPLIANCE/',
      title: m.it_model4_title(),
      icon: Shield,
      desc: m.it_model4_desc(),
      tag: 'enterprise nda'
    }
  ]);

  const roles = $derived([
    {
      id: '01',
      code: '_BACKEND DEV/',
      title: m.it_role1_title(),
      icon: Terminal,
      desc: m.it_role1_desc(),
      tag: 'rust • go • python'
    },
    {
      id: '02',
      code: '_FRONTEND & MOBILE/',
      title: m.it_role2_title(),
      icon: Layers,
      desc: m.it_role2_desc(),
      tag: 'sveltekit • flutter'
    },
    {
      id: '03',
      code: '_DEVOPS & CLOUD/',
      title: m.it_role3_title(),
      icon: Cpu,
      desc: m.it_role3_desc(),
      tag: 'k8s • aws • ci/cd'
    },
    {
      id: '04',
      code: '_QA & AUTOMATION/',
      title: m.it_role4_title(),
      icon: FileText,
      desc: m.it_role4_desc(),
      tag: 'playwright • k6'
    }
  ]);

  const steps = $derived([
    { num: '48h', title: m.it_step1_title(), desc: m.it_step1_desc() },
    { num: '02', title: m.it_step2_title(), desc: m.it_step2_desc() },
    { num: '14d', title: m.it_step3_title(), desc: m.it_step3_desc() },
    { num: '04', title: m.it_step4_title(), desc: m.it_step4_desc() }
  ]);
</script>

<SeoHead
  title={m.it_page_title()}
  description={m.it_page_desc()}
/>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">

    <!-- 1. Blueprint Subpage Hero (Cyanotype Cobalt Substrate) -->
    <BlueprintSubpageHero
      eyebrow={m.it_hero_eyebrow()}
      eyebrowIcon={Users}
      specBadge={m.it_hero_spec()}
      title={m.it_hero_title()}
      description={m.it_hero_desc()}
      primaryBtnText={m.it_hero_btn_primary()}
      primaryBtnAction={openDemo}
      secondaryBtnText={m.it_hero_btn_secondary()}
      secondaryBtnHref="#onboarding-process"
    />

    <!-- 2. Blueprint Metrics Bar (Crisp Light Hairline Grid) -->
    <BlueprintMetricsBar
      eyebrow={m.it_metrics_eyebrow()}
      title={m.it_metrics_title()}
      theme="light"
      metrics={metrics}
    />

    <!-- 3. 4 Cooperation Models (Dark Cyanotype Architectural Blueprint) -->
    <BlueprintGridSection
      id="models"
      theme="dark"
      eyebrow={m.it_models_eyebrow()}
      title={m.it_models_title()}
      subheading={m.it_models_sub()}
      description={m.it_models_desc()}
      columns={2}
      items={models}
    />

    <!-- 4. Technical Roles Grid (Crisp Light Blueprint) -->
    <BlueprintGridSection
      id="roles"
      theme="light"
      eyebrow={m.it_roles_eyebrow()}
      title={m.it_roles_title()}
      subheading={m.it_roles_sub()}
      description={m.it_roles_desc()}
      columns={2}
      items={roles}
    />

    <!-- 5. 4-Step Onboarding Process (Dark Cyanotype Blueprint) -->
    <section
      id="onboarding-process"
      class="relative theme-cobalt-primary dark bg-background text-foreground"
      style="--section-accent:var(--cobalt-accent, #60a5fa)"
    >
      <div class="strict-grid relative z-2 py-(--grid-unit)">
        <div class="flex flex-col gap-2gu">

          <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
            <div class="flex flex-col gap-3 max-w-40gu">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                _{m.it_steps_badge()}/
              </span>
              <h2 class="h3 font-bold text-foreground">
                {m.it_steps_title()}
              </h2>
              <p class="p-md text-muted-foreground leading-relaxed">
                {m.it_steps_desc()}
              </p>
            </div>
          </div>

          <!-- 4 Steps Abutting Grid -->
          <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:4]">
            {#each steps as step}
              <div
                data-auto-snap="true"
                class="snap-group-item flex flex-col grid-ring bg-background text-foreground p-1gu justify-between"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="h3 font-mono tabular-nums font-bold" style="color:var(--section-accent)">
                      {step.num}
                    </span>
                    <span class="font-mono text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">
                      STEP
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
      eyebrow={m.it_cta_eyebrow()}
      title={m.it_cta_title()}
      description={m.it_cta_desc()}
      primaryText={m.it_cta_btn_primary()}
      primaryAction={openDemo}
      secondaryText="Hotline: 0932 640 968"
      secondaryHref="tel:0932640968"
      theme="dark"
    />

  </main>

  <Footer onOpenDemo={openDemo} />
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
