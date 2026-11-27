export const SITE_ORIGIN = 'https://revvstudio.com';

export const SITE_NAME = 'Revv Studio';

export const HOME_TITLE = 'Revv Studio | Product Design & AI in Jacksonville, FL';

export const HOME_DESCRIPTION =
  "Scott McBride's Jacksonville, FL studio for product design and AI. We design and build products and workflows that make work actually work.";

export const BLOG_INDEX_TITLE = 'Blog | Revv Studio';

export const BLOG_INDEX_DESCRIPTION =
  'Notes from Revv Studio on AI, product design, and the work of making agentic products feel like your product.';

export const DEFAULT_SHARE_IMAGE = '/logo-5.png';

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

export function documentTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}

export function postDocumentTitle(title: string): string {
  return documentTitle(title);
}

export function absoluteSiteUrl(resourcePath: string): string {
  if (/^https?:\/\//i.test(resourcePath)) return resourcePath;
  const normalized = resourcePath.startsWith('/') ? resourcePath : `/${resourcePath}`;
  return `${SITE_ORIGIN}${normalized}`;
}
