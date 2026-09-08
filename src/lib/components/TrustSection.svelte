<script lang="ts">
  import { ShieldCheck, Check } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  const complianceStackItems = [
    'IAM, RBAC & SSO',
    'Non-repudiation',
    'Audit logs',
    'Observability & monitoring',
    'Real-time events',
    'Admin console'
  ];

  const frameworks = [
    'EMI',
    'FCA',
    'MTL',
    'NYDFS Trust Charter',
    'OCC Charter',
    'MiCA',
    'GENIUS'
  ];

  const sampleLogs = [
    { time: '09:41:07Z', type: 'AUDIT', comp: 'gateway', text: 'POST /api/ledger/v2/main/transactions', status: '200', sub: 'sub:ops@creditbird.com' },
    { time: '09:41:09Z', type: 'LOG', comp: 'id:4093', text: 'NEW_TRANSACTION', status: '', sub: 'ledger:main' },
    { time: '09:41:12Z', type: 'LOG', comp: 'id:4094', text: 'SET_METADATA', status: '', sub: 'ledger:main' },
    { time: '09:41:15Z', type: 'LOG', comp: 'id:4095', text: 'REVERTED_TRANSACTION', status: '', sub: 'ledger:main' },
    { time: '09:41:18Z', type: 'AUDIT', comp: 'gateway', text: 'GET /api/ledger/v2/main/logs', status: '200', sub: 'sub:audit@creditbird.com' }
  ];
</script>

<section 
  id="trust" 
  class="relative theme-emerald bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-700, #22439c))"
>
  <div class="strict-grid relative z-2 py-1gu no-bg-grid">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Header: Title & Action -->
      <div class="flex flex-col justify-between gap-3 lg:flex-row lg:items-start lg:gap-2gu min-h-[calc(var(--grid-unit)*5)]">
        <div class="flex min-w-0 flex-col gap-3">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _TRUST/
          </span>
          <h2 class="h3 text-foreground">Built for regulated money.</h2>
          <p class="p-md text-muted-foreground max-w-30gu">
            Enterprise controls, the certifications auditors ask for, and an immutable record, out of the box.
          </p>
        </div>

        <button 
          type="button" 
          onclick={onOpenDemo}
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-8 h-9 uppercase shrink-0 self-start shadow-sm transition-colors"
        >
          See our trust center
        </button>
      </div>

      <!-- Formance Parity 4-Column x 2-Row Compliance Grid with .grid-ring Overlap -->
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:h-[calc(var(--grid-unit)*22)] lg:min-h-[calc(var(--grid-unit)*22)]" style="--eyebrow-background:#edf2ff;--eyebrow-foreground:#22439c">
        
        <!-- 1. The Compliance Stack (Col 1, Spans 2 Rows) -->
        <div class="grid-ring bg-card-background flex flex-col lg:row-span-2 h-full">
          <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-card-muted-foreground h-3gu flex items-center px-1gu">
            THE COMPLIANCE STACK
          </span>
          <div class="flex flex-col flex-1">
            {#each complianceStackItems as item}
              <div class="grid-ring bg-card-background flex min-h-3gu flex-1 items-center gap-1gu px-1gu md:min-h-2gu">
                <Check class="size-[calc(var(--grid-unit)*0.6)] shrink-0" style="color:var(--section-accent)" />
                <span class="p-sm text-card-foreground">{item}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- 2. Audit-Log / Non-Repudiation (Cols 2-3, Row 1) -->
        <div class="dark grid-ring bg-card-background flex min-h-0 flex-col lg:col-span-2 lg:h-[calc(var(--grid-unit)*11)]">
          <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-card-muted-foreground h-3gu flex items-center px-1gu">_AUDIT-LOG/ NON-REPUDIATION</span>

          <div class="flex flex-1 flex-col justify-center gap-gu-0.5 overflow-hidden p-1gu pt-0 font-mono" role="log" aria-label="Sample audit and ledger log entries">
            {#each sampleLogs as log}
              <p class="badge-sm font-mono text-card-foreground truncate">
                {log.time}  {log.type.padEnd(5)}  {log.comp.padEnd(7)}  {log.text}  {log.status ? log.status + '  ' : ''}{log.sub}
              </p>
            {/each}
          </div>
        </div>

        <!-- 3. Certifications (Col 4, Row 1) -->
        <div class="dark grid-ring bg-card-background flex flex-col min-h-0 lg:h-[calc(var(--grid-unit)*11)]">
          <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-card-muted-foreground h-3gu flex items-center px-1gu">CERTIFICATIONS</span>
          <div class="flex flex-1 flex-col">
            <div class="grid-ring bg-card-background flex min-h-3gu flex-1 items-center px-1gu md:min-h-2gu">
              <div class="flex items-center gap-1gu">
                <ShieldCheck class="size-[calc(var(--grid-unit)*1.75)] shrink-0 text-card-foreground md:size-2gu" strokeWidth={1.5} />
                <div class="flex flex-col gap-1">
                  <span class="badge-md font-mono uppercase tracking-wider text-card-foreground">AICPA SOC II</span>
                  <span class="badge-sm font-mono uppercase tracking-wider text-card-muted-foreground">CERTIFIED</span>
                </div>
              </div>
            </div>

            <div class="grid-ring bg-card-background flex min-h-3gu flex-1 items-center px-1gu md:min-h-2gu">
              <div class="flex items-center gap-1gu">
                <ShieldCheck class="size-[calc(var(--grid-unit)*1.75)] shrink-0 text-card-foreground md:size-2gu" strokeWidth={1.5} />
                <div class="flex flex-col gap-1">
                  <span class="badge-md font-mono uppercase tracking-wider text-card-foreground">ISO 27001</span>
                  <span class="badge-sm font-mono uppercase tracking-wider text-card-muted-foreground">CERTIFIED</span>
                </div>
              </div>
            </div>

            <div class="grid-ring bg-card-background flex min-h-3gu flex-1 items-center px-1gu md:min-h-2gu">
              <div class="flex items-center gap-1gu">
                <ShieldCheck class="size-[calc(var(--grid-unit)*1.75)] shrink-0 text-card-foreground md:size-2gu" strokeWidth={1.5} />
                <div class="flex flex-col gap-1">
                  <span class="badge-md font-mono uppercase tracking-wider text-card-foreground">DORA</span>
                  <span class="badge-sm font-mono uppercase tracking-wider text-card-muted-foreground">COMPLIANT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Regulatory Frameworks (Cols 2-3, Row 2) -->
        <div class="grid-ring bg-card-background flex flex-col lg:col-span-2 lg:h-[calc(var(--grid-unit)*11)]">
          <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-card-muted-foreground h-3gu flex items-center px-1gu">REGULATORY FRAMEWORKS</span>
          
          <div class="flex flex-wrap gap-1gu p-1gu pt-0">
            {#each frameworks as fw}
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) px-1gu text-eyebrow-foreground bg-eyebrow-background">
                {fw}
              </span>
            {/each}
          </div>
        </div>

        <!-- 5. Attested Octagonal Seal (Col 4, Row 2) -->
        <div class="grid-ring bg-card-background flex flex-col items-center justify-center gap-1gu p-1gu lg:h-[calc(var(--grid-unit)*11)]">
          <div class="relative aspect-square w-full text-card-foreground max-w-6gu">
            <svg viewBox="0 0 100 100" fill="none" class="h-full w-full" role="img" aria-label="Independently attested">
              <path d="M30 3 H70 L97 30 V70 L70 97 H30 L3 70 V30 Z" stroke="currentColor" stroke-width="1.25" opacity="0.5" pathLength="1" stroke-dashoffset="0" stroke-dasharray="1 1"></path>
              <path d="M35 14 H65 L86 35 V65 L65 86 H35 L14 65 V35 Z" stroke="currentColor" stroke-width="1" opacity="0.8" pathLength="1" stroke-dashoffset="0" stroke-dasharray="1 1"></path>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <Check class="size-[38%]" strokeWidth={2} />
            </div>
          </div>
          <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-card-muted-foreground">_ATTESTED/</span>
        </div>

      </div>

    </div>
  </div>
</section>
