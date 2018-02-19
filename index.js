var inquirer = require('inquirer');
var Word = require("./Word.js");

var words = ["australia", "brazil", "canada", "denmark", "egypt", "france", "india"];
var guessesLeft = 10;
var wordToFind = "" ;
var wordNew = "";
var flag= true;

function start()
{
	wordToFind = words[Math.floor(Math.random() * words.length)];	
	guessesLeft =10;
	flag=true;
	displayWord();
}

function displayWord() {
	var word = new Word(wordToFind,wordNew);
	//console.log("first " + wordNew);
	if(flag)
	{
		wordNew = word.wordFind();
		console.log(wordNew);
	}	
	if (wordNew != "") {
		inquirer.prompt([{
				type: "input",
				message: "Guess a Letter! (Country Name):  ",
				name: "userguess"
			}])
			.then(function (response) {
				if (response.userguess != "") {
					//console.log("got response  " + word.letterGuess(response.userguess));
					if(word.letterGuess(response.userguess))
					{
						console.log("CORRECT!!!");
						wordNew = word.wordFind();
						console.log(wordNew);
					}
					else
					{
						console.log("INCORRECT!!!");
						guessesLeft--;
						console.log("Guesses Remaining " + guessesLeft);
						console.log(wordNew);
					}
					if(guessesLeft > 0 && wordToFind != wordNew)
					{
						flag=false;
						displayWord();
					}
					else if(guessesLeft === 0)
					{
						console.log("Guesses over!!! Try new word now");
						start();
					}
					else if (wordToFind === wordNew)
					{
						console.log("You got it correct!!! Next Word");
						start();
					}
				}
				else{
					console.log("Do you want to exit Game???");
					inquirer.prompt([{
						 type: "confirm",
					      message: "Are you sure:",
					      name: "confirm",
					      default: true
					}])
					.then(function (result) {
						if (result.confirm) {
					      console.log("\nYou are exiting the Game!!!");
					    }
					    else {
					    	console.log("You Got a new word to guess!!!");
					    	start();
					    }

					});
				}
			});
	}
}

start();

