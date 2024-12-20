// Challenge
//  1. Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
//  2. Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
//  3. Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument.
//     This function should only rely on calling the function passed in second argument, not declare a string by itself.
//  4. Use the function notify with the two previous functions to:
//      - send an email to hello@makers.tech.test and get the expected output.
//      - send a text to +10000000000 and get the expected output.

// 1.
const notifyByEmail = (email) => {
	return `Email sent to: ${email}`;
};

console.log(notifyByEmail("k@gmail.com")); // to check if my notifyByEmail function works as it should

// 2.
const notifyByText = (phoneNumber) => {
	return `Text sent to: ${phoneNumber}`;
};

console.log(notifyByText("786386768")); // to check if my notifyByText function works as it should

// 3.
const notify = (contactInfo, aFunction) => {
	return aFunction(contactInfo);
};

// 4.
console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));
