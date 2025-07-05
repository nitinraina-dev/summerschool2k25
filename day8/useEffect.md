
### 🧠 What is `useEffect`?

`useEffect` is a **React Hook** used to run side effects in a component.

Side effects are things like:

* Fetching data
* Setting up a timer
* Updating the document title
* Logging

---

### 📘 Syntax:

```jsx
useEffect(() => {
  // code to run after the component renders
}, [dependencies]);
```

---

### ✅ Simple Example: Change document title on button click

```jsx
import React, { useState, useEffect } from 'react';

function TitleChanger() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render when count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // <- only run when count changes

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default TitleChanger;
```

---

### 🔍 What happens here:

1. `useState(0)` — We start with `count = 0`.
2. When you click the button, `count` increases.
3. `useEffect` runs every time `count` changes and updates the **page title**.

---

### ⚠️ If you leave the dependency array empty:

```js
useEffect(() => {
  console.log("Runs once when component mounts");
}, []);
```

This runs only **once** when the component first renders (good for fetching data on load).

---
