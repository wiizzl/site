import { z } from "zod";

const entrySchema = z.object({
    message: z.string().min(20).max(200),
});

export { entrySchema };
