# Cleanup & Refactor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove dead code, fix broken integrations, centralize data, and unify route definitions.

**Architecture:** Extract hardcoded data to `client/src/data/` files. Fix Sonner to use the custom ThemeContext instead of next-themes. Remove all unused shadcn/ui components, hooks, and dependencies. Unify CUBE_ROUTES into a single source of truth exported from `client/src/data/routes.ts`.

**Tech Stack:** React 19, TypeScript, TailwindCSS 4, Vite 7, Wouter, Framer Motion

---

### Task 1: Fix Sonner theme conflict

The `sonner.tsx` component imports `useTheme` from `next-themes`, but the app uses a custom `ThemeContext`. This causes a runtime error.

**Files:**
- Modify: `client/src/components/ui/sonner.tsx`

**Step 1: Fix the import**

Replace the `next-themes` import with the custom theme context:

```tsx
// Before
import { useTheme } from "next-themes";

// After
import { useTheme } from "@/contexts/ThemeContext";
```

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 3: Commit**

```bash
git add client/src/components/ui/sonner.tsx
git commit -m "fix: use custom ThemeContext in Sonner instead of next-themes"
```

---

### Task 2: Remove unused dependencies

**Files:**
- Modify: `package.json`

**Step 1: Remove unused packages**

```bash
pnpm remove axios zod nanoid @hookform/resolvers vaul react-resizable-panels embla-carousel-react cmdk input-otp react-day-picker streamdown react-hook-form next-themes add
```

Note: `next-themes` is safe to remove after Task 1 is done. `react-hook-form` is only used by the unused `form.tsx` UI component. `add` is a broken dev dependency.

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: remove 14 unused dependencies"
```

---

### Task 3: Remove unused UI components

Only these UI components are actually used by the app:
- `button.tsx` (used in pages)
- `card.tsx` (used in pages)
- `sonner.tsx` (used in App.tsx)
- `tooltip.tsx` (used in App.tsx)

Some unused components reference each other internally (e.g., `sidebar.tsx` imports `button`, `sheet` imports `dialog`), but since they're never imported by the app, they're all dead code.

**Files:**
- Delete 49 files from `client/src/components/ui/`:

```
accordion.tsx, alert-dialog.tsx, alert.tsx, aspect-ratio.tsx, avatar.tsx, badge.tsx,
breadcrumb.tsx, button-group.tsx, calendar.tsx, carousel.tsx, chart.tsx, checkbox.tsx,
collapsible.tsx, command.tsx, context-menu.tsx, dialog.tsx, drawer.tsx, dropdown-menu.tsx,
empty.tsx, field.tsx, form.tsx, hover-card.tsx, input-group.tsx, input-otp.tsx, input.tsx,
item.tsx, kbd.tsx, label.tsx, menubar.tsx, navigation-menu.tsx, pagination.tsx, popover.tsx,
progress.tsx, radio-group.tsx, resizable.tsx, scroll-area.tsx, select.tsx, separator.tsx,
sheet.tsx, sidebar.tsx, skeleton.tsx, slider.tsx, spinner.tsx, switch.tsx, table.tsx,
tabs.tsx, textarea.tsx, toggle-group.tsx, toggle.tsx
```

**Step 1: Delete unused UI components**

```bash
cd client/src/components/ui
rm accordion.tsx alert-dialog.tsx alert.tsx aspect-ratio.tsx avatar.tsx badge.tsx \
   breadcrumb.tsx button-group.tsx calendar.tsx carousel.tsx chart.tsx checkbox.tsx \
   collapsible.tsx command.tsx context-menu.tsx dialog.tsx drawer.tsx dropdown-menu.tsx \
   empty.tsx field.tsx form.tsx hover-card.tsx input-group.tsx input-otp.tsx input.tsx \
   item.tsx kbd.tsx label.tsx menubar.tsx navigation-menu.tsx pagination.tsx popover.tsx \
   progress.tsx radio-group.tsx resizable.tsx scroll-area.tsx select.tsx separator.tsx \
   sheet.tsx sidebar.tsx skeleton.tsx slider.tsx spinner.tsx switch.tsx table.tsx \
   tabs.tsx textarea.tsx toggle-group.tsx toggle.tsx
```

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove 49 unused shadcn/ui components"
```

---

### Task 4: Remove unused custom components and hooks

**Files:**
- Delete: `client/src/components/CubeFace.tsx` (exported but never imported)
- Delete: `client/src/components/Map.tsx` (complete Google Maps component, never used)
- Delete: `client/src/hooks/useComposition.ts` (never imported by app code)
- Delete: `client/src/hooks/useMobile.tsx` (never imported by app code)
- Delete: `client/src/hooks/usePersistFn.ts` (only used by Map.tsx and useComposition.ts, both being deleted)

**Step 1: Delete the files**

```bash
rm client/src/components/CubeFace.tsx \
   client/src/components/Map.tsx \
   client/src/hooks/useComposition.ts \
   client/src/hooks/useMobile.tsx \
   client/src/hooks/usePersistFn.ts
```

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused components (CubeFace, Map) and hooks"
```

---

### Task 5: Remove dead shared/server boilerplate

The `shared/const.ts` exports `COOKIE_NAME` and `ONE_YEAR_MS` which are re-exported by `client/src/const.ts` but never actually used in the app. The `getLoginUrl()` function in `client/src/const.ts` references an OAuth callback that doesn't exist in the server.

**Files:**
- Modify: `client/src/const.ts` — remove all content (it's all dead code)
- Delete: `shared/const.ts` — unused constants

**Step 1: Clean up const.ts**

Replace `client/src/const.ts` with an empty file (or delete it if nothing imports it).

Check first:
```bash
grep -r "from.*const" client/src/ --include="*.ts" --include="*.tsx" | grep -v node_modules
```

If only `const.ts` itself imports from shared, delete both files. If other files import from `const.ts`, keep it but empty it.

**Step 2: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused shared constants and OAuth boilerplate"
```

---

### Task 6: Centralize data — create data files

Extract hardcoded data from pages into `client/src/data/` files.

**Files:**
- Create: `client/src/data/social.ts`
- Create: `client/src/data/projects.ts`
- Create: `client/src/data/experiences.ts`
- Create: `client/src/data/skills.ts`
- Create: `client/src/data/personas.ts`
- Modify: `client/src/pages/Home.tsx`
- Modify: `client/src/pages/About.tsx`
- Modify: `client/src/pages/Projects.tsx`
- Modify: `client/src/components/PersonaSlider.tsx`

**Step 1: Create `client/src/data/social.ts`**

```ts
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/danrleypereira",
    icon: Github,
    ariaLabel: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/danrleypereira/",
    icon: Linkedin,
    ariaLabel: "LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/danrleypereira",
    icon: Instagram,
    ariaLabel: "Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/danrleywillyan",
    icon: Facebook,
    ariaLabel: "Facebook",
  },
];

export const OWNER = {
  name: "Danrley Pereira",
  title: "Engenheiro de Software",
  email: "contact@danrleypereira.com",
} as const;
```

**Step 2: Create `client/src/data/projects.ts`**

Move the `projects` array from `Projects.tsx` into this file. Import the Lucide icons here.

```ts
import type { LucideIcon } from "lucide-react";
import { Calendar, Laptop, GraduationCap, Gamepad2, Cpu, Newspaper } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  github?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  // ... paste the full array from Projects.tsx
];
```

**Step 3: Create `client/src/data/experiences.ts`**

Move the `experiences` array from `About.tsx`.

```ts
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  // ... paste from About.tsx
];
```

**Step 4: Create `client/src/data/skills.ts`**

Move the `skills` array from `About.tsx`.

```ts
export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  // ... paste from About.tsx
];
```

**Step 5: Create `client/src/data/personas.ts`**

Move the `personas` array from `PersonaSlider.tsx`.

```ts
export interface Persona {
  image: string;
  title: string;
  description: string;
}

export const PERSONAS: Persona[] = [
  {
    image: "/engineer-min.png",
    title: "Engenheiro",
    description: "Desenvolvedor de software apaixonado por criar soluções inovadoras",
  },
  {
    image: "/educator-min.png",
    title: "Educador",
    description: "Mentor dedicado a compartilhar conhecimento e desenvolver talentos",
  },
  {
    image: "/citizen-min.png",
    title: "Cidadão",
    description: "Comprometido com impacto positivo na sociedade e comunidade",
  },
];
```

**Step 6: Update pages to import from data files**

- `Home.tsx`: Import `SOCIAL_LINKS` from `@/data/social`, render via `.map()`
- `About.tsx`: Import `EXPERIENCES` from `@/data/experiences`, `SKILLS` from `@/data/skills`
- `Projects.tsx`: Import `PROJECTS` from `@/data/projects`
- `PersonaSlider.tsx`: Import `PERSONAS` from `@/data/personas`

**Step 7: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 8: Commit**

```bash
git add client/src/data/ client/src/pages/ client/src/components/PersonaSlider.tsx
git commit -m "refactor: extract hardcoded data to centralized data files"
```

---

### Task 7: Unify route definitions

`CUBE_ROUTES` is defined in both `App.tsx:9` and `useCubeNavigation.ts:7`. Create a single source of truth.

**Files:**
- Create: `client/src/data/routes.ts`
- Modify: `client/src/App.tsx`
- Modify: `client/src/hooks/useCubeNavigation.ts`

**Step 1: Create `client/src/data/routes.ts`**

```ts
export const CUBE_ROUTES = ["/", "/about", "/projects"] as const;
export type CubeRoute = (typeof CUBE_ROUTES)[number];
```

**Step 2: Update `useCubeNavigation.ts`**

```ts
// Remove local CUBE_ROUTES
import { CUBE_ROUTES } from "@/data/routes";
```

**Step 3: Update `App.tsx`**

```ts
// Remove local CUBE_ROUTES
import { CUBE_ROUTES } from "@/data/routes";
```

**Step 4: Verify it builds**

Run: `pnpm build`
Expected: No errors

**Step 5: Commit**

```bash
git add client/src/data/routes.ts client/src/App.tsx client/src/hooks/useCubeNavigation.ts
git commit -m "refactor: unify CUBE_ROUTES into single source of truth"
```
