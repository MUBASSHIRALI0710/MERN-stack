In JavaScript, **operators** are special symbols or keywords used to perform operations on operands (values or variables). They are the building blocks for expressions, assignments, comparisons, and logic.

Here’s a structured overview of the main operator categories in JavaScript:

---

## 1. Arithmetic Operators
Perform mathematical calculations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 2` → `7` |
| `-` | Subtraction | `5 - 2` → `3` |
| `*` | Multiplication | `5 * 2` → `10` |
| `/` | Division | `5 / 2` → `2.5` |
| `%` | Modulus (remainder) | `5 % 2` → `1` |
| `**` | Exponentiation | `5 ** 2` → `25` |
| `++` | Increment | `let x = 5; x++` → `6` |
| `--` | Decrement | `let x = 5; x--` → `4` |

---

## 2. Assignment Operators
Assign values to variables.

| Operator | Example | Equivalent to |
|----------|---------|----------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |

---

## 3. Comparison (Relational) Operators
Return a boolean (`true` / `false`).

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal value (type conversion allowed) | `5 == "5"` → `true` |
| `===` | Equal value and type (strict) | `5 === "5"` → `false` |
| `!=` | Not equal value | `5 != "5"` → `false` |
| `!==` | Not equal value or type | `5 !== "5"` → `true` |
| `>` | Greater than | `5 > 2` → `true` |
| `<` | Less than | `5 < 2` → `false` |
| `>=` | Greater than or equal | `5 >= 5` → `true` |
| `<=` | Less than or equal | `5 <= 2` → `false` |

---

## 4. Logical Operators
Combine or invert boolean values.

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND (true if both true) | `true && false` → `false` |
| `\|\|` | Logical OR (true if at least one true) | `true \|\| false` → `true` |
| `!` | Logical NOT (inverts) | `!true` → `false` |

**Short-circuit evaluation**:
- `false && anything` → `false`
- `true || anything` → `true`

---

## 5. Bitwise Operators
Operate on 32-bit binary representations.

| Operator | Name | Example (binary) |
|----------|------|------------------|
| `&` | AND | `5 & 1` → `1` |
| `\|` | OR | `5 \| 1` → `5` |
| `^` | XOR | `5 ^ 1` → `4` |
| `~` | NOT | `~5` → `-6` |
| `<<` | Left shift | `5 << 1` → `10` |
| `>>` | Right shift | `5 >> 1` → `2` |
| `>>>` | Zero-fill right shift | `-5 >>> 1` → `2147483645` |

---

## 6. String Operators
The `+` operator concatenates strings.

```js
let greeting = "Hello" + " " + "World"; // "Hello World"
```

Also `+=` works for strings.

---

## 7. Ternary (Conditional) Operator
Shorthand for `if...else`.

```js
condition ? exprIfTrue : exprIfFalse;

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
```

---

## 8. Type Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `typeof` | Returns type of operand | `typeof "hello"` → `"string"` |
| `instanceof` | Checks if object is instance of a class | `[] instanceof Array` → `true` |

---

## 9. Other Operators

- **Comma `,`** – evaluates each operand and returns the last:
  ```js
  let x = (5, 10); // x = 10
  ```

- **Optional chaining `?.`** – safely access nested properties:
  ```js
  let name = user?.address?.city;
  ```

- **Nullish coalescing `??`** – returns right side only if left is `null` or `undefined`:
  ```js
  let value = input ?? "default";
  ```

- **Delete `delete`** – removes a property from an object:
  ```js
  delete obj.property;
  ```

- **Void `void`** – evaluates expression and returns `undefined`:
  ```js
  void(0); // often used to get undefined safely
  ```

---

## Operator Precedence
Operators have a defined order of evaluation. For example, multiplication happens before addition:

```js
let result = 2 + 3 * 4; // 14, not 20
```

Use parentheses `()` to override precedence.

---

## Summary Table by Category

| Category | Operators |
|----------|-----------|
| Arithmetic | `+ - * / % ** ++ --` |
| Assignment | `= += -= *= /= %= **=` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& \|\| !` |
| Bitwise | `& \| ^ ~ << >> >>>` |
| Ternary | `? :` |
| Type | `typeof instanceof` |
| Other | `, ?. ?? delete void` |

