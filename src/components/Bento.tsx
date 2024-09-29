"use client";

import { Svg } from "@/components/Svg";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

const Bento = () => {
    const t = useScopedI18n("pages.hero.bento");

    const containerClass = "rounded-xl border border-neutral-content/50 bg-base-200/70 p-5";

    const titleClass = "text-xl font-semibold";
    const descriptionClass = "text-sm font-semibold";

    const iconContainerClass = "flex justify-center pb-3";
    const textContainerClass = "space-y-1.5";

    return (
        <div className="space-y-5">
            <div className="space-y-0.5">
                <h2 className="text-3xl font-semibold">{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3">
                <div className={cn("col-span-1 row-span-1", containerClass)}>
                    <div className={iconContainerClass}>
                        <Svg.react className="size-36 animate-react" />
                    </div>
                    <div className={textContainerClass}>
                        <h3 className={titleClass}>{t("firstTitle")}</h3>
                        <p className={descriptionClass}>{t("firstDesc")}</p>
                    </div>
                </div>
                <div className={cn("col-span-1 row-span-1", containerClass)}></div>
                <div className={cn("col-span-1 row-span-1 group", containerClass)}>
                    <div className={iconContainerClass}>
                        <label className="swap swap-flip group-hover:swap-active cursor-auto text-6xl">
                            <div className="swap-on">
                                <Svg.javascript className="size-36 rounded-xl" />
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
                <div className={cn("md:col-span-2 md:row-span-2", containerClass)}>
                    <div className={cn("gap-x-5", iconContainerClass)}>
                        <Svg.nextjs className="size-28" />
                        <Svg.postgresql className="size-28" />
                    </div>
                    <div className={textContainerClass}>
                        <h3 className={titleClass}>{t("fourthTitle")}</h3>
                        <p className={descriptionClass}>{t("fourthDesc")}</p>
                    </div>
                </div>
                <div className={cn("col-span-1 row-span-2 group", containerClass)}>
                    <div className={iconContainerClass}>
                        <Svg.tailwind className="size-36 group-hover:rotate-180 transition-transform duration-1000" />
                    </div>
                    <div className={textContainerClass}>
                        <h3 className={titleClass}>{t("fifthTitle")}</h3>
                        <p className={descriptionClass}>{t("fifthDesc")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Bento };
