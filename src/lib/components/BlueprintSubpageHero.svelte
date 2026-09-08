<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Copy, Check, Terminal } from 'lucide-svelte';

  let {
    eyebrow,
    eyebrowIcon: EyebrowIcon,
    specBadge,
    title,
    description,
    primaryBtnText,
    primaryBtnHref,
    primaryBtnAction,
    primaryBtnIcon: PrimaryBtnIcon,
    secondaryBtnText,
    secondaryBtnHref,
    secondaryBtnAction,
    terminalCommand,
    children
  }: {
    eyebrow: string;
    eyebrowIcon?: any;
    specBadge?: string;
    title: string;
    description: string;
    primaryBtnText?: string;
    primaryBtnHref?: string;
    primaryBtnAction?: () => void;
    primaryBtnIcon?: any;
    secondaryBtnText?: string;
    secondaryBtnHref?: string;
    secondaryBtnAction?: () => void;
    terminalCommand?: string;
    children?: Snippet;
  } = $props();

  let copied = $state(false);

  function copyCommand() {
    if (!terminalCommand) return;
    navigator.clipboard.writeText(terminalCommand);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<section 
  class="relative theme-cobalt-primary dark bg-background text-foreground overflow-hidden"
  style="--section-accent:var(--cobalt-accent, #60a5fa)"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Cockpit Hero Frame: Hairline grid-ring module with zero double-border -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-4 max-w-44gu">
          
          <!-- Technical Eyebrow & Spec Badge -->
          <div class="flex items-center gap-3 flex-wrap">
            <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background gap-1.5 self-start">
              {#if EyebrowIcon}
                <EyebrowIcon size={13} class="text-[#60a5fa]" />
              {/if}
              {eyebrow}
            </span>
            {#if specBadge}
              <span class="text-xs font-mono text-muted-foreground tracking-tight">
                {specBadge}
              </span>
            {/if}
          </div>

          <!-- Bold Technical Headline -->
          <h1 class="h2 text-foreground font-bold tracking-tight leading-tight">
            {title}
          </h1>

          <!-- Precision Subheading -->
          <p class="p-lg text-muted-foreground max-w-38gu leading-relaxed">
            {description}
          </p>

          <!-- Dual Action Buttons -->
          {#if primaryBtnText || secondaryBtnText}
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {#if primaryBtnText}
                {#if primaryBtnHref}
                  <a 
                    href={primaryBtnHref} 
                    target={primaryBtnHref.startsWith('http') ? '_blank' : undefined}
                    rel={primaryBtnHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    class="btn-cta-primary !h-11 !px-6 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    {#if PrimaryBtnIcon}
                      <PrimaryBtnIcon size={15} />
                    {/if}
                    <span>{primaryBtnText}</span>
                  </a>
                {:else if primaryBtnAction}
                  <button 
                    type="button" 
                    onclick={primaryBtnAction}
                    class="btn-cta-primary !h-11 !px-6 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {#if PrimaryBtnIcon}
                      <PrimaryBtnIcon size={15} />
                    {/if}
                    <span>{primaryBtnText}</span>
                  </button>
                {/if}
              {/if}

              {#if secondaryBtnText}
                {#if secondaryBtnHref}
                  <a 
                    href={secondaryBtnHref} 
                    target={secondaryBtnHref.startsWith('http') ? '_blank' : undefined}
                    rel={secondaryBtnHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    class="btn-cta-outline text-white !border-[rgba(74,144,226,0.4)] hover:!bg-white/10 !h-11 !px-6 text-xs flex items-center justify-center gap-2"
                  >
                    <span>{secondaryBtnText}</span>
                  </a>
                {:else if secondaryBtnAction}
                  <button 
                    type="button" 
                    onclick={secondaryBtnAction}
                    class="btn-cta-outline text-white !border-[rgba(74,144,226,0.4)] hover:!bg-white/10 !h-11 !px-6 text-xs cursor-pointer"
                  >
                    <span>{secondaryBtnText}</span>
                  </button>
                {/if}
              {/if}
            </div>
          {/if}

          <!-- Optional Terminal One-Liner Box -->
          {#if terminalCommand}
            <div class="mt-2 p-3 bg-[#0a1329] grid-ring flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-2xl font-mono text-xs">
              <div class="flex items-center gap-2 overflow-x-auto text-[#cbd5e1]">
                <Terminal size={14} class="text-[#60a5fa] shrink-0" />
                <span class="text-[#64748b] select-none">$</span>
                <code class="text-[#e2e8f0] select-all whitespace-nowrap">{terminalCommand}</code>
              </div>
              <button 
                type="button" 
                onclick={copyCommand}
                class="px-2.5 py-1 bg-[rgba(50,135,255,0.15)] hover:bg-[rgba(50,135,255,0.25)] text-white flex items-center justify-center gap-1.5 shrink-0 transition-colors cursor-pointer border border-[rgba(50,135,255,0.3)]"
                title="Copy to clipboard"
              >
                {#if copied}
                  <Check size={12} class="text-[#60a5fa]" />
                  <span class="text-[11px] text-[#60a5fa] font-mono">COPIED</span>
                {:else}
                  <Copy size={12} />
                  <span class="text-[11px] font-mono">COPY</span>
                {/if}
              </button>
            </div>
          {/if}

        </div>
      </div>

      <!-- Optional Extra Cockpit Slot / Schematics -->
      {#if children}
        {@render children()}
      {/if}

    </div>
  </div>
</section>
