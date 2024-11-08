// INTRO

// Classes in JS are declared with methods, and perhaps attributes, and can be instantiated when creating instances.
// EX:

class Rectangle {
	// a constructor, to give initial arguments:
	constructor(height, width) {
		// we can define attributes stored on the instance with 'this':
		this.height = height;
		this.width = width;
	}

	// a method:
	getArea() {
		return this.height * this.width;
	}
}

// Export the class:
module.exports = Rectangle;

// Launch node REPL and reuire the class:
//    > const Rectangle = require('./classIntro.js');

// Use it to create new instances:
//    > const rect = new Rectangle(4, 10);

//    > rect.getArea();
//      40

// EXPORTING CLASSES
