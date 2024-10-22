// Exercise

// Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.
// You can use the method forEach to iterate over each element.

// Using forEach() method:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersSum = 0;

numbers.forEach((number) => {
	numbersSum += number;
});
console.log(numbersSum);

// Repeating ex using forEach() for practice:
const numeros = [1, 2, 2];

let sum = 0;

numeros.forEach((numero) => {
	sum += numero;
});
console.log(sum);

// Using FOR LOOP:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;

for (let num = 0; num < nums.length; num++) {
	total += nums[num];
}
console.log(total);

// Explanation or the for loop:
// Initialization: (let num = 0): The loop starts by initializing the variable num to 0, which will act as an INDEX to access elements in the nums array.
// Condition: (num < nums.length): This condition ensures the loop runs as long as num is less than nums.length.
//            nums.length is 10 in this case because there are 10 elements in the array.
//            The loop will stop once num becomes equal to 10 (because array indices go from 0 to 9).
// Increment: (num++): After each iteration, num is incremented by 1 (num++), so the loop will move to the next index in the array on the next iteration.
// Inside the loop, the line total += nums[num]; adds the value of the current array element (at index num) to the total variable.
//     - Inside the loop, the line total += nums[num]; adds the value of the current array element (at index num) to the total variable.
//     - For ex, on the first iteration (num = 0), the value at nums[0] is 1, so total becomes 0 + 1 = 1.
//     - On the second iteration (num = 1), nums[1] is 2, so total becomes 1 + 2 = 3.
//     - This process continues until the loop has added up all the numbers in the array.

// Useful link: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
