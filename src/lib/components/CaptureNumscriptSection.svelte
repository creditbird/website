<script lang="ts">
  import { Check, Copy } from 'lucide-svelte';

  let copied = $state(false);

  const codeString = `# CreditBird Enterprise Ecosystem Stack
organization: "CONG TY TNHH CONG NGHE CREDITBIRD"
tax_id: "0315397327"
legal_date: "2018-11-19 (So KH&DT TP.HCM)"

core_services:
  custom_software:
    stack: ["Rust", "Golang", "Python", "SvelteKit"]
    architecture: "Event-driven Microservices"
    ownership: "100% Clean Source Code Delivery"
    sla: "99.9% High-Availability Uptime"
  it_staff_augmentation:
    models: ["Onsite Staffing", "Dedicated Remote Squad"]
    sla_onboarding: "Within 48h with strict B2B NDA"
    roles: ["Senior Rust/Go", "SvelteKit/React", "DevOps Cloud"]

proprietary_products:
  rustsale_crm_pro:
    runtime: "Rust Native (Tokio, Tauri v2)"
    channels: ["Zalo OA & Personal", "WhatsApp B2B", "Facebook Fanpages"]
    latency: "< 1ms (Microsecond Speed)"
    security: "Local-First Hardware Keyring Encryption"
    docs: "https://app.notion.com/p/RustSale-CRM-Outreach-Pro"

ecosystem_brands:
  kelvot_erp:
    official_web: "https://kelvot.com"
    modules: ["MRP Multi-BOM", "Warehouse WMS Barcode", "Accounting VAS/IFRS"]
  lemy_finest:
    official_web: "https://www.lemyfinest.com"
    hardware: "Commercial HVAC Diffusers (500 - 5,000m²)"
    essential_oils: "100% Pure Natural COA & GC-MS Certified"`;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(codeString);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  }
</script>

<section 
  id="creditscript-capture" 
  class="relative theme-emerald dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)]">
      
      <!-- Left Column: Header with Eyebrow, Heading, Description, and CTA Button -->
      <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground free-flow px-1gu py-2gu sm:p-2gu justify-between">
        <div class="flex flex-col gap-3">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _KIẾN TRÚC & TIÊU CHUẨN KỸ THUẬT/
          </span>
          <h2 class="h3 text-foreground">Làm Chủ Công Nghệ Lõi & Tự Động Hóa Toàn Diện</h2>
          <p class="subheading-md text-foreground">Lập trình hiện đại, bảo mật Local-First và kiểm soát chất lượng chuẩn ISO 27001.</p>
          <p class="p-md text-muted-foreground">
            CreditBird ứng dụng kiến trúc Microservices hiệu năng cao bằng Rust và Go, phát triển phần mềm độc quyền RustSale CRM tốc độ microsecond, triển khai Kelvot ERP quản trị chuỗi cung ứng khép kín và điều khiển máy phun tinh dầu Lemy Finest Nano HVAC thông minh.
          </p>
        </div>

        <div class="pt-6 flex flex-wrap items-center gap-3">
          <a
            href="/solutions/software"
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-6 h-9 uppercase shadow-sm transition-colors"
          >
            Khám phá kiến trúc phần mềm
          </a>
          <a
            href="/products/rustsale"
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-mono font-medium border border-[#cbd5e1]/30 hover:border-white text-white px-5 h-9 uppercase transition-colors"
          >
            RustSale CRM
          </a>
        </div>
      </div>

      <!-- Right Column: Code Window Panel -->
      <div data-auto-snap="true" class="snap-group-item flex flex-col bg-background text-foreground p-0">
        <div class="grid-ring flex h-full w-full flex-col bg-(--shiki-background) dark">
          <!-- Window Top Bar -->
          <div class="flex h-[calc(var(--grid-unit)*2)] items-center justify-between px-(--grid-unit)" style="border-bottom:1px solid color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 14%, transparent)">
            <span class="badge-sm font-mono lowercase" style="color:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 50%, transparent)">creditbird.ecosystem.yaml</span>

            <div class="flex items-center gap-4">
              <button
                type="button"
                onclick={copyCode}
                class="flex items-center gap-1.5 text-[11px] font-mono text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                title="Copy snippet"
              >
                {#if copied}
                  <Check class="size-3 text-[#60a5fa]" />
                  <span class="text-[#60a5fa]">Đã copy</span>
                {:else}
                  <Copy class="size-3" />
                  <span>Copy Config</span>
                {/if}
              </button>

              <span class="flex items-center gap-[calc(var(--grid-unit)*0.25)]">
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 20%, transparent)"></i>
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 20%, transparent)"></i>
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background-color:var(--section-accent)"></i>
              </span>
            </div>
          </div>

          <!-- Code Body with Clean Cobalt & Azure Syntax Coloring -->
          <div class="flex-1 overflow-x-auto p-(--grid-unit) max-h-[440px] overflow-y-auto font-mono text-xs leading-relaxed text-[#cbd5e1]">
            <pre class="m-0 font-mono text-xs whitespace-pre leading-relaxed"><code><span class="text-[#64748b]"># CreditBird Enterprise Ecosystem Stack</span>
<span class="text-[#60a5fa] font-bold">organization:</span> <span class="text-[#f8fafc]">"CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD"</span>
<span class="text-[#60a5fa] font-bold">tax_id:</span> <span class="text-[#93c5fd]">"0315397327"</span>
<span class="text-[#60a5fa] font-bold">legal_date:</span> <span class="text-[#f8fafc]">"2018-11-19 (Sở KH&ĐT TP.HCM)"</span>

<span class="text-[#93c5fd] font-bold">core_services:</span>
  <span class="text-[#60a5fa]">custom_software:</span>
    <span class="text-[#64748b]">stack:</span> [<span class="text-[#e2e8f0]">"Rust"</span>, <span class="text-[#e2e8f0]">"Golang"</span>, <span class="text-[#e2e8f0]">"Python"</span>, <span class="text-[#e2e8f0]">"SvelteKit"</span>]
    <span class="text-[#64748b]">ownership:</span> <span class="text-[#f8fafc]">"100% Clean Source Code Delivery"</span>
    <span class="text-[#64748b]">sla:</span> <span class="text-[#f8fafc]">"99.9% High-Availability Uptime"</span>
  <span class="text-[#60a5fa]">it_staffing:</span>
    <span class="text-[#64748b]">models:</span> [<span class="text-[#e2e8f0]">"Onsite Staffing"</span>, <span class="text-[#e2e8f0]">"Dedicated Remote Squad"</span>]
    <span class="text-[#64748b]">onboarding_sla:</span> <span class="text-[#f8fafc]">"Within 48h with strict B2B NDA"</span>

<span class="text-[#93c5fd] font-bold">proprietary_products:</span>
  <span class="text-[#60a5fa]">rustsale_crm_pro:</span>
    <span class="text-[#64748b]">runtime:</span> <span class="text-[#e2e8f0]">"Rust Native (Tokio, Tauri v2)"</span>
    <span class="text-[#64748b]">channels:</span> [<span class="text-[#e2e8f0]">"Zalo OA"</span>, <span class="text-[#e2e8f0]">"WhatsApp B2B"</span>, <span class="text-[#e2e8f0]">"Facebook Hub"</span>]
    <span class="text-[#64748b]">latency:</span> <span class="text-[#60a5fa]">&lt; 1ms (Microsecond Speed)</span>
    <span class="text-[#64748b]">security:</span> <span class="text-[#f8fafc]">"Local-First Keyring Encryption"</span>

<span class="text-[#93c5fd] font-bold">ecosystem_brands:</span>
  <span class="text-[#60a5fa]">kelvot_erp:</span>
    <span class="text-[#64748b]">domain:</span> <span class="text-[#60a5fa]">"https://kelvot.com"</span>
    <span class="text-[#64748b]">modules:</span> [<span class="text-[#e2e8f0]">"BOM"</span>, <span class="text-[#e2e8f0]">"WMS Barcode"</span>, <span class="text-[#e2e8f0]">"Accounting VAS/IFRS"</span>]
  <span class="text-[#60a5fa]">lemy_finest:</span>
    <span class="text-[#64748b]">domain:</span> <span class="text-[#60a5fa]">"https://www.lemyfinest.com"</span>
    <span class="text-[#64748b]">hardware:</span> <span class="text-[#f8fafc]">"HVAC Diffusers (500 - 5,000m²)"</span>
    <span class="text-[#64748b]">essential_oils:</span> <span class="text-[#f8fafc]">"100% Pure Natural COA / GC-MS"</span></code></pre>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
