// Challenge
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
