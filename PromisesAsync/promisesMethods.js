// Promises are CLASSES, so they come with their asscociated methods, the most inporatnt ones:
//  .then() and .catch()
// These methods let us build promises chains and handle errors, ex:

const promise1 = new Promise((resolve, reject) => {
	resolve("This Promise will resolve with this success string.");
}).then((resolvedString) => {
	console.log(resolvedString);
});
// in the Terminal: This Promise will resolve with this success string.

const promise2 = new Promise((resolve, reject) => {
	reject("This Promise will be rejected with this error string.");
}).catch((errorString) => {
	console.log(errorString);
});
// in the Terminal: This Promise will be rejected with this error string.

// .then() and .catch() have been called on the promise object above them in the chain follwing this syntax:
//      promise1().then(() => {})
//      promise2().catch(() => {})
// 1. .then() and .catch() take callback functions as argmts.
// 2. The argmt of the callback function is the value the promise in the chain above was ither resolved or rejected with.
// 3. We can perform an operation inside of the callback function. This operation will only run once the promise above in the chain has finished executing.
// 4. .then() handles fulfilled promises (async opeartion was successful), .catch() handles the rejected.
