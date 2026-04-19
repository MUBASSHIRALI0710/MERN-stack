## 🧠 Memory Visualization of Arrays in **JavaScript**

*(Stack vs Heap – easy mental model)*

Programming languages generally use two main memory areas:


STACK  → small, fast, stores references & primitive values
HEAP   → large memory area, stores objects and arrays


---

# 1️⃣ Primitive Variables (Stack)

Example:


let a = 10;
let b = a;


Memory Visualization


STACK
-----
a → 10
b → 10


Explanation:

* `a` me **10 store hai**
* `b = a` → value copy ho gayi
* dono **independent** hain

Example:


b = 20
console.log(a)


Output


10


---

# 2️⃣ Array Memory in JavaScript

Example:


let arr = [10,20,30];


Memory visualization


STACK
-----
arr  →  reference (address)

HEAP
----
[10,20,30]


Explanation:

* **Stack me array nahi store hota**
* Stack me **sirf reference (pointer)** hota hai
* Actual array **Heap memory me hota hai**

---

# 3️⃣ Visual Diagram


STACK                HEAP
-----                -----------------
arr  ------------->  [10,20,30]


Arrow = reference

---

# 4️⃣ Important Concept: Reference Copy

Example:


let arr1 = [1,2,3];
let arr2 = arr1;


Memory Visualization


STACK
-----
arr1  ----\
           ---->  HEAP → [1,2,3]
arr2  ----/


Both variables **same array ko point karte hain**

---

# 5️⃣ Change Example


arr2.push(4);
console.log(arr1);


Output


[1,2,3,4]


Why?

Because both variables point to **same heap object**.

---

# 6️⃣ How to Actually Copy an Array

Correct way:


let arr1 = [1,2,3];

let arr2 = [...arr1];


Memory Visualization


STACK
-----
arr1 -----> HEAP → [1,2,3]

arr2 -----> HEAP → [1,2,3]


Now **two separate arrays**.

---

# 7️⃣ Why JavaScript Arrays are Flexible

Because arrays are **objects in heap memory**.

That is why you can do:


push
pop
shift
resize


without declaring size.

---

# 8️⃣ Compare With Other Languages

### In **C++**

Array memory:


STACK
-----
arr → [10,20,30]


Memory is **continuous and fixed size**.

Example

cpp
int arr[3] = {10,20,30};


You **cannot resize it**.

---

### In **Python**

Python list internally:


STACK
-----
list_ref → pointer

HEAP
----
array of references


Similar to JavaScript but implementation different.

---

# 9️⃣ Important Rule


Primitive → stack copy
Objects/Arrays → reference copy


Example:


let x = 5;
let y = x;


Independent.

But


let a = [1,2];
let b = a;


Shared reference.

---

# 🔟 Golden Visualization


PRIMITIVE

STACK
-----
x → 5
y → 5


ARRAY

STACK
-----
arr → address

HEAP
----
[10,20,30]


---

# ⭐ One Line Concept (Interview Level)

> In JavaScript, arrays are objects stored in heap memory, while the variable holding the array stores only a reference in stack memory.

