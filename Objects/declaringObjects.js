// Two ways of declaring
// Way #1:
const person = {
	name: "Karla",
	age: 32,
	Ethnicity: "Latina",
};

// Way #2:
const bankAccount = {
	accountNumber: 376782676,
	accountSortCode: 9999999,

	getBalance: () => {
		return 100;
		// console.log(100);
	},
};

console.log(bankAccount.getBalance()); // 100
// bankAccount.getBalance();

// NOTE:
// This is useful as a key-value data structure, or when you need a single, placeholder object (when mocking in unit tests).
// The other way is to create objects from a class so they all have the same "blueprint" of attributes & methods.
