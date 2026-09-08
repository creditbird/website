<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';

  const cases = [
    {
      title: 'Digital assets',
      links: [
        'Stablecoin Issuers',
        'Digital Asset Exchanges',
        'Tokenization Platforms',
        'Custody & Wallets',
        'Crypto Payments',
        'Crypto Neobanks',
        'Crypto Payroll'
      ]
    },
    {
      title: 'Fintech',
      links: [
        'Neobanks',
        'Card Issuing',
        'Acquiring',
        'Lending',
        'Investing',
        'Insurance'
      ]
    },
    {
      title: 'AI',
      links: [
        'GPU & Compute Marketplaces',
        'AI Agent Payments',
        'Token Accounting'
      ]
    },
    {
      title: 'Vertical SaaS',
      links: [
        'Marketplace',
        'Hospitality',
        'Healthcare',
        'On-Demand'
      ]
    },
    {
      title: 'Corporate & Treasury',
      links: [
        'International Money Transfers',
        'Accounts Receivable',
        'Multi-Entity Accounting',
        'Ledger Modernization'
      ]
    },
    {
      title: 'Teams',
      links: [
        'For Engineering',
        'For Product',
        'For Finance',
        'For Operations'
      ]
    }
  ];
</script>

<section id="use-cases" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    
    <div class="flex flex-col items-center gap-3 text-center mb-16">
      <span class="snap-badge">_USE CASES/</span>
      <h2 class="h3 text-[#090e1f] max-w-2xl">One ledger. Every use case.</h2>
      <p class="p-lg text-[#475569] max-w-xl">
        From digital assets to corporate treasury, teams build their money movement on one programmable ledger.
      </p>
    </div>

    <!-- 6-Card Grid (Formance Parity) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cases as c}
        <div class="grid-ring bg-white p-6 sm:p-7 rounded-lg flex flex-col justify-between transition-all hover:border-[#059669]">
          <div class="flex flex-col gap-4">
            <span class="badge-sm font-mono uppercase tracking-widest text-[#64748b]">_USE CASE/</span>
            <h3 class="h5 text-[#090e1f]">{c.title}</h3>
            
            <div class="flex flex-col gap-2.5 pt-2 border-t border-[#e2e8f0]">
              {#each c.links as link}
                <a 
                  href="/solutions" 
                  class="group/link inline-flex items-center justify-between text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors py-1"
                >
                  <span>{link}</span>
                  <ArrowRight size={14} class="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-[#059669]" />
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
