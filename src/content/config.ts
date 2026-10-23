import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    type: z.enum(['real', 'placeholder']),
    status: z.enum(['Publicado', 'En Desarrollo', 'Planificado']),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
