// Challenge

// Each customer should have a specific discount.
// The list I am given is an array of objects:
const namesAndDiscounts = [
	{ name: "Anna", discount: 50 },
	{ name: "Laura", discount: 40 },
	{ name: "Josh", discount: 30 },
	{ name: "Min", discount: 50 },
	{ name: "Karla", discount: 60 },
];

// Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.
// You'll have to:
//    - use Array's map method again.
//    - access the properties of an object as seen previously.

const generateMessage = (namesArr) => {
	return namesArr.map((name) => {
		return `Hi ${name.name}! ${name.discount}% off our best candies for you today!`; // another way to access properties: `Hi ${name["name"]}! ${name["discount"]}% off our best candies for you today!`
	});
};

console.log(generateMessage(namesAndDiscounts));
