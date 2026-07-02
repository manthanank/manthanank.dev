---
title: "RxJS debounceTime vs throttleTime"
description: "When to use debounceTime vs throttleTime in RxJS for controlling event emission rates."
pubDate: "2026-02-10"
tags: ["rxjs", "javascript", "performance"]
---

```typescript
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, map } from 'rxjs/operators';

const input$ = fromEvent(document.getElementById('search'), 'input').pipe(
  map((e: Event) => (e.target as HTMLInputElement).value)
);

// debounceTime: waits for pause in events (use for search input)
// Emits only after user stops typing for 300ms
input$.pipe(
  debounceTime(300),
  distinctUntilChanged()
).subscribe(query => fetchResults(query));

// throttleTime: emits first value, ignores rest for duration (use for scroll)
fromEvent(window, 'scroll').pipe(
  throttleTime(500)
).subscribe(() => updateScrollPosition());

// auditTime: emits LAST value in time window (smoother than throttle)
fromEvent(window, 'mousemove').pipe(
  auditTime(100)
).subscribe(e => trackMouse(e));
```

**Use `debounceTime` for search** (wait for typing to stop). **Use `throttleTime` for scroll/resize** (don't process every pixel).
