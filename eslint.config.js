import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ["dist/", ".astro/"],
  },
];
