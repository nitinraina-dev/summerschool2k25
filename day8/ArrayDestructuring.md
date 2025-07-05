### ✅ Array Destructuring in JavaScript (In Depth)

**Array destructuring** is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise way.

---

### 🔹 Basic Syntax:

```js
const arr = [10, 20, 30];
const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

---

### 🔹 Skipping Elements

You can skip elements by leaving gaps:

```js
const arr = [1, 2, 3, 4];
const [first, , third] = arr;

console.log(first); // 1
console.log(third); // 3
```

---

### 🔹 Default Values

You can assign default values when elements are `undefined`.

```js
const arr = [5];
const [x, y = 10] = arr;

console.log(x); // 5
console.log(y); // 10
```

---

### 🔹 Swapping Variables

No need for a temporary variable!

```js
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

---

### 🔹 Destructuring with Rest Operator

Use `...rest` to gather the remaining elements.

```js
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

---

### 🔹 Nested Destructuring

You can destructure nested arrays too:

```js
const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;

console.log(b); // 2
console.log(c); // 3
```

---

### 🔹 Destructuring in Function Parameters

```js
function sum([a, b]) {
  return a + b;
}

console.log(sum([5, 10])); // 15
```

---

### ✅ Summary of Use-Cases

| Use-Case         | Syntax Example                   |
| ---------------- | -------------------------------- |
| Simple unpacking | `const [a, b] = [1, 2]`          |
| Skip values      | `const [a, , c] = [1, 2, 3]`     |
| Default values   | `const [a = 10] = []`            |
| Swap variables   | `[a, b] = [b, a]`                |
| Rest pattern     | `const [a, ...rest] = [1,2,3,4]` |
| Nested arrays    | `const [a, [b]] = [1, [2]]`      |

---

