import { useState } from 'react';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import { formatPostDate, posts } from '../lib/blog';
import { blogIndexPage } from '../lib/public-pages';
import { CONTACT_EMAIL } from '../lib/site';

function tagHref(tag: string): string {
  return `/blog/?tag=${encodeURIComponent(tag)}`;
}

export default function BlogIndex() {
  const [contactOpen, setContactOpen] = useState(false);
  const page = blogIndexPage();
  const activeTag = new URLSearchParams(window.location.search).get('tag');
  const visiblePosts = activeTag ? posts.filter((post) => post.tags.includes(activeTag)) : posts;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        image={page.image}
        imageAlt={page.imageAlt}
        type={page.type}
        jsonLd={page.jsonLd}
      />
      <SiteNav onContact={() => setContactOpen(true)} />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4">Journal</p>
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight mb-4">Blog</h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              What we are reading, building, and arguing about as AI shows up in real product work.
            </p>
            {activeTag && (
              <p className="text-neutral-300 mt-6">
                Posts tagged <span className="text-cyan-400">{activeTag}</span>.{' '}
                <a href="/blog/" className="underline hover:text-cyan-300">Show all posts</a>
              </p>
            )}
          </div>

          {visiblePosts.length === 0 ? (
            <p className="text-neutral-300">No posts with that tag yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {visiblePosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col min-w-0 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-colors"
                >
                  <a href={`/blog/${post.slug}/`}>
                    <img
                      src={post.cover}
                      alt={`Cover image for ${post.title}`}
                      className="w-full aspect-video object-cover"
                    />
                  </a>
                  <div className="p-6 flex flex-col flex-1 min-w-0">
                    <p className="text-sm text-neutral-400 mb-3">{formatPostDate(post.date)}</p>
                    <h2 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-snug mb-3 group-hover:text-cyan-100">
                      <a href={`/blog/${post.slug}/`}>{post.title}</a>
                    </h2>
                    <p className="text-neutral-400 leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
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
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="font-bold">Revv Studio</span>
            <p className="text-neutral-400 text-sm">Scott McBride · Jacksonville, FL</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/#case-studies" className="text-neutral-400 hover:text-cyan-400">Case Studies</a>
            <a href="/" className="text-neutral-400 hover:text-cyan-400">Back to the studio</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutral-400 hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </footer>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
