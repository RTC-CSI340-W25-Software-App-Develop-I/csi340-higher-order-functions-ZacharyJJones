// 1. Introduction to Higher Order Functions
// Callback function definition

function functionToCallback() {
	console.log("This is the callback function! It has been ran!");
}

// Higher Order Function definition

function yeWhoTakesCallbacks(callback) {
	console.log("H.I.G.H.E.R. O.R.D.E.R. F.U.N.C.T.I.O.N.");
	return callback();
}

// Pass the Higher Order Function the Callback function as an argument
yeWhoTakesCallbacks(functionToCallback);

// Example data for 2 and 3
const brunchMenu = [
	"eggs benedict",
	"huevos rancheros",
	"fried chicken & waffle",
	"fried egg sandwich",
];
const brunchPrices = [15.0, 16.0, 18.0, 12.0];

// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array
const uppercaseMenu = brunchMenu.map((x) => x.toUpperCase());
console.log(uppercaseMenu);

// Filter - Returns a new array with items that pass the condition in the callback
const cheaperMenuPrices = brunchPrices.filter((x) => x < 17);
console.log(cheaperMenuPrices);
