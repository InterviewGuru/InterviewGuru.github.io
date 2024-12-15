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
      }
    ]
  }
  