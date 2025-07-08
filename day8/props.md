Props (short for **"properties"**) in React are a core concept that allow components to be **dynamic**, **reusable**, and **customizable**. Let's explore props in depth with **real examples**, **rules**, **types**, and **common patterns**.

---

## 🔸 1. What Are Props?

**Props are arguments passed from a parent component to a child component**. Think of them as function parameters, but for React components.

### 🧠 Key Idea:

React components are **functions** (or classes), and `props` is the **object** containing all the values you pass to that component.

---

## 🔸 2. Basic Example

```jsx
// App.jsx
import Welcome from './Welcome';

export default function App() {
  return <Welcome name="Nitin" />;
}

// Welcome.jsx
export default function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### Output:

```
Hello, Nitin!
```

---

## 🔸 3. Props are Read-Only

You **cannot modify props** inside the child component. They are **immutable** from the child's perspective.

```jsx
props.name = "Someone Else"; // ❌ This will throw an error
```

---

## 🔸 4. Destructuring Props

Instead of `props.name`, you can destructure directly:

```jsx
export default function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

This is cleaner and more readable.

---

## 🔸 5. Passing Different Types of Props

| Type     | Example                          |
| -------- | -------------------------------- |
| String   | `<Comp text="Hello" />`          |
| Number   | `<Comp age={25} />`              |
| Boolean  | `<Comp isLoggedIn={true} />`     |
| Array    | `<Comp items={[1, 2, 3]} />`     |
| Object   | `<Comp user={{ name: 'A' }} />`  |
| Function | `<Comp onClick={handleClick} />` |

Example:

```jsx
function Greet({ user }) {
  return <h2>Hi, {user.name}</h2>;
}
```

---

## 🔸 6. Default Props

You can define fallback values if a prop isn’t provided.

```jsx
function Greet({ name = "Guest" }) {
  return <h2>Hi, {name}</h2>;
}
```

Or use `Component.defaultProps`:

```jsx
Greet.defaultProps = {
  name: "Guest"
};
```

---

## 🔸 7. PropTypes (Optional but Useful)

To define **types** of props for safety:

```bash
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';

function Greet({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

Greet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

---

## 🔸 8. Children Props

Every component receives a special `props.children`, which contains what’s between the component’s tags.

```jsx
function Wrapper({ children }) {
  return <div className="box">{children}</div>;
}

<Wrapper>
  <p>This is wrapped content</p>
</Wrapper>
```

---

## 🔸 9. Spread Operator in Props

Pass multiple props at once:

```jsx
const user = { name: 'Nitin', age: 25 };
<Greet {...user} />
```

This is equivalent to:

```jsx
<Greet name="Nitin" age={25} />
```

---

## 🔸 10. Why Props Are Important

* **Reusability**: Write one component, use with different data.
* **Composition**: Build UI from smaller, prop-driven components.
* **Decoupling**: Parent controls data, child just displays it.

---

## 🔸 11. Functional Component vs Class Component Props

**Functional:**

```jsx
function Hello({ name }) {
  return <p>Hello, {name}</p>;
}
```

**Class:**

```jsx
class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}
```

---

## 🔸 12. Props vs State

| Aspect     | Props                     | State                          |
| ---------- | ------------------------- | ------------------------------ |
| Purpose    | Pass data **from parent** | Manage internal component data |
| Mutability | **Immutable**             | **Mutable**                    |
| Owner      | Parent                    | Component itself               |

---

## 🔸 Real World Analogy

Imagine you're a chef (`ChildComponent`) and your customer (`ParentComponent`) sends you an **order** (`props`) like:

```jsx
<Order dish="Pasta" spiceLevel="Medium" />
```

You don’t **decide the order** (that’s the parent), you just prepare and present it.

---
