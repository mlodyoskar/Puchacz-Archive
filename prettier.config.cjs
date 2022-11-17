/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "es5",
  tabWidth: 1,
  semi: true,
  singleQuote: true,
  useTabs: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
