// Exercise
// 1. Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether
//    the number is even or odd.
const iteratingNumbers = () => {
	// Doing it w/out putting it inside a function (i.e., lines 5-7) gives the output we want.
	for (let i = 1; i <= 20; i++) {
		if (i % 2 === 0) console.log(i + " is even");
		else console.log(i + " is odd");
	}
};

iteratingNumbers(); // If I put it inside a function (adding lines 4 & 9), I need to call/invoque the function (line 11).
console.log(iteratingNumbers()); // If I want to see it on the console, I need to print it!

// Solving exercise 1. but with a while loop:
let i = 1;

while (i <= 20) {
	if (i % 2 === 0) console.log(i + " is even");
	else console.log(i + " is odd");

	i += 1;
}

// REDOING Exercise - for repetition purposes (but using interpolation)
// For Loop:
for (let x = 0; x <= 20; x++) {
	if (x % 2 === 0) console.log(`${x} is even`);
	else console.log(`${x} is odd`);
}

// While Loop:
let x = 0;

while (x <= 20) {
	if (x % 2 === 0) console.log(`${x} is even`);
	else console.log(`${x} is odd`);

	x += 1;
}
