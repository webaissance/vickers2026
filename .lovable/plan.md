## Goal
Replace `src/assets/coming-soon.png` with a new banner that visually matches `src/assets/now-playing.png`: black background, thin gold rectangular frame, large gold serif "COMING SOON" wordmark centered inside. No subtitle.

## Steps
1. Generate a new banner image with `imagegen` (premium tier for crisp typography):
   - Black background, thin gold double-line rectangular border with small gold corner accents matching the Now Playing banner.
   - Large gold serif (Playfair Display style) "COMING SOON" centered.
   - Same aspect ratio and proportions as the existing Now Playing banner (~1536×288, roughly 16:3).
   - Save to `src/assets/coming-soon.png`, overwriting the current file.
2. No code changes needed — `ComingSoon.tsx` already imports `src/assets/coming-soon.png`.
3. Verify by viewing the regenerated image.
