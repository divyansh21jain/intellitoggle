# Pixelay Comparison Notes

## Desktop Overlay Misalignment — Figma Extra Right-Side Space

### Issue

When comparing the developed page against the Figma design in Pixelay's desktop overlay mode, there is a visible horizontal misalignment. The Figma design frame appears shifted to the left, with extra whitespace on the right side (see `pixelay-desktop-figma-screen.png`).

This causes all elements in the overlay to appear slightly offset — text, buttons, cards, and sections don't align perfectly even though their sizes and spacing are correct.

### Root Cause

The Figma design frame is set to a **fixed width of 1920px**, which is the standard wide desktop artboard size. However, Pixelay renders the Figma frame as-is without scaling it to match the browser viewport width. When the browser viewport is narrower than 1920px (e.g. 1440px), the Figma overlay does not shrink to match, resulting in:

- **Extra whitespace on the right** of the Figma overlay
- **Horizontal offset** between the Figma elements and the developed page elements

The developed page uses fluid full-width layout (`w-full`) with responsive padding (`px-5` / `px-10` / `px-[120px]`), so it fills the entire viewport. The Figma frame does not adapt — it remains a static 1920px-wide image.

### Why This Is Not a Code Issue

- The developed page's layout, spacing, typography, and element sizing all match the Figma spec values
- The misalignment is purely a **Pixelay rendering artifact** caused by the fixed-width Figma frame vs. the fluid-width browser viewport
- At exactly 1920px browser width, the overlay alignment is much closer

### Recommendation

- When running Pixelay desktop comparisons, **set the browser viewport width to exactly 1920px** (using Chrome DevTools device toolbar or a window resizer extension) to get the most accurate overlay match
- Minor 2–4px variances are expected due to sub-pixel rendering differences between Figma and the browser

## Desktop Overlay — Extra Space Below Footer

### Issue

In the Pixelay overlay, there is extra whitespace visible below the footer in the comparison. However, the developed page itself has **no extra space below the footer** — the footer ends flush at the bottom of the page content.

### Root Cause

The Figma design frame has a **fixed total height of 9174px**. The developed page's actual rendered height may differ slightly from this value due to:

- **Fluid content heights**: Text wrapping, image aspect ratios, and responsive layout adjustments can cause slight height differences between the static Figma frame and the live rendered page
- **Font rendering differences**: Browser font rendering (hinting, line-height calculations) produces slightly different text block heights compared to Figma's rendering engine
- **Cumulative sub-pixel rounding**: Small rounding differences across many sections (e.g. each section being 1–3px shorter) accumulate over the full page length, resulting in the developed page being shorter overall than the Figma frame's fixed 9174px

Since Pixelay overlays the full Figma frame (9174px tall) on top of the developed page, any height difference appears as extra whitespace at the bottom of the overlay.

### Why This Is Not a Code Issue

- The developed page has **no extra space or padding below the footer** — it ends cleanly
- All section paddings match the Figma spec (`p-[120px]`, `py-[100px]`, etc.)
- The discrepancy is purely a height mismatch between the static Figma artboard and the dynamically rendered browser page

### Recommendation

- This is expected behavior in Pixelay and does not indicate a layout or spacing issue in the code
- Focus on section-by-section alignment rather than total page height when evaluating accuracy

## Mobile Overlay

The mobile overlay (`pixelay-mobile.png`) shows a clean comparison with layout reflowing predictably to a single-column responsive design.
