# 📘 `map()` in **JavaScript**

*(Simple → Deep → Practical + Arrow Function)*

---

# 📑 Table of Contents

1. What is `map()`
2. Syntax
3. How it Works
4. Basic Examples
5. Arrow Function Usage
6. With Objects (Real Data)
7. Chaining (`map + filter`)
8. Common Mistakes
9. Real Website Use
10. Quick Revision Sheet

---

# 1️⃣ What is `map()`?

> `map()` array ke har element ko process karke **naya transformed array return karta hai**.

👉 Simple:

```text id="m1"
Same length → new values
```

---

# 2️⃣ Syntax

```javascript id="m2"
array.map(function(element){
  return newValue;
});
```

---

# 3️⃣ How it Works

```javascript id="m3"
let arr = [1,2,3];

let result = arr.map(num => num * 2);
```

Step:

```text id="m4"
1 → 2
2 → 4
3 → 6
```

Output

```text id="m5"
[2,4,6]
```

---

# 4️⃣ Basic Examples

---

## Example 1: Square numbers

```javascript id="m6"
let arr = [1,2,3,4];

let result = arr.map(num => num * num);

console.log(result);
```

Output

```text id="m7"
[1,4,9,16]
```

---

## Example 2: Add 10

```javascript id="m8"
let result = arr.map(num => num + 10);
```

---

# 5️⃣ Arrow Function Usage 🔥

```javascript id="m9"
arr.map(x => x * 2);
```

Shortest:

```javascript id="m10"
arr.map(x => x + 5);
```

---

# 6️⃣ With Objects (Very Important)

---

## Example: Extract Names

```javascript id="m11"
let users = [
 {name:"Ali"},
 {name:"Sara"}
];

let names = users.map(user => user.name);

console.log(names);
```

Output

```text id="m12"
["Ali","Sara"]
```

---

## Example: Modify Object Data

```javascript id="m13"
let products = [
 {name:"Phone", price:10000},
 {name:"Laptop", price:50000}
];

let updated = products.map(p => ({
 ...p,
 price: p.price + 1000
}));
```

---

# 7️⃣ Chaining (`map + filter`) 🔥

```javascript id="m14"
let arr = [1,2,3,4,5];

let result = arr
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);
```

Output

```text id="m15"
[20,40]
```

---

# 8️⃣ Common Mistakes ❌

---

### ❌ Forget return

```javascript id="m16"
arr.map(num => {
 num * 2; // ❌
});
```

---

### ❌ Expect original array change

```text id="m17"
map returns new array (original unchanged)
```

---

### ❌ Using map without using result

```javascript id="m18"
arr.map(num => num * 2); // result ignored
```

---

# 9️⃣ Real Website Use

---

## 1️⃣ UI Rendering

```javascript id="m19"
let products = ["Phone","Laptop"];

products.map(p => console.log("Showing:", p));
```

---

## 2️⃣ Price Update

```javascript id="m20"
let prices = [100,200,300];

let updated = prices.map(p => p + 50);
```

---

## 3️⃣ API Data Transform

```javascript id="m21"
let users = [
 {id:1, name:"Ali"},
 {id:2, name:"Sara"}
];

let ids = users.map(u => u.id);
```

---

Used in:

* Amazon
* Netflix
* YouTube

---

# 🔟 Quick Revision Sheet ⚡

```text id="m22"
map → transform data
same length array
returns new array
original unchanged
```

---

# ⭐ Golden Rule

```text id="m23"
map → change every element
```

---

# ⭐ One-Line Interview Answer

> `map()` is an array method that creates a new array by applying a transformation function to each element of the original array.

---

# ⚡ Mini Practice

```javascript id="m24"
let arr = [5,10,15];

// multiply each by 3
```

👉 Expected Output:

```text id="m25"
[15,30,45]
```