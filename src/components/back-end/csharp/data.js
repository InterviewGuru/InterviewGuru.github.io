export const questionsData = {
    "Title": "C# Interview Questions and Answers",
    "List": [
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a namespace in C#?",
      "Answer": [
        "A namespace is a container that holds classes, structs, enums, delegates, and interfaces, and is used to organize code elements and to create globally unique types."
      ],
      "Code": [
        "// Example of namespace",
        "namespace MyNamespace {",
        "  public class MyClass {",
        "    public void MyMethod() {",
        "      Console.WriteLine(\"Hello World\");",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "OOP Concepts",
      "Question": "What is inheritance in C#?",
      "Answer": [
        "Inheritance is an OOP concept where a class (derived class) inherits the properties and methods of another class (base class).",
        "It allows for code reusability and the creation of a hierarchical relationship between classes."
      ],
      "Code": [
        "// Example of inheritance",
        "public class BaseClass {",
        "  public void Display() {",
        "    Console.WriteLine(\"Base Class Display Method\");",
        "  }",
        "}",
        "public class DerivedClass : BaseClass {",
        "}",
        "DerivedClass obj = new DerivedClass();",
        "obj.Display(); // Output: Base Class Display Method"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is a delegate in C#?",
      "Answer": [
        "A delegate is a type that represents references to methods with a particular parameter list and return type.",
        "Delegates are used to pass methods as arguments to other methods."
      ],
      "Code": [
        "// Example of delegate",
        "public delegate void MyDelegate(string message);",
        "public class Program {",
        "  public static void Main() {",
        "    MyDelegate del = new MyDelegate(DisplayMessage);",
        "    del(\"Hello World\");",
        "  }",
        "  public static void DisplayMessage(string message) {",
        "    Console.WriteLine(message);",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is an interface in C#?",
      "Answer": [
        "An interface is a contract that defines a set of methods and properties that the implementing class must provide.",
        "Interfaces are used to achieve abstraction and multiple inheritance in C#."
      ],
      "Code": [
        "// Example of interface",
        "public interface IMyInterface {",
        "  void MyMethod();",
        "}",
        "public class MyClass : IMyInterface {",
        "  public void MyMethod() {",
        "    Console.WriteLine(\"MyMethod implementation\");",
        "  }",
        "}",
        "MyClass obj = new MyClass();",
        "obj.MyMethod(); // Output: MyMethod implementation"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is an abstract class in C#?",
      "Answer": [
        "An abstract class is a class that cannot be instantiated and is designed to be inherited by other classes.",
        "It can contain abstract methods (without implementation) as well as concrete methods (with implementation)."
      ],
      "Code": [
        "// Example of abstract class",
        "public abstract class Animal {",
        "  public abstract void MakeSound();",
        "  public void Sleep() {",
        "    Console.WriteLine(\"Sleeping\");",
        "  }",
        "}",
        "public class Dog : Animal {",
        "  public override void MakeSound() {",
        "    Console.WriteLine(\"Bark\");",
        "  }",
        "}",
        "Dog myDog = new Dog();",
        "myDog.MakeSound(); // Output: Bark",
        "myDog.Sleep(); // Output: Sleeping"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is LINQ in C#?",
      "Answer": [
        "LINQ (Language Integrated Query) is a set of features in C# that provides query capabilities directly in the language.",
        "It allows querying of collections using a SQL-like syntax."
      ],
      "Code": [
        "// Example of LINQ",
        "using System;",
        "using System.Linq;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };",
        "    var evenNumbers = from num in numbers",
        "                      where num % 2 == 0",
        "                      select num;",
        "    foreach (var num in evenNumbers) {",
        "      Console.WriteLine(num); // Output: 2 4",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a property in C#?",
      "Answer": [
        "A property is a member that provides a flexible mechanism to read, write, or compute the value of a private field.",
        "Properties can have get and set accessors."
      ],
      "Code": [
        "// Example of property",
        "public class Person {",
        "  private string name;",
        "  public string Name {",
        "    get { return name; }",
        "    set { name = value; }",
        "  }",
        "}",
        "Person person = new Person();",
        "person.Name = \"John\";",
        "Console.WriteLine(person.Name); // Output: John"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is an exception in C#?",
      "Answer": [
        "An exception is an error that occurs during the execution of a program.",
        "Exceptions provide a way to transfer control from one part of a program to another."
      ],
      "Code": [
        "// Example of exception handling",
        "public class Program {",
        "  public static void Main() {",
        "    try {",
        "      int[] arr = new int[5];",
        "      arr[10] = 99; // This will throw an IndexOutOfRangeException",
        "    } catch (IndexOutOfRangeException ex) {",
        "      Console.WriteLine(\"An error occurred: \" + ex.Message);",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is async and await in C#?",
      "Answer": [
        "async and await are keywords used to write asynchronous code in C#.",
        "They allow you to perform long-running operations without blocking the main thread."
      ],
      "Code": [
        "// Example of async and await",
        "using System;",
        "using System.Threading.Tasks;",
        "public class Program {",
        "  public static async Task Main() {",
        "    await DoWorkAsync();",
        "  }",
        "  public static async Task DoWorkAsync() {",
        "    await Task.Delay(1000);",
        "    Console.WriteLine(\"Work completed\");",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a constructor in C#?",
      "Answer": [
        "A constructor is a special method of a class that is called when an instance of the class is created.",
        "Constructors are used to initialize objects."
      ],
      "Code": [
        "// Example of constructor",
        "public class Person {",
        "  public string Name;",
        "  public Person(string name) {",
        "    Name = name;",
        "  }",
        "}",
        "Person person = new Person(\"John\");",
        "Console.WriteLine(person.Name); // Output: John"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is a static class in C#?",
      "Answer": [
        "A static class is a class that cannot be instantiated and can contain only static members.",
        "Static classes are used to create utility classes that contain methods and properties that are not tied to a specific instance."
      ],
      "Code": [
        "// Example of static class",
        "public static class Utility {",
        "  public static void PrintMessage(string message) {",
        "    Console.WriteLine(message);",
        "  }",
        "}",
        "Utility.PrintMessage(\"Hello World\"); // Output: Hello World"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is reflection in C#?",
      "Answer": [
        "Reflection is the ability of a program to examine and modify its own structure and behavior at runtime.",
        "It is used to inspect metadata, such as attributes, and to dynamically create and invoke types."
      ],
      "Code": [
        "// Example of reflection",
        "using System;",
        "using System.Reflection;",
        "public class Program {",
        "  public static void Main() {",
        "    Type type = typeof(Person);",
        "    Console.WriteLine(\"Properties of Person class:\");",
        "    foreach (PropertyInfo prop in type.GetProperties()) {",
        "      Console.WriteLine(prop.Name);",
        "    }",
        "  }",
        "}",
        "public class Person {",
        "  public string Name { get; set; }",
        "  public int Age { get; set; }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is an enum in C#?",
      "Answer": [
        "An enum (short for enumeration) is a value type that defines a set of named constants.",
        "Enums are used to create a collection of related constants that can be assigned to a variable."
      ],
      "Code": [
        "// Example of enum",
        "public enum DaysOfWeek {",
        "  Sunday,",
        "  Monday,",
        "  Tuesday,",
        "  Wednesday,",
        "  Thursday,",
        "  Friday,",
        "  Saturday",
        "}",
        "DaysOfWeek today = DaysOfWeek.Monday;",
        "Console.WriteLine(today); // Output: Monday"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is a struct in C#?",
      "Answer": [
        "A struct is a value type that is used to encapsulate small groups of related variables.",
        "Structs are similar to classes but are more lightweight and are stored on the stack rather than the heap."
      ],
      "Code": [
        "// Example of struct",
        "public struct Point {",
        "  public int X { get; set; }",
        "  public int Y { get; set; }",
        "}",
        "Point point = new Point { X = 10, Y = 20 };",
        "Console.WriteLine($\"Point: ({point.X}, {point.Y})\"); // Output: Point: (10, 20)"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is a lambda expression in C#?",
      "Answer": [
        "A lambda expression is an anonymous function that can contain expressions and statements.",
        "Lambda expressions are used to create delegates or expression tree types."
      ],
      "Code": [
        "// Example of lambda expression",
        "using System;",
        "using System.Linq;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };",
        "    var evenNumbers = numbers.Where(n => n % 2 == 0);",
        "    foreach (var num in evenNumbers) {",
        "      Console.WriteLine(num); // Output: 2 4",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a collection in C#?",
      "Answer": [
        "A collection is a class that provides a way to manage groups of related objects.",
        "Collections are used to store, retrieve, and manipulate data."
      ],
      "Code": [
        "// Example of collection",
        "using System;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    List<string> names = new List<string> { \"John\", \"Jane\", \"Joe\" };",
        "    foreach (var name in names) {",
        "      Console.WriteLine(name); // Output: John Jane Joe",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is a generic in C#?",
      "Answer": [
        "Generics allow you to define classes, methods, and data structures with a placeholder for the type of data they store or use.",
        "Generics increase code reusability and type safety."
      ],
      "Code": [
        "// Example of generic",
        "public class GenericClass<T> {",
        "  private T data;",
        "  public GenericClass(T value) {",
        "    data = value;",
        "  }",
        "  public void Display() {",
        "    Console.WriteLine(data);",
        "  }",
        "}",
        "GenericClass<int> intObj = new GenericClass<int>(10);",
        "intObj.Display(); // Output: 10",
        "GenericClass<string> stringObj = new GenericClass<string>(\"Hello\");",
        "stringObj.Display(); // Output: Hello"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is a thread in C#?",
      "Answer": [
        "A thread is the smallest unit of execution within a process.",
        "Threads allow for concurrent execution of code, enabling multi-threading in applications."
      ],
      "Code": [
        "// Example of thread",
        "using System;",
        "using System.Threading;",
        "public class Program {",
        "  public static void Main() {",
        "    Thread thread = new Thread(new ThreadStart(DoWork));",
        "    thread.Start();",
        "  }",
        "  public static void DoWork() {",
        "    Console.WriteLine(\"Work is being done on a separate thread\");",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a method in C#?",
      "Answer": [
        "A method is a code block that contains a series of statements.",
        "Methods are used to perform operations, and they can accept parameters and return values."
      ],
      "Code": [
        "// Example of method",
        "public class Program {",
        "  public static void Main() {",
        "    PrintMessage(\"Hello World\");",
        "  }",
        "  public static void PrintMessage(string message) {",
        "    Console.WriteLine(message);",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is an event in C#?",
      "Answer": [
        "An event is a message sent by an object to signal the occurrence of an action.",
        "Events are used to provide notifications and to implement the observer pattern."
      ],
      "Code": [
        "// Example of event",
        "using System;",
        "public class Program {",
        "  public static event Action OnEvent;",
        "  public static void Main() {",
        "    OnEvent += HandleEvent;",
        "    OnEvent?.Invoke();",
        "  }",
        "  public static void HandleEvent() {",
        "    Console.WriteLine(\"Event handled\");",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is a nullable type in C#?",
      "Answer": [
        "A nullable type is a value type that can also represent a null value.",
        "Nullable types are used to represent undefined or missing values."
      ],
      "Code": [
        "// Example of nullable type",
        "public class Program {",
        "  public static void Main() {",
        "    int? nullableInt = null;",
        "    if (nullableInt.HasValue) {",
        "      Console.WriteLine(nullableInt.Value);",
        "    } else {",
        "      Console.WriteLine(\"Value is null\"); // Output: Value is null",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Easy",
      "Category": "Basics",
      "Question": "What is a field in C#?",
      "Answer": [
        "A field is a variable that is declared directly in a class or struct.",
        "Fields are used to store data that is associated with an object."
      ],
      "Code": [
        "// Example of field",
        "public class Person {",
        "  public string Name;",
        "}",
        "Person person = new Person();",
        "person.Name = \"John\";",
        "Console.WriteLine(person.Name); // Output: John"
      ]
    },
    {
      "Difficulty": "Medium",
      "Category": "Core Concepts",
      "Question": "What is a property in C#?",
      "Answer": [
        "A property is a member that provides a flexible mechanism to read, write, or compute the value of a private field.",
        "Properties can have get and set accessors."
      ],
      "Code": [
        "// Example of property",
        "public class Person {",
        "  private string name;",
        "  public string Name {",
        "    get { return name; }",
        "    set { name = value; }",
        "  }",
        "}",
        "Person person = new Person();",
        "person.Name = \"John\";",
        "Console.WriteLine(person.Name); // Output: John"
      ]
    }
    ]
  }
  