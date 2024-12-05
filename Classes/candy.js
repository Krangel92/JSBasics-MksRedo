// Challenge (instructions)
// Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:
//      > const candy = new Candy('Mars', 4.99);

//      > candy.getName();
//       'Mars'
//      > candy.getPrice();
//       4.99

//      > const basket = new ShoppingBasket();
//      > basket.getTotalPrice();
//       0

//      > basket.addItem(candy);

//      > basket.getTotalPrice();
//       4.99

//      > basket.addItem(new Candy('Skittle', 3.99));
//      > basket.addItem(new Candy('Skittle', 3.99));

//      > basket.getTotalPrice();
//       12.97

class Candy {
	constructor(candyName, price) {
		this.candyName = candyName;
		this.price = price;
	}

	getName() {
		return this.candyName;
	}

	getPrice() {
		return this.price;
	}
}

// const candy1 = new Candy("Twix", 3.5);

// console.log(candy1); // Candy { candyName: 'Twix', price: 3.5 }
// // console.log(candy1.getName()); // Twix
// console.log(candy1.getPrice()); // 3.50
// console.log(candy1.candyName); // Twix
// console.log(candy1.price); // 3.50

module.exports = Candy;

// // In node REPL:

// 		> const candy = require('./candy.js');
// 		 undefined
// 		> const candy1 = new candy ('Mars', 4.99);
// 		 undefined
// 		> candy1
// 		 Candy { candyName: 'Mars', price: 4.99 }
// 		> candy1.getName()
// 		 'Mars'
// 		> candy1.getPrice();
// 		 4.99
