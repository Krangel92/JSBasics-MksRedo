// Challenge 1 (instructions):
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
