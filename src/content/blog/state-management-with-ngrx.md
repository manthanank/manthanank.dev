---
title: "State Management with NgRx"
description: "A comprehensive guide to implementing state management in Angular applications using NgRx store, effects, and selectors."
pubDate: 2025-10-05
tags: ["Angular", "NgRx", "State Management"]
---

As Angular applications grow in complexity, managing state becomes increasingly challenging. NgRx provides a predictable state container based on the Redux pattern.

## Core Concepts

NgRx follows a unidirectional data flow:

1. **Components** dispatch **Actions**
2. **Reducers** handle actions and return new **State**
3. **Selectors** derive data from the **Store**
4. **Effects** handle side effects (API calls, etc.)

## Setting Up the Store

```typescript
// actions
export const loadUsers = createAction('[Users] Load');
export const loadUsersSuccess = createAction(
  '[Users] Load Success',
  props<{ users: User[] }>()
);

// reducer
export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  }))
);

// selectors
export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);
```

## Effects for Side Effects

```typescript
@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.getAll().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}
```

## When to Use NgRx

- Shared state accessed by many components
- State that needs to be persisted or rehydrated
- Complex state transitions
- When you need time-travel debugging

For simpler cases, Angular Signals or services with BehaviorSubject might be sufficient.
