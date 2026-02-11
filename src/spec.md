# Specification

## Summary
**Goal:** Replace the website header logo with the user-uploaded ZeroPlast Crew logo image.

**Planned changes:**
- Update the header `<img>` at XPath `/html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[1]/a[1]/img[1]` to use `file_00000000c9f87209a233972db5aad76c-3.png` as its image source (served from `frontend/public/assets/generated`).
- Remove any remaining reference in the header to the previously used/incorrect logo asset.
- Preserve existing header logo sizing (`h-12 w-12`) and existing `onError` behavior (hide image on load error), and leave the footer logo implementation unchanged.

**User-visible outcome:** The header displays the correct user-provided ZeroPlast Crew logo, while the footer logo remains the same as before.
