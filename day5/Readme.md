

## **1️⃣ Objects in JavaScript**
An **object** is like a real-world thing that has properties. Imagine a **car**: it has a **color**, a **brand**, and a **speed**.  

### **Example 1: Creating an Object**
```js
let car = {
  brand: "Tesla",
  color: "Red",
  speed: 200
};

console.log(car.brand);  // Tesla
console.log(car.color);  // Red
console.log(car.speed);  // 200
```

### **Example 2: Adding & Changing Values**
```js
car.model = "Model X";  // Adding a new property
car.speed = 250;  // Changing speed

console.log(car.model); // Model X
console.log(car.speed); // 250
```

### **Example 3: Using Objects Inside an Array**
```js
let students = [
  { name: "John", age: 10, grade: "5th" },
  { name: "Emma", age: 11, grade: "6th" }
];

console.log(students[0].name); // John
console.log(students[1].grade); // 6th
```

---

## **2️⃣ Arrays in JavaScript**
An **array** is like a list where you store multiple things together.

### **Example 1: Creating an Array**
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);  // Apple
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // Mango
```

### **Example 2: Adding & Removing Items**
```js
fruits.push("Orange");  // Adds to end
console.log(fruits);  // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop();  // Removes last item
console.log(fruits);  // ["Apple", "Banana", "Mango"]

fruits.unshift("Pineapple");  // Adds to start
console.log(fruits);  // ["Pineapple", "Apple", "Banana", "Mango"]

fruits.shift();  // Removes first item
console.log(fruits);  // ["Apple", "Banana", "Mango"]
```

### **Example 3: Looping Through an Array**
```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## **3️⃣ If-Else in JavaScript**
"If" checks if something is **true** and does something. If not, "else" runs.

### **Example 1: Simple If-Else**
```js
let age = 10;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}
```

### **Example 2: If-Else with Multiple Conditions**
```js
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("You need to study more!");
}
```

---

## **4️⃣ Switch Case in JavaScript**
Instead of using **if-else** multiple times, **switch** is a cleaner way to check values.

### **Example 1: Days of the Week**
```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day!");
}
```

### **Example 2: Fruit Prices**
```js
let fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("Apples cost $2 each.");
    break;
  case "Mango":
    console.log("Mangoes cost $3 each.");
    break;
  case "Banana":
    console.log("Bananas cost $1 each.");
    break;
  default:
    console.log("Sorry, we don't have that fruit.");
}
```

---

## **Conclusion**
Now you know:  
✅ **Objects** store key-value pairs.  
✅ **Arrays** store multiple values.  
✅ **If-Else** helps make decisions.  
✅ **Switch Case** makes multiple choices easy.  

🔥 **Practice Idea:**  
Try making an **object for yourself** with properties like your **name, age, favorite color, and hobbies**! 🚀
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
