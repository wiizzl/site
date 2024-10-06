"use client";

import { Svg } from "@/components/Svg";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

const Bento = () => {
    const t = useScopedI18n("pages.hero.help.bento");

    const containerClass = "rounded-xl border border-neutral-content/50 bg-base-200/70 p-5";

    const titleClass = "text-xl font-semibold";
    const descriptionClass = "text-sm font-semibold";

    const iconContainerClass = "flex justify-center pb-3";
    const textContainerClass = "space-y-1.5";

    return (
        <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3">
            <div className={cn("col-span-1 row-span-1 group", containerClass)}>
                <div className={iconContainerClass}>
                    <Svg.react className="size-36 animate-react transition-colors duration-500 group-hover:text-[#58c4dc]" />
                </div>
                <div className={textContainerClass}>
                    <h3 className={titleClass}>{t("firstTitle")}</h3>
                    <p className={descriptionClass}>{t("firstDesc")}</p>
                </div>
            </div>
            <div className={cn("col-span-1 row-span-1", containerClass)}>
                <div className={iconContainerClass}>
                    <Svg.nextjs className="size-36" />
                </div>
                <div className={textContainerClass}>
                    <h3 className={titleClass}>{t("secondTitle")}</h3>
                    <p className={descriptionClass}>{t("secondDesc")}</p>
                </div>
            </div>
            <div className={cn("col-span-1 row-span-1 group", containerClass)}>
                <div className={iconContainerClass}>
                    <label className="swap swap-flip cursor-auto text-6xl group-hover:swap-active">
                        <div className="swap-on">
                            <Svg.typescript className="size-36 rounded-xl text-[#2f74c0]" />
                        </div>
                        <div className="swap-off">
                            <Svg.typescript className="size-36 rounded-xl" />
                        </div>
                    </label>
                </div>
                <div className={textContainerClass}>
                    <h3 className={titleClass}>{t("thirdTitle")}</h3>
                    <p className={descriptionClass}>{t("thirdDesc")}</p>
                </div>
            </div>
            <div className={cn("md:col-span-2 md:row-span-2 group", containerClass)}>
                <div className={cn("gap-x-5", iconContainerClass)}>
                    <Svg.mongodb className="size-32" />
                    <Svg.postgresql className="size-[143px]" />
                </div>
                <div className={textContainerClass}>
                    <h3 className={titleClass}>{t("fourthTitle")}</h3>
                    <p className={descriptionClass}>{t("fourthDesc")}</p>
                </div>
            </div>
            <div className={cn("col-span-1 row-span-2 group", containerClass)}>
                <div className={iconContainerClass}>
                    <Svg.tailwind className="size-36 transition-all duration-1000 group-hover:rotate-180 group-hover:text-[#38bdf8]" />
                </div>
                <div className={textContainerClass}>
                    <h3 className={titleClass}>{t("fifthTitle")}</h3>
                    <p className={descriptionClass}>{t("fifthDesc")}</p>
                </div>
            </div>
        </div>
    );
};

export { Bento };
