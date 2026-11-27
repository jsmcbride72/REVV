import { useState } from 'react';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import { formatPostDate, posts } from '../lib/blog';
import { blogIndexPage } from '../lib/public-pages';

export default function BlogIndex() {
  const [contactOpen, setContactOpen] = useState(false);
  const page = blogIndexPage();

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
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col min-w-0 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-colors"
              >
                <img
                  src={post.cover}
                  alt={`Cover image for ${post.title}`}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 flex flex-col flex-1 min-w-0">
                  <p className="text-sm text-neutral-500 mb-3">{formatPostDate(post.date)}</p>
                  <h2 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-white leading-snug mb-3 group-hover:text-cyan-100">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="font-bold">Revv Studio</span>
            <p className="text-neutral-500 text-sm">Scott McBride · Jacksonville, FL</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/#case-studies" className="text-neutral-400 hover:text-cyan-400">Case Studies</a>
            <a href="/" className="text-neutral-400 hover:text-cyan-400">Back to the studio</a>
          </nav>
        </div>
      </footer>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
