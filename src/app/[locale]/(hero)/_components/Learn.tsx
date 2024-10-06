"use client";

import { Experience } from "./Experience";

import { useScopedI18n } from "@/locales/client";

const Learn = () => {
    const t = useScopedI18n("pages.hero.learn");

    return (
        <div className="flex justify-between gap-x-5">
            <div className="space-y-5">
                <div className="space-y-0.5">
                    <h2 className="text-3xl font-semibold">{t("title")}</h2>
                    <p>{t("description")}</p>
                </div>
                <div className="space-y-2">
                    <p className="text-sm">{t("content1")}</p>
                    <p className="text-sm">{t("content2")}</p>
                </div>
            </div>
            <Experience />
        </div>
    );
};

export { Learn };
