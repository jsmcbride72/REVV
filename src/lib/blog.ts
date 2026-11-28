import { postsFromMarkdown, type BlogPost } from './blog-frontmatter.ts';

export type { BlogPost, BlogSource } from './blog-frontmatter.ts';

const rawPosts = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const posts: BlogPost[] = postsFromMarkdown(Object.values(rawPosts));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(current: BlogPost, limit = 2): BlogPost[] {
  const others = posts.filter((post) => post.slug !== current.slug);
  const byRecent = [...others].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const ranked = [...others].sort((a, b) => {
    const sharedA = a.tags.filter((tag) => current.tags.includes(tag)).length;
    const sharedB = b.tags.filter((tag) => current.tags.includes(tag)).length;
    if (sharedB !== sharedA) return sharedB - sharedA;
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });

  const picked: BlogPost[] = [];
  for (const post of ranked) {
    if (picked.length >= limit) break;
    if (post.tags.some((tag) => current.tags.includes(tag))) picked.push(post);
  }
  for (const post of byRecent) {
    if (picked.length >= limit) break;
    if (!picked.some((item) => item.slug === post.slug)) picked.push(post);
  }
  return picked;
}

export function formatPostDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
