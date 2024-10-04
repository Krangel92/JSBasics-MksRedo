// Loops in JS are the same as in other languagues.

// Example - for loop:
// To get all numbers from 0 to 10:

// 1. The below works by just using console.log bc i'm not returning a value, I'm simply printing the
//    value of i to the console when running the file, node introLoops.js
for (let i = 0; i <= 10; i++) {
	console.log(i);
	// return i;
}

// 2. If to the above I changed console.log to 'return' it doesn't work bc the return value within a
//    loop is NOT inside a function.
//    So, extra logic needs to be added:     ---- I need to revisit bc the below only works if line 19 is 'console.log' & NOT 'return'
const loops = () => {
	// let addNumbers = []; // variable of an empty array to hold values/numbers
	for (let i = 0; i <= 10; i++) {
		console.log(i);
		// addNumbers.push(i); // adds each value/number of 'i' to the array
	}
	// return addNumbers; // returns array after finishing the loop. Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

loops();
// console.log(loops());

// Example - while loop:
// 2. Now a while loop also getting all numbers from 0 to 10:
let x = 0;

while (x <= 10) {
	console.log(x);

	x += 1;
}
