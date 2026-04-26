# 📘 Property Descriptors: `writable`, `enumerable`, `configurable` in **JavaScript**

*(Deep, practical, interview-ready)*

---

# 📑 Table of Contents

1. What are Property Descriptors
2. Why they matter
3. How to read descriptors
4. `writable` (can value change?)
5. `enumerable` (shows up in loops?)
6. `configurable` (can the property be redefined/deleted?)
7. Using `Object.defineProperty`
8. Using `Object.defineProperties`
9. Data vs Accessor descriptors (get/set)
10. Combinations & gotchas
11. Real website use-cases
12. Quick cheat sheet

---

# 1️⃣ What are Property Descriptors?

Every property on an object isn’t just `key: value`.
Internally it also has **flags (metadata)**:

```js
{
  value: ...,
  writable: true/false,
  enumerable: true/false,
  configurable: true/false
}
```

These flags control **how that property behaves**.

---

# 2️⃣ Why They Matter

They let you:

```txt
🔒 lock a value (read-only)
🙈 hide a property from loops
🛑 prevent deletion or redefinition
```

This is heavily used in **libraries, frameworks, and APIs**.

---

# 3️⃣ How to Check Descriptors

```javascript
const user = { name: "Ali" };

console.log(Object.getOwnPropertyDescriptor(user, "name"));
```

Output (typical):

```js
{
  value: "Ali",
  writable: true,
  enumerable: true,
  configurable: true
}
```

---

# 4️⃣ `writable`

### Meaning

> Can the value be changed?

---

### Example

```javascript
const user = {};

Object.defineProperty(user, "name", {
  value: "Ali",
  writable: false
});

user.name = "Sara"; // ❌ ignored (or error in strict mode)

console.log(user.name);
```

Output:

```txt
Ali
```

---

### Key Point

```txt
writable: false → value cannot change
```

---

# 5️⃣ `enumerable`

### Meaning

> Will this property appear in loops like `for...in` or `Object.keys()`?

---

### Example

```javascript
const user = {};

Object.defineProperty(user, "secret", {
  value: "12345",
  enumerable: false
});

for (let key in user) {
  console.log(key);
}
```

Output:

```txt
(no output)
```

---

### But direct access still works:

```javascript
console.log(user.secret); // 12345
```

---

### Key Point

```txt
enumerable: false → hidden from loops
```

---

# 6️⃣ `configurable`

### Meaning

> Can this property be deleted or modified (descriptor changed)?

---

### Example

```javascript
const user = {};

Object.defineProperty(user, "id", {
  value: 101,
  configurable: false
});

delete user.id; // ❌ not deleted

console.log(user.id);
```

Output:

```txt
101
```

---

### Also cannot redefine

```javascript
Object.defineProperty(user, "id", {
  writable: true
}); // ❌ Error
```

---

### Key Point

```txt
configurable: false → cannot delete or reconfigure
```

---

# 7️⃣ `Object.defineProperty`

Used to create or modify property with full control.

```javascript
const user = {};

Object.defineProperty(user, "name", {
  value: "Ali",
  writable: false,
  enumerable: true,
  configurable: false
});
```

---

# 8️⃣ `Object.defineProperties`

Multiple properties ek saath define karna:

```javascript
const user = {};

Object.defineProperties(user, {
  name: {
    value: "Ali",
    writable: true
  },
  age: {
    value: 25,
    enumerable: false
  }
});
```

---

# 9️⃣ Data vs Accessor Descriptors

### Data Descriptor

```txt
value
writable
```

---

### Accessor Descriptor

Uses `get` and `set` instead of `value`

```javascript
const user = {
  firstName: "Ali",
  lastName: "Khan"
};

Object.defineProperty(user, "fullName", {
  get() {
    return this.firstName + " " + this.lastName;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
});

console.log(user.fullName);
```

---

# 🔟 Important Combinations & Rules

### Default behavior

```javascript
Object.defineProperty(obj, "key", { value: 10 });
```

Default becomes:

```txt
writable: false
enumerable: false
configurable: false
```

⚠️ This surprises many developers.

---

### Rule

```txt
configurable: false → permanent lock
```

Once false:

```txt
❌ cannot make it true again
```

---

# 1️⃣1️⃣ Real Website Usage

Used in:

### 1️⃣ Hide internal data

```javascript
Object.defineProperty(user, "_token", {
  value: "secret123",
  enumerable: false
});
```

---

### 2️⃣ Protect critical values

```javascript
Object.defineProperty(config, "API_KEY", {
  value: "abc123",
  writable: false
});
```

---

### 3️⃣ Framework internals

Libraries like:

* React
* Angular

use descriptors to:

```txt
control state
hide internal properties
prevent unwanted mutation
```

---

# 1️⃣2️⃣ Cheat Sheet

```txt
writable → can change value?
enumerable → visible in loops?
configurable → can delete/redefine?
```

---

### Quick Table

| Property     | Controls                |
| ------------ | ----------------------- |
| writable     | value change            |
| enumerable   | visibility in loops     |
| configurable | deletion & redefinition |

---

# ⭐ Golden Concepts

```txt
All object properties have hidden descriptors
```

```txt
Object.defineProperty gives full control over objects
```

```txt
configurable: false is permanent
```

---

# ⭐ One-Line Interview Answer

> Property descriptors in JavaScript (`writable`, `enumerable`, `configurable`) control how object properties behave in terms of mutability, visibility, and configurability.
