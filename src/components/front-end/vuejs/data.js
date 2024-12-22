export const questionsData = {
    "Title": "Vue js Interview Questions and Answers",
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
        "Question": "What are Vue components?",
        "Answer": [
          "Components in Vue.js are reusable Vue instances with custom HTML markup, logic, and styles.",
          "They help in organizing UI into smaller, self-contained, and reusable pieces."
        ],
        "Code": [
          "// Example of a Vue component",
          "Vue.component('button-counter', {",
          "  data: function () {",
          "    return {",
          "      count: 0",
          "    }",
          "  },",
          "  template: '<button v-on:click=\"count++\">You clicked me {{ count }} times.</button>'",
          "})"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Reactivity",
        "Question": "How does Vue.js handle reactivity?",
        "Answer": [
          "Vue.js uses a reactive data system where changes to data automatically trigger updates in the DOM.",
          "This is achieved through the use of getters and setters on properties, tracking dependencies when they're read."
        ],
        "Code": [
          "// Example of reactivity in Vue",
          "new Vue({",
          "  el: '#app',",
          "  data: {",
          "    message: 'Hello Vue!'",
          "  }",
          "})",
          "// HTML",
          "<div id=\"app\">{{ message }}</div>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Directives",
        "Question": "What are directives in Vue.js?",
        "Answer": [
          "Directives are special tokens in the markup that tell Vue to do something to a DOM element.",
          "Common directives include v-if, v-for, v-bind, and v-on."
        ],
        "Code": [
          "// Using v-if and v-for directives",
          "<div v-if=\"show\">This is only shown when 'show' is true</div>",
          "<ul>",
          "  <li v-for=\"item in items\" :key=\"item.id\">{{ item.text }}</li>",
          "</ul>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Routing",
        "Question": "How is routing handled in Vue.js?",
        "Answer": [
          "Vue Router is the official router for Vue.js. It facilitates navigation among different views in a Vue application.",
          "Routes are defined as mappings between URL paths and components."
        ],
        "Code": [
          "// Example of Vue Router configuration",
          "import Vue from 'vue'",
          "import VueRouter from 'vue-router'",
          "import Home from './components/Home.vue'",
          "import About from './components/About.vue'",
          "Vue.use(VueRouter)",
          "const router = new VueRouter({",
          "  routes: [",
          "    { path: '/', component: Home },",
          "    { path: '/about', component: About }",
          "  ]",
          "})",
          "new Vue({",
          "  router",
          "}).$mount('#app')"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What state management options are available in Vue.js?",
        "Answer": [
          "Vuex is the official state management library for Vue.js, designed for managing the state of large-scale applications.",
          "For simpler applications, Vue's reactivity system or even Vue's reactive API can be used for state management."
        ],
        "Code": [
          "// Example of Vuex store setup",
          "import Vue from 'vue'",
          "import Vuex from 'vuex'",
          "Vue.use(Vuex)",
          "export default new Vuex.Store({",
          "  state: {",
          "    count: 0",
          "  },",
          "  mutations: {",
          "    increment (state) {",
          "      state.count++",
          "    }",
          "  }",
          "})"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Lifecycle Hooks",
        "Question": "What are Vue.js lifecycle hooks?",
        "Answer": [
          "Lifecycle hooks are methods in Vue components that are called at different stages of a component's life - creation, mounting, updating, and destruction.",
          "Key hooks include created, mounted, updated, and destroyed."
        ],
        "Code": [
          "// Example using lifecycle hooks",
          "export default {",
          "  data() {",
          "    return {",
          "      message: 'Hello Vue.js!'",
          "    }",
          "  },",
          "  created() {",
          "    console.log('Component created!')",
          "  },",
          "  mounted() {",
          "    console.log('Component mounted!')",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Forms",
        "Question": "How do you handle form input in Vue.js?",
        "Answer": [
          "Vue.js provides v-model for two-way data binding, which simplifies form handling by syncing input values with component data.",
          "This directive works with various input types like text, checkboxes, radio buttons, and select."
        ],
        "Code": [
          "// Example of form handling with v-model",
          "<template>",
          "  <div>",
          "    <input v-model=\"message\" placeholder=\"edit me\">",
          "    <p>Message is: {{ message }}</p>",
          "  </div>",
          "</template>",
          "<script>",
          "export default {",
          "  data() {",
          "    return {",
          "      message: ''",
          "    }",
          "  }",
          "}",
          "</script>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Single File Components",
        "Question": "What are Single File Components (SFC) in Vue.js?",
        "Answer": [
          "Single File Components combine HTML template, JavaScript logic, and CSS styles into a single .vue file.",
          "This approach enhances component maintainability and separation of concerns."
        ],
        "Code": [
          "// Example of a Vue SFC",
          "<template>",
          "  <div class=\"example\">{{ message }}</div>",
          "</template>",
          "<script>",
          "export default {",
          "  data() {",
          "    return {",
          "      message: 'Hello from SFC!'",
          "    }",
          "  }",
          "}",
          "</script>",
          "<style scoped>",
          ".example { color: red; }",
          "</style>"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "How can you optimize performance in Vue.js?",
        "Answer": [
          "Optimization in Vue includes:",
          "- Using v-if instead of v-show for conditional rendering if elements are often destroyed.",
          "- Implementing virtual scrolling for large lists with libraries like vue-virtual-scroller.",
          "- Using keep-alive for caching components that are frequently toggled.",
          "- Minimizing watchers and computed properties unless necessary."
        ],
        "Code": [
          "// Example of using keep-alive",
          "<keep-alive>",
          "  <component :is=\"currentTabComponent\"></component>",
          "</keep-alive>"
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
  