import fs from 'fs';
import path from 'path';
import type { Plugin, ResolvedConfig } from 'vite';
import { postsFromMarkdown, type BlogPost } from '../src/lib/blog-frontmatter.ts';
import {
  absoluteSiteUrl,
  BLOG_INDEX_DESCRIPTION,
  BLOG_INDEX_TITLE,
  DEFAULT_SHARE_IMAGE,
  postDocumentTitle,
} from '../src/lib/site.ts';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image: string;
  type: 'website' | 'article';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHead(meta: PageMeta): string {
  const url = absoluteSiteUrl(meta.path);
  const image = absoluteSiteUrl(meta.image);
  const tags: Array<[string, string, string]> = [
    ['name', 'description', meta.description],
    ['property', 'og:title', meta.title],
    ['property', 'og:description', meta.description],
    ['property', 'og:url', url],
    ['property', 'og:type', meta.type],
    ['property', 'og:image', image],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description],
    ['name', 'twitter:image', image],
  ];

  const lines = [
    `    <title>${escapeHtml(meta.title)}</title>`,
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    ...tags.map(
      ([attribute, key, content]) =>
        `    <meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
    ),
  ];
  return lines.join('\n');
}

/**
 * Copy the built app shell and swap in crawler-readable head tags.
 * The body, including the Netlify Forms detector and the React mount point, stays intact.
 */
export function applyPageMeta(template: string, meta: PageMeta): string {
  const socialMeta =
    /[ \t]*<meta\b[^>]*?\b(?:property|name)\s*=\s*["'](?:description|og:[^"']*|twitter:[^"']*)["'][^>]*>[ \t]*\r?\n?/gi;
  const canonical =
    /[ \t]*<link\b[^>]*?\brel\s*=\s*["']canonical["'][^>]*>[ \t]*\r?\n?/gi;
  const title = /[ \t]*<title\b[^>]*>[\s\S]*?<\/title>[ \t]*\r?\n?/gi;

  const stripped = template.replace(title, '').replace(socialMeta, '').replace(canonical, '');
  const block = `\n${renderHead(meta)}\n`;
  const withMeta = /<meta\b[^>]*\bname=["']viewport["'][^>]*>/i.test(stripped)
    ? stripped.replace(/(<meta\b[^>]*\bname=["']viewport["'][^>]*>)/i, `$1${block}`)
    : stripped.replace(/[ \t]*<\/head>/i, `${block}  </head>`);

  if (withMeta === stripped || !/<\/head>/i.test(withMeta)) {
    throw new Error('Built index.html is missing </head>, so blog meta tags cannot be inserted.');
  }

  assertShell(withMeta, meta);
  return withMeta;
}

function assertShell(html: string, meta: PageMeta): void {
  const url = absoluteSiteUrl(meta.path);
  const image = absoluteSiteUrl(meta.image);
  const required = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    'data-netlify="true"',
    'name="contact"',
    'id="root"',
  ];

  for (const snippet of required) {
    if (!html.includes(snippet)) {
      throw new Error(`Blog HTML shell for ${meta.path} is missing ${snippet}`);
    }
  }

  if (!/<script\b[^>]*type="module"/.test(html)) {
    throw new Error(`Blog HTML shell for ${meta.path} is missing the app module script.`);
  }

  if ((html.match(/property="og:title"/g) ?? []).length !== 1) {
    throw new Error(`Blog HTML shell for ${meta.path} has more than one og:title.`);
  }
}

function assertSafeSlug(slug: string): void {
  if (slug.includes('/') || slug.includes('\\') || slug.includes('..') || slug === '.' || slug === '') {
    throw new Error(`Blog slug cannot be used as a static path: ${slug}`);
  }
}

function pageForPost(post: BlogPost): PageMeta {
  assertSafeSlug(post.slug);
  return {
    title: postDocumentTitle(post.title),
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
    type: 'article',
  };
}

function blogIndexPage(): PageMeta {
  return {
    title: BLOG_INDEX_TITLE,
    description: BLOG_INDEX_DESCRIPTION,
    path: '/blog',
    image: DEFAULT_SHARE_IMAGE,
    type: 'website',
  };
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

export function blogOpenGraphPlugin(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'blog-open-graph',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    writeBundle(options) {
      if (config.build.ssr) return;

      const outDir = path.resolve(options.dir ?? path.resolve(config.root, config.build.outDir));
      const templatePath = path.join(outDir, 'index.html');
      if (!fs.existsSync(templatePath)) {
        throw new Error('blog-open-graph expected dist/index.html after the client build.');
      }

      const contentDir = path.resolve(config.root, 'src/content/blog');
      const markdown = fs
        .readdirSync(contentDir)
        .filter((name) => name.endsWith('.md'))
        .map((name) => fs.readFileSync(path.join(contentDir, name), 'utf8'));
      const posts = postsFromMarkdown(markdown);
      const template = fs.readFileSync(templatePath, 'utf8');
      const pages = [blogIndexPage(), ...posts.map(pageForPost)];

      for (const page of pages) {
        assertShareImage(config.root, page.image);
        writeShell(outDir, page.path, applyPageMeta(template, page));
      }

      this.info(`Wrote crawler-readable HTML for ${pages.map((page) => page.path).join(', ')}`);
    },
  };
}
