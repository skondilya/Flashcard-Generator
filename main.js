var question = require("./question.js");
var inquirer = require("inquirer");

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


basicCount=0;
var basicQuiz = function() {
	
	if (basicCount < basicCards.length) {
		inquirer.prompt([{
		    name: "question",
		    message: basicCards[basicCount].front
		}]).then(function(response) {
		    //console.log(response);
		    var ans = response.question.toLowerCase().trim();

		    if (ans === basicCards[basicCount].back) {
		        console.log("Correct! " + basicCards[basicCount].back + " is the correct answer.");
		    } else {
		        console.log("Incorrect." + basicCards[basicCount].back + " is the correct answer.");
		    }
		    basicCount++;
		    basicQuiz();
		});
	}
}

clozeCount=0;
var clozeQuiz = function() {

	if (clozeCount < clozeCards.length) {
		inquirer.prompt([{
		    name: "question",
		    message: clozeCards[clozeCount].text
		}]).then(function(response) {
		    var ans = response.question.toLowerCase().trim();
		    //console.log(response);
		    if (ans === clozeCards[clozeCount].cloze) {
		        console.log("Correct !! " + clozeCards[clozeCount].cloze + " is the correct answer.");
		    } else {
		        console.log("Incorrect. " + clozeCards[clozeCount].cloze + " is the correct answer.");
		    }
		    clozeCount++;
		    clozeQuiz();
		});
	}
}

startQuiz();



