import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const postSchema = z.object({
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    source: z.string(),
    sourceUrl: z.string().url(),
    categories: z.array(z.string()),
    available: z.boolean().optional(),
});

type Post = z.infer<typeof postSchema> & { id: string; content: string };

const getPosts = async () => {
    const postDirectory = path.join(process.cwd(), "/src/content");

    let fileNames = await fs.readdir(postDirectory);
    fileNames = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

    const posts: Post[] = [];

    for await (const fileName of fileNames) {
        const fullPath = path.join(postDirectory, fileName);
        const fileContent = await fs.readFile(fullPath, "utf-8");

        const frontMatter = matter(fileContent);

        const data = postSchema.parse(frontMatter.data);

        if (process.env.NODE_ENV === "production" && !data.available) continue;

        posts.push({
            id: fileName.replace(".mdx", ""),
            content: frontMatter.content,
            ...data,
        });
    }

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
};

const getPost = async (id: string) => {
    const posts = await getPosts();
    const post = posts.find((post) => post.id === id);

    return post;
};

export { getPost, getPosts };
