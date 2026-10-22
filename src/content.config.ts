import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		authors: z.array(z.string()).default([]),
		paper: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
