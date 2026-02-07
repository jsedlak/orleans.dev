# orleans.dev

> **Note:** This is a community-maintained site and is not the official Microsoft Orleans documentation. For official docs, visit [learn.microsoft.com/dotnet/orleans](https://learn.microsoft.com/dotnet/orleans).

The source code for [orleans.dev](https://orleans.dev), a community documentation site for [Microsoft Orleans](https://github.com/dotnet/orleans) — a cross-platform .NET framework for building robust, scalable distributed applications using the virtual actor model.

## About Orleans

Orleans lets you write single-server application logic while the framework handles distribution, scaling, and fault tolerance. Its core building blocks include:

- **Grains** — Virtual actors with unique identity, encapsulated state, and async methods
- **Silos** — Host processes that run grains and provide the Orleans runtime
- **Clients** — External applications that communicate with grains via the cluster

## About This Site

This documentation site covers getting started guides, feature deep-dives (grain persistence, streaming, timers and reminders), and integration options across providers like Redis, Azure Storage, Cosmos DB, DynamoDB, Kafka, and more.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Development

Prerequisites: [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io)

```sh
pnpm install
pnpm dev
```

The dev server starts at `localhost:4321`.

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `pnpm install`   | Install dependencies                         |
| `pnpm dev`       | Start local dev server at `localhost:4321`    |
| `pnpm build`     | Build the production site to `./dist/`       |
| `pnpm preview`   | Preview the build locally before deploying   |

## Project Structure

```
src/
├── assets/              # Images and static assets
├── content/
│   └── docs/            # Documentation pages (MDX/Markdown)
│       ├── index.mdx
│       ├── guides/
│       ├── features/
│       ├── integrations/
│       └── reference/
└── content.config.ts
```

Documentation pages are written in MDX and located in `src/content/docs/`. Each file maps to a route based on its file name.
