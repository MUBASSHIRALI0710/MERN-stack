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