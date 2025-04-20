import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const collections = {
  writing: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/writing",
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
  }),

  work: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/work",
    }),
    schema: z.object({
      name: z.string(),
      source: z.string().url(),
      date: z.date(),
      href: z.string().url(),
      image: z.string().url(),
      description: z.string(),
      stack: z.array(z.string()),
      language: z.array(z.string()),
    }),
  }),
};

export { collections };
