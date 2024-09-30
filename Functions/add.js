// Exercise
// 1. Define a function add which takes two arguments and return their sum.
const add = (num1, num2) => {
	return num1 + num2;
};

add(2, 3); // to run code in node REPL & it'd look like this:
//     > const add = (num1, num2) => {
//     ... return num1 + num2;
//     ... };
//     undefined
//     > add(2, 3);
//     5

console.log(add(3, 3)); //to see output by running file, node add.js

// 2. From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4).
//    You should get the correct result (16). The add.js & multiply.js files need to be used.
module.exports = add;

// To require from another file or the node REPL ((ensure the below is // before running it
// in node or it won't work):
//      const add = requirade("./add");

//      add();

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
