---
title: "TypeScript Tips and Tricks"
description: "Level up your TypeScript skills with these practical tips, advanced types, and patterns for cleaner code."
pubDate: 2025-09-15
tags: ["TypeScript", "JavaScript"]
---

TypeScript's type system is incredibly powerful. Here are some tips and patterns that will help you write better, safer code.

## Utility Types

TypeScript provides several built-in utility types that are incredibly useful.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit sensitive fields
type PublicUser = Omit<User, 'password'>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;
```

## Template Literal Types

```typescript
type Color = 'red' | 'blue' | 'green';
type Size = 'sm' | 'md' | 'lg';
type ClassName = `${Size}-${Color}`; // "sm-red" | "sm-blue" | ...
```

## Discriminated Unions

Perfect for handling different states in your application.

```typescript
type LoadingState = { status: 'loading' };
type ErrorState = { status: 'error'; message: string };
type SuccessState<T> = { status: 'success'; data: T };

type AsyncState<T> = LoadingState | ErrorState | SuccessState<T>;

function handleState(state: AsyncState<User[]>) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'error':
      return `Error: ${state.message}`;
    case 'success':
      return state.data; // TypeScript knows data exists
  }
}
```

## The `satisfies` Operator

Ensures a value matches a type while preserving the narrowest possible type.

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
} satisfies Record<string, string | number>;

// config.apiUrl is still typed as string, not string | number
```

## Key Takeaways

- Use utility types to avoid repetitive type definitions
- Discriminated unions make state handling type-safe
- `satisfies` gives you the best of both worlds
- Use `const` assertions for literal types
- Generic constraints make functions more flexible yet type-safe
