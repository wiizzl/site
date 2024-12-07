import { MDXRemote } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { Suspense } from "react";

import { Loader } from "@/components/layout/loader";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { Title } from "@/components/layout/title";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "./_components/back-button";

import { getLocaleDate } from "@/hooks/date";
import { getPost } from "@/hooks/posts";
import { notFound } from "next/navigation";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage(props: PostPageProps) {
    const post = await getPost((await props.params).slug);
    if (!post) return notFound();

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <Suspense fallback={<Loader />}>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="text-muted-foreground text-sm flex gap-x-1">
                                <p>Publié le {getLocaleDate(post.date, "fr-FR")} -</p>
                                <Link href={post.url} className="underline" target="_blank">
                                    {post.author}
                                </Link>
                                <Link href={`/pdf/${post.slug}.pdf`} target="_blank">
                                    (PDF)
                                </Link>
                            </div>
                            <BackButton />
                        </div>
                        <div className="flex gap-x-1">
                            {post.categories.map((item, index) => (
                                <Badge variant="outline" key={index}>
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <Title className="text-xl font-semibold mt-5">{post.title}</Title>
                    <article className="prose-invert max-w-full">
                        <MDXRemote
                            source={post.content}
                            options={{
                                mdxOptions: {
                                    format: "mdx",
                                },
                            }}
                            // components={components} // TODO: add custom components
                        />
                    </article>
                </Suspense>
            </MaxWidthWrapper>
        </section>
    );
}
