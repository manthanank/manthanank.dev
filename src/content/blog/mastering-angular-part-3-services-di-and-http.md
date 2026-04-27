---
title: "Mastering Angular, Part 3: Services, DI & HTTP"
description: "Learn how Angular's Dependency Injection system works, how to build reusable services, and how to make HTTP requests with best practices for error handling and loading states."
pubDate: 2026-04-01
tags: ["Angular", "Services", "HTTP", "Dependency Injection", "TypeScript"]
series: "Mastering Angular"
---

In Part 2, we mastered Signals. Now in the final part of the **Mastering Angular** series, we'll cover **Services, Dependency Injection (DI), and HTTP** — the backbone of any real-world Angular application.

## What Is a Service?

A service is a TypeScript class that encapsulates logic and data that doesn't belong in a single component. Services are the right place for:

- HTTP calls and API communication
- Shared state between components
- Business logic and data transformation
- Caching and memoization

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes it a singleton available app-wide
})
export class UserService {
  private users = signal<User[]>([]);

  getUsers() {
    return this.users.asReadonly();
  }
}
```

The `@Injectable()` decorator marks the class as a service. `providedIn: 'root'` means Angular creates one single instance for the entire app (a singleton).

## Dependency Injection

Angular's DI system automatically creates and provides services to components that declare they need them. You never manually call `new UserService()`.

The modern way to inject a service is with the `inject()` function:

```typescript
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `...`
})
export class UserListComponent {
  // Angular creates or reuses the UserService singleton automatically
  private userService = inject(UserService);

  users = this.userService.getUsers();
}
```

Alternatively, you can inject via the constructor:

```typescript
constructor(private userService: UserService) {}
```

Both approaches are valid — `inject()` is preferred in modern Angular because it works in class fields and outside constructors.

## Making HTTP Requests

Angular ships with `HttpClient` — a powerful, typed HTTP client built on top of RxJS Observables.

First, provide it in your `app.config.ts`:

```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

Now inject and use it in a service:

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
  }

  createPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/posts/${id}`);
  }
}
```

## Bridging HTTP with Signals

`HttpClient` returns Observables, but our components now use Signals. The `toSignal()` helper bridges the gap beautifully:

```typescript
import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  template: `
    @if (isLoading()) {
      <p>Loading posts...</p>
    } @else if (error()) {
      <p class="error">{{ error() }}</p>
    } @else {
      @for (post of posts(); track post.id) {
        <article>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </article>
      }
    }
  `
})
export class PostsComponent {
  private postsService = inject(PostsService);

  posts = toSignal(this.postsService.getPosts(), { initialValue: [] });
  isLoading = computed(() => this.posts().length === 0);
  error = signal<string | null>(null);
}
```

## Robust Error Handling

Never let HTTP errors crash your UI silently. Use RxJS `catchError` in your service:

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts').pipe(
      catchError((err) => {
        // Log, transform, then re-throw
        console.error('Failed to fetch posts:', err);
        return throwError(() => new Error('Could not load posts. Please try again.'));
      })
    );
  }
}
```

## HTTP Interceptors: Cross-Cutting Concerns

Interceptors let you transparently transform every request or response — perfect for adding auth headers, logging, or showing a global loading spinner.

```typescript
import { HttpInterceptorFn } from '@angular/common/http';

// Functional interceptor (modern approach)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }

  return next(req);
};
```

Register it in `app.config.ts`:

```typescript
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
  ]
};
```

## A Complete Data Service Pattern

Here is the pattern I use in every production Angular project — a service that exposes reactive state backed by HTTP, with loading and error states:

```typescript
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  // Private writable state
  private _products = signal<Product[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  // Public readonly state
  readonly products = this._products.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly count = computed(() => this._products().length);

  load() {
    this._loading.set(true);
    this._error.set(null);

    this.http.get<Product[]>('/api/products').pipe(
      catchError((err) => {
        this._error.set(err.message || 'Failed to load products');
        this._loading.set(false);
        return EMPTY;
      })
    ).subscribe((products) => {
      this._products.set(products);
      this._loading.set(false);
    });
  }
}
```

Components stay clean and dumb — they just read the signals:

```typescript
@Component({ ... })
export class ProductsPageComponent {
  store = inject(ProductsService);

  ngOnInit() {
    this.store.load();
  }
}
```

## Series Wrap-Up

Congratulations — you've completed the **Mastering Angular** series! Here's a quick recap:

- **Part 1** — Components, templates, data binding, and lifecycle hooks
- **Part 2** — Signals, computed values, effects, and bridging with RxJS
- **Part 3** — Services, DI, HTTP, interceptors, and production-ready patterns

These three areas form the core of 90% of all Angular development. Master them, and you can build anything.
