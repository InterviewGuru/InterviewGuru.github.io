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
      }
    ]
  }
  