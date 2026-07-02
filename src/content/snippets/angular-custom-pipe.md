---
title: "Creating Custom Angular Pipes"
description: "How to build reusable custom pipes in Angular for data transformation in templates."
pubDate: "2026-03-10"
tags: ["angular", "typescript"]
---

Pipes transform data in templates without polluting component logic.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

// 1. Basic pure pipe - truncate long text
@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, trail = '...') {
    if (!value || value.length <= limit) return value;
    return value.slice(0, limit) + trail;
  }
}

// 2. Impure pipe (recalculates every change detection cycle)
@Pipe({ name: 'timeAgo', pure: false, standalone: true })
export class TimeAgoPipe implements PipeTransform {
  transform(date: Date | string): string {
    const seconds = Math.floor((+new Date() - +new Date(date)) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  }
}

// Usage in template (import in component's imports array):
// {{ longText | truncate:50 }}
// {{ post.createdAt | timeAgo }}
```
