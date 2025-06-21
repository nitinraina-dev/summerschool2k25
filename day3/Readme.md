### **CSS Box Model Explained (In-Depth)**  

The **CSS Box Model** is fundamental to layout and design in web development. Every HTML element is considered a rectangular box, and the box model consists of four main components:

1. **Content** – The actual text or image inside the box.
2. **Padding** – The space between the content and the border.
3. **Border** – The boundary around the padding and content.
4. **Margin** – The space outside the border, separating elements.

Let's break down each part with examples.

---

## **1. Content**
This is where the actual content (text, image, etc.) resides. The content size is determined by `width` and `height`.

```css
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```
- The box will be **200px wide** and **100px tall**.
- The background color applies only to the content area.

---

## **2. Padding**
Padding is the space inside the element, between the content and the border. It increases the overall size of the element.

### **Example: Adding padding**
```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: lightblue;
}
```
- The total width of the element becomes:  
  **200px (width) + 20px (left padding) + 20px (right padding) = 240px**  
- The total height becomes:  
  **100px (height) + 20px (top padding) + 20px (bottom padding) = 140px**

### **Padding Shorthand**
```css
padding: 10px;       /* Applies to all sides */
padding: 10px 20px;  /* Top & bottom: 10px, Left & right: 20px */
padding: 10px 15px 5px;  /* Top: 10px, Left & right: 15px, Bottom: 5px */
padding: 10px 12px 8px 5px;  /* Top: 10px, Right: 12px, Bottom: 8px, Left: 5px */
```

### **Padding: box-sizing effect**
By default, `padding` increases the total element size, but setting `box-sizing: border-box;` keeps the width constant.

```css
.box {
  width: 200px;
  padding: 20px;
  box-sizing: border-box; /* Ensures total width remains 200px */
}
```

---

## **3. Border**
The border is the outline around the content and padding. It affects the total dimensions of the element.

### **Example: Adding a border**
```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  background-color: lightblue;
}
```
- The total width now becomes:  
  **200px (width) + 10px (left padding) + 10px (right padding) + 5px (left border) + 5px (right border) = 230px**
- The total height now becomes:  
  **100px (height) + 10px (top padding) + 10px (bottom padding) + 5px (top border) + 5px (bottom border) = 130px**

### **Border Shorthand**
```css
border: 5px solid red;  /* Width: 5px, Style: solid, Color: red */
border: 3px dashed blue;
border: 2px dotted green;
```

### **Individual Borders**
```css
border-top: 3px solid black;
border-right: 4px dashed blue;
border-bottom: 2px dotted red;
border-left: 5px double green;
```

---

## **4. Margin**
Margin is the space **outside** the border, used to create spacing between elements.

### **Example: Adding a margin**
```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```
- The total space occupied now includes the **margin**:  
  **200px (width) + 10px (left padding) + 10px (right padding) + 5px (left border) + 5px (right border) + 20px (left margin) + 20px (right margin) = 270px**

### **Margin Shorthand**
```css
margin: 10px;       /* All sides */
margin: 10px 20px;  /* Top & bottom: 10px, Left & right: 20px */
margin: 10px 15px 5px;  /* Top: 10px, Left & right: 15px, Bottom: 5px */
margin: 10px 12px 8px 5px;  /* Top: 10px, Right: 12px, Bottom: 8px, Left: 5px */
```

### **Margin Auto (Centering an Element)**
```css
.box {
  width: 200px;
  margin: 0 auto; /* Centers the box horizontally */
}
```

### **Negative Margins**
Margins can be negative, pulling elements closer.
```css
margin: -10px;  /* Moves element 10px closer */
```

---

## **Final Summary**
| Property  | Affects | Space Inside or Outside? |
|-----------|--------|-----------------|
| **Content** | The actual element size | Inside |
| **Padding** | Space between content and border | Inside |
| **Border** | The outline of the element | Inside |
| **Margin** | Space between elements | Outside |

---

## **Visualization of the Box Model**
```plaintext
| Margin (Outside Space)   |
|--------------------------|
| Border (Outline)         |
|--------------------------|
| Padding (Inner Space)    |
|--------------------------|
| Content (Actual Text)    |
```

### **Browser DevTools**
To inspect an element's box model in the browser:
1. Right-click an element → **Inspect**
2. Look at the **Computed** tab → **Box Model Diagram**

### **CSS Box Model Exercises**  

Here are some exercises to help you practice **content, padding, margin, and border** effectively.

---

## **Exercise 1: Basic Box Model**
**Task:**  
1. Create a `div` with a width of **300px** and a height of **150px**.  
2. Give it a **lightblue background**.  
3. Add **15px padding** on all sides.  
4. Add a **5px solid black border**.  
5. Add **20px margin** on all sides.  

**Expected Output:** A light blue box with space around it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model Exercise 1</title>
  <style>
    .box {
      width: 300px;
      height: 150px;
      background-color: lightblue;
      padding: 15px;
      border: 5px solid black;
      margin: 20px;
    }
  </style>
</head>
<body>

  <div class="box">This is a box.</div>

</body>
</html>
```

---

## **Exercise 2: Understanding `box-sizing`**
**Task:**  
1. Create a `div` with a width of **200px** and height of **100px**.  
2. Apply **20px padding** and a **5px solid red border**.  
3. Use `box-sizing: content-box;` (default).  
4. Create another `div` with the same properties, but apply `box-sizing: border-box;`.  

**Expected Output:** The second box should not expand beyond **200px width**, while the first one does.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Sizing Exercise</title>
  <style>
    .box1 {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid red;
      background-color: lightcoral;
      box-sizing: content-box; /* Default */
    }

    .box2 {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid blue;
      background-color: lightblue;
      box-sizing: border-box;
    }
  </style>
</head>
<body>

  <div class="box1">Content-Box Model</div>
  <br>
  <div class="box2">Border-Box Model</div>

</body>
</html>
```

---

## **Exercise 3: Centering an Element**
**Task:**  
1. Create a `div` with a width of **300px** and height of **100px**.  
2. Give it a **yellow background**.  
3. Center it horizontally using `margin: 0 auto;`.  

**Expected Output:** A yellow box centered in the middle of the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centering Box</title>
  <style>
    .center-box {
      width: 300px;
      height: 100px;
      background-color: yellow;
      margin: 0 auto;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="center-box">I am centered!</div>

</body>
</html>
```

---

## **Exercise 4: Negative Margins**
**Task:**  
1. Create a `div` with a width of **200px**, height of **100px**, and a **green background**.  
2. Add **negative margin (-20px) on the top** to make it overlap another element.  

**Expected Output:** The box should move up and overlap the previous box.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negative Margin</title>
  <style>
    .box {
      width: 200px;
      height: 100px;
      background-color: green;
      margin-top: -20px;
      color: white;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="box">I have negative margin!</div>

</body>
</html>
```

---

## **Exercise 5: Different Borders**
**Task:**  
1. Create a `div` with a **dashed red top border**, a **solid green right border**, a **dotted blue bottom border**, and a **double purple left border**.  

**Expected Output:** The box should have different styles of borders on each side.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Border Styles</title>
  <style>
    .border-box {
      width: 250px;
      height: 100px;
      background-color: lightgray;
      border-top: 4px dashed red;
      border-right: 4px solid green;
      border-bottom: 4px dotted blue;
      border-left: 4px double purple;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="border-box">Different Borders</div>

</body>
</html>
```

---

## **Bonus Challenge: Multiple Boxes Layout**
**Task:**  
1. Create **three boxes** side by side using `display: inline-block;`.  
2. Each box should have different padding, margins, and borders.  

**Expected Output:** The boxes should be next to each other with different styles.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Boxes</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      display: inline-block;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      margin: 10px;
    }

    .box1 {
      background-color: lightblue;
      padding: 10px;
      border: 3px solid black;
    }

    .box2 {
      background-color: lightcoral;
      padding: 20px;
      border: 2px dashed green;
    }

    .box3 {
      background-color: lightgoldenrodyellow;
      padding: 5px;
      border: 4px dotted red;
    }
  </style>
</head>
<body>

  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>

</body>
</html>
```

---

### **What Next?**
- Try adjusting values dynamically using **DevTools** (`Inspect` → `Computed` → `Box Model`).
- Experiment with `box-shadow`, `outline`, and different `border-radius` values.
- Create a **card layout** using a combination of padding, margins, and borders.



### **Understanding CSS Display Properties**  
CSS `display` determines how elements are visually represented in the layout of a webpage. Let's dive deep into the four major display properties:  

- **inline**  
- **block**
- **inline-block**  
- **flex**  
- **grid**  

---

## **1. Inline Elements (`display: inline;`)**  
### 🔹 **Characteristics:**  
✅ Takes up only as much width as necessary (does not force a new line)  
✅ Cannot set width & height explicitly  
✅ Sits in the same line as other elements  

### 🔹 **Common Inline Elements:**  
`<span>, <a>, <strong>, <em>, <img>`

### 🔹 **Example:**  
```html
<p>This is <span style="display: inline; background-color: yellow;">an inline span</span> inside a paragraph.</p>
```
👀 *The `<span>` only takes up space for its text and stays in the same line.*

---

## **2. Block Elements (`display: block;`)**  
### 🔹 **Characteristics:**  
✅ Takes up the full width of its container by default  
✅ Starts on a new line  
✅ Can have width & height set  

### 🔹 **Common Block Elements:**  
`<div>, <p>, <h1>-<h6>, <section>, <article>, <footer>`

### 🔹 **Example:**  
```html
<p style="display: block; background-color: lightblue;">This is a block paragraph.</p>
<div style="display: block; background-color: lightgreen;">This is a block div.</div>
```
👀 *Each block element takes full width and stacks below the previous one.*

---

## **3. Flexbox (`display: flex;`)**  
Flexbox is used for **one-dimensional layouts** (either row or column).  

### 🔹 **Characteristics:**  
✅ Aligns items in a flexible row or column  
✅ Distributes space efficiently  
✅ Supports alignment & order manipulation  

### 🔹 **Flexbox Properties:**  
- `flex-direction: row | column` (Default: `row`)  
- `justify-content: flex-start | center | space-between | space-around | space-evenly`  
- `align-items: flex-start | center | flex-end | stretch | baseline`  

### 🔹 **Example:**  
```html
<div style="display: flex; gap: 10px; background-color: lightgray; padding: 10px;">
  <div style="background: coral; padding: 10px;">Item 1</div>
  <div style="background: lightblue; padding: 10px;">Item 2</div>
  <div style="background: lightgreen; padding: 10px;">Item 3</div>
</div>
```
👀 *The items arrange in a row and maintain flexible spacing.*

---

## **4. CSS Grid (`display: grid;`)**  
Grid is used for **two-dimensional layouts** (both rows & columns).  

### 🔹 **Characteristics:**  
✅ Divides the container into rows & columns  
✅ Allows precise placement of items  
✅ Supports gaps between elements  

### 🔹 **Grid Properties:**  
- `grid-template-columns: auto | repeat(3, 1fr) | 100px 200px 100px`  
- `grid-template-rows: auto | repeat(2, 50px)`  
- `gap: 10px;`  

### 🔹 **Example:**  
```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background-color: lightgray; padding: 10px;">
  <div style="background: coral; padding: 10px;">Item 1</div>
  <div style="background: lightblue; padding: 10px;">Item 2</div>
  <div style="background: lightgreen; padding: 10px;">Item 3</div>
  <div style="background: yellow; padding: 10px;">Item 4</div>
  <div style="background: pink; padding: 10px;">Item 5</div>
  <div style="background: violet; padding: 10px;">Item 6</div>
</div>
```
👀 *Items are placed in a structured grid with equal column distribution.*

---

## **📝 Summary Table**  

| Display Type  | Takes Full Width? | Starts on New Line? | Width/Height Modifiable? | Best Use Case |
|--------------|-----------------|-----------------|---------------------|---------------|
| **Inline**  | ❌ No | ❌ No | ❌ No | Text styling (`<span>, <a>`) |
| **Block**  | ✅ Yes | ✅ Yes | ✅ Yes | Sections (`<div>, <p>, <h1>`) |
| **Flexbox**  | ✅ Yes | ✅ Yes | ✅ Yes | One-dimensional layouts |
| **Grid**  | ✅ Yes | ✅ Yes | ✅ Yes | Two-dimensional layouts |

---

## **🚀 When to Use What?**
✅ **Use `inline`** when styling a small text portion (e.g., `<span>`)  
✅ **Use `block`** for structural elements like sections & paragraphs  
✅ **Use `flexbox`** for aligning elements in a row/column efficiently  
✅ **Use `grid`** for designing full layouts with structured columns/rows  

# **CSS Grid: A Deep Dive 🚀**  

CSS Grid is a powerful layout system that allows you to create **two-dimensional** layouts with rows and columns. It makes designing complex layouts much easier compared to older techniques like floats or flexbox (which is one-dimensional).  

---

## **1️⃣ Basic Concepts of Grid**  
Before we jump into coding, let's break down the core concepts:  

### **📌 Grid Container & Grid Items**
- **Grid Container:** The element where `display: grid;` is applied.
- **Grid Items:** The direct child elements inside the grid container.

### **📌 Defining the Grid Layout**
- `grid-template-columns`: Defines the number and width of columns.
- `grid-template-rows`: Defines the number and height of rows.
- `gap`: Controls spacing between grid items.

---

## **2️⃣ Creating a Simple Grid Layout**
### **Example: Basic Grid with 3 Columns and 2 Rows**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Basic Grid</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 100px 200px 150px; /* 3 columns */
            grid-template-rows: 100px 100px; /* 2 rows */
            gap: 10px;
            background-color: lightgray;
            padding: 10px;
        }
        .grid-item {
            background: lightblue;
            text-align: center;
            font-size: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
</body>
</html>
```
### **🔍 Breakdown**
✅ `grid-template-columns: 100px 200px 150px;` → Creates **3 columns** with specific widths.  
✅ `grid-template-rows: 100px 100px;` → Creates **2 rows**, each **100px tall**.  
✅ `gap: 10px;` → Adds space **between grid items**.  

---

## **3️⃣ The `fr` Unit: Flexible Grid**
Instead of using fixed pixel values (`px`), we can use **fractional units (`fr`)** for a flexible layout.

### **Example: Equal Column Distribution**
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    grid-template-rows: 100px 100px; /* 2 rows */
}
```
### **🔍 Explanation**
- **`1fr 1fr 1fr`** → Each column takes an equal **fraction** of the available space.
- If the container is **900px wide**, each column will be **300px** wide.
- If the container resizes, all columns resize **proportionally**.

✅ **More Flexible & Responsive!**

---

## **4️⃣ Auto-Sizing Columns and Rows**
- `auto` → The column/row will size **based on content**.
- `minmax(min, max)` → Sets a minimum and maximum size.

### **Example: Dynamic Column Widths**
```css
.grid-container {
    display: grid;
    grid-template-columns: auto 1fr 2fr;
}
```
- **First column:** Auto-sized based on content.
- **Second column:** Takes 1 fraction of remaining space.
- **Third column:** Takes 2 fractions (twice as big as the second column).

---

## **5️⃣ Repeat Function**
Instead of writing out multiple columns manually, we can use `repeat()`.

### **Example: Creating 4 Equal Columns**
```css
grid-template-columns: repeat(4, 1fr);
```
This is the same as:
```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```
✅ **Saves time and makes the code cleaner!**

---

## **6️⃣ Positioning Grid Items (Column & Row Span)**
By default, grid items fill **one cell**, but we can **span** multiple columns or rows.

### **Example: Spanning Columns & Rows**
```css
.grid-item:nth-child(1) {
    grid-column: span 2; /* Item spans 2 columns */
}
.grid-item:nth-child(2) {
    grid-row: span 2; /* Item spans 2 rows */
}
```
✅ `grid-column: span 2;` → Expands across **2 columns**.  
✅ `grid-row: span 2;` → Expands across **2 rows**.

---

## **7️⃣ Grid Line Numbers**
Each **column** and **row** has **numbered grid lines** (starting from 1).

### **Example: Placing Items Using Grid Lines**
```css
.grid-item {
    grid-column-start: 1;
    grid-column-end: 3; /* Spans from column line 1 to 3 */
}
```
Alternatively:
```css
grid-column: 1 / 3;
```
✅ More **precise control** over item placement.

---

## **8️⃣ Justify & Align Content (Alignment in Grid)**
### **Horizontal Alignment (`justify-content`)**
- `start` → Aligns content to the left.
- `center` → Centers content.
- `end` → Aligns content to the right.
- `space-between` → Spaces items evenly.

### **Vertical Alignment (`align-content`)**
- Works the same way, but for **rows**.

### **Example: Centering Items**
```css
.grid-container {
    justify-content: center;
    align-content: center;
}
```
✅ **Everything is centered in the grid container!**

---

## **9️⃣ Grid Template Areas (Named Layouts)**
Instead of defining columns/rows manually, we can **name** sections.

### **Example: Website Layout**
```css
.grid-container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: auto;
}
.header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.main {
    grid-area: main;
}
.footer {
    grid-area: footer;
}
```
✅ Makes layouts **more readable & structured!**

---

## **🔟 Advanced Grid Example: Responsive Design**
### **Task:** Create a **responsive** grid that adjusts for different screen sizes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Responsive Grid</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
        }
        .grid-item {
            background: lightcoral;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
</body>
</html>
```
✅ Uses `auto-fit` and `minmax(200px, 1fr)` for **automatic responsiveness**!  

---

## **🔥 Summary: Why Use CSS Grid?**
✅ **Two-Dimensional Layouts** → Can control **both** rows & columns.  
✅ **More Powerful than Flexbox** → Flexbox is **one-dimensional**.  
✅ **Cleaner Code** → No need for extra divs like in `float` layouts.  
✅ **Easier Responsive Design** → `repeat()`, `auto-fit`, and `minmax()` make it easy.  

---

## **👨‍💻 What's Next?**
💡 Try building **a full-page layout** using Grid!  

---
Great! Here are some **hands-on exercises** to practice `display: inline`, `block`, `flex`, and `grid`.  

---

## **📝 Exercise 1: Inline vs Block**
### **Task:**  
1. Create a paragraph with inline `<span>` elements.  
2. Add a `<div>` inside a paragraph and observe how it behaves.  

### **Code to Try:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Inline vs Block</title>
</head>
<body>
    <p>This is an <span style="background-color: yellow;">inline element</span> inside a paragraph.</p>

    <p>This is a <div style="background-color: lightblue;">block element</div> inside a paragraph.</p>
</body>
</html>
```
### **🔍 Expected Output:**  
- The `<span>` stays **inside** the same line.  
- The `<div>` **breaks** the line and starts a new one.  

---

## **📝 Exercise 2: Using `display: flex;`**
### **Task:**  
1. Create a `div` with three child elements.  
2. Apply `display: flex;` and align them in a row.  

### **Code to Try:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Flexbox Practice</title>
    <style>
        .container {
            display: flex;
            background-color: lightgray;
            padding: 10px;
            gap: 10px;
        }
        .box {
            background: coral;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```
### **🔍 Expected Output:**  
- All boxes align **in a row** with space between them.  

💡 **Bonus Challenge:** Add `justify-content: center;` inside `.container` and see what happens!

---

## **📝 Exercise 3: Using `display: grid;`**
### **Task:**  
1. Create a `div` with six child elements.  
2. Apply `display: grid;` with three columns.  

### **Code to Try:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Grid Practice</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            background-color: lightgray;
            padding: 10px;
        }
        .grid-item {
            background: lightblue;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
</body>
</html>
```
### **🔍 Expected Output:**  
- The items arrange **in a 3-column grid.**  

💡 **Bonus Challenge:** Change `grid-template-columns: repeat(2, 1fr);` to create **2 columns instead!**  

---

## **🚀 Final Challenge: Mini Layout**
### **Task:**  
1. Create a **navbar** using `flexbox`.  
2. Create a **main content area** using `grid`.  

### **Code to Try:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mini Layout</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        /* Navbar */
        .navbar {
            display: flex;
            background: navy;
            color: white;
            padding: 10px;
            justify-content: space-between;
        }
        /* Grid Layout */
        .content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 10px;
            padding: 10px;
        }
        .sidebar {
            background: lightgray;
            padding: 20px;
        }
        .main {
            background: lightblue;
            padding: 20px;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <div>Logo</div>
        <div>Menu</div>
    </div>

    <div class="content">
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
    </div>

</body>
</html>
```
### **🔍 Expected Output:**  
✅ A **navbar** at the top.  
✅ A **sidebar** on the left and **content** on the right.  

💡 **Bonus Challenge:** Add `align-items: center;` inside `.navbar` to center the text vertically!  

---

### **🙌 What’s Next?**
Try modifying the values and observe the changes! 

 **colors, backgrounds, typography, and gradients** in depth, I'll break each topic down with essential properties, examples, and best practices.  

---

## **1. Colors in CSS**
CSS provides multiple ways to define colors:  
- **Named Colors** (e.g., `red`, `blue`, `green`)  
- **HEX Codes** (e.g., `#ff5733`)  
- **RGB/RGBA** (e.g., `rgb(255, 87, 51)`, `rgba(255, 87, 51, 0.5)`)  
- **HSL/HSLA** (e.g., `hsl(9, 100%, 64%)`, `hsla(9, 100%, 64%, 0.5)`)  

### **Common Color Properties**  
```css
/* Text Color */
h1 {
  color: #ff5733;
}

/* Background Color */
body {
  background-color: rgba(0, 0, 255, 0.3);
}

/* Border Color */
div {
  border: 2px solid hsl(120, 100%, 50%);
}
```

### **Opacity**
Opacity makes an element partially transparent.  
```css
div {
  background-color: blue;
  opacity: 0.5; /* 0 (fully transparent) to 1 (fully opaque) */
}
```

### **Mixing Colors**  
Use **`mix-blend-mode`** to blend colors dynamically.  
```css
.overlay {
  background-color: red;
  mix-blend-mode: multiply;
}
```

---

## **2. Backgrounds in CSS**
CSS backgrounds allow various effects, including images, gradients, and multiple layers.  

### **Basic Properties**
```css
body {
  background-color: lightgray; /* Solid color */
  background-image: url("image.jpg"); /* Background image */
  background-repeat: no-repeat; /* Prevent repetition */
  background-position: center center; /* Positioning */
  background-size: cover; /* Full coverage */
}
```

### **Multiple Backgrounds**
```css
div {
  background: url("stars.png"), linear-gradient(to right, red, blue);
}
```

### **Background Attachment**
```css
div {
  background-attachment: fixed; /* Stays fixed while scrolling */
}
```

---

## **3. Typography in CSS**
Typography controls how text appears on a webpage.

### **Font Family**
```css
p {
  font-family: "Arial", sans-serif;
}
```

### **Font Size & Units**
```css
h1 {
  font-size: 2rem; /* Relative to root font size */
}
```

### **Font Weight & Style**
```css
p {
  font-weight: bold;
  font-style: italic;
}
```

### **Text Alignment & Spacing**
```css
p {
  text-align: justify;
  letter-spacing: 2px;
  word-spacing: 5px;
  line-height: 1.5;
}
```

### **Text Decoration & Transformation**
```css
a {
  text-decoration: underline;
}

h2 {
  text-transform: uppercase;
}
```

---

## **4. Gradients in CSS**
CSS gradients allow smooth color transitions.

### **Linear Gradient**
```css
div {
  background: linear-gradient(to right, red, blue);
}
```

### **Radial Gradient**
```css
div {
  background: radial-gradient(circle, red, blue);
}
```

### **Conic Gradient**
```css
div {
  background: conic-gradient(red, yellow, green, blue);
}
```

---

## **Summary of Key Properties**
| Category  | Properties |
|-----------|------------|
| Colors | `color`, `background-color`, `opacity`, `mix-blend-mode` |
| Backgrounds | `background-image`, `background-size`, `background-position`, `background-repeat`, `background-attachment` |
| Typography | `font-family`, `font-size`, `font-weight`, `text-align`, `letter-spacing`, `word-spacing`, `text-transform`, `text-decoration` |
| Gradients | `linear-gradient()`, `radial-gradient()`, `conic-gradient()` |

I'll break down each topic into a **detailed process**, covering **theory, properties, and practical exercises**.  

---

# **1. Colors in CSS**
Colors are essential for styling, creating contrast, and improving readability.  

## **Step 1: Understanding Color Models**
CSS supports different ways to define colors:  
- **Named Colors**: `red`, `blue`, `green`  
- **HEX Codes**: `#ff5733` (red-orange)  
- **RGB/RGBA**: `rgb(255, 87, 51)` / `rgba(255, 87, 51, 0.5)`  
- **HSL/HSLA**: `hsl(9, 100%, 64%)` / `hsla(9, 100%, 64%, 0.5)`  

## **Step 2: Applying Colors**
### **Text Color**
```css
h1 {
  color: #ff5733; /* Red-orange */
}
```

### **Background Color**
```css
body {
  background-color: rgba(0, 0, 255, 0.3); /* Semi-transparent blue */
}
```

### **Border Color**
```css
div {
  border: 3px solid hsl(120, 100%, 50%); /* Bright green */
}
```

## **Step 3: Adjusting Transparency**
```css
.box {
  background-color: red;
  opacity: 0.5; /* Makes it 50% transparent */
}
```

### **Exercise: Create a Color Palette**
1. Choose three colors (Primary, Secondary, Accent).  
2. Apply them to a webpage using text, background, and borders.  

---

# **2. Backgrounds in CSS**
CSS backgrounds allow customization with images, gradients, and multiple layers.  

## **Step 1: Solid Background Colors**
```css
body {
  background-color: #f4f4f4; /* Light gray */
}
```

## **Step 2: Background Images**
```css
body {
  background-image: url("pattern.png");
  background-repeat: repeat; /* Tiles the image */
}
```

## **Step 3: Positioning Background Images**
```css
div {
  background-image: url("landscape.jpg");
  background-position: center center;
  background-size: cover;
}
```

## **Step 4: Using Multiple Backgrounds**
```css
div {
  background: url("stars.png"), linear-gradient(to right, red, blue);
}
```

### **Exercise: Create a Hero Section**
1. Set a full-page background image.  
2. Add an overlay color with transparency.  

---

# **3. Typography in CSS**
Typography enhances readability and design aesthetics.  

## **Step 1: Choosing a Font**
```css
body {
  font-family: "Arial", sans-serif;
}
```
Use [Google Fonts](https://fonts.google.com/) for custom fonts.  
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: "Roboto", sans-serif;
}
```

## **Step 2: Adjusting Font Size**
```css
h1 {
  font-size: 2rem; /* Relative size */
}
```

## **Step 3: Font Weight & Style**
```css
p {
  font-weight: bold;
  font-style: italic;
}
```

## **Step 4: Line Spacing & Letter Spacing**
```css
p {
  line-height: 1.5;
  letter-spacing: 2px;
}
```

## **Step 5: Text Alignment & Transformation**
```css
h1 {
  text-align: center;
  text-transform: uppercase;
}
```

## **Step 6: Text Shadow for Effects**
```css
h1 {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```

### **Exercise: Create a Typography System**
1. Choose fonts for headings and paragraphs.  
2. Adjust size, spacing, and alignment.  

---

# **4. Gradients in CSS**
Gradients create smooth transitions between colors.

## **Step 1: Linear Gradient**
```css
div {
  background: linear-gradient(to right, red, blue);
}
```
Direction options:  
- `to left`  
- `to top`  
- `45deg`  

## **Step 2: Radial Gradient**
```css
div {
  background: radial-gradient(circle, red, blue);
}
```

## **Step 3: Conic Gradient**
```css
div {
  background: conic-gradient(red, yellow, green, blue);
}
```

### **Exercise: Create a Button with Gradient**
1. Apply a linear gradient to a button.  
2. Change the color on hover.  

---

# **Final Challenge**
Build a **landing page** using everything learned:
✅ Custom color scheme  
✅ Background images & gradients  
✅ Typography with Google Fonts  
✅ Responsive layout  
### Teaching CSS Animations and Transitions in Detail  

When teaching **CSS animations and transitions**, it's best to start with **transitions** because they are simpler. Once students understand them, we move on to **animations** for more control and complexity.  

---

## **1. CSS Transitions**  
**Definition:** CSS transitions allow changes in CSS properties to occur smoothly over a duration, rather than happening instantly.  

### **Syntax:**  
```css
selector {
  transition: property duration timing-function delay;
}
```
- **property** – The CSS property you want to animate (e.g., `background-color`, `width`).  
- **duration** – Time in seconds (`s`) or milliseconds (`ms`) for the transition.  
- **timing-function** – Defines acceleration (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`).  
- **delay** – Delay before the transition starts.  

### **Example 1: Basic Hover Effect**  
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: background-color 0.5s ease-in-out;
}

.box:hover {
  background-color: red;
}
```
**Explanation:** When hovered, the background changes from blue to red over `0.5s`.  

### **Example 2: Multiple Properties in Transition**  
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 1s ease-in-out, background-color 0.5s ease;
}

.box:hover {
  width: 200px;
  background-color: red;
}
```
**Explanation:** The width change takes `1s`, and the color change takes `0.5s`.  

### **Example 3: Transform with Transition**  
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: transform 0.5s ease-in-out;
}

.box:hover {
  transform: scale(1.5);
}
```
**Explanation:** The box scales up when hovered.  

---

## **2. CSS Animations**  
**Definition:** Unlike transitions, animations allow more complex sequences with keyframes and looping.  

### **Syntax:**  
```css
@keyframes animation-name {
  from { property: value; }
  to { property: value; }
}

selector {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}
```
- **animation-name** – Name of the keyframes animation.  
- **duration** – Time for one cycle of the animation.  
- **timing-function** – Controls speed changes (`ease`, `linear`, `ease-in`, `ease-out`).  
- **delay** – Time before animation starts.  
- **iteration-count** – Number of times the animation runs (`infinite` for continuous animation).  
- **direction** – `normal`, `reverse`, `alternate`, `alternate-reverse`.  
- **fill-mode** – `none`, `forwards`, `backwards`, `both` (defines how the animation state should appear before and after it runs).  

### **Example 1: Simple Keyframe Animation**  
```css
@keyframes colorChange {
  from { background-color: blue; }
  to { background-color: red; }
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: colorChange 2s ease-in-out infinite alternate;
}
```
**Explanation:** The box smoothly changes between blue and red every 2 seconds.  

### **Example 2: Multi-Step Keyframe Animation**  
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: bounce 1s ease-in-out infinite;
}
```
**Explanation:** The box moves up and down like a bouncing effect.  

### **Example 3: Rotating Animation**  
```css
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: rotate 2s linear infinite;
}
```
**Explanation:** The box continuously rotates.  

---

## **3. Combining Animations and Transitions**  
You can use **both transitions and animations** together for a more dynamic effect.  

### **Example: Button Click Animation with Transition**  
```css
.button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button:active {
  transform: scale(0.9);
}
```
**Explanation:** When clicked, the button shrinks slightly for a subtle click effect.  

---

## **4. Real-World Use Cases**
1. **Hover Effects** – Smoothly change colors, sizes, or add effects like shadows.  
2. **Loading Animations** – Show spinners or progress indicators.  
3. **Button Interactions** – Click, hover, and focus effects for better UX.  
4. **Background Animations** – Moving gradients, waves, or animated text.  
5. **Scroll Animations** – Elements appearing with fade or slide-in effects.  

---

## **5. Exercise for Students**
1. **Create a bouncing ball** that moves left to right using keyframes.  
2. **Animate a progress bar** that fills up over time.  
3. **Design a pulsing effect** for a button when hovered.  
4. **Make an element fade in and out** continuously.  
Here are 10 examples of CSS transitions with explanations:

### 1. **Smooth Background Color Change**
```css
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    transition: background-color 0.5s ease;
}

.button:hover {
    background-color: red;
}
```
🔹 Changes the background color smoothly when hovered.

---

### 2. **Width Expansion**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: green;
    transition: width 0.5s ease-in-out;
}

.box:hover {
    width: 200px;
}
```
🔹 Increases the width when hovered.

---

### 3. **Fading Effect (Opacity)**
```css
.text {
    opacity: 1;
    transition: opacity 0.5s ease;
}

.text:hover {
    opacity: 0.3;
}
```
🔹 Reduces the opacity on hover.

---

### 4. **Rotate on Hover**
```css
.square {
    width: 100px;
    height: 100px;
    background: purple;
    transition: transform 0.5s ease-in-out;
}

.square:hover {
    transform: rotate(45deg);
}
```
🔹 Rotates the element when hovered.

---

### 5. **Scale (Zoom In) Effect**
```css
.image {
    width: 200px;
    transition: transform 0.3s ease;
}

.image:hover {
    transform: scale(1.2);
}
```
🔹 Enlarges the image on hover.

---

### 6. **Button Press Effect (Shrink)**
```css
.button {
    padding: 10px 20px;
    background-color: orangered;
    transition: transform 0.2s ease;
}

.button:active {
    transform: scale(0.9);
}
```
🔹 Shrinks the button when clicked.

---

### 7. **Border Radius Transition**
```css
.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: border-radius 0.5s ease-in-out;
}

.circle:hover {
    border-radius: 50%;
}
```
🔹 Transforms a square into a circle when hovered.

---

### 8. **Sliding Text Effect**
```css
.text {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
}

.text:hover {
    left: 20px;
}
```
🔹 Moves the text slightly when hovered.

---

### 9. **Shadow Glow Effect**
```css
.card {
    width: 200px;
    height: 100px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s ease;
}

.card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}
```
🔹 Increases the shadow effect on hover.

---

### 10. **Text Color Transition**
```css
.link {
    color: black;
    text-decoration: none;
    transition: color 0.5s ease;
}

.link:hover {
    color: red;
}
```
🔹 Changes the text color smoothly on hover.

These transitions make UI elements feel more interactive and engaging. 

Here are **10 CSS animation examples** with explanations:  

---

### **1. Bounce Animation**
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.bounce {
    animation: bounce 1s infinite;
}
```
🔹 The element moves up and down like a bouncing ball.  

---

### **2. Fade In Animation**
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade {
    animation: fadeIn 2s ease-in-out;
}
```
🔹 Smoothly fades the element in.  

---

### **3. Rotate Animation**
```css
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.rotate {
    animation: rotate 2s linear infinite;
}
```
🔹 Continuously rotates the element.  

---

### **4. Pulse Animation**
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.pulse {
    animation: pulse 1.5s infinite;
}
```
🔹 The element expands and contracts like a heartbeat.  

---

### **5. Slide In from Left**
```css
@keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.slide-in {
    animation: slideIn 1s ease-out;
}
```
🔹 The element slides in smoothly from the left.  

---

### **6. Shake Effect**
```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.5s ease-in-out infinite;
}
```
🔹 The element shakes from side to side.  

---

### **7. Expand and Contract**
```css
@keyframes expand {
    0%, 100% { width: 100px; }
    50% { width: 200px; }
}

.expand {
    animation: expand 2s infinite alternate ease-in-out;
}
```
🔹 The width of the element increases and decreases.  

---

### **8. Flip Animation**
```css
@keyframes flip {
    from { transform: rotateY(0); }
    to { transform: rotateY(180deg); }
}

.flip {
    animation: flip 1s linear infinite;
}
```
🔹 The element flips horizontally.  

---

### **9. Loading Spinner**
```css
@keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid lightgray;
    border-top-color: blue;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
}
```
🔹 Creates a simple loading spinner.  

---

### **10. Typewriter Effect**
```css
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.typewriter {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid black;
    animation: typing 3s steps(20, end) forwards;
}
```
🔹 Creates a typewriter-style text animation.  

---

## **Complete HTML + CSS Code**
Here's a **combined version** of all 10 animations in a single file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .container {
            text-align: center;
            padding: 20px;
        }

        /* 1. Bounce Animation */
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .bounce {
            animation: bounce 1s infinite;
        }

        /* 2. Fade In Animation */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade {
            animation: fadeIn 2s ease-in-out;
        }

        /* 3. Rotate Animation */
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .rotate {
            animation: rotate 2s linear infinite;
        }

        /* 4. Pulse Animation */
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        .pulse {
            animation: pulse 1.5s infinite;
        }

        /* 5. Slide In from Left */
        @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .slide-in {
            animation: slideIn 1s ease-out;
        }

        /* 6. Shake Effect */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25%, 75% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
        }
        .shake {
            animation: shake 0.5s ease-in-out infinite;
        }

        /* 7. Expand and Contract */
        @keyframes expand {
            0%, 100% { width: 100px; }
            50% { width: 200px; }
        }
        .expand {
            animation: expand 2s infinite alternate ease-in-out;
        }

        /* 8. Flip Animation */
        @keyframes flip {
            from { transform: rotateY(0); }
            to { transform: rotateY(180deg); }
        }
        .flip {
            animation: flip 1s linear infinite;
        }

        /* 9. Loading Spinner */
        @keyframes spinner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid lightgray;
            border-top-color: blue;
            border-radius: 50%;
            animation: spinner 1s linear infinite;
        }

        /* 10. Typewriter Effect */
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        .typewriter {
            width: 0;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid black;
            animation: typing 3s steps(20, end) forwards;
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            margin: 10px;
        }
    </style>
</head>
<body>

    <div class="container"><div class="box bounce"></div>Bounce</div>
    <div class="container"><div class="box fade"></div>Fade In</div>
    <div class="container"><div class="box rotate"></div>Rotate</div>
    <div class="container"><div class="box pulse"></div>Pulse</div>
    <div class="container"><div class="box slide-in"></div>Slide In</div>
    <div class="container"><div class="box shake"></div>Shake</div>
    <div class="container"><div class="box expand"></div>Expand</div>
    <div class="container"><div class="box flip"></div>Flip</div>
    <div class="container"><div class="spinner"></div>Loading Spinner</div>
    <div class="container"><p class="typewriter">Typing Animation</p></div>

</body>
</html>
```

✅ **Try this out!** It includes all **10 animations** in one place. 🚀

## CSS Media Queries: A Complete Guide  

### **What Are Media Queries?**  
CSS media queries allow you to apply styles based on the device's screen size, resolution, or other properties. This is essential for creating **responsive** web designs that look good on all screen sizes.

---

### **Basic Syntax of Media Queries**
```css
@media (condition) {
  /* CSS styles here */
}
```
Example:  
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
This means **if the screen width is 600px or less, the background color will change to light blue.**

---

### **Common Media Query Conditions**
| Condition | Description |
|-----------|-------------|
| `max-width` | Applies styles when the screen width is **below** the given value |
| `min-width` | Applies styles when the screen width is **above** the given value |
| `max-height` | Applies styles when the screen height is **below** the given value |
| `min-height` | Applies styles when the screen height is **above** the given value |
| `orientation: portrait` | Applies styles when the device is in **portrait mode** |
| `orientation: landscape` | Applies styles when the device is in **landscape mode** |

---

### **Examples of Media Queries**
#### **1. Responsive Typography**
```css
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```
✅ Adjusts text size based on the screen width.

---

#### **2. Changing Layout for Different Screens**
```css
.container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```
✅ Changes layout from **row to column** on smaller screens.

---

#### **3. Hiding Elements on Small Screens**
```css
.menu {
  display: block;
}

@media (max-width: 600px) {
  .menu {
    display: none;
  }
}
```
✅ Hides the menu on screens **less than 600px**.

---

### **Mobile-First vs Desktop-First Approach**
- **Mobile-First**: Start with styles for small screens, then use `min-width` for larger screens.
- **Desktop-First**: Start with styles for large screens, then use `max-width` for smaller screens.

✅ **Example of Mobile-First:**
```css
body {
  font-size: 14px;
}

@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

✅ **Example of Desktop-First:**
```css
body {
  font-size: 18px;
}

@media (max-width: 1024px) {
  body {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

### **Combining Multiple Conditions**
```css
@media (max-width: 768px) and (orientation: portrait) {
  body {
    background-color: pink;
  }
}
```
✅ This applies styles **only if** the screen is **less than 768px** **AND** in **portrait mode**.

---

### **Responsive Image Example**
```css
img {
  width: 100%;
  max-width: 500px;
  height: auto;
}
```
✅ Ensures images **scale down** but never exceed `500px`.

---

### **Breakpoints (Standard Screen Sizes)**
Here are some commonly used **breakpoints** for responsive design:

| Device Type | Max Width |
|------------|------------|
| Large Screens | `min-width: 1200px` |
| Laptops | `min-width: 1024px` |
| Tablets | `max-width: 768px` |
| Mobile Devices | `max-width: 480px` |

---

### **Media Queries for Dark Mode**
```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```
✅ Changes styles **when the user has dark mode enabled**.

---

### **Practice Exercise**
**Try creating a responsive webpage where:**
1. The background is white on large screens, gray on tablets, and light blue on mobile.
2. The text size adjusts for different screen sizes.
3. A sidebar appears only on large screens.
### **CSS Position Property Explained**

The `position` property in CSS defines how an element is positioned in the document. There are **five** main values:

1. **`static`** (default)
2. **`relative`**
3. **`absolute`**
4. **`fixed`**
5. **`sticky`**

---

## **1. `static` (Default)**
- Elements are positioned **normally** as per the document flow.
- **No effect** of `top`, `bottom`, `left`, or `right`.

```css
.box {
  position: static;
}
```

🔹 **Example:**
```html
<div class="box">I am static</div>
```

---

## **2. `relative`**
- The element is **positioned relative to itself**.
- You can use `top`, `left`, `right`, `bottom` to **shift** it.

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

🔹 **Example:**  
The box will move **20px down** and **30px right**, but the space it originally occupied remains.

---

## **3. `absolute`**
- The element is positioned **relative to the nearest positioned ancestor** (if none, then the `body`).
- **Removes** the element from normal document flow.

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

🔹 **Example:**  
If there's a parent with `relative` positioning, the box will move **50px down** and **100px right** from it.

---

## **4. `fixed`**
- The element stays **fixed** relative to the **viewport** (browser window).
- **Does not move** even when scrolling.

```css
.box {
  position: fixed;
  top: 10px;
  right: 20px;
}
```

🔹 **Example:**  
A **sticky navbar** that stays at the top of the screen.

---

## **5. `sticky`**
- The element **acts like `relative`** until it reaches a **scroll threshold**, then it **sticks** like `fixed`.

```css
.box {
  position: sticky;
  top: 0;
}
```

🔹 **Example:**  
A **sticky header** that remains visible at the top when scrolling.

---

## **Visualization Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .container {
      height: 200px;
      border: 2px solid black;
      position: relative;
    }

    .box {
      width: 100px;
      height: 100px;
      background: red;
      color: white;
      text-align: center;
      line-height: 100px;
    }

    .relative { position: relative; top: 20px; left: 20px; }
    .absolute { position: absolute; top: 30px; right: 30px; }
    .fixed { position: fixed; top: 10px; left: 10px; }
    .sticky { position: sticky; top: 0; background: blue; }
  </style>
</head>
<body>

  <div class="container">
    <div class="box relative">Relative</div>
    <div class="box absolute">Absolute</div>
  </div>

  <div class="box fixed">Fixed</div>

  <div class="box sticky">Sticky</div>

</body>
</html>
```

---

### **Summary Table**
| Position  | Moves with `top`/`left`/etc? | Stays in Flow? | Moves on Scroll? | Sticks at Position? |
|-----------|-----------------------------|----------------|------------------|---------------------|
| `static`  | ❌ No  | ✅ Yes | ✅ Yes | ❌ No |
| `relative` | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| `absolute` | ✅ Yes | ❌ No | ✅ Yes | ❌ No |
| `fixed` | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| `sticky` | ✅ Yes (after scroll) | ✅ Yes | ✅ Yes (until threshold) | ✅ Yes |

---
# Bootstrap 5.3 Flexbox Guide

## Introduction to Flexbox in Bootstrap

Flexbox is a powerful CSS layout model that makes designing flexible responsive layouts much easier. Bootstrap 5.3 provides a comprehensive set of utility classes that implement flexbox properties, allowing you to create complex layouts without writing custom CSS.

This guide covers the essential flexbox concepts as implemented in Bootstrap 5.3, with practical examples and explanations.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Flex Container Basics](#flex-container-basics)
3. [Flex Direction](#flex-direction)
4. [Justify Content](#justify-content)
5. [Align Items](#align-items)
6. [Flex Wrap](#flex-wrap)
7. [Individual Item Properties](#individual-item-properties)
8. [Responsive Flex Utilities](#responsive-flex-utilities)
9. [Practical Examples](#practical-examples)
10. [Quick Reference](#quick-reference)

## Getting Started

To use Bootstrap's flexbox utilities, you need to include Bootstrap 5.3 in your project:

```html
<!-- Bootstrap 5.3 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS Bundle with Popper (optional) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## Flex Container Basics

### Creating a Flex Container

Use the `.d-flex` class to create a flex container:

```html
<div class="d-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Inline Flex Container

Use `.d-inline-flex` to create an inline flex container that only takes up as much width as necessary:

```html
<div class="d-inline-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Flex Direction

Control how flex items are placed in the flex container with the following classes:

### Row (default)

Items are arranged horizontally from left to right:

```html
<div class="d-flex flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Column

Items are arranged vertically from top to bottom:

```html
<div class="d-flex flex-column">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Row Reverse

Items are arranged horizontally from right to left:

```html
<div class="d-flex flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Column Reverse

Items are arranged vertically from bottom to top:

```html
<div class="d-flex flex-column-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Justify Content

Justify content controls how items are aligned along the main axis (horizontally in a row, vertically in a column).

### Start (default)

Items are packed at the start of the container:

```html
<div class="d-flex justify-content-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Center

Items are centered in the container:

```html
<div class="d-flex justify-content-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### End

Items are packed at the end of the container:

```html
<div class="d-flex justify-content-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Between

Items are evenly distributed with the first item at the start and the last item at the end:

```html
<div class="d-flex justify-content-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Around

Items are evenly distributed with equal space around them:

```html
<div class="d-flex justify-content-around">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Evenly

Items are distributed so that the spacing between any two items (and the space to the edges) is equal:

```html
<div class="d-flex justify-content-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Align Items

Align items controls how flex items are aligned along the cross axis (vertically in a row, horizontally in a column).

### Start

Items are aligned at the start of the cross axis:

```html
<div class="d-flex align-items-start" style="height: 100px;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Center

Items are centered along the cross axis:

```html
<div class="d-flex align-items-center" style="height: 100px;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### End

Items are aligned at the end of the cross axis:

```html
<div class="d-flex align-items-end" style="height: 100px;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Baseline

Items are aligned at their baselines:

```html
<div class="d-flex align-items-baseline" style="height: 100px;">
  <div style="font-size: 12px;">Small</div>
  <div style="font-size: 24px;">Medium</div>
  <div style="font-size: 36px;">Large</div>
</div>
```

### Stretch (default)

Items are stretched to fill the container:

```html
<div class="d-flex align-items-stretch" style="height: 100px;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Flex Wrap

Control whether flex items are forced onto a single line or can wrap onto multiple lines.

### No Wrap (default)

All flex items will be on one line:

```html
<div class="d-flex flex-nowrap">
  <!-- Many items that would overflow the container -->
</div>
```

### Wrap

Flex items will wrap onto multiple lines, from top to bottom:

```html
<div class="d-flex flex-wrap">
  <!-- Many items that now wrap to multiple lines -->
</div>
```

### Wrap Reverse

Flex items will wrap onto multiple lines, from bottom to top:

```html
<div class="d-flex flex-wrap-reverse">
  <!-- Many items that now wrap in reverse order -->
</div>
```

## Individual Item Properties

### Flex Grow

Controls how much a flex item can grow relative to other items.

```html
<div class="d-flex">
  <div class="flex-grow-0">Won't grow</div>
  <div class="flex-grow-1">Will grow to fill space</div>
  <div class="flex-grow-0">Won't grow</div>
</div>
```

### Align Self

Override the align-items value for specific flex items:

```html
<div class="d-flex" style="height: 100px;">
  <div class="align-self-start">Aligned at start</div>
  <div class="align-self-center">Aligned at center</div>
  <div class="align-self-end">Aligned at end</div>
</div>
```

### Order

Change the visual order of specific flex items:

```html
<div class="d-flex">
  <div class="order-3">Displayed third</div>
  <div class="order-1">Displayed first</div>
  <div class="order-2">Displayed second</div>
</div>
```

Bootstrap provides order classes from `order-0` to `order-5`.

## Responsive Flex Utilities

All flex utilities can be applied conditionally at different breakpoints by adding the breakpoint prefix:

- `sm`: Small (≥576px)
- `md`: Medium (≥768px)
- `lg`: Large (≥992px)
- `xl`: Extra large (≥1200px)
- `xxl`: Extra extra large (≥1400px)

### Example: Column on Mobile, Row on Desktop

```html
<div class="d-flex flex-column flex-md-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

This creates a layout where items are stacked vertically on small screens (mobile) and arranged horizontally on medium screens and larger (tablet/desktop).

## Practical Examples

### Navigation Bar

```html
<nav class="navbar navbar-expand bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    
    <div class="d-flex">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
      </ul>
      
      <div class="d-flex">
        <button class="btn btn-primary me-2">Sign Up</button>
        <button class="btn btn-outline-light">Login</button>
      </div>
    </div>
  </div>
</nav>
```

### Card Layout with Equal Heights

```html
<div class="d-flex flex-wrap">
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">Some content</p>
      <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
    </div>
  </div>
  
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Content with more text that makes this card taller</p>
      <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
    </div>
  </div>
</div>
```

### Centering Content

```html
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
  <div>Perfectly centered content</div>
</div>
```

## Quick Reference

| Property | Bootstrap Class | Description |
|---------|----------------|-------------|
| **Container** | | |
| Display Flex | `d-flex` | Creates a block-level flex container |
| Display Inline Flex | `d-inline-flex` | Creates an inline-level flex container |
| **Direction** | | |
| Row | `flex-row` | Left to right (default) |
| Row Reverse | `flex-row-reverse` | Right to left |
| Column | `flex-column` | Top to bottom |
| Column Reverse | `flex-column-reverse` | Bottom to top |
| **Justify Content** | | |
| Start | `justify-content-start` | Items packed at start |
| End | `justify-content-end` | Items packed at end |
| Center | `justify-content-center` | Items centered |
| Between | `justify-content-between` | Items evenly distributed with space between |
| Around | `justify-content-around` | Items evenly distributed with space around |
| Evenly | `justify-content-evenly` | Items evenly distributed with equal space |
| **Align Items** | | |
| Start | `align-items-start` | Cross-start margin edge of the items is placed on the cross-start line |
| End | `align-items-end` | Cross-end margin edge of the items is placed on the cross-end line |
| Center | `align-items-center` | Items centered in the cross-axis |
| Baseline | `align-items-baseline` | Items aligned by their baselines |
| Stretch | `align-items-stretch` | Items stretched to fill the container (default) |
| **Wrap** | | |
| No Wrap | `flex-nowrap` | All items in a single line (default) |
| Wrap | `flex-wrap` | Items wrap from top to bottom |
| Wrap Reverse | `flex-wrap-reverse` | Items wrap from bottom to top |
| **Item Properties** | | |
| Order | `order-0` through `order-5` | Controls the order of items |
| Flex Grow | `flex-grow-0`, `flex-grow-1` | Controls ability to grow |
| Flex Shrink | `flex-shrink-0`, `flex-shrink-1` | Controls ability to shrink |
| Align Self | `align-self-auto/start/end/center/baseline/stretch` | Overrides alignment for specific items |

## Conclusion

Bootstrap's flexbox utilities offer a powerful way to create flexible layouts without writing custom CSS. By combining these utility classes, you can quickly create responsive, aligned, and well-structured layouts for your web projects.

Remember that you can combine these utilities with Bootstrap's responsive breakpoints to create layouts that adapt to different screen sizes. This allows you to build complex responsive designs efficiently.

For more advanced flexbox usage, you might still need custom CSS, but Bootstrap's utilities cover most common layout needs and provide a solid foundation for responsive design.