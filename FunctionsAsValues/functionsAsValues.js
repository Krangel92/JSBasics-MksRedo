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

let newSalary = doubleNumber(1000000);
console.log(newSalary);
