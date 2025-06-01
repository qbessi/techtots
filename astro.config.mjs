// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel"; // ✅ CORRECT


export default defineConfig({
  output: "static",
  site: "https://techtots-five.vercel.app/", // for sitemap
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: vercel(),
});
