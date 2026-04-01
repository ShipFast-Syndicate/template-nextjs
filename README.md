# Next.js Multi-Deploy Template

A Next.js template configured to deploy to Vercel or Cloudflare Workers/Pages using environment variables. Built by ShipFast Syndicate.

Avoid vendor lock-in by supporting multiple deployment platforms with a single codebase.

## Platforms

| Platform | Adapter | Status |
|----------|---------|--------|
| Vercel | `@vercel/next` | ✅ Native |
| Cloudflare | `@cloudflare/next-on-pages` | ✅ Supported |

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=libsql://...
TURSO_AUTH_TOKEN=
```

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Turso libSQL database URL |
| `TURSO_AUTH_TOKEN` | Turso auth token |

## Deployment

### Vercel

```bash
# Deploy
vercel deploy --prod

# Or connect repo in Vercel dashboard
```

### Cloudflare Workers/Pages

```bash
# Build
npm run build

# Deploy via wrangler
npx wrangler pages deploy .vercel/output/static --project-name=your-project
```

## Project Structure

```
template-nextjs/
├── src/app/           # Next.js App Router
├── src/db/            # Drizzle ORM schema
├── wrangler.toml     # Cloudflare configuration
├── next.config.ts    # Next.js configuration
└── package.json      # Dependencies
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Turso (libSQL) + Drizzle ORM
- **Deploy:** Vercel + Cloudflare Workers/Pages

## License

MIT - [ShipFast Syndicate](https://github.com/ShipFast-Syndicate)