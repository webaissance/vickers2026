## Goal
Make the marquee logo more prominent in the header — slightly larger on desktop, significantly larger on mobile and tablet.

## Changes (src/components/Header.tsx)

**Desktop logo** (currently `h-16 xl:h-20 max-w-[420px]`)
- Bump to `h-20 xl:h-24` with `max-w-[520px]` so it reads larger without crowding the nav columns.

**Mobile/tablet logo** (currently `h-10 max-w-[220px]`)
- Increase to `h-16 sm:h-20 max-w-[360px]` so the marquee fills much more of the bar.
- Slightly tighten container vertical padding on small screens so the taller logo doesn't make the header feel oversized.

## Notes
- Nav uses a 3-column grid (`1fr auto 1fr`) on desktop, so a wider center column stays centered and the side nav links keep their spacing.
- Mobile shows only the logo + hamburger, so a much bigger logo fits comfortably.
