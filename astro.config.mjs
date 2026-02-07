// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      plugins: [
        starlightSidebarTopics([
          {
            label: "Getting Started",
            link: "guides/getting-started",
            icon: "open-book",
            items: [
              {
                label: "Getting Started",
                autogenerate: { directory: "guides" },
              },
            ],
          },
          {
            label: "Features",
            link: "features/grain-persistence",
            icon: "puzzle",
            items: [
              { label: "Grain Persistence", slug: "features/grain-persistence" },
              { label: "Streaming", slug: "features/streaming" },
              { label: "Timers and Reminders", slug: "features/timers-and-reminders" },
            ],
          },
          {
            label: "Reference",
            link: "reference/example",
            icon: "seti:json",
            items: [
              {
                label: "Reference",
                autogenerate: { directory: "reference" },
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
