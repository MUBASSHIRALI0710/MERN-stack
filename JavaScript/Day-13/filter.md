# 📘 `filter()` in **JavaScript**

*(Simple → Deep → Practical + Arrow Function)*

---

# 📑 Table of Contents

1. What is `filter()`
2. Syntax
3. How it Works
4. Basic Examples
5. Arrow Function Usage
6. With Objects (Real Data)
7. Chaining with `map()`
8. Common Mistakes
9. Real Website Use
10. Quick Revision Sheet

---

# 1️⃣ What is `filter()`?

> `filter()` array ke elements me se **sirf unko select karta hai jo condition pass karein**.

👉 Simple:

```text id="f1"
Condition true → keep
Condition false → remove
```

---

# 2️⃣ Syntax

```javascript id="f2"
array.filter(function(element){
  return condition;
});
```

---

# 3️⃣ How it Works

```javascript id="f3"
let arr = [1,2,3,4];

let result = arr.filter(num => num > 2);
```

Step:

```text id="f4"
1 → false ❌
2 → false ❌
3 → true ✔️
4 → true ✔️
```

Output

```text id="f5"
[3,4]
```

---

# 4️⃣ Basic Examples

---

## Example 1: Even Numbers

```javascript id="f6"
let arr = [1,2,3,4,5];

let even = arr.filter(num => num % 2 === 0);

console.log(even);
```

Output

```text id="f7"
[2,4]
```

---

## Example 2: Greater than 10

```javascript id="f8"
let arr = [5,12,8,20];

let result = arr.filter(num => num > 10);
```

---

# 5️⃣ Arrow Function Usage 🔥

```javascript id="f9"
arr.filter(x => x > 5);
```

Shortest form:

```javascript id="f10"
arr.filter(x => x % 2 === 0);
```

---

# 6️⃣ With Objects (Very Important)

---

## Example: Active Users

```javascript id="f11"
let users = [
 {name:"Ali", active:true},
 {name:"Sara", active:false}
];

let activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

Output

```text id="f12"
[{name:"Ali", active:true}]
```

---

## Example: Price Filter

```javascript id="f13"
let products = [
 {name:"Phone", price:10000},
 {name:"Laptop", price:50000}
];

let expensive = products.filter(p => p.price > 20000);
```

---

# 7️⃣ Chaining with `map()` 🔥

```javascript id="f14"
let arr = [1,2,3,4,5];

let result = arr
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);
```

Output

```text id="f15"
[20,40]
```

---

# 8️⃣ Common Mistakes ❌

---

### ❌ Forget return

```javascript id="f16"
arr.filter(num => {
 num > 2; // ❌
});
```

---

### ❌ Using filter for transformation

```javascript id="f17"
arr.filter(num => num * 2); // wrong
```

---

### ❌ Expecting original array change

```text id="f18"
filter returns new array (original same)
```

---

# 9️⃣ Real Website Use

---

## 1️⃣ Search Feature

```javascript id="f19"
let products = ["Phone","Laptop","Tablet"];

let result = products.filter(p => p.includes("Phone"));
```

---

## 2️⃣ Available Products

```javascript id="f20"
let products = [
 {name:"Phone", stock:true},
 {name:"TV", stock:false}
];

let available = products.filter(p => p.stock);
```

---

## 3️⃣ User Filtering

```javascript id="f21"
let users = [
 {name:"Ali", age:25},
 {name:"Sara", age:17}
];

let adults = users.filter(u => u.age >= 18);
```

---

Used in:

* Amazon
* Netflix
* YouTube

---

# 🔟 Quick Revision Sheet ⚡

```text id="f22"
filter → select elements
condition true → keep
condition false → remove
returns new array
```

---

# ⭐ Golden Rule

```text id="f23"
Use filter when you want to SELECT data
```

---

# ⭐ One-Line Interview Answer

> `filter()` is an array method that returns a new array containing only the elements that satisfy a given condition.

---

# ⚡ Mini Practice

```javascript id="f24"
let arr = [10,15,20,25];

// get numbers > 15
```

👉 Expected Output:

```text id="f25"
[20,25]
```
