export const questionsData ={
    "Title": "React Native Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is React Native, and why is it used?",
        "Answer": [
          "React Native is an open-source framework developed by Facebook.",
          "It is used to build cross-platform mobile applications using JavaScript and React."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What are core components in React Native?",
        "Answer": [
          "Core components are the building blocks of a React Native app, such as View, Text, TextInput, ScrollView, and FlatList.",
          "They map directly to the native UI components on both iOS and Android platforms."
        ],
        "Code": [
          "// Example of a Core Component",
          "import React from 'react';",
          "import { Text, View } from 'react-native';",
          "const MyComponent = () => {",
          "  return (",
          "    <View>",
          "      <Text>Hello, React Native!</Text>",
          "    </View>",
          "  );",
          "};",
          "export default MyComponent;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Navigation",
        "Question": "How does navigation work in React Native?",
        "Answer": [
          "React Native uses libraries like React Navigation or React Native Navigation to handle navigation.",
          "Navigation is implemented using stacks, tabs, and drawer navigators."
        ],
        "Code": [
          "// Example of React Navigation",
          "import React from 'react';",
          "import { NavigationContainer } from '@react-navigation/native';",
          "import { createStackNavigator } from '@react-navigation/stack';",
          "const Stack = createStackNavigator();",
          "const HomeScreen = () => <Text>Home Screen</Text>;",
          "const DetailsScreen = () => <Text>Details Screen</Text>;",
          "const App = () => {",
          "  return (",
          "    <NavigationContainer>",
          "      <Stack.Navigator>",
          "        <Stack.Screen name='Home' component={HomeScreen} />",
          "        <Stack.Screen name='Details' component={DetailsScreen} />",
          "      </Stack.Navigator>",
          "    </NavigationContainer>",
          "  );",
          "};",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance",
        "Question": "How can you improve the performance of a React Native application?",
        "Answer": [
          "Use the FlatList component for rendering large datasets efficiently.",
          "Optimize images by using proper formats and caching.",
          "Avoid unnecessary re-renders by using memoization techniques like React.memo and useCallback."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What are common state management solutions in React Native?",
        "Answer": [
          "React Native supports state management using Context API, Redux, MobX, or Zustand.",
          "The choice depends on the complexity and scalability requirements of the application."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Styling",
        "Question": "How is styling done in React Native?",
        "Answer": [
          "React Native uses a StyleSheet API to define styles in JavaScript, similar to CSS.",
          "It supports flexbox layout for positioning and alignment."
        ],
        "Code": [
          "// Example of Styling",
          "import React from 'react';",
          "import { View, Text, StyleSheet } from 'react-native';",
          "const StyledComponent = () => {",
          "  return (",
          "    <View style={styles.container}>",
          "      <Text style={styles.text}>Styled Text</Text>",
          "    </View>",
          "  );",
          "};",
          "const styles = StyleSheet.create({",
          "  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },",
          "  text: { fontSize: 20, color: 'blue' },",
          "});",
          "export default StyledComponent;"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Native Modules",
        "Question": "What are native modules in React Native?",
        "Answer": [
          "Native modules allow React Native to communicate with native code written in Java or Swift.",
          "They are used to extend the functionality of React Native applications with platform-specific features."
        ],
        "Code": [
          "// Example of a Native Module",
          "import { NativeModules } from 'react-native';",
          "const { CustomModule } = NativeModules;",
          "CustomModule.customFunction('Hello from Native!');"
        ]
      }
    ]
  }