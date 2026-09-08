<script lang="ts">
  // Formance Parity Section 2: _THE PROBLEM/
  const problems = [
    {
      num: '01',
      text: 'Merchant payables are computed in batch jobs that nobody can audit after the fact.'
    },
    {
      num: '02',
      text: 'Fee schedules (per merchant, per method, per volume tier) live in brittle application code.'
    },
    {
      num: '03',
      text: 'Chargebacks and refunds land after payout, driving merchant balances negative.'
    },
    {
      num: '04',
      text: 'Rolling reserves are tracked in spreadsheets next to the real books.'
    }
  ];
</script>

<section 
  id="the-problem" 
  class="relative theme-cobalt-primary dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, #60a5fa)"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _THE PROBLEM/
          </span>
          <h2 class="h3 text-foreground">A merchant balance is a moving target</h2>
          <p class="subheading-md text-foreground">Captures, refunds, chargebacks, and reserves all pull in different directions.</p>
          <p class="p-md text-muted-foreground">Every merchant's payable is captures minus fees, minus refunds, minus chargebacks, minus the rolling reserve, computed across processors and settlement files that disagree. Get it wrong and you pay out money you do not have.</p>
        </div>
      </div>

      <!-- 2x2 Problem Cards with Shared Grid-Ring Lines -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each problems as item}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu">
            <div class="flex flex-col gap-3">
              <span class="badge-sm font-mono tabular-nums font-semibold" style="color:var(--section-accent)">{item.num}</span>
              <p class="p-md text-foreground">{item.text}</p>
            </div>
          </div>
        {/each}
      </div>

      <!-- Proof Callout Card (max-w-40gu self-start) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground p-1gu max-w-40gu self-start">
        <p class="p-md text-foreground">
          <span class="badge-sm font-mono uppercase font-semibold mr-1" style="color:var(--section-accent)">_PROOF/ </span>
          Acquirers and payment facilitators run merchant settlement on CreditBird, every payout derived, never estimated.
        </p>
      </div>

    </div>
  </div>
</section>
