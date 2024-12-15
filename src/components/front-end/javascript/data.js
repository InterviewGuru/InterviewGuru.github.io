export const questionsData = {
    "Title": "JavaScript Interview Questions and Answers",
    "List": [
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
  