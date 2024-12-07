import { z } from "zod";

const envSchema = z.object({
    ENV: z.union([z.literal("development"), z.literal("production"), z.literal("testing")]).default("development"),
});

export const env = envSchema.parse(process.env);
