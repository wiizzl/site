"use client";

import { Bento } from "./Bento";

import { useScopedI18n } from "@/locales/client";

const Help = () => {
    const t = useScopedI18n("pages.hero.help");

    return (
        <div className="space-y-5">
            <div className="space-y-0.5">
                <h2 className="text-3xl font-semibold">{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <Bento />
        </div>
    );
};

export { Help };
