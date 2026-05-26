# `Pick` and `Omit`: Stop Repeating Your TypeScript Interfaces

## Introduction

In TypeScript, it's tempting to copy an interface and tweak a few fields whenever you need a slightly different shape. But that creates duplicates you have to maintain forever. `Pick` and `Omit` fix this by letting you slice a master interface instead of rewriting it.

---

## The Problem

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}
```

You need a version without the password for public display, and a trimmed version for a dropdown. Without utility types, you write new interfaces by hand — and update them every time `User` changes.

---

## `Pick` — Keep Only What You Need

```typescript
// Just id and name for a dropdown
type UserPreview = Pick<User, "id" | "name">;
```

---

## `Omit` — Remove What You Don't Need

```typescript
// Strip sensitive field for public display
type UserProfile = Omit<User, "passwordHash">;

// No server-generated fields for a create form
type CreateUserDTO = Omit<User, "id" | "createdAt">;
```

---

## The DRY Payoff

Add `avatarUrl` to `User` — every derived type updates automatically. Zero manual edits, zero risk of missing a copy.

---

## Conclusion

Use `Pick` when you want a small subset. Use `Omit` when you want most of an interface minus a few fields. Both keep your types linked to a single source of truth, so your codebase stays clean and in sync.
