
## 🧩 What are Props in React?

**Props** (short for *properties*) are a way to **send data** from a **parent component** to a **child component**.

📦 Think of props as **arguments** to a function.

---

### 👨‍👩‍👦 Example: Parent passing props to Child

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Nitin" />;
}
```

💬 `Greeting` gets `name` from `App` via props.

---

Now let’s use **props + counter + prev** in a simple full example.

---

## ✅ Counter App with Props and `prev`

### 👇 Full Working Code:

```jsx
import React, { useState } from 'react';

// Child component
function DisplayCounter({ count }) {
  return <h2>Current Count: {count}</h2>;
}

// Parent component
function Counter() {
  const [count, setCount] = useState(0);

  const increaseTwice = () => {
    // Using prev to safely update twice
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      {/* Passing count as a prop to child */}
      <DisplayCounter count={count} />
      
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={increaseTwice}>+2 (with prev)</button>
    </div>
  );
}

export default Counter;
```

---

### 🔍 What’s happening here?

* `Counter` is the **main/parent** component.
* `DisplayCounter` is the **child**, and it receives `count` as a **prop**.
* `count` is updated using `prev => prev + 1`, which makes updates safe and accurate.
* `increaseTwice()` calls `setCount` **two times**, so we use `prev` to get the correct updated value each time.

---

### 🧠 Why this example is useful:

* Shows **how props work** (parent to child)
* Uses **`useState`**
* Shows **why `prev` is safer** when doing multiple updates

---

