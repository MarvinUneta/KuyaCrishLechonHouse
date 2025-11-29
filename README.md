# Mavi Roast Co. — React + Vite Experience

Full-stack website for a roasted pig business that ships flexible content from a JSON-driven API to a React front of house. The codebase is intentionally structured with three layers so marketing changes stay easy:

- **Frontend (React + Vite)** renders adaptable sections (hero, menu, FAQ, etc.) fed by hooks.
- **Middle layer (`useSiteContent`, `contentService`)** orchestrates fetching, caching, and formatting timelines/highlights.
- **Backend (`server/index.js`)** exposes an Express API for content, highlights, and inquiry intake.

## Quick start

```bash
npm install
npm run dev:server   # starts Express on http://localhost:4000
npm run dev          # starts Vite on http://localhost:5173
```

Set `VITE_API_BASE_URL` in `.env` if you deploy the API separately (defaults to `http://localhost:4000/api`).

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run Vite with React Fast Refresh |
| `npm run dev:server` | Run the Express API with Nodemon |
| `npm run start:server` | Run the API once without watching |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint across the project |

## API surface

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/content` | Full site payload (hero, services, menu, testimonials, FAQ, contact, highlights) |
| `POST` | `/api/inquiries` | Store a client inquiry (name, email, event date, guest count, notes) |
| `GET` | `/api/inquiries` | Inspect submitted inquiries (in-memory for now) |
| `PATCH` | `/api/highlights` | Adjust upcoming highlight stats without redeploying |

Connect the front-end to any future CMS by swapping the Express handlers; the React hook will continue to work as long as the payload matches `SiteContent`.

## Customization checklist

1. Update content in `server/index.js` (or replace with your data source).
2. Adjust default fallback data in `src/data/defaultContent.ts`.
3. Change branding colors in `src/index.css`.
4. Extend types in `src/types/content.ts` when adding new modules/sections.

Happy roasting! 🐖🔥
