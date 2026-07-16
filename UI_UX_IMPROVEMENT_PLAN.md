# UI/UX Improvement Plan

## Progress

- [x] Step 1: Add semantic card markup while preserving existing data IDs.
- [x] Step 2: Refresh base visual theme and responsive page shell.
- [x] Step 3: Style event cards, session rows, and TBC badges.
- [x] Step 4: Add loading and error UI states.
- [x] Step 5: Hide optional session rows when data is absent.
- [ ] Step 6: Run final build verification and mark the plan complete.

## Highest Impact Improvements

1. Turn each series into a proper event card.

Use a card header with `F1`, `MotoGP`, `F2`, or `WEC`, a date badge, and the GP name. Put track and sessions below as structured rows.

2. Hide missing optional sessions.

The current HTML always includes optional session placeholders, such as an F1 sprint row. When the backend data does not include that session, the UI should remove or hide the empty row.

3. Add loading and error states.

If the schedule fetch is pending, show `Loading schedule...`. If it fails, show a user-facing message such as `Could not load schedule. Try again later.` instead of leaving blank content.

4. Make `TBC` visually distinct.

Render `TBC` as a muted pill or badge so users understand the time is pending and not a broken value.

5. Improve information hierarchy.

Instead of visually presenting strings like `Date: Sun, Jul 19 - Belgian GP` as flat list items, split the display into clearer parts:

- `Sun, Jul 19`
- `Belgian GP`
- `Spa-Francorchamps`
- `Qualifying 11:00`

6. Use a responsive card grid.

Use a two-column grid on desktop and a single-column stack on mobile. The current narrow list layout works, but it feels sparse and less modern on larger screens.

## Modern Visual Direction

Use a clean motorsport dashboard style:

- Dark charcoal or deep navy page background instead of pale red.
- White or near-white cards with sharp accent strips, or fully dark cards with subtle glowing series accents.
- Series-specific accent colors: F1 red, MotoGP orange/red, F2 blue/purple, WEC green/teal.
- Compact session chips for `Qualifying`, `Sprint`, and `Race`.
- Larger race date typography.
- Subtle gradients, stronger spacing, rounded cards, and less default browser list styling.
- A modern system font stack such as `Inter`, `system-ui`, `Segoe UI`, sans-serif.

## UX Details To Add

- Add a timezone badge: `Times in Sao Paulo, Brazil`.
- Highlight the next session inside each card.
- Add a small `Updated recently` footer if update metadata becomes available later.
- Improve footer copy to something like `Found an issue? Send feedback`.
- Use semantic markup such as `<article>` for each series and `<dl>` for event details instead of plain `<ul>` lists.
- Keep the app lightweight; no framework is needed for this scope.

## Recommended Implementation Path

1. Start with a CSS-only refresh: card grid, typography, spacing, badges, and responsive polish.
2. Clean up the HTML: convert sections into event cards with better labels.
3. Improve the TypeScript: hide/remove empty optional session rows and add loading/error states.
4. Later, optionally calculate the next session or countdown from structured data. This likely requires changing the backend data shape.

## Preferred Scope

Start with a functional UX pass plus modern visual refresh, without changing the backend schema.
