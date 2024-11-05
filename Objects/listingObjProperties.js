// Listing Object Properties (or keys) of an Object

// There are three main methods to list or traverse the properties of an object:
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
