import { MDXRemote } from "next-mdx-remote-client/rsc";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { getPost, getPosts } from "@/data/monitoring";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((item) => ({
        slug: item.id,
    }));
}

export const dynamic = "force-static";

type PostPageProps = {
    params: { slug: string };
};

export default async function PostPage(props: PostPageProps) {
    const post = await getPost(props.params.slug);

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <article className="prose max-w-full">
                    <div className="space-y-3">
                        <div className="flex items-center gap-x-2">
                            <button>
                                <ArrowLeft />
                            </button>
                            <span>Publié le {post.date.toLocaleDateString()}</span>
                        </div>
                        <h1>{post.title}</h1>
                    </div>
                    <hr />
                    <MDXRemote
                        source={post.content}
                        options={{
                            mdxOptions: {
                                format: "mdx",
                            },
                        }}
                        // components={components}
                    />
                </article>
            </MaxWidthWrapper>
        </section>
    );
}
