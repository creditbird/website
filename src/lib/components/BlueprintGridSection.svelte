<script lang="ts">
  import { ArrowRight, ExternalLink } from 'lucide-svelte';

  export type BlueprintGridItem = {
    id?: string;
    code?: string;
    title: string;
    desc: string;
    icon?: any;
    tag?: string;
    badge?: string;
    badgeColor?: string;
    linkText?: string;
    linkUrl?: string;
    external?: boolean;
  };

  let {
    id,
    theme = 'dark',
    eyebrow,
    title,
    subheading,
    description,
    columns = 3,
    items
  }: {
    id?: string;
    theme?: 'dark' | 'light';
    eyebrow: string;
    title: string;
    subheading?: string;
    description?: string;
    columns?: 2 | 3 | 4;
    items: BlueprintGridItem[];
  } = $props();
</script>

<section 
  {id}
  class="relative {theme === 'dark' ? 'theme-cobalt-primary dark bg-background text-foreground' : 'theme-light bg-white text-[#090e1f]'}" 
  style="--section-accent:var(--cobalt-accent, {theme === 'dark' ? '#60a5fa' : '#22439c'})"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card free-flow flex flex-col grid-ring {theme === 'dark' ? 'bg-background text-foreground' : 'bg-[#f8fafc] text-[#090e1f]'} px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span 
            class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit justify-center px-3 {theme === 'dark' ? 'text-eyebrow-foreground bg-eyebrow-background' : 'text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc]'} self-start"
          >
            {eyebrow}
          </span>
          <h2 class="h3 font-bold tracking-tight {theme === 'dark' ? 'text-foreground' : 'text-[#090e1f]'}">
            {title}
          </h2>
          {#if subheading}
            <p class="subheading-md {theme === 'dark' ? 'text-foreground' : 'text-[#334155]'}">
              {subheading}
            </p>
          {/if}
          {#if description}
            <p class="p-md {theme === 'dark' ? 'text-muted-foreground' : 'text-[#64748b]'} leading-relaxed">
              {description}
            </p>
          {/if}
        </div>
      </div>

      <!-- Blueprint Modular Grid: Abutting cells with .grid-ring lines -->
      <div 
        class="free-flow grid-row [--_cols-md:2] [--_cols-lg:{columns}] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact"
      >
        {#each items as item}
          {@const ItemIcon = item.icon}
          <div 
            data-auto-snap="true" 
            class="snap-group-item free-flow flex flex-col grid-ring {theme === 'dark' ? 'bg-background text-foreground' : 'bg-white text-[#090e1f]'} p-1gu justify-between transition-colors hover:{theme === 'dark' ? 'bg-[#101e44]' : 'bg-[#f8fafc]'}"
          >
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                {#if ItemIcon}
                  <div class="w-9 h-9 flex items-center justify-center grid-ring {theme === 'dark' ? 'bg-[#101e44] text-[#60a5fa]' : 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc]'} shrink-0">
                    <ItemIcon size={18} />
                  </div>
                {:else if item.id}
                  <span class="badge-sm font-mono tabular-nums font-bold" style="color:var(--section-accent)">
                    {item.id}
                  </span>
                {/if}

                {#if item.code}
                  <span class="font-mono text-[11px] {theme === 'dark' ? 'text-muted-foreground' : 'text-[#64748b]'} tracking-wider uppercase font-semibold">
                    {item.code}
                  </span>
                {:else if item.badge}
                  <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded border {item.badgeColor || 'bg-[#edf2ff] text-[var(--cb-cobalt-600)] border-[#c2d2fc]'}">
                    {item.badge}
                  </span>
                {/if}
              </div>

              <div class="flex flex-col gap-1.5 mt-1">
                <h3 class="font-bold text-base {theme === 'dark' ? 'text-foreground' : 'text-[#090e1f]'} leading-snug">
                  {item.title}
                </h3>
                <p class="p-sm {theme === 'dark' ? 'text-muted-foreground' : 'text-[#64748b]'} leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {#if item.tag || item.linkText}
              <div class="flex items-center justify-between pt-4 mt-3 border-t {theme === 'dark' ? 'border-[rgba(255,255,255,0.08)]' : 'border-[#f1f5f9]'}">
                {#if item.tag}
                  <span class="badge-sm font-mono uppercase tracking-widest font-semibold" style="color:var(--section-accent)">
                    {item.tag}
                  </span>
                {:else}
                  <span></span>
                {/if}

                {#if item.linkText && item.linkUrl}
                  <a 
                    href={item.linkUrl}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    class="inline-flex items-center gap-1 font-mono text-xs font-semibold hover:underline"
                    style="color:var(--section-accent)"
                  >
                    <span>{item.linkText}</span>
                    {#if item.external}
                      <ExternalLink size={12} />
                    {:else}
                      <ArrowRight size={12} />
                    {/if}
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
