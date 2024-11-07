// Exercise
// Part 1. Declare a function checkLength that takes a phone number (as a string) as argument,
//         and returns true if this phone number contains 10 characters or less.

const numbers = [
	"1763687364",
	"4763687363",
	"7867867862",
	"aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

// 1. // I'll pass a single phone number as a string
const checkLength = (phoneNumber) => {
	//console.log(phoneNumber);
	if (phoneNumber.length <= 10) {
		return true;
	} else {
		return false;
	}
};

// Part 2. Now declare a function filterLongNumbers that takes an array of phone numbers.
//         This function should return only numbers that contain 10 characters or less.
//         It should make use of the function checkLength written previously.

const filterLongNumbers = (phoneNumbersArr) => {
	return phoneNumbersArr.filter(checkLength); // filter() here takes the array (passed as argm), applies the function (i.e., checkLength) to each element & keeps those elem that pass
}; // 											   the condition of the function. Once it is done checking all the elem in the array, it then returns a new array ONLY with the elem that passed.

console.log(filterLongNumbers(numbers)); // RESULT: [ '1763687364', '4763687363', '7867867862' ]

// NOTE:
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// the filter() method does not change the original array.
