// Challenge
// You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as 1274.
// Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small program to do this.
// To complete this exercise you will have to find out:
//      - how to add elements to an array with the .concat method
//      - how to get the length of an array
// 1. Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.
// 2. Now, make sure this function does not add the number if the array's length is already 5 or greater — it should just return the array untouched in that case.

// 1.
const addToBatch = (myArray, num) => {
	return myArray.concat(num);
};

console.log(addToBatch([1], 3)); // RESULT: [1, 3]

// 2.
const addToBatch2 = (myArray, num) => {
	if (myArray.length < 5) {
		return myArray.concat(num);
	} else {
		return myArray;
	}
};

console.log(addToBatch2([1, 2, 3], 4)); // RESULT:  [ 1, 2, 3, 4 ]
console.log(addToBatch2([], 8)); // RESULT:  [ 8 ]
console.log(addToBatch2([1, 2, 3, 4, 5, 6], 7)); // RESULT:  [ 1, 2, 3, 4, 5, 6 ]
console.log(addToBatch2([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // RESULT:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
