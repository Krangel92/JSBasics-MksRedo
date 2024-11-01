// Dot Notation vs. Bracket Notation:
// Dot Notation: (e.g., myObj.type) only works when the property name is a valid JS identifier (e.g., no spaces, no starting numbers)
// Bracket notation: (e.g., myObj["date created"]) is flexible & allows any JS string, variable or expressions as property names.

// Examples:
// myObj is an empty object & we have some variables (str, rand and anotherObj) which we'll use to set keys:
const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};
const anotherObj2 = {};

// Creating Properties with Different Types of Keys:

// Dot Notation Ex:
myObj.type = "Dot syntax for a key named type";

console.log(myObj);
// After adding the property, the myObj object would like like this:
//      const myObj = {
//          type: "Dot syntax for a key named type"
//      };

// Bracket Notation Ex (key with sapaces):
myObj["date created"] = "This key has a space";

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note that bc "date created" has a space I can't write it w/out "" - When an object property name contains spaces, special characters
// or starts w/ a number we MUST use ""
//      const myObj = {
//          "date created": "This key has a space"
//      };

// Key from a Variable:
myObj[str] = "This key is in variable str";

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note:  str is a variable holding the string "myString", so this creates a property with the name "myString" in myObj.
//    const myObj = {
//          myString: "This key is in variable str"
//    };

// Random Number Key:
myObj[rand] = "A random number is the key here";
myObj["0.6188896385207898"] = "A number is the key here";
myObj[123] = "NUM";

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note: rand holds a random number (like 0.6398914448618778), so this line uses that number as a key.
//      const myObj = {
//          "0.6188896385207898": "A random number is the key here"
//      }

// Object as a Key:
myObj[anotherObj] = "This key is object anotherObj";
myObj[anotherObj2] = "This key is object anotherObj 2"; // Note: anotherObj2 overrides anotherObj.

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note: anotherObj is an object, not a string or number. JavaScript automatically calls anotherObj.toString(),
//       converting the object to "[object Object]", and uses that as the key name.
//      const myObj = {
//          "[object Object]": "This key is object anotherObj"
//      };

// Empty String as a Key:
myObj[""] = "This key is an empty string";

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note: the key is an empty string ""
//      const myObj = {
//          "": "This key is an empty string"
//      };

// INSPECTING THE OBJECT:
//Now that I've added all the above properties, if I log myObj I'll see the object with all key-value pairs:
console.log(myObj);
// RESULT:
// {
//     '123': 'NUM',
//     type: 'Dot syntax for a key named type',
//     'date created': 'This key has a space',
//     myString: 'This key is in variable str',
//     '0.2852746010041334': 'A random number is the key here',  // using rand will always give me a random #, i.e., this # will always be different.
//     '0.6188896385207898': 'A number is the key here',
//     '[object Object]': 'This key is object anotherObj 2',
//     '': 'This key is an empty string'
//   }

//ACCESSING PROPERTIES:
console.log(myObj.type); // RESULT: 'Dot syntax for a key named type'
console.log(myObj["date created"]); // RESULT: 'This key has a space'
console.log(myObj.myString); // RESULT: 'This key is in variable str'
console.log(myObj["0.6188896385207898"]); // RESULT: 'A number is the key here'
console.log(myObj[123]); // RESULT: 'NUM'
console.log(myObj["[object Object]"]); // RESULT: 'This key is object anotherObj 2'
console.log(myObj["[object Object]"]); // RESULT: 'This key is object anotherObj 2'
console.log(myObj[""]); // RESULT: 'This key is an empty string'
