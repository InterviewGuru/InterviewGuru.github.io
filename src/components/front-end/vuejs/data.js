export const questionsData = {
    "Title": "Vue.js Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Vue.js, and why is it used?",
        "Answer": [
          "Vue.js is a progressive JavaScript framework for building user interfaces.",
          "It is designed to be incrementally adoptable and focuses on the view layer."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What are components in Vue.js?",
        "Answer": [
          "Components are reusable Vue instances with a name, which can be used as custom HTML elements.",
          "They help in breaking the application into smaller, reusable pieces."
        ],
        "Code": [
          "// Example of a Vue Component",
          "Vue.component('example-component', {",
          "  template: '<h1>Hello, Vue.js!</h1>'",
          "});",
          "new Vue({ el: '#app' });"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Directives",
        "Question": "What are directives in Vue.js?",
        "Answer": [
          "Directives are special tokens in the markup that tell the library to do something to a DOM element.",
          "Examples include v-bind, v-if, v-for, and v-model."
        ],
        "Code": [
          "// Example of Directives",
          "<div v-if='isVisible'>Visible Content</div>",
          "<input v-model='inputValue' placeholder='Enter text'>",
          "<ul>",
          "  <li v-for='item in items'>{{ item }}</li>",
          "</ul>"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "State Management",
        "Question": "What is Vuex, and why is it used?",
        "Answer": [
          "Vuex is a state management pattern and library for Vue.js applications.",
          "It serves as a centralized store for all the components in an application."
        ],
        "Code": [
          "// Example of Vuex Store",
          "import Vue from 'vue';",
          "import Vuex from 'vuex';",
          "Vue.use(Vuex);",
          "export const store = new Vuex.Store({",
          "  state: { count: 0 },",
          "  mutations: {",
          "    increment(state) { state.count++; }",
          "  }",
          "});",
          "new Vue({",
          "  store,",
          "  el: '#app',",
          "  computed: { count() { return this.$store.state.count; } }",
          "});"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Routing",
        "Question": "How does routing work in Vue.js?",
        "Answer": [
          "Vue.js uses the Vue Router library for navigation and routing.",
          "It allows developers to map URLs to components."
        ],
        "Code": [
          "// Example of Vue Router",
          "import Vue from 'vue';",
          "import VueRouter from 'vue-router';",
          "import Home from './Home.vue';",
          "import About from './About.vue';",
          "Vue.use(VueRouter);",
          "const routes = [",
          "  { path: '/', component: Home },",
          "  { path: '/about', component: About }",
          "];",
          "const router = new VueRouter({ routes });",
          "new Vue({ router, el: '#app' });"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Reactivity",
        "Question": "How does Vue.js achieve reactivity?",
        "Answer": [
          "Vue.js achieves reactivity by using getters and setters on data properties.",
          "It observes changes to data and automatically updates the DOM when the data changes."
        ],
        "Code": [
          "// Example of Reactivity",
          "var vm = new Vue({",
          "  el: '#app',",
          "  data: { message: 'Hello, Vue.js!' }",
          "});",
          "// Changing 'message' will automatically update the DOM",
          "vm.message = 'Updated Message';"
        ]
      }
    ]
  }
  