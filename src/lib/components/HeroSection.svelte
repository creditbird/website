<script lang="ts">
  import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity, RefreshCw } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  type Currency = 'USDC' | 'USD' | 'EUR' | 'ETH';

  let selectedCurrency = $state<Currency>('USDC');
  let volumeCount = $state(13341950);
  let isSimulating = $state(false);

  const currencyRates: Record<Currency, { symbol: string; base: number; decimals: number }> = {
    USDC: { symbol: 'USDC', base: 13341950, decimals: 2 },
    USD: { symbol: '$', base: 13341950, decimals: 2 },
    EUR: { symbol: '€', base: 12284100, decimals: 2 },
    ETH: { symbol: 'ETH', base: 4169.37, decimals: 2 }
  };

  let transactions = $state([
    { id: 'tx_981a', source: '@world', dest: '@credit:growth_facility', amount: '+2,500,000 USDC', status: 'SETTLED', time: 'Just now' },
    { id: 'tx_980c', source: '@merchants:apex', dest: '@escrow:tranche_b', amount: '+840,000 USDC', status: 'SETTLED', time: '12s ago' },
    { id: 'tx_979f', source: '@treasury:root', dest: '@pools:liquidity_v2', amount: '+1,200,000 USDC', status: 'SETTLED', time: '34s ago' }
  ]);

  function triggerSimulation() {
    isSimulating = true;
    const addAmount = Math.floor(Math.random() * 500000) + 100000;
    volumeCount += addAmount;

    const newTx = {
      id: `tx_${Math.random().toString(36).substring(2, 6)}`,
      source: '@borrower:enterprise_credit',
      dest: '@credit:drawdown_pool',
      amount: `+${addAmount.toLocaleString()} ${selectedCurrency}`,
      status: 'SETTLED',
      time: 'Just now'
    };

    transactions = [newTx, ...transactions.slice(0, 2)];
    setTimeout(() => {
      isSimulating = false;
    }, 600);
  }

  function setCurrency(curr: Currency) {
    selectedCurrency = curr;
    volumeCount = currencyRates[curr].base;
  }
</script>

<section class="pt-16 pb-16 border-b border-[#e2e8f0] bg-white relative overflow-hidden">
  
  <div class="strict-grid-container text-center max-w-5xl mx-auto relative z-10">
    
    <!-- Top Eyebrow Tag -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#cbd5e1] bg-[#f8fafc] mb-6 shadow-sm">
      <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)] animate-pulse"></span>
      <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
        _PROGRAMMABLE MONEY MOVEMENT/
      </span>
    </div>

    <h1 class="hero-title mb-6 text-[#090e1f] max-w-4xl mx-auto">
      The ledger your money deserves
    </h1>

    <p class="text-base sm:text-lg md:text-xl leading-relaxed text-[#475569] mb-10 max-w-3xl mx-auto font-normal">
      The open-source programmable ledger for fiat and digital credit. Model any flow of funds, track every cent in real time, and build on the immutable system of record trusted by regulators and auditors.
    </p>

    <!-- CTAs -->
    <div class="flex items-center justify-center gap-4 mb-14 flex-wrap">
      <a href="#code-ledger" class="btn-cta-outline min-w-[190px]">
        START BUILDING
      </a>
      <button 
        type="button" 
        onclick={onOpenDemo}
        class="btn-cta-primary min-w-[190px] cursor-pointer"
      >
        BOOK A DEMO
      </button>
    </div>

    <!-- Centerpiece: Live Volume Processed Card (Exact Formance Parity Cockpit) -->
    <div class="grid-ring max-w-3xl mx-auto p-6 sm:p-7 rounded-lg border border-[#cbd5e1] text-left bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
      
      <!-- Card Top Bar -->
      <div class="flex flex-wrap items-center justify-between border-b border-[#e2e8f0] pb-3.5 mb-5 gap-3">
        <div class="flex items-center gap-2">
          <span class="font-mono text-xs tracking-wider text-[#475569] font-medium">LEDGER • TRANSACTIONS</span>
          <span class="text-[#cbd5e1]">|</span>
          <!-- Currency Switcher -->
          <div class="flex items-center gap-1 bg-[#f1f5f9] p-0.5 rounded border border-[#e2e8f0] font-mono text-[0.6875rem]">
            {#each (['USDC', 'USD', 'EUR', 'ETH'] as const) as curr}
              <button
                type="button"
                onclick={() => setCurrency(curr)}
                class="px-2 py-0.5 rounded transition-colors {selectedCurrency === curr ? 'bg-[var(--cb-azure-500)] text-white font-bold' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                {curr}
              </button>
            {/each}
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 font-mono text-xs text-[var(--cb-emerald-500)]">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)] animate-ping inline-flex"></span>
            <span class="font-semibold">LIVE LEDGER MAIN</span>
          </div>
          <button
            type="button"
            onclick={triggerSimulation}
            disabled={isSimulating}
            class="font-mono text-[0.6875rem] px-2.5 py-1 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[var(--cb-cobalt-500)] hover:bg-[#e2e8f0] transition-all flex items-center gap-1 cursor-pointer font-medium"
            title="Simulate incoming transaction"
          >
            <RefreshCw size={11} class={isSimulating ? 'animate-spin' : ''} />
            <span>Simulate TX</span>
          </button>
        </div>
      </div>

      <!-- Volume Metric Display -->
      <div class="mb-5">
        <div class="font-mono text-xs text-[#64748b] uppercase tracking-wider mb-1">Volume Processed (Real-Time)</div>
        <div class="font-mono text-3xl sm:text-4xl font-bold text-[#090e1f] tracking-tight flex items-baseline gap-2">
          <span>{selectedCurrency === 'USD' ? '$' : selectedCurrency === 'EUR' ? '€' : ''}{volumeCount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          {#if selectedCurrency === 'USDC' || selectedCurrency === 'ETH'}
            <span class="text-lg text-[var(--cb-cobalt-500)] font-semibold">{selectedCurrency}</span>
          {/if}
        </div>
      </div>

      <!-- Transaction Feed Row -->
      <div class="border-t border-[#e2e8f0] pt-4 flex flex-col gap-2.5">
        <div class="font-mono text-[0.6875rem] text-[#64748b] uppercase tracking-widest mb-1 flex justify-between">
          <span>Recent Ledger Entries</span>
          <span>Double-Entry Attested</span>
        </div>
        
        {#each transactions as tx (tx.id)}
          <div class="font-mono text-xs text-[#475569] grid grid-cols-1 sm:grid-cols-3 gap-1.5 py-2 px-3 rounded bg-[#f8fafc] border border-[#e2e8f0] items-center hover:border-[var(--cb-azure-500)] transition-colors">
            <div class="truncate">
              <span class="text-[#94a3b8]">SRC:</span> <span class="text-[#090e1f] font-medium">{tx.source}</span>
            </div>
            <div class="truncate">
              <span class="text-[#94a3b8]">DST:</span> <span class="text-[var(--cb-cobalt-500)] font-medium">{tx.dest}</span>
            </div>
            <div class="sm:text-right text-[var(--cb-emerald-500)] font-semibold flex items-center justify-between sm:justify-end gap-2">
              <span>{tx.amount}</span>
              <span class="text-[0.625rem] text-[#94a3b8]">{tx.time}</span>
            </div>
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
