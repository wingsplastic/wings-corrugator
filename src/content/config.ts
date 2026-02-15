// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        category: z.string().optional(), // 我们之前规划的分类
	}),
});

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        category: z.string().optional(),
        specs: z.array(z.object({
            label: z.string(),
            value: z.string()
        })).optional(),
    })
});

export const collections = { blog, products };