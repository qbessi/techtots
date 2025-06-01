import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/adapter-static";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";


export default defineConfig({
  site: "https://techtots-five.vercel.app/", // for sitemap
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: staticAdapter(),
});
