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

// 3. Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah')
// displays a personalised message:
const sayHello2 = (name) => {
	return "Hello " + name;
};

sayHello2("Sarah");

// RESULT with node REPL:
//   > const sayHello2 = (name) => {
//   ... return "Hello " + name + "!";
//   ... };
//   undefined
//   > sayHello2("Sarah");
//   'Hello Sarah!'

// to see the output by running the file I need to have the below in the file:
console.log(sayHello2("Sarah"));

// 4. What's another way to write the sayHello function w/out using + to concatenate:
// NOTE: Using template literals allow for string interpolation.
const sayHello3 = (nombre) => {
	return `Hello ${nombre}`;
};
console.log(sayHello3("Karla"));

// RESULT when running the file:
// 'Hello Karla'
