<script lang="ts">
  import { Menu, X, ArrowRight, ExternalLink } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleNavClick() {
    mobileMenuOpen = false;
  }
</script>

<!-- Announcement Bar -->
<div class="bg-[#0c1633] text-[#cbd5e1] border-b border-[#16295c] h-[38px] flex items-center justify-center text-[0.8125rem]">
  <div class="strict-grid-container flex items-center justify-center h-full">
    <span class="bg-[var(--cb-azure-500)] text-white font-mono text-[0.6875rem] px-2 py-0.5 font-bold mr-3 rounded-sm">NEW</span>
    <span class="truncate">CreditBird Engine v2.4 released: Programmable credit tranches & real-time settlement</span>
    <a href="#code-ledger" class="ml-3 text-[var(--cb-azure-400)] font-mono text-xs underline underline-offset-4 hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors">
      Explore Spec <ArrowRight size={12} />
    </a>
  </div>
</div>

<!-- Header Navigation -->
<header class="h-[72px] border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-colors">
  <div class="strict-grid-container flex items-center justify-between h-full">
    
    <!-- Logo + Brand Wordmark -->
    <a href="/" class="flex items-center gap-3.5 group">
      <img 
        src="/creditbird-logo.png" 
        alt="CreditBird Logo" 
        class="w-[38px] h-[38px] object-contain rounded-full border border-[#cbd5e1] shadow-sm group-hover:border-[var(--cb-azure-500)] transition-colors" 
      />
      <span class="text-xl font-bold tracking-tight text-[#090e1f]">
        CreditBird<span class="text-[var(--cb-azure-500)]">.</span>
      </span>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a href="/solutions/acquiring" class="text-[var(--cb-cobalt-500)] hover:text-[var(--cb-azure-500)] font-semibold transition-colors inline-flex items-center gap-1.5">
        <span>Acquiring</span>
        <span class="text-[9px] font-mono px-1.5 py-0.5 bg-[var(--cb-azure-500)]/10 text-[var(--cb-azure-500)] border border-[var(--cb-azure-500)]/30 rounded">NEW</span>
      </a>
      <a href="/#why" class="text-[#475569] hover:text-[#090e1f] transition-colors">Platform</a>
      <a href="/#build-vs-buy" class="text-[#475569] hover:text-[#090e1f] transition-colors">Why CreditBird?</a>
      <a href="/#code-ledger" class="text-[#475569] hover:text-[#090e1f] transition-colors">CreditScript</a>
      <a href="/#connectivity" class="text-[#475569] hover:text-[#090e1f] transition-colors">Connectors</a>
      <a href="/#reconciliation" class="text-[#475569] hover:text-[#090e1f] transition-colors">Reconciliation</a>
      <a href="/#use-cases" class="text-[#475569] hover:text-[#090e1f] transition-colors">Use Cases</a>
      <a href="/#compliance" class="text-[#475569] hover:text-[#090e1f] transition-colors">Trust</a>
    </nav>

    <!-- Right Action CTAs -->
    <div class="hidden sm:flex items-center gap-3">
      <a 
        href="https://github.com/creditbirdtech" 
        target="_blank" 
        rel="noreferrer"
        class="grid-ring inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] font-mono text-xs text-[#475569] hover:text-[#090e1f] transition-colors bg-[#f8fafc]"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        <span>★ 2.4k</span>
      </a>
      <a 
        href="#code-ledger" 
        class="btn-cta-outline !h-9 !px-4 text-xs !border-[#cbd5e1] text-[#090e1f]"
      >
        Start building
      </a>
      <button 
        type="button"
        onclick={onOpenDemo}
        class="btn-cta-primary !h-9 !px-4 text-xs cursor-pointer"
      >
        Book a demo
      </button>
    </div>

    <!-- Mobile Hamburger Toggle -->
    <button 
      type="button" 
      class="md:hidden text-[#475569] hover:text-[#090e1f] p-2"
      onclick={toggleMobileMenu}
      aria-label="Toggle navigation menu"
    >
      {#if mobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-white border-b border-[#e2e8f0] px-6 py-5 flex flex-col gap-4 shadow-lg">
      <a href="/solutions/acquiring" onclick={handleNavClick} class="text-[var(--cb-cobalt-500)] font-semibold text-base py-1 flex items-center justify-between">
        <span>Acquiring Solution</span>
        <span class="text-[9px] font-mono px-1.5 py-0.5 bg-[var(--cb-azure-500)]/10 text-[var(--cb-azure-500)] border border-[var(--cb-azure-500)]/30 rounded">NEW</span>
      </a>
      <a href="/#why" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Platform</a>
      <a href="/#build-vs-buy" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Why CreditBird?</a>
      <a href="/#code-ledger" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">CreditScript</a>
      <a href="/#connectivity" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Connectors</a>
      <a href="/#reconciliation" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Reconciliation</a>
      <a href="/#use-cases" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Use Cases</a>
      <a href="/#compliance" onclick={handleNavClick} class="text-[#475569] hover:text-[#090e1f] text-base font-medium py-1">Trust & Compliance</a>
      <div class="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2.5">
        <a href="#code-ledger" onclick={handleNavClick} class="btn-cta-outline text-center !h-10 text-xs text-[#090e1f]">
          Start building
        </a>
        <button 
          type="button" 
          onclick={() => { handleNavClick(); onOpenDemo?.(); }}
          class="btn-cta-primary text-center !h-10 text-xs w-full"
        >
          Book a demo
        </button>
      </div>
    </div>
  {/if}
</header>
