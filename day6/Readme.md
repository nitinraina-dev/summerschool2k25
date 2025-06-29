### **JavaScript `forEach()` Method**  

The `forEach()` method is used to iterate over elements in an array and execute a provided function once for each element. Unlike `map()` or `filter()`, it **does not return a new array**—it’s used for **executing side effects** like logging, updating UI, or modifying objects.

---

## **1. Syntax**
```js
array.forEach(callbackFunction(currentValue, index, array), thisArg);
```
### **Parameters:**
- **callbackFunction** → A function executed for each array element.
  - `currentValue` → The current element.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `forEach()` was called on.
- **thisArg** (optional) → A value to use as `this` inside the callback.

---

## **2. Basic Example**
```js
const numbers = [1, 2, 3];

numbers.forEach(num => console.log(num * 2));

// Output:
// 2
// 4
// 6
```

---

## **3. Using `index` Parameter**
```js
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// Output:
// 1. Apple
// 2. Banana
// 3. Cherry
```

---

## **4. Modifying an Object Inside `forEach()`**
```js
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

users.forEach(user => user.age += 1);

console.log(users);
// [{ name: "Alice", age: 26 }, { name: "Bob", age: 31 }]
```
✅ `forEach()` modifies objects because objects are **passed by reference**.

---

## **5. `forEach()` vs. `map()`**
| Feature  | `forEach()` | `map()` |
|----------|------------|--------|
| Returns a new array? | ❌ No | ✅ Yes |
| Used for transformation? | ❌ No | ✅ Yes |
| Used for side effects (logging, modifying objects)? | ✅ Yes | ❌ No |

### **Example:**
```js
const numbers = [1, 2, 3];

const doubledWithMap = numbers.map(num => num * 2);
console.log(doubledWithMap); // [2, 4, 6]

numbers.forEach(num => console.log(num * 2)); 
// Only prints values, doesn't return a new array
```

---

## **6. Breaking Out of `forEach()`**
🚨 **You CANNOT use `break` or `return` inside `forEach()`** to stop execution.

✅ **Alternative: Use `some()` or `for...of`**
```js
const numbers = [1, 2, 3, 4];

numbers.some(num => {
    console.log(num);
    return num === 3; // Stops after 3
});
```

---

## **7. `forEach()` with `thisArg`**
```js
const multiplier = {
    factor: 2,
    multiply(num) {
        console.log(num * this.factor);
    }
};

const numbers = [1, 2, 3];

numbers.forEach(multiplier.multiply, multiplier);
// Output: 2, 4, 6
```

---

## **8. Common Mistakes**
### **1. Expecting a Return Value**
```js
const numbers = [1, 2, 3];

const result = numbers.forEach(num => num * 2);
console.log(result); // ❌ Undefined
```
✅ **Fix:** Use `map()` instead.

---

## **9. Summary**
- `forEach()` executes a function for each array element.
- It does **not return a new array** (use `map()` for that).
- Used for **side effects** like logging, modifying objects, updating UI.
- Cannot use `break`, `return`, or `continue` to exit early.




The `map()` method in JavaScript is used to transform elements of an array by applying a function to each element. It returns a **new array** with the transformed values, without modifying the original array.

---

## **1. Syntax**
```js
array.map(callbackFunction(currentValue, index, array), thisArg)
```
### **Parameters:**
- **callbackFunction** → A function that runs for each element in the array.
  - `currentValue` → The current element being processed.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `map()` was called on.
- **thisArg** (optional) → A value to use as `this` inside the callback function.

---

## **2. Basic Example**
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)
```

---

## **3. Using `index` and `array` parameters**
```js
const names = ["Alice", "Bob", "Charlie"];

const nameWithIndex = names.map((name, index) => `${index + 1}: ${name}`);

console.log(nameWithIndex);
// ["1: Alice", "2: Bob", "3: Charlie"]
```

---

## **4. Mapping Over an Array of Objects**
### **Transforming Object Properties**
```js
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]
```

---

## **5. Chaining `map()` with Other Methods**
You can combine `map()` with methods like `filter()` and `reduce()`.

### **Example: Filter even numbers and square them**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const squaredEvens = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * num); // [4, 16, 36]

console.log(squaredEvens);
```

---

## **6. `map()` vs. `forEach()`**
| Feature  | `map()` | `forEach()` |
|----------|--------|------------|
| Returns a new array? | ✅ Yes | ❌ No |
| Modifies the original array? | ❌ No | ❌ No |
| Used for transformation? | ✅ Yes | ❌ No (only used for side effects) |

### **Example**
```js
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2); // [2, 4, 6]
console.log(doubled);

nums.forEach(num => console.log(num * 2)); // Just prints values, no new array
```

---

## **7. `map()` with `thisArg`**
The optional `thisArg` allows you to pass an object as `this` inside the callback.

```js
const multiplier = {
    factor: 2,
    multiply(num) {
        return num * this.factor;
    }
};

const numbers = [1, 2, 3];
const result = numbers.map(multiplier.multiply, multiplier);

console.log(result); // [2, 4, 6]
```

---

## **8. Common Mistakes**
### **Not Returning a Value in Callback**
```js
const numbers = [1, 2, 3];

const incorrect = numbers.map(num => {
    num * 2; // No return statement!
});

console.log(incorrect); // [undefined, undefined, undefined]
```
✅ Fix:
```js
const correct = numbers.map(num => num * 2);
console.log(correct); // [2, 4, 6]
```

---

## **9. Using `map()` with Promises (Async)**
Since `map()` executes synchronously, using it with async functions returns an array of **promises**.

```js
const fetchData = async (id) => {
    return `Data for ID: ${id}`;
};

const ids = [1, 2, 3];

const promises = ids.map(fetchData);
console.log(promises); // [Promise, Promise, Promise]

// To get actual values, use Promise.all
Promise.all(promises).then(data => console.log(data));
```

---

## **10. Alternative: `flatMap()`**
`flatMap()` is like `map()`, but it **flattens** the resulting array by one level.

```js
const nestedArray = ["hello", "world"];

const mapped = nestedArray.map(word => word.split(""));
console.log(mapped); // [["h", "e", "l", "l", "o"], ["w", "o", "r", "l", "d"]]

const flatMapped = nestedArray.flatMap(word => word.split(""));
console.log(flatMapped); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
```

---

## **Summary**
- `map()` creates a **new array** by applying a function to each element.
- It doesn’t modify the original array.
- Works well with **array transformations**, especially objects.
- Can be **chained** with other methods like `filter()`, `reduce()`.
- Avoid common mistakes like forgetting to return values.


### **JavaScript `filter()` Method**  
The `filter()` method in JavaScript is used to **create a new array** containing only the elements that pass a specified condition. It does **not modify the original array**.

---

## **1. Syntax**
```js
array.filter(callbackFunction(currentValue, index, array), thisArg);
```
### **Parameters:**
- **callbackFunction** → Function executed for each element.
  - `currentValue` → The current element.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `filter()` was called on.
- **thisArg** (optional) → A value to use as `this` inside the callback function.

---

## **2. Basic Example**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] (original array remains unchanged)
```

---

## **3. Filtering an Array of Objects**
### **Example: Filter users above age 25**
```js
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];

const olderUsers = users.filter(user => user.age > 25);
console.log(olderUsers);
// [{ name: "Alice", age: 30 }]
```

---

## **4. Filtering Out Falsy Values**
In JavaScript, falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

### **Example: Remove falsy values from an array**
```js
const values = [0, "Hello", "", false, 42, null, undefined, "JavaScript"];

const truthyValues = values.filter(Boolean);
console.log(truthyValues); // ["Hello", 42, "JavaScript"]
```
✅ **Tip:** Using `Boolean` as a callback removes falsy values.

---

## **5. Filtering with Index Parameter**
You can also use the index parameter inside `filter()`.

```js
const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((num, index) => index % 2 === 0);
console.log(filteredNumbers); // [10, 30, 50] (keeps elements at even indices)
```

---

## **6. Chaining `filter()` with Other Methods**
### **Example: Filter even numbers and double them using `map()`**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const doubledEvens = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * 2); // [4, 8, 12]

console.log(doubledEvens);
```

---

## **7. `filter()` vs. `map()` vs. `forEach()`**
| Feature  | `filter()` | `map()` | `forEach()` |
|----------|--------|--------|------------|
| Creates a new array? | ✅ Yes | ✅ Yes | ❌ No |
| Modifies original array? | ❌ No | ❌ No | ❌ No |
| Used for transformation? | ❌ No | ✅ Yes | ❌ No |
| Used for filtering? | ✅ Yes | ❌ No | ❌ No |

---

## **8. Using `filter()` with `thisArg`**
If you need to use `this` inside the callback function, you can pass `thisArg`.

```js
const threshold = {
    min: 10
};

const numbers = [5, 10, 15, 20];

const greaterThanMin = numbers.filter(function(num) {
    return num > this.min;
}, threshold);

console.log(greaterThanMin); // [15, 20]
```

---

## **9. Common Mistakes**
### **Forgetting to Return a Value**
```js
const numbers = [1, 2, 3, 4];

const incorrect = numbers.filter(num => {
    num % 2 === 0; // No return statement!
});

console.log(incorrect); // []
```
✅ **Fix:**
```js
const correct = numbers.filter(num => num % 2 === 0);
console.log(correct); // [2, 4]
```

---

## **10. Filtering Data from an API (Real-World Example)**
If you fetch data from an API, you can use `filter()` to extract relevant items.

```js
const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Fashion" }
];

// Get only electronics
const electronics = products.filter(product => product.category === "Electronics");

console.log(electronics);
// [{ name: "Laptop", price: 1000, category: "Electronics" }, { name: "Phone", price: 500, category: "Electronics" }]
```

---

## **Summary**
- `filter()` creates a **new array** with elements that **pass a condition**.
- It **does not** modify the original array.
- Works well for **filtering objects**, **removing falsy values**, and **chaining with other array methods**.
- Be careful to **always return a value** inside the callback.

### **JavaScript `reduce()` Method**  
The `reduce()` method executes a **callback function** on each element of an array to **accumulate a single result**. It’s useful for summing values, flattening arrays, grouping data, and more.

---

## **1. Syntax**
```js
array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
```
### **Parameters:**
- **callbackFunction** → Function executed on each element.
  - `accumulator` → Stores the accumulated result.
  - `currentValue` → The current element being processed.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `reduce()` was called on.
- **initialValue** (optional) → The starting value for the accumulator.

---

## **2. Basic Example: Sum of Numbers**
```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```
**How it works:**
1. `acc = 0` (initial value)
2. `acc + 1 = 1`
3. `1 + 2 = 3`
4. `3 + 3 = 6`
5. `6 + 4 = 10`
6. `10 + 5 = 15`

---

## **3. Reduce Without `initialValue`**
If `initialValue` is **not provided**, the first element is used as the initial accumulator.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num);

console.log(sum); // 15
```
**⚠️ Warning:**  
If the array is empty and **no `initialValue` is given**, `reduce()` throws an error.

---

## **4. Finding the Maximum Value**
```js
const numbers = [10, 5, 20, 8];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc));

console.log(max); // 20
```

---

## **5. Counting Occurrences in an Array**
### **Example: Count the occurrences of each word**
```js
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordCount);
// { apple: 3, banana: 2, orange: 1 }
```

---

## **6. Flattening an Array**
```js
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```

---

## **7. Grouping Objects by Property**
```js
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] = acc[person.age] || []).push(person);
    return acc;
}, {});

console.log(groupedByAge);
// { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }
```

---

## **8. Combining `map()`, `filter()`, and `reduce()`**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvenSquares = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * num) // [4, 16, 36]
    .reduce((acc, num) => acc + num, 0); // 4 + 16 + 36 = 56

console.log(sumOfEvenSquares); // 56
```

---

## **9. `reduce()` vs. `map()` vs. `filter()`**
| Feature  | `reduce()` | `map()` | `filter()` |
|----------|--------|--------|------------|
| Returns a new array? | ❌ No | ✅ Yes | ✅ Yes |
| Used for transformation? | ✅ Yes | ✅ Yes | ❌ No |
| Used for filtering? | ✅ Yes | ❌ No | ✅ Yes |
| Can accumulate a single value? | ✅ Yes | ❌ No | ❌ No |

---

## **10. Common Mistakes**
### **1. Forgetting the `initialValue` (for empty arrays)**
```js
const emptyArray = [];

const sum = emptyArray.reduce((acc, num) => acc + num);
console.log(sum); // ❌ TypeError: Reduce of empty array with no initial value
```
✅ **Fix:**
```js
const sum = emptyArray.reduce((acc, num) => acc + num, 0);
console.log(sum); // 0
```

### **2. Modifying the `accumulator` directly (Instead of returning it)**
```js
const numbers = [1, 2, 3, 4];

const incorrect = numbers.reduce((acc, num) => {
    acc.push(num * 2); // ❌ Mutating accumulator
}, []);

console.log(incorrect); // ❌ Undefined
```
✅ **Fix:**
```js
const correct = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);

console.log(correct); // [2, 4, 6, 8]
```

---

## **Summary**
- `reduce()` **accumulates** values into a **single result**.
- It works for **summation, finding max/min, flattening arrays, grouping data**, and more.
- Always **provide an `initialValue`** when working with an empty array.
- Be mindful of **modifying the accumulator directly**—always return it.



The **spread operator (`...`)** in JavaScript is a powerful tool used to expand elements of an array, object, or iterable into individual elements. It's super useful for copying, merging, and passing data efficiently.

---

# 🚀 **1. Using Spread with Arrays**
### ✅ Copying an Array (Shallow Copy)
The spread operator allows you to create a new array without modifying the original.

```js
let numbers = [1, 2, 3];
let copyNumbers = [...numbers];

copyNumbers.push(4);

console.log(numbers); // [1, 2, 3] (Original remains unchanged)
console.log(copyNumbers); // [1, 2, 3, 4] (New array modified)
```

💡 **Why use it?**  
If you assign an array using `=`, it creates a reference, not a copy. The spread operator avoids this issue.

```js
let nums = [1, 2, 3];
let referenceNums = nums; // ❌ Points to the same array

referenceNums.push(4);
console.log(nums); // [1, 2, 3, 4] (Original modified)
```

---

### ✅ Merging Arrays
You can merge multiple arrays easily using `...`.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5, 6]
```

---

### ✅ Adding Elements Easily
You can insert elements at any position.

```js
let numbers = [2, 3, 4];

let newNumbers = [1, ...numbers, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]
```

---

# 🏷 **2. Using Spread with Objects**
### ✅ Copying an Object (Shallow Copy)
```js
let person = { name: "Alice", age: 25 };
let copiedPerson = { ...person };

copiedPerson.age = 30;

console.log(person.age); // 25 (Original not modified)
console.log(copiedPerson.age); // 30 (New object modified)
```

---

### ✅ Merging Objects
```js
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

If properties **overlap**, the right-most object overwrites the left-most.

```js
let obj1 = { name: "Alice", age: 25 };
let obj2 = { age: 30, city: "New York" };

let updatedPerson = { ...obj1, ...obj2 };

console.log(updatedPerson); // { name: "Alice", age: 30, city: "New York" }
```
(`age: 30` replaces `age: 25`)

---

# ⚡ **3. Using Spread in Function Arguments**
### ✅ Sending Array Elements as Arguments
Instead of `apply()`, use `...` to pass array elements as function arguments.

```js
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
```

---

# 🔥 **4. Spread vs Rest Operator**
- **Spread (`...`)** expands elements.
- **Rest (`...`)** collects elements.

### Example:
```js
function restExample(first, ...rest) {
    console.log(first); // 1
    console.log(rest); // [2, 3, 4, 5]
}

restExample(1, 2, 3, 4, 5);
```

---

# 🎯 **When to Use Spread Operator**
✅ Creating copies of arrays/objects without affecting the original  
✅ Merging arrays or objects  
✅ Passing multiple values into a function  

---

# 🎬 **Final Example**
```js
let person = { name: "Bob", age: 22 };
let skills = ["JS", "React", "Node.js"];

let newPerson = { ...person, skills: [...skills, "Python"] };

console.log(newPerson);
// { name: 'Bob', age: 22, skills: [ 'JS', 'React', 'Node.js', 'Python' ] }
```



In JavaScript, there are two primary ways arguments are passed to functions:

1. **Pass by Value** (for primitive types)
2. **Pass by Reference** (for objects and arrays)

Let’s break these down with examples.

---

## 1️⃣ Pass by Value (for Primitives)
When you pass **primitive data types** (like `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) to a function, a **copy** of the value is passed. This means the original variable is **not modified**.

### Example:
```js
function changeValue(x) {
    x = 20; // This only changes the local copy
}

let a = 10;
changeValue(a);
console.log(a); // Output: 10 (original value remains unchanged)
```
💡 **Why?**  
Because `a` holds a **copy** of `10`, not the actual memory reference.

---

## 2️⃣ Pass by Reference (for Objects and Arrays)
When you pass **objects** or **arrays**, a **reference** to the original data is passed, meaning **modifications inside the function affect the original object**.

### Example:
```js
function modifyObject(obj) {
    obj.name = "Changed"; // Modifying the original object
}

let person = { name: "Alice" };
modifyObject(person);
console.log(person.name); // Output: "Changed" (original object is modified)
```
💡 **Why?**  
Because `person` holds a reference to the object, so changes inside the function reflect on the original object.

---

## 3️⃣ Pass by Value vs. Pass by Reference in Arrays
Arrays also behave like objects since they are reference types.

### Example:
```js
function modifyArray(arr) {
    arr.push(4); // Modifies the original array
}

let numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers); // Output: [1, 2, 3, 4] (original array is changed)
```
💡 **Why?**  
Because `numbers` holds a reference to the array in memory.

---

## 4️⃣ Preventing Modification (Pass by Reference with a Copy)
If you want to avoid modifying the original object/array, pass a **copy** instead.

### Using `spread operator` (`...`):
```js
function modifyArray(arr) {
    arr = [...arr, 4]; // Creates a new array
    console.log(arr); // [1, 2, 3, 4]
}

let numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers); // [1, 2, 3] (original remains unchanged)
```

### Using `Object.assign()`:
```js
function modifyPerson(obj) {
    let newObj = Object.assign({}, obj);
    newObj.name = "Changed";
    console.log(newObj); // { name: "Changed" }
}

let person = { name: "Alice" };
modifyPerson(person);
console.log(person); // { name: "Alice" } (original remains unchanged)
```

---

## 🔥 Summary Table

| Data Type     | Passed By | Can Be Modified Inside Function? |
|--------------|----------|----------------------------------|
| `number`     | Value    | ❌ No |
| `string`     | Value    | ❌ No |
| `boolean`    | Value    | ❌ No |
| `object`     | Reference | ✅ Yes |
| `array`      | Reference | ✅ Yes |

---

## 🧐 Key Takeaways
- **Primitive types (`number`, `string`, etc.) are passed by value.**
- **Objects and arrays are passed by reference, meaning modifications affect the original data.**
- **To prevent modification, pass a copy using the spread operator (`...`), `Object.assign()`, or `JSON.parse(JSON.stringify(obj))`.**


# 🔁 **Recursion in JavaScript**  
Recursion is a technique where a function **calls itself** until a base condition is met. It is commonly used for problems that can be broken down into **smaller subproblems**, such as factorial, Fibonacci, and tree traversal.

---

## **🔹 1. Understanding Recursion**
A recursive function has **two parts**:  
1. **Base Case** → The condition to stop recursion.  
2. **Recursive Case** → The function calls itself with a smaller input.

### **Example: Countdown using Recursion**
```js
function countdown(n) {
    if (n <= 0) { // Base Case
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive Call
}

countdown(5);
```
### **🔍 How it works?**
```
countdown(5)
 ↓
countdown(4)
 ↓
countdown(3)
 ↓
countdown(2)
 ↓
countdown(1)
 ↓
countdown(0)  // Base case met: "Done!"
```

---

## **🔹 2. Factorial using Recursion**
Factorial of `n` (`n!`) is:
```
n! = n × (n-1) × (n-2) × ... × 1
```
Example:  
```
5! = 5 × 4 × 3 × 2 × 1 = 120
```
### **Recursive Solution**
```js
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Call
}

console.log(factorial(5)); // Output: 120
```

### **How it Works?**
```
factorial(5) → 5 × factorial(4)
factorial(4) → 4 × factorial(3)
factorial(3) → 3 × factorial(2)
factorial(2) → 2 × factorial(1)
factorial(1) → 1 (Base case)
```

---

## **🔹 3. Fibonacci Sequence using Recursion**
The Fibonacci sequence:
```
0, 1, 1, 2, 3, 5, 8, 13, ...
```
Formula:
```
fib(n) = fib(n-1) + fib(n-2)
```
### **Recursive Solution**
```js
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
```
💡 **Problem?**  
This has **exponential time complexity O(2ⁿ)**, making it slow for large `n`. We can optimize it using **memoization**.

### **Optimized Fibonacci (Memoization)**
```js
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n]; // Return if already computed
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(50)); // Fast!
```

---

## **🔹 4. Sum of an Array using Recursion**
```js
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0; // Base case
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

---

## **🔹 5. Reverse a String using Recursion**
```js
function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"
```

---

## **🔹 6. Traversing a Nested Object using Recursion**
```js
function printNested(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            printNested(obj[key]); // Recursive call
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

let data = {
    name: "Alice",
    info: {
        age: 25,
        address: {
            city: "New York",
            zip: 10001
        }
    }
};

printNested(data);
```

---

## **🔹 7. Tree Traversal (Recursive)**
### **Example Tree**
```js
let tree = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },
        { value: 3, children: [{ value: 6, children: [] }, { value: 7, children: [] }] }
    ]
};
```

### **Recursive Tree Traversal**
```js
function traverseTree(node) {
    console.log(node.value);
    for (let child of node.children) {
        traverseTree(child); // Recursive call
    }
}

traverseTree(tree);
```
📌 **Output:**  
```
1
2
4
5
3
6
7
```

---

## **⏳ Recursion vs Iteration**
| Feature  | Recursion  | Iteration  |
|----------|-----------|-----------|
| Memory Usage | Higher (stack calls) | Lower |
| Readability | Sometimes easier | Usually simpler |
| Performance | Slower for deep recursion | Faster |

⚠ **Stack Overflow:** Too many recursive calls can cause a **stack overflow** error. Use **iteration** or **tail recursion optimization** (if supported).

---

## **🎯 Key Takeaways**
- A recursive function **calls itself** until a base case is met.
- Useful for **problems with repetitive subproblems** (e.g., factorial, Fibonacci, tree traversal).
- Avoid deep recursion in JavaScript (use iteration or memoization when necessary).
- Be cautious of **stack overflow errors** in deep recursion.

---

🔥 **Want more practice?** Try implementing:
1. **Power function:** `power(base, exponent)`
2. **Find maximum in an array recursively**
3. **Checking if a number is a palindrome**

Let's break down **`setTimeout`** and **`setInterval`** — two essential tools for working with time in JavaScript.

---

# ⏱️ `setTimeout` and `setInterval` Explained

---

## ✅ 1. `setTimeout(fn, delay)`

### 🔹 What it does:
Runs a function **once** after a specified time.

### 🧪 Example:
```js
setTimeout(() => {
  console.log("⏰ This runs after 2 seconds");
}, 2000); // delay in milliseconds
```

🕐 The function runs **once** after `2000ms` (2 seconds).

### 🔁 Cancel with `clearTimeout`
```js
const timerId = setTimeout(() => {
  console.log("You won't see this");
}, 3000);

clearTimeout(timerId); // Cancels the above timeout
```

---

## ✅ 2. `setInterval(fn, interval)`

### 🔹 What it does:
Runs a function **repeatedly** at a given time interval.

### 🧪 Example:
```js
const intervalId = setInterval(() => {
  console.log("⏳ This runs every 1 second");
}, 1000);
```

📌 This keeps running **every 1000ms** (until stopped).

### ❌ Cancel with `clearInterval`
```js
clearInterval(intervalId); // Stops the repeated calls
```

---

## 🔁 Example: Count from 1 to 5 with `setInterval`

```js
let count = 1;
const id = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(id);
  }
}, 1000);
```

---

## 🧠 Difference Summary:

| Feature        | `setTimeout`                   | `setInterval`                |
|----------------|--------------------------------|------------------------------|
| Runs...        | Once after delay               | Repeatedly at intervals      |
| Use for...     | Delayed actions                | Repeating tasks (like clocks)|
| Cancel with... | `clearTimeout(id)`             | `clearInterval(id)`          |

---

## 🧪 Real-World Uses:

| Use Case               | Use               |
|------------------------|------------------|
| Splash screen delay     | `setTimeout`     |
| Auto-logout timer       | `setTimeout`     |
| Live clock updates      | `setInterval`    |
| Polling server every 5s | `setInterval`    |

---


Understanding **synchronous vs asynchronous JavaScript** and the **event loop** is *essential* for mastering how JavaScript actually works behind the scenes.

---

# 🧠 JavaScript: Synchronous vs Asynchronous + Event Loop

---

## 🔹 1. Synchronous JavaScript

JavaScript is **single-threaded** and **synchronous by default** — it runs one line at a time, in order.

### 🧪 Example:

```js
console.log("1");
console.log("2");
console.log("3");
```

📤 **Output**:
```
1
2
3
```

Everything blocks the next thing — **step by step**.

---

## 🔹 2. Asynchronous JavaScript

Some things (like `setTimeout`, `fetch`, Promises, etc.) can **run in the background**.

### 🧪 Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("End");
```

📤 **Output**:
```
Start
End
Inside timeout
```

> The timeout is **asynchronous** — it runs *later*, without blocking the flow.

---

## 🔄 3. The Event Loop (What makes this work)

The **Event Loop** is the engine behind async behavior in JS. Here's how it works:

### 🔧 Under the Hood:

1. Code runs **top to bottom** (call stack)
2. `setTimeout`, Promises, etc., are sent to the **Web APIs**
3. When ready, results are put into the **callback queue (or microtask queue)**
4. The **Event Loop** checks if the stack is empty, then pushes from the queue

### 🔁 Simple Visual:
```text
Call Stack:       [Main Code]
Web APIs:         [setTimeout]
Callback Queue:   [Timeout callback]
Event Loop:       (Checks & moves callback when stack is clear)
```

---

## 🧠 Example That Explains It All:

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

### 📤 Output:
```
1
4
3
2
```

### 🔍 Why?
- `1` and `4` → synchronous
- `Promise` → goes to **microtask queue**
- `setTimeout` → goes to **callback queue**
- **Microtasks run before timeouts**

---

## ✅ Summary Table

| Concept        | Description                               |
|----------------|-------------------------------------------|
| Synchronous    | Code runs in order, line-by-line          |
| Asynchronous   | Tasks can run later, without blocking     |
| Event Loop     | Manages async tasks and when they run     |
| Microtasks     | Promises, `queueMicrotask()`              |
| Macrotasks     | `setTimeout`, `setInterval`, etc.         |

---

## 📚 Real World Examples

| Use Case            | Sync/Async?    |
|---------------------|----------------|
| Reading a file      | Async (`fs.readFile`) in Node.js |
| Waiting for API     | Async (`fetch`, `axios`)         |
| Math calculation    | Sync                              |
| UI Click Handling   | Async via Event Loop              |

---




Let's start with a **visual explanation** of the **Event Loop** and then follow it up with a quick **quiz** to test your understanding. 🎯

---

## 🔁 Event Loop — Visual Flow

Imagine this step-by-step diagram in your head or notebook (I can also give you a downloadable version if you want):

```
             ┌────────────────────────┐
             │  Call Stack (Executes) │
             └────────▲───────────────┘
                      │
        ┌─────────────┴─────────────┐
        │     Your Code Runs        │  ← (console.log, math, etc.)
        └─────────────┬─────────────┘
                      │
          Async Task Called (e.g., setTimeout)
                      │
             ┌────────▼────────┐
             │    Web APIs     │  ← Browser handles timer, fetch, etc.
             └────────▲────────┘
                      │
       ┌──────────────┴─────────────┐
       │   Task ready to be queued  │
       └──────────────┬─────────────┘
                      │
          ┌───────────▼────────────┐
          │ Callback Queue (Macro) │
          └───────────┬────────────┘
                      │
          ┌───────────▼────────────┐
          │ Microtask Queue (e.g.  │
          │ Promises)              │
          └───────────┬────────────┘
                      │
            🌀 Event Loop (decides who goes into Call Stack)
```

- **Microtasks (Promises)** always run **before** Macrotasks (`setTimeout`)
- The **Call Stack must be empty** before the Event Loop picks the next task

---

## 🧠 Quick Quiz (Answer in your head or reply with answers)

### 1. What will be the output?

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

<details>
<summary>💡 Click to reveal answer</summary>

```
A
D
C
B
```

**Explanation**:
- `A` and `D`: sync
- `Promise`: microtask (runs after sync)
- `setTimeout`: macrotask (runs after microtasks)
</details>

---

### 2. Which runs **first** when both are ready?
- A: `setTimeout`
- B: `Promise.then()`

<details>
<summary>✅ Answer</summary>

**B: `Promise.then()`** runs first — microtasks always go before macrotasks.
</details>

---

### 3. Which of these is synchronous?
- A: `setInterval`
- B: `for` loop
- C: `fetch`
- D: `setTimeout`

<details>
<summary>✅ Answer</summary>

**B: `for` loop**
</details>

---





Here's a **realistic example of callback hell** — simulating a user login flow with nested asynchronous steps:

---

### 🔥 **Callback Hell Example: User Login Flow**

```js
function loginUser(username, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback({ username });
  }, 1000);
}

function getUserProfile(user, callback) {
  setTimeout(() => {
    console.log("Fetched user profile");
    callback({ ...user, profile: "Full Profile Data" });
  }, 1000);
}

function getUserPosts(profile, callback) {
  setTimeout(() => {
    console.log("Fetched user posts");
    callback(["Post 1", "Post 2"]);
  }, 1000);
}

function getPostComments(posts, callback) {
  setTimeout(() => {
    console.log("Fetched comments for posts");
    callback(["Nice post!", "Great read!"]);
  }, 1000);
}

// 🧨 Callback Hell in action
loginUser("john", function(user) {
  getUserProfile(user, function(profile) {
    getUserPosts(profile, function(posts) {
      getPostComments(posts, function(comments) {
        console.log("Final Result:", comments);
      });
    });
  });
});
```

---

### 🔍 What's wrong with this?

- Hard to **read**.
- Harder to **debug**.
- Difficult to **maintain** or **add features**.

---




Perfect! Let's take the **callback hell example** we saw earlier, and rewrite it using **`async/await`**, which is the cleanest and most readable way to handle asynchronous logic in modern JavaScript.

---

### 🔁 Recap: Callback Hell Example

```js
loginUser("john", function(user) {
  getUserProfile(user, function(profile) {
    getUserPosts(profile, function(posts) {
      getPostComments(posts, function(comments) {
        console.log("Final Result:", comments);
      });
    });
  });
});
```

This is hard to read, debug, and extend 😩

---

## ✅ Step 1: Turn each function into a Promise-based one

We'll reuse this:

```js
function loginUser(username) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ username });
    }, 1000);
  });
}

function getUserProfile(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched user profile");
      resolve({ ...user, profile: "Full Profile Data" });
    }, 1000);
  });
}

function getUserPosts(profile) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched user posts");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function getPostComments(posts) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched comments for posts");
      resolve(["Nice post!", "Great read!"]);
    }, 1000);
  });
}
```

---

## ✅ Step 2: Use `async/await` to replace the nested callbacks

```js
async function run() {
  try {
    const user = await loginUser("john");
    const profile = await getUserProfile(user);
    const posts = await getUserPosts(profile);
    const comments = await getPostComments(posts);

    console.log("Final Result:", comments);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

run();
```

---

### 🔍 Why this is better:

- Looks **synchronous**, reads **top to bottom**
- Easy to add `try/catch` for error handling
- Very **maintainable**

---


Let’s now convert the **callback hell example** into a version using **Promises with `.then()` and `.catch()`**.

---

### ✅ **Step-by-step Promise version (with `.then()` / `.catch()`)**

We’ll first convert each function to return a Promise:

```js
function loginUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ username });
    }, 1000);
  });
}

function getUserProfile(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user profile");
      resolve({ ...user, profile: "Full Profile Data" });
    }, 1000);
  });
}

function getUserPosts(profile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user posts");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function getPostComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comments for posts");
      resolve(["Nice post!", "Great read!"]);
    }, 1000);
  });
}
```

---

### 📦 Now using `.then()` and `.catch()` to chain them:

```js
loginUser("john")
  .then(user => getUserProfile(user))
  .then(profile => getUserPosts(profile))
  .then(posts => getPostComments(posts))
  .then(comments => {
    console.log("Final Result:", comments);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });
```

---

### ✅ Benefits of `.then()` / `.catch()`:

- No deeply nested functions.
- Each `.then()` step handles one task.
- `.catch()` handles errors anywhere in the chain.

---


Let's go **step-by-step**, from **basic to advanced**, to master **Promises** in JavaScript. This guide is structured like a mini-course.

---

# 🧠 JavaScript Promises: From Basic to Advanced

---

## 🔹 1. **What is a Promise?**

A **Promise** is a placeholder for a value that will **eventually** be available (or fail).

### States of a Promise:
- `pending`: still running
- `fulfilled`: finished successfully (calls `resolve`)
- `rejected`: failed (calls `reject`)

---

## 🔹 2. **Creating a Basic Promise**

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Success!");
    // Or: reject("❌ Failed!");
  }, 1000);
});
```

---

## 🔹 3. **Using `.then()` and `.catch()`**

```js
myPromise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.error("Rejected:", error));
```

- `.then()` → runs if resolved
- `.catch()` → runs if rejected

---

## 🔹 4. **Chaining Promises**

```js
function double(num) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 500);
  });
}

double(2)
  .then(result => double(result))
  .then(result => double(result))
  .then(result => console.log("Final result:", result));  // 16
```

Each `.then()` passes its result to the next.

---

## 🔹 5. **Handling Errors in Chain**

```js
doSomething()
  .then(result => doNextThing(result))
  .then(result => throw new Error("Oops"))
  .catch(err => {
    console.error("Caught an error:", err.message);
  });
```

If any `.then()` throws, the chain jumps to `.catch()`.

---

## 🔹 6. **Promise.all() — Run in Parallel**

Wait for **all** Promises to resolve:

```js
Promise.all([
  fetchData1(),
  fetchData2(),
  fetchData3()
])
.then(results => {
  console.log("All done:", results); // Array of results
})
.catch(err => console.error("One failed:", err));
```

---

## 🔹 7. **Promise.race() — First wins**

```js
Promise.race([
  slowFetch(),
  fastFetch()
])
.then(result => console.log("First finished:", result));
```

Returns the **first** settled Promise (resolve or reject).

---

## 🔹 8. **Promise.allSettled() — Wait for all outcomes**

```js
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("B"),
])
.then(results => {
  console.log(results);
  /*
  [
    { status: "fulfilled", value: "A" },
    { status: "rejected", reason: "B" }
  ]
  */
});
```

Useful when you **don’t want to stop** if one fails.

---

## 🔹 9. **Promise.any() — First to Fulfill**

```js
Promise.any([
  Promise.reject("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
])
.then(result => console.log(result))  // B
.catch(err => console.log("All failed"));
```

Only rejects if **all fail**.

---

## 🔹 10. **Creating Custom Delay with Promises**

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("1 second passed"));
```

---

## 🔹 11. **Error Propagation in Async Chains**

You can return `Promise.reject(...)` or throw an error to stop the chain:

```js
function risky() {
  return Promise.reject("Something went wrong");
}

risky()
  .then(() => console.log("Success")) // skipped
  .catch(err => console.error("Caught:", err));
```

---

## 🔹 12. **Combining with `async/await`**

Promises work beautifully with `async/await`:

```js
async function run() {
  try {
    const result = await myPromise;
    console.log("Success:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

## Summary Table:

| Feature              | Purpose                                  |
|----------------------|------------------------------------------|
| `.then()`            | Handle resolved value                    |
| `.catch()`           | Handle rejected value                    |
| `.finally()`         | Run after settled (success or failure)   |
| `Promise.all()`      | Wait for all Promises                    |
| `Promise.race()`     | Wait for the first to finish             |
| `Promise.allSettled()`| Get result of all, even if failed       |
| `Promise.any()`      | First successful one                     |

---





---

## 🍽️ Real-World Analogy: Ordering Pizza

### Imagine this flow:

1. Place an order 🍕
2. Restaurant prepares it 🔥
3. It gets delivered 🚗
4. You eat it 😋

---

### ✅ Step-by-step with Promises

```js
function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📦 Order placed");
      resolve("Pepperoni Pizza");
    }, 1000);
  });
}

function cookPizza(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👨‍🍳 Cooking", order);
      resolve(`${order} cooked`);
    }, 2000);
  });
}

function deliverPizza(cookedPizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚚 Delivering", cookedPizza);
      resolve(`${cookedPizza} delivered`);
    }, 1500);
  });
}

function eatPizza(deliveredPizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("😋 Eating", deliveredPizza);
      resolve("Yum! Done.");
    }, 1000);
  });
}
```

---

### 🔗 Chaining with `.then()`

```js
placeOrder()
  .then(order => cookPizza(order))
  .then(cooked => deliverPizza(cooked))
  .then(delivered => eatPizza(delivered))
  .then(finalMessage => console.log("✅", finalMessage))
  .catch(error => console.error("❌ Error:", error));
```

---

### ✅ Benefits:
- Every step returns a Promise
- Clean chaining with `.then()`
- Errors handled once with `.catch()`

---

### 🔄 Bonus: Same example with `async/await` (optional)

```js
async function orderFlow() {
  try {
    const order = await placeOrder();
    const cooked = await cookPizza(order);
    const delivered = await deliverPizza(cooked);
    const finalMessage = await eatPizza(delivered);

    console.log("✅", finalMessage);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

orderFlow();
```

---

---

## ✅ 1. `.then()` — Handle Resolved Value

`.then()` runs when the Promise is **fulfilled** (i.e., successful).

```js
const promise = Promise.resolve("🎉 Success!");

promise.then(result => {
  console.log("Resolved value:", result); // 🎉 Success!
});
```

---

## ✅ 2. `.catch()` — Handle Rejected Value

`.catch()` runs when the Promise is **rejected** (i.e., failed).

```js
const promise = Promise.reject("❌ Error happened");

promise.catch(error => {
  console.log("Caught error:", error); // ❌ Error happened
});
```

---

## ✅ 3. `.finally()` — Run After Settle (Success or Failure)

`.finally()` runs **no matter what** (after `.then()` or `.catch()`).

```js
Promise.resolve("✅ Done")
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("🧹 Cleaned up"));  // Always runs
```

Use this for cleanup like hiding a loader, closing modals, etc.

---

## ✅ 4. `Promise.all()` — Wait for All Promises

Runs multiple Promises in **parallel**, returns when **all are done**.

```js
const p1 = Promise.resolve("🧃 Juice");
const p2 = Promise.resolve("🍞 Bread");

Promise.all([p1, p2])
  .then(results => {
    console.log("All done:", results); // ["🧃 Juice", "🍞 Bread"]
  })
  .catch(err => {
    console.error("One failed:", err);
  });
```

🛑 If **any one fails**, it jumps to `.catch()` immediately.

---

## ✅ 5. `Promise.race()` — First to Finish Wins

Returns the result of the **first settled** Promise (resolved OR rejected).

```js
const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow..."), 1000));

Promise.race([fast, slow])
  .then(result => console.log("Winner:", result)); // 🚀 Fast!
```

Useful for timeouts, fallbacks, etc.

---

## ✅ 6. `Promise.allSettled()` — All Results (Even Failed Ones)

Returns an array of **status + value/reason** for all Promises.

```js
const p1 = Promise.resolve("✅ OK");
const p2 = Promise.reject("❌ Fail");

Promise.allSettled([p1, p2])
  .then(results => {
    console.log(results);
    /*
    [
      { status: "fulfilled", value: "✅ OK" },
      { status: "rejected", reason: "❌ Fail" }
    ]
    */
  });
```

Great when you want to **run all tasks** and handle each outcome individually.

---

## ✅ 7. `Promise.any()` — First One to Fulfill

Returns the first Promise that **fulfills**, ignoring rejections.

```js
const p1 = Promise.reject("🙅 Fail 1");
const p2 = Promise.resolve("🎯 Success!");
const p3 = Promise.resolve("✅ Another one");

Promise.any([p1, p2, p3])
  .then(result => console.log("First success:", result)) // 🎯 Success!
  .catch(() => console.log("All failed"));
```

🧠 If **all Promises fail**, `.catch()` is triggered.

---

## 🔁 Recap Table

| Feature               | Purpose                                  |
|------------------------|------------------------------------------|
| `.then()`              | Handle resolved value                    |
| `.catch()`             | Handle rejected value                    |
| `.finally()`           | Always runs at the end                   |
| `Promise.all()`        | Waits for all Promises to succeed        |
| `Promise.race()`       | Resolves/rejects with the first one      |
| `Promise.allSettled()` | Waits for all to settle (success/failure)|
| `Promise.any()`        | Returns first successful one             |

---
