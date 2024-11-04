// Listing Object Properties

// Using a for ... in loop:
const myCar = {
	make: "Ford",
	model: "Mustang",
	year: 1969,
};

function showProps(obj) {
	let result = [];
	for (const i in obj) {
		result.push(obj[i]);
	}
	return result;
}

console.log(showProps(myCar));
