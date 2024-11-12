// Exercise

// Given the following array of User instances (the class from the previous user.js exercise):
// const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

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
	constructor(users) {
		this.users = users;
	}
	count() {
		return this.users.length;
	}
}

module.exports = UserBase;
