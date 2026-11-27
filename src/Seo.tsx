import { useEffect } from 'react';
import { absoluteSiteUrl, DEFAULT_SHARE_IMAGE, SITE_NAME } from './lib/site.ts';
import { serializeJsonLd } from './lib/structured-data.ts';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  jsonLd?: unknown;
  robots?: string;
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function removeMeta(name: string, attribute: 'name' | 'property' = 'name') {
  document.head.querySelector(`meta[${attribute}="${name}"]`)?.remove();
}

function upsertJsonLd(data: unknown | undefined) {
  const scripts = [...document.head.querySelectorAll('script[type="application/ld+json"]')];
  if (data === undefined) {
    scripts.forEach((script) => script.remove());
    return;
  }

  const script = scripts[0] ?? document.createElement('script');
  scripts.slice(1).forEach((extra) => extra.remove());
  script.setAttribute('type', 'application/ld+json');
  script.id = 'site-jsonld';
  script.textContent = serializeJsonLd(data);
  if (!script.parentNode) document.head.appendChild(script);
}

export default function Seo({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  jsonLd,
  robots,
}: SeoProps) {
  useEffect(() => {
    const url = absoluteSiteUrl(path);
    const imageUrl = absoluteSiteUrl(image ?? DEFAULT_SHARE_IMAGE);
    const alt = imageAlt ?? title;

    document.title = title;
    setMeta('description', description);
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:locale', 'en_US', 'property');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', imageUrl, 'property');
    setMeta('og:image:alt', alt, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', imageUrl);
    setMeta('twitter:image:alt', alt);

    if (publishedTime) setMeta('article:published_time', publishedTime, 'property');
    else removeMeta('article:published_time', 'property');

    if (robots) setMeta('robots', robots);
    else removeMeta('robots');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    upsertJsonLd(jsonLd);
  }, [title, description, path, image, imageAlt, type, publishedTime, jsonLd, robots]);

  return null;
}
