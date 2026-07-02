---
title: "RxJS combineLatest vs forkJoin vs zip"
description: "When to use combineLatest, forkJoin, and zip for combining multiple observables in RxJS."
pubDate: "2026-04-10"
tags: ["rxjs", "angular", "typescript"]
---

```typescript
import { combineLatest, forkJoin, zip, of } from 'rxjs';

// combineLatest: emits whenever ANY source emits (after all emitted at least once)
// Use for: combining UI state - filters, pagination, search
combineLatest([filter$, search$, page$]).pipe(
  debounceTime(300),
  switchMap(([filter, search, page]) => this.api.getItems({ filter, search, page }))
).subscribe(items => this.items = items);

// forkJoin: waits for ALL to complete, emits once
// Use for: parallel HTTP requests that each complete once
forkJoin({
  user:  this.http.get('/api/user/1'),
  posts: this.http.get('/api/posts?userId=1'),
}).subscribe(({ user, posts }) => {
  this.user  = user;
  this.posts = posts;
});

// zip: pairs emissions by index
// Use for: when you need paired values from multiple sources
const a$ = of(1, 2, 3);
const b$ = of('a', 'b', 'c');
zip(a$, b$).subscribe(([num, letter]) => console.log(num, letter));
// Output: 1 a  2 b  3 c
```

**Quick guide**: `combineLatest` for live state, `forkJoin` for one-shot parallel calls, `zip` for index-paired values.
