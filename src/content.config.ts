import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/data/posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/data/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = { posts, projects };
