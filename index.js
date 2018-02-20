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

//fucntion to display instructions
function game(){
	console.log("____________________________________");
	console.log("WELCOME TO HANGMAN - COUNTRY NAMES");
	console.log("____________________________________");
	console.log("Instructions :\n* Press any letter & Enter to find the word\n* Press Enter to Exit the Game");
	console.log("____________________________________");
	//function call to start the game
	start();
}

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
		console.log("WORD TO FIND:  " + wordNew );
		//console.log(wordNew);
	}
	if (wordNew != "") {
		//Prompts the user for each guess and keeps track of the user's remaining guesses
		inquirer.prompt([{
				type: "input",
				message: "Guess a Letter:  ",
				name: "userguess"
			}])
			.then(function (response) {
				//if user guesses a letter
				if (response.userguess != "") {
					//calls a method from word constructor to check with word to find
					if (word.letterGuess(response.userguess)) {
						console.log("*********** CORRECT!!! **************");
						wordNew = (word.wordFind()).replace(/,/g, "");
						console.log("WORD TO FIND:  " +wordNew);
					} else {
						console.log("*********** INCORRECT!!! ************");
						guessesLeft--;
						console.log("_____________________________________");
						console.log(" Guesses Remaining: " + guessesLeft );
						console.log("*************************************");
						console.log("WORD TO FIND:  " +wordNew);
					}
					//keeping track of guesses and displaying new word or finding letters in the same word
					if (guessesLeft > 0 && wordToFind != wordNew) {
						flag = false;
						displayWord();
					} else if (guessesLeft > 0 && wordToFind == wordNew) {
						console.log("______________________________________________________");
						console.log("********** You got it correct!!! Next Word ***********");
						console.log("******************************************************");
						win++;
						start();
					} else if (guessesLeft === 0) {
						console.log("______________________________________________________");
						console.log("********** Guesses over: ("+ wordToFind.toUpperCase() +") - Try new word now");
						console.log("*******************************************************");
						loss++;
						start();
					}

				} else {
					//when nothing is enteres,game exit confirm is shown
					console.log("__________________________________");
					console.log("Do you want to exit Game???");
					console.log("**********************************");
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
								console.log("**********************************");
								console.log("\nYour Score - wins: "+ win +" losses: "+ loss );
								console.log("_____________________________________________________");
								console.log("______________________By: PRIYA______________________");
							} else {
								//if user confirms no, he continues with same word
								console.log("__________________________________");
								console.log("Continue guessing for your word !!!");
								console.log("**********************************");
								console.log("WORD TO FIND:  " +wordNew);
								flag = false;
								displayWord();
							}

						});
				}
			});
	}
}

//game function call
game();