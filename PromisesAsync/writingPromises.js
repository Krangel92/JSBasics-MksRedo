// To create a promise we need the 'new' keyword, just like when creating intances of a class.
// This is bc promises are an in-built class!

//WRITING A PROMISE:
// const promise = new Promise ()   // -> this is the Promise constructor.

// (argmt1, argmt2 ) => {}         // -> this is the callback function with two arguments of its own passed to the Promise constructor.

// (resolve, reject)              //  -> these are the 2 argumts of the callback function.

const promise = new Promise((resolve, reject) => {});

// resolve and reject each return a new promise, starting a promises chain.
// Promises chains let you write code that will execute only once a particular asynchronous operation has ran, successfully or unsuccessfully (i.e., fulfilled or rejected).

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
