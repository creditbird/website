<script lang="ts">
  const faqs = [
    {
      num: '01',
      question: 'HOW ARE CHARGEBACKS HANDLED AFTER PAYOUT?',
      answer: "Chargebacks debit the merchant's payable (or reserve) as ledger transactions. If the position goes negative, it nets against future captures, tracked rather than lost."
    },
    {
      num: '02',
      question: 'CAN FEE SCHEDULES DIFFER PER MERCHANT?',
      answer: 'Yes: pricing is declared per merchant, per payment method, and per volume tier, and applied atomically at capture. Changing a schedule is configuration, not a migration.'
    },
    {
      num: '03',
      question: 'HOW DO ROLLING RESERVES RELEASE?',
      answer: 'Reserves are held in per-merchant accounts with release schedules run as workflows: held, released, and drawn amounts are all auditable ledger history.'
    },
    {
      num: '04',
      question: 'WHAT ABOUT MULTIPLE PROCESSORS?',
      answer: 'Captures and settlement files from every processor normalize into one schema, so merchant positions aggregate across processors and reconcile continuously.'
    }
  ];
</script>

<section 
  id="faq" 
  class="relative theme-emerald bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-700, #22439c))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="grid-ring flex flex-col bg-card-background">
      
      <!-- FAQ Header Panel -->
      <div class="flex flex-col justify-center gap-3 px-2gu h-[calc(var(--grid-unit)*6)]" style="border-bottom:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity, 0.4) * 100%), transparent)">
        <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap font-semibold" style="color:var(--section-accent)">
          FAQ
        </span>
        <h2 class="h4 text-card-foreground">
          Acquiring, answered
        </h2>
      </div>

      <!-- Connected FAQ Item Rows -->
      {#each faqs as item, idx}
        <div 
          class="grid grid-cols-1 items-center gap-y-3 px-2gu py-2gu max-md:snap-h-gu md:grid-cols-[calc(var(--grid-unit)*16)_1fr] md:gap-x-2gu md:gap-y-0 md:py-0 md:h-[calc(var(--grid-unit)*4)]"
          style={idx > 0 ? "border-top:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity, 0.4) * 100%), transparent)" : ""}
        >
          <h3 class="badge-md font-mono uppercase tracking-widest text-card-foreground">
            <span style="color:var(--section-accent)">{item.num}</span> / {item.question}
          </h3>
          <p class="p-md text-card-muted-foreground">
            {item.answer}
          </p>
        </div>
      {/each}

    </div>
  </div>
</section>
