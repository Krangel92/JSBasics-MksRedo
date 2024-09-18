//Functions
// () => means a function being created
// The below function is unnamed, known as anonymous function (note: the below doesn't
// print anything when I run the file):
() => {
	console.log("Hi there!");
};

// If I want to use the above funtion I need to give it a name by storing it in a variable:
// this function accepts no arguments:
const printMsg1 = () => {
	console.log("Hi there!");
};

// this function accepts 1 parameter:
const printMsg2 = (message) => {
	console.log(message);
};

// In order to see the message printed to the console, the function must be called like this:
// I can see the below msg by running the file on the terminal with node Functiions.js:
printMsg2("Hi there!");

// To return a function value, we must use keyword 'return', otherwise 'undefined' is returned:
// *I had to write/run the below code in the node REPL as it wouldn't execute by running the file?!
const getName = () => {
	return "Karla";
};

getName(); // returns "Karla"

//when we dont use 'return', when we call it will return 'undefined':
const getName2 = () => {
	"Karla";
};

getName2(); // returns 'undefined'

// NOTE: must use () to execute a function, even if it doesn't take any argmts.

// Exercise:
// 1. What do you think something will be? Have a go at running this code in the REPL:
const returnFour = () => {
	return 4;
};

const something = returnFour;
console.log(something);
//RESULT:
//  [Function: returnFour]
//  undefined

// We get the above bc we made the value of 'something' equal to a function instead of the value returned
// by the function. Needs to be changed as following in order to get 4:
//      const something = returnFour();

// EXPORTING A FUNCTION
//
