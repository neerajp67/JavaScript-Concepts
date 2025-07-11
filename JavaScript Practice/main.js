/*< -- How Javascript works -- > */

// 1. Loading & Parsing ==>

/*  1.1 Fetch Script: The browser first fetches the JavaScript file (or reads inline script) from the server.
    1.2Parse Code: The JavaScript engine's Parser reads the raw code, tokenizes it (breaks it into meaningful pieces), and then constructs an Abstract Syntax Tree (AST). The AST is a tree-like representation of the code's structural integrity.
/*

// 2. Compilation (Just-In-Time - JIT) ==>
/*  2.1 Interpreter/Compiler: Modern JS engines use a JIT compilation approach. An Interpreter quickly translates the AST into bytecode.
    2.2 Optimization: While the bytecode is running, a Profiler identifies "hot" (frequently executed) code. This hot code is then sent to an Optimizing Compiler (e.g., V8's TurboFan), which compiles it into highly optimized machine code for faster subsequent execution. If runtime assumptions break, it can de-optimize back to bytecode.
*/

// 3. Execution Context Creation (Preparation Phase) ==>
/*  3.1.  Before code execution, an Execution Context is created (first the Global Context, then Function Contexts for each function call). 
    3.2 Memory Allocation (Hoisting):
        3.2.1 For var declarations and function declarations, memory space is allocated, and they are conceptually moved to the top of their scope ("hoisted"). var variables are initialized to undefined.
        3.2.2 let and const declarations are also hoisted but remain in a "Temporal Dead Zone" (TDZ) until their actual line of declaration is executed.
    3.3 this Binding: The value of the this keyword is determined and bound for that context.
    3.4 Lexical Environment: The engine sets up the "scope chain," defining how variables and functions are resolved.
*/

// 4. Code Execution (Runtime Phase) ==>
/*  4.1 Call Stack: Execution contexts are pushed onto a Call Stack (LIFO - Last In, First Out). The code at the top of the stack is currently executing.
    4.2 Synchronous Code: JavaScript executes code synchronously, line by line, on a single main thread.
    4.3 Asynchronous Operations:
        4.3.1 When an asynchronous operation (like setTimeout, fetch, DOM events) is encountered, it's handed off to Web APIs (browser-provided features). The main thread does not wait for these to complete.
        4.3.2 Once a Web API task finishes, its associated callback function is moved to the Callback Queue (also known as the Task Queue).
        4.3.3 Event Loop: The Event Loop constantly monitors the Call Stack. If the Call Stack is empty, it takes the first callback from the Callback Queue and pushes it onto the Call Stack for execution. This mechanism enables non-blocking I/O and concurrency in single-threaded JavaScript.
*/

// 5 Memory Management ==>
/*  5.1 Garbage Collection: The JavaScript engine includes a Garbage Collector that automatically identifies and reclaims memory occupied by objects that are no longer reachable or needed by the program, preventing memory leaks.
    5.2 Context Popping: When an execution context finishes its code execution, it's popped off the Call Stack, and its associated memory is then eligible for garbage collection.
*/