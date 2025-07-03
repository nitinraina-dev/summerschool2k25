Absolutely! Here's a collection of **React prop-passing examples**, starting from **simple** to **advanced**:

---

## ✅ 1. **Basic Prop Passing**

```jsx
function Greet(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  return <Greet name="Nitin" />;
}
```

---

## ✅ 2. **Destructuring Props**

```jsx
function Greet({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

function App() {
  return <Greet name="Aman" age={21} />;
}
```

---

## ✅ 3. **Passing Numbers, Booleans, Arrays**

```jsx
function Profile({ score, isActive, hobbies }) {
  return (
    <>
      <p>Score: {score}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <ul>
        {hobbies.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </>
  );
}

function App() {
  return (
    <Profile
      score={95}
      isActive={true}
      hobbies={["Reading", "Gaming", "Coding"]}
    />
  );
}
```

---

## ✅ 4. **Passing an Object as a Prop**

```jsx
function Student({ data }) {
  return <h3>{data.name} - {data.course}</h3>;
}

function App() {
  const studentInfo = { name: "Priya", course: "React Basics" };
  return <Student data={studentInfo} />;
}
```

---

## ✅ 5. **Passing a Function as a Prop**

```jsx
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  const sayHello = () => alert("Hello!");

  return <Button handleClick={sayHello} />;
}
```

---

## ✅ 6. **Passing Children as Props**

```jsx
function Card({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>This is inside the card!</h2>
    </Card>
  );
}
```

---

## 🧠 Summary: Props can be...

| Type     | Example                          |
| -------- | -------------------------------- |
| String   | `<Comp name="Nitin" />`          |
| Number   | `<Comp age={21} />`              |
| Boolean  | `<Comp isActive={true} />`       |
| Array    | `<Comp list={[1, 2, 3]} />`      |
| Object   | `<Comp user={{name: "Aman"}} />` |
| Function | `<Comp onClick={handleClick} />` |
| Children | `<Comp>Some JSX</Comp>`          |

---

Would you like me to combine these into a **practice project** or a **cheatsheet PDF**?
