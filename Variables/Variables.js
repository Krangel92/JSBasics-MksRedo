// Printing to the terminal:
console.log("Hello");

//Declaring a new variable:
age = 32;

//Concatenating strings with variables using the + operator:
console.log("Hello, my name is Karla & I am " + age + " years old");

//Assigning a new value:
age = 33;
console.log("and I will be " + age + " next year");

//If the value of a variable will NOT change, use const:
const name = Karla;
//if I change name to something else I'll get an error:
//   name = Emanuele -> will throw 'TypeError: Assignment to constant variable.'

// Exercises:
//  1. In the node REPL, declare two variables — a with value 4 and b with value 6.
//     Using console.log, print the result of:
//     a + b (should print 10)
//     a * b (should print 24)
// RESULT:
// Opened the REPL by typyng node in the terminal.
// > a = 4
// 4
// > b = 6
// 6
// > a + b
// 10
// > a * b
// 24

// 2. Find the problem in the following program, so code prints "Hello Makers" when typed into the node REPL:
//    const greeting = 'Hello ';
//    const name = 'Makers';

//    console.log greeting + name;
//RESULT:
// > const greeting = "Hello ";
//   undefined
// > const name = "Makers";
//   undefined
// > console.log(greeting + name);   // the () was missing
//   Hello Makers
//   undefined
