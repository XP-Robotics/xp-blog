// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	// GitHub Pages project site. For a custom domain, set `site` to it, drop `base`, and add public/CNAME.
	site: 'https://xp-robotics.github.io',
	base: '/xp-blog',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
		shikiConfig: { theme: 'github-light' },
	},
});
