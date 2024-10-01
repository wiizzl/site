import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    theme: {
        extend: {
            keyframes: {
                react: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(-360deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                react: "react 18s ease-in-out infinite",
            },
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: ["dark", "light"],
    },
};

export default config;
