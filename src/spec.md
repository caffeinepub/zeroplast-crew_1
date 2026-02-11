# Specification

## Summary
**Goal:** Fix the marketing site logo so it reliably renders in the deployed build in both the header and footer.

**Planned changes:**
- Ensure the logo asset path used by the marketing site points to an actual static file shipped in the frontend build (no missing/incorrect `/assets/generated/` references).
- Refactor header and footer to use a single shared logo source of truth (shared exported `LOGO_SRC` and `LOGO_ALT`) so both areas always display the same logo.
- Add a graceful fallback if the logo fails to load (brand name text remains visible and layout does not collapse).

**User-visible outcome:** On first load of the deployed app, the logo appears consistently in the header and footer without refresh, and no logo-related 404/failed network requests occur.
