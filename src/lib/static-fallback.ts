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

function paragraphs(text: string): string {
  return text
    .split('\n\n')
    .map((para) => `<p class="text-neutral-300 leading-relaxed mb-4">${escapeHtml(para)}</p>`)
    .join('\n');
}

function caseStudyFallback(study: CaseStudy): string {
  const heading = study.resultsHeading ?? 'Results';
  const context = study.context ? paragraphs(study.context) : '';
  const role = study.role
    ? `<h2 class="text-2xl font-bold mb-4">Role</h2>
        <p class="text-neutral-300 leading-relaxed mb-8">${escapeHtml(study.role)}</p>`
    : '';
  const relatedStudy = study.related
    ? caseStudies.find((item) => item.id === study.related?.id)
    : undefined;
  const related = relatedStudy
    ? `<p class="text-neutral-300 leading-relaxed mb-8">${escapeHtml(study.related?.lead ?? '')} <a href="${escapeHtml(caseStudyPath(relatedStudy.id))}">${escapeHtml(relatedStudy.title)}</a></p>`
    : '';
  const decisions = (study.decisions ?? [])
    .map((decision, index) => {
      const tradeoff = decision.tradeoff
        ? `<p class="text-neutral-300 leading-relaxed mb-4">Tradeoff: ${escapeHtml(decision.tradeoff)}</p>`
        : '';
      return `<section>
          <h3 class="text-xl font-bold mb-2">${index + 1}. ${escapeHtml(decision.title)}</h3>
          ${paragraphs(decision.reasoning)}
          ${tradeoff}
        </section>`;
    })
    .join('\n');
  const decisionBlock =
    decisions.length > 0
      ? `<h2 class="text-2xl font-bold mb-4">Key decisions</h2>
        ${decisions}`
      : '';
  const changed = study.changed
    ? `<h2 class="text-2xl font-bold mb-4">What changed</h2>
        ${paragraphs(study.changed)}`
    : '';
  const resultsContext = study.resultsContext
    ? `<p class="text-neutral-300 leading-relaxed mb-6">${escapeHtml(study.resultsContext)}</p>`
    : '';
  const results = study.results.map((result) => `<li>${escapeHtml(result)}</li>`).join('');
  const resultsNote = study.resultsNote
    ? `<p class="text-neutral-300 leading-relaxed mt-6">${escapeHtml(study.resultsNote)}</p>`
    : '';
  const captions = [...(study.wideImageAlts ?? []), ...(study.imageAlts ?? [])]
    .map((alt) => `<p class="text-neutral-400 text-sm mb-2">${escapeHtml(alt)}</p>`)
    .join('\n');
  const gallery = captions
    ? `<h2 class="text-2xl font-bold mb-4">Product Gallery</h2>
        ${captions}`
    : '';

  return `<main class="bg-neutral-950 text-neutral-100" data-static-content="true">
      <article class="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p class="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">${escapeHtml(study.category)}</p>
        <h1 class="text-4xl font-bold leading-tight mb-6">${escapeHtml(study.title)}</h1>
        <p class="text-xl text-neutral-300 leading-relaxed mb-8">${escapeHtml(study.description)}</p>
        ${context}
        ${role}
        <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
        ${paragraphs(study.challenge)}
        <h2 class="text-2xl font-bold mb-4">Our Solution</h2>
        ${paragraphs(study.solution)}
        ${related}
        ${decisionBlock}
        ${gallery}
        ${changed}
        <h2 class="text-2xl font-bold mb-4">${escapeHtml(heading)}</h2>
        ${resultsContext}
        <ul class="list-disc pl-5 space-y-2 text-neutral-300">
          ${results}
        </ul>
        ${resultsNote}
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
