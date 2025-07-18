/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        singleQuote: false,
        printWidth: 200,
        tabWidth: 2,
      },
    },
  ],
};
