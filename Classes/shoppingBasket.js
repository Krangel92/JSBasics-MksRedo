class ShoppingBasket {
	constructor() {
		this.basket = [];
	}

	addItem(candy) {
		this.basket.push(candy.price);
	}

	getTotalPrice() {
		let total = 0;
		for (let i = 0; i < this.basket.length; i++) {
			total += this.basket[i];
		}
		return total;
	}
}

module.exports = ShoppingBasket;

// In node REPL:

//      > const Candy = require('./candy.js');
//       undefined
//      > const ShoppingBasket = require('./shoppingBasket.js');
//       undefined
//      > const candy = new Candy('Mars', 4.99);
//       undefined
//      > const basket = new ShoppingBasket();
//       undefined
//      > basket.getTotalPrice();
//       0
//      > basket.addItem(candy);
//       undefined
//      > basket.getTotalPrice();
//       4.99
//      > basket.addItem(new Candy('Skittle', 3.99));
//       undefined
//      > basket.addItem(new Candy('Skittle', 3.99));
//       undefined
//      > basket
//       ShoppingBasket { basket: [ 4.99, 3.99, 3.99 ] }
//      > basket.getTotalPrice();
//       12.97
