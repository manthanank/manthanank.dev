"""Script to create all snippet content files for manthanank.dev"""
import os

snippets = {
'angular-signals.md': '''---
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
''',

'rxjs-switchmap.md': '''---
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
''',

'typescript-utility-types.md': '''---
title: "Essential TypeScript Utility Types"
description: "A quick reference for TypeScript built-in utility types: Partial, Pick, Omit, Record, and more."
pubDate: "2026-01-20"
tags: ["typescript", "javascript"]
---

TypeScript ships with powerful built-in utility types.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

type UserUpdate   = Partial<User>;              // all fields optional
type FullUser     = Required<User>;             // all fields required
type UserPreview  = Pick<User, 'id' | 'name'>; // select fields
type PublicUser   = Omit<User, 'email'>;        // exclude fields

// Record - key-value map type
type RolePermissions = Record<'admin' | 'user', string[]>;

// ReturnType / Parameters
function getUser() { return { id: 1, name: 'Manthan' }; }
type GetUserReturn = ReturnType<typeof getUser>;

// NonNullable - remove null and undefined
type MaybeString    = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string

// Readonly - prevent mutations
const config: Readonly<User> = { ... };
```
''',

'angular-lazy-loading.md': '''---
title: "Angular Lazy Loading with Standalone Components"
description: "How to lazy-load routes in Angular 17+ using standalone components and loadComponent."
pubDate: "2026-02-05"
tags: ["angular", "typescript", "performance"]
---

Angular 17+ makes lazy loading simpler with `loadComponent` for standalone components.

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  // Lazy-load a whole feature with child routes
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  }
];

// admin.routes.ts
export const ADMIN_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./admin.component').then(m => m.AdminComponent) },
  { path: 'users', loadComponent: () => import('./users.component').then(m => m.UsersComponent) }
];
```

Each lazy chunk is automatically code-split, reducing initial bundle size significantly.
''',

'rxjs-debounce.md': '''---
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
''',

'js-array-methods.md': '''---
title: "JavaScript Array Methods Cheat Sheet"
description: "A practical reference for the most useful JavaScript array methods with real-world examples."
pubDate: "2026-02-15"
tags: ["javascript", "arrays"]
---

```javascript
const users = [
  { id: 1, name: 'Alice', age: 30, active: true },
  { id: 2, name: 'Bob',   age: 25, active: false },
  { id: 3, name: 'Carol', age: 35, active: true },
];

// filter - keep items matching condition
const activeUsers = users.filter(u => u.active);

// map - transform each item
const names = users.map(u => u.name); // ['Alice', 'Bob', 'Carol']

// find / findIndex
const alice      = users.find(u => u.name === 'Alice');
const aliceIndex = users.findIndex(u => u.name === 'Alice'); // 0

// reduce - fold array into single value
const totalAge = users.reduce((sum, u) => sum + u.age, 0); // 90

// some / every
const hasInactive = users.some(u => !u.active);  // true
const allActive   = users.every(u => u.active);  // false

// flatMap - map + flatten 1 level
const tags = [['js','ts'],['node','js']].flatMap(t => t);

// sort (creates new array with spread)
const sorted = [...users].sort((a, b) => a.age - b.age);

// Object.groupBy (ES2024)
const byStatus = Object.groupBy(users, u => u.active ? 'active' : 'inactive');

// Array.from with length trick
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]
```
''',

'css-grid-tricks.md': '''---
title: "CSS Grid Layout Tricks"
description: "Practical CSS Grid patterns: auto-fit, named areas, and subgrid."
pubDate: "2026-02-20"
tags: ["css", "layout"]
---

```css
/* Auto-responsive grid without media queries */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 1.5rem;
}

/* Named template areas */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Subgrid - children share parent grid tracks */
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* inherits parent row tracks */
}

/* Center anything in 1 line */
.center { display: grid; place-items: center; }
```
''',

'nodejs-express-middleware.md': '''---
title: "Express.js Middleware Patterns"
description: "How to write, compose, and use Express.js middleware for auth, logging, and error handling."
pubDate: "2026-03-01"
tags: ["node.js", "express", "javascript"]
---

```javascript
const express = require('express');
const app = express();

// 1. Basic middleware (runs on every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// 2. Route-specific middleware
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}

app.get('/profile', requireAuth, (req, res) => res.json(req.user));

// 3. Error-handling middleware (4 params signature)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// 4. Async wrapper - auto-forwards errors to error middleware
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get('/data', asyncHandler(async (req, res) => {
  const data = await fetchData();
  res.json(data);
}));
```
''',

'angular-custom-pipe.md': '''---
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
''',

'typescript-generics.md': '''---
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
''',

'js-promise-patterns.md': '''---
title: "JavaScript Promise Patterns"
description: "Modern async/await patterns for parallel execution, error handling, and timeouts."
pubDate: "2026-03-20"
tags: ["javascript", "async", "typescript"]
---

```javascript
// 1. Basic async/await with error handling
async function fetchUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Failed:', error);
    throw error;
  }
}

// 2. Parallel execution
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
  ]);
  return { users, posts };
}

// 3. Promise.allSettled - don't fail on partial errors
const results = await Promise.allSettled([
  fetch('/api/fast').then(r => r.json()),
  fetch('/api/broken').then(r => r.json()), // might fail
]);
const successes = results.filter(r => r.status === 'fulfilled').map(r => r.value);

// 4. Race with timeout
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timeout]);
}

// 5. Retry with exponential backoff
async function retry(fn, retries = 3, delay = 1000) {
  try { return await fn(); }
  catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}
```
''',

'angular-reactive-forms.md': '''---
title: "Angular Reactive Forms Best Practices"
description: "Typed reactive forms in Angular 14+: FormGroup, validators, and dynamic controls."
pubDate: "2026-04-01"
tags: ["angular", "forms", "typescript"]
---

```typescript
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email" />
      <div *ngIf="email?.invalid && email?.touched">
        {{ email?.hasError('required') ? 'Required' : 'Invalid email' }}
      </div>
      <input formControlName="password" type="password" />
      <button [disabled]="form.invalid">Login</button>
    </form>
  `
})
export class LoginFormComponent {
  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  get email() { return this.form.get('email'); }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value); // fully typed!
    }
  }
}
```
''',

'rxjs-combinelatest.md': '''---
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
''',

'css-animations.md': '''---
title: "CSS Animations and Transitions Cheat Sheet"
description: "Essential CSS animation patterns: keyframes, transitions, scroll-driven animations, and GPU acceleration."
pubDate: "2026-04-15"
tags: ["css", "animations"]
---

```css
/* 1. Smooth transitions */
.button {
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* 2. Keyframe animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card { animation: fadeInUp 0.5s ease forwards; }

/* 3. Staggered children via CSS custom property */
.list-item { animation: fadeInUp 0.4s ease calc(var(--i, 0) * 0.1s) both; }
/* In HTML: <li style="--i: 1">, <li style="--i: 2">, ... */

/* 4. Scroll-driven animation (Chrome 115+) */
@keyframes reveal {
  from { opacity: 0; translate: 0 30px; }
  to   { opacity: 1; translate: 0 0; }
}
.section {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

/* 5. GPU-accelerated - stick to these */
/* GOOD: transform, opacity */
/* BAD:  width, height, top, left, margin */

/* 6. Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
''',

'nodejs-file-io.md': '''---
title: "Node.js File I/O with fs/promises"
description: "Modern Node.js file operations using async/await with the fs/promises API."
pubDate: "2026-04-20"
tags: ["node.js", "javascript"]
---

```javascript
import { readFile, writeFile, readdir, stat, mkdir, unlink, copyFile } from 'fs/promises';
import { join } from 'path';

// Read
const content = await readFile('config.json', 'utf-8');
const config  = JSON.parse(content);

// Write (creates or overwrites)
await writeFile('output.json', JSON.stringify(data, null, 2), 'utf-8');

// Append
import { appendFile } from 'fs/promises';
await appendFile('log.txt', `${new Date().toISOString()} - Event\n`);

// List directory
const files   = await readdir('./src');
const jsFiles = files.filter(f => f.endsWith('.js'));

// File metadata
const info = await stat('./package.json');
console.log(info.size, info.mtime);

// Create directory (recursive)
await mkdir('./dist/assets/icons', { recursive: true });

// Copy / Delete
await copyFile('src.txt', 'dest.txt');
await unlink('./temp.txt');

// Walk directory recursively (async generator)
async function* walkDir(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else yield full;
  }
}

for await (const file of walkDir('./src')) {
  console.log(file);
}
```
''',
}

os.makedirs('src/content/snippets', exist_ok=True)

for filename, content in snippets.items():
    path = f'src/content/snippets/{filename}'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Created: {path}')

print(f'\nDone! Created {len(snippets)} snippets.')
