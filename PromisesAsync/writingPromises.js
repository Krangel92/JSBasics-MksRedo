// To create a promise we need the 'new' keyword, just like when creating intances of a class.
// This is bc promises are an in-built class!

//WRITING A PROMISE:
// const promise = new Promise ()   // -> this is the Promise constructor.

// (argmt1, argmt2 ) => {}         // -> this is the callback function with two arguments of its own passed to the Promise constructor.

// (resolve, reject)              //  -> these are the 2 argumts of the callback function.

const promise = new Promise((reslve, reject) => {});