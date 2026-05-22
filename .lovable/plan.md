## Problem

On the published site, `Unable to load showtimes` appears because the client fetches the XML feed via `https://api.allorigins.win` (public CORS proxy), which is currently returning HTTP 522 (Cloudflare upstream failure). The upstream feed itself (`easyware.webaissance.com`) responds normally with HTTP 200 — the issue is purely the third-party proxy.

In local dev this works because Vite proxies `/api/feed` to the upstream directly; in production there's no equivalent, so the code falls back to allorigins.

## Fix

Enable Lovable Cloud and add a tiny edge function that proxies the XML feed. This removes the dependency on a third-party CORS proxy and works identically in dev and production.

### Steps

1. Enable Lovable Cloud (provisions backend + edge function support).
2. Add edge function `film-feed` that:
   - Fetches the upstream XML from `https://easyware.webaissance.com/feeds/Vickers/parsefeed.php?key=7j*pQn)l36`
   - Returns it with `Content-Type: text/xml` and proper CORS headers
   - Returns a structured JSON error on failure
3. Update `src/lib/filmFeed.ts` `fetchXml()` to call the edge function in production (and keep the existing Vite `/api/feed` path for local dev). Remove the allorigins fallback.
4. Verify on the published preview that `NowPlaying` and `ComingSoon` load.

### Files touched

- `supabase/functions/film-feed/index.ts` (new edge function)
- `src/lib/filmFeed.ts` (swap proxy URL)

No UI/visual changes.
