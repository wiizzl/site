"use client";

import { InfoIcon } from "lucide-react";

import { UserButton } from "./UserButton";

import { useScopedI18n } from "@/locales/client";

const Info = () => {
    const t = useScopedI18n("pages.guestbook.info");

    return (
        <div role="alert" className="alert shadow-lg">
            <InfoIcon />
            <div>
                <h3 className="font-bold">{t("title")}</h3>
                <div className="text-xs">{t("description")}</div>
            </div>
            <UserButton />
        </div>
    );
};

export { Info };
