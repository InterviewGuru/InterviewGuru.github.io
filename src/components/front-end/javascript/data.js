export const questionsData = {
    "Title": "JavaScript Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Hard",
        "Category": "Asynchronous Programming",
        "Question": "Explain the Event Loop in JavaScript, including the roles of the Call Stack, Callback Queue, and Microtask Queue.",
        "Answer": [
          "The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. Here's how it works:",
          "- **Call Stack:** Executes synchronous code, storing function calls in a Last-In-First-Out (LIFO) stack.",
          "- **Callback Queue (Task Queue):** Holds callbacks from asynchronous operations like setTimeout or DOM events.",
          "- **Microtask Queue:** Contains microtasks like those created by Promise.then(). Microtasks run before callbacks from the task queue.",
          "The Event Loop continuously checks if the call stack is empty, then processes tasks from the microtask queue first, followed by the callback queue."
        ],
        "Code": [
          "// Example demonstrating the Event Loop",
          "console.log('Start');",
          "setTimeout(() => console.log('Timeout'), 0);",
          "Promise.resolve().then(() => console.log('Promise'));",
          "console.log('End');",
          "// Output: Start, End, Promise, Timeout"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Prototypal Inheritance",
        "Question": "How does prototypal inheritance work in JavaScript? Describe the prototype chain.",
        "Answer": [
          "Prototypal inheritance in JavaScript involves objects inheriting properties from other objects through a prototype chain:",
          "- Each object has an internal `[[Prototype]]` link (accessible via `__proto__` or `Object.getPrototypeOf()`) to another object called its 'prototype'.",
          "- When trying to access a property on an object, if the property isn't found, JavaScript looks up the prototype chain until the property is found or the chain ends at Object.prototype.",
          "- Methods or properties can be added to the prototype to be shared among instances."
        ],
        "Code": [
          "// Example of prototypal inheritance",
          "function Animal(name) {",
          "  this.name = name;",
          "}",
          "Animal.prototype.eat = function() {",
          "  console.log(`${this.name} eats.`);",
          "};",
          "function Dog(name) {",
          "  Animal.call(this, name);",
          "}",
          "Dog.prototype = Object.create(Animal.prototype);",
          "Dog.prototype.constructor = Dog;",
          "Dog.prototype.bark = function() {",
          "  console.log(`${this.name} barks.`);",
          "};",
          "const dog = new Dog('Rex');",
          "dog.eat(); // Rex eats.",
          "dog.bark(); // Rex barks."
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Closures",
        "Question": "What are closures in JavaScript? Provide an example that demonstrates the use of closures.",
        "Answer": [
          "Closures are functions that have access to variables from outer (enclosing) lexical scopes even after the outer function has returned:",
          "- They 'close over' the variables of their lexical scope, allowing those variables to remain accessible.",
          "- Useful for private variables, data hiding, and functional programming patterns."
        ],
        "Code": [
          "// Example of closure",
          "function outerFunction(x) {",
          "  return function innerFunction(y) {",
          "    return x + y;",
          "  };",
          "}",
          "const add5 = outerFunction(5);",
          "console.log(add5(3)); // 8",
          "console.log(add5(7)); // 12",
          "// Here, innerFunction has access to 'x' even after outerFunction has returned."
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Functional Programming",
        "Question": "Describe the concept of currying in JavaScript and implement a curried version of a function.",
        "Answer": [
          "Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument:",
          "- It allows partial application of functions, where you can fix some arguments and return a new function expecting the rest.",
          "- Useful for creating specialized functions or for functional programming paradigms."
        ],
        "Code": [
          "// Currying example",
          "function curry(fn) {",
          "  return function curried(...args) {",
          "    if (args.length >= fn.length) {",
          "      return fn.apply(this, args);",
          "    } else {",
          "      return function(...args2) {",
          "        return curried.apply(this, args.concat(args2));",
          "      }",
          "    }",
          "  };",
          "}",
          "function sum(a, b, c) {",
          "  return a + b + c;",
          "}",
          "const curriedSum = curry(sum);",
          "console.log(curriedSum(1)(2)(3)); // 6",
          "console.log(curriedSum(1, 2)(3)); // 6"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance Optimization",
        "Question": "How can you optimize JavaScript code for performance, especially in terms of DOM manipulation and loops?",
        "Answer": [
          "- **DOM Manipulation:** Minimize reflows and repaints by batching changes, using document fragments, or caching DOM references. Use `requestAnimationFrame` for animations.",
          "- **Loops:** Use for loops over `forEach` for performance in large arrays, avoid unnecessary function calls inside loops, leverage `map`, `filter`, `reduce` for functional operations but be mindful of their performance for very large arrays.",
          "- **Memoization:** Cache results of expensive function calls.",
          "- **Debounce and Throttle:** Control how often a function can fire, particularly useful for event handlers."
        ],
        "Code": [
          "// Example of DOM manipulation optimization",
          "const ul = document.createElement('ul');",
          "for (let i = 0; i < 1000; i++) {",
          "  const li = document.createElement('li');",
          "  li.textContent = `Item ${i}`;",
          "  ul.appendChild(li);",
          "}",
          "document.body.appendChild(ul); // Append all at once"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "ES6+ Features",
        "Question": "Explain how generators and iterables work in JavaScript, and provide an example of each.",
        "Answer": [
          "- **Generators:** Functions that can be exited and later re-entered, retaining their context (state). They use `function*` syntax and yield values one at a time.",
          "- **Iterables:** Objects which define a `[Symbol.iterator]` method, allowing them to be used in for-of loops, spread operators, etc."
        ],
        "Code": [
          "// Generator example",
          "function* idMaker() {",
          "  let index = 0;",
          "  while(true)",
          "    yield index++;",
          "}",
          "const gen = idMaker();",
          "console.log(gen.next().value); // 0",
          "console.log(gen.next().value); // 1",
          "",
          "// Iterable example",
          "const myIterable = {",
          "  *[Symbol.iterator]() {",
          "    yield 1;",
          "    yield 2;",
          "    yield 3;",
          "  }",
          "};",
          "for (const value of myIterable) {",
          "  console.log(value);",
          "} // Logs 1, 2, 3"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced Patterns",
        "Question": "Describe the Module Pattern in JavaScript and how it provides encapsulation.",
        "Answer": [
          "The Module Pattern uses IIFE (Immediately Invoked Function Expression) to create private and public scopes:",
          "- Private variables and functions are only accessible within the function.",
          "- Public methods are returned in an object, providing access to the inner scope while hiding implementation details."
        ],
        "Code": [
          "// Module Pattern example",
          "const myModule = (function() {",
          "  // Private variable",
          "  let privateCounter = 0;",
          "",
          "  function changeBy(val) {",
          "    privateCounter += val;",
          "  }",
          "",
          "  return {",
          "    // Public method",
          "    increment: function() {",
          "      changeBy(1);",
          "    },",
          "    decrement: function() {",
          "      changeBy(-1);",
          "    },",
          "    value: function() {",
          "      return privateCounter;",
          "    }",
          "  };",
          "})();",
          "myModule.increment();",
          "console.log(myModule.value()); // 1",
          "console.log(myModule.privateCounter); // undefined"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Web Workers",
        "Question": "What are Web Workers in JavaScript, and how do they help with performance?",
        "Answer": [
          "Web Workers enable running scripts in background threads, separate from the main execution thread of a web application:", 
          "- They prevent long-running scripts from blocking the UI thread, improving responsiveness.",
          "- Useful for heavy computations, data processing, or any CPU-intensive tasks."
        ],
        "Code": [
          "// Main script",
          "const worker = new Worker('worker.js');",
          "worker.postMessage('Hello from main');",
          "worker.onmessage = function(event) {",
          "  console.log('Received from worker:', event.data);",
          "};",
          "// worker.js",
          "self.onmessage = function(event) {",
          "  console.log('Worker received:', event.data);",
          "  self.postMessage('Hello from worker');",
          "};"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Memory Management",
        "Question": "How does JavaScript handle memory management, and what are common memory leak scenarios?",
        "Answer": [
          "JavaScript uses automatic garbage collection, mainly through reference counting and mark-and-sweep algorithms:",
          "- **Reference Counting:** If no references to an object exist, it's eligible for garbage collection.",
          "- **Mark-and-Sweep:** Periodically, the garbage collector marks all reachable objects and then sweeps away the unmarked ones.",
          "Common memory leak scenarios include:",
          "- **Unintentional global variables:** Variables accidentally added to the global scope.",
          "- **Forgotten timers or callbacks:** SetInterval without clearInterval, or event listeners not removed.",
          "- **Closures holding onto large objects:** If a closure references a large object that isn't needed anymore.",
          "- **DOM references:** Keeping references to DOM elements after they've been removed from the DOM."
        ],
        "Code": [
          "// Example of potential memory leak with closures",
          "function createLeak() {",
          "  const bigData = new Array(1000000).fill('big');",
          "  return function() {",
          "    console.log(bigData.length);",
          "  };",
          "}",
          "const leak = createLeak();",
          "leak(); // If leak persists, bigData won't be garbage collected"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced Objects",
        "Question": "Explain the difference between Object.freeze() and Object.seal() in JavaScript.",
        "Answer": [
          "- **Object.freeze():** Prevents new properties from being added, existing properties from being removed or modified, and prevents the prototype from being changed. All properties are made non-configurable and non-writable.",
          "- **Object.seal():** Prevents new properties from being added and existing properties from being removed but allows existing properties to be modified if they're writable. All properties become non-configurable."
        ],
        "Code": [
          "// Example usage of Object.freeze and Object.seal",
          "const objFreeze = { prop: 'value' };",
          "Object.freeze(objFreeze);",
          "objFreeze.prop = 'newValue'; // No effect",
          "delete objFreeze.prop; // No effect",
          "objFreeze.newProp = 'new'; // No effect",
          "",
          "const objSeal = { prop: 'value' };",
          "Object.seal(objSeal);",
          "objSeal.prop = 'newValue'; // This works if 'prop' was writable",
          "delete objSeal.prop; // No effect",
          "objSeal.newProp = 'new'; // No effect"
        ]
      },    
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is JavaScript, and why is it used?",
        "Answer": [
          "JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic web pages.",
          "It is widely used for tasks like client-side scripting, server-side development, and building web applications."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Variables and Data Types",
        "Question": "What are the differences between var, let, and const in JavaScript?",
        "Answer": [
          "'var' is function-scoped and can be redeclared.",
          "'let' is block-scoped and cannot be redeclared in the same scope.",
          "'const' is block-scoped and must be initialized at the time of declaration. It cannot be reassigned."
        ],
        "Code": [
          "// Example",
          "var x = 10; // Function-scoped",
          "let y = 20; // Block-scoped",
          "const z = 30; // Block-scoped and immutable"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Functions",
        "Question": "What is the difference between function declarations and function expressions?",
        "Answer": [
          "Function declarations are hoisted, meaning they can be called before they are defined in the code.",
          "Function expressions are not hoisted and must be defined before being called."
        ],
        "Code": [
          "// Function Declaration",
          "function add(a, b) { return a + b; }",
          "// Function Expression",
          "const multiply = function(a, b) { return a * b; };"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Asynchronous JavaScript",
        "Question": "What is the difference between promises and async/await in JavaScript?",
        "Answer": [
          "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
          "async/await is a syntactic sugar built on top of promises that makes asynchronous code easier to read and write."
        ],
        "Code": [
          "// Using Promises",
          "fetch('https://api.example.com/data')",
          "  .then(response => response.json())",
          "  .then(data => console.log(data))",
          "  .catch(error => console.error(error));",
          "",
          "// Using async/await",
          "async function fetchData() {",
          "  try {",
          "    const response = await fetch('https://api.example.com/data');",
          "    const data = await response.json();",
          "    console.log(data);",
          "  } catch (error) {",
          "    console.error(error);",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Objects and Arrays",
        "Question": "What is destructuring in JavaScript?",
        "Answer": [
          "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.",
          "It provides a concise way to extract data from complex structures."
        ],
        "Code": [
          "// Array Destructuring",
          "const [a, b] = [10, 20];",
          "// Object Destructuring",
          "const { name, age } = { name: 'John', age: 25 };"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced",
        "Question": "What is the difference between call, apply, and bind methods in JavaScript?",
        "Answer": [
          "'call' invokes a function with a specified 'this' context and arguments provided individually.",
          "'apply' is similar to 'call', but arguments are provided as an array.",
          "'bind' returns a new function with a specified 'this' context and can be invoked later."
        ],
        "Code": [
          "const obj = { x: 10 };",
          "function printValue(y) { console.log(this.x + y); }",
          "",
          "// Using call",
          "printValue.call(obj, 5);",
          "",
          "// Using apply",
          "printValue.apply(obj, [5]);",
          "",
          "// Using bind",
          "const boundFn = printValue.bind(obj);",
          "boundFn(5);"
        ]
      }
    ]
  }
  