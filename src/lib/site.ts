export const SITE_ORIGIN = 'https://revvstudio.com';

export const SITE_NAME = 'Revv Studio';

export const HOME_TITLE = 'Revv Studio | Product Design & AI in Jacksonville, FL';

export const HOME_DESCRIPTION =
  "Scott McBride's Jacksonville, FL studio for product design and AI. We design and build products and workflows that make work actually work.";

export const HERO_TITLE = 'Revv Studio is a product and UX design studio';

export const HERO_SUMMARY =
  'We help teams design products, workflows, and AI experiences that make work actually work.';

export const AUTHOR_BIO =
  'Scott McBride is a product designer and the founder of Revv Studio in Jacksonville, FL.';

export const CONTACT_EMAIL = 'scottmcbride50@gmail.com';

export const BLOG_INDEX_TITLE = 'Blog | Revv Studio';

export const BLOG_INDEX_DESCRIPTION =
  'Notes from Revv Studio on AI, product design, and the work of making agentic products feel like your product.';

export const LOGO_IMAGE = '/logo-5.png';

export const DEFAULT_SHARE_IMAGE = '/og-share.jpg';

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
