# Performance optimization notes

Updated: 2026-09-28

This note records the performance work done after the Lighthouse mobile audit and the remaining work before publishing the optimization changes.

## Baseline from the Lighthouse report

The report was captured on a simulated Moto G Power over slow 4G at 22:22 (GMT-3).

| Metric | Baseline |
| --- | ---: |
| First Contentful Paint | 1.7 s |
| Largest Contentful Paint | 6.0 s |
| Total Blocking Time | 190 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 3.6 s |
| Largest transfer highlighted | 1,022 KiB |

The main image costs were:

- WhatsApp GIF: 632 KiB, displayed at roughly 56–98 px.
- Initial portrait PNG: about 309 KiB, displayed much smaller than its source dimensions.
- Main JavaScript: about 89 KiB in the deployed report.
- Static assets had a one-hour cache lifetime.

Lighthouse also identified a lazy-loaded hero image as the LCP resource, missing image dimensions on the social and menu icons, render-blocking CSS, unused JavaScript from routes and libraries, and forced reflow work.

## Changes made locally

1. Converted the animated WhatsApp GIF to an animated WebP at a smaller 112 px source size. The local asset is about 62 KiB instead of 632 KiB. The reduced-motion fallback is a small still WebP.
2. Converted the persona portraits to responsive WebP variants at 480, 800, and 1200 px widths. The initial engineer portrait is now served from a 480 px or 800 px variant according to the viewport.
3. Made the initial engineer portrait eager and added `fetchpriority="high"`, a preload in `public/index.html`, responsive `srcset`/`sizes`, `decoding="async"`, and intrinsic width and height.
4. Added explicit width and height to the social icons and navigation menu icon to preserve layout space.
5. Added lazy route imports for Skills, Projects, CV, and Contact. The home route remains in the initial bundle; the other routes load when visited.
6. Added a one-year immutable cache policy for `/static/**` in Firebase Hosting. Fingerprinted build assets can now be reused between visits.
7. Updated the persona and social component test expectations for eager loading, responsive sources, dimensions, and the WhatsApp shortcut.

## Local measurement after the changes

Using a local production build and Lighthouse 13.5 with the same general mobile emulation:

| Metric | Before locally | After locally |
| --- | ---: | ---: |
| Performance score | 0.84 | 0.95 |
| First Contentful Paint | 0.8 s | 0.8 s |
| Largest Contentful Paint | 4.5 s | 3.0 s |
| Total Blocking Time | 40 ms | 30 ms |
| Cumulative Layout Shift | 0.028 | 0 |
| Speed Index | 0.8 s | 0.8 s |

The local LCP audit changed from a lazy, non-prioritized portrait to an eager, high-priority, discoverable image. The production build reports a 78.67 KiB gzipped main JavaScript bundle, with route chunks emitted separately. The local test server does not gzip responses, so its raw transfer size is not directly comparable to the deployed report's compressed transfer size.

The local result is directional: it does not replace a fresh Lighthouse run against the deployed domain under the same throttling profile.

## Validation completed

- `CI=true npm run build` passes.
- Persona and social shortcut tests pass.
- Local browser checks confirm the responsive portrait source, explicit dimensions, mobile footer placement, and WhatsApp link.
- Local Lighthouse confirms improved LCP and no layout shift in the tested run.

## Next steps

1. Inspect the generated production build and confirm the WebP assets are included with the expected URLs and cache headers.
2. Remove unused intermediate image files before committing if they are not referenced by the final build. In particular, the 640 px educator/citizen files were generated during exploration and are not currently used.
3. Commit the optimization changes without a coauthor.
4. Push to `production` to trigger Firebase Hosting deployment.
5. Run Lighthouse again against `https://danrleypereira.com.br` and compare the same mobile metrics.
6. Check that the WhatsApp shortcut remains lazy and low priority, while the hero portrait remains eager and high priority.
7. Keep an eye on the Lighthouse cache audit after deployment; the one-hour cache finding should disappear for fingerprinted `/static/**` assets.

## Scope and limitations

The CSS stylesheet still participates in the initial render, as expected for the app shell. Further CSS critical-path work would require separating the small home-shell styles from route styles. React, React DOM, and i18next still account for part of the initial JavaScript; reducing those costs would require a larger architectural change and should be evaluated after the image and caching improvements are measured in production.
