import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error", // Run Prettier as an ESLint rule
    },
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
);
