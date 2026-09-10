<script lang="ts">
  import { page } from '$app/state';
  import { getLocale, locales, baseLocale, localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  const OG_LOCALE_MAP: Record<string, string> = {
    vi: 'vi_VN',
    en: 'en_US',
    zh: 'zh_CN',
    fr: 'fr_FR',
    hi: 'hi_IN',
    es: 'es_ES',
    ja: 'ja_JP',
    ko: 'ko_KR',
    lo: 'lo_LA',
    th: 'th_TH',
    ms: 'ms_MY',
    de: 'de_DE',
    it: 'it_IT',
    pt: 'pt_BR',
    nl: 'nl_NL',
    id: 'id_ID',
    ar: 'ar_SA'
  };

  interface BreadcrumbItem {
    name: string;
    path: string;
  }

  interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    noindex?: boolean;
    breadcrumbs?: BreadcrumbItem[];
    jsonLdCustom?: Record<string, any> | Array<Record<string, any>>;
  }

  let {
    title,
    description,
    keywords,
    ogImage = 'https://creditbirdtech.com/creditbird-logo.webp',
    ogType = 'website',
    noindex = false,
    breadcrumbs,
    jsonLdCustom
  }: Props = $props();

  const currentLocale = $derived(getLocale());
  const finalTitle = $derived(title || m.meta_title());
  const finalDescription = $derived(description || m.meta_description());
  const finalKeywords = $derived(keywords || m.meta_keywords());

  const origin = 'https://creditbirdtech.com';
  const currentPath = $derived(page.url.pathname);
  const canonicalUrl = $derived(`${origin}${toCleanPath(currentPath)}`);

  const currentOgLocale = $derived(OG_LOCALE_MAP[currentLocale] || 'vi_VN');
  const alternateOgLocales = $derived(
    locales.filter(l => l !== currentLocale).map(l => OG_LOCALE_MAP[l] || l)
  );

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

  const isHomePage = $derived(
    currentPath === '/' || locales.some(loc => currentPath === `/${loc}` || currentPath === `/${loc}/`)
  );

  const defaultBreadcrumbs = $derived.by<BreadcrumbItem[]>(() => {
    if (breadcrumbs && breadcrumbs.length > 0) return breadcrumbs;
    const items: BreadcrumbItem[] = [{ name: m.nav_home(), path: '/' }];

    if (currentPath.includes('/products/rustsale')) {
      items.push({ name: 'RustSale CRM & POS', path: '/products/rustsale' });
    } else if (currentPath.includes('/solutions/erp')) {
      items.push({ name: m.nav_software_title ? m.nav_software_title() : 'Solutions', path: '/solutions/software' });
      items.push({ name: m.nav_erp(), path: '/solutions/erp' });
    } else if (currentPath.includes('/solutions/scent-marketing')) {
      items.push({ name: m.nav_software_title ? m.nav_software_title() : 'Solutions', path: '/solutions/software' });
      items.push({ name: m.nav_scent(), path: '/solutions/scent-marketing' });
    } else if (currentPath.includes('/solutions/it-staffing')) {
      items.push({ name: m.nav_software_title ? m.nav_software_title() : 'Solutions', path: '/solutions/software' });
      items.push({ name: m.nav_it_staffing(), path: '/solutions/it-staffing' });
    } else if (currentPath.includes('/solutions/software')) {
      items.push({ name: m.nav_software_title(), path: '/solutions/software' });
    } else if (currentPath.includes('/terms')) {
      items.push({ name: m.nav_legal_title(), path: '/terms' });
      items.push({ name: m.nav_terms(), path: '/terms' });
    } else if (currentPath.includes('/privacy')) {
      items.push({ name: m.nav_legal_title(), path: '/privacy' });
      items.push({ name: m.nav_privacy(), path: '/privacy' });
    } else if (currentPath.includes('/warranty')) {
      items.push({ name: m.nav_legal_title(), path: '/warranty' });
      items.push({ name: m.nav_warranty(), path: '/warranty' });
    } else if (currentPath.includes('/security')) {
      items.push({ name: m.nav_legal_title(), path: '/security' });
      items.push({ name: m.nav_security(), path: '/security' });
    }
    return items;
  });

  const schemaGraph = $derived.by(() => {
    const orgSchema = {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      'name': 'CreditBird',
      'legalName': 'CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD',
      'alternateName': ['CreditBird Technology', 'CreditBird Tech', 'CreditBird Co., Ltd'],
      'url': origin,
      'logo': {
        '@type': 'ImageObject',
        '@id': `${origin}/#logo`,
        'url': `${origin}/creditbird-logo.webp`,
        'contentUrl': `${origin}/creditbird-logo.webp`,
        'caption': 'CreditBird Technology Logo',
        'width': '512',
        'height': '512'
      },
      'image': `${origin}/creditbird-logo.webp`,
      'foundingDate': '2018-11-19',
      'taxID': '0315397327',
      'telephone': '+84-932-640-968',
      'email': 'contact@creditbirdtech.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '100/20 Đường 79, Phường Phước Long',
        'addressLocality': 'Thành phố Hồ Chí Minh',
        'addressRegion': 'Hồ Chí Minh',
        'addressCountry': 'VN'
      },
      'founder': {
        '@type': 'Person',
        'name': 'Trần Trọng Tri'
      },
      'sameAs': [
        'https://github.com/creditbird',
        'https://www.facebook.com/creditbird',
        'https://kelvot.com',
        'https://www.lemyfinest.com'
      ],
      'knowsLanguage': [...locales],
      'knowsAbout': [
        'Enterprise Resource Planning (ERP)',
        'Point of Sale (POS)',
        'Rust Systems Architecture',
        'Omnichannel Messaging',
        'Scent Marketing & IoT Diffusers',
        'Cold Extraction Chemistry',
        'Dedicated Engineering Squads',
        'Custom Software Engineering'
      ]
    };

    const siteSchema = {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      'url': origin,
      'name': 'CreditBird',
      'alternateName': 'CreditBird Technology',
      'publisher': { '@id': `${origin}/#organization` },
      'inLanguage': [...locales]
    };

    const pageSchema = {
      '@type': ogType === 'article' ? 'TechArticle' : 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      'url': canonicalUrl,
      'name': finalTitle,
      'description': finalDescription,
      'inLanguage': currentLocale,
      'isPartOf': { '@id': `${origin}/#website` },
      'about': { '@id': `${origin}/#organization` },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.hero-subtitle', '[data-speakable]']
      }
    };

    const breadcrumbListSchema = {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      'itemListElement': defaultBreadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': `${origin}${toCleanPath(localizeHref(b.path, { locale: currentLocale }))}`
      }))
    };

    let autoEntity: Record<string, any> | null = null;
    if (currentPath.includes('/products/rustsale')) {
      autoEntity = {
        '@type': 'SoftwareApplication',
        '@id': `${origin}/products/rustsale#software`,
        'name': 'RustSale CRM & POS',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Linux, Windows, macOS',
        'softwareVersion': '2.4.0',
        'inLanguage': currentLocale,
        'url': canonicalUrl,
        'author': { '@id': `${origin}/#organization` },
        'description': finalDescription,
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'VND',
          'availability': 'https://schema.org/InStock',
          'seller': { '@id': `${origin}/#organization` }
        },
        'downloadUrl': 'https://rustsale.creditbirdtech.com/install-linux.sh',
        'featureList': [
          'Omnichannel Desktop Inbox (Zalo, Messenger, WhatsApp)',
          'Local-first SQLite storage',
          'Cold Email outreach engine',
          'Kanban sales pipeline',
          'Rust 50,000+ TPS performance'
        ]
      };
    } else if (currentPath.includes('/solutions/erp')) {
      autoEntity = {
        '@type': 'SoftwareApplication',
        '@id': `${origin}/solutions/erp#software`,
        'name': 'Kelvot ERP',
        'applicationCategory': 'EnterpriseResourcePlanning',
        'operatingSystem': 'Cloud, On-Premises Linux',
        'inLanguage': currentLocale,
        'url': canonicalUrl,
        'author': { '@id': `${origin}/#organization` },
        'description': finalDescription,
        'sameAs': 'https://kelvot.com'
      };
    } else if (currentPath.includes('/solutions/scent-marketing')) {
      autoEntity = {
        '@type': 'Product',
        '@id': `${origin}/solutions/scent-marketing#product`,
        'name': 'Lemy Finest Scent Marketing Solution',
        'category': 'Industrial IoT Scent Diffusers & Pure Essential Oils',
        'brand': {
          '@type': 'Brand',
          'name': 'Lemy Finest',
          'url': 'https://www.lemyfinest.com'
        },
        'inLanguage': currentLocale,
        'url': canonicalUrl,
        'manufacturer': { '@id': `${origin}/#organization` },
        'description': finalDescription
      };
    } else if (currentPath.includes('/solutions/software')) {
      autoEntity = {
        '@type': 'Service',
        '@id': `${origin}/solutions/software#service`,
        'name': 'Custom Software Development & Microservices',
        'serviceType': 'Enterprise Software Engineering',
        'provider': { '@id': `${origin}/#organization` },
        'areaServed': 'Global',
        'inLanguage': currentLocale,
        'url': canonicalUrl,
        'description': finalDescription
      };
    } else if (currentPath.includes('/solutions/it-staffing')) {
      autoEntity = {
        '@type': 'Service',
        '@id': `${origin}/solutions/it-staffing#service`,
        'name': 'Dedicated IT Staffing & Squad Augmentation',
        'serviceType': 'IT Staff Augmentation',
        'provider': { '@id': `${origin}/#organization` },
        'areaServed': 'Global',
        'inLanguage': currentLocale,
        'url': canonicalUrl,
        'description': finalDescription
      };
    }

    const faqSchema = {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      'inLanguage': currentLocale,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': currentLocale === 'vi' ? 'CreditBird là ai và thành lập từ năm nào?' : 'What is CreditBird and when was it established?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': currentLocale === 'vi'
              ? 'CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD thành lập ngày 19/11/2018 tại TP. Hồ Chí Minh (MST: 0315397327). CreditBird chuyên sâu trong: Phần mềm may đo & RustSale CRM, Hệ thống Kelvot ERP và Tinh dầu & Máy khuếch tán thông minh Lemy Finest.'
              : 'CreditBird Technology Co., Ltd is an enterprise tech company founded on November 19, 2018 in Ho Chi Minh City, Vietnam (Tax ID: 0315397327), specializing in custom software & RustSale CRM, Kelvot ERP, and Lemy Finest IoT scent marketing.'
          }
        },
        {
          '@type': 'Question',
          'name': currentLocale === 'vi' ? 'RustSale CRM có tính năng gì đặc biệt?' : 'What are the key capabilities of RustSale CRM?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': currentLocale === 'vi'
              ? 'RustSale là ứng dụng desktop phát triển bằng ngôn ngữ Rust với hiệu năng 50.000+ TPS, lưu trữ dữ liệu local-first SQLite an toàn tuyệt đối, tích hợp hộp thư hội tụ Zalo, Messenger, WhatsApp và cold email engine.'
              : 'RustSale is a high-performance desktop CRM built in Rust with 50,000+ TPS ingestion, local-first SQLite storage, omnichannel unified inbox (Zalo, Messenger, WhatsApp), and automated cold email outreach.'
          }
        },
        {
          '@type': 'Question',
          'name': currentLocale === 'vi' ? 'CreditBird có cam kết bàn giao mã nguồn không?' : 'Does CreditBird provide 100% source code ownership?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': currentLocale === 'vi'
              ? 'Có, toàn bộ các dự án phần mềm theo yêu cầu tại CreditBird đều cam kết bàn giao 100% bản quyền mã nguồn và tài liệu kiến trúc kỹ thuật với hợp đồng dịch vụ SLA bảo hành dài hạn, không khóa vendor lock-in.'
              : 'Yes, CreditBird commits to 100% source code ownership and technical architecture handover with committed B2B SLAs and zero vendor lock-in.'
          }
        }
      ]
    };

    const graphItems: Record<string, any>[] = [
      orgSchema,
      siteSchema,
      pageSchema,
      breadcrumbListSchema
    ];

    if (autoEntity) {
      graphItems.push(autoEntity);
    }

    if (isHomePage) {
      graphItems.push(faqSchema);
    }

    if (jsonLdCustom) {
      if (Array.isArray(jsonLdCustom)) {
        graphItems.push(...jsonLdCustom);
      } else {
        graphItems.push(jsonLdCustom);
      }
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graphItems
    };
  });

  const jsonLdString = $derived(JSON.stringify(schemaGraph));
</script>

<svelte:head>
  <title>{finalTitle}</title>
  <meta name="description" content={finalDescription} />
  <meta name="keywords" content={finalKeywords} />

  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  {/if}

  <meta name="author" content="CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD" />
  <meta name="publisher" content="https://creditbirdtech.com" />
  <meta name="application-name" content="CreditBird" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={finalTitle} />
  <meta property="og:description" content={finalDescription} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:secure_url" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={finalTitle} />
  <meta property="og:image:type" content="image/webp" />
  <meta property="og:site_name" content="CreditBird" />
  <meta property="og:locale" content={currentOgLocale} />
  {#each alternateOgLocales as altLoc (altLoc)}
    <meta property="og:locale:alternate" content={altLoc} />
  {/each}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={finalTitle} />
  <meta name="twitter:description" content={finalDescription} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:image:alt" content={finalTitle} />
  <meta name="twitter:site" content="@creditbirdtech" />
  <meta name="twitter:creator" content="@creditbirdtech" />

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

  <!-- Structured Data (JSON-LD) for Search Engines & AI Answer Engines -->
  {@html `<script type="application/ld+json">${jsonLdString}</` + `script>`}
</svelte:head>
