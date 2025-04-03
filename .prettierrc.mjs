/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
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
