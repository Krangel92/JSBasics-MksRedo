// Running the same code with node and in the node REPL

// If we type the below code onto the node REPL:
const giveMeTheAnswer = () => {
	return 42;
};

giveMeTheAnswer();
// the REPL will print: 42

// BUT if I try running the above code via running the file (node theAnswer.js)
// NOTHING is printed to the console! why?
// Bc the REPL reads what I type , evaluates it & prints that evaluation to the screen - REPL has
// an auto-print.
// When running the file using node ONLY values & strings will be printed to the terminal
// if console.log() is used - The function is run but nothing is done with the value it returns.

// a possible fix would be to change line 8 to:
console.log(giveMeTheAnswer());

// RESULT now when running file (node theAnswer.js): 42
