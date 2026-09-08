<script lang="ts">
  import { Copy, Check, Play, Terminal, Database, Sparkles } from 'lucide-svelte';

  type ScriptTab = 'split' | 'tranche' | 'escrow';

  let activeTab = $state<ScriptTab>('split');
  let copied = $state(false);
  let isExecuting = $state(false);
  let executionResult = $state<{
    txId: string;
    postings: { from: string; to: string; asset: string; amount: string }[];
    balances: { account: string; delta: string }[];
  } | null>(null);

  const scriptExamples = {
    split: {
      filename: 'marketplace_split.num',
      title: 'Marketplace Split Payout',
      code: `send [USD 1000] (
  source = @world
  destination = {
    85% to @sellers:acme_corp
    15% to @platform:fees
  }
)

// Automatically generates balanced postings:
// @world                 -1000.00 USD
// @sellers:acme_corp     +850.00 USD
// @platform:fees         +150.00 USD`,
      postings: [
        { from: '@world', to: '@sellers:acme_corp', asset: 'USD', amount: '850.00' },
        { from: '@world', to: '@platform:fees', asset: 'USD', amount: '150.00' }
      ],
      balances: [
        { account: '@world', delta: '-1000.00 USD' },
        { account: '@sellers:acme_corp', delta: '+850.00 USD' },
        { account: '@platform:fees', delta: '+150.00 USD' }
      ]
    },
    tranche: {
      filename: 'credit_facility.num',
      title: 'Syndicated Credit Tranche',
      code: `send [USDC 2500000] (
  source = @lenders:syndicate_pool
  destination = {
    70% to @tranche:senior_debt
    20% to @tranche:mezzanine_debt
    10% to @tranche:first_loss_reserve
  }
)

// Zero fractional drift guaranteed by Numscript rounding engine`,
      postings: [
        { from: '@lenders:syndicate_pool', to: '@tranche:senior_debt', asset: 'USDC', amount: '1,750,000.00' },
        { from: '@lenders:syndicate_pool', to: '@tranche:mezzanine_debt', asset: 'USDC', amount: '500,000.00' },
        { from: '@lenders:syndicate_pool', to: '@tranche:first_loss_reserve', asset: 'USDC', amount: '250,000.00' }
      ],
      balances: [
        { account: '@lenders:syndicate_pool', delta: '-2,500,000.00 USDC' },
        { account: '@tranche:senior_debt', delta: '+1,750,000.00 USDC' },
        { account: '@tranche:mezzanine_debt', delta: '+500,000.00 USDC' },
        { account: '@tranche:first_loss_reserve', delta: '+250,000.00 USDC' }
      ]
    },
    escrow: {
      filename: 'milestone_escrow.num',
      title: 'Conditional Milestone Escrow',
      code: `send [EUR 45000] (
  source = @escrow:contract_9041
  destination = {
    90% to @vendor:contractor_payout
    10% to @compliance:tax_withholding
  }
)

// Atomic transaction execution with SHA-256 hash attestation`,
      postings: [
        { from: '@escrow:contract_9041', to: '@vendor:contractor_payout', asset: 'EUR', amount: '40,500.00' },
        { from: '@escrow:contract_9041', to: '@compliance:tax_withholding', asset: 'EUR', amount: '4,500.00' }
      ],
      balances: [
        { account: '@escrow:contract_9041', delta: '-45,000.00 EUR' },
        { account: '@vendor:contractor_payout', delta: '+40,500.00 EUR' },
        { account: '@compliance:tax_withholding', delta: '+4,500.00 EUR' }
      ]
    }
  };

  function copyCode() {
    navigator.clipboard.writeText(scriptExamples[activeTab].code);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  function simulateExecution() {
    isExecuting = true;
    executionResult = null;
    setTimeout(() => {
      isExecuting = false;
      executionResult = {
        txId: `tx_${Math.random().toString(36).substring(2, 8)}`,
        postings: scriptExamples[activeTab].postings,
        balances: scriptExamples[activeTab].balances
      };
    }, 450);
  }
</script>

<section id="code-ledger" class="py-20 border-b border-[#e2e8f0] bg-white">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Text Description (Left 5 Cols) -->
      <div class="lg:col-span-5">
        <span class="snap-badge mb-3">_LEDGER/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Always balanced</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">A double-entry ledger built for engineers.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Model any money movement with CreditScript (Numscript syntax). Every transaction is atomic, immutable, and reconciled by construction, so your books never drift — whether handling millions of micro-transactions or complex syndicated loans.
        </p>

        <!-- Script Features List -->
        <div class="flex flex-col gap-3 font-mono text-xs text-[#475569] mb-8">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span>Multi-currency & multi-asset native (USD, EUR, USDC, BTC)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span>Zero rounding drift with arbitrary-precision arithmetic</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span>Deterministic state machine with instantaneous dry-run simulation</span>
          </div>
        </div>

        <button 
          type="button"
          onclick={simulateExecution}
          disabled={isExecuting}
          class="btn-cta-primary !h-11 cursor-pointer flex items-center gap-2"
        >
          <Play size={14} class={isExecuting ? 'animate-spin' : ''} />
          <span>{isExecuting ? 'Compiling Script...' : 'Simulate in Sandbox'}</span>
        </button>
      </div>

      <!-- Code & Execution Sandbox (Right 7 Cols) -->
      <div class="lg:col-span-7">
        <div class="code-card border border-[#cbd5e1] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
          
          <!-- Editor Header with Tabs -->
          <div class="bg-[#f1f5f9] border-b border-[#e2e8f0] px-4 py-2 flex items-center justify-between flex-wrap gap-2">
            
            <!-- File Tabs -->
            <div class="flex items-center gap-1">
              <button
                type="button"
                onclick={() => { activeTab = 'split'; executionResult = null; }}
                class="font-mono text-xs px-3 py-1.5 rounded transition-colors {activeTab === 'split' ? 'bg-white text-[#090e1f] font-semibold shadow-sm border border-[#cbd5e1]' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                marketplace_split.num
              </button>
              <button
                type="button"
                onclick={() => { activeTab = 'tranche'; executionResult = null; }}
                class="font-mono text-xs px-3 py-1.5 rounded transition-colors {activeTab === 'tranche' ? 'bg-white text-[#090e1f] font-semibold shadow-sm border border-[#cbd5e1]' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                credit_facility.num
              </button>
              <button
                type="button"
                onclick={() => { activeTab = 'escrow'; executionResult = null; }}
                class="font-mono text-xs px-3 py-1.5 rounded transition-colors {activeTab === 'escrow' ? 'bg-white text-[#090e1f] font-semibold shadow-sm border border-[#cbd5e1]' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                milestone_escrow.num
              </button>
            </div>

            <!-- Copy Button -->
            <button
              type="button"
              onclick={copyCode}
              class="font-mono text-xs text-[#64748b] hover:text-[#090e1f] flex items-center gap-1 px-2.5 py-1 rounded hover:bg-[#e2e8f0] transition-colors cursor-pointer"
              title="Copy code snippet"
            >
              {#if copied}
                <Check size={13} class="text-[var(--cb-emerald-500)]" />
                <span class="text-[var(--cb-emerald-500)]">Copied!</span>
              {:else}
                <Copy size={13} />
                <span>Copy</span>
              {/if}
            </button>
          </div>

          <!-- Code Body -->
          <div class="p-5 font-mono text-[0.8125rem] leading-relaxed bg-[#f8fafc] text-[#1e293b] overflow-x-auto">
            <pre class="m-0 font-mono"><code>{@html scriptExamples[activeTab].code
              .replace(/send/g, '<span class="text-[var(--cb-azure-600)] font-bold">send</span>')
              .replace(/source/g, '<span class="text-[#64748b]">source</span>')
              .replace(/destination/g, '<span class="text-[#64748b]">destination</span>')
              .replace(/to/g, '<span class="text-[var(--cb-azure-600)] font-bold">to</span>')
              .replace(/(@[a-zA-Z0-9_:]+)/g, '<span class="text-[#0f172a] font-bold">$1</span>')
              .replace(/(\/\/.+)/g, '<span class="text-[#94a3b8] italic">$1</span>')
            }</code></pre>
          </div>

          <!-- Live Execution Output Area -->
          {#if executionResult}
            <div class="border-t border-[#e2e8f0] bg-[#070e24] p-5 text-[#f8fafc] font-mono text-xs">
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-[rgba(50,135,255,0.2)]">
                <div class="flex items-center gap-2 text-[var(--cb-emerald-500)] font-bold">
                  <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)]"></span>
                  <span>ATOMIC COMMIT OK</span>
                </div>
                <div class="text-[#94a3b8]">TX ID: <span class="text-white">{executionResult.txId}</span></div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="text-[0.6875rem] text-[#64748b] uppercase tracking-wider mb-2">Atomic Postings</div>
                  <div class="flex flex-col gap-1.5">
                    {#each executionResult.postings as p}
                      <div class="bg-[#0c1633] p-2 rounded border border-[rgba(50,135,255,0.12)] flex justify-between">
                        <span class="text-[#cbd5e1]">{p.from} → {p.to}</span>
                        <span class="text-[var(--cb-azure-400)] font-bold">+{p.amount} {p.asset}</span>
                      </div>
                    {/each}
                  </div>
                </div>

                <div>
                  <div class="text-[0.6875rem] text-[#64748b] uppercase tracking-wider mb-2">Resulting Account Deltas</div>
                  <div class="flex flex-col gap-1.5">
                    {#each executionResult.balances as b}
                      <div class="bg-[#0c1633] p-2 rounded border border-[rgba(50,135,255,0.12)] flex justify-between">
                        <span class="text-[#cbd5e1]">{b.account}</span>
                        <span class={b.delta.startsWith('+') ? 'text-[var(--cb-emerald-500)]' : 'text-[#f43f5e]'}>{b.delta}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>

            </div>
          {/if}

        </div>
      </div>

    </div>
  </div>
</section>
