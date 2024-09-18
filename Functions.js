//Functions
// () => means a function being created
// The below function is unnamed, known as anonymous function (note: the below doesn't
// print anything when I run the file):
() => {
	console.log("Hi there!");
};

// If I want to use the above funtion I need to give it a name by storing it in a variable:
// this function accepts no arguments:
const printMsg1 = () => {
	console.log("Hi there!");
};

// this function accepts 1 parameter:
const printMsg2 = (message) => {
	console.log(message);
};

// In order to see the message printed to the console, the function must be called like this:
// I can see the below msg by running the file on the terminal with node Functiions.js:
printMsg2("Hi there!");
