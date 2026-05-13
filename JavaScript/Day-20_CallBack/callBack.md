# Callbacks in JavaScript - Complete Detailed Notes

## What is a Callback?

A **callback** is a function that is passed as an argument to another function, and it gets executed at a later time (usually after some operation completes).

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Ali", sayGoodbye);
// Output:
// Hello, Ali
// Goodbye!
```

---

## Why Use Callbacks?

1. **Asynchronous Operations** - Execute code after a task completes
2. **Event Handling** - Respond to user interactions
3. **Data Processing** - Process data after fetching it
4. **Timing Control** - Control when code executes

---

## Real-World Examples

### 1. **setTimeout (Delayed Execution)**
```javascript
function delayedGreeting() {
  console.log("This will print after 2 seconds");
}

setTimeout(delayedGreeting, 2000); // 2000ms = 2 seconds
```

With arrow function:
```javascript
setTimeout(() => {
  console.log("Delayed message");
}, 1000);
```

### 2. **Array Methods with Callbacks**

**forEach:**
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10
```

**map:**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

**filter:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

### 3. **Event Listeners (DOM)**
```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

### 4. **Fetching Data (API Call)**
```javascript
function fetchUserData(userId, callback) {
  console.log("Fetching data for user: " + userId);
  
  setTimeout(() => {
    const userData = { id: userId, name: "Ali", email: "ali@example.com" };
    callback(userData);
  }, 2000);
}

fetchUserData(1, (user) => {
  console.log("User data received:", user);
});
```

---

## Callback Parameters & Return Values

### Passing Parameters to Callbacks
```javascript
function processData(data, callback) {
  const result = data * 2;
  callback(result); // Pass result to callback
}

processData(5, (result) => {
  console.log("Result:", result); // Output: Result: 10
});
```

### Callback Returns Values
```javascript
function calculate(a, b, callback) {
  const sum = a + b;
  return callback(sum); // Callback returns a value
}

const result = calculate(5, 3, (sum) => {
  return sum * 2;
});

console.log(result); // Output: 16 (because (5+3)*2 = 16)
```

---

## Error Handling in Callbacks

### Traditional Error-First Callback Pattern
```javascript
function readFile(filename, callback) {
  setTimeout(() => {
    if (filename === "") {
      callback(new Error("Filename is empty"), null);
    } else {
      callback(null, "File contents here");
    }
  }, 1000);
}

readFile("data.txt", (error, data) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Data:", data);
  }
});
```

### Try-Catch with Callbacks
```javascript
function riskyOperation(callback) {
  try {
    const result = JSON.parse('{"invalid json}'); // Will throw error
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

riskyOperation((error, data) => {
  if (error) {
    console.log("Error occurred:", error.message);
  } else {
    console.log("Success:", data);
  }
});
```

---

## Callback Hell (Pyramid of Doom) ⚠️

This is the **main problem** with callbacks - when you nest many callbacks, code becomes unreadable:

```javascript
function step1(callback) {
  console.log("Step 1");
  setTimeout(() => callback(), 1000);
}

function step2(callback) {
  console.log("Step 2");
  setTimeout(() => callback(), 1000);
}

function step3(callback) {
  console.log("Step 3");
  setTimeout(() => callback(), 1000);
}

// Callback Hell!
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
```

**This is hard to read and maintain!**

---

## Solutions to Callback Hell

### Solution 1: Named Functions Instead of Anonymous
```javascript
function handleStep1() {
  step1(handleStep2);
}

function handleStep2() {
  step2(handleStep3);
}

function handleStep3() {
  step3(() => {
    console.log("All steps completed");
  });
}

handleStep1();
```

### Solution 2: Use Promises (Better)
```javascript
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("All steps completed"));
```

### Solution 3: Use Async/Await (Best)
```javascript
async function executeSteps() {
  await step1();
  await step2();
  await step3();
  console.log("All steps completed");
}

executeSteps();
```

---

## Advanced Callback Patterns

### 1. **Higher-Order Functions**
```javascript
function multiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
```

### 2. **Callback Composition**
```javascript
function compose(f, g) {
  return (x) => f(g(x));
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const addThenMultiply = compose(multiplyByThree, addTwo);
console.log(addThenMultiply(5)); // Output: 21 ((5+2)*3)
```

### 3. **Debouncing with Callbacks**
```javascript
function debounce(callback, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

handleSearch("JavaScript");
handleSearch("Callbacks"); // Previous one cancelled, only this executes
```

---

## Callback Types

|      Type            |     Purpose           |         Example                     |
|----------------------|-----------------------|-------------------------------------|
| **Success Callback** | Executed on success   | `then(data => ...)`                 |
| **Error Callback**   | Executed on error     | `catch(error => ...)`               |
| **Event Callback**   | Triggered by events   | `addEventListener(event, callback)` |
| **Timing Callback**  | Executed after delay  | `setTimeout(callback, time)`        |

---

## Key Takeaways

✅ **Callbacks are:**
- Functions passed as arguments
- Executed later/asynchronously
- Used for event handling, delays, and data processing

❌ **Problems:**
- Callback hell (nested callbacks)
- Hard to read and maintain
- Difficult error handling
- Hard to debug

✨ **Modern Solution:**
- Use **Promises** and **Async/Await** instead
- They're cleaner and easier to understand

---

## Quick Practice Questions

1. What's the output?
```javascript
function test(callback) {
  console.log("A");
  callback();
  console.log("C");
}

test(() => console.log("B"));
```
**Answer:** A, B, C

2. Create a callback that doubles a number:
```javascript
function processNumber(num, callback) {
  callback(num * 2);
}

processNumber(5, (result) => console.log(result)); // 10
```