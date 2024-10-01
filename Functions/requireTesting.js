// To require a function from a file (after properly exporting the function in that file) -
// it's the same way as when requiring it in the node REPL:

const addizione = require("./add"); // NOTE: the name of the variable does NOT have to be the function name (it's done as a convention for ease).
const multi = require("./multiply"); // in these examples I called them differently on purpose to show it.

console.log(addizione(2, 2)); //to see output by running file, node requireTesting.js
console.log(multi(2, 3));

// Exercise:
// Require and call from this file the functions add and multiply to calculate and print the following: (10 + 10) * (4 + 4).
// You should get the correct result (140). The add.js & multiply.js files need to be used.
const result = multi(addizione(10, 10), addizione(2, 5));
console.log(result);

// RESULT when running the file, node requireTesting:
//   4  - this is from line 7
//   6  - this is from line 8
//   140
