import type { BlogPost } from './blog-frontmatter.ts';
import { caseStudyNarrative, caseStudyPath, caseStudyShareImage, type CaseStudy } from './case-studies.ts';
import {
  ABOUT_DESCRIPTION,
  HEADSHOT_SRC,
  SCOTT_JOB_TITLE,
  SCOTT_LINKEDIN,
  SCOTT_LOCALITY,
  SCOTT_NAME,
  SCOTT_REGION,
} from './about.ts';
import {
  ABOUT_PATH,
  absoluteSiteUrl,
  BLOG_INDEX_DESCRIPTION,
  HOME_DESCRIPTION,
  LOGO_IMAGE,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_ORIGIN,
} from './site.ts';

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function logo() {
  return {
    '@type': 'ImageObject',
    url: absoluteSiteUrl(LOGO_IMAGE),
  };
}

function organization() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    description: HOME_DESCRIPTION,
    logo: logo(),
    image: absoluteSiteUrl(LOGO_IMAGE),
    founder: {
      '@type': 'Person',
      name: 'Scott McBride',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    knowsAbout: ['Product design', 'User experience', 'Agentic experience', 'AI products'],
  };
}

function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path),
    })),
  };
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description: HOME_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  };
}

export function aboutJsonLd() {
  const url = absoluteSiteUrl(ABOUT_PATH);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      {
        '@type': 'Person',
        '@id': `${url}#person`,
        name: SCOTT_NAME,
        jobTitle: SCOTT_JOB_TITLE,
        description: ABOUT_DESCRIPTION,
        url,
        image: absoluteSiteUrl(HEADSHOT_SRC),
        sameAs: SCOTT_LINKEDIN,
        worksFor: {
          '@type': 'Organization',
          '@id': ORGANIZATION_ID,
          name: SITE_NAME,
          url: `${SITE_ORIGIN}/`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SCOTT_LOCALITY,
          addressRegion: SCOTT_REGION,
          addressCountry: 'US',
        },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'About', path: ABOUT_PATH },
      ]),
    ],
  };
}

export function blogIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      {
        '@type': 'Blog',
        '@id': `${absoluteSiteUrl('/blog/')}#blog`,
        url: absoluteSiteUrl('/blog/'),
        name: 'Revv Studio Blog',
        description: BLOG_INDEX_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': ORGANIZATION_ID },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog/' },
      ]),
    ],
  };
}

export function blogPostJsonLd(post: BlogPost) {
  const url = absoluteSiteUrl(`/blog/${post.slug}/`);
  const posting: Record<string, unknown> = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en',
    image: absoluteSiteUrl(post.cover),
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: 'Scott McBride',
      jobTitle: 'Founder',
      worksFor: { '@id': ORGANIZATION_ID },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: logo(),
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Revv Studio Blog',
      url: absoluteSiteUrl('/blog/'),
    },
  };
  if (post.tags.length > 0) posting.keywords = post.tags.join(', ');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      posting,
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog/' },
        { name: post.title, path: `/blog/${post.slug}/` },
      ]),
    ],
  };
}

export function caseStudyJsonLd(study: CaseStudy) {
  const path = caseStudyPath(study.id);
  const url = absoluteSiteUrl(path);
  const work: Record<string, unknown> = {
    '@type': 'CreativeWork',
    '@id': `${url}#work`,
    name: study.title,
    description: study.description,
    url,
    image: absoluteSiteUrl(caseStudyShareImage(study)),
    inLanguage: 'en',
    text: caseStudyNarrative(study),
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
    },
  };
  if (study.role) work.creditText = study.role;
  if (study.resultsNote) work.citation = study.resultsNote;
  if (study.tags.length > 0) work.keywords = study.tags.join(', ');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      work,
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: study.title, path },
      ]),
    ],
  };
}
