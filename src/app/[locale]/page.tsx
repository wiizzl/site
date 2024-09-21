import Image from "next/image";
import Link from "next/link";

import { Experience } from "@/components/Experience";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { cn } from "@/lib/utils";

import { Config } from "@/config";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
    const t = await getScopedI18n("heroPage");

    return (
        <section className="min-h-screen overflow-x-hidden my-28">
            <MaxWidthWrapper>
                <div className="max-w-2xl space-y-5">
                    <h1 className="text-5xl font-bold">
                        {t("hello")},<br />
                        {t("slug")}
                    </h1>
                    <p>{t("description")}</p>
                    <div className="flex gap-x-6">
                        {Config.Socials.map((item, index) => (
                            <Link
                                href={item.href}
                                target="_blank"
                                className="transition-all duration-300 hover:rotate-3 hover:text-primary"
                                key={index}
                            >
                                {item.icon}
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="my-32 flex items-center justify-center gap-x-8">
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
                                "pointer-events-none sm:h-[320px] h-[220px] sm:w-[280px] w-[200px] rounded-3xl object-cover -rotate-2",
                                { "rotate-2": index % 2 === 0 }
                            )}
                            key={index}
                        />
                    );
                })}
            </div>
            <MaxWidthWrapper className="flex justify-between">
                <div></div>
                <Experience />
            </MaxWidthWrapper>
        </section>
    );
}
