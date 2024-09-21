"use client";

import { useScopedI18n } from "@/locales/client";
import { Moon, Sun } from "lucide-react";

const ThemeSelect = () => {
    const t = useScopedI18n("themeSelect");

    return (
        <label title={t("changeTheme")} className="btn btn-ghost swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="light" />
            <Moon className="swap-off" />
            <Sun className="swap-on" />
        </label>
    );
};

export { ThemeSelect };
