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
        "Category": "Performance",
        "Question": "How does React's Virtual DOM work?",
        "Answer": [
          "The Virtual DOM is a lightweight in-memory copy of the actual DOM.",
          "React updates the VDOM when state changes and then compares it with the previous VDOM to decide minimal DOM updates."
        ],
        "Code": [
          "// No specific code for VDOM, but conceptual understanding is key"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced Patterns",
        "Question": "What are Higher-Order Components (HOCs)?",
        "Answer": [
          "HOCs are functions that take a component and return a new component with added props or behaviors.",
          "They are used for code reuse, logic abstraction, and rendering hijacking."
        ],
        "Code": [
          "// Example of HOC",
          "const withSubscription = (WrappedComponent, selectData) => {",
          "  return class extends React.Component {",
          "    render() {",
          "      return <WrappedComponent {...this.props} {...selectData(this.context.store)} />",
          "    }",
          "  }",
          "};"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "What is lazy loading in React?",
        "Answer": [
          "Lazy loading delays loading of non-critical resources until they are needed.",
          "React.lazy() and Suspense are used for this purpose."
        ],
        "Code": [
          "const OtherComponent = React.lazy(() => import('./OtherComponent'));",
          "function MyComponent() {",
          "  return (",
          "    <div>",
          "      <Suspense fallback={<div>Loading...</div>}>",
          "        <OtherComponent />",
          "      </Suspense>",
          "    </div>",
          "  );",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "Describe the benefits of using Redux with React.",
        "Answer": [
          "Redux provides a single source of truth for state management.",
          "It offers predictable state updates with unidirectional data flow.",
          "Redux integrates well with React through React-Redux bindings."
        ],
        "Code": [
          "// Example Redux setup",
          "import { createStore } from 'redux';",
          "import rootReducer from './reducers';",
          "const store = createStore(rootReducer);"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "What are some performance optimization techniques in React?",
        "Answer": [
          "Memoization with React.memo, useMemo, and useCallback prevents unnecessary re-renders.",
          "Code splitting for lazy loading components.",
          "Using React Profiler for performance analysis."
        ],
        "Code": [
          "// Example of useMemo",
          "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "Explain the concept of Context API in React.",
        "Answer": [
          "Context API allows passing data through the component tree without prop drilling.",
          "It uses Context, Provider, and Consumer or useContext Hook."
        ],
        "Code": [
          "// Example of Context API",
          "const ThemeContext = React.createContext('light');",
          "function App() {",
          "  return (",
          "    <ThemeContext.Provider value=\"dark\">",
          "      <Toolbar />",
          "    </ThemeContext.Provider>",
          "  );",
          "}",
          "function Toolbar() {",
          "  return (",
          "    <div>",
          "      <ThemedButton />",
          "    </div>",
          "  );",
          "}",
          "function ThemedButton() {",
          "  const theme = useContext(ThemeContext);",
          "  return <button style={{ background: theme }}>Themed Button</button>;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced Patterns",
        "Question": "What is the difference between useEffect and useLayoutEffect?",
        "Answer": [
          "useEffect runs asynchronously after render, post-paint.",
          "useLayoutEffect runs synchronously immediately after all DOM mutations but before the browser paints."
        ],
        "Code": [
          "// Example of useLayoutEffect",
          "import React, { useLayoutEffect, useRef } from 'react';",
          "function MeasureExample() {",
          "  const ref = useRef(null);",
          "  useLayoutEffect(() => {",
          "    console.log(ref.current.getBoundingClientRect());",
          "  }, []);",
          "  return <div ref={ref}>Measure Me</div>;",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "When should you use useReducer instead of useState?",
        "Answer": [
          "useReducer is beneficial for complex state logic involving multiple sub-values or when the next state depends on the previous one.",
          "It's useful when state updates are more predictable with reducer functions."
        ],
        "Code": [
          "// Example of useReducer",
          "import React, { useReducer } from 'react';",
          "const initialState = { count: 0 };",
          "function reducer(state, action) {",
          "  switch (action.type) {",
          "    case 'increment':",
          "      return { count: state.count + 1 };",
          "    case 'decrement':",
          "      return { count: state.count - 1 };",
          "    default:",
          "      throw new Error();",
          "  }",
          "}",
          "function Counter() {",
          "  const [state, dispatch] = useReducer(reducer, initialState);",
          "  return (",
          "    <div>",
          "      Count: {state.count}",
          "      <button onClick={() => dispatch({ type: 'increment' })}>+</button>",
          "      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>",
          "    </div>",
          "  );",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "How do useCallback and useMemo differ?",
        "Answer": [
          "useCallback memoizes callback functions to prevent unnecessary re-renders in child components.",
          "useMemo memoizes the result of a computation, avoiding recalculations unless dependencies change."
        ],
        "Code": [
          "// Example of useCallback",
          "const memoizedCallback = useCallback(() => {",
          "  doSomething(a, b);",
          "}, [a, b]);",
          "// Example of useMemo",
          "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Advanced Patterns",
        "Question": "What are custom hooks in React?",
        "Answer": [
          "Custom hooks are JavaScript functions whose names start with 'use' and can call other hooks.",
          "They allow logic to be reused across components."
        ],
        "Code": [
          "// Example of custom hook",
          "function useWindowSize() {",
          "  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);",
          "  useEffect(() => {",
          "    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);",
          "    window.addEventListener('resize', handleResize);",
          "    return () => window.removeEventListener('resize', handleResize);",
          "  }, []);",
          "  return size;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Error Handling",
        "Question": "How can you handle errors in React?",
        "Answer": [
          "React 16 introduced error boundaries for catching JavaScript errors anywhere in their child component tree.",
          "Use try/catch in effects or custom hooks for handling errors in asynchronous operations."
        ],
        "Code": [
          "// Example of error boundary",
          "class ErrorBoundary extends React.Component {",
          "  constructor(props) {",
          "    super(props);",
          "    this.state = { hasError: false };",
          "  }",
          "  static getDerivedStateFromError(error) {",
          "    return { hasError: true };",
          "  }",
          "  render() {",
          "    if (this.state.hasError) {",
          "      return <h1>Something went wrong.</h1>;",
          "    }",
          "    return this.props.children;",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "What is the significance of keys in React lists?",
        "Answer": [
          "Keys help React identify which items have changed, are added, or are removed.",
          "They improve the efficiency of reconciliation by giving stable identities to list items."
        ],
        "Code": [
          "// Example of using keys in lists",
          "const numbers = [1, 2, 3, 4, 5];",
          "const listItems = numbers.map((number) =>",
          "  <li key={number.toString()}>",
          "    {number}",
          "  </li>",
          ");"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What is Lifting State Up in React?",
        "Answer": [
          "Lifting State Up is a technique where shared state is moved to the closest common ancestor component of the components needing this state.",
          "It helps in managing state in a centralized manner when multiple components need access to the same data."
        ],
        "Code": [
          "// Example where state is lifted up",
          "class Parent extends React.Component {",
          "  constructor(props) {",
          "    super(props);",
          "    this.state = { inputValue: '' };",
          "  }",
          "  handleInputChange = (value) => { this.setState({ inputValue: value }); }",
          "  render() {",
          "    return (",
          "      <div>",
          "        <Child1 onInputChange={this.handleInputChange} value={this.state.inputValue} />",
          "        <Child2 value={this.state.inputValue} />",
          "      </div>",
          "    );",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "What is React context?",
        "Answer": [
          "React Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
          "It's useful for sharing values like the current theme, user authentication, or language settings."
        ],
        "Code": [
          "// Example of using Context",
          "const ThemeContext = React.createContext('light');",
          "function App() {",
          "  return (",
          "    <ThemeContext.Provider value=\"dark\">",
          "      <Toolbar />",
          "    </ThemeContext.Provider>",
          "  );",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Styling",
        "Question": "What are different ways to add CSS in your app?",
        "Answer": [
          "1. **Inline Styles:** Directly in JSX using style attribute.",
          "2. **CSS Modules:** For scoped CSS.",
          "3. **Styled-components:** CSS-in-JS where CSS is written using JavaScript.",
          "4. **CSS-in-JS Libraries:** Like Emotion.",
          "5. **Global CSS:** Traditional stylesheet linked in index.html or imported in React."
        ],
        "Code": [
          "// Inline Style",
          "<div style={{ color: 'blue' }}>Blue Text</div>",
          "// CSS Module",
          "import styles from './styles.module.css';",
          "<div className={styles.blueText}>Blue Text</div>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Development Tools",
        "Question": "What is Hot Module Replacement?",
        "Answer": [
          "Hot Module Replacement (HMR) is a webpack feature that allows for updating modules while an application is running without a full reload.",
          "This provides a better development experience by preserving application state."
        ],
        "Code": [
          "// Webpack config for HMR",
          "module.exports = {",
          "  devServer: {",
          "    hot: true",
          "  },",
          "  plugins: [",
          "    new webpack.HotModuleReplacementPlugin()",
          "  ]",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Build Tools",
        "Question": "What is the use of Parcel, Vite, Webpack?",
        "Answer": [
          "These tools are module bundlers and build systems:",
          "- **Webpack:** Manages module dependencies, bundles files, optimizes for production.",
          "- **Parcel:** Zero configuration bundler, fast out-of-the-box experience.",
          "- **Vite:** Fast build tool with native ES modules, excellent for development with HMR."
        ],
        "Code": [
          "// Example of Vite configuration",
          "import { defineConfig } from 'vite'",
          "import react from '@vitejs/plugin-react'",
          "export default defineConfig({",
          "  plugins: [react()],",
          "})"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Development Tools",
        "Question": "How does create-react-app work?",
        "Answer": [
          "create-react-app (CRA) is a CLI tool that sets up a new React project with a pre-configured environment to start development quickly.",
          "It handles webpack, Babel, and other configurations behind the scenes."
        ],
        "Code": [
          "// Command to create a new app",
          "npx create-react-app my-app"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Optimization",
        "Question": "What is Tree Shaking?",
        "Answer": [
          "Tree Shaking is a term for dead code elimination in JavaScript, removing unused exports from your final bundle to reduce its size.",
          "Webpack and other bundlers use this for optimization."
        ],
        "Code": [
          "// Example of Tree Shaking with ES6 modules",
          "export function usedFunction() { return 'used'; }",
          "export function unusedFunction() { return 'unused'; }",
          "// Only 'usedFunction' would be included if only it's imported elsewhere"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Package Management",
        "Question": "Difference between dependency and devDependency",
        "Answer": [
          "- **Dependencies:** These are modules required for the application to run.",
          "- **DevDependencies:** These are modules used only for development, like testing tools or build tools."
        ],
        "Code": [
          "// In package.json",
          "\"dependencies\": {",
          "  \"react\": \"^17.0.2\"",
          "}",
          "\"devDependencies\": {",
          "  \"jest\": \"^26.6.3\"",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Package Management",
        "Question": "What is npx and npm?",
        "Answer": [
          "- **npm:** Node Package Manager, used to install, publish, and manage packages.",
          "- **npx:** Comes with npm, allows running of package binaries without installing them globally."
        ],
        "Code": [
          "// Using npm to install a package",
          "npm install react",
          "// Running a package with npx",
          "npx create-react-app my-app"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Package Management",
        "Question": "Difference between package.json and package-lock.json",
        "Answer": [
          "- **package.json:** Contains project metadata, scripts, and dependencies.",
          "- **package-lock.json:** Locks the versions of dependencies, ensuring consistent installs across different environments."
        ],
        "Code": [
          "// Example from package.json",
          "\"dependencies\": {",
          "  \"react\": \"^17.0.2\"",
          "}",
          "// Example from package-lock.json",
          "\"react\": {",
          "  \"version\": \"17.0.2\",",
          "  \"resolved\": \"...\"",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Debugging",
        "Question": "Difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent());",
        "Answer": [
          "- **console.log(<HeaderComponent/>)**: Logs the JSX element, which can be seen as an object representing the component.",
          "- **console.log(HeaderComponent())**: Executes the component, returning its rendered result if not within a React environment."
        ],
        "Code": [
          "// Outside React context, this might not show the rendered component",
          "console.log(HeaderComponent())",
          "// Logs the JSX element",
          "console.log(<HeaderComponent />)"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Core Concepts",
        "Question": "What is React.Fragment?",
        "Answer": [
          "React.Fragment allows returning multiple elements from a render method without adding extra nodes to the DOM.",
          "It's a shorthand for grouping a list of children without adding an extra wrapping div."
        ],
        "Code": [
          "render() {",
          "  return (",
          "    <React.Fragment>",
          "      <Header />",
          "      <Content />",
          "    </React.Fragment>",
          "  );",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Hooks",
        "Question": "What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?",
        "Answer": [
          "The dependency array in `useEffect` controls when the effect should run:",
          "- **With dependency array:** Effect runs only when values in the array change.",
          "- **Without dependency array:** Effect runs after every render.",
          "- **Empty array:** Effect runs only once on mount."
        ],
        "Code": [
          "// Runs once on mount",
          "useEffect(() => { fetchData(); }, []);",
          "// Runs on every input change",
          "useEffect(() => { fetchData(input); }, [input]);"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What if 2 components are given will the state change in one component will effect the other component’s state (child)?",
        "Answer": [
          "Generally, state changes in one component do not directly affect another component's state unless:",
          "- They share state through a common parent via 'Lifting State Up'.",
          "- They use context to share state.",
          "- The state is global, like in Redux."
        ],
        "Code": [
          "// Example of state not affecting another component directly",
          "const Parent = () => {",
          "  const [state, setState] = useState(0);",
          "  return <><Child1 /><Child2 /></>;",
          "};"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Hooks",
        "Question": "What is the use of return in useEffect?",
        "Answer": [
          "The return function in `useEffect` is used for cleanup, to undo any effects from the previous effect run.",
          "It's useful for unsubscribing from subscriptions, clearing timers, or releasing resources."
        ],
        "Code": [
          "useEffect(() => {",
          "  const subscription = someEvent.subscribe();",
          "  return () => subscription.unsubscribe();",
          "}, []);"
        ]
      }    
    ]
  }
  