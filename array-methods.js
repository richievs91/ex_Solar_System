var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");


/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(planet) {
	el.innerHTML += planet + " "
});
console.log("planets:", planets);


/*Use the map method to create a new array where the first letter of 
each planet is capitalized*/

var planetFirstLetter = planets.map(function(planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log("planetFirstLetter:", planetFirstLetter);


/*Use the filter method to create a new array that contains planets 
with the letter 'e'*/

var ePlanets = planets.filter(function(planet) {
	return planet.includes('e');
});
console.log("Planets with Letter 'e': ", ePlanets);


/*Use the reduce method to create a sentence from the words in the \
following array*/

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sent = document.getElementById("sentence");

var reduceSentence = words.reduce(function(total, word) {
	return total + " " + word;
});
console.log("Full Sentence: ", reduceSentence);


































