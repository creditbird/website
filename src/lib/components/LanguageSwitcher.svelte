<script lang="ts">
  import { page } from '$app/state';
  import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';
  import { Globe, ChevronDown, Check } from 'lucide-svelte';

  interface Props {
    variant?: 'navbar' | 'mobile' | 'footer';
  }

  let { variant = 'navbar' }: Props = $props();

  let isOpen = $state(false);
  let containerRef: HTMLDivElement | null = $state(null);

  const currentLocale = $derived(getLocale());

  const languageMap: Record<string, { name: string; native: string; flag: string }> = {
    vi: { name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳' },
    en: { name: 'English', native: 'English', flag: '🇬🇧' },
    zh: { name: 'Chinese', native: '简体中文', flag: '🇨🇳' },
    fr: { name: 'French', native: 'Français', flag: '🇫🇷' },
    hi: { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
    es: { name: 'Spanish', native: 'Español', flag: '🇪🇸' },
    ja: { name: 'Japanese', native: '日本語', flag: '🇯🇵' },
    ko: { name: 'Korean', native: '한국어', flag: '🇰🇷' },
    lo: { name: 'Lao', native: 'ພາສາລາວ', flag: '🇱🇦' },
    th: { name: 'Thai', native: 'ภาษาไทย', flag: '🇹🇭' },
    ms: { name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾' },
    de: { name: 'German', native: 'Deutsch', flag: '🇩🇪' },
    it: { name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
    pt: { name: 'Portuguese', native: 'Português', flag: '🇧🇷' },
    nl: { name: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
    id: { name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩' },
    ar: { name: 'Arabic', native: 'العربية', flag: '🇦🇪' },
  };

  const currentInfo = $derived(languageMap[currentLocale] || { name: 'Language', native: currentLocale.toUpperCase(), flag: '🌐' });

  function toggleDropdown(e: MouseEvent) {
    e.stopPropagation();
    isOpen = !isOpen;
  }

  function handleWindowClick(e: MouseEvent) {
    if (containerRef && !containerRef.contains(e.target as Node)) {
      isOpen = false;
    }
  }

  function handleSelect() {
    isOpen = false;
  }
</script>

<svelte:window 
  onclick={handleWindowClick} 
  onkeydown={(e) => { if (e.key === 'Escape') isOpen = false; }} 
/>

{#if variant === 'navbar'}
  <div class="relative inline-block text-left" bind:this={containerRef}>
    <button
      type="button"
      onclick={toggleDropdown}
      class="grid-ring inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-sm)] font-mono text-xs font-semibold text-[#090e1f] hover:text-[var(--cb-cobalt-500)] bg-[#f8fafc] border border-[#cbd5e1] transition-colors cursor-pointer"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Select Language"
    >
      <Globe size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
      <span class="uppercase tracking-wider">{currentLocale}</span>
      <ChevronDown size={12} class="text-[#64748b] shrink-0 transition-transform {isOpen ? 'rotate-180' : ''}" />
    </button>

    {#if isOpen}
      <div 
        class="absolute right-0 mt-1.5 w-64 rounded-lg bg-white shadow-xl border border-[#e2e8f0] p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 grid-ring"
      >
        <div class="px-2.5 py-1.5 text-[11px] font-mono font-semibold text-[#64748b] uppercase tracking-wider border-b border-[#f1f5f9] mb-1">
          {m.lang_select_title()}
        </div>
        <div class="max-h-72 overflow-y-auto flex flex-col gap-0.5 custom-scrollbar">
          {#each locales as loc (loc)}
            {@const info = languageMap[loc] || { name: loc, native: loc, flag: '🌐' }}
            {@const isSelected = currentLocale === loc}
            <a
              href={localizeHref(page.url.pathname, { locale: loc })}
              data-sveltekit-reload
              hreflang={loc}
              onclick={handleSelect}
              class="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors {isSelected ? 'bg-[#edf2ff] text-[var(--cb-cobalt-700)] font-semibold' : 'text-[#334155] hover:bg-[#f8fafc] hover:text-[#090e1f]'}"
            >
              <div class="flex items-center gap-2">
                <span class="text-sm shrink-0">{info.flag}</span>
                <div class="flex flex-col text-left">
                  <span class="leading-snug">{info.native}</span>
                  <span class="text-[10px] text-[#64748b] leading-tight">{info.name}</span>
                </div>
              </div>
              {#if isSelected}
                <Check size={14} class="text-[var(--cb-cobalt-600)] shrink-0" />
              {/if}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>

{:else if variant === 'mobile'}
  <div class="flex flex-col gap-2 py-2 border-t border-[#f1f5f9]">
    <div class="flex items-center gap-1.5 font-mono text-xs text-[#64748b] uppercase tracking-wider px-1">
      <Globe size={13} class="text-[var(--cb-cobalt-600)] shrink-0" />
      <span>{m.lang_select_label()}</span>
    </div>
    <div class="grid grid-cols-2 gap-1.5">
      {#each locales as loc (loc)}
        {@const info = languageMap[loc] || { name: loc, native: loc, flag: '🌐' }}
        {@const isSelected = currentLocale === loc}
        <a
          href={localizeHref(page.url.pathname, { locale: loc })}
          data-sveltekit-reload
          hreflang={loc}
          class="flex items-center gap-2 px-2.5 py-1.5 rounded border text-xs transition-colors {isSelected ? 'bg-[#edf2ff] border-[#c2d2fc] text-[var(--cb-cobalt-700)] font-semibold' : 'border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f8fafc]'}"
        >
          <span class="text-sm shrink-0">{info.flag}</span>
          <span class="truncate">{info.native}</span>
        </a>
      {/each}
    </div>
  </div>

{:else if variant === 'footer'}
  <div class="flex items-center gap-2 flex-wrap">
    <div class="flex items-center gap-1.5 font-mono text-xs text-[#94a3b8]">
      <Globe size={13} class="text-[var(--cb-azure-400)] shrink-0" />
      <span>Language:</span>
    </div>
    <div class="flex items-center gap-1.5 flex-wrap">
      {#each locales as loc (loc)}
        {@const info = languageMap[loc] || { name: loc, native: loc, flag: '🌐' }}
        {@const isSelected = currentLocale === loc}
        <a
          href={localizeHref(page.url.pathname, { locale: loc })}
          data-sveltekit-reload
          hreflang={loc}
          class="font-mono text-xs px-2 py-0.5 rounded transition-colors {isSelected ? 'bg-[var(--cb-cobalt-500)] text-white font-bold' : 'text-[#94a3b8] hover:text-white bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'}"
          title={info.native}
        >
          {loc.toUpperCase()}
        </a>
      {/each}
    </div>
  </div>
{/if}
