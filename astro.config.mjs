// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Orleans",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dotnet/orleans",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Getting Started", slug: "guides/getting-started" },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "Grain Persistence", slug: "features/grain-persistence" },
            { label: "Streaming", slug: "features/streaming" },
            { label: "Timers and Reminders", slug: "features/timers-and-reminders" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
