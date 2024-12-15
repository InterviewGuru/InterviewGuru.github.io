export const questionsData = {
    "Title": "Flutter Interview Questions and Answers",
    "List": [
      {
        "Difficulty": "Easy",
        "Category": "Basics",
        "Question": "What is Flutter, and why is it used?",
        "Answer": [
          "Flutter is an open-source UI software development kit created by Google.",
          "It is used to build natively compiled applications for mobile, web, and desktop from a single codebase."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Widgets",
        "Question": "What are widgets in Flutter?",
        "Answer": [
          "Widgets are the basic building blocks of a Flutter app's UI.",
          "Everything in Flutter is a widget, including layout models, text, buttons, and animations."
        ],
        "Code": [
          "// Example of a Stateless Widget",
          "import 'package:flutter/material.dart';",
          "class MyWidget extends StatelessWidget {",
          "  @override",
          "  Widget build(BuildContext context) {",
          "    return Text('Hello, Flutter!');",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "State Management",
        "Question": "What is state management in Flutter?",
        "Answer": [
          "State management in Flutter refers to managing the state of widgets effectively.",
          "Common approaches include using setState, Provider, Riverpod, Bloc, or Redux."
        ],
        "Code": [
          "// Example of setState",
          "import 'package:flutter/material.dart';",
          "class CounterApp extends StatefulWidget {",
          "  @override",
          "  _CounterAppState createState() => _CounterAppState();",
          "}",
          "class _CounterAppState extends State<CounterApp> {",
          "  int _counter = 0;",
          "  void _incrementCounter() {",
          "    setState(() {",
          "      _counter++;",
          "    });",
          "  }",
          "  @override",
          "  Widget build(BuildContext context) {",
          "    return Column(",
          "      children: [",
          "        Text('Counter: \$_counter'),",
          "        ElevatedButton(",
          "          onPressed: _incrementCounter,",
          "          child: Text('Increment'),",
          "        ),",
          "      ],",
          "    );",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Navigation",
        "Question": "How does navigation work in Flutter?",
        "Answer": [
          "Flutter uses the Navigator widget to manage navigation between screens.",
          "Routes can be defined as named routes or directly as widget trees."
        ],
        "Code": [
          "// Example of Named Routes",
          "import 'package:flutter/material.dart';",
          "void main() {",
          "  runApp(MaterialApp(",
          "    initialRoute: '/',",
          "    routes: {",
          "      '/': (context) => HomeScreen(),",
          "      '/second': (context) => SecondScreen(),",
          "    },",
          "  ));",
          "}",
          "class HomeScreen extends StatelessWidget {",
          "  @override",
          "  Widget build(BuildContext context) {",
          "    return ElevatedButton(",
          "      onPressed: () { Navigator.pushNamed(context, '/second'); },",
          "      child: Text('Go to Second Screen'),",
          "    );",
          "  }",
          "}",
          "class SecondScreen extends StatelessWidget {",
          "  @override",
          "  Widget build(BuildContext context) {",
          "    return Text('Welcome to the Second Screen');",
          "  }",
          "}"
        ]
      },
      {
        "Difficulty": "Hard",
        "Category": "Performance",
        "Question": "How can you improve the performance of a Flutter application?",
        "Answer": [
          "Use widgets that are efficient, like const widgets when the UI doesn't change.",
          "Minimize rebuilds by using keys and avoiding unnecessary setState calls.",
          "Optimize images and assets using proper formats and compression."
        ]
      },
      {
        "Difficulty": "Medium",
        "Category": "Animations",
        "Question": "How are animations implemented in Flutter?",
        "Answer": [
          "Flutter provides animation libraries like AnimationController and Tween.",
          "You can use built-in widgets like AnimatedBuilder and AnimatedContainer for simpler animations."
        ],
        "Code": [
          "// Example of an Animation",
          "import 'package:flutter/material.dart';",
          "class MyAnimation extends StatefulWidget {",
          "  @override",
          "  _MyAnimationState createState() => _MyAnimationState();",
          "}",
          "class _MyAnimationState extends State<MyAnimation> with SingleTickerProviderStateMixin {",
          "  late AnimationController _controller;",
          "  late Animation<double> _animation;",
          "  @override",
          "  void initState() {",
          "    _controller = AnimationController(vsync: this, duration: Duration(seconds: 2));",
          "    _animation = Tween<double>(begin: 0, end: 100).animate(_controller);",
          "    _controller.forward();",
          "    super.initState();",
          "  }",
          "  @override",
          "  Widget build(BuildContext context) {",
          "    return AnimatedBuilder(",
          "      animation: _animation,",
          "      builder: (context, child) {",
          "        return Container(width: _animation.value);",
          "      },",
          "    );",
          "  }",
          "}"
        ]
      }
    ]
  }
  