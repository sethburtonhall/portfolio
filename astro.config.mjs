// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      "import.meta.env.GITHUB_TOKEN": JSON.stringify(process.env.GITHUB_TOKEN),
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
