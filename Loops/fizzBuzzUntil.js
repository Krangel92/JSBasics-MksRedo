// Exercise
// This challenge builds on the previous one, where you defined a fizzBuzz function.
//  1. Write a function fizzbuzzUntil that accepts a number. This function should use a
//     loop to loop through all numbers from 1 to the given one, call the fizzBuzz function
//     for the current number and print the result.

//with FOR loop:
const fizzBuzzEx1 = require("../Conditionals/fizzBuzz");

const fizzbuzzUntil = (num) => {
	for (let i = 1; i <= num; i++) console.log(fizzBuzzEx1(i));
};

fizzbuzzUntil(10);

// with WHILE loop:
// const fizzbuzzUntil2 = (num) => {
// 	let x = 0;

// 	while (x <= num) {
// 		console.log(fizzBuzzEx1(x));

// 		x += 1;
// 	}
// };

// fizzbuzzUntil2(10);
