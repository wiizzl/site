import Image from "next/image";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Contact } from "./_components/Contact";
import { Help } from "./_components/Help";
import { Learn } from "./_components/Learn";
import { ScrollDown } from "./_components/ScrollDown";
import { Socials } from "./_components/Socials";

import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
    const t = await getScopedI18n("pages.hero");

    return (
        <section className="my-16 min-h-screen overflow-x-hidden">
            <MaxWidthWrapper>
                <div className="max-w-2xl space-y-5">
                    <h1 className="text-4xl font-bold md:text-5xl">
                        {t("hello")}, {t("slug")}
                    </h1>
                    <p>{t("description")}</p>
                    <Socials />
                </div>
            </MaxWidthWrapper>
            <div>
                <div className="mt-24 flex items-center justify-center gap-x-8">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const photoIndex = index + 1;

                        return (
                            <Image
                                src={`/images/hero/${photoIndex}.jpg`}
                                alt={`Photo ${photoIndex}`}
                                loading="lazy"
                                width={500}
                                height={500}
                                className={cn(
                                    "pointer-events-none sm:h-[320px] h-[220px] sm:w-[280px] w-[200px] rounded-3xl object-cover",
                                    index % 2 === 0 ? "rotate-2" : "-rotate-2"
                                )}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div className="mb-12 mt-20 flex items-center justify-center">
                    <ScrollDown id="informations" />
                </div>
            </div>
            <MaxWidthWrapper className="space-y-16">
                <div className="pt-10" id="informations">
                    <Help />
                </div>
                <Learn />
                <Contact />
            </MaxWidthWrapper>
        </section>
    );
}
