//reuire for inquirer and word constructor
var inquirer = require('inquirer');
var Word = require("./Word.js");
//words to guess
var words = ["australia", "brazil", "canada", "denmark", "egypt", "france", "india", "chile", "singapore"];
var guessesLeft = 10;
var wordToFind = "";
var wordNew = "";
var flag = true;
var win=0;
var loss=0;

//game start function
function start() {
	//a randomly picked word for user to guess from the array of words
	wordToFind = words[Math.floor(Math.random() * words.length)];
	wordNew = "";
	guessesLeft = 10;
	flag = true;
	//function call to display word to guess
	displayWord();
}

//fucnction to display word in hyphens for the user to guess
function displayWord() {
	//a random word is stored in word constructor
	var word = new Word(wordToFind);
	//hyphens displayed before user guess for the length of the word to find
	if (flag) {
		wordNew = (word.wordFind()).replace(/,/g, "");
		console.log(wordNew);
	}
	if (wordNew != "") {
		//Prompts the user for each guess and keeps track of the user's remaining guesses
		inquirer.prompt([{
				type: "input",
				message: "Guess a Letter! (Country Name):  ",
				name: "userguess"
			}])
			.then(function (response) {
				//if user guesses a letter
				if (response.userguess != "") {
					//calls a method from word constructor to check with word to find
					if (word.letterGuess(response.userguess)) {
						console.log("CORRECT!!!");
						wordNew = (word.wordFind()).replace(/,/g, "");
						console.log(wordNew);
					} else {
						console.log("INCORRECT!!!");
						guessesLeft--;
						console.log("Guesses Remaining " + guessesLeft);
						console.log(wordNew);
					}
					//keeping track of guesses and displaying new word or finding letters in the same word
					if (guessesLeft > 0 && wordToFind != wordNew) {
						flag = false;
						displayWord();
					} else if (guessesLeft > 0 && wordToFind == wordNew) {
						console.log("You got it correct!!! Next Word");
						win++;
						start();
					} else if (guessesLeft === 0) {
						console.log("Guesses over!!! Try new word now");
						loss++;
						start();
					}

				} else {
					//when nothing is enteres,game exit confirm is shown
					console.log("Do you want to exit Game???");
					inquirer.prompt([{
							type: "confirm",
							message: "Are you sure:",
							name: "confirm",
							default: true
						}])
						.then(function (result) {
							//if game exit confirm
							if (result.confirm) {
								console.log("\nYou are exiting the Game!!!");
								console.log("\nYour Score! wins: "+ win +" losses: "+ loss );
							} else {
								//if user confirms no, he continues with same word
								console.log("Continue guessing for your word!!!");
								console.log(wordNew);
								displayWord();
							}

						});
				}
			});
	}
}

//game start function call
start();