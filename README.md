# Revv Studio

## Blog posts

Posts live in `src/content/blog/` as Markdown files. The site loads every `.md` file in that folder at build time. Adding a post means adding one file, plus an optional cover image in `public/blog/`. No other code changes are required.

The production build writes a static copy of the app shell for `/`, `/blog`, `/blog/<slug>`, and `/work/<case-study>`. Link unfurlers that do not run JavaScript read that file's title, description, canonical URL, and share image. The same build writes `robots.txt` and `sitemap.xml`, and a new Markdown file is included on the next build without a manual sitemap edit.

```md
---
title: Post title
date: 2026-11-18
slug: url-slug
excerpt: One or two sentences for the card and the meta description.
tags: Generative UI, Agents
cover: /blog/cover-file.jpg
sources:
- Source title | https://example.com/story
---

The article body, in Markdown. Headings, lists, links, emphasis, and pull quotes are supported.

A line that starts with `>` renders as a pull quote.

An image on its own line renders as a captioned figure. The text in quotes is the caption. Alt text is the bracketed description.

![Abstract cards on a dark field](/blog/example.jpg "A short caption under the image.")
```

`date` is `YYYY-MM-DD`. The index sorts newest first. `slug` becomes `/blog/<slug>`. `cover` is a path served from `public/`. Each source is a title, a pipe, and a URL, and those links render at the end of the post.
