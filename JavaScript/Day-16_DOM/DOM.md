DOM: Document object Model

The DOM (Document Object Model) is a way to represent a web page so that programs (like JavaScript) can interact with it.

- A browser takes your HTML document and turns it into the DOM.

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

1: JavaScript can change all the HTML elements in the page
2: JavaScript can change all the HTML attributes in the page
3: JavaScript can change all the CSS styles in the page
4: JavaScript can remove existing HTML elements and attributes
5: JavaScript can add new HTML elements and attributes
6: JavaScript can react to all existing HTML events in the page
7: JavaScript can create new HTML events in the page

---

1: Accessing Element:

a: Accessing by ID:
Method: document.getElementById(id)
Description: Retrieves a single element with the specified id attribute.

## 🟢 a) By ID

```javascript
document.getElementById("id");
```

✔ Single element return karta hai
✔ Fastest method

---

b: Accessing by Class Name:
Method: document.getElementsByClassName(className)
Description: Returns a live HTMLCollection of all elements with the
specified class name.

## 🟢 b) By Class Name

```javascript
document.getElementsByClassName("class");
```

👉 Returns:

```text
HTMLCollection (live)
```

c: Accessing by CSS Selectors:
i: Single Element:
Method: document.querySelector(selector)
Description: Returns the first element matching the specified CSS
selector.

### ✔ Single Element

```javascript
document.querySelector("selector");
```

👉 First match return karta hai

---

    ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the
        specified CSS selector.

### ✔ Multiple Elements

```javascript
document.querySelectorAll("selector");
```

👉 Returns:

```text
NodeList (static)
```

d: Accessing by Tag Name
Method: document.getElementsByTagName(tagName)
Description: Returns a live HTMLCollection of all elements with the
specified tag name (e.g., div, p, a).

```javascript
document.getElementsByTagName("div");
```

👉 Returns:

```text
HTMLCollection (live)
```

e: Accessing Using Relationships
i: Parent Node:
Method: element.parentNode or element.parentElement
Description: Access the immediate parent of an element.

## 🔹 Parent

```javascript
element.parentNode;
element.parentElement;
```

ii: Child Nodes:
Method: element.childNodes (includes text nodes) or element.children
(only element nodes)
Description: Access all child nodes of an element.

---

## 🔹 Children

```javascript
element.childNodes; // text + elements
element.children; // only elements
```

iii: First and Last Child:
Methods: element.firstChild, element.lastChild,
element.firstElementChild, element.lastElementChild

---

## 🔹 First & Last

````javascript
element.firstChild
element.lastChild

element.firstElementChild
element.lastElementChild```

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling,
   element.previousElementSibling
---

## 🔹 Siblings

```javascript
element.nextSibling
element.previousSibling

element.nextElementSibling
element.previousElementSibling```



1.innerHTML

```javascript
element.innerHTML = "<h1>Hello</h1>";
````

✔ HTML parse karta hai
✔ tags ko render karta hai

2.textContent
```javascript
element.textContent = "Hello";
```

✔ plain text
✔ hidden text bhi include
✔ fastest

3.innerText
```javascript
element.innerText = "Hello";
```

✔ only visible text
✔ CSS respect karta hai



## 🔥 Difference Table

| Property    | HTML support | Hidden text | Speed  |
| ----------- | ------------ | ----------- | ------ |
| innerHTML   | ✔            | ✔           | medium |
| textContent | ❌           | ✔           | fast   |
| innerText   | ❌           | ❌          | slow   |

---

## 🔹 HTMLCollection vs NodeList

```text
HTMLCollection → live (auto update)
NodeList → static (fixed)
```

---

## 🔹 Element vs Node

```text
Node → sab kuch (text, comment, element)
Element → sirf HTML tags
```

---

# 🚀 Real Use

```text
✔ button click change
✔ form validation
✔ dynamic content load
✔ API data display
✔ UI update
```

---


# ⚡ Quick Revision (MEMORIZE)

```text
DOM = HTML ka object model

getElementById → single
querySelector → best
querySelectorAll → multiple

children → elements only
childNodes → all nodes

innerHTML → HTML
textContent → fast text
innerText → visible text
```

---

# 🎯 One-Line Interview Answer

> DOM is a tree-like structure that represents HTML as objects, allowing JavaScript to dynamically manipulate the webpage.

---

# ⚡ Final Memory Trick

```text
Select → Traverse → Change → Update U