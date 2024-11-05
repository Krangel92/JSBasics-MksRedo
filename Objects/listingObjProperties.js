// Listing Object Properties (or keys) of an Object

// There are three main methods to list the properties of an object:
// 		for...in Loop
// 		Object.keys()
// 		Object.getOwnPropertyNames()

// Using a for...in loop:
const myCar = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
};

const showProps = (obj) => {
	let result = []; // Note that this should be outside of the for loop!

	for (const i in obj) {
		// for every element/key in obj (i.e., in the myCar object)
		result.push(obj[i]); // push/add the value of that element/key into the result []
	}
	return result; // Note that this should be outside of the for loop!
};

console.log(showProps(myCar)); // RESULT: [ 'Ford', 'Mustang', 1969 ]   - These are the values of all the keys/properties!
// 								  If i changed line 20 to result.push(i); the RESULT would be: [ 'make', 'model', 'year' ]  - The keys/properties!
//NOTE: the for...in loop iterates over all properties of an object. If other properties are added to the object, it DOES include them in the iteration & result!

// Using Object.keys():
const keys = Object.keys(myCar); // Object.keys lists the object's properties/keys
console.log(keys); // RESULT: [ 'make', 'model', 'year' ]
// NOTE: Object.keys returns an [] of the objects properties/ keys. If other properties are added to the object, Object.keys does NOT include them in the returned array!

// Using Object.getOwnPropertyNames():
const allProps = Object.getOwnPropertyNames(myCar);
console.log(allProps); // RESULT: [ 'make', 'model', 'year' ]
// NOTE: Object.getOwnPropertyNames() returns an array of all the object’s own properties. If other properties are added to the object, it DOES include them in the returned array!
