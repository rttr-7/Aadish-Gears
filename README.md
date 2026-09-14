# Aadish Gears & Transmissions — Website (Homepage)

React + Vite + Tailwind CSS v4 implementation of the homepage, built from the
Figma design and style guide.

## Stack
- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Fonts: Archivo (display) & Work Sans (body) — loaded from Google Fonts
- Icons: Material Symbols Rounded — loaded from Google Fonts

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   one component per homepage section
    Header.jsx
    Hero.jsx
    Process.jsx
    Manufacture.jsx
    ImageStrip.jsx
    Industries.jsx
    WhyUsClients.jsx
    CtaBanner.jsx
    Footer.jsx
  data/
    content.js  all page copy/content in one place — edit here to change text
  index.css     Tailwind import + design-token theme (colors, fonts)
  App.jsx       assembles the homepage from the section components
```

## Design tokens

Colors and fonts are defined as CSS variables in `src/index.css` under `@theme`,
matching the style guide:

| Token | Hex |
| --- | --- |
| `--color-action` | `#0F62FE` |
| `--color-sky` | `#D3E5F8` |
| `--color-navy` | `#0B2750` |
| `--color-mint` | `#31FF98` |
| `--color-slate` | `#434E58` |
| `--color-mist` | `#D9DCDE` |

Use them via Tailwind utilities, e.g. `bg-action`, `text-navy`, `bg-sky`.

## Notes / TODO

- The three photo tiles between "What We Manufacture" and "Industries We
  Serve", and the client logo lists, are placeholders (icons / text) —
  swap in the real product photography and client logo image files when
  available.
- Nav links currently point to in-page anchors; wire them up to real routes
  if/when the other pages (About, Products, Gallery, Contact) are built.
