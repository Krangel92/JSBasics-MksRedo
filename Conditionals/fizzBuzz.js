// Exercise:
// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a
// number as argument, and then either:

//   - Return "Fizz" if this number is divisible by 3.
//   - Return "Buzz" if this number is divisible by 5.
//   - Return "FizzBuzz" if this number is divisible by both 5 and 3.
//   - Otherwise, Return the number itself.

const fizzBuzz = (num) => {
	if (num % 3 === 0 && num % 5 === 0) {
		return "FizzBuzz";
	} else if (num % 3 === 0) {
		return "Fizz";
	} else if (num % 5 === 0) {
		return "Buzz";
	} else {
		return num;
	}
};

// to run code in node REPL:
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(8);
fizzBuzz(15);
fizzBuzz(18);
fizzBuzz(20);

// //to see output by running file, node fizzBuzz.js
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
console.log(fizzBuzz(18));
console.log(fizzBuzz(20));

// export it, to be able to use it /require it from outside this file..
module.exports = fizzBuzz;
