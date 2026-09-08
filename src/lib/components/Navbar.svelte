<script lang="ts">
  import { 
    Menu, 
    X, 
    ChevronDown, 
    ChevronRight, 
    Code, 
    Terminal, 
    Users, 
    Layers, 
    Wind, 
    ShieldCheck, 
    FileText, 
    ExternalLink, 
    BookOpen, 
    Sparkles, 
    CheckCircle2, 
    Cpu, 
    Phone,
    ArrowUpRight
  } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  let mobileMenuOpen = $state(false);
  let activeDropdown = $state<'services' | 'legal' | null>(null);
  let mobileServicesOpen = $state(true);
  let mobileLegalOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function handleNavClick() {
    mobileMenuOpen = false;
    activeDropdown = null;
  }

  function setDropdown(menu: 'services' | 'legal' | null) {
    activeDropdown = menu;
  }
</script>

<!-- Announcement Bar: Legal Identity & Direct Hotline -->
<div class="bg-[#0c1633] text-[#cbd5e1] border-b border-[#16295c] h-[38px] flex items-center justify-center text-[0.8125rem]">
  <div class="strict-grid-container flex items-center justify-between h-full w-full">
    <div class="flex items-center gap-2 truncate">
      <span class="bg-[var(--cb-azure-500)] text-white font-mono text-[0.6875rem] px-2 py-0.5 font-bold rounded-sm shrink-0">MST: 0315397327</span>
      <span class="truncate">CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD • Phát triển Phần mềm, Kelvot ERP, Nhân sự IT & Lemy Finest Tinh dầu</span>
    </div>
    <div class="hidden sm:flex items-center gap-4 text-xs font-mono shrink-0">
      <a href="tel:0932640968" class="text-[var(--cb-azure-400)] hover:text-white transition-colors flex items-center gap-1">
        <span>Hotline: 0932 640 968</span>
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
    </div>
  </div>
</div>

<!-- Header Navigation -->
<header class="h-[72px] border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-colors">
  <div class="strict-grid-container flex items-center justify-between h-full relative">
    
    <!-- Logo + Brand Wordmark -->
    <a href="/" onclick={handleNavClick} class="flex items-center gap-3.5 group shrink-0">
      <img 
        src="/creditbird-logo.png" 
        alt="CreditBird Logo" 
        class="w-[38px] h-[38px] object-contain rounded-full border border-[#cbd5e1] shadow-sm group-hover:border-[var(--cb-azure-500)] transition-colors" 
      />
      <div class="flex flex-col text-left">
        <span class="text-xl font-bold tracking-tight text-[#090e1f] leading-none">
          CreditBird<span class="text-[var(--cb-azure-500)]">.</span>
        </span>
        <span class="font-mono text-[9px] text-[#64748b] tracking-wider uppercase">Enterprise Ecosystem</span>
      </div>
    </a>

    <!-- Desktop Navigation Links with Formance Blueprint Megamenu -->
    <nav class="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
      
      <!-- Dropdown 1: Dịch vụ & Giải pháp -->
      <div 
        class="relative"
        role="none"
        onmouseenter={() => setDropdown('services')}
        onmouseleave={() => setDropdown(null)}
      >
        <button 
          type="button" 
          onclick={() => setDropdown(activeDropdown === 'services' ? null : 'services')}
          class="flex items-center gap-1 px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors {activeDropdown === 'services' ? 'text-[#090e1f] bg-[#f1f5f9]' : ''}"
        >
          <span>Dịch vụ & Giải pháp</span>
          <ChevronDown size={15} class="transition-transform duration-200 {activeDropdown === 'services' ? 'rotate-180 text-[var(--cb-azure-600)]' : ''}" />
        </button>

        <!-- Dropdown Megamenu Panel -->
        {#if activeDropdown === 'services'}
          <div 
            class="absolute top-[calc(100%+12px)] left-0 w-[680px] bg-white border border-[#e2e8f0] rounded-lg shadow-xl p-6 z-50 grid grid-cols-2 gap-6 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          >
            <!-- Column 1: Phần mềm & Kỹ thuật -->
            <div class="flex flex-col gap-3">
              <div class="font-mono text-[11px] font-bold text-[#64748b] tracking-wider uppercase border-b border-[#f1f5f9] pb-2">
                _DỊCH VỤ CỐT LÕI (MST 0315397327)/
              </div>
              
              <a 
                href="/solutions/software" 
                onclick={handleNavClick}
                class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
              >
                <div class="w-9 h-9 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <Code size={18} />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                    Viết phần mềm may đo
                  </span>
                  <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                    Microservices, Web/App doanh nghiệp, bàn giao 100% mã nguồn sạch.
                  </span>
                </div>
              </a>

              <a 
                href="/products/rustsale" 
                onclick={handleNavClick}
                class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
              >
                <div class="w-9 h-9 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <Sparkles size={18} />
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-1.5">
                    <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                      RustSale CRM & Outreach
                    </span>
                    <span class="font-mono text-[9px] px-1.5 py-0.2 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">RUST NATIVE</span>
                  </div>
                  <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                    Desktop Omnichannel Zalo, WhatsApp, FB Messenger tốc độ microsecond.
                  </span>
                </div>
              </a>

              <a 
                href="/solutions/it-staffing" 
                onclick={handleNavClick}
                class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
              >
                <div class="w-9 h-9 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <Users size={18} />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                    Cho thuê nhân sự IT
                  </span>
                  <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                    Kỹ sư Senior Onsite & Dedicated Team, ký kết NDA pháp lý bảo mật.
                  </span>
                </div>
              </a>
            </div>

            <!-- Column 2: Hệ sinh thái chuyên biệt -->
            <div class="flex flex-col gap-3">
              <div class="font-mono text-[11px] font-bold text-[#64748b] tracking-wider uppercase border-b border-[#f1f5f9] pb-2">
                _HỆ SINH THÁI THƯƠNG HIỆU/
              </div>

              <a 
                href="/solutions/erp" 
                onclick={handleNavClick}
                class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
              >
                <div class="w-9 h-9 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <Layers size={18} />
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-1.5">
                    <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                      Kelvot ERP
                    </span>
                    <span class="font-mono text-[9px] px-1.5 py-0.2 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">kelvot.com</span>
                  </div>
                  <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                    ERP Sản xuất định mức BOM, Kho WMS & Kế toán quản trị VAS/IFRS.
                  </span>
                </div>
              </a>

              <a 
                href="/solutions/scent-marketing" 
                onclick={handleNavClick}
                class="group p-2.5 rounded-lg hover:bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-all flex items-start gap-3"
              >
                <div class="w-9 h-9 rounded-md bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] flex items-center justify-center shrink-0 group-hover:bg-[var(--cb-cobalt-600)] group-hover:text-white transition-colors">
                  <Wind size={18} />
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-1.5">
                    <span class="font-semibold text-sm text-[#090e1f] group-hover:text-[var(--cb-cobalt-600)] transition-colors">
                      Lemy Finest
                    </span>
                    <span class="font-mono text-[9px] px-1.5 py-0.2 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">lemyfinest.com</span>
                  </div>
                  <span class="text-xs text-[#64748b] leading-tight mt-0.5">
                    Máy phun tinh dầu kết nối HVAC & 100% tinh dầu COA / GC-MS.
                  </span>
                </div>
              </a>

              <!-- Sub Resource Links inside dropdown -->
              <div class="mt-auto pt-3 border-t border-[#f1f5f9] flex flex-col gap-2">
                <a 
                  href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center justify-between text-xs font-mono text-[#475569] hover:text-[var(--cb-cobalt-600)] p-2 rounded bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
                >
                  <span class="flex items-center gap-1.5">
                    <BookOpen size={13} class="text-[var(--cb-cobalt-500)]" />
                    <span>Cẩm nang RustSale CRM (Notion)</span>
                  </span>
                  <ExternalLink size={12} class="opacity-60" />
                </a>

                <a 
                  href="https://github.com/creditbird" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center justify-between text-xs font-mono text-[#475569] hover:text-[var(--cb-cobalt-600)] p-2 rounded bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
                >
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 fill-current text-[#090e1f]" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>CreditBird Open Source (GitHub)</span>
                  </span>
                  <ExternalLink size={12} class="opacity-60" />
                </a>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Direct Item: RustSale CRM (Highlighted) -->
      <a 
        href="/products/rustsale" 
        class="flex items-center gap-1.5 px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        <span>RustSale CRM</span>
        <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] rounded">
          NATIVE RUST
        </span>
      </a>

      <!-- Direct Item: Kelvot ERP -->
      <a 
        href="/solutions/erp" 
        class="px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        Kelvot ERP
      </a>

      <!-- Direct Item: Lemy Finest -->
      <a 
        href="/solutions/scent-marketing" 
        class="px-3 py-2 rounded-md text-[#475569] hover:text-[#090e1f] hover:bg-[#f8fafc] transition-colors"
      >
        Lemy Finest Tinh dầu
      </a>

      <!-- Dropdown 2: Hồ sơ & Pháp lý -->
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
          <span>Hồ sơ & Pháp lý</span>
          <ChevronDown size={15} class="transition-transform duration-200 {activeDropdown === 'legal' ? 'rotate-180 text-[var(--cb-azure-600)]' : ''}" />
        </button>

        {#if activeDropdown === 'legal'}
          <div 
            class="absolute top-[calc(100%+12px)] right-0 w-[520px] bg-white border border-[#e2e8f0] rounded-lg shadow-xl p-5 z-50 grid grid-cols-2 gap-4 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
          >
            <!-- Legal Policy Links -->
            <div class="flex flex-col gap-2">
              <div class="font-mono text-[11px] font-bold text-[#64748b] tracking-wider uppercase border-b border-[#f1f5f9] pb-1.5">
                _CHÍNH SÁCH DOANH NGHIỆP/
              </div>
              
              <a 
                href="/terms" 
                onclick={handleNavClick}
                class="p-2 rounded hover:bg-[#f8fafc] flex items-center gap-2.5 text-sm text-[#090e1f] hover:text-[var(--cb-cobalt-600)] transition-colors"
              >
                <FileText size={15} class="text-[#64748b] shrink-0" />
                <span>Điều khoản Dịch vụ</span>
              </a>

              <a 
                href="/privacy" 
                onclick={handleNavClick}
                class="p-2 rounded hover:bg-[#f8fafc] flex items-center gap-2.5 text-sm text-[#090e1f] hover:text-[var(--cb-cobalt-600)] transition-colors"
              >
                <ShieldCheck size={15} class="text-[#64748b] shrink-0" />
                <span>Chính sách Bảo mật</span>
              </a>

              <a 
                href="/warranty" 
                onclick={handleNavClick}
                class="p-2 rounded hover:bg-[#f8fafc] flex items-center gap-2.5 text-sm text-[#090e1f] hover:text-[var(--cb-cobalt-600)] transition-colors"
              >
                <CheckCircle2 size={15} class="text-[#64748b] shrink-0" />
                <span>Chính sách Bảo hành & SLA</span>
              </a>

              <a 
                href="/security" 
                onclick={handleNavClick}
                class="p-2 rounded hover:bg-[#f8fafc] flex items-center gap-2.5 text-sm text-[#090e1f] hover:text-[var(--cb-cobalt-600)] transition-colors"
              >
                <Cpu size={15} class="text-[#64748b] shrink-0" />
                <span>An toàn Thông tin ISO 27001</span>
              </a>
            </div>

            <!-- Legal Registration Box -->
            <div class="p-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg flex flex-col justify-between text-xs">
              <div class="flex flex-col gap-1.5">
                <span class="font-mono text-[10px] text-[var(--cb-cobalt-600)] font-bold uppercase tracking-wider">HỒ SƠ ĐĂNG KÝ DOANH NGHIỆP</span>
                <p class="font-semibold text-[#090e1f] leading-snug">CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</p>
                <p class="text-[#64748b] font-mono text-[11px]">MST: 0315397327</p>
                <p class="text-[#64748b] text-[11px] leading-relaxed">Cấp ngày 19/11/2018 bởi Sở Kế hoạch & Đầu tư TP.HCM.</p>
              </div>
              <div class="pt-2 border-t border-[#e2e8f0] mt-2">
                <a href="tel:0932640968" class="text-[var(--cb-cobalt-600)] font-medium hover:underline flex items-center gap-1">
                  <Phone size={12} />
                  <span>0932 640 968</span>
                </a>
              </div>
            </div>
          </div>
        {/if}
      </div>

    </nav>

    <!-- Right Action CTAs -->
    <div class="hidden sm:flex items-center gap-3">
      <a 
        href="https://github.com/creditbird" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="CreditBird GitHub Repository"
        class="w-9 h-9 rounded-[var(--radius-sm)] border border-[#cbd5e1] hover:border-[#090e1f] hover:bg-[#f8fafc] flex items-center justify-center text-[#475569] hover:text-[#090e1f] transition-colors"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </a>
      <a 
        href="tel:0932640968" 
        class="grid-ring inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] font-mono text-xs text-[#090e1f] hover:text-[var(--cb-cobalt-500)] transition-colors bg-[#f8fafc]"
      >
        <span>📞 0932 640 968</span>
      </a>
      <button 
        type="button"
        onclick={onOpenDemo}
        class="btn-cta-primary !h-9 !px-4 text-xs cursor-pointer"
      >
        Nhận tư vấn ngay
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
    <div class="lg:hidden bg-white border-b border-[#e2e8f0] px-5 py-4 flex flex-col gap-4 shadow-xl max-h-[calc(100vh-110px)] overflow-y-auto">
      
      <!-- Section 1: Services Accordion -->
      <div class="flex flex-col gap-1">
        <button 
          type="button"
          onclick={() => mobileServicesOpen = !mobileServicesOpen}
          class="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#64748b] py-2 border-b border-[#f1f5f9]"
        >
          <span>_DỊCH VỤ & GIẢI PHÁP</span>
          <ChevronDown size={14} class="transition-transform duration-200 {mobileServicesOpen ? 'rotate-180' : ''}" />
        </button>

        {#if mobileServicesOpen}
          <div class="flex flex-col gap-1 pt-1.5 pl-2">
            <a 
              href="/solutions/software" 
              onclick={handleNavClick} 
              class="py-2 flex items-center gap-2.5 text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <Code size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
              <span>Viết phần mềm may đo</span>
            </a>
            
            <a 
              href="/products/rustsale" 
              onclick={handleNavClick} 
              class="py-2 flex items-center justify-between text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <span class="flex items-center gap-2.5">
                <Sparkles size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
                <span>RustSale CRM & Outreach</span>
              </span>
              <span class="font-mono text-[9px] px-1.5 py-0.5 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">RUST NATIVE</span>
            </a>

            <a 
              href="/solutions/it-staffing" 
              onclick={handleNavClick} 
              class="py-2 flex items-center gap-2.5 text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <Users size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
              <span>Cho thuê nhân sự IT</span>
            </a>

            <a 
              href="/solutions/erp" 
              onclick={handleNavClick} 
              class="py-2 flex items-center justify-between text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <span class="flex items-center gap-2.5">
                <Layers size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
                <span>Kelvot ERP</span>
              </span>
              <span class="font-mono text-[9px] px-1.5 py-0.5 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">kelvot.com</span>
            </a>

            <a 
              href="/solutions/scent-marketing" 
              onclick={handleNavClick} 
              class="py-2 flex items-center justify-between text-[#090e1f] font-medium text-sm hover:text-[var(--cb-cobalt-600)]"
            >
              <span class="flex items-center gap-2.5">
                <Wind size={16} class="text-[var(--cb-cobalt-500)] shrink-0" />
                <span>Lemy Finest Tinh dầu</span>
              </span>
              <span class="font-mono text-[9px] px-1.5 py-0.5 bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] font-bold rounded">lemyfinest.com</span>
            </a>
          </div>
        {/if}
      </div>

      <!-- Section 2: Legal Accordion -->
      <div class="flex flex-col gap-1">
        <button 
          type="button"
          onclick={() => mobileLegalOpen = !mobileLegalOpen}
          class="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#64748b] py-2 border-b border-[#f1f5f9]"
        >
          <span>_PHÁP LÝ & MINH BẠCH</span>
          <ChevronDown size={14} class="transition-transform duration-200 {mobileLegalOpen ? 'rotate-180' : ''}" />
        </button>

        {#if mobileLegalOpen}
          <div class="flex flex-col gap-1 pt-1.5 pl-2">
            <a href="/terms" onclick={handleNavClick} class="py-1.5 flex items-center gap-2 text-sm text-[#475569] hover:text-[#090e1f]">
              <FileText size={14} />
              <span>Điều khoản Dịch vụ</span>
            </a>
            <a href="/privacy" onclick={handleNavClick} class="py-1.5 flex items-center gap-2 text-sm text-[#475569] hover:text-[#090e1f]">
              <ShieldCheck size={14} />
              <span>Chính sách Bảo mật</span>
            </a>
            <a href="/warranty" onclick={handleNavClick} class="py-1.5 flex items-center gap-2 text-sm text-[#475569] hover:text-[#090e1f]">
              <CheckCircle2 size={14} />
              <span>Chính sách Bảo hành & SLA</span>
            </a>
            <a href="/security" onclick={handleNavClick} class="py-1.5 flex items-center gap-2 text-sm text-[#475569] hover:text-[#090e1f]">
              <Cpu size={14} />
              <span>An toàn Thông tin ISO 27001</span>
            </a>
          </div>
        {/if}
      </div>

      <!-- External Links -->
      <div class="flex flex-col gap-2 pt-2 border-t border-[#f1f5f9]">
        <a 
          href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-2 rounded bg-[#f8fafc] text-xs font-mono text-[#475569]"
        >
          <span class="flex items-center gap-2">
            <BookOpen size={14} class="text-[var(--cb-cobalt-500)]" />
            <span>Cẩm nang RustSale (Notion)</span>
          </span>
          <ArrowUpRight size={13} />
        </a>

        <a 
          href="https://github.com/creditbird"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-2 rounded bg-[#f8fafc] text-xs font-mono text-[#475569]"
        >
          <span class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 fill-current text-[#090e1f]" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub CreditBird</span>
          </span>
          <ArrowUpRight size={13} />
        </a>
      </div>

      <!-- Bottom CTAs in Mobile Menu -->
      <div class="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2.5">
        <a href="tel:0932640968" class="btn-cta-outline text-center !h-10 text-xs text-[#090e1f] flex items-center justify-center gap-1.5">
          <Phone size={14} />
          <span>Hotline: 0932 640 968</span>
        </a>
        <button 
          type="button" 
          onclick={() => { handleNavClick(); onOpenDemo?.(); }}
          class="btn-cta-primary text-center !h-10 text-xs w-full"
        >
          Nhận tư vấn ngay
        </button>
      </div>

    </div>
  {/if}
</header>

