---
title: "CSS Grid Layout Tricks"
description: "Practical CSS Grid patterns: auto-fit, named areas, and subgrid."
pubDate: "2026-02-20"
tags: ["css", "layout"]
---

```css
/* Auto-responsive grid without media queries */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 1.5rem;
}

/* Named template areas */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Subgrid - children share parent grid tracks */
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* inherits parent row tracks */
}

/* Center anything in 1 line */
.center { display: grid; place-items: center; }
```
