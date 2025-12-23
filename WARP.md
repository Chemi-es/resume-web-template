# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development commands

- Preview locally with a simple HTTP server (from the project root):
  - Using Python 3: `python -m http.server 8000` and open `http://localhost:8000` in your browser.
- You can also open `index.html` directly in a browser without running a server for quick checks.
- There is no build step, package manager, linter, or test runner configured in this template; editing the static files and reloading the browser is sufficient.

## Code architecture and structure

- **Overall design**
  - This is a minimal, single-page résumé / CV site implemented with plain HTML, CSS, and a tiny bit of JavaScript.
  - There is no backend, framework, or client-side routing; all content is rendered from `index.html`.

- **`index.html` – content and layout**
  - Defines the full page structure: a sticky header with name and contact info, a main column of résumé sections, and a footer.
  - Main sections (in order) are Summary, Skills, Experience, Projects, and Education, each grouped in a card-like container.
  - Experience and Projects entries are represented as repeated `.item` blocks with a common header layout (title/company on the left, dates on the right) and bullet lists underneath.
  - Links in the header (email, LinkedIn, GitHub) and section headings are where you customize your own data.

- **`styles.css` – visual system, layout, and responsive/print behavior**
  - Uses CSS custom properties (`:root` variables) to define the core color palette, typography, border radii, and shadows for a dark, card-based design.
  - Establishes the page layout with a centered `.container`, sticky, semi-translucent header, and card-style sections (`.card`) for each résumé block.
  - Implements the skills grid as a responsive multi-column layout and standardizes repeated résumé items via `.item`, `.item-header`, `.company`, and `.dates` styles.
  - Contains media queries for small screens (stacking header content, relaxing date white-space) and a `@media print` block that switches to a light theme, removes drop shadows, and ensures a clean, printer-friendly PDF export.

- **`script.js` – minimal enhancement**
  - Listens for `DOMContentLoaded` and updates the footer span with `id="current-year"` to the current year at runtime.
  - There are no other dynamic behaviors; this file is intentionally small and is the place to add any future interactive enhancements if needed.
