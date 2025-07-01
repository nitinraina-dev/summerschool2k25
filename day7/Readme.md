# JavaScript Complete Guide
*A comprehensive guide covering strict mode, eval(), this keyword, and DOM manipulation*

---

## Table of Contents
1. [JavaScript Strict Mode](#javascript-strict-mode)
2. [The eval() Function](#the-eval-function)
3. [Understanding 'this' in JavaScript](#understanding-this-in-javascript)
4. [DOM Manipulation Fundamentals](#dom-manipulation-fundamentals)
5. [Advanced DOM Topics](#advanced-dom-topics)
6. [Event Handling](#event-handling)

---

## JavaScript Strict Mode

### What is Strict Mode?

In JavaScript, **strict mode** is a way to opt in to a restricted version of the language. It was introduced in ECMAScript 5 (ES5) and helps you write **safer and more predictable code** by catching common mistakes and making silent errors throw exceptions.

### How to Enable Strict Mode

```js
"use strict"; // At the top of your script or function

// Example:
"use strict";
x = 10; // ❌ ReferenceError: x is not defined
```

Without `"use strict"`, this would silently create a global variable.

### Comparison: Normal Mode vs Strict Mode

| Feature / Behavior                      | Normal Mode                          | Strict Mode                 |
| --------------------------------------- | ------------------------------------ | --------------------------- |
| Implicit Global Variables               | Allowed                              | ❌ ReferenceError            |
| Assigning to Read-only/global objects   | Silently fails                       | ❌ TypeError                 |
| Duplicates in function parameters       | Allowed                              | ❌ SyntaxError               |
| `this` in Functions (non-method)        | `this` is global (`window`)          | `this` is `undefined`       |
| Deleting variables/functions            | Allowed (but does nothing)           | ❌ SyntaxError               |
| Using reserved keywords (`let`, `eval`) | Allowed                              | ❌ SyntaxError               |
| Octal literals (e.g., `0123`)           | Allowed                              | ❌ SyntaxError               |
| Secures `eval()` usage                  | `eval` can create variables globally | Limited to local scope only |

### Example Comparison

#### Normal Mode
```js
x = 5; // No error, creates global variable
console.log(x);
```

#### Strict Mode
```js
"use strict";
x = 5; // ReferenceError: x is not defined
```

### Benefits of Using Strict Mode

* Avoid bugs caused by undeclared variables
* Makes code easier to debug
* Prepares your code for future versions of JS
* Disallows dangerous or confusing features

---

## The eval() Function

### What is eval()?

The `eval()` function takes a string and **executes it as JavaScript code**.

### Syntax

```js
eval(string);
```

### Basic Example

```js
let x = 10;
let y = 20;
let result = eval("x + y"); // Evaluates the string as JS code
console.log(result); // 30
```

### How eval() Works

* It **parses** the string.
* Then **executes** it as if you wrote that code normally.

### Why is eval() Dangerous?

1. **Security risk** – Executing user-provided code can allow code injection.
2. **Slow performance** – It prevents JavaScript engines from optimizing the code.
3. **Hard to debug** – Dynamic code is harder to read and trace.

### What to Avoid

```js
let userCode = "alert('Hacked!')";
eval(userCode); // 🚨 BAD! Never do this with user input.
```

### Safer Alternatives

| Task                      | Don't Use `eval` | Use Instead             |
| ------------------------- | ---------------- | ----------------------- |
| Convert JSON string       | `eval(jsonStr)`  | ✅ `JSON.parse(jsonStr)` |
| Compute expressions       | `eval("x + y")`  | ✅ Write logic directly  |
| Dynamic function creation | `eval`           | ✅ `new Function(...)`   |

### eval() in Strict Mode

* `eval` has **its own scope**.
* Variables defined inside `eval` won't leak outside.

```js
"use strict";
eval("let z = 100;");
console.log(typeof z); // ReferenceError: z is not defined
```

### Summary

| Feature     | `eval()`                                             |
| ----------- | ---------------------------------------------------- |
| Purpose     | Execute JS code from a string                        |
| Safe?       | ❌ No, unless you fully control the string            |
| Performance | ❌ Slower than regular code                           |
| Alternative | ✅ Use safer, structured methods (e.g., `JSON.parse`) |

---

## Understanding 'this' in JavaScript

### What is 'this'?

`this` is a **contextual keyword** that refers to the **object** from which a function was **called**, not necessarily where it was **defined**.

Think of `this` as the identity of "who is calling me."

### Execution Context and 'this'

Every time code is run in JavaScript, it's run inside an **execution context**. Each context has a `this` value.

Execution context types:
* Global execution context
* Function execution context
* Eval execution context (rare)
* Module execution context (in ES Modules)

### How 'this' Works in Different Contexts

#### 1. Global Context (Non-strict Mode)

```js
console.log(this); // window (in browser)
```

* In browsers: `this === window`
* In Node.js: `this === {}`

> In global context, `this` refers to the **global object**.

#### 2. Function Context

##### Non-strict Mode
```js
function show() {
  console.log(this);
}
show(); // window (in browser)
```

##### Strict Mode
```js
"use strict";
function show() {
  console.log(this);
}
show(); // undefined
```

* In strict mode, `this` inside a function that's not a method will be `undefined`.

#### 3. Object Method Context

```js
const person = {
  name: "Nitin",
  greet: function () {
    console.log(this.name);
  },
};
person.greet(); // "Nitin"
```

* `this` refers to the object (`person`) because `person` is calling the function.

#### 4. Arrow Functions

Arrow functions do **not bind their own `this`**. They inherit it from the **parent lexical scope**.

```js
const person = {
  name: "Nitin",
  greet: () => {
    console.log(this.name);
  },
};
person.greet(); // undefined (in browser, this refers to `window`)
```

Compare with:

```js
const person = {
  name: "Nitin",
  greet() {
    const inner = () => {
      console.log(this.name); // correct, because arrow inherits from greet()
    };
    inner();
  },
};
person.greet(); // "Nitin"
```

#### 5. Class Context

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
const user = new User("Nitin");
user.sayHi(); // "Nitin"
```

`this` refers to the **instance** of the class.

### Explicit Binding

You can change the value of `this` manually using:

#### call()
```js
function sayHello() {
  console.log(this.name);
}
const user = { name: "Nitin" };
sayHello.call(user); // "Nitin"
```

#### apply()
Same as `call`, but accepts an array of arguments.

```js
sayHello.apply(user); // "Nitin"
```

#### bind()
Returns a new function with `this` permanently bound.

```js
const boundFunc = sayHello.bind(user);
boundFunc(); // "Nitin"
```

### Event Handlers

```js
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // the button element
});
```

But with arrow function:

```js
btn.addEventListener("click", () => {
  console.log(this); // `this` from outer scope, not the button
});
```

### 'this' in setTimeout / setInterval

```js
const obj = {
  value: 42,
  print() {
    setTimeout(function () {
      console.log(this.value);
    }, 1000);
  },
};
obj.print(); // undefined, because `this` refers to global object

// Fix using arrow function
const obj2 = {
  value: 42,
  print() {
    setTimeout(() => {
      console.log(this.value); // Works
    }, 1000);
  },
};
obj2.print(); // 42
```

### 'this' Inside eval()

#### In Non-Strict Mode
```js
let name = "Nitin";
console.log(this); // window (in browser)

eval("console.log(this.name);"); // 👉 outputs "Nitin"
```

✅ Here:
* `this` inside `eval()` refers to the **global object** (`window` in browsers).
* So `this.name` is the same as `window.name`.

#### In Strict Mode
```js
"use strict";

let name = "Nitin";
eval("console.log(this);"); // 👉 outputs `undefined`
```

❌ In strict mode:
* `this` inside `eval()` is **not automatically bound to the global object**.
* It becomes `undefined`, just like in strict mode functions.

#### Inside a Function

##### Non-Strict Mode:
```js
function test() {
  eval("console.log(this);");
}
test(); // 👉 outputs `window`
```

##### Strict Mode:
```js
"use strict";
function test() {
  eval("console.log(this);");
}
test(); // 👉 outputs `undefined`
```

### Summary

| Context             | `this` inside `eval()`        |
| ------------------- | ----------------------------- |
| Global scope        | Global object (`window`)      |
| Inside function     | Same as the function's `this` |
| With `"use strict"` | `this` becomes `undefined`    |

### Complete 'this' Summary Table

| Context                         | `this` refers to              |
| ------------------------------- | ----------------------------- |
| Global (browser)                | `window`                      |
| Function (non-strict)           | `window` (or global object)   |
| Function (strict)               | `undefined`                   |
| Method (obj.func())             | Calling object                |
| Arrow function                  | Lexical scope's `this`        |
| `call()` / `apply()` / `bind()` | Object passed as argument     |
| Event handler (normal fn)       | Target element (e.g., button) |
| Class method                    | Instance of the class         |

### Pro Tip to Master 'this'

Always ask:
> Who is calling this function?

Not "where was it defined?", but "who is calling it?"

---

## DOM Manipulation Fundamentals

### What is the DOM?

The **DOM (Document Object Model)** is a tree-like structure representing your webpage in memory. Every HTML tag becomes an object you can access and manipulate using JavaScript.

### Core DOM Properties

#### innerText, textContent, innerHTML

| Property        | Description                                          | Notes |
|----------------|------------------------------------------------------|-------|
| `innerText`     | Gets/sets the **visible text** inside an element     | Ignores hidden text |
| `textContent`   | Gets/sets **all text**, including hidden ones        | Faster performance |
| `innerHTML`     | Gets/sets the **HTML content** (including tags)      | Useful for inserting HTML |

#### Difference Example

```html
<p id="demo" style="display: none">Hi there!</p>
```

```js
console.log(demo.innerText);   // Returns "", since text is hidden
console.log(demo.textContent); // Returns "Hi there!"
```

### Working with Attributes

#### setAttribute and getAttribute

These are used to **add, modify, or read attributes** of HTML elements.

```html
<img id="logo" src="logo1.png" alt="Old Logo">
```

```js
const logo = document.getElementById("logo");

logo.setAttribute("src", "logo2.png"); // Change image
logo.setAttribute("alt", "New Logo");  // Change alt text

console.log(logo.getAttribute("alt")); // "New Logo"
```

> You can also use `element.src`, `element.alt`, etc., but `setAttribute` is more flexible.

### Changing Styles Directly

Every HTML element has a `style` property.

```js
const box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "yellow";
box.style.border = "2px solid black";
box.style.fontSize = "24px";
```

> Use camelCase in JS for CSS properties:  
> `background-color` becomes `backgroundColor`, `font-size` becomes `fontSize`.


## 📚 **Types of DOM Selectors**

### 🔹 1. `getElementById()`
Selects a **single element** by its unique `id`.

```html
<p id="greeting">Hello!</p>
```

```js
let para = document.getElementById("greeting");
```

✅ Returns: **Element** (or `null` if not found)  
⚠️ Only works with **IDs**

---

### 🔹 2. `getElementsByClassName()`
Selects **all elements** with a specific class name.

```html
<p class="note">Note 1</p>
<p class="note">Note 2</p>
```

```js
let notes = document.getElementsByClassName("note");
```

✅ Returns: **HTMLCollection** (like an array but not exactly)

```js
Array.from(notes).forEach(note => console.log(note.textContent));
```

---

### 🔹 3. `getElementsByTagName()`
Selects **all elements** with a specific tag name.

```html
<h2>Heading 1</h2>
<h2>Heading 2</h2>
```

```js
let headings = document.getElementsByTagName("h2");
```

✅ Returns: **HTMLCollection**

---

### 🔹 4. `querySelector()`
Selects the **first matching element** using **CSS-style selectors**.

```html
<p class="intro">Hey!</p>
```

```js
let para = document.querySelector(".intro"); // .class
let div = document.querySelector("#main");   // #id
let heading = document.querySelector("h1");  // tag
```

✅ Returns: **Element** or `null`

---

### 🔹 5. `querySelectorAll()`
Selects **all matching elements** using CSS selectors.

```html
<ul>
  <li class="item">One</li>
  <li class="item">Two</li>
</ul>
```

```js
let items = document.querySelectorAll(".item");
```

✅ Returns: **NodeList** (can use `.forEach()` directly!)

```js
items.forEach(item => console.log(item.textContent));
```

---

## 🧠 Bonus: **CSS Selectors You Can Use with `querySelector` / `querySelectorAll`**

| Selector | Example | Selects |
|----------|---------|---------|
| `.class` | `.btn` | All elements with class="btn" |
| `#id` | `#header` | Element with id="header" |
| `tag` | `p`, `div`, `h1` | Elements by tag |
| `tag.class` | `button.primary` | `<button class="primary">` |
| `parent > child` | `div > p` | Direct child `<p>` inside `<div>` |
| `element[attr]` | `input[type="text"]` | Inputs of type text |
| `:nth-child(n)` | `li:nth-child(2)` | Second `<li>` |
| `:first-child` / `:last-child` | `ul li:first-child` | First item in a list |

---

## 🧪 Practice Exercise

```html
<body>
  <div id="container">
    <h1 class="title">Welcome</h1>
    <p class="info">Info 1</p>
    <p class="info">Info 2</p>
    <ul>
      <li class="item">Apple</li>
      <li class="item">Banana</li>
    </ul>
    <input type="text" name="username">
  </div>

  <script>
    // By ID
    const box = document.getElementById("container");

    // By class
    const infos = document.getElementsByClassName("info");

    // By tag
    const paragraphs = document.getElementsByTagName("p");

    // querySelector
    const title = document.querySelector(".title");

    // querySelectorAll
    const items = document.querySelectorAll(".item");

    // By attribute
    const input = document.querySelector('input[name="username"]');

    console.log(box, infos, paragraphs, title, items, input);
  </script>
</body>
```

---



Let’s keep the learning fun! Here's what I’ve got lined up for you:

---

## 🧠 **Mini Quiz: DOM Selectors**

Answer these in your head or note them down. I’ll give you the answers at the end 👇

### **1. Which selector returns a single element by ID?**
a) `getElementsByClassName()`  
b) `getElementById()`  
c) `querySelectorAll()`  
d) `getElementsByTagName()`

---

### **2. What does `document.querySelector(".card")` select?**
a) The first element with tag `<card>`  
b) All elements with class "card"  
c) The first element with class "card"  
d) An element with id "card"

---

### **3. How would you select all `<li>` elements?**
a) `getElementById("li")`  
b) `querySelectorAll("li")`  
c) `getElementsByTagName("#li")`  
d) `querySelector("li")`

---

### **4. What does this return?**

```js
document.querySelectorAll("p");
```

a) One paragraph element  
b) An array of elements  
c) A NodeList of all paragraph elements  
d) HTMLCollection of one `<p>`

---

### **5. Which is correct to select input with name="email"?**
a) `querySelector("input#email")`  
b) `querySelector("[name='email']")`  
c) `querySelector(".email")`  
d) `querySelectorAll("input.name=email")`

---

### ✅ **Answers**
1. **b**
2. **c**
3. **b**
4. **c**
5. **b**

---

## 🧩 **Mini Project: Build a DOM Selector Playground**

### 🛠️ Goal:
Click buttons to highlight different elements using JavaScript selectors.

### 🧪 HTML + JS Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Selector Playground</title>
  <style>
    .highlight {
      background-color: yellow;
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <h1 id="mainTitle">Hello DOM</h1>
  <p class="text">Paragraph 1</p>
  <p class="text">Paragraph 2</p>
  <button onclick="highlightById()">Highlight by ID</button>
  <button onclick="highlightByClass()">Highlight by Class</button>
  <button onclick="highlightAllP()">Highlight All &lt;p&gt;</button>
  <button onclick="clearHighlights()">Clear</button>

  <script>
    function highlightById() {
      const title = document.getElementById("mainTitle");
      title.classList.add("highlight");
    }

    function highlightByClass() {
      const texts = document.getElementsByClassName("text");
      Array.from(texts).forEach(el => el.classList.add("highlight"));
    }

    function highlightAllP() {
      const paras = document.querySelectorAll("p");
      paras.forEach(p => p.classList.add("highlight"));
    }

    function clearHighlights() {
      const all = document.querySelectorAll(".highlight");
      all.forEach(el => el.classList.remove("highlight"));
    }
  </script>
</body>
</html>
```




---

## 🔄 **Array vs HTMLCollection**

| Feature | **Array** | **HTMLCollection** |
|--------|-----------|--------------------|
| 🔢 Type | Real JavaScript array (`[]`) | Array-like object |
| 🧰 Methods | Full array methods: `.map()`, `.forEach()`, `.filter()`, etc. | Limited or no array methods |
| 🔁 Looping | Can use `for`, `for...of`, `.forEach()` directly | Can use `for`, `for...of`, but needs `Array.from()` for methods like `.forEach()` |
| 🆕 Updating | Static – doesn't update when DOM changes | **Live** – updates automatically when DOM changes |
| 📦 Returned By | `[]` literal, `Array()` constructor | `getElementsByClassName()`, `getElementsByTagName()` |
| ✅ Is iterable? | ✅ Yes | ✅ Yes (in modern browsers) |

---

### 🧪 Example

```html
<p class="note">One</p>
<p class="note">Two</p>
```

```js
let notesHTML = document.getElementsByClassName("note"); // HTMLCollection
let notesArray = Array.from(notesHTML); // Now it's a real array

console.log(notesHTML.forEach); // ❌ undefined in old browsers
console.log(notesArray.forEach); // ✅ works!
```

---

### 🧠 Bonus: What about `NodeList`?

- `querySelectorAll()` returns a `NodeList`
- A `NodeList` is **NOT live**, but you **can use `.forEach()`** on it directly (in modern browsers)

```js
let items = document.querySelectorAll(".note");
items.forEach(el => console.log(el.textContent)); // ✅ works
```

---

## 📝 Summary:
- **HTMLCollection** = *live*, array-like, limited features  
- **Array** = full-featured, not live  
- Use `Array.from()` or `[...collection]` to convert HTMLCollection to array

---



 Let's see a **live example** of how an `HTMLCollection` updates automatically when the DOM changes — while a static array does **not**.

---

### 🧪 Example: Live `HTMLCollection` vs Static `Array`

```html
<!DOCTYPE html>
<html>
<body>

  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <button onclick="addItem()">Add Item</button>
  <button onclick="checkCollections()">Check Collections</button>

  <script>
    // LIVE HTMLCollection
    const liveList = document.getElementsByTagName("li");

    // STATIC array copy
    const staticArray = Array.from(liveList);

    function addItem() {
      const ul = document.getElementById("list");
      const newItem = document.createElement("li");
      newItem.textContent = "New Item";
      ul.appendChild(newItem);
    }

    function checkCollections() {
      console.log("LIVE HTMLCollection count:", liveList.length);
      console.log("STATIC Array count:", staticArray.length);
    }
  </script>

</body>
</html>
```

---

### 🔍 What happens?

1. Click **"Add Item"** → new `<li>` gets added to the `<ul>`.
2. Click **"Check Collections"**:
   - `liveList.length` keeps increasing 👀
   - `staticArray.length` stays the same ❌

---

### 🎯 Why it matters:
This behavior makes `HTMLCollection` useful when you want to **track real-time DOM updates**, like form elements or dynamic lists.


### Complete Example - Basic DOM Manipulation

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Day 1 - DOM Manipulation</title>
  </head>
  <body>
    <h1 id="heading">Welcome!</h1>
    <a id="myLink" href="https://google.com" target="_blank">Visit Google</a>
    <br><br>
    <button id="changeBtn">Click to Change</button>

    <script>
      const heading = document.getElementById("heading");
      const link = document.getElementById("myLink");
      const button = document.getElementById("changeBtn");

      button.addEventListener("click", () => {
        // Change text
        heading.innerText = "Thanks for clicking!";
        
        // Change style
        heading.style.color = "green";
        heading.style.fontFamily = "Arial";
        heading.style.textTransform = "uppercase";

        // Change link
        link.setAttribute("href", "https://openai.com");
        link.innerText = "Visit OpenAI";
        link.style.color = "blue";
      });
    </script>
  </body>
</html>
```

### Key Takeaways

| Feature         | Description |
|----------------|-------------|
| `innerText`     | Changes visible text only |
| `textContent`   | Changes all text including hidden |
| `innerHTML`     | Reads/writes HTML |
| `setAttribute`  | Sets attribute like `href`, `src`, `id` |
| `getAttribute`  | Reads attribute |
| `element.style` | Direct styling using JS |

### Best Practices

- Don't overuse `innerHTML` unless needed — it can overwrite the whole element.
- Use `classList.add()` and `classList.remove()` for adding/removing CSS classes instead of `style` when possible.
- You can also use `style.cssText` to apply multiple styles at once (not recommended for beginners but good to know).

---

## Advanced DOM Topics

### Working with CSS Classes

When you want to **add**, **remove**, or **toggle** styles dynamically, instead of changing `element.style`, it's best to use CSS classes. You write the styling in CSS and just **toggle the class names in JS**.

#### The classList Property

Every DOM element has a property called `.classList`. It's not a string — it's a special object with **methods** to manage classes:

#### classList.add("className")

Adds a class to an element.

```js
element.classList.add("highlight");
```

```css
/* In CSS */
.highlight {
  background-color: yellow;
  color: black;
}
```

#### classList.remove("className")

Removes a class from an element.

```js
element.classList.remove("highlight");
```

#### classList.toggle("className")

Adds the class **if it's not present**, or removes it **if it is**.

```js
element.classList.toggle("highlight");
```

This is super useful for:
- Dark/light mode switches
- Like buttons
- Expand/collapse actions

#### classList.contains("className")

Checks if the class is already there.

```js
if (element.classList.contains("highlight")) {
  console.log("Already highlighted!");
}
```

#### Alternative: element.style.cssText

This allows you to apply multiple inline styles in one go.

```js
element.style.cssText = "color: white; background-color: blue; font-size: 20px;";
```

⚠️ Not beginner-friendly because:
- You overwrite existing inline styles.
- Less maintainable than using CSS classes.

#### Why Prefer classList Over element.style?

| Using classList            | Using element.style         |
|----------------------------|-----------------------------|
| Cleaner and reusable       | Messy if applied repeatedly |
| Uses CSS (good practice)   | Inline styles (hard to manage) |
| Easier to switch styles    | Hard to reset styles        |
| Promotes separation of concerns | Mixes logic and presentation |

#### Example: Dark Mode Toggle

```html
<style>
  .dark-mode {
    background-color: #111;
    color: white;
  }
</style>

<button id="themeToggle">Toggle Theme</button>
<div id="container">Hello, world!</div>

<script>
  const button = document.getElementById("themeToggle");
  const container = document.getElementById("container");

  button.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
  });
</script>
```

#### Summary of classList Methods

| Method                   | What it does                            |
|--------------------------|-----------------------------------------|
| `add("class")`           | Adds a class                            |
| `remove("class")`        | Removes a class                         |
| `toggle("class")`        | Adds if not present, removes if present |
| `contains("class")`      | Returns true/false if class is there    |

### Creating and Removing Elements

#### Core Concepts

##### document.createElement()
Creates a new HTML element in memory (not yet on the page).

```js
const newDiv = document.createElement("div");
```

This gives you a new empty `<div>` element. You can then set its content, classes, styles, and finally place it into the page.

##### appendChild()  
Adds a new child **at the end** of a parent element.

```js
const parent = document.getElementById("container");
parent.appendChild(newDiv);
```

##### insertAdjacentHTML(position, html)
A powerful method to insert HTML relative to a given element without replacing it.

**Positions**:
- `"beforebegin"` → before the element
- `"afterbegin"` → inside the element, before its first child
- `"beforeend"` → inside the element, after its last child
- `"afterend"` → after the element

```js
element.insertAdjacentHTML("beforeend", "<p>Hi!</p>");
```

> Great for inserting HTML templates or multiple elements quickly.

##### remove()  
Removes the element from the DOM.

```js
element.remove();
```

> The element must exist first. Often paired with a `click` event on a "delete" button.

#### Complete Example: To-Do List

```html
<!DOCTYPE html>
<html>
<head>
  <title>Day 2 - To-Do List</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    ul { padding: 0; list-style-type: none; }
    li { padding: 8px; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; }
    button.removeBtn { background: red; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>

  <h2>My To-Do List</h2>
  <input type="text" id="taskInput" placeholder="Enter a task" />
  <button id="addBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      // Create new <li>
      const li = document.createElement("li");

      // Add task text
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("removeBtn");

      // Add event to remove the item
      removeBtn.addEventListener("click", () => {
        li.remove();
      });

      // Append button to list item
      li.appendChild(removeBtn);

      // Add list item to task list
      taskList.appendChild(li);

      // Clear input
      taskInput.value = "";
    });
  </script>

</body>
</html>
```

#### Additional Tips

- You can **clone nodes** using `.cloneNode(true)` for templating.
- You can use `insertAdjacentHTML()` for inserting HTML faster than `createElement`+`appendChild`, but you lose the ability to attach event listeners directly.
- Always **sanitize user input** if you're inserting into `innerHTML` to avoid security risks (like XSS).

#### Summary

| Method                | Use                                 |
|-----------------------|--------------------------------------|
| `createElement()`     | Create an element in memory          |
| `appendChild()`       | Add the new element to the DOM       |
| `insertAdjacentHTML()`| Insert HTML next to an element       |
| `remove()`            | Remove the element from the DOM      |

---

## Event Handling

### Introduction to DOM Events

Handle user interactions with events like click, keydown, etc.

### Core Event Concepts

#### addEventListener(event, callback)
Used to "listen" for an event on an element.

```js
button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

✅ You can use arrow functions, named functions, or anonymous functions.

#### Common Events

| Event      | Triggered When...                        |
|------------|------------------------------------------|
| `click`    | Element is clicked                       |
| `submit`   | Form is submitted                        |
| `keydown`  | Any key is pressed down                  |
| `keyup`    | Key is released after being pressed      |
| `input`    | Input field value changes (live typing)  |
| `change`   | Input value changes and loses focus      |

### The Event Object

Every event handler receives an object with **info** about the event:

```js
element.addEventListener("click", function(event) {
  console.log(event.target); // The actual element clicked
});
```

#### Common Event Object Properties

| Property | Description |
|---------|-------------|
| `type` | Type of event (`click`, `keydown`, etc.) |
| `target` | The actual element that triggered the event |
| `currentTarget` | The element the event handler is attached to |
| `preventDefault()` | Stops the default browser behavior |
| `stopPropagation()` | Stops the event from bubbling up the DOM |
| `clientX`, `clientY` | X/Y coordinates of the mouse event |
| `key`, `keyCode` | Key pressed (for keyboard events) |

#### Example with Event Properties

```js
document.getElementById("btn").addEventListener("click", function(e) {
  console.log("Type:", e.type);                    // "click"
  console.log("Target:", e.target);                // the clicked element
  console.log("Current Target:", e.currentTarget); // element with the handler
});
```

### Event Delegation

Event Delegation is a technique where you **attach a single event listener to a parent element**, and use the `event.target` to handle events for child elements.

#### Why Use Event Delegation?

- Efficient when you have **many child elements** (like a list of items).
- Useful when elements are added **dynamically** after the page loads.

#### Event Delegation Example

Suppose you have a list:
```html
<ul id="todoList">
  <li>Buy milk</li>
  <li>Learn JavaScript</li>
  <li>Build projects</li>
</ul>
```

Instead of adding event listeners to each `<li>`, do this:
```js
document.getElementById("todoList").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
    e.target.style.textDecoration = "line-through";
  }
});
```

👉 Even if you add a new `<li>` later, it will still work!

### Event Bubbling and Capturing

#### What is Event Bubbling?

When an event occurs on an element, it **bubbles up** the DOM tree — from the target element to its ancestors.

#### Bubbling Example

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

When you click the button, output will be:
```
Child clicked
Parent clicked
```

This is bubbling: the event fires on `#child` first, then `#parent`.

#### Stopping Event Bubbling

Use `stopPropagation()` to stop bubbling:
```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
```

Now, clicking the button won't trigger the parent's handler.

#### What is Event Capturing?

Event capturing (also called "trickling") is the **opposite** of bubbling: the event starts from the top (root) and goes **down** to the target element.

You can listen during the capturing phase by setting the third argument to `true`:

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent capturing");
}, true);
```

### Complete Event Handling Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Day 3 - DOM Events</title>
  <style>
    ul { list-style: none; padding: 0; }
    li { padding: 8px; border: 1px solid #ddd; margin: 4px 0; cursor: pointer; }
    .highlight { background-color: yellow; }
  </style>
</head>
<body>

  <h2>Event Handling</h2>

  <button id="clickBtn">Click Me!</button>
  <p id="clickMsg"></p>

  <hr>

  <input type="text" id="textInput" placeholder="Type something..." />
  <p id="typed"></p>

  <hr>

  <ul id="myList">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
  </ul>
  <p>Click on an item to highlight it.</p>

  <script>
    // 1. Button click
    const clickBtn = document.getElementById("clickBtn");
    const clickMsg = document.getElementById("clickMsg");

    clickBtn.addEventListener("click", () => {
      clickMsg.innerText = "Button was clicked!";
    });

    // 2. Typing into input
    const input = document.getElementById("textInput");
    const typed = document.getElementById("typed");

    input.addEventListener("keydown", (e) => {
      typed.innerText = `You pressed: ${e.key}`;
    });

    // 3. List item click (event delegation)
    const list = document.getElementById("myList");

    list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        // Remove previous highlight
        document.querySelectorAll("li").forEach(li => li.classList.remove("highlight"));
        
        // Highlight clicked one
        e.target.classList.add("highlight");
      }
    });
  </script>

</body>
</html>
```

### Additional Event Handling Tips

- Use `e.preventDefault()` to stop default behavior (e.g. form submission).
- Use `e.stopPropagation()` if you want to stop bubbling.
- Debounce `keydown` if you want to avoid too many logs/actions (advanced).

### Event Handling Summary

| Topic               | Description                           |
|---------------------|---------------------------------------|
| `addEventListener`  | Attach event handlers to elements     |
| `click`, `keydown`  | Most common events                    |
| `event.target`      | Element that triggered the event      |
| Event Delegation    | Handle many items from parent         |
| `e.preventDefault()`| Stop default (like form submission)   |

### Quick Summary Table

| Concept         | Description |
|----------------|-------------|
| `event` object  | Info about the event (target, type, position, etc.) |
| Event Delegation | Listen on a parent, check `event.target` for the real child |
| Event Bubbling | Event goes up from the target to ancestors |
| Event Capturing | Event goes down from root to the target |
| `stopPropagation()` | Stops bubbling or capturing |
| `preventDefault()` | Stops default browser action (like link navigation) |

---

## Conclusion

This guide covers the essential JavaScript concepts from strict mode fundamentals to advanced DOM manipulation and event handling. Practice these concepts by building interactive web applications and experimenting with the provided examples.

Remember: JavaScript is best learned through hands-on practice. Start with simple examples and gradually build more complex interactions as you become comfortable with these foundational concepts.