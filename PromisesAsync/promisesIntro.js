// JS is a single-theaded language.
//  - This means it can only run one thing at a time & can only start executing the next operation in the programme
//    once the 1st task has completed.
// JS is used in web browsers that would need to run many operations all at once, and some of these operations
//  will take an unpredictable amount of time as we don't know how long the servers will take to send the response.
// This would cause navigating the internet very slow!

// Asynchronous programming
//  - Is a technique that will let you run other tasks while long-running tasks execute, and avoid blocking your main
//    thread of execution with tasks that may take a long time to run.
// Note: all synchronous tasks will be executed while we wait for the asynchronous task to execute of the side. Only
//       once all sync tasks have been completed, the asyn operations finish executing.

// PROMISES
// - Promises are used to handle the asynchronicity problem & control the execution flow.
// - Promises are objects, like containers of future data. There are 3 stages:
//    1. Fulfilled: synchronous operation completed successfully (data requested from server came back w/ no issues).
//    2. Rejected: asynchronous operation failed (you sent invalid req to server & got an error response).
//    3. Pending: Promise has yet to to be either rejected or fulfilled.
