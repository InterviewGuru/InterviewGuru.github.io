// questionsData.js
export const questionsData = {
    "Title": "React Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Core Concepts",
        "Question": "What is React, and how does it differ from other JavaScript frameworks or libraries?",
        "Answer": [
          "React is a JavaScript library for building user interfaces.",
          "Unlike full frameworks like Angular, React focuses solely on the view layer of an application.",
          "React uses a declarative style and a component-based architecture."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "Explain the Virtual DOM and its role in React.",
        "Answer": [
          "The Virtual DOM is an in-memory representation of the real DOM.",
          "React updates the Virtual DOM first when state or props change.",
          "It efficiently updates only the necessary parts of the real DOM after diffing the changes."
        ],
        "Code": [
          "const element = <h1>Hello, world!</h1>;",
          "// React updates this element efficiently when changes occur."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "What are React hooks? Name a few and explain their use.",
        "Answer": [
          "React hooks allow functional components to use state and other React features.",
          "useState: Manages state in functional components.",
          "useEffect: Handles side effects like API calls or subscriptions.",
          "useContext: Provides access to context values."
        ],
        "Code": [
          "// Example of useState",
          "const [count, setCount] = useState(0);",
          "setCount(count + 1); // Updates state"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "How does React manage state, and what are the differences between local state and global state?",
        "Answer": [
          "React manages state using useState, useReducer, or external libraries like Redux.",
          "Local state: Managed within a single component.",
          "Global state: Shared across multiple components, often managed with Context API or Redux."
        ],
        "Code": [
          "// Local state example",
          "const [localState, setLocalState] = useState('Hello');",
          "// Global state example using Context",
          "const value = useContext(GlobalContext);"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Core Concepts",
        "Question": "What are the key features of React 18?",
        "Answer": [
          "Automatic batching of updates to improve performance.",
          "Concurrent rendering to enhance user experience.",
          "Transitions API to handle UI state changes smoothly.",
          "New hooks: useId for stable IDs, and useTransition for concurrent updates."
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Directives and Components",
        "Question": "What is the difference between a functional component and a class component?",
        "Answer": [
          "Functional components are stateless and simpler to write.",
          "They are functions that accept props and return JSX.",
          "Class components are stateful, more verbose, and provide lifecycle methods."
        ],
        "Code": [
          "// Functional Component",
          "function MyComponent() {",
          "  return <div>Hello, World!</div>;",
          "}",
          "",
          "// Class Component",
          "class MyComponent extends React.Component {",
          "  render() {",
          "    return <div>Hello, World!</div>;",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Directives and Components",
        "Question": "How do you pass data between components?",
        "Answer": [
          "Props are used to pass data from parent to child components.",
          "To pass data between sibling components, use a common parent component to manage state."
        ],
        "Code": [
          "// Passing data via props",
          "function Parent() {",
          "  return <Child data='Hello' />;",
          "}",
          "function Child({ data }) {",
          "  return <div>{data}</div>;",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Directives and Components",
        "Question": "What are controlled and uncontrolled components in React?",
        "Answer": [
          "Controlled components are fully controlled by React state.",
          "Uncontrolled components manage their own state through the DOM."
        ],
        "Code": [
          "// Controlled Component",
          "function ControlledInput() {",
          "  const [value, setValue] = useState('');",
          "  return <input value={value} onChange={(e) => setValue(e.target.value)} />;",
          "}",
          "",
          "// Uncontrolled Component",
          "function UncontrolledInput() {",
          "  const inputRef = useRef();",
          "  return <input ref={inputRef} />;",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Directives and Components",
        "Question": "Explain the role of key in React lists.",
        "Answer": [
          "Keys help React identify which items have changed, are added, or removed.",
          "They should be unique among siblings to avoid rendering issues."
        ],
        "Code": [
          "// Example",
          "const list = ['a', 'b', 'c'];",
          "list.map((item, index) => <li key={index}>{item}</li>);"
        ]
      }
    ]
  }
  