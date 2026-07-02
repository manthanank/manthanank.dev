---
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
