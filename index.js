var inquirer = require('inquirer');
var Word = require("./Word.js");

var words = ["australia", "brazil", "canada", "denmark", "egypt", "france", "india"];
var guessesLeft = 10;
var wordToFind = "" ;

function start()
{
	wordToFind = words[Math.floor(Math.random() * words.length)];	
	guessesLeft =10;
	displayWord();
}

function displayWord() {
	var word = new Word(wordToFind);
	var wordNew = word.wordFind();
	console.log(wordNew);
	if (wordNew != "") {
		inquirer.prompt([{
				type: "input",
				message: "Guess a Letter! (Country Name):  ",
				name: "userguess"
			}])
			.then(function (response) {
				//empty entry shd be wrong
				if (response.userguess != "") {
					//console.log("got response  " + word.letterGuess(response.userguess));
					if(word.letterGuess(response.userguess))
					{
						console.log("CORRECT");
						console.log(word.wordFind());
					}
					else
					{
						console.log("INCORRECT");
						guessesLeft--;
						console.log("Guesses Remaining " + guessesLeft);
					}
					if(guessesLeft > 0)
					{
						displayWord();
					}
					else if(guessesLeft == 0)
					{
						console.log("Guesses over! Try new word now");
						start();
					}
					else
					{
						console.log("You got the word correct");
						start();
					}
				}
				else{
					console.log("Do you want to exit Game?");
					inquirer.prompt([{
						 type: "confirm",
					      message: "Are you sure:",
					      name: "confirm",
					      default: true
					}])
					.then(function (result) {
						if (result.confirm) {
					      console.log("\nYou are exiting the Game");
					    }
					    else {
					    	console.log("You Got a new word to guess");
					    	start();
					    }

					});
				}
			});
	}
}

start();

