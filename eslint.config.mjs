import { FlatCompat } from "@eslint/eslintrc";
import tailwindEslint from "eslint-plugin-tailwindcss";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    ...tailwindEslint.configs["flat/recommended"],
    {
        rules: {
            "react/no-unescaped-entities": "off",
        },
    },
];

export default eslintConfig;
