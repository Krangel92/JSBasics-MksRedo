// Exercise

// Create an array of a few names of people you know and:
//   1. Print the array's length.
//   2. Print the second name of the array.
//   3. Create a new array by adding a new name to the existing array.

const peopleNames = ["Karla", "Emanuele", "Luis", "Estefany"];

// 1.
console.log(peopleNames.length); // RESULT: 4

// 2.
console.log(peopleNames[1]); //RESULT: Emanuele

// 3.
const newPeopleNames = peopleNames.concat("Jorge");
console.log(newPeopleNames); // RESULT: [ 'Karla', 'Emanuele', 'Luis', 'Estefany', 'Jorge' ]
