# xp-blog

The XP Robotics blog, built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Writing a post

Add `src/content/blog/<slug>.mdx` (or `.md`). See `egokit.mdx` for figures, video grids and tables.

```yaml
---
title: Post title
description: One or two sentences shown on the home page.
date: 2026-10-22
authors: [Jane Doe, John Doe]
paper: /papers/post.pdf   # optional
draft: false              # drafts show in dev only
---
```

- Media goes in `public/media/<slug>/`; use `<Figure src=... caption=... />` (videos autoplay muted) and `<FigureGrid>` for grids (`cols={2}` for a fixed column count).
- Math: `$inline$` and `$$display$$` (KaTeX).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`) at https://blog.xphirobotics.com (`public/CNAME`; DNS has a CNAME `blog` → `xp-robotics.github.io`). The site is served at the root, so site-absolute links in posts start with `/`.
