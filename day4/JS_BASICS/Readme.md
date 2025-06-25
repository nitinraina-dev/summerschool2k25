# **In-Depth Guide to JavaScript: Variables and Data Types**

JavaScript is a **dynamically typed, loosely typed** language, meaning you don’t need to define a variable’s type explicitly—it is assigned based on the value stored in it. Let's dive deep into **variables**, **scopes**, and **data types**.

---

## **1. JavaScript Variables**
A **variable** is a container that holds a value. In JavaScript, you can declare variables using **`var`**, **`let`**, or **`const`**.

### **1.1. Declaring Variables**
```javascript
var name = "Alice";  // Declares a variable using 'var'
let age = 25;        // Declares a variable using 'let'
const PI = 3.14159;  // Declares a constant using 'const'
```
Each keyword behaves differently in terms of **scope**, **reassignability**, and **hoisting**.

---

## **2. Difference Between `var`, `let`, and `const`**

| Feature      | `var` | `let` | `const` |
|-------------|------|------|------|
| **Scope**  | Function-scoped | Block-scoped | Block-scoped |
| **Reassignable?** | Yes | Yes | No |
| **Redeclarable?** | Yes | No | No |
| **Hoisting** | Yes (initialized with `undefined`) | Yes (not initialized) | Yes (not initialized) |
| **Recommended?** | ❌ No | ✅ Yes | ✅ Yes |

---

## **3. Understanding Scope in JavaScript**
### **3.1. Global Scope**
A variable declared outside a function is **global** and accessible anywhere in the script.
```javascript
let message = "Hello, world!";
function sayHello() {
    console.log(message);  // Accessible
}
sayHello();
```

### **3.2. Function Scope (`var`)**
Variables declared with `var` inside a function are **accessible only inside that function**.
```javascript
function test() {
    var x = 10;
    console.log(x); // 10
}
test();
console.log(x); // ❌ Error: x is not defined
```

### **3.3. Block Scope (`let`, `const`)**
Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.
```javascript
if (true) {
    let y = 20;
    console.log(y); // 20
}
console.log(y); // ❌ Error: y is not defined
```

---

## **4. Hoisting in JavaScript**
Hoisting means **variable declarations are moved to the top of the scope before execution**, but their initialization remains in place.

### **4.1. `var` Hoisting**
```javascript
console.log(a); // ❓ Undefined (not an error, but not assigned yet)
var a = 10;
console.log(a); // ✅ 10
```

### **4.2. `let` and `const` Hoisting**
Unlike `var`, `let` and `const` are hoisted but not initialized.
```javascript
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

---

## **5. JavaScript Data Types**
JavaScript has **seven primitive types** and **three non-primitive (reference) types**.

### **5.1. Primitive Data Types (Immutable)**
Primitive types are stored **by value** in memory.

| Type | Example |
|------|---------|
| `String`  | `"Hello, World!"` |
| `Number`  | `42`, `3.14`, `Infinity`, `NaN` |
| `Boolean` | `true`, `false` |
| `Undefined` | `let x; // x is undefined` |
| `Null` | `let y = null;` |
| `BigInt` | `let big = 9007199254740991n;` |
| `Symbol` | `let id = Symbol("unique");` |

#### **Example**
```javascript
let name = "Alice";  // String
let age = 25;        // Number
let isCoding = true; // Boolean
let x;               // Undefined
let y = null;        // Null
let big = 9007199254740991n; // BigInt
let unique = Symbol("id");   // Symbol

console.log(typeof name); // string
console.log(typeof big);  // bigint
console.log(typeof unique); // symbol
```

---

### **5.2. Non-Primitive (Reference) Data Types**
Non-primitive types are stored **by reference** in memory.

| Type | Example |
|------|---------|
| `Object` | `{ name: "Alice", age: 30 }` |
| `Array` | `["apple", "banana", "cherry"]` |
| `Function` | `function greet() { console.log("Hello!"); }` |

#### **Example**
```javascript
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "cherry"];
function greet() { console.log("Hello!"); }

console.log(person.name); // Alice
console.log(fruits[1]); // banana
greet(); // Hello!
```

---

## **6. Difference Between Primitive and Reference Types**
### **6.1. Stored by Value vs. Stored by Reference**
| Feature | Primitive Types | Reference Types |
|---------|----------------|----------------|
| **Stored in** | Stack (fixed size) | Heap (dynamic size) |
| **Copied by** | Value | Reference (Memory Address) |
| **Mutability** | Immutable | Mutable |
| **Comparison** | Compares values | Compares memory references |

#### **Example**
```javascript
let x = 10;
let y = x; // Copy by value
y = 20;
console.log(x); // 10 (unchanged)

let obj1 = { name: "Alice" };
let obj2 = obj1; // Copy by reference
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (changed)
```
**Explanation:**  
- **Primitives (`x` and `y`) are copied by value** → changing `y` doesn't affect `x`.
- **Objects (`obj1` and `obj2`) are copied by reference** → changing `obj2.name` affects `obj1.name`.

---

## **7. Special Cases in JavaScript Data Types**
### **7.1. `typeof null` Returns `"object"`**
This is a **historical bug in JavaScript**:
```javascript
console.log(typeof null); // "object"
```
Even though `null` is a **primitive**, it incorrectly returns `"object"`.

### **7.2. `NaN` (Not a Number)**
```javascript
console.log(0 / 0); // NaN
console.log(typeof NaN); // "number"
```
Even though `NaN` means "Not a Number", its type is still `"number"`.

### **7.3. Arrays are a Special Type of Object**
```javascript
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
```
Arrays are a **subtype of objects**, and `Array.isArray(arr)` is the best way to check if something is an array.

---

## **8. Summary**
- **Variables** can be declared using `var`, `let`, and `const` (use `let` and `const`).
- **Primitive Data Types**: String, Number, Boolean, Undefined, Null, BigInt, Symbol (immutable).
- **Non-Primitive Data Types**: Object, Array, Function (mutable and stored by reference).
- **Scope**: `var` (function-scoped), `let` & `const` (block-scoped).
- **Hoisting**: `var` is hoisted with `undefined`, `let` and `const` are hoisted but not initialized.

---

## **Want to Practice?**
Try solving these:
1. Declare variables with `let` and `const` and print their types.
2. Create an object and modify its properties.
3. Write a function that checks whether a variable is an array.
4. Compare two objects with the same values—do they return `true`?

Would you like me to provide solutions for these?
Don't be lazy practice these on your own

Here are the solutions to the practice problems:  

---

### **1. Declare Variables with `let` and `const` and Print Their Types**
#### **Problem**
Declare variables using `let` and `const` for different data types, then print their types using `typeof`.

#### **Solution**
```javascript
let name = "Alice";         // String
let age = 25;               // Number
let isStudent = false;      // Boolean
let city;                   // Undefined (not assigned a value)
const PI = 3.14159;         // Constant Number
const person = { name: "John", age: 30 }; // Object
const fruits = ["apple", "banana", "cherry"]; // Array

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof city);    // "undefined"
console.log(typeof PI);      // "number"
console.log(typeof person);  // "object"
console.log(typeof fruits);  // "object" (because arrays are a subtype of objects)
```

---

### **2. Create an Object and Modify Its Properties**
#### **Problem**
Create an object `student` with properties `name` and `marks`. Then update the `marks` property and add a new property `grade`.

#### **Solution**
```javascript
let student = {
    name: "Emily",
    marks: 85
};

console.log(student);  // { name: 'Emily', marks: 85 }

// Modifying the `marks` property
student.marks = 90;

// Adding a new property `grade`
student.grade = "A";

console.log(student);  // { name: 'Emily', marks: 90, grade: 'A' }
```

---

### **3. Write a Function That Checks Whether a Variable is an Array**
#### **Problem**
Write a function `isArray` that checks whether a given variable is an array.

#### **Solution**
```javascript
function isArray(value) {
    return Array.isArray(value);
}

console.log(isArray([1, 2, 3])); // true
console.log(isArray("Hello"));   // false
console.log(isArray({ name: "Alice" })); // false
console.log(isArray(42)); // false
```
#### **Explanation**
- `Array.isArray(value)` is the correct way to check if a value is an array.
- `typeof []` returns `"object"`, so `Array.isArray` is more reliable.

---

### **4. Compare Two Objects with the Same Values**
#### **Problem**
Compare two objects `{ name: "John" }` and `{ name: "John" }`. Will they be considered equal?

#### **Solution**
```javascript
let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 === obj2); // false
```
#### **Explanation**
- Even though `obj1` and `obj2` have the same properties and values, they are **stored at different memory locations**.
- Objects are compared **by reference**, not by value.

#### **Solution to Compare Object Values**
If you want to compare objects based on their **values**, use `JSON.stringify()`:
```javascript
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```

---

### **Bonus Practice Question**
#### **Problem**
Write a function that swaps two variables without using a third variable.

#### **Solution**
```javascript
let a = 5, b = 10;
console.log(`Before swapping: a = ${a}, b = ${b}`);

[a, b] = [b, a]; // Swapping using array destructuring

console.log(`After swapping: a = ${a}, b = ${b}`);
```
#### **Explanation**
- This uses **array destructuring** to swap `a` and `b` without a temporary variable.

---

## **Summary**
✅ You learned:
1. **Declaring variables** and checking their types.  
2. **Modifying objects** by adding/updating properties.  
3. **Checking if a variable is an array** using `Array.isArray()`.  
4. **Comparing objects** (by reference and by value).  
5. **Swapping variables** without using a third variable.  
