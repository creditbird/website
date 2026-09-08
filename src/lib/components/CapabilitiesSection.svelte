<script lang="ts">
  type Capability = {
    badge: string;
    description: string;
    tag: string;
    linkText?: string;
    linkUrl?: string;
  };

  const capabilities: Capability[] = [
    {
      badge: '_MERCHANT ACCOUNTS/',
      description: 'A payable position per merchant derived from every capture, refund, and chargeback: exact at any moment, auditable forever.',
      tag: 'derived payables'
    },
    {
      badge: '_FEE SCHEDULES/',
      description: 'Per-merchant, per-method, tiered pricing declared in Numscript and applied at capture, not reconstructed in a batch job.',
      tag: 'declarative pricing',
      linkText: 'Read the Numscript docs',
      linkUrl: 'https://docs.creditbird.com/numscript'
    },
    {
      badge: '_ROLLING RESERVES/',
      description: 'Reserves held, released, and drawn as ledger transactions with their own account trees and release schedules.',
      tag: 'native reserves'
    },
    {
      badge: '_PROCESSOR RECONCILIATION/',
      description: 'Settlement files from processors and schemes match continuously against ledger state, with breaks flagged same-day.',
      tag: 'same-day breaks'
    }
  ];
</script>

<section 
  id="capabilities" 
  class="relative theme-emerald dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground free-flow px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _CAPABILITIES/
          </span>
          <h2 class="h3 text-foreground">The primitives acquirers need</h2>
          <p class="subheading-md text-foreground">Built on the open-source CreditBird ledger.</p>
          <p class="p-md text-muted-foreground">Declarative fee schedules, native reserve management, and processor reconciliation, composed for merchant settlement.</p>
        </div>
      </div>

      <!-- 2x2 Capabilities Grid: Connected with .grid-ring Lines -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:2] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each capabilities as cap}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground free-flow p-1gu">
            <div class="flex flex-col gap-3">
              <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
                {cap.badge}
              </span>
              <p class="p-md text-muted-foreground">
                {cap.description}
              </p>
              <div class="flex items-center justify-between pt-2">
                <span class="badge-sm font-mono uppercase tracking-widest font-semibold" style="color:var(--section-accent)">
                  {cap.tag}
                </span>
                {#if cap.linkText && cap.linkUrl}
                  <a 
                    href={cap.linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="group/link inline-flex items-center gap-1 p-sm font-medium" 
                    style="color:var(--section-accent)"
                  >
                    {cap.linkText}
                    <span aria-hidden="true" class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
