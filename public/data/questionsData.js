// questionsData.js
export const questionsData = [
  {
    Difficulty: "Easy",
    Category: "Core Concepts",
    Question: "What is React, and how does it differ from other JavaScript frameworks or libraries?",
    Answer: [
      "React is a JavaScript library for building user interfaces.",
      "It focuses solely on the view layer of an application.",
      "React uses a declarative style and a component-based architecture."
    ]
  },
  {
    Difficulty: "Medium",
    Category: "Core Concepts",
    Question: "Explain the Virtual DOM and its role in React.",
    Answer: [
      "The Virtual DOM is an in-memory representation of the real DOM.",
      "React updates the Virtual DOM first when state or props change.",
      "It efficiently updates only the necessary parts of the real DOM after comparing (diffing) the changes."
    ],
    Code: [
      `const element = <h1>Hello, world!</h1>;`,
      `// React updates this element efficiently when changes occur.`
    ]
  },
  {
    Difficulty: "Easy",
    Category: "Directives and Components",
    Question: "What is the difference between a functional component and a class component?",
    Answer: [
      "Functional components are stateless and simpler to write.",
      "They are functions that accept props and return JSX.",
      "Class components are stateful, more verbose, and provide lifecycle methods."
    ],
    Code: [
      `// Functional Component`,
      `function MyComponent() {`,
      `  return <div>Hello, World!</div>;`,
      `}`,
      ``,
      `// Class Component`,
      `class MyComponent extends React.Component {`,
      `  render() {`,
      `    return <div>Hello, World!</div>;`,
      `  }`,
      `}`
    ]
  }
];
