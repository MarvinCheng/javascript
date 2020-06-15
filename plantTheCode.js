/**
 * Determines how many rows and columns your garden will
 * need to be closest to a square given a number of seeds.
 *
 * @param {number} seedCount - The number of seeds in your
 * seed packet.
 * @return {array} - [rows, columns] needed for your grid
 * layout (for example [4, 5] represents a 4 row x 5 column
 * grid)
 */

function grid(seedCount) {
	/* Enter your solution here! */
	const row = Math.ceil(Math.sqrt(seedCount));
	const column = Math.ceil(seedCount/row);
	return [row, column];
}

console.log(grid(20));


/**
 * The following represents all your plants' locations
 * in your garden and whether they need water.
 *

/**
 * Write a function that takes in your array of plants and
 * returns a new array of garden locations you should water.
 *
 * @param {array} plants - Your array of plants.
 * @return {array} - An array of garden locations you should
 * water.
 */

const plant_1 = {
	gardenLocation: [1, 1],
	needsWater: true
};

const plant_2 = {
	gardenLocation: [1, 2],
	needsWater: false
};

const plant_3 = {
	gardenLocation: [2, 1],
	needsWater: false
};

const plant_4 = {
	gardenLocation: [2, 2],
	needsWater: true
};

const plants = [plant_1, plant_2, plant_3, plant_4];



function whereToWater(plantsArray) {
	/* Enter your solution here! */
	return plantsArray.reduce((acc, curr) => {
		if(curr.needsWater){
			acc.push(curr.gardenLocation);
		}
		return acc;
	}, []);
}

console.log(whereToWater(plants));


// Give your plants CO2 by talking to them.
// Complete the following function that converts any string into Plant-Latin so that your plants can understand you.
//
// 	NOTES: Plant-Latin has different vowels than we do.
// 	Append "tiva" after every vowel "a",
// 	"llia" after every vowel "e",
// 	"mus" after every vowel "i",
// 	"phylum" after every vowel "o",
// 	and "rea" after every vowel "u".
// 	For example: "I love water!" becomes "Imus lophylumvellia wativatelliar!"
//

function translatePlantLatin(message) {
	/* Enter your solution here! */
	const vowel = {
		a: 'tiva',
		e: 'llia',
		i: 'mus',
		o: 'phylum',
		u: 'rea',
	};
	const result = message.split(" ").map(word =>{
		return word.split("").map(char=>{
			const lowercase = char.toLowerCase();
			if(vowel[lowercase]){
				return char + vowel[lowercase];
			}
			return char.toLowerCase();
		}).join("");
	});
	return result.join(" ");
}

console.log(translatePlantLatin("I love water!"));
console.log(translatePlantLatin("hello world"));
console.log(translatePlantLatin("Community College"));
// helliallophylum wophylumrld
// helliallophylum wophylumrld
// Cophylummmureanimusty Cophylumllelliagellia
// Cophylummmureanimusty Cophylumllelliagellia
// Imus lophylumvellia wativatelliar!
// Imus lophylumvellia wativatelliar!


/**
 * Returns a 2D array representing all seeds in a grid of size
 * row x cols.
 *
 * @param {array} seeds - Array of the Seeds in your packet.
 * @param {number} rows - The number of rows.
 * @param {number} cols = The number of columns.
 * @return {array} - 2D array representing grid of planted Seeds.
 */

function grid2(seeds, rows, cols) {
	/* Enter your solution here! */
	const result = new Array(rows);

	for (let i = 0; i < rows; i++) {
		result[i] = new Array(cols);
	}
	let pointer = 0;
	for(let i=0;i<rows;i++){
		for(let j=0; j<cols; j++){
			result[i][j] = seeds[pointer];
			pointer++;
		}
	}
	return result;
}


console.log(grid2(["seed1","seed2","seed3","seed4","seed5","seed6","seed7","seed8"],4,2));


/**
 * Converts a message from Plant-Latin.
 * @param {string} message - The Plant-Latin message to be translated.
 * @return {string} - Translated message.
 */

function translate(message) {
	const vowelReplacements = {
		tiva: "a",
		llia: "e",
		mus: "i",
		phylum: "o",
		rea: "u"
	};
	// helliaativalth
	Object.keys(vowelReplacements).forEach(vowel=>{
		const regex = new RegExp(vowel,'gim');
		if(message.match(regex)){
			message = message.replace(regex, "");
		}
	});
	return message;
}

/**
 * The Plant class has an instance property called message
 * which is a string. The Plant's message is in Plant-Latin.
 * Write a function that takes in an array of Plants, a message
 * in human language, and returns all the Plants whose Plant-Latin
 * matches the message.
 *
 * @param {array} plants - Array of Plants to be searched
 * @param {string} message - The message in human language to search for
 * @return {array} - Array of Plants whose Plant-Latin translates to message
 */

function searchPlantsForMessage(plants, message) {
	/* Enter your solution here! */
	const regex = new RegExp(message);
	const result = [];
	for(const plant of plants){
		const translated = translate(plant.message);
		if(translated.match(regex)){
			result.push(plant);
		}
	}
	return result;
}

const plants2 = [
	{message: "imus ativam helliaativalthy"},
	{message: "helliaativalthimuselliast"},
	{message: "helliaativalth"},
	{message: "hellialp"},
	{message: "imus ativam helliaativalthy"},
	{message: "hellialp"},
	{message: "hellialp"},
];

console.log(searchPlantsForMessage(plants2, "healthy"));


/**
 * The Plant class
 */

var Plant = class Plant {
	/**
	 * @param {number} height - height in number of inches
	 * @param {string} health - string of either "below average", "average", or
	 * "above average
	 */
	constructor(height, health) {
		this.height = height;
		this.health = health;
	}
}

/**
 *
 * Write a function that passes in an array of Plants and
 * orders the array from shortest Plant to tallest.
 * If two heights are the same, then order by least healthiest
 * to healthiest.
 *
 * @param {Plant[]} plants - Array of Plants
 * @return {array} - Array of Plants ordered from shortest
 * to tallest.
 */

function reorderPlants(plants) {
	/* Enter your solution here! */
	return plants.sort((a,b) => {
		let sort = a.height - b.height;
		if(sort === 0){
			const healthObj = {'below average': 0, 'average': 1, 'above average': 2};
			return healthObj[a.health] - healthObj[b.health];

		}
		return sort;
	})
}

console.log(reorderPlants([
	{height: 23, health: "average"},
	{height: 3, health: "above average"},
	{height: 15, health: "below average"},
	{height: 15, health: "average"},
	{height: 15, health: "above average"},
	{height: 24, health: "above average"},
	{height: 4, health: "below average"},
	{height: 4, health: "above average"}]));


async function findPlantLocations(plantName, endpointUrl) {
	/* Enter your solution here! */
	let result = "[['tomato', 'tomato', 'cucumber'],['tomato', 'tomato', 'cucumber'],['green-peppers'," +
		" 'green-peppers', 'cucumber'],['red-peppers', 'red-peppers', 'cucumber'],['cilantro', 'kale', 'kale'],['cilantro', 'kale', 'kale']]";
	// result = await fetch(endpointUrl).then(resp=>{
	// 	console.log(resp);
	// 	if(resp.ok){
	// 		return resp.json();
	// 	}
	// }).then(json => JSON.parse(json["garden-2019"].replace(/\'/g, "\"")).catch(err=> console.error(err));
	const arr = JSON.parse(result.replace(/\'/g, "\""));
	console.log(arr);
	const grid = [];
	arr.forEach((row, idx) => {
		for(const [cidx, r] of row.entries()){
			if(r === plantName){
				grid.push([idx,cidx]);
			}
		}
	});
	return grid;
}

console.log(findPlantLocations("kale", ""));


/**
 * Below is an example of the input plantData. Actual values may vary.
 *
 * {
 *  "tomato": {
 *    "nutrients-required": ['nitrogen', 'calcium', 'magnesium'],
 *    "grams-food-per-plant": 3, // amount of plant food needed in grams per plant
 *    "current-count": 6 // amount of plants currently in your garden
 *  },
 *    "blueberries": {
 *    "nutrients-required": ['nitrogen', 'phosphorus', 'potassium', 'sulfur', 'boron'],
 *    "grams-food-per-plant": 2,
 *    "current-count": 4
 *  },
 *    "chard": {
 *    "nutrients-required": ['phosphorus', 'potassium', 'calcium', 'magnesium', 'cobalt', 'iron'],
 *    "grams-food-per-plant": 2,
 *    "current-count": 8
 *  }
 * }
 */

var BasePlantFood = class BasePlantFood {
	constructor() {
		this.nutrients = ["nitrogen", "phosphorus", "potassium", "calcium"];
	}

	getAmountNeeded(count, grams) {
		return count * grams;
	}
}

/**
 * Create a class CustomPlantFood that extends the BasePlantFood class.
 * It should initialize with its additional nutrients required.
 */

var CustomPlantFood = class CustomPlantFood extends BasePlantFood {
	/* Enter your solution here! */
	constructor(name, grams, count){
		super();
		this.name = name;
		this.count = count;
		this.grams = grams;
	}
	/**
	 * Write a function that adds nutrients to the base plant food.
	 * Any nutrients already included in the base plant food should
	 * not be added twice.
	 *
	 * @param {array} nutrients - array of strings of nutrient names
	 */

	addNutrients(nutrients) {
		/* Enter your solution here! */
		for(const nutrient of nutrients){
			if(this.nutrients.indexOf(nutrient) === -1){
				this.nutrients.push(nutrient);
			}
		}
	}
};

/**
 *
 * Write a function that determines the amount of each custom
 * plant food you'll need based off the provided plantData object.
 * For each type of plant food, create a new instance of the
 * CustomPlantFood class.
 *
 * @return {array} - Array of objects {food: CustomPlantFood, gramsNeeded: number}
 */

function determineCustomPlantFoods(plantData) {
	/* Enter your solution here! */
	const result = [];
	const plantFood = {};
	for(let [key, value] of Object.entries(plantData)){
		console.log(value);
		const plant = new CustomPlantFood(key, )
		// console.log(key, value);
	}
}

const plantData = {
	"tomato": {
		"nutrients-required": ['nitrogen', 'calcium', 'magnesium'],
		"grams-food-per-plant": 3, // amount of plant food needed in grams per plant"
		"current-count": 6 // amount of plants currently in your garden
	},
    "blueberries": {
		"nutrients-required": ['nitrogen', 'phosphorus', 'potassium', 'sulfur', 'boron'],
		"grams-food-per-plant": 2,
		"current-count": 4
  	},
    "chard": {
		"nutrients-required": ['phosphorus', 'potassium', 'calcium', 'magnesium', 'cobalt', 'iron'],
		"grams-food-per-plant": 2,
		"current-count": 8
  	}
 };

console.log(determineCustomPlantFoods(plantData));
