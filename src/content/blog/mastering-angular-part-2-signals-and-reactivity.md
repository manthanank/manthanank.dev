---
title: "Mastering Angular, Part 2: Signals & Reactivity"
description: "Dive into Angular Signals — the future of reactive state management. Learn signals, computed values, effects, and how they compare to traditional RxJS approaches."
pubDate: 2026-03-15
tags: ["Angular", "Signals", "Reactivity", "TypeScript"]
series: "Mastering Angular"
---

In Part 1, we mastered components and templates. Now in Part 2 of the **Mastering Angular** series, we go deeper into **Signals** — the reactive primitive that is fundamentally changing how Angular apps manage state.

## The Problem Signals Solve

Before Signals, Angular relied on **Zone.js** to detect changes. Zone.js monkey-patches browser APIs and triggers change detection after almost any async operation. This works, but it can cause:

- Unnecessary re-renders across the entire component tree
- Hard-to-debug "change detection loops"
- Poor performance in large apps with deep component trees

Signals solve this by making reactivity *explicit* and *granular*.

## Creating & Reading Signals

A signal is a reactive container for a value. You call it like a function to read its current value.

```typescript
import { signal, computed, effect } from '@angular/core';

const temperature = signal(22); // Celsius

// Read the value — returns 22
console.log(temperature());

// Update the value
temperature.set(25);

// Update based on current value
temperature.update(t => t + 1); // 26
```

## Computed Signals

Computed signals derive their value from one or more other signals. They are **lazy** (calculated on demand) and **memoized** (only recalculated when dependencies change).

```typescript
const celsius = signal(22);

const fahrenheit = computed(() => (celsius() * 9/5) + 32);
const description = computed(() => {
  const temp = celsius();
  if (temp < 10) return 'Cold';
  if (temp < 20) return 'Cool';
  if (temp < 30) return 'Warm';
  return 'Hot';
});

console.log(fahrenheit());   // 71.6
console.log(description());  // 'Warm'

celsius.set(5);

console.log(fahrenheit());   // 41
console.log(description());  // 'Cold'
```

The important thing: `fahrenheit` and `description` only recompute when `celsius` changes, not on every change detection cycle.

## Effects

Effects run side effects whenever the signals they read change. Use them for things like logging, analytics, syncing to `localStorage`, etc.

```typescript
import { effect } from '@angular/core';

const theme = signal<'light' | 'dark'>('dark');

effect(() => {
  // Runs immediately, then again whenever theme() changes
  document.documentElement.setAttribute('data-theme', theme());
  localStorage.setItem('theme', theme());
  console.log(`Theme changed to: ${theme()}`);
});
```

> ⚠️ Effects must be created inside an **injection context** — typically in a component's constructor or via `inject()`.

## Signals in Components

Here is a complete, practical example — a shopping cart using signals:

```typescript
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart">
      <h2>Cart ({{ itemCount() }} items)</h2>
      
      @for (item of items(); track item.id) {
        <div class="cart-item">
          <span>{{ item.name }}</span>
          <span>x{{ item.quantity }}</span>
          <span>{{ item.price * item.quantity | currency }}</span>
          <button (click)="remove(item.id)">Remove</button>
        </div>
      }
      
      <div class="cart-total">
        <strong>Total: {{ total() | currency }}</strong>
      </div>
      
      <button (click)="addSample()">Add Sample Item</button>
    </div>
  `
})
export class CartComponent {
  items = signal<CartItem[]>([
    { id: 1, name: 'Angular Course', price: 49.99, quantity: 1 },
    { id: 2, name: 'RxJS Deep Dive', price: 29.99, quantity: 2 },
  ]);

  // Derived values — these update automatically when items() changes
  itemCount = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  total = computed(() => this.items().reduce((sum, i) => sum + (i.price * i.quantity), 0));

  remove(id: number) {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  addSample() {
    this.items.update(items => [
      ...items,
      { id: Date.now(), name: 'New Item', price: 9.99, quantity: 1 }
    ]);
  }
}
```

## Signals vs RxJS: When to Use Which

Both are valid tools — they serve different purposes.

| Use Case | Prefer |
|----------|--------|
| Component local state | **Signals** |
| Async operations (HTTP, WebSockets) | **RxJS** |
| Derived/computed state | **Signals** |
| Complex event stream transformations | **RxJS** |
| Cross-component shared state | **Signals** (with a service) |
| Cancellable requests | **RxJS** |

The good news: `toSignal()` and `toObservable()` let you bridge between the two worlds seamlessly.

```typescript
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({ ... })
export class UsersComponent {
  private http = inject(HttpClient);

  // Convert an Observable to a Signal
  users = toSignal(this.http.get<User[]>('/api/users'), { initialValue: [] });
}
```

## Summary

Signals give you a precise, performant reactivity model that scales from simple counters to complex shared application state. The mental model is clear: **signals hold state, computed signals derive state, effects react to state**.

In **Part 3**, we'll build on this foundation and tackle **Angular Services, Dependency Injection, and HTTP** — the glue that connects your components to the real world.

*Continue to → [Part 3: Services, DI & HTTP](/blog/mastering-angular-part-3-services-di-and-http)*
