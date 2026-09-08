<script lang="ts">
  import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from 'lucide-svelte';

  let { isOpen = false, onclose }: { isOpen?: boolean; onclose?: () => void } = $props();

  let fullName = $state('');
  let email = $state('');
  let company = $state('');
  let useCase = $state('Fintech / Lending');
  let volume = $state('$1M - $10M / month');
  let isSubmitting = $state(false);
  let submitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email || !fullName) return;

    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      submitted = true;
    }, 600);
  }

  function handleClose() {
    submitted = false;
    onclose?.();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
    role="dialog"
    aria-modal="true"
  >
    <!-- Modal Card -->
    <div class="relative w-full max-w-lg bg-white border border-[#cbd5e1] rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.18)] overflow-hidden text-left">
      
      <!-- Close Button -->
      <button 
        type="button" 
        onclick={handleClose}
        class="absolute top-4 right-4 text-[#64748b] hover:text-[#090e1f] p-1 rounded hover:bg-[#f1f5f9] transition-colors cursor-pointer"
        aria-label="Close dialog"
      >
        <X size={20} />
      </button>

      {#if !submitted}
        <!-- Modal Header -->
        <div class="p-6 sm:p-7 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)]"></span>
            <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
              CREDITBIRD ARCHITECTURE DEMO
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-[#090e1f]">
            Book a Technical Walkthrough
          </h3>
          <p class="text-xs sm:text-sm text-[#475569] mt-1">
            Explore CreditScript workflows, multi-rail connectors, and zero-drift ledger mechanics with our engineering team.
          </p>
        </div>

        <!-- Form -->
        <form onsubmit={handleSubmit} class="p-6 sm:p-7 flex flex-col gap-4 font-sans text-sm">
          
          <div>
            <label for="modal-name" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
              FULL NAME <span class="text-[var(--cb-cobalt-500)]">*</span>
            </label>
            <input 
              id="modal-name" 
              type="text" 
              bind:value={fullName} 
              required
              placeholder="Alex Vance" 
              class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
            />
          </div>

          <div>
            <label for="modal-email" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
              WORK EMAIL <span class="text-[var(--cb-cobalt-500)]">*</span>
            </label>
            <input 
              id="modal-email" 
              type="email" 
              bind:value={email} 
              required
              placeholder="alex@fintech.io" 
              class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="modal-company" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                COMPANY
              </label>
              <input 
                id="modal-company" 
                type="text" 
                bind:value={company}
                placeholder="Acme Financial" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>

            <div>
              <label for="modal-usecase" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                PRIMARY USE CASE
              </label>
              <select 
                id="modal-usecase" 
                bind:value={useCase}
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              >
                <option value="Fintech / Lending">Fintech / Lending</option>
                <option value="Digital Assets / Stablecoins">Digital Assets / Stablecoins</option>
                <option value="Marketplace Split Payouts">Marketplace Split Payouts</option>
                <option value="AI / Compute Metering">AI / Compute Metering</option>
                <option value="Corporate Treasury">Corporate Treasury</option>
              </select>
            </div>
          </div>

          <div class="mt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              class="btn-cta-primary w-full !h-11 text-xs cursor-pointer flex items-center justify-center gap-2"
            >
              {#if isSubmitting}
                <span>Generating Sandbox Keys...</span>
              {:else}
                <span>CONFIRM & BOOK DEMO</span>
                <ArrowRight size={14} />
              {/if}
            </button>
          </div>

          <div class="flex items-center justify-center gap-2 font-mono text-[0.6875rem] text-[#64748b] mt-1">
            <ShieldCheck size={12} class="text-[var(--cb-emerald-500)]" />
            <span>SOC 2 Type II Confidential • No Spam Guarantee</span>
          </div>

        </form>
      {:else}
        <!-- Success State -->
        <div class="p-8 sm:p-10 text-center flex flex-col items-center">
          <div class="w-14 h-14 rounded-full bg-[rgba(16,185,129,0.15)] text-[var(--cb-emerald-500)] flex items-center justify-center mb-5">
            <CheckCircle2 size={32} />
          </div>
          <h3 class="text-2xl font-bold text-[#090e1f] mb-2">
            Demo Request Confirmed
          </h3>
          <p class="text-sm text-[#475569] max-w-sm mb-6 leading-relaxed">
            Thank you, <strong class="text-[#090e1f]">{fullName}</strong>. A CreditBird infrastructure architect will contact <strong class="text-[#090e1f]">{email}</strong> within 2 business hours with private sandbox credentials.
          </p>
          <div class="p-4 rounded bg-[#f8fafc] border border-[#cbd5e1] font-mono text-xs text-left w-full mb-6 text-[#1e293b]">
            <div class="text-[var(--cb-cobalt-500)] mb-1 font-bold">PROVISIONED_ENVIRONMENT:</div>
            <div>cluster: <span class="text-[#090e1f] font-semibold">sandbox-us-east.creditbird.dev</span></div>
            <div>protocol: <span class="text-[var(--cb-emerald-500)] font-semibold">mTLS + Numscript Engine v2.4</span></div>
          </div>
          <button 
            type="button" 
            onclick={handleClose}
            class="btn-cta-primary !h-10 text-xs px-6 cursor-pointer"
          >
            Done
          </button>
        </div>
      {/if}

    </div>
  </div>
{/if}
