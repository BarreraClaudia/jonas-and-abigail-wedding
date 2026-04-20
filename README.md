# Jonas & Abigail — Wedding Website

A static wedding website for Jonas & Abigail, hosted at [jonas-and-abigail.com](https://jonas-and-abigail.com). Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies beyond two Google Fonts and the canvas-confetti CDN script.

---

## Project Structure

```
├── index.html          # Main page (single page)
├── styles.css          # All styles — see section breakdown below
├── CNAME               # Custom domain for GitHub Pages
├── assets/
│   └── imgs/           # Wedding photos + icon PNGs
└── js/
    ├── confetti.js     # Heart confetti bursts on the Save the Date section
    ├── countdown.js    # Live countdown timer to July 10, 2026
    └── scroll.js       # Header scroll effect + scroll-reveal observer
```

---

## Sections

| Section           | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **Header**        | Fixed nav with the couple's names; turns dark on scroll                |
| **Hero Slider**   | Full-viewport crossfade slideshow of three wedding photos              |
| **Save the Date** | Dark banner with the wedding date and heart confetti                   |
| **Info Grid**     | 2-column grid alternating photo tiles with venue, RSVP, and hotel info |
| **Countdown**     | Full-viewport section with a live days/hours/minutes/seconds timer     |
| **Footer**        | Icon attribution                                                       |

---

## Animations

All animations respect `prefers-reduced-motion` via the CSS reset.

- **Hero slides** — cross-fade with a subtle Ken-Burns scale drift (18 s cycle, 3 slides × 6 s)
- **Header title** — fades and slides down on page load
- **Scroll-reveal** — sections fade in from the left, right, or bottom as they enter the viewport (handled by `IntersectionObserver` in `scroll.js`)
- **Photo tiles** — zoom gently on hover
- **CTA buttons** — lift + shadow deepen on hover
- **Countdown seconds** — brief scale pulse on every tick
- **Heart confetti** — bursts from both bottom corners on page load, then every 5 seconds

---

## CSS Organisation

`styles.css` is divided into clearly labelled sections:

1. **CSS Reset** — Josh W. Comeau's custom reset
2. **Design Tokens** — fluid type scale, colour palette, easing curves (all as CSS custom properties)
3. **Global Typography**
4. **Base**
5. **Header**
6. **Slider / Hero**
7. **Save the Date**
8. **Info Grid**
9. **Countdown**
10. **Footer**
11. **Scroll-Reveal Utilities** — `.reveal`, `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
12. **Keyframes**

---

## Fonts

Both fonts are loaded from Google Fonts:

- **Kapakana** — display / script font used for the couple's names, the date, and countdown numerals
- **Oranienbaum** — serif body font used for all other text

---

## Deployment

The site is deployed via **GitHub Pages** with a custom domain configured in `CNAME`. No build process is needed — push to the `main` branch and it goes live.

---

## External Dependencies

| Dependency                                                   | Version | How it's used                                     |
| ------------------------------------------------------------ | ------- | ------------------------------------------------- |
| [canvas-confetti](https://github.com/catdad/canvas-confetti) | 1.9.4   | Heart-shaped confetti on the Save the Date banner |
| Google Fonts                                                 | —       | Kapakana + Oranienbaum typefaces                  |
