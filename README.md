# 🚀 DevStack - Interactive Tech Stack Builder

DevStack is a simple web application for developers. It helps users explore different technologies and create their own technology stack.

## 🧰 Technologies Used

* React.js
* Vite
* TypeScript
* Tailwind CSS
* React Toastify
* JSON

## ✨ Key Features

1. **Technology Cards**
   Users can see different technologies with their rating, difficulty level, and description.

2. **My Stack**
   Users can add technologies to their own stack. The same technology cannot be added twice.

3. **Toast Notification**
   Toast messages appear when users add or remove a technology.

4. **Loading State**
   A loading message is shown while the technology data is loading.

---

# ❓ React Conceptual Questions & Answers

## 1. What is JSX and why do we use it in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to write and understand.

## 2. What is the difference between props and state?

**Props** are used to send data from a parent to a child component.

**State** is used to store data inside a component. State can change when the user interacts with the app.

## 3. What does useState do and where did you use it?

`useState` is a React Hook. It helps us store and update data.

I used `useState` to manage the technology list, selected technologies, and loading state.

## 4. What does useEffect do and why did you use it?

`useEffect` is used to perform an action after a component renders.

I used `useEffect` to load the technology data from the JSON file when the app starts.

## 5. Why do we need a key when using map?

When we use `.map()` to show a list, React needs a unique `key` for each item.

It helps React identify which item has changed, added, or removed.

I used a unique `id` as the key.

## 6. What is conditional rendering? Where did you use it?

Conditional rendering means showing something based on a condition.

In my project, when there are no selected technologies, I show an empty message.

When technologies are selected, I show them in the **My Stack** section.

## 7. How do you send data from parent to child and child to parent?

We can send data from **parent to child using props**.

For example, I passed data from the App component to the My Stack component.
## ❓ Common FAQ

### 1. Where can we deploy the site?

We can deploy the site on any hosting platform. For example, Netlify, Vercel, or Cloudflare Pages.

I deployed my project on **Vercel**.

### 2. Do we have to use TypeScript?

No. We can use either TypeScript or JavaScript.

I used **TypeScript** in this project.

### 3. Can we change the title, logo, and colors?

Yes. We can change the project title, logo, and colors.

I used my own title, logo, and color design for this project.

### 4. Where do we get the technology logos/icons?

We can get technology logos from different websites or use image URLs.

I used technology logo URLs in my JSON data.


To send something from **child to parent**, we can pass a function from the parent to the child. The child can then call that function when needed.

---


