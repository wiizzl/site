import { MDXRemote } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { Suspense } from "react";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Loader } from "@/components/Loader";
import { BackButton } from "../_components/BackButton";

import { getPost } from "@/data/monitoring";

import { getLocaleDate } from "@/lib/date";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";

type PostPageProps = {
    params: { slug: string };
};

export default async function PostPage(props: PostPageProps) {
    const locale = getCurrentLocale();
    const t = await getScopedI18n("pages.monitoring.article");

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
                                    <span className="truncate">
                                        {t("postedAt")} {getLocaleDate(post.date, `${locale}-${locale.toUpperCase()}`)}{" "}
                                        - {t("source")} :{" "}
                                        <Link href={post.sourceUrl} target="_blank">
                                            {post.source}
                                        </Link>
                                    </span>
                                </div>
                                <h1>{post.title}</h1>
                                <div className="flex items-baseline gap-x-1">
                                    <p>{t("categories")} :</p>
                                    <div className="space-x-1">
                                        {post.categories.map((item, index) => (
                                            <span className="badge badge-outline" key={index}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr className="-mt-0 mb-5" />
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
                    ) : (
                        <h1 className="text-center text-2xl">{t("notFound")}</h1>
                    )}
                </Suspense>
            </MaxWidthWrapper>
        </section>
    );
}
