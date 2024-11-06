// Two methods used on arrays:
// 1. Filter
//    To create a new array by applying a predicate function on existing array's elements.
//    note: a predicate function in JS is a function that returns a boolean value (true or false).
// 2. Map
//    To create a new array by applying a specific operation to the existing array's elements.

// Example:
const names = ["Anna", "Li", "Charlie", "Mary", "Jo"];

// 1. Using a predicate function & 'filter' to get only names shorter than 3 letters:
const isShorterThanThree = (name) => {
	console.log("line 13... " + name);
	if (name.length < 3) {
		return true;
	} else {
		return false;
	}
};

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

console.log(namesShorterThanThreeLetters); // RESULT: [ 'Li', 'Jo' ]
