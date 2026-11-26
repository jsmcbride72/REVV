export const SITE_ORIGIN = 'https://revvstudio.com';

export const BLOG_INDEX_TITLE = 'Blog | Revv Studio';

export const BLOG_INDEX_DESCRIPTION =
  'Notes from Revv Studio on AI, product design, and the work of making agentic products feel like your product.';

export const DEFAULT_SHARE_IMAGE = '/logo-5.png';

export function postDocumentTitle(title: string): string {
  return `${title} | Revv Studio`;
}

export function absoluteSiteUrl(resourcePath: string): string {
  if (/^https?:\/\//i.test(resourcePath)) return resourcePath;
  const normalized = resourcePath.startsWith('/') ? resourcePath : `/${resourcePath}`;
  return `${SITE_ORIGIN}${normalized}`;
}
