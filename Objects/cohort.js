// Challenge
// 1. Declare an object cohort that has the following properties:
//      - a string name (e.g 'May2022')
//      - a number id (e.g 1234)
//      - an array of student names
// 2. Declare a function that accepts that object as argument and print a message with the following structure:
//      <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

// 1.
const cohort = {
	name: "May2024",
	id: 1234,
	students: ["Karla", "Matt", "George", "Tara"],
};

// 2.
const cohortFunction = (object) => {
	return `${object.id} - ${object.name} - ${object.students.length} students in this cohort`;
};

// Pass the cohort object to the function:
console.log(cohortFunction(cohort));

// RESULT:
//      1234 - May2024 - 4 students in this cohort

// NOTE:
// The cohortFunction takes an argument object and accesses its properties.
// The cohort object is created outside the function and passed as an argument when calling cohortFunction.
