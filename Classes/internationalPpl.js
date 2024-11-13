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
