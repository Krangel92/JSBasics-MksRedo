// Exercise
// 1. Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
// 2. Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less.
//    It should make use of the function checkLength written previously.

const numbers = [
	"1763687364",
	"4763687363",
	"7867867862",
	"aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

// 1.
const checkLength = (phoneNumber) => {
	// console.log(phoneNumber);
	if (phoneNumber.length < 10) {
		return true;
	} else {
		return false;
	}
};

checkLength(numbers);

// 2.
// const filterLongNumbers = (phoneNumbers) => {
// 	return phoneNumbers.filter(checkLength);
// };

// console.log(filterLongNumbers(numbers));

const filterLongNumbers = numbers.filter(checkLength);

console.log(filterLongNumbers);
