# SEO Audit Summary

**Date:** 2026-09-11  
**Framework:** TanStack Start (React SSR/SSG) with Vite  
**Site:** Suncoast FBLA — Suncoast Community High School

---

## 1. Files Modified

### `src/routes/__root.tsx` — Root Layout
- Added `og:site_name` meta tag
- Added `og:url` pointing to `https://suncoastfbla.org`
- Added `og:image` with dimensions (`og:image:width`, `og:image:height`) and alt text
- Added `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`
- Added `<link rel="canonical" href="https://suncoastfbla.org">`
- Added **JSON-LD Structured Data**:
  - `Organization` schema (name, url, description, logo, address, sameAs)
  - `WebSite` schema (name, url, SearchAction potentialAction)

### `src/routes/index.tsx` — Homepage
- Added `og:site_name` meta tag
- Added `og:url` pointing to `https://suncoastfbla.org`
- Added `og:image` with dimensions and alt text
- Added `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`
- Added `<link rel="canonical" href="https://suncoastfbla.org">`
- Added **JSON-LD Structured Data**:
  - `WebPage` schema (name, description, url, isPartOf WebSite, about Organization)
- Fixed image `alt` attributes:
  - **Officers**: Changed from `alt={officer.name}` → `alt={`${officer.name} — ${officer.role}`}` (e.g., "Manil Chabria — President")
  - **Achievements**: Changed from `alt={`Chapter achievements from ${item.year}`}` → `alt={`${item.title} — ${item.subtitle}`}` (e.g., "Manil Chabria — Elected as the Region V Vice President")
- Added explicit `width` and `height` attributes to officer and achievement images to prevent layout shift (CLS)

### `src/components/site/HeroCarousel.tsx`
- Verified existing `width={1400}` and `height={900}` attributes (already present)
- Verified descriptive `alt` attributes on all carousel images (already present)

### `public/robots.txt`
- Added `Sitemap: https://suncoastfbla.org/sitemap.xml` reference
- Kept existing crawler rules allowing all major bots

### `public/sitemap.xml` (new file)
- Created XML sitemap with single URL entry for homepage
- Includes `<lastmod>` (2026-09-11), `<changefreq>` (weekly), and `<priority>` (1.0)

---

## 2. Missing Assets Requiring Manual Action

| Asset | Purpose | Status | Recommended Action |
|-------|---------|--------|-------------------|
| `public/og-image.jpg` | Open Graph / Twitter Card share image | **Missing** | Upload a 1200×630px JPG/PNG representing the chapter. Used by all social platforms when sharing the site. |
| `public/favicon.ico` | Browser tab icon | May need verification | Ensure a valid `.ico` file exists at `public/favicon.ico`. Consider adding SVG favicon + Apple touch icon for modern browsers. |

> **Important:** The `og:image` URL in meta tags references `https://suncoastfbla.org/og-image.jpg`. You must either:
> 1. Upload a file named `og-image.jpg` to the `public/` directory, OR
> 2. Update the meta tag URLs to point to an existing image (e.g., a hero photo)

---

## 3. SEO Checklist Completed

- [x] Unique, descriptive `<title>` tags (50–60 chars)
- [x] Unique `<meta name="description">` tags (150–160 chars)
- [x] Canonical URLs on all indexable pages
- [x] Complete Open Graph tags (title, description, image, url, type, site_name)
- [x] Complete Twitter Card tags (card, title, description, image, image:alt)
- [x] Descriptive `alt` attributes on all images
- [x] Explicit `width`/`height` on images (prevents CLS)
- [x] JSON-LD structured data (Organization + WebSite + WebPage)
- [x] `robots.txt` allowing major search engines
- [x] `sitemap.xml` with proper XML structure
- [x] Semantic HTML with single `<h1>` per page
- [x] Logical heading hierarchy (`<h1>` → `<h2>` → `<h3>`)

---

## 4. Core Web Vitals & Performance Recommendations

### Current State
- All images use `loading="lazy"` (good for LCP)
- Images have explicit dimensions (good for CLS)
- CSS is bundled and minified by Vite

### Recommendations

1. **Create an Open Graph image** (1200×630px) — currently missing, which means social shares will render without a preview image.

2. **Add SVG favicon** — modern browsers prefer SVG favicons. Add to `<head>`:
   ```tsx
   { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
   ```

3. **Preload hero image** — to improve LCP, consider preloading the first hero slide:
   ```tsx
   { rel: "preload", href: slideOne, as: "image" }
   ```

4. **Consider WebP/AVIF formats** — convert uploaded JPGs to WebP or AVIF for 25-35% smaller file sizes with equal quality.

5. **Add `as` attribute to preload links** — if adding preload links, include `as: "image"` or `as: "font"` for proper prioritization.

6. **Minify JSON-LD** — the inline JSON-LD scripts are already compact (single-line via `JSON.stringify`), which is good.

---

## 5. Technical Notes

- **Domain**: The canonical URL and all absolute links use `https://suncoastfbla.org` as a placeholder. Update this constant in both `__root.tsx` and `index.tsx` when the actual domain is confirmed.
- **Routing**: This is a single-page application (SPA) with one route (`/`). The sitemap contains one entry. If additional pages are added later, update the sitemap accordingly.
- **Rendering**: TanStack Start supports SSR, so meta tags and structured data are rendered server-side — search engines and social crawlers will see them correctly.
- **Case sensitivity**: All file imports use correct case matching the actual files (`.JPG`, `.JPEG`, `States 26` with space) — verified via `vite-env.d.ts` declarations.

---

## 6. Verification Results

| Check | Status |
|-------|--------|
| `npm run build` | ✅ Passes (no errors) |
| `npx tsc --noEmit` | ✅ Passes (no type errors) |
| `npm run lint` | ✅ 0 errors (6 pre-existing react-refresh warnings in generated UI files) |
| `npm run format` | ✅ Formatted consistently |