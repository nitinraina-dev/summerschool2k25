## 🌐 1. What Are Semantic Tags?

### 📘 Definition:

**Semantic HTML** uses meaningful tags that clearly describe their purpose and content.

| Tag         | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| `<header>`  | Top section of a page (logo, nav, title)               |
| `<nav>`     | Navigation links                                       |
| `<main>`    | Main content                                           |
| `<section>` | A section of related content                           |
| `<article>` | Independent, self-contained content (like a blog post) |
| `<aside>`   | Side content (ads, sidebars)                           |
| `<footer>`  | Bottom section (contact, copyright)                    |

### ❌ Non-Semantic Example:

```html
<div id="header">
  <div class="nav">...</div>
</div>
```

### ✅ Semantic Example:

```html
<header>
  <nav>...</nav>
</header>
```

### ✅ Why Use Semantic Tags?

* Improves **SEO** (Search Engine Optimization)
* Better for **accessibility** (screen readers)
* Easier to read and maintain code

---

## 🧱 2. Block vs Inline Elements

### 🧱 Block Elements

* Take **full width**
* Start on a **new line**
* You can add **width, height, margin, padding**
* Examples: `<div>`, `<p>`, `<h1>`, `<section>`, `<article>`, `<header>`

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

### 🔤 Inline Elements

* Take only as much **width as content**
* Do **not** start on a new line
* You **can’t set** width or height (normally)
* Examples: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`

```html
<p>This is a <span>highlighted</span> word in a paragraph.</p>
```

---

## 🧪 Mini Practice

### Task 1: Semantic Structure

Create a basic blog layout using semantic tags.

```html
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#">Home</a> | <a href="#">Posts</a>
  </nav>
</header>

<main>
  <article>
    <h2>Post Title</h2>
    <p>This is my blog post content.</p>
  </article>

  <aside>
    <h3>About Me</h3>
    <p>Hi, I'm Nitin.</p>
  </aside>
</main>

<footer>
  <p>Copyright © 2025</p>
</footer>
```

### Task 2: Inline vs Block

```html
<p>This is a <span style="color: red;">red word</span> inside a paragraph.</p>

<div>This is a block</div>
<div>This is another block</div>
```

---

## 🧠 Tips to Remember

* Use **block elements** for layout and structure.
* Use **inline elements** for styling small parts of text.
* Use **semantic tags** to describe meaning, not just appearance.

---

## **Introduction to CSS, Selectors, and Specificity (In-Depth Guide)**  

CSS (Cascading Style Sheets) is a language used to style HTML documents by controlling layout, colors, fonts, spacing, and more. It helps in separating content (HTML) from design (CSS), making websites more maintainable and visually appealing.

---

# **1. Introduction to CSS**
CSS can be applied in three ways:  

### **A. Inline CSS**  
Applied directly to an HTML element using the `style` attribute.
```html
<p style="color: red; font-size: 20px;">This is red text.</p>
```
- **Pros:** Quick and easy for small changes.
- **Cons:** Hard to maintain, not reusable.

### **B. Internal CSS**  
Defined inside a `<style>` tag within the `<head>` section of an HTML document.
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```
- **Pros:** Useful for styling a single page.
- **Cons:** Not reusable across multiple pages.

### **C. External CSS**  
Stored in a separate `.css` file and linked using the `<link>` tag.
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
**`styles.css` file:**
```css
p {
  color: green;
  font-size: 16px;
}
```
- **Pros:** Reusable across multiple pages, keeps HTML clean.
- **Cons:** Requires an additional HTTP request.

---

# **2. CSS Selectors**
Selectors determine which HTML elements a CSS rule applies to.

### **A. Basic Selectors**
1. **Universal Selector (`*`)**  
   - Selects all elements.
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```
   
2. **Type Selector (Element Selector)**  
   - Targets all instances of a specific HTML tag.
   ```css
   p {
     color: blue;
   }
   ```

3. **Class Selector (`.`)**  
   - Targets elements with a specific class.
   ```css
   .highlight {
     background-color: yellow;
   }
   ```

4. **ID Selector (`#`)**  
   - Targets an element with a specific `id`. (Should be unique per page)
   ```css
   #main-heading {
     font-size: 24px;
   }
   ```

---

### **B. Grouping & Combinators**
1. **Grouping Selector (`,`)**  
   - Applies the same styles to multiple selectors.
   ```css
   h1, h2, h3 {
     color: red;
   }
   ```

2. **Descendant Selector (` `)**  
   - Targets elements inside another element.
   ```css
   div p {
     color: green;
   }
   ```
   - Selects `<p>` inside a `<div>`, but not outside.

3. **Child Selector (`>`)**  
   - Targets direct child elements.
   ```css
   div > p {
     font-weight: bold;
   }
   ```

4. **Adjacent Sibling Selector (`+`)**  
   - Targets an element that immediately follows another.
   ```css
   h1 + p {
     color: gray;
   }
   ```
   - Selects `<p>` only if it comes right after `<h1>`.

5. **General Sibling Selector (`~`)**  
   - Targets all siblings after a specified element.
   ```css
   h1 ~ p {
     color: purple;
   }
   ```

---

### **C. Pseudo-Classes & Pseudo-Elements**
1. **Pseudo-Classes (`:`)**  
   - Used to define a special state of an element.
   ```css
   a:hover {
     color: red;
   }
   ```
   - Other examples: `:focus`, `:first-child`, `:nth-child(odd)`, `:nth-of-type(2n)`, etc.

2. **Pseudo-Elements (`::`)**  
   - Used to style specific parts of an element.
   ```css
   p::first-letter {
     font-size: 2em;
     color: red;
   }
   ```
   - Other examples: `::before`, `::after`, `::first-line`, etc.

---

# **3. CSS Specificity (How Conflicts are Resolved)**
CSS rules can conflict when multiple rules apply to the same element. Specificity determines which rule is applied.

### **A. Understanding Specificity Calculation**
Each selector gets a **specificity score**, calculated as:

- **Inline styles**: `1000` (Most powerful)
- **ID selectors (`#id`)**: `100`
- **Class selectors (`.class`), attributes (`[attr]`), pseudo-classes (`:hover`)**: `10`
- **Element selectors (`div`, `p`) and pseudo-elements (`::before`)**: `1`
- **Universal selector (`*`) and combinators (`+`, `>`, `~`)**: `0`

### **B. Example of Specificity Calculation**
```css
p { color: blue; }                 /* (1) */
.highlight { color: green; }       /* (10) */
#main { color: red; }              /* (100) */
style="color: yellow;"             /* (1000) */
```
If applied to:
```html
<p id="main" class="highlight" style="color: yellow;">Hello World</p>
```
Final color → **Yellow** (Inline style wins because `1000 > 100 > 10 > 1`).

---

# **4. Best Practices**
- **Use external CSS** for maintainability.
- **Minimize the use of `!important`** (Overrides all specificity but makes debugging hard).
- **Use classes (`.class`) over IDs (`#id`)** for better reusability.
- **Follow the cascade order**: Later stylesheets override earlier ones.
- **Keep selectors simple** to improve performance.

---

### **Conclusion**
Understanding CSS, selectors, and specificity helps you write clean, efficient, and maintainable styles. By practicing different selectors and specificity rules, you can create advanced styling solutions while avoiding conflicts.
