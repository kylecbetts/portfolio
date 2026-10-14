# Kyle Betts — Portfolio

Personal site of a Cornell ECE grad and former Cornell hockey captain, moving from professional hockey into software engineering.

> **Status:** pre-launch — foundation in progress.

## Stack

- **Framework:** Next.js 16 (App Router, Cache Components, React Compiler), React 19, TypeScript
- **Styling:** CSS Modules
- **3D:** Three.js, React Three Fiber, drei
- **Tooling:** pnpm, ESLint, Prettier, GitHub Actions

## Getting started

Requires Node 24 (see `.nvmrc`) and pnpm (version pinned in `package.json`).

```bash
pnpm install
pnpm dev
```

Then open [localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start the dev server                |
| `pnpm build`        | Create a production build           |
| `pnpm start`        | Serve the production build          |
| `pnpm lint`         | Lint with ESLint                    |
| `pnpm typecheck`    | Generate route types and type-check |
| `pnpm format`       | Format with Prettier                |
| `pnpm format:check` | Check formatting (used in CI)       |

## Conventions

- Commits follow [Conventional Commits](https://www.conventionalcommits.org).
- CI runs lint, type-check, format check, and build on every push to `main` and every pull request.
