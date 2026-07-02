---
title: "CSS Animations and Transitions Cheat Sheet"
description: "Essential CSS animation patterns: keyframes, transitions, scroll-driven animations, and GPU acceleration."
pubDate: "2026-04-15"
tags: ["css", "animations"]
---

```css
/* 1. Smooth transitions */
.button {
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* 2. Keyframe animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card { animation: fadeInUp 0.5s ease forwards; }

/* 3. Staggered children via CSS custom property */
.list-item { animation: fadeInUp 0.4s ease calc(var(--i, 0) * 0.1s) both; }
/* In HTML: <li style="--i: 1">, <li style="--i: 2">, ... */

/* 4. Scroll-driven animation (Chrome 115+) */
@keyframes reveal {
  from { opacity: 0; translate: 0 30px; }
  to   { opacity: 1; translate: 0 0; }
}
.section {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

/* 5. GPU-accelerated - stick to these */
/* GOOD: transform, opacity */
/* BAD:  width, height, top, left, margin */

/* 6. Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
