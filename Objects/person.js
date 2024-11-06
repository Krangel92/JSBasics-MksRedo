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
console.log(person.address.city); // London
console.log(person.address.postcode); // E1 123

// 2.
console.log(person.hobbies[1]); // exercising
console.log(person.hobbies[0]); // flamenco

// Same ex for repetition purposes:
const person2 = {
	name: "Emanuele",
	age: 36,
	address: {
		city: "London",
		postcode: "E 123",
	},
	hobbies: ["ping pong", "coding", "exercise"],
};

console.log(person2.address.city); // London
console.log(person2.address["postcode"]); // E 123

console.log(person2.hobbies[1]); // coding
console.log(person2["hobbies"]); // [ 'ping pong', 'coding', 'exercise' ]
console.log(person2["hobbies"][0]); // ping pong
