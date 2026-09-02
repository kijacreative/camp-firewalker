# Camp Firewalker Website

Production website and brand guidelines for Camp Firewalker, built with Next.js and prepared for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Import the repository into Vercel.
2. Set the Root Directory to `site` if the repository root is the parent Camp Firewalker folder.
3. Vercel will detect Next.js and run `npm run build`.
4. Add `NEXT_PUBLIC_SITE_URL` with the final canonical URL, such as `https://campfirewalker.org`.
5. Deploy.

No database, API keys, or other environment variables are required for the current site.

## Routes

- `/` - main website
- `/gallery` - interactive photo and video gallery
- `/brand` - brand guidelines

## Content locations

- `app/` - pages and interactive components
- `public/brand/` - approved logos, photography, and video
- `public/fonts/` - local web fonts
