// Modern JS syntax was released after 2015.
// Most JS runtime (including Node) are compatible with older syntax versions
// & both syntax can be mixed in the same file.

// 'var' is the legacy keyword to declare a variable -- now it's 'let':
var total = 120;
// modern version:
let total = 120;

// The 'function' keyword can be used to declare functions:
function add(a, b) {
	return a + b;
}
//modern version:
const add = (a, b) => {
	return a + b;
};
// also equivalent to:
var add = function (a, b) {
	return a + b;
};

// NOTE: I should use the modern version, but remember the equivalences
//       when searching online!
