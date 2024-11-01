import { z } from "zod";

const envSchema = z.object({
    // DATABASE_URL: z.string().url(),

    // AUTH_SECRET: z.string(),
    // AUTH_GITHUB_ID: z.string(),
    // AUTH_GITHUB_SECRET: z.string(),

    ENV: z.union([z.literal("development"), z.literal("production"), z.literal("testing")]).default("development"),
});

export const env = envSchema.parse(process.env);
