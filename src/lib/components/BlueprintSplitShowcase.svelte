<script lang="ts">
  import type { Snippet } from 'svelte';
  import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-svelte';

  type BulletItem = {
    title?: string;
    text: string;
  };

  let {
    id,
    eyebrow,
    title,
    description,
    bullets = [],
    linkText,
    linkUrl,
    external = false,
    theme = 'light',
    children
  }: {
    id?: string;
    eyebrow: string;
    title: string;
    description: string;
    bullets?: BulletItem[];
    linkText?: string;
    linkUrl?: string;
    external?: boolean;
    theme?: 'light' | 'dark';
    children?: Snippet;
  } = $props();
</script>

<section 
  {id}
  class="relative {theme === 'dark' ? 'theme-cobalt-primary dark bg-background text-foreground' : 'theme-light bg-[#f8fafc] text-[#090e1f]'}"
  style="--section-accent:var(--cobalt-accent, {theme === 'dark' ? '#60a5fa' : '#22439c'})"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <div class="snap-card free-flow flex flex-col grid-ring {theme === 'dark' ? 'bg-background text-foreground' : 'bg-white text-[#090e1f]'} p-1gu sm:p-2gu">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left Col (Col 1-6 or 1-7) -->
          <div class="lg:col-span-6 flex flex-col gap-5">
            <span 
              class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 {theme === 'dark' ? 'text-eyebrow-foreground bg-eyebrow-background' : 'text-[var(--cb-cobalt-600)] bg-[#edf2ff] border border-[#c2d2fc]'} self-start"
            >
              {eyebrow}
            </span>

            <h2 class="h3 font-bold tracking-tight {theme === 'dark' ? 'text-white' : 'text-[#090e1f]'}">
              {title}
            </h2>

            <p class="p-md {theme === 'dark' ? 'text-muted-foreground' : 'text-[#475569]'} leading-relaxed">
              {description}
            </p>

            {#if bullets.length > 0}
              <ul class="flex flex-col gap-3 text-sm {theme === 'dark' ? 'text-muted-foreground' : 'text-[#475569]'}">
                {#each bullets as b}
                  <li class="flex items-start gap-2.5">
                    <CheckCircle2 size={18} class="text-[var(--cb-emerald-500)] shrink-0 mt-0.5" />
                    <span>
                      {#if b.title}
                        <strong class="{theme === 'dark' ? 'text-white' : 'text-[#090e1f]'}">{b.title}:</strong>{' '}
                      {/if}
                      {b.text}
                    </span>
                  </li>
                {/each}
              </ul>
            {/if}

            {#if linkText && linkUrl}
              <div class="pt-2">
                <a 
                  href={linkUrl}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  class="inline-flex items-center gap-2 font-mono text-xs font-semibold hover:underline"
                  style="color:var(--section-accent)"
                >
                  <span>{linkText}</span>
                  {#if external}
                    <ExternalLink size={13} />
                  {:else}
                    <ArrowRight size={13} />
                  {/if}
                </a>
              </div>
            {/if}
          </div>

          <!-- Right Col: Cockpit Showcase Slot (Col 7-12) -->
          <div class="lg:col-span-6">
            {#if children}
              {@render children()}
            {/if}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
