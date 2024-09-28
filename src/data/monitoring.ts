import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

import { env } from "@/lib/env";

const postSchema = z.object({
    title: z.string().min(45).max(65),
    date: z.coerce.date(),
    description: z.string(),
    source: z.string(),
    sourceUrl: z.string().url(),
    categories: z.array(z.string()),
    available: z.boolean().optional().default(false),
});

const getPosts = async () => {
    type Post = z.infer<typeof postSchema> & { slug: string; content: string };

    const postDirectory = path.join(process.cwd(), "/src/content");

    const files = await fs.readdir(postDirectory);
    const fileNames = files.filter((fileName) => fileName.endsWith(".mdx"));

    const posts: Post[] = [];

    for await (const fileName of fileNames) {
        const fullPath = path.join(postDirectory, fileName);
        const fileContent = await fs.readFile(fullPath, "utf-8");
        const frontMatter = matter(fileContent);

        const safeData = postSchema.safeParse(frontMatter.data);

        if (!safeData.success) {
            console.error(`Error parsing file: ${fileName}`);
            safeData.error.issues.forEach((item) => {
                console.error(` - ${item.path.join(" -> ")}: ${item.message}`);
            });

            continue;
        }

        if (!safeData.data.available && env.ENV !== "development") continue;

        posts.push({
            ...safeData.data,
            slug: fileName.replace(".mdx", ""),
            content: frontMatter.content,
        });
    }

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
};

const getPost = async (id: string) => {
    const posts = await getPosts();
    const post = posts.find((post) => post.slug === id);

    return post;
};

export { getPost, getPosts };
