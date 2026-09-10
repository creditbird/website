<script lang="ts">
  import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    Code,
    Sparkles,
    Users,
    Layers,
    Wind,
    ShieldCheck,
    FileText,
    ExternalLink,
    Phone,
    ArrowUpRight
  } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  let mobileMenuOpen = $state(false);
  let activeDropdown = $state<'software' | 'legal' | null>(null);
  let mobileSoftwareOpen = $state(true);
  let mobileLegalOpen = $state(false);

  // Smart Header Scroll Management
  let scrollY = $state(0);
  let lastScrollY = $state(0);
  let isHeaderVisible = $state(true);
  let isScrolledPastTop = $state(false);
  let hasMounted = false;

  const SCROLL_THRESHOLD = 8;
  const TOP_THRESHOLD = 38;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleNavClick() {
    mobileMenuOpen = false;
    activeDropdown = null;
    isHeaderVisible = true;
  }

  function setDropdown(menu: 'software' | 'legal' | null) {
    activeDropdown = menu;
  }

  $effect(() => {
    const currentY = Math.max(0, scrollY);
    isScrolledPastTop = currentY > TOP_THRESHOLD;

    if (!hasMounted) {
      hasMounted = true;
      lastScrollY = currentY;
      return;
    }

    // Khi ở vùng đỉnh trang (trong phạm vi Announcement Bar): luôn hiện đủ cả hai
    if (currentY <= TOP_THRESHOLD) {
      isHeaderVisible = true;
      lastScrollY = currentY;
      return;
    }

    // Không ẩn header khi đang mở menu drawer trên mobile
    if (mobileMenuOpen) {
      isHeaderVisible = true;
      lastScrollY = currentY;
      return;
    }

    const delta = currentY - lastScrollY;

    // Lọc bỏ các dao động cuộn quá nhỏ (trackpad / scroll jitter)
    if (Math.abs(delta) < SCROLL_THRESHOLD) {
      return;
    }

    if (delta > 0 && currentY > 100) {
      // Cuộn xuống -> Ẩn header và tự động gập dropdown
      isHeaderVisible = false;
      activeDropdown = null;
    } else if (delta < 0) {
      // Cuộn lên -> Hiện header trắng fixed tại top: 0
      isHeaderVisible = true;
    }

    lastScrollY = currentY;
  });
</script>

<svelte:window bind:scrollY />

<!-- Announcement Bar: Legal Identity & Direct Hotline -->
<div class="bg-[#0c1633] text-[#cbd5e1] border-b border-[#16295c] h-[38px] flex items-center justify-center text-[0.8125rem]">
  <div class="strict-grid-container flex items-center justify-between h-full w-full">
    <div class="flex items-center gap-2 truncate">
      <span class="bg-[var(--cb-azure-500)] text-white font-mono text-[0.6875rem] px-2 py-0.5 font-bold rounded-sm shrink-0">MST: 0315397327</span>
      <span class="truncate">{m.navbar_announcement_company()}</span>
    </div>
    <div class="hidden sm:flex items-center gap-4 text-xs font-mono shrink-0">
      <a href="tel:+84932640968" class="text-[var(--cb-azure-400)] hover:text-white transition-colors flex items-center gap-1">
        <span>Hotline: +84 932 640 968</span>
      </a>
      <span class="text-[#334155]">|</span>
      <a
        href="https://github.com/creditbird"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#94a3b8] hover:text-white transition-colors inline-flex items-center gap-1.5"
      >
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        <span>GitHub</span>
      </a>
      <span class="text-[#334155]">|</span>
      <a
        href="https://www.facebook.com/creditbird"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#94a3b8] hover:text-white transition-colors inline-flex items-center gap-1.5"
      >
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span>Facebook</span>
      </a>
    </div>
  </div>
</div>

<!-- Header Navigation -->
<header class="h-[72px] border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-transform duration-300 ease-in-out {isHeaderVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1px)]'} {isScrolledPastTop ? 'shadow-xs' : ''}">
  <div class="strict-grid-container flex items-center justify-between h-full relative">

    <!-- Logo + Brand Wordmark -->
    <a href={localizeHref('/')} onclick={handleNavClick} class="flex items-center gap-3.5 group shrink-0">
      <img
        src="/creditbird-logo-sm.webp"
        alt="CreditBird Logo"
        width="38"
        height="38"
        fetchpriority="high"
        loading="eager"
        class="w-[38px] h-[38px] object-contain rounded-full border border-[#cbd5e1] shadow-xs group-hover:border-[var(--cb-azure-500)] transition-colors"
      />
      <div class="flex flex-col text-left">
        <span class="text-xl font-bold tracking-tight text-[var(--cb-cobalt-500)] leading-none">
          CreditBird
        </span>
        <span class="font-mono text-[9px] text-[#64748b] tracking-wider uppercase">{m.navbar_tagline()}</span>
      </div>
    </a>

    <!-- Desktop Navigation Links (Clean 5-Item Structure) -->
    <nav class="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">

      <!-- 1. Về CreditBird -->
      <a
        href={localizeHref('/#about')}
        onclick={handleNavClick}
        class="px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        {m.nav_about()}
      </a>

      <!-- 2. Dropdown: Phần mềm -->
      <div
        class="relative"
        role="none"
        onmouseenter={() => setDropdown('software')}
        onmouseleave={() => setDropdown(null)}
      >
        <button
          type="button"
          onclick={() => setDropdown(activeDropdown === 'software' ? null : 'software')}
          class="flex items-center gap-1 px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors {activeDropdown === 'software' ? 'text-[#090e1f] bg-[#f1f5f9]' : ''}"
        >
          <span>{m.nav_software_title()}</span>
          <ChevronDown size={15} class="transition-transform duration-200 {activeDropdown === 'software' ? 'rotate-180 text-[var(--cb-azure-600)]' : ''}" />
        </button>

        {#if activeDropdown === 'software'}
          <div
            class="absolute top-[calc(100%+12px)] left-0 w-[420px] bg-white border border-[#e2e8f0] rounded-lg shadow-xl p-4 z-50 flex flex-col gap-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          >
            <a
              href={localizeHref('/solutions/software')}
              onclick={handleNavClick}
              class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
            >
              <div class="w-8 h-8 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                <Code size={16} class="shrink-0" />
              </div>
              <div class="flex flex-col">
                <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                  {m.nav_custom_software()}
                </span>
                <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                  {m.nav_custom_software_desc()}
                </span>
              </div>
            </a>

            <a
              href={localizeHref('/products/rustsale')}
              onclick={handleNavClick}
              class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
            >
              <div class="w-8 h-8 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                <Sparkles size={16} class="shrink-0" />
              </div>
              <div class="flex flex-col">
                <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                  {m.nav_rustsale()}
                </span>
                <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                  {m.nav_rustsale_desc()}
                </span>
              </div>
            </a>

            <a
              href={localizeHref('/solutions/it-staffing')}
              onclick={handleNavClick}
              class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
            >
              <div class="w-8 h-8 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                <Users size={16} class="shrink-0" />
              </div>
              <div class="flex flex-col">
                <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                  {m.nav_it_staffing()}
                </span>
                <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                  {m.nav_it_staffing_desc()}
                </span>
              </div>
            </a>
          </div>
        {/if}
      </div>

      <!-- 3. Kelvot ERP -->
      <a
        href={localizeHref('/solutions/erp')}
        onclick={handleNavClick}
        class="px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        {m.nav_erp()}
      </a>

      <!-- 4. Tinh dầu & Máy phun -->
      <a
        href={localizeHref('/solutions/scent-marketing')}
        onclick={handleNavClick}
        class="px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        {m.nav_scent()}
      </a>

      <!-- 5. Dropdown: Hồ sơ & Pháp lý -->
      <div
        class="relative"
        role="none"
        onmouseenter={() => setDropdown('legal')}
        onmouseleave={() => setDropdown(null)}
      >
        <button
          type="button"
          onclick={() => setDropdown(activeDropdown === 'legal' ? null : 'legal')}
          class="flex items-center gap-1 px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors {activeDropdown === 'legal' ? 'text-[#090e1f] bg-[#f1f5f9]' : ''}"
        >
          <span>{m.nav_legal_title()}</span>
          <ChevronDown size={15} class="transition-transform duration-200 {activeDropdown === 'legal' ? 'rotate-180 text-[var(--cb-azure-600)]' : ''}" />
        </button>

        {#if activeDropdown === 'legal'}
          <div
            class="absolute top-[calc(100%+12px)] right-0 w-[300px] bg-white border border-[#e2e8f0] rounded-lg shadow-xl p-4 z-50 flex flex-col gap-1.5 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          >
            <a href={localizeHref('/#about')} onclick={handleNavClick} class="p-2 rounded hover:bg-[#f8fafc] text-xs font-medium text-[#090e1f] flex items-center justify-between">
              <span>{m.nav_about()}</span>
              <ChevronRight size={14} class="text-[#94a3b8] shrink-0" />
            </a>
            <a href={localizeHref('/terms')} onclick={handleNavClick} class="p-2 rounded hover:bg-[#f8fafc] text-xs font-medium text-[#090e1f] flex items-center justify-between">
              <span>{m.nav_terms()}</span>
              <ChevronRight size={14} class="text-[#94a3b8] shrink-0" />
            </a>
            <a href={localizeHref('/privacy')} onclick={handleNavClick} class="p-2 rounded hover:bg-[#f8fafc] text-xs font-medium text-[#090e1f] flex items-center justify-between">
              <span>{m.nav_privacy()}</span>
              <ChevronRight size={14} class="text-[#94a3b8] shrink-0" />
            </a>
            <a href={localizeHref('/warranty')} onclick={handleNavClick} class="p-2 rounded hover:bg-[#f8fafc] text-xs font-medium text-[#090e1f] flex items-center justify-between">
              <span>{m.nav_warranty()}</span>
              <ChevronRight size={14} class="text-[#94a3b8] shrink-0" />
            </a>
            <a href={localizeHref('/security')} onclick={handleNavClick} class="p-2 rounded hover:bg-[#f8fafc] text-xs font-medium text-[#090e1f] flex items-center justify-between">
              <span>{m.nav_security()}</span>
              <ChevronRight size={14} class="text-[#94a3b8] shrink-0" />
            </a>
          </div>
        {/if}
      </div>

    </nav>

    <!-- Right Action CTAs -->
    <div class="hidden sm:flex items-center gap-3">
      <LanguageSwitcher variant="navbar" />

      <a
        href="tel:+84932640968"
        class="grid-ring inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] font-mono text-xs text-[#090e1f] hover:text-[var(--cb-cobalt-500)] transition-colors bg-[#f8fafc] border border-[#cbd5e1]"
      >
        <Phone size={13} class="text-[var(--cb-cobalt-600)] shrink-0" />
        <span>+84 932 640 968</span>
      </a>
      <button
        type="button"
        onclick={onOpenDemo}
        class="btn-cta-primary !h-9 !px-4 text-xs cursor-pointer"
      >
        {m.nav_get_consultation()}
      </button>
    </div>

    <!-- Mobile Hamburger Toggle -->
    <button
      type="button"
      class="lg:hidden text-[#475569] hover:text-[#090e1f] p-2"
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

  <!-- Mobile Drawer Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden bg-white border-b border-[#e2e8f0] px-5 py-4 flex flex-col gap-4 shadow-xl {isScrolledPastTop ? 'max-h-[calc(100vh-72px)]' : 'max-h-[calc(100vh-110px)]'} overflow-y-auto">

      <!-- Mobile Language Switcher -->
      <LanguageSwitcher variant="mobile" />

      <div class="flex flex-col gap-1 border-b border-[#f1f5f9] pb-2">
        <a
          href={localizeHref('/#about')}
          onclick={handleNavClick}
          class="py-2 text-[#090e1f] font-semibold text-sm hover:text-[var(--cb-cobalt-600)]"
        >
          {m.nav_about()}
        </a>
      </div>

      <!-- Section: Software Accordion -->
      <div class="flex flex-col gap-1">
        <button
          type="button"
          onclick={() => mobileSoftwareOpen = !mobileSoftwareOpen}
          class="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#64748b] py-2 border-b border-[#f1f5f9]"
        >
          <span>_{m.nav_software_title()}</span>
          <ChevronDown size={14} class="transition-transform duration-200 {mobileSoftwareOpen ? 'rotate-180' : ''}" />
        </button>

        {#if mobileSoftwareOpen}
          <div class="flex flex-col gap-1 pt-1.5 pl-2">
            <a
              href={localizeHref('/solutions/software')}
              onclick={handleNavClick}
              class="py-2 flex items-center gap-2.5 text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <Code size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
              <span>{m.nav_custom_software()}</span>
            </a>

            <a
              href={localizeHref('/products/rustsale')}
              onclick={handleNavClick}
              class="py-2 flex items-center gap-2.5 text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <Sparkles size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
              <span>{m.nav_rustsale()}</span>
            </a>

            <a
              href={localizeHref('/solutions/it-staffing')}
              onclick={handleNavClick}
              class="py-2 flex items-center gap-2.5 text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <Users size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
              <span>{m.nav_it_staffing()}</span>
            </a>
          </div>
        {/if}
      </div>

      <!-- Section: Direct Links -->
      <div class="flex flex-col gap-1 border-b border-[#f1f5f9] pb-2">
        <a
          href={localizeHref('/solutions/erp')}
          onclick={handleNavClick}
          class="py-2 text-[#090e1f] font-semibold text-sm hover:text-[var(--cb-cobalt-600)] flex items-center gap-2"
        >
          <Layers size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
          <span>{m.nav_erp()}</span>
        </a>

        <a
          href={localizeHref('/solutions/scent-marketing')}
          onclick={handleNavClick}
          class="py-2 text-[#090e1f] font-semibold text-sm hover:text-[var(--cb-cobalt-600)] flex items-center gap-2"
        >
          <Wind size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
          <span>{m.nav_scent()}</span>
        </a>
      </div>

      <!-- Mobile CTAs -->
      <div class="flex flex-col gap-2 pt-2">
        <button
          type="button"
          onclick={() => { handleNavClick(); onOpenDemo?.(); }}
          class="btn-cta-primary w-full !h-10 text-xs justify-center cursor-pointer"
        >
          {m.nav_get_consultation()}
        </button>
        <a
          href="tel:+84932640968"
          class="btn-cta-outline w-full !h-10 text-xs justify-center flex items-center gap-2"
        >
          <Phone size={14} class="shrink-0" />
          <span>Hotline: +84 932 640 968</span>
        </a>

        <!-- Mobile Social Links -->
        <div class="flex items-center justify-center gap-4 pt-3 border-t border-[#f1f5f9] text-xs font-mono text-[#64748b]">
          <a
            href="https://github.com/creditbird"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--cb-cobalt-600)] transition-colors inline-flex items-center gap-1.5"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
          <span class="text-[#cbd5e1]">•</span>
          <a
            href="https://www.facebook.com/creditbird"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--cb-cobalt-600)] transition-colors inline-flex items-center gap-1.5"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>

    </div>
  {/if}
</header>
