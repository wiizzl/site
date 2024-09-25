import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { PostCard } from "./_components/PostCard";
import { getPosts } from "./_utils/post-helpers";

export default async function MonitoringPage() {
    const posts = await getPosts();

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper className="space-y-6">
                <div className="space-y-10">
                    <h2 className="text-3xl font-semibold">Veille informatique</h2>
                    <div className="border-l-2 border-base-300">
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
