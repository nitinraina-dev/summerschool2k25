Absolutely! Here's an **in-depth guide to object destructuring** in JavaScript:

---

## ✅ Object Destructuring in JavaScript (In Depth)

Object destructuring lets you extract values from **objects** and assign them to variables with matching property names.

---

### 🔹 Basic Syntax

```js
const user = { name: "Nitin", age: 25 };

const { name, age } = user;

console.log(name); // "Nitin"
console.log(age);  // 25
```

---

### 🔹 Different Variable Name (Alias)

You can rename variables while destructuring:

```js
const user = { name: "Nitin" };

const { name: userName } = user;

console.log(userName); // "Nitin"
```

> Now `userName` holds the value of `user.name`.

---

### 🔹 Default Values

You can set defaults for missing properties:

```js
const user = { name: "Nitin" };

const { name, age = 30 } = user;

console.log(age); // 30
```

---

### 🔹 Nested Object Destructuring

Works on nested objects too:

```js
const person = {
  name: "Nitin",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

const {
  address: { city, pincode }
} = person;

console.log(city);    // "Delhi"
console.log(pincode); // 110001
```

---

### 🔹 Destructuring in Function Parameters

Destructure objects directly in the function parameter:

```js
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Nitin", age: 25 });
// Output: Hello Nitin, age 25
```

---

### 🔹 Rest in Object Destructuring

Use the rest operator to collect remaining properties:

```js
const user = { name: "Nitin", age: 25, role: "Developer" };

const { name, ...rest } = user;

console.log(name); // "Nitin"
console.log(rest); // { age: 25, role: "Developer" }
```

---

### 🔹 Combined Example

```js
const student = {
  id: 101,
  name: "Nitin",
  scores: {
    math: 90,
    science: 95
  }
};

const {
  name,
  scores: { math, science }
} = student;

console.log(name);   // "Nitin"
console.log(math);   // 90
console.log(science);// 95
```

---

### ✅ Summary of Use-Cases

| Use-Case            | Syntax Example               |
| ------------------- | ---------------------------- |
| Basic               | `const { a, b } = obj`       |
| Rename              | `const { a: newName } = obj` |
| Default values      | `const { a = 10 } = obj`     |
| Nested objects      | `const { a: { b } } = obj`   |
| Rest operator       | `const { a, ...rest } = obj` |
| Function parameters | `function fn({ a, b }) {}`   |

---

