import type { PublicPage } from './public-pages.ts';
import { absoluteSiteUrl, SITE_ORIGIN } from './site.ts';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderSitemap(pages: PublicPage[]): string {
  const urls = pages.map((page) => {
    const loc = `    <loc>${escapeXml(absoluteSiteUrl(page.path))}</loc>`;
    const lastmod = page.publishedTime
      ? `\n    <lastmod>${escapeXml(page.publishedTime)}</lastmod>`
      : '';
    return `  <url>\n${loc}${lastmod}\n  </url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export function renderRobots(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
}
