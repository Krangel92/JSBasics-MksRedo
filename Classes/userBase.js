// Exercise

// Given the following array of User instances (the class from the previous user.js exercise):
// const usersArr = [new User("Uma"), new User("Josh"), new User("Ollie")];

// We'd now like to have a class UserBase that behaves like this:
//      > const userBase = new UserBase(users);

//      > userBase.count();
//       3

//      > userBase.getNames();
//       [ 'Uma', 'Josh', 'Ollie' ]

//      > userBase.getIntroductions();
//       [
//          'Hi, my name is Uma',
//          'Hi, my name is Josh',
//          'Hi, my name is Ollie'
//      ]
// To complete it:
//  - declare a new UserBase class and its methods.
//  - use what you've previous learned on working with arrays, like the map method.
//  - call methods from the User class.
// Require the two classes into the node REPL to verify it's working.

class UserBase {
	constructor(usersArr) {
		this.users = usersArr;
	}
	count() {
		return this.users.length;
	}

	getNames() {
		return this.users.map((user) => user.getName());
	}

	getIntroductions() {
		return this.users.map((user) => user.getIntroduction());
	}
}

module.exports = UserBase;

// In node REPL:

// 		> const userClass = require('./user2.js');							// TO REQUIRE THE User CLASS
// 		 undefined
// 		> const userBaseClass = require('./userBase.js');					// TO REQUIRE THE UserBase CLASS
// 		 undefined
// 		> userClass															// TO SEE THIS IS THE User CLASS
//  	 [class User]
// 		> userBaseClass														// TO SEE THIS IS THE UserBase CLASS
// 		 [class UserBase]

// 		> const usersArr1 = [new userClass("Uma"), new userClass("Josh"), new userClass("Ollie")];     // TO CREATE A VARIABLE (AN ARRAY OF NEW USERS)
// 		 undefined
// 		> usersArr1
// 		 [ User { name: 'Uma' }, User { name: 'Josh' }, User { name: 'Ollie' } ]					 // TO SEE THE CONTENT OF THE VARIABLE CREATED

// 		> const userBase2 = new userBaseClass(usersArr1);					 // TO CREATE A NEW INSTACE OF THE CLASS, SO A NEW OBJECT!
// 		 undefined
// 		> userBase2															// TO SEE THE NEW OBJECT CREATED
// 		 UserBase {
//   		users: [
//     			User { name: 'Uma' },
//     			User { name: 'Josh' },
//     			User { name: 'Ollie' }
//   			]
// 			}
// 		> userBase2.count()													// TO INVOKE THE count() ON THE NEW OBJECT CREATED
// 		 3
// 		> userBase2.getNames()												// TO INVOKE THE getNames() ON THE NEW OBJECT CREATED
// 		 [ 'Uma', 'Josh', 'Ollie' ]
// 		> userBase2.getIntroductions()										// TO INVOKE THE getIntroductions() ON THE NEW OBJECT CREATED
// 		 [ 'Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie' ]
// 		> userBase2.users[name[1]]										   // HOW DO I ACCESS EACH USER NAME IN THE OBJECT  ????
// 		 Uncaught ReferenceError: name is not defined
