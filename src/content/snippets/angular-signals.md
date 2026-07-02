---
title: "Angular Signals - Reactive State without RxJS"
description: "How to use Angular 17+ Signals for simple, synchronous reactive state management."
pubDate: "2026-01-10"
tags: ["angular", "signals", "typescript"]
---

Angular Signals provide a fine-grained reactivity model. Unlike observables, signals are synchronous.

```typescript
import { signal, computed, effect } from '@angular/core';

// Create a signal
const count = signal(0);

// Computed signal (derived state)
const doubled = computed(() => count() * 2);

// Effect (side effects that track signals)
effect(() => {
  console.log('Count changed:', count(), 'Doubled:', doubled());
});

// Update the signal
count.set(5);              // set to 5
count.update(n => n + 1); // update based on previous value

// In templates: {{ count() }} - note the function call syntax
```

Signals automatically track dependencies and re-run effects/computed values when dependencies change.
