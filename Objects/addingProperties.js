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

console.log(myObj);
// After adding the property, the myObj object would like like this:
// Note: rand holds a random number (like 0.6398914448618778), so this line uses that number as a key.
//      const myObj = {
//          "0.6188896385207898": "A random number is the key here"
//      }

// Object as a Key:
myObj[anotherObj] = "This key is object anotherObj";

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
