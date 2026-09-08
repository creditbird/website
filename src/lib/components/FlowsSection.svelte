<script lang="ts">
  import { Play, CheckCircle2, Clock, GitBranch } from 'lucide-svelte';

  let currentStep = $state(2);

  const workflowSteps = [
    { num: 1, name: 'Authorize Card Payment', status: 'COMPLETED', time: '14ms', provider: 'Stripe' },
    { num: 2, name: 'Deduce Platform Fee (15%)', status: 'IN_PROGRESS', time: '8ms', provider: 'CreditBird Engine' },
    { num: 3, name: 'Hold Escrow for Delivery', status: 'PENDING', time: 'Scheduled', provider: 'Ledger Vault' },
    { num: 4, name: 'SEPA Instant Payout to Merchant', status: 'PENDING', time: 'Queued', provider: 'Wise Network' }
  ];

  function nextStep() {
    currentStep = (currentStep % 4) + 1;
  }
</script>

<section id="flows" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc]">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Code Card (Left 6 Cols) -->
      <div class="lg:col-span-6 order-2 lg:order-1">
        <div class="code-card border border-[#cbd5e1] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
          <div class="code-card-header bg-[#f1f5f9] border-b border-[#e2e8f0] px-4 py-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <GitBranch size={14} class="text-[var(--cb-cobalt-500)]" />
              <span class="font-mono text-xs text-[#475569] font-medium">workflow_orchestrator.yaml</span>
            </div>
            <div class="flex gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[var(--cb-azure-500)]"></span>
            </div>
          </div>

          <div class="p-5 font-mono text-[0.8125rem] leading-relaxed bg-[#f8fafc] text-[#1e293b]">
            <pre class="m-0 font-mono"><code><span class="text-[var(--cb-cobalt-500)] font-bold">name:</span> collect_and_disburse
<span class="text-[var(--cb-cobalt-500)] font-bold">stages:</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">send:</span>
      <span class="text-[#64748b]">destination:</span>
        <span class="text-[#64748b]">account:</span> <span class="text-[#0f172a] font-bold">orders:1234</span>
      <span class="text-[#64748b]">amount:</span>
        <span class="text-[#64748b]">asset:</span>  <span class="text-[#0f172a] font-bold">USD/2</span>
        <span class="text-[#64748b]">amount:</span> <span class="text-[var(--cb-cobalt-500)] font-bold">599</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">wait_event:</span>
      <span class="text-[#64748b]">event:</span> <span class="text-[#0f172a]">fulfillment.delivered</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">payout:</span>
      <span class="text-[#64748b]">connector:</span> <span class="text-[#0f172a]">wise</span>
      <span class="text-[#64748b]">beneficiary:</span> <span class="text-[#0f172a]">vendor_iban_de</span></code></pre>
          </div>

          <!-- Interactive Step Controller Bar -->
          <div class="bg-[#f1f5f9] border-t border-[#e2e8f0] p-4 flex items-center justify-between">
            <div class="font-mono text-xs text-[#64748b]">
              State Machine Step: <span class="text-[var(--cb-cobalt-500)] font-bold">{currentStep} / 4</span>
            </div>
            <button
              type="button"
              onclick={nextStep}
              class="font-mono text-xs px-3 py-1.5 rounded bg-[var(--cb-cobalt-500)] text-white hover:bg-[var(--cb-azure-600)] transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>Advance Step</span>
              <Play size={11} />
            </button>
          </div>
        </div>
      </div>

      <!-- Text & Interactive Step Progression (Right 6 Cols) -->
      <div class="lg:col-span-6 order-1 lg:order-2">
        <span class="snap-badge mb-3">_FLOWS/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Money, orchestrated</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">Payment workflows, declared as code.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Compose multi-step financial flows (splits, fees, holds, automated payouts, conditional escrow) as durable, event-driven programs. Run them reliably across providers with automatic idempotency, retries, and comprehensive auditability.
        </p>

        <!-- Dynamic Step Cards -->
        <div class="flex flex-col gap-2.5">
          {#each workflowSteps as step}
            <div class="p-3.5 rounded-lg border transition-all flex items-center justify-between {step.num === currentStep ? 'bg-white border-[var(--cb-cobalt-500)] shadow-sm' : step.num < currentStep ? 'bg-white border-[#e2e8f0]' : 'bg-[#fafafa] border-[#e2e8f0] opacity-60'}">
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center {step.num < currentStep ? 'bg-[var(--cb-emerald-500)] text-white' : step.num === currentStep ? 'bg-[var(--cb-cobalt-500)] text-white' : 'bg-[#cbd5e1] text-[#64748b]'}">
                  {step.num < currentStep ? '✓' : step.num}
                </span>
                <div>
                  <div class="text-sm font-semibold text-[#1e293b]">{step.name}</div>
                  <div class="font-mono text-[0.6875rem] text-[#64748b]">Rail: {step.provider}</div>
                </div>
              </div>
              <div class="text-right">
                <span class="font-mono text-xs font-semibold {step.num < currentStep ? 'text-[var(--cb-emerald-500)]' : step.num === currentStep ? 'text-[var(--cb-cobalt-500)]' : 'text-[#94a3b8]'}">
                  {step.num < currentStep ? 'COMPLETED' : step.num === currentStep ? 'RUNNING' : 'QUEUED'}
                </span>
                <div class="font-mono text-[0.6875rem] text-[#94a3b8]">{step.time}</div>
              </div>
            </div>
          {/each}
        </div>

      </div>

    </div>
  </div>
</section>
