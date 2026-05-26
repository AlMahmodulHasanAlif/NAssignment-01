# Generics in TypeScript: Write Once, Work with Anything

## Introduction

Without generics, reusable functions often fall back on `any` — and with `any`, you lose all type safety. Generics let you write a function once and have it work with any data type while staying fully typed.

---

## The Problem Without Generics

```typescript
// Works, but you lose all type information
function getFirst(arr: any[]): any {
  return arr[0];
}

const first = getFirst([1, 2, 3]); // type: any — not helpful
```

---

## Generics to the Rescue

```typescript
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);       // type: number ✅
const str = getFirst(["a", "b", "c"]); // type: string ✅
```

TypeScript infers `T` from what you pass in — no manual type annotation needed.

---

## Generics with Constraints

You can constrain `T` so only certain types are accepted:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice" };
getProperty(user, "name"); // ✅ "Alice"
getProperty(user, "age");  // ❌ Compile error — "age" doesn't exist
```

---

## Generics in Interfaces

Generics work on interfaces too, making entire data structures reusable:

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type PostResponse = ApiResponse<Post>;
```

One interface, infinite shapes — all strictly typed.

---

## Conclusion

Generics are what make TypeScript truly scalable. They let you build reusable utilities, components, and data structures that are flexible on the outside but strictly typed on the inside — no `any` required.
