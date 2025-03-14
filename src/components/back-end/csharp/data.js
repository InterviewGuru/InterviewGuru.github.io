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
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between Task and Thread in C#?",
      "Answer": [
        "A Task represents an asynchronous operation and is part of the Task Parallel Library (TPL). It is used for parallel programming and can return a result.",
        "A Thread is a lower-level construct that represents a separate path of execution. It is used for multi-threading and does not return a result."
      ],
      "Code": [
        "// Example of Task",
        "using System;",
        "using System.Threading.Tasks;",
        "public class Program {",
        "  public static async Task Main() {",
        "    await Task.Run(() => Console.WriteLine(\"Task running\"));",
        "  }",
        "}",
        "// Example of Thread",
        "using System;",
        "using System.Threading;",
        "public class Program {",
        "  public static void Main() {",
        "    Thread thread = new Thread(() => Console.WriteLine(\"Thread running\"));",
        "    thread.Start();",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the purpose of the 'yield' keyword in C#?",
      "Answer": [
        "The 'yield' keyword is used in an iterator to provide a value to the enumerator object or to signal the end of iteration.",
        "It simplifies the implementation of the IEnumerable and IEnumerator pattern."
      ],
      "Code": [
        "// Example of yield",
        "using System;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    foreach (int number in GetNumbers()) {",
        "      Console.WriteLine(number);",
        "    }",
        "  }",
        "  public static IEnumerable<int> GetNumbers() {",
        "    yield return 1;",
        "    yield return 2;",
        "    yield return 3;",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'ref' and 'out' parameters in C#?",
      "Answer": [
        "'ref' parameters require that the variable be initialized before it is passed to the method.",
        "'out' parameters do not require initialization before being passed, but they must be assigned a value before the method returns."
      ],
      "Code": [
        "// Example of ref and out",
        "using System;",
        "public class Program {",
        "  public static void Main() {",
        "    int refValue = 10;",
        "    int outValue;",
        "    RefMethod(ref refValue);",
        "    OutMethod(out outValue);",
        "    Console.WriteLine($\"refValue: {refValue}\"); // Output: refValue: 20",
        "    Console.WriteLine($\"outValue: {outValue}\"); // Output: outValue: 30",
        "  }",
        "  public static void RefMethod(ref int value) {",
        "    value = 20;",
        "  }",
        "  public static void OutMethod(out int value) {",
        "    value = 30;",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'IEnumerable' and 'IQueryable' in C#?",
      "Answer": [
        "'IEnumerable' is used for in-memory collections and provides forward-only cursor-based iteration.",
        "'IQueryable' is used for querying data from out-of-memory collections like databases and allows for query composition and deferred execution."
      ],
      "Code": [
        "// Example of IEnumerable",
        "using System;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    IEnumerable<int> numbers = new List<int> { 1, 2, 3, 4, 5 };",
        "    foreach (int number in numbers) {",
        "      Console.WriteLine(number);",
        "    }",
        "  }",
        "}",
        "// Example of IQueryable",
        "using System;",
        "using System.Linq;",
        "using System.Collections.Generic;",
        "public class Program {",
        "  public static void Main() {",
        "    IQueryable<int> numbers = new List<int> { 1, 2, 3, 4, 5 }.AsQueryable();",
        "    var evenNumbers = numbers.Where(n => n % 2 == 0);",
        "    foreach (int number in evenNumbers) {",
        "      Console.WriteLine(number);",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'lock' and 'Monitor' in C#?",
      "Answer": [
        "The 'lock' statement is a shorthand for using the Monitor class to acquire and release a lock on a given object.",
        "Monitor provides more control with methods like Monitor.Enter, Monitor.Exit, Monitor.Wait, and Monitor.Pulse."
      ],
      "Code": [
        "// Example of lock",
        "public class Program {",
        "  private static readonly object _lock = new object();",
        "  public static void Main() {",
        "    lock (_lock) {",
        "      Console.WriteLine(\"Locked\");",
        "    }",
        "  }",
        "}",
        "// Example of Monitor",
        "using System;",
        "using System.Threading;",
        "public class Program {",
        "  private static readonly object _lock = new object();",
        "  public static void Main() {",
        "    Monitor.Enter(_lock);",
        "    try {",
        "      Console.WriteLine(\"Locked\");",
        "    } finally {",
        "      Monitor.Exit(_lock);",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'abstract class' and 'interface' in C#?",
      "Answer": [
        "An abstract class can have implementations for some of its members, but an interface cannot have any implementation.",
        "A class can inherit from only one abstract class but can implement multiple interfaces."
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
        "// Example of interface",
        "public interface IAnimal {",
        "  void MakeSound();",
        "}",
        "public class Cat : IAnimal {",
        "  public void MakeSound() {",
        "    Console.WriteLine(\"Meow\");",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'readonly' and 'const' in C#?",
      "Answer": [
        "'const' fields are compile-time constants and must be initialized at the time of declaration.",
        "'readonly' fields are runtime constants and can be initialized either at the time of declaration or in the constructor."
      ],
      "Code": [
        "// Example of const",
        "public class Program {",
        "  public const int ConstValue = 10;",
        "  public static void Main() {",
        "    Console.WriteLine(ConstValue);",
        "  }",
        "}",
        "// Example of readonly",
        "public class Program {",
        "  public readonly int ReadonlyValue;",
        "  public Program(int value) {",
        "    ReadonlyValue = value;",
        "  }",
        "  public static void Main() {",
        "    Program p = new Program(20);",
        "    Console.WriteLine(p.ReadonlyValue);",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Advanced Concepts",
      "Question": "What is the difference between 'Array' and 'ArrayList' in C#?",
      "Answer": [
        "An Array is a fixed-size collection of elements of the same type.",
        "An ArrayList is a dynamic-size collection of elements of the object type, which can store elements of different types."
      ],
      "Code": [
        "// Example of Array",
        "public class Program {",
        "  public static void Main() {",
        "    int[] numbers = new int[5];",
        "    numbers[0] = 1;",
        "    numbers[1] = 2;",
        "    Console.WriteLine(numbers[0]); // Output: 1",
        "    Console.WriteLine(numbers[1]); // Output: 2",
        "  }",
        "}",
        "// Example of ArrayList",
        "using System;",
        "using System.Collections;",
        "public class Program {",
        "  public static void Main() {",
        "    ArrayList list = new ArrayList();",
        "    list.Add(1);",
        "    list.Add(\"Hello\");",
        "    Console.WriteLine(list[0]); // Output: 1",
        "    Console.WriteLine(list[1]); // Output: Hello",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Design Patterns",
      "Question": "What is the Singleton pattern in C#?",
      "Answer": [
        "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.",
        "It is used to control access to a shared resource, such as a configuration object or a connection pool."
      ],
      "Code": [
        "// Example of Singleton pattern",
        "public class Singleton {",
        "  private static Singleton instance = null;",
        "  private static readonly object padlock = new object();",
        "  Singleton() { }",
        "  public static Singleton Instance {",
        "    get {",
        "      lock (padlock) {",
        "        if (instance == null) {",
        "          instance = new Singleton();",
        "        }",
        "        return instance;",
        "      }",
        "    }",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Design Patterns",
      "Question": "What is the Factory Method pattern in C#?",
      "Answer": [
        "The Factory Method pattern defines an interface for creating an object, but allows subclasses to alter the type of objects that will be created.",
        "It is used to delegate the responsibility of object instantiation to subclasses."
      ],
      "Code": [
        "// Example of Factory Method pattern",
        "public abstract class Creator {",
        "  public abstract IProduct FactoryMethod();",
        "}",
        "public class ConcreteCreator : Creator {",
        "  public override IProduct FactoryMethod() {",
        "    return new ConcreteProduct();",
        "  }",
        "}",
        "public interface IProduct { }",
        "public class ConcreteProduct : IProduct { }",
        "public class Client {",
        "  public void Main() {",
        "    Creator creator = new ConcreteCreator();",
        "    IProduct product = creator.FactoryMethod();",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Design Patterns",
      "Question": "What is the Observer pattern in C#?",
      "Answer": [
        "The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
        "It is used to implement distributed event handling systems."
      ],
      "Code": [
        "// Example of Observer pattern",
        "using System;",
        "using System.Collections.Generic;",
        "public interface IObserver {",
        "  void Update(ISubject subject);",
        "}",
        "public interface ISubject {",
        "  void Attach(IObserver observer);",
        "  void Detach(IObserver observer);",
        "  void Notify();",
        "}",
        "public class ConcreteSubject : ISubject {",
        "  public int State { get; set; } = -0;",
        "  private List<IObserver> _observers = new List<IObserver>();",
        "  public void Attach(IObserver observer) {",
        "    _observers.Add(observer);",
        "  }",
        "  public void Detach(IObserver observer) {",
        "    _observers.Remove(observer);",
        "  }",
        "  public void Notify() {",
        "    foreach (var observer in _observers) {",
        "      observer.Update(this);",
        "    }",
        "  }",
        "}",
        "public class ConcreteObserver : IObserver {",
        "  public void Update(ISubject subject) {",
        "    if (subject is ConcreteSubject concreteSubject) {",
        "      Console.WriteLine(\"Observer: Reacted to the event.\");",
        "    }",
        "  }",
        "}",
        "public class Client {",
        "  public static void Main(string[] args) {",
        "    var subject = new ConcreteSubject();",
        "    var observer = new ConcreteObserver();",
        "    subject.Attach(observer);",
        "    subject.State = 123;",
        "    subject.Notify();",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Design Patterns",
      "Question": "What is the Strategy pattern in C#?",
      "Answer": [
        "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.",
        "It lets the algorithm vary independently from clients that use it."
      ],
      "Code": [
        "// Example of Strategy pattern",
        "public interface IStrategy {",
        "  object DoAlgorithm(object data);",
        "}",
        "public class ConcreteStrategyA : IStrategy {",
        "  public object DoAlgorithm(object data) {",
        "    return \"Strategy A\";",
        "  }",
        "}",
        "public class ConcreteStrategyB : IStrategy {",
        "  public object DoAlgorithm(object data) {",
        "    return \"Strategy B\";",
        "  }",
        "}",
        "public class Context {",
        "  private IStrategy _strategy;",
        "  public Context(IStrategy strategy) {",
        "    _strategy = strategy;",
        "  }",
        "  public void SetStrategy(IStrategy strategy) {",
        "    _strategy = strategy;",
        "  }",
        "  public void DoSomeBusinessLogic() {",
        "    var result = _strategy.DoAlgorithm(\"data\");",
        "    Console.WriteLine(result);",
        "  }",
        "}",
        "public class Client {",
        "  public static void Main(string[] args) {",
        "    var context = new Context(new ConcreteStrategyA());",
        "    context.DoSomeBusinessLogic();",
        "    context.SetStrategy(new ConcreteStrategyB());",
        "    context.DoSomeBusinessLogic();",
        "  }",
        "}"
      ]
    },
    {
      "Difficulty": "Hard",
      "Category": "Design Patterns",
      "Question": "What is the Decorator pattern in C#?",
      "Answer": [
        "The Decorator pattern attaches additional responsibilities to an object dynamically.",
        "It provides a flexible alternative to subclassing for extending functionality."
      ],
      "Code": [
        "// Example of Decorator pattern",
        "public abstract class Component {",
        "  public abstract void Operation();",
        "}",
        "public class ConcreteComponent : Component {",
        "  public override void Operation() {",
        "    Console.WriteLine(\"ConcreteComponent Operation\");",
        "  }",
        "}",
        "public abstract class Decorator : Component {",
        "  protected Component _component;",
        "  public Decorator(Component component) {",
        "    _component = component;",
        "  }",
        "  public override void Operation() {",
        "    if (_component != null) {",
        "      _component.Operation();",
        "    }",
        "  }",
        "}",
        "public class ConcreteDecoratorA : Decorator {",
        "  public ConcreteDecoratorA(Component component) : base(component) { }",
        "  public override void Operation() {",
        "    base.Operation();",
        "    Console.WriteLine(\"ConcreteDecoratorA Operation\");",
        "  }",
        "}",
        "public class ConcreteDecoratorB : Decorator {",
        "  public ConcreteDecoratorB(Component component) : base(component) { }",
        "  public override void Operation() {",
        "    base.Operation();",
        "    Console.WriteLine(\"ConcreteDecoratorB Operation\");",
        "  }",
        "}",
        "public class Client {",
        "  public static void Main(string[] args) {",
        "    Component component = new ConcreteComponent();",
        "    component = new ConcreteDecoratorA(component);",
        "    component = new ConcreteDecoratorB(component);",
        "    component.Operation();",
        "  }",
        "}"
      ]
    }
    ]
  }
  