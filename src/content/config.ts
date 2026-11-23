import { defineCollection, z } from 'astro:content';

const labCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.date(),
    status: z.enum(['completed', 'in-progress', 'planned']),
    tags: z.array(z.string()),
    summary: z.string(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const casesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.date(),
    version: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  lab: labCollection,
  cases: casesCollection,
};
