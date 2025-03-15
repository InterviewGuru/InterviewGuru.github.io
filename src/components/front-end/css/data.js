export const questionsData = {
    "Title": "CSS Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is CSS, and why is it used?",
        "Answer": [
          "CSS stands for Cascading Style Sheets.",
          "It is used to style and layout web pages, including designing the colors, fonts, and spacing of HTML elements."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Selectors",
        "Question": "What is the difference between ID and class selectors in CSS?",
        "Answer": [
          "An ID selector is unique and applies styles to a single element.",
          "A class selector can be used for multiple elements to apply common styles."
        ],
        "Code": [
          "// Example",
          "#header { color: blue; }",
          ".text { font-size: 16px; }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Box Model",
        "Question": "What is the CSS box model?",
        "Answer": [
          "The CSS box model is a box that wraps around every HTML element.",
          "It consists of margins, borders, padding, and the actual content."
        ],
        "Code": [
          "// Example",
          "div {",
          "  width: 100px;",
          "  padding: 10px;",
          "  border: 5px solid black;",
          "  margin: 15px;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Flexbox",
        "Question": "What is Flexbox, and how is it used?",
        "Answer": [
          "Flexbox is a CSS layout model that provides an efficient way to align and distribute space among items in a container.",
          "It works well for responsive design and can handle both horizontal and vertical alignment."
        ],
        "Code": [
          "// Example",
          "div {",
          "  display: flex;",
          "  justify-content: center;",
          "  align-items: center;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Grid",
        "Question": "What is CSS Grid, and how does it differ from Flexbox?",
        "Answer": [
          "CSS Grid is a layout system designed for two-dimensional layouts, controlling rows and columns.",
          "Flexbox is primarily for one-dimensional layouts (either row or column)."
        ],
        "Code": [
          "// Example",
          ".grid-container {",
          "  display: grid;",
          "  grid-template-columns: 1fr 1fr 1fr;",
          "  gap: 10px;",
          "}",
          ".grid-item {",
          "  background: lightblue;",
          "  padding: 20px;",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Positioning",
        "Question": "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
        "Answer": [
          "Relative positioning offsets an element relative to its normal position.",
          "Absolute positioning places an element relative to its nearest positioned ancestor.",
          "Fixed positioning places an element relative to the viewport and does not move when scrolling.",
          "Sticky positioning toggles between relative and fixed, depending on the scroll position."
        ],
        "Code": [
          "// Example",
          "div.relative { position: relative; top: 10px; }",
          "div.absolute { position: absolute; top: 10px; left: 20px; }",
          "div.fixed { position: fixed; top: 0; }",
          "div.sticky { position: sticky; top: 0; }"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Animations",
        "Question": "How do you create animations in CSS?",
        "Answer": [
          "Animations in CSS can be created using the 'animation' property or 'transition' property.",
          "The 'animation' property uses keyframes, while 'transition' defines changes between states."
        ],
        "Code": [
          "// Example",
          "@keyframes example {",
          "  from { background-color: red; }",
          "  to { background-color: yellow; }",
          "}",
          "div {",
          "  animation: example 2s infinite;",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Responsive Design",  
        "Question": "What is responsive design?",
        "Answer": [
          "Responsive design is an approach to building web pages that work on any device or screen size.",
          "It uses CSS media queries to adjust the layout based on the device's width and height."
        ],  
        "Code": [
          "// Example",
          "@media screen and (max-width: 600px) {",
          "  body { background-color: lightblue; }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Pseudo-classes",
        "Question": "What are pseudo-classes in CSS?",
        "Answer": [
          "Pseudo-classes are keywords that specify a special state of an element.",
          "They can be used to style elements based on user interaction or element status."
        ],
        "Code": [
          "// Example",
          "a:link { color: blue; }",
          "a:visited { color: purple; }",
          "a:hover { color: red; }",
          "a:active { color: green; }"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Specificity",
        "Question": "What is CSS specificity, and how does it work?",
        "Answer": [
          "CSS specificity determines which CSS rule takes precedence when multiple rules target the same element.",
          "It is based on the selector's specificity value, with higher values overriding lower values."
        ],
        "Code": [
          "// Example",
          "/* Specificity: 0,0,1,0 */",
          "div { color: red; }",
          "/* Specificity: 0,0,1,1 */",
          "div p { color: blue; }",
          "/* Specificity: 0,1,0,0 */",
          "#header { color: green; }"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Comments",
        "Question": "How do you add comments in CSS?",
        "Answer": [
          "Comments in CSS start with '/*' and end with '*/'.",
          "They are used to explain the code and are not displayed in the browser."
        ],
        "Code": [
          "// Example",
          "/* This is a comment */",
          "div { color: blue; }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Variables",
        "Question": "What are CSS variables, and how are they used?",
        "Answer": [
          "CSS variables are custom properties defined by the user.",
          "They are used to store reusable values and simplify the process of updating styles."
        ],
        "Code": [
          "// Example",
          ":root {",
          "  --main-color: blue;",
          "}",
          "div {",
          "  color: var(--main-color);",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Preprocessors",
        "Question": "What are CSS preprocessors, and why are they used?",
        "Answer": [
          "CSS preprocessors are tools that extend CSS with variables, functions, and other features.",
          "They help write more maintainable and scalable CSS code by generating standard CSS."
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Frameworks",
        "Question": "What are CSS frameworks?",
        "Answer": [
          "CSS frameworks are pre-written libraries that provide a grid system, typography, and other components.",
          "They help speed up the development process by providing a foundation for styling web pages."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Transforms",
        "Question": "What are CSS transforms, and how are they used?",
        "Answer": [
          "CSS transforms are used to change the appearance and position of an element.",
          "They include functions like rotate, scale, skew, and translate."
        ],
        "Code": [
          "// Example",
          "div {",
          "  transform: rotate(45deg);",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Filters",
        "Question": "What are CSS filters, and how are they used?",
        "Answer": [
          "CSS filters are used to apply graphical effects like blur, brightness, contrast, and hue-rotate.",
          "They can be used to enhance or manipulate images and other elements."
        ],
        "Code": [
          "// Example",
          "img {",
          "  filter: blur(5px);",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Transitions",
        "Question": "What are CSS transitions, and how are they used?",
        "Answer": [
          "CSS transitions are used to change property values smoothly over a specified duration.",
          "They provide a way to create animations without using keyframes."
        ],
        "Code": [
          "// Example",
          "div {",
          "  transition: width 2s, height 2s;",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Gradients",
        "Question": "What are CSS gradients, and how are they used?",
        "Answer": [
          "CSS gradients are used to create smooth transitions between two or more colors.",
          "They can be linear or radial, with customizable angles and shapes."
        ],
        "Code": [
          "// Example",
          "div {",
          "  background: linear-gradient(red, blue);",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Media Queries",
        "Question": "What are CSS media queries, and how are they used?",
        "Answer": [
          "CSS media queries are used to apply different styles based on the device's width, height, and orientation.",
          "They allow for responsive design and can target specific devices or screen sizes."
        ],
        "Code": [
          "// Example",
          "@media screen and (max-width: 600px) {",
          "  body { background-color: lightblue; }",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Fonts",
        "Question": "How do you change fonts in CSS?",
        "Answer": [
          "Fonts in CSS can be changed using the 'font-family' property.",
          "You can specify a list of fonts to use, with fallback options in case the primary font is not available."
        ],
        "Code": [
          "// Example",
          "body { font-family: Arial, sans-serif; }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Selectors",
        "Question": "What are attribute selectors in CSS?",
        "Answer": [
          "Attribute selectors are used to target elements based on their attributes or attribute values.",
          "They can be used to style elements with specific attributes or values."
        ],
        "Code": [
          "// Example",
          "input[type='text'] { background-color: lightblue; }",
          "a[href^='https'] { color: green; }"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Specificity",
        "Question": "What is the !important keyword in CSS?",
        "Answer": [
          "The !important keyword is used to override other styles and give a CSS rule the highest priority.",
          "It should be used sparingly, as it can make the code harder to maintain."
        ],
        "Code": [
          "// Example",
          "div { color: red !important; }"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Backgrounds",
        "Question": "How do you set backgrounds in CSS?",
        "Answer": [
          "Backgrounds in CSS can be set using the 'background' property.",
          "You can specify colors, images, and other properties for the background."
        ],
        "Code": [
          "// Example",
          "body { background-color: lightblue; }",
          "div { background-image: url('image.jpg'); }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Units",
        "Question": "What are the different units of measurement in CSS?",
        "Answer": [
          "CSS supports various units of measurement, including pixels, percentages, ems, rems, and more.",
          "Each unit has its own use case, such as absolute or relative sizing."
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance",
        "Question": "How can you improve the performance of CSS?",
        "Answer": [
          "To improve CSS performance, you can minify and concatenate CSS files to reduce file size.",
          "You can also use CSS sprites, avoid using !important, and optimize animations and transitions."
        ],
        "Code": [
          "// Example",
          "/* Before */",
          "div {",
          "  color: red;",
          "}",
          "/* After */",
          "div{color:red;}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Borders",
        "Question": "How do you create borders in CSS?",
        "Answer": [
          "Borders in CSS can be created using the 'border' property.",
          "You can specify the border width, style, and color."
        ],
        "Code": [
          "// Example",
          "div { border: 1px solid black; }"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Transitions",
        "Question": "What is the difference between transitions and animations in CSS?",
        "Answer": [
          "Transitions are used to change property values smoothly over a specified duration.",
          "Animations use keyframes to create more complex animations with multiple steps."
        ],
        "Code": [
          "// Example",
          "div {",
          "  transition: width 2s;",
          "  animation: example 2s infinite;",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Frameworks",
        "Question": "What are the differences between Bootstrap and Foundation?",
        "Answer": [
          "Bootstrap is a popular CSS framework that provides a grid system, components, and utilities.",
          "Foundation is another CSS framework that focuses on responsive design and customizability.",
          "Bootstrap has more pre-built components, while Foundation offers more flexibility."
        ]
      },
    ]
  }
  