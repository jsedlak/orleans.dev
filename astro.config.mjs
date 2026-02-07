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
          label: "Integrations",
          items: [
            { label: "Overview", slug: "integrations" },
            { label: "Azure Storage", slug: "integrations/azure-storage" },
            { label: "Azure Cosmos DB", slug: "integrations/azure-cosmos-db" },
            { label: "Azure Event Hubs", slug: "integrations/azure-event-hubs" },
            { label: "Redis", slug: "integrations/redis" },
            { label: "ADO.NET", slug: "integrations/ado-net" },
            { label: "AWS DynamoDB", slug: "integrations/aws-dynamodb" },
            { label: "AWS SQS", slug: "integrations/aws-sqs" },
            { label: "MongoDB", slug: "integrations/mongodb" },
            { label: "Apache Kafka", slug: "integrations/apache-kafka" },
            { label: "Apache ZooKeeper", slug: "integrations/apache-zookeeper" },
            { label: "HashiCorp Consul", slug: "integrations/hashicorp-consul" },
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
