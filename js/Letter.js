//xtring variable to store user guessed letter
var guessedletter = "";

//letter constructor
var Letter = function (letter) {
	this.letter = letter;
	this.guessed = false;

	/*A function that returns the underlying character if the letter has been guessed, 
	/or a placeholder (like an underscore) if the letter has not been guessed*/
	this.returnChar = function () {
		if (guessedletter == this.letter) {
			return guessedletter;
		} else {
			return "-";
		}
	};

	/*A function that takes a character as an argument and checks it against the underlying character, 
	updating the stored boolean value to true if it was guessed correctly*/
	this.userGuess = function (char) {
		if (this.letter.indexOf(char) > -1) {
			guessedletter = char;
			this.guessed = true;
		}
		return this.guessed;
	};

};

//export for Letter constructor
module.exports = Letter;

