import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { EntryCard } from "./_components/EntryCard";
import { Info } from "./_components/Info";

import { getGuestbookEntries } from "@/data/guestbook";
import { getUserById } from "@/data/user";

import { getScopedI18n } from "@/locales/server";

export default async function GuestbookPage() {
    const t = await getScopedI18n("pages.guestbook");
    const entries = await getGuestbookEntries();

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">{t("title")}</h2>
                    <Info />
                </div>
                <div className="space-y-2">
                    {entries.map(async (item, index) => {
                        const user = await getUserById(item.userId);
                        if (!user) return;

                        return <EntryCard user={user} entry={item} key={index} />;
                    })}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
