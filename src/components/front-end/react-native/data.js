export const questionsData ={
    "Title": "React Native Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Medium",
        "Category": "Core Concepts",
        "Question": "What is React Native?",
        "Answer": [
          "React Native is a framework for building native mobile applications using JavaScript and React.",
          "It allows developers to write one codebase that runs on both iOS and Android, compiling to native code."
        ],
        "Code": [
          "// Example of a basic React Native component",
          "import React from 'react';",
          "import { View, Text } from 'react-native';",
          "const App = () => (",
          "  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>",
          "    <Text>Hello, React Native!</Text>",
          "  </View>",
          ");",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Components",
        "Question": "What are the core components in React Native?",
        "Answer": [
          "Core components include View (like div), Text, Image, ScrollView, TextInput, TouchableOpacity, and FlatList.",
          "These map to native UI elements depending on the platform."
        ],
        "Code": [
          "// Example using core components",
          "import React from 'react';",
          "import { View, Text, TextInput, Button } from 'react-native';",
          "const App = () => (",
          "  <View>",
          "    <Text>Enter your name:</Text>",
          "    <TextInput />",
          "    <Button title=\"Submit\" onPress={() => alert('Submitted!')} />",
          "  </View>",
          ");",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Styling",
        "Question": "How is styling handled in React Native?",
        "Answer": [
          "React Native uses JavaScript objects to define styles, similar to CSS but with different property names.",
          "Styles can be defined inline or in a separate StyleSheet object for performance."
        ],
        "Code": [
          "// Example of styling in React Native",
          "import React from 'react';",
          "import { View, Text, StyleSheet } from 'react-native';",
          "const App = () => (",
          "  <View style={styles.container}>",
          "    <Text style={styles.text}>Styled Text</Text>",
          "  </View>",
          ");",
          "const styles = StyleSheet.create({",
          "  container: {",
          "    flex: 1,",
          "    justifyContent: 'center',",
          "    alignItems: 'center',",
          "    backgroundColor: '#F5FCFF',",
          "  },",
          "  text: {",
          "    fontSize: 20,",
          "    textAlign: 'center',",
          "    margin: 10,",
          "  },",
          "});",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Navigation",
        "Question": "How do you implement navigation in React Native?",
        "Answer": [
          "Navigation in React Native is often handled by third-party libraries like React Navigation or by using native navigation solutions.",
          "React Navigation provides navigators like Stack, Tab, and Drawer for different navigation patterns."
        ],
        "Code": [
          "// Example using React Navigation",
          "import * as React from 'react';",
          "import { NavigationContainer } from '@react-navigation/native';",
          "import { createStackNavigator } from '@react-navigation/stack';",
          "import HomeScreen from './screens/HomeScreen';",
          "import DetailsScreen from './screens/DetailsScreen';",
          "const Stack = createStackNavigator();",
          "function App() {",
          "  return (",
          "    <NavigationContainer>",
          "      <Stack.Navigator>",
          "        <Stack.Screen name=\"Home\" component={HomeScreen} />",
          "        <Stack.Screen name=\"Details\" component={DetailsScreen} />",
          "      </Stack.Navigator>",
          "    </NavigationContainer>",
          "  );",
          "}",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What state management options are available in React Native?",
        "Answer": [
          "Options include using React's useState and useReducer hooks for local state, Context API for global state, or external libraries like Redux or MobX for complex state management across the app."
        ],
        "Code": [
          "// Example of using Context for state management",
          "import React, { createContext, useContext, useState } from 'react';",
          "const ThemeContext = createContext();",
          "const ThemeProvider = ({ children }) => {",
          "  const [theme, setTheme] = useState('light');",
          "  return (",
          "    <ThemeContext.Provider value={{ theme, setTheme }}>",
          "      {children}",
          "    </ThemeContext.Provider>",
          "  );",
          "};",
          "export const useTheme = () => useContext(ThemeContext);",
          "export default ThemeProvider;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Performance",
        "Question": "How can you optimize performance in React Native?",
        "Answer": [
          "Optimization techniques include:",
          "- Using FlatList for large lists instead of ScrollView.",
          "- Implementing memoization with React.memo or useMemo.",
          "- Avoiding unnecessary re-renders with PureComponent or shouldComponentUpdate.",
          "- Using native modules for performance-critical operations."
        ],
        "Code": [
          "// Example of using FlatList for performance",
          "import React from 'react';",
          "import { FlatList, Text, View } from 'react-native';",
          "const data = Array(100).fill().map((_, i) => ({ key: `item-${i}` }));",
          "const App = () => (",
          "  <FlatList",
          "    data={data}",
          "    renderItem={({ item }) => <Text>{item.key}</Text>}",
          "    keyExtractor={item => item.key}",
          "  />",
          ");",
          "export default App;"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Native Modules",
        "Question": "What are Native Modules in React Native?",
        "Answer": [
          "Native Modules allow you to write custom native code (Java for Android, Objective-C/Swift for iOS) that can be called from JavaScript.",
          "This is useful for accessing platform APIs not covered by React Native."
        ],
        "Code": [
          "// Example of calling a native module from JavaScript",
          "import { NativeModules } from 'react-native';",
          "const { CalendarModule } = NativeModules;",
          "CalendarModule.createCalendarEvent('Dinner Party', 'My House');"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Animations",
        "Question": "How do animations work in React Native?",
        "Answer": [
          "React Native provides Animated API for declarative animations, where you define animations in JavaScript, which then translate to native animations for performance.",
          "You can also use third-party libraries like react-native-reanimated for more complex animations."
        ],
        "Code": [
          "// Example of a basic animation using Animated API",
          "import React, { useState, useEffect } from 'react';",
          "import { Animated, View, Text, TouchableOpacity } from 'react-native';",
          "const App = () => {",
          "  const [animation] = useState(new Animated.Value(0));",
          "  const startAnimation = () => {",
          "    Animated.timing(animation, {",
          "      toValue: 1,",
          "      duration: 1500,",
          "      useNativeDriver: true",
          "    }).start();",
          "  };",
          "  const animatedStyles = {",
          "    transform: [{",
          "      translateY: animation.interpolate({",
          "        inputRange: [0, 1],",
          "        outputRange: [0, 200]",
          "      })",
          "    }]",
          "  };",
          "  return (",
          "    <View>",
          "      <Animated.View style={[styles.box, animatedStyles]} />",
          "      <TouchableOpacity onPress={startAnimation}>",
          "        <Text>Start Animation</Text>",
          "      </TouchableOpacity>",
          "    </View>",
          "  );",
          "};",
          "const styles = {",
          "  box: {",
          "    width: 50,",
          "    height: 50,",
          "    backgroundColor: 'blue'",
          "  }",
          "};",
          "export default App;"
        ]
      },
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