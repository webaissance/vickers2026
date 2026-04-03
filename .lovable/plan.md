

## Fix Header Spacing

The issue is that the left nav uses default alignment (left-aligned within its `flex-1` container) while the right nav uses `justify-end`. This means left links sit close to the left edge and the logo, but right links are pushed to the far right -- creating uneven gaps around the logo.

**Fix**: Change both nav containers to push their links toward the logo, so spacing is symmetrical.

- **Left nav** (line 26): Change from `gap-6 flex-1` to `gap-6 flex-1 justify-end` so links cluster near the logo
- **Right nav** (line 44): Change from `justify-end gap-6 flex-1` to `gap-6 flex-1` (remove `justify-end`) so links cluster near the logo

This makes both groups of links hug the center logo evenly, with equal whitespace on the outer edges.

