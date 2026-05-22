# Film Detail Pages + Visit Page

## 1. Film detail pages — `/film/:slug`

Replace the current behavior where clicking a poster opens an external Easy-Ware page. Posters on the homepage (Now Playing + Coming Soon) will link to an internal route. The external "Buy Tickets" links per showtime stay external — those go to the ticketing system.

### Route + data
- New route `/film/:slug` registered in `src/App.tsx`.
- Reuse `useFilmFeed()` (already cached by React Query) and find the matching film by slugified `title`. No new network calls.
- Slug helper in `src/lib/filmFeed.ts`: lowercase, strip punctuation, dashes for spaces. Used both when generating links and when resolving the param.
- If feed is loading → show a centered "Loading…" state. If film not found → friendly "We can't find that film" message with a link back to Now Playing.

### Page layout (Art Deco, black/gold, Playfair + Raleway)
Matches the existing homepage feel:

```text
Header
─────────────────────────────────────────────
  [ Poster ]   Title (Playfair, gold gradient)
               Series tag (Throwback Thursday / Special Event) if any
               Runtime · Rating · Year · Country · Language
               Director · Writer · Cast
               ─── divider ───
               Synopsis paragraph(s)
               [ Watch Trailer → ]   (only if trailer exists)

               Showtimes
               [ Fri May 28 · 7:00 PM ]  [ … ]   ← buttons linking to ticketing
               (sold-out shows render disabled with "Sold Out" label)

               [ ← Back to Now Playing ]
Footer
```

- Poster column: ~360px on desktop, full-width on mobile, with the same gold glow used on the homepage card.
- Showtime buttons reuse the existing outlined-gold pill style.
- SEO: per-page `<title>` = `"{Film Title} — Vickers Theatre"`, meta description from `synopsis`, Open Graph image = poster.

### Updates to existing components
- `NowPlaying.tsx` — poster link and title link change from `film.movieLink` (external) to internal `/film/{slug}`. Individual showtime buttons keep their external `screeningLink`. Trailer link stays external.
- `ComingSoon.tsx` — poster link changes to internal `/film/{slug}`.

## 2. Visit page — `/visit`

New page styled to match About/Rentals. Sections:

1. **Hero heading** — "Visit the Vickers" with gold gradient + filigree divider.
2. **Location & Contact** — address (6 N. Elm St, Three Oaks, MI 49128), phone, email, embedded Google Map iframe.
3. **Hours** — note that hours follow the showtimes; link to Now Playing.
4. **Tickets & Pricing** — general admission, matinee, member pricing (placeholders for you to confirm).
5. **Concessions** — real-butter popcorn, vintage candy, beer & wine (2019 liquor license).
6. **Accessibility** — handicapped accessible; 126-seat capacity including café and balcony.
7. **Parking** — street parking + adjacent lot.
8. **Group visits & private events** — short blurb with a link to `/rentals`.

Add **Visit** to the Header nav and Footer nav (between Now Playing/Coming Soon and About).

## Technical details

- Files created:
  - `src/pages/FilmDetail.tsx`
  - `src/pages/Visit.tsx`
- Files edited:
  - `src/App.tsx` — register `/film/:slug` and `/visit` routes (above the catch-all).
  - `src/lib/filmFeed.ts` — add `slugify(title)` and `findFilmBySlug(films, slug)` helpers.
  - `src/components/NowPlaying.tsx` — internal poster/title links.
  - `src/components/ComingSoon.tsx` — internal poster links.
  - `src/components/Header.tsx` — add Visit nav item.
  - `src/components/Footer.tsx` — add Visit nav item.
- No backend changes. No new dependencies.
- All copy on the Visit page will be drafted from publicly available info on vickerstheatre.com; placeholders flagged where exact values (current ticket prices, exact phone) should be confirmed.
