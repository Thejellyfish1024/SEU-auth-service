import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // File patterns to lint
    ignores: ["node_modules/", "dist/", ".env/"], // Files/directories to ignore
    languageOptions: {
      globals: globals.node, // Node.js globals
    },
  },
  pluginJs.configs.recommended, // ESLint recommended config for JS
  ...tseslint.configs.recommended, // TypeScript-specific rules
  eslintPluginPrettierRecommended,
];
