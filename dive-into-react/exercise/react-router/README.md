## 🔧 Tools We’ll Use

## **React Router DOM** (for routing between pages)

- **`<BrowserRouter>`**: Wraps your app and keeps track of the URL using HTML5 history API.
- **`<Routes>`**: Groups all the route definitions.
- **`<Route path="/" element={<Home />}`**: Renders the `<Home />` component when the path is `/`.
- **`<Link>`**: Navigation without reloading the page.

### ✅ Summary: Why We Do These Things

| Step                 | What It Does                   | Why It Matters                            |
| -------------------- | ------------------------------ | ----------------------------------------- |
| Vite Setup           | Creates a fast dev environment | Vite is quicker than CRA                  |
| Install React Router | Adds routing support           | For SPA navigation                        |
| `BrowserRouter`      | Tracks URL                     | Lets React control navigation             |
| `Routes` + `Route`   | Defines pages                  | Shows correct component for a path        |
| `Link`               | Navigation                     | Replaces `<a>` to avoid full page reloads |

---

## Clearing doubts of `react-router` and `react-router-dom`

## 📦 `react-router` vs `react-router-dom` — What are they?

## 🧠 Example:

### `react-router`: Handles core logic like how routing works, matching paths, rendering components. These are **universal** — they don't care about HTML, just about routes.

- `createRoutesFromElements()`
- `createBrowserRouter()`
- `RouterProvider`

---

### From `react-router-dom`: Adds DOM-aware behavior: browser history, links, navigation, etc.

- `<BrowserRouter>`
- `<Link>`
- `<NavLink>`
- `<Outlet>`
- These are **DOM-aware components** — designed specifically for browser-based apps

---

| Feature                | `react-router`                                           | `react-router-dom`                                                            |
| ---------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| What it is             | Core routing library (platform-agnostic)                 | Web-specific bindingsfor React Router                                         |
| Where it's used        | All environments (web, native, etc.)                     | **Browser-based apps**(React on the web)                                      |
| Contains               | Only the routing logic (like `createRoutesFromElements`) | All theDOM-specific components (like `<BrowserRouter>`, `<Link>`, `<Outlet>`) |
| Should you install it? | ❌ No need directly                                      | ✅ Yes, this is what you installin web apps                                   |

---

## ✅ In Simple Terms:

- `react-router` = The **brain** of routing (platform-neutral, used by all versions).
- `react-router-dom` = The **hands** that work with the **web browser** (DOM = Document Object Model).

When you install `react-router-dom`, you **automatically get** `react-router` as a dependency.

---
