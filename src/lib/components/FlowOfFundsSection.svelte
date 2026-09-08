<script lang="ts">
  // Formance Parity Section 3: _FLOW OF FUNDS/
  // Strict 32px Architectural Grid Matrix Frame
</script>

<section 
  id="flow-of-funds" 
  class="relative theme-emerald bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-700, #22439c))"
>
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu h-[calc(var(--grid-unit)*11)] min-h-[calc(var(--grid-unit)*11)]">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _FLOW OF FUNDS/
          </span>
          <h2 class="h3 text-foreground">From shopper capture to merchant payout</h2>
          <p class="subheading-md text-foreground">Fees, reserve, and payable split at capture: payout is just a query.</p>
          <p class="p-md text-muted-foreground">Each capture credits the merchant's payable net of fees, sets aside the rolling reserve, and the payout cycle simply pays what the ledger says. Refunds and chargebacks debit the same accounts, so the position is always current.</p>
        </div>
      </div>

      <!-- Bottom Card: Merchant Position Flow Diagram -->
      <div class="flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu items-center justify-center h-[calc(var(--grid-unit)*11)] min-h-[calc(var(--grid-unit)*11)]">
        <div class="w-full">
          <!-- Center Top Pill: merchant position -->
          <div class="mb-1gu flex justify-center">
            <span 
              class="badge-sm font-mono uppercase tracking-widest px-1gu py-gu-0.25" 
              style="color:var(--section-accent);border:1px solid var(--section-accent);background-color:color-mix(in srgb, var(--section-accent) 8%, transparent)"
            >
              merchant position
            </span>
          </div>

          <!-- 4 Process Step Cards Flow with Arrow Dividers -->
          <div class="flex flex-col items-stretch md:flex-row md:items-center">
            <!-- 1. CAPTURE -->
            <div 
              class="flex flex-1 flex-col items-center justify-center gap-gu-0.5 px-1gu py-1gu text-center transition-colors duration-300" 
              style="border:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent);background-color:transparent"
            >
              <span class="badge-md font-mono uppercase tracking-widest text-foreground font-semibold">capture</span>
              <span class="badge-sm font-mono text-muted-foreground">shopper payment</span>
            </div>

            <!-- Arrow 1 -->
            <div class="flex items-center justify-center px-[calc(var(--grid-unit)*0.5)] py-[calc(var(--grid-unit)*0.5)] md:py-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" class="shrink-0 rotate-90 md:rotate-0" aria-hidden="true">
                <path d="M1 1L5 4L1 7" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
              </svg>
            </div>

            <!-- 2. FEE SPLIT -->
            <div 
              class="flex flex-1 flex-col items-center justify-center gap-gu-0.5 px-1gu py-1gu text-center transition-colors duration-300" 
              style="border:1px solid var(--section-accent);background-color:color-mix(in srgb, var(--section-accent) 5%, transparent)"
            >
              <span class="badge-md font-mono uppercase tracking-widest text-foreground font-semibold">fee split</span>
              <span class="badge-sm font-mono text-muted-foreground">schedule applied</span>
            </div>

            <!-- Arrow 2 -->
            <div class="flex items-center justify-center px-[calc(var(--grid-unit)*0.5)] py-[calc(var(--grid-unit)*0.5)] md:py-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" class="shrink-0 rotate-90 md:rotate-0" aria-hidden="true">
                <path d="M1 1L5 4L1 7" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
              </svg>
            </div>

            <!-- 3. RESERVE -->
            <div 
              class="flex flex-1 flex-col items-center justify-center gap-gu-0.5 px-1gu py-1gu text-center transition-colors duration-300" 
              style="border:1px solid var(--section-accent);background-color:color-mix(in srgb, var(--section-accent) 5%, transparent)"
            >
              <span class="badge-md font-mono uppercase tracking-widest text-foreground font-semibold">reserve</span>
              <span class="badge-sm font-mono text-muted-foreground">rolling hold</span>
            </div>

            <!-- Arrow 3 -->
            <div class="flex items-center justify-center px-[calc(var(--grid-unit)*0.5)] py-[calc(var(--grid-unit)*0.5)] md:py-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" class="shrink-0 rotate-90 md:rotate-0" aria-hidden="true">
                <path d="M1 1L5 4L1 7" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
              </svg>
            </div>

            <!-- 4. PAYOUT -->
            <div 
              class="flex flex-1 flex-col items-center justify-center gap-gu-0.5 px-1gu py-1gu text-center transition-colors duration-300" 
              style="border:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent);background-color:transparent"
            >
              <span class="badge-md font-mono uppercase tracking-widest text-foreground font-semibold">payout</span>
              <span class="badge-sm font-mono text-muted-foreground">merchant settled</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
