// This is a function. It has no name and no parameters:
() => {
	return 123;
};

// This is a function with one parameter, but still no name:
(n) => 2 * n;
// To see that it's a function (we get [Function (anonymous)] printed to the console):
console.log((n) => 2 * n);

// If I take above function & assign it to a variable, I get a named function (I now get [Function: doubleNumber] is printed to the console):
const doubleNumber = (n) => 2 * n;
console.log(doubleNumber);

// Let's assign our named function to another variable (I get [Function: doubleNumber] is printed to the console):
const simpleCalculation = doubleNumber;
console.log(simpleCalculation);

// If we call the doubleNumber function, newSalary will be the value returned by that function (i.e., 2 * 1000000 so result is 2000000):
let newSalary = doubleNumber(1000000);
console.log(newSalary);

// Since functions are VALUES, they can be passed to another function as an ARGUMENT & be used as the RETURN VALUE of a function:
const uppercaseMessage = (message) => {
	return message.toUpperCase();
};
// The below function accepts as ARGUMENTS a string message & a function. It then calls the given function to do its job:
const transform = (message, transformFunction) => {
	return transformFunction(message);
};

transform("hello", uppercaseMessage);
console.log(transform("hello", uppercaseMessage)); // to see the result on the console I need to console.log line 32
//RESULT:
HELLO;
