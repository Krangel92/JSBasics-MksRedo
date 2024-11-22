// Exercise 1 (instructions):
// Write some code to get the second promise in the chain to return a new promise that resolves with the length of
// the fruit string instead of simply logging the fruit string. Then, get this third promise to log the fruit string length to the terminal.
// Note: I added lines 11, 13-15 to resolve the ex.

const promiseToGatherFruit = new Promise((resolve, reject) => {
	const fruit = "Pineapple";
	resolve(fruit);
})
	.then((fruit) => {
		// console.log(fruit);    // -> original line b4 changes
		return fruit.length;
	})
	.then((fruitLen) => {
		console.log(fruitLen);
	});

// Exercise 2 (instructions):
// Predict what the output of the console.log(fruitsArray) will be. Write a couple of sentences to explain your logic.
// Answer: I'd get an empty array [] bc lines 22 & 34 are sync, while 24-30 are async, so they'd run first.
// If I wanted to get [ 'Pineapple' ] as a result, I'd need to add lines 30, 32-24.

const fruitsArray = [];

const promiseToGatherFruit2 = new Promise((resolve, reject) => {
	const fruit = "Pineapple";
	resolve(fruit);
}).then((fruit) => {
	fruitsArray.push(fruit);
	// return fruitsArray;
});
// .then((updatedFruitsArray) => {
// 	console.log(updatedFruitsArray);  // -> [ 'Pineapple' ]
// });
console.log(fruitsArray);
