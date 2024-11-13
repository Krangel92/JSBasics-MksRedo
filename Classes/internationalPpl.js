class InternationalPeople {
	constructor(name, age, country) {
		this.name = name;
		this.age = age;
		this.country = country;
	}

	getCountry() {
		return this.country;
	}

	getIntro() {
		return `My name is ${this.name}, I'm ${this.age} and I live in ${this.country}`;
	}
}

module.exports = InternationalPeople;

// In node REPL:

//      > const intPpl = require('./internationalPpl.js');      // TO REQUIRE THE CLASS
//       undefined
//      > intPpl                                                // TO SEE THAT intPpl IS THE InternationalPeople class
//       [class InternationalPeople]
//      > const intPerson1 = new intPpl("Karla", 32, "UK");     // TO CREATE A NEW INSTACE OF THE CLASS, SO A NEW OBJECT!
//       undefined
//      > intPerson1                                             // TO SEE THE NEW OBJECT CREATED
//       InternationalPeople { name: 'Karla', age: 32, country: 'UK' }
//      > intPerson1.getCountry()                               // TO INVOKE THE getCountry() ON THE NEW OBJECT CREATED
//       'UK'
//      > intPerson1.getIntro()                                 // TO INVOKE THE getIntro() ON THE NEW OBJECT CREATED
//       "My name is Karla, I'm 32 and I live in UK"
//      > intPerson1.name                                       // TO ACESS A KEY'S VALUE OF THE NEW OBJECT CREATED
//       'Karla'
//      > intPerson1.age                                        // TO ACESS A KEY'S VALUE OF THE NEW OBJECT CREATED
//       32
//      > intPerson1.country                                    // TO ACESS A KEY'S VALUE OF THE NEW OBJECT CREATED
//       'UK'
