// Exercise
// 1. Define a function multiply which takes two arguments and return their product.
const multiply = (num1, num2) => {
	return num1 * num2;
};

multiply(2, 5); // to run code in node REPL & it'd look like this:
//     > const multiply = (num1, num2) => {
//     ... return num1 * num2;
//     ... };
//     undefined
//     > multiply(2, 5);
//     10
console.log(multiply(2, 5)); //to see output by running file, node multiply.js

// 2. From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4).
//    You should get the correct result (16).  The add.js & multiply.js files need to be used.

module.exports = multiply;

// To require from another file or the node REPL (ensure the below is // before running it
// in node or it won't work):
//      const multiply = require("./multiply");

//      multiply();

// RESULT (in node):
// I need to require both functions, add & multiply:
//     const add = require('./add');
//	   const multiply = require('./multiply');
// first, I need to get the result of the addition (4+4):
//     add(4, 4);
// then, create a variable to get the multiplication result using the add
// function as the 2nd argument:
//      const result = multiply(2, add(4, 4));
// then, call the variable and we'll get the expected result of 16:
//      result;
//      16
