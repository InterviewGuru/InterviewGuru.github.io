export const questionsData = {
    "Title": "Angular Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "What is Dependency Injection in Angular?",
        "Answer": [
          "Dependency Injection (DI) is a design pattern where the dependencies of a class are injected into it rather than the class creating them.",
          "In Angular, DI helps in managing component dependencies, making the code more modular and testable."
        ],
        "Code": [
          "// Example of Dependency Injection",
          "import { Component, Inject } from '@angular/core';",
          "import { MyService } from './my.service';",
          "@Component({",
          "  selector: 'app-root',",
          "  template: '<p>My Service data: {{data}}</p>'",
          "})",
          "export class AppComponent {",
          "  data: any;",
          "  constructor(@Inject(MyService) private myService: MyService) {",
          "    this.data = this.myService.getData();",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What are Components in Angular?",
        "Answer": [
          "Components are the basic building blocks of Angular applications. They control a patch of screen called a view.",
          "They consist of a TypeScript class, an HTML template, and CSS styles."
        ],
        "Code": [
          "// Example of a basic component",
          "@Component({",
          "  selector: 'app-greeting',",
          "  template: '<p>{{greeting}}</p>',",
          "  styles: ['p { color: blue; }']",
          "})",
          "export class GreetingComponent {",
          "  greeting = 'Hello, Angular!';",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Routing",
        "Question": "How does routing work in Angular?",
        "Answer": [
          "Angular uses a router to navigate between different views or components based on the browser URL.",
          "It involves defining routes, which map URLs to components."
        ],
        "Code": [
          "// Example of Angular routing configuration",
          "import { NgModule } from '@angular/core';",
          "import { RouterModule, Routes } from '@angular/router';",
          "import { HomeComponent } from './home/home.component';",
          "const routes: Routes = [",
          "  { path: '', component: HomeComponent },",
          "  { path: 'about', component: AboutComponent }",
          "];",
          "@NgModule({",
          "  imports: [RouterModule.forRoot(routes)],",
          "  exports: [RouterModule]",
          "})",
          "export class AppRoutingModule {}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Services",
        "Question": "What are Services in Angular?",
        "Answer": [
          "Services in Angular are classes with a specific purpose, often to hold business logic, share data between components, or manage HTTP requests.",
          "They can be injected into components or other services."
        ],
        "Code": [
          "// Example of a simple service",
          "import { Injectable } from '@angular/core';",
          "@Injectable({",
          "  providedIn: 'root'",
          "})",
          "export class DataService {",
          "  getData() {",
          "    return 'This is some data from the service';",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Lifecycle Hooks",
        "Question": "What are Angular Lifecycle Hooks?",
        "Answer": [
          "Lifecycle hooks are methods in Angular components and directives that execute at specific moments in the component's lifecycle.",
          "Examples include ngOnInit, ngOnChanges, ngOnDestroy for initialization, change detection, and cleanup respectively."
        ],
        "Code": [
          "// Example using ngOnInit",
          "import { Component, OnInit } from '@angular/core';",
          "@Component({",
          "  selector: 'app-lifecycle',",
          "  template: '<p>Lifecycle Hook Example</p>'",
          "})",
          "export class LifecycleComponent implements OnInit {",
          "  constructor() { }",
          "  ngOnInit() {",
          "    console.log('ngOnInit executed');",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Forms",
        "Question": "What are Template-Driven vs Reactive Forms in Angular?",
        "Answer": [
          "- **Template-Driven Forms:** Use directives like ngModel in the template to create and manage forms.",
          "- **Reactive Forms:** Use an explicit, programmatic approach to manage form controls and validation in the component class."
        ],
        "Code": [
          "// Template-Driven Form Example",
          "<form #myForm=\"ngForm\">",
          "  <input name=\"name\" ngModel>",
          "</form>",
          "// Reactive Form Example",
          "import { FormBuilder, FormGroup, Validators } from '@angular/forms';",
          "export class ReactiveFormComponent {",
          "  profileForm = this.fb.group({",
          "    name: ['', Validators.required]",
          "  });",
          "  constructor(private fb: FormBuilder) { }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Optimization",
        "Question": "What is Lazy Loading in Angular?",
        "Answer": [
          "Lazy Loading involves loading NgModules on demand, which can significantly speed up application load times by not loading all modules at startup.",
          "This is achieved through Angular's routing configuration."
        ],
        "Code": [
          "// Example of Lazy Loading in routing",
          "const routes: Routes = [",
          "  {",
          "    path: 'lazy',",
          "    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)",
          "  }",
          "];"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Directives",
        "Question": "What are Directives in Angular?",
        "Answer": [
          "Directives are classes in Angular that add or modify behavior of DOM elements or components.",
          "There are three types: Component Directives, Structural Directives (like *ngIf, *ngFor), and Attribute Directives."
        ],
        "Code": [
          "// Example of a custom Attribute Directive",
          "import { Directive, ElementRef, HostListener } from '@angular/core';",
          "@Directive({",
          "  selector: '[appHighlight]'",
          "})",
          "export class HighlightDirective {",
          "  constructor(private el: ElementRef) {}",
          "  @HostListener('mouseenter') onMouseEnter() {",
          "    this.highlight('yellow');",
          "  }",
          "  private highlight(color: string) {",
          "    this.el.nativeElement.style.backgroundColor = color;",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Pipes",
        "Question": "What are Pipes in Angular?",
        "Answer": [
          "Pipes are used in Angular for transforming data in templates, making it easier to format and manipulate data display.",
          "Examples include built-in pipes like date, uppercase, lowercase, or custom pipes for specific transformations."
        ],
        "Code": [
          "// Example of using a pipe",
          "<p>{{ today | date:'fullDate' }}</p>",
          "// Example of a custom pipe",
          "import { Pipe, PipeTransform } from '@angular/core';",
          "@Pipe({ name: 'multiply' })",
          "export class MultiplyPipe implements PipeTransform {",
          "  transform(value: number, multiplier: number): number {",
          "    return value * multiplier;",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Change Detection",
        "Question": "How does Change Detection work in Angular?",
        "Answer": [
          "Angular’s Change Detection checks for changes in the application state and updates the DOM accordingly.",
          "It uses a tree of change detectors, where each component has one. The strategy can be OnPush for more control or default for automatic checks."
        ],
        "Code": [
          "// Example of OnPush strategy",
          "@Component({",
          "  selector: 'app-child',",
          "  template: '{{data}}',",
          "  changeDetection: ChangeDetectionStrategy.OnPush",
          "})",
          "export class ChildComponent {",
          "  @Input() data: any;",
          "}"
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
      },
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Angular, and why is it used?",
        "Answer": [
          "Angular is a TypeScript-based open-source web application framework developed by Google.",
          "It is used to build single-page applications (SPAs) with a clear structure and reusable components."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What is a component in Angular?",
        "Answer": [
          "A component is a building block of an Angular application that controls a portion of the UI.",
          "It consists of a TypeScript class, an HTML template, and an optional CSS style file."
        ],
        "Code": [
          "// Example of a Component",
          "import { Component } from '@angular/core';",
          "@Component({",
          "  selector: 'app-example',",
          "  template: '<h1>Hello, Angular!</h1>',",
          "  styles: ['h1 { color: blue; }']",
          "})",
          "export class ExampleComponent { }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Directives",
        "Question": "What are directives in Angular?",
        "Answer": [
          "Directives are instructions in the DOM that tell Angular how to manipulate the DOM or HTML elements.",
          "They can be categorized into structural directives (e.g., *ngIf, *ngFor) and attribute directives (e.g., ngClass, ngStyle)."
        ],
        "Code": [
          "// Example of *ngIf and *ngFor",
          "<div *ngIf='isVisible'>Visible Content</div>",
          "<ul>",
          "  <li *ngFor='let item of items'>{{ item }}</li>",
          "</ul>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Dependency Injection",
        "Question": "What is Dependency Injection in Angular?",
        "Answer": [
          "Dependency Injection (DI) is a design pattern used to create and manage the dependencies of objects.",
          "Angular's DI system makes it easy to provide services and share functionality across components."
        ],
        "Code": [
          "// Example of Dependency Injection",
          "import { Injectable } from '@angular/core';",
          "@Injectable({ providedIn: 'root' })",
          "export class DataService {",
          "  getData() { return ['Data1', 'Data2']; }",
          "}",
          "",
          "import { Component } from '@angular/core';",
          "import { DataService } from './data.service';",
          "@Component({ selector: 'app-data', template: '<ul><li *ngFor='let item of data'>{{ item }}</li></ul>' })",
          "export class DataComponent {",
          "  data: string[];",
          "  constructor(private dataService: DataService) {",
          "    this.data = this.dataService.getData();",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Routing",
        "Question": "How does routing work in Angular?",
        "Answer": [
          "Angular routing enables navigation between different components and views within a single-page application.",
          "It uses the Angular Router module to define routes and manage navigation."
        ],
        "Code": [
          "// Example of Angular Routing",
          "import { NgModule } from '@angular/core';",
          "import { RouterModule, Routes } from '@angular/router';",
          "import { HomeComponent } from './home/home.component';",
          "import { AboutComponent } from './about/about.component';",
          "",
          "const routes: Routes = [",
          "  { path: '', component: HomeComponent },",
          "  { path: 'about', component: AboutComponent }",
          "];",
          "@NgModule({",
          "  imports: [RouterModule.forRoot(routes)],",
          "  exports: [RouterModule]",
          "})",
          "export class AppRoutingModule { }"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Change Detection",
        "Question": "What is Change Detection in Angular?",
        "Answer": [
          "Change Detection is a mechanism that Angular uses to detect changes in the application state and update the DOM accordingly.",
          "It involves checking the component tree to ensure the UI reflects the latest application state."
        ],
        "Code": [
          "// Example of OnPush Change Detection Strategy",
          "import { Component, ChangeDetectionStrategy, Input } from '@angular/core';",
          "@Component({",
          "  selector: 'app-on-push',",
          "  changeDetection: ChangeDetectionStrategy.OnPush,",
          "  template: '<h1>{{ title }}</h1>'",
          "})",
          "export class OnPushComponent {",
          "  @Input() title: string;",
          "}"
        ]
      }
    ]
  }
  