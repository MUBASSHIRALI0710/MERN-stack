# 📘 `for...in` vs `for...of` in **JavaScript**

*(Simple + Deep + Practical Use)*

---

# 📑 Table of Contents

1. What is `for...in`
2. What is `for...of`
3. Key Difference
4. `for...in` with Objects
5. `for...in` with Arrays (Important ⚠️)
6. `for...of` with Arrays
7. `for...of` with Strings
8. When to Use Which
9. Real Website Use
10. Interview Summary

---

# 1️⃣ What is `for...in`?

**Definition**

> `for...in` loop is used to iterate over **keys (property names)** of an object.

---

### Example (Object)

```javascript
let user = {
 name: "Ali",
 age: 25,
 city: "Delhi"
};

for(let key in user){
 console.log(key, user[key]);
}
```

Output

```
name Ali
age 25
city Delhi
```

👉 Here:

```id="fi1"
key = property name
user[key] = value
```

---

# 2️⃣ What is `for...of`?

**Definition**

> `for...of` loop is used to iterate over **values** of iterable data (arrays, strings, etc.)

---

### Example (Array)

```javascript
let arr = [10,20,30];

for(let value of arr){
 console.log(value);
}
```

Output

```
10
20
30
```

---

# 3️⃣ Key Difference (Most Important)

| Feature  | `for...in`        | `for...of`      |
| -------- | ----------------- | --------------- |
| Works on | Objects           | Arrays, Strings |
| Returns  | Keys              | Values          |
| Use case | Object properties | List data       |

---

# 4️⃣ `for...in` with Objects (Best Use)

```javascript
let car = {
 brand: "Toyota",
 model: "Camry"
};

for(let key in car){
 console.log(key);
}
```

Output

```
brand
model
```

---

# 5️⃣ ⚠️ `for...in` with Arrays (Not Recommended)

```javascript
let arr = [10,20,30];

for(let i in arr){
 console.log(i);
}
```

Output

```
0
1
2
```

👉 Problem:

```id="fi2"
Returns index, not values
```

---

# 6️⃣ `for...of` with Arrays (Best Use)

```javascript
let arr = [10,20,30];

for(let value of arr){
 console.log(value);
}
```

Output

```
10
20
30
```

---

# 7️⃣ `for...of` with Strings

```javascript
let str = "JS";

for(let char of str){
 console.log(char);
}
```

Output

```
J
S
```

---

# 8️⃣ When to Use Which

### Use `for...in` when:

```id="fi3"
Working with objects
Need keys
```

---

### Use `for...of` when:

```id="fi4"
Working with arrays
Working with strings
Need values
```

---

# 9️⃣ Real Website Use

---

## Example 1: Object Data (API Response)

```javascript
let user = {
 id: 1,
 name: "Mobasshir",
 email: "test@gmail.com"
};

for(let key in user){
 console.log(key, user[key]);
}
```

---

## Example 2: Array Data (Products List)

```javascript
let products = ["Laptop","Phone","Tablet"];

for(let product of products){
 console.log(product);
}
```

---

Used in platforms like:

* Amazon (product list)
* Netflix (movies list)
* YouTube (video list)

---

# 🔟 Interview Summary (Very Important)

```id="fi5"
for...in → keys (object ke liye)
for...of → values (array ke liye)
```

---

# ⭐ Golden Rule

```id="fi6"
Object → for...in
Array → for...of
```

---

# ⚡ Bonus (Advanced Tip)

```javascript
let arr = [10,20,30];

for(let [index,value] of arr.entries()){
 console.log(index,value);
}
```

Output

```
0 10
1 20
2 30
```

---

# ⭐ One-Line Answer

> `for...in` iterates over object keys, while `for...of` iterates over values of iterable objects like arrays and strings.

---

