# 📘 Functions in **JavaScript**

*(Basic → Advanced | Simple + Practical + Real Website Use)*

---

# 📑 Table of Contents

1. What is a Function
2. Why Functions are Used
3. Function Syntax
4. Function Parameters & Arguments
5. Return Statement
6. Types of Functions
7. Function Expression
8. Arrow Functions
9. Anonymous Functions
10. Callback Functions
11. Function Scope
12. Closures
13. Functions as Objects
14. Real Website Use of Functions

---

# 1️⃣ What is a Function?

A **function** is a **block of reusable code that performs a specific task**.

Instead of writing the same code again and again, we place it inside a function and call it when needed.

Example:

```javascript id="f1"
function greet(){
  console.log("Hello");
}

greet();
```

Output

```
Hello
```

---

# 2️⃣ Why Functions Are Used

Functions help in:

```id="f2"
Code reuse
Better organization
Modular programming
Reducing repetition
```

Example without function

```javascript id="f3"
console.log("Welcome Ali");
console.log("Welcome Sara");
console.log("Welcome Ahmed");
```

Better with function

```javascript id="f4"
function welcome(name){
 console.log("Welcome " + name);
}

welcome("Ali");
welcome("Sara");
welcome("Ahmed");
```

---

# 3️⃣ Function Syntax

Basic structure:

```javascript id="f5"
function functionName(parameters){
   // code
}
```

Example

```javascript id="f6"
function add(a,b){
  console.log(a + b);
}

add(5,3);
```

Output

```
8
```

---

# 4️⃣ Parameters vs Arguments

| Term      | Meaning                  |
| --------- | ------------------------ |
| Parameter | variable inside function |
| Argument  | value passed during call |

Example

```javascript id="f7"
function add(a,b){   // parameters
 return a + b;
}

add(5,3);            // arguments
```

---

# 5️⃣ Return Statement

`return` sends value back from the function.

Example

```javascript id="f8"
function multiply(a,b){
 return a*b;
}

let result = multiply(4,5);
console.log(result);
```

Output

```
20
```

Without return, function output usable nahi hota.

---

# 6️⃣ Types of Functions

Common types:

```id="f9"
Function Declaration
Function Expression
Arrow Function
Anonymous Function
Callback Function
```

---

# 7️⃣ Function Declaration

Most common method.

```javascript id="f10"
function greet(){
 console.log("Hello");
}
```

Call

```javascript id="f11"
greet();
```

---

# 8️⃣ Function Expression

Function stored inside variable.

```javascript id="f12"
let greet = function(){
 console.log("Hello");
};

greet();
```

---

# 9️⃣ Arrow Functions (Modern JavaScript)

Introduced in ES6.

Shorter syntax.

```javascript id="f13"
let add = (a,b) => {
 return a+b;
};
```

Short version

```javascript id="f14"
let add = (a,b) => a+b;
```

Example

```javascript id="f15"
console.log(add(5,4));
```

Output

```
9
```
also write function when single parameter :

let cube = a => a*a*a ;
console.log(cube(5));
---

# 🔟 Anonymous Functions

Functions without name.

```javascript id="f16"
setTimeout(function(){
 console.log("Hello");
},1000);
```

Anonymous functions often used in **callbacks**.

---

# 1️⃣1️⃣ Callback Functions

A function passed as argument to another function.

Example

```javascript id="f17"
function greet(name,callback){
 console.log("Hello " + name);
 callback();
}

function sayBye(){
 console.log("Bye");
}

greet("Ali",sayBye);
```

Output

```
Hello Ali
Bye
```

Callbacks used heavily in asynchronous programming.

---

# 1️⃣2️⃣ Function Scope

Scope determines where variables are accessible.

Types:

```id="f18"
Global Scope
Function Scope
Block Scope
```

Example

```javascript id="f19"
function test(){
 let x = 10;
}

console.log(x); 
```

Error because `x` exists only inside function.

---

# 1️⃣3️⃣ Closures

A closure occurs when a function **remembers variables from its outer scope even after the outer function finishes execution**.

Example

```javascript id="f20"
function outer(){
 let count = 0;

 return function(){
   count++;
   console.log(count);
 }
}

let counter = outer();

counter();
counter();
counter();
```

Output

```
1
2
3
```

Closures are used in:

```id="f21"
data privacy
counters
module patterns
```

---

# 1️⃣4️⃣ Functions are Objects

In **JavaScript**, functions are **first-class objects**.

This means:

```id="f22"
functions can be stored in variables
functions can be passed as arguments
functions can return other functions
```

Example

```javascript id="f23"
function add(a,b){
 return a+b;
}

let fn = add;

console.log(fn(2,3));
```

Output

```
5
```

---

# 1️⃣5️⃣ Real Website Use of Functions

Functions are used everywhere in web applications.

Examples:

### 1️⃣ Button Click Events

```javascript id="f24"
function submitForm(){
 console.log("Form submitted");
}
```

---

### 2️⃣ API Calls

```javascript id="f25"
function fetchData(){
 fetch("/api/users")
}
```

---

### 3️⃣ Data Processing

```javascript id="f26"
function calculateTotal(price, tax){
 return price + tax;
}
```

---

Large web platforms such as

* Google
* Netflix
* Amazon

use functions to build:

```id="f27"
user authentication
data processing
UI rendering
event handling
API communication
```

---

# ⭐ Golden Concepts

```id="f28"
Functions are reusable blocks of code
```

```id="f29"
Functions in JavaScript are first-class objects
```

```id="f30"
Functions power asynchronous programming
```

---

# ⭐ One-Line Interview Definition

> A function in JavaScript is a reusable block of code designed to perform a specific task and can be invoked whenever needed.
