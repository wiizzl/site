import { MDXRemote } from "next-mdx-remote-client/rsc";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { getPost, getPosts } from "../_utils/post-helpers";

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
                <article className="prose max-w-6xl">
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
