// Dot Notation vs. Bracket Notation:
// Dot Notation: (e.g., myObj.type) only works when the property name is a valid JS identifier (e.g., no spaces, no starting numbers)
// Bracket notation: (e.g., myObj["date created"]) is flexible & allows any JS string, variable or expressions as property names.

// Examples:
// myObj is an empty object & we have some variables (str, rand and anotherObj) which we'll use to set keys:
const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Creating Properties with Different Types of Keys:

// Dot Notation Ex:
myObj.type = "Dot syntax for a key named type";

console.log(myObj);
// After adding the property, the myObj object would like like this:
//      const myObj = {
//          type: "Dot syntax for a key named type"
//      };

// Bracket Notation Ex:
myObj["date created"] = "This key has a space";

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note that bc "date created" has a space I can't write it w/out "" - When an object property name contains spaces, special characters
// or starts w/ a number we MUST use ""
//      const myObj = {
//          "date created": "This key has a space"
//      };
