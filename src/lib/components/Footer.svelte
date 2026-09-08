<script lang="ts">
  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<footer id="footer-links" class="theme-footer relative overflow-hidden bg-[#0a1329] text-[#cbd5e1] border-t border-[rgba(74,144,226,0.2)]">
  
  <!-- Giant Subtle Watermark Emblem (Peeking from bottom-right corner) -->
  <div class="footer-watermark"></div>

  <div class="strict-grid-container pt-20 pb-16 relative z-10">
    
    <!-- 4 Massive Columns Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
      
      <!-- COLUMN 1: PLATFORM -->
      <div class="flex flex-col gap-8">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase">
          PLATFORM
        </div>

        <!-- Modules -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">MODULES</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#code-ledger" class="hover:text-white transition-colors">Ledger Engine</a></li>
            <li><a href="#connectivity" class="hover:text-white transition-colors">Connectivity</a></li>
            <li><a href="#flows" class="hover:text-white transition-colors">Payment Flows</a></li>
            <li><a href="#reconciliation" class="hover:text-white transition-colors">Reconciliation</a></li>
          </ul>
        </div>

        <!-- Architecture -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">ARCHITECTURE</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#why" class="hover:text-white transition-colors">Ledger primitives</a></li>
            <li><a href="#code-ledger" class="hover:text-white transition-colors">CreditScript (Numscript)</a></li>
            <li><a href="#connectivity" class="hover:text-white transition-colors">Normalized Connectors</a></li>
            <li><a href="#reconciliation" class="hover:text-white transition-colors">Continuous Audit Trail</a></li>
          </ul>
        </div>

        <!-- Build -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">BUILD</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#code-ledger" class="hover:text-white transition-colors">CreditBird Studio</a></li>
            <li><a href="#code-ledger" class="hover:text-white transition-colors">Self-Hosted / Cloud Deployment</a></li>
            <li><a href="#compliance" class="hover:text-white transition-colors">Enterprise Stack</a></li>
            <li><a href="https://github.com/creditbirdtech" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">AI & MCP Integration</a></li>
          </ul>
        </div>

        <!-- Trust -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">TRUST</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#compliance" class="hover:text-white transition-colors">Security & Cryptography</a></li>
            <li><a href="#compliance" class="hover:text-white transition-colors">SOC 2 Type II & ISO 27001</a></li>
            <li><a href="#compliance" class="hover:text-white transition-colors">DORA & Central Bank Compliance</a></li>
            <li><a href="#compliance" class="hover:text-white transition-colors">Trust Center</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 2: SOLUTIONS -->
      <div class="flex flex-col gap-8">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase">
          SOLUTIONS
        </div>

        <!-- Corporate & Treasury -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">CORPORATE & TREASURY</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#use-cases" class="hover:text-white transition-colors">International Money Transfers</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Accounts Receivable</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Multi-Entity Consolidation</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Legacy Core Modernization</a></li>
          </ul>
        </div>

        <!-- Vertical SaaS -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">VERTICAL SAAS</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#use-cases" class="hover:text-white transition-colors">Marketplace Escrow & Splits</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Hospitality & Travel Deposits</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Healthcare Co-Pay & Billing</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">On-Demand Gig Payouts</a></li>
          </ul>
        </div>

        <!-- AI -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">AI & INFRASTRUCTURE</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#use-cases" class="hover:text-white transition-colors">GPU & Compute Marketplaces</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Autonomous AI Agent Wallets</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Token Invoicing & Metering</a></li>
          </ul>
        </div>

        <!-- Teams -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">TEAMS</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#why" class="hover:text-white transition-colors">For Engineering</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">For Product Teams</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">For Finance & Audit</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">For Compliance Officers</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 3: RESOURCES -->
      <div class="flex flex-col gap-8">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase">
          RESOURCES
        </div>

        <!-- Developers -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">DEVELOPERS</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#code-ledger" class="hover:text-white transition-colors">Interactive API Docs</a></li>
            <li><a href="https://github.com/creditbirdtech" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">CreditBird TypeScript & Rust SDK</a></li>
            <li><a href="#code-ledger" class="hover:text-white transition-colors">Numscript Specification</a></li>
            <li><a href="#code-ledger" class="hover:text-white transition-colors">GitHub Repository</a></li>
            <li><a href="#code-ledger" class="hover:text-white transition-colors">Changelog & Release Notes</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">COMPANY</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#why" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">Careers (We're Hiring)</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">Brand Assets & Logo</a></li>
            <li><a href="https://github.com/creditbirdtech" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">Open Source Community</a></li>
          </ul>
        </div>

        <!-- Learn -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">LEARN</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#why" class="hover:text-white transition-colors">Engineering Blog</a></li>
            <li><a href="#build-vs-buy" class="hover:text-white transition-colors">Double-Entry Accounting 101</a></li>
            <li><a href="#reconciliation" class="hover:text-white transition-colors">Reconciliation Masterclass</a></li>
            <li><a href="#why" class="hover:text-white transition-colors">Customer Case Studies</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 4: FINTECH & DIGITAL ASSETS & CONTACT -->
      <div class="flex flex-col gap-8">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase">
          FINTECH & DIGITAL ASSETS
        </div>

        <!-- Fintech -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">FINTECH SPECIALTIES</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#use-cases" class="hover:text-white transition-colors">Neobanking Infrastructures</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Card Program Settlement</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Syndicated Lending Tranches</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Factoring & Revenue Financing</a></li>
          </ul>
        </div>

        <!-- Digital Assets -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">DIGITAL ASSET RAILS</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li><a href="#use-cases" class="hover:text-white transition-colors">USDC / EURC Stablecoin Issuers</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Exchange Custody & Clearing</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">Tokenized Treasury Notes (RWA)</a></li>
            <li><a href="#use-cases" class="hover:text-white transition-colors">On-Chain / Off-Chain Bridge</a></li>
          </ul>
        </div>

        <!-- Contact & Actions -->
        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-3">GET IN TOUCH</div>
          <ul class="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
            <li>
              <button type="button" onclick={onOpenDemo} class="text-[var(--cb-azure-400)] font-semibold hover:text-white transition-colors cursor-pointer text-left">
                Book a Live Demo →
              </button>
            </li>
            <li><a href="mailto:contact@creditbirdtech.com" class="hover:text-white transition-colors">contact@creditbirdtech.com</a></li>
            <li><a href="https://github.com/creditbirdtech" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">GitHub Discussions</a></li>
            <li><a href="#compliance" class="hover:text-white transition-colors">Status & System Health (99.99%)</a></li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Footer Bottom Legal & Brand Bar -->
    <div class="border-t border-[rgba(50,135,255,0.14)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#64748b]">
      <div class="flex items-center gap-6 flex-wrap">
        <a href="#terms" class="hover:text-[#cbd5e1] transition-colors">Terms of Service</a>
        <a href="#privacy" class="hover:text-[#cbd5e1] transition-colors">Privacy Policy</a>
        <a href="#security" class="hover:text-[#cbd5e1] transition-colors">Security Disclosure</a>
        <a href="#cookies" class="hover:text-[#cbd5e1] transition-colors">Cookie Preferences</a>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)]"></span>
        <span>© 2026 CreditBird Technologies Inc. • Formance Architecture Parity</span>
      </div>
    </div>

  </div>
</footer>
