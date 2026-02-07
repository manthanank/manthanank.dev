---
title: "Getting Started with Angular Signals"
description: "Learn how Angular Signals work and how they can simplify reactivity in your Angular applications with practical examples."
pubDate: 2026-01-15
tags: ["Angular", "Signals", "TypeScript"]
---

Angular Signals represent a new way to handle reactivity in Angular applications. They provide a simpler, more predictable model for managing state changes compared to traditional approaches.

## What Are Signals?

A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from simple primitives to complex data structures.

```typescript
import { signal, computed, effect } from '@angular/core';

// Create a signal
const count = signal(0);

// Read the value
console.log(count()); // 0

// Update the value
count.set(1);
count.update(value => value + 1);
```

## Computed Signals

Computed signals derive their value from other signals. They are lazily evaluated and memoized.

```typescript
const firstName = signal('Manthan');
const lastName = signal('Ankolekar');

const fullName = computed(() => `${firstName()} ${lastName()}`);
console.log(fullName()); // "Manthan Ankolekar"
```

## Effects

Effects are operations that run whenever one or more signal values change.

```typescript
effect(() => {
  console.log(`Count changed to: ${count()}`);
});
```

## Why Use Signals?

- **Fine-grained reactivity** — Only components that depend on changed signals are updated
- **Simpler mental model** — No need to manage subscriptions manually
- **Better performance** — Reduces unnecessary change detection cycles
- **Zone-less ready** — Works without Zone.js for better performance

Signals are the future of Angular reactivity and are being integrated throughout the framework.
