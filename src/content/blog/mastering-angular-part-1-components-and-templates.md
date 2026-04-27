---
title: "Mastering Angular, Part 1: Components & Templates"
description: "Start your journey to Angular mastery by deeply understanding components, templates, data binding, and the building blocks of every Angular app."
pubDate: 2026-03-01
tags: ["Angular", "TypeScript", "Components"]
series: "Mastering Angular"
---

Every Angular application is a tree of components. Understanding how components and templates work together is the most foundational skill you can build. This is Part 1 of the **Mastering Angular** series.

## What Is a Component?

A component controls a patch of screen called a *view*. It consists of three things:

1. **A TypeScript class** — holds the logic and state
2. **An HTML template** — defines what the user sees
3. **CSS styles** — scoped styles for the view

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  template: `
    <div class="card">
      <h2>{{ hero.name }}</h2>
      <p>Power: {{ hero.power }}</p>
      <button (click)="activate()">Activate</button>
    </div>
  `,
  styles: [`
    .card { padding: 1rem; border: 1px solid #ccc; border-radius: 8px; }
  `]
})
export class HeroCardComponent {
  hero = { name: 'Angular', power: 'Reactivity' };

  activate() {
    console.log(`${this.hero.name} activated!`);
  }
}
```

## Data Binding in Templates

Angular templates support four types of data binding that connect your class to your view.

### Interpolation (`{{ }}`)

The simplest form — it reads a value from the class and renders it as text.

```html
<p>Welcome, {{ username }}!</p>
```

### Property Binding (`[property]`)

Binds a class property to a DOM element's property.

```html
<img [src]="profileImageUrl" [alt]="username" />
<button [disabled]="isLoading">Submit</button>
```

### Event Binding (`(event)`)

Listens to DOM events and calls a method in your class.

```html
<button (click)="onSave()">Save</button>
<input (input)="onSearch($event)" />
```

### Two-Way Binding (`[(ngModel)]`)

Syncs a value in both directions — from class to template and back.

```html
<input [(ngModel)]="searchQuery" placeholder="Search..." />
<p>You typed: {{ searchQuery }}</p>
```

## Input & Output: Component Communication

Angular components communicate via `@Input()` for parent-to-child data flow and `@Output()` for child-to-parent events.

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
```

And the parent uses it like this:

```html
<app-counter [count]="myCount" (countChange)="myCount = $event" />
```

## Lifecycle Hooks

Components go through a predictable lifecycle. The most important hooks are:

| Hook | When it runs |
|------|-------------|
| `ngOnInit` | After first `ngOnChanges`, once |
| `ngOnChanges` | When input properties change |
| `ngAfterViewInit` | After the component's view is initialized |
| `ngOnDestroy` | Just before the component is destroyed |

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({ selector: 'app-timer', template: `<p>{{ elapsed }}s</p>` })
export class TimerComponent implements OnInit, OnDestroy {
  elapsed = 0;
  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.intervalId = setInterval(() => this.elapsed++, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
```

## Summary

You now have a solid understanding of Angular's component model. In **Part 2**, we'll go deeper into Signals — Angular's modern reactive state management system — and learn how they replace the need for `OnPush` change detection and manual subscriptions.

*Continue to → [Part 2: Signals & Reactivity](/blog/mastering-angular-part-2-signals-and-reactivity)*
