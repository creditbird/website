<script lang="ts">
  import { page } from '$app/state';
  import { getLocale, locales, baseLocale, localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
  }

  let {
    title,
    description,
    keywords,
    ogImage = 'https://creditbirdtech.com/creditbird-logo.webp',
    ogType = 'website'
  }: Props = $props();

  const currentLocale = $derived(getLocale());
  const finalTitle = $derived(title || m.meta_title());
  const finalDescription = $derived(description || m.meta_description());
  const finalKeywords = $derived(keywords || m.meta_keywords());

  const origin = 'https://creditbirdtech.com';
  const currentPath = $derived(page.url.pathname);
  const canonicalUrl = $derived(`${origin}${currentPath}`);
  function toCleanPath(pathOrUrl: string): string {
    if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
      try {
        return new URL(pathOrUrl).pathname;
      } catch {
        return pathOrUrl;
      }
    }
    return pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  }
</script>

<svelte:head>
  <title>{finalTitle}</title>
  <meta name="description" content={finalDescription} />
  <meta name="keywords" content={finalKeywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={finalTitle} />
  <meta property="og:description" content={finalDescription} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:site_name" content="CreditBird" />
  <meta property="og:locale" content={currentLocale} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={finalTitle} />
  <meta name="twitter:description" content={finalDescription} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Canonical -->
  <link rel="canonical" href={canonicalUrl} />

  <!-- Hreflang alternates for International SEO -->
  {#each locales as loc (loc)}
    <link 
      rel="alternate" 
      hreflang={loc} 
      href={`${origin}${toCleanPath(localizeHref(currentPath, { locale: loc }))}`} 
    />
  {/each}
  <link 
    rel="alternate" 
    hreflang="x-default" 
    href={`${origin}${toCleanPath(localizeHref(currentPath, { locale: baseLocale }))}`} 
  />
</svelte:head>
