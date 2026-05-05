# 📘 Event Listener — (Beginner → Advanced → Interview Ready)

Using **JavaScript**

---

# 🧠 1️⃣ What is an Event Listener?

> Event Listener = **kisi event ko sunna + us par reaction dena**

```text id="el1"
User action → Event → JS function run
```

---

# ⚙️ 2️⃣ Syntax (Most Important)

```javascript id="el2"
element.addEventListener("event", handler, options);
```

---

## 🧩 Parts

```text id="el3"
event → "click", "input"
handler → function jo run hoga
options → capture, once, passive (advanced)
```

---

# 🔥 3️⃣ Example

```javascript id="el4"
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

# 🧠 4️⃣ Event Listener Flow (VERY IMPORTANT)

```text id="el5"
1. Listener add
2. Event trigger
3. Event object create
4. Event flow (capture → target → bubble)
5. Function run
6. Control (stop / prevent)
```

---

# 🔁 5️⃣ Event Types

---

## 🖱️ Mouse

```text id="el6"
click, dblclick, mouseover, mouseout
```

---

## ⌨️ Keyboard

```text id="el7"
keydown, keyup
```

---

## 📝 Form

```text id="el8"
submit, input, change
```

---

## 🌐 Window

```text id="el9"
load, scroll, resize
```

---

# 🧠 6️⃣ Event Object (VERY IMPORTANT)

```javascript id="el10"
btn.addEventListener("click", (e) => {
  console.log(e);
});
```

---

## Important Properties

```text id="el11"
e.target → actual clicked element
e.currentTarget → listener element
e.type → event name
e.clientX / Y → mouse position
e.key → keyboard key
```

---

# ⚡ 7️⃣ this vs event

```javascript id="el12"
btn.addEventListener("click", function(e){
  console.log(this);              // element
  console.log(e.currentTarget);   // same
});
```

---

## ❌ Arrow Function

```javascript id="el13"
btn.addEventListener("click", (e)=>{
  console.log(this); // ❌ global
});
```

---

# 🔁 8️⃣ Event Flow (INTERVIEW)

---

```text id="el14"
Capturing ↓
Target 🎯
Bubbling ↑ (default)
```

---

## Stop Bubbling

```javascript id="el15"
e.stopPropagation();
```

---

# 🚫 9️⃣ Prevent Default

```javascript id="el16"
e.preventDefault();
```

👉 Example:

```javascript id="el17"
form.addEventListener("submit", (e)=>{
  e.preventDefault();
});
```

---

# ⚡ 🔟 Event Delegation (VERY IMPORTANT)

```javascript id="el18"
ul.addEventListener("click", (e)=>{
  if(e.target.tagName === "LI"){
    console.log(e.target.textContent);
  }
});
```

---

# 🧠 1️⃣1️⃣ Remove Event Listener

```javascript id="el19"
function handler(){
  console.log("Click");
}

btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);
```

---

# ⚙️ 1️⃣2️⃣ Options (Advanced)

---

## 🔹 once

```javascript id="el20"
btn.addEventListener("click", handler, { once: true });
```

👉 sirf 1 baar chalega

---

## 🔹 capture

```javascript id="el21"
btn.addEventListener("click", handler, true);
```

👉 capturing phase

---

## 🔹 passive

```javascript id="el22"
btn.addEventListener("scroll", handler, { passive: true });
```

👉 performance boost

---

# 🔥 1️⃣3️⃣ Real Example

```javascript id="el23"
document.addEventListener("keydown", (e)=>{
  console.log("Key:", e.key);
});
```

---

# 🧠 1️⃣4️⃣ Real Website Use

```text id="el24"
✔ button click
✔ form submit
✔ typing detection
✔ dropdown menu
✔ drag & drop
```

---

Used in:

* Google
* Facebook
* Amazon

---

# ⚠️ 1️⃣5️⃣ Common Mistakes

```text id="el25"
❌ onclick instead of addEventListener
❌ removeEventListener me same function na dena
❌ bubbling samajh na hona
❌ arrow function me this use karna
```

---

# ⚡ 1️⃣6️⃣ Quick Revision (MEMORIZE)

```text id="el26"
addEventListener → best
event.target → click element
stopPropagation → stop bubble
preventDefault → stop default
delegation → parent control
```

---

# 🎯 One-Line Interview Answer

> Event listeners in JavaScript allow handling user interactions by attaching functions to events like click, input, or keydown.

---

# ⚡ Final Memory Trick

```text id="el27"
Listen → Trigger → Object → Flow → Run → Control
```
