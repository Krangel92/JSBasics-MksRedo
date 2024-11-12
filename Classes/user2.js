class User {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	getIntroduction() {
		return `Hi, my name is ${this.name}`;
	}
}

// Creating a new instance of the class & invocking it's methods by running the file:

// const user1 = new User("Gorda");

// console.log(user1.getName());
// console.log(user1.getIntroduction());

module.exports = User;

// In node REPL:

//      > const userClass = require('./user2.js');     // TO REQUIRE THE CLASS
//       undefined
//      > const user3 = new userClass('Karla');       // TO CREATE A NEW INSTACE OF THE CLASS, SO A NEW OBJECT!
//       undefined
//      > user3                                       // TO SEE THE NEW OBJECT CREATED
//       User { name: 'Karla' }
//      > user3.getName()                             // TO INVOKE THE getName() ON THE NEW OBJECT CREATED
//       'Karla'
//      > user3.getIntroduction()                    // TO INVOKE THE getIntroduction() ON THE NEW OBJECT CREATED
//       'Hi, my name is Karla'
//      > user3.name                                // TO ACESS A KEY'S VALUE OF THE NEW OBJECT CREATED
//       'Karla'
