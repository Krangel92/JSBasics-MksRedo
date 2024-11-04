// Example
// create an object named myCar with following properties:
const myCar = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
};

// Accessing properties:
// Dot notations:
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

// Bracket notation:
console.log(myCar["make"]);
console.log(myCar["model"]);
console.log(myCar["year"]);

// Accessing any property dynamically
// how you can use a variable to dynamically select which property of an object to access or modify, rather than hardcoding the property name.
// Ex (using the myCar object above):

// Start with the property name in a variable:
let propertyName = "make";
// Use the variable to set the property value:
myCar[propertyName] = "Ford";
// Now change the property name to something else:
propertyName = "model";
myCar[propertyName] = "Escape";

// log the object to see final RESULT:
console.log(myCar); // { make: 'Ford', model: 'Escape', year: 1969 }

// Key Learnings
// Directly Accessing Properties
//    - Usually, to access or change a property on an obj we use dot notation.
//    - But with dot notation we need to name exact name in advance, e.g., make, model, etc.

// Using bracket notation for dynamic access
//    - bracket not allows to access properties dynamically by using a variable.
//    - Rather than hardcoding "make" and "model", we can assign these names to propertyName:
//       	let propertyName = "make";
// 			myCar[propertyName] = "Ford";
//    - Since propertyName holds "make", myCar[propertyName] is the same as myCar.make.

// Changing the Variable to Change the Property Accessed:
// 	  - By updating the value of propertyName, you’re essentially pointing to a different property of myCar:
//       	propertyName = "model";
//			myCar[propertyName] = "Mustang";
//    - Now propertyName is "model", so myCar[propertyName] refers to myCar.model.

// NOTE: this technique is useful when:
// 	1. You don’t know in advance which property needs to be accessed or updated.
//  2. The property name might come from user input, an external source, or some condition in your code.
