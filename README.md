
## 📌 1. `fetch(url, options)` — The Basics

* `url`: The API endpoint you're calling.
* `options`: An object where you set things like `method`, `headers`, and `body`.

This example is sending a **GET** request to `https://api.example.com/data` with **custom headers**.

---

## 🧠 Why Use `headers`?

**Headers** are like labels on a request. They:

* Tell the server **what kind of data** you’re sending (`Content-Type`)
* Identify **who you are** (`Authorization`)
* Control how data should be **interpreted** (`Accept`)
* Can carry **API keys**, tokens, or other custom info

---

## 🔐 2. What is `Authorization`?

This header is used to **prove your identity** to the server.
Many APIs require authentication — they don’t allow anyone to access data freely.

### 🔸 Common Types of Authorization

#### 🔹 a) **Bearer Token**

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

* "Bearer" means: *I’m sending a token as proof.*
* You usually get this token when you log in or register.

#### 🔹 b) Basic Auth

```http
Authorization: Basic base64(username:password)
```

* Used less often in public APIs now.

#### Example Use:

If you're building an app and a user logs in, you might get a token like:

```js
const token = "ey123.asd123..."; // JWT token
```

Then use it in `Authorization`:

```js
headers: {
  "Authorization": `Bearer ${token}`
}
```

---

## 📄 3. What is `Content-Type`?

This tells the server **what format** you’re sending or expecting.

### 🔸 Common Types:

| Content-Type                        | Meaning                   |
| ----------------------------------- | ------------------------- |
| `application/json`                  | Sending or receiving JSON |
| `text/plain`                        | Sending plain text        |
| `application/x-www-form-urlencoded` | Like HTML form data       |
| `multipart/form-data`               | Used for file uploads     |

### 🔸 Why It’s Needed:

When you `POST` or `PUT` data, like this:

```js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Nitin", age: 25 })
});
```

You're telling the server:

> "Hey, I'm sending JSON — not plain text or form data."

---

## ✅ Summary Table

| Option          | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `method: "GET"` | Tells the API this is a GET request                  |
| `headers`       | Additional info like `Authorization`, `Content-Type` |
| `Authorization` | Proves who you are to the server                     |
| `Bearer token`  | A way to send secure access keys                     |
| `Content-Type`  | Tells server the format of data you're sending       |

---

## 🧪 Real-Life Analogy

Imagine going to a hotel:

* **URL** = Hotel’s front desk
* **Headers** = Info you give (ID, booking confirmation)
* **Authorization** = Your ID to prove you’ve booked
* **Content-Type** = What type of message you're giving (email? printed copy?)


