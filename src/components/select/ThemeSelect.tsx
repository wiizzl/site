"use client";

import { Moon, Sun } from "lucide-react";

import { useScopedI18n } from "@/locales/client";

const ThemeSelect = () => {
    const t = useScopedI18n("layout.header");

    return (
        <label title={t("changeTheme")} className="btn btn-square btn-ghost swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="light" />
            <Moon className="swap-off" />
            <Sun className="swap-on" />
        </label>
    );
};

export { ThemeSelect };
