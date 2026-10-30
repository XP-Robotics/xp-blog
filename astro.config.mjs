// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	// Served by GitHub Pages on a custom domain (public/CNAME), at the root.
	site: 'https://blog.xphirobotics.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
		shikiConfig: { theme: 'github-light' },
	},
});
