<script lang="ts">
  type MetricItem = {
    label: string;
    value: string;
    sublabel: string;
    color?: string;
  };

  let {
    eyebrow = '_CHỈ SỐ HIỆU NĂNG/',
    title,
    theme = 'light',
    metrics
  }: {
    eyebrow?: string;
    title?: string;
    theme?: 'light' | 'dark';
    metrics: MetricItem[];
  } = $props();
</script>

<section 
  class="relative {theme === 'dark' ? 'theme-cobalt-primary dark bg-background text-foreground' : 'theme-light bg-[#f8fafc] text-[#090e1f]'}"
  style="--section-accent:var(--cobalt-accent, {theme === 'dark' ? '#60a5fa' : '#22439c'})"
>
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      {#if title}
        <div class="flex flex-col mb-1gu">
          <span 
            class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-1gu {theme === 'dark' ? 'text-eyebrow-foreground bg-eyebrow-background' : 'text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc]'}"
          >
            {eyebrow}
          </span>
          <p 
            class="h5 font-sans w-full md:w-[calc(var(--grid-unit)*30)] p-1gu h-[calc(var(--grid-unit)*3)] flex items-center {theme === 'dark' ? 'bg-card-background text-card-foreground' : 'bg-white text-[#090e1f]'} grid-ring font-semibold" 
          >
            {title}
          </p>
        </div>
      {/if}

      <!-- Metric Cards Row: .grid-row with .snap-group-item and .grid-ring on each card -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:{metrics.length >= 4 ? 4 : metrics.length}]">
        {#each metrics as metric}
          <div 
            data-auto-snap="true" 
            class="snap-group-item flex flex-col grid-ring {theme === 'dark' ? 'bg-background text-foreground' : 'bg-white text-[#090e1f]'} p-1gu justify-center h-[calc(var(--grid-unit)*7)] min-h-[calc(var(--grid-unit)*7)]"
          >
            <div class="flex flex-col gap-[calc(var(--grid-unit)*0.35)]">
              <!-- Top Label -->
              <span class="p-sm font-mono uppercase tracking-wider {theme === 'dark' ? 'text-muted-foreground' : 'text-[#64748b]'} font-semibold">
                {metric.label}
              </span>

              <!-- Big Metric Value -->
              <span 
                class="h2 font-mono tabular-nums tracking-tight whitespace-nowrap leading-none font-bold" 
                style="color:{metric.color || 'var(--section-accent)'}"
              >
                {metric.value}
              </span>

              <!-- Bottom Sublabel -->
              <span class="p-sm {theme === 'dark' ? 'text-muted-foreground' : 'text-[#64748b]'} leading-snug">
                {metric.sublabel}
              </span>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
