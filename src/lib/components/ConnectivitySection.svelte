<script lang="ts">
  import { Network, ArrowRight, Check } from 'lucide-svelte';

  type Provider = 'STRIPE' | 'ADYEN' | 'WISE' | 'PLAID';

  let selectedProvider = $state<Provider>('STRIPE');

  const providerDetails: Record<Provider, {
    name: string;
    rawPayload: string;
    normalizedModel: string;
    rail: string;
    speed: string;
  }> = {
    STRIPE: {
      name: 'Stripe',
      rawPayload: '{"id": "pi_3Mtw", "amount": 10000, "currency": "usd", "status": "succeeded"}',
      normalizedModel: '{"id": "cb_pmt_941", "amount": "100.00", "asset": "USD", "state": "SETTLED", "origin": "@stripe:acct_9"}',
      rail: 'Card Networks & ACH',
      speed: 'T+2 or Instant'
    },
    ADYEN: {
      name: 'Adyen',
      rawPayload: '{"pspReference": "8816", "amount": {"currency": "EUR", "value": 8500}, "resultCode": "Authorised"}',
      normalizedModel: '{"id": "cb_pmt_942", "amount": "85.00", "asset": "EUR", "state": "AUTHORIZED", "origin": "@adyen:pos_de"}',
      rail: 'European SEPA & Local Wallets',
      speed: 'T+1'
    },
    WISE: {
      name: 'Wise',
      rawPayload: '{"transferId": 49012, "sourceValue": 2500, "targetCurrency": "GBP", "status": "outgoing_payment_sent"}',
      normalizedModel: '{"id": "cb_pmt_943", "amount": "2500.00", "asset": "GBP", "state": "DISBURSED", "origin": "@wise:intl_wire"}',
      rail: 'Global Real-Time FX Rails',
      speed: '< 20 Seconds'
    },
    PLAID: {
      name: 'Plaid',
      rawPayload: '{"link_session_id": "ls_44", "balances": {"available": 450000, "iso_currency_code": "USD"}}',
      normalizedModel: '{"id": "cb_pmt_944", "amount": "4500.00", "asset": "USD", "state": "VERIFIED", "origin": "@plaid:depository"}',
      rail: 'Direct Open Banking Auth',
      speed: 'Real-Time Telemetry'
    }
  };
</script>

<section id="connectivity" class="py-20 border-b border-[#e2e8f0] bg-white">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Text Description (Left 5 Cols) -->
      <div class="lg:col-span-5">
        <span class="snap-badge mb-3">_CONNECTIVITY/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Every rail, one model</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">One unified model across PSPs and banks.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Connect Stripe, Adyen, Wise, Plaid, and local clearing banks behind a single unified API. Normalize fragmented payment payloads, webhook variations, and asynchronous statuses into one coherent data model your engineering team can count on.
        </p>

        <!-- Provider Switcher Buttons -->
        <div class="flex flex-wrap gap-2 mb-6">
          {#each (['STRIPE', 'ADYEN', 'WISE', 'PLAID'] as const) as prov}
            <button
              type="button"
              onclick={() => selectedProvider = prov}
              class="font-mono text-xs px-3.5 py-2 rounded border transition-all cursor-pointer {selectedProvider === prov ? 'bg-[var(--cb-cobalt-500)] text-white border-[var(--cb-cobalt-500)] font-semibold shadow-sm' : 'bg-white text-[#475569] border-[#cbd5e1] hover:border-[var(--cb-azure-500)]'}"
            >
              {prov}
            </button>
          {/each}
        </div>

        <div class="p-4 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] font-mono text-xs">
          <div class="text-[#64748b] mb-1">SELECTED CONNECTOR: <span class="text-[#090e1f] font-bold">{providerDetails[selectedProvider].name}</span></div>
          <div class="text-[#64748b] mb-1">RAIL TYPE: <span class="text-[#090e1f]">{providerDetails[selectedProvider].rail}</span></div>
          <div class="text-[#64748b]">SETTLEMENT VELOCITY: <span class="text-[var(--cb-emerald-500)] font-bold">{providerDetails[selectedProvider].speed}</span></div>
        </div>
      </div>

      <!-- Convergence Schematic (Right 7 Cols) -->
      <div class="lg:col-span-7">
        <div class="bg-white border border-[#cbd5e1] rounded-lg p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
            
            <!-- Left Rails Stack -->
            <div class="flex flex-col gap-2.5 w-full sm:w-36 flex-shrink-0">
              {#each (['STRIPE', 'ADYEN', 'WISE', 'PLAID'] as const) as p}
                <button
                  type="button"
                  onclick={() => selectedProvider = p}
                  class="h-10 border rounded px-3 flex items-center justify-between font-mono text-xs font-semibold transition-all cursor-pointer {selectedProvider === p ? 'border-[var(--cb-azure-500)] bg-[rgba(50,135,255,0.08)] text-[var(--cb-azure-600)] shadow-sm' : 'border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] hover:bg-white'}"
                >
                  <span>{p}</span>
                  {#if selectedProvider === p}
                    <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-azure-500)]"></span>
                  {/if}
                </button>
              {/each}
            </div>

            <!-- Animated Convergence Vector Graphic -->
            <div class="hidden sm:flex w-24 h-48 items-center justify-center relative">
              <svg class="w-full h-full" viewBox="0 0 96 192" fill="none">
                <path d="M 0 24 C 48 24, 48 96, 96 96" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 72 C 48 72, 48 96, 96 96" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 120 C 48 120, 48 96, 96 96" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 168 C 48 168, 48 96, 96 96" stroke="#cbd5e1" stroke-width="1.5"/>
                <!-- Pulse animation line -->
                <path class="circuit-pulse" d="M 0 96 L 96 96" stroke="var(--cb-azure-500)" stroke-width="2"/>
              </svg>
            </div>

            <!-- Right: Single Unified Credit Model Card -->
            <div class="flex-1 w-full border border-[var(--cb-azure-500)] rounded-lg bg-[#070e24] p-4 text-[#f8fafc] shadow-lg">
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-[rgba(50,135,255,0.2)] font-mono text-xs">
                <span class="text-[var(--cb-azure-400)] font-bold">credit_model (Normalized)</span>
                <span class="text-[var(--cb-emerald-500)] flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-emerald-500)]"></span>
                  SYNCD
                </span>
              </div>
              
              <div class="font-mono text-xs leading-relaxed text-[#cbd5e1] overflow-x-auto bg-[#030612] p-3 rounded border border-[rgba(50,135,255,0.1)]">
                <pre class="m-0"><code>{JSON.stringify(JSON.parse(providerDetails[selectedProvider].normalizedModel), null, 2)}</code></pre>
              </div>
              <div class="mt-2.5 font-mono text-[0.6875rem] text-[#94a3b8] flex justify-between">
                <span>Schema: standard/v2.1</span>
                <span>Type: Double-Entry Safe</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>
