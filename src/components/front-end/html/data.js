// questionsData.js
export const questionsData = {
    "Title": "HTML Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is HTML, and why is it used?",
        "Answer": [
          "HTML stands for HyperText Markup Language.",
          "It is used to structure content on the web by defining elements like headings, paragraphs, and links."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Forms",
        "Question": "What is the difference between <input> and <textarea>?",
        "Answer": [
          "<input> is used for single-line text fields, checkboxes, radio buttons, etc.",
          "<textarea> is used for multi-line text input."
        ],
        "Code": [
          "// Example",
          "<input type='text' placeholder='Enter your name' />",
          "<textarea placeholder='Enter your comments'></textarea>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Semantics",
        "Question": "What are semantic elements in HTML?",
        "Answer": [
          "Semantic elements clearly describe their purpose in a web page.",
          "Examples include <header>, <footer>, <article>, and <section>."
        ],
        "Code": [
          "// Example",
          "<header>Website Header</header>",
          "<article>Main Content Area</article>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance",
        "Question": "How can you improve the performance of an HTML page?",
        "Answer": [
          "Minimize the number of HTTP requests by combining files.",
          "Use asynchronous loading for scripts with the 'async' or 'defer' attributes.",
          "Optimize images with compression techniques."
        ],
        "Code": [
          "// Example",
          "<script src='script.js' async></script>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Accessibility",
        "Question": "How can you make an HTML page accessible?",
        "Answer": [
          "Use proper semantic elements to provide meaning to assistive technologies.",
          "Add 'alt' attributes to images for screen readers.",
          "Ensure a logical tab order with proper use of tabindex."
        ],
        "Code": [
          "// Example",
          "<img src='image.jpg' alt='Description of image' />",
          "<button tabindex='1'>Click Me</button>"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Links",
        "Question": "What is the difference between an absolute URL and a relative URL?",
        "Answer": [
          "An absolute URL specifies the full path, including protocol and domain.",
          "A relative URL specifies a path relative to the current page's location."
        ],
        "Code": [
          "// Absolute URL",
          "<a href='https://www.example.com'>Visit Example</a>",
          "// Relative URL",
          "<a href='/about'>About Us</a>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Media",
        "Question": "How do you embed a video in an HTML page?",
        "Answer": [
          "The <video> tag is used to embed videos.",
          "Attributes like 'controls', 'autoplay', and 'loop' enhance the functionality."
        ],
        "Code": [
          "// Example",
          "<video controls>",
          "  <source src='video.mp4' type='video/mp4' />",
          "  Your browser does not support the video tag.",
          "</video>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced",
        "Question": "What is the purpose of the <picture> element in HTML?",
        "Answer": [
          "The <picture> element is used to define multiple versions of an image for different screen sizes or resolutions.",
          "It helps in implementing responsive images effectively."
        ],
        "Code": [
          "// Example",
          "<picture>",
          "  <source srcset='image-large.jpg' media='(min-width: 800px)' />",
          "  <source srcset='image-small.jpg' media='(max-width: 799px)' />",
          "  <img src='image-default.jpg' alt='Example Image' />",
          "</picture>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "SEO",
        "Question": "What are meta tags, and why are they important?",
        "Answer": [
          "Meta tags provide metadata about an HTML document.",
          "They are important for SEO, defining the page's description, keywords, and author."
        ],
        "Code": [
          "// Example",
          "<meta name='description' content='A brief description of the page.' />",
          "<meta name='keywords' content='HTML, CSS, JavaScript' />"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Validation",
        "Question": "How can you validate an HTML page?",
        "Answer": [
          "Use the W3C Markup Validation Service to check for errors and warnings in your HTML code."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Storage",
        "Question": "What are Web Storage APIs in HTML5?",
        "Answer": [
          "Web Storage APIs provide mechanisms for storing data in the browser.",
          "localStorage and sessionStorage are two types of Web Storage APIs."
        ],
        "Code": [
          "// Example",
          "localStorage.setItem('username', 'JohnDoe');",
          "const username = localStorage.getItem('username');"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Security",
        "Question": "How can you prevent Cross-Site Scripting (XSS) attacks in HTML?",
        "Answer": [
          "Sanitize user input by escaping special characters like <, >, and &.",
          "Use Content Security Policy (CSP) headers to restrict the sources of content that can be loaded on your page."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Responsive Design",
        "Question": "How can you make an HTML page responsive?",
        "Answer": [
          "Use CSS media queries to apply different styles based on the device's screen size.",
          "Design with a mobile-first approach to ensure compatibility with smaller screens."
        ],
        "Code": [
          "// Example",
          "@media screen and (max-width: 600px) {",
          "  body {",
          "    font-size: 14px;",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Comments",
        "Question": "How do you add comments in HTML?",
        "Answer": [
          "Comments in HTML are written between <!-- and -->.",
          "They are not displayed on the web page but can be viewed in the source code."
        ],
        "Code": [
          "// Example",
          "<!-- This is a comment -->"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "What is lazy loading in HTML?",
        "Answer": [
          "Lazy loading is a technique that defers loading non-essential resources at page load time.",
          "It improves page load performance by loading resources only when needed."
        ],
        "Code": [
          "// Example",
          "<img src='image.jpg' loading='lazy' />"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Accessibility",
        "Question": "What is ARIA, and how is it used in HTML?",
        "Answer": [
          "ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content more accessible to people with disabilities.",
          "It is used to enhance the semantics of HTML elements for assistive technologies."
        ],
        "Code": [
          "// Example",
          "<button aria-label='Close' aria-expanded='false'>X</button>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "SEO",
        "Question": "What is the importance of headings in HTML for SEO?",
        "Answer": [
          "Headings (<h1> to <h6>) provide structure to the content on a web page.",
          "Search engines use headings to understand the hierarchy and relevance of the content."
        ],
        "Code": [
          "// Example",
          "<h1>Main Heading</h1>",
          "<h2>Subheading</h2>"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Lists",
        "Question": "What are the different types of lists in HTML?",
        "Answer": [
          "HTML supports three types of lists: ordered, unordered, and definition lists.",
          "<ol> for ordered lists, <ul> for unordered lists, and <dl> for definition lists."
        ],
        "Code": [
          "// Example",
          "<ol>",
          "  <li>Item 1</li>",
          "  <li>Item 2</li>",
          "</ol>",
          "<ul>",
          "  <li>Item A</li>",
          "  <li>Item B</li>",
          "</ul>",
          "<dl>",
          "  <dt>Term 1</dt>",
          "  <dd>Definition 1</dd>",
          "</dl>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Tables",
        "Question": "How do you create a table in HTML?",
        "Answer": [
          "The <table> element is used to create a table in HTML.",
          "Table rows are defined with <tr>, columns with <td> (data cells) or <th> (header cells)."
        ],
        "Code": [
          "// Example",
          "<table>",
          "  <tr>",
          "    <th>Name</th>",
          "    <th>Age</th>",
          "  </tr>",
          "  <tr>",
          "    <td>John Doe</td>",
          "    <td>30</td>",
          "  </tr>",
          "</table>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Forms",
        "Question": "How can you create a custom form control in HTML?",
        "Answer": [
          "Custom form controls can be created using the <input> element with a type of 'hidden' or 'checkbox' and custom styling with CSS.",
          "JavaScript can be used to handle the custom behavior of the form control."
        ],
        "Code": [
          "// Example",
          "<input type='checkbox' id='custom-checkbox' />",
          "<label for='custom-checkbox'>Custom Checkbox</label>",
          "<style>",
          "  #custom-checkbox {",
          "    display: none;",
          "  }",
          "  #custom-checkbox + label {",
          "    background-color: lightgray;",
          "    padding: 5px;",
          "  }",
          "  #custom-checkbox:checked + label {",
          "    background-color: lightblue;",
          "  }",
          "</style>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Media",
        "Question": "How do you embed an audio file in an HTML page?",
        "Answer": [
          "The <audio> tag is used to embed audio files.",
          "Attributes like 'controls', 'autoplay', and 'loop' enhance the functionality."
        ],
        "Code": [
          "// Example",
          "<audio controls>",
          "  <source src='audio.mp3' type='audio/mp3' />",
          "  Your browser does not support the audio tag.",
          "</audio>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Advanced",
        "Question": "What is the Shadow DOM in HTML?",
        "Answer": [
          "The Shadow DOM is a way to encapsulate and style DOM elements in a self-contained way.",
          "It allows for creating components with scoped styles and behavior."
        ],
        "Code": [
          "// Example",
          "const shadowRoot = element.attachShadow({ mode: 'open' });",
          "shadowRoot.innerHTML = '<style>...</style><div>...</div>';"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "SEO",
        "Question": "What is the importance of the 'rel' attribute in HTML?",
        "Answer": [
          "The 'rel' attribute specifies the relationship between the current document and the linked document.",
          "It is important for SEO, defining the type of link and its purpose." 
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Images",
        "Question": "How do you add an image to an HTML page?",
        "Answer": [
          "The <img> tag is used to add an image to an HTML page.",
          "The 'src' attribute specifies the image URL, and the 'alt' attribute provides a text description."
        ],
        "Code": [
          "// Example",
          "<img src='image.jpg' alt='Description of image' />"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Links",
        "Question": "What is the target attribute in HTML links?",
        "Answer": [
          "The 'target' attribute specifies where to open the linked document.",
          "Values include '_self' (default), '_blank', '_parent', and '_top'."
        ],
        "Code": [
          "// Example",
          "<a href='https://www.example.com' target='_blank'>Visit Example</a>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Accessibility",
        "Question": "What is keyboard accessibility in HTML?",
        "Answer": [
          "Keyboard accessibility ensures that all interactive elements can be accessed and used via the keyboard.",
          "It is important for users who rely on keyboard navigation or have motor disabilities."
        ],
        "Code": [
          "// Example",
          "<button onclick='handleClick()' onkeydown='handleKeyDown(event)'>Click Me</button>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Validation",
        "Question": "What is the purpose of the 'required' attribute in HTML forms?",
        "Answer": [
          "The 'required' attribute specifies that an input field must be filled out before submitting the form.",
          "It helps in validating user input and preventing form submission with empty fields."
        ],
        "Code": [
          "// Example",
          "<input type='text' required />"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Comments",
        "Question": "What is the purpose of comments in HTML?",
        "Answer": [
          "Comments in HTML are used to provide additional information about the code.",
          "They are not displayed on the web page but can be helpful for developers."
        ],
        "Code": [
          "// Example",
          "<!-- This is a comment -->"

        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "SEO",
        "Question": "What is the importance of the 'title' attribute in HTML?",
        "Answer": [
          "The 'title' attribute provides additional information about an element when hovering over it.",
          "It is important for SEO, accessibility, and user experience."
        ],
        "Code": [
          "// Example",
          "<a href='link.html' title='Click to visit the page'>Visit Page</a>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Forms",
        "Question": "What is the purpose of the 'autocomplete' attribute in HTML forms?",
        "Answer": [
          "The 'autocomplete' attribute specifies whether a form field should have autocomplete enabled.",
          "Values include 'on' (default), 'off', 'username', 'new-password', etc."
        ],
        "Code": [
          "// Example",
          "<input type='text' name='username' autocomplete='username' />"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Lists",
        "Question": "How can you create a nested list in HTML?",
        "Answer": [
          "Nested lists are created by placing a list within another list item.",
          "Use <ul> or <ol> for the outer list and <li> for the inner list items."
        ],
        "Code": [
          "// Example",
          "<ul>",
          "  <li>Item 1</li>",
          "  <li>Item 2",
          "    <ul>",
          "      <li>Subitem A</li>",
          "      <li>Subitem B</li>",
          "    </ul>",
          "  </li>",
          "</ul>"
        ]
      },
      {
        "Difficulty": "Easy",
        "Category": "Tables",
        "Question": "What is the purpose of the <th> element in HTML tables?",
        "Answer": [
          "The <th> element defines a header cell in an HTML table.",
          "It is used to represent column or row headings."
        ],
        "Code": [
          "// Example",
          "<table>",
          "  <tr>",
          "    <th>Name</th>",
          "    <th>Age</th>",
          "  </tr>",
          "  <tr>",
          "    <td>John Doe</td>",
          "    <td>30</td>",
          "  </tr>",
          "</table>"
        ]
      }
    ]
  }
  
  