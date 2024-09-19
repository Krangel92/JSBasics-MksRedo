// Exercise
// 1. Define a sayHello function that returns the string 'Hello'. Require and call that function in node:

const sayHello = () => {
	return "Hello";
};

module.exports = sayHello;

// RESULT:
// I opened the node REPL & typed below:
//    > const sayHello = require('./sayHello');
//    undefined
//    > sayHello();
//    'Hello'

// 2. Debugging question
// You are trying to call the sayHello function & print its result using console.log, in the
// node REPL but it doesn't work, why & fix it:
console.log(sayHello); // this returns this: [Function: sayHello]
//                    undefined
sayHello(); // this is the right way of calling a function to return its result, i.e. 'Hello'
