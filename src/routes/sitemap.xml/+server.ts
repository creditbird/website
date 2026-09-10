import type { RequestHandler } from './$types';
import { locales, baseLocale, localizeHref } from '$lib/paraglide/runtime';

const SITE_URL = 'https://creditbirdtech.com';

const routes = [
  '/',
  '/solutions/software',
  '/solutions/erp',
  '/solutions/scent-marketing',
  '/solutions/it-staffing',
  '/products/rustsale',
  '/terms',
  '/privacy',
  '/warranty',
  '/security'
];

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

export const GET: RequestHandler = async () => {
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    for (const locale of locales) {
      const pagePath = toCleanPath(localizeHref(route, { locale }));
      const fullUrl = `${SITE_URL}${pagePath}`;
      const priority = route === '/' ? '1.0' : (route.startsWith('/solutions') || route.startsWith('/products') ? '0.8' : '0.5');

      xml += `  <url>\n`;
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      for (const altLocale of locales) {
        const altPath = toCleanPath(localizeHref(route, { locale: altLocale }));
        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${SITE_URL}${altPath}" />\n`;
      }

      const defaultPath = toCleanPath(localizeHref(route, { locale: baseLocale }));
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultPath}" />\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
