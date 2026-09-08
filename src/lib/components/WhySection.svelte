<script lang="ts">
  import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-svelte';
</script>

<section id="why" class="py-20 border-b border-[#e2e8f0] bg-white">
  <div class="strict-grid-container">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="snap-badge mb-3">_WHY CREDITBIRD/</span>
      <h2 class="section-title text-[#090e1f]">The ledger you build on. The record you trust.</h2>
      <p class="text-[#475569] mt-3 text-base sm:text-lg">
        Architected from day one for programmatic financial movements, institutional rigor, and developer clarity.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#e2e8f0] rounded-lg border border-[#e2e8f0] overflow-hidden shadow-sm">
      
      <!-- Card 1 -->
      <div class="grid-ring p-8 sm:p-9 bg-white hover:bg-[#f8fafc] transition-all flex flex-col justify-between group">
        <div>
          <div class="h-28 flex items-center justify-center mb-6">
            <svg class="w-20 h-20 text-[var(--cb-cobalt-500)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
              <polygon points="32,6 58,20 58,48 32,62 6,48 6,20" />
              <line x1="32" y1="6" x2="32" y2="62" />
              <line x1="6" y1="20" x2="58" y2="48" />
              <line x1="58" y1="20" x2="6" y2="48" />
            </svg>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <Zap size={18} class="text-[var(--cb-cobalt-500)]" />
            <h3 class="text-xl font-semibold text-[#090e1f]">Build fast</h3>
          </div>
          <p class="text-[#475569] text-sm leading-relaxed mb-6">
            A ledger built to design financial products, not just record them. Model complex fund flows and waterfall allocations in CreditScript and ship in days instead of quarters.
          </p>
        </div>
        <a href="#code-ledger" class="font-mono text-xs text-[var(--cb-cobalt-500)] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-medium">
          See CreditScript <ArrowRight size={13} />
        </a>
      </div>

      <!-- Card 2 -->
      <div class="grid-ring p-8 sm:p-9 bg-white hover:bg-[#f8fafc] transition-all flex flex-col justify-between group">
        <div>
          <div class="h-28 flex items-center justify-center mb-6">
            <svg class="w-20 h-20 text-[var(--cb-cobalt-500)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
              <circle cx="32" cy="32" r="26" />
              <ellipse cx="32" cy="32" rx="26" ry="10" />
              <line x1="32" y1="6" x2="32" y2="58" />
            </svg>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <Target size={18} class="text-[var(--cb-cobalt-500)]" />
            <h3 class="text-xl font-semibold text-[#090e1f]">Track every cent</h3>
          </div>
          <p class="text-[#475569] text-sm leading-relaxed mb-6">
            One real-time source of truth across every rail, currency, and multi-entity account. Eliminate drift between shadow internal ledgers and bank provider statements.
          </p>
        </div>
        <a href="#connectivity" class="font-mono text-xs text-[var(--cb-cobalt-500)] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-medium">
          See Connectors <ArrowRight size={13} />
        </a>
      </div>

      <!-- Card 3 -->
      <div class="grid-ring p-8 sm:p-9 bg-white hover:bg-[#f8fafc] transition-all flex flex-col justify-between group">
        <div>
          <div class="h-28 flex items-center justify-center mb-6">
            <svg class="w-20 h-20 text-[var(--cb-cobalt-500)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2">
              <rect x="14" y="14" width="36" height="36" />
              <rect x="22" y="22" width="20" height="20" stroke-dasharray="2 2" />
              <circle cx="32" cy="32" r="4" fill="var(--cb-cobalt-500)" />
            </svg>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <ShieldCheck size={18} class="text-[var(--cb-cobalt-500)]" />
            <h3 class="text-xl font-semibold text-[#090e1f]">Trust your ledger</h3>
          </div>
          <p class="text-[#475569] text-sm leading-relaxed mb-6">
            An immutable, cryptographic hash-linked system of record that internal auditors, SOC 2 evaluators, and central bank regulators accept with total confidence.
          </p>
        </div>
        <a href="#compliance" class="font-mono text-xs text-[var(--cb-cobalt-500)] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-medium">
          Read the trust model <ArrowRight size={13} />
        </a>
      </div>

    </div>
  </div>
</section>
