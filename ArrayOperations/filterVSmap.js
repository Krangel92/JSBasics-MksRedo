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
