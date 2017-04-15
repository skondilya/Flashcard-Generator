var BasicCard = require("./flashcard.js");
var ClozeCard = require("./cloze.js");

var titanic= new ClozeCard("The movie Titanic got eleven oscars", "eleven");
var airline = new ClozeCard("Lufthansa is the name of the German airline.", "Lufthansa");
var dragonflies = new ClozeCard("Dragonflies prefer to eat mosquitoes", "mosquitoes");
var newYork = new ClozeCard("The former name of New York is New Amsterdam", "New Amsterdam");
var pitta = new ClozeCard("Pitta bread originate from the country of Greece", "Greece");

var oilCompany = new BasicCard("What is the biggest oil company in the United States?", "Exxon Mobil");
var flag = new BasicCard("The American flag has got how many stars?", "fifty");
var timeZone = new BasicCard("How many time zones are there in the world?", "Twenty-four");
var state = new BasicCard("What is the largest state of the United States?", "Alaska");
var cactus = new BasicCard("From which cactus is tequila made?", "Agave");

console.log(titanic.front);
console.log(titanic.back);

clozeCards= [];
clozeCards.push(titanic);
clozeCards.push(airline);
clozeCards.push(dragonflies);
clozeCards.push(newYork);
clozeCards.push(pitta);

basicCards=[];
basicCards.push(oilCompany);
basicCards.push(flag);
basicCards.push(timeZone);
basicCards.push(state);
basicCards.push(cactus);

module.exports = clozeCards;
module.exports = basicCards;

// exports.myBands = {
//   punk: "Green Day",
//   rap: "Run DMC",
//   classic: "Led Zeppelin"
// };

// exports.mySongs = {
//   punk: "Green Day",
//   rap: "Run DMC",
//   classic: "Led Zeppelin"
// };

// for (var key in bandList) {

//   // If the genre matches the key then print that band.
//   if (key === genre || genre === undefined) {
//     console.log("A " + key + " band is " + bandList[key] + ".");
//   }
// }

// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

// var firstPresident = new BasicCard(
// "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 
// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
// "George Washington was the first president of the United States.", "George Washington");
// // "George Washington"
// console.log(firstPresidentCloze.cloze); 
// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

