// Example Exercises:

// Assign an array to the constant numbers:
const numbers = [1, 2, 3, 4];

// Add one element & return a new array:
const newNumbers = numbers.concat(5);

console.log(newNumbers); // RESULT: [ 1, 2, 3, 4, 5 ] -> The concat() method of Array instances is used to merge two or more arrays.
//   This method does not change the existing arrays, but instead returns a new array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// Access elemts with []:
console.log(numbers[0]); // RESULT: 1
console.log(numbers[3]); // RESULT: 4

// Print numbers:
console.log(numbers); // RESULT: [1, 2, 3, 4]

// Print newNumbers:
console.log(newNumbers); // RESULT: [1, 2, 3, 4, 5]

// Length of the constant numbers:
console.log(numbers.length); // RESULT: 4

// Length of the constant newNumbers:
console.log(newNumbers.length); // RESULT: 5

// Loop through the array and execute code for each element:
numbers.forEach((number) => {
	console.log(number);
});
// RESULT:
1;
2;
3;
4;

newNumbers.forEach((number) => {
	console.log(number);
});
// RESULT:
1;
2;
3;
4;
5;
