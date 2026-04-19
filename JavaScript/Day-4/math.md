## 📘 **Math Object in JavaScript**

---

# 1️⃣ What is the Math Object?

**Definition:**
The **Math object** in JavaScript is a **built-in object used to perform mathematical calculations** like rounding numbers, generating random numbers, square roots, logarithms, etc.

👉 Important Point

* **Math object is static**
* Isko use karne ke liye **object create nahi karna padta**

❌ Wrong

```javascript
let m = new Math();
```

✅ Correct

```javascript
Math.PI
Math.sqrt(16)
```

---

# 2️⃣ Syntax of Math

### Property Syntax

```javascript
Math.property
```

Example

```javascript
Math.PI
```

### Method Syntax

```javascript
Math.method(number)
```

Example

```javascript
Math.sqrt(25)
```

---

# 3️⃣ Math Properties (Constants)

JavaScript me **8 important mathematical constants** hote hain.

| Property       | Meaning           | Example Output |
| -------------- | ----------------- | -------------- |
| `Math.E`       | Euler's Number    | 2.718          |
| `Math.PI`      | Value of PI       | 3.14159        |
| `Math.SQRT2`   | √2                | 1.414          |
| `Math.SQRT1_2` | √(1/2)            | 0.707          |
| `Math.LN2`     | Natural log of 2  | 0.693          |
| `Math.LN10`    | Natural log of 10 | 2.302          |
| `Math.LOG2E`   | log₂E             | 1.442          |
| `Math.LOG10E`  | log₁₀E            | 0.434          |

### Example

```javascript
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
```

---

# 4️⃣ Number Rounding Methods

JavaScript me number ko integer me convert karne ke **4 important methods** hote hain.

| Method          | Description              | Example |
| --------------- | ------------------------ | ------- |
| `Math.round(x)` | nearest integer          | 4.5 → 5 |
| `Math.ceil(x)`  | upar round karta hai     | 4.1 → 5 |
| `Math.floor(x)` | neeche round karta hai   | 4.9 → 4 |
| `Math.trunc(x)` | decimal remove karta hai | 4.9 → 4 |

---

### Example Code

```javascript
console.log(Math.round(4.5));  
console.log(Math.ceil(4.1));  
console.log(Math.floor(4.9)); 
console.log(Math.trunc(4.9));
```

Output

```
5
5
4
4
```

---

# 5️⃣ Math.random()

`Math.random()` **random number generate karta hai** between:

```
0 (inclusive)  → 1 (exclusive)
```

Example outputs

```
0.12
0.87
0.003
```

❗ **1 kabhi nahi aata**

---

### Example

```javascript
console.log(Math.random());
```

---

# 6️⃣ Random Number Between 0 and 10

```javascript
Math.random() * 10
```

Example outputs

```
0.5
4.3
9.99
```

Range

```
0 ≤ number < 10
```

---

# 7️⃣ Random Integer Between 0–9

```javascript
Math.floor(Math.random() * 10)
```

Explanation

| Step            | Meaning  |
| --------------- | -------- |
| `Math.random()` | 0 → 1    |
| `* 10`          | 0 → 9.99 |
| `Math.floor()`  | 0 → 9    |

Final Range

```
[0,9]
```

---

# 8️⃣ Important Math Methods

| Method            | Work           |
| ----------------- | -------------- |
| `Math.sqrt(x)`    | square root    |
| `Math.pow(x,y)`   | power          |
| `Math.abs(x)`     | absolute value |
| `Math.max(a,b,c)` | maximum        |
| `Math.min(a,b,c)` | minimum        |

---

### Example

```javascript
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.max(10,20,5));
console.log(Math.min(10,20,5));
console.log(Math.abs(-9));
```

Output

```
4
8
20
5
9
```

---

# 9️⃣ Summary

✔ Math object mathematical operations ke liye use hota hai
✔ Object create karne ki zarurat nahi
✔ Properties → constants
✔ Methods → calculations

Examples

```javascript
Math.PI
Math.floor(4.8)
Math.random()
Math.sqrt(25)
```

---

✅ **Interview Definition**

> The Math object in JavaScript is a built-in static object that provides mathematical constants and methods to perform mathematical operations.

