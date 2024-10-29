// Exercise
// An object is composed of key-value pairs. Those values can be any primitive values such as strings or numbers,
// or they can be more complex things, such as other objects, arrays or event functions.
//      1. Print the value of the city attribute ('London').
//      2. Print the value of the second hobbies value ('exercising').

const person = {
	name: "Karla",
	age: 32,
	address: {
		city: "London",
		postcode: "E1 123",
	},
	hobbies: ["flamenco", "exercising", "hiking"],
};

// 1.
console.log(person.address.city);
console.log(person.address.postcode);

// 2.
console.log(person.hobbies[1]);
console.log(person.hobbies[0]);
