// Exercise (instructions)
// 1. Why is the output on the console in the wrong order? Why does step 4 currently happen before step 3?
//    ANSWER: bc steps 1,2 and 4 are sync & 3 is async so it runs last!
// 2. Fix the code above so that step 3 and step 4 are in the right order.
//    ANSWER: add lines 31-33 & comment out line 48 (bc now we are callining it in promise chain)

const chopApples = () => {
	console.log("step 1 - chop apples and put them in a dish");
};

const mixCrumble = () => {
	console.log(
		"step 2 - mix butter, sugar and flour until crumbly, spread over the apples"
	);
};

const bakeCrumble = () => {
	return (
		new Promise((resolve, reject) => {
			const burnt = false;

			if (burnt) {
				reject("error - Oh no, burnt crumble!");
			} else {
				resolve("step 3 - Perfect golden crumble!");
			}
		})
			.then((bakedCrumble) => {
				console.log(bakedCrumble);
			})
			// .then(() => {
			// 	enjoyCrumble();
			// })
			.catch((burntCrumbleErr) => {
				console.log(burntCrumbleErr);
			})
	);
};

const enjoyCrumble = () => {
	console.log("step 4 - Delicious crumble - even better with custard!");
};

const makeCrumble = () => {
	chopApples();
	mixCrumble();
	bakeCrumble();
	enjoyCrumble(); // -> for Q2, comment it out, as now running in promise chain
};

makeCrumble(); // Output Q1:
//                step 1 - chop apples and put them in a dish
//                step 2 - mix butter, sugar and flour until crumbly, spread over the apples
//                step 4 - Delicious crumble - even better with custard!
//                step 3 - Perfect golden crumble!

//                Output Q2:
//                step 1 - chop apples and put them in a dish
//                step 2 - mix butter, sugar and flour until crumbly, spread over the apples
//                step 3 - Perfect golden crumble!
//                step 4 - Delicious crumble - even better with custard!
