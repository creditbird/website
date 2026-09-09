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
  id="tech-stack" 
  class="relative theme-emerald dark bg-background text-foreground scroll-mt-20" 
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
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-mono font-medium border border-[rgba(255,255,255,0.2)] bg-transparent hover:bg-white/10 text-white px-5 h-9"
          >
            Tài liệu RustSale CRM
          </a>
        </div>
      </div>

      <!-- Right Column: Code Editor & Execution Output -->
      <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-0 relative overflow-hidden">
        
        <!-- Code Header / Tab Bar -->
        <div class="flex items-center justify-between px-1gu h-(--grid-unit) border-b border-border bg-card-background">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#10b981]/80"></span>
            <span class="font-mono text-xs text-muted-foreground ml-2">creditbird_stack.yaml</span>
          </div>

          <button
            type="button"
            onclick={copyCode}
            class="font-mono text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {#if copied}
              <Check size={14} class="text-[var(--cb-emerald-500)]" />
              <span class="text-[var(--cb-emerald-500)]">Đã sao chép</span>
            {:else}
              <Copy size={14} />
              <span>Sao chép</span>
            {/if}
          </button>
        </div>

        <!-- Code Block Content -->
        <div class="p-1gu font-mono text-xs leading-relaxed overflow-x-auto text-foreground/90 bg-black/20 flex-1">
          <pre class="m-0"><code>{codeString}</code></pre>
        </div>

        <!-- Live Status Bar -->
        <div class="px-1gu py-2 border-t border-border bg-card-background flex items-center justify-between text-xs font-mono text-muted-foreground">
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-[var(--cb-emerald-500)] animate-pulse"></span>
            <span>SYSTEM HEALTH: EXCELLENT (99.9% UPTIME)</span>
          </div>
          <span>SPEC V2.4</span>
        </div>

      </div>

    </div>
  </div>
</section>
