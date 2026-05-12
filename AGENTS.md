# Agent rules — boardgame-inserts-shop

## Language split

- **User-facing URLs** are Polish: `/koszyk`, `/kontakt`, `/pomoc`, `/wysylka`, `/polityka-prywatnosci`, `/` and `/game/[slug]`. Use these in `Link` `href`, `router.push`, and metadata `alternates` if added later.
- **Source code** uses English only for: function and variable names, component names, file names, and `src/app` route **folder** names that map to internal paths (`cart`, `contact`, `help`, `shipping`, `privacy-policy`).
- **Game slugs** in `/game/[slug]` stay as defined in `src/data/games.ts` (do not rename slugs for “English URLs”).

## How Polish URLs are wired

`next.config.ts` defines:

1. **`rewrites`** — Polish path → internal English app path (e.g. `/koszyk` → `/cart`).
2. **`redirects`** (permanent) — if someone hits the internal English path (`/cart`), they are sent to the Polish canonical URL (`/koszyk`).

Do not remove this pair without replacing it with another strategy. Do not change links in the UI to `/cart`, `/help`, etc.

## Comments

Do not add comments to application source (`src/**`). Prefer clear naming and small functions over inline commentary.

## Product scope

Keep changes focused on the task. Avoid drive-by refactors and unrelated files.

## UI copy

Customer-facing strings may stay Polish (`lang="pl"`). This doc is about **code identifiers** and **URL paths**, not marketing copy.
