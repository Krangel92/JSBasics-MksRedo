// NOTE: using the strict equality operator '===' (instead of loose equality operator '==') can prevent some bugs AND it's
// viewed as one of the best practices in JS - use '===' when doing comparisons.

// The strict equality operator '===' is better bc:

// Prevents Type Coercion:
// - '==' performs type coercion, meaning it tries to convert operands to the same type before comparing them.
//    This can lead to unexpected results.
// - '===' does NOT do type coercion. It compares both, the value & the type of the operands.
//   This makes code more predictable & less prone to errors caused by type conversions.

// More Accurate Comparison:
// - By comparing both, value & type, '===' does more accurate comparison.
//   This is particularly important when dealing with values that can be falsy (like 0, flase, null or empty string '').

// Improved Code Readability & Maintainability:
// - '===' explicitly communicates your intention to perform a strict comparison, making code more readable & undertandable.
// - Helps maintaining codebase as it reduces potential bugs & unexpected type conversions.

// Example:
console.log(0 == false); // true (bc of type coercion)
console.log(0 === false); // false (bc of strict comparison)

console.log("0" == 0); // true (bc of type coercion)
console.log("0" === 0); // false (bc of strict comparison)

// Exercise:
// Debug the following code. When calling this function, something doesn't work as expected. What fix can you suggest to solve the problem?
const isValidLength = (phoneNumber) => {
	const validLength = 11;
	if (phoneNumber.length == validLength) {
		true;
	} else {
		false;
	}
};

// The result when running it in node should be (if I want to require the function from a file, remember to export it!):
//   > isValidLength('00');
//     false
//   > isValidLength('00112233445');
//     true

// The above code currently returns 'undefined' when the function is called bc it is NOT returning anything.
// Also, the strict equality operator is better to avoid bugs due to different data types.

// RESULT after function is fixed:
// const isValidLength = (phoneNumber) => {
// 	const validLength = 11;
// 	if (phoneNumber.length === validLength) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
