import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import { trackContactClick, trackStartProjectClick } from '../lib/analytics';
import { formatPostDate, getPost, relatedPosts } from '../lib/blog';
import { renderMarkdown } from '../lib/markdown';
import { pageForPost } from '../lib/public-pages';
import { AUTHOR_BIO, CONTACT_EMAIL, HERO_SUMMARY } from '../lib/site';

interface BlogPostPageProps {
  slug: string;
}

function tagHref(tag: string): string {
  return `/blog/?tag=${encodeURIComponent(tag)}`;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Seo
          title="Post not found | Revv Studio"
          description="That blog post is not on this site."
          path={`/blog/${slug}/`}
          robots="noindex"
        />
        <SiteNav onContact={() => setContactOpen(true)} />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4">Post not found</h1>
          <a href="/blog/" className="inline-flex items-center gap-2 text-cyan-400">
            <ArrowLeft className="w-4 h-4" />
            Back to the blog
          </a>
        </main>
        <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    );
  }

  const page = pageForPost(post);
  const related = relatedPosts(post);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        image={page.image}
        imageAlt={page.imageAlt}
        type={page.type}
        publishedTime={page.publishedTime}
        jsonLd={page.jsonLd}
      />
      <SiteNav onContact={() => setContactOpen(true)} />
      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/blog/" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to the blog
          </a>
          <p className="text-sm text-neutral-400 mb-4">
            {formatPostDate(post.date)}
            <span aria-hidden="true"> · </span>
            {post.readingMinutes} min read
          </p>
          <h1 className="text-[clamp(1.875rem,5vw,3.25rem)] font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-neutral-300 leading-relaxed mb-6">{AUTHOR_BIO}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={tagHref(tag)}
                className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400 hover:bg-cyan-500/20"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <img
            src={post.cover}
            alt={`Cover image for ${post.title}`}
            className="w-full aspect-video object-cover rounded-2xl"
          />
        </div>
        <div
          className="blog-body max-w-3xl mx-auto px-6"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
        />
        {post.sources.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-800">
            <h2 className="text-lg font-bold mb-4">Sources</h2>
            <ul className="space-y-3">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 break-words">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-800">
          <h2 className="text-2xl font-bold mb-3">Work with us</h2>
          <p className="text-neutral-300 leading-relaxed mb-6">{HERO_SUMMARY}</p>
          <button
            type="button"
            onClick={() => {
              trackStartProjectClick('blog');
              setContactOpen(true);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold rounded-xl transition-colors"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
        {related.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 mt-12">
            <h2 className="text-2xl font-bold mb-6">Related posts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/blog/${item.slug}/`}
                  className="block min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-cyan-500/40"
                >
                  <p className="text-sm text-neutral-400">{formatPostDate(item.date)}</p>
                  <h3 className="font-bold text-lg leading-snug mt-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mt-2">{item.excerpt}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold">Revv Studio</span>
            <p className="text-neutral-400 text-sm">Scott McBride · Jacksonville, FL</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/#case-studies" className="text-neutral-400 hover:text-cyan-400">Case Studies</a>
            <a href="/about/" className="text-neutral-400 hover:text-cyan-400">About</a>
            <a href="/blog/" className="text-neutral-400 hover:text-cyan-400">Blog</a>
            <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => trackContactClick('footer')} className="text-neutral-400 hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </footer>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
