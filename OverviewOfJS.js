// Que - What is javascript ?

// Ans - JavaScript is a powerful, flexible programming language used to make websites interactive and dynamic.

// It runs in the browser (like Chrome, Firefox) and also on the server (via Node.js).

//Technical Defination
//  JavaScript is a high-level, interpreted, multi-paradigm, prototype-based, dynamically typed language primarily used for web development.

// JavaScript Terminology – Fully Explained

// First

// 🔹 1. High-level
// “You don’t have to manage memory or hardware manually.”

// What it means:

// You write code in a way that’s easy for humans to understand.

// You don’t have to worry about complex things like:

// Memory allocation

// Pointers

// CPU registers or hardware specifics

// let name = "Samarth";
// Behind the scenes, JavaScript:

// Finds memory to store "Samarth"

// Tracks it with the variable name

// Frees memory later using Garbage Collection

// 🧠 You just focus on logic, not how memory is stored or released. That’s why it’s called high-level.

// JavaScript is a high-level language, which means:

// ✅ You don’t worry about how memory is managed.

// ✅ You don’t handle hardware or low-level stuff.

// ✅ You can just focus on writing logic to build websites, apps, and APIs.

//
//
//

// 🔹 2. Interpreted
// “Code runs line-by-line using an engine like V8 (in Chrome).”

// What it means:

// JavaScript is not compiled like C/C++ or Java.

// It is read and executed line by line by the browser.

// The JavaScript engine (like V8 in Chrome) reads one line, executes it, then moves to the next.

// 📌 There’s no .exe or .class file like in compiled languages — JS runs directly in the browser.

// ❌ How is it different from a compiled language?
// In compiled languages (like C, C++, Java):

// First, you write code

// Then, you compile it → it becomes a .exe or .class file

// Only after compiling, you can run it

//
//
//
//

//  3. Dynamically Typed
// “You don’t declare data types (let x = 5; instead of int x = 5;).”

// What it means:

// Variables don’t require a fixed type when declared.

// JS automatically detects the type based on the value.

// let x = 5;        // x is a number
// x = "hello";      // now x is a string
// 🧠 JS doesn’t complain because it is dynamic — it decides type at runtime.

// Compare that with C/C++:

// cpp
// Copy code
// int x = 5;
// x = "hello";  // ❌ error: can't assign string to int

//
//
//

// 🔹 4. Multi-paradigm
// “You can use functional, procedural, or object-oriented styles.”

// What it means:

// JavaScript is flexible. You can:

// Write simple logic step-by-step (procedural)

// Use reusable functions (functional)

// Build objects and classes (object-oriented)

// Example:

// ✅ Procedural:

// js
// Copy code
// let a = 2;
// let b = 3;
// let c = a + b;
// ✅ Functional:

// js
// Copy code
// function add(a, b) {
//   return a + b;
// }
// ✅ Object-oriented:

// js
// Copy code
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
// }
// 💡 You’re free to mix styles — that’s the power of multi-paradigm.

//
//
//

// 🔹 5. Prototype-based
// “Inheritance is done using prototypes instead of classes (though ES6 adds class syntax).”

// What it means:

// JavaScript objects can inherit directly from other objects.

// Every object has a hidden property called [[Prototype]] (accessible via __proto__).

// Example:

// js
// Copy code
// const person = {
//   greet() {
//     console.log("Hello");
//   }
// };

// const student = Object.create(person);
// student.greet();  // Inherits greet() from person
// Instead of classical class-based inheritance (like Java/C++), JS uses prototypes.

// 🔧 In ES6, class was introduced:

// js
// Copy code
// class Person {
//   greet() {
//     console.log("Hi");
//   }
// }
// But under the hood, it’s still prototype-based — classes are just syntax sugar.

//
//
//

// 🔹 6. Event-driven
// “JS reacts to user interactions (like button clicks, form submits).”

// What it means:

// JS waits and listens for events — like:

// Button clicks

// Mouse movements

// Keyboard inputs

// Page loads

// When the event occurs, a function (callback) is run.

// Example:

// js
// Copy code
// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button clicked!");
// });
// The code doesn't run immediately — it waits for the event. This is the event-driven model.

//
//
//

//  7. Single-threaded
// “JS runs one task at a time (but handles async operations with callbacks, promises, async/await).”

// What it means:

// JavaScript can only do one thing at a time (1 thread).

// But it can manage long-running tasks (like fetching data) asynchronously.

// Example:

// js
// Copy code
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout done");
// }, 1000);

// console.log("End");
// 🔁 Output:

// sql
// Copy code
// Start
// End
// Timeout done
// Even though setTimeout waits, the rest of the code runs first. JS uses the event loop to handle this.

// 🔹 8. Scripting Language
// “Originally meant for small tasks, but now used for large-scale applications too.”

// 📜 What is a scripting language?
// A scripting language is:

// A lightweight language used to automate simple tasks.

// It usually runs inside another program (like a browser or a game engine).

// It’s not compiled, and is easy to use for small things like popups, form checks, etc.

// 🧠 Think of scripting as “adding behavior to something that already exists.”

// Now, it powers:

// Entire websites (React, Angular)

// Servers (Node.js)

// Mobile apps (React Native)

// Desktop apps (Electron)

// Machine Learning (TensorFlow.js)

// So even though it started small, JS is now a full-fledged programming language for all types of applications.
//
//
//
//

// Another Topics

// 🔹 1. Compiler vs Interpreter
// These are two different ways a programming language can run your code.

// ✅ What is a Compiler?
// A compiler translates your entire code into machine language (0s and 1s) before it runs.

// 🧠 Example:
// You write your code

// Then compile it → creates a .exe or .class file

// Then run that file

// 🧪 Example in C/C++ or Java:
// cpp
// Copy
// Edit
// int a = 5;
// printf("%d", a);
// ➡️ This code needs to be compiled using gcc or javac.

// Only after compilation, it can run.

// ✅ What is an Interpreter?
// An interpreter reads and runs your code line by line, without creating a separate compiled file.

// 🧪 Example in JavaScript:
// js
// Copy
// Edit
// console.log("Step 1");
// console.log("Step 2");
// The browser reads line 1, runs it.
// Then reads line 2, runs it.

// No compilation needed.

// 🧠 Summary Table:
// Feature	Compiler	Interpreter
// Runs whole code?	Yes, all at once	No, runs line-by-line
// Converts to machine code?	Yes	No
// Speed	Usually faster after compile	Slower (runs line-by-line)
// Languages	C, C++, Java	JavaScript, Python, Ruby
// File required?	.exe, .class	No file, runs directly

//
//
//

// 🔹 2. Synchronous vs Asynchronous Languages
// This refers to how code is executed — either step-by-step or with time delays and background tasks.

// ✅ What is Synchronous Execution?
// Code runs one line at a time, in order, and waits for each step to finish.

// 🧪 Example:
// js
// Copy
// Edit
// console.log("1");
// console.log("2");
// console.log("3");
// ➡️ Output:

// Copy
// Edit
// 1
// 2
// 3
// Each line waits for the previous one to finish.

// ✅ What is Asynchronous Execution?
// Code doesn't always wait — some tasks run in the background, and the next lines continue.

// This is useful when:

// You're fetching data from a server

// Waiting for user input

// Working with files or APIs

// 🧪 Example in JavaScript:
// js
// Copy
// Edit
// console.log("Start");

// setTimeout(() => {
//   console.log("Async Task");
// }, 2000);

// console.log("End");
// ➡️ Output:

// pgsql
// Copy
// Edit
// Start
// End
// Async Task (after 2 seconds)
// 🧠 setTimeout() runs in the background.
// JavaScript continues running without waiting.

// 💡 Why Is JavaScript Asynchronous?
// Because websites need to:

// Load data from servers

// Animate stuff

// Handle clicks, form submissions

// If JS was purely synchronous, the entire page would freeze while waiting for data.
// Asynchronous programming keeps the app fast and responsive.

// 🎯 One-Line Summaries:
// Compiler: Converts whole code into machine language before running (like C, Java).

// Interpreter: Runs code line-by-line directly (like JavaScript, Python).

// Synchronous: Each line waits for the previous line to finish.

// Asynchronous: Some tasks run in the background; next lines don’t wait.
