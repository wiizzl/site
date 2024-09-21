import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    plugins: [typography, daisyui],
    daisyui: {
        themes: ["dark", "light"],
    },
};

export default config;
