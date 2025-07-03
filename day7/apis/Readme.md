Let’s start with the **basics of APIs in JavaScript (frontend)** and also explain **`JSON.parse()`** and **`JSON.stringify()`**, which are essential for working with APIs.

---

### 🌐 **What is an API (Application Programming Interface)?**
In frontend JavaScript, an **API** usually refers to a **web API**—a service you can request data from or send data to, using HTTP (e.g., GET, POST, PUT, DELETE).

Example: Getting weather data from OpenWeatherMap API.

---

## 📘 Basics of API Requests in JavaScript

### 🔹 1. `fetch()` - The Built-in API for Making Requests

```js
fetch('https://api.example.com/data')
  .then(response => response.json()) // parse JSON
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

- **`fetch()`** makes a network request.
- **`.then(response => response.json())`** reads and parses the JSON response.
- **`.catch()`** handles errors like network issues.

---

## 🔍 JSON: JavaScript Object Notation

APIs usually send and receive **JSON** data.

### ✨ `JSON.stringify()` → Object to JSON String
```js
const user = { name: 'Alice', age: 25 };
const jsonString = JSON.stringify(user);

console.log(jsonString); // '{"name":"Alice","age":25}'
```

### ✨ `JSON.parse()` → JSON String to Object
```js
const jsonStr = '{"name":"Alice","age":25}';
const parsedUser = JSON.parse(jsonStr);

console.log(parsedUser.name); // 'Alice'
```

These two functions are **critical** when sending or receiving data through APIs.

---

## 🚀 Advanced API Usage in Frontend JavaScript

### 🔸 2. Making a POST Request with `fetch`
```js
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alice',
    email: 'alice@example.com'
  })
})
.then(res => res.json())
.then(data => console.log('User created:', data))
.catch(err => console.error(err));
```

- `method`: HTTP method (GET, POST, PUT, DELETE)
- `headers`: Tells the server we are sending JSON
- `body`: Data we’re sending, as a JSON string

---

### 🔸 3. Using `async/await` (more readable)

```js
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

---

## 🧠 Pro-Level Topics to Cover Next

1. **Error handling and status codes (like 404, 500)**
2. **AbortController to cancel fetch requests**
3. **Debouncing requests**
4. **Handling CORS (Cross-Origin Resource Sharing)**
5. **Authentication with tokens (e.g., Bearer tokens, JWTs)**
6. **Using Axios (popular 3rd-party HTTP client)**
7. **Pagination, infinite scroll APIs**
8. **WebSockets (for real-time APIs like chat apps)**

---



## 🔄 Step 1: **Understanding HTTP Methods**

When calling APIs, you use different HTTP methods depending on the action:

| Method | What it does        | Example Use            |
|--------|---------------------|------------------------|
| `GET`  | Get data            | Get user profile       |
| `POST` | Create something    | Register a user        |
| `PUT`  | Update something    | Update user profile    |
| `DELETE`| Remove something  | Delete a user          |

```js
// Example of PUT
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Updated Name' })
});
```

---

## 🧱 Step 2: **Handling HTTP Status Codes**

When you call an API, it returns a **status code**:

| Code  | Meaning                     |
|-------|-----------------------------|
| 200   | OK (success)                |
| 201   | Created                     |
| 400   | Bad Request (client error)  |
| 401   | Unauthorized (needs login)  |
| 403   | Forbidden (no permission)   |
| 404   | Not Found                   |
| 500   | Server error                |

```js
async function getUser() {
  const res = await fetch('https://api.example.com/user');

  if (!res.ok) {
    console.error('API Error:', res.status); // handle 404, 500, etc.
    return;
  }

  const data = await res.json();
  console.log(data);
}
```

---

## ⛔ Step 3: **Aborting Fetch Requests**

Useful for canceling slow requests (e.g., user types fast in a search bar):

```js
const controller = new AbortController();

fetch('https://api.example.com/search?q=js', {
  signal: controller.signal
});

// Cancel the request if needed
controller.abort();
```

---

## 🔐 Step 4: **Authentication with Bearer Tokens (JWT)**

When APIs require you to log in, you often receive a **JWT token**. You include it in future requests:

```js
fetch('https://api.example.com/profile', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
});
```

You usually store the token in localStorage or sessionStorage (but securely!).

---

## ⚙️ Step 5: **Using Axios (Optional but Powerful)**

Axios is a popular alternative to `fetch`. It handles JSON by default and has cleaner error handling.

```bash
npm install axios
```

```js
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

---

## 🌀 Step 6: **Pagination / Infinite Scroll Example**

APIs sometimes give paged data:

```js
const page = 1;
fetch(`https://api.example.com/posts?page=${page}&limit=10`)
  .then(res => res.json())
  .then(data => {
    console.log(data.posts); // next time use page + 1
  });
```

---
