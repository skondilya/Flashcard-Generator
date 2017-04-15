// Grabs the question variables
var question = require("./question.js");
// dependency for inquirer npm package and 
var inquirer = require("inquirer");

//variable to keep the score 
var correctCount = 0;
var incorrectCount = 0;

//function for asking which game you want to play 
var startQuiz = function() {
    inquirer.prompt([{
        name: "quiz",
        type: "list",
        message: "What quiz will you play?",
        choices: ["flashCard","ClozeCard"]
    }]).then(function(response) {
        if (response.quiz === "flashCard") {
            basicQuiz();
        } else {
            clozeQuiz();
        }
    });
};

// basic flashcard function 
var flashcardCount=0;
var basicQuiz = function() {
	
	if (flashcardCount < basicCards.length) {
		inquirer.prompt([{
		    name: "question",
		    message: basicCards[flashcardCount].front
		}]).then(function(response) {
		    //console.log(response);
		    var answer = response.question.toLowerCase().trim();

		    if (answer === basicCards[flashcardCount].back.toLowerCase().trim()) {
		        console.log("Correct! " + basicCards[flashcardCount].back + " is the correct answer.");
		        correctCount++;
		    } else {
		        console.log("Incorrect." + basicCards[flashcardCount].back + " is the correct answer.");
		        incorrectCount++;
		    }
		    flashcardCount++;
		    basicQuiz();
		});
	} else {
        console.log("Game over");
        console.log("No. of correct answers " + correctCount);
        console.log("No. of incorrect answers " + incorrectCount);
        playAgain();
    }
}

// cloze card function 
var clozeCount=0;
var clozeQuiz = function() {

	if (clozeCount < clozeCards.length) {
		inquirer.prompt([{
		    name: "question",
		    message: clozeCards[clozeCount].partialText
		}]).then(function(response) {
		    var answer = response.question.toLowerCase().trim();
		    //console.log(response);
		    if (answer === clozeCards[clozeCount].cloze.toLowerCase().trim()) {
		        console.log("Correct !! " + clozeCards[clozeCount].cloze + " is the correct answer.");
		        correctCount++;
		    } else {
		        console.log("Incorrect. " + clozeCards[clozeCount].cloze + " is the correct answer.");
		        incorrectCount++;
		    }
		    clozeCount++;
		    clozeQuiz();
		});
	} else {
        console.log("Game over");
        console.log("No. of correct answers " + correctCount);
        console.log("No. of incorrect answers " + incorrectCount);
        playAgain();
    }
}

//function checks if the player wannts to play again or quit 
var playAgain = function() {
    inquirer.prompt([{
        name: "again",
        type: "list",
        message: "Would you play another quiz?",
        choices: ["Yes", "No"]
    }]).then(function(response) {
        if (response.again === "Yes") {
            clozeCount = 0;
            correctCount = 0;
            incorrectCount = 0;
            flashcardCount = 0;
            startQuiz();
        } else {
            console.log("Thanks for playing with us!");
        }
    });
}
//calling the quiz function 
startQuiz();



