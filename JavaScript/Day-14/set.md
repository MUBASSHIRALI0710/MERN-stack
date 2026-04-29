# 📘 `Set` in **JavaScript**

*(Simple → Deep → Practical Use)*

---

# 📑 Table of Contents

1. What is a `Set`
2. Why Use `Set`
3. Create a Set
4. Basic Methods (`add`, `delete`, `has`, `clear`)
5. Important Properties
6. Iterating a Set
7. Convert Set ↔ Array
8. Removing Duplicates (Most Important 🔥)
9. Real Website Use
10. WeakSet (Advanced)
11. Quick Revision Sheet

---

# 1️⃣ What is a `Set`?

> A **Set** is a collection of **unique values**. the "S" in new Set() must be capitalized. 


👉 Simple:

```text id="s1"
No duplicates allowed
```

---

# 2️⃣ Why Use `Set`?

Use Set when:

```text id="s2"
remove duplicates
store unique values
fast lookup
```

---

# 3️⃣ Create a Set

---

### Empty Set

```javascript id="s3"
let set = new Set();
```

---

### With Values

```javascript id="s4"
let set = new Set([1,2,3,3,4]);

console.log(set);
```

Output

```text id="s5"
Set {1,2,3,4}
```

👉 Duplicate automatically remove ho gaya

---

# 4️⃣ Basic Methods

---

## 1️⃣ `add()`

```javascript id="s6"
set.add(5);
set.add(5); // duplicate ignored
```

---

## 2️⃣ `delete()`

```javascript id="s7"
set.delete(2);
```

---

## 3️⃣ `has()`

```javascript id="s8"
console.log(set.has(3)); // true
```

---

## 4️⃣ `clear()`

```javascript id="s9"
set.clear();
```

---

# 5️⃣ Important Property

```javascript id="s10"
console.log(set.size);
```

👉 Length of set

---

# 6️⃣ Iterating a Set

---

## Using `for...of`

```javascript id="s11"
let set = new Set([10,20,30]);

for(let value of set){
 console.log(value);
}
```

---

## Using `forEach`

```javascript id="s12"
set.forEach(value => console.log(value));
```

---

# 7️⃣ Convert Set ↔ Array

---

## Set → Array

```javascript id="s13"
let arr = [...set];
```

---

## Array → Set

```javascript id="s14"
let set = new Set(arr);
```

---

# 8️⃣ Remove Duplicates 🔥 (Most Important)

```javascript id="s15"
let arr = [1,2,2,3,4,4];

let unique = [...new Set(arr)];

console.log(unique);
```

Output

```text id="s16"
[1,2,3,4]
```

👉 Interview favorite question 💯

---

# 9️⃣ Real Website Use

---

## 1️⃣ Unique Users

```javascript id="s17"
let users = ["Ali","Sara","Ali"];

let uniqueUsers = new Set(users);
```

---

## 2️⃣ Tags System

```javascript id="s18"
let tags = new Set();

tags.add("JS");
tags.add("JS"); // duplicate ignored
```

---

## 3️⃣ Fast Lookup

```javascript id="s19"
let blocked = new Set(["user1","user2"]);

if(blocked.has("user1")){
 console.log("Blocked");
}
```

---

Used in:

* Google
* Facebook
* Amazon

---

# 🔟 WeakSet (Advanced)

---

### Difference

```text id="s20"
Stores only objects
Weak references (garbage collected)
No iteration
```

---

Example

```javascript id="s21"
let ws = new WeakSet();

let obj = {};

ws.add(obj);
```

---

# ⚠️ Important Points

```text id="s22"
Set keeps unique values
Order is preserved
Works with any data type
```

---

# 🔟 Quick Revision Sheet ⚡

```text id="s23"
Set → unique values
add → insert
delete → remove
has → check
size → length
```

---

# ⭐ Golden Rule

```text id="s24"
Use Set when duplicates remove karna ho
```

---

# ⭐ One-Line Interview Answer

> A Set in JavaScript is a collection of unique values where duplicates are automatically removed.

---

# ⚡ Mini Practice

```javascript id="s25"
let arr = [1,1,2,3,3,4];

// remove duplicates using Set
```

👉 Expected Output:

```text id="s26"
[1,2,3,4]
```