The `useEffect` hook in React is used to **perform side effects** in functional components. Side effects are things like:

* Fetching data from an API
* Setting up subscriptions or timers
* Directly manipulating the DOM
* Logging to the console
* Updating the title of the page, etc.

---

### 🧠 Syntax:

```jsx
useEffect(() => {
  // Your side effect logic here

  return () => {
    // Optional cleanup (runs before the effect runs again or when component unmounts)
  };
}, [dependencies]);
```

---

### 🧪 Basic Example: Log on render

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Component rendered');
  });

  return <h1>Hello World</h1>;
}
```

This logs on **every render** because there is **no dependency array**.

---

### ✅ Run Only Once (ComponentDidMount)

```jsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

This runs **only once**, when the component mounts (like `componentDidMount` in class components).

---

### 🔁 Run When Dependency Changes

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);
```

This runs the effect **only when `count` changes**.

---

### ❌ Cleanup (Like `componentWillUnmount`)

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Cleanup: Timer stopped');
  };
}, []);
```

This sets up a timer, and **cleans it up when the component unmounts**.

---

### ⚠️ Rules of `useEffect`

1. Call `useEffect` at the top level of the component.
2. Do not call it inside loops, conditions, or nested functions.
3. You can have **multiple `useEffect` calls** in a single component.

---

### 🔍 Real-World Example: Fetching Data

```jsx
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Empty array means fetch only once on mount

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---
