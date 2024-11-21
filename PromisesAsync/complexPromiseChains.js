// Example:
const promiseToCountSheep = new Promise((resolve, reject) => {
	const fulfilled = true;
	const sheep = ["Bramble", "Daffodil", "Buttercup"];

	// First promise:
	if (fulfilled) {
		resolve(sheep);
	} else {
		reject("Did not find any sheep!");
	}
})
	// Second .then() promise:
	.then((sheepData) => {
		return sheepData.length;
	})
	// Third .then() promise:
	.then((sheepCount) => {
		console.log(sheepCount);
	})
	// Second .catch() promise:
	.catch((errorStr) => {
		console.log(errorStr);
	});

// NOTES
// If 'fulfileld' is set to true, the .then() blocks execute.
// Then, the second .then() promise on the chain performs the operation (this promise will ONLY run once the promise above has resolved!).
// After that, the third .then() promise on the chain prints the data on the console.
// Note that only the first promise needs to use resolve/reject functions.

// If 'fulfileld' is set to false, the .catch() blocks execute.
// The reject function would have been called and the programme would've skipped the .then() blocks.
