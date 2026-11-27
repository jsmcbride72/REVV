import fs from 'fs';
import path from 'path';
import type { Plugin, ResolvedConfig } from 'vite';
import { postsFromMarkdown } from '../src/lib/blog-frontmatter.ts';
import { renderRobots, renderSitemap } from '../src/lib/crawl-files.ts';
import { publicPages, type PublicPage } from '../src/lib/public-pages.ts';
import { serializeJsonLd } from '../src/lib/structured-data.ts';
import { absoluteSiteUrl, SITE_NAME, SITE_ORIGIN } from '../src/lib/site.ts';

const BANNED_STRUCTURED_DATA_KEYS = new Set([
  'aggregateRating',
  'review',
  'reviewRating',
  'telephone',
  'faxNumber',
  'email',
  'streetAddress',
  'postalCode',
  'ratingValue',
  'ratingCount',
  'reviewCount',
]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHead(meta: PublicPage): string {
  const url = absoluteSiteUrl(meta.path);
  const image = absoluteSiteUrl(meta.image);
  const tags: Array<[string, string, string]> = [
    ['name', 'description', meta.description],
    ['property', 'og:site_name', SITE_NAME],
    ['property', 'og:locale', 'en_US'],
    ['property', 'og:title', meta.title],
    ['property', 'og:description', meta.description],
    ['property', 'og:url', url],
    ['property', 'og:type', meta.type],
    ['property', 'og:image', image],
    ['property', 'og:image:alt', meta.imageAlt],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description],
    ['name', 'twitter:image', image],
    ['name', 'twitter:image:alt', meta.imageAlt],
  ];
  if (meta.publishedTime) {
    tags.push(['property', 'article:published_time', meta.publishedTime]);
  }

  const lines = [
    `    <title>${escapeHtml(meta.title)}</title>`,
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    ...tags.map(
      ([attribute, key, content]) =>
        `    <meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
    ),
    `    <script type="application/ld+json" id="site-jsonld">${serializeJsonLd(meta.jsonLd)}</script>`,
  ];
  return lines.join('\n');
}

/**
 * Copy the built app shell and swap in crawler-readable head tags.
 * The body, including the Netlify Forms detector and the React mount point, stays intact.
 */
export function applyPageMeta(template: string, meta: PublicPage): string {
  const socialMeta =
    /[ \t]*<meta\b[^>]*?\b(?:property|name)\s*=\s*["'](?:description|og:[^"']*|twitter:[^"']*|article:[^"']*)["'][^>]*>[ \t]*\r?\n?/gi;
  const canonical =
    /[ \t]*<link\b[^>]*?\brel\s*=\s*["']canonical["'][^>]*>[ \t]*\r?\n?/gi;
  const title = /[ \t]*<title\b[^>]*>[\s\S]*?<\/title>[ \t]*\r?\n?/gi;
  const jsonLd =
    /[ \t]*<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>[ \t]*\r?\n?/gi;

  const stripped = template
    .replace(title, '')
    .replace(socialMeta, '')
    .replace(canonical, '')
    .replace(jsonLd, '');
  const block = `\n${renderHead(meta)}\n`;
  const withMeta = /<meta\b[^>]*\bname=["']viewport["'][^>]*>/i.test(stripped)
    ? stripped.replace(/(<meta\b[^>]*\bname=["']viewport["'][^>]*>)/i, `$1${block}`)
    : stripped.replace(/[ \t]*<\/head>/i, `${block}  </head>`);

  if (withMeta === stripped || !/<\/head>/i.test(withMeta)) {
    throw new Error('Built index.html is missing </head>, so page meta tags cannot be inserted.');
  }

  assertShell(withMeta, meta);
  return withMeta;
}

function collectTypes(value: unknown, found: Set<string>): void {
  if (Array.isArray(value)) {
    value.forEach((item) => collectTypes(item, found));
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (BANNED_STRUCTURED_DATA_KEYS.has(key)) {
      throw new Error(`Structured data includes ${key}, which this site does not publish.`);
    }
    if (key === '@type') {
      const types = Array.isArray(child) ? child : [child];
      for (const type of types) {
        if (typeof type === 'string') found.add(type);
      }
    }
    collectTypes(child, found);
  }
}

function expectedTypes(pagePath: string): string[] {
  if (pagePath === '/') return ['Organization', 'ProfessionalService', 'WebSite'];
  if (pagePath === '/blog' || pagePath === '/blog/') return ['Blog', 'BreadcrumbList', 'Organization', 'ProfessionalService'];
  if (pagePath.startsWith('/blog/')) return ['BlogPosting', 'BreadcrumbList', 'Organization'];
  if (pagePath.startsWith('/work/')) return ['CreativeWork', 'BreadcrumbList', 'Organization'];
  throw new Error(`No structured data expectation for ${pagePath}`);
}

function assertShell(html: string, meta: PublicPage): void {
  const url = absoluteSiteUrl(meta.path);
  const image = absoluteSiteUrl(meta.image);
  const required = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    'lang="en"',
    'name="viewport"',
    'href="/logo-5.png"',
    'href="/site.webmanifest"',
    'data-netlify="true"',
    'name="contact"',
    'id="root"',
  ];

  for (const snippet of required) {
    if (!html.includes(snippet)) {
      throw new Error(`HTML shell for ${meta.path} is missing ${snippet}`);
    }
  }

  if (html.includes('revstudio.com') || html.includes('www.revvstudio.com')) {
    throw new Error(`HTML shell for ${meta.path} uses a non-canonical host.`);
  }

  if (!/<script\b[^>]*type="module"/.test(html)) {
    throw new Error(`HTML shell for ${meta.path} is missing the app module script.`);
  }

  if ((html.match(/<title\b/g) ?? []).length !== 1) {
    throw new Error(`HTML shell for ${meta.path} should have exactly one title.`);
  }

  if ((html.match(/property="og:title"/g) ?? []).length !== 1) {
    throw new Error(`HTML shell for ${meta.path} has more than one og:title.`);
  }

  if ((html.match(/rel="canonical"/g) ?? []).length !== 1) {
    throw new Error(`HTML shell for ${meta.path} should have exactly one canonical.`);
  }

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json" id="site-jsonld">([\s\S]*?)<\/script>/g)];
  if (jsonLd.length !== 1) {
    throw new Error(`HTML shell for ${meta.path} should have exactly one JSON-LD block.`);
  }

  const data = JSON.parse(jsonLd[0][1]) as { '@context'?: string };
  if (data['@context'] !== 'https://schema.org') {
    throw new Error(`HTML shell for ${meta.path} has JSON-LD without schema.org context.`);
  }

  const types = new Set<string>();
  collectTypes(data, types);
  for (const type of expectedTypes(meta.path)) {
    if (!types.has(type)) {
      throw new Error(`HTML shell for ${meta.path} is missing schema type ${type}.`);
    }
  }
}

function assertShareImage(root: string, image: string): void {
  if (/^https?:\/\//i.test(image)) return;
  const relative = image.replace(/^\//, '');
  const file = path.resolve(root, 'public', relative);
  if (!fs.existsSync(file)) {
    throw new Error(`Share image not found in public/: ${image}`);
  }
}

function writeShell(outDir: string, routePath: string, html: string): void {
  const directory = path.join(outDir, ...routePath.split('/').filter(Boolean));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}

function assertSitemap(sitemap: string, pages: PublicPage[]): void {
  const blocks = sitemap.split('<url>').slice(1);
  if (blocks.length !== pages.length) {
    throw new Error(`sitemap.xml has ${blocks.length} urls; expected ${pages.length}.`);
  }

  pages.forEach((page, index) => {
    const block = blocks[index];
    const loc = absoluteSiteUrl(page.path);
    if (!block.includes(`<loc>${loc}</loc>`)) {
      throw new Error(`sitemap.xml is missing ${loc}.`);
    }
    const hasLastmod = block.includes('<lastmod>');
    if (page.publishedTime) {
      if (!block.includes(`<lastmod>${page.publishedTime}</lastmod>`)) {
        throw new Error(`sitemap.xml is missing lastmod ${page.publishedTime} for ${loc}.`);
      }
    } else if (hasLastmod) {
      throw new Error(`sitemap.xml should not invent lastmod for ${loc}.`);
    }
  });

  if (sitemap.includes('/perfpulse')) {
    throw new Error('sitemap.xml should not list the PerfPulse prototype.');
  }
}

function assertRobots(robots: string): void {
  const expected = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
  if (robots !== expected) {
    throw new Error('robots.txt does not match the public crawl policy.');
  }
  if (/disallow:\s*\/\s*$/im.test(robots)) {
    throw new Error('robots.txt disallows the site root.');
  }
}

export function staticSeoPlugin(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'static-seo',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    writeBundle(options) {
      if (config.build.ssr) return;

      const outDir = path.resolve(options.dir ?? path.resolve(config.root, config.build.outDir));
      const templatePath = path.join(outDir, 'index.html');
      if (!fs.existsSync(templatePath)) {
        throw new Error('static-seo expected dist/index.html after the client build.');
      }

      const contentDir = path.resolve(config.root, 'src/content/blog');
      const markdown = fs
        .readdirSync(contentDir)
        .filter((name) => name.endsWith('.md'))
        .map((name) => fs.readFileSync(path.join(contentDir, name), 'utf8'));
      const posts = postsFromMarkdown(markdown);
      const template = fs.readFileSync(templatePath, 'utf8');
      const pages = publicPages(posts);

      for (const page of pages) {
        assertShareImage(config.root, page.image);
        writeShell(outDir, page.path, applyPageMeta(template, page));
      }

      const sitemap = renderSitemap(pages);
      const robots = renderRobots();
      assertSitemap(sitemap, pages);
      assertRobots(robots);
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots);

      this.info(`Wrote crawler-readable HTML for ${pages.map((page) => page.path).join(', ')}`);
    },
  };
}
