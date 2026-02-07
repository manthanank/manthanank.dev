---
title: "Understanding RxJS Operators"
description: "Deep dive into the most commonly used RxJS operators with real-world examples and when to use each one."
pubDate: 2025-11-20
tags: ["RxJS", "Angular", "TypeScript"]
---

RxJS operators are the backbone of reactive programming in Angular. Understanding when and how to use them is crucial for building efficient applications.

## Transformation Operators

### map

The most basic operator — transforms each emitted value.

```typescript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(
  map(value => value * 10)
).subscribe(console.log); // 10, 20, 30
```

### switchMap

Cancels the previous inner observable when a new value arrives. Perfect for HTTP requests triggered by user input.

```typescript
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.searchService.search(query))
).subscribe(results => {
  this.results = results;
});
```

## Filtering Operators

### filter

Only emits values that pass a condition.

```typescript
of(1, 2, 3, 4, 5).pipe(
  filter(n => n % 2 === 0)
).subscribe(console.log); // 2, 4
```

### distinctUntilChanged

Only emits when the current value is different from the last.

## Combination Operators

### combineLatest

Combines multiple observables and emits the latest value from each whenever any of them emits.

```typescript
combineLatest([this.user$, this.settings$]).pipe(
  map(([user, settings]) => ({ user, settings }))
).subscribe(data => {
  // Both user and settings are available
});
```

## Key Takeaways

- Use `switchMap` for search/autocomplete scenarios
- Use `mergeMap` when you need parallel inner subscriptions
- Use `concatMap` when order matters
- Always handle errors with `catchError`
- Use `takeUntil` for cleanup in Angular components
