import type { BlogPost } from './blog-frontmatter.ts';
import { caseStudies, caseStudyPath, type CaseStudy } from './case-studies.ts';
import { renderMarkdown } from './markdown.ts';
import type { PublicPage } from './public-pages.ts';
import {
  AUTHOR_BIO,
  BLOG_INDEX_DESCRIPTION,
  CONTACT_EMAIL,
  HERO_SUMMARY,
  HERO_TITLE,
  HOME_DESCRIPTION,
} from './site.ts';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function contactLink(): string {
  return `<p class="mt-10"><a class="text-cyan-400" href="mailto:${CONTACT_EMAIL}">Contact</a></p>`;
}

function homeFallback(): string {
  return `<main class="bg-neutral-950 text-neutral-100" data-static-content="true">
      <div class="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p class="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">Revv Studio</p>
        <h1 class="text-4xl font-bold leading-tight mb-6">${escapeHtml(HERO_TITLE)}</h1>
        <p class="text-xl text-neutral-200 leading-relaxed mb-8">${escapeHtml(HERO_SUMMARY)}</p>
        <p class="mb-10"><a class="inline-flex px-6 py-3 rounded-xl bg-cyan-500 font-semibold text-neutral-950" href="mailto:${CONTACT_EMAIL}">Start a project</a></p>
        <p class="text-neutral-300 leading-relaxed mb-8">${escapeHtml(HOME_DESCRIPTION)}</p>
        <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Site">
          <a class="text-cyan-400" href="/blog/">Blog</a>
          <a class="text-cyan-400" href="/#case-studies">Case studies</a>
          <a class="text-cyan-400" href="mailto:${CONTACT_EMAIL}">Contact</a>
        </nav>
      </div>
    </main>`;
}

function blogIndexFallback(posts: BlogPost[]): string {
  const items = posts
    .map(
      (post) => `<li>
            <a class="text-cyan-400 font-semibold" href="/blog/${escapeHtml(post.slug)}/">${escapeHtml(post.title)}</a>
            <p class="text-neutral-300 mt-1 mb-4">${escapeHtml(post.excerpt)}</p>
          </li>`,
    )
    .join('\n');

  return `<main class="bg-neutral-950 text-neutral-100" data-static-content="true">
      <div class="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 class="text-4xl font-bold leading-tight mb-4">Blog</h1>
        <p class="text-lg text-neutral-300 leading-relaxed mb-8">${escapeHtml(BLOG_INDEX_DESCRIPTION)}</p>
        <ul class="space-y-6">
          ${items}
        </ul>
        ${contactLink()}
      </div>
    </main>`;
}

function postFallback(post: BlogPost): string {
  const sources =
    post.sources.length === 0
      ? ''
      : `<h2>Sources</h2>
        <ul>
          ${post.sources
            .map(
              (source) =>
                `<li><a href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a></li>`,
            )
            .join('')}
        </ul>`;

  return `<main class="bg-neutral-950 text-neutral-100" data-static-content="true">
      <article class="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p class="text-sm text-neutral-400 mb-4">${escapeHtml(post.date)} · ${post.readingMinutes} min read</p>
        <h1 class="text-4xl font-bold leading-tight mb-4">${escapeHtml(post.title)}</h1>
        <p class="text-neutral-300 leading-relaxed mb-6">${escapeHtml(AUTHOR_BIO)}</p>
        <p class="text-lg text-neutral-300 leading-relaxed mb-8">${escapeHtml(post.excerpt)}</p>
        <div class="blog-body">
          ${renderMarkdown(post.body)}
          ${sources}
        </div>
        ${contactLink()}
      </article>
    </main>`;
}

function caseStudyFallback(study: CaseStudy): string {
  const heading = study.resultsHeading ?? 'Results';
  const context = study.resultsContext
    ? `<p class="text-neutral-300 leading-relaxed mb-6">${escapeHtml(study.resultsContext)}</p>`
    : '';
  const results = study.results.map((result) => `<li>${escapeHtml(result)}</li>`).join('');

  return `<main class="bg-neutral-950 text-neutral-100" data-static-content="true">
      <article class="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p class="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">${escapeHtml(study.category)}</p>
        <h1 class="text-4xl font-bold leading-tight mb-6">${escapeHtml(study.title)}</h1>
        <p class="text-xl text-neutral-300 leading-relaxed mb-8">${escapeHtml(study.description)}</p>
        <h2 class="text-2xl font-bold mb-4">${escapeHtml(heading)}</h2>
        ${context}
        <ul class="list-disc pl-5 space-y-2 text-neutral-300">
          ${results}
        </ul>
        ${contactLink()}
      </article>
    </main>`;
}

export function renderStaticFallback(page: PublicPage, posts: BlogPost[]): string {
  if (page.path === '/') return homeFallback();
  if (page.path === '/blog' || page.path === '/blog/') return blogIndexFallback(posts);

  const post = posts.find((item) => page.path === `/blog/${item.slug}/`);
  if (post) return postFallback(post);

  const study = caseStudies.find((item) => page.path === caseStudyPath(item.id));
  if (study) return caseStudyFallback(study);

  throw new Error(`No static content for ${page.path}`);
}
