import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const collections = {
  posts: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/data/posts",
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
  }),

  projects: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/data/projects",
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
  }),
};

export { collections };
