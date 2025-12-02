# my-portfolio

Personal portfolio website built with Next.js (App Router) and TypeScript. Uses Tailwind CSS for styling and componentized React for UI (components live in `src/app/components`). This repo is intended as a work-in-progress portfolio site.

---

## Quick start

Requirements
- Node.js 18+ (recommended)
- npm, Yarn or pnpm
- (Optional) nvm to manage Node versions

Install dependencies and run dev server from project root:

```bash

# install deps (choose your package manager)
npm install
# or
yarn install
# or
pnpm install

# run dev server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

---

## Project structure (important files)

- src/app/
  - page.tsx — entry / welcome page (redirects to /home)
  - layout.tsx, globals.css — global layout and styles
  - components/ — reusable UI pieces (about, dashboard, timeline, typewriter, etc.)
  - blog/, home/ — route folders (App Router)
- public/
  - images/ — static images (e.g. `public/images/profile.jpg`)
- src/data/ — local JSON / TS data (timelineData, blogPosts, contact)

---

## Editing content

- Home/welcome page: `src/app/page.tsx` and `src/app/home/page.tsx`.
- About section: `src/app/components/about.tsx` (use `/images/profile.jpg` if placed in `public/images`).
- Timeline: data is in `src/data/timelineData.ts` and component at `src/app/components/timeline.tsx`.

Use the App Router file convention: route folders must contain `page.tsx`. Do not rename `page.tsx` if you want the route to work.

---

## Styling & fonts

- Tailwind CSS utilities are used throughout.
- To set a global font, add it in `src/app/layout.tsx` (recommended via `next/font/google`) or import in `globals.css`.

Example (Next.js / App Router - next/font):
```ts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <html><body className={inter.className}>{children}</body></html>;
}
```

---

## Icons (Heroicons v2)

This project expects Heroicons v2. Import icons like:

```ts
import { ArrowRightIcon } from "@heroicons/react/24/solid";
```

If you see an error about importing `@heroicons/react/solid/...`, update imports to the v2 path above.

If TypeScript complains about missing declarations, add a small `types/` declaration file (example below) and ensure `tsconfig.json` includes the `types` folder or it is under `include`.

Example file:
```ts
// filepath: /Users/aksharabruno/Projects/my-portfolio/types/heroicons-react.d.ts
declare module "@heroicons/react/24/solid";
declare module "@heroicons/react/24/outline";
```

---

## Deployment

Recommended: Vercel (first-class for Next.js)

- Connect GitHub repo to Vercel and deploy
- Ensure environment variables (if any) are set in Vercel dashboard

---

## Contributing / Development notes

- This repo uses TypeScript and Next.js App Router. Keep route file names as `page.tsx`.
- Keep common types in `src/types` or `types/` and add additional `.d.ts` files if you use third-party modules without types.


Note: For whatever reason, when I tried to deploy this using vercel, it required me to create a new private repository. So, I will be updating through that from now.