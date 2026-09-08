<script lang="ts">
  import { Check, Copy, Play } from 'lucide-svelte';

  let copied = $state(false);
  let grossAmount = $state(1000);
  let feeRate = 0.029;
  let reserveRate = 0.05;

  let feeAmount = $derived((grossAmount * feeRate).toFixed(2));
  let reserveAmount = $derived((grossAmount * reserveRate).toFixed(2));
  let payableAmount = $derived((grossAmount - Number(feeAmount) - Number(reserveAmount)).toFixed(2));

  const codeString = `// Split a shopper capture: fees, reserve, payable
vars {
  account $merchant
  monetary $captured
}

send $captured (
  source = @world
  destination = {
    2.9% to @platform:fees
    5% to @reserve:$merchant
    remaining to @payable:$merchant
  }
)`;

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

<!-- Section Wrapper: Pure SOLID Dark Background -->
<section 
  id="creditscript-capture" 
  class="relative theme-emerald dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)]">
      
      <!-- Left Column: Header with Eyebrow, Heading, Description, and CTA Button -->
      <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground free-flow px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _CREDITSCRIPT/
          </span>
          <h2 class="h3 text-foreground">The split happens at capture</h2>
          <p class="subheading-md text-foreground">Fees and reserve are accounting, not a nightly job.</p>
          <p class="p-md text-muted-foreground">
            One CreditScript transaction credits the merchant net of the fee schedule and sets aside the rolling reserve; the payout cycle later pays exactly what the ledger holds.
          </p>

          <a
            href="https://playground.creditbird.com"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-8 h-9 uppercase mt-1 self-start shadow-sm transition-colors"
          >
            Try it in the Playground
          </a>
        </div>
      </div>

      <!-- Right Column: Code Window Panel -->
      <div data-auto-snap="true" class="snap-group-item flex flex-col bg-background text-foreground p-0">
        <div class="grid-ring flex h-full w-full flex-col bg-(--shiki-background) dark">
          <!-- Window Top Bar -->
          <div class="flex h-[calc(var(--grid-unit)*2)] items-center justify-between px-(--grid-unit)" style="border-bottom:1px solid color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 14%, transparent)">
            <span class="badge-sm font-mono lowercase" style="color:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 50%, transparent)">capture.credit</span>

            <div class="flex items-center gap-4">
              <button
                type="button"
                onclick={copyCode}
                class="flex items-center gap-1.5 text-[11px] font-mono text-[#8aa5a6] hover:text-white transition-colors cursor-pointer"
                title="Copy snippet"
              >
                {#if copied}
                  <Check class="size-3 text-[#34d399]" />
                  <span class="text-[#34d399]">Copied</span>
                {:else}
                  <Copy class="size-3" />
                  <span>Copy</span>
                {/if}
              </button>

              <span class="flex items-center gap-[calc(var(--grid-unit)*0.25)]">
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 20%, transparent)"></i>
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background:color-mix(in srgb, var(--shiki-foreground, #cbd5e1) 20%, transparent)"></i>
                <i class="block size-[calc(var(--grid-unit)*0.4)]" style="background-color:var(--section-accent)"></i>
              </span>
            </div>
          </div>

          <!-- Code Body with Shiki Parity Colors -->
          <div class="flex-1 overflow-x-auto overflow-y-hidden p-(--grid-unit) [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <pre class="shiki font-mono text-sm leading-relaxed m-0 bg-transparent p-0 whitespace-pre"><code><span class="text-[#849a9b]">// Split a shopper capture: fees, reserve, payable</span>
<span class="text-[#4ade80]">vars</span> &#123;
  <span class="text-[#4ade80]">account</span> <span class="text-[#a7f3d0]">$merchant</span>
  <span class="text-[#4ade80]">monetary</span> <span class="text-[#a7f3d0]">$captured</span>
&#125;

<span class="text-[#4ade80]">send</span> <span class="text-[#a7f3d0]">$captured</span> (
  <span class="text-[#34d399]">source</span> = <span class="text-[#d8b4fe]">@world</span>
  <span class="text-[#34d399]">destination</span> = &#123;
    <span class="text-[#38bdf8]">2.9%</span> <span class="text-[#4ade80]">to</span> <span class="text-[#d8b4fe]">@platform:fees</span>
    <span class="text-[#38bdf8]">5%</span> <span class="text-[#4ade80]">to</span> <span class="text-[#d8b4fe]">@reserve:$merchant</span>
    <span class="text-[#4ade80]">remaining</span> <span class="text-[#4ade80]">to</span> <span class="text-[#d8b4fe]">@payable:$merchant</span>
  &#125;
)</code></pre>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
