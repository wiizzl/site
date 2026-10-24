import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    loader: glob({
      pattern: "*/index.mdx",
      base: "./src/content/blog",
    }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
        image: z.object({ src: image(), alt: z.string() }).optional(),
      }),
  }),
  projects: defineCollection({
    loader: glob({
      pattern: "*/index.mdx",
      base: "./src/content/projects",
    }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.url().optional(),
        repo: z.url().optional(),
        order: z.number(),
        image: z.object({ src: image(), alt: z.string() }).optional(),
      }),
  }),
};
