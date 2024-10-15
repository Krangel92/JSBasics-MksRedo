// Demo (video) exercises with notes:

// I can create variables & then use them later:
const age = 30;
console.log(age);

const nombre = "Anna";
console.log(nombre);

// I can create a function in node REPL:
//    > const getName = () => {
// 	  ... return "Karla";
//    ... };
//    > getName              // when I don't use the () I only REFER to the function itself as a VALUE,
//     [Function: getName]  // and this is what it shows.

//    > getName();         // when I use (), I DO CALL the function,
//     'Karla'            // and I get the return value.

// I can assign the function, i.e., getName, to a new name (in node REPL):
//     > const anotherGetName = getName;
//      undefined
//     > getName                  // so now, getName and anotherGetName have dif names but they refer to the SAME FUNCTION VALUE.
//      [Function: getName]
//     > anotherGetName
//      [Function: getName]

// This means that if I CALL the anotherGetName function by adding (), I'll get the same return value as getName bc they refer to the same function value (in node REPL):
//    > anotherGetName()
//     'Karla'

// If I assign the function, i.e., getName, to a new name, BUT I DO add the () I do get the return value by just typing the new name without the ():
//   > const returnValue = getName()     // Bc I have/added () here, I am calling the function here (and it's more like a variable instead of another name for the getName function)
//    undefined
//   > returnValue                      // so, it's ok to not add () and I still get the return value of the getName function.
//    'Karla'

//   > returnValue()                  // if I added the (), I get an error bc returnValue is not a function.
//    TypeError: returnValue is not a function

// GIVING A FUNCTION AS AN ARGUMENT - important concept

// Create a function that takes a function as an argument (in node REPL):
//    > const callFunction = (aFunction) => {
//    ... return aFunction;
//    ... }
//    undefined

// If I give the callFunction the getName function, WITHOUT (), as an argument, I am only refering to the getName function as a VALUE:
//    > callFunction(getName);
//     [Function: getName]

// If I give the callFunction the getName function, WITH (), as an argument, I am CALLING the getName function & I'll get the return value:
//    > callFunction(getName());
//     Karla

// Now, create a function that takes a function as an argument BUT the return value is the result of what the given function as argm does (in node REPL):
//   > const executeFunction = (aFunction) => {
//   ... return aFunction();                     // by adding the () here it will return as result whatever 'aFunction' is meant to do bc we are CALLING it.
//   ... }

//   > executeFunction(getName);               // if we give as argm the getName function, we dont need the () in line 62 bc line 59 already calls the getName function & asks for its result to be returned after being executed.
//    'Karla'

//   Summary bullet points:  -> executeFunction(getName)
//      -> executeFunction accepts one argm 'aFunction'
//      -> executeFunction calls 'aFunction()'
//      -> we get the return value of caling 'aFunction()'
//      -> executeFunction returns this value
