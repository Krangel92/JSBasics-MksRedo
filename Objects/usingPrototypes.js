// Using prototypes to define properties that are shared in all instances of an object.

// In JavaScript, every function has a special property called prototype. When a function is used as a constructor
// to create objects (i.e., when you use the new keyword), the properties and methods defined on the function’s prototype are
// shared by all instances created by that constructor.

// Ex
// If we have a constructor function Car which creates Car objects:
function Car(make, model) {
	this.make = make;
	this.model = model;
}

// This constructor can now be used to create multiple Car objects:
const car1 = new Car("Ford", "Mustang");
const car2 = new Car("Chevrolet", "Camaro");
// car1 and car2 are two separate Car objects, each with its own make and model.

console.log(car1); // RESULT: Car { make: 'Ford', model: 'Mustang' }
console.log(car2); // RESULT: Car { make: 'Chevrolet', model: 'Camaro' }

// If I want all Car objects to also have a color property that’s the same for all cars. Instead of adding color to each car, you add it to Car.prototype:
Car.prototype.color = "red";

// This makes color available to all Car objects. Now, car1.color and car2.color will both show "red"—even though color isn’t directly stored on each object:
console.log(car1.color); // 'red'
console.log(car2.color); // 'red'
