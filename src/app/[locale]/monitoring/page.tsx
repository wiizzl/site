import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { PostCard } from "./_components/PostCard";

import { getPosts } from "@/data/monitoring";

export default async function MonitoringPage() {
    const posts = await getPosts();

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold">Veille informatique</h2>
                    <div className="space-y-8 border-base-300 md:border-l-2">
                        {posts.map((item, index) => (
                            <PostCard
                                date={item.date}
                                title={item.title}
                                slug={item.id}
                                description={item.description}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
