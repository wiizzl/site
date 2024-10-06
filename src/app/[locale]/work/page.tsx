import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Work } from "./_components/Work";

import { getScopedI18n } from "@/locales/server";

export default async function ProjectsPage() {
    const t = await getScopedI18n("pages.work");

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">{t("title")}</h2>
                </div>
                <div className="space-y-2">
                    <Work />
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
