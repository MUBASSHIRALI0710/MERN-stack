# 📘 `reduce()` in **JavaScript**

*(Deep + Simple + Practical — Master this = strong JS)*

---

# 📑 Table of Contents

1. What is `reduce()`
2. Why it is Powerful
3. Basic Syntax
4. How it Works (step-by-step)
5. Sum Example
6. With Initial Value
7. Real Examples
8. `map + filter` vs `reduce`
9. Common Mistakes
10. Real Website Usage
11. Quick Revision Sheet

---

# 1️⃣ What is `reduce()`?

> `reduce()` array ke sab elements ko process karke **single value me convert karta hai**.

👉 Simple:

```text
array → reduce → single result
```

---

# 2️⃣ Why it is Powerful

Because it can do:

```text
sum
count
max/min
object creation
grouping
complex data transformation
```

👉 Basically:

```text
map + filter + loop = reduce
```

---

# 3️⃣ Basic Syntax

```javascript
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

---

### Terms samjho:

```text
accumulator → result store karta hai
currentValue → current element
initialValue → starting value
```

---

# 4️⃣ How it Works (Step-by-Step)

Example:

```javascript
let arr = [1,2,3];
```

```javascript
arr.reduce((acc, curr) => acc + curr, 0);
```

Step flow:

```text
Step 1: acc=0, curr=1 → 1
Step 2: acc=1, curr=2 → 3
Step 3: acc=3, curr=3 → 6
```

Final output:

```text
6
```

---

# 5️⃣ Example 1: Sum of Array

```javascript
let arr = [10,20,30];

let sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum);
```

Output:

```text
60
```

---

# 6️⃣ Example 2: Without Initial Value

```javascript
let arr = [10,20,30];

let sum = arr.reduce((acc, num) => acc + num);
```

👉 Internally:

```text
acc = first element (10)
curr = 20
```

⚠️ Best practice:

```text
Always give initial value
```

---

# 7️⃣ Real Examples 🔥

---

## 1️⃣ Find Maximum

```javascript
let arr = [5,10,2,20];

let max = arr.reduce((acc, num) => {
  return num > acc ? num : acc;
}, arr[0]);

console.log(max);
```

---

## 2️⃣ Count Elements

```javascript
let arr = ["a","b","a","c","b"];

let count = arr.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(count);
```

Output:

```text
{a:2, b:2, c:1}
```

---

## 3️⃣ Flatten Array

```javascript
let arr = [[1,2],[3,4]];

let flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
```

---

## 4️⃣ Total Price (Real Scenario)

```javascript
let cart = [
 {item:"Phone", price:10000},
 {item:"Laptop", price:50000}
];

let total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
```

---

# 8️⃣ `map + filter` vs `reduce`

---

### Using map + filter

```javascript
let arr = [1,2,3,4,5];

let result = arr
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);
```

---

### Same using reduce

```javascript
let result = arr.reduce((acc, n) => {
  if(n % 2 === 0){
    acc.push(n * 10);
  }
  return acc;
}, []);
```

---

# 9️⃣ Common Mistakes ❌

---

### ❌ Forget return

```javascript
arr.reduce((acc, num) => {
 acc + num; // ❌
}, 0);
```

---

### ❌ Not using initial value

```javascript
arr.reduce((acc, num) => acc + num);
```

---

### ❌ Confusion between acc & curr

👉 Always remember:

```text
acc = result
curr = current item
```

---

# 🔟 Real Website Usage

Used in:

---

## 1️⃣ Cart Total

```javascript
cart.reduce((total, item) => total + item.price, 0);
```

---

## 2️⃣ Analytics (Count users)

```javascript
users.reduce((acc, user) => {
 acc[user.country] = (acc[user.country] || 0) + 1;
 return acc;
}, {});
```

---

## 3️⃣ Data transformation

```javascript
products.reduce((acc, p) => {
 acc[p.id] = p;
 return acc;
}, {});
```

---

Used in big platforms:

* Amazon
* Netflix
* Google

---

# 🔟 Quick Revision Sheet ⚡

```text
reduce → array → single value
acc → result
curr → current element
initialValue → starting point
```

---

# ⭐ Golden Concept

```text
reduce can replace map + filter + loop
```

---

# ⭐ One-Line Interview Answer

> `reduce()` is an array method that processes all elements and reduces them to a single value using an accumulator function.

---

# ⚡ Mini Practice

```javascript
let arr = [1,2,3,4,5];

// find sum of even numbers using reduce
```

👉 Expected Output:

```text
6
```
