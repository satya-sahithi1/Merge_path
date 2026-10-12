# Merge Path — Development Report
> Generated: 2026-10-12  
> Branch: main  
> Stack: Next.js 16.3.8 · React 19 · TypeScript · Tailwind CSS v4 · motion@14.1.0

---

## 1. Project Overview

Merge Path is a developer-education web app that teaches beginners how to evaluate open source repositories and issues before making their first contribution. Users progress through:

1. **Learn** — 3 introductory concept slides
2. **Tips** — 5 pre-contribution habits
3. **Repos** — 4 fake repos to explore
4. **Repo detail** — Files, Issues, PRs, Commits tabs (GitHub-style)
5. **Issue / PR detail** — Full thread views
6. **Quiz** — Per-repo multiple-choice assessment
7. **Results / Summary** — Score and feedback

The entire app is client-side state driven (localStorage for progress), with no backend or auth.

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.3.8 |
| UI library | React | 19.2.8 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 + CSS custom properties | ^4 |
| Animations | Motion (motion.dev) | 14.1.0 |
| Icons | lucide-react | ^1.52.0 |
| Build tool | Turbopack (via next dev --turbopack) | — |

---

## 3. Changelog

### Session 1 — Slide Content Restructure
**Files changed:** `app/learn/page.tsx`

Rewrote the content of all three introductory slides to match the new copy brief:

**Slide 1 — Understand open source**
- Headline: `"Public code ≠ Open source."`
- Body: explains that a license grants permission to use, modify, and share
- Visual: two folder cards — green (MIT licensed) vs red (no license). Updated label copy:
  - `"Open source. Use, modify & share under its terms."`
  - `"Visible, but not open source by default."`
- Blue callout strip: `"Always check the license."`

**Slide 2 — Understand contributing**
- Headline: `"You don't need to own a project to improve it."`
- Body: `"Find a problem. Fix it. Ask the maintainers to review your changes."`
- Visual: rebuilt `ForkFlowVisual` as a 4-step emoji row — 🍴 Fork → 🛠️ Fix → 📤 Pull Request → 👀 Review
- Closing line: `"Your code. Their project. One step toward making it better."`

**Slide 3 — Understand where to start**
- Headline: `"The hardest part? Finding the right issue."`
- Body: explains why choosing the right issue is hard
- Bullet list: 🟢 Active · 🐛 In need of a real fix · 🌱 Right for your skill level
- Visual: rebuilt `LoopVisual` as a list of 3 issue cards with one highlighted green (`← pick this`)
- Closing line: `"Your first contribution starts with the right choice."`

**Data model additions:** `CARDS` extended with `bullets: string[] | null` and `closingLine: string | null` fields. Card render updated to conditionally show both. TypeScript check: ✅ 0 errors.

---

### Session 2 — Motion Animation System
**Files changed:**
- `package.json` — added `motion@14.1.0`
- `lib/motion.ts` — new shared variants file
- `app/page.tsx` — hero page
- `app/learn/page.tsx` — learn slides
- `app/repos/page.tsx` — repo cards grid
- `app/tips/page.tsx` — tips list
- `app/mission/page.tsx` — mission card
- `app/repo/[repoId]/AnimatedSection.tsx` — new client wrapper
- `app/repo/[repoId]/page.tsx` — repo detail page

#### 3.1 Shared Motion Utilities (`lib/motion.ts`)

Central source of truth for all animation values. Every page imports from here, ensuring consistent timing and easing across the app.

```
Transition presets:
  fastTransition    → 0.25s easeOut   (hover/tap micro-interactions)
  defaultTransition → 0.35s easeOut   (standard entrances)
  slowTransition    → 0.50s easeOut   (reserved for future use)

Entrance variants:
  fadeUp    → opacity 0→1, y 10→0     (default for most elements)
  fadeIn    → opacity 0→1             (no position shift)
  scaleIn   → opacity 0→1, scale 0.97→1  (cards/modals)
  fadeRight → opacity 0→1, x 12→0    (secondary content)

Slide transition (AnimatePresence):
  slideTransition   → directional x±24 with enter/center/exit states
                       custom prop carries direction (1=forward, -1=back)

Stagger containers:
  staggerContainer      → 70ms between children, 50ms initial delay
  fastStaggerContainer  → 45ms between children, no initial delay

Viewport helper:
  inViewOnce  → once:true, amount:0.15
```

#### 3.2 Hero Page (`app/page.tsx`)

- Replaced CSS `animate-fade-up` + `stagger-*` classes with Motion `staggerContainer` wrapper
- Headline, subline 1, subline 2 each use `fadeUp` variant — staggered automatically
- CTA button wrapped in `scaleIn` + `motion.div` with `whileHover` (scale 1.03) and `whileTap` (scale 0.97)
- `useReducedMotion()` guard: when active, all variant objects collapse to `{}` (instant display, no animation)
- Resume state ("or start over") animates in with `fadeUp` as a child of the stagger container

#### 3.3 Learn Slides (`app/learn/page.tsx`)

- `AnimatePresence mode="wait"` wraps the card panel — old slide exits before new one enters
- Direction state (`1` = forward) is passed as `custom` prop to `slideTransition`: forward navigates right→left, backward left→right (future-proofed)
- Each slide's internal content uses a nested `staggerContainer + fadeUp` sequence: counter → headline → body → bullets → callout → visual → closing line
- Progress dots animate `scale` (1→1.3 on active) and `background` via Motion's `animate` prop with `fastTransition`
- Skip and Next buttons both have `whileHover` + `whileTap` states
- Reduced-motion: all variants swap to `{}`, `AnimatePresence` still mounts/unmounts correctly but with no visual transition

#### 3.4 Repo Cards (`app/repos/page.tsx`)

- Grid container wrapped in `staggerContainer` — all 4 cards stagger in on page mount
- Each `RepoCard` is a `motion.a` using `fadeUp` variant (inherits stagger timing from parent)
- `whileHover`: lifts card 3px (`y: -3`), adds `box-shadow: 0 8px 24px rgba(0,0,0,0.35)`, transitions `borderColor` to a brighter shade
- `whileTap`: scale 0.99 with 100ms duration (snappy press feedback)
- Progress bar animates from width 0 to the actual score percentage via Motion `animate` prop (replaces the CSS `animate-progress` keyframe)
- "Finish and see summary" button has `whileHover` + `whileTap`
- Section header (Pick a repo / subtitle) animates in with `fadeUp`

#### 3.5 Tips Page (`app/tips/page.tsx`)

- Page title + subtitle use `fadeUp` on mount
- Tip cards are wrapped in `staggerContainer` with `whileInView` + `viewport: { once: true, amount: 0.1 }` — staggered entrance fires once as the list scrolls into view
- CTA button uses `scaleIn` + `whileInView` + `whileHover` + `whileTap`
- On screens where all tips are visible without scrolling, they animate immediately on load

#### 3.6 Mission Page (`app/mission/page.tsx`)

- The entire mission card uses `scaleIn` — appears from opacity 0 + scale 0.97 on mount
- Header row (label + repo badge) uses `fadeUp`
- Body copy uses `staggerContainer` — the two paragraphs stagger in sequentially
- Repo badge (which shows the current `repoId`) has a `key={repoId}` prop — if the repo changes, the badge animates out and back in with a subtle scale transition
- Start button has `whileHover` + `whileTap`

#### 3.7 Repo Detail Page (`app/repo/[repoId]/page.tsx`)

This is a **server component** — Motion hooks cannot run here directly. Solution: thin client wrappers in `AnimatedSection.tsx`.

**`AnimatedSection.tsx`** (new file, `"use client"`):
- `AnimatedSection` — wraps any content in a `motion.div` with `fadeUp` + configurable `delay` prop. Used for the repo header, health row, tabs, tab content panels, and quiz CTA.
- `AnimatedList` — stagger container using `whileInView + staggerChildren`. Used as the root of each tab's list view.
- `AnimatedItem` — single `motion.div` using `fadeUp` variants, child of `AnimatedList`. Used for every issue row, PR row, commit row, and file tree row.

Result: when you switch tabs (Issues → PRs → Commits → Files), the new tab panel fades up, and each row staggers in as it enters the viewport.

---

## 4. Accessibility

- All animated pages call `useReducedMotion()` from `motion/react`
- When `prefers-reduced-motion: reduce` is set, all Motion variant objects are replaced with `{}` — elements render at their final state instantly
- No animations block interaction: `AnimatePresence mode="wait"` still renders the new slide immediately, it just doesn't animate
- Tab navigation and keyboard accessibility are unaffected — no event listeners are attached to animated elements

---

## 5. Build Verification

```
npm run build   →  ✅ Exit 0
                   Compiled successfully in 1831ms
                   TypeScript: 0 errors
                   7/7 static pages generated
                   All dynamic routes resolved

npx tsc --noEmit →  ✅ Exit 0, 0 errors
```

Routes after animations added:

| Route | Type |
|---|---|
| `/` | Static |
| `/learn` | Static |
| `/tips` | Static |
| `/repos` | Static |
| `/mission` | Static |
| `/repo/[repoId]` | Dynamic (SSR) |
| `/repo/[repoId]/file` | Dynamic (SSR) |
| `/repo/[repoId]/issues/[issueId]` | Dynamic (SSR) |
| `/repo/[repoId]/prs/[prId]` | Dynamic (SSR) |
| `/repo/[repoId]/quiz` | Dynamic (SSR) |

---

## 6. Deployment Guide

This is a standard Next.js app. It has no database, no auth, and no environment variables. Progress is stored in `localStorage` (client-only). This makes it very easy to deploy.

### Option A — Vercel (Recommended, free tier)

Vercel is the easiest option and is built by the Next.js team.

**Steps:**

1. Push your code to GitHub (if not already):
   ```bash
   cd /home/cse/sahithi/Merge_path/web
   git add .gitignore lib/motion.ts app/repo/[repoId]/AnimatedSection.tsx
   git add app/page.tsx app/learn/page.tsx app/repos/page.tsx
   git add app/tips/page.tsx app/mission/page.tsx app/repo/[repoId]/page.tsx
   git add package.json package-lock.json
   git commit -m "add motion animations + slide content restructure"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub → **Add New Project**

3. Import your repository → Vercel auto-detects Next.js

4. Leave all settings as default (no env vars needed) → click **Deploy**

5. Done. Your site is live at `https://your-project-name.vercel.app`

**Notes:**
- Every push to `main` auto-deploys
- Free tier supports unlimited personal projects
- `npm run build` already passes — Vercel will use it

---

### Option B — Netlify

1. Push code to GitHub (same steps as above)
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Install the **Netlify Next.js Runtime** plugin when prompted — it handles server routes
6. Deploy

---

### Option C — Self-hosted (VPS / server)

Run this on your server:

```bash
# 1. Clone or pull latest code
git clone https://github.com/yourname/merge-path-web.git
cd merge-path-web/web

# 2. Install dependencies
npm install

# 3. Build for production
npm run build

# 4. Start the production server
npm start
# Runs on http://localhost:3000 by default
```

To keep it running and serve it on a domain, use **PM2** + **nginx**:

```bash
# Install PM2 globally
npm install -g pm2

# Start the Next.js server with PM2
pm2 start npm --name "merge-path" -- start

# Save so it restarts on reboot
pm2 save
pm2 startup
```

Then point nginx to `localhost:3000` with a reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### Option D — Static export (no server needed)

This app uses dynamic routes (`/repo/[repoId]`) so a full static export requires generating all paths. The data is all local JSON so this is straightforward.

Add to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Then:
```bash
npm run build
# Output is in the `out/` directory — serve it from any static host
# (GitHub Pages, Cloudflare Pages, S3, etc.)
```

> Note: Static export disables server-side features. For this app that's fine since there's no server logic beyond data loading from JSON files.

---

## 7. Files Added / Modified

| File | Status | Description |
|---|---|---|
| `.gitignore` | **New** | Excludes `node_modules/`, `.next/`, env files |
| `package.json` | Modified | Added `motion@14.1.0` |
| `package-lock.json` | Modified | Lock file updated |
| `lib/motion.ts` | **New** | Shared animation variants and transition presets |
| `app/page.tsx` | Modified | Hero: Motion stagger entrance, CTA hover/tap |
| `app/learn/page.tsx` | Modified | Slides: new content + AnimatePresence transitions |
| `app/repos/page.tsx` | Modified | Repo cards: stagger in, lift on hover, motion progress bar |
| `app/tips/page.tsx` | Modified | Tips: whileInView stagger, CTA hover/tap |
| `app/mission/page.tsx` | Modified | Mission card: scaleIn, staggered body, animated badge |
| `app/repo/[repoId]/AnimatedSection.tsx` | **New** | Client wrappers for server-component page |
| `app/repo/[repoId]/page.tsx` | Modified | Repo detail: AnimatedSection for all tab content |
