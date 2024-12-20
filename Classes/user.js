// Exercise
// Implement a class to represent a user account. We should be able to use this class like this:
//       > const user = new User('Uma');

//       > user.getName();
//       'Uma'

//      > user.getIntroduction();
//       'Hi, my name is Uma'
// You will have to:
//    - declare a class and its methods.
//    - Initialise an attribute within the constructor special method.
// Require the file into the node REPL to verify the class is working.

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.nationality = "mexican"; // by not passing 'nationality' as argmt, it means that all instances of a class/objects I create will have nationality: 'mexican' as key-value
	}
	getName() {
		return this.name;
	}

	getIntroduction() {
		return `Hi, my name is ${this.getName()}`; // OR:  `Hi, my name is ${this.name}`
	}

	getNationality() {
		return this.nationality;
	}
}

// RUNNING THE FILE (not using the node REPL):
// const user1 = new User("Karla");

// console.log(user1.getName()); // Karla
// console.log(user1.getIntroduction()); // Hi, my name is Karla

// Export the class:
module.exports = User;

// Launch node REPL and require the class:
//      > const User = require('./user.js');
//       undefined
//      > const user1 = new User('Karla');
//       undefined
//      > user1.getName()
//       'Karla'
//      > user1.getIntroduction()
//       'Hi, my name is Karla'
