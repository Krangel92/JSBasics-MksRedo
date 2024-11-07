// Exercise
// Part 1.  Create a function that takes a single name and generate the correct message for it.
//          Use Array's map method to generate the list of personalised messages using this function.

const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessageForSingleName = (name) => {
	return `Hi ${name}! 50% off our best candies for you today!`;
};
// console.log(generateMessage("Karla"));
// console.log(generateMessage(["Karla"]));

const generateMessages = (namesArr) => {
	return namesArr.map(generateMessageForSingleName);
};

console.log(generateMessages(names)); // RESULT:
// [
//     'Hi Anna! 50% off our best candies for you today!',
//     'Hi Laura! 50% off our best candies for you today!',
//     'Hi Josh! 50% off our best candies for you today!',
//     'Hi Min! 50% off our best candies for you today!',
//     'Hi Karla! 50% off our best candies for you today!'
//   ]
console.log(generateMessages(["Emanuele", "Luis", "Estefany"])); // RESULT:
// [
//     'Hi Emanuele! 50% off our best candies for you today!',
//     'Hi Luis! 50% off our best candies for you today!',
//     'Hi Estefany! 50% off our best candies for you today!'
//   ]

// Coaches solution:
const generateMessages2 = (namesArr) => {
	return namesArr.map((name) => {
		return `Hi ${name}! 50% off our best candies for you today!`;
	});
};

console.log("LINE 40:");
console.log(generateMessages(names));

// NOTES:
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
