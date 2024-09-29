// Conditionals work the ame as in other languages but we need:
//  - Brackets () to enclose the condition
//  - Curly braces {} to enclose the 'body' executed following the condition.
// Example:
// const a = getSomeValue();

if (a === 10) {
	// do xyz
} else if (a === 20) {
	// do something elses
} else {
	// do x
}

// Exercise:
// 1. Complete the following using:
//     -  if, else if and else to write conditionals.
//     -  the strict equality operator === to compare values.
//    Define a function getNumberSign that takes a number and returns either
//   'zero', 'positive' or 'negative' depending on its sign:
const getNumberSign = (num) => {
	if (num > 0) {
		return "positive";
	} else if (num === 0) {
		return "zero";
	} else if (num < 0) {
		return "negative";
	}
};

getNumberSign(3); //calling funtion like this will only work in node REPL
console.log(getNumberSign(3)); // Running the file 'node Conditional.js' (make sure lines 7-13 are // or running the file won't work)
