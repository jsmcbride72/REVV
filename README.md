# Revv Studio

## Blog posts

Posts live in `src/content/blog/` as Markdown files. The site loads every `.md` file in that folder at build time. Adding a post means adding one file, plus an optional cover image in `public/blog/`. No other code changes are required.

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

The article body, in Markdown. Headings, lists, links, and emphasis are supported.
```

`date` is `YYYY-MM-DD`. The index sorts newest first. `slug` becomes `/blog/<slug>`. `cover` is a path served from `public/`. Each source is a title, a pipe, and a URL, and those links render at the end of the post.
