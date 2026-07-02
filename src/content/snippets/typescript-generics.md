---
title: "TypeScript Generics Patterns"
description: "Practical TypeScript generics: constraints, conditional types, and generic utility functions."
pubDate: "2026-03-15"
tags: ["typescript", "javascript"]
---

```typescript
// 1. Generic function
function first<T>(arr: T[]): T | undefined { return arr[0]; }

// 2. Generic with constraint (K must be a key of T)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: 'Manthan', age: 27 };
getProperty(user, 'name'); // returns string - TypeScript knows this!
getProperty(user, 'age');  // returns number

// 3. Generic class
class Repository<T extends { id: number }> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  findById(id: number): T | undefined { return this.items.find(i => i.id === id); }
}

// 4. Conditional type
type IsArray<T> = T extends any[] ? true : false;
type A = IsArray<string[]>; // true
type B = IsArray<string>;   // false

// 5. Infer in conditional types
type UnpackPromise<T> = T extends Promise<infer R> ? R : T;
type Resolved = UnpackPromise<Promise<string>>; // string

// 6. Generic API response wrapper
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```
