import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    // Solo se muestra en la web cuando no está publicado.
    status: z.enum(['Publicado', 'En desarrollo']).default('Publicado'),
    year: z.number().int().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
