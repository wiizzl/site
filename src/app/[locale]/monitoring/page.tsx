import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { CatBadge } from "./_components/CatBadge";
import { PostCard } from "./_components/PostCard";

export default function MonitoringPage() {
    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">Catégories</h2>
                    <div className="flex gap-x-3">
                        <CatBadge />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">Postes</h2>
                    <div className="flex flex-col space-y-2">
                        <PostCard
                            date="Sept 2024"
                            title="La sanction donnée par la CNIL envers la ssociété CEGEDIM SANTE"
                        />
                        <PostCard
                            date="Sept 2024"
                            title="Des données bancaires de clients piratées suite à un piratage de SFR"
                        />
                    </div>
                </div>
                <div className="space-y-2"></div>
            </MaxWidthWrapper>
        </section>
    );
}
