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
              {
                label: "Overview",
                slug: "features",
              },
              {
                label: "Grain Persistence",
                slug: "features/grain-persistence",
              },
              { label: "Streaming", slug: "features/streaming" },
              {
                label: "Timers and Reminders",
                slug: "features/timers-and-reminders",
              },
            ],
          },
          {
            label: "Integrations",
            link: "integrations",
            icon: "setting",
            items: [
              { label: "Overview", slug: "integrations" },
              { label: "Azure Storage", slug: "integrations/azure-storage" },
              {
                label: "Azure Cosmos DB",
                slug: "integrations/azure-cosmos-db",
              },
              {
                label: "Azure Event Hubs",
                slug: "integrations/azure-event-hubs",
              },
              { label: "Redis", slug: "integrations/redis" },
              { label: "ADO.NET", slug: "integrations/ado-net" },
              { label: "AWS DynamoDB", slug: "integrations/aws-dynamodb" },
              { label: "AWS SQS", slug: "integrations/aws-sqs" },
              { label: "MongoDB", slug: "integrations/mongodb" },
              { label: "Apache Kafka", slug: "integrations/apache-kafka" },
              {
                label: "Apache ZooKeeper",
                slug: "integrations/apache-zookeeper",
              },
              {
                label: "HashiCorp Consul",
                slug: "integrations/hashicorp-consul",
              },
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
