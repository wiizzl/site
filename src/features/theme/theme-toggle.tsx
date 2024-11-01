"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    const ariaLabel = `Changer le thème (${theme})`;

    return (
        <button
            title={ariaLabel}
            aria-label={ariaLabel}
            className="flex"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Moon className="size-3 text-muted-foreground dark:scale-0" />
            <Sun className="absolute size-3 scale-0 dark:scale-100" />
            <span className="sr-only">
                {ariaLabel} ({theme})
            </span>
        </button>
    );
};

export { ThemeToggle };
