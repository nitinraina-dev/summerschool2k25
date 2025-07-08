Here’s a beginner-friendly, **in-depth explanation of `props`** in React, covering:

1. What are props
2. Passing multiple props
3. Default props
4. Function as props

---

### 🔹 1. What Are Props in React?

**Props** (short for **properties**) are used to **pass data** from a **parent component** to a **child component**.

#### Think of it like:

> Just like arguments passed to a function, props are data passed to a component.

#### Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Nitin" />;
}
```

Output:

```
Hello, Nitin!
```

---

### 🔹 2. Passing Multiple Props

You can pass as many props as you want.

#### Example:

```jsx
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <Student name="Ravi" age={21} course="React Basics" />
  );
}
```

---

### 🔹 3. Default Props

If a prop is **not passed**, React uses the **defaultProps** value.

#### Example:

```jsx
function Greet(props) {
  return <h3>Hello, {props.name}!</h3>;
}

// Default value if `name` not passed
Greet.defaultProps = {
  name: "Guest"
};

function App() {
  return <Greet />;
}
```

Output:

```
Hello, Guest!
```

---

### 🔹 4. Function as Props (Callback Props)

You can pass a **function** as a prop to a child component. The child can **call** it when needed.

#### Example:

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <Button onClick={handleClick} />;
}
```

Here:

* `handleClick` is defined in the parent (`App`)
* Passed as `onClick` to `Button`
* `Button` calls it when clicked

---

### ✅ Summary Table

| Feature          | Purpose                          | Example                             |
| ---------------- | -------------------------------- | ----------------------------------- |
| Basic prop       | Pass data to child               | `<Comp name="John" />`              |
| Multiple props   | Pass multiple values             | `<Comp name="John" age={20} />`     |
| Default props    | Fallback if prop not passed      | `Comp.defaultProps = { name: "X" }` |
| Function as prop | Child triggers parent’s function | `<Comp onClick={handleClick} />`    |

---


### 🔹 Destructuring Props in React

Destructuring is a **cleaner, shorter way** to access props directly **by name** instead of writing `props.name`, `props.age`, etc., every time.

---

### ✅ Basic Syntax

#### Instead of:

```jsx
function User(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### You can do:

```jsx
function User({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

---

### ✅ With Multiple Props

#### Without destructuring:

```jsx
function Profile(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

#### With destructuring:

```jsx
function Profile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

---

### ✅ In Function Body Instead of Parameters

Sometimes you want to keep `props` in the parameters and destructure inside the function body:

```jsx
function Profile(props) {
  const { name, age } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

This is useful when:

* You want to log the entire `props` object
* Or you're passing too many props

---

### ✅ Destructuring + Function as Prop

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const sayHi = () => alert('Hi!');
  return <Button label="Greet" onClick={sayHi} />;
}
```

---

### ✅ With Default Props + Destructuring

```jsx
function Greet({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greet />;
}
```

Here, destructuring and default value are combined inside the function parameter.

---

### ✅ Summary

| Style                    | Syntax                                       | When to Use                                        |
| ------------------------ | -------------------------------------------- | -------------------------------------------------- |
| `props.name`             | `function Comp(props) { return props.name }` | Beginners or when accessing whole `props` object   |
| `{ name }` in parameter  | `function Comp({ name }) {}`                 | Cleaner for short components                       |
| `const { name } = props` | Inside function                              | When you want both `props` and destructured values |

---


