// Running JS files:
//  - We can either open the node REPL, by typing node on the terminal, & write/execute JS code, OR
//    we can write JS code inside a file with .js extension & run it by typing node + fileName.js in the terminal

// Ex: create a file called hello.js & write a program that logs a greeting msg to the console.
//     by running node hello.js in the terminal, I should see the msgs in quotes:
console.log("Hello - I am a file!!!!!");

console.log("I'm relearning JS!");

// Ex: Run a JavaScript file that logs the result of 2 + 2 in the console:
let sum = 2 + 2;
console.log(sum);

// EXPORTING A FUNCTION
// to use a function outside of the file it is defined in, it needs to be exported
// using 'module.exports' (this is added at the end of the file).
// Ex, if I wanted to export the below hello function, it'll look like this:
const hello = () => {
	console.log("Hello!");
};

module.exports = hello;

// To require from another file or the node REPL:
// *the below only works in the node REPL, how do I use it in another file?
// const hello = require("./hello");

// hello();
