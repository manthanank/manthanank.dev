---
title: "RxJS switchMap vs mergeMap vs exhaustMap"
description: "Understanding the three most common higher-order observable flattening operators in RxJS."
pubDate: "2026-01-15"
tags: ["rxjs", "angular", "typescript"]
---

Choosing the right flattening operator is critical for correctness in Angular apps.

```typescript
import { switchMap, mergeMap, exhaustMap, concatMap } from 'rxjs/operators';

// switchMap - cancels previous inner observable (use for search/autocomplete)
searchInput$.pipe(
  debounceTime(300),
  switchMap(query => http.get(`/api/search?q=${query}`))
).subscribe(results => console.log(results));

// mergeMap - runs all concurrently (use for fire-and-forget)
clicks$.pipe(
  mergeMap(() => http.post('/api/track', { event: 'click' }))
).subscribe();

// exhaustMap - ignores new while one is active (use for login/submit)
loginBtn$.pipe(
  exhaustMap(() => authService.login(credentials))
).subscribe();

// concatMap - queues in order (use for ordered requests)
actions$.pipe(
  concatMap(action => processAction(action))
).subscribe();
```

**Rule of thumb**: Use `switchMap` for user queries, `exhaustMap` for form submissions, `mergeMap` for analytics.
