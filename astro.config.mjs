// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import jopSoftwareCookieConsent from "@jop-software/astro-cookieconsent";
import { cookieConfig } from "./src/config/cookie.config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Orleans",
      logo: {
        src: "./src/assets/logo_full.png",
        replacesTitle: true,
      },
      customCss: [
        "./src/styles/cookieconsent-custom.css",
        "./src/styles/global.css",
      ],
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
                label: "Core Programming Model",
                collapsed: true,
                items: [
                  { label: "Grains (Virtual Actors)", slug: "features/grains" },
                  { label: "Grain Persistence", slug: "features/grain-persistence" },
                  { label: "Grain Identity & Lifecycle", slug: "features/grain-identity-and-lifecycle" },
                  { label: "Turn-Based Concurrency", slug: "features/turn-based-concurrency" },
                  { label: "Stateless Worker Grains", slug: "features/stateless-worker-grains" },
                  { label: "Grain Extensions", slug: "features/grain-extensions" },
                ],
              },
              {
                label: "Communication & Messaging",
                collapsed: true,
                items: [
                  { label: "Streaming", slug: "features/streaming" },
                  { label: "Observers", slug: "features/observers" },
                  { label: "Request/Response & One-Way", slug: "features/request-response-and-one-way" },
                  { label: "Request Context", slug: "features/request-context" },
                  { label: "Cancellation Tokens", slug: "features/cancellation-tokens" },
                ],
              },
              {
                label: "Scheduling & Timers",
                collapsed: true,
                items: [
                  { label: "Timers and Reminders", slug: "features/timers-and-reminders" },
                ],
              },
              {
                label: "Event Sourcing",
                collapsed: true,
                items: [
                  { label: "Journaled Grains", slug: "features/journaled-grains" },
                  { label: "Log-Consistency Providers", slug: "features/log-consistency-providers" },
                ],
              },
              {
                label: "Cluster Management",
                collapsed: true,
                items: [
                  { label: "Silo Clustering", slug: "features/silo-clustering" },
                  { label: "Grain Directory", slug: "features/grain-directory" },
                  { label: "Heterogeneous Silos", slug: "features/heterogeneous-silos" },
                  { label: "Grain Migration", slug: "features/grain-migration" },
                ],
              },
              {
                label: "Reliability & Transactions",
                collapsed: true,
                items: [
                  { label: "ACID Transactions", slug: "features/acid-transactions" },
                  { label: "Reentrancy & Request Scheduling", slug: "features/reentrancy-and-request-scheduling" },
                  { label: "Load Shedding", slug: "features/load-shedding" },
                ],
              },
              {
                label: "Versioning & Deployment",
                collapsed: true,
                items: [
                  { label: "Grain Interface Versioning", slug: "features/grain-interface-versioning" },
                  { label: "Kubernetes Hosting", slug: "features/kubernetes-hosting" },
                  { label: "Multi-Cluster / Geo-Distribution", slug: "features/multi-cluster" },
                ],
              },
              {
                label: "Serialization & Code Generation",
                collapsed: true,
                items: [
                  { label: "Serialization Framework", slug: "features/serialization-framework" },
                  { label: "Code Generation", slug: "features/code-generation" },
                  { label: "Immutability Optimization", slug: "features/immutability-optimization" },
                ],
              },
              {
                label: "Interceptors & Cross-Cutting",
                collapsed: true,
                items: [
                  { label: "Grain Call Filters", slug: "features/grain-call-filters" },
                  { label: "Grain Services", slug: "features/grain-services" },
                ],
              },
              {
                label: "Observability",
                collapsed: true,
                items: [
                  { label: "Distributed Tracing", slug: "features/distributed-tracing" },
                  { label: "Metrics & Monitoring", slug: "features/metrics-and-monitoring" },
                  { label: "Orleans Dashboard", slug: "features/orleans-dashboard" },
                ],
              },
              {
                label: "Integration & Extensibility",
                collapsed: true,
                items: [
                  { label: "ASP.NET Core Co-Hosting", slug: "features/aspnet-core-co-hosting" },
                  { label: ".NET Aspire Integration", slug: "features/aspire-integration" },
                  { label: "Grain Placement Strategies", slug: "features/grain-placement-strategies" },
                ],
              },
              {
                label: "Testing",
                collapsed: true,
                items: [
                  { label: "Unit Testing (TestCluster)", slug: "features/unit-testing" },
                ],
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
    jopSoftwareCookieConsent(cookieConfig),
  ],
});
