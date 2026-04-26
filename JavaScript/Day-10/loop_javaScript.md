# 📘 Loops in **JavaScript**

*(for, nested for, while, do…while, forEach | Basic → Advanced + Practical)*

---

# 📑 Table of Contents

1. What is a Loop
2. Why Loops are Used
3. `for` Loop
4. Nested `for` Loop
5. `while` Loop
6. `do...while` Loop
7. `forEach` Method
8. `break` and `continue`
9. Loop Comparison
10. Real Website Usage

---

# 1️⃣ What is a Loop?

**Definition**

> A loop is used to **repeat a block of code multiple times** until a condition becomes false.

👉 Simple words:
Ek hi code ko baar-baar likhne ki jagah **loop use karke repeat karte hain**.

---

# 2️⃣ Why Loops Are Used

Example without loop ❌

```javascript id="l1"
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

With loop ✅

```javascript id="l2"
for(let i = 1; i <= 3; i++){
 console.log("Hello");
}
```

---

# 3️⃣ `for` Loop

Sabse common loop.

### Syntax

```javascript id="l3"
for(initialization; condition; update){
  // code
}
```

---

### Example

```javascript id="l4"
for(let i = 1; i <= 5; i++){
 console.log(i);
}
```

Output

```id="l5"
1
2
3
4
5
```

---

### Explanation

```id="l6"
Initialization → start
Condition → kab tak chalega
Update → increment/decrement
```

---

# 4️⃣ Nested `for` Loop

Loop ke andar loop.

### Example

```javascript id="l7"
for(let i = 1; i <= 3; i++){
 for(let j = 1; j <= 3; j++){
  console.log(i, j);
 }
}
```

Output

```id="l8"
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

---

### Use Case

```id="l9"
pattern printing
matrix problems
2D arrays
```

---

# 5️⃣ `while` Loop

Condition pe based loop.

### Syntax

```javascript id="l10"
while(condition){
 // code
}
```

---

### Example

```javascript id="l11"
let i = 1;

while(i <= 5){
 console.log(i);
 i++;
}
```

Output

```id="l12"
1
2
3
4
5
```

---

### Important

```id="l13"
Condition false hone par loop stop
Update karna bhool gaye → infinite loop
```

---

# 6️⃣ `do...while` Loop

At least **1 baar run hota hai**.

### Syntax

```javascript id="l14"
do{
 // code
}while(condition);
```

---

### Example

```javascript id="l15"
let i = 1;

do{
 console.log(i);
 i++;
}while(i <= 5);
```

---

### Key Difference

```id="l16"
while → pehle check
do-while → pehle run
```

---

# 7️⃣ `forEach` Method

Array ke liye special loop.

### Syntax

```javascript id="l17"
array.forEach(function(element){
 // code
});
```

---

### Example

```javascript id="l18"
let nums = [10,20,30];

nums.forEach(function(num){
 console.log(num);
});
```

Output

```id="l19"
10
20
30
```

---

### Arrow Function Version

```javascript id="l20"
nums.forEach(num => console.log(num));
```

---

### Important

```id="l21"
only for arrays
break/continue nahi use hota
```

---

# 8️⃣ `break` and `continue`

### break → loop stop

```javascript id="l22"
for(let i = 1; i <= 5; i++){
 if(i == 3){
  break;
 }
 console.log(i);
}
```

Output

```id="l23"
1
2
```

---

### continue → skip iteration

```javascript id="l24"
for(let i = 1; i <= 5; i++){
 if(i == 3){
  continue;
 }
 console.log(i);
}
```

Output

```id="l25"
1
2
4
5
```

---

# 9️⃣ Loop Comparison

| Loop       | Use Case                   |
| ---------- | -------------------------- |
| `for`      | fixed number of iterations |
| `while`    | unknown iterations         |
| `do-while` | at least one execution     |
| `forEach`  | array iteration            |

---

# 🔟 Real Website Usage

Loops used everywhere in real applications.

---

## 1️⃣ Display List of Products

```javascript id="l26"
let products = ["Laptop","Phone","Tablet"];

for(let i=0;i<products.length;i++){
 console.log(products[i]);
}
```

---

## 2️⃣ Render UI (Very Common)

```javascript id="l27"
products.forEach(product => {
 console.log("Showing:", product);
});
```

---

## 3️⃣ Data Processing

```javascript id="l28"
let prices = [100,200,300];

let total = 0;

for(let i=0;i<prices.length;i++){
 total += prices[i];
}

console.log(total);
```

---

## 4️⃣ Real Platforms Use Loops

Used in:

* Amazon (product listing)
* Netflix (movies display)
* YouTube (video lists)

---

# ⭐ Golden Concepts

```id="l29"
Loops repeat code efficiently
```

```id="l30"
Always update loop variable to avoid infinite loop
```

```id="l31"
Use forEach for arrays in modern JavaScript
```

---

# ⭐ One-Line Interview Definition

> Loops in JavaScript are used to repeatedly execute a block of code until a specified condition is met.
