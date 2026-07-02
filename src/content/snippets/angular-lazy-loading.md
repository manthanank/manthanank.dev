---
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
