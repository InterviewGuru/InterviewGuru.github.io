export const questionsData = {
    "Title": "Ionic Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Ionic, and why is it used?",
        "Answer": [
          "Ionic is an open-source framework for building cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript.",
          "It enables developers to build high-quality mobile apps for Android, iOS, and the web from a single codebase."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What are Ionic components?",
        "Answer": [
          "Ionic components are pre-designed UI elements like buttons, menus, modals, and forms that are optimized for mobile applications.",
          "These components are built with web standards and can be styled using CSS."
        ],
        "Code": [
          "<!-- Example of an Ionic Button Component -->",
          "<ion-button color=\"primary\">Click Me</ion-button>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Routing",
        "Question": "How does routing work in Ionic?",
        "Answer": [
          "Ionic uses Angular's Router module for navigation and routing.",
          "Routes are defined in the app's routing module and associated with specific components."
        ],
        "Code": [
          "// Example of Routing in Ionic",
          "import { NgModule } from '@angular/core';",
          "import { RouterModule, Routes } from '@angular/router';",
          "import { HomePage } from './home/home.page';",
          "import { AboutPage } from './about/about.page';",
          "const routes: Routes = [",
          "  { path: '', component: HomePage },",
          "  { path: 'about', component: AboutPage }",
          "];",
          "@NgModule({",
          "  imports: [RouterModule.forRoot(routes)],",
          "  exports: [RouterModule]",
          "})",
          "export class AppRoutingModule {}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance",
        "Question": "How can you improve the performance of an Ionic application?",
        "Answer": [
          "Use lazy loading to load modules only when needed.",
          "Optimize images and use native plugins for performance-critical tasks.",
          "Reduce the DOM size and avoid excessive usage of complex CSS."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Native Features",
        "Question": "How does Ionic interact with native device features?",
        "Answer": [
          "Ionic uses Capacitor or Cordova to access native device features like camera, geolocation, and file storage.",
          "Capacitor provides a modern way to integrate native functionality into Ionic apps."
        ],
        "Code": [
          "// Example of Using the Camera Plugin",
          "import { Camera, CameraResultType } from '@capacitor/camera';",
          "const takePicture = async () => {",
          "  const image = await Camera.getPhoto({",
          "    quality: 90,",
          "    resultType: CameraResultType.Uri",
          "  });",
          "  console.log(image);",
          "};"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "State Management",
        "Question": "How do you manage state in an Ionic application?",
        "Answer": [
          "State in Ionic apps can be managed using Angular services, NgRx (for Angular apps), or third-party libraries like Redux.",
          "For simple apps, services and BehaviorSubject are often sufficient."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Styling",
        "Question": "How do you style components in Ionic?",
        "Answer": [
          "Ionic components can be styled using CSS variables, which allow global theming and component-level customization.",
          "You can also use SCSS for more advanced styling techniques."
        ],
        "Code": [
          "/* Example of Styling in Ionic */",
          ":root {",
          "  --ion-color-primary: #3880ff;",
          "  --ion-color-secondary: #3dc2ff;",
          "}",
          ".custom-class {",
          "  padding: 10px;",
          "  background-color: var(--ion-color-primary);",
          "  color: white;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced Features",
        "Question": "What is Capacitor, and how does it enhance Ionic apps?",
        "Answer": [
          "Capacitor is a cross-platform runtime that allows web apps to run natively on iOS, Android, and the web.",
          "It provides access to native device APIs with modern JavaScript/TypeScript."
        ],
        "Code": [
          "// Example of Using Capacitor",
          "import { Plugins } from '@capacitor/core';",
          "const { Device } = Plugins;",
          "const getDeviceInfo = async () => {",
          "  const info = await Device.getInfo();",
          "  console.log(info);",
          "};"
        ]
      }
    ]
  }
  