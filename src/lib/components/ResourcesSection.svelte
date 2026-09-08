<script lang="ts">
  // Formance Parity Section 9: _RESOURCES/
</script>

<section 
  id="resources" 
  class="relative theme-emerald dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Header Card -->
      <div class="flex flex-col mb-1gu">
        <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) px-1gu grid-ring text-eyebrow-foreground bg-eyebrow-background">
          _RESOURCES/
        </span>
        <div class="relative z-2 w-full bg-card-background text-card-foreground md:max-w-30gu grid-ring h-[calc(var(--grid-unit)*5)] min-h-[calc(var(--grid-unit)*5)]">
          <p class="h5 font-sans h-[calc(var(--grid-unit)*3)] flex items-center px-1gu">Keep going</p>
          <div class="h-[calc(var(--grid-unit)*2)] flex items-center px-1gu text-card-muted-foreground">
            <p class="p-md">Everything you need to evaluate and build on CreditBird.</p>
          </div>
        </div>
      </div>

      <!-- 3-Column Resource Grid -->
      <div class="free-flow grid-row [--_cols-md:1] [--_cols-lg:3]">
        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu h-[calc(var(--grid-unit)*7)] min-h-[calc(var(--grid-unit)*7)]">
          <a href="https://docs.creditbird.com" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-3 group/link">
            <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
              _DOCS/
            </span>
            <h3 class="subheading-md text-foreground group-hover/link:text-(--section-accent) transition-colors">
              Read the documentation
            </h3>
            <p class="p-md text-muted-foreground">
              Architecture guides, the Ledger and Connectivity references, and step-by-step quickstarts to ship in days.
            </p>
          </a>
        </div>

        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu h-[calc(var(--grid-unit)*7)] min-h-[calc(var(--grid-unit)*7)]">
          <a href="https://playground.creditbird.com" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-3 group/link">
            <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
              _CREDITSCRIPT/
            </span>
            <h3 class="subheading-md text-foreground group-hover/link:text-(--section-accent) transition-colors">
              Try CreditScript
            </h3>
            <p class="p-md text-muted-foreground">
              Model any flow of funds as deterministic, auditable transactions. Experiment live in the playground.
            </p>
          </a>
        </div>

        <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu h-[calc(var(--grid-unit)*7)] min-h-[calc(var(--grid-unit)*7)]">
          <a href="/customers" class="flex flex-col gap-3 group/link">
            <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
              _STORIES/
            </span>
            <h3 class="subheading-md text-foreground group-hover/link:text-(--section-accent) transition-colors">
              Customer stories
            </h3>
            <p class="p-md text-muted-foreground">
              See how fintechs, marketplaces and platforms run money movement on CreditBird in production.
            </p>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
