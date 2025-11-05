# Node.js, npm and vite - Under the hood 😉

### Node.js 🏗️

- **Node.js** is the **runtime environment** for running JavaScript outside of the browser. It allows you to execute JavaScript code on your computer or server.

### npm 📦

- **npm** stands for **Node Package Manager**. It is used to **install** and **manage** JavaScript packages (tools, libraries, etc.) that help build your projects.

---

## Analogy: Node.js and npm

Think of **Node.js** and **npm** like this:

- **Node.js** = The **engine** of a car 🚗. It powers your app and runs the code you write.
- **npm** = The **toolbox** or **game store** 🛠️. It provides and installs the **tools** you need (like libraries and frameworks) for your project.

In the analogy:

- **Node.js** (engine) runs JavaScript.
- **npm** (toolbox) installs and manages packages that are essential for development.

---

## npm Installing and Running Tools

**How npm Installs Tools**

When you run `npm install <package_name>`:

- **npm** downloads the specified tool/package from the npm registry.
- The tool is saved inside the **`node_modules/`** folder.
- A reference to the installed package is added to **`package.json`**, so your project knows which versions of packages you are using.

Example: `npm install vite` installs **Vite** in your project.

**How npm Runs Tools**

When you run `npm run <script_name>`:

- npm looks inside the **`package.json`** file to find the corresponding script (e.g., `"dev": "vite"`).
- It executes **Vite** (or whichever tool is specified) using **Node.js**.

Example: `npm run dev` starts **Vite** to run your app, and **Node.js** executes it.

---

## Summary of Roles

| **Feature**           | **Node.js**                       | **npm**                                     |
| --------------------- | --------------------------------- | ------------------------------------------- |
| **What it does**      | Runs JavaScript code (the engine) | Installs and manages tools (the toolbox)    |
| **Main Purpose**      | Executes your app                 | Downloads and installs dependencies         |
| **How it runs tools** | Executes programs like Vite       | Finds the package and runs it using Node.js |

---

## Final Takeaway

- **Node.js** = Engine (runs JavaScript code).
- **npm** = Toolbox (installs and manages tools like Vite).
- **Vite** = A tool installed by npm that is run using Node.js.

## What Happens When You Run `npm run dev`?

When you type:

```sh
npm run dev
```

🔹 `npm` is the **Node.js package manager**.  
🔹 `run dev` tells npm to **execute a script** defined in `package.json`.

### Where is this script defined?

Open your `package.json` file. You'll see something like this:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Here:  
✅ `dev` runs `vite`, which starts the development server.  
✅ `build` runs `vite build`, which creates a production build.  
✅ `preview` runs `vite preview`, which serves the built app locally.

So, when you run `npm run dev`, it actually runs:

```sh
vite
```

And **Vite itself is a Node.js program**!

---

## `npm` is a Part of Node.js. How?

**npm comes bundled with Node.js.**

- When you install **Node.js**, you automatically get **npm**.
- `npm` helps you manage **JavaScript packages** (like React, Vite, etc.).

📌 **Think of Node.js as the engine 🚗, and npm as the fuel ⛽ that installs & runs tools.**

---

## `vite` a Node.js Program. How?

```sh
npm create vite@latest my-react-app --template react
```

It installs Vite **as an npm package**.

✅ **Vite itself is written in Node.js** and uses **ESBuild** and **Rollup** internally.  
✅ When you run `vite`, Node.js executes it and starts the dev server.

---

## What is Actually Happening in the Terminal?

When you type:

```sh
npm run dev
```

👉 Node.js **finds Vite in `node_modules/.bin/`** and executes it.  
👉 Vite starts a **development server** on `localhost:5173`.  
👉 The browser requests files, and Vite **serves them dynamically** (without bundling).

# Props (Properties)

In React, **props** are a way to pass data between components

- Props are arguments passed into React components.
- Used to send data from parent to child component.
- Read-only (cannot be changed inside the child).
- Can pass text, numbers, objects, functions, components.
- Send data to one component to another component.
- Props are unidirectional.
  - ✅ Parent to child.
  - ❌ Child to parent.

```jsx
function User({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return <User name="Charlie" age={30} />;
}
```

- ✅ { name, age } replaces props.name & props.age
- ✅ Code is cleaner & easier to read

### 📚 **Props in Detail (Beginner to Advanced)**

In React, **props** are a way to pass data between components. They are one of the most fundamental concepts in React and help to build dynamic, reusable components.

### 🔧 **How Props Work**

Let's break down the process:

1. **In the Parent Component**: You define the data you want to pass and send it to a child component via **props**.

2. **In the Child Component**: The child component can access the data passed via props and use it to render content.

---

### 🎯 **Detailed Example**

```jsx
// Parent Component
function App() {
  const userName = "Alice";
  const userAge = 25;
  const userImage = "https://via.placeholder.com/100";

  return (
    <div>
      <ProfileCard
        name={userName}
        age={userAge}
        image={userImage}
        onButtonClick={() => alert("Hello, Alice!")}
      />
    </div>
  );
}

// Child Component
function ProfileCard({ name, age, image, onButtonClick }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        width="100"
        height="100"
        style={{ borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <button onClick={onButtonClick}>Say Hello</button>
    </div>
  );
}
```

---

### **What Happens Here?**

1. **In the `App` Component (Parent):**

   - We create some data: `userName`, `userAge`, and `userImage`.
   - We pass these variables as props to the `ProfileCard` component.
   - We also pass an `onButtonClick` function as a prop that triggers an alert when the button is clicked.

2. **In the `ProfileCard` Component (Child):**
   - We **destructure** the props: `name`, `age`, `image`, and `onButtonClick` from the `props` object.
   - The `ProfileCard` uses the received props to display an image, name, age, and a button.
   - When the button is clicked, it calls the `onButtonClick` function passed via props.

---

### 🚀 ** Prop Types**

Props can be of many types, such as:

- **String:** A simple text value

  ```jsx
  <ProfileCard name="Alice" />
  ```

- **Number:** A numerical value

  ```jsx
  <ProfileCard age={25} />
  ```

- **Object:** A complex structure like an array or object

  ```jsx
  const user = { name: "Alice", age: 25 };
  <ProfileCard user={user} />;
  ```

- **Function:** A function passed to the child component

  ```jsx
  <ProfileCard onButtonClick={() => alert("Hello, Alice!")} />
  ```

- **Array or List:** You can also pass an array of items
  ```jsx
  const items = ["Apple", "Banana", "Cherry"];
  <ItemList items={items} />;
  ```
- **Template Literals:**

  ```jsx
  function Greeting({ name }) {
    return <h1>Hello, {`${name}`}!</h1>; // Using template literal to display name
  }

  function App() {
    return <Greeting name="Alice" />;
  }
  ```

### 🧩 **Props vs State**

- **Props:**
  - **Passed** from parent to child.
  - **Immutable** (can’t be changed inside the component).
- **State:**
  - **Managed inside** the component.
  - **Mutable** (can be changed inside the component using `setState` or `useState`).

---

### 🔄 **Prop-Drilling**

When you pass props through multiple levels of components (parent -> child -> grandchild), this is called **prop drilling**. Sometimes, it’s better to use **context** or **state management tools** (like Redux) to avoid passing props through many layers.

## 🔹 Under the Hood: What Happens?

JSX Code:

```jsx
<Greeting name="John" age={25} />
```

gets converted to:

```js
Greeting({ name: "John", age: 25 });
```

So, when the `Greeting` function runs, `props` is:

```js
{ name: "John", age: 25 }
```

This means React **calls the component function** with `props` as an argument.

---

## 🔥 Key Points about `props`

✅ `props` makes components **dynamic**
✅ `props` makes components **reusable**
✅ `props` are **read-only** (you **cannot modify** them inside the child component)
✅ `props` are passed **from parent to child**
✅ `props` can be **any data type** (strings, numbers, objects, arrays, functions)

# What is JSX?

JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that allows developers to write XML-like code (similar to HTML) within JavaScript code. It’s used primarily in React for defining the structure of UI components.

## Embedding JavaScript Expressions

JavaScript expressions can be embedded within curly braces `{}` in JSX. This makes it possible for JSX elements to evaluate and render dynamic content and expressions. Embedding JavaScript expressions is a powerful feature of JSX that allows developers to dynamically render content based on JavaScript logic within their React components.

### Curly Braces `{}`

Within JSX elements, curly braces `{}` can be used to embed JavaScript expressions. Variables, function calls, and other legitimate JavaScript code that evaluates to a value can all be used as these expressions.

```jsx
const name = "John Doe";
const greeting = <h1>Hello, {name}!</h1>;
```

## Dynamic Content & Conditional Rendering

You can render content within JSX elements dynamically based on props, the component’s current state, or any other available data by embedding JavaScript expressions.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Conditional rendering can also be achieved using JavaScript expressions, such as ternary operators or logical `&&` operators.

```jsx
function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Welcome back, {props.username}!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
}
```

## Mapping Arrays

Several items can be dynamically rendered within JSX by using JavaScript expressions to map over arrays.

```jsx
function ListItems(props) {
  const items = props.items;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

## JSX and Security

By default, React DOM escapes any values embedded in JSX before rendering them. Thus, it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site scripting) attacks.

### **🔍 JSX to HTML Flow (Breakdown)**

JSX is a syntax extension that looks like HTML but is actually JavaScript. Since browsers **cannot understand JSX**, it must be **converted into JavaScript** first. Here's a detailed step-by-step explanation of how JSX transforms into actual HTML in the browser.

---

## **🔹 Step 1: Writing JSX in a React Component**

Developers write JSX inside a React component:

```jsx
function App() {
  return <h1>Hello, World!</h1>;
}
```

👉 Here, `<h1>Hello, World!</h1>` looks like HTML but is actually JSX.

---

## **🔹 Step 2: Babel Transpiles JSX to JavaScript**

Since the browser **does not understand JSX**, Babel (a JavaScript compiler) **converts** JSX into JavaScript using `React.createElement()`.

**JSX Code:**

```jsx
const element = <h1>Hello, World!</h1>;
```

**Babel Transpiles it to:**

```js
const element = React.createElement("h1", null, "Hello, World!");
```

📌 Here’s what happens:

- `React.createElement("h1", null, "Hello, World!")`
  - `"h1"` → The HTML tag to create
  - `null` → No extra properties (like `className` or `id`)
  - `"Hello, World!"` → The content inside the `<h1>` tag

---

## **🔹 Step 3: React Converts to Virtual DOM**

React does **not** modify the real DOM immediately. Instead, it first creates a **Virtual DOM representation**:

```js
const virtualDOM = {
  type: "h1",
  props: {
    children: "Hello, World!",
  },
};
```

📌 **This Virtual DOM object helps React efficiently track changes.**

---

## **🔹 Step 4: React Updates the Real DOM**

Once React has the Virtual DOM, it uses the **ReactDOM library** to render it into the **actual HTML on the page**.

```js
ReactDOM.createRoot(document.getElementById("root")).render(element);
```

👉 This will generate the following **HTML in the browser**:

```html
<h1>Hello, World!</h1>
```

📌 **Now, the JSX has successfully become real HTML!**

---

## **🔹 Step 5: React’s Reconciliation (Efficient DOM Updates)**

Instead of replacing the entire page, React **compares the new Virtual DOM with the old one**. If only some parts have changed, it updates only those parts in the real DOM, making React fast and efficient.

### **Example of Change Detection:**

#### Initial Virtual DOM:

```js
{ type: "h1", props: { children: "Hello, World!" } }
```

#### New Virtual DOM After Update:

```js
{ type: "h1", props: { children: "Hello, React!" } }
```

**React detects that `"Hello, World!"` changed to `"Hello, React!"` and updates only that part in the real DOM instead of reloading the whole page.**

---

## **🔥 Summary**

1️⃣ **Write JSX** → JSX is written in React components  
2️⃣ **Babel Transpiles** → JSX is converted to JavaScript (`React.createElement`)  
3️⃣ **React Creates Virtual DOM** → A lightweight object representation  
4️⃣ **React Updates the Real DOM** → Converts Virtual DOM to actual HTML  
5️⃣ **React’s Reconciliation** → Efficiently updates only changed parts

---

## **📌 Final Example**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, World!</h1>;
}

// React renders JSX to real HTML inside the <div id="root">
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

This ensures that:  
✅ JSX is converted into JavaScript  
✅ JavaScript creates a Virtual DOM  
✅ Virtual DOM is efficiently updated in the Real DOM

# The things you see on the web in a React application are actually the **Real DOM**, not the **Virtual DOM**. How?

### **🔹 What We See on the Web: Real DOM**

- The **Real DOM** is what gets **rendered to the screen** in the browser.
- The **Real DOM** contains the actual HTML elements that make up the UI, such as `<h1>`, `<div>`, `<p>`, etc.

When React **updates** the UI, it doesn't directly modify the Real DOM every time. Instead, React uses the **Virtual DOM** to **track changes** and then updates only the parts of the Real DOM that need to be changed.

---

### **🔹Behind the Scenes: Virtual DOM**

- The **Virtual DOM** is **not visible**. It is a **JavaScript object** created by React that represents your UI.
- React **compares** the current Virtual DOM to the previous one to figure out the differences (called **"diffing"**).
- Once React knows what has changed, it updates the **Real DOM** (the UI you see in the browser) efficiently.

---

### **🔹 Example Process:**

1. **Initial Render**: You write JSX in React (e.g., `<h1>Hello, World!</h1>`).

   - React creates a **Virtual DOM object** based on this JSX.
   - React uses the **Virtual DOM** to calculate what should be rendered in the **Real DOM**.

2. **Change in State/Props**: When data changes (like user input), React creates a **new Virtual DOM**.

   - React compares the **new Virtual DOM** with the **old one**.
   - React then updates **only the changed parts** in the **Real DOM**, rather than re-rendering the entire page.

3. **Rendered UI**: The updated content is shown in the **Real DOM** in your browser (what you see on the webpage).

---

### **🔹 Example to Visualize:**

1. **JSX Code** (you write this in React):

   ```jsx
   const element = <h1>Hello, React!</h1>;
   ```

2. **Virtual DOM** (React creates this object behind the scenes):

   ```js
   const virtualDOM = {
     type: "h1",
     props: { children: "Hello, React!" },
   };
   ```

3. **Real DOM** (what you see on the screen):
   ```html
   <h1>Hello, React!</h1>
   ```

---

### **Summary**:

- **The Real DOM** is what you see in the browser as HTML elements.
- **The Virtual DOM** is an in-memory representation used by React to track changes and update the Real DOM efficiently.

So, while **you don't see the Virtual DOM**, it plays a crucial role in making React apps fast and efficient by minimizing direct changes to the Real DOM.

Got it! Let me explain it in the simplest way possible.

## 🧮 What Is a **Function Component**?

A **function component** is just a regular JavaScript function that returns some JSX (React's version of HTML).

## 🔧 What Is a Hook in React?

A **Hook** is just a **JavaScript function** (provided by React) that you **call inside a React function component** to add special features like state, effects, context, etc.

### 📌 Think of Hooks as:

> "Add-ons that give your function components powers like memory, reactivity, and lifecycle behavior — without using a class."

## 🔧 Deep Dive into React Hooks with Problems, Solutions, and Advanced Insights

This document gives an in-depth overview of all React hooks with practical examples, use cases, hidden behaviors, and less-known facts, including **every possible way they behave and can be used**.

### 1. `useState`

### **What is State in React?**

- Components often need to change what's on the screen as a result of an
  interaction.
- Components need to "remember" things: the current input value, the current
  image, the shopping cart. In React, this kind of component-specific memory is
  called state.
- State is like a **box** where React stores information that can change.

For example, imagine you have a **TV remote**:

- The **current channel** is the **state**.
- When you press the **channel up button**, the channel changes (state updates).
- The TV screen updates to show the new channel (React updates the UI).

### **How React Handles State Internally**

🔹 React does **not change state immediately**. Instead, it **waits** and **then updates everything at once**.  
🔹 This makes React fast because it only updates what’s necessary.

### **React does NOT change the state immediately**,

##### Means that when you call `setState`, React **does not update the value right away**. Instead, it **schedules** the update and updates the UI **later** in the next render cycle.

---

### **Example to Prove This**

Let’s test it with a simple example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before:", count);
    setCount(count + 1);
    console.log("After:", count);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;
```

### **What happens when you click the button?**

When you press the button, you might expect the console to show:

```
Before: 0
After: 1
```

But instead, it will show:

```
Before: 0
After: 0  ❌ (Why not 1?)
```

Even though `setCount(count + 1)` was called, `count` **did not change immediately** inside the function.

---

### **Why Does This Happen?**

🔹 **React schedules the update** but does NOT update `count` right away.  
🔹 The component **only updates when React re-renders it**.  
🔹 The console logs still use the **old value of `count`**, because React **hasn’t updated it yet** at that point.

---

### **How to Get the Correct Updated State?**

To fix this, use the **function form of `setState`**:

```jsx
setCount((prevCount) => prevCount + 1);
```

Now, let's modify the code:

```jsx
function handleClick() {
  console.log("Before:", count);
  setCount((prevCount) => {
    console.log("Inside setCount:", prevCount); // This will show the correct value
    return prevCount + 1;
  });
}
```

Now when you click the button, React will correctly update the state **in the next render cycle**.

**📌 Purpose:** Add state to function components.

**🧪 Problem:** You want to keep track of a counter value.

**✅ Solution:**

```jsx
const [count, setCount] = useState(0);
```

**🧠 Lesser-known details:**

- `useState` is lazy-initialized when passed a function: `useState(() => computeValue())`.
- If you pass a value instead, it's recalculated on every render, but only used once.
- Updating with same value (e.g. `setCount(0)` when count is 0) **does not cause re-render**.
- React may batch updates for performance (e.g. multiple `setState` in event handlers).
- `setState` can accept a function: `setCount(prev => prev + 1)` — useful when new value depends on the previous one.

---

- **What happens internally?**

  - React keeps track of the state values for each component. When you call `useState`, React creates a special "slot" for that state.
  - The state is stored along with a queue of updates.
  - Every time the state is updated via the `setState` function, React schedules a re-render, and the updated state will be available after re-render.

### 2. `useEffect`

**📌 Purpose:** Run side effects after render.

**🧪 Problem:** You need to fetch data when the component loads.

**✅ Solution:**

```jsx
useEffect(() => {
  fetchData();
}, []);
```

**🧠 Lesser-known details:**

- Effect runs **after DOM updates** (asynchronously).
- With no dependency array: runs **after every render**.
- With `[]`: runs **only once** on mount.
- With `[a, b]`: runs when `a` or `b` change.
- Cleanup function runs:

  - Before running a new effect.
  - On component unmount.

- Avoid async functions directly — use IIFE:

```jsx
useEffect(() => {
  (async () => await fetchData())();
}, []);
```

- Can lead to memory leaks if cleanup is forgotten (e.g., `setInterval`, event listeners).

- **What happens internally?**

  - When you call `useEffect`, React stores the effect and its dependencies.
  - React doesn't run the effect immediately after render. Instead, it runs it **after the render is committed**, once the DOM is updated.
  - If dependencies change, React will clean up the previous effect (if it has one) and run the new one.
  - No matter what you provide in the dependency array, it is sure to run at least once.

---

### 3. `useLayoutEffect`

**📌 Purpose:** Like `useEffect`, but fires **synchronously before the browser paints**.

**🧪 Problem:** You need to measure an element’s height and use it instantly.

**✅ Solution:**

```jsx
useLayoutEffect(() => {
  const height = divRef.current.offsetHeight;
}, []);
```

**🧠 Lesser-known details:**

- Blocks browser paint until finished.
- Runs **before `useEffect`**.
- Use sparingly for performance reasons — `useEffect` is preferred unless DOM measurement is needed.
- Avoid long-running logic inside it.

- **What happens internally?**

  - It works like `useEffect` but runs **before** the browser paints the screen, which means it runs synchronously and blocks the paint.
  - This hook is useful if you need to read layout (like measurements) and apply styles right before the screen is rendered.

---

### 4. `useRef`

**📌 Purpose:** Store a persistent value across renders without causing re-renders.

**🧪 Problem 1:** You need a reference to a DOM element.
**✅ Solution:**

```jsx
const inputRef = useRef();
<input ref={inputRef} />;
```

**🧪 Problem 2:** Track the previous value of a state.
**✅ Solution:**

```jsx
const prevCount = useRef();
useEffect(() => {
  prevCount.current = count;
}, [count]);
```

**🧠 Lesser-known details:**

- `useRef().current` persists across renders.
- Updating `.current` does not cause re-renders.
- Good for storing timers, previous props/state, mutation trackers.

- **What happens internally?**

  - When you use `useRef`, React gives you a `ref` object that holds a `current` property.
  - The object returned by `useRef` **does not** change between renders. So, if you set `ref.current = something`, React doesn't care and doesn’t trigger a re-render.
  - This is useful for storing values you don't want to trigger a re-render with.

---

### 5. `useMemo`

**📌 Purpose:** Memoize expensive computations.

**🧪 Problem:** A slow calculation re-runs every time.

**✅ Solution:**

```jsx
const result = useMemo(() => expensiveFunction(a, b), [a, b]);
```

**🧠 Lesser-known details:**

- Skips computation unless dependencies change.
- Useful for preventing wasted renders.
- Don't use for small or fast operations — can hurt performance.
- Returns cached value across renders.

- **What happens internally?**

  - React stores the result of the function you pass to `useMemo` along with its dependencies.
  - When the component re-renders, React checks if the dependencies have changed. If they haven't, React simply returns the cached result (skipping the computation).
  - If dependencies have changed, it re-runs the function and updates the cache.

---

### 6. `useCallback`

**📌 Purpose:** Memoize functions to avoid redefining them each render.

**🧪 Problem:** A memoized child component keeps re-rendering because the function prop changes.

**✅ Solution:**

```jsx
const handleClick = useCallback(() => doSomething(id), [id]);
```

**🧠 Lesser-known details:**

- Returns **same function reference** unless dependencies change.
- Useful when passing callbacks to optimized child components.
- Internally behaves like `useMemo(() => fn, deps)`.

- **What happens internally?**

  - It’s like `useMemo` but for functions.
  - React stores the function you pass to `useCallback` and keeps track of its dependencies.
  - If the dependencies haven’t changed, React reuses the same function without creating a new one.
  - This prevents passing new function references to child components on each render.

---

### 7. `useContext`

**📌 Purpose:** Access shared global data from a React context.

**🧪 Problem:** You want to consume a theme or auth value.

**✅ Solution:**

```jsx
const user = useContext(AuthContext);
```

**🧠 Lesser-known details:**

- Component **re-renders** whenever context value changes.
- Will only read from **nearest matching provider** in the tree.
- Context value should be memoized to avoid unnecessary renders.

- **What happens internally?**

  - `useContext` accesses the current value of a context from the closest matching provider.
  - React re-renders any component using this hook when the value in the provider changes.

---

### 8. `useReducer`

**📌 Purpose:** State management using actions and reducers.

**🧪 Problem:** You manage a complex form with multiple fields.

**✅ Solution:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**🧠 Lesser-known details:**

- Good for complex updates: one state with many branches.
- You can lazily initialize state with a third argument:

```js
const [state, dispatch] = useReducer(reducer, undefined, initFn);
```

- Keeps logic predictable and testable.
- Use `useReducer` instead of `useState` when next state depends heavily on previous state.

- **What happens internally?**

  - It’s like `useState`, but instead of just setting the state, you provide a reducer function to handle state updates.
  - React stores the state and updates it by calling the reducer function each time `dispatch` is called.
  - The state is updated based on the action provided to the reducer, and the component re-renders accordingly.

---

### 9. `useImperativeHandle`

**📌 Purpose:** Customize what `ref` exposes from a child component.

**🧪 Problem:** You want a parent to call `focus()` on an input inside a custom component.

**✅ Solution:**

```jsx
useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));
```

**🧠 Lesser-known details:**

- Works **only inside** `forwardRef()` components.
- Restricts what parent can access.
- Often used in reusable UI libraries.

- **What happens internally?**

  - This hook is used with `forwardRef` to customize the value that is exposed to the parent when it uses a ref.
  - Instead of exposing the whole component, you can control exactly what the parent can access (like exposing only certain methods).

---

### 10. `useDebugValue`

**📌 Purpose:** Add labels to custom hook values in React DevTools.

**🧪 Problem:** You create a custom `useAuth` hook and want to inspect its output.

**✅ Solution:**

```jsx
useDebugValue(user);
```

**🧠 Lesser-known details:**

- Accepts a formatter:

```js
useDebugValue(user, (u) => u?.name || "Guest");
```

- No runtime effect — purely for development.

- **What happens internally?**

  - This hook is used to label values inside custom hooks for debugging purposes.
  - It doesn't affect the runtime behavior of the app in production, but it helps you see meaningful labels in React DevTools for custom hooks.

---

### Advanced React 18+ Hooks

#### 🧵 `useTransition`

**📌 Purpose:** Handle updates with less priority (for smoother UX).

**🧪 Problem:** Filtering a list causes input lag.

**✅ Solution:**

```jsx
const [isPending, startTransition] = useTransition();
startTransition(() => setInputValue(value));
```

**🧠 Lesser-known details:**

- Doesn’t block urgent updates like typing.
- `isPending` indicates whether the transition is still rendering.

- **What happens internally?**

  - `useTransition` allows React to mark certain updates as lower priority (like background tasks).
  - This means React can prioritize critical UI updates (like typing or clicks) over these background updates, making the app feel more responsive.

---

#### 🕒 `useDeferredValue`

**📌 Purpose:** Defer an update until after higher-priority tasks.

**🧪 Problem:** Search filtering slows down typing.

**✅ Solution:**

```jsx
const deferredSearch = useDeferredValue(search);
```

**🧠 Lesser-known details:**

- Only defers rendering — the value is still updated immediately in memory.
- Ideal when you want to update the UI lazily.

- **What happens internally?**

  - This hook helps with “deferred” rendering. If you have a slow value (like a large list), it lets React keep the previous value visible until the next value is ready.
  - This way, React can keep the UI responsive, especially when handling slow updates like user typing.

## 🔍 Summary Table:

| Hook                  | Purpose                     | When to Use                            |
| --------------------- | --------------------------- | -------------------------------------- |
| `useState`            | State in function component | Always when component needs memory     |
| `useEffect`           | Side effects                | Fetching, timers, subscriptions        |
| `useLayoutEffect`     | Immediate DOM effect        | Measure layout before paint            |
| `useRef`              | Persistent value, DOM refs  | Timer IDs, previous values, DOM access |
| `useMemo`             | Memoize value               | Avoid recomputation                    |
| `useCallback`         | Memoize function            | Avoid unnecessary re-renders           |
| `useContext`          | Consume context             | Global/shared state                    |
| `useReducer`          | Complex state updates       | Forms, toggles, nested state           |
| `useImperativeHandle` | Control what ref exposes    | Custom components with refs            |
| `useDebugValue`       | Debug custom hooks          | DevTools info                          |
