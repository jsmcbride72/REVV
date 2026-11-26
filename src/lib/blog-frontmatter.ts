export interface BlogSource {
  title: string;
  url: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
  cover: string;
  sources: BlogSource[];
  body: string;
  readingMinutes: number;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Blog post is missing frontmatter.');
  }

  const data: Record<string, string> = {};
  let currentKey = '';

  for (const line of match[1].split(/\r?\n/)) {
    if (line.startsWith('  ') || line.startsWith('- ')) {
      if (currentKey) data[currentKey] = `${data[currentKey] ?? ''}\n${line}`;
      continue;
    }
    const splitAt = line.indexOf(':');
    if (splitAt === -1) continue;
    currentKey = line.slice(0, splitAt).trim();
    data[currentKey] = line.slice(splitAt + 1).trim();
  }

  return { data, body: match[2].trim() };
}

function parseList(value: string | undefined): string[] {
  if (!value) return [];
  const trimmed = value.trim();
  if (trimmed.includes('\n')) {
    return trimmed
      .split(/\r?\n/)
      .map((line) => line.replace(/^\s*-\s*/, '').trim())
      .filter(Boolean);
  }
  return trimmed.split(',').map((item) => item.trim()).filter(Boolean);
}

function parseSources(value: string | undefined): BlogSource[] {
  return parseList(value).map((line) => {
    const [title, url] = line.split('|').map((part) => part.trim());
    if (!title || !url) {
      throw new Error(`Blog source must be "Title | https://...": ${line}`);
    }
    return { title, url };
  });
}

function readingMinutes(markdown: string): number {
  const words = markdown
    .replace(/[#>*_`()[\]]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function toPost(raw: string): BlogPost {
  const { data, body } = parseFrontmatter(raw);
  const title = data.title?.replace(/^["']|["']$/g, '');
  const date = data.date;
  const slug = data.slug;
  const excerpt = data.excerpt?.replace(/^["']|["']$/g, '');
  const cover = data.cover;
  if (!title || !date || !slug || !excerpt || !cover) {
    throw new Error('Blog post is missing title, date, slug, excerpt, or cover.');
  }

  return {
    title,
    date,
    slug,
    excerpt,
    tags: parseList(data.tags),
    cover,
    sources: parseSources(data.sources),
    body,
    readingMinutes: readingMinutes(body),
  };
}

export function postsFromMarkdown(files: Iterable<string>): BlogPost[] {
  return [...files]
    .map(toPost)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
