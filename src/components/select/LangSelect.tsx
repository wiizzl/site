"use client";

import { Languages } from "lucide-react";

import { cn } from "@/lib/utils";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";

const LangSelect = () => {
    const t = useScopedI18n("layout.header");
    const currentLocale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    const Lang = [
        { label: "English", value: "en" },
        { label: "Français", value: "fr" },
    ];

    return (
        <div title={t("changeLocale")} className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-square btn-ghost">
                <Languages />
            </button>
            <div
                tabIndex={0}
                className="dropdown-content top-px mt-14 max-h-[calc(100vh-10rem)] w-36 overflow-y-auto rounded-box border border-white/5 bg-base-200 shadow-2xl outline outline-1 outline-black/5"
            >
                <ul className="menu menu-sm gap-1">
                    {Lang.map((item, index) => (
                        <li key={index}>
                            <button
                                className={cn("btn btn-sm justify-between", {
                                    "btn-neutral": item.value === currentLocale,
                                })}
                                onClick={() => changeLocale(item.value as typeof currentLocale)}
                            >
                                <span className="badge badge-outline badge-sm">{item.value.toUpperCase()}</span>
                                <p>{item.label}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { LangSelect };
