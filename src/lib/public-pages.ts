import type { BlogPost } from './blog-frontmatter.ts';
import { caseStudies, caseStudyPath, caseStudyShareImage, type CaseStudy } from './case-studies.ts';
import {
  BLOG_INDEX_DESCRIPTION,
  BLOG_INDEX_TITLE,
  DEFAULT_SHARE_IMAGE,
  documentTitle,
  HOME_DESCRIPTION,
  HOME_TITLE,
  postDocumentTitle,
} from './site.ts';
import { blogIndexJsonLd, blogPostJsonLd, caseStudyJsonLd, homeJsonLd } from './structured-data.ts';

export interface PublicPage {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  type: 'website' | 'article';
  publishedTime?: string;
  jsonLd: unknown;
}

function assertSafePath(path: string): void {
  const segments = path.split('/').filter(Boolean);
  for (const segment of segments) {
    if (
      segment === '.' ||
      segment === '..' ||
      segment.includes('\\') ||
      segment.includes('/')
    ) {
      throw new Error(`Public path cannot be written as a static file: ${path}`);
    }
  }
}

export function homePage(): PublicPage {
  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: '/',
    image: DEFAULT_SHARE_IMAGE,
    imageAlt: 'Revv Studio, a product and UX design studio',
    type: 'website',
    jsonLd: homeJsonLd(),
  };
}

export function blogIndexPage(): PublicPage {
  return {
    title: BLOG_INDEX_TITLE,
    description: BLOG_INDEX_DESCRIPTION,
    path: '/blog/',
    image: DEFAULT_SHARE_IMAGE,
    imageAlt: 'Revv Studio, a product and UX design studio',
    type: 'website',
    jsonLd: blogIndexJsonLd(),
  };
}

export function pageForPost(post: BlogPost): PublicPage {
  return {
    title: postDocumentTitle(post.title),
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    image: post.cover,
    imageAlt: `Cover image for ${post.title}`,
    type: 'article',
    publishedTime: post.date,
    jsonLd: blogPostJsonLd(post),
  };
}

export function pageForCaseStudy(study: CaseStudy): PublicPage {
  return {
    title: documentTitle(study.title),
    description: study.description,
    path: caseStudyPath(study.id),
    image: caseStudyShareImage(study),
    imageAlt: study.title,
    type: 'article',
    jsonLd: caseStudyJsonLd(study),
  };
}

export function publicPages(posts: BlogPost[]): PublicPage[] {
  const pages = [
    homePage(),
    blogIndexPage(),
    ...posts.map(pageForPost),
    ...caseStudies.map(pageForCaseStudy),
  ];
  const seen = new Set<string>();
  for (const page of pages) {
    assertSafePath(page.path);
    if (seen.has(page.path)) throw new Error(`Duplicate public path: ${page.path}`);
    seen.add(page.path);
    if (!page.title.trim() || !page.description.trim()) {
      throw new Error(`Public page ${page.path} is missing a title or description.`);
    }
  }
  return pages;
}
