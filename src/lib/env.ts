import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_APP_URL: z.string(),

    ENV: z.union([z.literal("development"), z.literal("production"), z.literal("testing")]).default("development"),
});

export const env = envSchema.parse(process.env);
