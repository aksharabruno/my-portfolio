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

## Common tasks & notes

- Smooth scroll to sections: give a section an `id` (e.g. `id="about"`) and call:
```ts
document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
```

- Center content vertically/horizontally (Tailwind):
```jsx
<div className="flex items-center justify-center min-h-screen">...</div>
```

- Show element only on large screens:
```jsx
<button className="hidden lg:block">...</button>
```

- 1px circular green border around an icon (Tailwind):
```jsx
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-green-500">
  <ArrowRightIcon className="w-6 h-6 text-green-500" />
</div>
```

---

## Git / remote tips

- If `git push origin main` fails because `origin` is missing:
```bash
git remote add origin <repo-url>
git push -u origin main
```

- If push is rejected (non-fast-forward), rebase/pull then push:
```bash
git pull origin main --rebase
# resolve conflicts, then
git push origin main
```

- During merge conflicts in VS Code: accept the desired changes, save file, then:
```bash
git add README.md
git commit   # or `git rebase --continue` if rebasing
git push
```

---

## Troubleshooting

- "could not determine executable to run": ensure you use `npm run dev` (not `npm dev`) and that `package.json` has a `dev` script.
- Google Fonts not loading: use `next/font/google` for Next.js App Router or import the @import url in `globals.css` and set `body { font-family: ... }`.
- If components don’t render side-by-side: verify parent has `flex` or `flex-row` and valid widths (Tailwind `w-1/2`, `w-full`, etc.).

---

## Deployment

Recommended: Vercel (first-class for Next.js)

- Connect GitHub repo to Vercel and deploy
- Ensure environment variables (if any) are set in Vercel dashboard

---

## Contributing / Development notes

- This repo uses TypeScript and Next.js App Router. Keep route file names as `page.tsx`.
- Keep common types in `src/types` or `types/` and add additional `.d.ts` files if you use third-party modules without types.

---

If you want, I can:
- Add a sample `package.json` scripts snippet
- Add a `types/heroicons-react.d.ts` file for you
- Scaffold a CONTRIBUTING.md or deployment workflow
