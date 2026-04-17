# IntelliToggle Landing Page

Live: [https://intellitoggle-landing.vercel.app](https://intellitoggle-landing.vercel.app)

## Tech Stack

- **Nuxt 3** + **Vue 3** + **TailwindCSS**
- **@nuxt/image** for optimized image loading (WebP format, lazy loading)
- Deployed on **Vercel** (auto-detected Nuxt preset)

## Project Structure

```
components/
  AppHeader.vue          # Nav with mobile menu toggle
  HeroSection.vue        # Hero with gradient bg, dashboard preview, floating cards
  CountdownBanner.vue    # Live countdown timer to offer deadline
  TeamSection.vue        # "Built For Every Team" cards
  FeaturesSection.vue    # Feature grid with accordion expand/collapse
  DartCodeSection.vue    # "DartCode AI" split layout with feature list
  TrustedBySection.vue   # Partner logo strip
  TestimonialsSection.vue # Customer quotes
  CtaBanner.vue          # CTA with gradient background
  AppFooter.vue          # Footer with links and newsletter form
composables/
  useScrollAnimation.ts  # IntersectionObserver for fade-in-up animations
layouts/
  default.vue
pages/
  index.vue
```

## Interactive Elements

| Element | Location | Interaction |
|---------|----------|-------------|
| Mobile menu | Header | Hamburger toggle with animated open/close transition |
| Feature accordion | Features section | Click/keyboard to expand detail text, chevron rotates |
| Countdown timer | Countdown banner | Live ticking countdown (updates every second) |
| Card hover | Team, Testimonials | Cards lift on hover (`-translate-y-1`) |
| Button press | All CTAs | Scale animation on active (`scale-[0.98]`) |
| Logo hover | Trusted By | Opacity transition on hover |
| Newsletter form | Footer | Email input with inline submit |

## Running Locally

```bash
npm install
npm run dev
```

## Tradeoffs, Shortcuts & What I'd Do With More Time

### Tradeoffs Made

- **Fixed Figma asset URLs**: The Figma MCP server provides temporary asset URLs (7-day expiry). These were downloaded locally as SVGs/PNGs into `public/images/`. In production, these should be replaced with permanent assets from the design team or a CDN.
- **SVG icons from Figma are generic**: Several icons (e.g., the "Users" icon used for all three team cards) are the same asset reused. Ideally each card (Developers, Product Managers, Enterprises) would have a distinct icon matching its audience — the Figma design uses the same icon for all three, so that was matched as-is.
- **Floating cards are desktop-only**: The two overlay cards on the hero dashboard (Create Project form, Create Flag buttons) are hidden on smaller screens (`hidden xl:block`) since they rely on absolute positioning that doesn't translate well to mobile.

### Shortcuts

- **No real form submission**: The newsletter form and CTA buttons don't connect to a backend. They have frontend validation and clear on submit, but no API integration.
- **Countdown target is hardcoded**: The September 15, 2025 deadline is hardcoded in the component. In production this should come from a CMS or config.
- **No page transitions or route animations**: Since this is a single-page landing, no route-level transitions were added.

### With More Time

- **Custom SVG icons**: Replace the generic Figma-exported icons with properly optimized, distinct SVG icons for each section (inline SVGs instead of img tags for better control).
- **Full responsive QA**: Test across more breakpoints (tablet portrait/landscape, small phones, ultra-wide monitors) and fine-tune edge cases.
- **Animation polish**: Add staggered entrance animations for the team cards and feature grid, parallax on the hero background gradient, and smooth scroll-linked animations for the dashboard preview.
- **Performance audit**: Run Lighthouse, optimize LCP by inlining critical CSS, preload the hero dashboard image, add `srcset` for responsive image sizes.
- **Accessibility audit**: Run axe-core, add skip-to-content link, ensure all color contrasts meet WCAG AA, test with screen reader.
- **SEO**: Add structured data (Organization, Product), Open Graph meta tags, and a sitemap.
- **CMS integration**: Connect the countdown date, testimonial content, and feature descriptions to a headless CMS so marketing can update without code changes.
