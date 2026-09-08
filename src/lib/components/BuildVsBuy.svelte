<script lang="ts">
  import { XCircle, CheckCircle2 } from 'lucide-svelte';

  const inHousePoints = [
    { num: '01', title: 'Balances drift silently', desc: 'When ledger writes aren\'t atomic or cross multiple services, balance drifts accumulate untracked.' },
    { num: '02', title: 'Babysitting reconciliation scripts', desc: 'Brittle cron jobs fire nightly; internal records perpetually disagree with bank provider statements.' },
    { num: '03', title: 'Endless bespoke integrations', desc: 'Every new payment processor or clearing bank requires a custom schema rewrite and ad-hoc ledger glue.' },
    { num: '04', title: 'Fragmented siloed numbers', desc: 'Engineering databases, finance spreadsheets, and ops dashboards report three conflicting realities.' },
    { num: '05', title: 'Audit fire drills', desc: 'Historical states are mutable and hard to verify; answering auditor requests takes weeks of engineering hours.' }
  ];

  const creditbirdPoints = [
    { num: '01', title: 'Double-entry, atomic by construction', desc: 'Mathematically strict debits always equal credits; multi-currency balance sheets stay permanently balanced.' },
    { num: '02', title: 'Continuous real-time reconciliation', desc: 'Discrepancies surface the exact second they happen with granular event metadata and root-cause tracing.' },
    { num: '03', title: 'Normalized multi-rail connectors', desc: 'One standardized API across Stripe, Adyen, Wise, and clearing networks; add a provider with zero engine refactor.' },
    { num: '04', title: 'One single source of truth', desc: 'Engineering, risk, finance, and compliance share identical real-time ledger primitives and balance snapshots.' },
    { num: '05', title: 'Append-only cryptographic log', desc: 'Tamper-evident SHA-256 hash chains; turnkey SOC 2 Type II, ISO 27001, and DORA audit readiness.' }
  ];
</script>

<section id="build-vs-buy" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc]">
  <div class="strict-grid-container">
    
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="snap-badge mb-3">_BUILD VS BUY/</span>
      <h2 class="section-title text-[#090e1f]">Why not build it yourself?</h2>
      <p class="text-[#475569] text-base sm:text-lg mt-3 leading-relaxed">
        Every engineering team moving money rebuilds the same core ledger under crunch deadlines — rarely with the mathematical guarantees institutional banking demands.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
      
      <!-- Left Card: Build In-House -->
      <div class="bg-white border border-[#e2e8f0] p-7 sm:p-9 rounded-lg shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
            <span class="snap-badge !bg-[#f1f5f9] !text-[#64748b] !border-[#cbd5e1]">_BUILD IN-HOUSE/</span>
            <span class="font-mono text-xs text-[#94a3b8] uppercase">The Hidden Cost</span>
          </div>
          
          <ul class="flex flex-col gap-6">
            {#each inHousePoints as pt}
              <li class="flex gap-4 items-start">
                <span class="font-mono text-sm font-semibold text-[#94a3b8] pt-0.5">{pt.num}</span>
                <div>
                  <div class="text-sm font-semibold text-[#334155] mb-0.5 flex items-center gap-1.5">
                    <XCircle size={15} class="text-[#e11d48] flex-shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-[#64748b] leading-relaxed">{pt.desc}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Right Card: With CreditBird -->
      <div class="bg-white border-2 border-[var(--cb-cobalt-500)] p-7 sm:p-9 rounded-lg shadow-[0_8px_30px_rgba(37,99,235,0.08)] flex flex-col justify-between relative overflow-hidden">
        
        <div>
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#e2e8f0] relative z-10">
            <span class="snap-badge !bg-[rgba(37,99,235,0.08)] !text-[var(--cb-cobalt-500)] !border-[var(--cb-azure-500)]">
              _WITH CREDITBIRD/
            </span>
            <span class="font-mono text-xs text-[var(--cb-emerald-500)] font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-emerald-500)]"></span>
              Institutional Ready
            </span>
          </div>

          <ul class="flex flex-col gap-6 relative z-10">
            {#each creditbirdPoints as pt}
              <li class="flex gap-4 items-start">
                <span class="font-mono text-sm font-semibold text-[var(--cb-cobalt-500)] pt-0.5">{pt.num}</span>
                <div>
                  <div class="text-sm font-semibold text-[#090e1f] mb-0.5 flex items-center gap-1.5">
                    <CheckCircle2 size={15} class="text-[var(--cb-cobalt-500)] flex-shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-[#475569] leading-relaxed">{pt.desc}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>

      </div>

    </div>

    <!-- Bottom Action Link like Formance -->
    <div class="pt-2">
      <a href="#code-ledger" class="font-mono text-xs text-[var(--cb-cobalt-500)] hover:text-[var(--cb-azure-500)] inline-flex items-center gap-1.5 font-medium transition-transform hover:translate-x-1">
        Read our approach →
      </a>
    </div>

  </div>
</section>
