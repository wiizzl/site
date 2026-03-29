/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        bracketSpacing: true,
        printWidth: 200,
        semi: true,
        singleQuote: false,
        trailingComma: "all",
        tabWidth: 2,
        useTabs: false,
      },
    },
  ],
};
