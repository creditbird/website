<script lang="ts">
  import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-svelte';

  type DayRecord = {
    id: string;
    label: string;
    ledgerHeight: number; // percentage
    externalHeight: number; // percentage
    driftHeight?: number; // percentage
    hasDrift: boolean;
    ledgerAmount: string;
    externalAmount: string;
    driftAmount?: string;
    details: string;
  };

  const days: DayRecord[] = [
    {
      id: 'd5',
      label: 'D-5',
      ledgerHeight: 55,
      externalHeight: 55,
      hasDrift: false,
      ledgerAmount: '$8,420,150.00',
      externalAmount: '$8,420,150.00',
      details: 'Matched & settled across JPMorgan Chase & Stripe. Zero variances.'
    },
    {
      id: 'd4',
      label: 'D-4',
      ledgerHeight: 72,
      externalHeight: 72,
      hasDrift: false,
      ledgerAmount: '$9,180,420.00',
      externalAmount: '$9,180,420.00',
      details: 'Full batch reconciliation complete across 18 currency corridors.'
    },
    {
      id: 'd3',
      label: 'D-3',
      ledgerHeight: 48,
      externalHeight: 48,
      hasDrift: false,
      ledgerAmount: '$7,950,200.00',
      externalAmount: '$7,950,200.00',
      details: 'Instant clearing verified on FedNow & SEPA Instant rails.'
    },
    {
      id: 'd2',
      label: 'D-2',
      ledgerHeight: 86,
      externalHeight: 62,
      driftHeight: 24,
      hasDrift: true,
      ledgerAmount: '$11,450,000.00',
      externalAmount: '$8,250,000.00',
      driftAmount: '$3,200,000.00',
      details: 'Pending batch payout on Adyen clearing rail. Auto-isolated to Clearing:Pending; zero impact on ledger truth.'
    },
    {
      id: 'd1',
      label: 'D-1',
      ledgerHeight: 64,
      externalHeight: 64,
      hasDrift: false,
      ledgerAmount: '$10,240,890.00',
      externalAmount: '$10,240,890.00',
      details: 'Postings verified against CAMT.053 intraday bank statement.'
    },
    {
      id: 'd0',
      label: 'D-0',
      ledgerHeight: 78,
      externalHeight: 78,
      hasDrift: false,
      ledgerAmount: '$13,341,950.00',
      externalAmount: '$13,341,950.00',
      details: 'Continuous real-time tick reconciliation streaming live.'
    }
  ];

  let selectedDayIndex = $state(3); // Default to D-2 to showcase drift discovery
  let selected = $derived(days[selectedDayIndex]);
</script>

<section id="reconciliation" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- Left Visual Card (Formance Parity Octi-Grow Drift Indicator) -->
      <div class="lg:col-span-6">
        <div class="grid-ring bg-white p-6 sm:p-8 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          
          <!-- Top Telemetry Header -->
          <div class="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
            <div>
              <span class="badge-sm font-mono uppercase tracking-widest text-[#64748b]">Real-Time Audit</span>
              <div class="text-sm font-semibold text-[#090e1f] mt-0.5">Ledger Balances vs Bank Clearing Pools</div>
            </div>
            
            {#if selected.hasDrift}
              <span class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#fee2e2] text-[#dc2626]">
                <AlertTriangle size={13} />
                <span>DRIFT DETECTED</span>
              </span>
            {:else}
              <span class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[rgba(16,185,129,0.1)] text-[#059669]">
                <CheckCircle2 size={13} />
                <span>BALANCED 0.00%</span>
              </span>
            {/if}
          </div>

          <!-- Dual Bar Chart Visualizer (Exact Formance Geometry) -->
          <div class="flex flex-col gap-3">
            <div 
              class="flex items-end justify-between gap-2 sm:gap-4 px-2 py-4 border-b border-[#e2e8f0]"
              style="min-height: 220px;"
            >
              {#each days as day, idx}
                <button
                  type="button"
                  onclick={() => selectedDayIndex = idx}
                  class="flex-1 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  aria-label="Inspect day {day.label}"
                >
                  <!-- Dual Bar Column Container -->
                  <div class="flex items-end gap-1 sm:gap-1.5 h-44 w-full max-w-[42px] justify-center">
                    
                    <!-- 1. Internal Ledger Bar (Solid Accent) -->
                    <div 
                      class="octi-grow w-3 sm:w-3.5 rounded-t transition-all duration-300 {selectedDayIndex === idx ? 'bg-[#059669] shadow-sm' : 'bg-[#0f172a] group-hover:bg-[#059669]'}"
                      style="height: {day.ledgerHeight}%; animation-delay: {idx * 60}ms;"
                    ></div>

                    <!-- 2. External Clearing Rail Bar (Outlined or Split with Drift Block) -->
                    <div class="relative flex items-end h-full w-3 sm:w-3.5">
                      {#if day.hasDrift && day.driftHeight}
                        <!-- Matching baseline height -->
                        <div 
                          class="octi-grow w-full rounded-b transition-all"
                          style="height: {day.externalHeight}%; background-color: transparent; border: 1.5px solid #e8857f; animation-delay: {idx * 60 + 40}ms;"
                        ></div>

                        <!-- Coral Dashed Drift Gap Block -->
                        <div 
                          class="octi-grow absolute left-0 w-full rounded-t"
                          style="
                            bottom: {day.externalHeight}%;
                            height: {day.driftHeight}%;
                            background-color: rgba(232, 133, 127, 0.25);
                            border: 1.5px dashed #e8857f;
                            animation-delay: {idx * 60 + 80}ms;
                          "
                        ></div>
                      {:else}
                        <!-- Exact 1:1 Matched Outlined Bar -->
                        <div 
                          class="octi-grow w-full rounded-t transition-all {selectedDayIndex === idx ? 'border-[#059669] bg-[rgba(5,150,105,0.06)]' : 'border-[#64748b] bg-transparent group-hover:border-[#059669]'}"
                          style="height: {day.externalHeight}%; border-width: 1.5px; border-style: solid; animation-delay: {idx * 60 + 40}ms;"
                        ></div>
                      {/if}
                    </div>
                  </div>

                  <!-- Day Label -->
                  <div class="flex flex-col items-center">
                    <span class="badge-sm font-mono uppercase tracking-wider transition-colors {selectedDayIndex === idx ? 'text-[#059669] font-bold' : 'text-[#64748b] group-hover:text-[#090e1f]'}">
                      {day.label}
                    </span>
                  </div>
                </button>
              {/each}
            </div>

            <!-- Legend (Formance Exact Specification) -->
            <div class="grid grid-cols-3 gap-2 pt-2 text-xs font-mono">
              <span class="flex items-center gap-2 text-[#475569]">
                <span class="block w-3 h-3 rounded-sm bg-[#059669]"></span>
                <span class="badge-sm uppercase text-[#64748b]">ledger</span>
              </span>
              <span class="flex items-center gap-2 text-[#475569]">
                <span class="block w-3 h-3 rounded-sm border-[1.5px] border-[#059669] bg-transparent"></span>
                <span class="badge-sm uppercase text-[#64748b]">external</span>
              </span>
              <span class="flex items-center gap-2 text-[#475569]">
                <span class="block w-3 h-3 rounded-sm border-[1.5px] border-dashed border-[#e8857f] bg-[#e8857f]"></span>
                <span class="badge-sm uppercase text-[#64748b]">drift</span>
              </span>
            </div>
          </div>

          <!-- Active Day Drill-Down Box -->
          <div class="p-3.5 rounded bg-[#f8fafc] border border-[#e2e8f0] font-mono text-xs flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-[#64748b]">Selected:</span>
                <span class="font-bold text-[#090e1f]">{selected.label}</span>
                <span class="text-[#94a3b8]">|</span>
                <span class="text-[#475569]">Ledger: {selected.ledgerAmount}</span>
              </div>
              <div>
                {#if selected.hasDrift}
                  <span class="text-[#dc2626] font-bold">Variance: {selected.driftAmount}</span>
                {:else}
                  <span class="text-[#059669] font-bold">Variance: $0.00</span>
                {/if}
              </div>
            </div>
            <p class="text-[11px] text-[#64748b] leading-relaxed font-sans">{selected.details}</p>
          </div>

        </div>
      </div>

      <!-- Right Column: Strategic Copy (Formance Exact Copy & Cadence) -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <span class="snap-badge self-start">_RECONCILIATION/</span>
        
        <h2 class="h3 text-[#090e1f]">Catch drift instantly</h2>
        
        <p class="subheading-md text-[#090e1f]">
          Ledger vs Payments pool, side by side.
        </p>
        
        <p class="p-md text-[#475569] leading-relaxed">
          Compare your internal Ledger balances against your external banking and payment provider pooling balances continuously. The moment a transaction or settlement day drifts, the gap is surfaced immediately — not discovered weeks later during end-of-month book closing.
        </p>

        <div class="flex flex-col gap-3.5 pt-2 font-mono text-xs text-[#334155]">
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Continuous Tick Matching:</strong> Ingest bank statements and webhooks in real time to match payments against internal transactions with millisecond accuracy.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Automated Drift Isolation:</strong> Route unsettled variances or delayed rail settlements into isolated suspense ledgers with immutable cryptographic logs.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Audit-Ready Export:</strong> Generate ISO 20022 and CAMT.053 reconciliation evidence for banking partners and regulatory auditors on demand.
            </div>
          </div>
        </div>

        <div class="pt-4">
          <a 
            href="/platform/reconciliation" 
            class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[#059669] hover:underline"
          >
            <span>Explore automated reconciliation</span>
            <span aria-hidden="true" class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        </div>

      </div>

    </div>
  </div>
</section>
