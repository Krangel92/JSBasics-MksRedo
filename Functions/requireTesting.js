const addizione = require("./add");
const multi = require("./multiply");

console.log(addizione(2, 2));
console.log(multi(2, 3));

const result = multi(addizione(10, 10), addizione(2, 5));
console.log(result);
