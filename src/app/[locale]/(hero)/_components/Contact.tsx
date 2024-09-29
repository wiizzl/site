"use client";

import { Socials } from "./Socials";

import { useScopedI18n } from "@/locales/client";

const Contact = () => {
    const t = useScopedI18n("pages.hero.contact");

    return (
        <div className="space-y-5">
            <div className="space-y-0.5">
                <h2 className="text-3xl font-semibold">{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <Socials />
        </div>
    );
};

export { Contact };
