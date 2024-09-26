import { MDXRemote } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { Suspense } from "react";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Loader } from "@/components/Loader";
import { BackButton } from "../_components/BackButton";

import { getPost, getPosts } from "@/data/monitoring";

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
                <Suspense fallback={<Loader />}>
                    {post ? (
                        <article className="prose max-w-full">
                            <div className="space-y-3">
                                <div className="flex items-center gap-x-2">
                                    <BackButton />
                                    <span>
                                        Publié le {post.date.toLocaleDateString()} - Source :{" "}
                                        <Link href={post.sourceUrl} target="_blank">
                                            {post.source}
                                        </Link>
                                    </span>
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
                    ) : (
                        <h1 className="text-center text-2xl">Cet article n'existe pas...</h1>
                    )}
                </Suspense>
            </MaxWidthWrapper>
        </section>
    );
}
