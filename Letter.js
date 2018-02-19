
var guessedletter = "" ;

var Letter = function(letter){
	this.letter = letter;
	this.guessed = false;

	this.returnChar = function ()
	{
		console.log("LI " +guessedletter + ", " + this.letter);
		if(guessedletter == this.letter)
		{
			return guessedletter;
		}
		else
		{
			return "-";
		}
	};
	this.userGuess = function(char)
	{
		//if(this.wordToFind.indexOf(char) > -1 )
		if(this.letter.indexOf(char) > -1)
		{
			guessedletter = char;
			this.guessed = true;
		}
		return this.guessed;
	};

};

//export for Letter constructor
module.exports=Letter;


/*var letter1= new Letter("i");
console.log(letter1.userGuess("i"));
console.log(letter1.returnChar());*/