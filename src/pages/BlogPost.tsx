import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import { formatPostDate, getPost } from '../lib/blog';
import { renderMarkdown } from '../lib/markdown';

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Seo title="Post not found | Revv Studio" description="That blog post is not on this site." path={`/blog/${slug}`} />
        <SiteNav onContact={() => setContactOpen(true)} />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4">Post not found</h1>
          <a href="/blog" className="inline-flex items-center gap-2 text-cyan-400">
            <ArrowLeft className="w-4 h-4" />
            Back to the blog
          </a>
        </main>
        <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo
        title={`${post.title} | Revv Studio`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
      />
      <SiteNav onContact={() => setContactOpen(true)} />
      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/blog" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to the blog
          </a>
          <p className="text-sm text-neutral-500 mb-4">
            {formatPostDate(post.date)}
            <span aria-hidden="true"> · </span>
            {post.readingMinutes} min read
          </p>
          <h1 className="text-[clamp(1.875rem,5vw,3.25rem)] font-bold leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <img
            src={post.cover}
            alt=""
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
      </article>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
