<script lang="ts">
  type Metric = {
    label: string;
    value: string;
    sublabel: string;
  };

  const metrics: Metric[] = [
    {
      label: 'năm thành lập',
      value: '2018',
      sublabel: 'MST: 0315397327 · TP. Thủ Đức'
    },
    {
      label: 'dự án phần mềm & erp',
      value: '100+',
      sublabel: 'triển khai thành công'
    },
    {
      label: 'kỹ sư it phái cử',
      value: '50+',
      sublabel: 'onboard nhanh trong 48h'
    },
    {
      label: 'hệ thống máy & scent',
      value: '500+',
      sublabel: 'điểm phủ sóng thương hiệu'
    }
  ];
</script>

<!-- Section Wrapper: Pure SOLID background -->
<section 
  id="by-the-numbers" 
  class="relative theme-emerald bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-700, #22439c))"
>
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Header Box -->
      <div class="flex flex-col mb-1gu">
        <span 
          class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) px-1gu text-eyebrow-foreground bg-eyebrow-background"
        >
          _CON SỐ ẤN TƯỢNG/
        </span>
        <p 
          class="h5 font-sans w-full md:w-[calc(var(--grid-unit)*30)] p-1gu h-[calc(var(--grid-unit)*3)] flex items-center bg-card-background text-card-foreground grid-ring" 
        >
          Năng lực thực chứng qua từng năm phát triển
        </p>
      </div>

      <!-- 4 Metric Cards Row: .grid-row with column-gap 0 on desktop and .grid-ring on each card -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:4]">
        {#each metrics as metric}
          <div 
            data-auto-snap="true" 
            class="snap-group-item flex flex-col grid-ring bg-background text-foreground p-1gu justify-center h-[calc(var(--grid-unit)*7)] min-h-[calc(var(--grid-unit)*7)]"
          >
            <div class="flex flex-col gap-[calc(var(--grid-unit)*0.5)]">
              <!-- Top Label -->
              <span class="p-sm font-mono text-muted-foreground">
                {metric.label}
              </span>

              <!-- Big Hero Metric Value -->
              <span class="h2 font-mono tabular-nums tracking-tight whitespace-nowrap leading-none" style="color:var(--section-accent)">
                {metric.value}
              </span>

              <!-- Bottom Sublabel -->
              <span class="p-sm font-mono text-muted-foreground">
                {metric.sublabel}
              </span>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
