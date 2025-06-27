
---

## **1️⃣ Basic `for` Loop - Counting Balloons 🎈**
**Concept:** Use a `for` loop to count and display balloons.  

```js
for (let i = 1; i <= 5; i++) {
    console.log(`🎈 Balloon ${i} is flying!`);
}
```
**Output:**
```
🎈 Balloon 1 is flying!
🎈 Balloon 2 is flying!
🎈 Balloon 3 is flying!
🎈 Balloon 4 is flying!
🎈 Balloon 5 is flying!
```

---

## **2️⃣ `while` Loop - Countdown Rocket Launch 🚀**
**Concept:** A `while` loop to launch a rocket.  

```js
let countdown = 5;

while (countdown > 0) {
    console.log(`🚀 Launching in... ${countdown}`);
    countdown--;
}

console.log("🔥 Boom! The rocket has launched!");
```
**Output:**
```
🚀 Launching in... 5
🚀 Launching in... 4
🚀 Launching in... 3
🚀 Launching in... 2
🚀 Launching in... 1
🔥 Boom! The rocket has launched!
```

---

## **3️⃣ `forEach()` - Animal Sounds 🐶🐱🐮**
**Concept:** Loop through an array of animals and make them speak.  

```js
let animals = ["🐶 Dog", "🐱 Cat", "🐮 Cow"];

animals.forEach(animal => {
    console.log(`${animal} says Hello!`);
});
```
**Output:**
```
🐶 Dog says Hello!
🐱 Cat says Hello!
🐮 Cow says Hello!
```

---

## **4️⃣ `map()` - Double the Chocolates 🍫🍫**
**Concept:** Use `map()` to **double** the number of chocolates each friend gets.  

```js
let chocolates = [1, 2, 3, 4];

let doubleChocolates = chocolates.map(choco => choco * 2);

console.log(doubleChocolates);
```
**Output:**
```
[2, 4, 6, 8]
```

---

## **5️⃣ `filter()` - Pick Only Red Apples 🍎**
**Concept:** Use `filter()` to find **only red apples** from a basket.  

```js
let fruits = ["🍎 Red Apple", "🍌 Banana", "🍏 Green Apple", "🍎 Red Apple"];

let redApples = fruits.filter(fruit => fruit.includes("Red Apple"));

console.log(redApples);
```
**Output:**
```
["🍎 Red Apple", "🍎 Red Apple"]
```

---

## **6️⃣ `reduce()` - Counting Coins 💰**
**Concept:** Use `reduce()` to count the **total coins in a piggy bank.**  

```js
let coins = [1, 2, 5, 10, 1, 5];

let totalCoins = coins.reduce((total, coin) => total + coin, 0);

console.log(`💰 Total coins: ${totalCoins}`);
```
**Output:**
```
💰 Total coins: 24
```
## JavaScript Functions – In-Depth Guide  

Functions are one of the core building blocks of JavaScript. They allow you to write reusable, modular, and organized code. Let’s explore functions step by step.

---

### 1️⃣ **What is a Function?**
A function in JavaScript is a block of code designed to perform a specific task. Functions allow you to:
- Reuse code instead of writing the same logic multiple times.
- Improve readability and maintainability.
- Perform complex tasks in a modular way.

---

### 2️⃣ **Types of Functions in JavaScript**
1. **Function Declaration**
2. **Function Expression**
3. **Arrow Functions**
4. **Immediately Invoked Function Expressions (IIFE)**
5. **Callback Functions**
6. **Higher-Order Functions**

---

### 3️⃣ **Function Declaration**
A function declaration (also called a function definition) starts with the `function` keyword.

```javascript
function greet() {
  console.log("Hello, World!");
}

greet(); // Calling the function
```

✅ **Key Points**:
- Function declarations are hoisted, meaning they can be called before they are defined in the code.

---

### 4️⃣ **Function Expression**
A function can also be stored in a variable. This is called a function expression.

```javascript
const greet = function() {
  console.log("Hello from a function expression!");
};

greet();
```

✅ **Key Differences from Function Declaration**:
- Function expressions are **not hoisted**, meaning you cannot call them before they are defined.

---

### 5️⃣ **Arrow Functions (ES6)**
Arrow functions are a modern way to write functions in JavaScript.

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // Output: 8
```

🔹 If there’s only one statement, you can omit the `{}` and `return` keyword:

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 2)); // Output: 8
```

✅ **Key Benefits**:
- Shorter syntax.
- Automatically binds `this` (useful in objects and classes).

---

### 6️⃣ **Function Parameters & Arguments**
Functions can accept **parameters** (placeholders for values) and **arguments** (actual values passed to the function).

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Nitin"); // Output: Hello, Nitin!
```

✅ **Default Parameters** (ES6)
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
```

---

### 7️⃣ **Return Statement**
Functions can return values using the `return` keyword.

```javascript
function square(num) {
  return num * num;
}

let result = square(4);
console.log(result); // Output: 16
```

✅ **Key Points**:
- `return` stops function execution.
- If a function doesn't return a value, it returns `undefined` by default.

---

### 8️⃣ **Immediately Invoked Function Expression (IIFE)**
An IIFE is a function that runs immediately after being defined.

```javascript
(function() {
  console.log("This function runs immediately!");
})();
```

✅ **Use Case**:
- Avoid polluting the global scope.

---

### 9️⃣ **Callback Functions**
A callback function is a function passed as an argument to another function.

```javascript
function processUser(name, callback) {
  console.log(`Processing user: ${name}`);
  callback();
}

function done() {
  console.log("Done processing.");
}

processUser("Alice", done);
```

✅ **Use Cases**:
- Asynchronous JavaScript (e.g., setTimeout, event listeners, APIs).

---

### 🔟 **Higher-Order Functions**
A function that takes another function as a parameter or returns a function.

```javascript
function calculate(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(calculate(add, 10, 5)); // Output: 15
console.log(calculate(subtract, 10, 5)); // Output: 5
```

✅ **Used In**:
- Functional programming.
- Array methods like `.map()`, `.filter()`, `.reduce()`.

---

### 🔥 **Bonus: Function Methods**
#### 1️⃣ **.call() Method**
Calls a function with a specific `this` value.

```javascript
function sayHello() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: "Nitin" };
sayHello.call(person); // Output: Hello, my name is Nitin
```

#### 2️⃣ **.apply() Method**
Similar to `.call()`, but takes an array of arguments.

```javascript
function greet(age, city) {
  console.log(`Hello, my name is ${this.name}, I am ${age} years old and live in ${city}`);
}

const user = { name: "Nitin" };
greet.apply(user, [25, "Delhi"]);
```

#### 3️⃣ **.bind() Method**
Returns a new function with `this` bound to a specific object.

```javascript
const user = { name: "Nitin" };
const boundFunction = sayHello.bind(user);
boundFunction(); // Output: Hello, my name is Nitin
```

---

### **🔥 Summary**
| Function Type | Syntax |
|--------------|--------|
| Function Declaration | `function funcName() {}` |
| Function Expression | `const func = function() {}` |
| Arrow Function | `const func = () => {}` |
| IIFE | `(function() {})();` |
| Callback Function | `someFunction(callback)` |
| Higher-Order Function | `function func(callback) { callback(); }` |

🚀 **Next Steps**:
- Practice writing functions with different use cases.
- Explore asynchronous functions (`setTimeout`, `Promises`, `async/await`).
- Use functions in real projects (form validation, API handling, etc.).
