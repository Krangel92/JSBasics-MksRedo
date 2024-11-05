// To delete properties from an object using the delete operator.
// Ex:
const myCar = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
};

// deleting the year property:
delete myCar.year;

console.log(myCar); // RESULT: { make: 'Ford', model: 'Mustang' }

// NOTE:
// - If you try to delete a property that doesn’t exist, JS will simply return true, and nothing will change.
// - The delete operator only removes properties from the object itself, not from its prototype, i.e., if a new property is added, the delete operator does NOT de;ete/remove them.

const myCar3 = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
};

const deleteKey = (obj) => {
	let result = {};

	for (const element in obj) {
		// console.log(obj[element]);
		if (obj[element] !== 1969) {
			result[element] = obj[element];
		}
	}
	return result;
};

console.log(deleteKey(myCar3)); // RESULT: { make: 'Ford', model: 'Mustang' }
