// filter() vs map()

// filter()
// Purpose: used to create a new array with only the items that match a specific condition.
// How it works: you give filter() a function, & it runs that function on each item in the array.
//              If the function returns true, the item is kept in the array, if it returns false, the item is skipped.
// Ex:
// You have a list of #s & only want the even ones.
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [ 2, 4 ]

// map()
// Purpose: used to create a new array by transforming each item in the original array.
// How it works: you give map() a function and it runs that function on each item in the array. The
//               result of eah function call is added to the new array.
// Ex:
// You have a list of numbers and want to double each one.
const numbers2 = [1, 2, 3, 4, 5];

const doubleNumbers = numbers2.map((num) => num * 2);
console.log(doubleNumbers); // [ 2, 4, 6, 8, 10 ]

// Summary:

// Use filter() when you want to keep only certain items.
// Use map() when you want to change each item in some way.
