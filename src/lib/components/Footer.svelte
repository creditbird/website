<script lang="ts">
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<footer id="footer-links" class="theme-footer relative overflow-hidden bg-[#0a1329] text-[#cbd5e1] border-t border-[rgba(74,144,226,0.2)]">
  
  <!-- Giant Subtle Watermark Emblem -->
  <div class="footer-watermark"></div>

  <div class="strict-grid-container pt-16 pb-12 relative z-10">
    
    <!-- Company Legal Identity Top Box -->
    <div class="p-6 sm:p-8 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div class="flex flex-col gap-2 max-w-3xl">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="font-mono text-sm font-bold text-white tracking-wide uppercase">{m.footer_company_name()}</span>
          <span class="snap-badge badge-sm font-mono text-xs px-2 py-0.5 bg-[var(--cb-cobalt-500)]/20 text-[var(--cb-cobalt-300)] border border-[var(--cb-cobalt-500)]/40 rounded">{m.footer_mst()}</span>
          <span class="font-mono text-xs text-[#94a3b8]">{m.footer_founded()}</span>
        </div>
        <p class="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
          <strong>{m.about_address_label()}</strong> {m.footer_address()}<br />
          <strong>{m.footer_rep()}</strong> • <strong>{m.footer_office()}</strong>
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
        <button 
          type="button" 
          onclick={onOpenDemo}
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded text-xs font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-5 h-9 uppercase shadow-sm transition-colors"
        >
          {m.footer_btn_consultation()}
        </button>
        <a 
          href="tel:0932640968" 
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded text-xs font-mono font-medium border border-[rgba(255,255,255,0.2)] bg-transparent hover:bg-white/10 text-white px-5 h-9"
        >
          Hotline: 0932.640.968
        </a>
      </div>
    </div>

    <!-- 4 Structured Columns Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
      
      <!-- COLUMN 1: PHẦN MỀM & RUSTSALE -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          {m.footer_col_software()}
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_custom_services()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/solutions/software')} class="hover:text-white transition-colors">{m.footer_custom_web_app()}</a></li>
            <li><a href={localizeHref('/solutions/software')} class="hover:text-white transition-colors">{m.footer_custom_microservices()}</a></li>
            <li><a href={localizeHref('/solutions/it-staffing')} class="hover:text-white transition-colors">{m.footer_it_senior()}</a></li>
            <li><a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
              <span>{m.footer_github_repo()}</span>
              <span class="text-xs">↗</span>
            </a></li>
            <li><a href="https://www.facebook.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
              <span>{m.footer_facebook_page()}</span>
              <span class="text-xs">↗</span>
            </a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_rustsale_products()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/products/rustsale')} class="hover:text-white transition-colors flex items-center gap-1.5">
              <span>{m.footer_rustsale_inbox()}</span>
              <span class="font-mono text-[9px] px-1 py-0.2 bg-[var(--cb-cobalt-500)]/30 text-[var(--cb-azure-300)] border border-[var(--cb-azure-500)]/30 rounded">RUST</span>
            </a></li>
            <li><a href={localizeHref('/products/rustsale')} class="hover:text-white transition-colors">{m.footer_rustsale_keyring()}</a></li>
            <li>
              <a 
                href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1"
              >
                <span>{m.footer_rustsale_notion()}</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 2: KELVOT ERP -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          {m.footer_col_erp()}
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_erp_modules()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/solutions/erp')} class="hover:text-white transition-colors">{m.footer_erp_bom()}</a></li>
            <li><a href={localizeHref('/solutions/erp')} class="hover:text-white transition-colors">{m.footer_erp_wms()}</a></li>
            <li><a href={localizeHref('/solutions/erp')} class="hover:text-white transition-colors">{m.footer_erp_vas()}</a></li>
            <li><a href={localizeHref('/solutions/erp')} class="hover:text-white transition-colors">{m.footer_erp_cashflow()}</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_erp_brand()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li>
              <a href="https://kelvot.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
                <span>{m.footer_erp_portal()}</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
            <li><a href={localizeHref('/solutions/erp')} class="hover:text-white transition-colors">{m.footer_erp_license()}</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 3: TINH DẦU & MÁY PHUN LEMY FINEST -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          {m.footer_scent_brand()}
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_scent_diffusers()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/solutions/scent-marketing')} class="hover:text-white transition-colors">{m.footer_scent_desktop()}</a></li>
            <li><a href={localizeHref('/solutions/scent-marketing')} class="hover:text-white transition-colors">{m.footer_scent_hvac()}</a></li>
            <li><a href={localizeHref('/solutions/scent-marketing')} class="hover:text-white transition-colors">{m.footer_scent_leasing()}</a></li>
            <li><a href={localizeHref('/warranty')} class="hover:text-white transition-colors">{m.footer_scent_warranty()}</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_scent_oils()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/solutions/scent-marketing')} class="hover:text-white transition-colors">{m.footer_scent_coa_desc()}</a></li>
            <li><a href={localizeHref('/solutions/scent-marketing')} class="hover:text-white transition-colors">{m.footer_scent_scent_chart()}</a></li>
            <li>
              <a href="https://www.lemyfinest.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
                <span>{m.footer_scent_website()}</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 4: PHÁP LÝ & HỖ TRỢ -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          {m.footer_col_legal()}
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.nav_legal_title()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href={localizeHref('/terms')} class="hover:text-white transition-colors">{m.nav_terms()}</a></li>
            <li><a href={localizeHref('/privacy')} class="hover:text-white transition-colors">{m.nav_privacy()}</a></li>
            <li><a href={localizeHref('/warranty')} class="hover:text-white transition-colors">{m.nav_warranty()}</a></li>
            <li><a href={localizeHref('/security')} class="hover:text-white transition-colors">{m.nav_security()}</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">{m.footer_hotline_title()}</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li>
              <a href="tel:0932640968" class="text-white font-semibold hover:text-[var(--cb-azure-400)] transition-colors">
                Hotline: 0932 640 968
              </a>
            </li>
            <li>
              <a href="https://zalo.me/0932640968" target="_blank" rel="noopener noreferrer" class="text-[var(--cb-azure-400)] hover:underline">
                Zalo: 0932 640 968
              </a>
            </li>
            <li>
              <button type="button" onclick={onOpenDemo} class="text-[var(--cb-cobalt-400)] hover:text-white transition-colors cursor-pointer text-left font-medium">
                {m.footer_btn_consultation()} →
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Global Language Switcher Row in Footer -->
    <div class="pt-6 pb-6 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between flex-wrap gap-4">
      <LanguageSwitcher variant="footer" />
    </div>

    <!-- Bottom Copyright Hairline -->
    <div class="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)] shrink-0"></span>
        <span>{m.footer_copyright()}</span>
      </div>
      <div class="flex items-center gap-4 text-[11px] font-mono flex-wrap">
        <a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">GitHub</a>
        <span>•</span>
        <a href="https://www.facebook.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Facebook</a>
        <span>•</span>
        <a href={localizeHref('/terms')} class="hover:text-white transition-colors">{m.nav_terms()}</a>
        <span>•</span>
        <a href={localizeHref('/privacy')} class="hover:text-white transition-colors">{m.nav_privacy()}</a>
        <span>•</span>
        <a href={localizeHref('/warranty')} class="hover:text-white transition-colors">{m.nav_warranty()}</a>
      </div>
    </div>

  </div>
</footer>
