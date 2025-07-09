### 🔁 Basic Conditional Rendering in React

Conditional rendering means **showing different UI elements** based on certain conditions. Just like JavaScript `if`, `else`, or ternary operators, React uses these inside **JSX**.

---

## ✅ 1. **Using `if` outside JSX**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

---

## ✅ 2. **Ternary Operator inside JSX**

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
  );
}
```

---

## ✅ 3. **Logical AND (`&&`)**

Good for rendering something *only when* a condition is true.

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      {hasMessage && <p>You have a new message!</p>}
    </div>
  );
}
```

---

## ✅ 4. **Switch Statement**

Useful for multiple conditions:

```jsx
function Status({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Loaded successfully!</p>;
    case 'error':
      return <p>Something went wrong.</p>;
    default:
      return <p>Unknown status.</p>;
  }
}
```

---

## ✅ 5. **Returning `null`**

Sometimes, you want to render **nothing**.

```jsx
function Warning({ show }) {
  if (!show) return null;

  return <div className="warning">⚠️ Warning!</div>;
}
```

