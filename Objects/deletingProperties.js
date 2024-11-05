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
