export const questionsData = {
    "Title": "Angular Interview Questions and Answers",
    "List": [
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
  