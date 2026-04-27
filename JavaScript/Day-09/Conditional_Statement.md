# 📘 Conditional Statements in **JavaScript**

*(Basic → Advanced | Simple + Practical)*

---

# 📑 Table of Contents

1. What is a Conditional Statement
2. Why We Use Conditions
3. `if` Statement
4. `if...else`
5. `else if` Ladder
6. Nested Conditions
7. Comparison Operators
8. Logical Operators
9. Ternary Operator
10. `switch` Statement
11. Truthy & Falsy Values
12. Real Website Usage

---

# 1️⃣ What is a Conditional Statement?

**Definition**

> Conditional statements allow your program to **make decisions based on conditions**.

👉 Simple words:
Code decide karta hai **kya run hoga based on condition (true/false)**.

---

# 2️⃣ Why We Use Conditions

Real life example:

```id="c1"
If it rains → take umbrella
If marks > 90 → grade A
If user logged in → show dashboard
```

Programming me bhi same logic use hota hai.

---

# 3️⃣ `if` Statement

Basic syntax:

```javascript id="c2"
if(condition){
  // code runs if condition is true
}
```

Example:

```javascript id="c3"
let age = 20;

if(age >= 18){
 console.log("You can vote");
}
```

Output

```id="c4"
You can vote
```

---

# 4️⃣ `if...else`

When you want two outcomes.

```javascript id="c5"
let age = 16;

if(age >= 18){
 console.log("Adult");
}else{
 console.log("Minor");
}
```

Output

```id="c6"
Minor
```

---

# 5️⃣ `else if` Ladder

When multiple conditions exist.

```javascript id="c7"
let marks = 75;

if(marks >= 90){
 console.log("Grade A");
}else if(marks >= 70){
 console.log("Grade B");
}else if(marks >= 50){
 console.log("Grade C");
}else{
 console.log("Fail");
}
```

Output

```id="c8"
Grade B
```

---

# 6️⃣ Nested Conditions

Condition ke andar condition.

```javascript id="c9"
let age = 20;
let hasID = true;

if(age >= 18){
 if(hasID){
   console.log("Entry allowed");
 }
}
```

---

# 7️⃣ Comparison Operators

| Operator | Meaning          |
| -------- | ---------------- |
| `==`     | equal (loose)    |
| `===`    | equal (strict)   |
| `!=`     | not equal        |
| `!==`    | strict not equal |
| `>`      | greater than     |
| `<`      | less than        |
| `>=`     | greater or equal |
| `<=`     | less or equal    |

Example

```javascript id="c10"
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

---

# 8️⃣ Logical Operators

Used to combine conditions.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

Example

```javascript id="c11"
let age = 20;
let hasID = true;

if(age >= 18 && hasID){
 console.log("Allowed");
}
```

---

# 9️⃣ Ternary Operator

Short version of if-else.

```javascript id="c12"
condition ? trueCode : falseCode
```

Example

```javascript id="c13"
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

# 🔟 `switch` Statement

Used when checking multiple values.

```javascript id="c14"
let day = 2;

switch(day){
 case 1:
  console.log("Monday");
  break;
 case 2:
  console.log("Tuesday");
  break;
 default:
  console.log("Invalid");
}
```

---

# 1️⃣1️⃣ Truthy & Falsy Values

JavaScript me sab values **true ya false treat hoti hain**.

Falsy values:

```id="c15"
false
0
""
null
undefined
NaN
```

Example

```javascript id="c16"
if(0){
 console.log("Hello");
}else{
 console.log("Falsy value");
}
```

Output

```id="c17"
Falsy value
```

---

# 1️⃣2️⃣ Real Website Usage

Conditional statements used everywhere.

Examples:

```id="c18"
Login system
Form validation
User roles
Payment checks
UI display logic
```

---

### Example 1: Login Check

```javascript id="c19"
let isLoggedIn = true;

if(isLoggedIn){
 console.log("Show dashboard");
}else{
 console.log("Show login page");
}
```

---

### Example 2: Form Validation

```javascript id="c20"
let password = "12345";

if(password.length < 6){
 console.log("Password too short");
}
```

---

### Example 3: E-commerce Website

```javascript id="c21"
let stock = 0;

if(stock > 0){
 console.log("Available");
}else{
 console.log("Out of stock");
}
```

Used in platforms like:

* Amazon
* Flipkart
* Netflix

---

# ⭐ Golden Concepts

```id="c22"
Conditions always return true or false
```

```id="c23"
Use === instead of == in most cases
```

```id="c24"
Ternary operator makes code shorter
```

---

# ⭐ One-Line Interview Definition

> Conditional statements in JavaScript are used to execute different blocks of code based on whether a condition is true or false.
